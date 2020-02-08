import React, { Component } from 'react';
import Test from './Test';
import Section from '../components/Section';
import TweenComponent from '../components/TweenComponent';




class Home extends Component {
    render() {
      return (
        <div>
          <Section>
           <h1>HOME</h1>
          </Section>
          <Section direction={'column'}>
            <h2>About</h2>
           <TweenComponent />
          </Section>
        </div>
      );
    }
  }
  
export default Home;