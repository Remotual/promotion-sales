"use client";
import Image from "next/image";
import { useState } from "react";

import advanced from "@/public/images/advanced.svg";
import lock from "@/public/images/lock.svg";
import lockFocus from "@/public/images/lock_focus.svg";
import time from "@/public/images/time.svg";
import timeFocus from "@/public/images/time_focus.svg";
import dataServices from "@/utils/dataServices";
import SavingSubTab from "./SavingSubTab/SavingSubTab";
import ServiceSubTab from "./ServiceSubTab/ServiceSubTab";
import ServiceButton from "./ServiceButton/ServiceButton";

export default function Advantages(company) {
  const [updateCompany, setUpdateCompany] = useState(company);
  const [tabValue, setTabValue] = useState("tab1");
  const [subTabvalue, setSubTabvalue] = useState("subtab1");
  function handleSubTabvalue(value) {
    setSubTabvalue(value);
  }
  function handleTabValue(value) {
    setTabValue(value);
    handleSubTabvalue("subtab1");
  }
  return (
    <>
      <div className="bg-[#FFF5EC] w-full pt-[77px] pb-[60px]">
        <div className="w-11/12 m-auto">
          <div className="m-auto md:w-[62%] w-full pt-[63px] pb-[37px]">
            <div className="text-[34px] md:text-[45px] leading-[49.5px] text-center font-bold max-w-[806px] mx-auto pb-[25px] ">
              Let Remotual be
              <span className="text-[#FF7A00] mx-2">
                {updateCompany?.company?.companyName}
              </span>
              Competitive Advantage
            </div>
          </div>
          <div className="flex justify-between gap-[20px] flex-col md:flex-row">
            <div className="w-full md:w-[600px] md:h-full rounded-[20px] order-2 md:order-1 shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] bg-white flex justify-center items-center overflow-hidden">
              {
                {
                  tab1: (
                    <div className="flex flex-col flex-grow gap-[14.53px] rounded-[17.09px] py-[20.51px] px-[15.38px] shadow-md bg-white ">
                      <div className="py-[9.5px] px-[20.62px] bg-[#FFF5EC] rounded-[8.39px] ">
                        <p className="text-[#222222] font-semibold text-[28.53px] leading-[34.41px]">
                          Services tailored to you
                          <span className="text-[#FF7A00] ml-2">
                            {updateCompany?.company?.companyName}
                          </span>
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-[15.23px]">
                        {updateCompany?.company?.servicesTags
                          .split(",")
                          .map((service, key) => {
                            return (
                              <ServiceButton
                                service={service}
                                key={key}
                                props={dataServices[service]}
                                currentTab={subTabvalue}
                                action={handleSubTabvalue}
                              />
                            );
                          })}
                      </div>
                    </div>
                  ),
                  tab2: (
                    <div className="flex flex-col flex-grow gap-[14.53px] rounded-[17.09px] py-[20.51px] px-[15.38px] shadow-md bg-white ">
                      <div className="py-[9.5px] px-[20.62px] bg-[#FFF5EC] rounded-[8.39px] ">
                        <p className="text-[#222222] font-semibold text-[28.53px] leading-[34.41px]">
                          More Bang for your buck
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-[15.23px] ">
                        {updateCompany?.company?.buckSavingsTags
                          .split(",")
                          .map((service, key) => {
                            return (
                              <ServiceButton
                                service={service}
                                key={key}
                                props={dataServices[service]}
                                currentTab={subTabvalue}
                                action={handleSubTabvalue}
                              />
                            );
                          })}
                      </div>
                    </div>
                  ),
                }[tabValue]
              }
            </div>
            {/* tabs */}
            <div className="w-full place-items-center md:w-[fit-content] order-1 md:order-2 flex justify-center items-center z-[999]">
              <div className="w-full flex gap-[14px] justify-center md:flex-col bg-[white] p-[15px] rounded-full shadow-[5px_-5px_5px_0px_rgba(0,0,0,0.05)]  md:shadow-[5.13px_5.13px_5.985px_0px_rgba(0,0,0,0.05)] ">
                <div className=" min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab1")}
                    className={
                      tabValue === "tab1"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3  "
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3  "
                    }
                  >
                    {tabValue === "tab1" ? (
                      <div className="w-[25px] h-[25px]">
                        <Image src={advanced} height={100} width={100}></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={advanced} height={100} width={100}></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab2")}
                    className={
                      tabValue === "tab2"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3  "
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3  "
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
                {/* <div className="min-w-[22.5%] flex justify-center items-center">
                  <div
                    onClick={() => handleTabValue("tab3")}
                    className={
                      tabValue === "tab3"
                        ? "bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3  "
                        : "hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 "
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
                </div> */}
              </div>
            </div>
            {/* tabs */}
            {
              {
                tab1: (
                  <>
                    <div className="flex items-center justify-center w-full md:w-[600px] shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] order-3 md:order-3 md:max-h-full transition-all duration-1000 ease-linear rounded-[17.09px] bg-white  bg-[url('/images/grid_lines.svg')] bg-center bg-no-repeat  bg-cover p-6">
                      {
                        {
                          subtab1: (
                            <ServiceSubTab
                              image={
                                dataServices["administrative-support"].image
                              }
                              content={
                                dataServices["administrative-support"].value[0]
                                  .content
                              }
                            />
                          ),
                          subtab2: (
                            <ServiceSubTab
                              image={dataServices["project-management"].image}
                              content={
                                dataServices["project-management"].value[0]
                                  .content
                              }
                            />
                          ),
                          subtab3: (
                            <ServiceSubTab
                              image={
                                dataServices["accounting-&-financial-support"]
                                  .image
                              }
                              content={
                                dataServices["accounting-&-financial-support"]
                                  .value[0].content
                              }
                            />
                          ),
                          subtab4: (
                            <ServiceSubTab
                              image={
                                dataServices["marketing-&-sales-support"].image
                              }
                              content={
                                dataServices["marketing-&-sales-support"]
                                  .value[0].content
                              }
                            />
                          ),
                          subtab5: (
                            <ServiceSubTab
                              image={
                                dataServices["data-entry-&-management"].image
                              }
                              content={
                                dataServices["data-entry-&-management"].value[0]
                                  .content
                              }
                            />
                          ),
                          subtab6: (
                            <ServiceSubTab
                              image={dataServices["website-support"].image}
                              content={
                                dataServices["website-support"].value[0].content
                              }
                            />
                          ),
                        }[subTabvalue]
                      }
                    </div>
                  </>
                ),
                tab2: (
                  <>
                    <div className="w-full md:w-[600px] order-3 md:order-3 md:max-h-full h-full rounded-[17.09px]">
                      {
                        {
                          subtab1: (
                            <SavingSubTab
                              usSalary={
                                dataServices["administrative-support"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["administrative-support"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["administrative-support"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["administrative-support"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab2: (
                            <SavingSubTab
                              usSalary={
                                dataServices["project-management"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["project-management"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["project-management"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["project-management"].value[0]
                                  .salary
                              }
                            />
                          ),
                        }[subTabvalue]
                      }
                    </div>
                  </>
                ),
                // tab3: (
                //   <>
                //     <div className="flex items-center justify-center w-full md:w-[600px] shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] order-3 md:order-3 md:min-h-full h-full transition-all duration-1000 ease-linear rounded-[17.09px] bg-white  bg-[url('/images/grid_lines.svg')] bg-center bg-no-repeat  bg-cover p-6"></div>
                //   </>
                // ),
              }[tabValue]
            }
          </div>
        </div>
      </div>
    </>
  );
}
