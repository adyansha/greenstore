import React from "react";
import './Footer.css';

export const Footer = () => {
    return(
        <div>
            <footer>
                <p>2024 Plant Shop. Powered by Plant Shop.</p>
                <div className="mediaicon">
                    <a href="https://www.instagram.com/#">
                    <figure>
                        <img src="\Static\Images\instagram-brands-solid.svg"  />
                    </figure>
                    </a>
                    <a href="https://www.facebook.com/?_rdr">
                    <figure>
                        <img src="\Static\Images\facebook-brands-solid.svg" />
                    </figure>
                    </a>
                    <a href="https://x.com/?lang=en">
                    <figure>
                        <img src="\Static\Images\twitter-brands-solid.svg" />
                    </figure>
                    </a>
                </div>
            </footer>
        </div>
    );
}