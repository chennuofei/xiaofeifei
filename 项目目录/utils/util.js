
/**
 * 多次重复使用的函数提取到这里，注意要使用module.exports 来暴露模块接口
 */


const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

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
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture3) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture3',
    })
  }
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture4) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture4',
    })
  }
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture5) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture5',
    })
  }
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture6) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture6',
    })
  }
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture7) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture7',
    })
  }
  if (that.data.backgroundpicture == getApp().globalData.backgroundpicture8) {
    that.setData({
      backgroundpictureinf: 'backgroundpicture8',
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
        case 'backgroundpicture3':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture3,

          });
          break;
        case 'backgroundpicture4':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture4,

          });
          break;
        case 'backgroundpicture5':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture5,

          });
          break;
        case 'backgroundpicture6':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture6,

          });
          break;
        case 'backgroundpicture7':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture7,

          });
          break;
        case 'backgroundpicture8':
          that.setData({
            backgroundpicture: getApp().globalData.backgroundpicture8,

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
  formatTime: formatTime,
  getRequestUrl: "http://localhost:59637",//获得接口地址
  SetTheme: SetTheme,
}
