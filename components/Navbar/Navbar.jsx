"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/Remotual-New-Logo.svg"
import arrowBlack from "@/public/images/arrowBlack.svg"
import arrowOrange from "@/public/images/arrowOrange.svg"
import Dropdown from "../Dropdown/Dropdown"
import hamburger from "@/public/images/hamburger.svg"
import { useState } from "react"
import HamburgerDropdown from "../HamburgerDropdown/HamburgerDropdown"

export default function Navbar() {
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
  const [toggle, setToggle] = useState(false)
  function toggleHamburger() {
    setToggle(!toggle)
  }
  return (
    <>
      <div className="flex  w-11/12  mx-auto   py-4 justify-between">
        <div className="flex items-center cursor-pointer w-[100px] xl:w-[175px] lg:w-[150px]  md:w-[125px]">
          <Link href={'/'}><Image src={logo} /></Link>
        </div>

        <div className="lg:gap-6 xl:gap-10 items-center lg:text-sm xl:text-base md:text-xs hidden lg:flex">
          <div className="cursor-pointer hover:text-[#FF7A00]">Services</div>

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

          <div className="cursor-pointer hover:text-[#FF7A00]">
            Client Success
          </div>

          <div className="bg-[#FF7A00] p-5 rounded-lg text-white cursor-pointer">
            Hire Remotual
          </div>
        </div>
        <div onClick={toggleHamburger} className="flex items-center  lg:hidden">
          <Image src={hamburger} />
        </div>
      </div>

      <div className="lg:hidden">
        <HamburgerDropdown toggle={toggle} />
      </div>
    </>
  )
}