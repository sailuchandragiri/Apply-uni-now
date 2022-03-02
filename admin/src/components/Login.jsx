import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Admin() {
 const  history=useHistory();
  const [email, setemail] = useState(true);
  const [password, setpassword] = useState(true);
  const [token, setToken] = useState("");


  

  const getToken = async () => {
    try {
      const { data } = await axios.post(
        "https://dev-test-api.scube.me/login",{
          email:email,
          password:password
        }
      );
      setToken(data.data.token.token);
      history.push("/login");
      //handleToken(data.data.token.token);
      console.log(data.data.token.token);

      localStorage.setItem("token", data.data.token.token);
      // sets the value of "message" to be "saved in browser storage"

      localStorage.setItem("user",data.data.email);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="bgg">
      <div className=" flex justify-center sm:flex sm:flex-row-reverse sm:justify-start sm:mr-60">
        <img
          className="w-1/2  pt-24 sm:w-60 sm:mr-4"
          src="Group.png"
          alt="logo"
        />
      </div>

      <div className="flex justify-center mx-4 sm:flex sm:flex-row-reverse sm:justify-start sm:mr-44">
        <img className="w-96 sm:w-96 sm:mr-4" src="apply.png" alt="png" />
      </div>

      <div className="flex mx-auto sm:flex sm:flex-row-reverse sm:mr-44">
        <p className="text-white w-96 ml-4 sm:w-96 sm:mr-4">
          Please login to your Admin Panel.
        </p>
      </div>
      <form>
        <div className="flex mt-4 br-b border-white mx-auto sm:flex sm:flex-row-reverse sm:mr-44">
          <input
            type="email"
            placeholder="Email"
            className=" mt-4 text-black w-96 mx-4 text-xl sm:w-96 outline-none pl-2"
            onChange={(e)=>{setemail(e.target.value)}}
            required
          />
        </div>

        <div className="flex mx-auto sm:flex sm:flex-row-reverse sm:mr-44">
          <input
            type="password"
            placeholder="password"
            className="mt-4 text-black text-xl w-96 mx-4  sm:w-96 outline-none pl-2"
            onChange={(e)=>{setpassword(e.target.value)}}
          />
        </div>
        <div className="flex mx-auto sm:flex sm:flex-row-reverse sm:mr-72">
          <Link to="/login">
            <button className="w-36 h-8 rounded-md mr-4 ml-28 mt-10 bg-blue-500 text-white text-xl "
            onClick={(e)=>{
              e.preventDefault();
              getToken()
            }}
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Admin;
