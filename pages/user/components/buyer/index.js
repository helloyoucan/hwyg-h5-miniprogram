// pages/user/components/buyer/index.js
const orderEntrys = [{
    icon: 'icon_hezuoguanxi',
    text: '定向交易'
  },
  {
    icon: 'tab_icon_bidding_sel',
    text: '竞价交易'
  },
  {
    icon: 'icon_gongyingguanli',
    text: '供应/求购'
  },
]
const entryPanelMidList = [{
    text: '我的竞价'
  },
  {
    text: '我的求购'
  },
  {
    text: '收到的报价'
  },
]
const entryPanelBottomList = [{
    text: '个人认证'
  },
  {
    text: '企业对公账户'
  }
]
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toType: {
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    orderEntrys,
    entryPanelMidList,
    entryPanelBottomList
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapSwitchBtn() {
      this.triggerEvent('changeType', {
        type: this.properties.toType
      })
    }
  }
})