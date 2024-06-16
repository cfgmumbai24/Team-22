import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './App.module.css'; // Import CSS module
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import FeedbackCar from './FeedbackCar';
function App() {
  const [data,setData] = useState([])
  const dosomething = async()=>{
    const response1 = await fetch('http://127.0.0.1:3000/admin/mentors')
    console.log(response1)
    const res = await response1.json()
    console.log('Mentors', res)
    setData(res.mentors)
    console.log('hey1')
  }
  useEffect(() => {
    // Fetch details from /home endpoint
    dosomething()
    // Fetch mentor details from /mentors endpoint
    // const response2 = await fetch('/admin/mentors')
    //   .then(response => response.json())
    //   .then(data => setMentorDetails(data))
    //   .catch(error => console.error('Error fetching mentor details:', error));
  }, []);
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
                <p className={`${styles.review}`}>Guru Dakishna : {d.badgeValue}</p>
                <p className={`${styles.review}`}>Gold Badges : {d.badges.gold}</p>
                <p className={`${styles.review}`}>Gold Badges : {d.badges.silver}</p>
                <p className={`${styles.review}`}>Gold Badges : {d.badges.bronze}</p>
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



export default App;


