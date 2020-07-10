(window.webpackJsonp = window.webpackJsonp || []).push([
  [15], {
    387: function (t, s, a) {'use strict'; a.r(s); const n = a(0); const e = Object(n.a)({}, (function () {const t = this; const s = t.$createElement; const a = t._self._c || s

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': t.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: 'vue-路由动画和缓存'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vue-路由动画和缓存'
            }
          }, [t._v('#')]), t._v(' vue 路由动画和缓存')
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
        ]), t._v(' '), a('p', [t._v('在使用 vue 路由动画和缓存时，遇到了一些问题，比如：')]), t._v(' '), a('ol', [a('li', [t._v('正确产生动画；')]), t._v(' '), a('li', [t._v('有条件产生动画，比如 A 页面到 B 页面使用动画，A 到其他页面不使用动画；')]), t._v(' '), a('li', [t._v('有条件缓存，管理缓存')]), t._v(' '), a('li', [t._v('动画和缓存的同时使用')])]), t._v(' '), a('p', [t._v('在这里把自己能想到的做一个总结。')]), t._v(' '), a('h2', {
          attrs: {
            id: '路由动画'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#路由动画'
            }
          }, [t._v('#')]), t._v(' 路由动画')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '如何动画'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#如何动画'
            }
          }, [t._v('#')]), t._v(' 如何动画')
        ]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('template')
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
                }, [t._v('id')]), a('span', {
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
                  }, [t._v('"')]), t._v('app'), a('span', {
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
                  }, [t._v('<')]), t._v('header')
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
                  }, [t._v('</')]), t._v('header')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('\x3c!-- 用transition 把切换组件页面的容器包含 --\x3e')]), t._v('\n    '), a('span', {
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
                  }, [t._v('<')]), t._v('transition')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('name')]), a('span', {
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
                  }, [t._v('"')]), t._v('slide'), a('span', {
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
              ]), t._v('\n      '), a('span', {
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
                  }, [t._v('<')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('transition')
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
                  }, [t._v('</')]), t._v('template')
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
            }, [t._v('5')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('6')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('7')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('8')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('9')]), a('br')
          ])
        ]), a('p', [t._v('当路由切换时，动画的实质是在'), a('code', [t._v('router-view')]), t._v('渲染的节点（curNode)后面添加个下一个路由的节点(nextNode)。')]), t._v(' '), a('p', [t._v('curNode 执行离开动画，nextNode 执行进入动画。由于 curNode 和 nextNode 是兄弟节点，如果要实现右进左出的话，需要添加'), a('code', [t._v('absolute')]), t._v('定位。')]), t._v(' '), a('div', {
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
              }, [t._v('/* 进入动画 */')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('.slide-enter')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('opacity')]), a('span', {
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
              }, [t._v('transform')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('translate')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' 0'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('.slide-enter-active,\n.slide-leave-active')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transition')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' transform 0.2s ease'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
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
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('/*离开动画*/')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [t._v('.slide-leave-to')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transform')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('translate')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('-100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' 0'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('#app')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('overflow-x')]), a('span', {
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
              }, [t._v('overflow-y')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' auto'), a('span', {
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
            }, [t._v('21')]), a('br')
          ])
        ]), a('p', [t._v('元素右超出视窗会使页面出现横向滚动条，所以需要为父元素添加 '), a('code', [t._v('overflow:hidden')]), t._v('。')]), t._v(' '), a('p', [t._v('当然也可以使用 '), a('code', [t._v('fixed')]), t._v(' 定位，不会出现滚动条。')]), t._v(' '), a('h3', {
          attrs: {
            id: '动态过渡'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#动态过渡'
            }
          }, [t._v('#')]), t._v(' 动态过渡')
        ]), t._v(' '), a('p', [t._v('根据路由信息动态设置动画效果，比如从'), a('code', [t._v('a')]), t._v('路由到'), a('code', [t._v('b')]), t._v('路由使用左滑效果，从'), a('code', [t._v('b')]), t._v('路由返回'), a('code', [t._v('a')]), t._v('路由使用右滑效果。')]), t._v(' '), a('div', {
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
                  class: 'token comment'
                }
              }, [t._v('\x3c!-- 使用动态的 transition name --\x3e')]), t._v('\n'), a('span', {
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
                  }, [t._v('<')]), t._v('transition')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':name')]), a('span', {
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
                  }, [t._v('"')]), t._v('transitionName'), a('span', {
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
                  }, [t._v('<')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('transition')
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
            }, [t._v('4')]), a('br')
          ])
        ]), a('div', {
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
              }, [t._v('export')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('default')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  watch'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('$route')]), a('span', {
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
                t._v('to'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('from')])
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
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' toName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('const')]), t._v(' fromName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('from')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('fromName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' toName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"b"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('transitionName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"slide-left"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('else')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('fromName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"b"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' toName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('transitionName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"slide-right"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
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
            }, [t._v('13')]), a('br')
          ])
        ]), a('p', [t._v('同级路由无动画，上级路由到子路由有动画（返回时相反动画）。例如：点击文章列表的文章进入文章详情页，文章详情页有返回按钮返回列表。')]), t._v(' '), a('div', {
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
                  class: 'token comment'
                }
              }, [t._v('\x3c!-- 使用动态的 transition name --\x3e')]), t._v('\n'), a('span', {
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
                  }, [t._v('<')]), t._v('transition')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':name')]), a('span', {
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
                  }, [t._v('"')]), t._v('transitionName'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':css')]), a('span', {
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
                  }, [t._v('"')]), t._v('css'), a('span', {
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
                  }, [t._v('<')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('transition')
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
            }, [t._v('4')]), a('br')
          ])
        ]), a('div', {
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
              }, [t._v('export')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('default')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  watch'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('$route')]), a('span', {
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
                t._v('to'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('from')])
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
              }, [t._v('(')]), t._v('to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('child '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('from')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('parent'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('transitionName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"slide-left"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('css '), a('span', {
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
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('else')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('parent '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('from')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('child'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('transitionName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"slide-right"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('css '), a('span', {
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
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('else')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('transitionName '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('""')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('css '), a('span', {
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
              }, [t._v(';')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
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
              }, [t._v('.slide-right-enter')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transform')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('translate')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('-100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' 0'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('.slide-right-enter-active,\n.slide-right-leave-active')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transition')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' transform 0.3s ease'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('position')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' fixed'), a('span', {
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
              }, [t._v(':')]), t._v(' 100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('box-sizing')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' border-box'), a('span', {
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
              }, [t._v('.slide-right-leave-to')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transform')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('translate')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' 0'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('.slide-left-enter')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transform')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('translate')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' 0'), a('span', {
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
                  class: 'token selector'
                }
              }, [t._v('.slide-left-enter-active,\n.slide-left-leave-active')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transition')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' transform 0.3s ease'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('position')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' fixed'), a('span', {
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
              }, [t._v(':')]), t._v(' 100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('box-sizing')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' border-box'), a('span', {
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
              }, [t._v('.slide-left-leave-to')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [t._v('transform')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('translate')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('-100%'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' 0'), a('span', {
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
            }, [t._v('31')]), a('br')
          ])
        ]), a('p', [t._v('即使'), a('code', [t._v('transition')]), t._v('的'), a('code', [t._v('name')]), t._v('为空，也会出现闪烁现象，此时需要设置'), a('code', [t._v('transition')]), t._v('的'), a('code', [t._v('css')]), t._v('为'), a('code', [t._v('false')]), t._v('。')]), t._v(' '), a('p', [t._v('更多详细内容见文档：')]), t._v(' '), a('p', [
          a('a', {
            attrs: {
              href: 'https://router.vuejs.org/zh/guide/advanced/transitions.html#%E5%8D%95%E4%B8%AA%E8%B7%AF%E7%94%B1%E7%9A%84%E8%BF%87%E6%B8%A1',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('vue 官网路由过渡'), a('OutboundLink')], 1)
        ]), t._v(' '), a('h2', {
          attrs: {
            id: '路由缓存'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#路由缓存'
            }
          }, [t._v('#')]), t._v(' 路由缓存')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '缓存特定路由'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#缓存特定路由'
            }
          }, [t._v('#')]), t._v(' 缓存特定路由')
        ]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('keep-alive')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('include')]), a('span', {
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
                  }, [t._v('"')]), t._v('路由渲染得组件name选项'), a('span', {
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
                  }, [t._v('<')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('keep-alive')
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
            }, [t._v('3')]), a('br')
          ])
        ]), a('p', [t._v('可以使用'), a('code', [t._v('keep-alive')]), t._v('的'), a('code', [t._v('include')]), t._v('、'), a('code', [t._v('exclude')]), t._v('来有条件的缓存路由。')]), t._v(' '), a('p', [t._v('或者定义路由元数据来有条件缓存：')]), t._v(' '), a('div', {
          staticClass: 'language-JavaScript line-numbers-mode'
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
              }, [t._v('{')]), t._v('\n    path'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'/Distribution\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'Distribution\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    component'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' Distribution'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('keepAlive'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 缓存')]), t._v('\n '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n\n')
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
            }, [t._v('7')]), a('br')
          ])
        ]), a('div', {
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
                  }, [t._v('<')]), t._v('keep-alive')
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
                  }, [t._v('<')]), t._v('router-view')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('v-if')]), a('span', {
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
                  }, [t._v('"')]), t._v('$route.meta.keepAlive'), a('span', {
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
                  }, [t._v('</')]), t._v('router-view')
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
                  }, [t._v('</')]), t._v('keep-alive')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n\n'), a('span', {
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
                  }, [t._v('<')]), t._v('router-view')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('v-if')]), a('span', {
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
                  }, [t._v('"')]), t._v('!$route.meta.keepAlive'), a('span', {
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
                  }, [t._v('</')]), t._v('router-view')
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
        ]), a('p', [a('strong', [t._v('但由于使用了'), a('code', [t._v('v-if')]), t._v('，在配合'), a('code', [t._v('transition')]), t._v('组件进行路由动画时，无法成功。')])]), t._v(' '), a('h3', {
          attrs: {
            id: '动态缓存'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#动态缓存'
            }
          }, [t._v('#')]), t._v(' 动态缓存')
        ]), t._v(' '), a('p', [t._v('有时只需要在特定的时候缓存，比如 '), a('code', [t._v('a')]), t._v(' 页面（对应 A 组件）到 '), a('code', [t._v('b')]), t._v(' 页面（对应 B 组件）缓存，其他的时候不缓存。')]), t._v(' '), a('p', [t._v('可以通过动态设置'), a('code', [t._v('keep-alive')]), t._v('的'), a('code', [t._v('include')]), t._v('值。')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('transition')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':name')]), a('span', {
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
                  }, [t._v('"')]), t._v('transitionName'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':css')]), a('span', {
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
                  }, [t._v('"')]), t._v('css'), a('span', {
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
                  }, [t._v('<')]), t._v('keep-alive')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':include')]), a('span', {
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
                  }, [t._v('"')]), t._v('keepAlive.join(\',\')'), a('span', {
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
                  }, [t._v('<')]), t._v('router-view')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('/>')])
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
                  }, [t._v('</')]), t._v('keep-alive')
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
                  }, [t._v('</')]), t._v('transition')
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
        ]), a('p', [a('code', [t._v('keepAlive')]), t._v('是一个数组，保存了当前需要被缓存的组件名字，缓存组件需提供 '), a('code', [t._v('name')]), t._v(' 选项。')]), t._v(' '), a('p', [t._v('使用'), a('code', [t._v('vuex')]), t._v('或者'), a('code', [t._v('根实例 data')]), t._v('，储存全局的 '), a('code', [t._v('keepAlive')]), t._v('。')]), t._v(' '), a('p', [t._v('在'), a('code', [t._v('a')]), t._v('组件中，路由离开守卫，根据下一个路由动态修改'), a('code', [t._v('keepAlive')])]), t._v(' '), a('div', {
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
                  class: 'token function'
                }
              }, [t._v('beforeRouteLeave')]), a('span', {
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
                t._v('to'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('from')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' next')
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
              }, [t._v('// a->b，b->a都需要缓存A组件')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('from')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"b"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('||')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('from')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"b"')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('===')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n  '), a('span', {
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
              }, [t._v('// vuex的设置keepAlive方法')]), t._v('\n    '), a('span', {
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
              }, [t._v('storeSetKeepAlive')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"A"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
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
              }, [t._v('}')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('else')]), t._v(' '), a('span', {
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
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('storeSetKeepAlive')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"None"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
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
              }, [t._v('setTimeout')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
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
                  class: 'token function'
                }
              }, [t._v('next')]), a('span', {
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
            }, [t._v('15')]), a('br')
          ])
        ]), a('blockquote', [a('ol', [a('li', [t._v('这里使用一个延时函数'), a('code', [t._v('setTimeout')]), t._v('，确保使用'), a('code', [t._v('router-view')]), t._v('的根组件在跳转前拿到 '), a('code', [t._v('keepAlive')]), t._v(' 值。('), a('code', [t._v('watch')]), t._v('是异步的)。')]), t._v(' '), a('li', [t._v('同时对于无组件缓存，不要设置'), a('code', [t._v('keepAlive=[]')]), t._v('，这样所有的组件都会被缓存。')])])]), t._v(' '), a('p', [a('strong', [t._v('不要通过销毁组件的方式来达到让组件不缓存，类似与下面这样：')])]), t._v(' '), a('div', {
          staticClass: 'language-JavaScript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              t._v('  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('beforeRouteLeave')]), t._v(' '), a('span', {
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
                t._v('to'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('from')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' next')
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
              }, [t._v('if')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('name '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('!==')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'b\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
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
              }, [t._v('$destroy')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n  '), a('span', {
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
            }, [t._v('5')]), a('br')
          ])
        ]), a('p', [t._v('路由全部缓存，只是到 b 路由时，销毁本组件。')]), t._v(' '), a('p', [t._v('一旦这样使用，那 a 路由到 b 路由也会缓存，但再从 b 返回 a 路由后，却不会使用缓存的 a 组件，而是重新渲染一个 a 组件。')]), t._v(' '), a('h3', {
          attrs: {
            id: '全局管理缓存'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#全局管理缓存'
            }
          }, [t._v('#')]), t._v(' 全局管理缓存')
        ]), t._v(' '), a('p', [t._v('为每一个路由组件手动注入'), a('code', [t._v('beforeRouteLeave')]), t._v('，当项目庞大时，维护起来会很困难。可以使用全局混入的方式，统一管理缓存状态：')]), t._v(' '), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              t._v('Vue'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('mixin')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('beforeRouteLeave')]), a('span', {
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
                t._v('to'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('from')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' next')
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
              }, [t._v('from')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('keepAlive '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('&&')]), t._v(' to'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('meta'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('keepAlive'), a('span', {
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
                  class: 'token comment'
                }
              }, [t._v('// 根实例存储keepAlive')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('$root'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('keepAlive '), a('span', {
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
                  class: 'token string'
                }
              }, [t._v('"A"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
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
              }, [t._v('else')]), t._v(' '), a('span', {
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
              }, [t._v('.')]), t._v('$root'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('keepAlive '), a('span', {
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
                  class: 'token string'
                }
              }, [t._v('"None"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
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
                  class: 'token function'
                }
              }, [t._v('setTimeout')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
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
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('next')]), a('span', {
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
            }, [t._v('13')]), a('br')
          ])
        ]), a('h2', {
          attrs: {
            id: '同时动画和缓存'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#同时动画和缓存'
            }
          }, [t._v('#')]), t._v(' 同时动画和缓存')
        ]), t._v(' '), a('p', [t._v('需求：')]), t._v(' '), a('ol', [a('li', [t._v('一级路由和二级路由')]), t._v(' '), a('li', [t._v('一级路由到二级路由有动画（左滑进入），二级路由可以返回一级路由（右滑离开）')]), t._v(' '), a('li', [t._v('二级路由返回时，显示的是缓存的一级路由页面')]), t._v(' '), a('li', [t._v('一级路由和一级路由之间无动画，且不缓存')])]), t._v(' '), a('hr'), t._v(' '), a('ol', [
          a('li', [
            a('p', [t._v('定义路由，为所有一级路由加上元数据 parent，二级路由加上元数据 child')]), t._v(' '), a('div', {
              staticClass: 'language-JavaScript line-numbers-mode'
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
                  }, [t._v('const')]), t._v(' router '), a('span', {
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
                  }, [t._v('Router')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  routes'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('[')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n      path'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token string'
                    }
                  }, [t._v('\'/a\'')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n      component'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token constant'
                    }
                  }, [t._v('A')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n      meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n        parent'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token boolean'
                    }
                  }, [t._v('true')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n      path'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token string'
                    }
                  }, [t._v('\'/b\'')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n      component'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token constant'
                    }
                  }, [t._v('B')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n      meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n        child'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token boolean'
                    }
                  }, [t._v('true')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(']')]), t._v('\n'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v('\n')
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
                }, [t._v('18')]), a('br')
              ])
            ])
          ]), t._v(' '), a('li', [
            a('p', [t._v('缓存数组，保存到根实例的 data 中')]), t._v(' '), a('div', {
              staticClass: 'language-JavaScript line-numbers-mode'
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
                  }, [t._v('new')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token class-name'
                    }
                  }, [t._v('Vue')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  router'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n  store'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n  i18n'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n  data'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n    keepAlive'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('[')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(']')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function-variable function'
                    }
                  }, [t._v('render')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token parameter'
                    }
                  }, [t._v('h')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('=>')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('h')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), t._v('App'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v('\n'), a('span', {
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
                  }, [t._v('.')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('$mount')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token string'
                    }
                  }, [t._v('\'#app\'')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v('\n')
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
                }, [t._v('9')]), a('br')
              ])
            ])
          ]), t._v(' '), a('li', [a('p', [t._v('为每个路由组件添加'), a('code', [t._v('name')]), t._v('选项，这里分别为'), a('code', [t._v('A')]), t._v('、'), a('code', [t._v('B')])])]), t._v(' '), a('li', [
            a('p', [t._v('全局混入'), a('code', [t._v('beforeRouteLeave')]), t._v('守卫')]), t._v(' '), a('div', {
              staticClass: 'language-JavaScript line-numbers-mode'
            }, [
              a('pre', {
                pre: !0,
                attrs: {
                  class: 'language-javascript'
                }
              }, [
                a('code', [
                  t._v('Vue'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('mixin')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('beforeRouteLeave')]), t._v(' '), a('span', {
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
                    t._v('to'), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token punctuation'
                      }
                    }, [t._v(',')]), t._v(' '), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token keyword'
                      }
                    }, [t._v('from')]), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token punctuation'
                      }
                    }, [t._v(',')]), t._v(' next')
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
                      class: 'token comment'
                    }
                  }, [t._v('// 从一级路由到二级路由，二级路由到一级路由时缓存')]), t._v('\n    '), a('span', {
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
                  }, [t._v('from')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('parent '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('&&')]), t._v(' to'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('child '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('||')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('from')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('child '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('&&')]), t._v(' to'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('parent'), a('span', {
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
                  }, [t._v('.')]), t._v('$root'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('keepAlive '), a('span', {
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
                      class: 'token string'
                    }
                  }, [t._v('\'A\'')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(']')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('else')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token comment'
                    }
                  }, [t._v('// 不需要缓存时不要设定为空数组')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('$root'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('keepAlive '), a('span', {
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
                      class: 'token string'
                    }
                  }, [t._v('\'None\'')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(']')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('setTimeout')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), a('span', {
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
                  }, [t._v('{')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('next')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v('\n')
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
            ])
          ]), t._v(' '), a('li', [
            a('p', [t._v('同时使用'), a('code', [t._v('transition')]), t._v('和'), a('code', [t._v('keep-alive')])]), t._v(' '), a('div', {
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
                    }, [t._v('id')]), a('span', {
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
                      }, [t._v('"')]), t._v('app'), a('span', {
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
                      }, [t._v('<')]), t._v('transition')
                    ]), t._v(' '), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token attr-name'
                      }
                    }, [t._v(':name')]), a('span', {
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
                      }, [t._v('"')]), t._v('transitionName'), a('span', {
                        pre: !0,
                        attrs: {
                          class: 'token punctuation'
                        }
                      }, [t._v('"')])
                    ]), t._v(' '), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token attr-name'
                      }
                    }, [t._v(':css')]), a('span', {
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
                      }, [t._v('"')]), t._v('css'), a('span', {
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
                      }, [t._v('<')]), t._v('keep-alive')
                    ]), t._v(' '), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token attr-name'
                      }
                    }, [t._v(':include')]), a('span', {
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
                      }, [t._v('"')]), t._v('$root.keepAlive.join(\',\')'), a('span', {
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
                  ]), t._v('\n      '), a('span', {
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
                      }, [t._v('<')]), t._v('router-view')
                    ]), t._v(' '), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token punctuation'
                      }
                    }, [t._v('/>')])
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
                      }, [t._v('</')]), t._v('keep-alive')
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
                      }, [t._v('</')]), t._v('transition')
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
                }, [t._v('5')]), a('br'), a('span', {
                  staticClass: 'line-number'
                }, [t._v('6')]), a('br'), a('span', {
                  staticClass: 'line-number'
                }, [t._v('7')]), a('br')
              ])
            ])
          ]), t._v(' '), a('li', [
            a('p', [t._v('观察路由信息，动态设置动画')]), t._v(' '), a('div', {
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
                  }, [t._v('export')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('default')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  watch'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('$route')]), a('span', {
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
                    t._v('to'), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token punctuation'
                      }
                    }, [t._v(',')]), t._v(' '), a('span', {
                      pre: !0,
                      attrs: {
                        class: 'token keyword'
                      }
                    }, [t._v('from')])
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
                  }, [t._v('(')]), t._v('to'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('child '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('&&')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('from')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('parent'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n        '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('transitionName '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('=')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token string'
                    }
                  }, [t._v('"slide-left"')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(';')]), t._v('\n        '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('css '), a('span', {
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
                  }, [t._v(';')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('else')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('if')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), t._v('to'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('parent '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('&&')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('from')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('meta'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('child'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(')')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n        '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('transitionName '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('=')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token string'
                    }
                  }, [t._v('"slide-right"')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(';')]), t._v('\n        '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('css '), a('span', {
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
                  }, [t._v(';')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('else')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n        '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('transitionName '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token operator'
                    }
                  }, [t._v('=')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token string'
                    }
                  }, [t._v('""')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(';')]), t._v('\n        '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [t._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('css '), a('span', {
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
                  }, [t._v(';')]), t._v('\n      '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n    '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('}')]), t._v('\n'), a('span', {
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
                  }, [t._v('#app')]), t._v(' '), a('span', {
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
                  }, [t._v(':')]), t._v(' 100%'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(';')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('position')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' relative'), a('span', {
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
                  }, [t._v('.slide-right-enter')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('transform')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('translate')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), t._v('-100%'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v(' 0'), a('span', {
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
                      class: 'token selector'
                    }
                  }, [t._v('.slide-right-enter-active,\n.slide-right-leave-active')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('transition')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' transform 0.3s ease'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(';')]), t._v('\n  '), a('span', {
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
                  }, [t._v('width')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' 100%'), a('span', {
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
                  }, [t._v('box-sizing')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' border-box'), a('span', {
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
                  }, [t._v('.slide-right-leave-to')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('transform')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('translate')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), t._v('100%'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v(' 0'), a('span', {
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
                      class: 'token selector'
                    }
                  }, [t._v('.slide-left-enter')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('transform')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('translate')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), t._v('100%'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v(' 0'), a('span', {
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
                      class: 'token selector'
                    }
                  }, [t._v('.slide-left-enter-active,\n.slide-left-leave-active')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('transition')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' transform 0.3s ease'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(';')]), t._v('\n  '), a('span', {
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
                  }, [t._v('width')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' 100%'), a('span', {
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
                  }, [t._v('box-sizing')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' border-box'), a('span', {
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
                  }, [t._v('.slide-left-leave-to')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('{')]), t._v('\n  '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token property'
                    }
                  }, [t._v('transform')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(':')]), t._v(' '), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token function'
                    }
                  }, [t._v('translate')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('(')]), t._v('-100%'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v(',')]), t._v(' 0'), a('span', {
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
                }, [t._v('45')]), a('br')
              ])
            ])
          ])
        ]), t._v(' '), a('hr'), t._v(' '), a('p', [a('strong', [t._v('效果演示：')])]), t._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https:/fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1592539227159.jpg',
              alt: '路由缓存和动画演示'
            }
          })
        ]), t._v(' '), a('h2', {
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
                href: 'https://router.vuejs.org/zh/guide/advanced/transitions.html#%E5%8D%95%E4%B8%AA%E8%B7%AF%E7%94%B1%E7%9A%84%E8%BF%87%E6%B8%A1',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('vue 官网路由过渡'), a('OutboundLink')], 1)
          ])
        ])
      ])}), [], !1, null, null, null)

    s.default = e.exports}
  }
])