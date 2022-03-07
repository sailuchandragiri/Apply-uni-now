import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context/AuthContext";
import { AuthContext } from "./Context/AuthContext";
import axios from "axios";

import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

const Allleads = () => {
  const { token1 } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const { setFetchedData } = useContext(AppContext);
  const [range, setRange] = useState([]);
  const [contact, setContact] = useState("");

  useEffect(() => {
    getData();
  }, []);

 const handleSubmit=async()=>{
    const data = await axios.get(
        `https://dev-test-api.scube.me/admin/contact-requests?status=${contact}`,
        {
          headers: {
            Authorization: `Bearer ${token1}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      try {
        console.log("data from leadanalytics", data.data.data.data);
        setFetchedData(data.data.data.data);
  
        // setList(data.data.data.data);
      } catch (error) {
        console.log(error);
      }
  }

  const getData = async (e) => {
    setSearch(e.target.value);
    console.log(search);

    console.log(contact);

    console.log("data for the date", range);

    const start = range[0];

    const to = range[1];

    console.log(start.substring(1, 4), "values", to);

    const data = await axios.get(
      `https://dev-test-api.scube.me/admin/contact-requests?page=1&search=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token1}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      console.log("data from leadanalytics", data.data.data.data);
      setFetchedData(data.data.data.data);

      // setList(data.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-40%">
        <div className="mb-[1%]">
          <img src="All Leads (1).png" alt="all leads" className="mt-8 pt-1" />
        </div>
        <hr className="border-sidenav border-2" />
      </div>
      <div className="w-full h-[12%] mt-[1%] justify-between pt-[2.5%] pb-[1.5%] bg-leadsback border-analy border-2 rounded-2xl flex">
        <div className="h-[70%]    flex">
          <div className="bg-leadsearch rounded-lg ml-9 mt-[-3%]  h-full flex">
            <div className="flex text-white flex-col ml-3 ">
              <div className="text-date text-xs">Date Range</div>
              <DateRangePickerComponent
                placeholder="All"
                onChange={(e) => setRange(e.target.value)}
              ></DateRangePickerComponent>
            </div>
          </div>
          <div className="bg-leadsearch rounded-lg ml-3 mt-[-3%]  h-full flex">
            <div>
              <div className="text-gray-300 text-xs pl-2 ">Status</div>
                 <div className="pl-2 mt-2 mb-1  pr-2">
                    <select value={contact} onChange={e=>setContact(e.target.value)} className="bg-leadsearch text-white border-hidden">
                        <option value="all">All</option>
                        <option value="contacted">Contacted</option>
                        <option value="not_contacted">Not_Contacted</option>
                    </select>
                </div>
            </div>
          </div>
          <div className="bg-leadsearch ml-3 rounded-lg   mt-[-3%] flex">
            <div className="w-4 ml-2 pt-4 ">
              <img src="Search.png" alt="searchicon" className="" />
            </div>
            <div className="bg-leadsearch rounded-lg">
              <input
                placeholder="Search..."
                className="bg-leadsearch text-white  mt-2.5 ml-2 "
                type="text"
                onChange={getData}
              />
            </div>
          </div>
        </div>
        <div className="h-[50%] w-40% mr-10 mt-[-1%]">
          <div className="rounded-xl">
            <img src="filled button.png" alt="button" onClick={handleSubmit}/>
          </div>
        </div>
      </div>
      <div className="ml-[1%] text-white text-sm mt-[1%]">
        Shwoing 6 outof 666 Results
      </div>
    </>
  );
};

export default Allleads;
