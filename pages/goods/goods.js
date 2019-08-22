const moch = require('../../mock/good.js')
//获取应用实例
const app = getApp();
const goodsTypes = {
  supply: 'supply',
  purchase: 'purchase'
}
Page({
  data: {
    activeType: goodsTypes.supply,
    goodsTypes,
    listData: {
      supply: moch.supplyList,
      purchase: moch.purchaselist
    },
    activeListData: moch.supplyList
  },
  //传递到子组件header的事件函数
  onTapGoodsType(event) {
    const type = event.detail.type
    this.setData({
      activeType: type,
      activeListData: this.data.listData[type]
    })
  }
})