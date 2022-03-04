import React, { useContext } from 'react';
import "./Adminpage.css";
import Allleads from './Allleads';
import Dropdown from "./Dropdown";
import Leadanalytics from './Leadanalytics';
import Leadstable from './Leadstable';
import Sidenav from './Sidenav';



const Adminpage = () => {


  return (
    <div className="main flex">
        <div className="h-full w-1/6 bg-sidenav">
            <Sidenav/>
        </div>
        <div className="h-full w-full bg-background flex flex-col">
            <div className="w-full bg-sidenav h-1/12">
            <Dropdown/>
            </div>
            <div className="w-full h-full pl-[2%] pr-[2%] pb-[1%] pt[1%] bg-background">
                <Leadanalytics/>
                <Allleads/>
                <Leadstable/>
            </div>
        </div>

    </div>
  )
}

export default Adminpage;
