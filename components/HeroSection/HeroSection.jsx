"use client";
import { useState } from "react";
import Image from "next/image";

import value from "@/public/images/value.svg";
import valueFocus from "@/public/images/value_focus.svg";
import lock from "@/public/images/lock.svg";
import lockFocus from "@/public/images/lock_focus.svg";
import time from "@/public/images/time.svg";
import timeFocus from "@/public/images/time_focus.svg";
import protection from "@/public/images/protection.svg";
import protectionFocus from "@/public/images/protectionFocus.svg";
import plug from "@/public/images/plug.svg";
import plugFocus from "@/public/images/plug_focus.svg";
import browser from "@/public/images/browser.svg";
import browserFocus from "@/public/images/browser_focus.svg";
import globe from "@/public/images/globe2.svg";
import globeFocus from "@/public/images/globe2_focus.svg";
import dollar from "@/public/images/dollar.svg";
import dollarFocus from "@/public/images/dollar_focus.svg";

import dataJson from "@/utils/dataJson";
import Features from "../Features/Features";

export default function HeroSection() {
  const [tabValue, setTabValue] = useState("tab1");

  function handleTabValue(value) {
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setTabValue(value);
  }

  return (
    <>
      <div className="bg-[#FFF7F0] w-full pb-[60px]">
        <div className="w-11/12 m-auto">
          <div className="m-auto md:w-[62%] w-full pt-[63px] pb-[37px]">
            <div className="m-auto md:text-[45px] text-[34px] font-semibold text-center leading-[49.5px]">
              {dataJson.salesPage.heroLine}
            </div>
          </div>
          <div className="flex justify-between items-center gap-[20px] flex-col md:flex-row ">
            <div className="w-full md:w-[600px] md:h-full rounded-[20px] order-2 md:order-1 shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] bg-white flex justify-center items-center overflow-hidden">
              {
                {
                  tab1: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab1.illustration}
                        height={1000}
                        width={1000}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab2: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab2.illustration}
                        height={1000}
                        width={1000}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab3: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab3.illustration}
                        height={1000}
                        width={1000}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab4: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab4.illustration}
                        height={500}
                        width={500}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab5: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab5.illustration}
                        height={1000}
                        width={1000}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab6: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab6.illustration}
                        height={1000}
                        width={1000}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab7: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab7.illustration}
                        height={1000}
                        width={1000}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                  tab8: (
                    <>
                      <Image
                        src={dataJson.salesPage.features.tab8.illustration}
                        width={1000}
                        height={400}
                        alt="gif"
                      ></Image>
                    </>
                  ),
                }[tabValue]
              }
            </div>

            <div className="w-full overflow-scroll fixed bottom-0 bg-[white] md:static p-[8px] md:p-[16px] md:rounded-full  place-items-center  md:w-[fit-content] order-1 md:order-2 justify-center items-center shadow-[5px_-5px_5px_0px_rgba(0,0,0,0.05)]  md:shadow-[5.13px_5.13px_5.985px_0px_rgba(0,0,0,0.05)] z-[999]">
              <div className="w-full flex md:flex-col">
                <div className=" min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab1")}
                    className={
                      tabValue === "tab1"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab1" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image
                          src={valueFocus}
                          height={100}
                          width={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={value} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab2")}
                    className={
                      tabValue === "tab2"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab2" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image src={lockFocus} height={100} width={100}></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={lock} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab3")}
                    className={
                      tabValue === "tab3"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab3" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image src={timeFocus} height={100} width={100}></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={time} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab4")}
                    className={
                      tabValue === "tab4"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab4" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image
                          src={protectionFocus}
                          height={100}
                          width={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image
                          src={protection}
                          height={100}
                          width={100}
                        ></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab5")}
                    className={
                      tabValue === "tab5"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab5" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image src={plugFocus} height={100} width={100}></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={plug} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab6")}
                    className={
                      tabValue === "tab6"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab6" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image
                          src={browserFocus}
                          height={100}
                          width={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={browser} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab7")}
                    className={
                      tabValue === "tab7"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 lg:mb-[14px]"
                    }
                  >
                    {tabValue === "tab7" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image
                          src={dollarFocus}
                          height={100}
                          width={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={dollar} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab8")}
                    className={
                      tabValue === "tab8"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3"
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3"
                    }
                  >
                    {tabValue === "tab8" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image
                          src={globeFocus}
                          height={100}
                          width={100}
                        ></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={globe} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[600px] shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] order-3 md:order-3 md:max-h-full h-[fit-content] transition-all duration-1000 ease-linear rounded-[20px] md:overflow-scroll bg-white p-[20px]">
              {
                {
                  tab1: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab1.content}
                        image={value}
                      />
                    </>
                  ),

                  tab2: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab2.content}
                        image={lock}
                      />
                    </>
                  ),
                  tab3: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab3.content}
                        image={time}
                      />
                    </>
                  ),

                  tab4: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab4.content}
                        image={protection}
                      />
                    </>
                  ),

                  tab5: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab5.content}
                        image={plug}
                      />
                    </>
                  ),

                  tab6: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab6.content}
                        image={browser}
                      />
                    </>
                  ),

                  tab7: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab7.content}
                        image={dollar}
                      />
                    </>
                  ),

                  tab8: (
                    <>
                      <Features
                        data={dataJson.salesPage.features.tab8.content}
                        image={globe}
                      />
                    </>
                  ),
                }[tabValue]
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
