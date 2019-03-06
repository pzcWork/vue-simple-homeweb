<template>
	<div id="pageheader">
		<header class="container">
			<pageNav></pageNav>
		</header>
	</div>
</template>
<script>

	import Nav from './Nav.vue'
	export default{
		components : {
			'pageNav' : Nav
		}
	};
</script>
<style scoped>
/* 码隆两个媒体查询(max-width: 992px)， (max-width: 800px)*/
	header{
			/* background:url(/static/img/header_bg.png); */
			position:relative;
		}
	#pageheader{
		position: fixed;
		width: 100%;
		height: 60px;
		top: 0;
		background-color: #ffffff;
		box-shadow: 0 1px 2px rgba(0,0,0,.1);
		z-index: 99;
	}
	/* #pageNav{
		overflow: hidden;
	} */
</style>