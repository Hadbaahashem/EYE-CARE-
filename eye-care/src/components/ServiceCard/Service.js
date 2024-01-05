import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <section class="section__container service__container">
    <div class="service__header">
      <div class="service__header__content">
        <h2 class="section__header">Our Special service</h2>
        <p>
          Beyond simply providing eye care, our commitment lies in
          delivering unparalleled service tailored to your unique needs.
        </p>
      </div>
    </div>
    <div class="service__grid">
      <div class="service__card">
        <span><i class="ri-microscope-line"></i></span>
        <h4>Advanced Diagnosis</h4>
        <p>
        From retinal imaging to advanced scanning techniques, we leave no stone unturned in providing a comprehensive diagnosis tailored to your unique needs.
        </p>
      </div>
      <div class="service__card">
        <span><i class="ri-mental-health-line"></i></span>
        <h4>Personalized Treatment </h4>
        <p>
          Combining medical expertise with a patient-centric approach. From laser therapies to surgical interventions, we are committed to restoring and preserving your vision.
        </p>
      </div>
      <div className="service__card">
        <span><i class="ri-hospital-line"></i></span>
        <h4>Ongoing Care and Support</h4>
        <p>
        Regular follow-ups, patient education, and a dedicated support team ensure that you receive continuous care, empowering you to lead a fulfilling life with optimal eye health.
        </p>
      </div>
    </div>
  </section>  )
}

export default Service