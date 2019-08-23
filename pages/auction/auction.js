// pages/auction.js
const mock = require('../../mock/auction.js')
const headerTabList = [{
    text: '热门标的',
    type: '0'
  },
  {
    text: '今日专场',
    type: '1'
  }, {
    text: '专场预告',
    type: '2'
  }, {
    text: '历史专场',
    type: '3'
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerTabList,
    activeHeaderTabType: headerTabList[0].type,
    activeListData: mock.sealList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  changeActiveHeaderTabType(event) {
    const type = event.detail.type
    let activeListData = []
    switch (type) {
      case '0':
        activeListData = mock.sealList
        break
      case '1':
        activeListData = mock.todaySceneList
        break
      case '2':
        activeListData = mock.futureSceneList
        break
      case '3':
        activeListData = mock.previousSceneList
        break
    }
    this.setData({
      activeHeaderTabType: type,
      activeListData
    })
  }
})