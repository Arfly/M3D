import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  file: {
    content: []
  },
  needUpdate: false
}

const mutations = {
  UPDATE_DATA: (state, fileData) => {
    console.log('文件数据更新成功', fileData)
    state.file.content = fileData
    state.needUpdate = true
  },
  RESET_UPDATESTATE: (state) => {
    state.needUpdate = false
    console.log('视图数据更新完毕')
  }
}
const actions = {
  updateMoleculeData ({commit}, data) {
    commit('UPDATE_DATA', data)
  },
  resetUpdate ({commit}) {
    commit('RESET_UPDATESTATE')
  }
}

const getters = {
  file: state => state.file,
  needUpdate: state => state.needUpdate
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
