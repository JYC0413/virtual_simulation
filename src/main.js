import Vue from 'vue'
import App from './App.vue'
// import News from '@/views/news/index.vue'
// import editor from '@/views/Experiment editor/index.vue'
import router from './router'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
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
  router,
  render: h => h(App),
}).$mount('#app')
