<template>
    <div class="faceRec_page content_margin">
        <div class="faceRec_banner comon_banner">
            <p>人脸识别</p>
            <p>基于深度学习的人脸识别方案，准确识别图片中的人脸信息，提供人脸属性识别、关键点定位、人脸1：1比对、人脸1：N识别、活体检测等能力。</p>
        </div>
        <div class="faceRec_tech envirTittle">
            <p class="en_comP">产品介绍</p>
            <div class="faceRec_tech_con">
                <p>人脸识别（Facial Recognition）是基于深度学习的面部分析技术，包括人脸检测与分析、五官定位、人脸比对与验证、人脸检索、活体检测等，可提供多样化的人脸识别和验证方案。TEE Vision人脸识别借助领先的人脸识别技术，可应用在刷脸门禁考勤、安防监控追逃、金融领域刷脸登录和支付、工业人脸闸机等场景，解决各行业的用户身份人脸确认等需求。</p>
            </div>
        </div>
        <div class="faceRec_char envirTittle">
            <p class="en_comP">产品特性</p>
            <div class="faceRec_char_con">
                <div>
                    <img src="../../../static/img/icon/faceRec_tech01.png" alt="">
                    <p>准确性高</p>
                    <p>精准定位图中人脸，获得眼、口、鼻等72个关键点位置，分析性别、年龄、表情等多种人脸属性特征。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/faceRec_tech02.png" alt="">
                    <p>稳定性强</p>
                    <p>人脸识别服务经过海量用户和复杂场景的验证，服务运行稳定，鲁棒性强，能够为用户提供可靠的识别。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/faceRec_tech03.png" alt="">
                    <p>算法领先</p>
                    <p>基于海量数据样本、深度神经网络等全面算法，并根据每种场景，训练优化模型，达到高性能低时延。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/faceRec_tech04.png" alt="">
                    <p>简单易用</p>
                    <p>除了可直接调用的全面的API 接口，还提供了丰富多样的SDK供开发者使用，服务使用简单易用，兼容性强。</p>
                </div>
            </div>
        </div>
        <div class="faceRec_area envirTittle">
            <p class="en_comP">应用场景</p>
            <div class="faceRec_area_con">
                <div>
                    <img src="../../../static/img/icon/faceRec_tech05.png" alt="">
                    <p>刷脸门禁考勤</p>
                    <p>通过人脸识别快速录入人脸信息，用户通行时只需刷脸即可完成身份验证。实现企业、商业、住宅等多场景的刷脸进门，提升安全性、效率和用户体验。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/faceRec_tech06.png" alt="">
                    <p>人脸登录</p>
                    <p>用户注册阶段录入人脸图片，在安全性要求较高的场景中启动人脸登录验证，提高安全性。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/faceRec_tech07.png" alt="">
                    <p>安防监控</p>
                    <p>在银行、机场、商场、市场等人流密集的公共场所对人群进行监控，实现人流自动统计、特定人物的自动识别和追踪。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.faceRec_banner{
    background: url("../../../static/img/banner/faceRec_banner.png") no-repeat center;
    background-size: 100% 600px;
}
.faceRec_banner>p{
    color: #fff;
}
.faceRec_banner>p:first-child{
    font-size: 30px;
    font-weight: 600;
    margin-top: -133px;
    margin-left: 58px;
}
.faceRec_banner>p:nth-child(2){
    font-size: 17px;
    margin: 32px 0 10px 125px;
    width: 570px;
    line-height: 27px;
}
.faceRec_tech{
    background-color: #F8F8F8;
    margin-top: 0;
    padding-top: 63px;
    padding-bottom: 100px;
}
.faceRec_tech_con{
    display: flex;
    justify-content: center;
    align-items: center;
}
.faceRec_tech_con>p{
    width: 800px;
    line-height: 24px;
    font-size: 14px;
    color: #777;
}
.faceRec_char_con{
    display: flex;
    justify-content: space-evenly;
}
.faceRec_char_con>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 268px;
    font-size: 14px;
}
.faceRec_char_con>div>p:nth-child(2){
    font-size: 16px;
    margin: 20px 0;
    font-weight: 600;
}
.faceRec_char_con>div>p:nth-child(3){
    line-height: 22px;
}
.faceRec_area{
    background-color: #F8F8F8;
    padding-bottom: 30px;
    margin-bottom: 0;
    padding-top: 50px;
}
.faceRec_area_con{
    display: flex;
    justify-content: center;
}
.faceRec_area_con>div{
    width: 370px;
    margin: 0 20px;
    height: 450px;
    background-color: #fff;
}
.faceRec_area_con>div>p:nth-child(2){
    text-align: center;
    margin: 20px 0;
    font-weight: 600;
}
.faceRec_area_con>div>p:nth-child(3){
    font-size: 14px;
    line-height: 22px;
    margin: 0 20px;
}
@media screen and (max-width: 1680px) {
    .faceRec_banner{
        background-size: 100% 525px;
    }
    .comon_banner {
        height: 525px;
    }
}
@media screen and (max-width: 1440px) {
    .faceRec_banner{
        background-size: 100% 450px;
    }
    .comon_banner {
        height: 450px;
    }
}
@media screen and (max-width: 1200px) {
    .faceRec_area_con>div{
        width: 240px;
        height: 325px;
    }
    .faceRec_area_con>div>img{
        width: 240px;
    }
    .faceRec_char_con>div{
        width: 221px;
    }
    .faceRec_banner{
        background-size: 100% 375px;
    }
    .comon_banner {
        height: 375px;
    }
}
@media screen and (max-width: 980px) {
	.faceRec_char_con>div{
        width: 181px;
    }
}
</style>