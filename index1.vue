<template>
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

    <span style="float:right;padding-right:70px;padding-top:50px">
        
      <div style="padding-left:450px">

        <span style= "font-weight:700; 
        font-size:17px; 
        color:rgba(51, 51, 51, 1); 
        line-height:25px; 
       ">快捷登录</span>

     
     <span style=" font-weight:400; 
                   font-size:17px; 
                   color:rgba(102, 102, 102, 1); 
                   line-height:25px; 
                   ">密码登录</span>
     
      
        
           <div  style="width: 64px; 
           height: 3px; 
           left: 1284px; 
           top: 347px; 
           z-index: 16; 
           background-color: rgb(255, 158, 0); 
           border: none; font-size: 14px; 
           padding: 0px; text-align: center; 
           line-height: 20px; font-weight: normal; 
           font-style: normal; opacity: 1;">
           <div class="text" style="padding: 0px;">
               <p>&nbsp;</p>
           </div>
          </div>
           </div>


  <el-form >
<span style=" padding-left:450px; 
  position: absolute;
  bottom: 400px;
  width: 830px;
  height:90px; 
  box-sizing: border-box;">


  <el-input  placeholder="请输入手机号" v-model="mobile">
    <template slot="prepend">+86</template>
  </el-input>


<div style="margin-top: 40px;   ">
  <el-input   placeholder="请输入短信验证码" v-model="password">
    <template slot="append" >获取短信验证码</template>
  </el-input>
</div>


</span>
</el-form>


<div style="margin-top: 250px;">
<scanp style="float:right；padding-top: 150px;
           padding-left:450px;
           width: 350px; 
           ">
            
  
 <el-button type="warning" @click="onSubmit" style="height:60px;  width: 380px; padding-left:15px;">登录</el-button>
</scanp>
</div>


<div style="margin-top: 40px;">
 <scanp style="float:right；padding-top: 150px;
           padding-left:450px;
           ">
     <el-button style="color:#ff9e00;height:60px;  width: 380px; padding-left:15px;">微信扫码登录</el-button>
 
 </scanp>
</div>
    
   <div style="margin-top: 30px; ">
<span style=" font-weight:400; 
     font-size:14px;
     color:rgb(102, 102, 102); 
     font-style:normal; 
     padding-left:580px;
     
     text-decoration:none;">没有账号？</span>
      
      <span style="font-weight:700; 
       font-size:14px;
        color:rgba(255, 158, 0, 1); 
       ">立即注册</span>
    
   </div>
     
   
 </span> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      mobile: '',
      password: '',
    };
  },
  components: {
 
  }
}
</script>


