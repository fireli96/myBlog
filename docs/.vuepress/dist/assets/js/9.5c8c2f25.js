(window.webpackJsonp = window.webpackJsonp || []).push([
  [9], {
    378: function (s, t, a) {'use strict'; a.r(t); const e = a(0); const n = Object(e.a)({}, (function () {const s = this; const t = s.$createElement; const a = s._self._c || t

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': s.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: 'babel7-简单使用总结'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#babel7-简单使用总结'
            }
          }, [s._v('#')]), s._v(' babel7 简单使用总结')
        ]), s._v(' '), a('h2', {
          attrs: {
            id: 'webpack-中使用'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#webpack-中使用'
            }
          }, [s._v('#')]), s._v(' webpack 中使用')
        ]), s._v(' '), a('p', [s._v('安装 '), a('code', [s._v('@babel/preset-env')]), s._v(' 以及 '), a('code', [s._v('core-js')])]), s._v(' '), a('p', [s._v('在 '), a('code', [s._v('package.json')]), s._v(' 文件所在目录新建 '), a('code', [s._v('babel.config.js')]), s._v('文件')]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              s._v('module'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('exports '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  presets'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"@babel/preset-env"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n        useBuiltIns'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"usage"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n        corejs'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('3')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n        targets'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n          '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 目标浏览器版本，该浏览器缺失某新语法，babel才会引入这个新语法')]), s._v('\n          ie'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('11')]), s._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n')
            ])
          ]), s._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [s._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('11')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('12')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('13')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('14')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('15')]), a('br')
          ])
        ]), s._v(' '), a('p', [a('code', [s._v('targets')]), s._v('字段可用同级目录下'), a('code', [s._v('.browserslistrc')]), s._v('文件代替，例如：')]), s._v(' '), a('div', {
          staticClass: 'language- line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-text'
            }
          }, [a('code', [s._v('> 1%\nlast 2 versions\n\n')])]), s._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [s._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('3')]), a('br')
          ])
        ]), a('p', [
          a('code', [s._v('.browserslistrc')]), s._v('文件的语法为 '), a('code', [s._v('browserslist')]), s._v('：'), a('a', {
            attrs: {
              href: 'https://github.com/browserslist/browserslist',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [s._v('browserslist 语法'), a('OutboundLink')], 1)
        ]), s._v(' '), a('p', [s._v('也可以使用'), a('code', [s._v('.babelrc')]), s._v('文件代替'), a('code', [s._v('babel.config.js')]), s._v('文件。使用'), a('code', [s._v('babel.config.js')]), s._v('，babel 会编译'), a('code', [s._v('node_modules')]), s._v(' 目录下的模块。')]), s._v(' '), a('p', [s._v('需要在'), a('code', [s._v('corejs')]), s._v('字段中指明版本。')]), s._v(' '), a('p', [a('code', [s._v('useBuiltIns')]), s._v('有三个值：'), a('code', [s._v('false')]), s._v('、'), a('code', [s._v('entry')]), s._v('、'), a('code', [s._v('usage')]), s._v('。')]), s._v(' '), a('p', [a('code', [s._v('false')]), s._v(' 只做了语法转换， '), a('code', [s._v('entry')]), s._v(' 引入了所有的 es 扩展包（满足 targets 指定的浏览器版本），'), a('code', [s._v('usage')]), s._v(' 会自动检测代码中用到的功能自动引入模块。')]), s._v(' '), a('h2', {
          attrs: {
            id: 'vue-cli3'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vue-cli3'
            }
          }, [s._v('#')]), s._v(' vue-cli3')
        ]), s._v(' '), a('p', [s._v('vue-cli3 使用的是 '), a('code', [s._v('@vue/babel-preset-app')]), s._v(' 插件来完成 babel 配置的，具体见：')]), s._v(' '), a('p', [
          a('a', {
            attrs: {
              href: 'https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [s._v('vue-cli 浏览器兼容性'), a('OutboundLink')], 1)
        ]), s._v(' '), a('p', [s._v('需要注意的是，在'), a('code', [s._v('@vue/app')]), s._v('插件中指定 corejs: 3 似乎不起作用（待定...）')]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              s._v('module'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('exports '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  presets'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('//@vue/babel-preset-app插件缩写')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"@vue/app"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n        corejs'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('3')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n')
            ])
          ]), s._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [s._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('11')]), a('br')
          ])
        ]), a('h2', {
          attrs: {
            id: '参考资料'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#参考资料'
            }
          }, [s._v('#')]), s._v(' 参考资料')
        ]), s._v(' '), a('ol', [
          a('li', [
            a('a', {
              attrs: {
                href: 'https://www.babeljs.cn/docs/configuration',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('babel 官网'), a('OutboundLink')], 1)
          ]), s._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://github.com/zloirock/core-js#babelpreset-env',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('github corejs'), a('OutboundLink')], 1)
          ]), s._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://blog.csdn.net/weixin_33737774/article/details/91365422',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('快速上手 babel'), a('OutboundLink')], 1)
          ]), s._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://juejin.im/post/5d0373a95188251e1b5ebb6c#heading-2',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('结合 Babel 7.4.0 谈一下 Babel-runtime 和 Babel-polyfill'), a('OutboundLink')], 1)
          ]), s._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://juejin.im/post/5c19c5e0e51d4502a232c1c6#heading-11',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('一口(很长的)气了解 babel'), a('OutboundLink')], 1)
          ])
        ])
      ])}), [], !1, null, null, null)

    t.default = n.exports}
  }
])