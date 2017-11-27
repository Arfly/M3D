import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  file: {
    content: []
  },
  elements: [],
  needUpdate: false,
  loading: false,
  loadingTxt: '',
  InfoShow: false,
  structureShow: true,
  modelShow: false,
  updateVisibleInfo: false
}

const mutations = {
  UPDATE_DATA: (state, fileData) => {
    console.log('文件数据更新成功', fileData)
    state.file.content = fileData
    state.needUpdate = true
  },
  UPDATE_ELEMENTS: (state, fileData) => {
    console.log('元素数据更新成功', fileData)
    state.elements = fileData
    console.log('111111', state.elements)
  },
  RESET_UPDATESTATE: (state) => {
    state.needUpdate = false
    console.log('视图数据更新完毕')
  },
  LOADED: (state) => {
    state.loading = false
  },
  LOADING: (state) => {
    state.loading = true
  },
  PARSING: (state) => {
    state.loading = true
    state.loadingTxt = '数据解析中'
  },
  LOADING_FILE: (state) => {
    state.loading = true
    state.loadingTxt = '文件读取中'
  },
  FILE_LOADED: (state) => {
    state.loadingTxt = '文件加载完成'
  },
  PARSE_START: (state) => {
    state.loadingTxt = '文件加载完成'
  },
  PARSING_END: (state) => {
    state.loadingTxt = '数据解析完成'
  },
  RENDER_START: (state) => {
    state.loading = true
    state.loadingTxt = '开始渲染'
  },
  SHOW_INFO: (state) => {
    state.InfoShow = true
  },
  HIDE_INFO: (state) => {
    state.InfoShow = false
  },
  SHOW_STRUCTURE: (state) => {
    state.structureShow = true
    state.modelShow = false
    state.updateVisibleInfo = true
  },
  SHOW_MODEL: (state) => {
    state.structureShow = false
    state.modelShow = true
    state.updateVisibleInfo = true
  },
  RESET_VISIBLE_STATE: () => {
    state.updateVisibleInfo = false
  }
}
const actions = {
  updateMoleculeData ({commit}, data) {
    commit('UPDATE_DATA', data)
  },
  resetUpdate ({commit}) {
    commit('RESET_UPDATESTATE')
  },
  loading ({commit}) {
    commit('LOADING_FILE')
  },
  loaded ({commit}) {
    commit('LOADED')
  },
  loadingFile ({commit}) {
    commit('LOADING_FILE')
  },
  fileLoaded ({commit}) {
    commit('FILE_LOADED')
  },
  startParse ({commit}) {
    commit('PARSING')
  },
  endParse ({commit}) {
    commit('PARSING_END')
  },
  startRender ({commit}) {
    commit('RENDER_START')
  },
  showInfoDialog ({commit}) {
    commit('SHOW_INFO')
  },
  hideInfoDialog ({commit}) {
    commit('HIDE_INFO')
  },
  updateElementsData ({commit}, data) {
    commit('UPDATE_ELEMENTS', data)
  },
  showStructure ({commit}) {
    commit('SHOW_STRUCTURE')
  },
  showModel ({commit}) {
    commit('SHOW_MODEL')
  },
  resetVisibleState ({commit}) {
    commit('RESET_VISIBLE_STATE')
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
