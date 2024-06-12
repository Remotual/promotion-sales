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
                        <Image src={advanced} height={100} width={100} alt=""></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={advanced} height={100} width={100} alt=""></Image>
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
                        <Image src={lockFocus} height={100} width={100} alt=""></Image>
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px]">
                        <Image src={lock} height={100} width={100} alt=""></Image>
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
                          subtab3: (
                            <SavingSubTab
                              usSalary={
                                dataServices["accounting-&-financial-support"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["accounting-&-financial-support"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["accounting-&-financial-support"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["accounting-&-financial-support"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab7: (
                            <SavingSubTab
                              usSalary={
                                dataServices["bookkeeper"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["bookkeeper"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["bookkeeper"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["bookkeeper"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab8: (
                            <SavingSubTab
                              usSalary={
                                dataServices["community-builder"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["community-builder"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["community-builder"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["community-builder"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab9: (
                            <SavingSubTab
                              usSalary={
                                dataServices["content-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["content-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["content-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["content-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab10: (
                            <SavingSubTab
                              usSalary={
                                dataServices["copywriter"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["copywriter"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["copywriter"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["copywriter"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab11: (
                            <SavingSubTab
                              usSalary={
                                dataServices["digital-marketing-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["digital-marketing-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["digital-marketing-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["digital-marketing-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab12: (
                            <SavingSubTab
                              usSalary={
                                dataServices["ecommerce-marketplace-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["ecommerce-marketplace-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["ecommerce-marketplace-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["ecommerce-marketplace-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab13: (
                            <SavingSubTab
                              usSalary={
                                dataServices["growth-marketing-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["growth-marketing-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["growth-marketing-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["growth-marketing-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab14: (
                            <SavingSubTab
                              usSalary={
                                dataServices["marketing-analyst"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["marketing-analyst"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["marketing-analyst"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["marketing-analyst"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab15: (
                            <SavingSubTab
                              usSalary={
                                dataServices["marketing-automation-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["marketing-automation-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["marketing-automation-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["marketing-automation-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab16: (
                            <SavingSubTab
                              usSalary={
                                dataServices["email-marketing-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["email-marketing-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["email-marketing-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["email-marketing-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab17: (
                            <SavingSubTab
                              usSalary={
                                dataServices["product-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["product-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["product-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["product-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab18: (
                            <SavingSubTab
                              usSalary={
                                dataServices["seo-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["seo-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["seo-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["seo-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab19: (
                            <SavingSubTab
                              usSalary={
                                dataServices["head-of-marketing"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["head-of-marketing"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["head-of-marketing"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["head-of-marketing"].value[0]
                                  .salary
                              }
                            />
                          ),

                          subtab20: (
                            <SavingSubTab
                              usSalary={
                                dataServices["marketing-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["marketing-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["marketing-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["marketing-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab21: (
                            <SavingSubTab
                              usSalary={
                                dataServices["account-executive"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["account-executive"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["account-executive"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["account-executive"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab22: (
                            <SavingSubTab
                              usSalary={
                                dataServices["inbound-sales-marketing"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["inbound-sales-marketing"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["inbound-sales-marketing"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["inbound-sales-marketing"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab23: (
                            <SavingSubTab
                              usSalary={
                                dataServices["outreach-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["outreach-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["outreach-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["outreach-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab24: (
                            <SavingSubTab
                              usSalary={
                                dataServices["sales-development-representative"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["sales-development-representative"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["sales-development-representative"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["sales-development-representative"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab25: (
                            <SavingSubTab
                              usSalary={
                                dataServices["sales-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["sales-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["sales-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["sales-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab26: (
                            <SavingSubTab
                              usSalary={
                                dataServices["business-development-representative"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["business-development-representative"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["business-development-representative"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["business-development-representative"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab27: (
                            <SavingSubTab
                              usSalary={
                                dataServices["customer-operations-assistant"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["customer-operations-assistant"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["customer-operations-assistant"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["customer-operations-assistant"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab28: (
                            <SavingSubTab
                              usSalary={
                                dataServices["customer-success-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["customer-success-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["customer-success-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["customer-success-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab29: (
                            <SavingSubTab
                              usSalary={
                                dataServices["customer-support-analyst"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["customer-support-analyst"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["customer-support-analyst"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["customer-support-analyst"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab30: (
                            <SavingSubTab
                              usSalary={
                                dataServices["customer-support-representative"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["customer-support-representative"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["customer-support-representative"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["customer-support-representative"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab31: (
                            <SavingSubTab
                              usSalary={
                                dataServices["head-of-customer-success"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["head-of-customer-success"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["head-of-customer-success"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["head-of-customer-success"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab32: (
                            <SavingSubTab
                              usSalary={
                                dataServices["appointment-setter"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["appointment-setter"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["appointment-setter"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["appointment-setter"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab33: (
                            <SavingSubTab
                              usSalary={
                                dataServices["business-associate"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["business-associate"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["business-associate"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["business-associate"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab34: (
                            <SavingSubTab
                              usSalary={
                                dataServices["executive-assistant"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["executive-assistant"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["executive-assistant"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["executive-assistant"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab35: (
                            <SavingSubTab
                              usSalary={
                                dataServices["general-manager"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["general-manager"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["general-manager"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["general-manager"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab36: (
                            <SavingSubTab
                              usSalary={
                                dataServices["head-of-operations"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["head-of-operations"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["head-of-operations"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["head-of-operations"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab37: (
                            <SavingSubTab
                              usSalary={
                                dataServices["operations-analyst"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["operations-analyst"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["operations-analyst"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["operations-analyst"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab38: (
                            <SavingSubTab
                              usSalary={
                                dataServices["opeartions-associate"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["opeartions-associate"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["opeartions-associate"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["opeartions-associate"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab39: (
                            <SavingSubTab
                              usSalary={
                                dataServices["procurement-specialist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["procurement-specialist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["procurement-specialist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["procurement-specialist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab40: (
                            <SavingSubTab
                              usSalary={
                                dataServices["it-recruiter"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["it-recruiter"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["it-recruiter"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["it-recruiter"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab41: (
                            <SavingSubTab
                              usSalary={
                                dataServices["back-end-developer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["back-end-developer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["back-end-developer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["back-end-developer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab42: (
                            <SavingSubTab
                              usSalary={
                                dataServices["full-stack-developer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["full-stack-developer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["full-stack-developer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["full-stack-developer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab43: (
                            <SavingSubTab
                              usSalary={
                                dataServices["front-end-developer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["front-end-developer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["front-end-developer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["front-end-developer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab44: (
                            <SavingSubTab
                              usSalary={
                                dataServices["software-engineer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["software-engineer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["software-engineer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["software-engineer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab45: (
                            <SavingSubTab
                              usSalary={
                                dataServices["software-implementer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["software-implementer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["software-implementer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["software-implementer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab46: (
                            <SavingSubTab
                              usSalary={
                                dataServices["dev-ops"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["dev-ops"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["dev-ops"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["dev-ops"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab47: (
                            <SavingSubTab
                              usSalary={
                                dataServices["business-intelligence-analyst"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["business-intelligence-analyst"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["business-intelligence-analyst"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["business-intelligence-analyst"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab48: (
                            <SavingSubTab
                              usSalary={
                                dataServices["data-scientist"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["data-scientist"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["data-scientist"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["data-scientist"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab49: (
                            <SavingSubTab
                              usSalary={
                                dataServices["graphic-designer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["graphic-designer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["graphic-designer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["graphic-designer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab50: (
                            <SavingSubTab
                              usSalary={
                                dataServices["ui-ux-designer"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["ui-ux-designer"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["ui-ux-designer"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["ui-ux-designer"].value[0]
                                  .salary
                              }
                            />
                          ),
                          subtab51: (
                            <SavingSubTab
                              usSalary={
                                dataServices["video-editor"].value[0]
                                  .salary[0].usSalary
                              }
                              remotualSalary={
                                dataServices["video-editor"].value[0]
                                  .salary[0].remotualSalary
                              }
                              savings={
                                dataServices["video-editor"].value[0]
                                  .salary[0].savings
                              }
                              data={
                                dataServices["video-editor"].value[0]
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
