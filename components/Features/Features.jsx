import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'
import parse from 'html-react-parser';

export default function Features(props) {
    return (
        <>
            <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                <div className='text-[34px] font-medium leading-[40px]'>{props.data.heading}</div>
            </div>

            <div className="mt-[20px]">
                {
                    props.data.details.map((detail, index) => {
                        return(
                            <>
                                <div className="flex justify-center items-center">
                                    <div className="bg-[#FFF5EC] p-4 rounded-full">
                                        <div className='w-[25px] h-[25px] text-orange-600'><Image src={props.image} height={100} width={100}></Image></div>
                                    </div>
                                    <div className="font-[300] ml-2 text-[16px]">
                                        <p>{parse(detail)}</p>
                                    </div>
                                </div>

                                {
                                    index < props.data.details.length - 1 ?
                                        <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                        :
                                        ""
                                }
                            </>
                        )
                    })
                }
                
            </div>

            <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
        </>
    )
}
