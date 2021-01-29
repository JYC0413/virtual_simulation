<template>
  <div>
    <div
      class="box"
      style="
        width: 520px;
        height: 640px;
        background-color: white;
        border-radius: 5px;
        position: absolute;
        left: 1200px;
        top: 180px;
      "
    >
      <span style="float: right; padding-right: 90px; padding-top: 100px">
        <div style="padding-left: 10px">
          <el-form>
            <span
              style="
                padding-left: 455px;
                position: absolute;
                bottom: 470px;
                width: 820px;
                height: 90px;
                box-sizing: border-box;
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
                <el-input placeholder="请输入密码" v-model="password">
                </el-input>
              </div>
            </span>
          </el-form>

          <div style="padding-left: 450px; padding-top: 170px">
            <div style="margin-top: 25px">
              <div>
                <el-input
                  type="name"
                  placeholder="请输入姓名"
                  style="width: 180px; height: 40px; padding-left: 5px"
                ></el-input>
                <el-input
                  type="profession"
                  placeholder="请输入专业"
                  style="width: 180px; height: 40px; padding-left: 5px"
                ></el-input>
              </div>
            </div>

            <div style="margin-top: 25px">
              <div>
                <el-input
                  type="class"
                  placeholder="请输入班级"
                  style="width: 180px; height: 40px; padding-left: 5px"
                ></el-input>
                <el-input
                  type="number"
                  placeholder="请输入学号"
                  style="width: 180px; height: 50px; padding-left: 5px"
                ></el-input>
              </div>
            </div>

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
        </div>

        <div style="margin-top: 20px">
          <scanp
            style="float:right；padding-top: 150px;
           padding-left:450px;
           width: 350px; 
           "
          >
            <el-button
              type="warning"
              @click="onSubmit"
              style="height: 60px; width: 380px; padding-left: 15px"
              >注册</el-button
            >
          </scanp>
        </div>

        <div style="margin-top: 30px">
          <span
            style="
              font-weight: 400;
              font-size: 14px;
              color: rgb(102, 102, 102);
              font-style: normal;
              padding-left: 580px;

              text-decoration: none;
            "
            >已有账号？</span
          >

          <span
            @click="onSubmit"
            style="
              font-weight: 700;
              font-size: 14px;
              color: rgba(255, 158, 0, 1);
            "
            >立即登录</span
          >
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mobile: "",
      code: "",
      password: "",
      name: "",
      class: "",
      number: "",
      profession: "",
    };
  },
  components: {},
};
</script>


