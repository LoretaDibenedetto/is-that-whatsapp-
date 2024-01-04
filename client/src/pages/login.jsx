import React from "react";
import Image from "next/image";
import {FcGoogle} from "react-icons/fc";

function login() {
  const handleLogin = ()=>{
    alert("Login Successful");
  }
  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
    <div className="flex items-center justify-center gap-2 text-white">
      <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300}/>
      <span className="text-7xl">Whatsapp</span>
     
     </div>
     <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
      onClick={handleLogin}>
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-2xl">Login with Google</span>

     </button>
    </div>;
}

export default login;
