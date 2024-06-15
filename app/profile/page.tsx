import React from 'react'
import Image from 'next/image'
import imagePatient from "../../public/assets/1681302723810.jpeg";

export default function Profile() {
  return (
    <div className='w-[90%] h-fit flex mt-4 m-auto mb-8'>
        <div className='w-[20%] h-full bg-white'>
        </div>
        <div className='w-[80%] h-full bg-blue-400 rounded-3xl flex flex-col items-center pt-6 gap-4 pb-6'>
            <div className='w-[95%] h-[350px] bg-blue-100 rounded-3xl shadow-md p-8 flex flex-col gap-3'>
                <h1 className='text-2xl border-l-4 border-l-blue-500 pl-2 font-bold'>Patient Details</h1>
                <div className='w-full h-fit flex '>
                    <div className=''>
                        <Image src={imagePatient} width={150} height={150} alt='' className='rounded-full'/>

                    </div>
                    <div className='ml-8 mt-2 flex flex-col gap-8'>
                        <h2 className='text-lg font-bold '>Nathan Brokleen</h2>
                        <div className='flex gap-8'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>Phone Number</p>
                                <h2 className='text-base font-semibold '>(+62) 812 2352-8674</h2>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>Email Address</p>
                                <h2 className='text-base font-semibold'>nathanbrokleen@gmail.com</h2>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>Place of Work</p>
                                <h2 className='text-base font-semibold'>Head of HR, IT Medley Company Limited</h2>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>

                    </div>

                </div>

            </div>
            <div className='w-[95%] h-[600px] flex justify-between'>
                <div className='bg-blue-100 h-full w-[45%] rounded-3xl shadow-md'>
                    
                    

                </div>
                <div className='w-[53%] flex flex-col gap-4'>
                    <div className='w-full h-[400px] bg-blue-100 rounded-3xl shadow-md'>

                    </div>
                    <div className='w-full h-[400px] bg-blue-100 rounded-3xl shadow-md'>

                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}
