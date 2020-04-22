Page({
  /**
   * 页面的初始数据
   */
  data: {
    blockColor: "#ff0000",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 滑动条变动后获取变动后的数据 为0-100
  changeCorlor(e) {
    let value = e.detail.value
    let color;
    color = this.findClass(value)
    // console.log(value);
    this.setData({
      blockColor: color
    })
  },

  // 根据滑动条的值判断颜色种类
  findClass(value) {
    let colorClass = parseInt(value / 17);
    let colorStep = Math.round(value % 17 * (100 / 17));
    console.log("colorStep", colorStep)
    return this.getColor(colorClass, colorStep);
  },

  // 通过变色的区间类别调用getColorRgb获取rgb值
  getColor(colorClass, colorStep) {
    let color;
    switch (colorClass) {
      case 0:
        // #f00 到 ff0
        color = this.getColorRgb(100, colorStep, 0);
        break;
      case 1:
        // #ff0 到 0f0
        color = this.getColorRgb(100-colorStep, 100, 0);
        break;
      case 2:
        // #0f0 到 0ff
        color = this.getColorRgb(0, 100, colorStep);
        break;
      case 3:
        // #0ff 到 00f
        color = this.getColorRgb(0, 100-colorStep, 100);
        break;
      case 4:
        // #00f 到 f0f
        color = this.getColorRgb(colorStep, 0, 100);
        break;
      default:
        // #f0f 到 f00
        color = this.getColorRgb(100, 0, 100-colorStep);
        break;
    }
    return color;
  },

  // 获取rbg值
  getColorRgb(colorR, colorG, colorB) {
    let result;
    console.log("RGB", colorR, colorG, colorB)
    result = '#' + this.normalize(colorR) + this.normalize(colorG) + this.normalize(colorB)
    return result;
  },

  // 将颜色的百分比转化为16进制
  normalize(channel) {
    channel = Math.round(channel * 2.55).toString(16);
    if (channel.length == 1) {
      channel = '0' + channel;
    }
    return channel;
  },

})