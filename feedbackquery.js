import React, { useState } from "react";
import "./Feedback.css";
import { Button } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export const Feedbackquery = () => {
    const [isfirstname, setisfirstname] = useState(null);
    const [islastname, setislastname] = useState(null);
    const [ismail, setismail] = useState(null);
    const [isfeedback, setisfeedback] = useState(null);
    const [issubmit, setissubmit] = useState(false);
    const [iserror, setiserror] = useState(false);
    const [iscontacterr, setiscontacterr] = useState(false);
    const [iscontact, setiscontact] = useState(null);
    const [dialcode, setdialcode] = useState("+");
    const [countryname, setcountryname] = useState("INDIA");

    const handlefirstname = (event) => {
        setisfirstname(event.target.value);
    }
    const handlelastname = (event) => {
        setislastname(event.target.value);
    }
    const handlemail = (event) => {
        setismail(event.target.value);
    }
    const handlefeedback = (event) => {
        setisfeedback(event.target.value);
    }
    const handlesubmit = (event) => {
        setiserror(true);
        setissubmit(true);
        event.preventDefault();
        // if (setiserror == false) {
        //     alert("Agree");
        // }
    }
    const handlecontact = (phone, country) => {
        setiscontacterr(false);
        setiscontact(phone?.replace(country?.dialcode, ""));
        setdialcode(country?.dialcode);
        setcountryname(country?.name.toUpperCase());
    }

    return (
        <div className="feedback-background">
            <div className="background-opacity" >
                <h1 className="feedbackh1">Feedback</h1>
                <form onSubmit={handlesubmit}>
                    <div className="input-details">
                        <h3 style={{ marginTop: "0" }}>First Name : </h3>
                        <input type="text" value={isfirstname} placeholder="Enter first name" onChange={handlefirstname} />
                        <br />
                        {
                            iserror && !isfirstname && <span className="errorclr" >First name is required</span>
                        }
                        <h3>Last Name : </h3>
                        <input type="text" value={islastname} placeholder="Enter last name" onChange={handlelastname} />
                        <br />
                        {
                            iserror && !islastname && <span className="errorclr">Last name is required</span>
                        }
                        <h3>Contact Number : </h3>
                        <PhoneInput country={'in'} placeholder="Enter contact number" enableSearch={true} value={iscontact} onChange={(phone, country) => handlecontact(phone, country)} />
                        {
                            iserror && !iscontact && <span className="errorclr">Contact number is required</span>
                        }

                        <h3>Email Address : </h3>
                        <input type="email" value={ismail} placeholder="Enter email address" onChange={handlemail} />
                        <br />
                        {
                            iserror && !ismail && <span className="errorclr">Email address is required</span>
                        }
                        <h3>Feedback : </h3>
                        <textarea value={isfeedback}  placeholder="Enter feedback" onChange={handlefeedback} />
                        <br />
                        {
                            iserror && !isfeedback && <span className="errorclr">Feedback not written</span>
                        }
                        <br />
                        <button type="submit">SUBMIT</button>
                    </div>
                    {issubmit ? <div className="output-details">
                        {/* <h1>OUTPUT</h1> */}
                        <p><b>FIRST NAME : </b>{isfirstname}</p><hr />
                        <p><b>LAST NAME : </b>{islastname}</p><hr />
                        <p><b>EMAIL ADDRESS : </b>{ismail}</p><hr />
                        <p><b>CONTACT NUMBER : </b>{iscontact}</p><hr />
                        <p><b>FEEDBACK : </b>{isfeedback}</p>

                    </div> : undefined}
                </form>
            </div>
        </div>
    );
}