<template>
	<div id="pageNav">
		<nav>
			<div class="nav_logo">
				<img class="nav_logo_img" src="../../static/img/TEE_logo.png" alt="" @click="toHome">
				<p class="nav_logo_p">Trusted Execution Environment</p>
			</div>
			<ul class="nav_ul">
				<!-- <li v-for="(item,index) in navData" :key="index" @click="currentLi(index)">
					<router-link v-if="!item.havesub" :to="item.link">{{item.name}}</router-link>
					<a v-else href="javascript:void(0)">{{item.name}}</a>
					<ul v-if="item.havesub" class="sub" :style="'width:'+this.wid">
						<li v-for="(sub,index) in item.sub" :key="index"><router-link :to="sub.subLink" >{{sub.subName}}</router-link></li>
					</ul>
				</li> -->
				<li>
					<router-link :to="{ path: '/index' }">首页</router-link>
				</li>
				<li class="product">
					<a href="#">产品中心</a>
					<div class="product_detail" id="product_detail1">
						<div class="product_detail_out">
							<div class="product_detail_check">
								<h3 class="product_h3">内容审核</h3>
								<ul class="check_ul">
									<!-- http://ai.test.tee.com/login -->
									<li>
										<!-- <router-link :to="{ path: this.toUrl }" @click="toPic">图像审核</router-link> -->
										<a :href="this.toUrl" @click="toPic" target="_blank">图像审核</a>
									</li>
									<li class="check_ul_li2"><a href="/videosensor" target="_blank">视频审核</a></li>
								</ul>
							</div>
							<div class="product_detail_face">
								<h3 class="product_h3">人脸技术</h3>
								<ul>
									<li>
										<a href="/faceID" target="_blank">人证合一</a>
									</li>
									<li>
										<a href="/faceRecnitn" target="_blank">人脸识别</a>
									</li>
									<!-- <li>
										<a :href="this.toUrl" target="_blank">人脸解锁</a>
									</li> -->
								</ul>
							</div>
							<div class="product_detail_beauty">
								<h3 class="product_h3">试装/美妆</h3>
								<ul>
									<li>
										<a href="/vrfitting" target="_blank">虚拟试装</a>
									</li>
									<li>
										<a href="/facemakeup" target="_blank">美颜美妆</a>
									</li>
								</ul>
							</div>
							<!-- <div class="product_detail_word">
								<h3 class="product_h3">文字识别</h3>
								<ul>
									<li>
										<a :href="this.toUrl" target="_blank">通用文字识别</a>
									</li>
									<li>
										<a :href="this.toUrl" target="_blank">拍照翻译</a>
									</li>
									<li>
										<a :href="this.toUrl" target="_blank">证照识别</a>
									</li>
									<li>
										<a :href="this.toUrl" target="_blank">名片识别</a>
									</li>
									<li>
										<a :href="this.toUrl" target="_blank">手写识别</a>
									</li>
								</ul>
							</div> -->
							<!-- <div class="product_detail_word">
								<h3 class="product_h3">姿态识别</h3>
								<ul>
									<li>
										<a :href="this.toUrl" target="_blank">跌倒检测</a>
									</li>
								</ul>
							</div> -->
							<div class="product_detail_stick">
								<h3 class="product_h3">硬件类/服务类</h3>
								<ul>
									<li>
										<!-- <a href="/mall" target="_blank"></a> -->
										<a href="/teeEssential" target="_blank">神经元计算棒</a>
										<!-- <router-link :to="{ path: '/teeEssential' }">AI神经算力棒</router-link> -->
									</li>
									<li><a href="/greenrouter" target="_blank">绿盾路由器</a></li>
								</ul>
							</div>
							<!-- <div class="solvet_detail_check">
								<h3 class="product_h3">行业应用</h3>
								<ul class="solve_check_ul">
									<li><a href="#">安全帽检测</a></li>
									<li><a href="#">柑橘病分类</a></li>
								</ul>
							</div> -->
							<div class="solve_detail_buy">
								<h3 class="product_h3">智能导购</h3>
								<ul>
									<li>
										<a href="/snapshop" target="_blank">拍照导购</a>
									</li>
								</ul>
							</div>
							<div class="solve_detail_trafic">
								<h3 class="product_h3">交通安全</h3>
								<ul>
									<li>
										<a href="/DMS" target="_blank" class="headhover_a" style="padding:0 3px;">驾驶员状态监测</a>
									</li>
									<!-- <li class="disabled">
										<a href="">高级驾驶辅助</a>
									</li> -->
								</ul>
							</div>
						</div>
					</div>
				</li>
				<!-- <li class="solve">
					<a href="#">解决方案</a>
					<div class="solve_detail">
					
					</div>
				</li> -->
				<!-- <li><a href="https://www.tee.com/developer.html" target="_blank">资源下载</a></li> -->
				<li><a href="/news">新闻</a></li>
				<li><a href="https://github.com/TEE-AI/SAI" target="_blank">开发者社区</a></li>
				<li class="aboutUs">
					<router-link :to="{ path: '/InviteJob' }">关于TEE</router-link>
				</li>
			</ul>
			
			<div class="comLi langChange">
				<li style="margin-left:5px;"><a href="javascript:void(0)">中文<span style="color:#999">/English</span></a></li>
			</div>
			<div class="liLine"></div>
			<div class="comLi inTee">
				<!-- <li class="disabled"><a href="http://manage.tee.com/tee/openai/loginPage" target="_blank">进入TEE AI</a></li> -->
				<li class="disabled"><a href="#">进入TEE AI</a></li>
			</div>
		</nav>
	</div>
