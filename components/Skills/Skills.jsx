import Image from "next/image"
import React from "react"
import line from "@/public/images/line.svg"
import design from "@/public/images/design.svg"
import line2 from "@/public/images/line2.svg"

import projectManagement from "@/public/images/projectManagement.svg"

import orangedot from "@/public/images/orangedot.svg"
import graydot from "@/public/images/graydot.svg"
import harskills from "@/public/images/hardskills.svg"
import checked from "@/public/images/checked.svg"
import softskills from "@/public/images/softskills.svg"
import headCircle from '@/public/images/heading_circle.svg'


export default function Skills(props) {
  return (
    <div className="lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px] bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
      <div className="relative mb-3">
          <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
          <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>My </span>Skills</p>
      </div>

      <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-7 mt-7 mb-4">
        <div >
          <div className="flex gap-3 items-center">
            <Image src={design}></Image>
            <p className="text-[18px] font-semibold">Design</p>
          </div>

          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {
              props.user?.resume.skills.map((skill) => {
                return(
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <img src={skill.logo} />
                      <p className=" text-[15px] font-medium">{skill.name}</p>
                    </div>
                    <img className="w-full" src={skill.level} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div>
          <div className="flex gap-3 items-center ">
            <Image src={projectManagement}></Image>
            <p className="text-[18px] font-semibold">Project Management</p>
          </div>

          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>

          <div className="lg:mt-8 flex flex-col gap-6">
            {
              props.user?.resume.projectManagement.map((skill) => {
                return (
                  <div className="flex items-center gap-6">
                    <img src={skill.logo} />
                    <div className="w-full flex justify-between">
                      {
                        [1,2,3,4,5,6,7,8].map((value) => {
                          return(
                            
                            value <= skill.level ?
                            <Image src={orangedot}></Image>:
                            <Image src={graydot}></Image>
                            
                          )
                        })
                      }
                      
                    </div>
                  </div>
                )
              })
            }
            

            {/* <div className="flex items-center gap-6">
              <Image src={asana}></Image>
              <div className="w-full flex justify-between">
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={graydot}></Image>
                <Image src={graydot}></Image>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Image src={hubspot}></Image>
              <div className="w-full flex justify-between">
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={graydot}></Image>
                <Image src={graydot}></Image>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Image src={notion}></Image>
              <div className="w-full flex justify-between">
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={orangedot}></Image>
                <Image src={graydot}></Image>
                <Image src={graydot}></Image>
                <Image src={graydot}></Image>
              </div>
            </div> */}
          </div>
        </div>

        <div>
          <div className="flex gap-3 items-center">
            <Image src={harskills}></Image>
            <p className="text-[18px] font-semibold">Hard Skills</p>
          </div>

          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>

          <div className="flex flex-col gap-4">
            {
              props.user?.resume.hardSkills.map((skill) => {
                return (
                  <div className="flex gap-4">
                    <Image src={checked}></Image>
                    <p className=" text-[15px] font-medium">{skill}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div>
          <div className="flex gap-3 items-center">
            <Image src={softskills}></Image>
            <p className="text-[18px] font-semibold">Soft Skills</p>
          </div>

          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>

          <div className="flex flex-col gap-4">
            {
              props.user?.resume.softSkills.map((skill) => {
                return (
                  <div className="flex gap-4">
                    <Image src={checked}></Image>
                    <p className=" text-[15px] font-medium">{skill}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
