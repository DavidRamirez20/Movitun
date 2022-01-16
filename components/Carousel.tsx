import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
  
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
                     src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80" 
                     alt="image1"
                     width={1600}
                     height={700}
                  />
               </div>
               <div>
                  <Image 
                     src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                     alt="image2"
                     width={1600}
                     height={700}
                  />
               </div>
               <div>
                  <Image 
                     src="https://images.unsplash.com/reserve/oGLumRxPRmemKujIVuEG_LongExposure_i84.jpeg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" 
                     alt="image3"
                     width={1600}
                     height={700}
                  />
               </div>
            </Carousel>
         </div>
      );
   }
};