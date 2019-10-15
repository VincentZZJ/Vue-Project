/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-12 08:58:37
 * @version $Id$
 */
import * as type from './mutations_types.js'

export default {
	[type.CHANGE_LANG](states){
		states.lang = states.lang == 'zh'?'en':'zh';
	}
}
