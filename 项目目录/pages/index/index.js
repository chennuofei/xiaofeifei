//index.js
//获取应用实例
const app = getApp()
//用全局变量传递参数
app.canvastempfilepath = '';
  /** 
 * 需要一个目标日期，初始化时，先得出到当前时间还有剩余多少秒
 * 1.将秒数换成格式化输出为XX天XX小时XX分钟XX秒 XX
  * 2.提供一个时钟，每10ms运行一次，渲染时钟，再总ms数自减10
    * 3.剩余的秒次为零时，return ，给出tips提示说，已经截止
      * /

/* 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数*/

//var date = getDate();
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hoursleft = 24;
var minutsleft = 0;
var secondsleft = 0;

//圆形进度条所需变量
var interval;
var varName;
var ctx = wx.createCanvasContext('canvasArcCir');
var x = 2*(hours*60*60+minutes*60+seconds)/(24*60*60);

if(secondsleft<seconds){
  //现在时间秒数不为0
  secondsleft = 60-seconds;
  minutsleft = 59 - minutes;
  hoursleft = 23-hours;
}else{
  if(minutsleft<minutes){
    //现在时间分钟数不为0
    minutsleft = 60-minutes;
    hoursleft = 23 - hours;
  }else{
    hoursleft = 24-hours;
  }
}
var total_second = hoursleft*3600+minutsleft*60+secondsleft;
var total_micro_second = total_second * 1000;

/* 毫秒级倒计时 */
function countdown(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: dateformat(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    countdown(that);
  }
    , 10)
}
// 时间格式化输出，如3:25:19 86。每10ms都会调用一次
function dateformat(micro_second) {
  var x=0;
  var y=0;
  var z=0;
  var p=0;
  var re=0;
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  if (hr < 10) {
    p = 0;
  } else {
    p = 1;
  }
  // 分钟位
  var min = Math.floor((second - hr * 3600) / 60);
  if (min < 10) {
   z = 0;
  } else {
    z = 1;
  }
  // 秒位
  var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;
  if (sec < 10) {
   y = 0;
  } else {
    y = 1;
  }
  // 毫秒位，保留2位
  var micro_sec = Math.floor((micro_second % 1000) / 10);
  if (micro_sec < 10) {
    x = 0;
  } else {
    x = 1;
  }
  //防止倒计时跳动，所有时间均已两位输出，不够前面补0
 // return hr + ":" + min + ":" + sec + " " + micro_sec;
  re = x*1+y*2+z*4+p*8;
  switch(re){
    case 0:
      return "0" + hr + ":" + "0" + min + ":" + "0" + sec + " " + "0" + micro_sec;break;
    case 1:
      return "0" + hr + ":" + "0" + min + ":" + "0" + sec + " " + micro_sec; break;
    case 2:
      return "0" + hr + ":" + "0" + min + ":" + sec + " " + "0" + micro_sec; break;
    case 3:
      return "0" + hr + ":" + "0" +min + ":" + sec + " " + micro_sec; break;
    case 4:
      return "0" + hr + ":" + min + ":" + "0" + sec + " " + "0" + micro_sec; break;
    case 5:
      return "0" + hr + ":" + min + ":" + "0" +  sec + " " + micro_sec; break;
    case 6:
      return "0" + hr + ":" + min + ":" + sec + " " + "0" +  micro_sec; break;
    case 7:
      return "0" + hr + ":" + min + ":" + sec + " " + micro_sec; break;
    case 8:
      return hr + ":" + "0" + min + ":" + "0" + sec + " " + "0" + micro_sec; break;
    case 9:
      return hr + ":" + "0" + min + ":" + "0" + sec + " " + micro_sec; break;
    case 10:
      return hr + ":" + "0" + min + ":" + sec + " " + "0" + micro_sec; break;
    case 11:
      return hr + ":" + "0" + min + ":" + sec + " " + micro_sec; break;
    case 12:
      return hr + ":" + min + ":" + "0" + sec + " " + "0" + micro_sec; break;
    case 13:
      return hr + ":" + min + ":" + "0" + sec + " " + micro_sec; break;
    case 14:
      return hr + ":" + min + ":" + sec + " " + "0" + micro_sec; break;  
    case 15:
      return hr + ":" + min + ":" + sec + " " + micro_sec; break;                            
  }
}
Page({
  /**
   * 页面的初始数据
   */
  data: {   
     clock:'',
     globaltime:22,   
  },
  //圆形进度条所需函数
  drawCircle: function () {
    clearInterval(varName);
    function drawArc(s, e) {
      ctx.setFillStyle('white');
      ctx.clearRect(0, 0, 200, 200);
      ctx.draw();
      var x = 100, y = 100, radius = 96;
      ctx.setLineWidth(8);
      ctx.setStrokeStyle('#454545');
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(x, y, radius, s, e, false);
      ctx.stroke() ;
      ctx.draw()
    }
     //step和n两个参数用来控制速度 startAngle控制从哪里开始绘制
    var step = 1, startAngle = 1.5 * Math.PI;
    var endAngle = 0;
    if (x+1.5<2){
      endAngle = x * Math.PI + startAngle;
    }else{
      endAngle = (x+1.5-2) * Math.PI;
    }
    var animation_interval = 1000, n = 24*60*60;
  
    var animation = function () {
      if (step <= n) {
        //其实是一个step一个step的不连续 画出来的
        endAngle = (1/n)*2*Math.PI + endAngle;
        drawArc(startAngle, endAngle);
        
        step++;
      } else {
        clearInterval(varName);
      }
    };
    //定时一秒刷新一次,这功能有点晃眼睛
    varName = setInterval(animation, animation_interval);
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function () {
    var that = this;
    //创建并返回绘图上下文context对象。 
    var cxt_arc = wx.createCanvasContext('canvasCircle');
    cxt_arc.setLineWidth(8); //设置线条宽度
    cxt_arc.setStrokeStyle('#ff0000');//设置边框颜色
    cxt_arc.setLineCap('round');//设置线条的端点样式
    cxt_arc.beginPath();//开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或者描边
    cxt_arc.arc(100, 100, 96, 0, 2 * Math.PI, false);
    cxt_arc.stroke();
    cxt_arc.draw();

    //画时间圈
    that.drawCircle();

  //  //把全局变量传入用作页面显示判断条件
  //   that.setData({
  //     globaltime: getApp().globalData.globaltime5,
  //   })
  
    try{
     var value = wx.getStorageSync('globaltime5');
     if(value){
       that.setData({
            globaltime: value,
      })
     }
    }catch(e){

    }
  },
  onLoad: function () {
    countdown(this);
  },
  toastzongjie:function(){
     wx.navigateTo({
      url: '../../pages/result/result?',
    })
  },
  toastsleep: function () {
    wx.navigateTo({
      url: '../../pages/sleep/sleep',
    })
  },
  toastwhattodo: function () {
    wx.navigateTo({
      url: '../../pages/needtodofordaytime/needtodofordaytime',
    })
  },
  toastsetting: function () {
    wx.navigateTo({
      url: '../../pages/setting/setting',
    })
  },
})
