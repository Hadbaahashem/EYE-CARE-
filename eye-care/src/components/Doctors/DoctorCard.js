import React from 'react';
import './Cards.css';
import NavBar from '../Nav/NavBar';
import { Fade, Slide } from 'react-reveal';

function DoctorCard() {
  let message = `
  The Most Qualified Skilled &Professional Staff`;
  
  return (
    <div>
      <NavBar />
      <section className="section-white">

        <div className="container">

          <div className="row">

            <div className="col-md-12 text-center">
              <Fade>
                <h2 className="section-title">OUR DOCTOR TEAM</h2>
              </Fade>
              <Fade delay={200}>
                <p className="section-subtitle">{message}</p>
              </Fade>
            </div>

            <div className="col-sm-6 col-md-4">
            <Slide bottom delay={200}>
              <Fade >
                <div className="team-item">
                  <img src="https://demos.codezeel.com/wordpress/WP01/WP003/wp-content/uploads/2022/06/team-4.jpg" className="team-img" alt="pic" />
                  <h3>Dr. Harsy Backley</h3>
                  <div className="team-info"><p>Retinal Ophthalmologist</p></div>
                  <ul className="team-icon">
                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                  </ul>
                </div>
              </Fade>
              </Slide>
            </div>

            <div className="col-sm-6 col-md-4">
              <Slide bottom delay={300}>
                <Fade>
                  <div className="team-item">
                    <img src="https://demos.codezeel.com/wordpress/WP01/WP003/wp-content/uploads/2022/06/team-3.jpg" className="team-img" alt="pic" />
                    <h3>Dr. Anna Winds</h3>
                    <div className="team-info"><p>Retinal Ophthalmologist</p></div>
                    <ul className="team-icon">
                      <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                      <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                  </div>
                </Fade>
              </Slide>
            </div>

            <div className="col-sm-6 col-md-4">
              <Slide bottom delay={400}>
                <Fade>
                  <div className="team-item">
                    <img src="https://demos.codezeel.com/wordpress/WP01/WP003/wp-content/uploads/2022/06/team-2.jpg" className="team-img" alt="pic" />
                    <h3>Dr. Nick Leng</h3>
                    <div className="team-info"><p>Retinal Ophthalmologist</p></div>
                    <ul className="team-icon">
                      <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                      <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                  </div>
                </Fade>
              </Slide>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorCard;
