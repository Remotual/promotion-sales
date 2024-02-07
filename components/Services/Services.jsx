import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'


export default function Services(props) {
  return (
    <>
        <div className='px-5 py-3 mt-[40px] lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px]  bg-white rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]'>
            <div className="relative mb-3">
                <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
                <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>My</span> Services</p>
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            <div className='my-[34px] lg:grid lg:grid-cols-2 gap-x-10'>
                {
                      props.user?.services.map((service, index) => {
                        return (
                            <>
                                <div className='flex items-start mt-5 lg:flex-col lg:justify-center lg:items-center lg:text-center lg:gap-3'>
                                    {/* {
                                        service.title === "Customer Service Management" ?
                                            <Image src={serviceThumb} height={50} width={50}></Image>
                                        :
                                        service.title === "CEO Support" ?
                                            <Image src={serviceProfile} height={50} width={50}></Image>
                                        :
                                        service.title === "Lead Generation" ?
                                            <Image src={serviceChart} height={50} width={50}></Image>

                                        : service.title === "Inbound/Outbound calls" ?
                                            <Image src={servicePhone} height={50} width={50}></Image>
                                        :
                                        ""
                                    } */}
                                    <Image src={service.image} height={50} width={50}></Image>
                                    <div className='ml-5'>
                                        <p className='text-[16px] font-semibold mb-2'>{service.title}</p>
                                        <p className='text-[14px] font-normal leading-5 mb-5'>{service.description}</p>
                                        {
                                            (props.user?.services.length / 2 === 0 && index > props.user?.services.length - 2) || (props.user?.services.length / 2 !== 0 && index > props.user?.services.length - 3)
                                            ?
                                                ""
                                            :
                                                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                                        }
                                        
                                    </div>
                                </div>
                            </>
                        )
                      })
                }
            </div>

        </div>
    </>
  )
}
