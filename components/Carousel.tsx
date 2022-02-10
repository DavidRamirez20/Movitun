import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
  
export default class CarouselMov extends Component {
   render() {
      return (
         <div>
            <Carousel
               showThumbs={false}
               interval={3500}
               dynamicHeight
               infiniteLoop
               stopOnHover
               autoPlay
            >
               <div>
                  <Image 
                     src="https://drive.google.com/uc?id=1b4pftQNvW2eqCYsgIvKcKKsrN1K5DN1t" 
                     alt="image1"
                     width={1300}
                     height={700}
                  />
               </div>
               <div>
                  <Image 
                     src="https://drive.google.com/uc?id=1aeLoEekXnbfTdiSf9QpC9s2oHmtLoSnZ" 
                     alt="image2"
                     width={1300}
                     height={700}
                  />
               </div>
               <div>
                  <Image 
                     src="https://drive.google.com/uc?id=18dgkKwgJWM1YyvyGjgwN8P6nH-jb82yv" 
                     alt="image3"
                     width={1300}
                     height={700}
                  />
               </div>
               <div>
                  <Image 
                     src="https://drive.google.com/uc?id=1giLworFmuxQiQtB-IOzWrHrbP4nVFRMp" 
                     alt="image3"
                     width={1300}
                     height={700}
                  />
               </div>
               <div>
                  <Image 
                     src="https://drive.google.com/uc?id=1jEcEJNG8Z9mJsaR-jyXd0xz8hZcH5vFP" 
                     alt="image3"
                     width={1300}
                     height={700}
                  />
               </div>
            </Carousel>
         </div>
      );
   }
};