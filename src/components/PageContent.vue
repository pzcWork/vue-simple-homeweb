<template>
	<div class="pageContent">
		<!-- <div class="contentA container">
			<carousel></carousel>
		</div> -->
		<div class="background_img">
			<!-- <img src="../../static/img/background.png" alt=""> -->
			<div class="logo_img">
				<div class="logoAction">
					<!-- <img src="../../static/img/logoAction/logoAction01.png" alt="" class="logoAction_1"> -->
					<ul class="logo_icon logoAction_1">
						<li class="logo_icon01"><img src="../../static/img/logoAction/logo_icon01.png" @click="tonextpage(1)" alt="人证合一"></li>
						<li class="logo_icon02"><img src="../../static/img/logoAction/logo_icon02.png" @click="tonextpage(2)" alt="人脸识别"></li>
						<li class="logo_icon03"><img src="../../static/img/logoAction/logo_icon03.png" @click="tonextpage(3)" alt="图像审核"></li>
						<li class="logo_icon04"><img src="../../static/img/logoAction/logo_icon04.png" @click="tonextpage(4)" alt="视频审核"></li>
						<li class="logo_icon05"><img src="../../static/img/logoAction/logo_icon05.png" @click="tonextpage(5)" alt="拍照导购"></li>
						<li class="logo_icon06"><img src="../../static/img/logoAction/logo_icon06.png" @click="tonextpage(6)" alt="虚拟试装"></li>
						<li class="logo_icon07"><img src="../../static/img/logoAction/logo_icon07.png" @click="tonextpage(7)" alt="美颜美妆"></li>
						<li class="logo_icon08"><img src="../../static/img/logoAction/logo_icon08.png" @click="tonextpage(8)" alt="驾驶监测"></li>
					</ul>
					<img src="../../static/img/logoAction/logoAction02.png" alt="" class="logoAction_2">
					<img src="../../static/img/logoAction/logoAction03.png" alt="" class="logoAction_3">
					<img src="../../static/img/logoAction/logoAction04.png" alt="" class="logoAction_4">
					<img src="../../static/img/logoAction/logoAction05.png" alt="" class="logoAction_5">
					<img src="../../static/img/logoAction/logoAction06.png" alt="" class="logoAction_6">
					<span class="logoAction_tittle"></span>
						<!-- <div class="logoAction_text">
						<p>为你的产品定制人工智能</p>
						<p>Customized AI for your product</p>
						<p>TEE Vision</p>
					</div> -->
				</div>
			</div>
			<!-- <video width="620" height="440" autoplay loop>
				<source src="http://www.arcsoft.com.cn/resource/images/home/bannerMP4.mp4" type="video/mp4">
				<source src="../../static/logoPic.mp4" type="video/mp4">
			</video> -->
		</div>
		<div class="introduce">
			<h3 class="introduce_h3">业务内容</h3>
			<!-- <div class="introduce_head">
				<div @click="tabChange(1)" :class="[ this.tab == 1 ? 'tabStyle' : '' ]">
					<a href="#introduce_head">现有业务</a>
				</div>
				<div @click="tabChange(2)" :class="[ this.tab == 2 ? 'tabStyle' : '' ]">
					<a href="#product">产品优势</a>
					
				</div>
				<div @click="tabChange(3)" :class="[ this.tab == 3 ? 'tabStyle' : '' ]">
					<a href="#partner">合作伙伴</a>
				</div>
			</div> -->
			<!-- <div class="introduce_head_1" id="introduce_head">
				<h3 class="introduce_head_1_h3">现有业务</h3>
				<ul class="introduce_head_1_ul">
					<li>
						<p class="introduce_head_1_ul_com">智能鉴黄</p>
						<div class="introduce_head_icon1 introduce_icon_com"></div>
						<p class="introduce_head_text">
							通过深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别以及色情程度量化，能够根据业务场景快速定制算法模型，降低人工审核成本。
						</p>
						<p class="toDemo"><a href="#">在线体验>></a></p>
					</li>
					<li>
						<p class="introduce_head_1_ul_com">涉政识别</p>
						<div class="introduce_head_icon2 introduce_icon_com"></div>
						<p class="introduce_head_text">
							通过深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别政治人物与敏感政治事件场景，帮助UGC、IM、BBS类产品在敏感时期规避相关风险，降低人工审核成本。
						</p>
						<p class="toDemo"><a href="#">在线体验>></a></p>
					</li>
					<li>
						<p class="introduce_head_1_ul_com">暴恐识别</p>
						<div class="introduce_head_icon3 introduce_icon_com"></div>
						<p class="introduce_head_text">
							通过深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别暴力，血腥场景及恐怖组织头目，旗帜等涉嫌违禁鉴别，降低应用涉暴涉恐风险，降低人工审核成本。
						</p>
						<p class="toDemo"><a href="#">在线体验>></a></p>
					</li>
				</ul>
			</div> -->
		</div>
		<div class="tab_card">
			<div class="tab_card_tab">
				<div class="tab_card_tab1" @click=tabCardClick(0) :class="[ this.tabCard == 0 ? 'tabCardStyle' : '' ]">内容审查</div>
				<div class="tab_card_tab1" @click=tabCardClick(1) :class="[ this.tabCard == 1 ? 'tabCardStyle' : '' ]">人脸技术</div>
				<div class="tab_card_tab2" @click=tabCardClick(2) :class="[ this.tabCard == 2 ? 'tabCardStyle' : '' ]">拍照导购</div>
				<div class="tab_card_tab2" @click=tabCardClick(3) :class="[ this.tabCard == 3 ? 'tabCardStyle' : '' ]">虚拟试装</div>
				<div class="tab_card_tab3" @click=tabCardClick(4) :class="[ this.tabCard == 4 ? 'tabCardStyle' : '' ]">美颜美妆</div>
				<div class="tab_card_tab4" @click=tabCardClick(5) :class="[ this.tabCard == 5 ? 'tabCardStyle' : '' ]">驾驶安全</div>
				<!-- <div class="tab_card_tab5" @click=tabCardClick(6) :class="[ this.tabCard == 6 ? 'tabCardStyle' : '' ]">工业安全</div> -->
				<div class="tab_card_tab5" @click=tabCardClick(7) :class="[ this.tabCard == 7 ? 'tabCardStyle' : '' ]">AIoT产品</div>
			</div>
			<div class="tab_card_tab1_show inToTree" v-if="this.tabCard == 0">
				<div class="tab_card_tab1_show_1">
					<h3 class="tab_card_tab1_show_1_h3">智能鉴黄</h3>
					<img class="comImg" src="../../static/img/icon/identify.png" alt="">
					<p class="comP">通过深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行涉黄识别以及色情程度量化。</p>
					<div class="tb_btn"><a href="/imagesensor?scroll=tosensor&head_tab=1" target="_blank">在线体验</a></div>
				</div>
				<div class="tab_card_tab1_show_2">
					<h3 class="tab_card_tab1_show_1_h3">涉政识别</h3>
					<img class="comImg" src="../../static/img/icon/politics.png" alt="">
					<p class="comP">深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别政治人物，文字信息，敏感政治事件，政治场景鉴别。</p>
					<div class="tb_btn"><a href="/imagesensor?scroll=tosensor&head_tab=2" target="_blank">在线体验</a></div>
				</div>
				<div class="tab_card_tab1_show_3">
					<h3 class="tab_card_tab1_show_1_h3">暴恐识别</h3>
					<img class="comImg" src="../../static/img/icon/terris.png" alt="">
					<p class="comP">深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别暴力，血腥场景及恐怖组织头目，旗帜等涉嫌违禁鉴别。</p>
					<div class="tb_btn"><a href="/imagesensor?scroll=tosensor&head_tab=3" target="_blank">在线体验</a></div>
				</div>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 1">
				<div class="tab1_show_icon"></div>
				<p class="tab1_show_text">
					通过面部特征识别功能，抓取面部照片，提取特征值与身份证件信息进行数据比对识别。 识别准确率超过人眼精确度。通过活体检测技术有效防止照片及手机图像攻击，识别速度200毫秒内完成。
				</p>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 2">
				<div class="tab1_show_icon2"></div>
				<p class="tab1_show_text">
					基于高精度的图像识别算法，快速识别物体。连接Taobao、JD等电商平台商品数据库进行数据比对，匹配商品类目详情。搜索出最热门的店铺购买链接，呈现给用户。
				</p>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 3">
				<div class="tab1_show_icon3"></div>
				<p class="tab1_show_text">
					基于人工智能深度学习视觉算法，百亿级海量数据，精心打造产品拍照试衣解决方案。通过图像分割技术准确识别拍照图片的身体姿态区域，匹配所选择的服饰，实时展现试衣效果。
				</p>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 4">
				<div class="tab1_show_icon4"></div>
				<p class="tab1_show_text">
					基于AI图像分割算法，提取高精度的人脸关键点，精准分割出五官轮廓，进行精细处理， 按品牌及色号进行各类化妆产品选择，实现贴合脸型的智能美妆效果，并导流所选产品链接至商品网页。
				</p>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 5">
				<div class="tab1_show_icon5"></div>
				<p class="tab1_show_text" style="margin-right:125px;">
					DMS驾驶员监控系统是基于机器视觉技术深度学习，自主研发神经网络模型，准确对驾驶员眼部、面部、头部等表情或动作进行精准识别，识别驾驶员身份异常事件， 实时监控驾驶员体态面部变化，检测不安全行为。
				</p>
				<div class="tab1_show_icon5_2"></div>
				<p class="tab1_show_text">
					ADAS驾驶辅助系统是基于机器视觉技术深度学习，自主研发神经网络模型，智能检测前方道路的障碍物，识别潜在碰撞危险，智能检测车距，车道偏离，并对驾驶员发出预警，预防碰撞事故。
				</p>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 6">
				<div class="tab1_show_icon6"></div>
				<p class="tab1_show_text">
					基于深度学习神经网络技术，实现对建筑工地、石化、电力等高危行业生产区域人员活动与是否佩戴安全帽进行实时分析识别、跟踪，对未佩戴安全帽的危险行为实时预警。
				</p>
			</div>
			<div class="tab_card_tab1_show" v-if="this.tabCard == 7">
				<div class="tab1_show_icon7"></div>
				<p class="tab1_show_text">
					提供一个硬件和软件结合、设备和设备联动、用户和设备互动的智能平台，让用户和设备互联互通。
				</p>
			</div>
		</div>
		<div class="virtue" id="product">
			<p class="virtue_product">产品优势</p>
			<div class="virtue_list">
				<div>
					<div class="virtue_list_icon1 virtue_list_com"></div>
					<p class="virtue_list_p">时效优势</p>
					<p class="virtue_list_p2">在本地对图片、视频等内容进行实时审查，无网络传输延时。</p>
				</div>
				<div>
					<div class="virtue_list_icon2 virtue_list_com"></div>
					<p class="virtue_list_p">成本优势</p>
					<p class="virtue_list_p2">节省数据二次上传所需要的带宽成本。提供本地服务部署专用的低成本高效率AI算力。</p>
				</div>
				<div>
					<div class="virtue_list_icon3 virtue_list_com"></div>
					<p class="virtue_list_p">安全优势</p>
					<p class="virtue_list_p2">避免数据泄露，数据不需要外传到第三方的内容审查服务器。</p>
				</div>
			</div>
		</div>
		<div class="partner" id="partner">
			<p>战略合作伙伴</p>
			<div class="partner_icon1">
				<div style="height:214px;">
					<img src="../../static/img/partnerIcon/yiyat5.png" alt="怡亚通">
					<p style="margin-top:20px;">深圳市怡亚通供应链股份有限公司（简称“怡亚通”）成立于1997年，是中国第一家上市供应链企业（股票代码002183），构建遍布中国380个主要城市及东南亚、美国等10多个主要国家的服务网络，业务领域覆盖快消、IT、通讯、医疗等20多个领域。</p>
				</div>
				<div style="height:214px;">
					<img src="../../static/img/partnerIcon/xinglian6.png" alt="星链">
					<p>深圳市星链电子商务有限公司（简称：星链）成立于2015年，是上市企业怡亚通（股票：002183）旗下的互联网企业，致力于“重塑商品流通产业，构建万亿级共享经济平台”，创新融合“供应链+互联网+区块链思维”模式，倾力打造“S2B2C共享（供应链云）经济平台”——星链友店。</p>
				</div>
				<div style="height:214px;">
					<img src="../../static/img/partnerIcon/jishijiao1.png" alt="极视角">
					<p>深圳极视角科技有限公司（Extreme Vision）成立于2015年，总部设于中国深圳，是国内首家视觉算法平台。长期致力于开拓人工智能在不同行业及领域的开发与应用，旨在为企业提供最丰富的人工智能算法及解决方案。</p>
				</div>
				<div style="height:214px;">
					<img src="../../static/img/partnerIcon/wote18.png" alt="沃特沃德">
					<p>沃特沃德集团，成立于2009年，全球领先的智能终端全方位解决方案提供商，国家级高新技术企业，产品涵盖移动通讯、智能穿戴、智能家居、汽车电子、物联网、卫星通信移动终端等消费电子产品，以及大数据、云平台等服务。</p>
				</div>
				<div style="height:214px;">
					<img src="../../static/img/partnerIcon/yuan_family.png" alt="元社区">
					<p>元社区为国内价值互联网分布式治理社区的先行者，在全球拥有186个分社区，目前拥有10万线下高净值会员，以建设人工智能及区块链产业生态为入口，运用人工智能及区块链技术及思维，分布式管理运营学习及投资类社群，构建生态合作式孵化平台，提供可信数据及运营模式解决方案，推动实体流通和商业应用。</p>
				</div>
			</div>
		</div>
		<div class="company">
			<p class="partner_tittle">合作企业</p>
			<div class="partner_icon">
				<div>
					<img src="../../static/img/partnerIcon/logo_top3.png" alt="INVENA">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/weipin4.png" alt="唯品会">
				</div>
				
				<div>
					<img src="../../static/img/partnerIcon/caihong2.png" alt="彩虹无线">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/red7.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/JLQ8.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/didi9.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/senguok10.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/shenglu11.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/abup12.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/landun13.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/sichuan14.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/hezheng15.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/api16.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/padbot17.png" alt="">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/wosi.png" alt="沃思天地">
				</div>
				<div>
					<img src="../../static/img/partnerIcon/youhao.png" alt="友浩车联网">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Carousel from './Carousel.vue'
	
	export default{
		data : function(){
			return {
				activeName: "first",
				tab:1,
				tabCard:0,
				toUrl:'/imagesensor?scroll=tosensor'
			}
		},
		methods: {
			tonextpage(val){
				if(val == 1){
					// 人证合一
					window.open('/faceID', '_blank')
				}else if(val == 2){
					// 人脸识别
					window.open('/faceRecnitn', '_blank')
				}else if(val == 3){
					// 图像审核
					window.open('/imagesensor', '_blank')
				}else if(val == 4){
					// 视频审核
					window.open('/videosensor', '_blank')
				}else if(val == 5){
					//拍照导购
					window.open('/snapshop', '_blank')
				}else if(val == 6){
					// 虚拟试装
					window.open('/vrfitting', '_blank')
				}else if(val == 7){
					// 美颜美妆
					window.open('/facemakeup', '_blank')
				}else if(val == 8){
					// 疲劳驾驶
					window.open('/DMS', '_blank')
				}
			},
			tabChange(val){
				// this.tab = val
			},
			tabCardClick(val){
				this.tabCard = val
			}
		},
		created : function(){
		},
		components : {
			carousel : Carousel
		},
		mounted : function(){
			
		}
	};
