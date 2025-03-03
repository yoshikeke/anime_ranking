import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Routing from './views/Routing.vue'
//
// 他のコンポーネントは省略
//

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home
    },
    //
    // 省略
    //
    {
      path: '/routing',
      name: 'routing',
      component: Routing 
    }
  ]
})
