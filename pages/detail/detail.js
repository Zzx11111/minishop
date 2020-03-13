// pages/detail/detail.js
import { getDetail, GoodsBaseInfo} from '../../service/detail.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    banners:[],
    GoodsBaseInfo:{},
    GoodShopInfo:{},
    detailInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid:options.iid
    })
    this._getDetail(this.data.iid)
  },
  _getDetail(iid){
    getDetail(iid).then(res => {
      const baseInfo = new GoodsBaseInfo(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services);
      const shopInfo = res.data.result.shopInfo;
      const detailInfo = res.data.result.detailInfo;
      this.setData({
        banners:res.data.result.itemInfo.topImages,
        GoodsBaseInfo: baseInfo,
        GoodShopInfo: shopInfo,
        detailInfo: detailInfo
      })
    })
  },
  //加入购物车
  addCart(){
    const obj = {}
    obj.iid = this.data.iid;
    obj.imgaeUrl = this.data.banners[0];
    obj.title = this.data.GoodsBaseInfo.title;
    obj.desc = this.data.GoodsBaseInfo.desc;
    obj.price = this.data.GoodsBaseInfo.realPrice;

    app.addToCart(obj)
    /* let cart = wx.getStorageSync("cart") || [];

    const oldObj = cart.filter((item, index, array) => {
      return item.iid === obj.iid
    })
    if (oldObj.length == 1) {
      oldObj[0].count += 1;
    } else {
      obj.count = 1
      obj.checked = true
      cart.push(obj)
    }
    wx.setStorageSync("cart",cart); */

    wx.showToast({
      title: '加入购物车成功',
    })
  }
})