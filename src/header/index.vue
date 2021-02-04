<template>
    <div>
    <el-container>
        <el-header class="header">
          <div id="header">
          <div id="logo"></div>
            <div id="vr"></div>
          <div class="title-demo">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><router-link to="/shouye">首页</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/experiment">实验中心</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/news">咨询论坛</router-link></el-menu-item>
              <el-menu-item v-if="login===true" index="3"><router-link to="/teacher">教师中心</router-link></el-menu-item>
              <el-menu-item index="4">关于我们</el-menu-item>
            </el-menu>
        </div>
            <el-popover
                placement="bottom"
                trigger="hover"
                v-model="visible">
              <div style="text-align:center;">
              <el-button type="text" @click="visible = false">个人中心</el-button><br>
              <el-button type="text" @click="visible = false">退出登录</el-button>
              </div>
              <el-button type="text" slot="reference" style="margin: 20px 80px;float: right"><i class="el-icon-user-solid" style="color:orange"></i>李小二</el-button>
            </el-popover>
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
    background-image: url('../assets/logo.png');
  }
  #vr{
    margin-top: 10px;
    margin-left: 30px;
    height: 50px;
    width: 300px;
    float: left;
    background-image: url('../assets/vr.png');
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
        login: true,
        visible: false,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
    methods:{

  }
}
</script>