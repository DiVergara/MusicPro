import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ImgCarr = () => {



    const styleText={
        color:"white",
        fontFamily:"arial"
    };



    return (
        <div>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.ibanez.com/images/index/mainSlide/top_SR35th.jpg"
      alt="First slide"
    />
    <Carousel.Caption class="position-absolute top-50 start-50 translate-middle">
      <h3 style={styleText}>SoundGear 35th Anniversary</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.ibanez.com/images/index/mainSlide/top_AZpremium2022.jpg"
      alt="Second slide"
    />
    <Carousel.Caption class="position-absolute top-50 start-50 translate-middle">
      <h3 style={styleText}>They Hit Harder</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.ibanez.com/images/index/mainSlide/top_AAD50.jpg"
      alt="Third slide"
    />
    <Carousel.Caption class="position-absolute top-50 start-50 translate-middle">
      <h3 style={styleText}>Advanced Acoustic</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default ImgCarr;