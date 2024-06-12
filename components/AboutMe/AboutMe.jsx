"use client"
import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'
import dataJson from '@/utils/dataJson'

export default function AboutMe(props) {
    return (
        <>
            <div id="profile" className="lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px] bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
                <div className="relative mb-3">
                    <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle} alt=""></Image></div>
                    <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>About</span> Me</p>
                </div>

                <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>

                <div className="lg:grid lg:grid-cols-2 gap-10 ">
                    <p className="text-[14px] mt-[20px] font-normal">
                        {props.user?.about.description}
                    </p>
                    <div className='lg:py-[10px]'>
                        <div className="flex justify-between items-center my-3 text-[14px] font-normal">
                            <div className='bg-[#FF7A00] text-white px-5'>Age....</div>
                            <div>{props.user?.about.age}</div>
                        </div>
                        <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                        <div className="flex justify-between items-center my-3 text-[14px] font-normal">
                            <div className='bg-[#FF7A00] text-white px-5'>Location....</div>
                            <div>{props.user?.about.location}</div>
                        </div>
                        <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                        <div className="flex justify-between items-center my-3 text-[14px] font-normal">
                            <div className='bg-[#FF7A00] text-white px-5'>Availability....</div>
                            <div>{props.user?.about.availability}+ hours/week</div>
                        </div>
                        <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                        <div className="flex justify-between items-center mt-3 text-[14px] font-normal">
                            <div className='bg-[#FF7A00] text-white px-5'>EA Experience....</div>
                            <div>{props.user?.about.experience}+ years</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
