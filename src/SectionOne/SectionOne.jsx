import React from 'react';
import "./SectionOne.scss"
import Driver from "../Asset/Images/Driver_wearing_a_mask_in_the_car.jpg"
import LadyFlower from "../Asset/Images/home_hero_1_tile.jpg"

export default function SectionOne(props) {
    return (
        <>
            <div className="section-one-container">
                <div>
                   <div>
                       <span>READY WHEN YOU ARE</span>
                   </div>
                   <div>
                       <h1>Hop in. Crack a window. Let’s get back out there.</h1>
                   </div>
                   <div>
                       <div><span>Apply to drive</span></div>
                       <div><span>Sign up to ride</span></div>
                   </div>
                </div>
                <div>
                    <picture>
                       <source type="image/webp" srcset={LadyFlower}/>
                       <source srcset={LadyFlower}/>
                       <img src={LadyFlower} alt="load" className="lady-flower" height="600" width="450"/>
                    </picture>

                    <picture>
                       <source type="image/webp" srcset={Driver}/>
                       <source srcset={Driver}/>
                       <img src={Driver} alt="load" className="lady-flower" width="550" height="350"/>
                    </picture>
                </div>
            </div>
        </>
    );
}
