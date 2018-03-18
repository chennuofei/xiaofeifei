/**
 * 多次重复使用的函数提取到这里，注意要使用module.exports 来暴露模块接口
 */


/**
 * 主题设置函数
 */
function SetTheme(that) {
  //读取缓存获取背景图片设置信息并从全局变量中获取图片链接
  //这一部分要放在onShow函数里 

  /**
   * 将该页面原背景信息存入backgroundinf中，用来判断是否需要刷新改变
   */

  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture1) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture1',
    })
  }
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture2) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture2',
    })
  }

  try {
    //缓存中背景图片信息key值设为picture
    var picture = wx.getStorageSync('piture');
    console.log('picture');
    console.log(picture);
    console.log('that.data.backgrondpictureinf');
    console.log(that.data.backgroundpictureinf);
    if (picture && picture != that.data.backgroundpictureinf) {
      switch (picture) {
        case 'backgroundpicture1':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture1,

          });
          break;
        case 'backgroundpicture2':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture2,

          });
          break;
        default:
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture1,
            backgrondpictureinf: 'backgroundpicture1'
          });
          break;
      };
    };
  } catch (e) {
    //缓存信息有错误则将背景图片设置成初始状态
    console.log('设置背景图片失败，进行重置');
    that.setData({
      backgroundpicture: getApp().globalData.backgroundpicture1,
    });
  };

};


/**
 * 用module.exports 来暴露模块接口
 */
module.exports = {
  getRequestUrl: "http://localhost:59637",//获得接口地址
  SetTheme: SetTheme,
}