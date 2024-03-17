import {
  Bar,
  BarChart,
  Label,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function LockTab({ usSalary, remotualSalary, savings, data }) {
  return (
    <div className="flex flex-col md:flex-row gap-[21px]">
      <div className="flex flex-col gap-[18px] w-full md:w-[238px]">
        <div className="bg-black py-[37px] px-[39px] rounded-[20px] text-center">
          <p className="text-[#FF7A00] text-[21px] leading-[20px] font-bold mb-2">
            ${usSalary}k
          </p>
          <p className="text-white text-[15px] leading-[18px] font-normal">
            Avg US Salary
          </p>
        </div>
        <div className="bg-[#FF7A00] py-[37px] px-[39px] rounded-[20px] text-center">
          <p className="text-white text-[21px] leading-[20px] font-bold mb-2">
            ${remotualSalary}k
          </p>
          <p className="text-black text-[15px] leading-[18px] font-normal">
            Avg Remotual Salary
          </p>
        </div>
        <div className="bg-[#FFEBD9] py-[37px] px-[39px] rounded-[20px] text-center">
          <p className="text-[#FF7A00] text-[21px] leading-[20px] font-bold mb-2">
            ${savings}k
          </p>
          <p className="text-black text-[15px] leading-[18px] font-normal">
            Potential Savings
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[13.28px] items-center justify-center bg-white rounded-[20px] w-full py-[28px] px-[37px] transition-all ease-in-out duration-500">
        <div className="flex items-center gap-[10.86px] ">
          <div className="flex items-center text-[13.25px] gap-[4.35px] leading-[15.81px]">
            <span className="w-[16.63px] h-[6.52px] rounded-[10.86px] bg-[#222222]"></span>
            US Salary
          </div>
          <div className="flex items-center text-[13.25px] gap-[4.35px] leading-[15.81px]">
            <span className="w-[16.63px] h-[6.52px] rounded-[10.86px] bg-[#FF7A00]"></span>
            Remotual Salary
          </div>
          <div className="flex items-center text-[13.25px] gap-[4.35px] leading-[15.81px]">
            <span className="w-[16.63px] h-[6.52px] rounded-[10.86px] bg-[#FFEBD9]"></span>
            Savings
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={200} height={50} data={data}>
            <YAxis
              label={{
                value: "Value in k Dollars",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <YAxis />
            <XAxis dataKey="name" />
            <Bar
              dataKey="usSalary"
              fill="#222222"
              radius={[10, 10, 0, 0]}
              label={{
                value: usSalary,
                position: "insideBottomCenter",
                fill: "#ffffff",
              }}
            />
            <Bar
              dataKey="remotualSalary"
              stackId="a"
              fill="#FF7A00"
              label={{
                value: remotualSalary,
                position: "insideBottomCenter",
                fill: "#ffffff",
              }}
            />

            <Bar
              dataKey="savings"
              stackId="a"
              fill="#FFEBD9"
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="savings" fill="#FF7A00" position="center" angle="0" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div></div>
      </div>
    </div>
  );
}
