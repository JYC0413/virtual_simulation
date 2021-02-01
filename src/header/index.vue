<template>
    <div>
    <el-container>
        <el-header class="header">
          <div id="header">
          <div id="logo"></div><div id="vr"></div>
          <div class="title-demo">
            <el-menu :default-active="activeIndex2"  mode="horizontal"
            active-text-color="#FF9E00">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">实验中心</el-menu-item>
            <el-menu-item index="3">咨询论坛</el-menu-item>
            <el-menu-item index="4">教师中心</el-menu-item>
            <el-menu-item index="5">关于我们</el-menu-item>
          </el-menu>
        </div>
          <div id="user"><i class="el-icon-user-solid" style="color:orange"></i>李小二</div>
        </div>
        </el-header>
        <el-main class="main-container">
            <keep-alive>
              <router-view/>
            </keep-alive>
        </el-main>
    </el-container>
    </div>
</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    overflow: hidden;
  }
  #logo{
    margin-top: 10px;
    margin-left: 30px;
    height: 50px;
    width: 150px;
    float: left;
    background-image: url('logo.png');
  }
  #vr{
    margin-top: 10px;
    margin-left: 30px;
    height: 50px;
    width: 300px;
    float: left;
    background-image: url('vr.png');
  }
  #user{
    width:60px;
    margin-top: 30px;
    font-size: 12px;
    margin-right: 50px;
    float: right;
  }
  .el-icon-user-solid{
    margin-right: 5px;
  }
  .title-demo{
    float: left;
    margin-left: 50px;
    margin-top: 10px;
    font-weight: 600;
    width: 480px;
 
  }

</style>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
    methods:{
      // getShiyan(id){
      //   this.$router.push({
      //     path:'/teacher',
      //     query:{
      //       id:id,
      //     }
      //   })
      // },
  }
}
</script>