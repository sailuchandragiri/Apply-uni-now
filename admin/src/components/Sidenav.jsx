import React from "react";

const Sidenav = () => {
  return (
    <div className="h-full w-full mt-1/12 flex flex-col">
      <div className="mt-12 ml-4">
        <img src="Groupname.png" alt="name"></img>
      </div>
      <div className="w-full mt-10  h-12 flex flex-row">
        <div className="h-full w-[2%] bg-white"></div>
        <div className="w-full h-full bg-leads pt-3">
          <div className="w-[30%] ml-20  h-5 flex-row flex">
            <img
              className="w-full h-full"
              src="Vector.png"
              alt="people_icon"
            ></img>
            <div className="text-white  ml-3 text-bold">Leads</div>
          </div>
        </div>
      </div>
        <div className="w-full h-9 mt-[840px]  ">
                <img src="Footer.png" alt="name" className="w-full h-full pl-14 pr-14 pt-3 pb-3" />
        </div>
     
    </div>
  );
};

export default Sidenav;
