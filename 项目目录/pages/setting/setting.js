// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    witchchecked:false,
    huancun:0,
    screenHeight: '',
    screenWidth: '',
    //初始背景图设置为backgroundpicture1
    backgroundpicture: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af611c47b827d67c95ce012231e8d02f&auto=format&fit=crop&w=500&q=60',
    backgroundpictureinf: 'backgroundpicture1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取已有缓存大小
     */
    try{
      wx.getStorageInfo({
        success: function (res) {
          //console.log(res.currentSize)
          var huancunMB = res.currentSize / 1024 - 0.0009765625;
          if(huancunMB<0)
            huancunMB=0;
          that.setData({
            huancun: huancunMB,
          });
        }
      })
    }catch(e){

    };

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /*
   * 事件函数
   */

  introduction:function(){
    wx.navigateTo({
      url: '../../pages/introduction/introduction',
    })
  },

  free:function(){
    var that = this;
    wx.showModal({
      title: '确定清除缓存吗？',
      content: '这会清除所有的数据',
      success:function(res){
        if(res.confirm){
          try {
            wx.clearStorageSync();
            wx.showToast({
              title: '缓存已清除',
              icon: 'success',
              duration: 1500,
            })
            that.setData({
              witchchecked:true,
            })
          } catch (e) {
            wx.showToast({
              title: '请重试',
              icon: 'loading',
              duration: 1500,
            })
          }
        }else if(res.cancel){
          that.setData({
            witchchecked: false,
          })
        }
      }
    });

    try {
      wx.getStorageInfo({
        success: function (res) {
         // console.log(res.currentSize)
          var huancunMB = res.currentSize/1024-0.0009765625;
          if (huancunMB < 0)
            huancunMB = 0;
          that.setData({
            huancun: huancunMB,
          });
        }
      })
    } catch (e) {
    };
      
  },
  
  settime: function () {
    wx.navigateTo({
      url: '../../pages/settime/settime',
    })
  },
  history:function(){
    wx.navigateTo({
      url: '../../pages/history/history',
    })
  },
  ThemeSettings: function () {
    wx.navigateTo({
      url: '../../pages/ThemeSettings/ThemeSettings',
    })
  },
})