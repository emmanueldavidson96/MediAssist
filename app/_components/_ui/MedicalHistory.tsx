import React from 'react'
import { Button } from '@/components/ui/button'
import { CalendarForm } from './CalenderFormField'

export default function MedicalHistory() {
  return (
    <div className='w-[50%] h-fit flex flex-col gap-1 shadow-sm items-center p-4'>
        <h1 className='text-3xl font-bold '>Upload Medical History </h1>
        <CalendarForm/>
    </div>
  )
}
