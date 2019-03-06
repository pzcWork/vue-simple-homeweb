<template>
    <div class="AIrouter_page">
        <div class="AIrouter_banner comon_banner">
            <p class="AIrouter_banner_p1">TEE<span>绿盾</span>路由器</p>
            <p class="AIrouter_banner_p2">TEE绿盾路由器，内置AI专用NPU神经网络处理芯片。基于人工智能深度学习技术，</p>
            <p class="AIrouter_banner_p3">定制网络内容审查算法模型，智能过滤涉黄、涉暴恐、涉政治敏感内容，构建绿色健康的网络环境。</p>
        </div>
        <div class="AIrouter_envir envirTittle">
            <p class="en_comP">构建绿色网络环境</p>
            <div class="AIrouter_envir_con">
                
            </div>
        </div>
        <div class="AIrouter_carousel envirTittle">
            <p class="en_comP">匠心倾注 考究工艺彰显科技魅力</p>
            <div class="AIrouter_carousel_con">
                <div class="AIrouter_carousel_out">
                    <carousel :dataArrBJ="dataArrRouter" :heightPan=800></carousel>
                </div>
            </div>
        </div>
        <div class="AIrouter_app envirTittle">
            <p class="en_comP">专属APP应用 使用无门槛</p>
            <p style="text-align:center;color:#333;margin-bottom:30px;">拥有手机端的专门应用，通过手机简单几步，就可直接连接操控。</p>
            <div class="AIrouter_app_con">
                <div class="AIrouter_app_c">
                    <div v-for="(item, index) in appIcon" :key="index" class="app_item">
                        <img :src="item.pic" alt="">
                        <p class="app_item_p">{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="AIrouter_in envirTittle">
            <p class="en_comP" style="margin-bottom:0;">高性能天线&nbsp;&nbsp;&nbsp;信号穿墙&nbsp;&nbsp;&nbsp;覆盖更广</p>
            <div class="AIrouter_in_con">
                
            </div>
            <p class="AIrouter_in_footer">办公组网，家庭路由的行家之选。采用的WHEMS天线支持最新MIMO技术。抛弃了传统天线无针对、越远越弱的信号传播弊端，实现了WIFI直接向使用端针对性靶向发射。在同样环境下，保证用户拥有更强的穿墙能力和高速数据传输能力。不仅如此，同一机体还大手笔内置四根如此高性能的WHEMS天线，让您玩游戏看视频彻底告别卡顿坏体验。</p>
        </div>
        <div class="AIrouter_parameter envirTittle">
            <p class="en_comP">参数规格</p>
            <div class="AIrouter_parameter_con">
                <table class="AIrouter_parameter_table">
                    <tr>
                        <td>外观</td>
                        <td><img class="table_img" src="../../../static/img/AIdemo/router_table.png" alt=""></td>
                    </tr>
                    <tr>
                        <td>路由器技术规格</td>
                        <td>
                            <p>• 支持IEEE 802.11a/b/g/n/ac</p>
                            <p>• 2.4GHz + 5GHz 双频段</p>
                            <p>• 1200MB无线传输带宽</p>
                            <p>• 512MB内存</p>
                            <p>• 2Gbps NAT 硬件加速</p>
                            <p>• IPV4/IPV6网络协议</p>
                            <p>• 内置宽频高增益 WHEMS©天线</p>
                            <p>• 支持波束成型</p>
                            <p>• QoS 智能流量控制</p>
                            <p>• WDS/WPS 2.0</p>
                        </td>
                    </tr>
                    <tr>
                        <td>AI技术规格</td>
                        <td>
                            <p>• APiM 架构（存储内运算）</p>
                            <p>• 支持专用浮点运算</p>
                            <p>• 28纳米制造工艺</p>
                            <p>• 单芯片集成高达 28,000个运算单元</p>
                            <p>• 卷积运算性能2.8TOPS（每秒近3万亿次运算）</p>
                            <p>• 峰值运算能力 5.6TOPS （每秒5.6万亿次运算）</p>
                            <p>• 峰值计算最大功耗300mW</p>
                            <p>• 能耗效率高达9.3TOPS/W（每瓦9万亿次运算）</p>
                        </td>
                    </tr>
                    <tr>
                        <td>接口规格</td>
                        <td>
                            <p>• 一个1000兆WAN口</p>
                            <p>• 一个1000兆LAN口</p>
                            <p>• 一个高速USB2.0接口</p>
                            <p>• 电源 DC12V，1.5A</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Carousel from '../../components/Carousel.vue'
export default {
    data(){
        return {
            dataArrRouter:[{
                "pic" : "../../static/img/carouselPic/router01.png",
                "textIntro" : "在完美提供了人体舒适感的同时，小巧适手的体积也能适用于不同的使用空间环境。"
            },{
                "pic" : "../../static/img/carouselPic/router02.png",
                "textIntro" : "倾注匠心打造的考究机体，每一面都是传统工艺和现代科技的魅力结合。钻石级打磨工艺，采用38度弧度切割技艺打造的方形圆边外观，在尽显质感典雅、高级倍现之余兼备实用性能。"
            },{
                "pic" : "../../static/img/carouselPic/router03.png",
                "textIntro" : "高度70.5mm，长宽122.7mm的体积构造，是通过12次实验室计算后确定的最优比例，完美地符合了人体工程力学原理。"
            },{
                "pic" : "../../static/img/carouselPic/router04.png",
                "textIntro" : "机身采用的高科技环保阻燃材料，则实现了在0.8毫米的轻薄厚度下，机体外壳还拥有强大的散热力和坚固的硬度。"
            },{
                "pic" : "../../static/img/carouselPic/router05.png",
                "textIntro" : "机体内贴心装配静音散热风扇，在机身两侧有12条散热风口，完美解决机身的发热问题。可在保障机身稳定性的同时，还能获得更强的性能，承载长时间高负载下不间断的稳定工作。"
            }],
            appIcon: [
                {
                  "pic" : "../../static/img/icon/app01.png",
                   "text" : "远程管理"
                },
                {
                  "pic" : "../../static/img/icon/app02.png",
                   "text" : "联网设置"
                },
                {
                  "pic" : "../../static/img/icon/app03.png",
                   "text" : "设备限速"
                },
                {
                  "pic" : "../../static/img/icon/app04.png",
                   "text" : "绿色上网"
                },
                {
                  "pic" : "../../static/img/icon/app05.png",
                   "text" : "蹭网保护"
                },
                {
                  "pic" : "../../static/img/icon/app06.png",
                   "text" : "安全管理"
                },
                {
                  "pic" : "../../static/img/icon/app07.png",
                   "text" : "黑白名单"
                },
                {
                  "pic" : "../../static/img/icon/app08.png",
                   "text" : "访客Wi-Fi"
                }
            ]
        }
    },
    components : {
		carousel : Carousel
	}
}
</script>
<style>
.AIrouter_page{
    margin-top: 60px;
}
.AIrouter_banner{
    background: url("../../../static/img/banner/router_banner.png") no-repeat center;
    justify-content: inherit;
}
.AIrouter_banner_p1{
    color: #333;
    font-size: 36px;
    margin-top: 70px;
}
.AIrouter_banner_p1>span{
    color: #1CC10B;
}
.AIrouter_banner_p2, .AIrouter_banner_p3{
    color: #555;
    margin-top: 35px;
    width: 610px;
}
.AIrouter_banner_p3{
    width: 704px;
    margin-top: 15px;
}
.AIrouter_envir_con{
    width: 100%;
    height: 1115px;
    background: url("../../../static/img/AIdemo/AIrouter_envir.png") no-repeat center;
    background-size: contain;
}
.AIrouter_carousel_con{
    width: 100%;
    display: flex;
    justify-content: center;
}
.AIrouter_carousel_out{
    width: 1200px;
    height: 800px;
}
.AIrouter_app_con{

}
.AIrouter_app_c{
    margin: 0 auto;
    width: 800px;
}
.app_item{
    display: inline-block;
    margin: 30px 50px;
}
.app_item_p{
    text-align: center;
    font-size: 14px;
    margin: 30px 0;
}
.AIrouter_in_con{
    width: 100%;
    height: 941px;
    background: url("../../../static/img/AIdemo/router_introduce.png") no-repeat center;
    background-size: contain;
}
.AIrouter_in_footer{
    width: 54%;
    margin: 0 auto;
    line-height: 25px;
    margin-top: 50px;
    color: #333;
}
.AIrouter_parameter_con{
    display: flex;
    justify-content: center;
}
.AIrouter_parameter_table>tr>td{
    border: 1px solid #999;
}
.AIrouter_parameter_table>tr>td:first-child{
    width: 180px;
    text-align: center;
}
.AIrouter_parameter_table>tr>td:nth-child(2){
    width: 800px;
    color: #777;
    font-size: 14px;
    line-height: 25px;
}
.AIrouter_parameter_table>tr>td:nth-child(2){
    padding: 30px 0 30px 70px;
}
.AIrouter_parameter_table>tr:first-child>td{
    padding: 0;
}
.table_img{
    margin: 25px 0 0 25px;
}
@media screen and (max-width: 980px) {
	.AIrouter_envir_con{
        width: 85%;
        margin: 0 auto;
    }
    .AIrouter_carousel_out{
        width: 98%;
        margin: 0 auto;
    }
}
</style>


