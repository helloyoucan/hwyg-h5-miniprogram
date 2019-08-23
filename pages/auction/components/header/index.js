// pages/auction/components/header/index.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    },
    activeTabType: {
      type: String,
      value: ''
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
    onTapTab(event) {
      const type = event.target.dataset.type
      if (type) {
        this.triggerEvent('changeType', {
          type
        })
      }
    }
  }
})