var Canvas1  = document.getElementById('Canvas')
var context = Canvas1.getContext('2d')
//获取页面宽度

  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  var a = (pageWidth-1000)/2
  var b = (pageHeight-500)/2

// window.onresize = function(){
//   var pageWidth = document.documentElement.clientWidth
//   var pageHeight = document.documentElement.clientHeight
//   var a = (pageWidth-1200)/2
//   var b = (pageHeight-500)/2
//   console.log(pageWidth)
//   console.log(pageHeight)
// }




//默认用户没有在使用鼠标
var using = false 

//定义第一个点的位置
var lastPoint = {'x':undefined,'y':undefined}
var usingEraser =false

//点击橡皮的时候
Eraser.onclick = function(){
  usingEraser = true
  usingBrush = false
  Eraser.classList.add('Eraser-bar-avtive')
  Brush.classList.remove('Brush-bar-avtive')
  var BrushColor1 = document.getElementById('BrushColor')
  BrushColor1.style='display:none'
}

CanvasBackgroundColor('white')

//点击画笔的时候
var usingBrush =false
Brush.onclick = function(){
  usingBrush = true
  usingEraser = false
  context.fillStyle = 'black'
  Brush.classList.add('Brush-bar-avtive')
  Eraser.classList.remove('Eraser-bar-avtive')
  var BrushColor1 = document.getElementById('BrushColor')
  BrushColor1.style='display:block'
}

//改变画笔颜色
BrushColorRed.onclick = function(){
  context.fillStyle = 'red'
  context.strokeStyle = 'red'
  BrushColorRed.classList.add('BrushColorActive')
  
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')
}

BrushColorBlack.onclick = function(){
  context.fillStyle = 'Black'
  context.strokeStyle = 'Black'
  BrushColorBlack.classList.add('BrushColorActive')

  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')
}

BrushColorYewllo.onclick = function(){
  context.fillStyle = '#FBBC05'
  context.strokeStyle = '#FBBC05'
  BrushColorYewllo.classList.add('BrushColorActive')
  
  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')
}

BrushColorBlue.onclick = function(){
  context.fillStyle = '#4285F4'
  context.strokeStyle = '#4285F4'
  BrushColorBlue.classList.add('BrushColorActive')
  
  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')
}


BrushColorGreen.onclick = function(){
  context.fillStyle = '#34a853'
  context.strokeStyle = '#34a853'
  BrushColorGreen.classList.add('BrushColorActive')
  
  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')
}

BrushColorOrange.onclick = function(){
  context.fillStyle = 'orange'
  context.strokeStyle = 'orange'
  BrushColorOrange.classList.add('BrushColorActive')
  
  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')

}

BrushColorPink.onclick = function(){
  context.fillStyle = '#FF6699'
  context.strokeStyle = '#FF6699'
  BrushColorPink.classList.add('BrushColorActive')

  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorGray.classList.remove('BrushColorActive')
}

BrushColorGray.onclick = function(){
  context.fillStyle = '#888888'
  context.strokeStyle = '#888888'
  BrushColorGray.classList.add('BrushColorActive')

  BrushColorRed.classList.remove('BrushColorActive')
  BrushColorBlack.classList.remove('BrushColorActive')
  BrushColorYewllo.classList.remove('BrushColorActive')
  BrushColorBlue.classList.remove('BrushColorActive')
  BrushColorGreen.classList.remove('BrushColorActive')
  BrushColorOrange.classList.remove('BrushColorActive')
  BrushColorPink.classList.remove('BrushColorActive')
}

//重置
Reset.onclick = function(){
  var context = Canvas1.getContext('2d')
 context.clearRect(0, 0, 1000, 500)
}

//下载图片
Download.onclick = function(){
  var context = Canvas1.getContext('2d')
  var url = Canvas1.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url;
  a.download = '我的画'
  a.target = '_blank'
  a.click();
}

///点击鼠标
document.onmousedown = function(down){
    var x = down.clientX-a
    var y = down.clientY-b
    using = true
  if(usingEraser){
    if(using){
      clear(x,y)
    }
  }
  if(usingBrush){
    if(using){
      drawCircle(x,y)
      lastPoint = {'x':x,'y':y}
    }
  }
}
///移动鼠标
document.onmousemove = function(move){
  var x = move.clientX-a  //获取鼠标X轴方向的坐标
  var y = move.clientY-b //获取鼠标Y轴方向的坐标
  if(usingEraser){
    if(using===true){
      clear(x,y)
    }
  }
  if(usingBrush){
    if(using===true){
      drawCircle(x,y)
      var newPoint = {'x':x,'y':y}
      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
      lastPoint = newPoint
  }
  }
}

///松开鼠标
document.onmouseup = function(up){
  using = false
}




///下面是函数///

///画圆
function drawCircle(x,y,radius){
  var context = Canvas.getContext('2d')
  context.beginPath();
  context.arc(x, y,5,0,360)
  // context.fillStyle = 'white'; //填充颜色
  context.fill(); 
  context.closePath();
}

///画直线
function drawLine(x1,y1,x2,y2){
  var context = Canvas.getContext('2d')
  context.beginPath()    //开始
  context.moveTo(x1,y1)  //线的起点
  context.lineWidth = 10  //线的宽度
  context.lineTo(x2,y2)  //线的终点
  // context.strokeStyle = 'black'  
  context.stroke()      //描边颜色
  context.closePath();  //结束
}

///橡皮
function clear(x,y){
  var context = Canvas1.getContext('2d')
  context.clearRect(x, y,20,20);
}

// 把整个Canvas的背景颜色变成白色，如果不设置，背景默认是透明的
function CanvasBackgroundColor(x){
  var context = Canvas1.getContext('2d')
  var CanvasBackgroundColor = context.fillStyle =x;
  context.fillRect(0, 0, 1000, 500);  
}


