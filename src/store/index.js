import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { calculateCost } from '../util/index'
import { getByIdRecursive } from '../util/index'
import listTable from '../data/listTable.json'

export default new Vuex.Store({
  state: {
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
