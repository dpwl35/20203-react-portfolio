import axios from 'axios'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

import '../styles/Projects.css';
import img from '../assets/img_00.png'

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

  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(()=>{
    getData();
  }, [])

  return(    
    <div className='projects'>
      <div className='projects-title'>Projects</div>
      <motion.ul variants={container} initial="hidden" animate="visible" className='projects-list'>
        <li variants={container} initial="hidden" animate="visible" className='projects-card'>
          <div className='projects-img'>
            <img src={img} alt="카드 이미지"/>
          </div>
          <div className="projects-desc">
            <p className="card-title">EMS Project</p>
            <p className="card-desc">Energy Management System 디자인 및 퍼블리싱</p>
            <p className="card-tag">
              <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Figma</span>
            </p>
            <div className="card-link">
              <a className="card-link-notion" href="https://www.notion.so/EMS-e4c4b5886e7c49cda0712ed3de85e4e5?pvs=4" target="_blank" rel="noopener noreferrer" title="새창으로 열기">Notion</a>
            </div>
          </div>
        </li>
        {
          project && project.map((item, idx) => {
            return (
              <motion.li variants={card} className='projects-card' key={idx}>
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
              </motion.li>
            )
          })
        }
      </motion.ul>
    </div>
  )
}

export default Projects;