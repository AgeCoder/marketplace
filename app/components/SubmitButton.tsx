"use client"

import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import { useFormStatus } from "react-dom"

export const SubmitButton = ({ title }: { title: string }) => {

    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled className=''>
                    <Loader className="animate-spin" /> Wait...
                </Button>
            ) : (
                <Button>
                    {title}
                </Button>
            )}
        </>
    )
}

export const BuySubmitButton = ({ title }: { title: string }) => {

    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled className='w-full' >
                    <Loader className="animate-spin" /> Loading...
                </Button>
            ) : (
                <Button className='w-full' type='submit'>
                    {title}
                </Button>
            )}
        </>
    )
}