import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'
import serviceProfile from '@/public/images/service_profile.svg'
import recordBag from '@/public/images/recordBag.svg'
import recordTask from '@/public/images/recordTask.svg'
import recordRating from '@/public/images/recordRating.svg'



export default function Record(props) {
  return (
    <>
        <div className='px-5 py-3 mt-[40px] lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px]  bg-white rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]'>
            <div className="relative mb-3">
                <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
                <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Track</span> Record</p>
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            <div className='lg:grid-cols-4 grid grid-cols-2 justify-center place-items-center mt-4 relative'>
                <div className='lg:hidden top-[50%] -translate-[50%] z-10 w-full h-full absolute'>
                    <div className='h-[1px] w-[90%] md:w-[40%] m-auto bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                    <div className=' rotate-90 h-[1px] w-[90%] md:w-[40%] m-auto bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                </div>
                <div className='w-full p-4 grid place-items-center z-0'>
                    <Image src={serviceProfile} height={50} width={50}></Image>
                      <p className='font-semibold text-[30px] my-2'>{props.user?.trackRecord.clients}+</p>
                    <p className='font-semibold text-[13px]'>Clients</p>
                </div>
                <div className='w-full p-4 grid place-items-center z-0'>
                    <Image src={recordTask} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>{props.user?.trackRecord.projects}+</p>
                    <p className='font-semibold text-[13px]'>Projects</p>
                </div>
                <div className='w-full p-4 grid place-items-center z-0'>
                    <Image src={recordBag} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>{props.user?.trackRecord.experience}+</p>
                    <p className='font-semibold text-[13px]'>Year of Experience</p>
                </div>
                <div className='w-full p-4 grid place-items-center z-0'>
                    <Image src={recordRating} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>{props.user?.trackRecord.ratings}</p>
                    <p className='font-semibold text-[13px]'>User Rating</p>
                </div>
            </div>
        </div>
    </>
  )
}
