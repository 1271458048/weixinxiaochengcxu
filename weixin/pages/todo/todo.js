// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tfboys: [
      { name: "王源", age: 18 },
      { name: "王俊凯", age: 18 },
      { name: "易烊千玺", age: 18 }
    ],

    // modal:[

    // ],
    name: "hellow",
    age: 100
  },

  addhero: function () {
    console.log(this.data.name)

    var user = { name: this.data.name, age: this.data.age }
    var tfboys = this.data.tfboys;
    tfboys.push(user);

    this.setData({
      tfboys: tfboys
    })
    this.setData({
      name: "",
      age: ""
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyInputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },



  delete: function (e) {

    var index = e.currentTarget.dataset.index;

    var tfboys = this.data.tfboys;
    tfboys.splice(index, 1);
    this.setData({
      tfboys: tfboys
    })
  },
  /**
   * 
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {

    // var url = "https://movie.douban.com/j/search_tags?type=movie&tag=%E7%83%AD%E9%97%A8&source=index"
    //   wx:wx.request({
    //     url: url,
    //     data: ,
    //     header: {},
    //     method: GET,
    //     dataType: json,
    //     responseType: text,
    //     success: function(res) {},
    //     fail: function(res) {},
    //     complete: function(res) {},
    //   })
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