// components/goods-item/goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodItem:{
      type:Object,
      value:{}
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
    itemClick(){
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+this.properties.goodItem.iid,
      })
    }
  }
})
