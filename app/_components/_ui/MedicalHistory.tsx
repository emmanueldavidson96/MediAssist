import React from 'react'
import { Button } from '@/components/ui/button'
import { CalendarForm } from './CalenderFormField'
export default function MedicalHistory() {
  return (
    <div className='w-[50%] h-fit flex flex-col gap-4 shadow-sm items-center p-4'>
        <h1 className='text-3xl font-bold '>Medical History Upload</h1>
        <CalendarForm/>
        
        <Button className='w-full bg-blue-500 hover:bg-blue-700'>
            Upload Medical History
        </Button>
    </div>
  )
}
