Page({
  /**
   * 页面的初始数据
   */
  data: {
    blockColor: "#000000",
    colorR: 0,
    colorG: 0,
    colorB: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  changeCorlorR(e) {
    var value = e.detail.value
    this.setData({
      colorR: value
    })
    var color = this.getColorRgb(this.data.colorR, this.data.colorG, this.data.colorB)
    this.setData({
      blockColor: color,
    })
  },

  changeCorlorG(e) {
    var value = e.detail.value
    this.setData({
      colorG: value
    })
    var color = this.getColorRgb(this.data.colorR, this.data.colorG, this.data.colorB)
    this.setData({
      blockColor: color,
    })
  },

  changeCorlorB(e) {
    var value = e.detail.value
    this.setData({
      colorB: value
    })
    var color = this.getColorRgb(this.data.colorR, this.data.colorG, this.data.colorB)
    this.setData({
      blockColor: color,
    })
  },

  normalize: function (channel) {
    return Math.round(channel * 2.55).toString(16);
  },

  getColorRgb: function(colorR, colorG, colorB) {
    let result;
    result = '#' + this.normalize(colorR) + this.normalize(colorG) + this.normalize(colorB)
    console.log(result);
    return result;
  },

})