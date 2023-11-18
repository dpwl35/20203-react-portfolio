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
  'text' : { title: 'Hello!', desc: `안녕하세요. 웹 퍼블리셔 포트폴리오 입니다.` },
  'OPTIMISTIC' : { title: 'OPTIMISTIC', desc: '낙관적인 사고'},
  'POSITIVE' : { title: 'POSITIVE', desc: '긍정적인 태도'},
  'ADVENTURER' : { title: 'ADVENTURER', desc: '모험을 즐기는'},
  'CREATIVE' : { title: 'CREATIVE', desc: '창의적인 생각'},
  'COOPERATION' : { title: 'COOPERATION', desc: '협조적인 태도'},
}

function Canvas() {
  const [selected, setSelected] = useState(data['text'])
  const anchorRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current
    const canvasParent = canvas.parentNode
    
    //console.log(canvas)
    //console.log('캔버스넓이:'+ cw)
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
      mouse = Mouse.create(canvas)
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
        
        let size1, size2

        if (cw <= 480) {
          size1 = 15
          size2 = 10
        } else if(cw <= 768) {
          size1 = 20
          size2 = 10
        } else {
          size1 = 30
          size2 = 10
        }

        return Bodies.circle(x, y, Common.random(size1, size2), { friction: 0.00001, restitution: 0.01, density: 0.001 });

       });
  
       Composite.add(engine.world, stack);
    }

    //add bodies
    function initImageBoxes(){  
      let scale = 1
      let t1 = {w: 797 * scale, h: 99 * scale, l: cw * 35 / 100, t: ch * 15 / 100}
      let t2 = {w: 628 * scale, h: 99 * scale, l: cw * 35 / 100, t: ch * 32 / 100}
      let t3 = {w: 927 * scale, h: 97 * scale, l: cw * 36 / 100, t: ch * 47 / 100}
      let t4 = {w: 670 * scale, h: 99 * scale, l: cw * 50 / 100, t: ch * 62 / 100}
      let t5 = {w: 972 * scale, h: 97 * scale, l: cw * 33 / 100, t: ch * 77 / 100}
      
      if (cw <= 480) {
        scale = 0.35
        t1 = {w: 797 * scale, h: 99 * scale, l: cw * 40 / 100, t: ch * 15 / 100}
        t2 = {w: 628 * scale, h: 99 * scale, l: cw * 35 / 100, t: ch * 30 / 100}
        t3 = {w: 927 * scale, h: 97 * scale, l: cw * 48 / 100, t: ch * 45 / 100}
        t4 = {w: 670 * scale, h: 99 * scale, l: cw * 50 / 100, t: ch * 58 / 100}
        t5 = {w: 972 * scale, h: 97 * scale, l: cw * 50 / 100, t: ch * 70 / 100}
        console.log(scale)
      } else if (cw <= 768){
        scale = 0.6
        t1 = {w: 797 * scale, h: 99 * scale, l: cw * 40 / 100, t: ch * 15 / 100}
        t2 = {w: 628 * scale, h: 99 * scale, l: cw * 35 / 100, t: ch * 30 / 100}
        t3 = {w: 927 * scale, h: 97 * scale, l: cw * 48 / 100, t: ch * 45 / 100}
        t4 = {w: 670 * scale, h: 99 * scale, l: cw * 50 / 100, t: ch * 58 / 100}
        t5 = {w: 972 * scale, h: 97 * scale, l: cw * 50 / 100, t: ch * 70 / 100}
        console.log(scale)
      } else if (cw <= 1024) {
        scale = 0.8
        t1 = {w: 797 * scale, h: 99 * scale, l: cw * 40 / 100, t: ch * 15 / 100}
        t2 = {w: 628 * scale, h: 99 * scale, l: cw * 35 / 100, t: ch * 30 / 100}
        t3 = {w: 927 * scale, h: 97 * scale, l: cw * 48 / 100, t: ch * 45 / 100}
        t4 = {w: 670 * scale, h: 99 * scale, l: cw * 50 / 100, t: ch * 58 / 100}
        t5 = {w: 972 * scale, h: 97 * scale, l: cw * 50 / 100, t: ch * 70 / 100}
        console.log(scale)
      } else if  (cw <= 1440){
        scale = 0.9
        t1 = {w: 797 * scale, h: 99 * scale, l: cw * 40 / 100, t: ch * 15 / 100}
        t2 = {w: 628 * scale, h: 99 * scale, l: cw * 35 / 100, t: ch * 32 / 100}
        t3 = {w: 927 * scale, h: 97 * scale, l: cw * 36 / 100, t: ch * 47 / 100}
        t4 = {w: 670 * scale, h: 99 * scale, l: cw * 50 / 100, t: ch * 62 / 100}
        t5 = {w: 972 * scale, h: 97 * scale, l: cw * 40 / 100, t: ch * 77 / 100}
        console.log(scale)
      }

      addRect(t1.l, t1.t, t1.w , t1.h, {
        label : 'OPTIMISTIC', 
        //chamfer: {radius: 20},
        isStatic: true,
        //angle: Math.PI * - 0.02,xScale: scale
        render: { sprite: {texture : img01, xScale: scale, yScale: scale}  }
      })
      addRect(t2.l, t2.t, t2.w , t2.h, {
        label : 'POSITIVE', 
        isStatic: true,
        render: { sprite: {texture : img02,  xScale: scale, yScale: scale} }
      })
      addRect(t3.l, t3.t, t3.w , t3.h, {
        label : 'ADVENTURER', 
        isStatic: true,
        render: { sprite: {texture : img03,  xScale: scale, yScale: scale} }
      })
      addRect(t4.l, t4.t, t4.w , t4.h, {
        label : 'CREATIVE', 
        isStatic: true,
        render: { sprite: {texture : img04,  xScale: scale, yScale: scale} }
      })
      addRect(t5.l, t5.t, t5.w , t5.h, {
        label : 'COOPERATION', 
        isStatic: true,
        render: { sprite: {texture : img05,  xScale: scale, yScale: scale} }
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