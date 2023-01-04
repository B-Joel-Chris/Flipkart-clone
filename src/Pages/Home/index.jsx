import React from 'react'
import './Home.css'
import Categoryselect from '../../Sharedcomponents/categoryselect'
import Sliderelement from '../../Sharedcomponents/Sliderelement/'

const Home = () => {
  return (
    <div className='maincontainer-home'>
        <Categoryselect/>
        <Sliderelement/>
    </div>
  )
}

export default Home