"use client"
import { SellProducts, State } from '@/app/action'
import FormCategory from '@/app/components/FormCategory'
import { SubmitButton } from '@/app/components/SubmitButton'
import { Tiptap } from '@/app/components/Tiptap'
import { UploadDropzone } from '@/app/lib/uploadthing'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { JSONContent } from '@tiptap/react'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

const SellProductForm = () => {
    const initalState: State = { status: undefined, message: "" }
    const [json, SetJson] = useState<null | JSONContent>(null);
    const [images, Setimages] = useState<null | string[]>(null);
    const [productFile, SetProductFile] = useState<null | string>(null);
    const [state, fromAction] = useFormState(SellProducts, initalState)
    // console.log(state);
    useEffect(() => {
        if (state?.status == "success") {
            toast.success("Your Product Was Successfully Added")
            redirect("/")
        }

    }, [state])

    return (
        <Card>
            <form action={fromAction}>
                <CardHeader>
                    <CardTitle>
                        Fill in The Details About Your Product
                    </CardTitle>
                    <CardDescription>
                        Describle your product here in detail
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-7'>
                    <div className='flex flex-col gap-y-2'>
                        <Label>Name of the product</Label>
                        <Input placeholder='Name' type='text' name='name' required min={3} />
                        {state?.errors?.["name"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["name"]?.[0]}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Label>Category</Label>
                        <FormCategory />
                        {state?.errors?.["category"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["category"]?.[0]}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Label>Price</Label>
                        <Input placeholder='199 (In indian Currency ₹)' type='number' name='price' required minLength={1} />
                        {state?.errors?.["price"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["price"]?.[0]}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Label>Short Summary</Label>
                        <Textarea placeholder='Write About Your Product in Short' name='shortSummary' required minLength={12} />
                        {state?.errors?.["shortSummary"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["shortSummary"]?.[0]}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <input type="hidden" value={JSON.stringify(json)} name='description' />
                        <Label>Description</Label>
                        <Tiptap json={json} SetJson={SetJson} />
                        {state?.errors?.["description"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["description"]?.[0]}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Label>Product Image <span className='text-red-600'>*(Upload All Images at Onces)</span></Label>

                        <input type="hidden" value={JSON.stringify(images)} name='images' />
                        <UploadDropzone
                            endpoint='imageUploader'
                            onClientUploadComplete={(res) => {
                                Setimages(res.map((item) => item.url)),
                                    toast.success("Your images Was Successfully Uploaded")
                            }}
                            onUploadError={(error) => {
                                // console.log(error);
                                toast.error("Somthing went Wrong | Try again")
                            }}
                        />
                        {state?.errors?.["images"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["images"]?.[0]}</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Label>Files/code in zip <span className='text-red-600'>*(First upload to github and than download from there and upload here)</span> </Label>
                        <input type="hidden" value={productFile ?? ""} name='productfile' />
                        <UploadDropzone
                            endpoint='ProductUploader'
                            onClientUploadComplete={(res) => {
                                SetProductFile(res[0].url),
                                    toast.success("Your productfile Was Successfully Uploaded")
                            }}
                            onUploadError={(error) => {
                                // console.log(error);

                                toast.error("Somthing went Wrong | Try again")
                            }}

                        />
                        {state?.errors?.["productfile"]?.[0] && (
                            <p className='text-red-600'>{state?.errors?.["productfile"]?.[0]}</p>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton title='Add Product' />
                </CardFooter>
            </form>
        </Card>
    )
}

export default SellProductForm
