import React from 'react';
import { useState,useEffect, useContext } from 'react';
import axios from "axios";
import "./Adminpage.css";
import { AppContext } from './Context/AuthContext';
import {AuthContext} from "./Context/AuthContext";






const Leadstable = () => {
   // const [pagenumber, setPaganumber] = useState(0);
    const {token1} = useContext(AppContext);
    const [list, setList] = useState([]);
    const [users, setUsers] = useState(list.slice(0,30));
    const [dup,setdup] = useState([]);
    const {dataStore} = useContext(AppContext);
    const {setFetchedData} = useContext(AppContext);
  

    // const token = localStorage.getItem("token");
    // console.log("after login",token);


    useEffect(() => {
        getData();
   }, []);

   

    const getData = async () => {

            
        const data = await axios.get(
          "https://dev-test-api.scube.me/admin/contact-requests?page=1",
          {
            headers: {
              "Authorization": `Bearer ${token1}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        try {
          console.log(data.data.data.data);
          setList(data.data.data.data);
          setdup(data.data.data.meta)
          setFetchedData(data.data.data.data);
          //setCategoryData(data.data.data.items);
        } catch (error) {
          console.log(error);
        }
      
      };

      console.log(dup.next_page_url);
      const nextData = async() =>{
        const data = await axios.get(
            `https://dev-test-api.scube.me/admin/contact-requests${dup.next_page_url}`,
            {
              headers: {
                "Authorization": `Bearer ${token1}`,
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
                    "Authorization": `Bearer ${token1}`,
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

          
     
    console.log(list);
  return (
    <div className="bg-analy rounded-2xl m-auto">
        <table className="bg-analy mt-4 ml-5 pr-2 bgm rounded-t-2xl rounded-2xl">
            <thead className="text-font">
                <th className="h-20 pt-5 pl-2 text-sm">Sl. No</th>
                <th className="h-20 pt-5 pl-8 text-sm text-left ">Date</th>
                <th className="h-20 pt-5 pl-10 text-left text-sm">Lead Name</th>
                <th className="h-20 pt-5 pl-10 text-sm">Phone Number</th>
                <th className="h-20 pt-5 pl-9 text-left text-sm">Email</th>
                <th className="h-20 pt-5 pl-7 text-sm">Study Destination</th>
                <th className="h-20 pt-5 pl-2 text-sm">Level of Study</th>
                <th className="h-20 pt-5 pl-10 text-left text-sm">Intake</th>
                <th className="h-20 pt-5 pl-2 text-sm">Status</th>
                <th className="h-20 pt-5 pl-2 text-sm">Action</th>
            </thead>
           
            {
                dataStore.map((data)=>{
                    let number=0;

                    var day = data.created_at
                    var str_day = JSON.stringify(day);
                    console.log(str_day.substring(1,11));


                    
                    return(
                        
                        <tbody className="text-white   text-sm">
                            <tr className="bg-background  bgm" >
                                 <td className="pl-3 pt-3 pb-3">{number=number+1}</td>
                                <td className="pl-8">{data.created_at.substring(0,10)}</td>
                                <td className="pl-10">{data.name}</td>
                                <td className="pl-10">{data.phone}</td>
                                <td className="pl-10">{data.email}</td>
                                <td className="pl-10">{data.destination}</td>
                                <td className="pl-10">{data.level}</td>
                                <td className="pl-10">{data.intake.substring(0,data.intake.length-4)}</td>
                                <td className="pl-10">
                                    {data.is_contacted?(
                                    <div className="h-full w-24 ml-2  ">
                                        <img src="contacted.png" alt="contacted"/>
                                    </div> 
                                      ):(
                                        <div className="h-full w-24 ml-2  ">
                                        <img src="not_contacted.png" alt="contacted"/>
                                      </div> 
                                      )
                                    }
                                </td>
                                 <td className="pl-10">{data.is_contacted ? (
                                      <div className="h-full w-24 ml-2  ">
                                         <img src="Peop.png" alt="contacted"/>
                                    </div> 
                                 ):(
                                    <div className="h-full w-14 ml-8  ">
                                        <img src="not_cont.png " alt="activate"/>
                                    </div>  
                                 )}</td>
                            </tr>
                         </tbody>
                    )
                    
                })
            }
            
 
        </table>
    </div>
  )
}

export default Leadstable;
