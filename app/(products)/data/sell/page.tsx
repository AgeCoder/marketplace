import SellProductForm from '@/app/components/SellProductForm';
import { unstable_noStore } from 'next/cache';

import React from 'react'

const page = async () => {
  unstable_noStore();
  return (
    <section className='mx-auto mb-9'>
      <SellProductForm />
    </section>
  )
}

export default page
