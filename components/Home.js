import React from "react";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Card from "./Card";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const data = [
  {
    id: 1,
    title: "Carbon Footprint",
    value: "2,412,314t",
    percent: "-45%",
    main: true
  },
  {
    id: 2,
    title: "Emissions by spinning",
    value: "72,3694t",
    percent: "-60%",
  },
  {
    id: 3,
    title: "Emission By Transportation",
    value: "361,874t",
    percent: "0.00",
  },
  {
    id: 4,
    title: "Emission By Carding",
    value: "241,231t",
    percent: "+0.6%",
    extra: "From 4.6% ",
  },
];

const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  return (
    <div className={inter.className}>
      <div className="w-full bg-gray-100 h-fit pb-8">
        <Navbar />
        <div>
          <div className="flex flex-row space-x-4 px-6 py-6">
            {data?.map((item) => (
              <Card 
                key={item.id}
                title={item.title}
                value={item.value}
                percent={item.percent}
                extra={item.extra}
                main={item.main}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row pr-6">
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
