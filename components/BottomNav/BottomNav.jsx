'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import navHome from '@/public/images/navHome.svg'
import navProfile from '@/public/images/navProfile.svg'
import navResume from '@/public/images/navResume.svg'
import navFeedback from '@/public/images/navFeedback.svg'
import navVideo from '@/public/images/navVideo.svg'

import navProfileFocused from '@/public/images/navProfileFocused.svg'
import navFeedbackFocused from '@/public/images/navFeedbackFocused.svg'
import navResumeFocused from '@/public/images/navResumeFocused.svg'
import navPlaylistFocused from '@/public/images/navPlaylistFocused.svg'
import { isMobile } from 'react-device-detect';

export default function BottomNav(props) {
    const handleClick = (divId) => {
        if (isMobile) {
            // Call mobile-specific function
            document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });
        } else {
            // Call web-specific function
            props.handleTabName(divId);
        }
        
    };
  return (
    <>
        <div className=''>
            <Link href="/">
                <div className='lg:static lg:rounded-[8px] lg:px-[23px] lg:py-[16px] lg:mb-4 lg:shadow-none cursor-pointer w-[fit-content] z-50 font-semibold fixed left-0 bottom-0 bg-white rounded-[0px_8px_0_0] text-center px-5 btm-nav py-[12px] shadow-[5px_-5px_4px_0px_rgba(0,0,0,0.04)] flex flex-col justify-center items-center'>
                    <div className="w-[20px] h-[20px] flex flex-col justify-center items-center"><Image className='h-full' src={navHome}></Image></div>
                    <div className="text-[12px] mt-[2px]">Home</div>
                </div>
            </Link>

            <div className='lg:static lg:rounded-[8px] lg:shadow-none lg:w-fit lg:block flex w-[fit-content] z-50 fixed bottom-0 right-0 bg-white rounded-[8px_0_0_0] text-center  shadow-[-5px_-5px_4px_0px_rgba(0,0,0,0.04)]'>

                <div onClick={() => handleClick('profile')}  className='lg:px-[12px] lg:py-[14px] px-5 btm-nav py-[12px] font-semibold cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[20px] h-[20px] flex flex-col justify-center items-center"><Image className='h-full' src={props.tabName === 'profile' ? navProfileFocused : navProfile}></Image></div>
                    <div className={props.tabName === 'profile'? "text-[12px] mt-[2px] text-[#FF7A00]" : "text-[12px] mt-[2px] text-black"}>Profile</div>
                </div>
                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>


                <div onClick={() => handleClick('resume')} className='lg:px-[12px] lg:py-[14px] px-5 btm-nav py-[12px] font-semibold cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[20px] h-[20px] flex flex-col justify-center items-center"><Image className='h-full' src={props.tabName === 'resume' ? navResumeFocused : navResume}></Image></div>
                    <div className={props.tabName === 'resume'? "text-[12px] mt-[2px] text-[#FF7A00]" : "text-[12px] mt-[2px] text-black"}>Resume</div>
                </div>
                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>


                <div onClick={() => handleClick('feedback')} className='lg:px-[12px] lg:py-[14px] px-5 btm-nav py-[12px] font-semibold cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[20px] h-[20px] flex flex-col justify-center items-center"><Image className='h-full' src={props.tabName === 'feedback' ? navFeedbackFocused : navFeedback}></Image></div>
                    <div className={props.tabName === 'feedback'? "text-[12px] mt-[2px] text-[#FF7A00]" : "text-[12px] mt-[2px] text-black"}>Feedback</div>
                </div>
                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>


                <div onClick={() => handleClick('playlist')} className='lg:px-[12px] lg:py-[14px] px-5 btm-nav py-[12px] font-semibold cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[20px] h-[20px] flex flex-col justify-center items-center"><Image className='h-full' src={props.tabName === 'playlist' ? navPlaylistFocused : navVideo} width={1000} height={1000}></Image></div>
                    <div className={props.tabName === 'playlist'? "text-[12px] mt-[2px] text-[#FF7A00]" : "text-[12px] mt-[2px] text-black"}>Playlist</div>
                </div>
            </div>
        </div>
    </>
  )
}
