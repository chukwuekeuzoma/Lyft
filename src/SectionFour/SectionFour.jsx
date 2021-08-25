import React from 'react';
import "./SectionFour.scss"
import phone from "../Asset/Images/reliable_eng.png"

export default function SectionFour(props) {
    return (
        <>
            <div className="section-four-container">
                <div className="section-four-text-container">
                    <div>
                        <div><span className="section-four-text-ride">RIDE WITH LYFT</span></div>
                    </div>
                    <h2 className="section-four-text-ready">
                        Ready, set, go
                        <br />
                        in just a few quick taps.
                    </h2>
                    <p className="section-four-text-whether">
                        Whether you’re following your heart or your busy schedule, we’ll get you where you need to go.
                    </p>
                    <div>
                        <span>Get a reliable ride in mintues</span>
                    </div>
                    <div>
                        <span>Know that your driver is wearing a mask</span>
                    </div>
                    <div>
                        <span>Schedule your ride in advance</span>
                    </div>
                    <div>
                        <span>Get a ride</span>
                    </div>
                    <div></div>
                    <p>
                      Join Lyft Pink to unlock perks like 15% off rideshare, free Grubhub+ membership, exclusive offers, and more. All for $19.99 a month. Available in the US only.
                    </p>
                </div>
                <div className="section-four-image-container">
                    <picture>
                       <source type="image/webp" srcSet={phone}/>
                       <source srcSet={phone}/>
                       <img src={phone} alt="load" height="500" width="400"/>
                    </picture>
                </div>
            </div>

        </>
    );
}
