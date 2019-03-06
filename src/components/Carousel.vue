<template>
	<div>
	    <el-carousel :height="this.heightPan+'px'" :interval='5000'>
			<el-carousel-item v-for="(item, index) in dataArrBJ" :key="index">
				<img :src="item.pic" alt="">
				<p v-if="item.textIntro" class="carousel_p3">{{item.textIntro}}</p>
	      	</el-carousel-item>
	    </el-carousel>
	</div>
</template>
<script>
	export default{
		data : function(){
			return {
				articleData : []
			}
		},
		mounted : function(){
			// this.fetchData();
		},
		props: ['dataArrBJ', 'heightPan'],
		methods : {
			// fetchData : function(){
			// 	var _this = this;
			// 	this.$http.get('/src/data/catetoryCarousel.data').then(function(res){
			// 		_this.articleData = res.data;
			// 	}).catch(function(err){
			// 		console.log('请求轮播图数据出错');
			// 	})
			// }
		},
		created(){
			console.log(this.dataArrBJ)
		}
	}
</script>
<style>
  	.el-carousel__item img {
		width:100%;
		height:100%;
	  }
	  .carousel_p3{
		  z-index: 10;
		  position: relative;
		  top: -100px;
		  margin: 0 auto;
		  font-size: 14px;
		  text-align: center
	  }
</style>