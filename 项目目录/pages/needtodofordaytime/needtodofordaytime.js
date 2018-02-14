// pages/needtodofordaytime/needtodofordaytime.js


var date = new Date();
var hours = date.getHours();
//var hours ='20';
var key='';

if(hours>=6&&hours<8){
    key = 'misson1';
}
if (hours >= 8 && hours < 12) {
  key = 'misson2';
}
if (hours >= 12 && hours < 18) {
  key = 'misson3';
}

if (hours >= 18 && hours < 23) {
  key = 'misson4';
}


Page({

  /**
   * 页面的初始数据
   */
  data: {

      whattodo :'',

      screenHeight:'',
      screenWidth:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      //从缓存中获取todo数据如果没有设置空
      try{
      
        var value = wx.getStorageSync(key);
        console.log('提取dyatime页面tido数据的key值');
        console.log(key);
        console.log('提取dyatime页面tido数据的value值');
        console.log(value);

        if(value){
          //缓存有数据，将数据显示在panel上
          that.setData({
            whattodo:value,
          })
        }else{
          //缓存没有数据，设置初始数据
          that.setData({
            whattodo: '请在今晚的明日计划板块填写明天的任务',
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