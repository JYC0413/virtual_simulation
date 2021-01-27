<template>
    <div>
        <div>
  <el-input   type="mobile" placeholder="请输入手机号" v-model="input1">
    <template slot="prepend">+86</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input type="code" placeholder ="请输入短信验证码" v-model="input2">
    <template slot="append">获取短信验证码</template>
  </el-input>
</div>
     <input type="password" placeholder="请输入密码">
     <div class="region gesture " style="display: none;"></div>
     <div style="width: 27px; 
     height: 27px; 
     left: 373px; 
     top: 17px; 
     z-index: 7; 
     border-color: rgb(187, 187, 187); 
     border-width: 0px; 
     border-style: solid; 
     color: rgb(153, 153, 153); 
     font-weight: normal; 
     font-style: normal; 
     opacity: 1;">
     </div>
      <div class="region gesture " style="display: none;"></div>
     <input type="name" placeholder="请输入姓名">
     <input type="perfession" placeholder="请输入专业">
     <div class="region gesture " style="display: none;"></div>
    <input type="class" placeholder="请输入班级">
    <input type="number" placeholder="请输入学号">
  
 
           
   <p style="line-height:0; margin-bottom:5px;">
       <label class="Android-Check">
    <input type="checkbox">
    <span class="CheckState">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10">
            </svg>
            </span>
            </label>
       <span  style="font-weight:400; 
       font-size:12px; 
       color:rgba(102, 102, 102, 1); 
       font-style:normal; 
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">我已同意 </span>
       <span style=" font-weight:400; 
       font-size:12px; 
       color:rgba(255, 158, 0, 1); 
       font-style:normal; 
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">《###使用协议》</span>
       <span  style=" font-weight:400; 
       font-size:12px; 
       color:rgba(102, 102, 102, 1); 
       font-style:normal; 
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">和 </span>
       <span  style=" font-weight:400; 
       font-size:12px; 
       color:rgba(255, 158, 0, 1); 
       font-style:normal; 
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">《用户隐私协议》</span>
       </p>

<el-button type="warning" @click="onSubmit">注册</el-button>
 <p style="line-height:0; margin-bottom:5px;">
<span style=" font-weight:400; 
     font-size:14px;
     color:rgb(102, 102, 102); 
     font-style:normal; 
     letter-spacing:0px; 
     line-height:20px; 
     text-decoration:none;">已有账号？</span>
     </p>
     <p style="line-height:0; margin-bottom:5px;">
       <span style="font-weight:700; 
       font-size:14px;
        color:rgba(255, 158, 0, 1); 
        font-style:normal; 
        letter-spacing:0px; 
        line-height:20px; 
        text-decoration:none;">立即登录</span>
     </p>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
  
}
</script>