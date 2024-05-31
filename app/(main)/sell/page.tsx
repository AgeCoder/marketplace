import SellProductForm from '@/app/components/SellProductForm';
import prisma from '@/app/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

async function GetData(userId: string) {
  const userData = await prisma.user.findUnique({
    where: { id: userId },
    select: { stripeConnectedLinked: true }
  })

  return userData
}

const page = async () => {

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const UserData = await GetData(user?.id as string)

  if (UserData?.stripeConnectedLinked == false) {
    redirect('/billing')
  }

  return (
    <section className='max-w-7xl mx-auto px-4 md:px-8 mb-9'>
      <SellProductForm />
    </section>
  )
}

export default page
