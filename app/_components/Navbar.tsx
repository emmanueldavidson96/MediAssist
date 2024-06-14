import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

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
    <nav className='w-full h-[80px] flex items-center justify-between shadow-sm p-4'>
        <div className='w-fit h-fit flex gap-16 items-center'>
            <h1 className='text-3xl font-black text-slate-400'>Medi<span className='text-blue-600'>Assist</span></h1>
            <div className='md:flex gap-6 hidden '>
                {
                    MenuLinks.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className='text-sm hover:text-blue-500 hover:scale-105 transition-all ease-in-out'>
                                {link.name}                        
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <Button>Get Started</Button>
        
    </nav>
  )
}
