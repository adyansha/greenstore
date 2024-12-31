import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { Button } from "@mui/material";
import {Modal} from "@mui/material";
import {Box} from "@mui/material";
import { Adminmodal } from "./adminmodal";
import { Usermodal } from "./usermodal";
import { useNavigate } from "react-router-dom";

const stylebutton = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: "green",
    border: '2px solid #000',
    color:'white',
    padding:'3%',
   
  };
export const Homeanimation = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrow: false,
        slideToShow: 1,
        slideToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    const navigate = useNavigate();
    const gotosignup = () => {
        navigate("/signup");
    }

    const [openadmin, setadminopen] = React.useState(false);
    // const [openuser, setuseropen] = React.useState(false);

    const handleopenadmin = () => {
        setadminopen(true);
    };
    const handlecloseadmin = () => {
        setadminopen(false);
    };
    // const handleopenuser = () => {
    //     setuseropen(true);
    //     // <Feedbackquery />
    // }
    // const handlecloseuser = () => {
    //     setuseropen(false);
    // }
    return (
        <div className="slider-container" >
            <Slider {...settings}>
                <div className="image-item">
                    <figure><img src="/Static/Images/p1.jpg" alt="phome1" /> </figure>
                    <div className="slider-text">
                        <p>Welcome To The Greenstore</p>
                        <h1>Let’s Bring the Spring<br /> to Your Home</h1>
                        <Button variant='contained' color='success' onClick={handleopenadmin} style={{width:'100px',marginRight:'3%'}} >LOGIN</Button>
                        <Button variant='contained' color='success' onClick={gotosignup} style={{width:'100px'}} >SIGNUP</Button>

                        <Modal
                            open={openadmin}
                            onClose={handlecloseadmin}
                            aria-labelledby="parent-modal-title"
                        >
                            <Box style={{...stylebutton,  width: 400 }}>
                                <h2 id="parent-modal-title">Welcome To The Greenstore</h2>
                                <h3>Select the Desired Account</h3>
                                <h3 style={{color:'yellow'}}>Select the Desired Account</h3>

                                <Adminmodal />
                                <Usermodal />
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className="image-item">
                    <figure><img src="/Static/Images/p2.jpg" alt="phome2" /></figure>
                    <div className="slider-text" >
                        <p>Welcome To The Greenstore</p>
                        <h1>Let’s Bring the Spring<br /> to Your Home</h1>
                        <Button variant='contained' color='success' onClick={handleopenadmin} style={{width:'100px',marginRight:'3%'}} >LOGIN</Button>
                        <Button variant='contained' color='success' onClick={gotosignup} style={{width:'100px'}} >SIGNUP</Button>

                        <Modal
                            open={openadmin}
                            onClose={handlecloseadmin}
                            aria-labelledby="parent-modal-title"
                        >
                            <Box style={{...stylebutton,  width: 400 }}>
                                <h2 id="parent-modal-title">Welcome To The Greenstore</h2>
                                <h3 style={{color:'yellow'}}>Select the Desired Account</h3>

                                <Adminmodal />
                                <Usermodal />

                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className="image-item" >
                    <figure><img src="/Static/Images/p3.jpg" alt="phome3" /></figure>
                    <div className="slider-text">
                        <p>Welcome To The Greenstore</p>
                        <h1>Let’s Bring the Spring<br /> to Your Home</h1>
                        <Button variant='contained' color='success' onClick={handleopenadmin} style={{width:'100px',marginRight:'3%'}} >LOGIN</Button>
                        <Button variant='contained' color='success' onClick={gotosignup} style={{width:'100px'}} >SIGNUP</Button>

                        <Modal
                            open={openadmin}
                            onClose={handlecloseadmin}
                            aria-labelledby="parent-modal-title"
                        >
                            <Box style={{...stylebutton,  width: 400 }}>
                                <h2 id="parent-modal-title">Welcome To The Greenstore</h2>
                                <h3 style={{color:'yellow'}}>Select the Desired Account</h3>

                                <Adminmodal />
                                <Usermodal />

                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className="image-item">
                    <figure><img src="/Static/Images/p4.jpg" alt="phome4" /></figure>
                    <div className="slider-text">
                        <p>Welcome To The Greenstore</p>
                        <h1>Let’s Bring the Spring<br /> to Your Home</h1>
                        <Button variant='contained' color='success' onClick={handleopenadmin} style={{width:'100px',marginRight:'3%'}} >LOGIN</Button>
                        <Button variant='contained' color='success' onClick={gotosignup} style={{width:'100px'}} >SIGNUP</Button>

                        <Modal
                            open={openadmin}
                            onClose={handlecloseadmin}
                            aria-labelledby="parent-modal-title"
                        >
                            <Box style={{...stylebutton,  width: 400 }}>
                                <h2 id="parent-modal-title">Welcome To The Greenstore</h2>
                                <h3 style={{color:'yellow'}}>Select the Desired Account</h3>

                                <Adminmodal />
                                <Usermodal />

                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className="image-item">
                    <figure><img src="/Static/Images/p5.jpg" alt="phome5" /></figure>
                    <div className="slider-text">
                        <p>Welcome To The Greenstore</p>
                        <h1>Let’s Bring the Spring<br /> to Your Home</h1>
                        <Button variant='contained' color='success' onClick={handleopenadmin} style={{width:'100px',marginRight:'3%'}} >LOGIN</Button>
                        <Button variant='contained' color='success' onClick={gotosignup} style={{width:'100px'}} >SIGNUP</Button>

                        <Modal
                            open={openadmin}
                            onClose={handlecloseadmin}
                            aria-labelledby="parent-modal-title"
                        >
                            <Box style={{...stylebutton,  width: 400 }}>
                                <h2 id="parent-modal-title">Welcome To The Greenstore</h2>
                                <h3 style={{color:'yellow'}}>Select the Desired Account</h3>

                                <Adminmodal />
                                <Usermodal />

                            </Box>
                        </Modal>
                    </div>
                </div>
            </Slider>
        </div>
    );
}