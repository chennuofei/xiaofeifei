
const time2s = []
const time4s = []
const time5s = []

for(let i = 7; i <= 9; i++){
  time2s.push(i)
}
for (let i = 17; i <= 19; i++) {
  time4s.push(i)
}
for (let i = 21; i <= 23; i++) {
  time5s.push(i)
}


Page({
  data: {
    //数组中保存的可选日期
    time2s:time2s,
    time4s:time4s,
    time5s:time5s,
  //默认的时间段时间
  //目前版本不允许调的时间点
    time1:6,
    time3:12,
    time6:24,


    //目前版本允许调的时间点
    time2:6,
    time4:18,
    time5:22,
    //滑动框中放入的是第几个值
    value: [],
    
    //动画
    animationtime2:[],
    animationtime4:[],
    animationtime5:[],
    animationspecail:[],
  },

  onLoad: function () {
    //初始化time2/4/5和value
    var that = this;
   try{
     var value2 = wx.getStorageSync('globaltime2');
     var value4 = wx.getStorageSync('globaltime4');
     var value5 = wx.getStorageSync('globaltime5');
     var a = value2-7;
     var b = value4-17;
     var c = value5-21;
     if(value2){
        that.setData({
          time2:value2,
          time4:value4,
          time5:value5,
          value:[a,b,c]
        })
     }else{
       //没有修改过时间的初始化time2/4/5和value
        that.setData({
          time2: 8,
          time4: 18,
          time5: 22,
          value: [1, 1, 1],
        })
     }
   }catch(e){

   }
  },

  bindChange: function (e) {
    var that = this;
    const val = e.detail.value;
    
    //time2发生改变
    if (that.data.time2 != that.data.time2s[val[0]]){
      var animation = wx.createAnimation({
      });
      animation.scale(1.2).step();
      animation.scale(1).step();

      that.setData({
          animationtime2:animation.export()
      })
    }
    //time4发生改变
    if (that.data.time4 != that.data.time4s[val[1]]) {
      var animation1 = wx.createAnimation({
      });
      animation1.scale(1.2).step();
      animation1.scale(1).step();
      var animation2 = wx.createAnimation({
      });
      animation2.scale(1.2).step();
      animation2.scale(1).step();

      that.setData({
        animationtime4: animation1.export(),
        animationspecail: animation2.export(),
      })
    }   
    //time5发生改变
    if (that.data.time5 != that.data.time5s[val[2]]) {
      var animation1 = wx.createAnimation({
      });
      animation1.scale(1.2).step();
      animation1.scale(1).step();
      var animation2 = wx.createAnimation({
      });
      animation2.scale(1.2).step();
      animation2.scale(1).step();

      that.setData({
        animationtime5: animation1.export(),
        animationspecail: animation2.export(),
      })
    }   

    that.setData({
      time2:that.data.time2s[val[0]],
      time4: that.data.time4s[val[1]],
      time5: that.data.time5s[val[2]],
    });

    // //改变全局变量
    // // console.log('改时间前');
    // // console.log(getApp().globalData.globaltime2);
    // getApp().globalData.globaltime2 = that.data.time2s[val[0]];
    // getApp().globalData.globaltime4 = that.data.time2s[val[1]];
    // getApp().globalData.globaltime5 = that.data.time2s[val[2]];
    // // console.log('改时间后');
    // // console.log(getApp().globalData.globaltime2);

    try{
      wx.setStorageSync('globaltime2', that.data.time2);
      wx.setStorageSync('globaltime4', that.data.time4);
      wx.setStorageSync('globaltime5', that.data.time5);
    }catch(e){
      console.log('存储全局时间点信息出错');
    }
  }
})
