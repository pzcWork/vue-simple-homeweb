<template>
<div class="job_page">
    <div class="job_baner style_banner">
        <p class="job_baner_tittle">公司简介</p>
        <p class="job_baner_p">TEE 集团（TEE Group）由知名企业家创建，并得到著名投资人的巨额资金支持，专注于人工智能核心技术研发和商用落地。自主研发基于深度学习的机器视觉系统，拥有多项AI知识产权专利 ，综合性能达到国内一流水平。首创分布式 AI算力平台，强大的数据处理能力，满足从原始数据到模型产出的一站式服务。同时，通过组件可视化建模的方式，让客户在模型训练平台可快速建立AI模型。TEE 源于技术术语Trusted Execution Environment（可信任执行环境），意为致力于研发基于深度学习的人工智能化可信任的AI场景应用。</p>
    </div>
    <div class="team_introduce">
        <p class="team_introduce_p">团队介绍</p>
        <div class="team_introduce_cont">
            <img class="team_introduce_img" src="../../static/img/ourTeam.png" alt="">
            <div class="team_introduce_text">
                <p>TEE现有员工100余人，研发团队60余人：分别毕业于清华大学、北京大学、中国科学技术大学、中国科学院、华中科技大学、西安电子科技大学、香港科技大学、美国加洲大学等名校，其中教授5人、博士20余人、硕士35余人。</p>
                <br>
                <p>AI研发团队核心成员，具有多年世界顶级企业研究院的从业经历，保有计算机视觉领域国际领先的核心技术，在人体姿态估计、图像分割、文字识别等方向，多次获得ICCV、ECCV、ICDAR、ICPR等组织的学术竞赛TOP3成绩，多项核心技术已商用化在超过千万用户的产品中。</p>
                <br>
                <p>在北京、杭州、深圳、海南、香港、美国设立分公司。</p>
            </div>
        </div>
    </div>
    <div class="team_environ">
        <p class="team_environ_p team_introduce_p">办公环境</p>
        <div class="team_carousel">
            <div class="team_environ_bj">
                <carousel :dataArrBJ="dataArr"></carousel>
                <p class="carousel_p">北京</p>
                <p class="carousel_p2">地址：北京市朝阳区朝阳北路237号复星国际中心</p>
            </div>
            <div class="team_environ_sz">
                <carousel :dataArrBJ="dataArrSz" :heightPan=300></carousel>
                <p class="carousel_p">深圳</p>
                <p class="carousel_p2">地址：深圳市罗湖区京基100大厦写字楼</p>
            </div>
        </div>
        
    </div>
    <div class="inviteJob">
        <p class="team_introduce_p">加入我们</p>
        <!-- <div class="job1">
                <h3 class="job_h3">【TEE AI LAB】深度学习算法实习生(多名)</h3>
                <br>
                <p style="font-weight:600;font-size:16px">职位描述: </p>
                <p class="inviteJob_p2">与业界资深专家合作，负责公司深度学习SDK的开发者社区建设、SDK开发、技术文档建设等。</p>
                <br>
                <p style="font-weight:600;font-size:16px">职位要求:</p>
                <p class="inviteJob_p2">1.硕士及以上学历，计算机、电子、自动化等相关专业；</p>
                <p class="inviteJob_p2">2.熟悉Python，熟悉C/C++编程，编程能力优秀；</p>
                <p class="inviteJob_p2">3.熟练掌握Caffe/TensorFlow/PyTorch/MXNet等至少一种深度学习框架；</p>
                <p class="inviteJob_p2">4.熟悉计算机视觉算法，如分类、检测、分割、人脸识别、OCR等；</p>
                <p class="inviteJob_p2">5.有开源软件开发经验者，优先录取；</p>
                <p class="inviteJob_p2">6.有技术博客、知乎技术专栏、微信技术公众号等经验者，优先录取；</p>
                <p class="inviteJob_p2">7.对开源技术和计算机视觉技术保有极大的兴趣，良好的团队合作精神。</p>
                <br>
                <p style="font-weight:600;font-size:16px">工作地点：</p>
                <p>北京市朝阳区朝阳北路237号复星国际中心</p>
                <p style="font-weight:600;font-size:16px">联系方式：</p>
                <p>hr@tee.com</p>
                <p style="font-weight:600;font-size:16px">简历命名格式：</p>
                <p>职位名称-姓名-学校</p>
                <br>
                <p>TEE AI LAB诚聘,欢迎有兴趣同学投递简历，公司提供非常有竞争力的实习薪酬。</p>
                <br>
                <br>
                <hr>
        </div> -->
        <div class="job2">
                <h3 class="job_h3">【TEE AI LAB】深度学习模型优化算法工程师(多名)</h3>
                <br>
                <p style="font-weight:600;font-size:16px">职位描述:  </p>
                <p class="inviteJob_p2">与业界资深专家合作，从事深度学习模型优化算法的研发和产业落地。</p>
                <br>
                <p style="font-weight:600;font-size:16px">职位要求:  </p>
                <p class="inviteJob_p2">1.硕士及以上学历，计算机、电子、自动化等相关专业；</p>
                <p class="inviteJob_p2">2.熟悉Python，熟悉C/C++编程，编程能力优秀；</p>
                <p class="inviteJob_p2">3.熟练掌握Caffe/TensorFlow/PyTorch/MXNet等至少一种深度学习框架；</p>
                <p class="inviteJob_p2">4.深度学习模型优化方向：</p>
                <p class="inviteJob_p3">(1) 熟悉轻量化深度学习模型设计、剪枝、量化等，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(2) 熟悉低比特深度学习模型训练算法和前沿，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(3) 熟悉移动设备异构计算优化技术，如NEON、汇编等，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(4) 熟悉移动设备优化框架，如SNPE,NCNN,MACE,Paddle-Mobile等，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(5) 有深度学习模型在android/arm linux等平台移植部署方面经验；</p>
                <p class="inviteJob_p2">5.有ACM ICPC竞赛、计算机视觉领域国际竞赛、Kaggle竞赛等获奖经历，优先录取；</p>
                <p class="inviteJob_p2">6.在ICCV, ECCV, CVPR, NIPS, ICML，ICLR等发表相关领域论文者，优先录取；</p>
                <p class="inviteJob_p2">7.对深度学习模型优化算法保有极大的兴趣，良好的团队合作精神。</p>
                <br>
                <p style="font-weight:600;font-size:16px">工作地点：</p>
                <p>北京市朝阳区朝阳北路237号复星国际中心</p>
                <p style="font-weight:600;font-size:16px">联系方式：</p>
                <p>hr@tee.com</p>
                <p style="font-weight:600;font-size:16px">简历命名格式：</p>
                <p>职位名称-姓名-学校</p>
                <br>
                <p>TEE AI LAB诚聘,欢迎有兴趣同学及同业人士投递简历。</p>
                <br>
        </div>
        <hr>
        <div class="job3">
                <h3 class="job_h3">【TEE AI LAB】计算机视觉算法工程师（多名）</h3>
                <br>
                <p style="font-weight:600;font-size:16px">职位描述:  </p>
                <p class="inviteJob_p2">与业界资深专家合作，从事基于深度学习的计算机视觉前沿技术研发和产业落地。</p>
                <br>
                <p style="font-weight:600;font-size:16px">职位要求: </p>
                <p class="inviteJob_p2">1.硕士及以上学历，计算机、电子、自动化等相关专业；</p>
                <p class="inviteJob_p2">2.熟悉Python，熟悉C/C++编程，编程能力优秀；</p>
                <p class="inviteJob_p2">3.熟练掌握Caffe/TensorFlow/PyTorch/MXNet等至少一种深度学习框架；</p>
                <p class="inviteJob_p2">4.计算机视觉方向：</p>
                <p class="inviteJob_p3">(1) 人脸识别：精通人脸检测、人脸识别、人脸关键点识别、活体检测、人脸属性识别等算法，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(2) 图像检索：精通图像检索、图像特征提取、图像聚类、图像相似度匹配、检索系统优化等相关算法和前沿，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(3) 人体姿态估计：精通人体姿态估计、人体跟踪、头部姿态估计等算法和前沿方向，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(4) 目标检测：精通目标检测常用算法和前沿方向，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(5) 图像识别：精通图像识别常用算法和前沿方向，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(6) 图像分割：精通语义分割、实例分割、全景分割常用算法和前沿方向，有实际项目开发经历；</p>
                <p class="inviteJob_p3">(7) OCR：精通OCR常用算法和前沿方向，精通车牌识别、证照识别等算法，有实际项目开发经历；</p>
                <p class="inviteJob_p2">5.有ACM ICPC竞赛、计算机视觉领域国际竞赛、Kaggle竞赛等获奖经历，优先录取；</p>
                <p class="inviteJob_p2">6.在ICCV, ECCV, CVPR, NIPS, ICML，ICLR等发表论文者，优先录取；</p>
                <p class="inviteJob_p2">7.对计算机视觉技术保有极大的兴趣，良好的团队合作精神。</p>
                <br>
                <p style="font-weight:600;font-size:16px">工作地点：</p>
                <p>北京市朝阳区朝阳北路237号复星国际中心</p>
                <p style="font-weight:600;font-size:16px">联系方式：</p>
                <p>hr@tee.com</p>
                <p style="font-weight:600;font-size:16px">简历命名格式：</p>
                <p>职位名称-姓名-学校</p>
                <br>
                <p>TEE AI LAB诚聘,欢迎有兴趣同学及同业人士投递简历。</p>
                <br>
                <hr>
        </div>
    </div>
