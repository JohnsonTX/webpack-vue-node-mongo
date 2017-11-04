'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _routers = require('./routers');

var _routers2 = _interopRequireDefault(_routers);

var _base = require('./assets/styles/base.css');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './assets/sass/reset.sass'//报错暂时不用sass
// Vue.prototype.$echarts = echarts;
/**
 * Created by johnsontx on 2017/10/23.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
_vue2.default.config.debug = true; //开启错误提示

// import echarts from 'echarts';
new _vue2.default({
    router: _routers2.default,
    el: '#appIndex',
    render: function render(h) {
        return h(_App2.default);
    }
});

//# sourceMappingURL=main-compiled.js.map