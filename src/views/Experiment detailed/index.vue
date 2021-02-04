<template>
  <div>
    <el-row style="padding:0 40px" type="flex" justify="space-between">
      <el-col :span="8">
        <el-tabs v-model="activeName" tabPosition="bottom" @tab-click="color=!color" stretch="ture">
          <el-tab-pane label="项目介绍视频" name="first" :class="{a: color}" @tab-click="changeColor(this)">
            <div class='demo'>
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions">
              </video-player>
            </div>
          </el-tab-pane>
          <el-tab-pane label="教学引导视频" name="second" @tab-click="changeColor(this)">
            <div class='demo'>
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions">
              </video-player>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15" style="text-align:left; ">
        <h2 style="margin: 0px">虚拟实验标题虚拟实验标题虚拟实验标题</h2>
        <el-rate
            v-model="value"
            disabled
            show-score
            :colors="colors"
            style="padding: 10px 0"
            text-color="#ff9900"
            score-template="{value}">
        </el-rate>
        <h4 style="margin: 0px">实验学时：4</h4>
        <h4 style="margin: 0px">实验负责人：XX</h4>
        <p style="font-size: 14px">实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介实验简介</p>
        <el-button style="color: #fff;background-color: #FF9E00;font-size: 25px;padding: 20px" size="medium">查看实验报告</el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row style="padding:0 40px" type="flex" justify="space-around">
      <el-col :span="7">
        <el-card class="box-card">
          <div class="card">
            <i style="font-size: 35px" class="el-icon-edit"></i>
            课前预习
          </div>
          <div style="text-align: left;height: 100px">
            <p>查看本实验学习资料</p>
            <p>掌握学习内容</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card class="box-card">
          <div class="card">
            <i style="font-size: 35px" class="el-icon-document"></i>
            考题测验
          </div>
          <div style="text-align: left;height: 100px">
            <p>根据学习内容进行试题考核</p>
            <p>检验对知识内容的掌握情况</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card class="box-card">
          <div class="card">
            <i style="font-size: 35px" class="el-icon-attract"></i>
            开始实验
          </div>
          <div style="text-align: left;height: 100px">
            <p>进入虚拟仿真实验里</p>
            <p>真实环境更好掌握实验内容</p>
            <el-button style="border-radius: 10px;background-color: #FF9E00;color: white;font-weight: bolder;font-size: 13px;width: 30%;float: right">客户端下载</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div style="width: 80%;margin: 0 auto;text-align: left">
      <div style="padding:5px 15px;background-color: #FF9E00;color: white;font-weight: bolder;font-size: 15px;">
        实验讨论
      </div>
      <div style="width: 100%;box-sizing: border-box;border: 1px solid #BBBBBB;padding: 10px 40px">
        <div style="display: flex;">
          <span style="font-size: 16px;font-weight: bolder;padding-top: 1px">综合评分</span>
          <el-rate
              v-model="value1"
              disabled
              show-score
              :colors="colors"
              text-color="#ff9900"
              score-template="{value}">
          </el-rate>
          <span style="font-size: 12px;padding-top: 4px">(2人评价)</span>
        </div>
        <el-divider></el-divider>
        <div style="display: flex;">
          <span>我的评价：</span>
          <el-rate
              v-model="value2"
              disabled
              show-score
              :colors="colors"
              text-color="#ff9900"
              score-template="{value}">
          </el-rate>
        </div>
        <span>超级赞的实验课程</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4.5,
      value1: 5.0,
      value2: 5.0,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      color:true,
      activeName: 'first',
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          src: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  methods: {

  }
}
</script>
<style>
.el-icon-star-on{
  font-size: 25px;
}
.card{
  border-radius: 10px;
  padding: 15px 0;
  background-color: #FF9E00;
  color: white;
  font-weight: bolder;
  font-size: 25px;
  width: 85%;
}
</style>

"pages":[
"pages/XXX/XXX"
]

XXX:function (options){
wx.navigateTo({
url:''
})
}