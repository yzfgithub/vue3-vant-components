'use strict';

var vue = require('vue');

var script$1 = {
        name: 'page-loading',
        props:{
            title:{
                type:String,
                default:()=>'加载中...'
            }
        },
        data() {
            return {

            }
        }
    };

const _hoisted_1 = { class: "loading" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_loading = vue.resolveComponent("van-loading");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createVNode(_component_van_loading, {
      color: "#0094ff",
      vertical: ""
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString($props.title), 1)
        ])
      ]),
      _: 3
    })
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.loading[data-v-18c35e68] {\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    z-index: 10;\n    background: rgba(255,255,255, 0.7);\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-18c35e68";

script$1.install = function (Vue) {
  Vue.component(script$1.name, script$1);
};

var script = {
        name: 'cus-button',
        props:{
            message:{
                type: String,
                default:()=>'信息'
            }
        },
        data() {
            return {

            }
        }
    };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_button = vue.resolveComponent("van-button");

  return (vue.openBlock(), vue.createBlock(_component_van_button, { type: "primary" }, {
    default: vue.withCtx(() => [
      vue.createTextVNode(vue.toDisplayString($props.message), 1)
    ]),
    _: 1
  }))
}

var css_248z = "\n.loading[data-v-599fe0d4] {\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    z-index: 10;\n    background: rgba(255,255,255, 0.7);\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-599fe0d4";

script.install = function (Vue) {
  Vue.component(script.name, script);
};

const components = [script$1, script];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

var index = {
  install
};

module.exports = index;
