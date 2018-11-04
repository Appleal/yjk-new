import * as types from './mutation-types'
import { setToken, clearStorage, clearToken } from '@/common/js/storage'

export const setUser = function({ commit }, user) {
  setToken(user.token)
  commit(types.SET_USER, user)
  commit(types.SET_LOGIN, true)
}

export const setUserPicture = function({ commit, state }, url) {
  state.user.portraitUrl = url
  commit(types.SET_USER, state.user)
}

export const appStart = function({ commit }) {
  commit(types.SET_LOGIN, true)
}

export const userOut = function({ commit, state }) {
  if (state.isConnect) {
    // disconnect()
  }
  clearStorage()
  clearToken()
  commit(types.SET_IM, false)
  commit(types.SET_LOGIN, false)
  commit(types.SET_CONVERSATION_LIST, [])
  commit(types.SET_APPOINTMENTNUM, 0)
  commit(types.SET_CONNECT_TYPE, 0)
}
