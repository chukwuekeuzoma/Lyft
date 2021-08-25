import React from 'react';
import "./SectionOne.scss"
import Driver from "../Asset/Images/Driver_wearing_a_mask_in_the_car.jpg"
import LadyFlower from "../Asset/Images/home_hero_1_tile.jpg"

export default function SectionOne(props) {
    return (
        <>
            <div className="section-one-container">
                <div>
                   <div className="section-one-text-1">
                       <span>READY WHEN YOU ARE</span>
                   </div>
                   <div className="section-one-text-2">
                       <h1>Hop in. Crack a window. Let’s get back out there.</h1>
                   </div>
                   <div className="section-one-text-3">
                       <div className="section-one-text-3-text-1"><span>Apply to drive</span></div>
                       <div className="section-one-text-3-text-2"><span>Sign up to ride</span></div>
                   </div>
                </div>
                <div className="section-one-image-container">
                    <picture>
                       <source type="image/webp" srcSet={LadyFlower}/>
                       <source srcSet={LadyFlower}/>
                       <img src={LadyFlower} alt="load" className="lady-flower" height="650" width="500"/>
                    </picture>
                    <picture>
                       <source type="image/webp" srcSet={Driver}/>
                       <source srcSet={Driver}/>
                       <img src={Driver} alt="load" className="man-driver" width="500" height="350"/>
                    </picture>
                </div>
            </div>
        </>
    );
}
