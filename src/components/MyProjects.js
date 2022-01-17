import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';
import safetravels from '../images/safetravels.jpeg';
import portuguese from '../images/portuguese.jpeg';
import moviedb from '../images/moviedb.jpeg';
import portfolio from '../images/portfolio.jpeg';
import { Card, Button, Modal, Row, Col, Image } from "react-bootstrap";



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
      <Row>
      <Col>
      <Card className="project-card h-100" style={{ width: "35rem" }}>
        <Card.Img variant="top" src={moviedb} />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>Media Watch List</Card.Title>
          <Card.Title>December 2021; work in progress</Card.Title>
          <Card.Title>Full-Stack Website that allows users to access movie information and add to a 'favorites' list. APIs used are The Movie Database and IMDB. Built with React, Redux, Sequelize, PostgreSQL, Bootstrap, O Auth v2.0, JWT Tokens, Sessions.</Card.Title>

          {/* calling dispatch to set the state of our watchlist data in reducer */}
          {/* Parents guide from IMDB */}
          <a href="https://media-watch-list.herokuapp.com/">
          <Button className='submit-btn m-2'>
            View More
          </Button>
          </a>
          <a href="https://github.com/mwoolf87/media-watchlist">
          <Button className='submit-btn m-2' fontSize="30px">
            Github
          </Button>
          </a>
        </Card.Body>
      </Card>
      </Col>

      {/* Fizzy Fizzy Bathbombs */}
      <Col>
      <Card className="project-card h-100" style={{ width: "35rem" }}>
        <Card.Img variant="top" src={fizzyfizzy} />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>Fizzy Fizzy Bathbombs</Card.Title>
          <Card.Title>October 2021</Card.Title>
          <Card.Title>Full-Stack Application utilizing Node, Express, Sequelize, PostgreSQL, bcrypt, Express ES6 Template Engine.</Card.Title>

          {/* calling dispatch to set the state of our watchlist data in reducer */}
          {/* Parents guide from IMDB */}
          <a href="https://fizzyfizzybathbombs.herokuapp.com/">
          <Button className='submit-btn m-2'>
            View More
          </Button>
          </a>
          <a href="https://github.com/vivekthak88/Full-Stack-Project">
          <Button className='submit-btn m-2' fontSize="30px">
            Github
          </Button>
          </a>
        </Card.Body>
      </Card> 
      </Col>
      </Row>

      {/* Portfolio */}
      <Row>
      <Col>
      <Card className="project-card h-100" style={{ width: "35rem" }}>
        <Card.Img variant="top" src={portfolio} />
        <Card.Body>
          <Card.Title>Fizzy Fizzy Bathbombs</Card.Title>
          <Card.Title>November 2021</Card.Title>
          <Card.Title>I built my portolfio using React!</Card.Title>
          <a href="https://js-my-portfolio-react.herokuapp.com/">
          <Button className='submit-btn m-2'>
            View More
          </Button>
          </a>
        </Card.Body>
      </Card> 
      </Col>   

      {/* Safe Travels App */}
      <Col>
      <Card className="project-card h-100" style={{ width: "35rem" }}>
        <Card.Img variant="top" src={safetravels} />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>Safe Travels Web App</Card.Title>
          <Card.Title>August 2021</Card.Title>
          <Card.Title>The purpose of this site is to provide location specific details about travel restrictions, vaccination rates, and COVID cases. Built using HTML, CSS, Javascript, AJAX, APIs. Quantitative API data rendered using Chart.js.</Card.Title>

          {/* calling dispatch to set the state of our watchlist data in reducer */}
          {/* Parents guide from IMDB */}
          <a href="https://safetravel-s.netlify.app/">
          <Button className='submit-btn m-2'>
            View More
          </Button>
          </a>
          <a href="https://github.com/lopezg3000/safe-travel-webapp">
          <Button className='submit-btn m-2' fontSize="30px">
            Github
          </Button>
          </a>
        </Card.Body>
      </Card> 
      </Col>
      </Row>
      </div>
</div>
)
}