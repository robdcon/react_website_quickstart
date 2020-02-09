import React, { Component } from 'react';
import Test from './Test';
import Section from '../components/Section';
import TweenComponent from '../components/TweenComponent';
import { gradients } from '../styled/gradients/gradients';

const gradient = gradients({angle:120, end:'000000', start:'ffffff'});


class Home extends Component {

    render() {
      return (
        <div>
          <Section>
           <h1>HOME</h1>
          </Section>
          <Section direction={'column'} id="trigger" backgroundImage={`${gradient}`}>
           <TweenComponent />
          </Section>
          <Section />
        </div>
      );
    }
  }
  
export default Home;