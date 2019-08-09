import React, { Component } from 'react';
import Particle from 'react-particles-js';

class Landing extends Component{

  render(){
    return(
      <div className="landing" id="particle-target">
        <Particle 
          style={{position: "absolute"}}
          params={{ 
              "particles": {
                "number": {
                    "value": 250
                },
                "size": {
                    "value": 2
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
          }} 
        />
        <div className="landing__text">
          <h1 className="landing__header">DUXR</h1>
          <h2 className="landing__subheader">Drexel University XR Club</h2>
        </div>
      </div>
    )
  }
}

export default Landing;