</div>
</template>
<script>
import Carousel from './Carousel.vue'
export default {
    data(){
        return {
            dataArr:[{
                "pic" : "../../static/img/carouselPic/bj01.png"
            },{
                "pic" : "../../static/img/carouselPic/bj02.png"
            },{
                "pic" : "../../static/img/carouselPic/bj03.png"
            },{
                "pic" : "../../static/img/carouselPic/bj04.png"
            }],
            dataArrSz:[{
                "pic" : "../../static/img/carouselPic/sz01.png"
            },{
                "pic" : "../../static/img/carouselPic/sz02.png"
            },{
                "pic" : "../../static/img/carouselPic/sz03.png"
            },{
                "pic" : "../../static/img/carouselPic/sz04.png"
            }]
        }
    },
	components : {
		carousel : Carousel
	}
}
</script>
<style>
.job_page{
    margin-top: 60px;
    color: #000;
}
.inviteJob{
    margin-top: 110px;
    padding: 0 20%;
}
.inviteJob p{
    font-size: 14px;
    line-height: 30px;
}
.inviteJob h3{
    font-size: 18px;
}
.job_baner{
    display: flex;
    background: url("../../static/img/job_baner.png");
    background-size: 100% 100%;
    width: 100%;
    height: 600px;
    color: #fff;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    user-select: none;
}
.job_baner_tittle{
    font-size: 25px;
    font-weight: 400;
    margin-bottom:50px;
}
.job_baner_p{
    width: 800px;
    line-height: 24px;
}
.team_introduce_p{
    font-size: 25px !important; 
    font-weight: 400;
    margin: 50px 0 20px 0 !important;
    text-align: center;
}
.team_introduce_cont{
    display: flex;
    justify-content: center;
    align-items: center;
}
.team_introduce_text{
    margin-left: 83px;
    font-size: 16px;
    line-height: 25px;
    width: 600px;
    user-select: none;
}
.team_environ{
}
.team_carousel{
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.team_environ_bj, .team_environ_sz{
    width: 500px;
    height: 300px;
}
.team_environ_sz{
    margin-left: 96px;
}
.carousel_p, .carousel_p2{
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
}
.carousel_p2{
    margin-top: 5px;
}
.job1{
    margin-top: 60px;
}
.job_h3{
    height: 60px;
    line-height: 60px;
    background:linear-gradient(90deg,rgba(244,244,244,1) 0%,rgba(255,255,255,1) 100%);
}
@media screen and (max-width: 980px) {
    .team_introduce_cont, .team_carousel{
        padding: 0 20px;
    }
    .team_environ_sz{
        margin-left: 50px;
    }
}
</style>


