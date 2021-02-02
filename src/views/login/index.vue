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
          height: 800px;
          left: 0px;
          top: 0px;
          z-index: 5;
        "
      >
        <span style="float: left; padding-left: 100px; padding-top: 100px">
          <img src="../../assets/yyy.jpg" style="width: 100%" />
        </span>
        <div class="right_box">
          <el-tabs type="border-card">
            <el-tab-pane label="快捷登陆">
              <el-form :model="loginForm">
                <el-form-item style="margin-top: 40px">
                  <el-input
                    placeholder="请输入手机号"
                    v-model="loginForm.mobile"
                  >
                    <template slot="prepend">+86</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-input
                    placeholder="请输入短信验证码"
                    v-model="loginForm.password"
                  >
                    <template slot="append">获取短信验证码</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 100%">
                  <el-button type="primary" style="width: 100%">登陆</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="width: 100%" plain
                    >微信扫码注册</el-button
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="密码登陆">配置管理</el-tab-pane>
          </el-tabs>
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
      loginForm: {
        mobile: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // let data = {
      //   password: this.password,
      //   mobile: this.mobile,
      // };
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
  width: 400px;
  height: 450px;
  background: #fff;
  float: right;
  padding: 30px 10px;
  margin-right: 30px;
  margin-top: 50px;
}
.el-tabs--border-card {
  margin-top: 5%;
  border: none;
  box-shadow: none;
}
.el-form .el-form-item {
  margin-bottom: 40px;
}
</style>