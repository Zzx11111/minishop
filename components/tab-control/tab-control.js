// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectTab(event){
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      this.triggerEvent('tabClick',{index:this.data.currentIndex},{})
    }
  }
})
