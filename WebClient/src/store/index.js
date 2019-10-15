/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-11 16:02:07
 * @version $Id$
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入相应的数据模型
import global from './global'

export default new Vuex.Store({
	modules : {
		global
	}
})