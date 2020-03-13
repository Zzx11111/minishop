//app.js
App({
  onLaunch: function () {
    
  },
  addToCart(obj) {
    const oldObj = this.globalData.cartList.filter((item, index, array) => {
      return item.iid === obj.iid
    })
    if (oldObj.length == 1) {
      oldObj[0].count += 1;
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }
  },
  globalData: {
    cartList:[]
  }
})