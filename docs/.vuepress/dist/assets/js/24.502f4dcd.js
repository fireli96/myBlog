(window.webpackJsonp = window.webpackJsonp || []).push([
  [24], {
    398: function (s, t, a) {'use strict'; a.r(t); const n = a(0); const e = Object(n.a)({}, (function () {const s = this; const t = s.$createElement; const a = s._self._c || t

      return a('ContentSlotsDistributor', {
        attrs: {
          'slot-key': s.$parent.slotKey
        }
      }, [
        a('h1', {
          attrs: {
            id: '滑动选择器'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#滑动选择器'
            }
          }, [s._v('#')]), s._v(' 滑动选择器')
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
        ]), s._v(' '), a('p', [s._v('要实现如以下的选择器，可以上下滑动，获取选择的值。')]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1584845677570.png',
              alt: ''
            }
          })
        ]), s._v(' '), a('h2', {
          attrs: {
            id: '如何滑动'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#如何滑动'
            }
          }, [s._v('#')]), s._v(' 如何滑动')
        ]), s._v(' '), a('p', [s._v('最简单的方式就是将'), a('code', [s._v('列表')]), s._v('设置为超出隐藏，然后改变列表的'), a('code', [s._v('translateY')]), s._v('的值。')]), s._v(' '), a('h2', {
          attrs: {
            id: '添加选择框'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#添加选择框'
            }
          }, [s._v('#')]), s._v(' 添加选择框')
        ]), s._v(' '), a('p', [a('code', [s._v('选择框')]), s._v(' 是和'), a('code', [s._v('列表元素')]), s._v('同样大小，并且和列表同级，以'), a('code', [s._v('绝对定位')]), s._v('固定位置。如果是处于列表里面，因为列表是通过改变'), a('code', [s._v('translateY')]), s._v('滑动的，而'), a('code', [s._v('translateY')]), s._v('会影响'), a('code', [s._v('绝对定位')]), s._v('，那选择框的位置不可控。')]), s._v(' '), a('div', {
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
                  }, [s._v('"')]), s._v('slide-list-contianer'), a('span', {
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
              ]), s._v('\n  '), a('span', {
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
                  }, [s._v('<')]), s._v('ul')
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
                  }, [s._v('"')]), s._v('slide-list'), a('span', {
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
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('1'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('2'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('3'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('4'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n  '), a('span', {
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
                  }, [s._v('</')]), s._v('ul')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('\x3c!-- 选择框和列表同级 --\x3e')]), s._v('\n  '), a('span', {
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
                  }, [s._v('"')]), s._v('slide-select-box'), a('span', {
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
              ]), s._v('\n'), a('span', {
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
            }, [s._v('10')]), a('br')
          ])
        ]), a('p', [s._v('设置'), a('code', [s._v('slide-list-contianer')]), s._v('固定高度，和超出隐藏。')]), s._v(' '), a('div', {
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
              }, [s._v('.slide-list-contianer')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('width')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 160px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('height')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 160px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('overflow')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' hidden'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token selector'
                }
              }, [s._v('.slide-list li')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('height')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 32px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
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
            }, [s._v('9')]), a('br')
          ])
        ]), a('p', [s._v('选择框和列表同级。')]), s._v(' '), a('div', {
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
              }, [s._v('.slide-list-contianer')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('width')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 160px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('height')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 32px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('position')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' absolute'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('left')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 0px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('top')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 64px'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token property'
                }
              }, [s._v('border-top')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 1px solid '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('rgb')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('3'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' 136'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' 189'), a('span', {
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
                  class: 'token property'
                }
              }, [s._v('border-bottom')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 1px solid '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('rgb')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('3'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' 136'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' 189'), a('span', {
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
                  class: 'token property'
                }
              }, [s._v('background')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('rgb')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('169'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' 221'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' 241'), a('span', {
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
                  class: 'token property'
                }
              }, [s._v('opacity')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(':')]), s._v(' 0.4'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n'), a('span', {
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
            }, [s._v('11')]), a('br')
          ])
        ]), a('h2', {
          attrs: {
            id: '添加事件'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#添加事件'
            }
          }, [s._v('#')]), s._v(' 添加事件')
        ]), s._v(' '), a('p', [s._v('需要保证在选择框上滑动时，列表也会改变。所以只能在 '), a('code', [s._v('slide-list-contianer')]), s._v('上监听滑动事件。')]), s._v(' '), a('div', {
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
              }, [s._v('let')]), s._v(' el '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('".slide-list-contianer"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\nel'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"touchstart"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' start'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\nel'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"touchmove"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' move'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\nel'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('addEventListener')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"touchend"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' end'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
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
            }, [s._v('4')]), a('br')
          ])
        ]), a('h2', {
          attrs: {
            id: '修正位置'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#修正位置'
            }
          }, [s._v('#')]), s._v(' 修正位置')
        ]), s._v(' '), a('p', [s._v('在滑动事件结束时（例如：'), a('code', [s._v('touchend')]), s._v('），可能 '), a('code', [s._v('选择框')]), s._v(' 并不完全处于对应元素上：')]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1584845677572.png',
              alt: ''
            }
          })
        ]), s._v(' '), a('p', [s._v('需要在结束后，自动移动到最近的元素上。离选择框最近的元素也就是离顶线最近的元素。')]), s._v(' '), a('p', [s._v('因为列表元素的高度是统一的，那么每个列表元素的位置也是固定的，假设元素的索引为'), a('code', [s._v('index')]), s._v('，单个元素的高度为'), a('code', [s._v('height')]), s._v('，列表的偏移距离为'), a('code', [s._v('translateY')]), s._v('，那么可以得到：')]), s._v(' '), a('div', {
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
              }, [s._v('// 离顶线最近元素')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('let')]), s._v(' correctIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v('Math'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('round')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('translateY '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('/')]), s._v(' height'), a('span', {
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
                  class: 'token comment'
                }
              }, [s._v('// 元素位置')]), s._v('\n'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('let')]), s._v(' correctTranslateY '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v('correctIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('*')]), s._v(' height'), a('span', {
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
            }, [s._v('4')]), a('br')
          ])
        ]), a('p', [s._v('然后改变'), a('code', [s._v('translateY')]), s._v('的值为'), a('code', [s._v('correctTranslateY')]), s._v('。')]), s._v(' '), a('p', [s._v('注意，需要判断边界值，即边界情况为'), a('code', [s._v('最上面/最下面')]), s._v('元素处于选择框。')]), s._v(' '), a('h2', {
          attrs: {
            id: '类的方式实现'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#类的方式实现'
            }
          }, [s._v('#')]), s._v(' 类的方式实现')
        ]), s._v(' '), a('h3', {
          attrs: {
            id: 'dom-结构'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#dom-结构'
            }
          }, [s._v('#')]), s._v(' dom 结构')
        ]), s._v(' '), a('div', {
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
                  }, [s._v('"')]), s._v('slide-list-contianer'), a('span', {
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
              ]), s._v('\n  '), a('span', {
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
                  }, [s._v('<')]), s._v('ul')
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
                  }, [s._v('"')]), s._v('slide-list'), a('span', {
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
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('1'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('2'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('3'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('4'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n  '), a('span', {
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
                  }, [s._v('</')]), s._v('ul')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('\x3c!-- 如果没有，就是默认选择框 --\x3e')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('\x3c!-- <div class="slide-select-box"></div> --\x3e')]), s._v('\n'), a('span', {
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
            }, [s._v('10')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '事件控制'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#事件控制'
            }
          }, [s._v('#')]), s._v(' 事件控制')
        ]), s._v(' '), a('p', [s._v('自定义事件控制器。')]), s._v(' '), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              s._v('  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// on 监听的事件')]), s._v('\n  onEvents '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(';')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// once:表示注册的事件只执行一次便自动移除')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('on')]), s._v(' '), a('span', {
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
                s._v('name'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v(',')]), s._v(' callback'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v(',')]), s._v(' once '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token operator'
                  }
                }, [s._v('=')]), s._v(' '), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token boolean'
                  }
                }, [s._v('false')])
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('||')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
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
              }, [s._v(':')]), s._v(' name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' callback'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      once'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' once\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 移除事件')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('off')]), s._v(' '), a('span', {
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
                s._v('name'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v(',')]), s._v(' callback')
              ]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('filter')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('event')]), s._v(' '), a('span', {
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
              }, [s._v('return')]), s._v(' event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('callback '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('!==')]), s._v(' callback\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('emit')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('name')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
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
                  class: 'token operator'
                }
              }, [s._v('!')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' params '), a('span', {
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
                  class: 'token operator'
                }
              }, [s._v('...')]), s._v('arguments'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('slice')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('1')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('onEvents'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), s._v('name'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('filter')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('event')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=>')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('callback')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('...')]), s._v('params'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 事件执行完毕后，判断是否为一次性事件')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('!')]), s._v('event'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('once\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n  '), a('span', {
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
            }, [s._v('19')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('20')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('21')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('22')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('23')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('24')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('25')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('26')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('27')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('28')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('29')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('30')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('31')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '配置选项'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#配置选项'
            }
          }, [s._v('#')]), s._v(' 配置选项')
        ]), s._v(' '), a('p', [s._v('根据配置选项，将列表初始化为一个选择器。选项如下：')]), s._v(' '), a('div', {
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
              }, [s._v('const')]), s._v(' defaultOptions '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 可见行数')]), s._v('\n  visiableRowCount'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('5')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 初始位置索引')]), s._v('\n  startIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 保持索引位置不变')]), s._v('\n  keepIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [s._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 选择框')]), s._v('\n  selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 选择框所在位置')]), s._v('\n    position'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('2')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n    style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n'), a('span', {
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
            }, [s._v('14')]), a('br')
          ])
        ]), a('p', [s._v('详细阐述如图：')]), s._v(' '), a('p', [
          a('img', {
            attrs: {
              src: 'https://fireli-1256465711.cos.ap-chengdu.myqcloud.com/img/1584845677573.png',
              alt: 'enter description here'
            }
          })
        ]), s._v(' '), a('ul', [a('li', [a('code', [s._v('visiableRowCount')]), s._v('：可见行数，超出的通过滑动出现。这里为 5。')]), s._v(' '), a('li', [a('code', [s._v('startIndex')]), s._v('：开始索引，最开始选择的元素索引。这里选择的是 2 号元素，'), a('code', [s._v('startIndex')]), s._v('为 2。')]), s._v(' '), a('li', [a('code', [s._v('keepIndex')]), s._v('：如果多次初始化选择器（执行'), a('code', [s._v('init')]), s._v('函数），保证所选元素索引不变。')]), s._v(' '), a('li', [a('code', [s._v('selectBox')]), s._v(': 选择框的配置\n'), a('ul', [a('li', [a('code', [s._v('position')]), s._v('：选择框的位置，这里在第 2 号位置。')]), s._v(' '), a('li', [a('code', [s._v('style')]), s._v('：默认选择框的样式。')])])])]), s._v(' '), a('h3', {
          attrs: {
            id: '获取列表元素信息'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#获取列表元素信息'
            }
          }, [s._v('#')]), s._v(' 获取列表元素信息')
        ]), s._v(' '), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              s._v('  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('setNodes')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' list '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'.slide-list\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 每个元素大小相同')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodeInfo '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// offsetWidth在元素隐藏时无效')]), s._v('\n      width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' list'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('children'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('offsetWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('||')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('30')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' list'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('children'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('offsetHeight '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('||')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('30')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      total'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' list'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('children'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('length\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('list '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' list\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes '), a('span', {
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
                  class: 'token operator'
                }
              }, [s._v('...')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('list'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('children'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n  '), a('span', {
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
            }, [s._v('12')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('13')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '选择框'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#选择框'
            }
          }, [s._v('#')]), s._v(' 选择框')
        ]), s._v(' '), a('p', [s._v('可以自定义选择框，通过添加一个类为'), a('code', [s._v('slide-select-box')]), s._v('的元素。')]), s._v(' '), a('div', {
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
                  }, [s._v('"')]), s._v('slide-list-contianer'), a('span', {
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
              ]), s._v('\n  '), a('span', {
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
                  }, [s._v('<')]), s._v('ul')
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
                  }, [s._v('"')]), s._v('slide-list'), a('span', {
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
              ]), s._v('\n    '), a('span', {
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
                  }, [s._v('<')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('1'), a('span', {
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
                  }, [s._v('</')]), s._v('li')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n  '), a('span', {
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
                  }, [s._v('</')]), s._v('ul')
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v('>')])
              ]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('\x3c!-- 如果没有，就是默认选择框 --\x3e')]), s._v('\n  '), a('span', {
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
                  }, [s._v('"')]), s._v('slide-select-box'), a('span', {
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
              ]), s._v('\n'), a('span', {
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
            }, [s._v('7')]), a('br')
          ])
        ]), a('p', [s._v('如果没有则会启用默认选择框，可以在配置选项中更改默认选择框样式。')]), s._v(' '), a('div', {
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
              }, [s._v('addSelectBox')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 添加前，如果存在先remove掉')]), s._v('\n    '), a('span', {
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
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('removeChild')]), a('span', {
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
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' height '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodeInfo'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('height\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' customSelectBox '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'.slide-select-box\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 相对于父元素定位')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'relative\'')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('if')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('customSelectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      customSelectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('display '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'\'')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 不改变原dom')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' copy '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' customSelectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('cloneNode')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [s._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('appendChild')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('copy'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 隐藏原dom')]), s._v('\n      customSelectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('display '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'none\'')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' computedStyle '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' window'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getComputedStyle')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('copy'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('style')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('\n        copy'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n          left'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n          top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('*')]), s._v(' height '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'px\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n          position'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'absolute\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n          width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' computedStyle'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n          height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' computedStyle'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('height\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' copy\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 默认选择框')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' selectBox '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('createElement')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'div\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('style')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      width'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('offsetWidth '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'px\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' height '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'px\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      position'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'absolute\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      left'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      top'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('*')]), s._v(' height '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'px\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      borderTop'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'1px solid rgb(3, 136, 189)\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      borderBottom'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'1px solid rgb(3, 136, 189)\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      background'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'rgb(169, 221, 241)\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      opacity'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0.4')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('...')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('style\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('appendChild')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' selectBox\n'), a('span', {
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
            }, [s._v('19')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('20')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('21')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('22')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('23')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('24')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('25')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('26')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('27')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('28')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('29')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('30')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('31')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('32')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('33')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('34')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('35')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('36')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('37')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('38')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('39')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('40')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('41')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('42')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('43')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('44')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('45')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('46')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('47')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('48')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('49')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('50')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('51')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('52')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '获取元素位置和索引'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#获取元素位置和索引'
            }
          }, [s._v('#')]), s._v(' 获取元素位置和索引')
        ]), s._v(' '), a('p', [s._v('在修正位置或是获取当前选择的的元素等情况下，需要用到以下方法。')]), s._v(' '), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 获取正确的元素位置')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getCorrectPos')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' correctIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getTopIndex')]), a('span', {
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
              }, [s._v('.')]), s._v('translateY'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' correctTranslateY '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v('correctIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('*')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodeInfo'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('height\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v(' correctTranslateY\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 根据translateY获得最近顶部元素索引')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getTopIndex')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('y')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('let')]), s._v(' topIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v('Math'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('round')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('y '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('/')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodeInfo'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('height'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 顶端元素在选择框内时，无法再下滑动')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' minTopIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' maxTopIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodeInfo'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('total '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('1')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position\n\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('if')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('topIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('<')]), s._v(' minTopIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      topIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' minTopIndex\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('else')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('if')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('topIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('>')]), s._v(' maxTopIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      topIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' maxTopIndex\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v(' topIndex\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 根据translateY获取所选元素索引')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getSelectedIndex')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('y')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getTopIndex')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('y'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 获取所选元素位置')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getSelectedPos')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('index')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('return')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('-')]), s._v('index '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('options'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('position'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('*')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodeInfo'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('height\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n')
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
            }, [s._v('19')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('20')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('21')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('22')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('23')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('24')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('25')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('26')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('27')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('28')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('29')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('30')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('31')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('32')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('33')]), a('br')
          ])
        ]), a('h3', {
          attrs: {
            id: '滑动'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#滑动'
            }
          }, [s._v('#')]), s._v(' 滑动')
        ]), s._v(' '), a('p', [s._v('滑动就是不断设置元素'), a('code', [s._v('translateY')]), s._v('值。')]), s._v(' '), a('div', {
          staticClass: 'language-js line-numbers-mode'
        }, [
          a('pre', {
            pre: !0,
            attrs: {
              class: 'language-js'
            }
          }, [
            a('code', [
              s._v('  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('setPos')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token parameter'
                }
              }, [s._v('dy')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('translateY '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('+=')]), s._v(' dy\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('style')]), a('span', {
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
              }, [s._v('.')]), s._v('list'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      transform'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
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
                }, [s._v('`')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token string'
                  }
                }, [s._v('translateY(')]), a('span', {
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
                  }, [s._v('${')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token keyword'
                    }
                  }, [s._v('this')]), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token punctuation'
                    }
                  }, [s._v('.')]), s._v('translateY'), a('span', {
                    pre: !0,
                    attrs: {
                      class: 'token interpolation-punctuation punctuation'
                    }
                  }, [s._v('}')])
                ]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token string'
                  }
                }, [s._v('px)')]), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token template-punctuation string'
                  }
                }, [s._v('`')])
              ]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 在滑动过程中实时获得下一个元素索引')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('setCurIndex')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('emit')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'slide\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('setCurIndex')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('getSelectedIndex')]), a('span', {
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
              }, [s._v('.')]), s._v('translateY'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n\n    '), a('span', {
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
              }, [s._v('.')]), s._v('lastIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('!==')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('addSelectedClass')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('emit')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'change\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n        '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n      '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('lastIndex '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('addSelectedClass')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' curItem '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('curIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' lastItem '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('nodes'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('[')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('this')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('lastIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(']')]), s._v('\n\n    curItem'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('classList'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('add')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'slide-item-checked\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n    lastItem'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), s._v('classList'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('remove')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('\'slide-item-checked\'')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), s._v('\n  '), a('span', {
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
            }, [s._v('19')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('20')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('21')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('22')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('23')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('24')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('25')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('26')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('27')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('28')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('29')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('30')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('31')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('32')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('33')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('34')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('35')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('36')]), a('br'), a('span', {
              staticClass: 'line-number'
            }, [s._v('37')]), a('br')
          ])
        ]), a('p', [s._v('在滑动过程中，需要设置当前所选元素索引，分发'), a('code', [s._v('slide')]), s._v('和'), a('code', [s._v('change')]), s._v('事件，并为所选元素添加'), a('code', [s._v('slide-item-checked')]), s._v('事件。')]), s._v(' '), a('h3', {
          attrs: {
            id: '使用'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#使用'
            }
          }, [s._v('#')]), s._v(' 使用')
        ]), s._v(' '), a('div', {
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
              }, [s._v('let')]), s._v(' el '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' document'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('querySelector')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('".slide-list-contianer"')]), a('span', {
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
                  class: 'token keyword'
                }
              }, [s._v('const')]), s._v(' slide '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v('=')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token keyword'
                }
              }, [s._v('new')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token class-name'
                }
              }, [s._v('Slide')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), s._v('el'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 可见行数')]), s._v('\n  visiableRowCount'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('5')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 初始位置索引')]), s._v('\n  startIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('0')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 保持索引位置不变')]), s._v('\n  keepIndex'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token boolean'
                }
              }, [s._v('true')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 选择框')]), s._v('\n  selectBox'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token comment'
                }
              }, [s._v('// 选择框所在位置')]), s._v('\n    position'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token number'
                }
              }, [s._v('2')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v('\n    style'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('{')]), s._v('\n      background'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token operator'
                }
              }, [s._v(':')]), s._v(' '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"red"')]), s._v('\n    '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n  '), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('}')]), s._v('\n'), a('span', {
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
              }, [s._v(';')]), s._v('\nslide'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('on')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token string'
                }
              }, [s._v('"change"')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(',')]), s._v(' '), a('span', {
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
                s._v('el'), a('span', {
                  pre: !0,
                  attrs: {
                    class: 'token punctuation'
                  }
                }, [s._v(',')]), s._v(' nodes')
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
              }, [s._v('{')]), a('span', {
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
              }, [s._v(';')]), s._v('\nslide'), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('.')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token function'
                }
              }, [s._v('init')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v('(')]), a('span', {
                pre: !0,
                attrs: {
                  class: 'token punctuation'
                }
              }, [s._v(')')]), a('span', {
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
        ]), a('h3', {
          attrs: {
            id: '源码'
          }
        }, [
          a('a', {
            staticClass: 'header-anchor',
            attrs: {
              href: '#源码'
            }
          }, [s._v('#')]), s._v(' 源码')
        ]), s._v(' '), a('p', [s._v('源码和更多使用请看：')])
      ])}), [], !1, null, null, null)

    t.default = e.exports}
  }
])