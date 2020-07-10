(window.webpackJsonp = window.webpackJsonp || []).push([
  [20], {
    391: function (t, s, a) {'use strict'; a.r(s); const n = a(0); const e = Object(n.a)({}, (function () {const t = this; const s = t.$createElement; const a = t._self._c || s

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': t.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: '循环、迭代、属性的特性与属性方法'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#循环、迭代、属性的特性与属性方法'
            }
          }, [t._v('#')]), t._v(' 循环、迭代、属性的特性与属性方法')
        ]), t._v(' '), a('h1', {
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
        ]), t._v(' '), a('p', [t._v('这是一篇比较杂的总结，主要涵盖了循环相关、获取对象属性、迭代器生成、以及对象属性的特性（可枚举，访问器属性、'), a('code', [t._v('Object.defineProperty')]), t._v(' 等等）和相关方法。')]), t._v(' '), a('h2', {
          attrs: {
            id: '遍历相关'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#遍历相关'
            }
          }, [t._v('#')]), t._v(' 遍历相关')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'for-循环'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#for-循环'
            }
          }, [t._v('#')]), t._v(' for 循环')
        ]), t._v(' '), a('p', [t._v('就不多说了。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'foreach'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#foreach'
            }
          }, [t._v('#')]), t._v(' forEach')
        ]), t._v(' '), a('p', [t._v('无法通过 '), a('code', [t._v('break')]), t._v('、'), a('code', [t._v('continue')]), t._v(' 中止循环，通过 '), a('code', [t._v('return')]), t._v(' 可中断本次循环。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'for-in'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#for-in'
            }
          }, [t._v('#')]), t._v(' for in')
        ]), t._v(' '), a('p', [t._v('可遍历数组、对象、字符串，对象。')]), t._v(' '), a('div', {
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
              }, [t._v('var')]), t._v(' obj '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  a'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  b'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  c'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' attr '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('in')]), t._v(' obj'), a('span', {
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
              }, [t._v('(')]), t._v('attr'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' obj'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('attr'), a('span', {
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
              }, [t._v('// a 1')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// b 1')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// c 1')]), t._v('\n')
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
              }, [t._v('var')]), t._v(' str '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"boy"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' i '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('in')]), t._v(' str'), a('span', {
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
              }, [t._v('(')]), t._v('str'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('i'), a('span', {
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
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// b')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// o')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// y')]), t._v('\n')
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
        ]), a('p', [t._v('会遍历原型上的属性，可以使用 '), a('code', [t._v('Object.hasOwnProperty()')]), t._v(' 过滤原型属性。')]), t._v(' '), a('div', {
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
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('var')]), t._v(' attr '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('in')]), t._v(' obj'), a('span', {
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
              }, [t._v('if')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('obj'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('hasOwnProperty')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('attr'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
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
              }, [t._v('// 是对象的自有属性，可以尽情的玩耍了')]), t._v('\n  '), a('span', {
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
        ]), a('p', [t._v('遍历 32 位编码的字符出错。')]), t._v(' '), a('div', {
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
              }, [t._v('var')]), t._v(' str '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"a𠮷c"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' index '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('in')]), t._v(' str'), a('span', {
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
              }, [t._v('(')]), t._v('str'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('index'), a('span', {
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
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// a')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 无法用言语描述的字符')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 无法用言语描述的字符')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// c')]), t._v('\n')
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
        ]), a('p', [t._v('ES5 及之前处理字符串时，是以 16 位编码单位为基础的。16 位编码显然无法给世界上所有的字符编码，所以某些字符就需要使用 32 位进行编码了，例如 \' 𠮷 \' 字。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'for-of'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#for-of'
            }
          }, [t._v('#')]), t._v(' for of')
        ]), t._v(' '), a('p', [t._v('遍历依赖于对象迭代器。')]), t._v(' '), a('p', [t._v('可遍历的对象（拥有迭代器函数）：'), a('code', [t._v('Array')]), t._v('、'), a('code', [t._v('Set')]), t._v('、'), a('code', [t._v('Map')]), t._v('、'), a('code', [t._v('String')]), t._v('。遍历 32 位编码的字符不会出错。')]), t._v(' '), a('p', [t._v('自定义对象（自己定义的 obj）无法遍历。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'object-keys'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#object-keys'
            }
          }, [t._v('#')]), t._v(' Object.keys()')
        ]), t._v(' '), a('p', [t._v('Object.keys()获取所有可枚举属性，不会获取对象的原型属性以及自身不可枚举属性。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'object-values'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#object-values'
            }
          }, [t._v('#')]), t._v(' Object.values()')
        ]), t._v(' '), a('p', [t._v('获取对象的属性值数组，不会获取对象的原型属性以及自身不可枚举属性。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'object-entries'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#object-entries'
            }
          }, [t._v('#')]), t._v(' Object.entries()')
        ]), t._v(' '), a('p', [t._v('获取对象的键值对数组')]), t._v(' '), a('div', {
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
              }, [t._v('let')]), t._v(' obj '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  a'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  b'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  c'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), t._v('\n'), a('span', {
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
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('key'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' value'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' Object'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('entries')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('obj'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
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
              }, [t._v('(')]), t._v('key'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' value'), a('span', {
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
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["a", 1]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["b", 1]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["c", 1]')]), t._v('\n')
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
        ]), a('p', [t._v('也可以用在 Array、Set、Map 上：')]), t._v(' '), a('ul', [a('li', [t._v('用在 Array 上返回数组索引和值组成的数组。')]), t._v(' '), a('li', [t._v('用在 Set 上返回 Set 值和 Set 值组成的数组。')])]), t._v(' '), a('div', {
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
              }, [t._v('let')]), t._v(' arr '), a('span', {
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
              }, [t._v('"a"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"b"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"c"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"d"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('set')]), t._v(' '), a('span', {
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
              }, [t._v('Set')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('arr'), a('span', {
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
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' item '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('set')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('entries')]), a('span', {
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
              }, [t._v('(')]), t._v('item'), a('span', {
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
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' item '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' arr'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('entries')]), a('span', {
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
              }, [t._v('(')]), t._v('item'), a('span', {
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
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["a", "a"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["b", "b"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["c", "c"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// ["d", "d"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// [0, "a"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// [1, "b"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// [2, "c"]')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// [3, "d"]')]), t._v('\n')
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
        ]), a('p', [a('code', [t._v('Object.keys()')]), t._v(' 和 '), a('code', [t._v('Object.values()')]), t._v(' 用法相同。')]), t._v(' '), a('h3', {
          attrs: {
            id: 'object-getownpropertynames'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#object-getownpropertynames'
            }
          }, [t._v('#')]), t._v(' Object.getOwnPropertyNames()')
        ]), t._v(' '), a('p', [t._v('获取键名数组，和 '), a('code', [t._v('Object.keys()')]), t._v(' 方法类似，但会返回对象的不可枚举对象。')]), t._v(' '), a('p', [
          a('span', {
            attrs: {
              id: 'getOwnPropertySymbols'
            }
          })
        ]), t._v(' '), a('h3', {
          attrs: {
            id: 'object-getownpropertysymbols'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#object-getownpropertysymbols'
            }
          }, [t._v('#')]), t._v(' Object.getOwnPropertySymbols()')
        ]), t._v(' '), a('p', [t._v('获取 Symbol 属性名。')]), t._v(' '), a('div', {
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
              }, [t._v('let')]), t._v(' father '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  fatherAttr'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), t._v('\n'), a('span', {
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
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' instance '), a('span', {
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
              }, [t._v('create')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('father'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\ninstance'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('a '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\ninstance'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('b '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\ninstance'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('c '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\ninstance'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('Symbol')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"I am a handsome boy!"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' key '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' Object'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('keys')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('instance'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
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
              }, [t._v('(')]), t._v('key'), a('span', {
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
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// a')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// b')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// c')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' key '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' Object'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('getOwnPropertySymbols')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('instance'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
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
              }, [t._v('(')]), t._v('key'), a('span', {
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
                  class: 'token comment'
                }
              }, [t._v('// Symbol(I am a handsome boy!)')]), t._v('\n'), a('span', {
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
        ]), a('h2', {
          attrs: {
            id: '迭代器'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#迭代器'
            }
          }, [t._v('#')]), t._v(' 迭代器')
        ]), t._v(' '), a('h3', {
          attrs: {
            id: '生成器'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#生成器'
            }
          }, [t._v('#')]), t._v(' 生成器')
        ]), t._v(' '), a('p', [t._v('生成器是返回迭代器的特殊函数。')]), t._v(' '), a('div', {
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
              }, [t._v('// 生成器')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v('yield')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"dog"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"cat"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"people"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('return')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"end"')]), a('span', {
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
              }, [t._v('// 迭代器')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' iterator '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v('(')]), t._v('iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
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
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// { value: "dog", done: false }')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
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
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// { value: "cat", done: false }')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
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
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// { value: "people", done: false }')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
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
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// { value: \'end\', done: true }')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
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
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// { value: \'undefined\', done: true }')]), t._v('\n')
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
        ]), a('p', [t._v('生成器函数名前面加一个'), a('code', [t._v('*')]), t._v('号，函数内部使用 '), a('code', [t._v('yield')]), t._v(' 关键字指定每次迭代返回值。')]), t._v(' '), a('p', [t._v('迭代器每调用一次 '), a('code', [t._v('next()')]), t._v(' 函数，依次返回 '), a('code', [t._v('yield')]), t._v(' 关键字后面的变量，'), a('code', [t._v('done')]), t._v(' 表示当前迭代器是否返回完毕。直到遇到 '), a('code', [t._v('return')]), t._v('，后续再调用 '), a('code', [t._v('next')]), t._v(' 函数返回 '), a('code', [t._v('undefined')]), t._v('。')]), t._v(' '), a('p', [a('code', [t._v('yield')]), t._v(' 关键字仅可在生成器函数内部使用，即使在生成器内部的函数中使用也不行。')]), t._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              t._v('    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('function')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v('{')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' arr '), a('span', {
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
              }, [t._v('\'dog\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'cat\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('\'people\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 错误 以下代码实际上是在forEach方法的参数函数里面使用yield')]), t._v('\n        arr'), a('span', {
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
                  class: 'token parameter'
                }
              }, [t._v('item')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=>')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' item'), a('span', {
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
        ]), a('p', [t._v('无法在生成器内部获得 '), a('code', [t._v('yield')]), t._v(' 返回的值。')]), t._v(' '), a('div', {
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
              }, [t._v('function')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v('let')]), t._v(' a '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"dog"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' b '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' a '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('" "')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"cat"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' b '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('" "')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"people"')]), a('span', {
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
              }, [t._v('let')]), t._v(' iterator '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' element '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' iterator'), a('span', {
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
              }, [t._v('// dog')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// undefined cat')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// undefined people')]), t._v('\n')
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
        ]), a('h3', {
          attrs: {
            id: '传递参数'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#传递参数'
            }
          }, [t._v('#')]), t._v(' 传递参数')
        ]), t._v(' '), a('p', [t._v('可以通过迭代器传参，来获取上一次 yield 返回的值')]), t._v(' '), a('div', {
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
              }, [t._v('function')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v('let')]), t._v(' a '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"dog"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' b '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' a '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('" "')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"cat"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('yield')]), t._v(' b '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('" "')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"people"')]), a('span', {
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
              }, [t._v('let')]), t._v(' iterator '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('generator')]), a('span', {
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
              }, [t._v(';')]), t._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' first '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
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
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' second '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('next')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('first'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('value'), a('span', {
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
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' third '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('next')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('second'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('value'), a('span', {
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
              }, [t._v('(')]), t._v('first'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('value'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('second'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('value'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('third'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('value'), a('span', {
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
              }, [t._v('// dog')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// dog cat')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// dog cat people')]), t._v('\n')
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
            }, [t._v('19')]), a('br')
          ])
        ]), a('p', [a('code', [t._v('next()')]), t._v(' 传递的参数，会成为上一次 '), a('code', [t._v('yield')]), t._v(' 关键字返回值并赋值给等号左边的变量。')]), t._v(' '), a('h3', {
          attrs: {
            id: '自定义可迭代对象'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#自定义可迭代对象'
            }
          }, [t._v('#')]), t._v(' 自定义可迭代对象')
        ]), t._v(' '), a('p', [t._v('为对象添加一个 '), a('code', [t._v('*[Symbol.iterator]')]), t._v(' 函数。')]), t._v(' '), a('div', {
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
              }, [t._v('let')]), t._v(' obj '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  a'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  b'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  c'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('*')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('[')]), t._v('Symbol'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('iterator'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(']')]), a('span', {
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
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' key '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' Object'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('keys')]), a('span', {
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
              }, [t._v(')')]), a('span', {
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
              }, [t._v('yield')]), t._v(' key'), a('span', {
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
              }, [t._v(';')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('for')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('let')]), t._v(' key '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('of')]), t._v(' obj'), a('span', {
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
              }, [t._v('(')]), t._v('key'), a('span', {
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
              }, [t._v('}')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// a')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// b')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// c')]), t._v('\n')
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
        ]), a('h3', {
          attrs: {
            id: '用于可迭代对象的语法'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#用于可迭代对象的语法'
            }
          }, [t._v('#')]), t._v(' 用于可迭代对象的语法')
        ]), t._v(' '), a('ol', [a('li', [t._v('for of')]), t._v(' '), a('li', [t._v('...展开运算符')])]), t._v(' '), a('h2', {
          attrs: {
            id: '对象属性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#对象属性'
            }
          }, [t._v('#')]), t._v(' 对象属性')
        ]), t._v(' '), a('p', [t._v('在 JavaScript 中，对象的属性有 2 种类型：数据属性和访问器属性。')]), t._v(' '), a('h3', {
          attrs: {
            id: '数据属性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#数据属性'
            }
          }, [t._v('#')]), t._v(' 数据属性')
        ]), t._v(' '), a('p', [t._v('数据属性有 4 个描述其行为的特性:')]), t._v(' '), a('table', [a('thead', [a('tr', [a('th', [t._v('特性')]), t._v(' '), a('th', [t._v('类型')]), t._v(' '), a('th', [t._v('描述')]), t._v(' '), a('th', [t._v('默认值')])])]), t._v(' '), a('tbody', [a('tr', [a('td', [t._v('[[Value]]')]), t._v(' '), a('td', [t._v('任何 Javascript 类型')]), t._v(' '), a('td', [t._v('包含这个属性的数据值。')]), t._v(' '), a('td', [t._v('undefined')])]), t._v(' '), a('tr', [a('td', [t._v('[[Writable]]')]), t._v(' '), a('td', [t._v('Boolean')]), t._v(' '), a('td', [t._v('表示能否修改属性的值。')]), t._v(' '), a('td', [t._v('true')])]), t._v(' '), a('tr', [a('td', [t._v('[[Enumerable]]')]), t._v(' '), a('td', [t._v('Boolean')]), t._v(' '), a('td', [t._v('表示能否通过 for-in 循环返回属性')]), t._v(' '), a('td', [t._v('true')])]), t._v(' '), a('tr', [a('td', [t._v('[[Configurable]]')]), t._v(' '), a('td', [t._v('Boolean')]), t._v(' '), a('td', [t._v('如果该值为 false，则该属性不能被删除，并且 除了 [[Writable]] 以外的特性都不能被改变。')]), t._v(' '), a('td', [t._v('true')])])])]), t._v(' '), a('h3', {
          attrs: {
            id: '访问器属性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#访问器属性'
            }
          }, [t._v('#')]), t._v(' 访问器属性')
        ]), t._v(' '), a('p', [t._v('访问器属性有 4 个描述其行为的特性:')]), t._v(' '), a('table', [a('thead', [a('tr', [a('th', [t._v('特性')]), t._v(' '), a('th', [t._v('类型')]), t._v(' '), a('th', [t._v('描述')]), t._v(' '), a('th', [t._v('默认值')])])]), t._v(' '), a('tbody', [a('tr', [a('td', [t._v('[[Get]]')]), t._v(' '), a('td', [t._v('函数对象或者 undefined')]), t._v(' '), a('td', [t._v('在读取属性时调用的函数。')]), t._v(' '), a('td', [t._v('undefined')])]), t._v(' '), a('tr', [a('td', [t._v('[[Set]]')]), t._v(' '), a('td', [t._v('函数对象或者 undefined')]), t._v(' '), a('td', [t._v('在写入属性时调用的函数。')]), t._v(' '), a('td', [t._v('undefined')])]), t._v(' '), a('tr', [a('td', [t._v('[[Enumerable]]')]), t._v(' '), a('td', [t._v('Boolean')]), t._v(' '), a('td', [t._v('表示能否通过 for-in 循环返回属性')]), t._v(' '), a('td', [t._v('true')])]), t._v(' '), a('tr', [a('td', [t._v('[[Configurable]]')]), t._v(' '), a('td', [t._v('Boolean')]), t._v(' '), a('td', [t._v('表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。')]), t._v(' '), a('td', [t._v('true')])])])]), t._v(' '), a('h3', {
          attrs: {
            id: '修改属性的特性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#修改属性的特性'
            }
          }, [t._v('#')]), t._v(' 修改属性的特性')
        ]), t._v(' '), a('p', [t._v('要修改属性的特性，需要用到 '), a('code', [t._v('Object.defineProperty()')]), t._v(' 方法。')]), t._v(' '), a('p', [t._v('语法：'), a('code', [t._v('Object.defineProperty(obj, prop, descriptor)')])]), t._v(' '), a('p', [t._v('参数：')]), t._v(' '), a('ul', [a('li', [t._v('obj：要在其上定义属性的对象.')]), t._v(' '), a('li', [t._v('prop：要定义或修改的属性的名称。')]), t._v(' '), a('li', [t._v('obj：将被定义或修改的属性特性。可以是一个或或多个特性。')])]), t._v(' '), a('h4', {
          attrs: {
            id: '定义数据属性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#定义数据属性'
            }
          }, [t._v('#')]), t._v(' 定义数据属性')
        ]), t._v(' '), a('p', [t._v('数据属性可以直接被定义，或者使用 '), a('code', [t._v('Object.defineProperty()')]), t._v(' 定义。')]), t._v(' '), a('div', {
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
              }, [t._v('const')]), t._v(' person '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"li"')]), t._v('\n'), a('span', {
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
            }, [t._v('3')]), a('br')
          ])
        ]), a('p', [t._v('创建一个数据属性'), a('code', [t._v('name')]), t._v('，其 '), a('code', [t._v('value')]), t._v(' 为'), a('code', [t._v('li')]), t._v('。')]), t._v(' '), a('p', [t._v('使用 '), a('code', [t._v('Object.defineProperty()')]), t._v(' 修改'), a('code', [t._v('name')]), t._v('属性。')]), t._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              t._v('Object'), a('span', {
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
              }, [t._v('(')]), t._v('person'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"name"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  configurable'), a('span', {
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
              }, [t._v(',')]), t._v('\n  writable'), a('span', {
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
              }, [t._v(',')]), t._v('\n  enumerable'), a('span', {
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
              }, [t._v(',')]), t._v('\n  value'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"sun"')]), t._v('\n'), a('span', {
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
            }, [t._v('6')]), a('br')
          ])
        ]), a('p', [t._v('现在'), a('code', [t._v('name')]), t._v('属性的值无法改变，值变为'), a('code', [t._v('sun')]), t._v('，无法被 '), a('code', [t._v('for...in')]), t._v(' 遍历，其特性除了[[writable]]之外，无法被改变，该属性也无法被删除。')]), t._v(' '), a('h4', {
          attrs: {
            id: '定义访问器属性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#定义访问器属性'
            }
          }, [t._v('#')]), t._v(' 定义访问器属性')
        ]), t._v(' '), a('p', [t._v('通过 '), a('code', [t._v('Object.defineProperty()')]), t._v(' 方法定义。')]), t._v(' '), a('div', {
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
              }, [t._v('const')]), t._v(' person '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
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
              }, [t._v(';')]), t._v('\nObject'), a('span', {
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
              }, [t._v('(')]), t._v('person'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"age"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  configurable'), a('span', {
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
              }, [t._v(',')]), t._v('\n  enumerable'), a('span', {
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
              }, [t._v(',')]), t._v('\n  '), a('span', {
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
                  class: 'token number'
                }
              }, [t._v('5')]), a('span', {
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
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function-variable function'
                }
              }, [t._v('set')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
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
              }, [t._v('newVal')]), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"修改age的值："')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' newVal'), a('span', {
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
              }, [t._v('(')]), t._v('person'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('age'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nperson'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('age '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [t._v('18')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\nconsole'), a('span', {
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
              }, [t._v('(')]), t._v('person'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), t._v('age'), a('span', {
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
              }, [t._v('// 10')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// 修改age的值：18')]), t._v('\n')
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
        ]), a('p', [t._v('这里定义了一个'), a('code', [t._v('age')]), t._v('访问器属性，每次读取 '), a('code', [t._v('age')]), t._v(' 属性时，会调用 '), a('code', [t._v('get')]), t._v(' 方法，每次改变 '), a('code', [t._v('age')]), t._v(' 属性时，会调用 '), a('code', [t._v('set')]), t._v(' 方法。')]), t._v(' '), a('p', [a('strong', [t._v('直接定义：')])]), t._v(' '), a('div', {
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
              }, [t._v('const')]), t._v(' person '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('get')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('age')]), a('span', {
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
                  class: 'token number'
                }
              }, [t._v('5')]), a('span', {
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
              }, [t._v(',')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('set')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('age')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [t._v('newVal')]), a('span', {
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
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"修改age的值："')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('+')]), t._v(' newVal'), a('span', {
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
        ]), a('h4', {
          attrs: {
            id: '多个属性同时定义'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#多个属性同时定义'
            }
          }, [t._v('#')]), t._v(' 多个属性同时定义')
        ]), t._v(' '), a('p', [t._v('定义多个属性使用 '), a('code', [t._v('Object.defineProperties()')]), t._v(' 方法:')]), t._v(' '), a('div', {
          staticClass: 'language-javascript line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-javascript'
            }
          }, [
            a('code', [
              t._v('Object'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('defineProperties')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('person'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    value'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"Nicholas"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n    writable'), a('span', {
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
              }, [t._v(',')]), t._v('\n    enumerable'), a('span', {
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
              }, [t._v(',')]), t._v('\n    configurable'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [t._v('true')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v('\n  age'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n    configurable'), a('span', {
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
              }, [t._v(',')]), t._v('\n    enumerable'), a('span', {
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
              }, [t._v(',')]), t._v('\n    '), a('span', {
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
              }, [t._v('.')]), t._v('_age'), a('span', {
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
              }, [t._v(',')]), t._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function-variable function'
                }
              }, [t._v('set')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v(':')]), t._v(' '), a('span', {
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
              }, [t._v('newVal')]), a('span', {
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
              }, [t._v('log')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"修改age的值："')]), a('span', {
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
              }, [t._v('.')]), t._v('_age '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' newVal'), a('span', {
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
            }, [t._v('19')]), a('br')
          ])
        ]), a('h4', {
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
        ]), t._v(' '), a('ol', [a('li', [t._v('一旦为对象属性指定'), a('code', [t._v('configurable: false')]), t._v('，后续想再设置'), a('code', [t._v('configurable: true')]), t._v('也是不可行的。')]), t._v(' '), a('li', [t._v('使用 '), a('code', [t._v('Object.defineProperty()')]), t._v(' 定义或修改属性时，未指定'), a('code', [t._v('configurable')]), t._v('、'), a('code', [t._v('enumerable')]), t._v('、'), a('code', [t._v('writable')]), t._v('的值，它们将会默认为'), a('code', [t._v('false')]), t._v('；而直接定义对象的属性时，'), a('code', [t._v('configurable')]), t._v('、'), a('code', [t._v('enumerable')]), t._v('、'), a('code', [t._v('writable')]), t._v('的默认值为'), a('code', [t._v('true')]), t._v('。')]), t._v(' '), a('li', [t._v('直接定义 '), a('code', [t._v('set')]), t._v('、'), a('code', [t._v('get')]), t._v(' 访问器属性时，该属性 '), a('code', [t._v('Enumerable=false，Configurable=true')]), t._v('。')]), t._v(' '), a('li', [t._v('JavaScript 为对象、数组、函数等对象内置的属性和方法都是不可枚举的。')])]), t._v(' '), a('h3', {
          attrs: {
            id: '与属性有关的方法'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#与属性有关的方法'
            }
          }, [t._v('#')]), t._v(' 与属性有关的方法')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: '读取属性特性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#读取属性特性'
            }
          }, [t._v('#')]), t._v(' 读取属性特性')
        ]), t._v(' '), a('p', [t._v('读取自身属性特性可使用：'), a('code', [t._v('Object.getOwnPropertyDescriptor(obj, prop)')])]), t._v(' '), a('div', {
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
              }, [t._v('var')]), t._v(' o'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' d'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(';')]), t._v('\n\no '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [t._v('=')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('{')]), t._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [t._v('get')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [t._v('foo')]), a('span', {
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
                  class: 'token number'
                }
              }, [t._v('17')]), a('span', {
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
              }, [t._v(';')]), t._v('\nd '), a('span', {
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
              }, [t._v('getOwnPropertyDescriptor')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v('(')]), t._v('o'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [t._v(',')]), t._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [t._v('"foo"')]), a('span', {
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
              }, [t._v('// d {')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('//   configurable: true,')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('//   enumerable: true,')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('//   get: /*the getter function*/,')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('//   set: undefined')]), t._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [t._v('// }')]), t._v('\n')
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
        ]), a('p', [t._v('获取所有自身属性的特性可使用：'), a('code', [t._v('Object.getOwnPropertyDescriptors(obj)')]), t._v('。')]), t._v(' '), a('h4', {
          attrs: {
            id: '判断属性的可枚举性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#判断属性的可枚举性'
            }
          }, [t._v('#')]), t._v(' 判断属性的可枚举性')
        ]), t._v(' '), a('p', [a('code', [t._v('obj.propertyIsEnumerable(prop)')]), t._v(' 方法返回一个布尔值，表示指定的属性是否可枚举。对于原型链上的属性都会返回 '), a('code', [t._v('false')]), t._v('，但原型链上的属性是会被 '), a('code', [t._v('for...in')]), t._v(' 枚举的。')]), t._v(' '), a('h4', {
          attrs: {
            id: '自身属性'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#自身属性'
            }
          }, [t._v('#')]), t._v(' 自身属性')
        ]), t._v(' '), a('p', [a('code', [t._v('Object.getOwnPropertyNames(obj)')]), t._v('：返回对象所有的自身属性（包括不可枚举属性）。')]), t._v(' '), a('p', [a('code', [t._v('obj.hasOwnProperty(prop)')]), t._v('：判断对象是否有指定的自身属性。')]), t._v(' '), a('p', [
          a('code', [t._v('Object.getOwnPropertySymbols()')]), t._v(': 获取自身的 '), a('code', [t._v('Symnol')]), t._v(' 属性名。'), a('a', {
            attrs: {
              href: '#getOwnPropertySymbols'
            }
          }, [t._v('见上文')]), t._v('。')
        ]), t._v(' '), a('h4', {
          attrs: {
            id: 'for-in-和-in'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#for-in-和-in'
            }
          }, [t._v('#')]), t._v(' for...in 和 in')
        ]), t._v(' '), a('p', [a('code', [t._v('for...in')]), t._v(': 遍历对象所有可枚举属性，包括原型链上的。')]), t._v(' '), a('p', [a('code', [t._v('in')]), t._v(': prop in obj，判断属性是否属于对象，原型链上的属性和不可枚举属性也返回 '), a('code', [t._v('true')]), t._v('。')]), t._v(' '), a('h2', {
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
                href: 'https://juejin.im/post/5bfbbe2df265da61407e95a3#heading-0',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('JavaScript 骚操作之遍历、枚举与迭代'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://juejin.im/post/5a3a59e7518825698e72376b#heading-15',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('JavaScript 数组遍历方法的对比'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://developer.cdn.mozilla.net/zh-CN/docs/Web/JavaScript/Reference/Statements/function*',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN Generator'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://developer.cdn.mozilla.net/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN 迭代协议'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://developer.cdn.mozilla.net/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN Object.defineProperty()'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/set',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN setter 语法'), a('OutboundLink')], 1)
          ]), t._v(' '), a('li', [
            a('a', {
              attrs: {
                href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }, [t._v('MDN getter 语法'), a('OutboundLink')], 1)
          ])
        ])
      ])}), [], !1, null, null, null)

    s.default = e.exports}
  }
])