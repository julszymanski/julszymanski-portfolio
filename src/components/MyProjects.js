import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import thumbsup from '../images/thumbsup.jpeg';
import Images from '../data/Products';
import fizzyfizzy from '../images/fizzyfizzy.jpeg';

// ,counterValue1,incrementValue1,counterValue2,incrementValue2

function MyProjects(props) {
    const [projectData,setProjectData] = useState([]);
    const dispatch = useDispatch();
    const likes = useSelector(state => state.counterValue)

    const handleStore = () =>{

        dispatch({type:'LIKED'})
    }


    const fetchProjects = () =>{
        return axios.get("https://mocki.io/v1/fe6cb82c-d3e5-4973-9c02-9f8d26298c48")
        .then(projects=>projects.data);
    }

    useEffect(()=>{
        fetchProjects().then(projectResponse=>{
            setProjectData(projectResponse['projects']);
        })
    },[])

    return (
        <div className="container">
            <table className="table" style={{marginLeft:'5em'}}>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Quick View</th>
                        <th>URL</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                {
                    projectData.map((project,index)=>(
                        <tr>
                            <td>{project.project_name}</td>
                            <td>{project.date}</td>
                            <td>{project.description}</td>
                            <img class="apiImage" src={project.quick_view} alt={project.quick_view}/>
                            <td><button onClick={(e) => {e.preventDefault();window.location.href=project.url;}}>Click to View</button></td>
                            <button><img class="thumbsup" src={thumbsup} alt="heartbutton" onClick={handleStore}/></button><h2>{likes}</h2>

                        </tr>
                    ))
                }
            </table>
            <button><img class="thumbsup" src={thumbsup} alt="heartbutton" onClick={handleStore}/></button>
            <h2>{likes}</h2>
        </div>
    );
}

export default MyProjects