<template>
  <div>
    <el-container>
      <el-header style="text-align: left">
        <img src="../../assets/www.jpg" />
        <img src="../../assets/ttt.jpg" />
      </el-header>

      <el-main
        style="
          background-color: rgb(238, 238, 238);
          width: 100%;
          height: 790px;
          left: 0px;
          top: 0px;
          z-index: 5;
        "
      >
        <span style="float: left; padding-left: 100px; padding-top: 100px">
          <img src="../../assets/yyy.jpg" style="width: 950px; height: 650px" />
        </span>
        <div class="right_box">
          <!-- 登陆切换 -->
          <el-tabs
            type="border-card"
            v-if="isRegister"
            style="width: 395px; height: 150px"
          >
            <el-tab-pane label="快捷登陆">
              <el-form :model="loginForm">
                <div
                  style="
                    width: 64px;
                    height: 3px;
                    left: 1284px;
                    top: 347px;
                    z-index: 16;
                    background-color: rgb(255, 158, 0);
                    font-size: 14px;
                    padding: 0px;
                    text-align: center;
                    line-height: 20px;
                  "
                >
                  <div class="text" style="padding: 0px">
                    <p>&nbsp;</p>
                  </div>
                </div>

                <el-form-item style="margin-top: 50px; width: 375px">
                  <el-input
                    placeholder="请输入手机号"
                    v-model="loginForm.mobile"
                  >
                    <template slot="prepend">+86</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="margin-top: 10px; width: 375px">
                  <el-input
                    placeholder="请输入短信验证码"
                    v-model="loginForm.password"
                  >
                    <template slot="append">获取短信验证码</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="padding-top: 1px">
                  <el-button
                    type="primary"
                    style="
                      background-color: #ff9e00;
                      color: white;
                      height: 60px;
                      width: 380px;
                      padding-left: 15px;
                    "
                    >登陆</el-button
                  >
                </el-form-item>

                <el-form-item>
                  <el-button
                    type="primary"
                    style="
                      color: #ff9e00;
                      height: 60px;
                      width: 380px;
                      padding-left: 15px;
                    "
                    plain
                    >微信扫码注册</el-button
                  >

                  <div style="padding-top: 30px; padding-left: 15px">
                    <span
                      style="
                        font-weight: 400;
                        font-size: 14px;
                        color: rgb(102, 102, 102);
                        padding-left: 100px;
                      "
                    >
                      没有账号?
                      <span> <img src="../../assets/222.jpg" /> </span>
                      <span class="ljzc" @click="handleRegister()"
                        >立即注册</span
                      >
                    </span>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="密码登陆">
              <el-form :model="loginForm">
                <el-form-item style="margin-top: 50px; width: 375px">
                  <el-input
                    placeholder="请输入账户名称"
                    v-model="loginForm.username"
                  >
                   
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 375px; height: 35px;">
                  <el-input
                    placeholder="请输入账户密码"
                    v-model="loginForm.password"
                  >
                    
                  </el-input>
                </el-form-item>

                <el-form-item style="padding-top: 1px">
                  <el-button
                    type="primary"
                    style="
                      background-color: #ff9e00;
                      color: white;
                      height: 60px;
                      width: 380px;
                      padding-left: 15px;
                    "
                    >登陆</el-button
                  >
                </el-form-item>

                <el-form-item>
                  <el-button
                    type="primary"
                    style="
                      color: #ff9e00;
                      height: 60px;
                      width: 380px;
                      padding-left: 15px;
                    "
                    plain
                    >微信扫码注册</el-button
                  >

                  <div style="padding-top: 30px; padding-left: 15px">
                    <span
                      style="
                        font-weight: 400;
                        font-size: 14px;
                        color: rgb(102, 102, 102);
                        padding-left: 100px;
                      "
                    >
                      没有账号?
                      <span> <img src="../../assets/222.jpg" /> </span>
                      <span class="ljzc" @click="handleRegister()"
                        >立即注册</span
                      >
                    </span>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>

          <!-- 注册 -->
          <div v-else>
            <el-form :model="RegisterForm">
              <div
                style="
                  margin-top: 30px;
                  padding-left: 20px;
                  padding-right: 15px;
                "
              >
                <el-input placeholder="请输入手机号" v-model="mobile">
                  <template slot="prepend">+86</template>
                </el-input>

                <div style="margin-top: 30px">
                  <el-input placeholder="请输入短信验证码" v-model="code">
                    <template @click="onSubmit" slot="append"
                      >获取短信验证码</template
                    >
                  </el-input>
                </div>
                <div style="margin-top: 30px">
                  <el-input v-model="RegisterForm.pwd" placeholder="请输入密码">
                  </el-input>
                </div>
              </div>

              <div style="padding-left: 20px; padding-top: 35px">
                <div>
                  <el-input
                    v-model="RegisterForm.name"
                    placeholder="请输入姓名"
                    style="width: 180px; height: 40px; padding-left: 1px"
                  ></el-input>
                  <el-input
                    v-model="RegisterForm.input"
                    placeholder="请输入专业"
                    style="width: 180px; height: 40px; padding-left: 15px"
                  ></el-input>
                </div>

                <div style="margin-top: 15px">
                  <div>
                    <el-input
                      v-model="RegisterForm.input"
                      placeholder="请输入班级"
                      style="width: 180px; height: 40px; padding-left: 1px"
                    ></el-input>
                    <el-input
                      v-model="RegisterForm.input"
                      placeholder="请输入学号"
                      style="width: 180px; height: 50px; padding-left: 15px"
                    ></el-input>
                  </div>
                </div>
              </div>

              <div
                style="
                  margin-top: 10px;
                  padding-left: 30px;
                  padding-right: 15px;
                "
              >
              
                <p style="line-height: 0; margin-bottom: 5px">
                  <label>
                    <input type="checkbox" />
                    <span class="CheckState">
                      <svg width="14" height="10" viewBox="0 0 14 10"></svg
                    ></span>
                  </label>
                  <span
                    style="
                      font-weight: 400;
                      font-size: 12px;
                      color: rgba(102, 102, 102, 1);
                      letter-spacing: 0px;
                      line-height: 18px;
                      text-decoration: none;
                    "
                    >我已同意
                  </span>
                  <span
                    @click="onSubmit"
                    style="
                      font-weight: 400;
                      font-size: 12px;
                      color: rgba(255, 158, 0, 1);
                      letter-spacing: 0px;
                      line-height: 18px;
                      text-decoration: none;
                    "
                    >《###使用协议》</span
                  >
                  <span
                    style="
                      font-weight: 400;
                      font-size: 12px;
                      color: rgba(102, 102, 102, 1);
                      letter-spacing: 0px;
                      line-height: 18px;
                      text-decoration: none;
                    "
                    >和
                  </span>
                  <span
                    @click="onSubmit"
                    style="
                      font-weight: 400;
                      font-size: 12px;
                      color: rgba(255, 158, 0, 1);
                      letter-spacing: 0px;
                      line-height: 18px;
                      text-decoration: none;
                    "
                    >《用户隐私协议》</span
                  >
                </p>
              
              </div>

              <div style="padding-top: 25px; padding-left: 15px">
                <el-button
                  type="primary"
                  style="
                    background-color: #ff9e00;
                    color: white;
                    height: 60px;
                    width: 380px;
                    padding-left: 15px;
                  "
                  >注册</el-button
                >
              </div>
              <div style="padding-top: 30px; padding-left: 15px">
                <span
                  style="
                    font-weight: 400;
                    font-size: 14px;
                    color: rgb(102, 102, 102);
                    padding-left: 100px;
                  "
                >
                  已有账号?
                  <span> <img src="../../assets/222.jpg" /> </span>
                  <span
                    class="ljdl"
                    style="
                      cursor: pointer;
                      font-weight: 700;
                      font-size: 14px;
                      color: rgba(255, 158, 0, 1);
                    "
                    >立即登录</span
                  >
                </span>
              </div>
            </el-form>
          </div>
        </div>
      </el-main>

      <span style="text-align: center">
        <el-footer
          style="
            background-color: rgb(46, 46, 65);
            height: 80px;
            font-size: 15px;
            color: rgb(153, 153, 153);
            padding-top: 50px;
          "
        >
          Copyright © 慧科教育 2020-2050
        </el-footer>
      </span>
    </el-container>
  </div>