</script>
<style scoped>

	.logoAction_2, .logoAction_5{
		/*animation (动画) :绑定选择器, 4s完成动画 linear(匀速) infinite(循环) */
		animation: que 60s linear infinite;
	}
	.logoAction_3, .logoAction_4{
		animation: que2 60s linear infinite;
	}
	.logoAction_6{
		animation: que 12s linear infinite;
	}
	.logo_img{
		display: flex;
		justify-content: center;
		align-items: center
	}
	.logoAction{
		width: 580px;
		height: 580px;
		position: relative;
	}
	.logoAction>img{
		position: absolute;
	}
	.logoAction_1{
		height: 130%;
		width: 130%;
		border-radius: 50%;
		position: absolute;
		left: -99px;
		top: -83px;
		z-index: 2;
		/* animation: que2 60s linear infinite; */
	}
	.logoAction_1>li{
		width: 56px;
		height: 79px;
		position: absolute;
		left: 363px;
		transform-origin:center 374px;
		-ms-transform-origin:center 374px;
		-webkit-transform-origin:center 374px;
		-moz-transform-origin:center 374px;
		-o-transform-origin:center 374px;
	}
	.logoAction_1>li>img{
		cursor: pointer;
		width: 56px;
		height: 79px;
	}
	.logo_icon01>img:hover{
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
		/* background-color: #3E88F1 */
	}
	.logo_icon02>img:hover{
		-webkit-transform: scale(1.2) rotate(-45deg);
		transform: scale(1.2) rotate(-45deg);
	}
	.logo_icon03>img:hover{
		-webkit-transform: scale(1.2) rotate(-90deg);
		transform: scale(1.2) rotate(-90deg);
	}
	.logo_icon04>img:hover{
		-webkit-transform: scale(1.2) rotate(-135deg);
		transform: scale(1.2) rotate(-135deg);
	}
	.logo_icon05>img:hover{
		-webkit-transform: scale(1.2) rotate(-180deg);
		transform: scale(1.2) rotate(-180deg);
	}
	.logo_icon06>img:hover{
		-webkit-transform: scale(1.2) rotate(-225deg);
		transform: scale(1.2) rotate(-225deg);
	}
	.logo_icon07>img:hover{
		-webkit-transform: scale(1.2) rotate(-270deg);
		transform: scale(1.2) rotate(-270deg);
	}
	.logo_icon08>img:hover{
		-webkit-transform: scale(1.2) rotate(-315deg);
		transform: scale(1.2) rotate(-315deg);
	}
	/* .logo_icon09>img:hover{
		background: url("../../static/img/logoAction/logo_icon019.png") no-repeat center;
		background-size: 100% 100%;
	}
	.logo_icon10>img:hover{
		background: url("../../static/img/logoAction/logo_icon20.png") no-repeat center;
		background-size: 100% 100%;
	} */
	.logo_icon01{
		transform:rotate(0deg);
		-ms-transform:rotate(0deg); 	/* IE 9 */
		-moz-transform:rotate(0deg); 	/* Firefox */
		-webkit-transform:rotate(0deg); /* Safari 和 Chrome */
		-o-transform:rotate(0deg); 	/* Opera */
	}
	.logo_icon02{
		transform:rotate(45deg);
		-ms-transform:rotate(45deg); 	/* IE 9 */
		-moz-transform:rotate(45deg); 	/* Firefox */
		-webkit-transform:rotate(45deg); /* Safari 和 Chrome */
		-o-transform:rotate(45deg); 	/* Opera */
	}
	.logo_icon02>img{
		transform:rotate(-45deg);
		-ms-transform:rotate(-45deg); 	/* IE 9 */
		-moz-transform:rotate(-45deg); 	/* Firefox */
		-webkit-transform:rotate(-45deg); /* Safari 和 Chrome */
		-o-transform:rotate(-45deg); 	/* Opera */
	}
	.logo_icon03{
		transform:rotate(90deg);
		-ms-transform:rotate(90deg); 	/* IE 9 */
		-moz-transform:rotate(90deg); 	/* Firefox */
		-webkit-transform:rotate(90deg); /* Safari 和 Chrome */
		-o-transform:rotate(90deg); 	/* Opera */
	}
	.logo_icon03>img{
		transform:rotate(-90deg);
		-ms-transform:rotate(-90deg); 	/* IE 9 */
		-moz-transform:rotate(-90deg); 	/* Firefox */
		-webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
		-o-transform:rotate(-90deg); 	/* Opera */
	}
	.logo_icon04{
		transform:rotate(135deg);
		-ms-transform:rotate(135deg); 	/* IE 9 */
		-moz-transform:rotate(135deg); 	/* Firefox */
		-webkit-transform:rotate(135deg); /* Safari 和 Chrome */
		-o-transform:rotate(135deg); 	/* Opera */
	}
	.logo_icon04>img{
		transform:rotate(-135deg);
		-ms-transform:rotate(-135deg); 	/* IE 9 */
		-moz-transform:rotate(-135deg); 	/* Firefox */
		-webkit-transform:rotate(-135deg); /* Safari 和 Chrome */
		-o-transform:rotate(-135deg); 	/* Opera */
	}
	.logo_icon05{
		transform:rotate(180deg);
		-ms-transform:rotate(180deg); 	/* IE 9 */
		-moz-transform:rotate(180deg); 	/* Firefox */
		-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
		-o-transform:rotate(180deg); 	/* Opera */
	}
	.logo_icon05>img{
		transform:rotate(-180deg);
		-ms-transform:rotate(-180deg); 	/* IE 9 */
		-moz-transform:rotate(-180deg); 	/* Firefox */
		-webkit-transform:rotate(-180deg); /* Safari 和 Chrome */
		-o-transform:rotate(-180deg); 	/* Opera */
	}
	.logo_icon06{
		transform:rotate(225deg);
		-ms-transform:rotate(225deg); 	/* IE 9 */
		-moz-transform:rotate(225deg); 	/* Firefox */
		-webkit-transform:rotate(225deg); /* Safari 和 Chrome */
		-o-transform:rotate(225deg); 	/* Opera */
	}
	.logo_icon06>img{
		transform:rotate(-225deg);
		-ms-transform:rotate(-225deg); 	/* IE 9 */
		-moz-transform:rotate(-225deg); 	/* Firefox */
		-webkit-transform:rotate(-225deg); /* Safari 和 Chrome */
		-o-transform:rotate(-225deg); 	/* Opera */
	}
	.logo_icon07{
		transform:rotate(270deg);
		-ms-transform:rotate(270deg); 	/* IE 9 */
		-moz-transform:rotate(270deg); 	/* Firefox */
		-webkit-transform:rotate(270deg); /* Safari 和 Chrome */
		-o-transform:rotate(270deg); 	/* Opera */
	}
	.logo_icon07>img{
		transform:rotate(-270deg);
		-ms-transform:rotate(-270deg); 	/* IE 9 */
		-moz-transform:rotate(-270deg); 	/* Firefox */
		-webkit-transform:rotate(-270deg); /* Safari 和 Chrome */
		-o-transform:rotate(-270deg); 	/* Opera */
	}
	.logo_icon08{
		transform:rotate(315deg);
		-ms-transform:rotate(315deg); 	/* IE 9 */
		-moz-transform:rotate(315deg); 	/* Firefox */
		-webkit-transform:rotate(315deg); /* Safari 和 Chrome */
		-o-transform:rotate(315deg); 	/* Opera */
	}
	.logo_icon08>img{
		transform:rotate(-315deg);
		-ms-transform:rotate(-315deg); 	/* IE 9 */
		-moz-transform:rotate(-315deg); 	/* Firefox */
		-webkit-transform:rotate(-315deg); /* Safari 和 Chrome */
		-o-transform:rotate(-315deg); 	/* Opera */
	}
	.logoAction_3{
		left: 41px;
		top: 40px;
	}
	.logoAction_4{
		left: 140px;
		top: 139px;
	}
	.logoAction_5{
		left: 59px;
		top: 58px;
	}
	.logoAction_6{
		left: 157px;
		top: 156px;
	}
	.logoAction_tittle{
		position: absolute;
		left: 35%;
		top: 48%;
		width: 195px;
		height: 30px;
		background: url("../../static/img/logoAction/TEE_Vision.png") no-repeat center;
		background-size: 100% 100%;
	}
	/*animation (动画) :绑定选择器, 4s完成动画 linear(匀速) infinite(循环) */
	@keyframes que {
        /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
        0%{
            /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(-360deg);
        }
	}
	@keyframes que2 {
        /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
        0%{
            /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
	}
	/* .logoAction_text{
		position: absolute;
		left: 172px;
		top: 254px;
		color: #fff;
	}
	.logoAction_text>p:nth-child(1){
		font-weight: 600;
		font-size: 20px;
		text-align: center;
		margin-bottom: 20px;
	}
	.logoAction_text>p:nth-child(2){
		font-size: 16px;
		text-align: center;
		margin-bottom: 20px;
	}
	.logoAction_text>p:nth-child(3){
		text-align: center;
	} */
	.pageContent{
		width: 100%;
		/* height: 884px; */
		background-color: #fff;
		margin: 30px auto;
		margin-top: 0;
	}
	/* .contentA{
		width:1200px;
		height:320px;
		border:1px solid #999;
		margin-top:17px;
	} */
	.background_img{
		width: 100%;
		margin-top: 60px;
		height: 800px;
		position: relative;
	}
	.logo_img{
		width: 100%;
		min-width: 1120px;
		height: 100%;
		background: url("../../static/img/background.png");
		background-size: 100% 100%;
	}
	/* .logoAction{
		position: absolute;
		left: 34.5%;
		top: 14%;
	} */
	.toDemo{
		margin-top: 62px;
		text-align: center
	}
	.toDemo a{
		color: #406EFF;
	}
	.introduce_h3{
		font-size: 20px;
		text-align: center;
		color: #000;
		font-weight: 500;
		margin-top: 50px;
		
	}
	.introduce_head{
		width: 100%;
		height: 80px;
		background-color: #fff;
		box-shadow:0px 5px 20px 0px rgba(62,136,241,0.05);
		display: flex;
		justify-content: center;
		line-height: 80px;
	}
	.introduce_head>div{
		float: left;
		margin: 0 50px;
		height: 100%;
		
	}
	.introduce_head>div:hover{
		cursor: pointer;
		color: #3E88F1;
	}
	/* .tabStyle{
		color: #3E88F1;
		border-bottom: 2px solid #3E88F1;
	} */
	.introduce_head_1{
		margin-top: 2px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.introduce_head_1_ul{
		display: flex;
		justify-content: center;
		color: #000;
		width: 100%;
	}
	.introduce_head_1_h3{
		font-size: 22px;
		font-weight: 400;
		color: #000;
		margin: 50px 0;
	}
	.introduce_head_1_ul li{
		margin: 0 100px;
		width: 300px;
	}
	.introduce_head_1_ul_com{
		margin-bottom: 40px;
		font-size: 18px;
		font-weight: 400;
		text-align: center;
	}
	.introduce_icon_com{
		width: 100px;
		height: 100px;
		background-size: cover;
		margin: 0 auto;
		margin-bottom: 36px;
	}
	.introduce_head_text{
		color: #777777;
		font-size: 16px;
		padding-left: 5px;
	}
	.tab_card{
		margin-top: 40px;
	}
	.tab_card_tab{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: center;
		text-align: center;
		line-height: 80px;
	}
	.tab_card_tab>div{
		float: left;
		width: 195px;
		height: 100%;
		cursor: pointer;
	}
	.tabCardStyle{
		background-color: #3E88F1;
		color: #fff;
	}
	.tab_card_tab1_show{
		width: 100%;
		height: 320px;
		background-color: #3E88F1;
		/* background-color: #1A2849; */
		display: flex;
		justify-content: center;
		color: #fff;
	}
	.inToTree> div{
		width: 300px;
		margin: 0 40px;
		font-size: 12px;
		display: flex;
		flex-direction: column;
	}
	.comImg{
		width: 75px;
		height: 75px;
		margin: 0 auto;
		margin-bottom: 30px;
	}
	.comP{
		width: 266px;
		margin: 0 auto;
		line-height: 18px;
	}
	.tb_btn{
		width: 132px;
		height: 38px;
		background-color: #fff;
		color: #3E88F1;
		border-radius: 4px;
		text-align: center;
		margin: 0 auto;
		margin-top: 30px;
		line-height: 38px;
		cursor: pointer;
	}
	.tb_btn>a{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.tab_card_tab1_show_1_h3{
		margin: 25px 0 30px 0;
		text-align: center;
		font-size: 16px;
	}
	/* .introduce_head_icon1{
		background: url("../../static/img/icon/identify.png");
	}
	.introduce_head_icon2{
		background: url("../../static/img/icon/politics.png");
	}
	.introduce_head_icon3{
		background: url("../../static/img/icon/terris.png");
	} */
	.tab1_show_icon{
		width: 72px;
		height: 75px;
		background: url("../../static/img/icon/tabCardIcon.png");
		background-size: cover;
		margin-top: 100px;
	}
	.tab1_show_icon2{
		width: 81px;
		height: 71px;
		background: url("../../static/img/icon/tabCardIcon2.png");
		background-size: cover;
		margin-top: 106px;
	}
	.tab1_show_icon3{
		width: 68px;
		height: 87px;
		background: url("../../static/img/icon/AI_cloth.png");
		background-size: cover;
		margin-top: 94px;
	}
	/* .tab1_show_icon3{
		width: 30px;
		height: 85px;
		background: url("../../static/img/icon/tabCardIcon3.png");
		background-size: cover;
		margin-top: 115px;
	} */
	.tab1_show_icon4{
		width: 73px;
		height: 71px;
		background: url("../../static/img/icon/tabCardIcon4.png");
		background-size: cover;
		margin-top: 115px;
	}
	.tab1_show_icon5{
		width: 70px;
		height: 70px;
		background: url("../../static/img/icon/tabCardIcon5.png");
		background-size: cover;
		margin-top: 115px;
	}
	.tab1_show_icon5_2{
		width: 70px;
		height: 70px;
		background: url("../../static/img/icon/tabCardIcon5_2.png");
		background-size: cover;
		margin-top: 115px;
	}
	.tab1_show_icon6{
		width: 69px;
		height: 70px;
		background: url("../../static/img/icon/tabCardIcon6.png");
		background-size: cover;
		margin-top: 102px;
	}
	.tab1_show_icon7{
		width: 88px;
		height: 70px;
		background: url("../../static/img/icon/tabCardIcon7.png");
		background-size: cover;
		margin-top: 90px;
	}
	.tab1_show_text{
		width: 280px;
		line-height: 22px;
		color: #fff;
		margin: 95px 0 0 34px;
		font-size: 14px;
	}
	.virtue{
		width: 100%;
		height: 280px;
		padding-top: 50px;
	}
	.virtue_product{
		text-align: center;
		font-size: 25px;
	}
	.virtue_list{
		display: flex;
		justify-content: center;
	}
	.virtue_list_icon1{
		background: url("../../static/img/icon/virtue_list_icon1.png");
	}
	.virtue_list_icon2{
		background: url("../../static/img/icon/virtue_list_icon2.png");
	}
	.virtue_list_com{
		width: 50px;
		height: 50px;
		background-size: cover;
		margin: 0 auto;
		margin-top: 30px;
	}
	.virtue_list_icon3{
		background: url("../../static/img/icon/virtue_list_icon3.png");
		width: 43px;
		background-size: cover;
	}
	.virtue_list>div{
		width: 260px;
		margin: 0 30px;
	}
	.virtue_list_p{
		margin: 40px 0 28px 0;
		color: #000;
		font-size: 19px;
		text-align: center;
	}
	.virtue_list_p2{
		color: #777;
		font-size: 14px;
	}
	.partner{
		margin-top: 80px;
	}
	.partner>p, .company>p{
		text-align: center;
		font-size: 25px;
		color: #000;
		margin-bottom: 50px;
	}
	.partner_icon1>div{
		width: 245px;
		height: 45px;
		display: inline-block;
		margin: 30px 50px;
		text-align: center;
	}
	.partner_icon>div{
		display: inline-block;
		margin: 30px 50px;
	}
	.partner_icon{
		padding-left: 15%;
	}
	.partner_icon1{
		padding-left: 5%;
	}
	.partner_icon p, .partner_icon1 p{
		font-size: 14px;
		color: #777777;
		text-align: left;
		height: 150px;
		overflow: hidden;
		margin-top: 20px;
	}
	.partner_tittle{
		margin-top: 20px;
	}
	@media screen and (max-width: 1680px) {
		
	}
	@media screen and (max-width: 1480px) {
		
	}
	@media screen and (max-width: 1280px) {
		
	}
	@media screen and (max-width: 980px) {
		.logo_img {
			min-width: 950px;
			height: 759px;
		}
		.background_img{
			height: 759px;
		}
		.introduce_head_1_ul li{
			margin-right: 0;
			margin-left: 16px;
		}
		.introduce_icon_com{
			margin-left: 70px;
		}
		.partner_icon1{
			padding-left: 15%;
		}
	}
</style>