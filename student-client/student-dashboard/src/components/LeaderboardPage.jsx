import React, { useState } from 'react'
import {Leaderboard} from './leaderboard/Leaderboard.jsx'
import CategoryDropDown from './leaderboard/DropDownCategory.jsx';
import Navbar from './Navbar.jsx';

const LeaderboardPage = () => {
  const [catLeaderboard, setCatLeaderboard] = useState("English");
  return (
    <div>
    <div className='fixed top-0 left-0 w-full z-50'>
    <Navbar />
    </div>
    <div className='mt-20'>
      <CategoryDropDown category = {catLeaderboard} setCatLeaderboard = {setCatLeaderboard}/>
      <Leaderboard category = {catLeaderboard}/>
      </div>
</div>    
  )
}

export default LeaderboardPage