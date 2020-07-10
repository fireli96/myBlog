(window.webpackJsonp = window.webpackJsonp || []).push([
  [14], {
    385: function (t, s, a) {'use strict'; a.r(s); const n = a(0); const e = Object(n.a)({}, (function () {const t = this; const s = t.$createElement; const a = t._self._c || s

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': t.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: 'vue-组件通信总结'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vue-组件通信总结'
            }
          }, [t._v('#')]), t._v(' vue 组件通信总结')
        ]), t._v(' '), a('h2', {
          attrs: {
            id: '路由传参'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#路由传参'
            }
          }, [t._v('#')]), t._v(' 路由传参')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '通过-params'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#通过-params'
            }
          }, [t._v('#')]), t._v(' 通过 params')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: '_1-动态路由'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#_1-动态路由'
            }
          }, [t._v('#')]), t._v(' 1. 动态路由')
        ]), t._v(' '), a('p', [t._v('定义一个动态路由，传递参数 '), a('code', [t._v('id')])]), t._v(' '), a('div', {
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
              }, [t._v('"/componentB/:id"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"componentB"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      component'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' componentB\n    '), a('span', {
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
            }, [t._v('9')]), a('br')
          ])
        ]), t._v('`\n'), a('p', [t._v('通过 '), a('code', [t._v('router-link')]), t._v(' 标签传递参数')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('router-link')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':to')]), a('span', {
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
                  }, [t._v('"')]), t._v('{path:`/componentB/${user.id}`}'), a('span', {
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
                  }, [t._v('</')]), t._v('router-link')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('>')])
              ]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('\x3c!-- 通过命名路由 --\x3e')]), t._v('\n'), a('span', {
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
                  }, [t._v('<')]), t._v('router-link')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':to')]), a('span', {
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
                  }, [t._v('"')]), t._v('{name: \'componentB\', params: { id: user.id }}'), a('span', {
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
                  }, [t._v('</')]), t._v('router-link')
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
        ]), a('p', [t._v('使用 '), a('code', [t._v('router.push')]), t._v(' 方法传递参数')]), t._v(' '), a('div', {
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
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('$router'), a('span', {
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
              }, [t._v('{')]), t._v(' path'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
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
                }, [t._v('/componentB/')]), a('span', {
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
                  }, [t._v('${')]), t._v('user'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('.')]), t._v('id'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token interpolation-punctuation punctuation'
                    }
                  }, [t._v('}')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token template-punctuation string'
                  }
                }, [t._v('`')])
              ]), t._v(' '), a('span', {
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
                  class: 'token comment'
                }
              }, [t._v('// 通过命名路由')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('$router'), a('span', {
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
              }, [t._v('{')]), t._v(' name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"componentB"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' params'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v(' id'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' user'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('id '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
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
            }, [t._v('3')]), a('br')
          ])
        ]), a('blockquote', [
          a('p', [t._v('注意：在使用了 '), a('code', [t._v('path')]), t._v(' 后，'), a('code', [t._v('params')]), t._v(' 会无效')]), t._v(' '), a('div', {
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
                }, [t._v('// params无效')]), t._v('\n'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('this')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('.')]), t._v('$router'), a('span', {
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
                }, [t._v('{')]), t._v(' path'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token operator'
                  }
                }, [t._v(':')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token string'
                  }
                }, [t._v('"/componentB"')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v(' params'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token operator'
                  }
                }, [t._v(':')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('{')]), t._v(' id'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token operator'
                  }
                }, [t._v(':')]), t._v(' user'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('.')]), t._v('id '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('}')]), t._v(' '), a('span', {
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
              }, [t._v('2')]), a('br')
            ])
          ])
        ]), t._v(' '), a('p', [t._v('使用 '), a('code', [t._v('this.$route.params.id')]), t._v(' 接收参数')]), t._v(' '), a('h4', {
          attrs: {
            id: '_2-普通路由'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#_2-普通路由'
            }
          }, [t._v('#')]), t._v(' 2. 普通路由')
        ]), t._v(' '), a('p', [t._v('在普通路由中也可以通过 '), a('code', [t._v('params')]), t._v(' 传参')]), t._v(' '), a('div', {
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
              }, [t._v('"/componentB"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"componentB"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n      component'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' componentB\n    '), a('span', {
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
            }, [t._v('9')]), a('br')
          ])
        ]), a('p', [t._v('传递参数')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('router-link')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':to')]), a('span', {
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
                  }, [t._v('"')]), t._v('{name: \'componentB\', params: { id: user.id }}'), a('span', {
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
                  }, [t._v('</')]), t._v('router-link')
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
            }, [t._v('1')]), a('br')
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
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('$router'), a('span', {
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
              }, [t._v('{')]), t._v(' name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"componentB"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' params'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v(' id'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' user'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('id '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
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
            }, [t._v('1')]), a('br')
          ])
        ]), a('p', [t._v('接收参数：'), a('code', [t._v('this.$route.params.id')])]), t._v(' '), a('h3', {
          attrs: {
            id: '通过-query'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#通过-query'
            }
          }, [t._v('#')]), t._v(' 通过 query')
        ]), t._v(' '), a('p', [t._v('传递参数')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('router-link')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':to')]), a('span', {
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
                  }, [t._v('"')]), t._v('{name: \'componentB\', query: { id: user.id }}'), a('span', {
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
                  }, [t._v('</')]), t._v('router-link')
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
            }, [t._v('1')]), a('br')
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
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('$router'), a('span', {
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
              }, [t._v('{')]), t._v(' name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"componentB"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' query'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v(' id'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' user'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('id '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v(' '), a('span', {
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
            }, [t._v('1')]), a('br')
          ])
        ]), a('p', [t._v('接收参数：'), a('code', [t._v('this.route.query.id')])]), t._v(' '), a('h3', {
          attrs: {
            id: '小结'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#小结'
            }
          }, [t._v('#')]), t._v(' 小结')
        ]), t._v(' '), a('ol', [a('li', [a('p', [t._v('在动态路由传参过程中，参数会附在 '), a('code', [t._v('url')]), t._v(' 后面')])]), t._v(' '), a('li', [a('p', [t._v('非动态路由使用 '), a('code', [t._v('params')]), t._v(' 传递参数，参数不会附在 '), a('code', [t._v('url')]), t._v(' 后面')])]), t._v(' '), a('li', [a('p', [a('code', [t._v('query')]), t._v(' 传递参数，参数会以 '), a('code', [t._v('?id=number&name=li')]), t._v(' 这种形式附在 '), a('code', [t._v('url')]), t._v(' 后面')])])]), t._v(' '), a('h2', {
          attrs: {
            id: '组件通信'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#组件通信'
            }
          }, [t._v('#')]), t._v(' 组件通信')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '子组件访问父组件'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#子组件访问父组件'
            }
          }, [t._v('#')]), t._v(' 子组件访问父组件')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: 'props'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#props'
            }
          }, [t._v('#')]), t._v(' props')
        ]), t._v(' '), a('p', [t._v('父组件：')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('Child')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v(':id')]), a('span', {
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
                  }, [t._v('"')]), t._v('user.id'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('/>')])
              ]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br')
          ])
        ]), a('p', [t._v('子组件：')]), t._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              t._v('props'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n   id'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' Number'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n')
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
        ]), a('p', [a('code', [t._v('props')]), t._v(' 也可以传递函数')]), t._v(' '), a('h4', {
          attrs: {
            id: 'parent'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#parent'
            }
          }, [t._v('#')]), t._v(' $parent')
        ]), t._v(' '), a('p', [t._v('父组件：')]), t._v(' '), a('div', {
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
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('data')]), a('span', {
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
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n      user'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n        id'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('2')]), t._v('\n      '), a('span', {
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
              }, [t._v(',')]), t._v('\n  methods'), a('span', {
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
              }, [t._v('getUserId')]), a('span', {
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
              }, [t._v('{')]), t._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' user'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('id'), a('span', {
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
            }, [t._v('14')]), a('br')
          ])
        ]), a('p', [t._v('子组件可以通过 '), a('code', [t._v('this.$parent.user')]), t._v(' 和 '), a('code', [t._v('this.$parent.getUserId')]), t._v(' 获得父组件的数据和方法')]), t._v(' '), a('h4', {
          attrs: {
            id: 'provide-inject'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#provide-inject'
            }
          }, [t._v('#')]), t._v(' provide / inject')
        ]), t._v(' '), a('p', [a('code', [t._v('provide')]), t._v(' 和 '), a('code', [t._v('inject')]), t._v(' 允许一个祖先组件向其所有后代组件注入依赖，也就是说不论后代组件嵌套有多深，在祖先组件中提供 '), a('code', [t._v('provide')]), t._v(' 属性，后代组件能够通过 '), a('code', [t._v('inject')]), t._v(' 获取到这个属性。')]), t._v(' '), a('p', [a('code', [t._v('provide')]), t._v(' 和 '), a('code', [t._v('inject')]), t._v(' 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。')]), t._v(' '), a('p', [t._v('父组件：')]), t._v(' '), a('div', {
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
                  class: 'token function'
                }
              }, [t._v('provide')]), a('span', {
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
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    userId'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('user'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('id\n  '), a('span', {
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
              }, [t._v(',')]), t._v('\n')
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
        ]), a('p', [t._v('子组件：')]), t._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              t._v('inject'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'userId\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('mounted')]), a('span', {
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
              }, [t._v('{')]), t._v('\n  console'), a('span', {
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
              }, [t._v('.')]), t._v('userId'), a('span', {
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
            }, [t._v('5')]), a('br')
          ])
        ]), a('p', [t._v('更多用法: https://cn.vuejs.org/v2/api/#provide-inject')]), t._v(' '), a('p', [a('code', [t._v('provide')]), t._v(' 和 '), a('code', [t._v('inject')]), t._v('并不是响应式的，但如果传递的是一个对象，那么就是响应式的。')]), t._v(' '), a('p', [t._v('这时的响应式只限于对象的属性改变，例如'), a('code', [t._v('provide')]), t._v('传递对象'), a('code', [t._v('obj')]), t._v('，'), a('code', [t._v('obj.a')]), t._v('改变时，子组件能观察到'), a('code', [t._v('obj.a')]), t._v('的变化，但'), a('code', [t._v('obj= Object.assign({}, obj, newObj)')]), t._v('这不能。')]), t._v(' '), a('p', [t._v('但是，如果将一个 computed 的值传递，例如：')]), t._v(' '), a('div', {
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
                  class: 'token function'
                }
              }, [t._v('provide')]), t._v(' '), a('span', {
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
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('curOptions '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('//curOptions 为 computed 属性')]), t._v('\n  '), a('span', {
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
            }, [t._v('5')]), a('br')
          ])
        ]), a('p', [t._v('如果'), a('code', [t._v('curOptions')]), t._v('只是被'), a('code', [t._v('provide')]), t._v('传递，那'), a('code', [t._v('curOptions')]), t._v('只会执行一次，不会在其依赖的属性改变时执行。')]), t._v(' '), a('p', [t._v('所以'), a('code', [t._v('provide')]), t._v('不要去传递一个 computed 属性。')]), t._v(' '), a('blockquote', [a('p', [t._v('综上：')]), t._v(' '), a('ol', [a('li', [a('code', [t._v('provide')]), t._v('传递可响应式对象时，只能去改变对象的属性。')]), t._v(' '), a('li', [t._v('不能传递 computed 属性来作为响应式对象。（也就是不能去改变传递对象的引用）')])])]), t._v(' '), a('h3', {
          attrs: {
            id: '父组件访问子组件'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#父组件访问子组件'
            }
          }, [t._v('#')]), t._v(' 父组件访问子组件')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: 'ref'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#ref'
            }
          }, [t._v('#')]), t._v(' ref')
        ]), t._v(' '), a('p', [t._v('父组件：')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('Child')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('ref')]), a('span', {
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
                  }, [t._v('"')]), t._v('child'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('/>')])
              ]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br')
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
                  class: 'token function'
                }
              }, [t._v('mounted')]), a('span', {
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
              }, [t._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('$refs'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('child'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('fun')]), a('span', {
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
              }, [t._v(';')]), t._v('\n  console'), a('span', {
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
              }, [t._v('.')]), t._v('$refs'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('child'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('data'), a('span', {
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
            }, [t._v('4')]), a('br')
          ])
        ]), a('h4', {
          attrs: {
            id: 'emit-v-on'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#emit-v-on'
            }
          }, [t._v('#')]), t._v(' $emit + v-on')
        ]), t._v(' '), a('p', [t._v('子组件：')]), t._v(' '), a('div', {
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
                  }, [t._v('<')]), t._v('button')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('@click')]), a('span', {
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
                  }, [t._v('"')]), t._v('$emit(\'transfer-data\',5)'), a('span', {
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
                  }, [t._v('</')]), t._v('button')
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
            }, [t._v('1')]), a('br')
          ])
        ]), a('p', [t._v('父组件：')]), t._v(' '), a('div', {
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
              }, [t._v('\x3c!-- $event表示传递过来的参数 --\x3e')]), t._v('\n'), a('span', {
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
                  }, [t._v('<')]), t._v('Child')
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token attr-name'
                  }
                }, [t._v('@transfer-data')]), a('span', {
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
                  }, [t._v('"')]), t._v('num+=$event'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [t._v('"')])
                ]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('/>')])
              ]), t._v('\n')
            ])
          ]), t._v(' '), a('div', {
            staticClass: 'line-numbers-wrapper'
          }, [
            a('span', {
              staticClass: 'line-number'
            }, [t._v('1')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [t._v('2')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '任意组件通信'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#任意组件通信'
            }
          }, [t._v('#')]), t._v(' 任意组件通信')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: '使用-bus-配合-emit-on'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#使用-bus-配合-emit-on'
            }
          }, [t._v('#')]), t._v(' 使用 bus 配合$emit+$on')
        ]), t._v(' '), a('p', [t._v('根实例定义一个 Vue 的实例 Bus')]), t._v(' '), a('div', {
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
              }, [t._v('{')]), t._v('\n    bus'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
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
              }, [t._v(')')]), t._v('\n  '), a('span', {
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
              }, [t._v('"#app"')]), a('span', {
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
        ]), a('p', [t._v('组件 A 使用$emit 分发事件')]), t._v(' '), a('div', {
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
              }, [t._v('.')]), t._v('Bus'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('$emit')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"transfer-data"')]), a('span', {
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
            }, [t._v('1')]), a('br')
          ])
        ]), a('p', [t._v('组件 B 使用$on 监听事件')]), t._v(' '), a('div', {
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
              }, [t._v('.')]), t._v('Bus'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('$on')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"transfer-data"')]), a('span', {
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
            }, [t._v('1')]), a('br')
          ])
        ]), a('p', [t._v('监听事件 $on 一定要先于分发事件 $emit 注册才有效')]), t._v(' '), a('h4', {
          attrs: {
            id: 'vuex'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#vuex'
            }
          }, [t._v('#')]), t._v(' vuex')
        ]), t._v(' '), a('p', [t._v('Vuex 是 vue 的全局状态管理模式，并且它的状态存储是响应式的。')]), t._v(' '), a('p', [
          t._v('vuex 的使用见官方文档: '), a('a', {
            attrs: {
              href: 'https://vuex.vuejs.org/zh/installation.html',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }, [t._v('vuex'), a('OutboundLink')], 1)
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '小结-2'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#小结-2'
            }
          }, [t._v('#')]), t._v(' 小结')
        ]), t._v(' '), a('ol', [a('li', [a('p', [t._v('响应式:props、$parent、vuex')])]), t._v(' '), a('li', [a('p', [t._v('非响应式:ref、$emit+v-on、$emit+$on、provide / inject')])]), t._v(' '), a('li', [a('p', [t._v('对于 ref,可以使用计算属性来达到响应式')])])]), t._v(' '), a('blockquote', [
          a('ol', [
            a('li', [
              t._v('在 computed 中无法直接访问 $refs,因为 computed 在 mounted 之前执行，所有无法访问 dom , '), a('a', {
                attrs: {
                  href: 'https://www.cnblogs.com/vickylinj/p/9584202.html',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }
              }, [t._v('vue 中各选项及钩子函数执行顺序'), a('OutboundLink')], 1)
            ]), t._v(' '), a('li', [t._v('可以通过定义一个变量 ismounted ()false ,在 mounted 中将这其设置为 true 来判断是否已经处于 mounted 生命周期')])
          ]), t._v(' '), a('div', {
            staticClass: 'language-javascript line-numbers-mode'
          }, [
            a('pre', {
              pre: !0,
              attrs: {
                class: 'language-javascript'
              }
            }, [
              a('code', [
                t._v(' computed'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token operator'
                  }
                }, [t._v(':')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('{')]), t._v('\n   '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token function'
                  }
                }, [t._v('cNum')]), a('span', {
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
                }, [t._v('{')]), t._v('\n     '), a('span', {
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
                }, [t._v('.')]), t._v('isMounted'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(')')]), t._v('\n        '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('return')]), t._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token keyword'
                  }
                }, [t._v('this')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('.')]), t._v('$refs'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('.')]), t._v('child'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('.')]), t._v('cNum'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(';')]), t._v('\n   '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('}')]), t._v('\n '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v('}')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [t._v(',')]), t._v('\n')
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
          ])
        ]), t._v(' '), a('ol', {
          attrs: {
            start: '4'
          }
        }, [a('li', [t._v('对于$emit+v-on、$emit+$on,需要在值改变时重新派发事件')])]), t._v(' '), a('h2', {
          attrs: {
            id: 'localstorage-和-sessionstorage'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#localstorage-和-sessionstorage'
            }
          }, [t._v('#')]), t._v(' localStorage 和 SessionStorage')
        ]), t._v(' '), a('h2', {
          attrs: {
            id: '总结'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#总结'
            }
          }, [t._v('#')]), t._v(' 总结')
        ]), t._v(' '), a('p', [t._v('在以上几种通信方式中,还有一个需要注意的地方,那就是页面刷新,参数是否会消失以及重置问题.')]), t._v(' '), a('p', [t._v('重置是指:如果因为某个事件改变了传递的参数,那页面刷新后这个参数的值是否还是改变后的值.')]), t._v(' '), a('ol', [a('li', [a('p', [t._v('路由参数传递,如果是附在 url 后面的参数,页面刷新参数不会消失,其他则会消失')])]), t._v(' '), a('li', [a('p', [t._v('对于所有的组件通信,当页面刷新时,就代表着当前页面的所有组件销毁与重建,那么自然参数会全部重置.')])]), t._v(' '), a('li', [a('p', [t._v('对于本地缓存 localStorage 和 SessionStorage,页面刷新改变的值依然存在')])]), t._v(' '), a('li', [a('p', [t._v('当我们想要实现例如:点击某个按钮,获取数据,在页面刷新后依然是点击按钮后获取的数据.那么应该在点击后改变页面的 url(即:路由改变),然后根据路由来获取数据.')])])])
      ])}), [], !1, null, null, null)

    s.default = e.exports}
  }
])