import React, { useState } from "react";
import '../Home/Home.css';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Footer } from "../../Layout/Footer/footer";


export const Signup = () => {
    const [userfirstname, setuserfirstname] = useState("");
    const [userlastname, setuserlastname] = useState("");
    const [useremail, setuseremail] = useState("");
    const [userdob, setuserdob] = useState(dayjs());
    const [userpassword, setuserpassword] = useState("");
    const [usercontactno, setusercontactno] = useState("");
    const [dialcode, setdialcode] = useState("+");
    const [countryname, setcountryname] = useState("INDIA");
    const [useraddress, setuseraddress] = useState("");
    const [usersubmit, setusersubmit] = useState(false);
    const [usererror, setusererror] = useState(false);
    const [contacterr, setcontacterr] = useState(false);
    const handlefirstname = (event) => {
        setuserfirstname(event.target.value);
    }
    const handlelastname = (event) => {
        setuserlastname(event.target.value);
    }
    const handleemailid = (event) => {
        setuseremail(event.target.value);
    }
    const handlepassword = (event) => {
        setuserpassword(event.target.value);
    }
    const handleaddress = (event) => {
        setuseraddress(event.target.value);
    }
    const handlecontactno = (phone, country) => {
        setcontacterr(false);
        setusercontactno(phone?.replace(country?.dialcode, ""));
        setdialcode(country?.dialcode);
        setcountryname(country?.name.toUpperCase());
    }
    const handlesubmit = (event) => {
        setusererror(true);
        setusersubmit(true);
        event.preventDefault();
    }
    return (
        <div className="signupcss">
            <div className="signupbackground-opacity">
                <h1 className="registerh1">Register in Greenstore</h1>
                <form onSubmit={handlesubmit} >
                    <h3 style={{ marginTop: '0' }}>First Name : </h3>
                    <input type="text" onChange={handlefirstname} placeholder="Enter First name" value={userfirstname} className="borderinput" /><br />
                    {
                        usererror && !userfirstname && <span className="errorclr">First name required</span>
                    }
                    <h3>Last Name : </h3>
                    <input type="text" onChange={handlelastname} placeholder="Enter Last name" value={userlastname} className="borderinput" /><br />
                    {
                        usererror && !userlastname && <span className="errorclr" >Last name required</span>
                    }
                    <h3>Date of Birth : </h3>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker value={userdob} onChange={(newValue) => setuserdob(dayjs(newValue))}
                            // slotProps={{
                            //     textField: {
                            //         className: "noborderinput",
                            //     },
                            // }} 
                            />
                    </LocalizationProvider>
                    <h3>Email Id : </h3>
                    <input type="email" onChange={handleemailid} placeholder="Enter Email id" value={useremail} className="borderinput" /><br />
                    {
                        usererror && !useremail && <span className="errorclr">Email id required</span>
                    }
                    <h3>Password : </h3>
                    <input type="password" onChange={handlepassword} placeholder="Enter password" value={userpassword} className="borderinput" /><br />
                    {
                        usererror && !userpassword && <span className="errorclr">Password required</span>
                    }
                    <h3>Contact Number : </h3>
                    <PhoneInput country={'in'} placeholder="Enter contact number" enableSearch={true} value={usercontactno} onChange={(phone, country) => handlecontactno(phone, country)} />
                    {
                        usererror && !usercontactno && <span className="errorclr">Contact number required</span>
                    }

                    <h3>Address : </h3>
                    <textarea value={useraddress} placeholder="Enter address" onChange={handleaddress} />
                    <br />
                    {
                        usererror && !useraddress && <span className="errorclr">Address not written</span>
                    }
                    <br />
                    <button type="submit" className="signup-button">SUBMIT</button>

                    {usersubmit ? <div className="signupoutput-details">
                        <h1>User Details</h1>
                        <p><b>FIRST NAME :</b> {userfirstname}</p><hr />
                        <p><b>LAST NAME : </b>{userlastname}</p><hr />
                        <p><b>DATE OF BIRTH :</b> {dayjs(userdob).format('MMMM Do YYYY')}</p><hr />
                        <p><b>EMAIL ADDRESS :</b> {useremail}</p><hr />
                        <p><b>Password : </b>{userpassword}</p><hr />
                        <p><b>PHONE NUMBER : </b>{usercontactno}</p><hr />
                        <p><b>ADDRESS : </b>{useraddress}</p>

                    </div> : undefined}
                </form>
            </div>
            <Footer />
        </div>
    );
}