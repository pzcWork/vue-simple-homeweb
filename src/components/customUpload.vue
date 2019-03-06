<template>
    <div class="customUpload">
        <div class="home_eroticism_head">
            <div :class='[this.head_tab == 1?"head_tab_style":""]' @click="headCick(1)">图像鉴黄</div>
            <div :class='[this.head_tab == 2?"head_tab_style":""]' @click="headCick(2)">涉政识别</div>
            <div :class='[this.head_tab == 3?"head_tab_style":""]' @click="headCick(3)">暴恐识别</div>
        </div>
        <div class="home_eroticism">
            <div class="home_eroticism_upcont">
                <el-upload
                class="avatar-uploader"
                action="https://aip.tee.com/api-gate/tee/public/file/v1.1/upload/classify"
                :headers="{token:'961d604452c87ced804491cd8cb5286b'}"
                :data='dataType'
                :show-file-list="false"
                :on-progress="onProgress"
                v-loading="loading"
                :on-error="onError"
                element-loading-text="检测中"
                :on-success="handleEroticismrSuccess"
                :before-upload="beforeeEoticismUpload">
                    <img v-if="!avatarDiv" :src="imageUrl" class="avatar" id="avatarImg">
                    <div v-else class="avatar_div">
                        <div>
                            <img src="../../static/img/icon/error_icon.png" alt="">
                        </div>
                        <div>{{this.avatarText}}</div>
                    </div>
                    <el-button size="small" type="primary" class="uploadBtn">点击上传</el-button>
                    <div class="shade" v-show="shadeShow">
                        <!-- 百分比 -->
                        <!-- <el-progress :text-inside="true" :stroke-width="45" :percentage="'色情识别：'+this.messageAlert+''+this.percentage" :color="progressColor" class="progress"  :show-text="true" status="text"><span class="messageAlert"></span></el-progress> -->
                        <img src="../../static/img/AIdemo/tab.png" alt="">
                        <div class="shadeText">
                            <p class="shadeText_tittle">{{shadeTextTittle}}</p>
                            <p class="shadeText_item">{{this.messageAlert+''+this.percentage+'%'}}</p>
                        </div>
                        <!-- <div class="circle">色情</div> -->
                        <!-- 删除遮罩层按钮 -->
                        <!-- <el-button icon="el-icon-delete" circle @click.stop="deleUpload" class="deleUpload"></el-button> -->
                    </div>
                </el-upload>
                <div class="home_eroticism_search">
                    <el-input v-model="search_input" class="search_input" placeholder="请输入网络图片URL，图片文件类型支持PNG、JPG、JPEG、BMP，图片大小不超过2M。）"></el-input>
                    <el-button type="primary" class="searchBtn" @click="checkPicurl">开始识别</el-button>或
                </div>
            </div>
            <div class="home_eroticism_list" v-if="this.name == 'first'">
                <img src="../../static/img/AIdemo/h1.png" alt="" @click="imgClick1($event,1)">
                <img src="../../static/img/AIdemo/h2.png" alt="" @click="imgClick1($event,2)">
                <img src="../../static/img/AIdemo/h3.png" alt="" @click="imgClick1($event,3)">
                <img src="../../static/img/AIdemo/h4.png" alt="" @click="imgClick1($event,4)">
            </div>
            <div class="home_politics_list" v-else-if="this.name == 'second'">
                <img src="../../static/img/AIdemo/z1.png" alt="" @click="imgClick1($event,5)">
                <img src="../../static/img/AIdemo/z2.png" alt="" @click="imgClick1($event,6)">
                <img src="../../static/img/AIdemo/z3.png" alt="" @click="imgClick1($event,7)">
                <img src="../../static/img/AIdemo/z4.png" alt="" @click="imgClick1($event,8)">
            </div>
            <div class="home_terris_list" v-else-if="this.name == 'third'">
                <img src="../../static/img/AIdemo/k1.png" alt=""    @click="imgClick1($event,9)">
                <img src="../../static/img/AIdemo/k2.png" alt=""    @click="imgClick1($event,10)">
                <img src="../../static/img/AIdemo/k3.png" alt=""    @click="imgClick1($event,11)">
                <img src="../../static/img/AIdemo/k4.png" alt=""    @click="imgClick1($event,12)">
            </div>
        </div>
        
        <!-- <div class="home_eroticism_operation" v-else>
            <el-upload
                class="avatar-uploader_operation"
                action="aaa"
                :http-request="upload"
                :headers="{token:'961d604452c87ced804491cd8cb5286b'}"
                drag
                :show-file-list="false"
                v-loading="loading">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </div> -->
        <div class="codeDemo">
            <el-collapse Controllability style="width:45%;padding-right:10px;">
                <p class="codeDemo_p">客户端服务调用的请求参数：</p>
                <el-collapse-item title="Request" name="1">
                    <p>Params</p>
                    <p>Post</p>
                    <p>https://aip.tee.com/api-gate/tee/public/file/v1.1/upload/classify</p>
                    <br>
                    <br>
                    <p>Header</p>
                    <p style="padding-left:30px;">header: token: 您的"token"</p>
                </el-collapse-item>
            </el-collapse>
            <el-collapse Controllability class="codeRespone" style="width:45%;padding-right:10px;">
                <p class="codeDemo_p">服务端服务的响应参数：</p>
                <el-collapse-item title="Response" name="2">
                    <div><a href="#" style="color:#409EFF;">查看接口文档>></a></div>
                    <p>{</p>
                    <p style="padding-left:30px;">"RESPONSE_TIME_STAMP": {{this.responseTime}},</p>
                    <p style="padding-left:30px;">"DATA": {</p>
                    <p style="padding-left:80px;">"code": "{{this.response.code}}",</p>
                    <p style="padding-left:80px;">"message": "{{this.response.message}}", [</p>
                    <p style="padding-left:150px;">"processId": "{{this.response.processId}}",</p>
                    <p style="padding-left:150px;">"score": "{{this.response.score}}",</p>
                    <p style="padding-left:150px;"> "label": "{{this.response.label}}",</p>
                    <p style="padding-left:150px;">"timestamp": {{this.response.timestamp}},</p>
                    <p style="padding-left:150px;"> "type": "{{this.response.type}}"</p>
                    <p style="padding-left:80px;">}</p>
                    <p style="padding-left:30px;">}</p>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
export default {
    name: "CustomUpload",
    data() {
        return {
            head_tab:2,
            activeName:"2",
            activeName2:"first",
            eroticismImg:'',
            politicsImg:'',
            imageUrl:'../../static/img/AIdemo/h1_big.png',
            loading: false,
            shadeShow: true,
            percentage:96.13,
            label:'',
            progressColor:'',
            messageAlert:'性感',
            eroticismShow: 1,
            dataType: {"business":"PornPicture"},
            shadeTextTittle:'色情识别',
            response:{},
            responseTime: 0,
            search_input:'',
            name:'first',
            avatarDiv:false,
            avatarText:''
        }
    },
    methods: {
        checkPicurl(){
            let _this = this
            let img = new Image();
            // 下载图片加版本号，避免缓存
            img.src = _this.search_input+'?v='+new Date().getTime();
            img.onerror = function(){
                _this.shadeShow = false
                _this.imageUrl = '../../static/img/icon/erro_pic.png'
                return
                // return false;
            };
            img.onload = function(){
                let imgW = img.width;
                let imgH = img.height;
                // console.log(document.getElementById('avatarImg'))
                // document.getElementById('avatarImg').style.width = imgW + 'px'
                // document.getElementById('avatarImg').style.height = imgH + 'px'
                // console.log(this.search_input)
                _this.messageAlert = ''
                _this.percentage = ''
                _this.imageUrl = _this.search_input
                if(_this.name == "first"){
                    _this.dataType = {"business":"PornPicture"}
                    _this.shadeTextTittle = "色情识别"
                }else if(_this.name == "second"){
                    _this.dataType = {"business":"PoliticsPicture"}
                    _this.shadeTextTittle = "涉政识别"
                }else if(_this.name == "third"){
                    _this.dataType = {"business":"TerroristPicture"}
                    _this.shadeTextTittle = "暴恐识别"
                }
                // console.log(_this.dataType)
                let fd = new FormData()
                // console.log(this.name)
                fd.append('fetchUrl',_this.search_input)
                fd.append('business',_this.dataType.business)
                _this.loading = true
                _this.classifyByUrl(fd)


                img.onload=null;//避免重复加载
            }
        },
        onError(err, file, fileList){
            if(file.size >= 2000000){
                this.shadeShow=false
                this.loading=false
                this.imageUrl = '../../static/img/icon/error_limit.png'
                return
            }
            this.errorTime()
        },
        errorTime(){
            let _this = this
            setTimeout(function(){
                _this.shadeShow=false
                _this.loading=false
                _this.imageUrl = '../../static/img/icon/overTime_pic.png'
            }, 3000);
        },
        headCick(val){
            // console.log(val)
            this.head_tab = val;
            this.eroticismShow = 0
            this.shadeShow = true
            this.loading = true
            if(val == 1){
                this.name = 'first'
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/h1_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/h1_big.png'
            }else if(val == 2){
                this.name = 'second'
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/z1_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/z1_big.png'
            }else if(val == 3){
                this.name = 'third'
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/k1_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/k1_big.png'
            }
        },
        classifyByUrl(fd){
            let _this = this
            _this.$http.post('https://aip.tee.com/api-gate/tee/public/file/v1.1/upload/classifyByUrl',fd).then(function(res){
                // console.log(res)
                _this.loading = false
                if(res.data.DATA.code == 100000){
                    // console.log(res.data.DATA.score)
                    if(!res.data.DATA.score){
                        _this.$message({
                            showClose: true,
                            message: '图片地址格式错误，请更换地址后重现体验。',
                            type: 'error'
                        });
                        return
                    }
                    _this.shadeShow = true
                    let _label = res.data.DATA.label
                    _this.label = _label //状态
                    let num = (res.data.DATA.score - 0)*100
                    _this.percentage = Math.floor(num*100)/100 //百分比
                    // console.log(num, _this.percentage)
                    // console.log(res.data.DATA)
                    _this.response = res.data.DATA
                    if(_label == "Normal"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                        _this.messageAlert = "正常"
                    }else if(_label == "Porn"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#EB0B0B !important'
                        _this.messageAlert = "色情"
                    }else if(_label == "Sexy"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#F5F20F !important'
                        _this.messageAlert = "性感"
                    }else if(_label == "T" && res.data.DATA.type == "TerroristPicture"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#EB0B0B !important'
                        _this.messageAlert = "暴恐"
                    }else if(_label == "F" && res.data.DATA.type == "TerroristPicture"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                        _this.messageAlert = "正常"
                    }else if(res.data.DATA.type == "PoliticsPicture" && res.data.DATA.label == "F"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                        _this.messageAlert = "正常"
                    }else if(res.data.DATA.type == "PoliticsPicture" && res.data.DATA.label == "T"){
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#EB0B0B !important'
                        _this.messageAlert = "涉政"
                    }
                }else{
                    _this.shadeShow=false
                    _this.loading=false
                    _this.imageUrl = '../../static/img/icon/overTime_pic.png'
                }
			}).catch(function(err){
                console.log("错误"+err)
                _this.shadeShow=false
                _this.loading=false
                _this.imageUrl = '../../static/img/icon/overTime_pic.png'
			})
        },
        terrorismSuccess(res, file){
            // console.log(res, file)
        },
        onProgress(event, file, fileList){
            // console.log(event, file, fileList)
        },
        imgClick1(event,val){
            // console.log(event)
            this.eroticismShow = 0
            this.shadeShow = true
            this.loading = true
            if(val == 1){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/h1_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/h1_big.png'
                // this.imageUrl = '../../static/img/AIdemo/h1_big.png'
                // this.upload(this.imageUrl)
            }else if(val == 2){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/h2_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/h2_big.png'
            }else if(val == 3){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/h3_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/h3_big.png'
            }else if(val == 4){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/h4_big.png')
                fd.append('business',"PornPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/h4_big.png'
            }else if(val == 5){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/z1_big.png')
                fd.append('business',"PoliticsPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/z1_big.png'
            }else if(val == 6){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/z2_big.png')
                fd.append('business',"PoliticsPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/z2_big.png'
            }else if(val == 7){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/z3_big.png')
                fd.append('business',"PoliticsPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/z3_big.png'
            }else if(val == 8){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/z4_big.png')
                fd.append('business',"PoliticsPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/z4_big.png'
            }else if(val == 9){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/k1_big.png')
                fd.append('business',"TerroristPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/k1_big.png'
            }else if(val == 10){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/k2_big.png')
                fd.append('business',"TerroristPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/k2_big.png'
            }else if(val == 11){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/k3_big.png')
                fd.append('business',"TerroristPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/k3_big.png'
            }else if(val == 12){
                let fd = new FormData()
                fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/k4_big.png')
                fd.append('business',"TerroristPicture")
                this.classifyByUrl(fd)
                this.imageUrl = 'https://www.tee.com/static/img/AIdemo/k4_big.png'
            }
        },
        handleEroticismrSuccess(res, file) {
            // console.log(res.DATA)
            this.responseTime = res.RESPONSE_TIME_STAMP
            this.response = res.DATA
            if(!res.DATA){
                this.$message.error("本功能暂未开放，请使用其他功能");
                this.loading = false
                this.shadeShow = false
            }
            if(res.DATA.code == "100000"){
                this.avatarDiv = false
                this.loading = false
                this.shadeShow = true
                let num = (res.DATA.score - 0)*100
                this.percentage = Math.floor(num*100)/100 //百分比
                // console.log(num, this.percentage)
                // console.log(this.percentage)
                this.label = res.DATA.label //状态
                if(res.DATA.label == "Normal"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                    this.messageAlert = "正常"
                }else if(res.DATA.label == "Porn"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#EB0B0B !important'
                    this.messageAlert = "色情"
                }else if(res.DATA.label == "Sexy"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#F5F20F !important'
                    this.messageAlert = "性感"
                }else if(res.DATA.label == "T" && res.DATA.type == "TerroristPicture"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#EB0B0B !important'
                    this.messageAlert = "暴恐"
                }else if(res.DATA.label == "F" && res.DATA.type == "TerroristPicture"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                    this.messageAlert = "正常"
                }else if(res.DATA.type == "PoliticsPicture" && res.DATA.label == "F"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                    this.messageAlert = "正常"
                }else if(res.DATA.type == "PoliticsPicture" && res.DATA.label == "T"){
                    document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#EB0B0B !important'
                    this.messageAlert = "涉政"
                }
                this.imageUrl = URL.createObjectURL(file.raw);
            }else {
                this.avatarDiv = true
                this.avatarText = res.DATA.message
                this.shadeShow = false
                this.loading =false
            }
        },
        beforeeEoticismUpload(file) {
            // console.log(file)
            this.loading = true
            return
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
        },
        deleUpload(){
            console.log(this.imageUrl)
            this.imageUrl = ''
            this.shadeShow = false
            this.eroticismShow = 1
        }
    },
    watch: {
            name: { // 深度监听分页条件变化，并刷新页面
                handler(val, oldVal){
                    this.shadeShow = true
                    this.imageUrl = ''
                    if(this.name == "first"){
                        this.dataType = {"business":"PornPicture"}
                        this.shadeTextTittle = "色情识别"
                        this.imageUrl = '../../static/img/AIdemo/h1_big.png'
                        this.messageAlert = "性感"
                        this.percentage = 96.13
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#F5F20F !important'
                    }else if(this.name == "second"){
                        this.dataType = {"business":"PoliticsPicture"}
                        this.shadeTextTittle = "涉政识别"
                        this.imageUrl = '../../static/img/AIdemo/z1_big.png'
                        this.messageAlert = "正常"
                        this.percentage = 100
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00  !important'
                    }else if(this.name == "third"){
                        this.dataType = {"business":"TerroristPicture"}
                        this.shadeTextTittle = "暴恐识别"
                        this.imageUrl = '../../static/img/AIdemo/k1_big.png'
                        this.messageAlert = "正常"
                        this.percentage = 98.11
                        document.getElementsByClassName("shadeText")[0].style.cssText = 'color:#0cff00 !important'
                    }
                },
                deep:true
            }
    },
    created(){
        // this.dataType = null
        this.token = JSON.parse(sessionStorage.getItem('token'))
        // console.log(this.token)
        // console.log(this.name)
        // console.log(this.dataType)
        this.head_tab = (this.$route.query.head_tab?this.$route.query.head_tab:1)
        // console.log(this.head_tab)
        this.eroticismShow = 0
        this.shadeShow = true
        this.loading = true
        console.log(this.head_tab)
        if(this.head_tab == 1){
            this.name = 'first'
            let fd = new FormData()
            fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/h1_big.png')
            fd.append('business',"PornPicture")
            this.classifyByUrl(fd)
            this.imageUrl = 'https://www.tee.com/static/img/AIdemo/h1_big.png'
        }else if(this.head_tab == 2){
            this.name = 'second'
            let fd = new FormData()
            fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/z1_big.png')
            fd.append('business',"PornPicture")
            this.classifyByUrl(fd)
            this.imageUrl = 'https://www.tee.com/static/img/AIdemo/z1_big.png'
        }else if(this.head_tab == 3){
            this.name = 'third'
            let fd = new FormData()
            fd.append('fetchUrl','https://www.tee.com/static/img/AIdemo/k1_big.png')
            fd.append('business',"PornPicture")
            this.classifyByUrl(fd)
            this.imageUrl = 'https://www.tee.com/static/img/AIdemo/k1_big.png'
        }
    }
}
</script>
<style>
.avatar_div{
    background-color: #343434;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.customUpload{
    position: relative;
    max-width: 1165px;
    background: #fff;
    margin: auto;
    padding: 25px;
    padding-bottom: 15px
}
.home_content{
    position: relative;
}
.home_actions{
    display: inline-block;
    margin-left: 160px;
}
.eroticismImg{
    width: 360px;
    height: 180px;
}
.home_eroticism{
    display: flex;
    justify-content: center;
}
.home_eroticism, .home_eroticism_operation, .home_terrorism{
    position: relative;
}
.eroticismImg{
    position: absolute;
    top: 0;
    left: 400px;
}
.home_eroticism_list img, .home_politics_list img, .home_terris_list img{
    cursor: pointer;
    width: 130px;
    height: 130px;
    margin: 3px 0;
}
.home_eroticism_list img:first-child, .home_politics_list img:first-child, .home_terris_list img:first-child{
    margin-top: 0;
}
.home_eroticism_list, .home_politics_list, .home_terris_list{
    display: flex;
    flex-direction: column;
}
.avatar-uploader .el-upload ,.avatar-uploader_operation .el-upload{
    /* border: 1px dashed #d9d9d9; */
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #343434;
  }
  .avatar-uploader .el-upload:hover , .avatar-uploader_operation .el-upload:hover{
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }
  .avatar-uploader, .avatar-uploader_operation{
      width: 880px;
      height: 540px;
      overflow: hidden;
      margin-right: 25px;
  }
  .el-upload-dragger{
      width: calc(100% - 2px);
      height: calc(100% - 2px);
  }
  .el-upload-dragger .el-icon-upload{
      margin: 230px 0 25px !important;
  }
  .shade{
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content:center
  }
  .progress{
      width: 300px;
  }
  .closeIcon{
      width: 20px;
      height: 20px;
      background-size: cover
  }
  .deleUpload{
      position: absolute;
      bottom: 130px;
      right: 30px;
      background: url("../../static/img/icon/deleteIcon.png") no-repeat center;
  }
  .shadeText{
      width: 150px;
      position: absolute;
      top: 242px;
      left: 366px;
      font-size: 24px;
      color: #F5F20F;
      text-align: center;
  }
  .shadeText_tittle{
      margin-bottom: 12px;
      width: 100%;
  }
  .shadeText_item{
      width: 100%;
  }
  .pic_head{
      height: 30px;
      background-color: #fff;
      padding: 28px 0 0 20px;
  }
  .codeDemo{
      width: 878px;
      background-color: #fff;
      margin-left: 63px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
  }
  .codeDemo_p{
      font-size: 14px !important;
      margin: 0 0 4px 7px !important;
      border-bottom: 1px solid #dfe6ec !important;
      height: 25px;
      line-height: 25px;
  }
  .codeDemo p{
    margin-top: 5px;
    padding-left: 10px;
    color: #000
  }
  .codeRespone{
      margin-left: 86px
  }
  .home_eroticism_head{
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      margin-bottom: 20px; 
  }
  .home_eroticism_head>div{
      width: 100px;
      height: 90%;
      float: left;
      text-align: center;
      line-height: 80px;
      cursor: pointer;
      color: #000;
      font-size: 18px;
      margin: 0 65px;
  }
  .head_tab_style{
      border-bottom: 2px solid #3E88F1 !important;
      color: #3E88F1 !important;
  }
  .home_eroticism_search>input{
      margin-right: 20px;
  }
  .searchBtn{
      margin-left: 20px;
      width: 110px;
      height: 36px;
      margin-right: 12px;
  }
  .search_input{
      width: 575px;
      margin-left: 20px;
      
  }
  .el-input__inner{
      background-color: rgba(0,0,0,.45);
      color: #fff;
  }
  .home_eroticism_upcont{
      position: relative;
  }
  .home_eroticism_search{
      width: calc(100% - 25px);
      display: flex;
      position: absolute;
      bottom: 1px;
      left: 0;
      color: #fff;
      height: 60px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      align-items: center;
      background-color: rgba(0, 0, 0, .2)
  }
  .uploadBtn{
      position: absolute;
      bottom: 12px;
      z-index: 10;
      width: 110px;
      height: 36px;
      right: 5px;
      font-size: 14px;
  }
  .el-collapse-item__header {
      height: 30px;
      line-height: 22px;
  }

  @media screen and (max-width: 980px) {
		.shadeText{
            left: 337px;
        }
        .avatar-uploader, .avatar-uploader_operation{
            width: 820px
        }
        .searchBtn{
            width: 80px;
            margin-right: 10px;
        }
        .uploadBtn{
            width: 80px;
        }
}
</style>