<template>
    <div class="snapshop_page content_margin">
        <div class="snapshop_banner comon_banner">
            <p>拍照导购</p>
            <p>拍照并识别照片中的物体，跳转到定制商城对应相同或相似商品，增加购物的便捷和乐趣。通过TEE Vision Shopping人工智能技术，大幅提升搜索速度和准确度。</p>
            <img class="snapshop_banner_img" src="../../../static/img/banner/snapshop_banner02.png" alt="">
        </div>
        <div class="snapshop_discern envirTittle">
            <p class="en_comP">识别品类</p>
            <div class="snapshop_discern_con">
                <img src="../../../static/img/carouselPic/snapshop_discern.png" alt="">
                <p class="snapshop_discern_p">识别超过2000万种商品品类，通过AI神经网络模型赋予不同垂直领域的特征权重，根据不同领域的需求，在提取与比较图像特征时运用到这些垂直领域的特征差异进行定向优化，使得图像识别与搜索能更专业更精准地服务应用于各个垂直领域。</p>
            </div>
        </div>
        <div class="snapshop_adv envirTittle">
            <p class="en_comP">产品优势</p>
            <div class="snapshop_adv_con">
                <div>
                    <img src="../../../static/img/icon/snapshop_adv01.png" alt="">
                    <p>支持品类多样</p>
                    <p>利用业界先进的AI算法技术，基于百亿级海量数据训练，能够支持家电数码、食品饮料、个护化妆、箱包、配饰、鞋靴、上衣等数二十个大类及数千个子类目。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/snapshop_adv02.png" alt="">
                    <p>准确可靠</p>
                    <p>经过多方合作厂家亿万次的调用业务验证，模型的持续迭代优化，稳定可靠，识别精确。</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/snapshop_adv03.png" alt="">
                    <p>多场景应用</p>
                    <p>可满足电商场景下的商品识别，也可支持手机终端厂商的相机模块，拍照购物，增加用户的购物乐趣。</p>
                </div>
            </div>
        </div>
        <div class="snapshop_area envirTittle">
            <p class="en_comP">推荐场景</p>
            <div class="snapshop_area_con">
                <div>
                    <img src="../../../static/img/icon/snapshop_area01.png" alt="">
                    <div>
                        <p>电商场景</p>
                        <p>通过调用拍照导购接口，识别商品库中相同或相似商品，返回对应的商品信息</p>
                    </div>
                </div>
                <div>
                    <img src="../../../static/img/icon/snapshop_area02.png" alt="">
                    <div>
                        <p>手机终端</p>
                        <p>在使用相机进行拍照时，识别照片中的商品并导流连接到指定的商城商品信息</p>
                    </div>
                </div>
                <div>
                    <img src="../../../static/img/icon/snapshop_area03.png" alt="">
                    <div>
                        <p>其他场景</p>
                        <p>对各场景照片中的商品进行识别搜索，返回商城对应相同或相似商品信息的场景</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="snapshop_serve envirTittle">
            <p class="en_comP">服务类型</p>
            <div class="snapshop_serve_con">
                <div>
                    <p>私有化部署</p>
                    <p>部署至客户本地服务器，在客户内网中实现功能，保障数据私密性。根据用户定制化需求，提供多种私有化部署方案。</p>
                </div>
                <div>
                    <p>离线采集SDK</p>
                    <p>集成到各类终端设备中，无需网络即可实现功能，根据用户需求，提供个性化多种方案。</p>
                </div>
                <div>
                    <p>云端服务</p>
                    <p>提供云端服务接口，用户通过直接调用API或使用SDK获取应用能力。</p>
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
.snapshop_banner{
    background: url("../../../static/img/banner/snapshop_banner.png") no-repeat center;
    background-size: 100% 600px;
    position: relative;
}
.snapshop_banner>p{
    color: #fff;
}
.snapshop_banner_img{
    position: absolute;
    bottom: 0;
    left: 15%;
}
.snapshop_banner>p:first-child{
    font-size: 30px;
    font-weight: 600;
    margin-top: -235px;
    margin-left: 140px;
}
.snapshop_banner>p:nth-child(2){
    font-size: 17px;
    margin: 32px 0 10px 140px;
    line-height: 27px;
    width: 695px;
    text-align: center;
}
.snapshop_discern_con{
    display: flex;
    justify-content: center;
    align-items: center;
}
.snapshop_discern_p{
    width: 410px;
    font-size: 15px;
    line-height: 20px;
    margin-left: 65px;
    letter-spacing: 4px;
    color: #777;
}
.snapshop_adv_con{
    display: flex;
    justify-content: center;
    align-items: center;
}
.snapshop_adv_con>div{
    width: 270px;
    height: 230px;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.snapshop_adv_con>div>:nth-child(2){
    margin: 35px 0 25px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
}
.snapshop_adv_con>div>:nth-child(3){
    font-size: 15px;
    color: #777;
    line-height: 22px;
}
.snapshop_area_con{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: url("../../../static/img/banner/snapshop_area.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
}
.snapshop_area_con>div{
    width: 338px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.snapshop_area_con>div>div{
    margin-left: 30px;
}
.snapshop_area_con>div>div>p:first-child{
    font-weight: 600;
    margin-bottom: 20px;
}
.snapshop_area_con>div>div>p:nth-child(2){
    font-size: 14px;
    line-height: 22px;
}
.snapshop_serve_con{
    width: 100%;
    height: 400px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
}
.snapshop_serve_con>div{
    width: 220px;
    height: 230px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.snapshop_serve_con>div:first-child{
    background: url("../../../static/img/icon/snapshop_serve01.png") no-repeat center;
}
.snapshop_serve_con>div:nth-child(2){
    background: url("../../../static/img/icon/snapshop_serve02.png") no-repeat center;
}
.snapshop_serve_con>div:nth-child(3){
    background: url("../../../static/img/icon/snapshop_serve03.png") no-repeat center;
}
.snapshop_serve_con>div>p{
    width: 180px;
}
.snapshop_serve_con>div>p:first-child{
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 15px;
    font-weight: 600;
}
.snapshop_serve_con>div>p:nth-child(2){
    font-size: 14px;
    line-height: 22px;
}
.envirTittle{
    margin-bottom: 0;
}
@media screen and (max-width: 1680px) {
    .snapshop_banner_img{
        left: 10%;
    }
}
@media screen and (max-width: 1440px) {
    .snapshop_banner_img{
        left: 4%;
    }
}
@media screen and (max-width: 1280px) {
    .snapshop_banner_img{
        left: -2%;
    }
}
@media screen and (max-width: 980px) {
		.snapshop_banner>p:nth-child(2){
            margin: 32px 0 10px 273px;
            width: 613px;
        }
        .snapshop_banner>p:first-child{
            margin-left: 273px;
        }
        .snapshop_area_con>div{
            width: 280px;
        }
        .snapshop_discern_con{
            padding: 0 10px;
        }
        .snapshop_banner_img{
            left: 0;
        }
	}
</style>


