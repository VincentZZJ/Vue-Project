<template>
	<div id="homeWrap">
		<el-row :gutter="20" style="height: 100%;">
			<el-col :span="8" style="height: 100%;">
				<div class="contentBox">
					<div class="infoBox">
						<div>
							<div class="faceIcon">
								<img src="./../../../static/imagesnew/dongxiao.gif" />
							</div>
							<div class="infoGas">
								<p class="sayCall">{{sayHello}}</p>
								<div class="timeBox">{{nowDate}}</div>
							</div>
						</div>
						<div class="loginMsg">
							<div class="clock">{{currentTime}}</div>
							<div>
								<p>{{$t('lang.other.loginTime')}} : {{loginTime}}</p>
								<p>{{$t('lang.other.lastLogin')}} : {{lastLogin}}</p>
							</div>
						</div>
					</div>
					<div class="activityBox">
						<p class="navTitle">{{$t('lang.common.activityCheck')}}</p>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/activity/ac_real.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.activity.realSignUp')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/activity/ac_detail.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.activity.activityDetail')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/activity/ac_mng.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.activity.activityMng')}}</label>
							</vms-button>
						</div>
					</div>
					<div class="doorBox">
						<p class="navTitle">{{$t('lang.common.entranceGuard')}}</p>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/door/door_controller.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.door.doorCtrl')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/door/door_record.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.door.doorRecord')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/door/door_key.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.door.doorMng')}}</label>
							</vms-button>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="8" style="height: 100%;">
				<div class="contentBox">
					<div class="attendanceBox">
						<p class="navTitle">{{$t('lang.common.faceAttendance')}}</p>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/attendance/at_realplay.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.attendance.attendanceReal')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/attendance/at_stat.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.attendance.attendanceStat')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/attendance/at_search.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.attendance.attendanceSearch')}}</label>
							</vms-button>
						</div>
					</div>
					<div class="streamBox">
						<p class="navTitle">{{$t('lang.common.streamStatistics')}}</p>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/stat/stat_inout.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.statistics.statisticsReal')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/stat/stat_frequencyStat.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.statistics.statisticsStat')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/stat/stat_frequencySearch.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.statistics.statisticsSearch')}}</label>
							</vms-button>
						</div>
					</div>
					<div class="baseBox">
						<p class="navTitle">{{$t('lang.common.basicApplication')}}</p>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/base/base_realplay.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.base.realTime')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/base/base_facedeploy.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.base.deployMng')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/base/base_library.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.base.library')}}</label>
							</vms-button>
						</div>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/base/base_query.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.base.queryByPics')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/base/base_history.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.base.history')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn" style="visibility: hidden;">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/base/base_history.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.base.history')}}</label>
							</vms-button>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="8" style="height: 100%;">
				<div class="contentBox">
					<div class="collectedBox">
						<p class="navTitle">{{$t('lang.common.favorite')}}</p>
						<div style="margin: 26px 0px 0px 44px;align-self: flex-start;">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/keep_custom.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.other.custom')}}</label>
							</vms-button>
						</div>
					</div>
					<div class="manageBox">
						<p class="navTitle">{{$t('lang.common.management')}}</p>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/mng/mng_role.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.common.accessMng')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/mng/mng_device.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.common.deviceMng')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/mng/mng_log.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.common.logMng')}}</label>
							</vms-button>
						</div>
						<div class="innerBox">
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/mng/mng_run.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.common.supportMng')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/mng/mng_model.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.common.templateMng')}}</label>
							</vms-button>
							<vms-button :navButton="isNavBtn">
								<img slot="navImg" src="./../../../static/imagesnew/newbg/mng/mng_config.png"  class="btnIcon"/>
								<label slot="btnText" style="color: #a0a4ac;">{{$t('lang.common.systemMng')}}</label>
							</vms-button>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import VmsButton from './../../components/common/VmsButton.vue'
export default {
 	data(){
 		return {
 			isNavBtn : true,
 			userName : 'admin',
 			currentTime : new Date().getTime(),
 			nowDate : '2019 09-24 星期五',
 			loginTime : '2019-09-24 16:54:47',
 			lastLogin : '2019-09-20 16:54:47',
 		}
 	},
 	components : {
 		VmsButton
 	},
 	computed : {
 		sayHello : function () {
 			return 'admin , '+this.$t('lang.descTips.morningCall');
 		}
 	},
 	mounted(){
 		this.init();
 		// 动态刷新当前时间
 		this._curTimer = setInterval(this.getTime,1000);
 	},
 	methods : {
 		init(){
 			// infoBox中的初始化信息，考虑到只需要生成一次，故直接初始化生成即可 
 		},
 		getTime(){
 			this.currentTime = new Date().getTime();
 		}
 	},
 	destroyed(){   // 组件销毁后删除定时器
 		clearInterval(this._curTimer);
 	}
}
</script>

<style>
/*#homeWrap{
	width: 100%;
	height: 100%;
}
.contentBox{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.contentBox>div{
	width: 100%;
	margin: 6px 0px;
	display: flex;
	flex-direction: column;
	text-align: center;
	flex-shrink: 0;
}
.navTitle{
	height: 30px;
	line-height: 30px;
	font-size: 16px;
	margin: 4px;
	color: #a0a4ac;
}
.infoBox{
	flex: 2;
	background: url('./../../../static/imagesnew/newbg/info/info_bg.png') no-repeat;
	background-size: 100% 100%;
}
.activityBox{
	flex: 1;
	background: url('./../../../static/imagesnew/newbg/activity/ac_bg.png') no-repeat;
	background-size: 100% 100%;
}
.doorBox{
	flex: 1;
	background: url('./../../../static/imagesnew/newbg/door/door_bg.png') no-repeat;
	background-size: 100% 100%;
}
.attendanceBox{
	flex: 1;
	background: url('./../../../static/imagesnew/newbg/attendance/at_bg.png') no-repeat;
	background-size: 100% 100%;
}
.streamBox{
	flex: 1;
	background: url('./../../../static/imagesnew/newbg/stat/stat_bg.png') no-repeat;
	background-size: 100% 100%;
}
.baseBox{
	flex: 2;
	background: url('./../../../static/imagesnew/newbg/base/base_bg.png') no-repeat;
	background-size: 100% 100%;
}
.collectedBox{
	flex: 1;
	background: url('./../../../static/imagesnew/newbg/keep_bg.png') no-repeat;
	background-size: 100% 100%;
}
.manageBox{
	flex: 1;
	background: url('./../../../static/imagesnew/newbg/mng/mng_bg.png') no-repeat;
	background-size: 100% 100%;
}
.innerBox{
	display: flex;
	flex: 1;
	justify-content: space-around;
	align-items: center;
}*/
</style>
