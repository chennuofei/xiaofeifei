// pages/oneday/oneday.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emotion:"",
    summarize:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 注意传递过来后已经由数组变成字符串了
     * 下面这三个可以验证
     *  console.log("thatday");
    console.log(thatday);
    console.log(thatday[2]);
     */
    var thatday = options.key;
    var date = thatday.substr(0,10);
    var emotion = thatday.substring(11);
    // console.log("thatday");
  
    // console.log(date);
    // console.log(emotion);
      try {
          //缓存有数据，将数据显示
        if (emotion == "sad") {
            that.setData({
              emotion: '../../resources/emoticon_sad_32px.png',
            })
          };
        if (emotion == "sleeping") {
            that.setData({
             emotion: '../../resources/emoticon_sleeping_32px.png',
            })
          };
        if (emotion == "grin") {
            that.setData({
             emotion: '../../resources/emoticon_grin_32px.png',
            });
          };

          var keyforthatdaysummarize = "summarize"+date;
          var value = wx.getStorageSync(keyforthatdaysummarize)
          if (value) {
            // Do something with return value
            that.setData({
              summarize:value,
            });
          };
      } catch (e) {
      };
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
  
  }
})