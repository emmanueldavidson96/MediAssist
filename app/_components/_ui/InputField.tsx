import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

export default function InputField() {
  return (    
    <div className="relative">
        <label htmlFor="Search" className="sr-only"> Search </label>
        <input
            type="text"
            id="Search"
            placeholder="Search for a doctor..."
            className="w-[500px] px-4 rounded-md border-gray-400  py-6 pe-10 shadow-sm sm:text-base outline-none"
        />

        {/* <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            </button>
        </span> */}
        <Button className='bg-blue-500 hover:bg-blue-600'>
            <Search className='w-4 h-4 mr-2'/>
             Search Doctor</Button>
    </div>
  )
}
