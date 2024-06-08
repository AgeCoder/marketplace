"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { z } from "zod";
import prisma from "@/app/lib/db";
import { CategoryType } from "@prisma/client";
import { redirect } from "next/navigation";

export type State = {
  status: "error" | "success" | undefined;
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

const productSchemsZod = z.object({
  name: z.string().min(3, { message: "Name should be min length of 3" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.number().min(199, { message: "price is required" }),
  shortSummary: z.string().min(12, { message: "Short Summary is required " }),
  description: z.string().min(15, { message: "Description is required" }),
  images: z.array(z.string(), { message: "Images are required" }),
  productfile: z.string().min(1, { message: "zip file is required" }),
});

const userSchemaZod = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstName Should be greater than 3" }),
  lastName: z.string().min(3, { message: "lastName Should be greater than 3" }),
});

export async function SellProducts(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("User is Not Authenticated issue in action.js");
  }

  const validateFields = productSchemsZod.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    shortSummary: formData.get("shortSummary"),
    description: formData.get("description"),
    images: JSON.parse(formData.get("images") as string),
    productfile: formData.get("productfile"),
  });

  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "somthing is wrong in your input in actionjs line 48",
    };

    return state;
  }

  const data = await prisma.product.create({
    data: {
      name: validateFields.data.name,
      category: validateFields.data.category as CategoryType,
      price: validateFields.data.price,
      shortSummary: validateFields.data.shortSummary,
      images: validateFields.data.images,
      productfile: validateFields.data.productfile,
      description: JSON.parse(validateFields.data.description),
      userId: user.id,
    },
  });

  // console.log(data);

  const state: State = {
    status: "success",
    message: "Your product was Succrfully Added",
  };

  return state;
}

export async function UpdateUserInfo(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("The user is not loggedIn");
  }

  const validateFields = userSchemaZod.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  });

  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Opps Somthing is Wron in action.js in line 99",
    };
    return state;
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName: validateFields.data?.firstName,
      lastName: validateFields.data?.lastName,
    },
  });

  const state: State = {
    status: "success",
    message: "Your profile was Succefully Updated",
  };

  return state;
}

export async function navigate(result: any) {
  if (result.message === "Email Sent Successfully") {
    redirect("/payment/success");
  } else {
    redirect("/payment/cancel");
  }
}
