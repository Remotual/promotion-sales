import React from 'react'
import Image from 'next/image'
import user1 from '@/public/images/user_mika.svg'
import linkedinImg from '@/public/images/linkedIN.svg'
import mailImg from '@/public/images/mail.svg'
import phoneImg from '@/public/images/phone.svg'
import Link from 'next/link'

export default function Contact(props) {
  return (
    <>
        <div className=' 2xl:w-full lg:w-[fit-content] lg:flex lg:flex-col lg:justify-between lg:h-full m-auto bg-white rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]'>
            <div className='w-full flex justify-center'><img className='2xl:w-f' src={props.user?.profile.image}/></div>
        <div className='text-[28px] text-semibold mt-[27px] text-center'>{props.user?.profile.name}</div>
            <div className='text-[12px] font-[600] text-center uppercase text-[#FF7A00] my-[14px]'>{props.user?.profile.designation}</div>
            <div className='flex justify-center mb-[18px] lg:mb-[22px]'>
                {/* {
                  props.user?.profile.linkedin !== "" ?
                  <div className='w-[26px] h-[26px] cursor-pointer'>
                    <Link href={props.user?.profile.linkedin}>
                      <Image src={linkedinImg}></Image>
                    </Link>
                  </div>
                  :
                  ""
                }
                {
                  props.user?.profile.mail !== "" ?     
                  <div className='w-[26px] h-[26px] cursor-pointer mx-2'>
                    <Link href={"mailto:"+props.user?.profile.mail}>
                      <Image src={mailImg}></Image>
                    </Link>
                  </div>
                  :
                  ""               
                }
                {
                  props.user?.profile.phoneNo !== "" ?     
                  <div className='w-[26px] h-[26px] cursor-pointer'>
                    <Link href={"tel:"+props.user?.profile.phoneNo}>
                      <Image src={phoneImg}></Image>
                    </Link>
                  </div>
                  :
                  ""               
                } */}
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
        <div className="mt-[10px] text-center"><Link href="https://remotual.com/pricing" target='_blank'><button className='w-[50%] border-none rounded-full py-2 px-10 mb-3 hover:bg-[#FF7A00] transition duration-500 ease-linear hover:text-white'>Hire Me</button></Link></div>
        </div>
    </>
  )
}
