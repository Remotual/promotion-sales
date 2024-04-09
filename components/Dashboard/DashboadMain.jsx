"use client"

import DashboardData from "@/components/Dashboard/Dashboard";
import axios from "axios";

import { useEffect, useState } from "react";

export default function DashboardMain() {
    // const controller = new companyController();
    // const allCompanyData = await controller.getCompanyAllData();

    const [allCompanyData, setallCompanyData] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const { data, status } = await axios.get("/api/company");
            if (data?.data) {
                setallCompanyData(data.data);
            }
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    };

    return (
        <div className="bg-[#FFF5EC] min-h-screen py-9 ">
            <div className="flex flex-col gap-3 justify-center items-center w-11/12 mx-auto ">
                <div className="grid grid-cols-[15%,15%,30%,1fr,10%] gap-2  w-full ">
                    <div className="text-xs md:text-2xl font-bold py-2 px-4 text-[#FF7A00]">Company ID</div>
                    <div className="text-xs md:text-2xl font-bold py-2 px-4 text-[#FF7A00]">Company Name</div>
                    <div className="text-xs md:text-2xl font-bold py-2 px-4 text-[#FF7A00]">Services</div>
                    <div className="text-xs md:text-2xl font-bold py-2 px-4 text-[#FF7A00]">Buck Savings</div>
                </div>
                <div className="flex flex-col gap-3 w-full ">
                    {allCompanyData?.map((data) => {
                        return <DashboardData data={data} />;
                    })}
                </div>
            </div>
        </div>
    );
}
