import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='w-full h-[80vh] flex items-center justify-center'>
            <Card className='w-[370px] shadow-xl '>
                <div className='p-6'>
                    <div className='w-fill flex justify-center'>
                        <CheckCircle className='w-14 h-14  text-green-600 rounded-lg' />
                    </div>
                    <div className='mt-3 text-center sm:mt-4 w-full'>
                        <h3 className='font-semibold'>Linking Was Successfull with stripe</h3>
                        <p className='text-sm '>Your Eligible To Sell Products on AlightUI</p>
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
