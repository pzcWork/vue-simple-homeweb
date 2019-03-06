<template>
    <div class="teeMall_page content_margin">
        <div class="teeMall_banner comon_banner style_banner">
            <div class="banner_img">
                <img src="../../../static/img/icon/teeMall_banner_01.png" alt="">
                <div class="banner_img_color">
                    <span>可选颜色</span>
                    <select name="proColor" id="proColor">
                        <option value="1">金色<span></span></option>
                        <option value="2">蓝色</option>
                    </select>
                </div>
            </div>
            <div class="banner_detail">
                <p class="banner_detail_tittle">TEE AI算力棒</p>
                <div class="banner_detail_limit">限量发售</div>
                <div class="banner_detail_intro">
                    <p>TEE AI算力棒 500 台，剩余 249 台</p>
                    <p>累计销售251台</p>
                </div>
                <p class="banner_detail_price">599.00 元</p>
                <button class="banner_detail_buy">全款预订</button>
            </div>
        </div>
        <div class="teeMall_char envirTittle">
            <p class="en_comP">规格信息</p>
            <div class="teeMall_mes_con">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.teeMall_banner{
    background: url("../../../static/img/banner/teeMall_banner.png") no-repeat center;
    background-size: 100% 600px;
    color: #000;
    flex-direction: row;
}
.teeMall_banner > div:first-child{  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70%;
}
.banner_detail{
    padding-left: 210px;
    height: 70%;
    margin: 0 -28px;
}
#proColor{
    float: right;
    margin-top: 10px;
}
.banner_img{
    width: 300px;
    margin: 0 35px;
}
.banner_img_color{
    width: 100%;
    height: 60px;
    background-color: #fff;
    line-height: 45px;
    color: #777777;
    padding: 0 20px 0 15px;
}
.banner_img>img{
    height: calc(100% - 50px);
}
.banner_detail_tittle{
    font-size: 20px;
    font-weight: 600;
    color: #666;
    margin: 20px 0;
}
.banner_detail_limit{
    width: 65px;
    height: 25px;
    border: 1px solid #3E88F1;
    border-radius: 4px;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    color: #3E88F1;
    margin-bottom: 12px;
}
.banner_detail_intro{
    font-size: 14px;
    color: #000;
}
.banner_detail_intro>p:nth-child(2){
    color: #999;
    margin: 20px 0 60px 0;
}
.banner_detail_price{
    color: #666;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
}
.banner_detail_buy{
    width: 200px;
    height: 50px;
    background-color: #3E88F1;
    color: #fff;
    text-align: center;
    line-height: 50px;
    border: none;
    outline: none;
    border-radius: 5px
}
.banner_detail_buy:hover{
     background-color: #409eff;
}
</style>