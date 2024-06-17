import React from 'react'
import { IoSend } from "react-icons/io5";

export default function ChatWithMediAi() {
  return (
    <div className='flex h-screen w-[100%] m-auto'>
        <div className="w-[20%] h-full bg-blue-700 flex flex-col p-4 gap-4 items-center">
        <button className="border border-white p-3 rounded-md text-white w-full">New Chat</button>
        <div className="text-white mt-16">
          A Chat History
        </div>
      </div>
      <div className="w-[80%] h-full bg-blue-100 flex flex-col items-center p-6">
        <h1 className="text-gray-400 font-black text-4xl">MEDI<span className='text-blue-600'>ASSIST</span></h1>
        <div className="flex w-full h-fit mt-[40%] items-center gap-4">
          <input type="text" className="w-[85%] p-6 bg-blue-200 border-white border rounded-lg text-blue-600" />
          <IoSend size={50} color="blue" cursor={"pointer"}/>
        </div>
      </div>
    </div>
  )
}
