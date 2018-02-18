// pages/result/result.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

//获取当前日期，用作保存每日总结的key值
var date = new Date();
var seperator1 = "-";
var year = date.getFullYear();
var month = date.getMonth() + 1;
var strDate = date.getDate();
if (month >= 1 && month <= 9) {
  month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {
  strDate = "0" + strDate;
}
var currentdate = year + seperator1 + month + seperator1 + strDate;
var yesterday = year + seperator1 + month + seperator1 + (strDate-1);

Page({
  data: {
    tabs: ["任务", "总结", "安排"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    todo1:'',
    todo2: '',
    todo3: '',
    todo4: '',
    misson1:'',
    misson2:'',
    misson3:'',
    misson4:'',
    yesterdaysum:'',
    hideview: true,
    opa: 1,
    animationData: {},
    aniationgrin:{},
    animationsad:{},
    animationsleeping:{},
    emotiongrin:'../../resources/emoticon_grin_32px.png',
    emotionsad: '../../resources/emoticon_sad_32px.png',
    emotionsleeping: '../../resources/emoticon_sleeping_32px_grid.jpg',
    yesterdayemotion:'',
    jugeoneforready:1,
    whethefirstbind:'yes',
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    try {
      var value = wx.getStorageSync('misson1')
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo1: value,
        })
      } else {
        //缓存没有数据，设置初始数据
        that.setData({
          todo1: '请在今晚的明日计划板块填写明天的任务',
        })
      }
    } catch (e) {
    };
    
    try {

      var value = wx.getStorageSync('misson2')
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo2: value,
        })
      } else {
        //缓存没有数据，设置初始数据
        that.setData({
          todo2: '请在今晚的明日计划板块填写明天的任务',
        })
      }
    } catch (e) {
    };

    try {
      var value = wx.getStorageSync('misson3')
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo3: value,
        })
      } else {
        //缓存没有数据，设置初始数据
        that.setData({
          todo3: '请在今晚的明日计划板块填写明天的任务',
        })
      }
    } catch (e) {
    };

    try {
      var value = wx.getStorageSync('misson4')
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo4: value,
        })
      } else {
        //缓存没有数据，设置初始数据
        that.setData({
          todo4: '请在今晚的明日计划板块填写明天的任务',
        })
      }
    } catch (e) {
    };
    try {

      var value = wx.getStorageSync(yesterday)
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          yesterdaysum: value,
        })
      } else {
        //缓存没有数据，设置初始数据
        that.setData({
          yesterdaysum: '请在今晚的今日总结板块填写',
        })
      }
    } catch (e) {
    };

    try {
      //console.log(yesterday + 'emotion')
      var value = wx.getStorageSync(yesterday+'emotion')
      if (value) {
        //缓存有数据，将数据显示
       if(value=='sad'){
         that.setData({
           yesterdayemotion: '../../resources/emoticon_sad_32px.png',
         })
       }
       if (value == 'sleeping') {
         that.setData({
           yesterdayemotion: '../../resources/emoticon_sleeping_32px.png',
         })
       }
       if (value == 'grin') {
         that.setData({
           yesterdayemotion: '../../resources/emoticon_grin_32px.png',
         })
       }
      } else {
        //缓存没有数据，设置初始数据
        that.setData({
          yesterdayemotion: '../../resources/emoticon_grin_32px_grid.png',
        })
      }
    } catch (e) {
    };

  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //处理输入每日总结，把每日总结存入缓存中

  summarize:function(e){
      var onedaysum =e.detail.value;
      try{
        wx.setStorageSync(currentdate, onedaysum)
        console.log('每日总结缓存完成');
      }catch(e){
        console.log('每日总结缓存失败');
      }
      
  },

  //处理每日任务，把每日四个任务存入缓存中
  misson1:function(e){
    var that = this;
    that.setData({
      misson1: e.detail.value
    });
    console.log('misson1的值');
    console.log(that.data.misson1);
    try {
      wx.setStorage({
        key: 'misson1',
        data: that.data.misson1,
      });
      //测试缓存是否成功     
      console.log('测试缓存是否成功');
      wx.getStorage({
        key: 'misson1',
        success: function (res) {
          console.log(res.data)
          that.setData({
            test: res.data
          })
        },
        fail: function (res) {
          console.log('取数据除了问题')
        }
      });
      console.log('test的值');
      console.log(that.data.test);
      console.log('misson1缓存完成');
    } catch (e) {
      console.log('出了点问题');
    }
  },

  misson2: function (e) {
    var that = this;
    that.setData({
        misson2:e.detail.value
    });
     console.log('misson2的值');
     console.log(that.data.misson2);
     try{
       wx.setStorage({
         key: 'misson2',
         data: that.data.misson2,
       });
       //测试缓存是否成功     
       console.log('测试缓存是否成功');
       wx.getStorage({
         key: 'misson2',
         success: function(res) {
           console.log(res.data)
            that.setData({
              test:res.data
            })
         },
         fail:function(res){
           console.log('取数据除了问题')
         }
       });
       console.log('test的值');
       console.log(that.data.test);
       console.log('misson2缓存完成');
     }catch(e){
      console.log('出了点问题');
     }

  },

  misson3: function (e) {
    var that = this;
    that.setData({
      misson3: e.detail.value
    });
    console.log('misson3的值');
    console.log(that.data.misson3);
    try {
      wx.setStorage({
        key: 'misson3',
        data: that.data.misson3,
      });
      //测试缓存是否成功     
      console.log('测试缓存是否成功');
      wx.getStorage({
        key: 'misson3',
        success: function (res) {
          console.log(res.data)
          that.setData({
            test: res.data
          })
        },
        fail: function (res) {
          console.log('取数据除了问题')
        }
      });
      console.log('test的值');
      console.log(that.data.test);
      console.log('misson3缓存完成');
    } catch (e) {
      console.log('出了点问题');
    }
  },

  misson4: function (e) {
    var that = this;
    that.setData({
      misson4: e.detail.value
    });
    console.log('misson4的值');
    console.log(that.data.misson4);
    try {
      wx.setStorage({
        key: 'misson4',
        data: that.data.misson4,
      });
      //测试缓存是否成功     
      console.log('测试缓存是否成功');
      wx.getStorage({
        key: 'misson4',
        success: function (res) {
          console.log(res.data)
          that.setData({
            test: res.data
          })
        },
        fail: function (res) {
          console.log('取数据除了问题')
        }
      });
      console.log('test的值');
      console.log(that.data.test);
      console.log('misson4缓存完成');
    } catch (e) {
      console.log('出了点问题');
    }
  },

  /**
   * 选择笑脸相关的函数
   */

