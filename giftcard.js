import React from 'react';
import { Button } from '@mui/material';
import './Home.css';
export const Giftcard = () => {
    return (
        <div className="image-item">
            <figure className="giftfigure">
                <img src='/Static/Images/card.jpg' alt='card' />
            </figure>
            <div className="gift-text">
                <p style={{fontFamily:"bold"}}>GIFT CARD</p>
                <h1>Give the Gift of Greenery</h1>
                <p style={{fontSize:"20px"}}>Pretium tortor risus enim neque quis pellentesque maecenas proin odio eget arcu</p>
                <Button variant='contained' color='success' href='#'>Purchase A Gift Card</Button>

            </div>
        </div>
    );
}
