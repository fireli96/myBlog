(window.webpackJsonp = window.webpackJsonp || []).push([
  [8], {
    379: function (s, t, a) {'use strict'; a.r(t); const n = a(0); const e = Object(n.a)({}, (function () {const s = this; const t = s.$createElement; const a = s._self._c || t

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': s.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: 'vuepress-个人博客填坑'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vuepress-个人博客填坑'
            }
          }, [s._v('#')]), s._v(' VuePress 个人博客填坑')
        ]), s._v(' '), a('h2', {
          attrs: {
            id: '前言'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#前言'
            }
          }, [s._v('#')]), s._v(' 前言')
        ]), s._v(' '), a('p', [s._v('经过几天的努力，自己的个人博客终于大致做好了，最开始也参考了很多别人的博客布局，但做到后面发现静态博客不适合做得那么花哨。')]), s._v(' '), a('p', [s._v('也想过为每一篇博客配上一张封面图，但发现在不同屏幕下，图片的显示方式不好管理，对图片的内容和分辨率也都有一定规定，就没有去弄了。')]), s._v(' '), a('p', [s._v('过程也遇到了许多坑，做一个总结~~~')]), s._v(' '), a('h2', {
          attrs: {
            id: 'vuepress-介绍'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vuepress-介绍'
            }
          }, [s._v('#')]), s._v(' VuePress 介绍')
        ]), s._v(' '), a('p', [s._v('VuePress 是支持用 Vue 开发主题的极简静态网站生成器，它使用 Markdown 来书写文档，在打包后，将.md 文件预渲染成 HTML 文件，因此具有非常好的加载性能和搜索引擎优化（SEO）。')]), s._v(' '), a('h2', {
          attrs: {
            id: 'vuepress-使用'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vuepress-使用'
            }
          }, [s._v('#')]), s._v(' VuePress 使用')
        ]), s._v(' '), a('h3', {
          attrs: {
            id: '文档目录'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#文档目录'
            }
          }, [s._v('#')]), s._v(' 文档目录')
        ]), s._v(' '), a('p', [s._v('一个 Vuepress 应用的所包含的目录应该如下：')]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1561103951854.png',
              alt: ''
            }
          })
        ]), s._v(' '), a('ol', [a('li', [s._v('.vuepress，存放所有与 VuePress 相关的文件')]), s._v(' '), a('li', [s._v('public，存放静态资源')]), s._v(' '), a('li', [s._v('components，存放自定义布局页面，里面包含的是一个个.vue 组件，并在 Markdown 文件中使用')]), s._v(' '), a('li', [s._v('theme，存放自定义主题')]), s._v(' '), a('li', [s._v('config.js，默认主题的配置文件')]), s._v(' '), a('li', [s._v('override.styl、style.styl，默认主题样式覆盖文件')]), s._v(' '), a('li', [s._v('README.md,项目首页，即路由'), a('code', [s._v('/')]), s._v('对应的.md 文件，'), a('strong', [s._v('必须！！')])]), s._v(' '), a('li', [s._v('其他，根据分类而存放的 Markdown 文件')])]), s._v(' '), a('h3', {
          attrs: {
            id: '基本配置'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#基本配置'
            }
          }, [s._v('#')]), s._v(' 基本配置')
        ]), s._v(' '), a('p', [s._v('关于 VuePress 的使用，网上有许多教程了，官方文档也比较详细，跟着操作就行啦。这里就不细说了，推荐看以下文档：')]), s._v(' '), a('ol', [
          a('li', [
            a('a', {
              attrs: {
                href: 'https://juejin.im/post/5cd7d3286fb9a0323a01d29a#heading-19',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('从今天开始，拿起 VuePress 打造属于自己的专属博客'), a('OutboundLink')], 1)
          ]), s._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://vuepress.vuejs.org',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [s._v('VuePress 官方文档'), a('OutboundLink')], 1)
          ])
        ]), s._v(' '), a('blockquote', [a('ol', [a('li', [s._v('VuePress 包含一个默认主题，如果只是对默认主题进行配置，那么只需要按照官方的说明修改 config.js 就行了')]), s._v(' '), a('li', [s._v('如果需要自定义主题，那么就需要在 theme 文件夹下创建相关文件')])])]), s._v(' '), a('h2', {
          attrs: {
            id: '博客'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#博客'
            }
          }, [s._v('#')]), s._v(' 博客')
        ]), s._v(' '), a('h3', {
          attrs: {
            id: '博客构建'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#博客构建'
            }
          }, [s._v('#')]), s._v(' 博客构建')
        ]), s._v(' '), a('p', [s._v('本博客是在默认主题下进行修改的。')]), s._v(' '), a('ol', [a('li', [s._v('首先命令行中输入：')])]), s._v(' '), a('div', {
          staticClass: 'language- line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-text'
            }
          }, [a('code', [s._v('vuepress eject docs\n')])]), s._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [s._v('1')]), a('br')
          ])
        ]), a('p', [s._v('将默认主题复制到'), a('code', [s._v('docs/.vuepress/theme')]), s._v(' 文件夹下')]), s._v(' '), a('ol', {
          attrs: {
            start: '2'
          }
        }, [a('li', [a('p', [s._v('然后就可以对 theme 文件下的文件进行修改，来满足自己的需要，修改过程就不细说了，主要是调整页面布局加部分更改功能')])]), s._v(' '), a('li', [a('p', [s._v('博客使用了响应式布局，如下：')])])]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1561168263164.png',
              alt: ''
            }
          })
        ]), s._v(' '), a('blockquote', [a('ol', [a('li', [s._v('设备宽度 > 1100px， main 宽度 1100px')]), s._v(' '), a('li', [s._v('800px < 设备宽度 < 1100px， main 宽度根据设备宽度自适应')]), s._v(' '), a('li', [s._v('设备宽度 <800px，右侧边栏消失，文章列表宽度自适应屏幕，同时导航栏消失变成一个按钮，大部分字体不随宽度变化而缩放')])])]), s._v(' '), a('h3', {
          attrs: {
            id: '博客部署'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#博客部署'
            }
          }, [s._v('#')]), s._v(' 博客部署')
        ]), s._v(' '), a('ol', [a('li', [s._v('登录 GitHub，新建一个仓库')]), s._v(' '), a('li', [s._v('按照官方文档说明，进行部署')])]), s._v(' '), a('h2', {
          attrs: {
            id: '遇到的问题！！！'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#遇到的问题！！！'
            }
          }, [s._v('#')]), s._v(' 遇到的问题！！！')
        ]), s._v(' '), a('p', [s._v('除了参考各个博客，在基本的布局上修修改改，然后总是不能令人满意外，还遇到了许多其他的问题，总结如下：')]), s._v(' '), a('h3', {
          attrs: {
            id: '路由和目录'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#路由和目录'
            }
          }, [s._v('#')]), s._v(' 路由和目录')
        ]), s._v(' '), a('p', [s._v('最开始看官方文档不仔细，总是出现 404。'), a('code', [s._v('config.js')]), s._v('中配置的导航栏和侧边栏，一定要在'), a('code', [s._v('docs/')]), s._v('下建立相应目录。')]), s._v(' '), a('h3', {
          attrs: {
            id: '应用级别配置（增加额外的路由）【未解决】'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#应用级别配置（增加额外的路由）【未解决】'
            }
          }, [s._v('#')]), s._v(' 应用级别配置（增加额外的路由）【'), a('strong', [s._v('未解决')]), s._v('】')
        ]), s._v(' '), a('p', [s._v('可以看到，当点击博客导航栏或者侧边栏相应的标签时，路由变化，然后出现符合条件的博客列表。所以我在默认主题下增加了一个'), a('code', [s._v('ArticleList.vue')]), s._v('组件。')]), s._v(' '), a('p', [s._v('但前面说到，Vuepress 中每一个路由，都需要在'), a('code', [s._v('docs/')]), s._v('下建立相应目录，例如：我现在的路由是'), a('code', [s._v('/tag/0/')]), s._v('，那我一定要建立'), a('code', [s._v('docs/tag/0/README.md')]), s._v('，才能使这个路由生效，否者会出现 404。')]), s._v(' '), a('p', [s._v('但我导航栏有很多，标签栏更多，并且都对应自己的路由，那每一个都建立相应目录，就会显得非常麻烦，所以有其他简单的解决方法吗？答案是有的。')]), s._v(' '), a('p', [
          s._v('参考：'), a('a', {
            attrs: {
              href: 'https://vuepress.vuejs.org/zh/guide/custom-themes.html#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [s._v('VuePress 文档：应用配置'), a('OutboundLink')], 1), s._v('，我们可以自定义路由。')
        ]), s._v(' '), a('ol', [a('li', [s._v('新建 theme/router/index.js 文件，在里面输入：')])]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('import')]), s._v(' Layout '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('from')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"../Layout"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function-variable function'
                }
              }, [s._v('install')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                s._v('Vue'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v(',')]), s._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('{')]), s._v(' router '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('}')])
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=>')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('let')]), s._v(' ru '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"/"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"/:category"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"/tag/"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"/tag/:tag"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' routes '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('for')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('var')]), s._v(' i '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' len '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' ru'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('length'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v(' i '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('<')]), s._v(' len'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v(' i'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('++')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    routes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('push')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' ru'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('i'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      path'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' ru'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('i'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      component'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' Layout\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  router'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('addRoutes')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('routes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('export')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('default')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  install\n'), a('span', {
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
            }, [s._v('15')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('16')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('17')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('18')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('19')]), a('br')
          ])
        ]), a('p', [
          s._v('这里自定义了一个路由插件，语法可参照'), a('a', {
            attrs: {
              href: 'https://cn.vuejs.org/v2/guide/plugins.html',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [s._v('Vue 文档：插件'), a('OutboundLink')], 1)
        ]), s._v(' '), a('p', [s._v('其实这里本质就是使用'), a('code', [s._v('router')]), s._v('的'), a('code', [s._v('addRoutes')]), s._v('方法，为'), a('code', [s._v('router')]), s._v('添加额外的路由')]), s._v(' '), a('ol', {
          attrs: {
            start: '2'
          }
        }, [a('li', [s._v('新建 theme/enhanceApp.js 文件，在里面输入：')])]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('import')]), s._v(' routes '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('from')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"./router"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('export')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('default')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  Vue'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// VuePress 正在使用的 Vue 构造函数')]), s._v('\n  options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 附加到根实例的一些选项')]), s._v('\n  router'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 当前应用的路由实例')]), s._v('\n  siteData '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 站点元数据')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=>')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  Vue'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('use')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('routes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v(' router '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
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
            }, [s._v('9')]), a('br')
          ])
        ]), a('p', [s._v('使用 Vue.use 使用上面自定义的路由，传入参数 router。')]), s._v(' '), a('ol', {
          attrs: {
            start: '3'
          }
        }, [a('li', [s._v('运行'), a('code', [s._v('npm run dev')]), s._v('，启动项目，在不建立路由的对应目录下，路由依然可以正常切换，而不出现 404。')])]), s._v(' '), a('p', [s._v('到此为止，本来应该完美解决了，但是！当我打包项目放到 GitHub 上去后，点击导航标签切换路由啥的都没问题。可当我刷新页面后，还是出现了熟悉的 404。')]), s._v(' '), a('blockquote', [a('ol', [a('li', [a('p', [s._v('经过查阅各种资料，最后知道了原因，VuePress 路由使用的'), a('strong', [s._v('history 模式')]), s._v('，history 模式什么都好，就是刷新页面时会直接请求后台相应目录下的 index.html 文件，因为没有相应文件，所以就出现了 404。')])]), s._v(' '), a('li', [a('p', [s._v('然后我试着将路由改为 hash 模式，'), a('code', [s._v('theme/enhanceApp.js')]), s._v('文件中添加：'), a('code', [s._v('router.mode = "hash"')]), s._v('，但好像没啥用。所以只得老老实实对应路由去建立目录。')])])])]), s._v(' '), a('h3', {
          attrs: {
            id: '有关-computed-属性的问题'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#有关-computed-属性的问题'
            }
          }, [s._v('#')]), s._v(' 有关 computed 属性的问题')
        ]), s._v(' '), a('p', [s._v('在编写过程中，我需要实现这样个一个需求，导航栏显示博客的分类，右侧边栏显示博客的标签类似于这样：')]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1561109478295.png',
              alt: ''
            }
          })
        ]), s._v(' '), a('p', [s._v('但当在移动端时，我需要把右侧边栏的标签移动到和导航栏一起：')]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1561109478298.png',
              alt: ''
            }
          })
        ]), s._v(' '), a('p', [a('strong', [s._v('解决方法：')])]), s._v(' '), a('p', [s._v('默认主题下，导航栏的实现是通过 NavLinks.vue 组件实现的：')]), s._v(' '), a('div', {
          staticClass: 'language-html line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-html'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token tag'
                }
              }, [
                a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token tag'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('<')]), s._v('div')
                ]), s._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [s._v('class')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-value'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('"')]), s._v('nav-item'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('"')])
                ]), s._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [s._v('v-for')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-value'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('"')]), s._v('item in userLinks'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('"')])
                ]), s._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [s._v(':key')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-value'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('"')]), s._v('item.link'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token tag'
                }
              }, [
                a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token tag'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('</')]), s._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n')
            ])
          ]), s._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [s._v('1')]), a('br')
          ])
        ]), a('p', [s._v('其中'), a('code', [s._v('userLinks')]), s._v('是一个计算属性，返回了用户在'), a('code', [s._v('config.js')]), s._v('中配置的'), a('code', [s._v('nav')]), s._v('属性，类似于这样：')]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              s._v('nav'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n                text'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'首页\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n                link'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'/\'')]), s._v('\n            '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n            '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n                text'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'Web开发\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n                link'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'/web/\'')]), s._v('\n            '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n            '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n                text'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'工具使用\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n                link'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'/tool/\'')]), s._v('\n            '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n')
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
            }, [s._v('14')]), a('br')
          ])
        ]), a('blockquote', [a('p', [s._v('在 pc 端时，导航栏是通过'), a('code', [s._v('Navbar.vue')]), s._v('组件引入'), a('code', [s._v('NavLinks.vue')]), s._v('组件实现\n在移动端时，导航栏是通过'), a('code', [s._v('Sidebar.vue')]), s._v('组件引入'), a('code', [s._v('NavLinks.vue')]), s._v('组件实现')])]), s._v(' '), a('p', [s._v('现在我们需要的是在移动端时，即当是'), a('code', [s._v('Sidebar.vue')]), s._v('组件引入'), a('code', [s._v('NavLinks.vue')]), s._v('组件时，'), a('code', [s._v('userLinks')]), s._v('再添加一个:')]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    text'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"云标签"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n    link'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"/tag/"')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n')
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
            }, [s._v('4')]), a('br')
          ])
        ]), a('p', [s._v('实现也很简单，判断父组件传入一个参数 fromComponent 给子组件，如果'), a('code', [s._v('fromComponent == "sidebar"')]), s._v('，'), a('code', [s._v('userLinks')]), s._v('添加：')]), s._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('if')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('fromComponent '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('==')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"sidebar"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('if')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('\n    userLinks'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('findIndex')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('navItem')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=>')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v(' navItem'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('text '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('==')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"云标签"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('===')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('1')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    userLinks'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('push')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      text'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"云标签"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      link'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"/tag/"')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n')
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
            }, [s._v('12')]), a('br')
          ])
        ]), a('p', [a('s', [a('code', [s._v('npm run dev')]), s._v('运行没有问题，但是！当我打包项目放到 GitHub 上去后，又出问题了。除了导航栏外，其他的都未显示，并且点击导航栏报错。')])]), s._v(' '), a('blockquote', [a('ol', [a('li', [a('p', [a('s', [s._v('经过一步步分析，发现出错的原因是计算属性'), a('code', [s._v('userLinks')]), s._v('添加了值。')])])]), s._v(' '), a('li', [a('p', [a('s', [s._v('当我对'), a('code', [s._v('userLinks')]), s._v('进行一次深拷贝，然后再修改拷贝后的值，就没有出现这个问题了。')])])])])]), s._v(' '), a('blockquote', [a('p', [s._v('补充：\n几天后重新运行放到服务器上，上次的错误没有了，具体原因未知')])])
      ])}), [], !1, null, null, null)

    t.default = e.exports}
  }
])