import React from "react";
import { Userheader } from "./Header/userheader";
import { Adminheader } from "./Header/adminheader";
export const Layout =() => {
// ({ children }: { children: any })
    return(
        <>
        <Userheader />
        <Adminheader />
        </>
    );

}
