import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Images from '../data/Products';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


export default function MyProjects() {
    return (
        <Table size="sm">
  <thead>
    <tr>
      <th scope="col">Project Name</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">My Covid Safe Travels App</th>
      <td>September 2021</td>
      <td>Front-End Project demonstrating knowledge of HTML, CSS, Javascript, AJAX, APIs. Quantitative API data rendered using Chart.js </td>
      <td><Button href="https://safetravel-s.netlify.app/">Click to View</Button></td>
    </tr>
    <tr>
      <th scope="row">Fizzy Fizzy BathBombs</th>
      <td>October 2021</td>
      <td>Full-Stack Application utilizing Node, Express, Sequelize, PostgreSQL, bcrypt, Express ES6 Template Engine</td>
      <td><Button href="https://fizzyfizzybathbombs.herokuapp.com/">Click to View</Button></td>
    </tr>
    <tr>
      <th scope="row">Capstone Project</th>
      <td>December 2021</td>
      <td>Full-Stack Application using React</td>
      <td><Button href="https://media-watch-list.herokuapp.com/">Click to View</Button></td>
    </tr>
  </tbody>
</Table>
    );
}