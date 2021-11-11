import {
  RECEIVE_ADRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
  } from './mutation-types'

  export default {
    [RECEIVE_ADRESS] (state,adress){
      state.adress = adress
    },
    [RECEIVE_CATEGORYS] (state,categorys){
      state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state,shops){
      state.shops = shops
    }
  }