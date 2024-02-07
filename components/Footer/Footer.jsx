import Image from "next/image"
import logo from "@/public/images/logo2.svg"
import linkedin from "@/public/images/linkedin_footer.svg"
import twitter from "@/public/images/twitter.svg"
import facebook from "@/public/images/facebook.svg"
import instagram from "@/public/images/instagram.svg"

import Link from 'next/link'


export default function Footer() {
  return (
        <div className="bg-[#222222]">
          <div className="lg:flex lg:justify-between bg-[#222222] w-11/12 mx-auto pt-[50px] pb-10">
            <div className="lg:w-[50%]">
              <div>
                <Image src={logo} />
              </div>
              <div className=" text-sm text-[#FFF] mt-[20px]">
                <p>Do what you do best. Let us handle the rest! </p>
                <p>
                  Connecting busy entrepreneurs with the top knowledge workers from
                  around the world.
                </p>
                <p>Zero Chaos | More Headspace | Focused YOU | Better Business</p>
              </div>
            </div>
    
            <div className="grid grid-cols-2 lg:pt-[0px] pt-[50px] lg:grid-cols-3 lg:w-[50%] lg:justify-items-end gap-10 text-white text-sm">
              <div className="flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">About</h1>
                <Link href="https://remotual.com/about" target="_blank"><p className="cursor-pointer">About Us</p> </Link>
                <Link href="https://remotual.com/service" target="_blank"><p className="cursor-pointer">Services</p></Link>
                <Link href="https://remotual.com/testimonial" target="_blank"><p className="cursor-pointer">Customer Stories</p></Link>
                <Link href="https://remotual.com/#" target="_blank"><p className="cursor-pointer">Team</p></Link>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">
                  Company
                </h1>
                <Link href="https://remotual.com/careers" target="_blank"><p className="cursor-pointer">Careers</p></Link>
                <Link href="https://remotual.com/blog" target="_blank"><p className="cursor-pointer">Blog</p></Link>
                <Link href="https://remotual.com/#" target="_blank"><p className="cursor-pointer">Community</p></Link>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">
                  Resources
                </h1>
                <Link href="https://remotual.com/privacy-policy" target="_blank"><p className="cursor-pointer">Privacy Policy</p></Link>
                <Link href="https://remotual.com/terms-of-service" target="_blank"><p className="cursor-pointer">Terms of Service</p></Link>
                <Link href="https://remotual.com/faq" target="_blank"><p className="cursor-pointer">FAQ's</p></Link>
                {/* <p className="cursor-pointer">Label</p> */}
              </div>
              <div className="lg:hidden flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">
                  Social
                </h1>
                <Link href="http://linkedin.com/company/remotual" target="_blank"><Image className="cursor-pointer" src={linkedin}></Image></Link>
                <Link href="https://twitter.com/remotual" target="_blank"><Image className="cursor-pointer" src={twitter}></Image></Link>
                <Link href="https://facebook.com/Remotual" target="_blank"><Image className="cursor-pointer" src={facebook}></Image></Link>
                <Link href="https://instagram.com/remotual" target="_blank"><Image className="cursor-pointer" src={instagram}></Image></Link>
              </div>
            </div>
            <hr className="mt-[50px] text-white" />
            <p className="lg:hidden text-[#FF7A00] text-center text-sm mt-10">
              © 2023 Remotual. All Rights Reserved
            </p>
          </div>
          
          <div className="bg-[#222222]  w-11/12 mx-auto hidden lg:block">
            <hr className=" text-white " />
          </div>
    
          <div className="bg-[#222222]  w-11/12 mx-auto  hidden lg:flex justify-between ">
            <p className=" text-[#FF7A00] hidden lg:flex items-center text-sm my-10">
              © 2023 Remotual. All Rights Reserved
            </p>
            <div className="hidden lg:flex justify-center items-center gap-4">
              <Link href="http://linkedin.com/company/remotual" target="_blank"><Image className="cursor-pointer" src={linkedin}></Image></Link>
              <Link href="https://twitter.com/remotual" target="_blank"><Image className="cursor-pointer" src={twitter}></Image></Link>
              <Link href="https://facebook.com/Remotual" target="_blank"><Image className="cursor-pointer" src={facebook}></Image></Link>
              <Link href="https://instagram.com/remotual" target="_blank"><Image className="cursor-pointer" src={instagram}></Image></Link>
            </div>
          </div>
        </div>
  )
}
