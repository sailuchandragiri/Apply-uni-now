import React, {useEffect, useState } from 'react'
import './Login.css'
import Dropdown from "./Dropdown";

import ReactPaginate from "react-paginate";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import DateDrop from './DateDrop';
import ContactDrop from './ContactDrop';


function Login() {
        
        const [pagenumber, setPaganumber] = useState(0);
        const [list, setList] = useState([]);
        const [users, setUsers] = useState(list.slice(0,30));
        const [dup,setdup] = useState([]);
        const [contacted, setContacted] = useState([]);

        const token = localStorage.getItem("token");
        console.log("after login",token);

       
        
        
  

        useEffect(() => {
             getData();
        }, []);


        // useEffect(()=>{
        //     getContacted();
        // },[]);

        const getData = async () => {

            
            const data = await axios.get(
              "https://dev-test-api.scube.me/admin/contact-requests/?page=1",
              {
                headers: {
                  "Authorization": `Bearer ${token}`,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
            try {
              console.log(data.data.data.data);
              setList(data.data.data.data);
              setdup(data.data.data.meta)
              //setCategoryData(data.data.data.items);
            } catch (error) {
              console.log(error);
            }
          
          };

          const getContacted = async () => {

            
            const data = await axios.get(
              "https://dev-test-api.scube.me/admin/contact-requests/statistics",
              {
                headers: {
                  "Authorization": `Bearer ${token}`,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
            try {
              console.log(data.data.data.contacted);
              // console.log(data.data.data.contacted);
              // console.log(data.data.data.not_contacted);
              setContacted(data.data.data);
            } catch (error) {
              console.log(error);
            }
          
          };

          

          useEffect(()=>{
            getContacted();
        },[]);


          
          console.log(dup.next_page_url);
          const nextData = async() =>{
            const data = await axios.get(
                `https://dev-test-api.scube.me/admin/contact-requests${dup.next_page_url}`,
                {
                  headers: {
                    "Authorization": `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",     
                  },
                }
              );
              try {
                console.log(data.data.data.data);
                setList(data.data.data.data);
                setdup(data.data.data.meta);
                //setCategoryData(data.data.data.items);
              } catch (error) {
                console.log(error);
              }
          }

          console.log(dup.previous_page_url);

          const prevData = async() =>{
            const data = await axios.get(
                `https://dev-test-api.scube.me/admin/contact-requests${dup.previous_page_url}`,
                {
                  headers: {
                    "Authorization": `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",     
                  },
                }
              );
              try {
                console.log(data.data.data.data);
                setList(data.data.data.data);
                //setCategoryData(data.data.data.items);
              } catch (error) {
                console.log(error);
              }
          }


        //calender
        const [value, onChange] = useState(new Date());
        

        //for search funtionality
        const  [searchTerm, setSearchTerm] = useState(''); 

        const usersperpage = 6;
        const pagesvisited = pagenumber * usersperpage;

        
       const displayusers= list
       .filter((val) => {
             if(searchTerm === ""){
                 return val;
              }else if(val.name.includes(searchTerm)){
                 return val;
              }
        })
       .map((data)=>{
            return(
                <div className="h-14 w-98 ml-4 rounded-xl mt-3 bg-background flex ...">
                     
                <div className="h-full w-7 ml-2  pl-1 text-white text-xs pt-5">{data.id}</div>
                <div className="h-full w-24 ml-4   text-white text-xs pt-5">{data.intake}</div>
                <div className="h-full w-36 ml-2  pt-5 text-white text-xs">{data.name}</div>
                <div className="h-full w-32 ml-2  pt-5 text-white text-xs">{data.phone}</div>
                <div className="h-full w-48 ml-2  pt-5 text-white text-xs">{data.email}</div>
                <div className="h-full w-24 ml-2  pt-5 text-white text-xs">{data.destination}</div>
                <div className="h-full w-24 ml-2  pt-5 text-white text-xs">{data.industry}</div>
                <div className="h-full w-20 ml-2  pt-5 text-white text-xs">{data.intake}</div>
                {data.is_contacted  ? (
                  <div className="h-full w-24 ml-2  pt-3 ">
                    <img src="contacted.png" alt="contacted"/>
                </div> 
                ) : (
                  <div className="h-full w-24 ml-2  pt-3 ">
                    <img src="not_contacted.png" alt="contacted"/>
                </div> 
                )
       }
                {/* <div className="h-full w-24 ml-2  pt-3 ">
                    <img src="contacted.png" alt="contacted"/>
                </div> */}
                <div className="h-full w-14 ml-8  pt-5">
                    <img src="Peop.png" alt="activate"/>
                </div>
            </div>
            );
        });

        const pageCount = Math.ceil(users.length/usersperpage);

        const changePage = ({selected})=>{
            setPaganumber(selected);
        }

  return (

    //code for top navbar
   <div className="w-full h-full mt-5 flex ...">
        <div className="w-1/4 h-full bg-sidenav flex-col flex ..." >
            <div className="w-full h-24  mt-11 ">
                <div className="w-56 ml-2 h-full">
                    <img src="Groupname.png" alt="name"></img>
                </div>
                <div className="w-full h-11 bg-white pl-2">
                    <div className="w-66 h-full bg-leads pt-3">
                        <div className="w-5 ml-20  h-5 flex-row flex ...">
                            <img className="w-full h-full" src="Vector.png" alt="people_icon"></img>
                            <div className="text-white ml-3 text-bold">Leads</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-16  mt-80"></div>
            <div className="w-full h-16  mt-80"></div>
            <div className="w-full h-9 mt-40  ">
                <img src="Footer.png" alt="name" className="w-full h-full pl-14 pr-14 pt-3 pb-3" />
            </div>
            
        </div>

        
        <div className="w-full h-full flex-col flex ...">
            {/* code for alaytics */}
          <div className="w-full h-16 bg-sidenav ">
            <Dropdown/>
          </div>
          <div className="w-full h-11/12 bg-background pl-5 pr-5 pt-5">
              <div className="w-full h-14  flex ...">
                  <div className="w-60 h-full mr-96 ml-2">
                      <img src="Leads Analytics.png" alt="lead name" className="mt-6"/>
                  </div>
                  <div className="w-52 h-full ml-72 rounded-xl pb-2 bg-today mb-3  flex ...">
                      <DateDrop/>
                      
                  </div>
              </div>
              <hr className="mt-4 mb-4 w-98 "/>

              {/* code for leads */}
              <div className=" w-full h-40  flex-col flex ...">
                  <div className="w-96 h-24 rounded-2xl bg-analy flex ...">
                      <div className="h-full w-20 ml-4  flex-col flex ...">
                          <div className="w-full h-16 mt-5  text-5xl text-green-300">{contacted.total_contacts}</div>
                          <div className="w-full h-8 text-white text-sm  ml-1">Total Leads </div>
                      </div>
                      <div className="h-full w-64 ml-9   flex ...">
                          <div className="h-full w-1/2 pl-5 flex-col flex ...">
                              <div className="h-1/4 w-full text-sm mt-4 text-slate-300 ">Uncontacted</div>
                              <div className="h-full w-full text-xl text-white text-bold mt-4">{contacted.not_contacted}</div>
                          </div>
                          <div className="h-full w-1/2">
                                <div className="h-1/4 w-full text-sm mt-4 text-slate-300 ">Contacted</div>
                              <div className="h-full w-full text-xl text-white text-bold mt-3">{contacted.contacted}</div>
                          </div>
                      </div>
                  </div>
                  <div className="w-52 h-16 ml-2 ">
                      <img src="All Leads (1).png" alt="all leads" className="mt-8 pt-1"/>
                    </div>
              </div>
              <hr className="mt-4 mb-4 w-98"/>  
              <div className=" w-94 h-18 pb-5 rounded-2xl ml-2 pt-6  border-2 border-neutral-500 bg-leadsback mb-4 flex-row flex ...">
                  <div className="h-12 w-40 ml-9 rounded-xl bg-leadsearch  flex ...">
                      <div className="h-full pt-2 pl-2 pb-2 w-28 ">
                          <div className="h-1/2 w-full  text-xs  pl-3 text-gray-500">Date Range</div>
                          <div className="h-1/2 w-full text-white text-sm  pl-3 ">All</div>
                      </div>
                      <div className="h-full w-11">
                          <img src="Calender.png" alt="calender" className="ml-3 mt-4" />
                           </div>
                  </div>
                  <div className=" w-40 ml-2 rounded-xl mr-3 bg-leadsearch flex ...">
                     <ContactDrop/> 
                  </div>
                  <div className="h-12 w-80 ml-2 mr-20 rounded-xl bg-leadsearch flex ..." >
                      <img src="Search.png" alt="searchicon" className="pt-4 pl-4 pb-4"/>
                      <input placeholder="Search..." type="text" onChange={event => {setSearchTerm(event.target.value)}} className="ml-2  text-white text-sm bg-leadsearch outline-none"/>
                  </div>
                  <div className="h-12 w-28 ml-40 rounded-xl">
                      <img src="filled button.png" alt="button" className="mt-1 ml-1"/>
                  </div>
                  <div className="h-12 w-20 ml-1 rounded-xl text-white pl-4 text-xs pt-4 underline underline-offset-1 ...">Reset</div>
              </div>
              <div className="text-white text-xs ml-16 mb-2">Showing {usersperpage+pagesvisited} out of {users.length} Results. </div>

              {/* code for list of contacts */}
              
              <div className="h-1/2 w-full pt-5  pr-3 rounded-2xl bg-list mb-2">
                  <div className="h-16 w-98 ml-4 pt-4 flex ...">
                  <div className="h-full w-10 ml-2  pl-1 text-gray-400 text-xs pt-5">Sl. No</div>
                        <div className="h-full w-24 ml-2 text-gray-400 text-xs pt-5">Date</div>
                        <div className="h-full w-36 ml-2  pt-5 text-gray-400 text-xs">Lead Name</div>
                        <div className="h-full w-32 pt-5 text-gray-400 text-xs">Phone number</div>
                        <div className="h-full w-48 ml-3 pt-5 text-gray-400 text-xs">Email</div>
                        <div className="h-full w-24 pt-5 text-gray-400 text-xs">Study Destination</div>
                        <div className="h-full w-24 ml-3  pt-5 text-gray-400 text-xs">Level of Study</div>
                        <div className="h-full w-20 ml-3  pt-5 text-gray-400 text-xs">Intake</div>
                        <div className="h-full w-24 ml-4  mt-4 text-gray-400 text-xs ">Status</div>
                        <div className="h-full w-14 ml-4  pt-5 text-gray-400 text-xs">Action</div> 
                  </div>
                  
                  <div>{displayusers}</div>
              </div>
            <ReactPaginate className="w-1/4   h-12 mt-8 flex ..."
            previousLabel={<div className=" mt-3 ml-96 mr-3">
                <img src="l arrow.png" alt="backarrow" onClick={prevData} className="ml-14" />
            </div>}
            nextLabel={<div className="mt-3 ml-3">
                <img src="arrow.png" alt="front arrow" onClick={nextData}/>
            </div>}
             
             pageCount={pageCount} className="new"
             onPageChange={changePage}
             containerClassName={"paginationBttns"}
             previousLinkClassName={"previousBttn"}
             nextLinkClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName={"paginationActive"}
            />
          </div>
        </div> 
    </div>
  )
}
export default Login;