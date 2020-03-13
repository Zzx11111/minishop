// pages/cart/childCpns/cart-item/cart-item.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    type:true,
    checked:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(){
      /* this.properties.goods.checked = !this.properties.goods.checked

      console.log("aaaaa")
      console.log(this.properties.goods.checked)
      const cartList = app.globalData.cartList.find((item => {
        return this.properties.goods.iid == item.iid
      }))
      cartList.checked = this.data.checked */
      this.triggerEvent("onCheckClick",this.properties.goods.iid,{})
      
    }
  }
})
