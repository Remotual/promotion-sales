"use client"
import { useState } from "react"
import Image from "next/image"
import arrowOrange from "@/public/images/arrowOrange.svg"
import arrowBlack from "@/public/images/arrowBlack.svg"
import Dropdown from "../Dropdown/Dropdown"

export default function HamburgerDropdown(props) {
  const [dropdown1, setDropdown1] = useState(false)
  function toogleDropdown1() {
    if (dropdown2) {
      setDropdown2(!dropdown2)
    }
    setDropdown1(!dropdown1)
  }
  const [dropdown2, setDropdown2] = useState(false)
  function toggleDropdown2() {
    if (dropdown1) {
      setDropdown1(!dropdown1)
    }
    setDropdown2(!dropdown2)
  }
  return (
    <div className={props.toggle ? " transition-all ease-in-out duration-300 transform flex flex-col justify-center items-center gap-6 shadow rounded-b-lg p-6 text-sm" : " absolute -top-full opacity-0"}>
      <p>Services</p>
      
      <div className="relative">
        <div
          onClick={toogleDropdown1}
          className={
            dropdown1
              ? "text-[#FF7A00] cursor-pointer flex items-center gap-2 "
              : " cursor-pointer flex items-center gap-2"
          }
        >
          <p>Why Remotual</p>
          <div className={dropdown1 ? "w-[8px] rotate-180" : "w-[8px]"}>
            <Image src={dropdown1 ? arrowOrange : arrowBlack} />
          </div>
        </div>

        <div className={dropdown1 ? "block" : "hidden"}>
          <Dropdown First="About Us" Second="Pricing" />
        </div>
      </div>
      
      <div className="relative">
        <div
          onClick={toggleDropdown2}
          className={
            dropdown2
              ? "text-[#FF7A00] cursor-pointer flex items-center gap-2"
              : " cursor-pointer flex items-center gap-2"
          }
        >
          <p>How it Works</p>
          <div
            className={
              dropdown2 ? "w-[8px] rotate-180 text-[#FF7A00]" : "w-[8px]"
            }
          >
            <Image src={dropdown2 ? arrowOrange : arrowBlack} />
          </div>
        </div>

        <div className={dropdown2 ? "block" : "hidden"}>
          <Dropdown First="VA Team" Second="Individual VA" />
        </div>
      </div>
      <p>Client Success</p>
    </div>
  )
}