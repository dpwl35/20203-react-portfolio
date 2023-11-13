import { useEffect, useRef, useState } from "react";
import { motion  } from "framer-motion"

/*CSS*/
import '../styles/About.css';

/*image*/
import icon_html from '../assets/icon_html.png'
import icon_css from '../assets/icon_css.png'
import icon_js from '../assets/icon_js.png'
import icon_react from '../assets/icon_react.png'
import icon_vue from '../assets/icon_vue.png'
import icon_next from '../assets/icon_next.png'
import icon_figma from '../assets/icon_figma.png'
import icon_ps from '../assets/icon_ps.png'
import icon_ai from '../assets/icon_ai.png'

import checkmark from '../assets/checkmark.svg'

function About(){
  let text = "Web Publisher"
  let splitStr = [...text] 

  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  const list1 = {
    hidden: { opacity: 0 },
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
    visible: { opacity: 1, y: 0}
  };
  const box = {
    hidden: { opacity: 0, y: '20vmin' },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 }}
  }

  const divRef = useRef(null);
  const textStyle = useRef(null);

  const [size, setSize] = useState('16');
  const [height, setHeight] = useState('22');
  const [font, setFont] = useState('PPMori');
  const [color, setColor] = useState('#F4F0E6');
  const sizeChange = (e) => { setSize(e.target.value)}
  const heightChange = (e) => { setHeight(e.target.value)}
  const fontChange = (e) => { setFont(e.target.value)}  
  const colorChange = (e) => { setColor(e.target.value)}  
  
  useEffect(()=>{
    
    const textStyleChange = textStyle.current.style;
    
    textStyleChange.fontFamily = font
    textStyleChange.fontSize = size + `px`
    textStyleChange.lineHeight = height + `px`
    textStyleChange.color = color
    
  })

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

      <div className="about-marquee">
        <p>OPTIMISTIC POSITIVE ADVENTURER CREATIVE COOPERATION</p>
        <p>OPTIMISTIC POSITIVE ADVENTURER CREATIVE COOPERATION</p>
      </div>


      <div className="about-grid2 publishing">
          <div className="horizontal left"></div>
          <div className="horizontal center"></div>
          <div className="horizontal right"></div>
          <div className="horizontal left"></div>
          <div className="title left">Web publishing</div>
          <div className="content left">
            <div className="skill">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <ul className="icon">
              <li><img src={icon_html} alt="html 아이콘"></img></li>
              <li><img src={icon_css}  alt="css 아이콘"></img></li>
              <li><img src={icon_js}   alt="js 아이콘"></img></li>
            </ul>
            <ul className="list">
              <li><img src={checkmark} alt="check 아이콘"></img> 시맨틱 마크업</li>
              <li><img src={checkmark} alt="check 아이콘"></img> SEO 최적화 </li>
              <li><img src={checkmark} alt="check 아이콘"></img> 동적 UI 생성</li>
            </ul>
            <div className="description">
              웹 표준 및 웹 접근성에 대한 이해를 바탕으로 콘텐츠를 구조화하고 스타일링합니다. 다양한 디바이스와 브라우저에 대응하여 크로스 브라우징 이슈를 해결하고 사용자에게 일관된 화면을 제공합니다.
              DOM요소에 접근하여 Event를 활용하여 동적인 UI를 만들 수 있습니다. 
            </div>
          </div>
          <div className="bg-img settings">
            <div className="range">
              <div className="select">
                <label htmlFor="fontFamily">Font Family</label>
                <select name="fontFamily" onChange={fontChange}>
                  <option value="PPMori">PPMori</option>
                  <option value="SpoqaHanSansNeo">SpoqaHanSansNeo</option>
                  <option value="LibreFranklin">LibreFranklin</option>
                </select>
              </div>

              <div className="slider">
                <label htmlFor="fontSize">Font Size</label>
                <input className="range-input" id="fontSize" onChange={sizeChange} type="range"min="12" max="22" defaultValue="16" ></input>
              </div>

              <div className="slider">
                <label htmlFor="lineHeight">Line Height</label>
                <input className="range-input" id="lineHeight" onChange={heightChange} type="range" min="18" max="33" defaultValue="22" ></input>
              </div>

              <div className="color">
                <label htmlFor="picker">Text Color</label>
                <input className="picker" id="picker" onChange={colorChange} type="color" defaultValue={color} />
              </div>
            </div>

            <div className="range-value AbrilFatface">{color.toUpperCase()}</div>
            <div className="text" ref={textStyle}>
              HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
              <br />
              <br />
              "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.
            </div>
            <div className="range-value LibreFranklin align-right">{font}</div>
            <div className="range-value AbrilFatface align-right">{size} / {height}</div>
          </div>
          <div className="vertical"></div>
          <div className="vertical v1"></div>
          <div className="vertical v2"></div>
          <div className="img2">durleh</div>
      </div>

      <div className="about-grid2 framework">
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="title left">SPA Framework</div>
          <div className="content left">
            <div className="skill">
              <p>Vue</p>
              <p>React</p>
              <p>Next.js</p>
            </div>
            <ul className="icon">
              <li><img src={icon_vue}   alt="vue 아이콘"></img></li>
              <li><img src={icon_react} alt="react 아이콘"></img></li>
              <li><img src={icon_next}  alt="next 아이콘"></img></li>
            </ul>
            <ul className="list">
              <li><img src={checkmark} alt="check 아이콘"></img> Component</li>
              <li><img src={checkmark} alt="check 아이콘"></img> Router</li>
              <li><img src={checkmark} alt="check 아이콘"></img> props, state</li>
            </ul>
            <div className="description">
              Vue, React, Next.js를 사용하는 환경에서도 퍼블리싱이 가능합니다.  기본적인 UI 기능 구현이 가능합니다. 
              외부 라이브러리 styled-components / bootstrap 사용할 수 있습니다.
            </div>
          </div>
          <div className="bg-img settings">

          </div>
          <div className="vertical"></div>
          <div className="vertical v1"></div>
          <div className="vertical v2"></div>
          <div className="img2"></div>
      </div>

      <div className="about-grid2 design">
        <div className="horizontal"></div>
        <div className="horizontal"></div>
        <div className="horizontal"></div>
        <div className="horizontal"></div>
        <div className="title left">Design tool</div>
        <div className="content left">
          <div className="skill">
            <p>Figma</p>
            <p>Photoshop</p>
            <p>Illustrator</p>
          </div>
          <ul className="icon">
            <li><img src={icon_figma} alt="피그마 아이콘"></img></li>
            <li><img src={icon_ps}    alt="포토샵 아이콘"></img></li>
            <li><img src={icon_ai}    alt="일러스트레이터 아이콘"></img></li>
          </ul>
          <ul className="list">
            <li><img src={checkmark} alt="check 아이콘"></img> UI 디자인</li>
            <li><img src={checkmark} alt="check 아이콘"></img> 웹 디자인</li>
            <li><img src={checkmark} alt="check 아이콘"></img> 아이콘 디자인</li>
          </ul>
          <div className="description">
            Figma를 활용한 UI/UX 디자인을 할 수 있습니다. 웹사이트와 앱의 인터페이스를 디자인할 수 있습니다. 포토샵을 활용한 디자인, 편집을 할 수 있으며 일러스트레이터를 활용한 벡터 이미지, svg 아이콘 제작이 가능합니다.
          </div>
        </div>
        <div className="bg-img settings">
            <div className="settings-box">
              <div className="controls">
                <p className="title">Controls</p>
                <div className="wrap">
                  <div className="list">
                    <div className="subTitle">Checkbox</div>
                    <ul>
                      <li>
                        <input type="checkbox" className="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox"><span>Unselected</span></label>
                      </li>
                      <li>
                        <input type="checkbox" className="checkbox" id="checkbox1" defaultChecked="checked"/>
                        <label htmlFor="checkbox1"><span>Selected</span></label>
                      </li>
                      <li>
                        <input type="disabled" className="disabled" id="disabled" disabled="disabled"/>
                        <label htmlFor="disabled"><span>Disabled</span></label>
                      </li>
                    </ul>
                  </div>
                  <div className="list">
                    <div className="subTitle">Radio</div>
                    <ul>
                      <li>
                        <input type="radio" className="radio" id="checkbox"/>
                        <label htmlFor="checkbox"><span>Unselected</span></label>
                      </li>
                      <li>
                        <input type="radio" className="radio" id="radio1" defaultChecked="checked"/>
                        <label htmlFor="radio1"><span>Selected</span></label>
                      </li>
                      <li>
                        <input type="radio" className="radio" id="radio2" disabled="disabled"/>
                        <label htmlFor="radio2"><span>Disabled</span></label>
                      </li>
                    </ul>
                  </div>
                  <div className="list">
                    <div className="subTitle">Switch</div>
                    <ul>
                      <li className="switch">
                        <label>
                          <input role="switch" type="checkbox"/>
                          <span>알람</span>
                        </label>
                      </li>
                      <li className="switch">
                        <label>
                          <input role="switch" type="checkbox" defaultChecked="checked"/>
                          <span>알람</span>
                        </label>
                      </li>
                      <li className="switch">
                      <label>
                          <input role="switch" type="checkbox" disabled/>
                          <span>알람</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="navigation">
                <p className="title">Navigation</p>
                  <div className="wrap">
                    <div className="list">
                      <div className="subTitle">Checkbox</div>
                    </div>
                    <div className="list">
                      <div className="subTitle">Slider</div>
                    </div>
                  </div>
              </div>

              <div className="input">
                <p className="title">Input</p>
                  <div className="wrap">
                    <div className="list">
                      <div className="subTitle">Text Field</div>
                      <ul>
                        <li>
                          <span>Static</span>
                          <div>
                            <label htmlFor="textField"><span>Label</span></label>
                            <input type="text" className="text-field" />
                          </div>
                        </li>
                        <li>
                          <span>Hover</span>
                          <div>
                            <label htmlFor="textField"><span>Label</span></label>
                            <input type="text" className="text-field" />
                          </div>
                        </li>
                        <li>
                          <span>Disabled</span>
                          <div>
                            <label htmlFor="textField"><span>Label</span></label>
                            <input type="text" className="text-field" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className="typography">
                <p className="title">Typography</p>
                  <div className="wrap">
                    <div className="list">
                      <div className="subTitle">Font</div>
                      <ul>
                        <li><span>U+0041-005A</span><span>PPMori</span></li>
                        <li><span>U+AC00-D7A3</span><span>SpoqaHanSansNeo</span></li>
                        <li><span>U+0041-005A</span><span>Abril Fatface</span></li>
                        <li><span>U+0041-005A</span><span>Libre Franklin</span></li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className="color">
                <p className="title">Color Palette</p>
                  <div className="wrap">
                    <div className="list">
                      <div className="subTitle">Neturals</div>
                      <ul>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                      </ul>
                    </div>
                  </div>
              </div>

            </div>
        </div>
        <div className="vertical"></div>
        <div className="vertical v1"></div>
      </div>

      

      <div className="aaa">
        <motion.div
          className="box"
          ref={divRef}
          variants={box} initial="hidden" whileInView="visible"
        >
          🤟😎🤟
        </motion.div>
      </div>

    </div> 
  )
}




export default About;