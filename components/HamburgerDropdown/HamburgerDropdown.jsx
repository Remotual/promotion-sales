"use client";
import { useState } from "react";
import Image from "next/image";
import arrowOrange from "@/public/images/arrowOrangeNew.svg";
import arrowWhite from "@/public/images/arrowWhite.svg";
import Dropdown from "../Dropdown/Dropdown";

const dropdown1Items = [
  {
    title: "About Us",
    url: "",
  },
  {
    title: "Case Studies",
    url: "",
  },
  {
    title: "Testimonials",
    url: "",
  },
  {
    title: "Careers",
    url: "",
  },
];
const dropdown2Items = [
  {
    title: "SideKick",
    url: "",
  },
  {
    title: "Copilot",
    url: "",
  },
  {
    title: "Pricing",
    url: "",
  },
];

export default function HamburgerDropdown(props) {
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
  return (
    <div
      className={
        props.toggle
          ? " transition-all ease-in-out duration-200 transform flex flex-col justify-center items-center shadow rounded-b-lg text-sm w-full"
          : " absolute -top-full opacity-0"
      }
    >
      <div className="w-full">
        <div
          onClick={toogleDropdown1}
          className={
            dropdown1
              ? " font-bold text-sm py-5 px-7 cursor-pointer flex items-center justify-center bg-[#ffa465] text-white"
              : " font-bold text-sm py-5 px-7 cursor-pointer flex items-center justify-center hover:bg-[#ffa465] hover:text-white text-[#FF7A00] "
          }
        >
          <p>Why Remotual</p>
          <div
            className={dropdown1 ? "w-[8px] rotate-180 ml-2" : "w-[8px] ml-2"}
          >
            <Image src={dropdown1 ? arrowWhite : arrowOrange} alt="" />
          </div>
        </div>

        <div className={dropdown1 ? "block" : "hidden"}>
          {/* <Dropdown data={dropdown1Items} /> */}
          {dropdown1Items.map((items, key) => (
            <div
              key={key}
              className="py-5 px-7 transition-all duration-200 ease-in-out text-xs font-bold cursor-pointer hover:text-white text-center hover:bg-[#ffa465] text-black"
            >
              {items.title}
            </div>
          ))}
        </div>
      </div>
      <p className=" font-bold text-sm py-5 px-7 cursor-pointer flex items-center justify-center hover:bg-[#ffa465] hover:text-white text-[#FF7A00] w-full">
        Services
      </p>
      <div className="w-full">
        <div
          onClick={toggleDropdown2}
          className={
            dropdown2
              ? " font-bold text-sm py-5 px-7 cursor-pointer flex items-center justify-center bg-[#ffa465] text-white"
              : " font-bold text-sm py-5 px-7 cursor-pointer flex items-center justify-center hover:bg-[#ffa465] hover:text-white text-[#FF7A00] "
          }
        >
          <p>How it Works</p>
          <div
            className={
              dropdown2
                ? "w-[8px] rotate-180 text-[#FF7A00] ml-2"
                : "w-[8px] ml-2"
            }
          >
            <Image src={dropdown2 ? arrowWhite : arrowOrange} alt="" />
          </div>
        </div>

        <div className={dropdown2 ? "block" : "hidden"}>
          {dropdown2Items.map((items, key) => (
            <div
              key={key}
              className="py-5 px-7 transition-all duration-200 ease-in-out text-xs font-bold cursor-pointer hover:text-white text-center hover:bg-[#ffa465] text-black"
            >
              {items.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
