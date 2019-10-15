<template>
	<div class="header">
		<el-row>
			<el-col :span="6">
				<div class="appLogo">
					<img src="./../../../static/imagesnew/logo.png">
					<span id="systemName">{{$t('lang.other.appTitle')}}</span>
				</div>
			</el-col>
			<el-col :span="12"></el-col>
			<el-col :span="6">
				
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
 
}
</script>

<style>
/*.header{
	height: 44px;
	width: 100%;
	background: url('./../../../static/imagesnew/daohang-bg.png') no-repeat;
	background-size: 100% 100%;
}
.appLogo{
	display: inline-block;
	height: 20px;
	text-align: center;
	padding: 12px 5px;
	
}
.appLogo>img{
	width: 166px;
	height: 20px;
	border: none;
}
.appLogo>span{
	vertical-align: top;
	font-size: 15px;
	line-height: 20px;
	color : #a0a4ac;
}*/
</style>
