// pages/cart/childCpns/cart-bottom/cart-bottom.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    priceTotal:{
      type:Number,
      value:0
    },
    total:{
      type: Number,
      value: 0
    },
    isAllSelect:{
      type:Boolean,
      
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    isAllSelect(){
      /* this.setData({
        checked:!this.data.checked
      })
      for (let item of app.globalData.cartList){
        item.checked = this.data.checked
      }
      console.log(app.globalData.cartList) */
      console.log(this.properties.isAllSelect+'=====')
      this.triggerEvent("isAllSelect",{},{})
    },
  }
})
