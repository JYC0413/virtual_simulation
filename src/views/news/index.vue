<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      id="new-main"
      text-color="#000"
      active-text-color="#FF9E00"
    >
      <el-menu-item index="1" id="new-div-1" @click="chang('全部')"
        >全部</el-menu-item
      >
      <el-menu-item index="2" id="new-div-2" @click="chang('新闻')"
        >新闻</el-menu-item
      >
      <el-menu-item index="3" id="new-div-2" @click="chang('通知')"
        >通知</el-menu-item
      >
      <el-menu-item index="4" id="new-div-2" @click="chang('咨询')"
        >咨询</el-menu-item
      >
    </el-menu>

    <div id="new-form">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          cell-style="border: none; 
                                        margin: 0px;
                                        padding: 0px;"
          header-cell-style="border: none;"
          fit="false"
        >
          <el-table-column>
            <template
              slot-scope="scope"
              v-if="targetType == scope.row.type || targetType == '全部'"
            >
              <div id="new-form-div">
                <div id="new-form-div-img"></div>
                <div id="new-form-div-infor">
                  <div id="new-infor-top">
                    <div id="new-infor-type">{{ scope.row.type }}</div>
                    <div id="new-infor-date">{{ scope.row.date }}</div>
                  </div>
                  <div id="new-form-title">
                    {{ scope.row.title }}
                  </div>
                  <div id="new-form-summary">
                    {{ scope.row.summary }}
                  </div>
                  <div id="new-button">
                    <el-button
                      type="text"
                      style="color: black"
                      id="news-content"
                      >默认按钮</el-button
                    >
                    <div id="news-content-img"></div>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>

    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple">
          <div>
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div id="typer" style="display:flex">
            学院分类：
            <div style="padding: 5px; ">
            <el-tag type="warning">全部</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">法学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">建筑学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">马克思主义学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">体育学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">历史学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">物理学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">电气学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">矿业学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">农业工程学院</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">林业工程学院</el-tag>
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <div id="types" style="display:flex;flex-wrap:wrap ">
            专业分类：
            <div style="padding: 5px; ">
            <el-tag type="warning">全部</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">自然保护与环境生态类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">公共卫生与预防医学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">法医学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">医学技术类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">经济管理类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">艺术学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">生物科学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">机械类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">电子信息类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">航空航天类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">化工与制药类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">交通运输类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">核工程类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">临床医学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">药学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">化学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">心理学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">能源动力类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">土木类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">测绘类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">环境科学与工程类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">食品科学与工程类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">植物类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">动物类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">基础医学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">中医类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">护理学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">教育学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">地质类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">文学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">天文学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">地理科学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">大气科学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">海洋科学类</el-tag>
            </div>
            <div style="padding: 5px; ">
            <el-tag type="warning">地球物理学类</el-tag>
            </div>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="1.5"
        ><div class="grid-content bg-purple">关键词查询：</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple-light">
          <el-input placeholder="学院名称" v-model="input" clearable>
          </el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-input placeholder="实验名称" v-model="input" clearable>
          </el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light">
          <el-input placeholder="负责人姓名" v-model="input" clearable>
          </el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-button type="warning">搜索</el-button>
        </div></el-col
      >
    </el-row>
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
    <span>排序：</span>
    <span>最新 ▼</span>
    <span>评分  ▼</span>
    </div></el-col>
