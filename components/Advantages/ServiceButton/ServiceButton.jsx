import { cn } from "@/lib/util";
import Image from "next/image";

export default function ServiceTab({ props, action, currentTab }) {
  // const { text, image, tabValue } = props;
  return (
    <button
      onClick={() => action(props?.tabValue)}
      className={cn(
        "flex items-center text-left border-[#FF7A00] hover:bg-[#FFF5EC] border-[1.09px] rounded-full py-[17px] px-[19px] gap-[13.43px]",
        {
          "bg-[#FFF5EC] font-bold": currentTab == props?.tabValue,
        }
      )}
    >
      <Image className="h-[38.07px] w-[38.07px]" src={props?.image} alt={props?.text} />
      <p className="text-[#222222] text-[16.32px] leading-[21.82px] ">{props?.text}</p>
    </button>
  );
}
