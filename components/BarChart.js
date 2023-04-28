import React from 'react'
import Chart from "./chart";
import Image from 'next/image';
import bar from "../public/Button.svg";

const BarChart = () => {
  return (
    <div className="bg-white py-2 px-2 mx-8 my-1 rounded-xl shadow-md">
      <div className="flex flex-row justify-around pb-4">
        <p className="text-xl font-bold px-1 py-4">Carbon Footprint</p>
        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="flex flex-row gap-1 items-center">
            <div className="rounded-full bg-[#57CC78] w-[9px] h-[9px] "></div>
            <p className="text-xs font-semibold">Spinning</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="rounded-full bg-[#55DBDB] w-[9px] h-[9px] "></div>
            <p className="text-xs font-semibold">Transportation</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="rounded-full bg-[#E2FF32] w-[9px] h-[9px] "></div>
            <p className="text-xs font-semibold">Carding</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="rounded-full bg-[#FEC102] w-[9px] h-[9px] "></div>
            <p className="text-xs font-semibold">Heating & Cooling</p>
          </div>
          <Image src={bar} alt="" />
        </div>
      </div>
      <div className="w-[650px] flex justify-center items-center p-4 rounded-lg">
        <Chart />
      </div>
    </div>
  );
}

export default BarChart