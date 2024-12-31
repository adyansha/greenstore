import React from "react";
import './Home.css'
export const Peopleknow = () => {
    return (
        <div className="story-container">
            <div className="story-pic-lft">
                <figure>
                    <img src="/Static/Images/story.png" alt="story" />
                </figure>
            </div>
            <div className="story-rgt">
                <p className="p1">OUR STORY</p>
                <h1>For People Who Love Plants</h1>
                <p className="p2">
                    Vivamus quam sociis tristique diam at donec nisl,
                    hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.
                    Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis,
                    mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.
                </p>
            </div>
        </div>
    );
}