</template>

<script>
import { login } from "@/api/index";
export default {
  data() {
    return {
      isRegister: true,
      loginForm: {
        mobile: "",
        password: "",
        username:"",
      },
      RegisterForm: {
        pwd: "",
        input: "",
        name: "",
      },
    };
  },
  methods: {
    // 点击注册的时候 根据isRegister 做判断，跳转
    handleRegister() {
      console.log(this.isRegister);
      this.isRegister = false;
    },
    onSubmit() {
      // let data = {
      //   password: this.password,
      //   mobile: this.mobile,
      // };
      //this.loginForm  通过objecr对象绑定，在el-form里面绑定字段
      login(this.loginForm).then((res) => {
        console.log(res);
        if (res.status == 1) {
          console.log("你好");
          this.$router.push({ path: "/experiment" });
        } else {
          this.$message.error(res.message);
        }
      });
    },
    getSystem(id) {
      this.$router.push({
        path: `/system/${id}`, //es6语法
      });
      // this.$router.push({
      //   path:`/system/${id}`
      // })
    },
    getUser(id, name) {
      this.$router.push({
        path: "/user",
        query: {
          id: id,
          name: name,
        },
      });
      // this.$router.push({
      //   path:'/user',
      //   query:{
      //     id:id
      //   }
      // })
    },
  },
};
</script>
<style  scoped>
.right_box {
  width: 410px;
  height: 530px;
  background: #fff;
  float: right;
  padding: 20px 10px;
  margin-right: 200px;
  margin-top: 120px;
}

.el-tabs--border-card {
  /* margin-top: 5%; */
  border: none;
  box-shadow: none;
}
.el-form .el-form-item {
  margin-bottom: 55px;
}
.ljzc {
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 158, 0, 1);
}
</style>