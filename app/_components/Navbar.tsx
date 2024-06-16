"use client";
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
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
        },
        {
            id:4,
            name: "Chat With MediAI",
            path: "/"
        },
        {
            id: 5,
            name: "Make an Appointment",
            path:"/"
        },
        {
            id: 6,
            name: "Get Medication",
            path: "/"
        }
    ]

    const [scroll_position, set_scrollposition] = useState(0);
    const [header_background, set_header_background] = useState('transparent')
    const [header_text, set_header_text] = useState(false)
    
    useEffect(() => {
        const handle_scroll = () => {
        const position = window.scrollY;
        
        set_scrollposition(position);
        if (position > 20) {
            set_header_background('bg-blue-300')
            set_header_text(true)
        }
        else{
            set_header_background('transparent')
            set_header_text(false)
        }
        }

        window.addEventListener("scroll", handle_scroll)
        return () => {
        window.removeEventListener("scroll", handle_scroll)
        }
    }, [scroll_position])

  return (
    <nav className={`w-[100%] m-auto px-24 h-[80px] flex items-center justify-between shadow-sm p-4 sticky top-0 left-0 ${header_background}`}>
        <div className='w-fit h-fit flex gap-16 items-center'>
            <h1 className='text-3xl font-black text-slate-400'>Medi<span className='text-blue-500'>Assist</span></h1>
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
        <div className='w-fit h-fit flex gap-2'>
            <Link href="/login">
                <Button variant="outline" className='hover:bg-blue-500 hover:text-white border-blue-500 '>Log In</Button>
            </Link>
            <Link href="/signup">
                <Button className='bg-blue-500 hover:bg-blue-700'>Sign Up</Button>
            </Link>
        </div>
        
    </nav>
  )
}