</el-row>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
          </div></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
          </div></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
          </div></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">实验课程标题最多25个字</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span class="demonstration">实验教师姓名</span>
            <span class="demonstration">学院名称10个字</span>
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <div class="block">
            <span class="demonstration">实验课程标题最多25个字</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span class="demonstration">实验教师姓名</span>
            <span class="demonstration">学院名称10个字</span>
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">实验课程标题最多25个字</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span class="demonstration">实验教师姓名</span>
            <span class="demonstration">学院名称10个字</span>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
          </div></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
          </div></div
      ></el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="src"></el-image>
            </div>
          </div></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">实验课程标题最多25个字</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span class="demonstration">实验教师姓名</span>
            <span class="demonstration">学院名称10个字</span>
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <div class="block">
            <span class="demonstration">实验课程标题最多25个字</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span class="demonstration">实验教师姓名</span>
            <span class="demonstration">学院名称10个字</span>
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">实验课程标题最多25个字</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span class="demonstration">实验教师姓名</span>
            <span class="demonstration">学院名称10个字</span>
          </div>
        </div></el-col
      >
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>


    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <el-table :data="tableData1" stripe style="width: 80%">
            <el-table-column prop="name" label="姓名" >
            </el-table-column>
            <el-table-column prop="academy" label="院校" >
            </el-table-column>
            <el-table-column prop="specialty" label="专业"> </el-table-column>
            <el-table-column prop="class" label="班级"> </el-table-column>
            <el-table-column prop="number" label="学号"> </el-table-column>
            <el-table-column prop="grade" label="实验成绩"> </el-table-column>
            <el-table-column prop="report" label="实验报告"> </el-table-column>
          </el-table></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      targetType: "全部",
      pp: "",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      value: 4.5,
      input: "",
      tableData1: [
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
      ],
      tableData: [
        {
          type: "新闻",
          date: "2016-05-02",
          title: "重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻",
          summary:
            "内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介",
        },
        {
          type: "通知",
          date: "2016-05-04",
          title: "重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻",
          summary:
            "内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介",
        },
        {
          type: "咨询",
          date: "2016-05-01",
          title: "重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻",
          summary:
            "内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介",
        },
      ],
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    chang(p) {
      this.targetType = p;
      console.log(this.type);
    },
  },
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
#box {
  border: 1px solid red;
}
#new-main {
  background: #dedddd;
  height: 50px;
}
#new-div-1 {
  background: #dedddd;
  font-weight: 1000;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  padding: 0px;
  margin-left: 70%;
  margin-right: 2%;
  margin-top: 5px;
  margin-bottom: 5px;
}
#new-div-2 {
  background: #dedddd;
  height: 40px;
  padding: 0px;
  line-height: 40px;
  font-weight: 700;
  font-size: 18px;
  margin-right: 2%;
  margin-top: 5px;
  margin-bottom: 5px;
}
#new-form {
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 90%;
}
#new-form-div {
  margin-top: 15px;
  width: 100%;
  height: 310px;
  border: 2px solid rgb(212, 212, 212);
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 5px #909090;
}
#new-form-div-img {
  width: 40%;
  height: 300px;
  /* border: 1px solid red; */
  margin-bottom: 5px;
  background-image: url("textnews.png");
  background-size: 100% 100%;
}
#new-form-div-infor {
  /* border: 1px solid red; */
  height: 300px;
  width: 56%;
}
#new-infor-top {
  /* border: 1px solid red; */
  width: 100%;
  height: 15%;
  display: flex;
}
#new-infor-type {
  height: 100%;
  width: 16%;
  background: #ff9e00;
  color: white;
  font-size: 20px;
  font-weight: 900;
  padding: 10px 10px;
}
#new-infor-date {
  /* border: 1px solid red; */
  margin-left: 4%;
  width: 200px;
  margin-top: 3%;
  font-size: 20px;
  font-weight: 900;
}
#new-form-title {
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 900;
  color: black;
}
#new-form-summary {
  /* border: 1px solid red; */
  width: 80%;
  height: 40%;
  color: black;
  font-size: 18px;
}
#new-button {
  display: flex;
}
#news-content {
  font-size: 18px;
  font-weight: 900;
  /* border: 1px solid red; */
  margin-left: 80%;
}
#news-content-img {
  /* border: 1px solid red; */
  width: 43px;
  height: 40px;
  background-image: url("121.png");
  margin-left: 3%;
}
.sysBox .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #fd7a3a;
  color: #fff;
}
</style>
