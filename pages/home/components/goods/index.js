// pages/home/components/goods/index.js
const mock = require('../../../../mock/good.js');
console.log(mock)
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "supplyList": mock.supplyList,
    "purchaselist": mock.purchaselist
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})