import axios from 'axios'
import { useEffect, useState } from 'react';

import '../styles/Projects.css';

function Projects(){
  const [project, setProject] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get('https://dpwl35.github.io/api/portfolio-api/project.json');
      setProject(result.data);
    } catch (error) {
      console.log('Data load failed');
    }
  }

  useEffect(()=>{
    getData();
  }, [])

  return(    
    <div className='projects'>
      <div className='projects-title'>Projects</div>
      <ul className='projects-list'>
        {
          project && project.map((item, idx) => {
            return (
              <li className='projects-card' key={idx}>
                <div className='projects-img'>
                  <img src={project[idx].image} alt={project[idx].title}/>
                </div>
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
                  <div className='card-link'>
                    <a className='card-link-blog' href={project[idx].blog} target='_blank' rel="noopener noreferrer" title="새창으로 열기">Blog</a>
                    <a href={project[idx].demo} target='_blank' rel="noopener noreferrer" title="새창으로 열기">Demo</a>
                    <a href={project[idx].git} target='_blank' rel="noopener noreferrer" title="새창으로 열기">Github</a>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Projects;