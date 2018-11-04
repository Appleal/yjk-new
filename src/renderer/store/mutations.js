import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN](state, isLogin) {
    state.isLogin = isLogin
  },
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_CUSTOM](state, custom) {
    state.custom = custom
  },
  [types.SET_CONVERSATION_LIST](state, conversationList) { // 会话列表
    state.conversationList = conversationList
  },
  [types.SET_CONVERSATION_USER_LIST](state, conversationUserList) { // 顾问关系列表
    state.conversationUserList = conversationUserList
  },
  [types.SET_IM](state, isConnect) {
    state.isConnect = isConnect
  },
  [types.SET_CONNECT_TYPE](state, connectype) {
    state.connectype = connectype
  },
  [types.SET_CALL](state, call) {
    state.call = call
  },
  [types.SET_TELEPHONE](state, telephone) {
    state.telephone = telephone
  },

  [types.SET_APPOINTMENTNUM](state, appointmentNum) {
    state.appointmentNum = appointmentNum
  },
  [types.SET_HOME_UNFINISHWORK](state, homeUnfinishWork) {
    state.homeUnfinishWork = homeUnfinishWork
  }
}

export default mutations
