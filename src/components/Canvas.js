import { Engine, Render, Runner, Mouse, MouseConstraint, Composite, Bodies } from 'matter-js';
import { useEffect, useRef,  } from 'react';
import '../styles/Main.css';

function Canvas() {
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

    canvas.addEventListener('mousewheel', ()=> {
      addRect(mouse.position.x, mouse.position.y, 50, 50)
    })

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
        Bodies.rectangle(cw/2, ch, cw, 10, { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(cw/2, 0, cw, 10, { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(cw, ch/2, 10, ch, { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} }),
        Bodies.rectangle(0, ch/2, 10, ch, { isStatic: true, render: {fillStyle: 'transparent',strokeStyle: 'transparent'} })
      ]
      Composite.add(engine.world, ground)
    }

    function initImageBoxes(){
      addRect(cw/2, ch/2, 250, 250)
      addRect(cw/2, ch/2, 250, 250)
    }

    function addRect(x, y, w, h, options = {}) {
      const rect = Bodies.rectangle(x, y, w, h, options)
      Composite.add(engine.world, rect)
    }

    
    window.addEventListener('resize', resize)
    resize()

    //console.log(anchorRef.current?.offsetWidth) // 컴포넌트의 width
    //console.log(anchorRef.current?.offsetHeight) // 컴포넌트의 height
  
  }, [])

  return (
    <div className="main-canvas" ref={anchorRef}>
      <canvas ref={canvasRef} > </canvas>
    </div>
  );
}


export default Canvas;