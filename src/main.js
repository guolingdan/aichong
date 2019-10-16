// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入iconfont.css
import "./font/iconfont.css"
// 引入公共css
import "./assets/common.css"
// 引入axios
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/"
axios.defaults.withCredentials=true
Vue.prototype.axios = axios
// 引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
// 创建存储对象
//11:创建存储对象
var store = new Vuex.Store({
  state:{   //共享:数据
    cartCount:0//共享:购物车数量
  },
  mutations:{//修改共享数据
    addCart(state){//增加购物车数量
      state.cartCount++;
    },
    reduceCart(state){//减少购物车数量
      state.cartCount--;
    },
    clearCart(state){
      state.cartCount = 0;
    },
  },
  getters:{//获取共享数据
    getCart(state){//获取购物车数量
      return state.cartCount;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
