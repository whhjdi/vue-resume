// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AV from 'leancloud-storage'

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
  }
})


  var APP_ID = 'bwclyTw5OiwkcBwWjIepe52w-gzGzoHsz';
  var APP_KEY = 'Ohlf3asm0edI02aKDST2l3Tw';
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
