import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [
      {
          id: 0,
          title: '示例便签',
          belongs: 4,
          isStar: false,
          timeStamp: 1587036860389,
          content: '示例便签',
          checked: false
      },
      {
          id: 1,
          title: '示例便签',
          belongs: 4,
          isStar: false,
          timeStamp: 1524136860389,
          content: '示例便签',
          checked: false
      },
      {
          id: 2,
          title: '示例便签',
          belongs: 3,
          isStar: false,
          timeStamp: 1524676860389,
          content: '示例便签',
          checked: false
      },
      {
          id: 3,
          title: '示例便签',
          belongs: 2,
          isStar: false,
          timeStamp: 1112676860389,
          content: '示例便签',
          checked: false
      },
      {   
          id: 4,
          title: '收藏',
          belongs: 2,
          isStar: true,
          timeStamp: 1524621460389,
          content: '示例便签',
          checked: false
      }
    ],
    currentId: 5,
    category: [
      { value: 2, icon: 'bookmark-o', color: '#f7f8fabf', text: '未分类', },
      { value: 3, icon: 'bookmark-o', color: '#ff976ac4', text: '旅游',  },
      { value: 4, icon: 'bookmark-o', color: '#1989fac7', text: '个人',  },
      { value: 5, icon: 'bookmark-o', color: '#07c160c7', text: '生活',  },
      { value: 6, icon: 'bookmark-o', color: '#ee0a24c2', text: '工作',  }
    ],
    isgrid: false//宫格/列表视图
  },
  mutations: {
    alter: (state, obj) => {
      state.dataList.forEach(function (item, index) {
        if(item.id === obj.id) {
          //console.log(index
          state.dataList.splice(index, 1, obj);
          //throw new Error("");
        }
      })
    },
    add: (state, obj) => {
      state.dataList.unshift(obj);
      state.currentId++;
    },
    del: (state, id) => {
      state.dataList.forEach(function (item, index) {
        if(item.id === id) {
          state.dataList.splice(index, 1);
        }
      })
    },
    delSome: (state, list) => {
      state.dataList = list;
    },
    changeGrid (state) {
      state.isgrid = !state.isgrid;
    }
  },
  actions: {
  },
  modules: {
  }
})
