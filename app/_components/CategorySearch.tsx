"use client";
import React from 'react'
import InputField from './_ui/InputField'
import { categorySearchFields } from '../data'
import Image from 'next/image';

export default function CategorySearch() {
  return (
    <div className='flex items-center flex-col mb-10 gap-4 w-[90%] m-auto'>
        <h2 className='font-bold text-4xl tracking-wide '>Search A <span className='text-blue-500'>Doctor</span></h2>
        <h2 className='text-gray-600 text-lg'>Search for a Doctor and Book Appointments and Experiences in one click</h2>
        <InputField/>
        <div className='w-[80%] h-fit flex flex-wrap gap-6'>
            {
                categorySearchFields.map((docCategory, index) => {
                    return (
                        <div className='h-[180px] w-[180px] bg-blue-300 gap-4 cursor-pointer justify-center flex items-center shadow-sm flex-col rounded-lg p-6' key={index}>
                            <docCategory.icon size={40} color='blue' />
                            <p className='text-base font-bold'>{docCategory.text}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
