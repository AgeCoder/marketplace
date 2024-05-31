import Settings from '@/app/components/Settings/Settings';
import prisma from '@/app/lib/db';
import { Card } from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

async function getdata(userId:string) {
    const data = await prisma.user.findUnique({
        where:{
            id: userId
        },
        select: {
            firstName: true,
            email: true,
            lastName: true,
        }
    })
    return data
}


export default async function page() {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        throw new Error("user is not Authenticated")
    }

    const Userdata = await getdata(user.id)

  return (
      <section className='px-4 md:px-8 mx-auto max-w-7xl mb-10'>
          <Card>
              <Settings email={Userdata?.email as string}
                  firstName={Userdata?.firstName as string}
                  lastName={Userdata?.lastName as string}
                 userId={user.id }
              />

          </Card>
    </section>
  )
}
