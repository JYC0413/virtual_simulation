<template>
    <div id="synopsis-box">
        <div id="synopsis-name">
            <p id="synopsis-write">实验名称</p>
            <el-input v-model="experimentName" 
                    placeholder="输入实验名称" 
                    style="width:200px;
                            margin-left:20px;
                            font-size:18px"></el-input>

        </div>
        
        <div id="synopsis-img">
            <p id="synopsis-write">实验图片</p>
            <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon">
            </i>
            </el-upload>
        </div>

        <div id="synopsis-teacher">
            <p id="synopsis-write">实验老师</p>
            <div style="margin-left:20px">
                <template>
                    <el-select v-model="TwacherValue" placeholder="请选择">
                        <el-option  v-for="item in options"
                                    :key="item.TeacherNumber"
                                    :label="item.expTeacher"
                                    :value="item.TeacherNumber">
                    </el-option>
                    </el-select>
                </template>
            </div>
        </div>

        <div id="synopsis-Video">
            <p id="synopsis-write">简介视频</p>
            <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="SynopsisVideoUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon">
            </i>
            </el-upload>
        </div>

        <div id="synopsis-Video">
            <p id="synopsis-write">引导视频</p>
            <el-upload 
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="GuideVideoUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon">
            </i>
            </el-upload>
        </div>

        <div id="synopsis-synopsis">
            <p id="synopsis-write">实验简介</p>
            <el-input type="textarea"
                        :rows="10"
                        placeholder="实验简介"
                        v-model="synopsisArea"
                        style="margin-left:15px;
                               width:85%;">
            </el-input>
        </div>

        <div id="synopsis-btton">
            <el-row>
                <el-button type="warning" id="synopsisBtton">下一条</el-button>
                 <el-button type="success" id="synopsisBtton">生成实验</el-button>
            </el-row>
        </div>

        <div style="width:100%;height:200px"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            experimentName:'',
            imageUrl: '',
            TwacherValue:'',
            SynopsisVideoUrl:'',
            GuideVideoUrl:'',
            synopsisArea:'',



            options: [{
                TeacherNumber: '选项1',
                expTeacher: '张三'
                }, {
                TeacherNumber: '选项2',
                expTeacher: '李四'
                }, {
                TeacherNumber: '选项3',
                expTeacher: '王五'
            }],
        }
    },


    methods: {






    // 图片上传方法
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
        } 
    }
}
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
    }
        #synopsis-box{
            /* border: 1px solid red; */
        }
            #synopsis-name{
                width: 300px;
                height: 40px;
                line-height: 40px;
                /* border: 1px solid red; */
                display: flex;
            }
                #synopsis-write{
                    font-size:18px
                }
            #synopsis-img{
                /* border: 1px solid red; */
                margin-top: 20px;
                display: flex;
            }
            #synopsis-teacher{
                height: 40px;
                line-height: 40px;
                margin-top: 15px;
                display: flex;
                /* border: 1px solid red; */
            }
            #synopsis-Video{
                display: flex;
                margin-top: 15px;
                /* border: 1px solid red; */
            }
            #synopsis-synopsis{
                display: flex;
                margin-top: 15px;
                width: 60%;
                /* border: 1px solid red; */
            }
            #synopsis-btton{
                margin-top: 25px;
                margin-left: 7%;
                width: 1200px;
                /* border: 1px solid red; */
            }
                #synopsisBtton{
                    width: 180px;
                    height: 60px;
                    font-size: 30px;
                    font-weight: 600;
                    margin-right: 150px;
                }
</style>






// 图片上传框样式
<style>
  .avatar-uploader .el-upload {
    margin-left: 20px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
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
    width: 178px;
    height: 178px;
    display: block;
  }
</style>