// pages/needtodofordaytime/needtodofordaytime.js


var date = new Date();
var hours = date.getHours();
//var hours ='20';
var key = '';
Page({
  /**
   * 页面的初始数据
   */
  data: {
      whattodo :'',
      key:'',
      globaltimethis2:8,
      globaltimethis2: 18,
      globaltimethis2: 22,
      screenHeight:'',
      screenWidth:'',
      //初始背景图设置为backgroundpicture1
      backgroundpicture: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af611c47b827d67c95ce012231e8d02f&auto=format&fit=crop&w=500&q=60',
      backgroundpictureinf: 'backgroundpicture1',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      // // console.log('判断misson前');
      // // console.log(getApp().globalData.globaltime2);
      // that.setData({
      //   globaltimethis2: getApp().globalData.globaltime2,
      //   globaltimethis4: getApp().globalData.globaltime4,
      //   globaltimethis5: getApp().globalData.globaltime5,
      // })

      try{
          var value2 = wx.getStorageSync('globaltime2');
          var value4 = wx.getStorageSync('globaltime4');
          var value5 = wx.getStorageSync('globaltime5');
          that.setData({
            globaltimethis2: value2,
            globaltimethis4: value4,
            globaltimethis5: value5,
          })

      }catch(e){

      }

      if (hours >= 6 && hours < that.data.globaltimethis2) {
        key = 'misson1';
        // console.log('hhhhmisson1');
      }
      if (hours >= that.data.globaltimethis2 && hours < 12) {
        key = 'misson2';
        // console.log('hhhhmisson2');
      }
      if (hours >= 12 && hours < that.data.globaltimethis4) {
        key = 'misson3';
        // console.log('hhhmisson3');
      }

      if (hours >= that.data.globaltimethis4 && hours <that.data.globaltimethis5) {
        key = 'misson4';
        // console.log('hhhhmisson4');
      }

      //从缓存中获取todo数据如果没有设置空
      try{
        var value = wx.getStorageSync(key);
        // console.log('提取dyatime页面tido数据的key值');
        // console.log(key);
        // console.log('提取dyatime页面tido数据的value值');
        // console.log(value);
        if(value){
          //缓存有数据，将数据显示在panel上
          that.setData({
            whattodo:value,
          })
        }else{
          //缓存没有数据，设置初始数据
          that.setData({
            whattodo: '',
          })
        }
      }catch(e){

      };

     wx.getSystemInfo({
       success: function(res) {
            that.setData({
              screenHeight:res.windowHeight,
              screenWidth:res.windowWidth,
            })
       },
     }) ;

     console.log(that.data.screenHeight);
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

    //
  
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
  
  }
})