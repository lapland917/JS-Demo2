var Canvas1  = document.getElementById('Canvas')
var context = Canvas1.getContext('2d')
//获取页面宽度

  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  var a = (pageWidth-1000)/2
  var b = (pageHeight-500)/2

window.onresize = function(){
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  var a = (pageWidth-1000)/2
  var b = (pageHeight-500)/2
}

var Sign = false 
var lastPoint = {'x':undefined,'y':undefined}
///点击鼠标
document.onmousedown = function(down){
  Sign = true
  var x = down.clientX-a
  var y = down.clientY-b
  lastPoint = {'x':x,'y':y}
  drawCircle(x,y,3)
}
///移动鼠标
document.onmousemove = function(move){
  if(Sign){
    var x = move.clientX-a  //获取鼠标X轴方向的坐标
      var y = move.clientY-b //获取鼠标Y轴方向的坐标
      var newPoint = {'x':x,'y':y}
      drawCircle(x,y,2)
      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
      lastPoint = newPoint
  }
}

///松开鼠标
document.onmouseup = function(up){
  Sign = false
}


///画圆
function drawCircle(x,y,radius){
  var context = Canvas.getContext('2d')
  context.beginPath();
  context.arc(x, y,radius,0,360)
  context.fillStyle = 'black'; //填充颜色
  context.fill(); 
  context.closePath();
}

///画直线
function drawLine(x1,y1,x2,y2){
  var context = Canvas.getContext('2d')
  context.beginPath()    //开始
  context.moveTo(x1,y1)  //线的起点
  context.lineWidth = 6  //线的宽度
  context.lineTo(x2,y2)  //线的终点
  context.strokeStyle = 'black'  
  context.stroke()      //描边颜色
  context.closePath();  //结束
}


