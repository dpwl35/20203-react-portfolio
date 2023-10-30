import { Engine, Render, Runner, Mouse, MouseConstraint, Composites, Composite, Common, Bodies, Events } from 'matter-js';
import { useEffect, useRef, useState,  } from 'react';

import '../styles/Canvas.css';

/*image*/
import img05 from '../assets/COOPERATION.png'
import img04 from '../assets/CREATIVE.png'
import img03 from '../assets/ADVENTURER.png'
import img02 from '../assets/POSITIVE.png'
import img01 from '../assets/OPTIMISTIC.png'

const data = {
  'aaa' : { title: 'desc', desc: '안녕하세요. 포트폴리오 입니다.'},
  'OPTIMISTIC' : { title: 'OPTIMISTIC', desc: 'AAA 설명 입니다.'},
  'POSITIVE' : { title: 'POSITIVE', desc: 'AAA 설명 입니다.'},
  'ADVENTURER' : { title: 'ADVENTURER', desc: 'BBB 설명 입니다.'},
  'CREATIVE' : { title: 'CREATIVE', desc: 'CCC 설명 입니다.'},
  'COOPERATION' : { title: 'COOPERATION', desc: 'DDD 설명 입니다.'},
}

function Canvas() {
  const [selected, setSelected] = useState(data['aaa'])
  const anchorRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current
    const canvasParent = canvas.parentNode
    console.log(canvas)
    console.log(canvas.width) // 크기별이미지로드
    // const cw = anchorRef.current?.offsetWidth
    // const ch = anchorRef.current?.offsetHeight
    let cw = canvasParent.clientWidth
    let ch = canvasParent.clientHeight 

    function resize() {
      cw = canvasParent.clientWidth
      ch = canvasParent.clientHeight 
      canvas.style.width = cw + 'px'
      canvas.style.height = ch + 'px'
      canvas.width = cw
      canvas.height = ch 
    }

    let engine, render, runner, mouse, mouseConstraint

    initScene()
    initMouse()
    initGround()
    initImageBoxes()
    initCircle()

    Events.on(mouseConstraint, 'mousedown', ()=> {
      const newSelected = mouseConstraint.body && data[mouseConstraint.body.label]
      newSelected && setSelected (newSelected)
      //console.log(mouseConstraint.body)
    },{ passive: false })

    // canvas.addEventListener('click', ()=> {
    //   addRect(mouse.position.x, mouse.position.y, 50, 50)
    // })

    function initScene() {
      engine = Engine.create()
      render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {width: cw, height: ch, wireframes: false, background: '#1b1b19'}
      })
      runner = Runner.create()

      Render.run(render)
      Runner.run(runner, engine)
    }

    function initMouse() {
      mouse = Mouse.create()
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint : {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })
      Composite.add(engine.world, mouseConstraint)
    }

    // function initGround() {
    //   const segments = 4
    //   const deg = (Math.PI * 2) / segments
    //   const width = 10
    //   const radius = cw / 2 + width / 2
    //   //const height = ch
    //   const height = radius * Math.tan(deg / 2) * 2

    //   for (let i = 0; i < segments; i++){
    //     const theta = deg * i
    //     const x = radius * Math.cos(theta) + cw / 2
    //     const y = radius * Math.sin(theta) + ch / 2
    //     //addRect(x, y, width, height, { isStatic: true, angle: theta})
    //     addRect(x, y, width, height, { isStatic: true, angle: theta, render: {lineWidth: 15} })
    //   }
    // }
    
    //box
    function initGround() {
      const ground = [
        Bodies.rectangle(cw/2, ch, cw, 10,  { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(cw/2, 0, cw, 10,   { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(cw, ch/2, 10, ch,  { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(0, ch/2, 10, ch,   { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} })
      ]
      engine.timing.timeScale = 0.7;
      Composite.add(engine.world, ground)
    }

    function initCircle() {
      var stack = Composites.stack(20, 20, 30, 5, 0, 0, function(x, y) {
        return Bodies.circle(x, y, Common.random(30, 10), { friction: 0.00001, restitution: 0.01, density: 0.001 });
       });
  
       Composite.add(engine.world, stack);
    }

    //add bodies
    function initImageBoxes(){
      const scale = 1
      const t1 = {w: 797 * scale, h: 99 * scale}
      addRect(cw * 35 / 100, ch * 15 / 100, t1.w , t1.h, {
        label : 'OPTIMISTIC', 
        //chamfer: {radius: 20},
        isStatic: true,
        //angle: Math.PI * - 0.02,xScale: scale
        render: { sprite: {texture : img01, xScale: scale, yScale: scale}  }
      })
      addRect(cw * 35 / 100, ch * 32 / 100, 628, 99, {
        label : 'POSITIVE', 
        isStatic: true,
        render: { sprite: {texture : img02} }
      })
      addRect(cw * 30 / 100, ch * 47 / 100, 927, 97, {
        label : 'ADVENTURER', 
        isStatic: true,
        render: { sprite: {texture : img03} }
      })
      addRect(cw * 50 / 100, ch * 62 / 100, 670, 99, {
        label : 'CREATIVE', 
        isStatic: true,
        render: { sprite: {texture : img04} }
      })
      addRect(cw * 37 / 100, ch * 77 / 100, 972, 97, {
        label : 'COOPERATION', 
        isStatic: true,
        render: { sprite: {texture : img05} }
      })
    }

    function addRect(x, y, w, h, options = {}) {
      const rect = Bodies.rectangle(x, y, w, h, options)
      Composite.add(engine.world, rect)
    }

    window.addEventListener('resize', resize)
    resize()

   return () => {
    window.removeEventListener('resize', resize)
    Composite.clear(engine.world)
    Mouse.clearSourceEvents(mouse)
    Runner.stop(runner)
    Render.stop(render)
    Engine.clear(engine)
   }
  
  }, [])

  return (
    <div className="main-canvas" ref={anchorRef}>
      <canvas ref={canvasRef} > </canvas>
      <div className='canvas-item'>
        <p className='canvas-item-title'>{selected.title}</p>
        <p className='canvas-item-desc'>{selected.desc}</p>
      </div>
    </div>
  );
}


export default Canvas;