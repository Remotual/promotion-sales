"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/Remotual-New-Logo.svg";
import arrowWhite from "@/public/images/arrowBlackNew.svg";
import arrowOrange from "@/public/images/arrowOrangeNew.svg";
import Dropdown from "../Dropdown/Dropdown";
import hamburger from "@/public/images/hamburger.svg";
import { useState } from "react";
import HamburgerDropdown from "../HamburgerDropdown/HamburgerDropdown";

const dropdown1Items = [
  {
    title: "About Us",
    url: "https://remotual.com/about/",
  },
  {
    title: "Case Studies",
    url: "https://remotual.com/case-studies/",
  },
  {
    title: "Testimonials",
    url: "https://remotual.com/testimonials/",
  },
  {
    title: "Careers",
    url: "https://remotual.com/careers/",
  },
];
const dropdown2Items = [
  {
    title: "SideKick",
    url: "https://remotual.com/sidekick-2/",
  },
  {
    title: "Copilot",
    url: "https://remotual.com/copilot/",
  },
  {
    title: "Pricing",
    url: "https://remotual.com/pricing/",
  }
];

export default function Navbar() {
  const [dropdown1, setDropdown1] = useState(false);
  function toogleDropdown1() {
    if (dropdown2) {
      setDropdown2(!dropdown2);
    }
    setDropdown1(!dropdown1);
  }
  const [dropdown2, setDropdown2] = useState(false);
  function toggleDropdown2() {
    if (dropdown1) {
      setDropdown1(!dropdown1);
    }
    setDropdown2(!dropdown2);
  }
  const [toggle, setToggle] = useState(false);
  function toggleHamburger() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="flex w-11/12 mx-auto justify-between py-4">
        <div className="flex items-center cursor-pointer w-[100px] xl:w-[175px] lg:w-[150px]  md:w-[125px]">
          <Link href={"/value-prop"}>
            <Image src={logo} alt=""/>
          </Link>
        </div>

        <div className="lg:gap-6 xl:gap-10 items-center align-middle lg:text-sm xl:text-base md:text-xs hidden font-bold lg:flex">
          <div className="relative">
            <div
              onClick={toogleDropdown1}
              className={
                dropdown1
                  ? "text-[#FF7A00] cursor-pointer flex items-center gap-2 "
                  : " cursor-pointer flex items-center gap-2 text-[#FF7A00]"
              }
            >
              <p>Why Remotual</p>
              <div className={dropdown1 ? "w-[8px] rotate-180" : "w-[8px]"}>
                <Image src={arrowOrange} alt=""/>
              </div>
            </div>
            <div className={dropdown1 ? "block" : "hidden h-28"}>
              <Dropdown
                data={dropdown1Items}
              />
            </div>
          </div>
          <div className="cursor-pointer text-[#FF7A00]">Services</div>
          <div className="relative">
            <div
              onClick={toggleDropdown2}
              className={
                dropdown2
                  ? "text-[#FF7A00] cursor-pointer flex items-center gap-2"
                  : " cursor-pointer flex items-center gap-2 text-[#FF7A00]"
              }
            >
              <p>How it Works</p>
              <div
                className={
                  dropdown2 ? "w-[8px] rotate-180 text-[#FF7A00]" : "w-[8px]"
                }
              >
                <Image src={arrowOrange} alt=""/>
              </div>
            </div>

            <div className={dropdown2 ? "block" : "hidden"}>
              <Dropdown data={dropdown2Items} />
            </div>
          </div>
        </div>

        <div className="bg-[#FF7A00] p-5 rounded-lg text-white cursor-pointer" onClick={() => { window.location.href ="https://remotual.com/pricing/"}}>
          Hire Remotual
        </div>

        <div onClick={toggleHamburger} className="flex items-center lg:hidden">
          <Image src={hamburger} alt=""/>
        </div>
      </div>

      <div className="lg:hidden">
        <HamburgerDropdown toggle={toggle} />
      </div>
    </>
  );
}
