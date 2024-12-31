import React from "react";
import './Header.css';

export const Userheader = () => {
    return(
        <div>
            <header>
                {/* <Routes>
                    <Route path="/" element={<Homelayout />} />
                    <Route path="feedback" element={<Feedbacklayout />} />
                </Routes> */}
                <nav>
                    <a href="/">Home</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/shopnow">Shop Now</a>
                    {/* <a style={{border:"none",marginLeft:"-2%"}}><img src="\Static\Images\cart-shopping-solid-white.svg" style={{height:"20px",width:"20px"}} /></a> */}
                    <a href="/signup">Sign Up</a>
                </nav>
            </header>
        </div>
    );
}