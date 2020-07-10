(window.webpackJsonp = window.webpackJsonp || []).push([
  [10], {
    380: function (t, a, s) {'use strict'; s.r(a); const n = s(0); const e = Object(n.a)({}, (function () {const t = this; const a = t.$createElement; const s = t._self._c || a

      return s('ContentSlotsDistributor', {
        attrs: {
          'slot-key': t.$parent.slotKey
        }
      }, [
        s('h1', {
          attrs: {
            id: 'canvas-保存下载图片'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#canvas-保存下载图片'
            }
          }, [t._v('#')]), t._v(' canvas 保存下载图片')
        ]), t._v(' '), s('h2', {
          attrs: {
            id: '前言'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#前言'
            }
          }, [t._v('#')]), t._v(' 前言')
        ]), t._v(' '), s('p', [t._v('在项目中遇到了截取屏幕区域，并转化为图片下载的问题，这里做一个小小的总结，主要包括以下几个内容：')]), t._v(' '), s('ol', [s('li', [s('code', [t._v('dom')]), t._v(' 节点通过 '), s('code', [t._v('html2canvas')]), t._v(' 转化为 '), s('code', [t._v('canvas')])]), t._v(' '), s('li', [s('code', [t._v('canvas')]), t._v(' 转化图片')]), t._v(' '), s('li', [t._v('图片通过 '), s('code', [t._v('a')]), t._v(' 标签下载')])]), t._v(' '), s('h2', {
          attrs: {
            id: 'canvas-转化为图片'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#canvas-转化为图片'
            }
          }, [t._v('#')]), t._v(' canvas 转化为图片')
        ]), t._v(' '), s('p', [t._v('将 canvas 转化为图片只需要调用'), s('code', [t._v('toDataURL')]), t._v('方法：')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' canvas '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getElementById')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"canvas"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// data url')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' dataURI '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' canvas'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('toDataURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' oImg '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('new')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('Image')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\noImg'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('src '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' dataURI'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\ndocument'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('body'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('appendChild')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('oImg'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br')
          ])
        ]), s('p', [s('code', [t._v('toDataURL')]), t._v('会将图片转化为'), s('code', [t._v('base64')]), t._v('格式。')]), t._v(' '), s('h2', {
          attrs: {
            id: 'canvas-与-retina-屏'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#canvas-与-retina-屏'
            }
          }, [t._v('#')]), t._v(' canvas 与 retina 屏')
        ]), t._v(' '), s('p', [s('code', [t._v('retina')]), t._v(' 屏幕是指使用多个物理像素渲染 1 个 '), s('code', [t._v('css')]), t._v(' 像素，'), s('code', [t._v('css')]), t._v(' 像素是在不同平台下的固定大小尺寸属性。图片的大小是物理像素，所以在正常情况下，图片在 '), s('code', [t._v('retina')]), t._v(' 屏幕下会显示得更小，而由于设置了 '), s('code', [t._v('css')]), t._v(' 像素，图片在'), s('code', [t._v('retina')]), t._v(' 和普通屏幕下会一样大，这就相当于在 '), s('code', [t._v('retina')]), t._v(' 屏幕下放大了图片，所以图片会失真模糊。')]), t._v(' '), s('p', [t._v('同理，'), s('code', [t._v('canvas')]), t._v(' 也是如此。')]), t._v(' '), s('p', [t._v('屏幕像素比可以通过'), s('code', [t._v('window.devicePixelRatio')]), t._v('获得。'), s('code', [t._v('canvas')]), t._v('在绘制的时候也有像素比'), s('code', [t._v('context.backingStorePixelRatio')]), t._v('，该属性的值决定了浏览器在渲染 '), s('code', [t._v('canvas')]), t._v(' 之前会用几个像素来来存储画布信息。假设 '), s('code', [t._v('context.backingStorePixelRatio')]), t._v(' 为 2，那 '), s('code', [t._v('canvas')]), t._v(' 绘制时，会先在内存中生成一张 200x200 的图片，然后浏览器渲染的时候，会按 100x100 的图片来渲染。')]), t._v(' '), s('p', [t._v('所以我们需要获取 '), s('code', [t._v('window.devicePixelRatio')]), t._v(' 和 '), s('code', [t._v('context.backingStorePixelRatio')]), t._v(' 比值，来设置 '), s('code', [t._v('canvas')]), t._v(' 的真正大小，以保证在 '), s('code', [t._v('retina')]), t._v(' 屏幕下不模糊。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getPixelRatio')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' canvas '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createElement')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'canvas\'')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' context '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' canvas'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getContext')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'2d\'')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 兼容处理')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' backingStoreRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' context'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('webkitBackingStorePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n                    context'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('mozBackingStorePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n                    context'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('msBackingStorePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n                    context'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oBackingStorePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n                    context'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('backingStorePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' devicePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' window'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('devicePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' devicePixelRatio '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('/')]), t._v(' backingStoreRatio\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' canvas '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getElementById')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"canvas"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' scale '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getPixelRatio')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 正常屏幕大小')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' width '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('400')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' height '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('400')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// retina屏幕大小')]), t._v('\ncanvas'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' width '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), t._v(' scale'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\ncanvas'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('height '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' height '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), t._v(' scale'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('12')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('13')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('14')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('15')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('16')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('17')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('18')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('19')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('20')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('21')]), s('br')
          ])
        ]), s('h2', {
          attrs: {
            id: 'html2canvas'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#html2canvas'
            }
          }, [t._v('#')]), t._v(' html2canvas')
        ]), t._v(' '), s('p', [s('code', [t._v('html2canvas')]), t._v('可以用于将 '), s('code', [t._v('html')]), t._v(' 转化为 '), s('code', [t._v('canvas')]), t._v('，使用如下：')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('html2canvas')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('body'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('then')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('canvas')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('body'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('appendChild')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('canvas'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br')
          ])
        ]), s('p', [t._v('需要注意的是：')]), t._v(' '), s('ol', [s('li', [t._v('使用 '), s('code', [t._v('<img>')]), t._v(' 而不使用背景图，不然转化的 '), s('code', [t._v('canvas')]), t._v(' 图片会模糊')]), t._v(' '), s('li', [s('code', [t._v('{ allowTaint: true, useCORS: true }')]), t._v('可解决跨域图片不显示问题')]), t._v(' '), s('li', [s('code', [t._v('{ backgroundColor: "transparent" }')]), t._v('可解决图片不透明问题')])]), t._v(' '), s('p', [t._v('更多使用见文档：')]), t._v(' '), s('p', [
          s('a', {
            attrs: {
              href: 'http://html2canvas.hertzen.com/getting-started',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('html2canvas 文档'), s('OutboundLink')], 1)
        ]), t._v(' '), s('h2', {
          attrs: {
            id: '下载图片'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#下载图片'
            }
          }, [t._v('#')]), t._v(' 下载图片')
        ]), t._v(' '), s('p', [t._v('下载图片一般是通过 '), s('code', [t._v('a')]), t._v(' 标签来实现。设置'), s('code', [t._v('a')]), t._v('标签的'), s('code', [t._v('download')]), t._v('和'), s('code', [t._v('href')]), t._v('属性。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' canvas '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getElementById')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"canvas"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// data url')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' dataURI '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' canvas'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('toDataURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' a '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createElement')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 图片名字')]), t._v('\na'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('download '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"picture1.png"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 需要为data url或是同源的资源路径')]), t._v('\na'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('href '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' dataURI'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\na'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('click')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\na'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('remove')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), s('br')
          ])
        ]), s('p', [s('code', [t._v('href')]), t._v(' 资源需要是同源。')]), t._v(' '), s('p', [s('code', [t._v('Data URLs')]), t._v('，即前缀为 '), s('code', [t._v('data:')]), t._v(' 协议的 URL。允许内容创建者向文档中嵌入小文件。')]), t._v(' '), s('p', [s('code', [t._v('Data URLs')]), t._v(' 由四个部分组成：前缀(data:)、指示数据类型的 MIME 类型、如果非文本则为可选的 base64 标记、数据本身：')]), t._v(' '), s('div', {
          staticClass: 'language- line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-text'
            }
          }, [s('code', [t._v('data:[<mediatype>][;base64],<data>\n')])]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br')
          ])
        ]), s('p', [t._v('Data URLs 的详细介绍：')]), t._v(' '), s('p', [
          s('a', {
            attrs: {
              href: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('MDN Data URLs'), s('OutboundLink')], 1)
        ]), t._v(' '), s('p', [s('code', [t._v('data')]), t._v('数据是被 '), s('code', [t._v('base64')]), t._v(' 编码的。')]), t._v(' '), s('p', [t._v('但在使用 '), s('code', [t._v('a')]), t._v(' 标签下载时，由于 '), s('code', [t._v('href')]), t._v(' 属性有长度限制，如果'), s('code', [t._v('Data URLs')]), t._v('长度超过则无法下载。这时候需要将 '), s('code', [t._v('dataURL')]), t._v(' 转换为 '), s('code', [t._v('Blob')]), t._v(' 对象。')]), t._v(' '), s('h2', {
          attrs: {
            id: 'blob-对象'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#blob-对象'
            }
          }, [t._v('#')]), t._v(' Blob 对象')
        ]), t._v(' '), s('p', [t._v('一个 Blob 对象表示一个不可变的, 原始数据的类似文件对象。Blob 表示的数据不一定是一个 JavaScript 原生格式。 File 接口基于 Blob，继承 blob 功能并将其扩展为支持用户系统上的文件。')]), t._v(' '), s('p', [t._v('目前用法：处理大文件分割上传（利用 Blob 中 slice 方法），处理图片 canvas 跨域，以及隐藏视频源路径等等')]), t._v(' '), s('p', [t._v('关于 blob 对象用法和介绍：')]), t._v(' '), s('ol', [
          s('li', [
            s('a', {
              attrs: {
                href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Blob',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN blob'), s('OutboundLink')], 1)
          ]), t._v(' '), s('li', [
            s('a', {
              attrs: {
                href: 'https://juejin.im/entry/5937c98eac502e0068cf31ae',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('JavaScript 中 Blob 对象'), s('OutboundLink')], 1)
          ])
        ]), t._v(' '), s('h2', {
          attrs: {
            id: 'data-url-和-blob-转换'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#data-url-和-blob-转换'
            }
          }, [t._v('#')]), t._v(' data URL 和 Blob 转换')
        ]), t._v(' '), s('p', [s('code', [t._v('data URL')]), t._v(' 转 '), s('code', [t._v('Blob')]), t._v('。需要提取数据（data）部分，并解码，再转化为 '), s('code', [t._v('Blob')]), t._v(' 对象。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('dataURLToBlob')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('dataURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// atob：解码base64，并提取data部分')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' data '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('atob')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('dataURL'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('split')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('","')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' len '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' data'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('length'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' arr '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('new')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('Uint8Array')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('len'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' i '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('0')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' i '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('<')]), t._v(' len'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' i'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('++')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    arr'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('i'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' data'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('charCodeAt')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('i'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('new')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('Blob')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('arr'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), s('br')
          ])
        ]), s('p', [s('code', [t._v('Blob')]), t._v(' 转 '), s('code', [t._v('data URL')]), t._v('。需要借助 '), s('code', [t._v('FileReader')]), t._v(' 的 '), s('code', [t._v('readAsDataURL')]), t._v('。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('readBlobAsDataURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('blob')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('new')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('Promise')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                t._v('resolve'), s('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' reject')
              ]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' a '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('new')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('FileReader')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    a'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function-variable function'
                }
              }, [t._v('onload')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('e')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('resolve')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('e'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('target'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('result'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    a'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('readAsDataURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('blob'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('readBlobAsDataURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('blob'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('then')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('dataURL')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  console'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('log')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('dataURL'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('12')]), s('br')
          ])
        ]), s('h2', {
          attrs: {
            id: 'url-createobjecturl'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#url-createobjecturl'
            }
          }, [t._v('#')]), t._v(' URL.createObjectURL()')
        ]), t._v(' '), s('p', [t._v('光是转化为 '), s('code', [t._v('Blob')]), t._v(' 对象并不能实现下载，还需借助 '), s('code', [t._v('URL.createObjectURL()')]), t._v(' 方法将 '), s('code', [t._v('Blob')]), t._v(' 对象构造为一个可用的 '), s('code', [t._v('url')]), t._v('。')]), t._v(' '), s('p', [s('code', [t._v('URL.createObjectURL()')]), t._v(' 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的 URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的 URL 对象表示指定的 File 对象或 Blob 对象。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              t._v('objectURL '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token constant'
                }
              }, [t._v('URL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createObjectURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('blob'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 返回值：blob://URL。')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br')
          ])
        ]), s('p', [s('code', [t._v('URL.revokeObjectURL()')]), t._v(' 用来释放创建的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token constant'
                }
              }, [t._v('URL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('revokeObjectURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('objectURL'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br')
          ])
        ]), s('p', [t._v('下载图片函数：')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('downloadImage')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                t._v('imgName'), s('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' blob')
              ]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' a '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createElement')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' url '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token constant'
                }
              }, [t._v('URL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createObjectURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('blob'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n  a'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('download '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' imgName'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  a'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('href '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' url'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  a'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('click')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  a'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('remove')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 释放创建的url对象')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token constant'
                }
              }, [t._v('URL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('revokeObjectURL')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('url'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), s('br')
          ])
        ]), s('h2', {
          attrs: {
            id: 'ie-10'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#ie-10'
            }
          }, [t._v('#')]), t._v(' IE 10')
        ]), t._v(' '), s('p', [t._v('在 '), s('code', [t._v('IE')]), t._v(' 下，'), s('code', [t._v('a')]), t._v(' 标签的 '), s('code', [t._v('download')]), t._v('并不支持。在 IE10 以上的版本中，提供了 '), s('code', [t._v('msSaveBlob')]), t._v('、'), s('code', [t._v('msSaveOrOpenBlob')]), t._v(' 来保存 '), s('code', [t._v('blob')]), t._v(' 对象。')]), t._v(' '), s('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          s('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            s('code', [
              s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('window'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('navigator'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('msSaveBlob'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('try')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    window'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('navigator'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('msSaveBlob')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('blob'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"test.png"')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('catch')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('e'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    console'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('log')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('e'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), s('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), s('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            s('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), s('br'), s('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), s('br')
          ])
        ]), s('ul', [s('li', [s('code', [t._v('msSaveBlob')]), t._v(': 保存，')]), t._v(' '), s('li', [s('code', [t._v('msSaveOrOpenBlob')]), t._v(': 保存并打开')])]), t._v(' '), s('h2', {
          attrs: {
            id: '总结'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#总结'
            }
          }, [t._v('#')]), t._v(' 总结')
        ]), t._v(' '), s('p', [s('code', [t._v('canvas')]), t._v('下载图片的过程：')]), t._v(' '), s('ol', [s('li', [t._v('生成 '), s('code', [t._v('data URL')]), t._v('。'), s('code', [t._v('canvas.toDataURL()')])]), t._v(' '), s('li', [t._v('转化为 '), s('code', [t._v('Blob')]), t._v(' 对象')]), t._v(' '), s('li', [t._v('如果存在，使用 '), s('code', [t._v('window.navigator.msSaveBlob(blob, "test.png")')]), t._v('保存，否则：')]), t._v(' '), s('li', [t._v('创建 '), s('code', [t._v('url')]), t._v(' 指向 '), s('code', [t._v('Blob')]), t._v(' 对象。'), s('code', [t._v('URL.createObjectURL()')])]), t._v(' '), s('li', [t._v('创建 '), s('code', [t._v('a')]), t._v(' 标签\n'), s('ul', [s('li', [s('code', [t._v('a.download = imgName')])]), t._v(' '), s('li', [s('code', [t._v('a.href = url')])]), t._v(' '), s('li', [s('code', [t._v('a.click()')])]), t._v(' '), s('li', [s('code', [t._v('a.remove()')])])])]), t._v(' '), s('li', [t._v('释放创建的 '), s('code', [t._v('url')]), t._v(' 对象。'), s('code', [t._v('URL.revokeObjectURL()')])])]), t._v(' '), s('h2', {
          attrs: {
            id: '问题'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#问题'
            }
          }, [t._v('#')]), t._v(' 问题')
        ]), t._v(' '), s('p', [s('code', [t._v('a')]), t._v(' 标签的 '), s('code', [t._v('download')]), t._v(' 属性兼容性并不是很好。'), s('code', [t._v('IE')]), t._v(' 浏览器不支持（可用'), s('code', [t._v('window.navigator.msSaveBlob')]), t._v('），在移动端，'), s('code', [t._v('ios')]), t._v(' 都不支持，某些浏览器也不支持。')]), t._v(' '), s('p', [t._v('在安卓机下，可以通过 '), s('code', [t._v('a.href =data Url')]), t._v(' 来下载，但使用 '), s('code', [t._v('blob')]), t._v(' 对象创建的 '), s('code', [t._v('url')]), t._v('，却无法识别。')]), t._v(' '), s('p', [t._v('综合来看，移动端在前端实现下载功能并不可靠：')]), t._v(' '), s('ol', [s('li', [t._v('pc 端，a 标签 download 下载。')]), t._v(' '), s('li', [t._v('移动端，图片长按保存下载。')])]), t._v(' '), s('h2', {
          attrs: {
            id: '参考资料：'
          }
        }, [
          s('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#参考资料：'
            }
          }, [t._v('#')]), t._v(' 参考资料：')
        ]), t._v(' '), s('ol', [
          s('li', [
            s('a', {
              attrs: {
                href: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('Data URLs'), s('OutboundLink')], 1)
          ]), t._v(' '), s('li', [
            s('a', {
              attrs: {
                href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Blob',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN blob'), s('OutboundLink')], 1)
          ]), t._v(' '), s('li', [
            s('a', {
              attrs: {
                href: 'https://juejin.im/entry/5937c98eac502e0068cf31ae',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('JavaScript 中 Blob 对象'), s('OutboundLink')], 1)
          ]), t._v(' '), s('li', [
            s('a', {
              attrs: {
                href: 'http://html2canvas.hertzen.com/getting-started',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('html2canvas 文档'), s('OutboundLink')], 1)
          ])
        ])
      ])}), [], !1, null, null, null)

    a.default = e.exports}
  }
])