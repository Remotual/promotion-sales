"use client";

import { toKebabCase } from "@/utils/common";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Button from "../Button/Button";

export default function Form() {
  const animatedComponents = makeAnimated();
  const [loading, setLoading] = useState(false);
  const serviceOptions = [
    { value: "administrative-support", label: "administrative-support" },
    { value: "project-management", label: "project-management" },
    {
      value: "accounting-&-financial-support",
      label: "accounting-&-financial-support",
    },
    { value: "marketing-&-sales-support", label: "marketing-&-sales-support" },
    { value: "data-entry-&-management", label: "data-entry-&-management" },
    { value: "website-support", label: "website-support" },
    { value: "select-all", label: "select-all" },
  ];
  const buckSavings = [
    { value: "administrative-support", label: "administrative-support" },
    { value: "project-management", label: "project-management" },
    {
      value: "accounting-&-financial-support",
      label: "accounting-&-financial-support",
    },
    { value: "marketing-&-sales-support", label: "marketing-&-sales-support" },
    { value: "data-entry-&-management", label: "data-entry-&-management" },
    { value: "website-support", label: "website-support" },
    { value: "select-all", label: "select-all" },
  ];
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    let selectedServices = formData.getAll("serviceOption");
    let selectedSavings = formData.getAll("serviceOption");

    if (selectedServices.includes("select-all")) {
      selectedServices = serviceOptions
        .map(({ value }) => {
          if (value !== "select-all") {
            return value;
          }
        })
        .filter((value) => value);
    }
    if (selectedSavings.includes("select-all")) {
      selectedSavings = buckSavings
        .map(({ value }) => {
          if (value !== "select-all") {
            return value;
          }
        })
        .filter((value) => value);
    };
    const companyDetails = {
      companyId: toKebabCase(formData.get("companyName")),
      companyName: formData.get("companyName"),
      // serviceOptions: formData.getAll("serviceOption").join(","),
      // buckSavings: formData.getAll("buckSaving").join(","),
      serviceOptions: selectedServices.join(","),
      buckSavings: selectedSavings.join(","),
    };
    try {
      const { data, status } = await axios.post("/api/company", companyDetails);
      if (status === 200) {
        toast.success("Company Created");
        router.push(`/${companyDetails.companyId}`);
      }
    } catch (error) {
      toast.warning("Company Already Exists");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#FFF5EC] py-8 flex items-center h-screen ">
      <div className="w-11/12 md:w-1/3 mx-auto rounded-lg  bg-white shadow-md min-h-fit ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-10 x ">
          <div htmlFor="companyName">
            <span className="text-[20px] font-semibold mb-3">Company Name</span>
            <input
              name="companyName"
              className="outline-none w-full bg-[#FFF5EC] rounded-md mt-2 p-2"
              required
              type="text"
            />
          </div>
          <div htmlFor="serviceOption">
            <span className="text-[20px] font-semibold">Services Tag</span>
            <Select
              name="serviceOption"
              className="w-full mt-2 outline-0 "
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={serviceOptions[0]}
              isMulti
              options={serviceOptions}
            />
          </div>
          <div htmlFor="buckSavings">
            <span className="text-[20px] font-semibold"> Buck Savings</span>
            <Select
              name="buckSaving"
              className="w-full mt-2"
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={buckSavings[0]}
              isMulti
              options={buckSavings}
            />
          </div>
          <Button loading={loading}>Submit</Button>
        </form>
      </div>
    </div>
  );
}
