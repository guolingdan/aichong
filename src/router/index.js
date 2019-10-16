import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cartempty from "@/components/Cartempty.vue"
import Cart from "@/components/Cart.vue"
import CartEdit from "@/components/CartEdit.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/CartEdit",component:CartEdit},
    {path:"/Cart",component:Cart},
    {path:"/Cartempty",component:Cartempty},
    {path: '/',component: HelloWorld}
  ]
})
