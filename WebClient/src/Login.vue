<template>
	<div id="loginWrap">
		<el-container class="loginInnerWrap">
			<el-header height="30px">
				<el-col :span="20"></el-col>
				<el-col :span="4">
				</el-col>
			</el-header>
			<el-main>
				<el-row class="loginForm" type="flex" justify="center" align="bottom">
					<el-col :span="8.5">
						<el-form id="LoginBox" :model="adminForm" :rules="rulesForm" ref="adminForm" label-position="left" label-width="0px">
							<div class="appName"><img :src="appImgUrl"/></div>
							<!-- <img :src="appImgUrl" class="appName" /> -->
							<el-form-item prop="adminName" style="text-align: center;height: 26px;">
								<el-radio-group v-model="adminForm.source">
						      		<el-radio value="localUser" :label="1" style="color:#ccc;">{{$t('lang.other.localUser')}}</el-radio>
						      		<el-radio value="centerUser" :label="2" disabled style="color:#ccc;">{{$t('lang.other.centerUser')}}</el-radio>
						    	</el-radio-group>
							</el-form-item>
							<el-form-item prop="adminName"  style="height: 26px;">
								<el-input type="text" v-model="adminForm.adminName" auto-complete="off" :placeholder="$t('lang.other.userName')"></el-input>
							</el-form-item>
							<el-form-item prop="adminPassword"  style="height: 26px;">
								<el-input type="password" v-model="adminForm.adminPassword" auto-complete="off" :placeholder="$t('lang.other.password')"></el-input>
							</el-form-item>
							<el-form-item style="width: 100%;white-space: nowrap;height: 30px;text-align: center;">
								<el-checkbox v-model="isRememberKey" style="color:#ccc;">{{$t('lang.other.rememberKey')}}</el-checkbox>
								<el-checkbox v-model="isAutoLogin" style="color:#ccc;">{{$t('lang.other.autoLogin')}}</el-checkbox>
								<el-select v-model="select_Lang" class="selectBox" >
									<el-option value="zh" :label="$t('lang.common.chinese')">{{$t("lang.common.chinese")}}</el-option>
									<el-option value="en" :label="$t('lang.common.english')">{{$t("lang.common.english")}}</el-option>
								  </el-select>
								<el-button type="primary" style="width:70px;height:30px;line-height: 30px;padding: 0px 5px;margin: 0px 0px 0px 5px;" @click="handleSubmit" :loading="logining">{{$t("lang.other.login")}}</el-button>
							</el-form-item>
						</el-form>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import appNameUrl_zh from '../static/imagesnew/appName.png'
import appNameUrl_en from '../static/imagesnew/appName_en.png'
export default {
	data (){
		return {
			logining : false,
			isRememberKey : false,
			isAutoLogin : false,
			appImgUrl : appNameUrl_zh,
			adminForm : {
 				adminName : '',
 				adminPassword : '',
 				source : 1
 			},
 			rulesForm : {
 				adminName : [
 					{required : true, message: ' ' ,trigger : 'blur'}
 				],
 				adminPassword : [
 					{required : true, message: ' ' ,trigger : 'blur'}
 				]
 			},
			select_Lang : this.$store.getters.getLang
		}
	},
	methods : {
		handleSubmit(){
			this.$http.post('/gws/system/login',{
				userName : this.adminForm.adminName,
				password : this.adminForm.adminPassword
			}).then((response)=>{
				let res = response.data;
				if(res.status == "0"){
					console.log('successed to login');
				}else{
					console.log('fail to login');
				}
			});
			// this.$router.push({path:'/home'});
		},
	},
	watch : {		// 侦听器
		isAutoLogin : function (val) {	// 监听该属性是否发生变化，并作相应处理
			this.isRememberKey = val?true:false;
		},
		select_Lang : function (val) {
			this.$store.dispatch('change_lang');
			this.$i18n.locale = this.$store.getters.getLang;
			this.appImgUrl = this.select_Lang=='en'?appNameUrl_en:appNameUrl_zh;
			document.title = this.$t('lang.other.appTitle');
		}
	},
	computed : {	// 计算器
		
	}
}
</script>

<style>
*{margin:0px;padding: 0px;}
#loginWrap{
	background: url('../static/imagesnew/ts_AE_bg.gif') no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
}
#LoginBox{
	height: 220px;
	margin: auto;
	padding: 20px 35px;
	background: url('../static/imagesnew/input.png') no-repeat;
	background-size: 100% 100%;
}
.appName{
	height: 36px;
	/*width: 376px;*/
	text-align: center;
	margin:  auto;
	/*background: url('../static/imagesnew/appName.png') no-repeat;*/
	/*background-size: 100% 100%;*/
}
.loginInnerWrap{
	width: 100%;
	height: 100%;
}
.loginForm{
	width: 100%;
	height: 100%;
	margin-top: -70px;
}
.selectBox{
	width: 110px;
	height: 26px;
	margin-left: 10px; 
}
.selectBox input{
	height: 26px;
	/*width: 80px;*/
	padding: 0px 0px 0px 2px;
	line-height: 26px;
}
</style>
