import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Reviews></Reviews>
        </div>
    );
};

export default Home;