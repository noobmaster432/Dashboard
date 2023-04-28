"use client";
import React, { useState } from "react";
import Home from "@/components/Home";
import Sidebar from "@/components/Sidebar";

const Page = () => {
  return (
    <div className="py-0">
      <Sidebar />
      <div className="sm:pl-64">
        <Home />
      </div>
    </div>
  );
};

export default Page;
