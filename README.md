# weixinxiaochengcxu
学习微信小程序的git仓库

# 创建小程序的过程
> 第一步
>> 创建文件夹，有两种方法
>>> 1、直接在显示器中右击新建
>>> 2、在app.json的pages里直接输入pages/文件名/文件名

> 底部标题栏和图标

>>  "tabBar":{
    "borderStyle":"black",
    "list":[
      {
        "pagePath": "pages/wei/wei",
        "text": "wei",
        "iconPath": "public/icon/home-n.png",
        "selectedIconPath": "public/icon/home-a.png"
      },
          
> 页面跳转


>> <navigator  wx:for="{{tfboys}}" url='../detail/detail?name={{item.name}}&age={{item.age}}'>
  <view class='list-item' wx:for="{{tfboys}}">
     <view class='item-name'>{{item.name}}</view>
    <view class='item-age'>{{item.age}}</view>
    <button bindtap='delete'>删除</button>
  </view>
   </navigator>
 >> js:  
     page({
  data: {
    tfboys: [
      { name: "王源", age: 18 },
      { name: "王俊凯", age: 18 },
      { name: "易烊千玺", age: 18 }
    ],
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
   
