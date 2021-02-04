<template>
  <div>
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
          <div style="display:flex;flex-wrap:wrap">
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
          <div style="display:flex;flex-wrap:wrap">
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
        ><div class="grid-content bg-purple" >关键词查询：</div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple-light" style="display:flex;">
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
    };
  },
};
</script>
<style>
.sysBox .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #FD7A3A;  
  color: #fff;
  }
</style>