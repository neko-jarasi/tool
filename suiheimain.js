window.addEventListener('deviceorientation',function (e) {
  let x=parseFloat(e.beta.toFixed(2))
  let y=parseFloat(e.gamma.toFixed(2))
  document.getElementById('muki').innerHTML='y'+x+"<br>x"+y
  
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  
   ctx.clearRect(0,0,canvas.width,canvas.height)
   
  ctx.beginPath()
  ctx.moveTo(125,100)
  ctx.lineTo(175,100)
  ctx.strokeStyle='red'
  ctx.lineWidth=3
  ctx.stroke()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.moveTo(150, 75)
  ctx.lineTo(150, 125)
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 3
  ctx.stroke()
  ctx.closePath()
   
   if (Math.abs(x)<=1　&& Math.abs(y)<=1) {
    ctx.beginPath()
    ctx.arc(y + 150, x + 100, 10, 0, 360)
    ctx.fillStyle = 'rgba(255,0,255,0.75)'
    ctx.fill()
    ctx.closePath()
  } else {
    ctx.beginPath()
    ctx.arc(y + 150, x + 100, 10, 0, 360)
    ctx.fillStyle = 'rgba(0,0,255,0.75)'
    ctx.fill()
    ctx.closePath()
  }
  
})