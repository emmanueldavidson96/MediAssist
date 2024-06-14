import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const MenuLinks = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Explore",
            path: "/"
        },
        {
            id:3,
            name: "Contact Us",
            path: "/"
        }
    ]
  return (
    <nav className='w-[90%] m-auto h-[80px] flex items-center gap-16'>
        <h1 className='text-3xl font-black text-slate-400'>Medi<span className='text-blue-600'>Assist</span></h1>
        <div className='flex gap-6'>
            {
                MenuLinks.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className='text-sm hover:text-blue-500'>
                            {link.name}                        
                        </Link>
                    )
                })
            }
        </div>
    </nav>
  )
}
