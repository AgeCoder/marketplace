"use client"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'
import { SubmitButton } from '../SubmitButton'
import { useFormState } from 'react-dom'
import { State, UpdateUserInfo } from '@/app/action'
import { toast } from 'sonner'

interface user{
  firstName: string,
  lastName: string,
  email: string,
  userId: string,
}

export default function Settings({ firstName, lastName, email, userId }: user) {
  const InitialState: State = { status:undefined}
  const [state, fromAction] = useFormState(UpdateUserInfo, InitialState)
  
  useEffect(() => {
    if (state.status == "success") {
      toast.success("Your Profile was Updated")
    }
    if (state.status == "error") {
      toast.error("Something went wrong")
    }
  }, [state])
  return (
    <div className='flex flex-col mx-auto max-w-7xl'>
      <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Change Your personal information</CardDescription>
      </CardHeader>

      <form action={fromAction}>
        <CardContent className='flex flex-col gap-y-5'>
          <div className='flex flex-col gap-1'>
            <Label className='text-base font-semibold'>FirstName</Label>
            <Input type="text" name='firstName' defaultValue={firstName} required minLength={3} />
            {state.errors?.["firstName"]?.[0] ?? (
              <p className='text-red-500'>{state.errors?.["firstName"]?.[0]}</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <Label className='text-base font-semibold'>LastName</Label>
            <Input type="text" name='lastName' defaultValue={lastName} required minLength={3} />
            {state.errors?.["lastName"]?.[0] ?? (
              <p className='text-red-500'>{state.errors?.["lastName"]?.[0]}</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <Label className='text-base font-semibold'>Email</Label>
            <Input type="email"  defaultValue={email} disabled />
          </div>
          <div className='flex flex-col gap-1'>
            <Label className='text-base font-semibold'>UserId</Label>
            <Input type="url"  defaultValue={userId} disabled />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton title='Update Your Profile'/>
        </CardFooter>
      </form>
                  
    </div>
  )
}
