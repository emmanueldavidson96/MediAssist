import React from 'react'
import imageDoc from "../../public/assets/pngimg.com - doctor_PNG15988.png";
import Image from 'next/image';

export default function Banner() {
  return (
    <section className='w-full h-fit'>
        <div className="m-auto w-[90%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                    alt=""
                    src={imageDoc}
                    width={400}
                    height={400}
                />
            </div>

            <div className="lg:py-24">
                <h2 className="text-4xl font-extrabold sm:text-4xl">Find, <span className='text-blue-500'>Interact</span> & Book Appointments with Your <span className='text-blue-500'>Doctor</span> in a <span className='text-blue-500'>specialized experience.</span></h2>

                <p className="mt-4 text-gray-600 text-sm leading-6">
                    An AI-Powered Symptom Checker and Diagnosis Assistant
                </p>

                <a
                    href="#"
                    className="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                    Explore Now
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}
