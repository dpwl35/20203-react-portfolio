import { Engine, Render, Runner, Mouse, MouseConstraint, Composite, Bodies, Events } from 'matter-js';
import { useEffect, useRef, useState,  } from 'react';
import '../styles/Main.css';

const data = {
  'AAA' : { title: 'AAA', desc: 'AAA 설명 입니다.'},
  'BBB' : { title: 'BBB', desc: 'BBB 설명 입니다.'},
  'CCC' : { title: 'CCC', desc: 'CCC 설명 입니다.'},
  'DDD' : { title: 'DDD', desc: 'DDD 설명 입니다.'},
}

function Canvas() {
  const [selected, setSelected] = useState(data['AAA'])
  const anchorRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current
    const canvasParent = canvas.parentNode

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

    Events.on(mouseConstraint, 'mousedown', ()=> {
      const newSelected = mouseConstraint.body && data[mouseConstraint.body.label]
      newSelected && setSelected (newSelected)
      //console.log(mouseConstraint.body)
    })

    // canvas.addEventListener('mousewheel', ()=> {
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
        mouse: mouse
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
    function initGround() {
      const ground = [
        Bodies.rectangle(cw/2, ch, cw, 10,  { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(cw/2, 0, cw, 10,   { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(cw, ch/2, 10, ch,  { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(0, ch/2, 10, ch,   { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} })
      ]
      Composite.add(engine.world, ground)
    }

    function initImageBoxes(){
      const scale = 0.7 
      const t1 = { w: 250 * scale, h:250 * scale}
      addRect(cw/2, 0, 150, 150, {
        label : 'AAA'
      })
      addRect(cw/2, 0, t1.w, t1.h, {
        label : 'BBB', 
        chamfer: {radius: 20},
        render: {xScale: scale, yScale: scale}} )
      addRect(cw/2 - t1.w - 100 , 0, 150, 150, { 
        label : 'CCC',
        chamfer: {radius: 20},
        render: {xScale: scale, yScale: scale}} )
      addRect(cw/2 + t1.w, 0, 150, 150, { 
        label : 'DDD',
        chamfer: {radius: 20},
        render: {xScale: scale, yScale: scale}} )
    }

    function addRect(x, y, w, h, options = {}) {
      const rect = Bodies.rectangle(x, y, w, h, options)
      Composite.add(engine.world, rect)
    }

    window.addEventListener('resize', resize)
    resize()

   return () => {
    window.removeEventListener('resize', resize)
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