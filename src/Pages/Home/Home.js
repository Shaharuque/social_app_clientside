import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Cars from './Cars';
import Products from './Products';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Cars></Cars>
          <Products></Products>
          <Services></Services>
          <Reviews></Reviews>
          <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;