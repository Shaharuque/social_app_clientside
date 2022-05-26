import React from 'react';

const Carousel = () => {
    return (
        <div>
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3863f3e5-546a-4b22-bcbc-1f8ee0479744/bvlatuR/std/1200x628/MX-Social" alt='tesla' class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/3/5/3/6/2/0/7/0x0-ModelY_04.jpg-4a05c3d4b05f9751.jpeg?org_if_sml=1&q=70&width=1019" alt='tesla' class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://img.nzz.ch/2016/4/8/fb500b05-148d-4ffa-840d-67638ab50e28.jpeg?width=654&height=393&fit=bounds&quality=75&auto=webp&crop=975,587,x0,y0" alt='tesla' class="w-full"/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
        </div>
    );
};

export default Carousel;