import React from 'react';
import "./SectionFour.scss"
import { LocalTaxi,Mood,Today} from '@material-ui/icons';
import phone from "../Asset/Images/reliable_eng.png"
import LyftPink from "../Asset/logos/LyftPink_Gradient5.png"

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
                    <div className="section-four-text-reliable">
                        <LocalTaxi className="section-four-local-icon"/>
                        <span>Get a reliable ride in mintues</span>
                    </div>
                    <div className="section-four-text-know">
                        <Mood className="section-four-mood-icon"/>
                        <span>Know that your driver is wearing a mask</span>
                    </div>
                    <div className="section-four-text-know">
                        <Today className="section-four-mood-icon"/>
                        <span>Schedule your ride in advance</span>
                    </div>
                    <div className="section-four-text-get">
                        <span>Get a ride</span>
                    </div>
                    <div>
                        <picture>
                            <source type="image/webp" srcSet={LyftPink}/>
                            <source srcSet={LyftPink}/>
                            <img src={LyftPink} alt="load" height="auto" width="100"/>
                        </picture>
                    </div>
                    <p className="section-four-text-join">
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
