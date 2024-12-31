import React from "react";
import './Header.css';
import { Homelayout } from "../../Features/Home/homelayout";
import { Routes, Route } from 'react-router-dom';
import { Shoplayout } from "../../Features/Shop/shoplayout";
import { Adminlogsucc } from "../../Features/admin/adminlogsucc";
export const Adminheader = () => {
    return (
        
            <Adminlogsucc />
            //  <header style={{ position: "relative", top: "-350px" }}> 
                
            //      <nav>
            //         <a href="/home" >Home</a>
            //         <a href="/shopnow">Shop Now</a>
            //         <a href="/adminlog"></a>
            //     </nav>
            //     <Homelayout />
            //  </header>
    );
}