readytochoose:function(){
  //为了避免选择表情时不小心又单击sleeping导致出现两个表情亮，加入判断变量jugeoneforready
    var that  = this;
    if (that.data.jugeoneforready==1){
      var animation1 = wx.createAnimation({
      });
      var animation2 = wx.createAnimation({
      });
      animation1.translateX(64).step();
      animation2.translateX(-64).step();
      that.setData({
        animationgrin: animation1.export(),
        animationsad: animation2.export(),
        emotionsleeping: '../../resources/emoticon_sleeping_32px.png',
        jugeoneforready:2,
      });
    }else{
      console.log('长按选择');
    }
   

},

choosegrin:function(){
  var that = this;
  var animation1 = wx.createAnimation({
  });
  var animation2 = wx.createAnimation({
  });
  var animation3 = wx.createAnimation({
  });

  if (that.data.whethefirstbind=='yes'){
    /**
       * 动画
       */
    console.log(that.data.whethefirstbind);
    animation1.translateX(64).scale(1.4).step();
    animation1.scale(1).step();
    animation2.translateX(-64).rotateY(180).step();
    animation3.rotateY(180).step();
    that.setData({
      animationgrin: animation1.export(),
      animationsad: animation2.export(),
      animationsleeping: animation3.export(),
      emotionsleeping: '../../resources/emoticon_sleeping_32px_grid.png',
      emotionsad: '../../resources/emoticon_sad_32px_grid.png',
      emotiongrin: '../../resources/emoticon_grin_32px.png',
      whethefirstbind:'grin',
    });
  }else{
    switch (that.data.whethefirstbind){
        case 'grin':
          animation1.translateX(64).scale(1.4).step();
          animation1.scale(1).step();
          that.setData({
            animationgrin: animation1.export(),
            whethefirstbind: 'grin',
          });
          break;
        case 'sad':
          animation1.translateX(64).scale(1.4).step();
          animation1.scale(1).step();
          that.setData({
            animationgrin: animation1.export(),
            emotionsad: '../../resources/emoticon_sad_32px_grid.png',
            emotiongrin: '../../resources/emoticon_grin_32px.png',
            whethefirstbind: 'grin',
          });
          break;  
        case 'sleeping':
          animation1.translateX(64).scale(1.4).step();
          animation1.scale(1).step();
          that.setData({
            animationgrin: animation1.export(),
            emotionsleeping: '../../resources/emoticon_sleeping_32px_grid.png',
            emotiongrin: '../../resources/emoticon_grin_32px.png',
            whethefirstbind: 'grin',
          });
          break;
    }
    that.setData({
      animationgrin: {},
      animationsad: {},
      animationsleeping: {},
    });
  }
  /**
   * 把选择心情的信息存入缓存
   */
  try {
    /**
     * 用当前日期后加心情值作为存储心情的key值
     */
    console.log(currentdate);
    console.log(currentdate +'emotion');
    wx.setStorageSync(currentdate +'emotion', 'grin')
    console.log('每日心情缓存完成');
  } catch (e) {
    console.log('每日心情缓存失败');
  };
},

