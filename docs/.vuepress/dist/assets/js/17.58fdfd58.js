(window.webpackJsonp = window.webpackJsonp || []).push([
  [17], {
    384: function (t, s, a) {'use strict'; a.r(s); const n = a(0); const e = Object(n.a)({}, (function () {const t = this; const s = t.$createElement; const a = t._self._c || s

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': t.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: '元素大小、位置、滚动相关知识点'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#元素大小、位置、滚动相关知识点'
            }
          }, [t._v('#')]), t._v(' 元素大小、位置、滚动相关知识点')
        ]), t._v(' '), a('h2', {
          attrs: {
            id: '元素大小'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#元素大小'
            }
          }, [t._v('#')]), t._v(' 元素大小')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'style-width-和-style-height'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#style-width-和-style-height'
            }
          }, [t._v('#')]), t._v(' style.width 和 style.height')
        ]), t._v(' '), a('ol', [a('li', [t._v('返回元素设置的宽、高')]), t._v(' '), a('li', [t._v('需要是在内嵌的 style 中设置 width 和 height 的值')]), t._v(' '), a('li', [t._v('是一个带'), a('code', [t._v('px')]), t._v('字符串')])]), t._v(' '), a('h3', {
          attrs: {
            id: 'offsetwidth-和-offsetheight'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#offsetwidth-和-offsetheight'
            }
          }, [t._v('#')]), t._v(' offsetWidth 和 offsetHeight')
        ]), t._v(' '), a('ol', [a('li', [t._v('元素 content(height/width) + padding + border（包括滚动条），')]), t._v(' '), a('li', [t._v('是一个 Number 且只读')])]), t._v(' '), a('h3', {
          attrs: {
            id: 'clientwidth-和-clientheight'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#clientwidth-和-clientheight'
            }
          }, [t._v('#')]), t._v(' clientWidth 和 clientHeight')
        ]), t._v(' '), a('ol', [a('li', [t._v('返回元素的可视宽高，content(height/width) + padding - 滚动条')]), t._v(' '), a('li', [t._v('是一个 Number 且只读')])]), t._v(' '), a('p', [t._v('获取滚动条宽度，可以创建一个元素，先获取它的 clientWidth，然后显示它的滚动条，再获取它的 clientWidth，两次 clientWidth 相减。')]), t._v(' '), a('div', {
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
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getScrollWidth')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' noScroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    scroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    oDiv '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createElement')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"DIV"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  oDiv'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('cssText '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  noScroll '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('body'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('appendChild')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('oDiv'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientWidth'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  oDiv'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('overflowY '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  scroll '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' oDiv'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientWidth'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('body'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('removeChild')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('oDiv'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' noScroll '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('-')]), t._v(' scroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('12')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: 'scrollwidth-和-scrolltheight'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#scrollwidth-和-scrolltheight'
            }
          }, [t._v('#')]), t._v(' scrollWidth 和 scrolltHeight')
        ]), t._v(' '), a('ol', [a('li', [t._v('元素的实际宽高，即包含：滚动条所能滚动到的距离 + padding - 滚动条（不包括 margin）')]), t._v(' '), a('li', [t._v('没有滚动条时和 clientWidth、clientHeight 相等')]), t._v(' '), a('li', [t._v('是一个 Number 且只读')])]), t._v(' '), a('h3', {
          attrs: {
            id: '屏幕宽高'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#屏幕宽高'
            }
          }, [t._v('#')]), t._v(' 屏幕宽高')
        ]), t._v(' '), a('p', [t._v('document.body.clientWidth / document.body.clientHeight => body 宽高 （和普通元素的一样）')]), t._v(' '), a('p', [t._v('document.documentElement.clientWidth / document.documentElement.clientHeight => 可视窗口宽高')]), t._v(' '), a('p', [t._v('document.documentElement.scrollHeight / document.documentElement.scrollWidth => 屏幕实际宽高、包括滚动内容、margin、padding、border')]), t._v(' '), a('p', [t._v('document.documentElement.offsetHeight => html 标签的高度')]), t._v(' '), a('p', [t._v('screen.width / screen.Height => 设备屏幕宽高，单位是设备独立像素')]), t._v(' '), a('p', [t._v('window.innerWidth => 浏览器窗口的视口宽度，比 document.documentElement.clientWidth 多了一个滚动条')]), t._v(' '), a('p', [t._v('Window.outerHeight => 整个浏览器窗口的高度')]), t._v(' '), a('h3', {
          attrs: {
            id: '注意点'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#注意点'
            }
          }, [t._v('#')]), t._v(' 注意点')
        ]), t._v(' '), a('ol', [a('li', [a('p', [t._v('clientWidth、offsetWidth、scrollWitdh 在元素隐藏时，无法正确获取。且对内联元素无效。')])]), t._v(' '), a('li', [a('p', [t._v('对于 clientWidth、scrollWidth，如果是获取 body 的，那么不会包括滚动条；但如果是获取一个节点的，就会包括滚动条。')])]), t._v(' '), a('li', [a('p', [t._v('scrolltHeight 在没有滚动条时并不严格一定等于 clientHeight，scrolltHeight 本意是元素的高度包括不可见的内容，例如：')]), t._v(' '), a('ul', [a('li', [t._v('存在绝对定位子元素超出（下、右超出)')]), t._v(' '), a('li', [t._v('BFC 下 margin 重叠，这里指的是该元素与其他元素同处与一个 BFC 下，那么该元素的上下 margin 与临近元素的 margin 重叠。')])]), t._v(' '), a('p', [t._v('scrolltHeight 都会大于 clientHeight。')])])]), t._v(' '), a('h3', {
          attrs: {
            id: '判断是否有滚动条'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#判断是否有滚动条'
            }
          }, [t._v('#')]), t._v(' 判断是否有滚动条')
        ]), t._v(' '), a('p', [t._v('首先是产生滚动条的条件：')]), t._v(' '), a('p', [a('strong', [t._v('页面滚动条')])]), t._v(' '), a('ol', [a('li', [a('p', [t._v('对于页面的可视区域，只要有元素下、右超出（无论何种方式），document.documentElement.scrollHeight 就会大于 document.documentElement.clientHeight，一般来说页面就会产生滚动条。但在 body 或是 html 设置了 '), a('code', [t._v('overflow:hidden')]), t._v('情况下，此时并不会有滚动条，即使 body 本身超过可视窗口高度。')])]), t._v(' '), a('li', [a('p', [t._v('如果 body 是被内容撑开，并没有直接设置高度，那 scrollHeight 和 clientHeight 相等。如果 body 设置了高度，那 clientHeight 就等于设置的高度，如果有元素超出 body，那 body 的 scrollHeight 和 clientHeight 就会不相等，但如果元素并没有超出可视区域，页面依然不会有滚动条。')])])]), t._v(' '), a('p', [t._v('所以页面判断是能滚动:')]), t._v(' '), a('ol', [a('li', [t._v('有元素下、右超出可视区域，即:document.documentElement.scrollHeight > document.documentElement.clientHeight')]), t._v(' '), a('li', [t._v('body、html 的 overflow 不为 hidden')])]), t._v(' '), a('p', [a('strong', [t._v('容器内滚动条')])]), t._v(' '), a('ol', [a('li', [a('p', [t._v('容器必须设置'), a('code', [t._v('overflow:scroll')]), t._v('或者'), a('code', [t._v('overflow:auto')]), t._v('。')])]), t._v(' '), a('li', [a('p', [t._v('在容器内，')]), t._v(' '), a('p', [t._v('a. 有元素下、右超出（绝对定位或相对定位等)')]), t._v(' '), a('p', [t._v('b. BFC margin 重叠')]), t._v(' '), a('p', [t._v('scrollHeight 和 clientHeight 就不会相等。但如果处于 '), a('code', [t._v('1')]), t._v(' 的条件，'), a('code', [t._v('a')]), t._v(' 情况可以滚动，'), a('code', [t._v('b')]), t._v(' 情况会消失（容器单独成为了一个 BFC）。')])]), t._v(' '), a('li', [a('p', [t._v('如果设置了'), a('code', [t._v('overflow:hidden')]), t._v('一定没有滚动条，但设置'), a('code', [t._v('scrollTop')]), t._v('依然可以让其滚动。')])])]), t._v(' '), a('p', [t._v('所以容器判断能滚动：')]), t._v(' '), a('ol', [a('li', [t._v('overflow 为 scroll 或者 auto')]), t._v(' '), a('li', [t._v('scrollHeight > clientHeight')])]), t._v(' '), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('checkPageCanScroll')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' viewHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('documentElement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientHeight'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' viewWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('documentElement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientWidth'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' bodyStyle '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getComputedStyle')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('body'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' htmlStyle '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getComputedStyle')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('documentElement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('\n    bodyStyle'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('overflow '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"hidden"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v('\n    htmlStyle'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('overflow '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"hidden"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('documentElement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('>')]), t._v(' viewHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n      document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('documentElement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('>')]), t._v(' viewWidth'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('checkNodeCanScroll')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('el')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' elStyle '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getComputedStyle')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('elStyle'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('overflow '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' elStyle'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('overflow '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"auto"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('>')]), t._v(' el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('>')]), t._v(' el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientWidth'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('12')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('13')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('14')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('15')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('16')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('17')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('18')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('19')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('20')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('21')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('22')]), a('br')
          ])
        ]), a('h2', {
          attrs: {
            id: '元素-css-样式'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#元素-css-样式'
            }
          }, [t._v('#')]), t._v(' 元素 CSS 样式')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'style'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#style'
            }
          }, [t._v('#')]), t._v(' style')
        ]), t._v(' '), a('p', [t._v('style：获取或设置元素的样式，只能获取内嵌 style 的样式。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'getcomputedstyle'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#getcomputedstyle'
            }
          }, [t._v('#')]), t._v(' getComputedStyle')
        ]), t._v(' '), a('p', [t._v('语法：'), a('code', [t._v('window.getComputedStyle(element,[pseudoElt])')])]), t._v(' '), a('p', [a('strong', [t._v('描述')]), t._v('\n返回一个对象，包含元素的实时 CSS 值，带'), a('code', [t._v('px')]), t._v('的字符串，只读。（IE 仅在 IE9 以上支持）')]), t._v(' '), a('p', [a('strong', [t._v('element')])]), t._v(' '), a('ul', [a('li', [t._v('需要获取样式的节点')])]), t._v(' '), a('p', [a('strong', [t._v('pseudoElt')])]), t._v(' '), a('ul', [a('li', [t._v('指定一个要匹配的伪元素的字符串。必须对普通元素省略（或 null）')])]), t._v(' '), a('div', {
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
              }, [t._v('let')]), t._v(' element '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getElementById')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"id"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\nconsole'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('log')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getComputedStyle')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('element'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('paddingLeft'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 或者使用getPropertyValue()以CSS属性名称命名方式访问')]), t._v('\nconsole'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('log')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getComputedStyle')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('element'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getPropertyValue')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"padding-left"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br')
          ])
        ]), a('blockquote', [a('p', [t._v('通常情况下，需要获取 CSS 具体属性值，而不是使用简写。例如：window.getComputedStyle(element).border，当 border 的 left、top、right、bottom 有一个或多个没有设置时，或是设置不同时（left 和 right 颜色不同等），都不会正确返回。')])]), t._v(' '), a('p', [a('code', [t._v('getComputedStyle')]), t._v(' 的返回值是 '), a('code', [t._v('resolved values')]), t._v(', 通常跟 CSS2.1 中的 '), a('code', [t._v('computed values')]), t._v(' 是相同的值。 但对于一些旧的属性，比如 width, height, padding 它们的值又为 '), a('code', [t._v('used values')]), t._v('。'), a('code', [t._v('computed values')]), t._v(' 为布局前的值， '), a('code', [t._v('used values')]), t._v(' 布局后的值。 布局前与布局后的区别是， '), a('code', [t._v('width')]), t._v(' 或者 '), a('code', [t._v('height')]), t._v(' 的 百分比可以代表元素的宽度，在布局后会被像素值替换。')]), t._v(' '), a('blockquote', [a('p', [t._v('如果该元素是隐藏的，且元素的'), a('code', [t._v('width')]), t._v(', '), a('code', [t._v('height')]), t._v(', '), a('code', [t._v('padding')]), t._v('等设置的是百分比等，那获取到的这些值就会是百分比。原因是元素还未布局。')])]), t._v(' '), a('p', [
          t._v('参考：'), a('a', {
            attrs: {
              href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('MDN getComputedStyle'), a('OutboundLink')], 1)
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'currentstyle'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#currentstyle'
            }
          }, [t._v('#')]), t._v(' currentStyle')
        ]), t._v(' '), a('p', [a('code', [t._v('element.currentStyle')]), t._v('和'), a('code', [t._v('getComputedStyle')]), t._v('一样，不过它只存在于旧版本的 IE 浏览器中（IE8 以下）')]), t._v(' '), a('h3', {
          attrs: {
            id: '其他'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#其他'
            }
          }, [t._v('#')]), t._v(' 其他')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: 'clientleft-和-clienttop'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#clientleft-和-clienttop'
            }
          }, [t._v('#')]), t._v(' clientLeft 和 clientTop')
        ]), t._v(' '), a('p', [t._v('clientLeft：返回元素的左边框的宽度。如果元素的文本方向是从右向左，并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。Number 且只读。')]), t._v(' '), a('h2', {
          attrs: {
            id: '元素位置'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#元素位置'
            }
          }, [t._v('#')]), t._v(' 元素位置')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'offsetleft-和-offsettop'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#offsetleft-和-offsettop'
            }
          }, [t._v('#')]), t._v(' offsetLeft 和 offsetTop')
        ]), t._v(' '), a('ol', [a('li', [t._v('当前元素和'), a('code', [t._v('父元素')]), t._v('之间的距离，不包括'), a('code', [t._v('父元素的边框')])]), t._v(' '), a('li', [t._v('是一个 Number 且只读')])]), t._v(' '), a('h4', {
          attrs: {
            id: '父元素：offsetparent'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#父元素：offsetparent'
            }
          }, [t._v('#')]), t._v(' 父元素：offsetParent')
        ]), t._v(' '), a('p', [t._v('上面所说的'), a('code', [t._v('父元素')]), t._v('就是元素的'), a('code', [t._v('offsetParent')])]), t._v(' '), a('ol', [a('li', [t._v('返回'), a('code', [t._v('定位')]), t._v('的父元素')]), t._v(' '), a('li', [t._v('如果没有'), a('code', [t._v('定位')]), t._v('元素，返回最近的 table、table-cell 或 body 元素')]), t._v(' '), a('li', [a('code', [t._v('display:none')]), t._v('和'), a('code', [t._v('position:fixed')]), t._v('的元素的 '), a('code', [t._v('offsetParent')]), t._v(' 为 null（此时 offsetTop 返回当前元素与可视窗口的距离）')])]), t._v(' '), a('h3', {
          attrs: {
            id: 'element-getboundingclientrect'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#element-getboundingclientrect'
            }
          }, [t._v('#')]), t._v(' element.getBoundingClientRect()')
        ]), t._v(' '), a('p', [t._v('返回一组用于描述边框的只读属性，每个属性是一个 Number 值')]), t._v(' '), a('div', {
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
              }, [t._v('{')]), t._v('\n  right'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'元素右边到视窗左边距离\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  bottom'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'元素底部到视窗顶部距离\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  left'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'元素左边到视窗左边距离\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ie6、7少2px')]), t._v('\n  top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'元素上边到视窗顶部边距离\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ie6、7少2px')]), t._v('\n  width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'元素宽度\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ie6、7没有')]), t._v('\n  height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'元素高度\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ie6、7没有')]), t._v('\n  x'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'同left\'')]), t._v('\n  y'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'同top\'')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('//兼容写法')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getClientReat')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('client')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v(' top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' bottom'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' left'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' right'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' width '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' client'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getBoundingClientRect')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      bottom'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      left'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      right'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' height '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' bottom '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('-')]), t._v(' top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v('    width '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' right '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('-')]), t._v(' left\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('12')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('13')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('14')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('15')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('16')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('17')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('18')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('19')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('20')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('21')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('22')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('23')]), a('br')
          ])
        ]), a('blockquote', [a('p', [t._v('同样，元素隐藏时，'), a('code', [t._v('getBoundingClientRect')]), t._v('也无法获取位置信息。')])]), t._v(' '), a('p', [
          t._v('参考：'), a('a', {
            attrs: {
              href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('MDN getBoundingClientRect()'), a('OutboundLink')], 1)
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '元素的绝对位置'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#元素的绝对位置'
            }
          }, [t._v('#')]), t._v(' 元素的绝对位置')
        ]), t._v(' '), a('p', [t._v('元素的左上角相对于整张网页左上角坐标：')]), t._v(' '), a('div', {
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
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getElementActualXY')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('element')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' actualLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' element'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('offsetLeft'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' actualTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' element'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('offsetTop'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' parent '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' element'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('offsetParent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('while')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('parent '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('null')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    actualLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+=')]), t._v(' parent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('offsetLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' parent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientLeft'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    actualTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+=')]), t._v(' parent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('offsetTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' parent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('clientTop'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    parent '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' parent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('offsetParent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v(' actualLeft'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' actualTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), a('br')
          ])
        ]), a('p', [t._v('或者：')]), t._v(' '), a('div', {
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
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getElementActualXY')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('element')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v(' top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' left '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' client'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getBoundingClientRect')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' scrollY '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollY'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' scrollX '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollX'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 加上滚动条就是相对于文档左上角坐标')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    actualLeft'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' left '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' scrollX'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    actualTop'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' top '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' scrollY\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('10')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('11')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '相对位置'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#相对位置'
            }
          }, [t._v('#')]), t._v(' 相对位置')
        ]), t._v(' '), a('p', [t._v('使用 '), a('code', [t._v('element.getBoundingClientRect()')])]), t._v(' '), a('h2', {
          attrs: {
            id: '滚动条'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#滚动条'
            }
          }, [t._v('#')]), t._v(' 滚动条')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'scrolltop-和-scrollleft'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#scrolltop-和-scrollleft'
            }
          }, [t._v('#')]), t._v(' scrollTop 和 scrollLeft')
        ]), t._v(' '), a('p', [t._v('element.scrollTop 获取或设置一个元素的滚动条位置，Number 值。')]), t._v(' '), a('blockquote', [a('p', [t._v('需要是这个元素产生滚动条，也就是意味着，其高度固定，由子元素超出让该元素产生滚动条。')])]), t._v(' '), a('h3', {
          attrs: {
            id: 'pagexoffset-和-pageyoffset'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#pagexoffset-和-pageyoffset'
            }
          }, [t._v('#')]), t._v(' pageXOffset 和 pageYOffset')
        ]), t._v(' '), a('p', [t._v('windows.pageXOffset 表示文档从左侧开始滚动的像素值。')]), t._v(' '), a('ol', [a('li', [t._v('window.scrollX 是 window.pageXOffset 的别名，为了跨浏览器兼容性，请使用 window.pageXOffset 代替 window.scrollX。'), a('strong', [t._v('IE8 以下两个都不支持')])]), t._v(' '), a('li', [t._v('document.documentElement.scrollTop 和 pageXOffset 相等。（可在低版本 IE 代替 pageXOffset）。')])]), t._v(' '), a('h3', {
          attrs: {
            id: 'scrollto-、scroll-和-scrollby'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#scrollto-、scroll-和-scrollby'
            }
          }, [t._v('#')]), t._v(' scrollTo 、scroll 和 scrollBy')
        ]), t._v(' '), a('p', [t._v('scrollTo(x,y)：滚动条滚动到指定的 x、y 坐标位置。')]), t._v(' '), a('p', [t._v('element.scrollTo() 兼容性很差，不建议使用。')]), t._v(' '), a('p', [t._v('window.scrollTo() 兼容性良好。')]), t._v(' '), a('blockquote', [a('p', [t._v('scroll() 和 scrollTo 方法一致。')])]), t._v(' '), a('p', [t._v('scrollBy(x,y)：滚动条滚动指定 x、y 距离。')]), t._v(' '), a('p', [t._v('element.scrollBy() 兼容性很差，不建议使用。')]), t._v(' '), a('p', [t._v('window.scrollBy() 兼容性较好，但 IE10 以下都不支持。')]), t._v(' '), a('p', [t._v('另外还有：window.scrollByPages() 和 window.scrollByLines()，一个按页数翻页，一个按行数滚动。但非规范，几乎不兼容任何浏览器。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'scrolltooptions'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#scrolltooptions'
            }
          }, [t._v('#')]), t._v(' ScrollToOptions')
        ]), t._v(' '), a('p', [t._v('ScrollToOptions 为一个对象，其中的属性可以指定一个元素应该滚动到哪里，以及滚动是否应该平滑。用于 scrollTo 、scroll 和 scrollBy 三个函数。')]), t._v(' '), a('div', {
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
              }, [t._v('let')]), t._v(' scrollOptions '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  left'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('100')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// X轴方向滚动像素')]), t._v('\n  top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('100')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// Y轴方向滚动像素')]), t._v('\n  behavior'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"smooth"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 平滑滚动')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br')
          ])
        ]), a('blockquote', [a('p', [t._v('兼容性差，IE，Safari 等都不兼容。')])]), t._v(' '), a('p', [
          t._v('参考：'), a('a', {
            attrs: {
              href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/ScrollToOptions',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('MDN ScrollToOptions'), a('OutboundLink')], 1)
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'scrollintoview'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#scrollintoview'
            }
          }, [t._v('#')]), t._v(' scrollIntoView')
        ]), t._v(' '), a('p', [t._v('表示将元素滚动到可视窗口。')]), t._v(' '), a('p', [a('strong', [t._v('element.scrollIntoView(alignToTop)')])]), t._v(' '), a('p', [a('code', [t._v('alignToTop')]), t._v('，一个 Boolean 值：')]), t._v(' '), a('ol', [a('li', [t._v('如果为 true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。默认为 true')]), t._v(' '), a('li', [t._v('如果为 false，元素的底端将和其所在滚动区的可视区域的底端对齐。')])]), t._v(' '), a('p', [a('strong', [t._v('element.scrollIntoView(scrollIntoViewOptions)')])]), t._v(' '), a('p', [a('code', [t._v('scrollIntoViewOptions')]), t._v('，一个带有选项的 object，属性：')]), t._v(' '), a('ol', [a('li', [t._v('behavior 可选。定义缓动动画， "auto", "instant", 或 "smooth" 之一。默认为 "auto"。')]), t._v(' '), a('li', [t._v('block 可选。"start", "center", "end", 或 "nearest" 之一。默认为 "start"。')]), t._v(' '), a('li', [t._v('inline 可选。"start", "center", "end", 或 "nearest" 之一。默认为 "nearest"。')])]), t._v(' '), a('div', {
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
                  class: 'token comment'
                }
              }, [t._v('// 例子')]), t._v('\nelement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('scrollIntoView')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nelement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('scrollIntoView')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('false')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nelement'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('scrollIntoView')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  behavior'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"instant"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  block'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"end"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  inline'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"nearest"')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('3')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('4')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br')
          ])
        ]), a('blockquote', [a('ol', [a('li', [a('code', [t._v('scrollIntoViewOptions')]), t._v(' 的兼容性很差，不建议使用。')]), t._v(' '), a('li', [t._v('可能会影响周围定位元素，例如：fixed 定位的元素。')])])]), t._v(' '), a('p', [
          t._v('参考：'), a('a', {
            attrs: {
              href: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('MDN scrollIntoView'), a('OutboundLink')], 1)
        ])
      ])}), [], !1, null, null, null)

    s.default = e.exports}
  }
])