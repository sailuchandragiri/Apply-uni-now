import React from 'react'
import ContactDrop from './ContactDrop';

const Allleads = () => {
  return (
      <>
   <div className="h-40%">
        <div className="mb-[1%]">
            <img src="All Leads (1).png" alt="all leads" className="mt-8 pt-1"/>
        </div>
        <hr className="border-sidenav border-2"/>
        

   </div>
   <div className="w-full h-[12%] mt-[1%] justify-between pt-[2.5%] pb-[1.5%] bg-leadsback border-analy border-2 rounded-2xl flex">
        <div className="h-[70%]    flex">
            <div className="bg-leadsearch rounded-lg ml-9 mt-[-3%]  h-full flex">
                <div className="flex flex-col ml-3 pt-2">
                    <div className="text-date text-xs">Date Range</div>
                    <div className="text-white">All</div>
                </div>
                <div className="mt-4 ml-12 mr-3">
                <img src="Calender.png" alt="calender"/> 
                </div>
            </div>
            <div className="bg-leadsearch rounded-lg ml-3 mt-[-3%]  h-full flex">
               <ContactDrop/>
            </div>
            <div className="bg-leadsearch ml-3 rounded-lg   mt-[-3%] flex">
                <div className="w-4 ml-2 pt-4 ">
                <img src="Search.png" alt="searchicon" className="" />
                </div>
                <div className="bg-leadsearch rounded-lg">
                    <input placeholder="Search..."  className="bg-leadsearch  mt-2.5 ml-2 " type="text"/>
                </div>
            </div>            
        </div>
        <div className="h-[50%] w-40% mr-10 mt-[-1%]">
             <div className="rounded-xl">
                <img src="filled button.png" alt="button"/>
            </div>
        </div>
   </div>
    <div className="ml-[1%] text-white text-sm mt-[1%]">Shwoing 6 outof 666 Results</div>
   </>
  );
}

export default Allleads;


// <div className=" w-94 h-18 pb-5 rounded-2xl ml-2 pt-6  border-2 border-neutral-500 bg-leadsback mb-4 flex-row flex ...">
// <div className="h-12 w-40 ml-9 rounded-xl bg-leadsearch  mr-2 flex ...">
//     <div className="h-full pt-2 pl-2 pb-2 w-28 ">
//         <div className="h-1/2 w-full  text-xs  pl-3 text-gray-500">Date Range</div>
//         <div className="h-1/2 w-full text-white text-sm  pl-3 ">All</div>
//     </div>
//     <div className="h-full w-11">
//         <img src="Calender.png" alt="calender" className="ml-3 mt-4" />
//          </div>
// </div>
// <div className=" w-40 ml-2 rounded-xl  flex ...">
//    <ContactDrop/> 
// </div>
// <div className="h-12 w-80 ml-2 mr-20 rounded-xl bg-leadsearch flex ..." >
//     <img src="Search.png" alt="searchicon" className="pt-4 pl-4 pb-4"/>
//     <input placeholder="Search..." type="text" onChange={event => {setSearchTerm(event.target.value)}} className="ml-2  text-white text-sm bg-leadsearch outline-none"/>
// </div>
// <div className="h-12 w-28 ml-40 rounded-xl">
//     <img src="filled button.png" alt="button" className="mt-1 ml-1"/>
// </div>
// <div className="h-12 w-20 ml-1 rounded-xl text-white pl-4 text-xs pt-4 underline underline-offset-1 ...">Reset</div>
// </div>
// <div className="text-white text-xs ml-16 mb-2">Showing {usersperpage+pagesvisited} out of {users.length} Results. </div>
