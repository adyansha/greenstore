import React, { useState } from "react";
import './Home.css';
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Adminheader } from "../../Layout/Header/adminheader";
import { Homelayout } from "./homelayout";
import { useNavigate } from "react-router-dom";
export const Adminmodal = () => {

    const [open, setopen] = React.useState(false);
    const [adminerror,setadminerror] = useState(false);
    // const [adminsubmit,setadminsubmit] = useState(false);
    const [loginerror,setloginerror] = useState(false);
    const [adminemail,setadminemail] = useState("");
    const [adminpassword,setadminpassword] = useState("");
    const [showadminheader,setshowadminheader] = useState(false);
    const validemail = "abc@gmail.com";
    const validpassword = "123456789";
    const navigate = useNavigate();
    const handleopen = () => {
        setopen(true);
        setloginerror(false);
    };
    const handleclose = () => {
        setopen(false);
        setadminemail("");
        setadminpassword("");
        setadminerror(false);
        setloginerror(false);
    };
    const handleemail = (event) => {
        setadminemail(event.target.value);
    }
    const handlepassword = (event) => {
        setadminpassword(event.target.value);
    }
    const handleadminsubmit = (event) => {
        event.preventDefault();
        setadminerror(true);
        if(adminemail===validemail && adminpassword===validpassword){
            setloginerror(false)
            // console.log("admin login successfully");
            setshowadminheader(true);
            setopen(false);
            navigate("/adminsucc")
        }else{
            setloginerror(true);
            setshowadminheader(false);
        }
    }

    console.log(showadminheader);
    
    // const [showHomelayout, setShowHomelayout] = useState(false);

    // const handleOpenHomelayout = () => {
    //     setShowHomelayout(true);
    // };
    return (
        <React.Fragment>
            <Button onClick={handleopen} variant="contained" sx={{ background: 'black', color: 'white',width:'100px',marginRight:'5%', '&:hover': { backgroundColor: 'darkgray' } }}>Admin</Button>
            <Modal
                open={open}
                onClose={handleclose}
                // aria-labelledby="child-modal-title"
                // aria-describedby="child-modal-description"
                style={{
                    backgroundColor: 'greenyellow',
                    color: 'white',
                    border: '2px solid black',
                    position: 'absolute',
                    top: '27%',
                    left: '31%',
                    width: '350px',
                    height:'230px',
                    // textAlign:'center',
                    padding:'2%',
                    paddingLeft:'10%'
                }}
            >
                <Box sx={{ width: 200 }}>
                    {/* <h1 style={{ color: 'white' }}>hello</h1> */}
                    <form className="adminstyle" onSubmit={handleadminsubmit}>
                        <h3>Enter Email id :</h3>
                        <input type="email" value={adminemail} onChange={handleemail} placeholder="Enter email address" /><br />
                        {
                            adminerror && !adminemail && <span className="errorclr">Enter email id</span>
                        }
                        <h3 style={{marginTop:'2%'}}>Enter Password : </h3>
                        <input type="password" value={adminpassword} onChange={handlepassword} placeholder="Enter password" /><br />
                        {
                            adminerror && !adminpassword && <span className="errorclr">Enter password</span>
                        }
                        {
                            loginerror && (<span className="errorclr">Invalid email or password</span>) 
                        }
                        <br /><br></br>
                        <button type="submit" className="admin-button">Submit</button>
                         
                    </form>

                </Box>
            </Modal>
            {showadminheader && <Adminheader />}
        </React.Fragment>
    );
}