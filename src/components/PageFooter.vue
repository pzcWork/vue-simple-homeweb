<template>
	<div>
		<footer class="foot container" >
			<div class="footermain">
				<div class="footer_state">
					<!-- <div class="foot_logo"> <img src="../../static/img/foot_logo.png" alt=""></div> -->
					<p class="footer_state_p1">为你的产品定制人工智能</p>
					<p class="footer_state_p2">Customized AI for your product</p>
					<p class="footer_state_p">
						公司核心AI算法包括：人脸识别、AI美妆、智能导购、姿态识别、鉴黄识别、物体识别、OCR识别、图像分类、图像分割、疲劳驾驶、智能导购等。广泛应用于互联网、安防、零售、工业、公共场所、网络安全等行业。同时基于自主研发的人工智能芯片和算法软件，集成嵌入式AI系统 。打造低成本、低功耗、高性能的人工智能应用平台，为客户提供开放的平台和应用解决方案。
					</p>
				</div>
				<div class="QRcode">
					<p style="margin-bottom:20px;font-size:14px;padding-top:22px;" class="QRcode_p">
						关注TEE AI LAB
					</p>
					<img src="../../static/img/QRcode.png" alt="">
				</div>
				<div class="address">
					<p class="address_p">公司地址</p>
					<p>TEE Group Limited(HK)</p>
					<p>北京锑易易科技有限公司</p>
					<p style="margin-bottom:30px;font-size:12px;">
						北京市朝阳区朝阳北路237号复星国际中心17层
					</p>
					<p>海南梯易易智能科技有限公司深圳分公司</p>
					<p style="margin-bottom:30px;font-size:12px;">深圳市罗湖区京基100大厦写字楼44层01B单元</p>
					<p>海南梯易易智能科技有限公司</p>
					<p style="margin-bottom:30px;font-size:12px;">海南省老城高新技术产业示范区海南生态软件园A17幢1层</p>
				</div>
				<div class="touchUs">
					<p class="touchUs_p1" style="font-size:14px;">联系我们</p>
					<p>求职 HR</p>
					<p style="margin-bottom:15px;">hr@tee.com</p>
					<p>商务 BD</p>
					<p style="margin-bottom:15px;">bd@tee.com</p>
					<p>媒体 PR</p>
					<p style="margin-bottom:15px;">pr@tee.com</p>
					<p style="margin-bottom:10px;">客服 CS</p>
					<p style="margin-bottom:5px;">&nbsp;·&nbsp;电话：4008061211</p>
					<p style="margin-bottom:5px;">&nbsp;·&nbsp;QQ：2167316542</p>
					<p style="margin-bottom:5px;">&nbsp;·&nbsp;邮箱：service@tee.com</p>
				</div>
			</div>
			<p class="footer_terms">Copyright © 2018 tee.com All rights reserved. | ICP备案号：浙ICP备18035096号</p>
		</footer>
	</div>
</template>
<script>
	export default{

	}
</script>
<style>
.foot{
	width: 100%;
	min-height: 360px;
	background-color: #3E88F1;
	color: #fff;
	position: relative;
}
.footer_terms{
	position: absolute;
	bottom: 10px;
	font-size: 12px;
	left: 34%;
}
/* .foot .footermain{
	position: relative;
	height: 100%;
} */
.footermain{
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 35px;
}
.footermain div{
	margin: 0 50px
}
.foot_logo{
	margin-bottom: 20px !important;
	margin-top: -20px !important;
}
.footer_state_p, .footer_state_p3{
	width: 640px;
	font-size: 12px;
	line-height: 20px;	
}
.address p{
	font-size: 14px;
	margin-bottom: 10px;
}
.address_p{
	padding-top: 22px;
}
.touchUs p{
	font-size: 12px;
}
.touchUs_p1{
	padding-top: 22px;
	margin-bottom: 10px;
}
.footer_state_p1{
	font-size: 18px;
	margin-bottom: 10px;
	padding-top: 22px;
}
.footer_state_p2{
	font-size: 12px;
	margin-bottom: 20px;
}
@media screen and (max-width: 1680px) {
	.footer_state_p, .footer_state_p3 {
		width: 450px;
	}
}
@media screen and (max-width: 1500px) {
	.footer_state_p, .footer_state_p3 {
		width: 400px;
	}
}
@media screen and (max-width: 1280px) {
	.footer_state_p, .footer_state_p3 {
		width: 350px;
	}
	.footermain div{
		margin: 0 20px;
	}
}
@media screen and (max-width: 980px) {
	.footer_state_p, .footer_state_p3 {
		width: 300px;
	}
	.footermain div{
		margin: 0 10px;
	}
}
.touchUs{
	margin-right: 0
}
.QRcode_p:before{
	/* display:  */
}
</style>