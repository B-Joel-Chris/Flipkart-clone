import React from 'react'
import Slideyboi from '../../Sharedcomponents/Slideyboi'
import './Home.css'
import Categoryselect from '../../Sharedcomponents/categoryselect'

const Home = () => {
  return (
    <div className='maincontainer-home'>
        <Categoryselect/>
        <Slideyboi/>
    </div>
  )
}

export default Home