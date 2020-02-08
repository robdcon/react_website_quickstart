import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import {StyledFlexBox} from '../styled/StyledFlexContainers';

const services = 
[
  {
    title:"Web Design",
    description: "This is the first description",
    icon: "fa-shopping-cart"
  },
  {
    title:"Graphic Design",
    description: "This is the first description",
    icon: "fa-laptop"
  },
  {
    title:"Web Development",
    description: "This is the first description",
    icon: "fa-lock"
  }
]

const TweenComponent = (props) =>
{
  
      return(
        
      <Controller className="Controller">
        <Scene
        //   className="TweenComponent"
        //   indicators={true} 
        //   duration={'300%'}
        //   pin={true}
        //   triggerHook={0} 
        >
          <Timeline wrapper={<StyledFlexBox id="trigger" justify="space-around" direction="row" />}>
              
            <Tween
            staggerFrom={{
              opacity:0, 
              y:100
            }}
            staggerTo={{
              opacity:1,
              y:0
            }}
            stagger={0.15}
            >
            {
                services.map((service, i) =>
                {
                    return (

                      <StyledFlexBox key={i}>
                        <StyledFlexBox    className="service-item">
                            <div className="StyledSeviceContainer">
                               
                                <h2>{service.title}</h2>
                               <p>{service.description}</p>
                                
                            </div>
                        </StyledFlexBox>
                      </StyledFlexBox> 
                    )
                })
            }
            </Tween>
          </Timeline >
        </Scene>
    </Controller>
    )   
  
  
}

export default TweenComponent;