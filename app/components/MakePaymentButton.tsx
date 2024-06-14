"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import shortid from 'shortid';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { navigate } from '../action';
import { Loader } from 'lucide-react';

async function AfterPaymentSuccess(data: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URl}/api/razorpay/after-payment/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });

    const result = await res.json();
    await navigate(result)
}

export async function MakePayment(data: any) {
    const receiptID = shortid.generate();

    const res = await fetch(`${process.env.NEXT_PUBLIC_URl}/api/razorpay/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: data.price,
            currency: 'INR',
            receipt: receiptID,
        }),
    });

    const order = await res.json();

    // console.log(order);


    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC prefix for client-side env variables
        amount: order.amount,
        currency: order.currency,
        name: 'AlightUI',
        description: data.shortSummary,
        order_id: order.id,
        handler: async (response: any) => {
            toast.success(`Payment successfulPayment ID: ${response.razorpay_payment_id} 
            wait.. Your are Been redirect`)
            await AfterPaymentSuccess(data);
        },
        notes: {
            productName: data.name,
        },
        theme: {
            color: '#3399cc',
        },
    };

    // @ts-ignore
    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', (response: any) => {
        toast.error(`Payment failed! Error: ${response.error.description}`)
        redirect('/payment/cancel')
    });
    rzp1.open();
}

export default function MakePaymentButton({ data }: any) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            await MakePayment(data);
        } catch (error) {
            console.error('Payment failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-3 w-full'>
            <Button onClick={handleClick} className='w-full' disabled={loading}>
                {loading ? <span className='flex gap-1'><Loader className='animate-spin' /> Loading...</span> : 'Buy now'}
            </Button>
        </div>
    );
}
