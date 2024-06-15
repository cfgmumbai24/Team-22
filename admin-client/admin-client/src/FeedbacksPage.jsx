import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './App.module.css'; // Import CSS module
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import FeedbackCar from './FeedbackCar';
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className={`w-3/4 m-auto ${styles.appContainer}`}>
    <Typography variant="h2" sx={{ color: '#57321A' ,fontWeight: 'bold',  }}>
        Star Mentors ☆
    </Typography>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className={`bg-white ${styles.card}`}>
              <div className={`${styles.imageContainer}`}>
                <img src={d.img} alt="" className={`${styles.image}`} />
              </div>
              <div className={`${styles.contentContainer}`}>
                <p className={`${styles.name}`}>{d.name}</p>
                <p className={`${styles.review}`}>{d.review}</p>
                <button className={`${styles.button}`}>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <FeedbackCar />
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
];

export default App;


