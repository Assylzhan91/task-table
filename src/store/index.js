import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { calculateCost } from '../util/index'
import { getByIdRecursive } from '../util/index'
import listTable from '../data/listTable.json'

export default new Vuex.Store({
  state: {
  /*  listTable: [
      {
        id: 1,
        title: 'Кузов',
        price: 11_000,
        count: 2,
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
                children: [
                  {
                    id: 1111,
                    title: 'Замок2',
                    price: 5_000,
                    count: 4,
                    children: null
                  },
                  {
                    id: 1112,
                    title: 'Замок3',
                    price: 5_000,
                    count: 4,
                    children: null
                  },
                ]
              },
              {
                id: 112,
                title: 'Ручки',
                price: 6_000,
                count: 6,
                children: [
                  {
                    id: 1121,
                    title: 'Ручки2',
                    price: 3_000,
                    count: 2,
                    children: null
                  },
                  {
                    id: 1122,
                    title: 'Ручки3',
                    price: 1_000,
                    count: 3,
                    children: null
                  },
                ]
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
    ]*/
    listTable: listTable
  },
  getters: {
    getListTable(state) {
      return calculateCost(state.listTable)
    }
  },
  mutations: {
    remove(state, id) {
      getByIdRecursive(state.listTable, id, -1)
    },
    add(state, id) {
      getByIdRecursive(state.listTable, id, 1)
    },
  },
  actions: {
    removeAction({commit}, id){
      commit('remove', id)
    },
    addAction(store, id){
      store.commit('add', id)
    }
  },

})
