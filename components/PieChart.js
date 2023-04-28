import React from 'react'
import { Nutt } from "@/public/icons";

const PieChart = () => {
  return (
    <div className="bg-white w-1/3 my-1 rounded-xl shadow-md pb-4">
      <div className="flex flex-col">
        <div className="w-full justify-center text-center p-3">
          <p className="font-bold text-xl mt-2">Top emissions by type</p>
        </div>
        <div className=" w-full h-full py-2 flex justify-center items-center">
          <Nutt />
        </div>
        <div className="flex flex-col py-2 gap-4 justify-center items-center">
          <div className="flex flex-row justify-between w-[190px]">
            <div className="flex flex-row gap-1 items-center">
              <div className="rounded-full bg-[#57CC78] w-[9px] h-[9px] "></div>
              <p className="text-xs font-semibold">Spinning</p>
            </div>
            <p className="text-xs font-semibold">22%</p>
          </div>
          <div className="flex flex-row justify-between w-[190px]">
            <div className="flex flex-row gap-1 items-center">
              <div className="rounded-full bg-[#55DBDB] w-[9px] h-[9px] "></div>
              <p className="text-xs font-semibold">Transportation</p>
            </div>
            <p className="text-xs font-semibold">16%</p>
          </div>
          <div className="flex flex-row justify-between w-[190px]">
            <div className="flex flex-row gap-1 items-center">
              <div className="rounded-full bg-[#E2FF32] w-[9px] h-[9px] "></div>
              <p className="text-xs font-semibold">Carding</p>
            </div>
            <p className="text-xs font-semibold">27%</p>
          </div>
          <div className="flex flex-row justify-between w-[190px]">
            <div className="flex flex-row gap-1 items-center">
              <div className="rounded-full bg-[#FEC102] w-[9px] h-[9px] "></div>
              <p className="text-xs font-semibold">Heating & Cooling</p>
            </div>
            <p className="text-xs font-semibold">35%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart