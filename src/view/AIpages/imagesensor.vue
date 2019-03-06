<template>
    <div class="AIdemo_page">
        <div class="AIdemo_page_banner style_banner">
            <p>图像审核</p>
            <p>企业私有服务器(无需上传云端)实现精准鉴别图像中的的涉黄、涉暴恐、涉政治敏感内容。解放人力审核员，规避运营风险。</p>
        </div>
        <div class="AIdemo_page_issu comTittle">
            <p class="commonP">功能介绍</p>
            <div class="AIdemo_page_issu_con">
                <div>
                    <img src="../../../static/img/icon/AIdemo_01.png" alt="">
                    <p class="issuTittle">图像鉴黄</p>
                    <p>通过深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行涉黄识别以及色情程度量化。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/AIdemo_02.png" alt="">
                    <p class="issuTittle">涉政识别</p>
                    <p>深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别政治人物，文字信息，敏感政治事件，政治场景鉴别。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/AIdemo_03.png" alt="">
                    <p class="issuTittle">暴恐识别</p>
                    <p>深度学习技术神经网络算法和实时更新的亿级图像，视频样本库，可对图片和视频进行识别暴力，血腥场景及恐怖组织头目，旗帜等涉嫌违禁鉴别。</p>
                </div>
            </div>
        </div>
        <div class="AIdemo_page_function">
            <p class="commonP" style="padding-top:12px;margin-bottom:7px;">功能演示</p>
            <customUpload>
            </customUpload>
            <!-- <el-upload
            class="upload-demo"
            action="https://aip.tee.com/api-gate/tee/public/file/v1.1/upload/classify"
            :headers="{token:'961d604452c87ced804491cd8cb5286b'}"
            :show-file-list="false"
            :data='dataType'
            list-type="picture"
            :before-upload="beforeeEoticismUpload">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload> -->
        </div>
        <div class="AIdemo_page_deploy">
            <p class="commonP">本地服务部署方案</p>
            <div class="AIdemo_page_deploy_con">
                <img src="../../../static/img/deploy_pic.png" alt="">
                <p>通过TEE AI 算力棒对企业私有服务器进行快速部署，直接获得AI审查能力</p>
            </div>
        </div>
        <div class="AIdemo_page_area comTittle">
            <p class="commonP">应用场景</p>
            <div class="AIdemo_page_com">
                <div>
                    <img src="../../../static/img/icon/AIdemo_area01.png" alt="">
                    <p class="AIdemo_page_com_tittle">视频直播内容审核</p>
                    <p>对直播、视频等场景采用TEE AI智能色情识别、涉政识别技术，实现对图片、视频、直播等内容的实时自动审核，精准快速，降低人工审核成本。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/AIdemo_area02.png" alt="">
                    <p class="AIdemo_page_com_tittle">社交电商内容审核</p>
                    <p>对社交电商中的头像、状态等图片内容进行实时自动审核，快速筛选出违规图片，降低违规风险。</p>
                </div>
            </div>
        </div>
        <div class="AIdemo_page_merit comTittle">
            <p class="commonP">产品优势</p>
            <div class="AIdemo_page_issu_con">
                <div>
                    <img src="../../../static/img/icon/AIdemo_merit01.png" alt="">
                    <p class="issuTittle">时效优势</p>
                    <p>在本地对图片、视频等内容进行实时审查，无网络传输延时。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/AIdemo_merit02.png" alt="">
                    <p class="issuTittle">成本优势</p>
                    <p>基于AI端测部署方案，节省数据二次上传所需要的带宽成本。提供本地服务部署专用的低成本高效率AI算力。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/AIdemo_merit03.png" alt="">
                    <p class="issuTittle">安全优势</p>
                    <p>避免数据泄露，数据不需要外传到第三方的内容审查服务器。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomUpload from "../../components/customUpload.vue";
