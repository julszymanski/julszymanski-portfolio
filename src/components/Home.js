import React from 'react'
import otherHeadshot from '../images/2021-02-28-edit-cropped.jpeg';
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
    
    // Banner
    <div>    
    <div class="row">
        <img class="banner" src={french} alt="banner"/>
    </div>

    {/* Headshot, About Me */}
    <div class="headshot-aboutme row">
    <div style={{width: "fit-content"}} class="col-sm-4 col-md-4 mr-3">
        <img class="headshot" src= {otherHeadshot} alt="headshot"/>
    </div>
    <div class="aboutme col-sm-8 col-md-8 my-auto">
        <h2>Welcome! I'm Julia, a Full-Stack Web Developer based in Atlanta, Georgia. I like to travel and learn new languages. Find me building websites from the ground up, and taking French and Portuguese classes in my spare time.</h2>
    </div>
    </div>

        <div class= "row mb-1 cv">
        <h3>Education</h3>
        </div>

        <div class="row cv">
        <div class="col-sm-2">
            <img src={DigitalCrafts} alt="DigitalCrafts logo" id="logo"/>
        </div>

        <div class="col-sm-10">
            <p>DigitalCrafts</p>
            <p>Certification of Completion, Web Development</p>
            <p>Jun 2021 - Dec 2021</p>
            <p>Atlanta, GA</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>
    
        <div class="row cv">
        <div class="col-sm-2">
            <img src={UCSDExt} alt="UCSDExt logo" id="logo"/>
        </div>
        <div class="col-sm-10">
            <p>UC San Diego Extension</p>
            <p>Foreign Language Studies</p>
            <p>Spanish, French, Portuguese</p>
            <p>Oct 2016 - present</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>

        <div class="row cv">
        <div class="col-sm-2">
            <img src={PLQE} alt="PLQE logo" id="logo"/>
        </div>
        <div class="col-sm-10">
            <p>Proyecto Lingüistico Quetzalteco de Español</p>
            <p>12 Week Full-Time Spanish Immersion</p>
            <p>Mar 2014 - Jun 2014</p>
            <p>Quetzaltenango, Guatemala</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>

        <div class="row cv">
        <div class="col-sm-2">
            <img src={UCSD} alt="UCSD logo" id="logo"/>
        </div>
        <div class="col-sm-10">
            <p>University of California, San Diego</p>
            <p>Bachelor of Science (B.S.), Biochemistry and Cell Biology</p>
            <p>2010 - 2014</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>

        <section id="skills">
        <h3>Skill Set</h3>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
        <div class="container-fluid">
        <div class="row" align="center">
        <div id="icon" class="col-md-3 col-6"><i class="devicon-python-plain"></i>
        <p class="lead">Python</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-javascript-plain"></i>
        <p class="lead">Javascript</p></div>
        <div class="w-100 d-lg-none mt-4"></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-css3-plain"></i>
        <p class="lead">CSS3</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-jquery-plain"></i>
        <p class="lead">jQuery</p></div>
        </div>
        <div class="row" align="center">
        <div id="icon" class="col-md-3 col-6"><i class="devicon-jira-plain"></i>
        <p class="lead">Jira</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-html5-plain"></i>
        <p class="lead">HTML5</p></div>
        <div class="w-100 d-lg-none mt-4"></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-heroku-original"></i>
        <p class="lead">Heroku</p></div>   
        <div id="icon" class="col-md-3 col-6"><i class="devicon-express-original"></i>
        <p class="lead">Express</p></div>     
        </div>
        <div class="row" align="center">
        <div id="icon" class="col-md-3 col-6"><i class="devicon-slack-plain"></i>
        <p class="lead">Slack</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-nodejs-plain"></i>
        <p class="lead">Node.js</p></div>
        <div class="w-100 d-lg-none mt-4"></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-react-original"></i>
        <p class="lead">React</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-visualstudio-plain"></i>
        <p class="lead">Visual</p></div>
        </div>
        <div class="row" align="center">
        <div id="icon" class="col-md-3 col-6"><i class="devicon-postgresql-plain"></i>
        <p class="lead">PostgreSQL</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-bootstrap-plain"></i>
        <p class="lead">Bootstrap</p></div>
        <div class="w-100 d-lg-none mt-4"></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-amazonwebservices-original"></i>
        <p class="lead">AWS</p></div>
        <div id="icon" class="col-md-3 col-6"><i class="devicon-github-original"></i>
        <p class="lead">Github</p></div>
        </div>
        </div>
        </section>

        <div class="row mt-2 mb-1">
        <h3>Experience</h3> 
        </div>

        <div class="row mb-3">
        <div class="col-sm-2">
            <img src={BDlogo} alt="BDlogo" id= "logo"/>
        </div>

        <div class="col-sm-10">
            <p>Scientist</p>
            <p>BD</p>
            <p>Feb 2020 - Jun 2021 • 1 yr 5 mos</p>
            <p>San Diego, CA</p>
            <hr size="3px" width="90%" color="lightgrey"/>  
        </div>
        </div> 

        <div class="row mb-3">
        <div class="col-sm-2">
            <img src={Natdxlogo} width="100px" height="auto" alt="NATDxlogo" id="logo"/>
        </div>

        <div class="col-sm-10">
            <p>Research Associate</p>
            <p>NAT Diagnostics, Inc.</p>
            <p>Apr 2016 - Feb 2020 • 3 yrs 11 mos</p>
            <p>San Diego, CA</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>

        <div class="row mb-3">
        <div class="col-sm-2">
            <img src={batu} alt="Batu logo" id="logo"/>
        </div>

        <div class="col-sm-10">
            <p>Research Technician</p>
            <p>Batu Biologics, Inc.</p>
            <p>Feb 2015 - Apr 2016 • 1 yr 3 mos</p>
            <p>San Diego, CA</p>
            <hr size="3px" width="90%" color="lightgrey"/>
        </div>
        </div>
        </div>




        <div class="row cv">
            <h3>Accomplishments</h3>
        </div>

        <div class="row cv">
            <div class="col-sm-2">
            <div class="big-number" id="five">5</div>
            </div>

            <div class="col-sm-10">
            <div class="languages">
                <h4>Languages</h4>
                <p>English • Spanish • French • Portuguese • Polish</p>
                <hr size="3px" width="90%" color="lightgrey"/>
            </div>
            </div>
        </div>

        <div class="row cv">
            <div class="col-sm-2">
            <div class="big-number">3</div>
            </div>

            <div class="col-sm-10">
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
)
}

