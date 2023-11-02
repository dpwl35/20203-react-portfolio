import '../styles/Contact.css';
import { motion } from "framer-motion"

function Contact(){
  const linkBox = [
    {
      href : 'https://just-mulberry-b8b.notion.site/yeji-Kim-Web-Publisher-0356b560544a4984ab9db9b99fbba0bd',
      target : '_blank',
      rel : 'noopener noreferrer',
      title : '노션 이력서 새창으로 열기',
      textMain : 'Resume',
      textSub : 'notion',
      delay : '1.2'
    },{
      href : 'https://github.com/dpwl35',
      target : '_blank',
      rel : 'noopener noreferrer',
      title : '깃허브 새창으로 열기',
      textMain : 'Github',
      textSub : 'code',
      delay : '1.5'
    },{
      href : 'https://ji35.tistory.com/',
      target : '_blank',
      rel : 'noopener noreferrer',
      title : '블로그 새창으로 열기',
      textMain : 'Blog',
      textSub : 'study',
      delay : '1.8'
    }

  ]
  const variants = {
    start: { pathLength: 0 },
    end: { pathLength: 1 }
  };

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
          <p className='motion-box'>
            dpwl9435
            <motion.span
              initial={{ opacity: 0, scale: 0, fontSize: "0" }}
              animate={{ opacity: 1, scale: 1, fontSize: "8rem" }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]}}>@</motion.span>
            gmail.c
            <motion.span
              initial={{ opacity: 0, y: -80,  }}
              animate={{ opacity: 1, y: 0, }}
            >o
            </motion.span>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 0],  translateY:0, translateX: 0 }}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: "easeInOut",
                times: 0.5,
                repeat: 1,
                //repeatDelay: 4
              }}
            >m</motion.span>
          </p>
        </div>
        {
          linkBox.map((item, idx)=>{
            return (
              <div className='link-box' key={idx}>
              <a href={linkBox[idx].href} target={linkBox[idx].target} rel={linkBox[idx].rel} title={linkBox[idx].title}>
                <div>
                  <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      variants={variants}
                      initial="start"
                      animate="end"
                      transition={{
                        delay: linkBox[idx].delay,
                        default: { duration: 1.8 }
                      }}
                      d="M1 1.5H40M40 1.5V41M40 1.5L1 40.5" stroke="#F4F0E6" stroke-width="2"/>
                  </svg>
                </div>
                <p>{linkBox[idx].textMain}</p>
                <p>{linkBox[idx].textSub}</p>
              </a>
            </div>
            )
          })
        }
     
      </div>
    </div> 
  )
}

export default Contact;