"use client"
import React, { useState } from 'react'
import { categoryItems } from '../lib/FormCategoryitems'
import { Card, CardHeader } from '@/components/ui/card'

const FormCategory = () => {
  const [selecteCategory, setCategory] = useState<string | null>(null)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2'>
      <input value={selecteCategory ?? "template"} type='hidden' name='category' ></input>
      {categoryItems.map((item) => (
        <div className='cursor-pointer' key={item.id}>
          <Card
            onClick={() => setCategory(item.name)}
            className={selecteCategory == item.name ? "border-primary border-2 shadow-lg" : "border-primary/10 border-2"}


          >
            <CardHeader>
              {item.image}
              <h1 className='text-2xl'>{item.title}</h1>
            </CardHeader>

          </Card>
        </div>
      ))}
    </div>
  )
}

export default FormCategory
