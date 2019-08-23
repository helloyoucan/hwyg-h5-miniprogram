// pages/home/components/goodsItem/index.js
const util = require('../../../utils/util.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value:null,
      observer:function(newVal){
        this.setData({
          addedTime: util.parseTime(newVal.addedTime,'{m}/{d} {h}:{i}')
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    addedTime: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})