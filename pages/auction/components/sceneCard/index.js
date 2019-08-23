// pages/auction/components/sceneCard/index.js
const util = require('../../../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scene: {
      type: Object,
      value: null,
      observer: function(newVal) {
        // 属性值变化时执行
        if (newVal) {
          this.setData({
            beginTime: newVal.beginTime && util.parseTime(newVal.beginTime, '{m}/{d} {h}:{i}'),
            endTime: newVal.endTime && util.parseTime(newVal.endTime, '{m}/{d} {h}:{i}'),
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    beginTime: '',
    endTime: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})