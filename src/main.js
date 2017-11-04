/**
 * Created by johnsontx on 2017/10/23.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue';
import App from './App.vue';
import router from './routers';
// import echarts from 'echarts';
import style from './assets/styles/base.css';
//import './assets/sass/reset.sass'//报错暂时不用sass
// Vue.prototype.$echarts = echarts;
Vue.config.debug = true;//开启错误提示

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
});

