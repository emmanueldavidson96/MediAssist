import Image from 'next/image'
import React from 'react'
import doctorImage from "../assets/a3618752832d002a51cb8729895a364c.jpg";

export default function BannerArea() {
  return (
    <div className='flex h-fit justify-between w-[90%] m-auto'>
        <div className='flex flex-col gap-6 w-[50%] pt-48 '>
            <h2 className='text-black text-3xl font-extrabold'>Find & Book Appointment with your Doctor In a Seamless Experience</h2>
            <p className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus 
                laboriosam, possimus illum, amet adipisci incidunt tempore corrupti qui magnam quas. 
                Nisi labore consequatur tenetur tempora. Dignissimos ea et dicta.
            </p>
            <button className='w-fit h-fit pt-3 pb-3 pl-6 pr-6 text-white bg-blue-500 rounded-md mt-4'>Explore Now</button>
        </div>
        <div className='flex items-center justify-center w-[50%] pt-8'>
            <img src={doctorImage}  className='rounded-md w-[550px] h-[500px]'/>
        </div>

    </div>
  )
}
