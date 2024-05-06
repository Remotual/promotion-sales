import React from "react"
import line from "@/public/images/line.svg"
import Image from "next/image"
import line2 from "@/public/images/line2.svg"
import experience from "@/public/images/experience.svg"
import education from "@/public/images/education.svg"
import headCircle from '@/public/images/heading_circle.svg'


export default function Resume(props) {
  return (
    <div id="resume" className="lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px] bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
        <div className="relative mb-3">
            <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
            <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Resume</span></p>
        </div>
        <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>

      <div className="lg:grid lg:grid-cols-2 gap-10 ">
        <div>
          <div className="flex gap-3 items-center mt-6">
            <Image src={experience}></Image>
            <p className="text-[18px] font-semibold">Experience</p>
          </div>
          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>
          <div className="text-[13px] text-[#FF7A00] font-semibold border-[2px] w-fit px-6 py-[2px] border-[#FF7A00] rounded-[6px]">
            {props.user?.resume.experience.start} - {props.user?.resume.experience.end}
          </div>
          <p className="text-[18px] font-medium mt-4">{props.user?.resume.experience.destination}</p>
          <p className="mt-2 text-[15px] text-[#BDBDBD]">{props.user?.resume.experience.companyName}</p>
          <div className="mt-3 px-6 text-[14px]  ">
            {
              props.user?.resume.experience.description.length == 1 ?

              <p>
                  {props.user?.resume.experience.description[0]}
              </p>
              :
                <ul className="list-disc">
                  {

                    props.user?.resume.experience.description.map((describe, index) => {
                      return (
                        <li key={index} className="">
                          {describe}
                        </li>
                      )
                    })
                  }
                </ul>

            }
            
          </div>
        </div>
        {
          props.user?.resume.education === undefined ?
          "":
          <div>
              <div className="lg:mt-6 flex gap-3 items-center mt-4">
              <Image src={education}></Image>
              <p className="text-[18px] font-semibold">Education</p>
            </div>
            <div className="my-[10px]">
              <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            </div>
            <div className="text-[13px] text-[#BDBDBD] font-semibold border-[2px] w-fit px-6 py-[2px] border-[#BDBDBD] rounded-[6px]">
              {props.user?.resume.education.start} - {props.user?.resume.education.end}
            </div>
            <p className="text-[18px] font-medium mt-4">
              {props.user?.resume.education.degree}
            </p>
            <p className="mt-2 text-[15px] text-[#BDBDBD]">
              {props.user?.resume.education.schoolName}
            </p>
            <div className="mt-3 px-6 text-[14px] text-justify">
              <ul className="list-disc">
                {
                  props.user?.resume.education.description.map((describe, index) => {
                    return (
                      <li key={index} className="">
                        {describe}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        }
        
      </div>
    </div>
  )
}