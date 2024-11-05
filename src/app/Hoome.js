import React from 'react'
import Weather from '../app/components/Weather'

import AutoScrollCarousel from '../app/components/swiper'

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
} 


const Hoome = () => {
  return (
    <>
    <section className='banner-bg'>
      <div className="container mx-auto">
        <h1>
        Welcome to a new era in the relationship between people and companies..
        
        </h1>
        <p className='banner-para'>Below is an overview of the types of data and<br className='d-sm-block d-md-none'/> available endpoints:</p>
        <div id="demo">this is busines</div>
        <button onClick={myFunction} >Read more</button>
        <div className="flex gap-10">
          <AutoScrollCarousel />
        </div> 
      </div>
    </section>
    
    <section className=' bg-black'>
    <div className="container mx-auto pt-20 pb-20">
      <div className="gap-5 flex justify-between">
        <div className="expand-box">
         <div className="expand-box-heading">  Banking AI</div>
         <div className="btn">Learn more /</div>
          <img src="img/img1.webp" alt="" />
         <div className="hide-box-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae voluptatum consectetur adipisicing elit. Repellat quae voluptatum ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae voluptatum consectetur adipisicing elit. Repellat quae voluptatum.</div>
        </div>
        <div className="expand-box">
        <div className="expand-box-heading"> Machine Learning</div>
          <div className="btn">Learn more /</div>
          <img src="img/img2.webp" alt="" />
          <div className="hide-box-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae voluptatum consectetur adipisicing elit. Repellat quae voluptatum ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae voluptatum consectetur adipisicing elit. Repellat quae voluptatum.</div>
        </div>
        <div className="expand-box">
        <div className="expand-box-heading"> Software AI</div>
          <div className="btn">Learn more /</div>
          <img src="img/img1.webp" alt="" />
          <div className="hide-box-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae voluptatum consectetur adipisicing elit. Repellat quae voluptatum ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae voluptatum consectetur adipisicing elit. Repellat quae voluptatum.</div>
        </div>
      </div>
    </div>
    </section>
    
    </>
  )
}

export default Hoome