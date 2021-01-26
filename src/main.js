import Vue from 'vue'
// import App from './App.vue'
import News from '@/views/news/index.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(News),
}).$mount('#app')
