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
    tabs: ["今日任务", "总结", "明日安排"],
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
    animationjinrizongjie:{},
    emotiongrin:'../../resources/emoticon_grin_32px.png',
    emotionsad: '../../resources/emoticon_sad_32px.png',
    emotionsleeping: '../../resources/emoticon_sleeping_32px_grid.jpg',
    yesterdayemotion:'',
    jugeoneforready:1,
    whethefirstbind:'yes',
    //初始背景图设置为backgroundpicture1
     backgroundpicture: '',
  },

  onLoad: function () {
    var that = this;

    /**
     * 页面初始化时表情动画,因为用了setdata所以不把它封装到onLoad外面
     */
    try{
      var animation1 = wx.createAnimation({
        delay: 600,
        timingFunction: "ease-in-out",
        duration:1200,
      });
      var animation2 = wx.createAnimation({
        delay: 600,
        timingFunction: "ease-in-out",
        duration: 1200,
      });
      animation1.translateX(64).step();
      animation2.translateX(-64).step();
      that.setData({
        animationgrin: animation1.export(),
        animationsad: animation2.export(),
        emotionsleeping: '../../resources/emoticon_sleeping_32px.png',
        jugeoneforready: 2,
      });
    }catch(e){

    };

    /**
     * 初始化时今日总结框的动画
     */

    try{
      var animationzongjie1 = wx.createAnimation({
        duration:1200,
        timingFunction:"ease-out",
      });
      animationzongjie1.scale(1.08).step();
      animationzongjie1.scale(1.0).step();
      that.setData({
        animationjinrizongjie: animationzongjie1.export(),
      });
    }catch(e){

    };


    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    try {
      /**
        * key值为yesterday加前缀misson1
        */
      var keyforyesterdaymisson1 = "misson2" + yesterday;
      var value = wx.getStorageSync(keyforyesterdaymisson1);
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo1: value,
        })
      } else {
        //缓存没有数据，设置初始数据
       
      }
    } catch (e) {
    };
    
    try {
      /**
        * key值为yesterday加前缀misson2
        */
      var keyforyesterdaymisson2 = "misson2" + yesterday;
      var value = wx.getStorageSync(keyforyesterdaymisson2);
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo2: value,
        })
      } else {
        //缓存没有数据，设置初始数据
       
      }
    } catch (e) {
    };

    try {
      /**
       * key值为yesterday加前缀misson3
       */
      var keyforyesterdaymisson3 = "misson3" + yesterday;
      var value = wx.getStorageSync(keyforyesterdaymisson3);
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo3: value,
        })
      } else {
        //缓存没有数据，设置初始数据
       
      }
    } catch (e) {
    };

    try {
      /**
      * key值为yesterday加前缀misson4
      */
      var keyforyesterdaymisson4 = "misson4" + yesterday;
      var value = wx.getStorageSync(keyforyesterdaymisson4);
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          todo4: value,
        })
      } else {
        //缓存没有数据，设置初始数据
       
      }
    } catch (e) {
    };
    try {
      /**
           * key值为yesterday加前缀summarize
           */
      var keyforyesterdaysummarize = "summarize" + yesterday;
      var value = wx.getStorageSync(yesterday)
      if (value) {
        //缓存有数据，将数据显示在panel上
        that.setData({
          yesterdaysum: value,
        })
      } else {
        //缓存没有数据，设置初始数据
       
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

  /**
       * 生命周期函数--监听页面显示
       */
  onShow: function () {

    var that = this;
    var util = require('../../utils/util.js');
    /**
     * 设置主题
     */
    util.SetTheme(that);
    
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //处理输入每日总结，把每日总结存入缓存中

  summarize:function(e){
    var that  = this;
      var onedaysum =e.detail.value;
      var keyforsummarize = "summarize"+currentdate;
     // console.log(keyforsummarize);
      try{
        /**
         * key值为currentdate加前缀summarize
         */
        wx.setStorageSync(keyforsummarize, onedaysum)
        console.log('每日总结缓存完成');

        /**
         * 用于缓存中挑选有记录的日期key值
         */
        var keyforcurrentdate = 'key' + currentdate;
        wx.setStorageSync(keyforcurrentdate, currentdate)
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
    /**
         * key值为currentdate加前缀misson1
         */
    var keyformisson1 = "misson1" + currentdate;
    try {
      wx.setStorage({
        key: keyformisson1,
        data: that.data.misson1,
      });
      //测试缓存是否成功     
      console.log('测试缓存是否成功');
      wx.getStorage({
        key: keyformisson1,
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
     /**
         * key值为currentdate加前缀misson2
         */
     var keyformisson2 = "misson2" + currentdate;
     try{
       wx.setStorage({
         key: keyformisson2 ,
         data: that.data.misson2,
       });
       //测试缓存是否成功     
       console.log('测试缓存是否成功');
       wx.getStorage({
         key: keyformisson2,
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
    /**
         * key值为currentdate加前缀misson3
         */
    var keyformisson3 = "misson3" + currentdate;
    try {
      wx.setStorage({
        key: keyformisson3,
        data: that.data.misson3,
      });
      //测试缓存是否成功     
      console.log('测试缓存是否成功');
      wx.getStorage({
        key: keyformisson3,
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
    /**
         * key值为currentdate加前缀misson4
         */
    var keyformisson4 = "misson4" + currentdate;
    try {
      wx.setStorage({
        key: keyformisson4,
        data: that.data.misson4,
      });
      //测试缓存是否成功     
      console.log('测试缓存是否成功');
      wx.getStorage({
        key: keyformisson4,
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