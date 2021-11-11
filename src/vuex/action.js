import {
  reqAddress,
  reqCategorys,
  reqShops
} from '@/api'
import {
RECEIVE_ADRESS,
RECEIVE_CATEGORYS,
RECEIVE_SHOPS
} from './mutation-types'



export default {
  // 获取当前地址的action
 async getAddress({commit,state}) {
    //发异步请求
    const {longitude,latitude} = state
   const result = await reqAddress(longitude,latitude)
   // 请求成功后提交给mutation
   if(result.code==0){
     const adress = result.data
     commit(RECEIVE_ADRESS,adress)
   }
  },

   // 获取食品分类的action
 async getCategorys({commit}) {
  //发异步请求
 const result = await reqCategorys()
 // 请求成功后提交给mutation
 if(result.code==0){
   const categorys = result.data
   commit(RECEIVE_CATEGORYS,categorys)
 }
},

 // 获取商家列表的action
 async getShops({commit,state}) {
  //发异步请求
  const {longitude,latitude} = state
 const result = await reqShops({longitude,latitude})
 // 请求成功后提交给mutation
 if(result.code==0){
   const shops = result.data
   commit(RECEIVE_SHOPS,shops)
 }
}
}