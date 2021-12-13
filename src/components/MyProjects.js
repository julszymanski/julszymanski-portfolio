import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';
import safetravels from '../images/safetravels.jpeg';
import portuguese from '../images/portuguese.jpeg';
import moviedb from '../images/moviedb.jpeg';
import portfolio from '../images/portfolio.jpeg';



export default function MyProjects() {
    return (
      <div>
      <div class="row">
      <img class="banner col-lg-12" src={portuguese} alt="banner"/>
      </div>


      <div class="center col-6" align="center" width="1000px">
      <p> </p>
      <h3>My Projects</h3>

      <div class="row">
      <h4>1. Safe Travels App </h4>
      <p> </p>
      <a href="https://safetravel-s.netlify.app/"><p>Demo</p></a>
      <img class="project" src={safetravels} alt="safe-travels-app screenshot"/>
      <p> </p>
      <p>The purpose of this site is to provide location specific details about travel restrictions, vaccination rates, and COVID cases. Built using HTML, CSS, Javascript, AJAX, APIs. Quantitative API data rendered using Chart.js </p>
    </div>

    <hr size="3px" width="90%" color="lightgrey"/>

      <div class="row">
      <h4>2. Fizzy Fizzy BathBombs Shop</h4>
      <p> </p>
      <a href="https://fizzyfizzybathbombs.herokuapp.com/"><p>Demo</p></a>
      <img class="project" src={fizzyfizzy} alt="fizzyfizzy app screenshot"/>
      <p> </p>
      <p>Full-Stack Application utilizing Node, Express, Sequelize, PostgreSQL, bcrypt, Express ES6 Template Engine </p>
    </div>

    <hr size="3px" width="90%" color="lightgrey"/>

    <div class="row">
      <h4>3. My Portfolio</h4>
      <p> </p>
      <a href="https://js-my-portfolio-react.herokuapp.com/"><p>Demo</p></a>
      <img class="project" src={portfolio} alt="portfolio screenshot"/>
      <p> </p>
      <p>I built my portfolio using React!</p>
    </div>


      <div class="row">
      <h4>4. Capstone Project</h4>
      <p> </p>
      <a href="https://media-watch-list.herokuapp.com/"><p>Demo</p></a>
      <img class="project" src={moviedb} alt="moviedb app screenshot"/>
      <p> </p>
      <p>Full-Stack Website that allows users to access movie information and add to a 'favorites' list. APIs used are The Movie Database and IMDB. Built with React, Redux, Sequelize, PostgreSQL, Bootstrap, O Auth v2.0, JWT Tokens, Sessions</p>
    </div>
  </div>

</div>
    );
}