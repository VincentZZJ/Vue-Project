<template>
	<div>
		<div class="v-btn" @click="handleClick">
			<div v-if="navButton" class="v-btn-nav">
				<slot name="navImg"></slot>
			</div>
			<div class="v-btn-content">
				<slot name="btnIcon"></slot>
				<slot name="btnText" class="v-btn-text"></slot>
				<!-- <label class="v-btn-text"></label> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
 	props : ['navButton'],		// 子组件获取父节点传回的参数
 	data(){
 		return {

 		}
 	},
 	methods : {
 		handleClick(){
 			this.$emit('clickBtn');		// 子组件触发父组件定义的方法
 		}
 	}
}
</script>

<style>
.v-btn{
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.v-btn:hover{
	cursor: pointer;
}
.v-btn-nav{
	margin: 5px auto;
}
.v-btn-nav>img{
	width: 60px;
	height: 60px;
	border-radius: 8px;
	vertical-align: middle;
	border: none;
}
.v-btn-text{
	font-size: 14px;
	color: #ccc;
	line-height: 20px;
}
</style>
