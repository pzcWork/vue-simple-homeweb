<template>
    <div class="faceID_page content_margin">
        <div class="faceID_banner comon_banner style_banner">
            <p>人证合一</p>
            <p>提供人脸比对技术、活体检测技术等多项组合能力，快速完成用户身份核实，确保 [ 真人 ] 且为 [ 本人 ]。</p>
        </div>
        <div class="faceID_tech envirTittle">
            <p class="en_comP">技术构成</p>
            <div class="faceID_tech_con">
                <p class="faceID_tech_p1">提供人证合一验证技术服务，自主研发世界领先的人脸识别技术，通过证件识别、OCR识别、活体检测、人脸比对等功能，确保用户身份的真实性。人脸识别精确率超过人眼精确度。对终端设备硬件配置要求低，识别速度快，达到毫秒级识别。</p>
                <img class="faceID_tech_img" src="../../../static/img/carouselPic/faceID_pic01.png" alt="">
                <div class="faceID_tech_items">
                    <div class="faceID_tech_item">
                        <p class="faceID_tech_conP1">证件OCR识别</p>
                        <p class="faceID_tech_conP2">对身份证正反面文字信息进行有效识别。同时提供身份证照质量控制技术，并自动完成截图操作。</p>
                    </div>
                    <div class="faceID_tech_item">
                        <p class="faceID_tech_conP1">活体检测</p>
                        <p class="faceID_tech_conP2">提供离在线活体检测，可定制检测动作。有效抵御视频、彩照、3D模型等活体作弊手段。</p>
                    </div>
                    <div class="faceID_tech_item">
                        <p class="faceID_tech_conP1">人脸比对</p>
                        <p class="faceID_tech_conP2">提供业界效果最优的人脸1：1对比验证功能，为用户提供金融级效果的对比服务。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="faceID_flow envirTittle">
            <p class="en_comP">技术流程</p>
            <div class="faceID_flow_con">
                <p class="faceID_flow_p1">通过OCR身份证识别获取身份证ID信息，经过活体检测判断，将捕获的人脸图像与通过身份证ID查询到的公民证件照，进行人脸比对，判断用户为 [ 真人 ] 且为 [ 本人 ]。</p>
                <img class="faceID_flow_img" src="../../../static/img/carouselPic/faceID_pic02.png" alt="">
            </div>
        </div>
        <div class="faceID_area envirTittle">
            <p class="en_comP">应用场景</p>
            <div class="faceID_area_con">
                <div class="faceID_area_item">
                    <p>高级安防登记</p>
                    <p>通过便捷的身份验真，在判断真人的同时，确保为已登记的本人访问，可应用于对访问者登记严格的场景，如高级小区访客管理、公司前台登记等。</p>
                </div>
                <div class="faceID_area_item">
                    <p>服务人员身份监管</p>
                    <p>对于用户身份真实性要求较高的服务领域（如家政、货运等），通过人证对比，确保服务人员的身份真实性，提高业务人员身份审核效率。</p>
                </div>
                <div class="faceID_area_item">
                    <p>民事政务</p>
                    <p>原本繁琐费时的窗口业务办理，转为线上自助办理（如制卡），保证用户身份真实性的同时，大大缩短业务处理时间。</p>
                </div>
                <div class="faceID_area_item">
                    <p>密码辅助管理</p>
                    <p>结合其他密保措施，辅助实现密码找回等设置操作，增强业务安全性、减少用户操作成本。</p>
                </div>
            </div>
        </div>
        <div class="faceID_adv envirTittle">
            <p class="en_comP">技术优势</p>
            <div class="faceID_adv_con">
                <div style="width:170px;">
                    <img src="../../../static/img/icon/faceID_icon01.png" alt="高精度识别">
                    <p class="faceID_adv_p">高精度识别</p>
                    <p>人脸识别技术国际领先，识别准确率超过99%，识别效果国际领先。</p>
                </div>
                <div style="width:170px;">
                    <img src="../../../static/img/icon/faceID_icon02.png" alt="离在线混合活体检测">
                    <p class="faceID_adv_p">离在线混合活体检测</p>
                    <p>提供有交互、无交互双重校验，对活体攻击提供双重保障，组合使用更安全。</p>
                </div>
                <div style="padding-top:5px;width:177px;">
                    <img src="../../../static/img/icon/faceID_icon03.png" alt="多交互模式">
                    <p class="faceID_adv_p">多交互模式</p>
                    <p>提供APP或HTTP(s)的接入方式，产品形态更加全面，满足您的各种场景需求。</p>
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
.faceID_banner{
    background: url("../../../static/img/banner/faceID_banner.png") no-repeat center;
    background-size: 100% 600px;
}
.faceID_banner>p{
    color: #fff;
}
.faceID_banner>p:first-child{
    font-size: 30px;
    font-weight: 600;
    margin-top: -42px;
}
.faceID_banner>p:nth-child(2){
    font-size: 17px;
    margin: 32px 0 10px 0;
    width: 405px;
    line-height: 27px;
}
.faceID_tech_p1{
    width: 611px;
    margin: 0 auto;
    color: #777;
    line-height: 26PX;
}
.faceID_tech_img{
    display: block;
    margin: 45px auto;
}
.faceID_tech_items{
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: 0 auto;
}
.faceID_tech_item{
    width: 220px;
}
/* .faceID_tech_item:hover{
    background-color: #F4F4F4;
} */
.faceID_tech_conP1{
    font-size: 18px;
    text-align: center;
    color: #000;
    margin-bottom: 30px;
}
.faceID_tech_conP2{
    font-size: 14px;
    color: #777;
    line-height: 25px;
}
.faceID_flow_con{
    display: flex;
    flex-direction: column;
    align-items: center
}
.faceID_flow_p1{
    width: 600px;
    font-size: 14px;
    color: #777;
    line-height: 25px;
    margin-bottom: 30px;
}
.faceID_area_con{
    width: 861px;
    overflow: hidden;
    margin: 0 auto;
}
.faceID_area_item{
    width: 370px;
    height: 220px;
    background-color: #F4F4F4;
    margin: 30px;
    float: left;
}
.faceID_area_item>p:first-child{
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin: 30px;
}
.faceID_area_item>p:nth-child(2){
    font-size: 14px;
    color: #777;
    line-height: 25px;
    margin: 30px;
}
.faceID_adv_con{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.faceID_adv_con>div{
    font-size: 14px;
    color: #777;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 100px;
}
.faceID_adv_p{
    color: #000;
    font-size: 16px;
    margin: 36px 0 18px 0;
    font-weight: 600;
}
@media screen and (max-width: 1200px) {
    .faceID_tech_img, .faceID_flow_img{
        width: 900px;
        height: auto;
    }
    .faceID_tech_items{
        width: 900px;
    }
    .faceID_adv_con>div{
        margin: 0 50px;
    }
    .faceID_banner>p:first-child{
        font-size: 35px;
        margin-top: 0 !important;
    }
    .faceID_banner>p:nth-child(2){
        margin: 25px 0 10px 0;
    }
    .faceID_banner>p:first-child{
        margin-top: -300px;
    }
}
</style>