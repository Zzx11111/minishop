// pages/home/home.js
import { getHomeMultidata, getHomeGoods} from '../../service/home.js'
Page({

  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop': { page: 0, list: []},
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] } 
    },
    currentType:'pop',
    isBackTop: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图
    getHomeMultidata().then(res => {
      this.setData({
        banners: res.data.data.banner.list,
        recommends: res.data.data.recommend.list
      })
    })
    //初始商品信息
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  
  },
  //获取商品信息
  getHomeGoods(type){
    const page = this.data.goods[type].page + 1;
    
    getHomeGoods(type,page).then(res => {
      const newList = res.data.data.list;
      const oldList = this.data.goods[type].list;
      const ListKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      oldList.push(...newList)
      this.setData({
        [ListKey]:oldList,
        [pageKey]:page
      })
      
    })
  },
  //tab-control点击事件
  tabClick(event){
    const index = event.detail.index
    let currentType = ''
    if(index == '0'){
      currentType = 'pop'
    }else if(index == '1'){
      currentType = 'new'
    }else{
      currentType = 'sell'
    }
    this.setData({
      currentType:currentType
    })
    this.getHomeGoods(this.data.currentType)
  },
  //下拉加载更多
  onReachBottom(){
    this.getHomeGoods(this.data.currentType)
  },
  //监听页面滚动
  onPageScroll(options){
    let isBackTop = false;
    if(options.scrollTop > 1000){
      isBackTop = true
    }else{
      isBackTop = false
    }
    this.setData({
      isBackTop:isBackTop
    })
  }
})