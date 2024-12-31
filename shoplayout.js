import React from "react";
import { Productshop } from "./product";
import { Userheader } from "../../Layout/Header/userheader";
import { Footer } from "../../Layout/Footer/footer";

export const Shoplayout = () => {
    return(
        <div>
            <Userheader />
            <Productshop />
            <Footer />
        </div>
    );
}