choosesad: function () {
  var that = this;
  var animation1 = wx.createAnimation({
  });
  var animation2 = wx.createAnimation({
  });
  var animation3 = wx.createAnimation({
  });
  if (that.data.whethefirstbind == 'yes'){
    animation1.translateX(64).rotateY(180).step();
    animation2.translateX(-64).scale(1.4).step();
    animation2.scale(1).step();
    animation3.rotateY(180).step();
    that.setData({
      animationgrin: animation1.export(),
      animationsad: animation2.export(),
      animationsleeping: animation3.export(),
      emotionsleeping: '../../resources/emoticon_sleeping_32px_grid.png',
      emotiongrin: '../../resources/emoticon_grin_32px_grid.png',
      emotionsad: '../../resources/emoticon_sad_32px.png',
      whethefirstbind: 'sad',
    });
  }else{
    switch (that.data.whethefirstbind){
      case 'grin':
        animation2.translateX(-64).scale(1.4).step();
        animation2.scale(1).step();
        that.setData({
          animationsad: animation2.export(),
          emotiongrin: '../../resources/emoticon_grin_32px_grid.png',
          emotionsad: '../../resources/emoticon_sad_32px.png',
          whethefirstbind:'sad',
        });
        break;
      case 'sad':
        animation2.translateX(-64).scale(1.4).step();
        animation2.scale(1).step();
        that.setData({
          animationsad: animation2.export(),
          whethefirstbind: 'sad',
        });
        break;
      case 'sleeping':
        animation2.translateX(-64).scale(1.4).step();
        animation2.scale(1).step();
        that.setData({
          animationsad: animation2.export(),
          emotionsleeping: '../../resources/emoticon_sleeping_32px_grid.png',
          emotionsad: '../../resources/emoticon_sad_32px.png',
          whethefirstbind: 'sad',
        });
        break;
    }   
  }
  try {
    /**
     * 用当前日期加心情值作为存储心情的key值
     */
    console.log(currentdate);
    console.log(currentdate + 'emotion');
    wx.setStorageSync(currentdate + 'emotion', 'sad')
    console.log('每日心情缓存完成');
  } catch (e) {
    console.log('每日心情缓存失败');
  };
  that.setData({
    animationgrin: {},
    animationsad: {},
    animationsleeping: {},
  });
},

choosesleeping: function () {
  var that = this;
  var animation1 = wx.createAnimation({
  });
  var animation2 = wx.createAnimation({
  });
  var animation3 = wx.createAnimation({
  });

  if (that.data.whethefirstbind == 'yes') {
    animation1.translateX(64).rotateY(180).step();
    animation2.translateX(-64).rotateY(180).step();
    animation3.scale(1.4).step();
    animation3.scale(1).step();
    that.setData({
      animationgrin: animation1.export(),
      animationsad: animation2.export(),
      animationsleeping: animation3.export(),
      emotionsad: '../../resources/emoticon_sad_32px_grid.png',
      emotiongrin: '../../resources/emoticon_grin_32px_grid.png',
      emotionsleeping: '../../resources/emoticon_sleeping_32px.png',
      whethefirstbind: 'sleeping',
    });
  } else {
    switch (that.data.whethefirstbind){
      case 'grin':
        animation3.scale(1.4).step();
        animation3.scale(1).step();
        that.setData({
          animationsleeping: animation3.export(),
          emotiongrin: '../../resources/emoticon_grin_32px_grid.png',
          emotionsleeping: '../../resources/emoticon_sleeping_32px.png',
          whethefirstbind: 'sleeping',
        });
        break;
      case 'sad':
        animation3.scale(1.4).step();
        animation3.scale(1).step();
        that.setData({
          animationsleeping: animation3.export(),
          emotionsad: '../../resources/emoticon_sad_32px_grid.png',
          emotionsleeping: '../../resources/emoticon_sleeping_32px.png',
          whethefirstbind: 'sleeping',
        });
        break;
      case 'sleeping':
        animation3.scale(1.4).step();
        animation3.scale(1).step();
        that.setData({
          animationsleeping: animation3.export(),
        });
        break;
    } 
  } 
  try {
    /**
     * 用当前日期加心情值作为存储心情的key值
     */
    console.log(currentdate);
    console.log(currentdate + 'emotion');
    wx.setStorageSync(currentdate + 'emotion', 'sleeping')
    console.log('每日心情缓存完成');
  } catch (e) {
    console.log('每日心情缓存失败');
  };
  that.setData({
    animationgrin: {},
    animationsad: {},
    animationsleeping: {},
  });
},
  
});