export default {
    data(){
        return {
            dataType: {"business":"PornPicture"}
        }
    },
    components: {
        CustomUpload
    },
    methods: {
        showData(res){
            console.log(res)
        },
        beforeeEoticismUpload(file) {
            console.log(file)
            this.loading = true
            return
            this.$jsonp('https://aip.tee.com/api-gate/tee/public/file/v1.1/upload/classify', 
            {
                business : 'PornPicture', // jsonp key //请求传递参数 1
            } 
            ).then(json => {
            　　// 返回数据 json， 返回的数据就是json格式
                console.log(json)
            }).catch(err => {
            　　console.log(err)
            })
            let fd = new FormData()
            fd.append('file', file)
            this.$http.post('https://aip.tee.com/api-gate/tee/public/file/v1.1/upload/classify', fd).then((res) => {
                console.log(res)
            }, (res) => {
            console.log(res)
            })
            return false
            // const isJPG = file.type === 'image/jpeg';
            // const isLt2M = file.size / 1024 / 1024 < 2;

            // if (!isJPG) {
            // this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            // if (!isLt2M) {
            // this.$message.error('上传头像图片大小不能超过 2MB!');
            // }
            // return isJPG && isLt2M;
        }
    },
    mounted(){
        if(this.$route.query.scroll){
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // console.log(scrollTop)
            // console.log(document.getElementsByClassName("customUpload")[0].offsetTop)
            setTimeout(function(){
                window.scrollTo(0, document.getElementsByClassName("customUpload")[0].offsetTop-110)
            }, 100)
        }
    }
}
</script>
<style>
.AIdemo_page{
    margin-top: 60px;
}
.AIdemo_page_banner{
    width: 100%;
    height: 600px;
    background: url("../../../static/img/banner/AIdemo_page_banner.png") no-repeat center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.AIdemo_page_banner>p:first-child{
    font-size: 40px;
}
.AIdemo_page_banner>p:nth-child(2){
    margin: 50px 0;
    font-size: 18px;
}
.comTittle{
    margin: 10px 0 50px 0;
}
.commonP{
   font-size: 25px;
   text-align: center;
   margin-bottom: 50px;
   color: #000;
}
.AIdemo_page_issu_con{
    display: flex;
    justify-content: center;
}
.AIdemo_page_issu_con>div{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 80px;
}
.AIdemo_page_issu_con>div>p{
    line-height: 30px;
    color: #777;
}
.AIdemo_page_issu_con>div>.issuTittle{
    color: #000;
    margin: 30px 0
}
.AIdemo_page_function{
    background-color: #F2F2F2;
    /* height: 800px; */
    width: 100%;
    padding-bottom: 42px;
}
.AIdemo_page_com{
    display: flex;
    justify-content: center;
}
.AIdemo_page_com>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 300px;
    border-radius: 4px;
    box-shadow:0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    margin: 0px 20px;
}
.AIdemo_page_com_tittle{
    margin: 30px 0;
    color: #000;
    font-size: 18px;
}
.AIdemo_page_com_tittle + p{
    width: 360px;
}
.AIdemo_page_deploy{
    margin-top: 50px
}
.AIdemo_page_deploy_con{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.AIdemo_page_deploy_con>p{
    margin-top: 22px;
    margin-bottom: 60px;
}
.AIdemo_page_deploy_text{
    display: flex;
    justify-content: center;
    color: #C8A263;
    width: 70%;
    flex-direction: row;
    flex-wrap: wrap;
}
.AIdemo_page_deploy_text>p{
    /* margin: 15px 112px; */
    margin: 15px 0;
    width: 33%;
    text-align: center
}
@media screen and (max-width: 980px) {
    .AIdemo_page_banner>p:nth-child(2) {
        font-size: 17px;
    }
}
/* .AIdemo_page_deploy_text>p:nth-child(1){
    padding-left: 35px
}
.AIdemo_page_deploy_text>p:nth-child(3){
    padding-left: 35px;
    text-align: left
}
.AIdemo_page_deploy_text>p:nth-child(3)>span{
    margin-left: 50px;
}
@media screen and (max-width: 1680px) {
    .AIdemo_page_deploy_text>p:nth-child(3)>span{
        margin-left: 85px;
    }
}
@media screen and (max-width: 1440px) {
    .AIdemo_page_deploy_text>p:nth-child(3)>span{
        margin-left: 113px;
    }
}
@media screen and (max-width: 1180px) {
    .AIdemo_page_deploy_text>p:nth-child(3)>span{
        margin-left: 113px;
    }
}
@media screen and (max-width: 980px) {
	.AIdemo_page_deploy_text{
        width: 100%;
    }
    .AIdemo_page_deploy_text>p:nth-child(1){
        padding-left:21px;
    }
    .AIdemo_page_deploy_text>p:nth-child(3){
        padding-left: 0
    }
    .AIdemo_page_deploy_text>p:nth-child(3)>span{
        margin-left: 118px;
    }
} */
</style>