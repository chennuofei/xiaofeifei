// pages/ThemeSettings/ThemeSettings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagewidth:"",
    imageheight:"",
  
    screenHeight: '',
    screenWidth: '',
    //初始背景图设置为backgroundpicture1
    backgroundpicture: '',
    // grids:[
    //   { "localbackgroundpicture": 'localbackgroundpicture1', "choosebackgroundpicture": 'choosebackgroundpicture1'},
    //   { "localbackgroundpicture": 'localbackgroundpicture2', "choosebackgroundpicture": 'choosebackgroundpicture2'},
    //   { "localbackgroundpicture": 'localbackgroundpicture3', "choosebackgroundpicture": 'choosebackgroundpicture3'},
    //   { "localbackgroundpicture": 'localbackgroundpicture4', "choosebackgroundpicture": 'choosebackgroundpicture4'},
    //   { "localbackgroundpicture": 'localbackgroundpicture5', "choosebackgroundpicture": 'choosebackgroundpicture5'},
    //   { "localbackgroundpicture": 'localbackgroundpicture6', "choosebackgroundpicture": 'choosebackgroundpicture6'},
    //   { "localbackgroundpicture": 'localbackgroundpicture7', "choosebackgroundpicture": 'choosebackgroundpicture7'},
    //   { "localbackgroundpicture": 'localbackgroundpicture8', "choosebackgroundpicture": 'choosebackgroundpicture8'}],
      grid:[
        'localbackgroundpicture1',
        'localbackgroundpicture2',
        'localbackgroundpicture3',
        'localbackgroundpicture4',
        'localbackgroundpicture5',
        'localbackgroundpicture6',
        'localbackgroundpicture7',
        'localbackgroundpicture8',
      ],
//用作yes图标显示判定
      picture:'',
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
        
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
        // console.log(res.windowWidth); console.log(that.data.imagewidth);
        // console.log(res.windowHeight);
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
    //缓存中背景图片信息key值设为picture
    var setpicture = wx.getStorageSync('piture');
    that.setData({
      picture: 'local' + setpicture,
    })
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


})

