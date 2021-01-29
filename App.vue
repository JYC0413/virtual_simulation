<template>
  <div id="app">

   <el-container>
  <el-header style="text-align: left;">
     <img  src="./assets/www.jpg">
   <img  src="./assets/ttt.jpg">
   </el-header>
  


  <el-main style="background-color: rgb(238, 238, 238);
   width: 100%;
    height: 800px;
    left: 0px;
    top: 0px;
    z-index: 5;">

<span style="float:left;padding-left:100px;padding-top:100px">
   <img  src="./assets/yyy.jpg" style=" width: 950px;
    height: 650px">
</span>

<div class="box" style=" width: 520px;height: 640px;
  background-color: white;
  border-radius: 5px;
 position: absolute;;
  left: 1200px;
  top:180px;">

</div>
    </el-main>

<span style=" text-align: center;">
     <el-footer  style="background-color: rgb(46, 46, 65); 
        height: 80px;
       font-size:15px; 
       color:rgb(153, 153, 153);
       padding-top:50px">
      Copyright © 慧科教育  2020-2050
     </el-footer>
</span>

   <router-view/>
</el-container>
  </div>
</template>




<script>
export default {
  name: 'App',
  data () {
    return {
      input1: '',
      input2: '',
    };
  },
  components: {
 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  float:left;
     
}
