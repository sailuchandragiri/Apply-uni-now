import React from "react";
import DateDrop from "./DateDrop";

const Leadanalytics = () => {
  return (
    <>
      <div className="w-full h-[7%]  mt-[1%]  flex">
        <div className="w-full h-[50%] justify-between flex">
          <div className="w-[30%]  mt-[1.5%] h-[40%]  text-5xl">
            <img src="Leads Analytics.png" alt="lead name" />
          </div>
          <div className="">
            <DateDrop />
          </div>
        </div>
      </div>
      <hr className="border-sidenav mt-[1%] border-2" />
      <div className="w-[22%] h-[10%] mt-[1%] bg-analy rounded-2xl flex">
        <div className="h-full w-20 ml-4  flex-col flex ...">
          <div className="w-full h-16 mt-3  text-5xl text-green-300">
            20
          </div>
          <div className="w-full h-8 text-white text-sm  ml-1">
            Total Leads
          </div>
        </div>
        <div className="h-full w-[60%] ml-5   flex ...">
          <div className="h-full w-1/2 flex-col flex ...">
            <div className="h-1/4 w-full text-sm mt-4 text-slate-300 ">
              Uncontacted
            </div>
            <div className="h-full w-full text-xl text-white text-bold mt-4">
              10
            </div>
          </div>
          <div className="h-full w-1/2">
            <div className="h-1/4 w-full text-sm mt-4 text-slate-300 ">
              Contacted
            </div>
            <div className="h-full w-full text-xl text-white text-bold mt-3">
              10
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadanalytics;

