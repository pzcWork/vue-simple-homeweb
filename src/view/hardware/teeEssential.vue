<template>
<div class="mall_page content_margin">
    <div class="mall_banner">
        <p class="mall_banner_p1 pCom">TEE AI 神经元计算棒</p>
        <p class="mall_banner_p2 pCom">小身材，大算力，低功耗，尽显科技魅力</p>
        <img src="../../../static/img/banner/power_bar.png" alt="">
        <ul class="mall_ul">
            <li>
                <p>APiM</p>
                <p>AI专用架构</p>
            </li>
            <li>
                <p>5.6Tops</p>
                <p>超强算力</p>
            </li>
            <li>
                <p>9.3Tops/w</p>
                <p>超高能效</p>
            </li>
            <li>
                <p>SAI</p>
                <p>AI工具套件</p>
            </li>
        </ul>
        <button class="mall_btn" @click="buy">立即购买</button>
    </div>
    <div class="mall_issu">
        <img src="../../../static/img/mall_issu.png" alt="">
        <div class="mall_issu_text">
            <p>聪明灵动 才堪大用</p>
            <p>小体积拥有每秒近三万亿次运算大算力，基于AI嵌入式神经网络处理器(NPU)，拥有28000个并行神经计算核，用于AI边缘计算的深度学习运算CNN卷积网络加速。采用革命性创新的APiM架构存算一体，模块化一次网络预加载，无需指令，无需外部DDR缓存，大量数据直接输入/输出至计算单元，从而大大提高了AI的处理速度，降低处理能耗。</p>
        </div>
    </div>
    <div class="mall_chip">
        <div class="mall_chip_text">
            <p>AI专用芯片</p>
            <p>采用AI专用的MPE矩阵引擎和APiM（AI Processing in Memory，基于存储中的AI运算）架构，以革命性的方式处理AI，一次升级网络预加载，无需指令，无需外部DDR缓存，大量数据可直接输入/输出至NPU芯片，从而大大提高了AI的处理速度，降低处理能耗。</p>
        </div>
        <img src="../../../static/img/mall_chip_xin.png" alt="" class="mall_chip_img">
    </div>
    <div class="mall_bar">
        <p>9.3Tops/W超高效能</p>
        <p>NPU运算核心芯片采用28nm工艺制程，在2.8Tops算力时功率仅300mW，效率能耗比高达为9.3Tops/W，在拥有超强的算力同时保持了极低的能耗，让其应用在终端设备的边缘计算领域中极具优势。</p>
        <img src="../../../static/img/bar.png" alt="">
    </div>
    <div class="mall_param">
        <p class="mall_param_p">规格参数</p>
        <div class="mall_param_content">
            <img src="../../../static/img/mall_param.png" alt="">
            <div class="mall_param_issu">
                <ul>
                    <li>28纳米制造工艺 </li>
                    <li>单芯片集成高达 28,000个运算单元 </li>
                    <li>卷积运算性能 2.8TOS (每秒近3万亿次运算）</li>
                    <li>峰值运算能力 5.6TOPS (每秒5.6万亿次运算)</li>
                </ul>
                <ul>
                    <li>峰值计算最大功耗300mw</li>
                    <li>能耗效率高达 9.3TOPS/W（每瓦9万亿次运算）</li>
                    <li>尺寸 70.1x19.3x10.2 (mm)</li>
                    <li>重量 22.8 (g)</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mall_scheme">
        <p class="mall_param_p">AI应用部署方案</p>
        <div class="mall_scheme_content">
            <img src="../../../static/img/mall_scheme.png" alt="">
            <p>成本低、改造快，快速开发部署，USB接口，即插即用，支持USB HUB扩展。TEE AI 算力棒可实现多只并行运算，形成交叉火力，媲美GPU集群的强大算力。</p>
        </div>
    </div>
    <div class="mall_upload">
        <div class="mall_upload_pic"></div>
        <p class="mall_upload_p1">提供基于PyTorch完整易用的工具套件Simple AI (SAI)，可在Windows 10、Ubuntu16.04、Linux (Arm64)系统上开发，更简单快捷地添加自定义网络模型，大大降低使用AI的技术门槛。</p>
        <p class="mall_upload_p2">可用于将 float 型卷 积神经网络模型转换为定点量化模型（1bit 或者 3bit），并通过 TEE AI算力棒来运行。部署时可使用主机 CPU 和 TEE AI 算力棒通过联合通信进行AI推断。</p>
    </div>
    <div class="mall_AI">
        <p class="mall_param_p" style="margin-top:16px;">AI原理步骤</p>
        <div class="mall_AI_con">
            <ul class="section02_ul">
                <li><img src="../../../assets/images/developer/img/tender.png" alt=""><span class="section02_ul_li1">1.搜集数据集</span></li>
                <li><img src="../../../assets/images/developer/img/go.png" alt=""><span class="section02_ul_li2">2.训练模型</span></li>
                <li><img src="../../../assets/images/developer/img/cut.png" alt=""><span class="section02_ul_li3">3.制作模型</span></li>
                <li><img src="../../../assets/images/developer/img/right.png" alt=""><span class="section02_ul_li4">4.得到达标模型</span></li>
                <li><img src="../../../assets/images/developer/img/couter.png" alt=""><span class="section02_ul_li5">5.应用</span></li>
            </ul>
        </div>
    </div>
    <div class="mall_upload">
        <p class="mall_param_p">SAI 工具套件</p>
        <div class="mall_upload_con">
            <div class="mall_upload_intro">
                <img src="../../../assets/images/developer/img/sdkPoin.png" alt="" style="width:70px;height:70px;">
                <div class="upload_intro_out">
                    <p class="upload_intro_p1">支持Ubuntu 16.04 (x64)、Windows 10 (x64)、Linux (arm64)(for glibc based OS)</p>
                    <p class="upload_intro_p2">包含AI开发者SDK工具，AI图像分类训练及推理，训练数据集，使用说明文档。</p>
                </div>
            </div>
            <div class="mall_upload_icon">
                <div class="mall_upload_icon1" @click="uploadTool">
                    <img src="../../../assets/images/developer/img/loadBtn.png" alt="">
                    <p>工具下载</p>
                </div>
                <div class="mall_upload_icon2" @click="uploadDoc">
                    <img src="../../../assets/images/developer/img/documentLoad.png" alt="">
                    <p>文档下载</p>
                </div>
                <div class="mall_upload_icon3">
                    <a href="https://github.com/TEE-AI/SAI" target="_blank" class="mall_upload_icon3_a">GitHub工程链接</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        buy(){
            // 打开新窗口
            window.open("https://detail.tmall.com/item.htm?spm=a1z10.1-b.w4004-21310710076.3.4edf45d2X5feIy&pvid=80524be1-72bc-4a92-8495-54db946a2e94&pos=2&acm=03068.1003.1.702815&id=586760754386&scm=1007.12941.28043.100200300000000")
            // 在当前窗口下打开
            // window.location.href('/teeMall', '_blank')
        },
        uploadTool(){
            window.open("http://download-1.tee.com/TEE_SAI_v1.0-20181218.zip")
        },
        uploadDoc(){
            window.open("http://download-1.tee.com/TEE_SAI_CHM_v1.0.pdf")
        }
    }
}
</script>
<style>
.mall_banner{
    background: url("../../../static/img/banner/mall_banner.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    color: #000;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.pCom{
    font-size: 26px;
    font-weight: 600;
}
.mall_banner_p1{
    margin-bottom: 20px;
}
.mall_banner_p2{
    margin-bottom: 30px;
}
.mall_ul{
    display: flex;
    margin-top: -90px;
 }
.mall_ul>li{
    width: 95px;
    font-weight: 600;
    font-size: 15px;
    border-right: 1px solid #000;
    padding: 0 20px;
}
.mall_ul>li>p{
    text-align: center;
    margin-bottom: 10px;
}
.mall_btn{
    width: 160px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    border-radius: 4px;
    background-color: #4E86E4;
    color: #fff;
    margin-top: 36px;
    outline: none;
    border: none;
}
.mall_btn:hover{
     background-color: #409eff;
}
.mall_issu{
    display: flex;
    justify-content: center;
    margin-top: 130px;
}
.mall_issu_text{
    width: 400px;
    margin-left: 50px;
}
.mall_issu_text>p:first-child{
    font-size: 22px;
    color: #000;
    text-align: left;
    margin-bottom: 60px;
    margin-top: 28px;
}
.mall_issu_text>p:nth-child(2){
    color: #222;
    line-height: 30px;
}
.mall_bar{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}
.mall_bar>p:first-child{
    font-size: 22px;
    color: #000;
}
.mall_bar>p:nth-child(2){
    max-width: 765px;
    line-height: 25px;
    margin: 40px 0
}
.mall_param_content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mall_param_p{
    text-align: center;
    font-size: 22px;
    color: #000;
    margin: 40px 0 35px;
}
.mall_param_issu{
    display: flex;
}
.mall_param_issu>ul{
    margin: 80px 60px;
}
.mall_param_issu>ul>li{
    line-height: 25px;
}
.mall_scheme_content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mall_scheme_content>p{
    max-width: 680px;
    margin: 80px 0;
    line-height: 25px;
}
.mall_chip{
    background: url("../../../static/img/mall_chip.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 468px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
}
.mall_chip_text{
    flex-direction: column;
    display: flex;
    width: 500px;
    margin-top: -3%;
    margin-right: 4%;
}
.mall_chip_img{
    margin-top: 7%;
}
.mall_chip_text>p:first-child{
    font-size: 20px;
    margin: 30px 0;
}
.mall_chip_text>p:nth-child(2){
    line-height: 25px
}
.mall_upload{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(246,246,246,0.99) 52%,rgba(255,255,255,0) 100%); 
}
.mall_upload_pic{
    width: 100%;
    height: 100px;
    background: url("../../../static/img/mall_upload_pic.png") no-repeat;
    background-position: center center;
}
.mall_upload_p1, .mall_upload_p2{
    width: 680px;
    line-height: 25px
}
.mall_upload_p1{
    margin-top: 30px;
}
.mall_upload_a{
    color: #406eff !important;
    cursor: pointer;
    margin: 30px 0 50px 0;
}
.mall_chip>p:first-child{
    font-size: 22px;
    margin-top: -40px;
    margin-bottom: 20px;
}
.mall_upload_con{
    width: 100%
}
.mall_upload_intro{
    display: flex;
    justify-content: center;
    align-items: center;
}
.upload_intro_p1, .upload_intro_p2{
    margin: 10px 0;
}
.mall_upload_icon{
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #3E88F1;
    margin-top: 40px;
}
.mall_upload_icon>div{
    width: 70px;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 40px;
    cursor: pointer;
}
.mall_upload_icon3{
    width: 115px !important;
    height: 68px !important;
    color: #3E88F1 !important;
    margin-left: 100px;

}
.mall_upload_icon3>a{
    color: #3E88F1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mall_upload_icon3_a:before{
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url('../../../static/img/icon/github.png');
    margin-right: 10px;
    background-repeat: no-repeat;
}
.mall_upload_icon2{
    margin-left: 115px;
}
.upload_intro_out{
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 40px
}
.section02_ul{
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    margin: 30px 0 50px 0;
    padding: 0 100px;
}
.section02_ul li{
    width: 179px;
    height: 206px;
    float: left;
    position: relative;
}
.section02_ul li span{
    position: absolute;
    bottom: 72px;
}
.section02_ul_li1{
    left: 40px;
}
.section02_ul_li2, .section02_ul_li3{
    left: 53px;
}
.section02_ul_li4{
    left: 32px;
}
.section02_ul_li5{
    left: 66px;
}
@media screen and (max-width: 1280px) {
		.mall_param_content>img{
            width: 100%;
        }
        .mall_chip>p{
            margin-left: -35%;
        }
        .section02_ul{
            padding: 0 10px;
        }
}
@media screen and (max-width: 800px) {
    .section02_ul{
        padding: 0 10px;
    }
    .section02_ul li{
        width: 89px;
        height: 103px;
        margin-left: 26px;
        margin-top:20px;
    }
    .section02_ul li img{
       
    }
    .section02_ul li span{
        bottom: 26px;
        font-size: 12px;
    }
    .section02_ul_li1{
        left: 9px;
    }
    .section02_ul_li2, .section02_ul_li3{
        left: 16px;
    }
    .section02_ul_li4{
        left: 4px;
    }
    .section02_ul_li5{
        left: 26px;
    }
}
</style>