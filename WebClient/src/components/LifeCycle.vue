<template>
	<div id="demo">
		<h1 id="testTitle">一个例子说明Vue的生命周期</h1>
		<p>{{ message }}</p>
		<input type="text" v-model="message">
	</div>
</template>

<script>
	export default {
	 	name : 'LifeCycle',
	 	el : '#demo',
	 	data(){
	 		return {
	 			message : 'Hello World!'
	 		}
	 	},
	 	methods : {

	 	},
	 	beforeCreate () {
	        console.log('============ beforeCreate =============')
	        console.log('message --- ', this.message) // message ---  undefined
	        console.log('el --- ', this.$el) // el ---  undefined
	        console.log('')
	      },
	 
	      created () {
	        console.log('============ created =============')
	        console.log('message --- ', this.message) // message ---  Hello Vue.js!
	        console.log('el --- ', this.$el) // el ---  undefined
	        console.log('')
	      },
	 
	      beforeMount () {
	        console.log('============ beforeMount =============')
	        console.log('message --- ', this.message) // message ---  Hello Vue.js!
	        console.log('el --- ', this.$el.innerHTML) // el ---  <h1>{{ message }}</h1> <input type="text" v-model="message">
	        console.log('')
	      },
	 
	      mounted () {
	        console.log('============ mounted =============')
	        console.log('message --- ', this.message) // message ---  Hello Vue.js!
	        console.log('el --- ', this.$el.innerHTML) // el ---  <h1>Hello Vue.js!</h1> <input type="text">
	        console.log('')
	      },
	 
	      beforeUpdate () {
	        console.log('============ beforeUpdate =============')
	        console.log('message --- ', this.message)
	        console.log('el --- ', this.$el.innerHTML)
	        console.log('')
	      },
	 
	      updated () {
	        console.log('============ updated =============')
	        console.log('message --- ', this.message)
	        console.log('el --- ', this.$el.innerHTML)
	        console.log('')
	      },
	 
	      // activated () {
	      //   console.log('============ activated =============')
	      // },
	 
	      // deactivated () {
	      //   console.log('============ deactivated =============')
	      // },
	 
	      beforeDestroy () {
	        console.log('============ beforeDestroy =============')
	        console.log('message --- ', this.message)
	        console.log('')
	      },
	 
	      destroyed () {
	        console.log('============ destroyed =============')
	        console.log('message --- ', this.message)
	        console.log('')
	      },
	 
	      errorCaptured () {
	        console.log('============ errorCaptured =============')
	      },
	}
</script>

<style>

</style>
