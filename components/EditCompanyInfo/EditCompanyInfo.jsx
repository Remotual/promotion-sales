"use client";

import { cn } from "@/lib/util";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { toast } from "sonner";
import Button from "../Button/Button";

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

export default function CompanyInfo({ info }) {
  const [defaultSavingTags, setDefaultSavingTags] = useState(false);
  const [defaultBuckSavingTags, setDefaultBuckSavingTags] = useState(false);

  const animatedComponents = makeAnimated();
  const [loading, setLoading] = useState(false);

  async function sumbitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);

    let selectedServices = formData.getAll("serviceOption");
    let selectedSavings = formData.getAll("buckSaving");

    if (formData.getAll("serviceOption").includes("select-all")) {
      selectedServices = serviceOptions
        .map(({ value }) => {
          if (value !== "select-all") {
            return value;
          }
        })
        .filter((value) => value);
    }
    if (formData.getAll("buckSaving").includes("select-all")) {
      selectedSavings = buckSavings
        .map(({ value }) => {
          if (value !== "select-all") {
            return value;
          }
        })
        .filter((value) => value);
    }

    const companyDetails = {
      companyName: formData.get("companyName"),
      // serviceOptions: formData.getAll("serviceOption").join(","),
      // buckSavings: formData.getAll("buckSaving").join(","),
      serviceOptions: selectedServices.join(","),
      buckSavings: selectedSavings.join(","),
    };

    try {
      const { data, status } = await axios.put(
        `/api/company/${info?.companyId}`,
        companyDetails
      );
      if (status === 200) {
        window.location.href = "/dashboard"
      }
      // toast.success("Updated");
    } catch (error) {
      toast.error("error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let data1 = info.servicesTags.split(",").map((service) => {
      return {
        label: service,
        value: service,
      };
    });
    setDefaultSavingTags(data1);

    let data2 = info.buckSavingsTags.split(",").map((service) => {
      return {
        label: service,
        value: service,
      };
    });
    setDefaultBuckSavingTags(data2);

    return () => {};
  }, []);

  const getDefaultValue = async (e) => {
    return await setDefaultSavingTags(serviceOptions[0]);
  };

  return (
    <>
      <div
        className={cn(
          "h-screen flex items-center justify-center  bg-[#FFF5EC] w-full"
        )}
      >
        <form
          className="flex flex-col gap-3 bg-white rounded-lg shadow-md p-6 md:p-8 w-11/12 md:w-1/3"
          onSubmit={sumbitHandler}
        >
          <h2 className="text-2xl text-center font-bold ">Edit Details</h2>
          <div className="">
            <p className="text-[#222222] font-bold text-2xl mb-2">Name</p>
            <input
              type="text"
              name="companyName"
              defaultValue={info?.companyName}
              className="bg-[#FFF5EC] px-4 py-2 rounded-md font-semibold text-2xl tracking-wider w-full "
            />
          </div>

          <div className="">
            <p className="text-[#222222] font-bold text-xl mb-2">Services</p>
            <div className="font-semibold text-lg gap-1">
              <ReactSelect
                name="serviceOption"
                className="w-full mt-2"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={info.servicesTags.split(",").map((service) => {
                  return {
                    label: service,
                    value: service,
                  };
                })}
                isMulti
                options={serviceOptions}
              />
            </div>
          </div>
          <div>
            <p className="text-[#222222] font-bold text-xl mb-2">
              Buck Savings
            </p>
            <div className="font-semibold text-lg gap-1 ">
              <ReactSelect
                name="buckSaving"
                className="w-full mt-2"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={info.buckSavingsTags.split(",").map((service) => {
                  return {
                    label: service,
                    value: service,
                  };
                })}
                isMulti
                options={buckSavings}
              />
            </div>
          </div>
          <div>
            <Button loading={loading} >Update</Button>
          </div>
        </form>
      </div>
    </>
  );
}