</template>
<script>
export default{
	data : function(){
		return {
			navData : [],
			wid:0,
			toUrl:'/imagesensor'
		}
	},
	methods : {
		getNav(){
			var _this = this;
			this.$http.get('/src/data/nav.data').then(function(res){
				// console.log(res)
				_this.navData = res.data;
			}).catch(function(err){
				// console.log('请求导航数据出错');
			})
		},
		currentLi(index){
			// console.log(index)
		},
		toHome(){
			this.$router.push("/")
		},
		joinUs(){
			this.$router.push("/InviteJob")
		},
		toPic(){
			// console.log('111111')
			// // document.getElementById("product_detail1").setAttribute('style', 'display: none')
			// document.styleSheets[0].insertRule('.product_detail {display: none}', 0);
		}
	},
	mounted : function(){
		this.getNav();
		this.wid = document.querySelector(
            "#pageNav"
		).clientWidth;
		// console.log(this.wid)
	},
	created(){
		
	}
}
</script>
<style scoped>
	/* .headhover_a{
		color: #fff;
	}
	.headhover_a:hover{
		background-color: #3E88F1 !important
	} */
	.nav_logo_p{
		font-size: 12px;
		color: #C29953;
	}
	nav{
		width:100%;
		height:60px;
		position: absolute;
		left: 0;
		min-width: 950px;;
	}
	.nav_logo{
		width: 182px;
		height: 60px;
		float: left;
		margin-left: 30px;
		margin-right: 10px;
	}
	.nav_logo_img{
		width: 60px;
		height: 32px;
		margin-top: 8px;
		cursor: pointer;
		margin-left: 61px;
	}
	.nav_ul{
		display: inline-block;
	}
	nav>ul>li{width:90px;float:left;text-align: center;line-height: 60px;position:relative;color:#000;}
	nav>ul>li a{font-family:'Microsoft Yahei';font-size:14px;display: inline-block;color:#000;text-decoration:none;}
	nav>ul>li a:hover{text-decoration:none;}
	nav>ul>li a:link{color:#000;width: 100%}
	nav>ul>li span{transition: all 0.3s ease;display:block; position:absolute; left:50%; width:0px; height:0px; background-color:#000; top:39px; left:50%;}
	nav>ul>li:hover{
		background-color: #19274A;
		color: #fff;
		font-size: 13px;
	}
	.product_detail_out a, .solve_detail a{
		width: 100%;
		height: 25px;
		border-radius: 3px;
	}
	.product_detail_out a:hover, .solve_detail a:hover{
		background-color: #3E88F1 !important;
	}
	nav ul>li:hover a{
		color: #fff;
	}
	.currentStyle{
		color: #004cfb;
		font-weight: 600
	}
	.comLi{
		height: 60px; 
		float: right;
		line-height: 60px;
		font-size: 14px;
		padding: 0 10px;
		margin-right: 30px;
	}
	.inTee{
		width: 104px;
		height: 22px;
		border: 1px solid #222;
		border-radius: 30px;
		margin-top: 18px;
		line-height: 22px;
		text-align: center;
		margin-right: 0
	}
	.inTee:hover{
		/* background-color: #19274A; */
	}
	.inTee:hover li a{
		color: #fff;
	}
	.liLine{
		float: right;
		margin: 24px 15px 0 17px;
		width: 1px;
		height: 14px;
		background-color: #19274A;
	}
	.product_detail, .solve_detail{
		width: 100%;
		height: 125px;
		background-color: rgba(0, 0, 0, .7);
		display: block;
		position: fixed;
		left: 0;
		display: none;
		z-index: 110;
	}
	.product_detail_out{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.product_detail_out ul a:hover, .solve_check_ul a:hover{
		color: #fff;
	}
	.product:hover .product_detail, .aboutUs:hover{
		display: block;
	}
	.solve:hover .solve_detail{
		display: block;
	}
	.product_detail_out > div, .solve_detail > div{
		float: left;
		color: #fff;
		margin-left: 35px
	}
	.product_detail_out > div li, .solve_detail > div li{
		color: #fff;
		display: block;
		line-height: 25px;
	}
	.product_detail_out ul>li{
		font-size: 14px;
	}
	.product_h3{
		font-size: 17px;
		height: 53px;
		border-bottom: 1px solid #999;
		margin-bottom: 3px;
	}
	.aboatUs_div{
		/* background-color: rgba(25,39,74, 0.7); */
		background-color: rgba(0, 0, 0, .7) !important;
		display: none;
	}
	.aboatUs_div a{
		height: 25px;
		padding: 2px 5px;
		border-radius: 3px; 
		line-height: 25px;
	}
	.aboatUs_div a:hover{
		background-color: #3E88F1;
	}
	.aboutUs:hover .aboatUs_div{
		display: block
	}
	.langChange{
		padding: 0 0;
		display: flex;
		align-items: center;
	}
	.langChange:before{
		display: inline-block;
		content: '';
		background: url("../../static/img/icon/head_map.png") no-repeat center;
		width: 19px;
		height: 19px;
	}
	.check_ul_li2>a{
		position: relative;
	}
	/* .check_ul_li2>a:after{
		content: "升级中";
		display: inline-block;
		height: 15px;
		color: red;
		font-size: 12px;
		position: absolute;
		right: -5px;
	} */
	/* .disabled>a, .product_detail_beauty ul li a, .product_detail_word ul li a,.solvet_detail_check ul li a{
		pointer-events: none;
		color: #999 !important;
	} */
	.disabled>a{
		pointer-events: none;
		color: #999 !important;
		cursor: no-drop;
	}
	@media screen and (max-width: 980px) {
		nav>ul>li{
			width: 90px;
		}
		.comLi{
			margin-right:0;
			padding: 0 0;
		}
		.inTee{
			width: 80px;
		}
		.product_detail_out > div{
			margin-left: 10px;
		}
		nav>ul>li a{
			font-size: 18px;
		}
		nav>ul>li:nth-child(4){
			width: 99px;
		}
		.product_h3{
			font-size: 17px;
		}
		.product_detail_out > div{
			margin-left: 40px;
		}
	}
</style>