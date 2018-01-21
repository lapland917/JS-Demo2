var Canvas1  = document.getElementById('Canvas')
var context = Canvas1.getContext('2d')

var pageWidth = document.documentElement.clientWidth
var pageHeight = document.documentElement.clientHeight
var bodyWidth = document.documentElement.clientWidth
Canvas1.width = pageWidth
Canvas1.height = pageHeight

 //把画板填充成白色，默认是透明的
CanvasBackgroundColor('white') 


//默认用户没有在使用鼠标
var using = false 

//定义第一个点的位置
var lastPoint = {'x':undefined,'y':undefined}
var usingEraser =false

//点击橡皮的时候
Eraser.onclick = function(){
  usingEraser = true
  usingBrush = false
  Eraser.style = 'background-color:#34a853'
  Brush.style = 'background-color:white'
  Reset.style = 'background-color:white'
  DownLoad.style = 'background-color:white'
}

//点击画笔的时候
var usingBrush =false
Brush.onclick = function(){
  usingBrush = true
  usingEraser = false
  Brush.style = 'background-color:#4285F4'
  Eraser.style = 'background-color:white'
  Reset.style = 'background-color:white'
  DownLoad.style = 'background-color:white'
}

//重置画板
Reset.onclick = function(){
  var Brush1 = document.getElementById('Brush')
  Reset.style = 'background-color:#EA4335'
  Eraser.style = 'background-color:white'
  Brush.style = 'background-color:white'
  DownLoad.style = 'background-color:white'
  context.clearRect(0, 0, Canvas1.width, Canvas1.height)
}

//下载画板
DownLoad.onclick = function(){
  var Brush1 = document.getElementById('Brush')
  DownLoad.style = 'background-color:#FBBC05'
  Eraser.style = 'background-color:white'
  Brush.style = 'background-color:white'
  Reset.style = 'background-color:white'
  var url = Canvas1.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url;
  a.download = '我的画'
  a.target = '_blank'
  a.click();
}

//手指按下
Canvas1.ontouchstart = function(down){
   var x = down.touches["0"].clientX
   var y = down.touches["0"].clientY
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



//手指滑动
Canvas1.ontouchmove = function(move){
  var x = move.touches["0"].clientX
  var y = move.touches["0"].clientY
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



//手指松开
Canvas1.ontouchend = function(){
  using = false
}





















































////下面是函数
//把画板填充成白色
function CanvasBackgroundColor(x){
  var CanvasBackgroundColor = context.fillStyle =x;
  context.fillRect(0, 0, pageWidth, pageHeight);  
}

///画圆
function drawCircle(x,y){
  var context = Canvas.getContext('2d')
  context.beginPath();
  context.arc(x, y,2,0,360)
  context.fillStyle = 'black'; //填充颜色
  context.fill(); 
  context.closePath();
}

///画直线
function drawLine(x1,y1,x2,y2){
  var context = Canvas.getContext('2d')
  context.beginPath()    //开始
  context.moveTo(x1,y1)  //线的起点
  context.lineWidth = 4  //线的宽度
  context.lineTo(x2,y2)  //线的终点
  // context.strokeStyle = 'black'  
  context.stroke()      //描边颜色
  context.closePath();  //结束
}

///橡皮
function clear(x,y){
  context.clearRect(x, y,40,40);
}