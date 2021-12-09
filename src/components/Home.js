import React from 'react'
import headshot from '../images/2021-04-11.jpeg';
import otherHeadshot from '../images/2021-02-28-edit-cropped.jpeg';
import banner from '../images/banner.jpeg';
import BDlogo from '../images/bd.jpeg';
import Natdxlogo from '../images/natdx.jpeg';
import batu from '../images/Batu.jpeg';
import DigitalCrafts from '../images/DigitalCrafts.jpeg';
import UCSDExt from '../images/UCSDExt.jpeg';
import UCSD from '../images/UCSD.jpeg';
import PLQE from '../images/plqe.jpeg';
import french from '../images/french.jpeg';

export default function Home() {
    return (
    <div class="body">    
    <div class="container-fluid">
        <img class="img-fluid" src={french} id="banner" alt="banner"/>
    </div>

    <div class="container-fluid">
        <img class="img-fluid" src= {otherHeadshot} id="feature" alt="headshot"/>
        <h1>Welcome!</h1>
        <h2>I'm a Full-Stack Web Developer based in Atlanta, Georgia.</h2>
    </div>

    <div class="container-fluid">
    <p> </p>
    <p> </p>
    <p> </p>
    <p>I like to travel and learn new languages. Find me building websites from the ground up, and taking French and Portuguese classes in my spare time.</p>

    </div>

    <div class="container-fluid">

        <div class= "row mb-1">
        <h3>Education</h3>
        </div>

        <div class="row mb-3">
        <div class="col-2">
            <img src={DigitalCrafts} alt="DigitalCrafts logo" id="logo"/>
        </div>

        <div class="col-10">
            <p>DigitalCrafts</p>
            <p>Certification of Completion, Web Development</p>
            <p>Jun 2021 - Dec 2021</p>
            <p>Atlanta, GA</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>
    
        <div class="row mb-3">
        <div class="col-2">
            <img src={UCSDExt} alt="UCSDExt logo" id="logo"/>
        </div>
        <div class="col-10">
            <p>UC San Diego Extension</p>
            <p>Foreign Language Studies</p>
            <p>Spanish, French, Portuguese</p>
            <p>Oct 2016 - present</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>

        <div class="row mb-3">
        <div class="col-2">
            <img src={PLQE} alt="PLQE logo" id="logo"/>
        </div>
        <div class="col-10">
            <p>Proyecto Lingüistico Quetzalteco de Español</p>
            <p>12 Week Full-Time Spanish Immersion</p>
            <p>Mar 2014 - Jun 2014</p>
            <p>Quetzaltenango, Guatemala</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>

        <div class="row mb-3">
        <div class="col-2">
            <img src={UCSD} alt="UCSD logo" id="logo"/>
        </div>
        <div class="col-10">
            <p>University of California, San Diego</p>
            <p>Bachelor of Science (B.S.), Biochemistry and Cell Biology</p>
            <p>2010 - 2014</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>

        <h3>Skill Set</h3>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
        <div class="col-md-3">
        <div id="icon"><i class="devicon-python-plain"></i></div>
        <p text-align="center" class="lead">Python</p>
        <div id="icon"><i class="devicon-javascript-plain"></i></div>
        <p class="lead">Javascript</p>
        <div id="icon"><i class="devicon-css3-plain"></i></div>
        <p class="lead">CSS3</p>
        </div>
        <div class="col-md-3">
        <div id="icon"><i class="devicon-jquery-plain"></i></div>
        <p class="lead">jQuery</p>
        <div id="icon"><i class="devicon-html5-plain"></i></div>
        <p class="lead">HTML5</p>
        <div id="icon"><i class="devicon-heroku-original"></i></div>
        <p class="lead">Heroku</p>        
        </div>
        <div class="col-md-3">
        <div id="icon"><i class="devicon-express-original"></i></div>
        <p class="lead">Express</p>
        <div id="icon"><i class="devicon-nodejs-plain"></i></div>
        <p class="lead">Node.js</p>
        <div id="icon"><i class="devicon-react-original"></i></div>
        <p class="lead">React</p>
        </div>
        <div class="col-md-3">
        <div id="icon"><i class="devicon-postgresql-plain"></i></div>
        <p class="lead">PostgreSQL</p>
        <div id="icon"><i class="devicon-bootstrap-plain"></i></div>
        <p class="lead">Bootstrap</p>
        <div id="icon"><i class="devicon-amazonwebservices-original"></i></div>
        <p class="lead">AWS</p>
        </div>

        <div class="row mt-2 mb-1">
        <h3>Experience</h3> 
        </div>

        <div class="row mb-3">
        <div class="col-2">
            <img src={BDlogo} alt="BDlogo" id= "logo"/>
        </div>

        <div class="col-10">
            <p>Scientist</p>
            <p>BD</p>
            <p>Feb 2020 - Jun 2021 • 1 yr 5 mos</p>
            <p>San Diego, CA</p>
            <hr size="3px" width="90%" color="lightgrey"/>  
        </div>
        </div> 

        <div class="row mb-3">
        <div class="col-2">
            <img src={Natdxlogo} width="100px" height="auto" alt="NATDxlogo" id="logo"/>
        </div>

        <div class="col-10">
            <p>Research Associate</p>
            <p>NAT Diagnostics, Inc.</p>
            <p>Apr 2016 - Feb 2020 • 3 yrs 11 mos</p>
            <p>San Diego, CA</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>

        <div class="row mb-3">
        <div class="col-2">
            <img src={batu} alt="Batu logo" id="logo"/>
        </div>

        <div class="col-10">
            <p>Research Technician</p>
            <p>Batu Biologics, Inc.</p>
            <p>Feb 2015 - Apr 2016 • 1 yr 3 mos</p>
            <p>San Diego, CA</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>
        </div>
        </div>




        <div class="container-fluid">
        <div class="row mb-1">
            <h3>Accomplishments</h3>
        </div>

        <div class="row">
            <div class="col-2">
            <div class="big-number" id="five">5</div>
            </div>

            <div class="col-10">
            <div class="languages">
                <h4>Languages</h4>
                <p>English • Spanish • French • Portuguese • Polish</p>
                <hr size="3px" width="90%" color="lightgrey"/>
            </div>
            </div>
        </div>

        <div class="row">
            <div class="col-2">
            <div class="big-number">3</div>
            </div>

            <div class="col-10">
            <div class="publications">
                <h4>Publications</h4>
            <p id="line">
                • Safety of targeting tumor endothelial cell antigens
                • Cancer anti-angiogenesis vaccines: Is the tumor vasculature antigenically unique?
                • Induction of tumor inhibitory anti-angiogenic response through immunization with interferon Gamma primed placental endothelial cells: ValloVax™
            </p>
            </div>
            </div>
        </div>
        </div>
        </div>
)
}

