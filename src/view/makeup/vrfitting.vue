<template>
    <div class="vrfitting_page content_margin">
        <div class="vrfitting_banner comon_banner style_banner">
            <p>虚拟试装</p>
            <p>利用体感技术实现高清晰的3D衣服图像自然地贴上人的身体，人只要站在距离合适的位置，通过手势动作就可以完成各类品牌时装的选择，并可“穿”在人在身上,告别试装繁琐，秒速体验新衣上身效果。</p>
        </div>
        <div class="vrfitting_tech_chara envirTittle">
            <p class="en_comP">产品特点</p>
            <div class="vrfitting_area_con vrfitting_chara">
                <div class="vrfitting_area_item">
                    <img src="../../../static/img/icon/vrfitting_icon01.png" alt="">
                    <p>快速试穿</p>
                    <p>实时测量顾客的身体尺寸，在不同的3D虚拟服装中转换试穿，省去了实际换衣的繁琐。</p>
                </div>
                <div class="vrfitting_area_item">
                    <img src="../../../static/img/icon/vrfitting_icon02.png" alt="">
                    <p>信息详细</p>
                    <p>所选项目的信息详细，直观显示购买决策的：价格、颜色、库存、款式等重要信息。</p>
                </div>
                <div class="vrfitting_area_item">
                    <img src="../../../static/img/icon/vrfitting_icon03.png" alt="">
                    <p>数据直观</p>
                    <p>只需要衣服的正反面两张照片，服装建模工具可以在10秒内创建虚拟3D服装模型。</p>
                </div>
            </div>
        </div>
        <div class="vrfitting_area envirTittle">
            <p class="en_comP">应用场景</p>
            <div class="vrfitting_area_con vrfitting_area_out">
                <div>
                    <img src="../../../static/img/icon/vrfitting_icon04.png" alt="">
                    <p>线下门店试装</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/vrfitting_icon05.png" alt="">
                    <p>移动端试装</p>
                </div>
                <div>
                    <img src="../../../static/img/icon/vrfitting_icon06.png" alt="">
                    <p>电视端试装</p>
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
.vrfitting_banner{
    background: url("../../../static/img/banner/vrfitting_banner.png") no-repeat center;
    background-size: 100% 600px;
}
.vrfitting_banner>p{
    color: #fff;
}
.vrfitting_banner>p:first-child{
    font-size: 30px;
    font-weight: 600;
    margin-top: -37px;
    margin-left: 0;
}
.vrfitting_banner>p:nth-child(2){
    font-size: 16px;
    margin: 32px 0 10px 0px;
    width: 600px;
    line-height: 27px;
    text-align: center;
}
.vrfitting_area_con{
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
}
.vrfitting_area_con>div{
    width: 271px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.vrfitting_area_con>div:nth-child(2){
    margin: 0 -400px;
}
.vrfitting_area_item>p:nth-child(2){
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 0;
}
.vrfitting_area_item>p:nth-child(3){
    font-size: 14px;
    line-height: 22px;
}
.vrfitting_area_con>div>p{
    font-size: 14px;
    color: #000;
    margin: 30px 0;
}
.vrfitting_chara>div>p{
    margin-top: 20px;;
}
.vrfitting_area{
    margin-top: 55px;
}
@media screen and (max-width: 980px) {
    .vrfitting_area_out>div>img{
        width: 240px;
        height: 160px;
    }
    .vrfitting_area_con>div:nth-child(2){
        margin:  0 0;
    }
    .vrfitting_area{
        margin-bottom: 201px;
    }
}
</style>