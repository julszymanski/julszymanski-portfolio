import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import thumbsup from '../images/thumbsup.jpeg';

// ,counterValue1,incrementValue1,counterValue2,incrementValue2

function MyProjects(props) {
    const [projectData,setProjectData] = useState([]);
    const dispatch = useDispatch();
    const likes = useSelector(state => state.counterValue)

    const handleStore = () =>{

        dispatch({type:'LIKED'})
    }


    const fetchProjects = () =>{
        return axios.get("https://mocki.io/v1/6652a0fe-bb01-485a-9099-53931af42a82")
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
                    </tr>
                </thead>
                {
                    projectData.map((project,index)=>(
                        <tr>
                            <td>{project.project_name}</td>
                            <td>{project.date}</td>
                            <td>{project.description}</td>
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