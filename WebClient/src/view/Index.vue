<template>
	<div id="indexWrap">
		<nav-header></nav-header>
		<el-container  style="width: 100%;">
			<el-main style="padding: 5px 10px;width: 100%;height: 100%;">
				<el-col :span="24" style="height: 100%;">
					<!-- <transition name="fade" mode="out-in"> -->
						<router-view></router-view>
					<!-- </transition> -->
				</el-col>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import NavHeader from './../components/base/NavHeader.vue'
export default {
 	data(){
 		return {

 		}
 	},
 	components : {
 		NavHeader
 	}
}
</script>

<style>
#indexWrap{
	width: 100%;
	height: 100%;
	background: url('./../../static/imagesnew/new_background.png') no-repeat;
	background-size: 100% 100%;
	display: flex;
	flex-direction: column;
}
</style>
