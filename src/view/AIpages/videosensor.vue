<template>
    <div class="videosensor_page content_margin">
        <div class="videosensor_banner comon_banner style_banner">
            <p>视频审核</p>
            <p>无需截帧直接对直播、小视频、卖家秀等视频内容进行多维度智能审核，其中包括色情、暴恐、政治敏感、广告等。可同时对视频内容进行包含60多种类别的分类标注。</p>
        </div>
        <div class="videosensor_tech envirTittle">
            <p class="en_comP">产品介绍</p>
            <div class="videosensor_tech_con">
                <div class="videosensor_tech_con1">
                    <p>违规审查</p>
                    <div class="videosensor_tech_con1_a">
                        <div>
                            <img src="../../../static/img/icon/videosensor_icon01.png" alt="">
                            <p>色情视频过滤</p>
                            <p>基于海量大数据样本库，领先机器学习算法，高效识别涉黄视频。</p>
                        </div>
                        <div>
                            <img src="../../../static/img/icon/videosensor_icon02.png" alt="">
                            <p>涉政视频过滤</p>
                            <p>共享网易大数据样本库，政策法规权威同步，高效过滤涉政视频。</p>
                        </div>
                        <div>
                           <img src="../../../static/img/icon/videosensor_icon03.png" alt="">
                            <p>暴恐视频过滤</p>
                            <p>海量大数据样本库，辅助业务安全数据监控，高效识别暴恐视频。</p> 
                        </div>
                    </div>
                </div>
                <div class="videosensor_tech_con2">
                    <p>分类标注</p>
                    <div>
                        <img src="../../../static/img/icon/videosensor_icon04.png" alt="">
                        <p>内容分类</p>
                        <p>可同时对视频内容进行包含60多种类别的分类标注。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="videosensor_area envirTittle">
            <p class="en_comP">应用场景</p>
            <div class="videosensor_area_con">
                <div>
                    <p>UGC短视频审核</p>
                    <p>UGC短视频平台每天有大量用户上传的视频内容，通过使用视频内容审核，实现快速检测和过滤违规内容，大大减少人工审核的工作量。</p>
                </div>
                <div>
                    <p>直播平台内容审核</p>
                    <p>应用视频内容审核服务，针对直播场景，实时的对语音、文字、画面等进行内容检测和审核，实现对主播内容的有效监管，控制业务风险。</p>
                </div>
            </div>
        </div>
        <div class="videosensor_function envirTittle">
            <p class="en_comP" style="padding-top:12px;margin-bottom:7px;">功能演示</p>
            <videoUpload>
                
            </videoUpload>
        </div>
        <div class="videosensor_chara envirTittle">
            <p class="en_comP">产品特色</p>
            <div class="videosensor_chara_con">
                <div>
                    <img src="../../../static/img/icon/videosensor_icon07.png" alt="">
                    <p>毫秒级审核</p>
                    <p>15s小视频可在60ms内完成审核，响应快速，达到国际领先水平，能满足大量视频超低延时的审核处理。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/videosensor_icon08.png" alt="">
                    <p>全面审核</p>
                    <p>支持从声音、动作、图像、文本等多种维度对视频内容进行审核，不放过任何风险。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/videosensor_icon09.png" alt="">
                    <p>准确率高</p>
                    <p>对色情、暴恐、政敏、广告等识别准确率高，极大减少人工审核成本。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VideoUpload from "../../components/videoUpload.vue";
export default {
    data(){
        return {
        }
    },
    components: {
        VideoUpload
    },
    
}
</script>
<style>
.videosensor_banner{
    background: url("../../../static/img/banner/videosensor_banner.png") no-repeat center;
    background-size: 100% 600px;
}
.videosensor_banner>p{
    color: #fff;
}
.videosensor_banner>p:first-child{
    font-size: 30px;
    font-weight: 600;
    margin-top: -330px;
    margin-left: 101px;
}
.videosensor_banner>p:nth-child(2){
    font-size: 16px;
    margin: 32px 0 10px 125px;
    width: 596px;
    line-height: 27px;
    text-align: center;
}
.videosensor_tech_con{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.videosensor_tech_con2{
    width: 240px;
    height: 299px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -550px;
}
.videosensor_tech_con2>p{
    margin-bottom: 20px;
}
.videosensor_tech_con2>div{
    background-color: #F6F6F6;
    height: 260px;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.videosensor_tech_con1{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.videosensor_tech_con1>p{
    margin-bottom: 20px;
}
.videosensor_tech_con1_a{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #F6F6F6;
}
.videosensor_tech_con1_a>div{
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 260px;;
}
.videosensor_tech_con1_a>div>p:nth-child(2), .videosensor_tech_con2>div>p:nth-child(2){
    margin: 30px 0;
}
.videosensor_tech_con1_a>div>p:nth-child(3), .videosensor_tech_con2>div>p:nth-child(3){
    font-size: 14px;
    line-height: 22px;
    width: 220px;
}
.videosensor_area_con{
    color: #fff;
    display: flex;
    justify-content: center;

}
.videosensor_area_con>div{
    width: 450px;
    height: 190px;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.videosensor_area_con>div:first-child{
    background: url("../../../static/img/icon/videosensor_icon05.png") no-repeat center;
}
.videosensor_area_con>div:nth-child(2){
    margin-left: 60px;
    background: url("../../../static/img/icon/videosensor_icon06.png") no-repeat center;
}
.videosensor_area_con>div>p{
    width: 354px;
    margin-left: 50px;
}
.videosensor_area_con>div>p:nth-child(2){
    font-size: 14px;
    line-height: 22px;
}
.videosensor_chara_con{
    display: flex;
    justify-content: space-around
}
.videosensor_chara_con>div{
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.videosensor_chara_con>div:nth-child(2){
    margin: 0 -400px;
}
.videosensor_chara_con>div>p:nth-child(2){
    font-weight: 600;
    margin: 30px 0 20px 0;
}
.videosensor_chara_con>div>p:nth-child(3){
    font-size: 14px;
    line-height: 22px;
}
.videosensor_function{
    background-color:#F2F2F2;
    padding-bottom:42px;
}
@media screen and (max-width: 1680px) {
    .videosensor_tech_con2{
        margin-left:-200px;
    }
}
@media screen and (max-width: 1280px) {
    .videosensor_tech_con2{
        margin-left:0;
    }
}
@media screen and (max-width: 980px) {
    .videosensor_tech_con2{
        margin-left:0;
    }
    .videosensor_banner>p:first-child{
       margin-top:-190px;
       margin-left: -13px;
    }
    .videosensor_banner>p:nth-child(2){
        margin: 0 0 10px 33px;
    }
    .videosensor_area_con{
        justify-content: space-around;
    }
    .videosensor_area_con>div:nth-child(2){
        margin-left: 0;
    }
    .videosensor_chara_con>div:nth-child(2){
        margin: 0 -27px;
    }
}
</style>
