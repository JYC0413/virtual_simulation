<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: left">
        <img src="./assets/www.jpg" />
        <img src="./assets/ttt.jpg" />
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
          <img src="./assets/yyy.jpg" style="width: 950px; height: 650px" />
        </span>
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
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
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