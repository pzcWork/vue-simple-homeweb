<template>
    <div class="news_page content_margin">
        <div class="news_banner comon_banner">
            <p>TEE 新闻</p>
        </div>
        <div class="news_page_content">
            <p class="news_page_titlle">TEE新闻</p>
            <div>
                <p>
                    <a href="https://tech.china.com/article/20190122/kejiyuan1205237603.html" target="_blank" class="tittle_a">元社区科技与锑易易科技在人工智能领域达成多维度战略合作</a>
                    <span>2019-01-23</span>
                </p>
                <div>2019年1月22日下午，成都元社区科技有限公司（简称：元社区）与北京锑易易科技有限公司（简称：TEE）战略合作签约仪式在锑易易北京会客厅举行，双方就分布式社区和基于深度学习的人工智能安防系统、内容审查系统、人脸识别、商品识别、虚拟购物、智能搜索、边缘计算等领域建立多维度战略合作。</div>
                <p class="news_page_to1">
                    <span>转自：</span>
                    <a href="https://tech.china.com/article/20190122/kejiyuan1205237603.html" target="_blank"></a>
                    <a href="http://3g.163.com/dy/article/E67DB4FM0525POE2.html" target="_blank"></a>
                    <a href="https://www.jianshu.com/p/36ef38bff752" target="_blank"></a>
                </p>
            </div>
            <div>
                <p>
                    <a href="https://www.toutiao.com/i6633624668815229447/?wxshare_count=4&from=timeline&pbid=6633664444222916110" class="tittle_a" target="_blank">怡亚通星链携手北京锑易易科技 布局人工智能领域</a>
                    <span>2018-12-11</span>
                </p>
                <div>2018年12月6日下午，深圳星链电子商务有限公司与北京锑易易科技有限公司战略合作签约仪式在怡亚通会议室举行，双方就供应链和基于深度学习的人工智能视觉系统等领域建立合作。</div>
                <p class="news_page_to2">
                    <span>转自：</span>
                    <a href="https://www.toutiao.com/i6633624668815229447/?wxshare_count=4&from=timeline&pbid=6633664444222916110" target="_blank"></a>
                    <a href="https://t.cj.sina.com.cn/articles/view/5039813294/12c6572ae00100fkkg?from=tech&subch=" target="_blank"></a>
                    <a href="http://www.sohu.com/a/281086957_99962921" target="_blank"></a>
                </p>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style>
.news_banner{
    background: url("../../../static/img/banner/news_banner.png") no-repeat center;
    background-size: 100% 600px;
}
.news_banner>p{
    font-size: 30px;
    font-weight: 600;
}
.news_page_titlle{
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #eee;
    padding-left: 25%;
    font-weight: 600;
}
.news_page_content>div{
    display: flex;
    flex-direction: column;
}
.news_page_content>div>p, .news_page_content>div>div{
    width: 800px;
    margin: 0 auto;
}
.news_page_content>div:nth-child(3){
    background-color: #F6F6F6
}
.news_page_content>div>p:first-child{
    height: 100px;
    line-height: 100px;
}
.news_page_content>div>p:nth-child(3){
    height: 100px;
    display: flex;
    align-items: center;
}
.news_page_content>div>p:first-child>a{
    font-size: 16px;
    font-weight: 600;

}
.news_page_content>div>p:first-child>span{
    float: right;
}
.news_page_content>div>p:nth-child(3){
    color: #3E88F1;
    font-size: 14px;
}
.news_page_content>div>div{
    width: 800px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    margin: 0 auto
}
.tittle_a:hover{
    color: #3E88F1;
}
.news_page_to1>a:nth-child(2){
    display: inline-block;
    width: 59px;
    height: 13px;
    background: url("../../../static/img/icon/news_page_to01.png") no-repeat center;
}
.news_page_to1>a:nth-child(3){
    display: inline-block;
    width: 33px;
    height: 16px;
    background: url("../../../static/img/icon/news_page_to02.png") no-repeat center;
    margin: 0 20px;
}
.news_page_to1>a:nth-child(4){
    display: inline-block;
    width: 34px;
    height: 16px;
    background: url("../../../static/img/icon/news_page_to03.png") no-repeat center;
}
.news_page_to2>a:nth-child(2){
    display: inline-block;
    width: 66px;
    height: 22px;
    background: url("../../../static/img/icon/news_page_to04.png") no-repeat center;
}
.news_page_to2>a:nth-child(3){
    display: inline-block;
    width: 69px;
    height: 29px;
    background: url("../../../static/img/icon/news_page_to05.png") no-repeat center;
    margin: 0 20px;
}
.news_page_to2>a:nth-child(4){
    display: inline-block;
    width: 42px;
    height: 24px;
    background: url("../../../static/img/icon/news_page_to06.png") no-repeat center;
}
.news_page_to2>span{
    height: 30px;
    margin-top: 15px;
}
@media screen and (max-width: 980px) {
    .news_page_content>div>p, .news_page_content>div>div{
        width: 900px
    }
    .news_page {
        margin-bottom: 425px;
    }
    .comon_banner{
        height: 306px;
    }
    .news_banner{
        background-size: 100% 100%
    }
    .news_page_titlle{
        padding-left: 4%;
    }
}
</style>


