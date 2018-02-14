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
    test:'',
    misson1:'',
    misson2:'',
    misson3:'',
    misson4:'',
    yesterdaysum:'',
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
      // var mission1 = e.detail.value;
      // try{
      //   wx.setStorageSync('mission1', mission1); 
      //   console.log('misson1缓存完成');
      // }catch(e){
      //   console.log('misson1缓存失败');
      // }

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
    
    // var mission2 = e.detail.value;
    // console.log('misson2的值');
    // console.log(miss2);
    // try {
    //   wx.setStorageSync('mission2', mission2);
      
    //   console.log('misson2缓存完成');

    //   //测试缓存是否成功
    //   var value = wx.getStorageSync('misson2');
    //   console.log(value);
    // } catch (e) {
    //   console.log('misson2缓存失败');
    // }

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
    // var mission3 = e.detail.value;
    // try {
    //   wx.setStorageSync('mission3', mission3);
    //   console.log('misson3缓存完成');
    // } catch (e) {
    //   console.log('misson3缓存失败');
    // }

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
    // var mission4 = e.detail.value;
    // try {
    //   wx.setStorageSync('mission4', mission4);
    //   console.log('misson4缓存完成');
    // } catch (e) {
    //   console.log('misson4缓存失败');
    // }

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
});