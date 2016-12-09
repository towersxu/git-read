import Vue from 'vue'
import Router from 'vue-router'
import Content from '../views/Content.vue'
import Hello from '../views/Hello.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Hello },
    { path: '/content', component: Content }
  ]
})
