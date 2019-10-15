// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 全局引入样式表
import './../static/css/theme_new.css'

// 引入lib-flexible自适应库
import 'lib-flexible'

// 引入Element-UI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入Store
import store from './store/index.js'
// 引入国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 注册i18n实例并引入语言文件
const i18n = new VueI18n({
	locale : 'zh',
	messages : {
		'zh' : require('@/assets/languages/zh.js'),
		'en' : require('@/assets/languages/en.js')
	}
})
// 引入时间插件，并手动设置时区为中国,最后生成一个全局过滤器
import moment from 'moment'
import 'moment/locale/zh-cn'
Vue.filter('dateFormat',function (input,fmtstring) {
    return moment().format(fmtstring);
})

// 引入axios来进行ajax请求，并全局设置(写在vue的原型上)
import axios from 'axios'
Vue.prototype.$http = axios;


// router.beforeEach(function (to , from , next) {
// 	debugger;
// 	next();
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
