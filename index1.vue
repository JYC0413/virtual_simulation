<template>
<div>
    <span style="float:right;padding-right:90px;padding-top:100px">
        
     <div style="padding-left:10px;">
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


</div>

<div style="padding-left:460px; padding-top:200px;">
    <el-input v-model="input" placeholder="请输入密码"></el-input>
     <div class="region gesture " style="display: none;"></div>
     <div style="width: 27px; 
     height: 27px; 
     left: 373px; 
     top: 17px; 
     z-index: 7; 
     border-color: rgb(187, 187, 187); 
     border-width: 0px; 
     border-style: solid; 
     color: rgb(153, 153, 153); ">
     </div>
      <div class="region gesture " style="display: none;"></div>
    <input type="name" placeholder="请输入姓名">
     <input type="profession" placeholder="请输入专业">
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
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">我已同意 </span>
       <span style=" font-weight:400; 
       font-size:12px; 
       color:rgba(255, 158, 0, 1); 
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">《###使用协议》</span>
       <span  style=" font-weight:400; 
       font-size:12px; 
       color:rgba(102, 102, 102, 1);  
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">和 </span>
       <span  style=" font-weight:400; 
       font-size:12px; 
       color:rgba(255, 158, 0, 1); 
       letter-spacing:0px; 
       line-height:18px; 
       text-decoration:none;">《用户隐私协议》</span>
       </p>
</div>


<div style="margin-top: 60px;">
<scanp style="float:right；padding-top: 150px;
           padding-left:450px;
           width: 350px; 
           ">
            
  
 <el-button type="warning" @click="onSubmit" style="height:60px;  width: 380px; padding-left:15px;">注册</el-button>
</scanp>
</div>

   <div style="margin-top: 30px; ">
<span style=" font-weight:400; 
     font-size:14px;
     color:rgb(102, 102, 102); 
     font-style:normal; 
     padding-left:580px;
     
     text-decoration:none;">已有账号？</span>
      
      <span style="font-weight:700; 
       font-size:14px;
        color:rgba(255, 158, 0, 1); 
       ">立即登录</span>
    
   </div>
    </span>


      </div>
</template>

<script>

export default {
  data() {
    return {
         mobile:'',
         code:'',
     password:'',
     name:'',
     perfession:'',
     class:'',
     number:'',
    
    };
  },
  methods: {
            onSubmit(){
        let data={
        password:this.password,
        mobile:this.mobile
        }
        login(data).then(res=>{
          console.log(res);
          if(res.status==1){
            console.log('你好');
             this.$router.push({ path:'/experiment' })
          }else{
            this.$message.error(res.message)
          }
        })
     
          // login(data).then(res=>{
          //   let _this=this;
          //  console.log(res)
          //   if(res.status==1){
          //   //  console.log(res)
          //      // this.$router.push({ path:'/institutions' })
          //     _this.$router.push({path:'/experiment'})
          //   }
          // })
            } 
  }
  }
</script>