// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    total: 0,
    priceTotal: 0,
    isAllSelect:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
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
    const selectList = app.globalData.cartList.filter((item,index,array) => {
      return item.checked == true
    })
    const total = selectList.length;
    let priceTotal = 0
    for (let i = 0; i < selectList.length;i++){
      priceTotal += selectList[i].price*selectList[i].count
    }

    this.setData({
      cartList: app.globalData.cartList,
      total:total,
      priceTotal: priceTotal
    })
    

  },
  onCheckClick(e){
    console.log(e)
    const index = app.globalData.cartList.findIndex(function(item,index,arr){
      return item.iid == e.detail
    })
    app.globalData.cartList[index].checked = !app.globalData.cartList[index].checked;
    const selectList = app.globalData.cartList.filter((item, index, array) => {
      return item.checked == true
    })
    const isAllSelect = app.globalData.cartList.every((item,index,arr) => {
      return item.checked == true
    })
    
    const total = selectList.length;
    let priceTotal = 0
    for (let i = 0; i < selectList.length; i++) {
      priceTotal += selectList[i].price * selectList[i].count
    }
    this.setData({
      cartList: app.globalData.cartList,
      total: total,
      priceTotal: priceTotal,
      isAllSelect: isAllSelect
    })
  },
  //全选或者全不选
  isAllSelect(){
    for(let i = 0;i<app.globalData.cartList.length;i++){
      app.globalData.cartList[i].checked = !this.data.isAllSelect
    }
    const isAllSelect = !this.data.isAllSelect;
    
    const selectList = app.globalData.cartList.filter((item, index, array) => {
      return item.checked == true
    })
    const total = selectList.length;
    let priceTotal = 0
    for (let i = 0; i < selectList.length; i++) {
      priceTotal += selectList[i].price * selectList[i].count
    }
    this.setData({
      isAllSelect: isAllSelect,
      cartList:app.globalData.cartList,
      total: total,
      priceTotal: priceTotal
    })
    console.log(this.data.isAllSelect)
  }
  
})