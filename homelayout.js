import React from "react";
import { Homeanimation } from "./Homeanimation";
import { Peopleknow } from "./peoplestory";
import { Customers } from "./customers";
import { Giftcard } from "./giftcard";
import { Secureservive } from "./secureservice";
import { Footer } from "../../Layout/Footer/footer";
export const Homelayout = () => {
    return (
        <>
            <Homeanimation />
            <Peopleknow />
            <Customers />
            <Giftcard />
            <Secureservive/>
            <Footer />
        </>
    );
}