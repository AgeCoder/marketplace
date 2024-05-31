import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { XCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='w-full h-[80vh] flex items-center justify-center'>
            <Card className='w-[370px] shadow-xl'>
                <div className='p-6'>
                    <div className='w-fill flex justify-center'>
                        <XCircle className='w-14 h-14  text-red-600 rounded-lg' />
                    </div>
                    <div className='mt-3 text-center sm:mt-4 w-full'>
                        <h3 className='font-semibold'>Payment Was Canceled</h3>
                        <p className='text-sm '>Somthing went wrong with Payment,You are not Charged, Try Again.</p>
                    </div>
                    <Button className='w-full rounded-b-lg mt-5'>
                        <Link href='/'>BACK TO HOMEPAGE</Link>
                    </Button>
                </div>
            </Card>
        </section>
    )
}

export default page
