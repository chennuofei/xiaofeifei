// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keys:'',
    alldays:'',
    //初始背景图设置为backgroundpicture1
    backgroundpicture: 'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af611c47b827d67c95ce012231e8d02f&auto=format&fit=crop&w=500&q=60',
    backgroundpictureinf: 'backgroundpicture1',
  },

  /**
   * 处理缓存数组函数
   */
  getalldays: function (allkeys){
    var that = this;
    var patt = /key/;//正则表达式
    var alldays = new Array();
    alldays[0] = new Array(2);
    alldays[0][0] = "无记录";
    alldays[0][1] = "grid";
    var j=0;
    for (var i = 0; i < allkeys.length; i++) {
     // console.log(allkeys[i]);
      if (allkeys[i].search(patt)>=0){
       // alldays[j] = allkeys[i].replace(patt,'');
       alldays[j] = new Array(2);
       alldays[j][0] = allkeys[i].replace(patt, '');
       alldays[j][1] = 'noemotion';
        j++;
      }
    };

    for(var i=0;i<alldays.length;i++){
      try {
        var value = wx.getStorageSync(alldays[i][0]+'emotion')
        if (value=='sad') {
          // Do something with return value
          alldays[i][1] = 'sad';
        }
        if (value == 'sleeping') {
          // Do something with return value
          alldays[i][1] = 'sleeping';
        }
        if (value == 'grin') {
          // Do something with return value
          alldays[i][1] = 'grin';
        }
      } catch (e) {
        // Do something when catch error
      }
    }
    //console.log(alldays);
    that.setData({
        alldays:alldays,
    });
    // console.log(allkeys);
    // console.log(alldays);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取key值并进行处理
     */
    wx.getStorageInfo({
      success: function (res) {
        var allkeys = res.keys;
       that.getalldays(allkeys);

        that.setData({
          keys: res.keys,
        });
      }
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
  
  }
})