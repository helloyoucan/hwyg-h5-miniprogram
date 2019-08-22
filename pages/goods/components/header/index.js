// pages/goods/components/header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsTypes: {
      type: Object
    },
    activeType: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapType(event) {
      const type = event.target.dataset.type
      if (type) {
        this.triggerEvent('onTapType', {
          type
        })
      }
    }
  }
})