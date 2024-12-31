import React from "react";
import './Home.css';
import { Hidden } from "@mui/material";
export const Customers = () => {
    return (
        <div className="custsay">
            <h1>What Does Our Customers Say</h1>
            <div className="greenline"></div>
            {/* <hr /> */}
            <div className="customers">
                <div className="cust3">
                    <figure>
                        <img src="\Static\Images\quote-left-solid.svg" style={{ width: "20px", height: "20px" }} />
                    </figure>
                    <p>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</p>
                    <figure>
                        <img src="/Static/Images/c1.jpg" />
                    </figure>
                    <h6>Jennifer Lewis</h6>
                </div>
                <div className="cust3">
                    <figure>
                        <img src="\Static\Images\quote-left-solid.svg" style={{ width: "20px", height: "20px" }} />
                    </figure>

                    <p>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</p>
                    <figure>
                        <img src="/Static/Images/c2.jpg" />
                    </figure>
                    <h6>Alicia Heart</h6>
                </div>
                <div className="cust3">
                    <figure>
                        <img src="\Static\Images\quote-left-solid.svg" style={{ width: "20px", height: "20px" }} />
                    </figure>

                    <p>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</p>
                    <figure>
                        <img src="/Static/Images/c3.jpg" />
                    </figure>
                    <h6>Juan Carlos</h6>
                </div>
            </div>

        </div>
    );
}