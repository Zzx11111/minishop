// pages/detail/detail.js
import { getDetail, GoodsBaseInfo} from '../../service/detail.js'
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
    console.log(options)
    this.setData({
      iid:options.iid
    })
    this._getDetail(this.data.iid)
  },
  _getDetail(iid){
    getDetail(iid).then(res => {
      console.log(res)
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
    
  }
})