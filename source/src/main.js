// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Row, Col,Divider } from 'iview';
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Divider', Divider);

import 'iview/dist/styles/iview.css';

// 全局范围加载通用样式，每个vue page里无需重复引入
import '!style-loader!css-loader!less-loader!./theme/class.less'
import '!style-loader!css-loader!less-loader!./theme/var.less'
import '!style-loader!css-loader!less-loader!./theme/common.less'

Vue.config.productionTip = false

import i18n from './lang' // Internationalization




 
// router.beforeEach((to, _, next) => {
//     next()
// })

// router.afterEach(() => {
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
