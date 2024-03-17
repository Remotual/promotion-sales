import { cn } from "@/lib/util";
import Image from "next/image";

export default function PersonalTab({ content, image }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-start w-[441px] gap-[25px] transition-all ease-linear duration-200 animate-fade-left animate-once animate-duration-1000 animate-ease-linear",
        {
          "grid text-center grid-cols-2 w-full": content.length > 3,
        }
      )}
    >
      {content.map((item,key) => {
        return (
          <div
          key={key}
            className={cn("flex items-center gap-[14px]", {
              "flex-col": content.length > 3,
            })}
          >
            <div className="bg-[#FFF5EC] p-[13px] rounded-full min-w-[60px] w-[60px]">
              <Image
                height={100}
                width={100}
                className="h-[34px] w-[34px]"
                src={image}
                alt=""
              />
            </div>
            <p className=" font-semibold text-[19.09px] leading-[29px] text-[#222222] ">
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
}
