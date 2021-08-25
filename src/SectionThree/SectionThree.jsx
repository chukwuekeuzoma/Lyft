import React from 'react'
import {ImageData} from "./ImageData"
import Carousel from 'react-elastic-carousel'
import "./SectionThree.scss"
  
export default function SectionThree(props) {  
    
    const breakpoints = [
        // {width:1, itemsToShow:1},
        // {width:500, itemsToShow:1},
        {width:750, itemsToShow:2},
        // {width:1200, itemsToShow:3},
     ]


    return (
        <>
         <div className="Imageslide_container">
                <Carousel breakPoints={breakpoints}>
                    {ImageData.map((slide, index) => {

                        return (
                            <div className="slideimage_one" key={index}>
                                <div className="Slideimage_two">
                                    <img src={slide.image} alt="slideimage" className="Slideimage_two" />
                                </div>
                                <div className="slide_text">
                                      {slide.textOne}
                                </div>
                                <div className="slide_text">
                                   {slide.textTwo}
                                </div>
                                <div className="slide_text-one">
                                   {slide.textThree}
                                </div>
                            </div>

                        )

                    })}
                </Carousel>
            </div>
        
        </>
    );
}

