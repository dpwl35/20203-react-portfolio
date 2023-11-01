import '../styles/Contact.css';
import arrow from '../assets/arrow.svg'
import { motion } from "framer-motion"

function Contact(){
  return(    
    <div className='contact-wrap'>
      <ul className='contact-grid back'>
        <li className='horizontal-lines'>
          <span></span><span></span><span></span><span></span><span></span>
        </li>
        <li className='horizontal-lines'>
          <span></span><span></span><span></span><span></span><span></span>
        </li>
        <li className='vertical-lines'>
          <span></span><span></span><span></span>
        </li>
        <li className='vertical-lines'>
          <span></span><span></span><span></span>
        </li>
        <li className='vertical-lines'>
          <span></span><span></span><span></span>
        </li>
        <li className='vertical-lines'>
          <span></span><span></span><span></span>
        </li>
      </ul>
      <div className='contact-grid front'>
        <div>
          <p className='contact-title'>contact</p>
          <p className='contact-desc'>함께 일할 사람을 찾고 계신가요?</p>
        </div>
        <div>
          <p>
            dpwl9435
            <motion.span
              initial={{ opacity: 0, scale: 0, fontSize: "0" }}
              animate={{ opacity: 1, scale: 1, fontSize: "10rem" }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]}}
            >@</motion.span>
            gmail.com
          </p>
        </div>
        <div className='link-box'>
          <a href='https://github.com/dpwl35' target='_blank' rel="noopener noreferrer" title="새창으로 열기 깃허브">
            <div><img src={arrow} alt="화살표 이미지"/></div>
            <p>Github</p>
            <p>code</p>
          </a>
        </div>
        <div className='link-box'>
          <a href='https://ji35.tistory.com/' target='_blank' rel="noopener noreferrer" title="새창으로 열기 블로그">
            <div><img src={arrow} alt="화살표 이미지"/></div>
            <p>Blog</p>
            <p>study</p>
          </a>
        </div>
      </div>
    </div> 
  )
}

export default Contact;