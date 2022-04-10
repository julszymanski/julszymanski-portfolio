import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';
import safetravels from '../images/safetravels.jpeg';
import portuguese from '../images/portuguese.jpeg';
import moviedb from '../images/moviedb.jpeg';
import portfolio from '../images/portfolio.jpeg';
import { Card, Row, Col } from "react-bootstrap";
import '../css/projects.css';
import twilio from '../images/twilio.jpeg';



export default function MyProjects() {
    return (
      <div>
      <div class="row">
      <img class="banner col-lg-12" src={portuguese} alt="banner"/>
      </div>


      <div class="project-card-container card-deck">
      <p> </p>
      <h1>My Projects</h1>
      {/* Media Watch List */}
      <Row className="row-col-1 row-col-md-2">
      {/* className="project-card h-100" style={{ width: "50rem" }} */}
      {/* Twilio React App */}
      <Col className="col-9 col-md-4">
      <Card>
        <Card.Img variant="top" src={twilio} />
        <Card.Body>
          <Card.Title>Twilio Video React App</Card.Title>
          <Card.Title>February 2022</Card.Title>
          <Card.Title>React application using Twilio Programmable Video APIs that allows group video conferencing and chat function. Built with React and Twilio Node.js SDK.</Card.Title>


          <a href="https://video-app-0671-4634-dev.twil.io?passcode=25613406714634">
          <button className='submit-btn'>
            View More
          </button>
          </a>
          <a href="https://github.com/julszymanski/twilio-video-app-react">
          <button className='submit-btn m-2' fontSize="30px">
            Github
          </button>
          </a>
        </Card.Body>
      </Card>
      </Col>

      <Col className="col-9 col-md-4">
      <Card>
        <Card.Img variant="top" src={moviedb} />
        <Card.Body>
          <Card.Title>Media Watch List</Card.Title>
          <Card.Title>December 2021; work in progress</Card.Title>
          <Card.Title>Full-Stack Website that allows users to access movie information and add to a 'favorites' list. APIs used are The Movie Database and IMDB. Built with React, Redux, Sequelize, PostgreSQL, Bootstrap, O Auth v2.0, JWT Tokens, Sessions.</Card.Title>


          <a href="https://media-watch-list.herokuapp.com/">
          <button className='submit-btn'>
            View More
          </button>
          </a>
          <a href="https://github.com/mwoolf87/media-watchlist">
          <button className='submit-btn m-2' fontSize="30px">
            Github
          </button>
          </a>
        </Card.Body>
      </Card>
      </Col>
      </Row>


      {/* Fizzy Fizzy Bathbombs */}
      <Row className="row-col-1 row-col-md-2">
      <Col className="col-9 col-md-4">
      <Card>
        <Card.Img variant="top" src={fizzyfizzy} />
        <Card.Body>
          <Card.Title>Fizzy Fizzy Bathbombs</Card.Title>
          <Card.Title>October 2021</Card.Title>
          <Card.Title>Full-Stack Application utilizing Node, Express, Sequelize, PostgreSQL, bcrypt, Express ES6 Template Engine.</Card.Title>


          <a href="https://fizzyfizzybathbombs.herokuapp.com/">
          <button className='submit-btn m-2'>
            View More
          </button>
          </a>
          <a href="https://github.com/vivekthak88/Full-Stack-Project">
          <button className='submit-btn m-2' fontSize="30px">
            Github
          </button>
          </a>
        </Card.Body>
      </Card> 
      </Col>

      {/* Portfolio */}
      <Col className="col-9 col-md-4">
      <Card>
        <Card.Img variant="top" src={portfolio} />
        <Card.Body>
          <Card.Title>Portfolio</Card.Title>
          <Card.Title>November 2021</Card.Title>
          <Card.Title>I built my portfolio using React!</Card.Title>
          <a href="https://js-my-portfolio-react.herokuapp.com/">
          <button className='submit-btn m-2'>
            View More
          </button>
          </a>
          <a href="https://github.com/julszymanski/julszymanski-portfolio">
          <button className='submit-btn m-2' fontSize="30px">
            Github
          </button>
          </a>
        </Card.Body>
      </Card> 
      </Col>  
      </Row> 

      {/* Safe Travels App */}
      <Row className="row-col-1 row-col-md-2">
      <Col className="col-9 col-md-4">
      <Card>
        <Card.Img variant="top" src={safetravels} />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>Safe Travels Web App</Card.Title>
          <Card.Title>August 2021</Card.Title>
          <Card.Title>The purpose of this site is to provide location specific details about travel restrictions, vaccination rates, and COVID cases. Built using HTML, CSS, Javascript, AJAX, APIs. Quantitative API data rendered using Chart.js.</Card.Title>


          <a href="https://safetravel-s.netlify.app/">
          <button className='submit-btn m-2'>
            View More
          </button>
          </a>
          <a href="https://github.com/lopezg3000/safe-travel-webapp">
          <button className='submit-btn m-2' fontSize="30px">
            Github
          </button>
          </a>
        </Card.Body>
      </Card> 
      </Col>
      </Row>
      </div>
</div>
)
}