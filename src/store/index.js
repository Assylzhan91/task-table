import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function calculateCost(list) {
  return list.map( item => {
    if(!Object.hasOwnProperty('cost')){
      item.cost = item.price * item.count
      item = {...item, ...item.cost}
    }
    for(let key in item) {
      if(Array.isArray(item[key]) && item[key].length) {
        calculateCost(item[key])
        return item
      }
    }
  })
}
export default new Vuex.Store({
  state: {
    listTable: [
      {
        id: 1,
        title: 'Кузов',
        price: 11_000,
        count: 1,
        children: [
          {
            id: 11,
            title: 'Двери',
            price: 11_000,
            count: 3,
            children: [
              {
                id: 111,
                title: 'Замок',
                price: 5_000,
                count: 4,
                children: null
              },
              {
                id: 112,
                title: 'Ручки',
                price: 6_000,
                count: 6,
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Двигатель',
        price: 12_000,
        count: 2,
        children: [
          {
            id: 21,
            title: 'Поршни',
            price: 10_000,
            count: 5,
            children: null
          },
          {
            id: 22,
            title: 'Кольца',
            price: 2_000,
            count: 5,
            children: null
          }
        ]
      }
    ]
  },
  getters: {
    getListTable(state) {
      return calculateCost(state.listTable)
    }
  },
  mutations: {
  },
  actions: {
  },
})
