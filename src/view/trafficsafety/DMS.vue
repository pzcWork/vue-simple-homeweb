<template>
    <div class="pilotMode_page content_margin">
        <div class="pilotMode_banner comon_banner">
            <p>TEE 驾驶员状态监测系统</p>
            <p>Driver Monitoring System</p>
        </div>
        <p class="pilotMode_banner_fo">DMS驾驶员监控系统是基于机器视觉技术深度学习，自主研发神经网络模型，准确对驾驶员眼部、面部、头部等表情或动作进行精准识别，识别驾驶员身份异常事件， 实时监控驾驶员体态面部变化，检测不安全行为。</p>
        <div class="pilotMode_tagit envirTittle">
            <p class="en_comP" style="padding-top:40px;">目标检测</p>
            <div class="pilotMode_tagit_con">
                <div class="pilotMode_tagit_item">
                    <img src="../../../static/img/icon/pilotMode01.png" alt="疲劳驾驶">

                    <p>疲劳驾驶</p>
                    <div>
                        <p>&#8226; &nbsp;打哈欠</p>
                        <p>&#8226; &nbsp;眨眼</p>
                        <p>&#8226; &nbsp;点头</p>
                    </div>
                </div>
                <div class="pilotMode_tagit_item">
                    <img src="../../../static/img/icon/pilotMode02.png" alt="分神驾驶">
                    <p>分神驾驶</p>
                    <div>
                        <p>&#8226;&nbsp;左顾右盼</p>
                        <p>&#8226;&nbsp;长时间目视不在前方</p>
                    </div>
                </div>
                <div class="pilotMode_tagit_item">
                    <img src="../../../static/img/icon/pilotMode03.png" alt="不规范驾驶">
                    <p>疲劳驾驶</p>
                    <div>
                        <p>&#8226;&nbsp;双手同时脱离方向盘</p>
                        <p>&#8226;&nbsp;驾驶员离开座位</p>
                        <p>&#8226;&nbsp;接打手机</p>
                        <p>&#8226;&nbsp;抽烟</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pilotMode_area envirTittle">
            <p class="en_comP">适用场景</p>
            <div class="pilotMode_area_con">
                <div class="pilotMode_area_icon">
                    <img src="../../../static/img/icon/pilotModeArea01.png" alt="白天">
                    <img src="../../../static/img/icon/pilotModeArea02.png" alt="夜晚">
                    <img src="../../../static/img/icon/pilotModeArea03.png" alt="顺光">
                    <img src="../../../static/img/icon/pilotModeArea04.png" alt="逆光">
                </div>
                <p class="pilotMode_area_p1">系统能够在白天、夜晚、顺光、逆光全部工况环境运行。</p>
                <div class="pilotMode_area_icon2">
                    <img src="../../../static/img/icon/pilotModeArea05.png" alt="帽子">
                    <img src="../../../static/img/icon/pilotModeArea06.png" alt="口罩">
                    <img src="../../../static/img/icon/pilotModeArea07.png" alt="墨镜">
                </div>
                <p class="pilotMode_area_p2">在驾驶员戴口罩、帽子、墨镜的情况下发生闭眼情况，系统能够正常识别，发出预警。</p>
            </div>
        </div>
        <div class="pilotMode_tech envirTittle">
            <p class="en_comP">技术优势</p>
            <div class="pilotMode_tech_con">
                <div>
                    <img src="../../../static/img/icon/pilotModeTech01.png" alt="面部扫描">
                    <p>自主研发机器视觉技术，神经网络深度学习模型，复杂场景下与综合检测准确率指标优异。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/pilotModeTech02.png" alt="后视">
                    <p>采用红外摄像头图像扑捉，在夜间、逆光等高挑战性光照环境下提供高品质的成像质量。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/pilotModeTech03.png" alt="正面">
                    <p>可以穿透墨镜镜片，被遮挡的眼部信息也能够正常成像，解决驾驶员眼镜反光问题。</p>
                </div>
            </div>
        </div>
        <div class="pilotMode_prop envirTittle">
            <p class="en_comP">性能指标</p>
            <div class="pilotMode_prop_con">

            </div>
            <p class="pilotMode_prop_p2" style="margin-top:30px;">符合 T/JSATL 13—2017《道路运输车辆主动安全智能防控系统终端技术规范》</p>
            <p class="pilotMode_prop_p2">基于海量数据样本，深度学习算法持续迭代优化，打造高性能低成本的DMS方案。</p>
        </div>
        <div class="pilotMode_impower envirTittle">
            <p class="en_comP" style="padding-top:40px;">驾驶员授权验证</p>
            <div class="pilotMode_impower_con">
                <p>
                    &#8226; 驾驶员面部特征识别功能，抓取面部照片，进行身份识别认证。
                </p>
                <p>&#8226; 若驾驶员面部特征不同，则产生驾驶员身份异常事件。</p>
                <p>&#8226; 识别准确率超过人眼精确度，识别速度200毫秒内完成。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.pilotMode_banner{
    background: url("../../../static/img/banner/pilotModeGif.gif") no-repeat center;
    width: 100%;
    height: 650px;
    background-size: 100% 600px;
    background-position: center bottom;
    background-color: #000;
    justify-content: flex-start;
}
.pilotMode_banner>p{
    color: #fff;
}
.pilotMode_banner>p:first-child{
    font-size: 30px;
    font-weight: 600;
    margin-top: 25px;
}
.pilotMode_banner>p:nth-child(2){
    font-size: 15px;
    margin: 6px 0 10px 0;
}
.pilotMode_banner_fo{
    width: 700px;
    font-size: 14px;
    margin: 0 auto;
    margin-top: -75px;
    color: #fff;
    line-height: 24px;
}
.pilotMode_tagit_con{
    display: flex;
    justify-content: center;
}
.pilotMode_tagit_con>div:nth-child(2){
    margin: 0 200px 0 217px;
}
.pilotMode_tagit_item{
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pilotMode_tagit_item>p{
    margin: 24px 0 10px 0;
    font-size: 20px;
    width: 100%;
    padding-left: 17px;
}
.pilotMode_tagit_item>div{
    width: 100%;
}
.pilotMode_tagit_item>div>p{
    font-size: 16px;
    line-height: 20px;
    line-height: 27px;
}
.pilotMode_tagit_item>img{
    margin-left: -64px;
}
.pilotMode_area_icon{
    display: flex;
    justify-content: center;
}
.pilotMode_area_icon>img{
    margin: 0 20px;
}
.pilotMode_area_icon2{
    display: flex;
    justify-content: center;
}
.pilotMode_area_icon2>img{
    margin: 0 20px;
}
.pilotMode_area_p1, .pilotMode_area_p2{
    text-align: center;
    margin: 14px 0 50px 0;
}
.pilotMode_tech_con{
    display: flex;
    justify-content: center;
}
.pilotMode_tech_con>div{
    width: 180px;
    margin: 0 100px;
}
.pilotMode_tech_con>div>p{
    font-size: 14px;
    margin-top: 30px;
    line-height: 20px;
}
.pilotMode_prop_con{
    background: url("../../../static/img/icon/pilotModeProp.png") no-repeat center;
    width: 883px;
    height: 500px;
    margin: 0 auto;
}
.pilotMode_prop_p2{
    width: 550px;
    margin: 0 auto;
    color: #777;
    font-size: 14px;
    line-height: 22px;
}
.pilotMode_impower{
    background: url("../../../static/img/icon/impowe.png") no-repeat center;
    height: 600px;
    position: relative;
    margin-bottom: 0 !important;
}
.pilotMode_impower_con{
    font-size: 14px;
    line-height: 22px;
    position: absolute;
    bottom: 55px;
    left: 40%;
}
@media screen and (max-width: 980px) {
    .pilotMode_banner{
        height: 620px;
    }
	.pilotMode_tech_con>div{
        margin: 0 75px;
    }
    .pilotMode_tagit_con>div:nth-child(2){
        margin: 0 125px;
    }
    .pilotMode_banner>p:first-child{
        margin-top: 40px;
    }
    .pilotMode_impower_con{
        left: 34%;
    }
}
</style>


