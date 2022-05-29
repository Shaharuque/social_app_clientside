import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Reviews></Reviews>
          <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;