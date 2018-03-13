// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keys:'',
    alldays:'',
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
    var j=1;
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

    for(var i=1;i<alldays.length;i++){
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