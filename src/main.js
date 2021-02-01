import Vue from 'vue'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import 'videojs-contrib-hls'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.use(VideoPlayer);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
