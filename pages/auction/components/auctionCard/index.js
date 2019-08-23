// pages/auction/components/auctionCard/index.js
const util = require('../../../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    auction: {
      type: Object,
      value: null,
      observer: function(newVal) {
        // 属性值变化时执行
        if (newVal) {
          const endTime = newVal.dealTime ? newVal.dealTime : newVal.endTime
          this.setData({
            endTime: endTime && util.parseTime(endTime, '{m}-{d} {h}:{i}'),
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    endTime: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})