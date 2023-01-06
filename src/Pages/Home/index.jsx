import React from 'react'
import './Home.css'
import Categoryselect from '../../Sharedcomponents/categoryselect'
import Sliderelement from '../../Sharedcomponents/Sliderelement/'
import Cats from '../../Sharedcomponents/Categories';
import Topstories from '../../Sharedcomponents/Topstories';
const Home = () => {
  return (
    <div className='maincontainer-home'>
        <Categoryselect/>
        <Sliderelement/>
         <Cats cateitem={"electronics"}/>
      <Cats cateitem={"men's clothing"}/>
      <Cats cateitem={"women's clothing"}/>
      <Cats cateitem={"jewelery"}/>
      <Topstories/>
    </div>
  )
}

export default Home