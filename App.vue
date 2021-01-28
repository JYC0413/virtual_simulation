<template>
  <div id="app">
   <el-container>
  <el-header style="text-align: left;">
     <img  src="./assets/www.jpg">
   <img  src="./assets/ttt.jpg">
   </el-header>
  
  
  <el-main style="width: 1920px; 
   height: 1065px; 
   left: 0px; top: 0px; 
   z-index: 5; 
   background-color: rgb(238, 238, 238); 
   border: none; 
   font-size: 14px; 
   padding: 0px; 
   text-align: left; 
   line-height: 20px; 
   font-weight: normal; 
   font-style: normal; ">

    <div  style="overflow: hidden; 
    border-color: rgb(187, 187, 187); 
    border-width: 0px; border-style: solid;">
    <span style="display: none; background-color: transparent;">
      <svg style="width: 24px; height: 22px;">
        </svg>
        </span>
       
        <img class="img" src="./assets/yyy.jpg" style="top: 0px;
                                                        display: block; 
                                                         left: 0px; 
                                                       width: 1000px;
                                                        height:  575.236px;
                                                         : rotate(0deg);">
                                                        </div>                                        
   </el-main>
  <el-footer  style="background-color: rgb(46, 46, 65);">Footer</el-footer>
   <router-view/>
</el-container>
  
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
     
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
}
</style>
