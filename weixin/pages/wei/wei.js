Page({
  data: {
    inputShowed: false,
    inputVal: "",
    messages: [
      { id: 0, name: '老王', avatar: '../../public/icon/03.png', msg: '07：00' },
      { id: 0, name: '学习', avatar: '../../public/icon/05.png', msg: '08：00' },
      { id: 0, name: '努力', avatar: '../../public/icon/07.png', msg: '09：00' },
      { id: 0, name: '嘿嘿', avatar: '../../public/icon/09.png', msg: '10：00' },
      { id: 0, name: '大宝', avatar: '../../public/icon/weixin(1).png', msg: '10：20' },
      { id: 0, name: '大白', avatar: '../../public/icon/che-a.png', msg: '昨天' }
    ]
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
  }
});