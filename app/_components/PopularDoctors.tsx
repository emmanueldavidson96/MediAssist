"use client";
import React from 'react'
import imageDoc from "../../public/assets/dc04aaae4d9a84ad7c4a3be7bc4e9766.jpg";
import imageDoc2 from "../../public/assets/doctors_visit_1200x900.jpg";
import imageDoc3 from "../../public/assets/Umoh-Michael-e1695217670244.jpeg"
import imageDoc4 from "../../public/assets/handsome-indian-doctor-generate-ai-photo.jpg";
import imageDoc5 from "../../public/assets/pngimg.com - doctor_PNG15988.png";
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function PopularDoctors() {
  return (
    <div className='flex flex-col w-[90%] m-auto mb-12'>
        <h1 className='text-3xl font-bold'>Our Popular <span className='text-blue-600'>Doctors</span></h1>
        <div className='w-full h-fit flex mt-8'>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            autoplay={{
                delay:4000,
                disableOnInteraction:false
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='h-96 w-full rounded-lg'
            breakpoints={{
                1024:{
                    slidesPerView:3
                },
                600:{
                    slidesPerView:2
                },
                480:{
                    slidesPerView:1
                },
                320:{
                    slidesPerView:1
                },
                280:{
                    slidesPerView:1
                }
            }}
        >
            <SwiperSlide>
                <Image src={imageDoc} alt="" className='w-full h-full object-cover block border-blue-300 border'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={imageDoc2} alt="" className='w-full h-full object-cover block border-blue-300 border'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={imageDoc3} alt="" className='w-full h-full object-cover block border-blue-300 border'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={imageDoc4} alt="" className='w-full h-full object-cover block border-blue-300 border'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={imageDoc5} alt="" className='w-full h-full object-cover block border-blue-300 border'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={imageDoc2} alt="" className='w-full h-full object-cover block border-blue-300 border'/>
            </SwiperSlide>
        </Swiper>

        </div>


    </div>
  )
}
