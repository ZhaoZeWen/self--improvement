<template>
	<div id="app">
		<h1>{{title}}</h1>
		<child-demo msg="hello prop"></child-demo>
	</div>
</template>
<script>
import Vue from 'vue';
Vue.component('child-demo',{
	props: ['msg'],
	template:`<span>{{msg}}</span>`
})
export default {
	name: '#app',
	data: function(){
		return {
			title: '使用prop传递数据'
		}
	}
}
</script>
