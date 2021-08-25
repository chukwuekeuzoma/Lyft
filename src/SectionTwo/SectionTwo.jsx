import React from 'react';
import "./SectionTwo.scss"
import Ladydriver from "../Asset/Images/driver_section_2x.jpg"
import { LocalAtm,QueryBuilder, FlashOn,ArrowForward } from '@material-ui/icons';


export default function SectionTwo(props) {
    return (
        <>
            <div className="section-two-container">
                <div className="section-two-img-container">
                    <picture>
                        <source type="image/webp" srcset={Ladydriver}/>
                        <source srcset={Ladydriver}/>
                        <img src={Ladydriver} alt="load" className="lady-flower" height="470" width="400"/>
                    </picture>
                </div>
                <div className="section-text-container">
                    <div className="section-text-drive"><span>DRIVE WITH LYFT</span></div>
                    <h2 className="section-text-set">
                       Set your own hours.
                        <br/>
                       Earn on your own terms.
                    </h2>
                    <div>
                        <p className="section-text-maybe">
                            Maybe you’re saving up for school. Or keeping flexible hours to spend more time with your family. 
                            It’s a great time to get in the driver’s seat, connect with your community, and earn a little extra cash. 
                            Plus, you can tell people you’ve got the best boss in town: you.
                        </p>
                    </div>
                    <div>
                        <div className="section-text-icon-container">
                            <LocalAtm className="section-text-icon"/>
                            <strong>
                                Reliable earnings
                            </strong>
                        </div>
                        <p className="section-text-maybe">
                           Make money, keep your tips, and use in-app tools to help maximize your earnings.
                        </p>
                    </div>
                    <div>
                        <div className="section-text-icon-container">
                            <QueryBuilder className="section-text-icon"/>
                            <strong>
                             A flexible schedule
                            </strong>
                        </div>
                        <p className="section-text-maybe">
                            Be your own boss and drive whenever it works for you.
                        </p>
                    </div>
                    <div>
                        <div className="section-text-icon-container">
                            <FlashOn className="section-text-icon"/>
                            <strong>
                               Get paid promptly
                            </strong>
                        </div>
                        <p className="section-text-maybe">
                           Cash out your earnings whenever you want with Express Pay and Lyft Direct.
                        </p>
                    </div>
                    <div className="section-text-apply-container">
                        <div className="section-text-apply-to-drive">
                            <span>Apply to drive</span>
                        </div>
                        <div className="section-text-icon-driver-container">
                            <div className="section-text-diver-pay-container">
                                <span className="section-how-driver-pay">How driver pay works</span>
                            </div>
                            <ArrowForward className="section-text-icon-arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

