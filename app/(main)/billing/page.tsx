import { LinkAccountToStripe, ViewStripeDashboard } from '@/app/action';
import { SubmitButton } from '@/app/components/SubmitButton';
import prisma from '@/app/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { unstable_noStore } from 'next/cache';
import { redirect } from 'next/navigation';
import React from 'react'


async function GetData(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            stripeConnectedLinked: true,
            connectedAccountId: true
        },
    })

    return data
}

const page = async () => {
    unstable_noStore();
    const { getUser } = getKindeServerSession();
    const user = await getUser()
    if (!user) {
        redirect('/')
    }
    const userData = await GetData(user.id);

    return (
        <section className='max-w-7xl mx-auto p-4 md:p-8'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Billing Details
                    </CardTitle>
                    <CardDescription>
                        Details regarding your payments and Transaction
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {userData?.stripeConnectedLinked === false && (
                        <form action={LinkAccountToStripe}>
                            <SubmitButton title='Link Your Account To Strip' />
                        </form>
                    )}
                    {userData?.stripeConnectedLinked === true && (
                        <form action={ViewStripeDashboard}>
                            <SubmitButton title='View Dasboard' />
                        </form>
                    )}
                </CardContent>
            </Card>

        </section>
    )
}

export default page
