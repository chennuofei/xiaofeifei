// pages/oneTheme/oneTheme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: '',
    screenWidth: '',
    localbackgroundpicture:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        })
      },
    });

  //获得页面转移信息中的localbackgroundpicture
  that.setData({
    localbackgroundpicture:options.key
  })
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
  choosebackgroundpicture: function () {
    var that = this;
    switch (that.data.localbackgroundpicture){
      case 'localbackgroundpicture1':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture1');
        } catch (e) {

        };
       break; 
      case 'localbackgroundpicture2':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture2');
        } catch (e) {

        };
        break; 
      case 'localbackgroundpicture3':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture3');
        } catch (e) {

        };
        break; 
      case 'localbackgroundpicture4':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture4');
        } catch (e) {

        };
        break; 
      case 'localbackgroundpicture5':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture5');
        } catch (e) {

        };
        break; 
      case 'localbackgroundpicture6':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture6');
        } catch (e) {

        };
        break; 
      case 'localbackgroundpicture7':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture7');
        } catch (e) {

        };
        break; 
      case 'localbackgroundpicture8':
        try {
          console.log('sssss');
          wx.setStorageSync('piture', 'backgroundpicture8');
        } catch (e) {

        };
        break; 
    }
    
    /**
       * 选择好主题后调用该页面的onShow函数使得换主题页面也能实时刷新
       */
    that.onShow();
  },
})