Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },


  // var icon = require("../public/icon/03"),
  //  onLoad: function () {
  //   this.setData({
  //     icon: icon.icon20
  //   });
  // }
});


  


// var base64 = require("../images/base64");
// Page({
//   onLoad: function () {
//     this.setData({
//       icon: base64.icon20
//     });
//   }
// });