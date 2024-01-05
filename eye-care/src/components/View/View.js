import React from 'react'
import './View.css'
import ViewNav from '../ViewNav/ViewNav'
import AboutUs from './AboutUs'
const View = () => {
  return (
    <main>
    <ViewNav/>
    <div className="intro">
      <h1>Diabetic Retinopathy</h1>
      <p>Caring For Your Vision</p>
    </div>
  <AboutUs/>
  </main>
  
    )
}

export default View