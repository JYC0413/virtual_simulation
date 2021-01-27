<template>
    <div>
        <div style="margin-top: 10px">
           <p style="line-height:0; margin-bottom:5px;">
        <span style= "font-weight:700; 
        font-size:17px; 
        color:rgba(51, 51, 51, 1); 
        font-style:normal; 
        letter-spacing:0px; 
        line-height:25px; 
        text-decoration:none;">快捷登录</span>
           </p>
       </div>
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
           <div style="width: 90px; 
           height: 34px; 
           left: 1403px; 
           top: 315px;
           z-index: 12; 
           font-size: 14px; 
           text-align: left; 
           font-weight: normal; 
           font-style: normal; 
           opacity: 1;">
           <div class="rich-text">
               <p style="line-height:0; margin-bottom:5px;">
                   <span style=" font-weight:400; 
                   font-size:17px; 
                   color:rgba(102, 102, 102, 1); 
                   font-style:normal; 
                   letter-spacing:0px; 
                   line-height:25px; 
                   text-decoration:none;">密码登录</span>
                   </p>
                   </div>
                   <div class="region gesture "></div>
                   </div>
       
 <el-form   label-width="80px">
<div>
  <el-input placeholder="请输入手机号" v-model="input1">
    <template slot="prepend">+86</template>
  </el-input>
</div>

<div style="margin-top: 15px;">
  <el-input placeholder="请输入短信验证码" v-model="input2">
    <template slot="append">获取短信验证码</template>
  </el-input>
</div>
 <el-button type="warning" @click="onSubmit">登陆</el-button>
<div class="text" style="padding: 0px;">
     <el-button style="color:#ff9e00">微信扫码登录</el-button>
 </div>
    </el-form>
     <p style="line-height:0; margin-bottom:5px;">
<span style=" font-weight:400; 
     font-size:14px;
     color:rgb(102, 102, 102); 
     font-style:normal; 
     letter-spacing:0px; 
     line-height:20px; 
     text-decoration:none;">没有账号？</span>
     </p>
     <p style="line-height:0; margin-bottom:5px;">
       <span style="font-weight:700; 
       font-size:14px;
        color:rgba(255, 158, 0, 1); 
        font-style:normal; 
        letter-spacing:0px; 
        line-height:20px; 
        text-decoration:none;">立即注册</span>
     </p>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.$route.query.id,this.$route.query.name)
            // console.log(this.$route.query.id)
    },
    created(){

    },
}
</script>