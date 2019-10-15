import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LifeCycle from '@/components/LifeCycle'
import LoginView from '@/Login.vue'
import IndexView from '@/view/Index.vue'
import HomePage from '@/view/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode : 'history',                   // 更改路由模式，默认为hash(需要加‘#/’的)，而history模式更为接近url格式，推荐
  routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: LoginView
        },
        {
        	path : '/lifecycle',
        	name : 'LifeCycle',
        	component : LifeCycle
        },
        {
            path : '/login',
            name : 'LoginView',
            component : LoginView
        },
        {
            path : '/index',
            name : 'IndexView',
            component : resolve => require(['@/view/Index.vue'],resolve),
            children : [
                {path : '/home' , component : resolve => require(['@/view/home/Home.vue'],resolve)}
            ]
        }
    ]
});

