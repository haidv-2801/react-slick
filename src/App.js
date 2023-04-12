import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'


const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    adaptiveHeight: true,
    centerPadding: '50px',
    arrow:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='container'>
    <div className='dvhai-slide-container'>
    <h2>React Slick Slider Example</h2>
    <Slider  className='dvhai-slide' {...settings}>
      <div className='img-wrapper'>
        <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 1" />
      </div>
      <div className='img-wrapper'>
        <img src="https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 2" />
      </div>
      <div className='img-wrapper'>
        <img src="https://images.unsplash.com/photo-1681138568071-d5ad7f3fd4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 3" />
      </div>
    </Slider>
  </div>

  <div className='dvhai-slide-container'>
    <h2>React Slick Slider Example</h2>
    <Slider  className='dvhai-slide' {...settings}>
      <div className='img-wrapper'>
        <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 1" />
      </div>
      <div className='img-wrapper'>
        <img src="https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 2" />
      </div>
      <div className='img-wrapper'>
        <img src="https://images.unsplash.com/photo-1681138568071-d5ad7f3fd4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Slide 3" />
      </div>
    </Slider>
  </div>
  </div>
  );
};

export default App;