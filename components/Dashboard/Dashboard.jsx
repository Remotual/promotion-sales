import { kebabToNormalText } from "@/utils/common";
import Link from "next/link";
import React from "react";

function DashboardData(props) {
  return (
    <div className="grid grid-cols-[15%,15%,1fr,1fr,10%] gap-2 bg-white py-4 px-2 rounded-lg shadow-md">
      <div className="py-2 font-semibold px-4">{props?.data?.companyId}</div>
      <div className="py-2 font-bold px-4">{props?.data?.companyName}</div>
      <div className="flex flex-wrap items-start gap-2">
        {props?.data?.servicesTags.split(",").map((item) => {
          return (
            <div className="bg-[#FFF5EC] py-2 px-4 rounded-md w-[fit-content] cursor-pointer">
              {kebabToNormalText(item)}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-start gap-2">
        {props?.data?.buckSavingsTags.split(",").map((item) => {
          return (
            <div className="bg-[#FFF5EC] py-2 px-4 rounded-md w-[fit-content] cursor-pointer">
              {kebabToNormalText(item)}
            </div>
          );
        })}
      </div>
      <div className="border-l-4 border-black flex items-start justify-center  ">
        <Link
          className="bg-[#FF7A00] text-white py-2 px-4 rounded-md flex items-center justify-center gap-1"
          href={`/${props?.data?.companyId}/edit`}
        >
          Edit Details
        </Link>
      </div>
    </div>
  );
}

export default DashboardData;
