import '../styles/Contact.css';

function Contact(){
  return(    
    <div className='contact-wrap'>
      <ul className='contact-grid back'>
        <li className='horizontal-lines h-line'>
          <span></span><span></span><span></span><span></span><span></span>
        </li>
        <li className='horizontal-lines h-line'>
          <span></span><span></span><span></span><span></span><span></span>
        </li>
        <li className='vertical-lines v-line'>
          <span></span><span></span><span></span>
        </li>
        <li className='vertical-lines v-line'>
          <span></span><span></span><span></span>
        </li>
        <li className='vertical-lines v-line'>
          <span></span><span></span><span></span>
        </li>
        <li className='vertical-lines v-line'>
          <span></span><span></span><span></span>
        </li>
      </ul>
      <div className='contact-grid front'>
        <div>
          <p className='contact-title'>contact</p>
          <p className='contact-desc'>함께 일할 사람을 찾고 계신가요?</p>
        </div>
        <div>
          <p>dpwl9435@gmail.com</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div> 
  )
}

export default Contact;