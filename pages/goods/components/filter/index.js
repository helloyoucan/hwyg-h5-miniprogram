// pages/goods/components/filter/index.js
const filterList = {
  price: [{
    text: '默认排序',
    value: 0
  }, {
    text: '价格降序',
    value: -1
  }, {
    text: '价格升序',
    value: 1
  }],
  storage: ['全部', '冷冻'],
  fish: ['全部', '捕获', '养殖'],
  category: [{
    text: '全部',
    id: '0'
  }, {
    text: '鱼种',
    id: '1',
    children: [{
      id: '11',
      text: '草鱼'
    }, {
      id: '12',
      text: '鳗鱼'
    }]
  }, {
    text: '虾',
    id: '2',
    children: [{
      id: '21',
      text: '龙虾'
    }, {
      id: '22',
      text: '小龙虾'
    }]
  }]
}
const filterType = {
  price: 'price',
  storage: 'storage',
  fish: 'fish',
  category: 'category',
}
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
    filterList: filterList, //筛选选项
    filterType: filterType, //筛选类型
    activeType: '', //显示的筛选选项
    filter: { //选中的筛选条件
      price: filterList.price[0].value,
      storage: filterList.storage[0],
      fish: filterList.fish[0],
      category: ''
    },
    activeCategory: filterList.category[0].id, //筛选选项中‘分类’的一级属性选中的值
    categoryConetnt: [] //筛选选项中‘分类’的二级属性显示的选项
  },
  observers: {
    // 监听分类一级属性的变化，获取对应的二级属性
    activeCategory: function(val) {
      const categoryConetnt = this.data.filterList.category.find(function(item) {
        return item.id === val
      })
      if (categoryConetnt) {
        this.setData({
          categoryConetnt: categoryConetnt.children || [],
          filter: {
            ...this.data.filter,
            category: ''
          }
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击（价格/存储类型/渔获类型/分类）
    onTapTabLabel(event) {
      let type = event.currentTarget.dataset.type
      if (this.data.activeType === type) {
        type = ''
      }
      this.setData({
        activeType: type
      })
    },
    //点击（价格/存储类型/渔获类型）下的选项
    onTapListItem(event) {
      const value = event.target.dataset.value
      const type = event.target.dataset.type
      if (value) {
        this.setData({
          filter: {
            ...this.data.filter,
            [type]: value
          },
          activeType: ''
        })
      }
    },
    // 点击分类下的一级分类
    onTapCategoryList(event) {
      const categoryId = event.target.dataset.categoryid
      if (categoryId) {
        const data = {
          activeCategory: categoryId
        }
        if (categoryId === "0") { //全部
          data.activeType = ''
        }
        this.setData(data)
      }
    },
    // 分类下的二级分类
    onTapFishType(event) {
      const fishTypeId = event.target.dataset.fishid
      if (fishTypeId !== void 0) {
        this.setData({
          filter: {
            ...this.data.filter,
            category: fishTypeId
          },
          activeType: ''
        })
      }
    }
  }
})