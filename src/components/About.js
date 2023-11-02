import { motion } from "framer-motion"
import '../styles/About.css';

function About(){
  let text = "Web Publisher"
  let splitStr = [...text] 

  const list = {
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
  const list1 = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  
  return(    
    <div className='about-wrap'>
      <motion.div variants={list} initial="hidden" animate="visible" className='about-grid'>
        <motion.div variants={item} className='grid-title'>
          <motion.div variants={list1} initial="hidden" animate="visible" >
            {
              splitStr.map((a, i)=> {
                return (
                  <motion.span variants={item} key={i}>{a}</motion.span>
                )
              })
            }
          </motion.div>
        </motion.div>
        <motion.div variants={list} className='grid-box'></motion.div>
        <motion.div variants={list} className='grid-box'></motion.div>
        <motion.div variants={list}>즐기며  성장하는 </motion.div>
        <motion.div variants={list}>
          웹 구현에 매력을 느껴 퍼블리셔 일을 시작하게 되었습니다. 웹 표준, 웹 접근성의 중요성을 인지하며 이용자에게 좋은 사용자 경험을 제공하여 서비스의 가치를 높이고자 합니다. 
          최적의 웹 서비스구현에 대해 생각합니다. 견고한 마크업을 바탕으로 정보와 가치 전달에 대해 고민합니다. 
        </motion.div>
        <motion.div variants={list} className='grid-box'></motion.div>
      </motion.div>
    </div> 
  )
}

export default About;