import React from 'react'
import {Box} from '@mui/material'
import Slider from 'react-slick';
import { bgcolor } from '@mui/system';

function MainBanner() {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed : 7000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <h2>🔥 HOT 동아리</h2>
        <Slider {...settings}>
          <div>
            <Box sx={{
                height: 150,
                bgcolor: 'greenyellow'
            }}>1
            </Box>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
  )
}

export default MainBanner