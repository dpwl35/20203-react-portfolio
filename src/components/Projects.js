import axios from 'axios'
import { useEffect, useState } from 'react';

import '../styles/Projects.css';

function Projects(){
  const [project, setProject] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get('https://dpwl35.github.io/api/portfolio-api/project.json');
      console.log(result.data);
      setProject(result.data);
    } catch (error) {
      console.log('Data load failed');
    }
  }

  useEffect(()=>{
    getData();
  }, [])

  return(    
    <ul className='projects-list'>
      {
        project && project.map((item, idx) => {
          return (
            <li className='projects-card' key={idx}>
              <div className='projects-img'>이미지</div>
              <div className='projects-desc'>
                <p className='card-title'>{project[idx].title}</p>
                <p className='card-desc'>{project[idx].description}</p>
                <p className='card-tag'>
                  {
                    project[idx].tags && project[idx].tags.map((tags, idx)=> {
                      return (
                        <span key={idx}>{tags}</span>
                      )
                    })
                  }
                </p>
              </div>
            </li>
          )
        })
      }
    </ul> 
  )
}

export default Projects;