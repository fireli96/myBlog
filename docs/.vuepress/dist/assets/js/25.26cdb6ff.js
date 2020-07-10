(window.webpackJsonp = window.webpackJsonp || []).push([
  [25], {
    397: function (t, s, a) {'use strict'; a.r(s); const n = a(0); const e = Object(n.a)({}, (function () {const t = this; const s = t.$createElement; const a = t._self._c || s

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': t.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: '监听-dom-的变化'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#监听-dom-的变化'
            }
          }, [t._v('#')]), t._v(' 监听 dom 的变化')
        ]), t._v(' '), a('h2', {
          attrs: {
            id: '前言'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#前言'
            }
          }, [t._v('#')]), t._v(' 前言')
        ]), t._v(' '), a('p', [t._v('在写一些通用的组件库时，总希望组件能宽高自适应，来使组件有更好的表现。但 dom 的大小是无法直接监听的，在搜索的过程中，发现一些方法可以做到监听页面变化，在这里做一个总结，内容包括：')]), t._v(' '), a('ol', [a('li', [a('code', [t._v('resize')]), t._v(' 事件。')]), t._v(' '), a('li', [a('code', [t._v('MutationObserver')]), t._v(' 观察属性变化。')]), t._v(' '), a('li', [t._v('通过动画监听节点添加。')]), t._v(' '), a('li', [t._v('通过过渡监听元素大小变化。（只适用于元素大小直接改变）')]), t._v(' '), a('li', [t._v('通过滚动监听元素大小变化。（完美）')])]), t._v(' '), a('h2', {
          attrs: {
            id: 'resize-事件'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#resize-事件'
            }
          }, [t._v('#')]), t._v(' resize 事件')
        ]), t._v(' '), a('p', [t._v('视窗的大小监听可以使用'), a('code', [t._v('window.addEventListener(\'resize\',callback)')]), t._v('。')]), t._v(' '), a('h2', {
          attrs: {
            id: 'mutationobserver'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#mutationobserver'
            }
          }, [t._v('#')]), t._v(' MutationObserver')
        ]), t._v(' '), a('p', [t._v('MutationObserver 是 H5 的新 api，主要用于观察某个范围的 dom 树的变化。')]), t._v(' '), a('div', {
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
                  class: 'token comment'
                }
              }, [t._v('// 创建观察者对象')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' observer '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('new')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('MutationObserver')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                t._v('MutationRecord'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' target')
              ]), a('span', {
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
                  class: 'token comment'
                }
              }, [t._v('// 指定的DOM节点(目标节点)发生变化时被调用')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// MutationRecord为一个数组，记录的节点的一组变化')]), t._v('\n  MutationRecord'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('forEach')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('mutation')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    console'), a('span', {
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
              }, [t._v('(')]), t._v('mutation'), a('span', {
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
              }, [t._v(';')]), t._v('\n'), a('span', {
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
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 获取需要观察元素的dom')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' ele '), a('span', {
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
              }, [t._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"#el"')]), a('span', {
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
                  class: 'token comment'
                }
              }, [t._v('// 观察dom')]), t._v('\nobserver'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('observe')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('ele'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 观察目标节点的属性节点(增，删，改)')]), t._v('\n  attributes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 观察目标节点的子节点(增, 删)')]), t._v('\n  childList'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 观察characterData节点(一种抽象接口,具体可以为文本节点,注释节点,以及处理指令节点)的变化')]), t._v('\n  characterData'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 观察目标节点所包含的整棵DOM树上的上述三种节点变化')]), t._v('\n  subtree'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 在attributes属性已经设为true的前提下,将发生变化的属性节点之前的属性值记录下来(MutationRecord对象的oldValue属性中)')]), t._v('\n  attributeOldValue'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 在characterData属性已经设为true的前提下,将发生变化的characterData节点之前的文本内容记录下来(MutationRecord对象的oldValue属性中)')]), t._v('\n  characterDataOldValue'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), t._v('\n'), a('span', {
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
            }, [t._v('23')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('24')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('25')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('26')]), a('br')
          ])
        ]), a('blockquote', [a('p', [t._v('MutationObserver 主要用于观察节点属性、子节点、characterData 节点、整个树的变化，'), a('strong', [t._v('如果要监测样式的变化，那么它只能监测到内联样式'), a('code', [t._v('style')]), t._v('属性的变化')]), t._v('，如果是 css 改变，无法监听。')])]), t._v(' '), a('h2', {
          attrs: {
            id: '动画'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#动画'
            }
          }, [t._v('#')]), t._v(' 动画')
        ]), t._v(' '), a('p', [t._v('动画可以观察元素的插入，原理在于为节点的所有后代元素添加一个短暂的动画，那么当该节点内新加一个子节点时，就会触发动画开始事件。')]), t._v(' '), a('div', {
          staticClass: 'language-css line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-css'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('/* 所有后代节点添加动画 */')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('#container *')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('animation-duration')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0.001s'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('animation-name')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' nodeInserted'), a('span', {
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
                  class: 'token atrule'
                }
              }, [
                a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token rule'
                  }
                }, [t._v('@keyframes')]), t._v(' nodeInserted')
              ]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('from')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('opacity')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0.99'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('to')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('opacity')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 1'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
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
            }, [t._v('14')]), a('br')
          ])
        ]), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              t._v('document\n  '), a('span', {
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
              }, [t._v('"container"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"animationstart"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
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
            }, [t._v('3')]), a('br')
          ])
        ]), a('blockquote', [a('p', [t._v('只适用观察有新节点添加。')])]), t._v(' '), a('h2', {
          attrs: {
            id: '过渡'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#过渡'
            }
          }, [t._v('#')]), t._v(' 过渡')
        ]), t._v(' '), a('p', [t._v('过渡可以用来观察元素的大小变化，设置了'), a('code', [t._v('transition')]), t._v('元素，其相应样式改变时，会触发过渡事件。')]), t._v(' '), a('div', {
          staticClass: 'language-css line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-css'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('/* 所有后代节点添加动画 */')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('#container')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('height')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 200px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('width')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 200px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transition')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' width 0.001s'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' height 0.001s'), a('span', {
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
            }, [t._v('6')]), a('br')
          ])
        ]), a('div', {
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
              }, [t._v('let')]), t._v(' container '), a('span', {
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
              }, [t._v('"container"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\ncontainer'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"transitionstart"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
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
              }, [t._v(';')]), t._v('\ncontainer'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"400px"')]), a('span', {
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
            }, [t._v('3')]), a('br')
          ])
        ]), a('blockquote', [a('p', [t._v('但如果元素的宽高时根据父元素而定，例如'), a('code', [t._v('width:100%')]), t._v('，那么父元素宽高改变时，并不会触发过渡。这种方法只适用于直接改变元素宽高。')])]), t._v(' '), a('h2', {
          attrs: {
            id: '滚动'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#滚动'
            }
          }, [t._v('#')]), t._v(' 滚动')
        ]), t._v(' '), a('p', [t._v('在搜寻后，发现了一个通过滚动来监听元素大小改变的方法，近乎完美。')]), t._v(' '), a('p', [t._v('主要思路在于：')]), t._v(' '), a('ol', [a('li', [t._v('在被'), a('code', [t._v('监测元素')]), t._v('里包裹一个跟元素位置大小相同的'), a('code', [t._v('隐藏块')]), t._v('。')]), t._v(' '), a('li', [a('code', [t._v('隐藏块')]), t._v('可以滚动，并有一个远远大于它的'), a('code', [t._v('隐藏子元素')]), t._v('。')]), t._v(' '), a('li', [a('code', [t._v('隐藏块')]), t._v('的初始滚动位置为'), a('strong', [t._v('最底部')]), t._v('。')]), t._v(' '), a('li', [t._v('当被'), a('code', [t._v('监测元素')]), t._v('宽高改变时，会触发'), a('code', [t._v('隐藏块')]), t._v('的滚动事件。')])]), t._v(' '), a('blockquote', [a('p', [t._v('即使是 '), a('code', [t._v('overflow: hidden;')]), t._v(' 的元素依然会触发滚动事件。')])]), t._v(' '), a('p', [t._v('具体原理见原文：')]), t._v(' '), a('p', [
          a('a', {
            attrs: {
              href: 'https://blog.crimx.com/2017/07/15/element-onresize/',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('巧妙监测元素尺寸变化'), a('OutboundLink')], 1)
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '监听变大'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#监听变大'
            }
          }, [t._v('#')]), t._v(' 监听变大')
        ]), t._v(' '), a('p', [a('code', [t._v('隐藏子元素')]), t._v('的大小足够大就行了。那么只要'), a('code', [t._v('隐藏块')]), t._v('大小变化，必定会引起 '), a('code', [t._v('scrollTop')]), t._v('或'), a('code', [t._v('scrollLeft')]), t._v('改变。')]), t._v(' '), a('p', [t._v('如图：')]), t._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1592748560765.png',
              alt: 'enter description here'
            }
          })
        ]), t._v(' '), a('p', [t._v('变大是左边界向左延伸，故 '), a('code', [t._v('scrollLeft')]), t._v(' 改变。')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('div')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('class')]), a('span', {
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
                  }, [t._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')]), t._v('parent'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n  '), a('span', {
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
                  }, [t._v('<')]), t._v('div')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('class')]), a('span', {
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
                  }, [t._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')]), t._v('holder-big'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n    '), a('span', {
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
                  }, [t._v('<')]), t._v('div')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('class')]), a('span', {
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
                  }, [t._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')]), t._v('child-big'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
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
                  }, [t._v('</')]), t._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n  '), a('span', {
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
                  }, [t._v('</')]), t._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n'), a('span', {
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
                  }, [t._v('</')]), t._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n')
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
        ]), a('div', {
          staticClass: 'language-css line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-css'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('.holder-big')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('/* 铺满父元素且隐藏 */')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('position')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' absolute'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('top')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('left')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('bottom')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('right')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('overflow')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' hidden'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('visibility')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' hidden'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('z-index')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' -1'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('.child-big')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('width')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 10000px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('height')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 10000px'), a('span', {
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
            }, [t._v('16')]), a('br')
          ])
        ]), a('div', {
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
              }, [t._v('let')]), t._v(' holderBig '), a('span', {
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
              }, [t._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('".holder-big"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nholderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('10000')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nholderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('10000')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nholderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' scroll'), a('span', {
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
            }, [t._v('4')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '监听变小'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#监听变小'
            }
          }, [t._v('#')]), t._v(' 监听变小')
        ]), t._v(' '), a('p', [t._v('如果只是'), a('code', [t._v('隐藏子元素')]), t._v('设定固定大小，根据上图可见，'), a('code', [t._v('监测元素')]), t._v('变小时，右边界向左缩小， '), a('code', [t._v('scrollLeft')]), t._v(' 未改变，所以不会触发滚动事件。')]), t._v(' '), a('p', [t._v('这时候就需要'), a('code', [t._v('隐藏子元素')]), t._v('也根据'), a('code', [t._v('监测元素')]), t._v('的大小而定，那么'), a('code', [t._v('监测元素')]), t._v('变小时，也能触发滚动事件。')]), t._v(' '), a('p', [t._v('也就是'), a('code', [t._v('监测元素')]), t._v('减少 1，那 '), a('code', [t._v('隐藏子元素')]), t._v('必修减少 1 以上才会使'), a('code', [t._v('scrollTop')]), t._v('或'), a('code', [t._v('scrollLeft')]), t._v('改变。')]), t._v(' '), a('p', [t._v('所以'), a('code', [t._v('隐藏子元素')]), t._v('的'), a('code', [t._v('width')]), t._v('应该大于'), a('code', [t._v('100%')]), t._v('。')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('div')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('class')]), a('span', {
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
                  }, [t._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')]), t._v('parent'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n  '), a('span', {
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
                  }, [t._v('<')]), t._v('div')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('class')]), a('span', {
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
                  }, [t._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')]), t._v('holder-small'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n    '), a('span', {
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
                  }, [t._v('<')]), t._v('div')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('class')]), a('span', {
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
                  }, [t._v('=')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')]), t._v('child-small'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
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
                  }, [t._v('</')]), t._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n  '), a('span', {
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
                  }, [t._v('</')]), t._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n'), a('span', {
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
                  }, [t._v('</')]), t._v('div')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n')
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
        ]), a('div', {
          staticClass: 'language-css line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-css'
            }
          }, [
            a('code', [
              a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('.holder-small')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('/* 铺满父元素且隐藏 */')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('position')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' absolute'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('top')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('left')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('bottom')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('right')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 0'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('overflow')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' hidden'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('visibility')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' hidden'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('z-index')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' -1'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('.child-small')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('width')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 300%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('height')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' 300%'), a('span', {
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
            }, [t._v('16')]), a('br')
          ])
        ]), a('div', {
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
              }, [t._v('let')]), t._v(' holderBig '), a('span', {
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
              }, [t._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('".holder-small"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nholderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('10000')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nholderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('10000')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nholderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' scroll'), a('span', {
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
            }, [t._v('4')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '类封装'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#类封装'
            }
          }, [t._v('#')]), t._v(' 类封装')
        ]), t._v(' '), a('p', [t._v('以类的方式封装，方便调用。')]), t._v(' '), a('div', {
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
                  class: 'token comment'
                }
              }, [t._v('// 自定义事件')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('class')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('Events')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// on 监听的事件数组')]), t._v('\n  onEvents '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('on')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                t._v('name'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' callback'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' once '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token operator'
                  }
                }, [t._v('=')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token boolean'
                  }
                }, [t._v('false')])
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('push')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      once'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' once\n    '), a('span', {
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
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('off')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                t._v('name'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' callback')
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('onEvents '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('filter')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('event')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('callback '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
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
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('emit')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [
                t._v('name'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' arg1'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' arg2'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' arg3')
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('onEvents '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('filter')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('event')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('callback')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('arg1'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' arg2'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' arg3'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!')]), t._v('event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('once'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
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
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('export')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('default')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('class')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [t._v('extends')]), t._v(' Events '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  width '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('20000')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  oldWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  newWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  oldHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  newHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  supportsPassive '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('false')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('constructor')]), a('span', {
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
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('super')]), a('span', {
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
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('_init')]), a('span', {
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
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('_init')]), a('span', {
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
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oldWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('parseFloat')]), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oldHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('parseFloat')]), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('setSupportsPassive')]), a('span', {
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
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createNode')]), a('span', {
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
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('createNode')]), a('span', {
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
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 监听变大的DOM')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' holderBig '), a('span', {
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
              }, [t._v('"div"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('style '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"position: absolute;top:0;left: 0;bottom: 0;right: 0;overflow: hidden;visibility: hidden;z-index:-1"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('innerHTML '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token template-string'
                }
              }, [
                a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token template-punctuation string'
                  }
                }, [t._v('`')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token string'
                  }
                }, [t._v('<div style="width:')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token interpolation'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token interpolation-punctuation punctuation'
                    }
                  }, [t._v('${')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('width'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token interpolation-punctuation punctuation'
                    }
                  }, [t._v('}')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token string'
                  }
                }, [t._v('px;height:')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token interpolation'
                  }
                }, [
                  a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token interpolation-punctuation punctuation'
                    }
                  }, [t._v('${')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('width'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token interpolation-punctuation punctuation'
                    }
                  }, [t._v('}')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token string'
                  }
                }, [t._v('px"></div>')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token template-punctuation string'
                  }
                }, [t._v('`')])
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 监听变小的DOM')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' holderSmall '), a('span', {
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
              }, [t._v('"div"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('style '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"position: absolute;top:0;left: 0;bottom: 0;right: 0;overflow: hidden;visibility: hidden;z-index:-1"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('innerHTML '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'<div style="width:300%;height:300%"></div>\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderBig '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderSmall '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
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
              }, [t._v('(')]), t._v('holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
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
              }, [t._v('(')]), t._v('holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n    holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n    holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('supportsPassive\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('?')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n            passive'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), t._v('\n          '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('false')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('false')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('supportsPassive\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('?')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n            passive'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), t._v('\n          '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('false')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('false')]), t._v('\n    '), a('span', {
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
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function-variable function'
                }
              }, [t._v('scroll')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
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
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('newWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('parseFloat')]), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('newHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('parseFloat')]), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 只有两次width不同时才分发事件，不然会多次分发')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oldWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('newWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oldHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('newHeight'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('emit')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"domResize"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oldWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('newWidth'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('oldHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('newHeight'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 每次触发滚动事件后，重新将滚动条设至尽头')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollTop '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scrollLeft '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('setSupportsPassive')]), a('span', {
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
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('try')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' opts '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' Object'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('defineProperty')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"passive"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function-variable function'
                }
              }, [t._v('get')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
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
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n          '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('supportsPassive '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n          '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n      '), a('span', {
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
              }, [t._v(';')]), t._v('\n      window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"testPassive"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('null')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' opts'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('removeEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"testPassive"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('null')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' opts'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('catch')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('e'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      console'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('error')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('e'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('destroy')]), a('span', {
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
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('removeEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderSmall'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('removeEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"scroll"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('scroll'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderBig'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('el'), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('holderSmall'), a('span', {
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
            }, [t._v('23')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('24')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('25')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('26')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('27')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('28')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('29')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('30')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('31')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('32')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('33')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('34')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('35')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('36')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('37')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('38')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('39')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('40')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('41')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('42')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('43')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('44')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('45')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('46')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('47')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('48')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('49')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('50')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('51')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('52')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('53')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('54')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('55')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('56')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('57')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('58')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('59')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('60')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('61')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('62')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('63')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('64')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('65')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('66')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('67')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('68')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('69')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('70')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('71')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('72')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('73')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('74')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('75')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('76')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('77')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('78')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('79')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('80')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('81')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('82')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('83')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('84')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('85')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('86')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('87')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('88')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('89')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('90')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('91')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('92')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('93')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('94')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('95')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('96')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('97')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('98')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('99')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('100')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('101')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('102')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('103')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('104')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('105')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('106')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('107')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('108')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('109')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('110')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('111')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('112')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('113')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('114')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('115')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('116')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('117')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('118')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('119')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('120')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('121')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('122')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('123')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('124')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('125')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('126')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('127')]), a('br')
          ])
        ]), a('p', [t._v('这里使用了'), a('code', [t._v('passive')]), t._v('属性，有助于提高滚动事件的性能。')]), t._v(' '), a('p', [t._v('一般来说，滚动会执行两件事，一是回调函数，而是滚动的默认行为。')]), t._v(' '), a('p', [t._v('而回调函数中是可以使用'), a('code', [t._v('preventDefault()')]), t._v('阻住默认行为的，所以默认行为会等待回调执行完毕才会触发（最后触发才知道是是否阻住了默认行为），这可能引起滚动的不流畅。')]), t._v(' '), a('p', [t._v('使用了'), a('code', [t._v('passive')]), t._v('就表示不会执行'), a('code', [t._v('preventDefault()')]), t._v('，滚动的默认行为会直接触发，而不会等待。')]), t._v(' '), a('h2', {
          attrs: {
            id: '参考文献'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#参考文献'
            }
          }, [t._v('#')]), t._v(' 参考文献')
        ]), t._v(' '), a('ol', [
          a('li', [
            a('a', {
              attrs: {
                href: 'https://blog.crimx.com/2017/07/15/element-onresize/',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('巧妙监测元素尺寸变化'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://segmentfault.com/a/1190000017247263',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('passive 的作用和原理'), a('OutboundLink')], 1)
          ])
        ])
      ])}), [], !1, null, null, null)

    s.default = e.exports}
  }
])