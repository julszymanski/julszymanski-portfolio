import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';
import safetravels from '../images/safetravels.jpeg';
import portuguese from '../images/portuguese.jpeg';



export default function MyProjects() {
    return (
      <div>
      <div class="row">
      <img class="banner" src={portuguese} alt="banner"/>
      </div>


      <table class="center" align="center" width="1000px">
  <thead>
    <tr>
      <th scope="col" class="column-one">Project Name</th>
      <th scope="col" class="column-two"></th>
      <th scope="col" class="column-three">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Safe Travels App <br></br><a href="https://safetravel-s.netlify.app/">Demo</a></th>
      <td><img src={safetravels} alt="safe-travels-app screenshot"/></td>
      <td>The purpose of this site is to provide location specific details about travel restrictions, vaccination rates, and COVID cases. Built using HTML, CSS, Javascript, AJAX, APIs. Quantitative API data rendered using Chart.js </td>
    </tr>
    <hr size="3px" width="90%" color="lightgrey"/>
    <tr>
      <th scope="row">Fizzy Fizzy BathBombs Shop <br></br><a href="https://fizzyfizzybathbombs.herokuapp.com/">Demo</a></th>
      <td><img src={fizzyfizzy} alt="fizzyfizzy app screenshot"/></td>
      <td>Full-Stack Application utilizing Node, Express, Sequelize, PostgreSQL, bcrypt, Express ES6 Template Engine</td>
    </tr>
    <hr size="3px" width="90%" color="lightgrey"/>
    <tr>
      <th scope="row">Capstone Project <br></br><a href="https://media-watch-list.herokuapp.com/">Demo</a></th>
      <td>TBD</td>
      <td>Full-Stack Application using React</td>
    </tr>
  </tbody>
</table>
</div>
    );
}