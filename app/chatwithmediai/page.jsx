"use client";
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";

export default function ChatWithMediAi() {
  const [value, setValue] = useState("")
  const [chatHistory, setChatHistory] = useState([]);
  
  const getResponse = async () => {
    console.log(value)
    try{
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message:value
        }),
        headers:{
          "Content-Type": "application/json"
        }
      }
      const response = await fetch("https://mediassistserver.onrender.com/mediassist", options)
      const data = await response.text()
      console.log(data)
      setChatHistory(oldChatHistory => [...oldChatHistory, {
        role: "user",
        parts: [{text:value}]
      },
      {
        role: "model",
        parts: [{text:data}]
      }
    
    ])
    setValue("")
    }
    catch(err){
      console.log(err)
    }
  }
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
        <div className="flex w-full h-fit mt-[1%] items-center gap-4 ">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-[85%] p-4 bg-blue-200 border-white border rounded-lg text-blue-800 shadow-sm"  placeholder='What will you like to know today?'/>
          <IoSend size={50} color="blue" cursor={"pointer"} className='shadow-sm' onClick={getResponse}/>
        </div>
      </div>
      <div className="w-[80%] m-auto h-fit">
        {
          chatHistory.map((chatItem, index) => (
            <div key={index} className="bg-white p-4 mb-1">
              <p className="text-black text-lg">{chatItem.role}: {chatItem.parts[0].text}</p>
            </div>
          ))
        }      
      </div>  
    </div>
  )
}
