// pages/user/components/seller/index.js
const tradeListData = [{
    text: '今日支付金额',
    value: 231214
  },
  {
    text: '今日支付买家',
    value: 43124
  },
  {
    text: '今日支付订单',
    value: 23432
  },
  {
    text: '今日成交量（斤）',
    value: 23432
  },
  {
    text: '昨日支付金额',
    value: 356436
  },
  {
    text: '昨日支付买家',
    value: 63455
  },
  {
    text: '昨日支付订单',
    value: 2345
  },
  {
    text: '昨日成交量（斤）',
    value: 2345
  }
]
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
const tradeEntrys = [{
    text: '我的供应',
    icon: 'icon_baoguofahuo'
  },
  {
    text: '发出的报价',
    icon: 'icon_liebiaocaidan'
  }
]
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toType: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tradeListData,
    orderEntrys,
    tradeEntrys
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