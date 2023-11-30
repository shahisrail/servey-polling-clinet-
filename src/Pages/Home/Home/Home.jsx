/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner/Banner';
import Testomial from './Testomial';
import Faq from './Faq';
import HowItWorks from './HowitWrok/HowItWorks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Testomial></Testomial>
      <Faq></Faq>
    </div>
  );
};

export default Home;