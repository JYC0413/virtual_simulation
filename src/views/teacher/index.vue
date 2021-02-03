<template>
  <div class="bbd">
    <!-- 头 -->
    <div class="toutiao">
      <div class="selectmenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          id="new-main" text-color="#000" active-text-color="#FF9E00">
          <el-menu-item index="1" id="new-div" @click="chang('全部')">全部</el-menu-item>
          <el-menu-item index="2" id="new-div" @click="chang('未发布')">未发布</el-menu-item>
          <el-menu-item index="3" id="new-div" @click="chang('已发布')">已发布</el-menu-item>
          <el-menu-item index="4" id="new-div" @click="chang('已下架')">已下架</el-menu-item>
        </el-menu>
      </div>
      <div class="beside">
        <el-input v-model="input" size="mini" placeholder="实验名称" class="inputbox"></el-input>
        <el-button size="mini" class="normalbutton">搜索</el-button>
        <el-button class="newbutton" size="mini" type="success">创建实验</el-button>
      </div>
    </div>
    <!-- 实验 -->
    <div class="card">
      <el-table :data="tableData" show-header style="width: 100%;" cell-style="border: none; 
          margin: 0px; padding: 0px;" header-cell-style="border: none;">
        <el-table-column>
          <template slot-scope="scope" v-if="targetType==scope.row.type || targetType=='全部'">
            <div>
            <div id="card_left">
              <div id="card_img"></div>
              <div id="fenlei">{{scope.row.type}}</div>
            </div>
              <div id="information">
                <div id="cardinfor_left">
                <div id="card_top">
                  <div id="card_name">{{scope.row.name}}</div>
                  <div id="shiyanid">{{'实验id：' + scope.row.id}}</div>
                  <div id="shiyantime">{{'创建时间：' + scope.row.date}}</div>
                  <hr align="left" width="550px">
                </div>
                <div id="cardinfor">
                <div id="new-form-title">
                  {{scope.row.xyname}}
                </div>
                <div id="new-form-summary">
                  {{scope.row.zyname}}
                </div>
                <div id="new-form-summary">
                  {{scope.row.teacher}}
                </div>
                <div id="new-button">
                  
                  <router-link to="/synopsis"><el-button type="warning" id="synopsisBtton">实验编辑</el-button></router-link>
                    <el-button type="warning" id="synopsisBtton">考试管理</el-button>
                    <el-button type="warning" id="synopsisBtton">实验报告管理</el-button>
                
                </div>
              </div>
            </div>
            <div id="cardinfor_right">

                <div><el-button type="danger" size="mini" id="infor_btn">删除实验</el-button></div>
                <div><el-button type="success" size="mini" id="infor_btn">上架实验</el-button></div>

            </div>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        input: '',
        targetType:'全部',
        tableData: [{
          name:'实验名称名称',
          type:'未发布',
          id:'123456',
          date: '2018-05-02',
          xyname: 'xxx学院',
          teacher:'xxx老师',
          zyname: 'xxx专业'
        }, {
          name:'实验名称名称',
          type:'已发布',
          id:'123456',
          date: '2026-05-04',
          xyname: 'xxx学院',
          teacher:'xxx老师',
          zyname: 'xxx专业'
        }, {
          name:'实验名称名称',
          type:'已下架',
          id:'123456',
          date: '2008-05-01',
          xyname: 'xxx学院',
          teacher:'xxx老师',
          zyname: 'xxx专业'
        },{
          name:'实验名称名称',
          type:'已下架',
          id:'123456',
          date: '2008-05-01',
          xyname: 'xxx学院',
          zyname: 'xxx专业',
          teacher:'xxx老师',
         }]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      chang(p){
          this.targetType=p;
          console.log(this.type);
      },
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .bbd {
    margin: 50px;
    margin-bottom: 0px;
  }

  .toutiao {
    height: 50px;
  }

  .selectmenu {
    width: 200px;
    margin-left: 50px;
    float: left;
  }

  .beside {
    width: 800px;
    float: left;
  }

  .inputbox {
    float: left;
    margin-top: 12px;
    margin-left: 80px;
    width: 150px;
    height: 30px;
    font-size: 12px;
  }

  .normalbutton {
    margin-left: 5px;
    margin-top: 12px;
    background-color: orange;
    font-size: 12px;
    font-weight: 600;
    color: white;
    float: left;
    width: 60px;
  }

  .normalbutton:hover {
    font-weight: 600;
    color: white;
    background-color: darkorange;
  }

  .newbutton {
    font-weight: 600;
    margin-top: 12px;
    float: right;
    height: 30px;
    width: 80px;
  }

  #new-div {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    padding: 0px;
    margin: 6px;
  }

  /* 卡片列表 */
  .card {
    margin-top: 0px;
    height: 400px;
  }
  #card_left{
    width: 28%;
  }
  #information{
    float:right;
    width: 70%;
    
  }
  #card_top{
    float: left;
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
  }
  #cardinfor{
    margin-left: 20px;
    width: 800px;
    float: left;
  }
  #cardinfor_left{
    width: 80%;
    float: left;
  }
  #cardinfor_right{
    width: 20%;
    height: 200px;
    padding-top: 20px;
    padding-left: 20px;
    float: right;
  }
  #cardinfor_right>div{
    padding-bottom: 10px;
  }

  #card_img {
    width: 100%;
    height: 200px;
    margin: 5px;
    background-image: url('/assets/shiyan.jpg');
    background-size: 100% 100%;
    float: left;
    position: relative;
  }
  #card_name{
    font-weight: 600;
    font-size: 20px;
    width: 100%;
  }

  #shiyanid{
    width: 130px;
    float: left;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  #shiyantime{
    width:200px;
    padding-top: 15px;
    padding-bottom: 15px;
    float: left;
  }
  #fenlei{
    position: absolute; 
    background-color: #2cabff;
    color:white;
    font-size: 12px;
    padding: 2px 5px;
    top:20px;
    }
    #synopsisBtton{
    width: 140px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    }
</style>