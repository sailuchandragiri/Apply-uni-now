import React, { useContext, useEffect, useState } from "react";
import DateDrop from "./DateDrop";
import { AppContext } from "./Context/AuthContext";
import {AuthContext} from "./Context/AuthContext";
import axios from 'axios';

const Leadanalytics = () => {

  const {token1} = useContext(AppContext);
  const [total, setTotal] = useState([]);


  useEffect(() => {
    getData();
}, []);



  const getData = async () => {

            
    const data = await axios.get(
      "https://dev-test-api.scube.me/admin/contact-requests/statistics",
      {
        headers: {
          "Authorization": `Bearer ${token1}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      console.log("data from leadanalytics",data.data.data);
      setTotal(data.data.data);
      // setList(data.data.data.data);
      
    } catch (error) {
      console.log(error);
    }
  
  };




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
            {total.total_contacts}
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
              {total.not_contacted}
            </div>
          </div>
          <div className="h-full w-1/2">
            <div className="h-1/4 w-full text-sm mt-4 text-slate-300 ">
              Contacted
            </div>
            <div className="h-full w-full text-xl text-white text-bold mt-4">
              {total.contacted}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadanalytics;

