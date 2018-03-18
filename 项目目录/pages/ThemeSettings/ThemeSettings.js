// pages/ThemeSettings/ThemeSettings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagewidth:"",
    imageheight:"",
    margin:"",
    //初始背景图设置为backgroundpicture1
    backgroundpicture: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af611c47b827d67c95ce012231e8d02f&auto=format&fit=crop&w=500&q=60',
    backgroundpictureinf: 'backgroundpicture1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          imagewidth: res.windowWidth * 0.25,
          imageheight: res.windowWidth*0.25*1.5,
          margin: res.windowWidth * 0.04,
        });
        console.log(res.windowWidth); console.log(that.data.imagewidth);
        console.log(res.windowHeight);
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

  /**
   * 图片选择函数
   */
  
  choosebackgroundpicture1: function () {
    var that = this;
      try{
        console.log('wwwwwww');
        wx.setStorageSync('piture', 'backgroundpicture1');
      }catch(e){

      };

      /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();  
  },

  choosebackgroundpicture2: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture2');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();  
  },

  choosebackgroundpicture3: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture3');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },
  
  choosebackgroundpicture4: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture4');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },

  choosebackgroundpicture5: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture5');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },

  choosebackgroundpicture6: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture6');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },


  choosebackgroundpicture7: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture7');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },

  choosebackgroundpicture8: function () {
    var that = this;
    try {
      console.log('sssss');
      wx.setStorageSync('piture', 'backgroundpicture8');
    } catch (e) {

    };
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },
})

