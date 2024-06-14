import React from 'react'
import InputField from './_ui/InputField'

export default function CategorySearch() {
  return (
    <div className='flex items-center flex-col mb-10 gap-4 w-full'>
        <h2 className='font-bold text-4xl tracking-wide '>Search A <span className='text-blue-500'>Doctor</span></h2>
        <h2 className='text-gray-600 text-lg'>Search for a Doctor and Book Appointments and Experiences in one click</h2>
        <InputField/>
    </div>
  )
}
