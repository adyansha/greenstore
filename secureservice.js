import React from "react";
import './Home.css';
export const Secureservive = () => {
    return (
        <div className="customers">
            <div className="item3">
                <div className="item-detail">
                    <figure>
                        <img src="\Static\Images\lock-solid.svg" />
                    </figure>
                    <div className="item-detail-info">
                        <p>SECURE PAYMENT</p>
                        <p className="info-style">Curabitur interdum, nisl at tincidunt.</p>
                    </div>

                </div>
            </div>
            <div className="item3">
                <div className="item-detail">
                    <figure>
                        <img src="\Static\Images\box-solid.svg" />
                    </figure>
                    <div className="item-detail-info">
                        <p>DELIVERED WITH CARE</p>
                        <p className="info-style">Donec sit amet neque id nisl.</p>
                    </div>
                </div>
            </div>
            <div className="item3" style={{borderRight:"0"}}>
                <div className="item-detail">
                    <figure>
                        <img src="\Static\Images\hand-holding-heart-solid.svg" />
                    </figure>
                    <div className="item-detail-info">
                        <p>EXCELLENT SERVICE</p>
                        <p className="info-style">Amet neque id nisl ullamcorper.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}