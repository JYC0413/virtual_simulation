
<template>
<div class="main">
  <!-- 轮播图 -->
  <div class="lunbo">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
</div>
    <div class="zixun1">
      <div class="zx_left">
        <div class="zx_header"><div>新闻通知</div><div class="imore">点击查看更多<i class="el-icon-d-arrow-right"></i></div></div>
        <div class="zx_body">
        <div>
          <div class="linne">
            <div class="linl">这是新闻标题其中最多35个字</div>
            <div class="linr">2020-08-22</div>
          </div>
          
        </div>

      </div>
      </div>
      <div class="zx_right">
        <div class="zx_header"><div>仿真咨讯</div><div class="imore">点击查看更多<i class="el-icon-d-arrow-right"></i></div></div>
        <div class="zx_body">
          <div class="linne">
            <div class="linl">这是新闻标题其中最多35个字</div>
            <div class="linr">2020-08-22</div>
          </div> 
      </div>
      </div>
    </div>
    <div class="zixun2">
      <div class="zx_header"><div>精选实验</div><div class="imore">点击查看更多<i class="el-icon-d-arrow-right"></i></div></div>
      <div>
      <el-row>
        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
            <img src="/vue_xu/my_vue/src/views/img/test0.jpg" class="image">
            <div style="padding: 14px;">
              <span>实验课程标题最多25个字<br>实验教师姓名 学院名称10个字</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
        </el-col>
      </el-row>
    </div>
    </div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  .main{
    margin: 0 6%;
    overflow: hidden;
  }
  /* 轮播图 */

  .lunbo{
    height: 310px;
  }
  .el-carousel__item{
    border: 10px solid orange;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    line-height: 300px;
  } 
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 资讯头 */
  .zx_header{
    color: #fff;
    background-color: orange;
    height: 30px;
  }
  .zx_header>div:first-child{
    float: left;
    padding: 5px 0px 0px 10px;
  }
  .zx_header>div:last-child{
    padding: 5px 10px 0px 0px;
    float: right;
  }
  /* 资讯内容 */
  .zixun1{
    height: 250px;
    margin: 10px 0;
  }
  .zixun2{
    margin: 10px 0;
  }

  .zx_left{
    width: 48%;
    float: left;
  }
  .zx_right{
    width: 48%;
    float: right;
  }    
  .zx_body{
    float: left;
    padding-top: 10px;
    width: 290px;
    font-size: 14px;
    width: 100%;
  }
  .zx_body_left{
    width: 290px;
    float: left;
  }
  .el-icon-d-arrow-right{
    padding: 1px 10px 0px 20px;
    float: right;
    font-size: large;
  }
/* 新闻表格 */
  .linne{
    width: 100%;
  }
  .linl{
    float:left;
  }
  .linr{
    float: right;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }


</style>