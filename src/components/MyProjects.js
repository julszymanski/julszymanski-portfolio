import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';
import safetravels from '../images/safetravels.jpeg';


export default function MyProjects() {
    return (
      <table class="center" width="800px">
  <thead>
    <tr>
      <th scope="col" class="column-one">Project Name</th>
      <th scope="col" class="column-two"></th>
      <th scope="col" class="column-three">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">My Covid Safe Travels App <a href="https://safetravel-s.netlify.app/">Demo</a></th>
      <td><img src={safetravels}/></td>
      <td>Front-End Project demonstrating knowledge of HTML, CSS, Javascript, AJAX, APIs. Quantitative API data rendered using Chart.js </td>
    </tr>
    <hr size="3px" width="90%" color="lightgrey"/>
    <tr>
      <th scope="row">Fizzy Fizzy BathBombs <a href="https://fizzyfizzybathbombs.herokuapp.com/">Demo</a></th>
      <td><img src={fizzyfizzy}/></td>
      <td>Full-Stack Application utilizing Node, Express, Sequelize, PostgreSQL, bcrypt, Express ES6 Template Engine</td>
    </tr>
    <hr size="3px" width="90%" color="lightgrey"/>
    <tr>
      <th scope="row">Capstone Project <a href="https://media-watch-list.herokuapp.com/">Demo</a></th>
      <td>TBD</td>
      <td>Full-Stack Application using React</td>
    </tr>
  </tbody>
</table>
    );
}