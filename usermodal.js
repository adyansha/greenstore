import React, { useState } from "react";
import './Home.css';
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
// import Link from '@mui/material/Link';
// import { Feedbackquery } from "../Feedback/feedbackquery";
// import { Feedbacklayout } from "../Feedback/feedbacklayout";
import { useNavigate } from "react-router-dom";
export const Usermodal = () => {

    const [open, setopen] = React.useState(false);
    const handleopen = () => {
        setopen(true);
    };
    const handleclose = () => {
        setopen(false);
    };
    const [useremail, setuseremail] = useState("");
    const [userpassword, setuserpassword] = useState("");
    const [usererror, setusererror] = useState(false);
    const [usersubmit, setusersubmit] = useState(false);

    const handleemail = (event) => {
        setuseremail(event.target.value);
    }
    const handlepassword = (event) => {
        setuserpassword(event.target.value);
    }

    const handleusersubmit = (event) => {
        setusererror(true);
        setusersubmit(true);
        event.preventDefault();
    }
    const navigate = useNavigate();
    const gotosignup = () => {
        navigate("/signup");
    }
    return (
        <React.Fragment>
            <Button onClick={handleopen} variant="contained" sx={{ background: 'black', width: '100px', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }}>User</Button>
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
                    height: '265px',
                    // textAlign:'center',
                    padding: '2%',
                    paddingLeft: '10%'
                }}
            >
                <Box sx={{ width: 200 }}>
                    {/* <h1 style={{ color: 'white' }}>hello</h1> */}
                    <form className="adminstyle" onSubmit={handleusersubmit}>
                        <h3>Enter Email id :</h3>
                        <input type="email" value={useremail} onChange={handleemail} placeholder="Enter email address" /><br />
                        {
                            usererror && !useremail && <span className="errorclr">Enter email id</span>
                        }
                        <h3>Enter Password : </h3>
                        <input type="password" value={userpassword} onChange={handlepassword} placeholder="Enter password" /><br />
                        {
                            usererror && !userpassword && <span className="errorclr">Enter password</span>
                        }
                        <br /><br />
                        <button type="submit" className="admin-button">Submit</button>

                    </form>
                    {/* <Button variant="contained" sx={{ background: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }}>Submit</Button> */}
                    {/* <p>Not Registered already ?</p> */}
                    <br />
                    <Box
                        sx={{

                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            typography: 'body1',
                            '& > :not(style) ~ :not(style)': {
                                ml: 2,
                            },
                        }}
                    // onClick={<Feedbackquery /> }
                    >
                        {/* <Link href='#' underline="hover" style={{ color: 'yellow' }}>
                            {'Not Already Registered? Signup'}
                        </Link> */}
                    <p className="notsignup-hover" onClick={gotosignup} style={{ color: 'yellow'  }}>Not Already Registered? Signup</p>
                    </Box>
                </Box>
            </Modal>

        </React.Fragment>
    );
}