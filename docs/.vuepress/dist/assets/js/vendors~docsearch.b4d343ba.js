(window.webpackJsonp = window.webpackJsonp || []).push([
  [2], {
    371: function (t, e, n) {
    /* ! docsearch 2.6.3 | © Algolia | github.com/algolia/docsearch */
      let r

      'undefined' !== typeof self && self, r = function () {return function (t) {const e = {}

        function n (r) {if (e[r]) return e[r].exports; const i = e[r] = {
          i: r,
          l: !1,
          exports: {}
        }

        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports} return n.m = t, n.c = e, n.d = function (t, e, r) {n.o(t, e) || Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: r
        })}, n.n = function (t) {const e = t && t.__esModule ? function () {return t.default} : function () {return t}

          return n.d(e, 'a', e), e}, n.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e)}, n.p = '', n(n.s = 22)}([
        function (t, e, n) {'use strict'; let r; const i = n(1)

          function s (t) {return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')}t.exports = {
            isArray: null,
            isFunction: null,
            isObject: null,
            bind: null,
            each: null,
            map: null,
            mixin: null,
            isMsie: function (t) {if (void 0 === t && (t = navigator.userAgent), /(msie|trident)/i.test(t)) {const e = t.match(/(msie |rv:)(\d+(.\d+)?)/i)

              if (e) return e[2]} return !1},
            escapeRegExChars: function (t) {return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')},
            isNumber: function (t) {return 'number' === typeof t},
            toStr: function (t) {return null == t ? '' : t + ''},
            cloneDeep: function (t) {const e = this.mixin({}, t); const n = this

              return this.each(e, (function (t, r) {t && (n.isArray(t) ? e[r] = [].concat(t) : n.isObject(t) && (e[r] = n.cloneDeep(t)))})), e},
            error: function (t) {throw new Error(t)},
            every: function (t, e) {let n = !0

              return t ? (this.each(t, (function (r, i) {n && (n = e.call(null, r, i, t) && n)})), !!n) : n},
            any: function (t, e) {let n = !1

              return t ? (this.each(t, (function (r, i) {if (e.call(null, r, i, t)) return n = !0, !1})), n) : n},
            getUniqueId: (r = 0, function () {return r++}),
            templatify: function (t) {if (this.isFunction(t)) return t; const e = i.element(t)

              return 'SCRIPT' === e.prop('tagName') ? function () {return e.text()} : function () {return String(t)}},
            defer: function (t) {setTimeout(t, 0)},
            noop: function () {},
            formatPrefix: function (t, e) {return e ? '' : t + '-'},
            className: function (t, e, n) {return (n ? '' : '.') + t + e},
            escapeHighlightedString: function (t, e, n) {e = e || '<em>'; const r = document.createElement('div')

              r.appendChild(document.createTextNode(e)), n = n || '</em>'; const i = document.createElement('div')

              i.appendChild(document.createTextNode(n)); const o = document.createElement('div')

              return o.appendChild(document.createTextNode(t)), o.innerHTML.replace(RegExp(s(r.innerHTML), 'g'), e).replace(RegExp(s(i.innerHTML), 'g'), n)}
          }}, function (t, e, n) {'use strict'; t.exports = {
          element: null
        }}, function (t, e) {const n = Object.prototype.hasOwnProperty; const r = Object.prototype.toString

          t.exports = function (t, e, i) {if ('[object Function]' !== r.call(e)) throw new TypeError('iterator must be a function'); const s = t.length

            if (s === +s) for (let o = 0; o < s; o++)e.call(i, t[o], o, t); else for (const a in t)n.call(t, a) && e.call(i, t[a], a, t)}}, function (t, e) {t.exports = function (t) {return JSON.parse(JSON.stringify(t))}}, function (t, e) {let n

          n = function () {return this}(); try {n = n || Function('return this')() || (0, eval)('this')} catch (t) {'object' === typeof window && (n = window)}t.exports = n}, function (t, e, n) {'use strict'; const r = n(12)

          function i (t, e) {const r = n(2); const i = this

            'function' === typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : i.stack = (new Error).stack || 'Cannot get a stacktrace, browser is too old', this.name = 'AlgoliaSearchError', this.message = t || 'Unknown error', e && r(e, (function (t, e) {i[e] = t}))} function s (t, e) {function n () {const n = Array.prototype.slice.call(arguments, 0)

            'string' !== typeof n[0] && n.unshift(e), i.apply(this, n), this.name = 'AlgoliaSearch' + t + 'Error'} return r(n, i), n}r(i, Error), t.exports = {
            AlgoliaSearchError: i,
            UnparsableJSON: s('UnparsableJSON', 'Could not parse the incoming response as JSON, see err.more for details'),
            RequestTimeout: s('RequestTimeout', 'Request timedout before getting a response'),
            Network: s('Network', 'Network issue, see err.more for details'),
            JSONPScriptFail: s('JSONPScriptFail', '<script> was loaded but did not call our provided callback'),
            JSONPScriptError: s('JSONPScriptError', '<script> unable to load due to an `error` event on it'),
            Unknown: s('Unknown', 'Unknown error occured')
          }}, function (t, e) {const n = {}.toString

          t.exports = Array.isArray || function (t) {return '[object Array]' == n.call(t)}}, function (t, e, n) {const r = n(2)

          t.exports = function (t, e) {const n = []

            return r(t, (function (r, i) {n.push(e(r, i, t))})), n}}, function (t, e, n) {(function (r) {function i () {let t

          try {t = e.storage.debug} catch (t) {} return !t && void 0 !== r && 'env' in r && (t = Object({
            NODE_ENV: 'production'
          }).DEBUG), t}(e = t.exports = n(39)).log = function () {return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)}, e.formatArgs = function (t) {const n = this.useColors

          if (t[0] = (n ? '%c' : '') + this.namespace + (n ? ' %c' : ' ') + t[0] + (n ? '%c ' : ' ') + '+' + e.humanize(this.diff), n) {const r = 'color: ' + this.color

            t.splice(1, 0, r, 'color: inherit'); let i = 0; let s = 0

            t[0].replace(/%[a-zA-Z%]/g, (function (t) {'%%' !== t && (i++, '%c' === t && (s = i))})), t.splice(s, 0, r)}}, e.save = function (t) {try {null == t ? e.storage.removeItem('debug') : e.storage.debug = t} catch (t) {}}, e.load = i, e.useColors = function () {return !('undefined' === typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}, e.storage = 'undefined' !== typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {try {return window.localStorage} catch (t) {}}(), e.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'], e.formatters.j = function (t) {try {return JSON.stringify(t)} catch (t) {return '[UnexpectedJSONParseError]: ' + t.message}}, e.enable(i())}).call(e, n(9))}, function (t, e) {let n; let r; const i = t.exports = {}

          function s () {throw new Error('setTimeout has not been defined')} function o () {throw new Error('clearTimeout has not been defined')} function a (t) {if (n === setTimeout) return setTimeout(t, 0); if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0); try {return n(t, 0)} catch (e) {try {return n.call(null, t, 0)} catch (e) {return n.call(this, t, 0)}}}!function () {try {n = 'function' === typeof setTimeout ? setTimeout : s} catch (t) {n = s} try {r = 'function' === typeof clearTimeout ? clearTimeout : o} catch (t) {r = o}}(); let u; let c = []; let l = !1; let h = -1

          function p () {l && u && (l = !1, u.length ? c = u.concat(c) : h = -1, c.length && f())} function f () {if (!l) {const t = a(p)

            l = !0; for (let e = c.length; e;) {for (u = c, c = []; ++h < e;)u && u[h].run(); h = -1, e = c.length}u = null, l = !1, function (t) {if (r === clearTimeout) return clearTimeout(t); if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try {r(t)} catch (e) {try {return r.call(null, t)} catch (e) {return r.call(this, t)}}}(t)}} function d (t, e) {this.fun = t, this.array = e} function g () {}i.nextTick = function (t) {const e = new Array(arguments.length - 1)

            if (arguments.length > 1) for (let n = 1; n < arguments.length; n++)e[n - 1] = arguments[n]; c.push(new d(t, e)), 1 !== c.length || l || a(f)}, d.prototype.run = function () {this.fun.apply(null, this.array)}, i.title = 'browser', i.browser = !0, i.env = {}, i.argv = [], i.version = '', i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {return []}, i.binding = function (t) {throw new Error('process.binding is not supported')}, i.cwd = function () {return '/'}, i.chdir = function (t) {throw new Error('process.chdir is not supported')}, i.umask = function () {return 0}}, function (t, e, n) {'use strict'; const r = n(53); const i = /\s+/

          function s (t, e, n, r) {let s

            if (!n) return this; for (e = e.split(i), n = r ? function (t, e) {return t.bind ? t.bind(e) : function () {t.apply(e, [].slice.call(arguments, 0))}}(n, r) : n, this._callbacks = this._callbacks || {}; s = e.shift();) this._callbacks[s] = this._callbacks[s] || {
              sync: [],
              async: []
            }, this._callbacks[s][t].push(n); return this} function o (t, e, n) {return function () {for (var r, i = 0, s = t.length; !r && i < s; i += 1)r = !1 === t[i].apply(e, n); return !r}}t.exports = {
            onSync: function (t, e, n) {return s.call(this, 'sync', t, e, n)},
            onAsync: function (t, e, n) {return s.call(this, 'async', t, e, n)},
            off: function (t) {let e

              if (!this._callbacks) return this; for (t = t.split(i); e = t.shift();) delete this._callbacks[e]; return this},
            trigger: function (t) {let e; let n; let s; let a; let u

              if (!this._callbacks) return this; for (t = t.split(i), s = [].slice.call(arguments, 1); (e = t.shift()) && (n = this._callbacks[e]);)a = o(n.sync, this, [e].concat(s)), u = o(n.async, this, [e].concat(s)), a() && r(u); return this}
          }}, function (t, e, n) {'use strict'; const r = n(0); const i = {
          wrapper: {
            position: 'relative',
            display: 'inline-block'
          },
          hint: {
            position: 'absolute',
            top: '0',
            left: '0',
            borderColor: 'transparent',
            boxShadow: 'none',
            opacity: '1'
          },
          input: {
            position: 'relative',
            verticalAlign: 'top',
            backgroundColor: 'transparent'
          },
          inputWithNoHint: {
            position: 'relative',
            verticalAlign: 'top'
          },
          dropdown: {
            position: 'absolute',
            top: '100%',
            left: '0',
            zIndex: '100',
            display: 'none'
          },
          suggestions: {
            display: 'block'
          },
          suggestion: {
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          },
          suggestionChild: {
            whiteSpace: 'normal'
          },
          ltr: {
            left: '0',
            right: 'auto'
          },
          rtl: {
            left: 'auto',
            right: '0'
          },
          defaultClasses: {
            root: 'algolia-autocomplete',
            prefix: 'aa',
            noPrefix: !1,
            dropdownMenu: 'dropdown-menu',
            input: 'input',
            hint: 'hint',
            suggestions: 'suggestions',
            suggestion: 'suggestion',
            cursor: 'cursor',
            dataset: 'dataset',
            empty: 'empty'
          },
          appendTo: {
            wrapper: {
              position: 'absolute',
              zIndex: '100',
              display: 'none'
            },
            input: {},
            inputWithNoHint: {},
            dropdown: {
              display: 'block'
            }
          }
        }

        r.isMsie() && r.mixin(i.input, {
          backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
        }), r.isMsie() && r.isMsie() <= 7 && r.mixin(i.input, {
          marginTop: '-1px'
        }), t.exports = i}, function (t, e) {'function' === typeof Object.create ? t.exports = function (t, e) {t.super_ = e, t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })} : t.exports = function (t, e) {t.super_ = e; const n = function () {}

          n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t}}, function (t, e, n) {t.exports = function (t, e) {return function (n, i, s) {if ('function' === typeof n && 'object' === typeof i || 'object' === typeof s) throw new r.AlgoliaSearchError('index.search usage is index.search(query, params, cb)'); 0 === arguments.length || 'function' === typeof n ? (s = n, n = '') : 1 !== arguments.length && 'function' !== typeof i || (s = i, i = void 0), 'object' === typeof n && null !== n ? (i = n, n = void 0) : null == n && (n = ''); let o; let a = ''

          return void 0 !== n && (a += t + '=' + encodeURIComponent(n)), void 0 !== i && (i.additionalUA && (o = i.additionalUA, delete i.additionalUA), a = this.as._getSearchParams(i, a)), this._search(a, e, s, o)}}; var r = n(5)}, function (t, e, n) {t.exports = function (t, e) {const r = n(36); const i = n(2); const s = {}

          return i(r(t), (function (n) {!0 !== e(n) && (s[n] = t[n])})), s}}, function (t, e) {let n

          n = window, t.exports = function (t) {let e; let n; const r = function () {let e; let n; let r; let i; let s; const o = []; const a = o.concat; const u = o.filter; const c = o.slice; const l = t.document; const h = {}; const p = {}; const f = {
            'column-count': 1,
            columns: 1,
            'font-weight': 1,
            'line-height': 1,
            opacity: 1,
            'z-index': 1,
            zoom: 1
          }; const d = /^\s*<(\w+|!)[^>]*>/; const g = /^<(\w+)\s*\/?>(?:<\/\1>|)$/; const m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi; const v = /^(?:body|html)$/i; const y = /([A-Z])/g; const b = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset']; const w = l.createElement('table'); const _ = l.createElement('tr'); const x = {
            tr: l.createElement('tbody'),
            tbody: w,
            thead: w,
            tfoot: w,
            td: _,
            th: _,
            '*': l.createElement('div')
          }; const S = /complete|loaded|interactive/; const C = /^[\w-]*$/; const A = {}; const T = A.toString; const O = {}; const E = l.createElement('div'); const k = {
            tabindex: 'tabIndex',
            readonly: 'readOnly',
            for: 'htmlFor',
            class: 'className',
            maxlength: 'maxLength',
            cellspacing: 'cellSpacing',
            cellpadding: 'cellPadding',
            rowspan: 'rowSpan',
            colspan: 'colSpan',
            usemap: 'useMap',
            frameborder: 'frameBorder',
            contenteditable: 'contentEditable'
          }; const N = Array.isArray || function (t) {return t instanceof Array}

          function I (t) {return null == t ? String(t) : A[T.call(t)] || 'object'} function j (t) {return 'function' == I(t)} function R (t) {return null != t && t == t.window} function D (t) {return null != t && t.nodeType == t.DOCUMENT_NODE} function $ (t) {return 'object' == I(t)} function P (t) {return $(t) && !R(t) && Object.getPrototypeOf(t) == Object.prototype} function q (t) {const e = !!t && 'length' in t && t.length; const r = n.type(t)

            return 'function' != r && !R(t) && ('array' == r || 0 === e || 'number' === typeof e && e > 0 && e - 1 in t)} function L (t) {return t.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase()} function H (t) {return t in p ? p[t] : p[t] = new RegExp('(^|\\s)' + t + '(\\s|$)')} function M (t, e) {return 'number' !== typeof e || f[L(t)] ? e : e + 'px'} function F (t) {return 'children' in t ? c.call(t.children) : n.map(t.childNodes, (function (t) {if (1 == t.nodeType) return t}))} function U (t, e) {let n; const r = t ? t.length : 0

            for (n = 0; n < r; n++) this[n] = t[n]; this.length = r, this.selector = e || ''} function B (t, n, r) {for (e in n)r && (P(n[e]) || N(n[e])) ? (P(n[e]) && !P(t[e]) && (t[e] = {}), N(n[e]) && !N(t[e]) && (t[e] = []), B(t[e], n[e], r)) : void 0 !== n[e] && (t[e] = n[e])} function V (t, e) {return null == e ? n(t) : n(t).filter(e)} function K (t, e, n, r) {return j(e) ? e.call(t, n, r) : e} function J (t, e, n) {null == n ? t.removeAttribute(e) : t.setAttribute(e, n)} function z (t, e) {const n = t.className || ''; const r = n && void 0 !== n.baseVal

            if (void 0 === e) return r ? n.baseVal : n; r ? n.baseVal = e : t.className = e} function Q (t) {try {return t ? 'true' == t || 'false' != t && ('null' == t ? null : +t + '' == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t} catch (e) {return t}} function W (t, e) {e(t); for (let n = 0, r = t.childNodes.length; n < r; n++)W(t.childNodes[n], e)} return O.matches = function (t, e) {if (!e || !t || 1 !== t.nodeType) return !1; const n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector

            if (n) return n.call(t, e); let r; let i = t.parentNode; const s = !i

            return s && (i = E).appendChild(t), r = ~O.qsa(i, e).indexOf(t), s && E.removeChild(t), r}, i = function (t) {return t.replace(/-+(.)?/g, (function (t, e) {return e ? e.toUpperCase() : ''}))}, s = function (t) {return u.call(t, (function (e, n) {return t.indexOf(e) == n}))}, O.fragment = function (t, e, r) {let i; let s; let o

            return g.test(t) && (i = n(l.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(m, '<$1></$2>')), void 0 === e && (e = d.test(t) && RegExp.$1), e in x || (e = '*'), (o = x[e]).innerHTML = '' + t, i = n.each(c.call(o.childNodes), (function () {o.removeChild(this)}))), P(r) && (s = n(i), n.each(r, (function (t, e) {b.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)}))), i}, O.Z = function (t, e) {return new U(t, e)}, O.isZ = function (t) {return t instanceof O.Z}, O.init = function (t, e) {let r; let i

            if (!t) return O.Z(); if ('string' === typeof t) if ('<' == (t = t.trim())[0] && d.test(t))r = O.fragment(t, RegExp.$1, e), t = null; else {if (void 0 !== e) return n(e).find(t); r = O.qsa(l, t)} else {if (j(t)) return n(l).ready(t); if (O.isZ(t)) return t; if (N(t))i = t, r = u.call(i, (function (t) {return null != t})); else if ($(t))r = [t], t = null; else if (d.test(t))r = O.fragment(t.trim(), RegExp.$1, e), t = null; else {if (void 0 !== e) return n(e).find(t); r = O.qsa(l, t)}} return O.Z(r, t)}, (n = function (t, e) {return O.init(t, e)}).extend = function (t) {let e; const n = c.call(arguments, 1)

            return 'boolean' === typeof t && (e = t, t = n.shift()), n.forEach((function (n) {B(t, n, e)})), t}, O.qsa = function (t, e) {let n; const r = '#' == e[0]; const i = !r && '.' == e[0]; const s = r || i ? e.slice(1) : e; const o = C.test(s)

            return t.getElementById && o && r ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : c.call(o && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))}, n.contains = l.documentElement.contains ? function (t, e) {return t !== e && t.contains(e)} : function (t, e) {for (;e && (e = e.parentNode);) if (e === t) return !0; return !1}, n.type = I, n.isFunction = j, n.isWindow = R, n.isArray = N, n.isPlainObject = P, n.isEmptyObject = function (t) {let e

            for (e in t) return !1; return !0}, n.isNumeric = function (t) {const e = Number(t); const n = typeof t

            return null != t && 'boolean' != n && ('string' != n || t.length) && !isNaN(e) && isFinite(e) || !1}, n.inArray = function (t, e, n) {return o.indexOf.call(e, t, n)}, n.camelCase = i, n.trim = function (t) {return null == t ? '' : String.prototype.trim.call(t)}, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function () {}, n.map = function (t, e) {let r; let i; let s; let o; const a = []

            if (q(t)) for (i = 0; i < t.length; i++)null != (r = e(t[i], i)) && a.push(r); else for (s in t)null != (r = e(t[s], s)) && a.push(r); return (o = a).length > 0 ? n.fn.concat.apply([], o) : o}, n.each = function (t, e) {let n; let r

            if (q(t)) {for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t} else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t; return t}, n.grep = function (t, e) {return u.call(t, e)}, t.JSON && (n.parseJSON = JSON.parse), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), (function (t, e) {A['[object ' + e + ']'] = e.toLowerCase()})), n.fn = {
            constructor: O.Z,
            length: 0,
            forEach: o.forEach,
            reduce: o.reduce,
            push: o.push,
            sort: o.sort,
            splice: o.splice,
            indexOf: o.indexOf,
            concat: function () {let t; let e; const n = []

              for (t = 0; t < arguments.length; t++)e = arguments[t], n[t] = O.isZ(e) ? e.toArray() : e; return a.apply(O.isZ(this) ? this.toArray() : this, n)},
            map: function (t) {return n(n.map(this, (function (e, n) {return t.call(e, n, e)})))},
            slice: function () {return n(c.apply(this, arguments))},
            ready: function (t) {return S.test(l.readyState) && l.body ? t(n) : l.addEventListener('DOMContentLoaded', (function () {t(n)}), !1), this},
            get: function (t) {return void 0 === t ? c.call(this) : this[t >= 0 ? t : t + this.length]},
            toArray: function () {return this.get()},
            size: function () {return this.length},
            remove: function () {return this.each((function () {null != this.parentNode && this.parentNode.removeChild(this)}))},
            each: function (t) {return o.every.call(this, (function (e, n) {return !1 !== t.call(e, n, e)})), this},
            filter: function (t) {return j(t) ? this.not(this.not(t)) : n(u.call(this, (function (e) {return O.matches(e, t)})))},
            add: function (t, e) {return n(s(this.concat(n(t, e))))},
            is: function (t) {return this.length > 0 && O.matches(this[0], t)},
            not: function (t) {const e = []

              if (j(t) && void 0 !== t.call) this.each((function (n) {t.call(this, n) || e.push(this)})); else {const r = 'string' === typeof t ? this.filter(t) : q(t) && j(t.item) ? c.call(t) : n(t)

                this.forEach((function (t) {r.indexOf(t) < 0 && e.push(t)}))} return n(e)},
            has: function (t) {return this.filter((function () {return $(t) ? n.contains(this, t) : n(this).find(t).size()}))},
            eq: function (t) {return -1 === t ? this.slice(t) : this.slice(t, +t + 1)},
            first: function () {const t = this[0]

              return t && !$(t) ? t : n(t)},
            last: function () {const t = this[this.length - 1]

              return t && !$(t) ? t : n(t)},
            find: function (t) {const e = this

              return t ? 'object' === typeof t ? n(t).filter((function () {const t = this

                return o.some.call(e, (function (e) {return n.contains(e, t)}))})) : 1 == this.length ? n(O.qsa(this[0], t)) : this.map((function () {return O.qsa(this, t)})) : n()},
            closest: function (t, e) {const r = []; const i = 'object' === typeof t && n(t)

              return this.each((function (n, s) {for (;s && !(i ? i.indexOf(s) >= 0 : O.matches(s, t));)s = s !== e && !D(s) && s.parentNode; s && r.indexOf(s) < 0 && r.push(s)})), n(r)},
            parents: function (t) {for (var e = [], r = this; r.length > 0;)r = n.map(r, (function (t) {if ((t = t.parentNode) && !D(t) && e.indexOf(t) < 0) return e.push(t), t})); return V(e, t)},
            parent: function (t) {return V(s(this.pluck('parentNode')), t)},
            children: function (t) {return V(this.map((function () {return F(this)})), t)},
            contents: function () {return this.map((function () {return this.contentDocument || c.call(this.childNodes)}))},
            siblings: function (t) {return V(this.map((function (t, e) {return u.call(F(e.parentNode), (function (t) {return t !== e}))})), t)},
            empty: function () {return this.each((function () {this.innerHTML = ''}))},
            pluck: function (t) {return n.map(this, (function (e) {return e[t]}))},
            show: function () {return this.each((function () {let t; let e; let n

              'none' == this.style.display && (this.style.display = ''), 'none' == getComputedStyle(this, '').getPropertyValue('display') && (this.style.display = (t = this.nodeName, h[t] || (e = l.createElement(t), l.body.appendChild(e), n = getComputedStyle(e, '').getPropertyValue('display'), e.parentNode.removeChild(e), 'none' == n && (n = 'block'), h[t] = n), h[t]))}))},
            replaceWith: function (t) {return this.before(t).remove()},
            wrap: function (t) {const e = j(t)

              if (this[0] && !e) var r = n(t).get(0); const i = r.parentNode || this.length > 1

              return this.each((function (s) {n(this).wrapAll(e ? t.call(this, s) : i ? r.cloneNode(!0) : r)}))},
            wrapAll: function (t) {if (this[0]) {let e

              for (n(this[0]).before(t = n(t)); (e = t.children()).length;)t = e.first(); n(t).append(this)} return this},
            wrapInner: function (t) {const e = j(t)

              return this.each((function (r) {const i = n(this); const s = i.contents(); const o = e ? t.call(this, r) : t

                s.length ? s.wrapAll(o) : i.append(o)}))},
            unwrap: function () {return this.parent().each((function () {n(this).replaceWith(n(this).children())})), this},
            clone: function () {return this.map((function () {return this.cloneNode(!0)}))},
            hide: function () {return this.css('display', 'none')},
            toggle: function (t) {return this.each((function () {const e = n(this);

              (void 0 === t ? 'none' == e.css('display') : t) ? e.show() : e.hide()}))},
            prev: function (t) {return n(this.pluck('previousElementSibling')).filter(t || '*')},
            next: function (t) {return n(this.pluck('nextElementSibling')).filter(t || '*')},
            html: function (t) {return 0 in arguments ? this.each((function (e) {const r = this.innerHTML

              n(this).empty().append(K(this, t, e, r))})) : 0 in this ? this[0].innerHTML : null},
            text: function (t) {return 0 in arguments ? this.each((function (e) {const n = K(this, t, e, this.textContent)

              this.textContent = null == n ? '' : '' + n})) : 0 in this ? this.pluck('textContent').join('') : null},
            attr: function (t, n) {let r

              return 'string' !== typeof t || 1 in arguments ? this.each((function (r) {if (1 === this.nodeType) if ($(t)) for (e in t)J(this, e, t[e]); else J(this, t, K(this, n, r, this.getAttribute(t)))})) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(t)) ? r : void 0},
            removeAttr: function (t) {return this.each((function () {1 === this.nodeType && t.split(' ').forEach((function (t) {J(this, t)}), this)}))},
            prop: function (t, e) {return t = k[t] || t, 1 in arguments ? this.each((function (n) {this[t] = K(this, e, n, this[t])})) : this[0] && this[0][t]},
            removeProp: function (t) {return t = k[t] || t, this.each((function () {delete this[t]}))},
            data: function (t, e) {const n = 'data-' + t.replace(y, '-$1').toLowerCase(); const r = 1 in arguments ? this.attr(n, e) : this.attr(n)

              return null !== r ? Q(r) : void 0},
            val: function (t) {return 0 in arguments ? (null == t && (t = ''), this.each((function (e) {this.value = K(this, t, e, this.value)}))) : this[0] && (this[0].multiple ? n(this[0]).find('option').filter((function () {return this.selected})).pluck('value') : this[0].value)},
            offset: function (e) {if (e) return this.each((function (t) {const r = n(this); const i = K(this, e, t, r.offset()); const s = r.offsetParent().offset(); const o = {
              top: i.top - s.top,
              left: i.left - s.left
            }

            'static' == r.css('position') && (o.position = 'relative'), r.css(o)})); if (!this.length) return null; if (l.documentElement !== this[0] && !n.contains(l.documentElement, this[0])) return {
              top: 0,
              left: 0
            }; const r = this[0].getBoundingClientRect()

            return {
              left: r.left + t.pageXOffset,
              top: r.top + t.pageYOffset,
              width: Math.round(r.width),
              height: Math.round(r.height)
            }},
            css: function (t, r) {if (arguments.length < 2) {const s = this[0]

              if ('string' === typeof t) {if (!s) return; return s.style[i(t)] || getComputedStyle(s, '').getPropertyValue(t)} if (N(t)) {if (!s) return; const o = {}; const a = getComputedStyle(s, '')

                return n.each(t, (function (t, e) {o[e] = s.style[i(e)] || a.getPropertyValue(e)})), o}} let u = ''

            if ('string' == I(t))r || 0 === r ? u = L(t) + ':' + M(t, r) : this.each((function () {this.style.removeProperty(L(t))})); else for (e in t)t[e] || 0 === t[e] ? u += L(e) + ':' + M(e, t[e]) + ';' : this.each((function () {this.style.removeProperty(L(e))})); return this.each((function () {this.style.cssText += ';' + u}))},
            index: function (t) {return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])},
            hasClass: function (t) {return !!t && o.some.call(this, (function (t) {return this.test(z(t))}), H(t))},
            addClass: function (t) {return t ? this.each((function (e) {if ('className' in this) {r = []; const i = z(this)

              K(this, t, e, i).split(/\s+/g).forEach((function (t) {n(this).hasClass(t) || r.push(t)}), this), r.length && z(this, i + (i ? ' ' : '') + r.join(' '))}})) : this},
            removeClass: function (t) {return this.each((function (e) {if ('className' in this) {if (void 0 === t) return z(this, ''); r = z(this), K(this, t, e, r).split(/\s+/g).forEach((function (t) {r = r.replace(H(t), ' ')})), z(this, r.trim())}}))},
            toggleClass: function (t, e) {return t ? this.each((function (r) {const i = n(this)

              K(this, t, r, z(this)).split(/\s+/g).forEach((function (t) {(void 0 === e ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)}))})) : this},
            scrollTop: function (t) {if (this.length) {const e = 'scrollTop' in this[0]

              return void 0 === t ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {this.scrollTop = t} : function () {this.scrollTo(this.scrollX, t)})}},
            scrollLeft: function (t) {if (this.length) {const e = 'scrollLeft' in this[0]

              return void 0 === t ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {this.scrollLeft = t} : function () {this.scrollTo(t, this.scrollY)})}},
            position: function () {if (this.length) {const t = this[0]; const e = this.offsetParent(); const r = this.offset(); const i = v.test(e[0].nodeName) ? {
              top: 0,
              left: 0
            } : e.offset()

            return r.top -= parseFloat(n(t).css('margin-top')) || 0, r.left -= parseFloat(n(t).css('margin-left')) || 0, i.top += parseFloat(n(e[0]).css('border-top-width')) || 0, i.left += parseFloat(n(e[0]).css('border-left-width')) || 0, {
              top: r.top - i.top,
              left: r.left - i.left
            }}},
            offsetParent: function () {return this.map((function () {for (var t = this.offsetParent || l.body; t && !v.test(t.nodeName) && 'static' == n(t).css('position');)t = t.offsetParent; return t}))}
          }, n.fn.detach = n.fn.remove, ['width', 'height'].forEach((function (t) {const e = t.replace(/./, (function (t) {return t[0].toUpperCase()}))

            n.fn[t] = function (r) {let i; let s = this[0]

              return void 0 === r ? R(s) ? s['inner' + e] : D(s) ? s.documentElement['scroll' + e] : (i = this.offset()) && i[t] : this.each((function (e) {(s = n(this)).css(t, K(this, r, e, s[t]()))}))}})), ['after', 'prepend', 'before', 'append'].forEach((function (e, r) {const i = r % 2

            n.fn[e] = function () {let e; let s; const o = n.map(arguments, (function (t) {let r = []

              return 'array' == (e = I(t)) ? (t.forEach((function (t) {return void 0 !== t.nodeType ? r.push(t) : n.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(O.fragment(t)))})), r) : 'object' == e || null == t ? t : O.fragment(t)})); const a = this.length > 1

            return o.length < 1 ? this : this.each((function (e, u) {s = i ? u : u.parentNode, u = 0 == r ? u.nextSibling : 1 == r ? u.firstChild : 2 == r ? u : null; const c = n.contains(l.documentElement, s)

              o.forEach((function (e) {if (a)e = e.cloneNode(!0); else if (!s) return n(e).remove(); s.insertBefore(e, u), c && W(e, (function (e) {if (!(null == e.nodeName || 'SCRIPT' !== e.nodeName.toUpperCase() || e.type && 'text/javascript' !== e.type || e.src)) {const n = e.ownerDocument ? e.ownerDocument.defaultView : t

                n.eval.call(n, e.innerHTML)}}))}))}))}, n.fn[i ? e + 'To' : 'insert' + (r ? 'Before' : 'After')] = function (t) {return n(t)[e](this), this}})), O.Z.prototype = U.prototype = n.fn, O.uniq = s, O.deserializeValue = Q, n.zepto = O, n}()

          return function (e) {let n = 1; const r = Array.prototype.slice; const i = e.isFunction; const s = function (t) {return 'string' === typeof t}; const o = {}; const a = {}; const u = 'onfocusin' in t; const c = {
            focus: 'focusin',
            blur: 'focusout'
          }; const l = {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout'
          }

          function h (t) {return t._zid || (t._zid = n++)} function p (t, e, n, r) {if ((e = f(e)).ns) var i = (s = e.ns, new RegExp('(?:^| )' + s.replace(' ', ' .* ?') + '(?: |$)')); let s

            return (o[h(t)] || []).filter((function (t) {return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!r || t.sel == r)}))} function f (t) {const e = ('' + t).split('.')

            return {
              e: e[0],
              ns: e.slice(1).sort().join(' ')
            }} function d (t, e) {return t.del && !u && t.e in c || !!e} function g (t) {return l[t] || u && c[t] || t} function m (t, n, r, i, s, a, u) {const c = h(t); const p = o[c] || (o[c] = [])

            n.split(/\s/).forEach((function (n) {if ('ready' == n) return e(document).ready(r); const o = f(n)

              o.fn = r, o.sel = s, o.e in l && (r = function (t) {const n = t.relatedTarget

                if (!n || n !== this && !e.contains(this, n)) return o.fn.apply(this, arguments)}), o.del = a; const c = a || r

              o.proxy = function (e) {if (!(e = x(e)).isImmediatePropagationStopped()) {try {const n = Object.getOwnPropertyDescriptor(e, 'data')

                n && !n.writable || (e.data = i)} catch (e) {} const r = c.apply(t, null == e._args ? [e] : [e].concat(e._args))

              return !1 === r && (e.preventDefault(), e.stopPropagation()), r}}, o.i = p.length, p.push(o), 'addEventListener' in t && t.addEventListener(g(o.e), o.proxy, d(o, u))}))} function v (t, e, n, r, i) {const s = h(t);

            (e || '').split(/\s/).forEach((function (e) {p(t, e, n, r).forEach((function (e) {delete o[s][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, d(e, i))}))}))}a.click = a.mousedown = a.mouseup = a.mousemove = 'MouseEvents', e.event = {
            add: m,
            remove: v
          }, e.proxy = function (t, n) {const o = 2 in arguments && r.call(arguments, 2)

            if (i(t)) {const a = function () {return t.apply(n, o ? o.concat(r.call(arguments)) : arguments)}

              return a._zid = h(t), a} if (s(n)) return o ? (o.unshift(t[n], t), e.proxy.apply(null, o)) : e.proxy(t[n], t); throw new TypeError('expected function')}, e.fn.bind = function (t, e, n) {return this.on(t, e, n)}, e.fn.unbind = function (t, e) {return this.off(t, e)}, e.fn.one = function (t, e, n, r) {return this.on(t, e, n, r, 1)}; const y = function () {return !0}; const b = function () {return !1}; const w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/; const _ = {
            preventDefault: 'isDefaultPrevented',
            stopImmediatePropagation: 'isImmediatePropagationStopped',
            stopPropagation: 'isPropagationStopped'
          }

          function x (t, n) {return !n && t.isDefaultPrevented || (n || (n = t), e.each(_, (function (e, r) {const i = n[e]

            t[e] = function () {return this[r] = y, i && i.apply(n, arguments)}, t[r] = b})), t.timeStamp || (t.timeStamp = Date.now()), (void 0 !== n.defaultPrevented ? n.defaultPrevented : 'returnValue' in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = y)), t} function S (t) {let e; const n = {
            originalEvent: t
          }

          for (e in t)w.test(e) || void 0 === t[e] || (n[e] = t[e]); return x(n, t)}e.fn.delegate = function (t, e, n) {return this.on(e, t, n)}, e.fn.undelegate = function (t, e, n) {return this.off(e, t, n)}, e.fn.live = function (t, n) {return e(document.body).delegate(this.selector, t, n), this}, e.fn.die = function (t, n) {return e(document.body).undelegate(this.selector, t, n), this}, e.fn.on = function (t, n, o, a, u) {let c; let l; const h = this

            return t && !s(t) ? (e.each(t, (function (t, e) {h.on(t, n, o, e, u)})), h) : (s(n) || i(a) || !1 === a || (a = o, o = n, n = void 0), void 0 !== a && !1 !== o || (a = o, o = void 0), !1 === a && (a = b), h.each((function (i, s) {u && (c = function (t) {return v(s, t.type, a), a.apply(this, arguments)}), n && (l = function (t) {let i; const o = e(t.target).closest(n, s).get(0)

              if (o && o !== s) return i = e.extend(S(t), {
                currentTarget: o,
                liveFired: s
              }), (c || a).apply(o, [i].concat(r.call(arguments, 1)))}), m(s, t, a, o, n, l || c)})))}, e.fn.off = function (t, n, r) {const o = this

            return t && !s(t) ? (e.each(t, (function (t, e) {o.off(t, n, e)})), o) : (s(n) || i(r) || !1 === r || (r = n, n = void 0), !1 === r && (r = b), o.each((function () {v(this, t, r, n)})))}, e.fn.trigger = function (t, n) {return (t = s(t) || e.isPlainObject(t) ? e.Event(t) : x(t))._args = n, this.each((function () {t.type in c && 'function' === typeof this[t.type] ? this[t.type]() : 'dispatchEvent' in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)}))}, e.fn.triggerHandler = function (t, n) {let r; let i

            return this.each((function (o, a) {(r = S(s(t) ? e.Event(t) : t))._args = n, r.target = a, e.each(p(a, t.type || t), (function (t, e) {if (i = e.proxy(r), r.isImmediatePropagationStopped()) return !1}))})), i}, 'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'.split(' ').forEach((function (t) {e.fn[t] = function (e) {return 0 in arguments ? this.bind(t, e) : this.trigger(t)}})), e.Event = function (t, e) {s(t) || (t = (e = t).type); const n = document.createEvent(a[t] || 'Events'); let r = !0

            if (e) for (const i in e)'bubbles' == i ? r = !!e[i] : n[i] = e[i]; return n.initEvent(t, r, !0), x(n)}}(r), n = [], r.fn.remove = function () {return this.each((function () {this.parentNode && ('IMG' === this.tagName && (n.push(this), this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=', e && clearTimeout(e), e = setTimeout((function () {n = []}), 6e4)), this.parentNode.removeChild(this))}))}, function (t) {const e = {}; const n = t.fn.data; const r = t.camelCase; const i = t.expando = 'Zepto' + +new Date; const s = []

            function o (n, o, a) {const u = n[i] || (n[i] = ++t.uuid); const c = e[u] || (e[u] = function (e) {const n = {}

              return t.each(e.attributes || s, (function (e, i) {0 == i.name.indexOf('data-') && (n[r(i.name.replace('data-', ''))] = t.zepto.deserializeValue(i.value))})), n}(n))

            return void 0 !== o && (c[r(o)] = a), c}t.fn.data = function (s, a) {return void 0 === a ? t.isPlainObject(s) ? this.each((function (e, n) {t.each(s, (function (t, e) {o(n, t, e)}))})) : 0 in this ? function (s, a) {const u = s[i]; const c = u && e[u]

              if (void 0 === a) return c || o(s); if (c) {if (a in c) return c[a]; const l = r(a)

                if (l in c) return c[l]} return n.call(t(s), a)}(this[0], s) : void 0 : this.each((function () {o(this, s, a)}))}, t.data = function (e, n, r) {return t(e).data(n, r)}, t.hasData = function (n) {const r = n[i]; const s = r && e[r]

              return !!s && !t.isEmptyObject(s)}, t.fn.removeData = function (n) {return 'string' === typeof n && (n = n.split(/\s+/)), this.each((function () {const s = this[i]; const o = s && e[s]

              o && t.each(n || o, (function (t) {delete o[n ? r(this) : t]}))}))}, ['remove', 'empty'].forEach((function (e) {const n = t.fn[e]

              t.fn[e] = function () {let t = this.find('*')

                return 'remove' === e && (t = t.add(this)), t.removeData(), n.call(this)}}))}(r), r}(n)}, function (t, e, n) {'use strict'; const r = n(0); const i = n(1)

          function s (t) {t && t.el || r.error('EventBus initialized without el'), this.$el = i.element(t.el)}r.mixin(s.prototype, {
            trigger: function (t, e, n, i) {const s = r.Event('autocomplete:' + t)

              return this.$el.trigger(s, [e, n, i]), s}
          }), t.exports = s}, function (t, e, n) {'use strict'; t.exports = {
          wrapper: '<span class="%ROOT%"></span>',
          dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
          dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
          suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
          suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>'
        }}, function (t, e) {t.exports = '0.36.0'}, function (t, e, n) {'use strict'; t.exports = function (t) {const e = t.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/)

          if (e) return [e[1], e[2], e[3]]}}, function (t, e, n) {'use strict'; Object.defineProperty(e, '__esModule', {
          value: !0
        }); let r; const i = n(15); const s = (r = i) && r.__esModule ? r : {
          default: r
        }

        e.default = s.default}, function (t, e, n) {'use strict'; Object.defineProperty(e, '__esModule', {
          value: !0
        }), e.default = '2.6.3'}, function (t, e, n) {'use strict'; let r; const i = n(23); const s = (r = i) && r.__esModule ? r : {
          default: r
        }

        t.exports = s.default}, function (t, e, n) {'use strict'; Object.defineProperty(e, '__esModule', {
          value: !0
        }); const r = o(n(24)); const i = o(n(25)); const s = o(n(21))

        function o (t) {return t && t.__esModule ? t : {
          default: t
        }} const a = (0, r.default)(i.default)

        a.version = s.default, e.default = a}, function (t, e, n) {'use strict'; const r = Function.prototype.bind

          t.exports = function (t) {const e = function () {for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)n[i] = arguments[i]; return new(r.apply(t, [null].concat(n)))}

            return e.__proto__ = t, e.prototype = t.prototype, e}}, function (t, e, n) {'use strict'; Object.defineProperty(e, '__esModule', {
          value: !0
        }); const r = Object.assign || function (t) {for (let e = 1; e < arguments.length; e++) {const n = arguments[e]

          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])} return t}; const i = function () {function t (t, e) {for (let n = 0; n < e.length; n++) {const r = e[n]

          r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)}} return function (e, n, r) {return n && t(e.prototype, n), r && t(e, r), e}}(); const s = p(n(26)); const o = p(n(29)); const a = p(n(49)); const u = p(n(64)); const c = p(n(65)); const l = p(n(21)); const h = p(n(20))

        function p (t) {return t && t.__esModule ? t : {
          default: t
        }} const f = function () {function t (e) {const n = e.apiKey; const i = e.indexName; const s = e.inputSelector; const c = e.appId; const p = void 0 === c ? 'BH4D9OD16A' : c; const f = e.debug; const d = void 0 !== f && f; const g = e.algoliaOptions; const m = void 0 === g ? {} : g; const v = e.queryDataCallback; const y = void 0 === v ? null : v; const b = e.autocompleteOptions; const w = void 0 === b ? {
          debug: !1,
          hint: !1,
          autoselect: !0
        } : b; const _ = e.transformData; const x = void 0 !== _ && _; const S = e.queryHook; const C = void 0 !== S && S; const A = e.handleSelected; const T = void 0 !== A && A; const O = e.enhancedSearchInput; const E = void 0 !== O && O; const k = e.layout; const N = void 0 === k ? 'collumns' : k

        !function (t, e) {if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')}(this, t), t.checkArguments({
          apiKey: n,
          indexName: i,
          inputSelector: s,
          debug: d,
          algoliaOptions: m,
          queryDataCallback: y,
          autocompleteOptions: w,
          transformData: x,
          queryHook: C,
          handleSelected: T,
          enhancedSearchInput: E,
          layout: N
        }), this.apiKey = n, this.appId = p, this.indexName = i, this.input = t.getInputFromSelector(s), this.algoliaOptions = r({
          hitsPerPage: 5
        }, m), this.queryDataCallback = y || null; const I = !(!w || !w.debug) && w.debug

        w.debug = d || I, this.autocompleteOptions = w, this.autocompleteOptions.cssClasses = this.autocompleteOptions.cssClasses || {}, this.autocompleteOptions.cssClasses.prefix = this.autocompleteOptions.cssClasses.prefix || 'ds'; const j = this.input && 'function' === typeof this.input.attr && this.input.attr('aria-label')

        this.autocompleteOptions.ariaLabel = this.autocompleteOptions.ariaLabel || j || 'search input', this.isSimpleLayout = 'simple' === N, this.client = (0, o.default)(this.appId, this.apiKey), this.client.addAlgoliaAgent('docsearch.js ' + l.default), E && (this.input = t.injectSearchBox(this.input)), this.autocomplete = (0, a.default)(this.input, w, [
          {
            source: this.getAutocompleteSource(x, C),
            templates: {
              suggestion: t.getSuggestionTemplate(this.isSimpleLayout),
              footer: u.default.footer,
              empty: t.getEmptyTemplate()
            }
          }
        ]); const R = T

        this.handleSelected = R || this.handleSelected, R && (0, h.default)('.algolia-autocomplete').on('click', '.ds-suggestions a', (function (t) {t.preventDefault()})), this.autocomplete.on('autocomplete:selected', this.handleSelected.bind(null, this.autocomplete.autocomplete)), this.autocomplete.on('autocomplete:shown', this.handleShown.bind(null, this.input)), E && t.bindSearchBoxEvent()} return i(t, [
          {
            key: 'getAutocompleteSource',
            value: function (e, n) {const r = this

              return function (i, s) {n && (i = n(i) || i), r.client.search([
                {
                  indexName: r.indexName,
                  query: i,
                  params: r.algoliaOptions
                }
              ]).then((function (n) {r.queryDataCallback && 'function' === typeof r.queryDataCallback && r.queryDataCallback(n); let i = n.results[0].hits

                e && (i = e(i) || i), s(t.formatHits(i))}))}}
          }, {
            key: 'handleSelected',
            value: function (t, e, n, r) {const i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}

              'click' !== i.selectionMethod && (t.setVal(''), window.location.assign(n.url))}
          }, {
            key: 'handleShown',
            value: function (t) {const e = t.offset().left + t.width() / 2; let n = (0, h.default)(document).width() / 2

              isNaN(n) && (n = 900); const r = e - n >= 0 ? 'algolia-autocomplete-right' : 'algolia-autocomplete-left'; const i = e - n < 0 ? 'algolia-autocomplete-right' : 'algolia-autocomplete-left'; const s = (0, h.default)('.algolia-autocomplete')

              s.hasClass(r) || s.addClass(r), s.hasClass(i) && s.removeClass(i)}
          }
        ], [
          {
            key: 'checkArguments',
            value: function (e) {if (!e.apiKey || !e.indexName) throw new Error('Usage:\n  documentationSearch({\n  apiKey,\n  indexName,\n  inputSelector,\n  [ appId ],\n  [ algoliaOptions.{hitsPerPage} ]\n  [ autocompleteOptions.{hint,debug} ]\n})'); if ('string' !== typeof e.inputSelector) throw new Error('Error: inputSelector:' + e.inputSelector + '  must be a string. Each selector must match only one element and separated by \',\''); if (!t.getInputFromSelector(e.inputSelector)) throw new Error('Error: No input element in the page matches ' + e.inputSelector)}
          }, {
            key: 'injectSearchBox',
            value: function (t) {t.before(u.default.searchBox); const e = t.prev().prev().find('input')

              return t.remove(), e}
          }, {
            key: 'bindSearchBoxEvent',
            value: function () {(0, h.default)('.searchbox [type="reset"]').on('click', (function () {(0, h.default)('input#docsearch').focus(), (0, h.default)(this).addClass('hide'), a.default.autocomplete.setVal('')})), (0, h.default)('input#docsearch').on('keyup', (function () {const t = document.querySelector('input#docsearch'); const e = document.querySelector('.searchbox [type="reset"]')

              e.className = 'searchbox__reset', 0 === t.value.length && (e.className += ' hide')}))}
          }, {
            key: 'getInputFromSelector',
            value: function (t) {const e = (0, h.default)(t).filter('input')

              return e.length ? (0, h.default)(e[0]) : null}
          }, {
            key: 'formatHits',
            value: function (e) {const n = c.default.deepClone(e).map((function (t) {return t._highlightResult && (t._highlightResult = c.default.mergeKeyWithParent(t._highlightResult, 'hierarchy')), c.default.mergeKeyWithParent(t, 'hierarchy')})); let r = c.default.groupBy(n, 'lvl0')

              return h.default.each(r, (function (t, e) {const n = c.default.groupBy(e, 'lvl1'); const i = c.default.flattenAndFlagFirst(n, 'isSubCategoryHeader')

                r[t] = i})), (r = c.default.flattenAndFlagFirst(r, 'isCategoryHeader')).map((function (e) {const n = t.formatURL(e); const r = c.default.getHighlightedValue(e, 'lvl0'); const i = c.default.getHighlightedValue(e, 'lvl1') || r; const s = c.default.compact([c.default.getHighlightedValue(e, 'lvl2') || i, c.default.getHighlightedValue(e, 'lvl3'), c.default.getHighlightedValue(e, 'lvl4'), c.default.getHighlightedValue(e, 'lvl5'), c.default.getHighlightedValue(e, 'lvl6')]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> › </span>'); const o = c.default.getSnippetedValue(e, 'content'); const a = i && '' !== i || s && '' !== s; const u = s && '' !== s && s !== i; const l = !u && i && '' !== i && i !== r

                return {
                  isLvl0: !l && !u,
                  isLvl1: l,
                  isLvl2: u,
                  isLvl1EmptyOrDuplicate: !i || '' === i || i === r,
                  isCategoryHeader: e.isCategoryHeader,
                  isSubCategoryHeader: e.isSubCategoryHeader,
                  isTextOrSubcategoryNonEmpty: a,
                  category: r,
                  subcategory: i,
                  title: s,
                  text: o,
                  url: n
                }}))}
          }, {
            key: 'formatURL',
            value: function (t) {const e = t.url; const n = t.anchor

              return e ? -1 !== e.indexOf('#') ? e : n ? t.url + '#' + t.anchor : e : n ? '#' + t.anchor : (console.warn('no anchor nor url for : ', JSON.stringify(t)), null)}
          }, {
            key: 'getEmptyTemplate',
            value: function () {return function (t) {return s.default.compile(u.default.empty).render(t)}}
          }, {
            key: 'getSuggestionTemplate',
            value: function (t) {const e = t ? u.default.suggestionSimple : u.default.suggestion; const n = s.default.compile(e)

              return function (t) {return n.render(t)}}
          }
        ]), t}()

        e.default = f}, function (t, e, n) {const r = n(27)

          r.Template = n(28).Template, r.template = r.Template, t.exports = r}, function (t, e, n) {!function (t) {const e = /\S/; const n = /\"/g; const r = /\n/g; const i = /\r/g; const s = /\\/g; const o = /\u2028/; const a = /\u2029/

          function u (t) {return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, '')} function c (t, e, n) {if (e.charAt(n) != t.charAt(0)) return !1; for (let r = 1, i = t.length; r < i; r++) if (e.charAt(n + r) != t.charAt(r)) return !1; return !0}t.tags = {
            '#': 1,
            '^': 2,
            '<': 3,
            $: 4,
            '/': 5,
            '!': 6,
            '>': 7,
            '=': 8,
            _v: 9,
            '{': 10,
            '&': 11,
            _t: 12
          }, t.scan = function (n, r) {let i; const s = n.length; let o = 0; let a = null; let l = null; let h = ''; const p = []; let f = !1; let d = 0; let g = 0; let m = '{{'; let v = '}}'

            function y () {h.length > 0 && (p.push({
              tag: '_t',
              text: new String(h)
            }), h = '')} function b (n, r) {if (y(), n && function () {for (var n = !0, r = g; r < p.length; r++) if (!(n = t.tags[p[r].tag] < t.tags._v || '_t' == p[r].tag && null === p[r].text.match(e))) return !1; return n}()) for (var i, s = g; s < p.length; s++)p[s].text && ((i = p[s + 1]) && '>' == i.tag && (i.indent = p[s].text.toString()), p.splice(s, 1)); else r || p.push({
              tag: '\n'
            }); f = !1, g = p.length} function w (t, e) {const n = '=' + v; const r = t.indexOf(n, e); const i = u(t.substring(t.indexOf('=', e) + 1, r)).split(' ')

              return m = i[0], v = i[i.length - 1], r + n.length - 1} for (r && (r = r.split(' '), m = r[0], v = r[1]), d = 0; d < s; d++)0 == o ? c(m, n, d) ? (--d, y(), o = 1) : '\n' == n.charAt(d) ? b(f) : h += n.charAt(d) : 1 == o ? (d += m.length - 1, '=' == (a = (l = t.tags[n.charAt(d + 1)]) ? n.charAt(d + 1) : '_v') ? (d = w(n, d), o = 0) : (l && d++, o = 2), f = d) : c(v, n, d) ? (p.push({
              tag: a,
              n: u(h),
              otag: m,
              ctag: v,
              i: '/' == a ? f - m.length : d + v.length
            }), h = '', d += v.length - 1, o = 0, '{' == a && ('}}' == v ? d++ : '}' === (i = p[p.length - 1]).n.substr(i.n.length - 1) && (i.n = i.n.substring(0, i.n.length - 1)))) : h += n.charAt(d); return b(f, !0), p}; const l = {
            _t: !0,
            '\n': !0,
            $: !0,
            '/': !0
          }

          function h (t, e) {for (let n = 0, r = e.length; n < r; n++) if (e[n].o == t.n) return t.tag = '#', !0} function p (t, e, n) {for (let r = 0, i = n.length; r < i; r++) if (n[r].c == t && n[r].o == e) return !0} function f (t) {const e = []

            for (const n in t.partials)e.push('"' + g(n) + '":{name:"' + g(t.partials[n].name) + '", ' + f(t.partials[n]) + '}'); return 'partials: {' + e.join(',') + '}, subs: ' + function (t) {const e = []

              for (const n in t)e.push('"' + g(n) + '": function(c,p,t,i) {' + t[n] + '}'); return '{ ' + e.join(',') + ' }'}(t.subs)}t.stringify = function (e, n, r) {return '{code: function (c,p,i) { ' + t.wrapMain(e.code) + ' },' + f(e) + '}'}; let d = 0

          function g (t) {return t.replace(s, '\\\\').replace(n, '\\"').replace(r, '\\n').replace(i, '\\r').replace(o, '\\u2028').replace(a, '\\u2029')} function m (t) {return ~t.indexOf('.') ? 'd' : 'f'} function v (t, e) {const n = '<' + (e.prefix || '') + t.n + d++

            return e.partials[n] = {
              name: t.n,
              partials: {}
            }, e.code += 't.b(t.rp("' + g(n) + '",c,p,"' + (t.indent || '') + '"));', n} function y (t, e) {e.code += 't.b(t.t(t.' + m(t.n) + '("' + g(t.n) + '",c,p,0)));'} function b (t) {return 't.b(' + t + ');'}t.generate = function (e, n, r) {d = 0; const i = {
            code: '',
            subs: {},
            partials: {}
          }

          return t.walk(e, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r)}, t.wrapMain = function (t) {return 'var t=this;t.b(i=i||"");' + t + 'return t.fl();'}, t.template = t.Template, t.makeTemplate = function (t, e, n) {const r = this.makePartials(t)

            return r.code = new Function('c', 'p', 'i', this.wrapMain(t.code)), new this.template(r, e, this, n)}, t.makePartials = function (t) {let e; const n = {
            subs: {},
            partials: t.partials,
            name: t.name
          }

          for (e in n.partials)n.partials[e] = this.makePartials(n.partials[e]); for (e in t.subs)n.subs[e] = new Function('c', 'p', 't', 'i', t.subs[e]); return n}, t.codegen = {
            '#': function (e, n) {n.code += 'if(t.s(t.' + m(e.n) + '("' + g(e.n) + '",c,p,1),c,p,0,' + e.i + ',' + e.end + ',"' + e.otag + ' ' + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += '});c.pop();}'},
            '^': function (e, n) {n.code += 'if(!t.s(t.' + m(e.n) + '("' + g(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += '};'},
            '>': v,
            '<': function (e, n) {const r = {
              partials: {},
              code: '',
              subs: {},
              inPartial: !0
            }

            t.walk(e.nodes, r); const i = n.partials[v(e, n)]

            i.subs = r.subs, i.partials = r.partials},
            $: function (e, n) {const r = {
              subs: {},
              code: '',
              partials: n.partials,
              prefix: e.n
            }

            t.walk(e.nodes, r), n.subs[e.n] = r.code, n.inPartial || (n.code += 't.sub("' + g(e.n) + '",c,p,i);')},
            '\n': function (t, e) {e.code += b('"\\n"' + (t.last ? '' : ' + i'))},
            _v: function (t, e) {e.code += 't.b(t.v(t.' + m(t.n) + '("' + g(t.n) + '",c,p,0)));'},
            _t: function (t, e) {e.code += b('"' + g(t.text) + '"')},
            '{': y,
            '&': y
          }, t.walk = function (e, n) {for (var r, i = 0, s = e.length; i < s; i++)(r = t.codegen[e[i].tag]) && r(e[i], n); return n}, t.parse = function (e, n, r) {return function e (n, r, i, s) {let o; const a = []; let u = null; let c = null

            for (o = i[i.length - 1]; n.length > 0;) {if (c = n.shift(), o && '<' == o.tag && !(c.tag in l)) throw new Error('Illegal content in < super tag.'); if (t.tags[c.tag] <= t.tags.$ || h(c, s))i.push(c), c.nodes = e(n, c.tag, i, s); else {if ('/' == c.tag) {if (0 === i.length) throw new Error('Closing tag without opener: /' + c.n); if (u = i.pop(), c.n != u.n && !p(c.n, u.n, s)) throw new Error('Nesting error: ' + u.n + ' vs. ' + c.n); return u.end = c.i, a}'\n' == c.tag && (c.last = 0 == n.length || '\n' == n[0].tag)}a.push(c)} if (i.length > 0) throw new Error('missing closing tag: ' + i.pop().n); return a}(e, 0, [], (r = r || {}).sectionTags || [])}, t.cache = {}, t.cacheKey = function (t, e) {return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join('||')}, t.compile = function (e, n) {n = n || {}; const r = t.cacheKey(e, n); let i = this.cache[r]

            if (i) {const s = i.partials

              for (const o in s) delete s[o].instance; return i} return i = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[r] = i}}(e)}, function (t, e, n) {!function (t) {function e (t, e, n) {let r

          return e && 'object' === typeof e && (void 0 !== e[t] ? r = e[t] : n && e.get && 'function' === typeof e.get && (r = e.get(t))), r}t.Template = function (t, e, n, r) {t = t || {}, this.r = t.code || this.r, this.c = n, this.options = r || {}, this.text = e || '', this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ''}, t.Template.prototype = {
          r: function (t, e, n) {return ''},
          v: function (t) {return t = u(t), a.test(t) ? t.replace(n, '&amp;').replace(r, '&lt;').replace(i, '&gt;').replace(s, '&#39;').replace(o, '&quot;') : t},
          t: u,
          render: function (t, e, n) {return this.ri([t], e || {}, n)},
          ri: function (t, e, n) {return this.r(t, e, n)},
          ep: function (t, e) {const n = this.partials[t]; let r = e[n.name]

            if (n.instance && n.base == r) return n.instance; if ('string' === typeof r) {if (!this.c) throw new Error('No compiler available.'); r = this.c.compile(r, this.options)} if (!r) return null; if (this.partials[t].base = r, n.subs) {for (key in e.stackText || (e.stackText = {}), n.subs)e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text); r = function (t, e, n, r, i, s) {function o () {} function a () {} let u

              o.prototype = t, a.prototype = t.subs; const c = new o

              for (u in c.subs = new a, c.subsText = {}, c.buf = '', r = r || {}, c.stackSubs = r, c.subsText = s, e)r[u] || (r[u] = e[u]); for (u in r)c.subs[u] = r[u]; for (u in i = i || {}, c.stackPartials = i, n)i[u] || (i[u] = n[u]); for (u in i)c.partials[u] = i[u]; return c}(r, n.subs, n.partials, this.stackSubs, this.stackPartials, e.stackText)} return this.partials[t].instance = r, r},
          rp: function (t, e, n, r) {const i = this.ep(t, n)

            return i ? i.ri(e, n, r) : ''},
          rs: function (t, e, n) {const r = t[t.length - 1]

            if (c(r)) for (let i = 0; i < r.length; i++)t.push(r[i]), n(t, e, this), t.pop(); else n(t, e, this)},
          s: function (t, e, n, r, i, s, o) {let a

            return (!c(t) || 0 !== t.length) && ('function' === typeof t && (t = this.ms(t, e, n, r, i, s, o)), a = !!t, !r && a && e && e.push('object' === typeof t ? t : e[e.length - 1]), a)},
          d: function (t, n, r, i) {let s; const o = t.split('.'); let a = this.f(o[0], n, r, i); const u = this.options.modelGet; let l = null

            if ('.' === t && c(n[n.length - 2]))a = n[n.length - 1]; else for (let h = 1; h < o.length; h++) void 0 !== (s = e(o[h], a, u)) ? (l = a, a = s) : a = ''; return !(i && !a) && (i || 'function' !== typeof a || (n.push(l), a = this.mv(a, n, r), n.pop()), a)},
          f: function (t, n, r, i) {for (var s = !1, o = !1, a = this.options.modelGet, u = n.length - 1; u >= 0; u--) if (void 0 !== (s = e(t, n[u], a))) {o = !0; break} return o ? (i || 'function' !== typeof s || (s = this.mv(s, n, r)), s) : !i && ''},
          ls: function (t, e, n, r, i) {const s = this.options.delimiters

            return this.options.delimiters = i, this.b(this.ct(u(t.call(e, r)), e, n)), this.options.delimiters = s, !1},
          ct: function (t, e, n) {if (this.options.disableLambda) throw new Error('Lambda features disabled.'); return this.c.compile(t, this.options).render(e, n)},
          b: function (t) {this.buf += t},
          fl: function () {const t = this.buf

            return this.buf = '', t},
          ms: function (t, e, n, r, i, s, o) {let a; const u = e[e.length - 1]; const c = t.call(u)

            return 'function' === typeof c ? !!r || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, a.substring(i, s), o)) : c},
          mv: function (t, e, n) {const r = e[e.length - 1]; const i = t.call(r)

            return 'function' === typeof i ? this.ct(u(i.call(r)), r, n) : i},
          sub: function (t, e, n, r) {const i = this.subs[t]

            i && (this.activeSub = t, i(e, n, this, r), this.activeSub = !1)}
        }; var n = /&/g; var r = /</g; var i = />/g; var s = /\'/g; var o = /\"/g; var a = /[&<>\"\']/

        function u (t) {return String(null == t ? '' : t)} var c = Array.isArray || function (t) {return '[object Array]' === Object.prototype.toString.call(t)}}(e)}, function (t, e, n) {'use strict'; const r = n(30); const i = n(41)

          t.exports = i(r, '(lite) ')}, function (t, e, n) {t.exports = u; const r = n(5); const i = n(31); const s = n(32); const o = n(38); const a = Object({
          NODE_ENV: 'production'
        }).RESET_APP_DATA_TIMER && parseInt(Object({
          NODE_ENV: 'production'
        }).RESET_APP_DATA_TIMER, 10) || 12e4

        function u (t, e, i) {const s = n(8)('algoliasearch'); const o = n(3); const a = n(6); const u = n(7); const l = 'Usage: algoliasearch(applicationID, apiKey, opts)'

          if (!0 !== i._allowEmptyCredentials && !t) throw new r.AlgoliaSearchError('Please provide an application ID. ' + l); if (!0 !== i._allowEmptyCredentials && !e) throw new r.AlgoliaSearchError('Please provide an API key. ' + l); this.applicationID = t, this.apiKey = e, this.hosts = {
            read: [],
            write: []
          }, i = i || {}, this._timeouts = i.timeouts || {
            connect: 1e3,
            read: 2e3,
            write: 3e4
          }, i.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = i.timeout); let h = i.protocol || 'https:'

          if (/:$/.test(h) || (h += ':'), 'http:' !== h && 'https:' !== h) throw new r.AlgoliaSearchError('protocol must be `http:` or `https:` (was `' + i.protocol + '`)'); if (this._checkAppIdData(), i.hosts)a(i.hosts) ? (this.hosts.read = o(i.hosts), this.hosts.write = o(i.hosts)) : (this.hosts.read = o(i.hosts.read), this.hosts.write = o(i.hosts.write)); else {const p = u(this._shuffleResult, (function (e) {return t + '-' + e + '.algolianet.com'})); const f = (!1 === i.dsn ? '' : '-dsn') + '.algolia.net'

            this.hosts.read = [this.applicationID + f].concat(p), this.hosts.write = [this.applicationID + '.algolia.net'].concat(p)} this.hosts.read = u(this.hosts.read, c(h)), this.hosts.write = u(this.hosts.write, c(h)), this.extraHeaders = {}, this.cache = i._cache || {}, this._ua = i._ua, this._useCache = !(void 0 !== i._useCache && !i._cache) || i._useCache, this._useRequestCache = this._useCache && i._useRequestCache, this._useFallback = void 0 === i.useFallback || i.useFallback, this._setTimeout = i._setTimeout, s('init done, %j', this)} function c (t) {return function (e) {return t + '//' + e.toLowerCase()}} function l (t) {if (void 0 === Array.prototype.toJSON) return JSON.stringify(t); const e = Array.prototype.toJSON

          delete Array.prototype.toJSON; const n = JSON.stringify(t)

          return Array.prototype.toJSON = e, n} function h (t) {const e = {}

          for (const n in t) {var r

            Object.prototype.hasOwnProperty.call(t, n) && (r = 'x-algolia-api-key' === n || 'x-algolia-application-id' === n ? '**hidden for security purposes**' : t[n], e[n] = r)} return e}u.prototype.initIndex = function (t) {return new s(this, t)}, u.prototype.setExtraHeader = function (t, e) {this.extraHeaders[t.toLowerCase()] = e}, u.prototype.getExtraHeader = function (t) {return this.extraHeaders[t.toLowerCase()]}, u.prototype.unsetExtraHeader = function (t) {delete this.extraHeaders[t.toLowerCase()]}, u.prototype.addAlgoliaAgent = function (t) {-1 === this._ua.indexOf(';' + t) && (this._ua += ';' + t)}, u.prototype._jsonRequest = function (t) {this._checkAppIdData(); let e; let s; let o; const a = n(8)('algoliasearch:' + t.url); const u = t.additionalUA || ''; const c = t.cache; const p = this; let f = 0; let d = !1; const g = p._useFallback && p._request.fallback && t.fallback

          this.apiKey.length > 500 && void 0 !== t.body && (void 0 !== t.body.params || void 0 !== t.body.requests) ? (t.body.apiKey = this.apiKey, o = this._computeRequestHeaders({
            additionalUA: u,
            withApiKey: !1,
            headers: t.headers
          })) : o = this._computeRequestHeaders({
            additionalUA: u,
            headers: t.headers
          }), void 0 !== t.body && (e = l(t.body)), a('request start'); const m = []

          function v (t, e, n) {return p._useCache && t && e && void 0 !== e[n]} function y (e, n) {if (v(p._useRequestCache, c, s) && e.catch((function () {delete c[s]})), 'function' !== typeof t.callback) return e.then(n); e.then((function (e) {i((function () {t.callback(null, n(e))}), p._setTimeout || setTimeout)}), (function (e) {i((function () {t.callback(e)}), p._setTimeout || setTimeout)}))} if (p._useCache && p._useRequestCache && (s = t.url), p._useCache && p._useRequestCache && e && (s += '_body_' + e), v(p._useRequestCache, c, s)) {a('serving request from cache'); const b = c[s]

            return y('function' !== typeof b.then ? p._promise.resolve({
              responseText: b
            }) : b, (function (t) {return JSON.parse(t.responseText)}))} const w = function n (i, y) {p._checkAppIdData(); const b = new Date

            if (p._useCache && !p._useRequestCache && (s = t.url), p._useCache && !p._useRequestCache && e && (s += '_body_' + y.body), v(!p._useRequestCache, c, s)) {a('serving response from cache'); const w = c[s]

              return p._promise.resolve({
                body: JSON.parse(w),
                responseText: w
              })} if (f >= p.hosts[t.hostType].length) return !g || d ? (a('could not get any response'), p._promise.reject(new r.AlgoliaSearchError('Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: ' + p.applicationID, {
              debugData: m
            }))) : (a('switching to fallback'), f = 0, y.method = t.fallback.method, y.url = t.fallback.url, y.jsonBody = t.fallback.body, y.jsonBody && (y.body = l(y.jsonBody)), o = p._computeRequestHeaders({
              additionalUA: u,
              headers: t.headers
            }), y.timeouts = p._getTimeoutsForRequest(t.hostType), p._setHostIndexByType(0, t.hostType), d = !0, n(p._request.fallback, y)); const _ = p._getHostByType(t.hostType); const x = _ + y.url; const S = {
              body: y.body,
              jsonBody: y.jsonBody,
              method: y.method,
              headers: o,
              timeouts: y.timeouts,
              debug: a,
              forceAuthHeaders: y.forceAuthHeaders
            }

            return a('method: %s, url: %s, headers: %j, timeouts: %d', S.method, x, S.headers, S.timeouts), i === p._request.fallback && a('using fallback'), i.call(p, x, S).then((function (t) {const n = t && t.body && t.body.message && t.body.status || t.statusCode || t && t.body && 200

              a('received response: statusCode: %s, computed statusCode: %d, headers: %j', t.statusCode, n, t.headers); const i = 2 === Math.floor(n / 100); const u = new Date

              if (m.push({
                currentHost: _,
                headers: h(o),
                content: e || null,
                contentLength: void 0 !== e ? e.length : null,
                method: y.method,
                timeouts: y.timeouts,
                url: y.url,
                startTime: b,
                endTime: u,
                duration: u - b,
                statusCode: n
              }), i) return p._useCache && !p._useRequestCache && c && (c[s] = t.responseText), {
                responseText: t.responseText,
                body: t.body
              }; if (4 !== Math.floor(n / 100)) return f += 1, C(); a('unrecoverable error'); const l = new r.AlgoliaSearchError(t.body && t.body.message, {
                debugData: m,
                statusCode: n
              })

              return p._promise.reject(l)}), (function (s) {a('error: %s, stack: %s', s.message, s.stack); const u = new Date

              return m.push({
                currentHost: _,
                headers: h(o),
                content: e || null,
                contentLength: void 0 !== e ? e.length : null,
                method: y.method,
                timeouts: y.timeouts,
                url: y.url,
                startTime: b,
                endTime: u,
                duration: u - b
              }), s instanceof r.AlgoliaSearchError || (s = new r.Unknown(s && s.message, s)), f += 1, s instanceof r.Unknown || s instanceof r.UnparsableJSON || f >= p.hosts[t.hostType].length && (d || !g) ? (s.debugData = m, p._promise.reject(s)) : s instanceof r.RequestTimeout ? (a('retrying request with higher timeout'), p._incrementHostIndex(t.hostType), p._incrementTimeoutMultipler(), y.timeouts = p._getTimeoutsForRequest(t.hostType), n(i, y)) : C()})); function C () {return a('retrying request'), p._incrementHostIndex(t.hostType), n(i, y)}}(p._request, {
            url: t.url,
            method: t.method,
            body: e,
            jsonBody: t.body,
            timeouts: p._getTimeoutsForRequest(t.hostType),
            forceAuthHeaders: t.forceAuthHeaders
          })

          return p._useCache && p._useRequestCache && c && (c[s] = w), y(w, (function (t) {return t.body}))}, u.prototype._getSearchParams = function (t, e) {if (null == t) return e; for (const n in t)null !== n && void 0 !== t[n] && t.hasOwnProperty(n) && (e += '' === e ? '' : '&', e += n + '=' + encodeURIComponent('[object Array]' === Object.prototype.toString.call(t[n]) ? l(t[n]) : t[n])); return e}, u.prototype._computeRequestHeaders = function (t) {const e = n(2); const r = {
          'x-algolia-agent': t.additionalUA ? this._ua + ';' + t.additionalUA : this._ua,
          'x-algolia-application-id': this.applicationID
        }

        return !1 !== t.withApiKey && (r['x-algolia-api-key'] = this.apiKey), this.userToken && (r['x-algolia-usertoken'] = this.userToken), this.securityTags && (r['x-algolia-tagfilters'] = this.securityTags), e(this.extraHeaders, (function (t, e) {r[e] = t})), t.headers && e(t.headers, (function (t, e) {r[e] = t})), r}, u.prototype.search = function (t, e, r) {const i = n(6); const s = n(7)

          if (!i(t)) throw new Error('Usage: client.search(arrayOfQueries[, callback])'); 'function' === typeof e ? (r = e, e = {}) : void 0 === e && (e = {}); const o = this; const a = {
            requests: s(t, (function (t) {let e = ''

              return void 0 !== t.query && (e += 'query=' + encodeURIComponent(t.query)), {
                indexName: t.indexName,
                params: o._getSearchParams(t.params, e)
              }}))
          }; const u = s(a.requests, (function (t, e) {return e + '=' + encodeURIComponent('/1/indexes/' + encodeURIComponent(t.indexName) + '?' + t.params)})).join('&')

          return void 0 !== e.strategy && (a.strategy = e.strategy), this._jsonRequest({
            cache: this.cache,
            method: 'POST',
            url: '/1/indexes/*/queries',
            body: a,
            hostType: 'read',
            fallback: {
              method: 'GET',
              url: '/1/indexes/*',
              body: {
                params: u
              }
            },
            callback: r
          })}, u.prototype.searchForFacetValues = function (t) {const e = n(6); const r = n(7); const i = 'Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])'

          if (!e(t)) throw new Error(i); const s = this

          return s._promise.all(r(t, (function (t) {if (!t || void 0 === t.indexName || void 0 === t.params.facetName || void 0 === t.params.facetQuery) throw new Error(i); const e = n(3); const r = n(14); const o = t.indexName; const a = t.params; const u = a.facetName; const c = r(e(a), (function (t) {return 'facetName' === t})); const l = s._getSearchParams(c, '')

            return s._jsonRequest({
              cache: s.cache,
              method: 'POST',
              url: '/1/indexes/' + encodeURIComponent(o) + '/facets/' + encodeURIComponent(u) + '/query',
              hostType: 'read',
              body: {
                params: l
              }
            })})))}, u.prototype.setSecurityTags = function (t) {if ('[object Array]' === Object.prototype.toString.call(t)) {for (var e = [], n = 0; n < t.length; ++n) if ('[object Array]' === Object.prototype.toString.call(t[n])) {for (var r = [], i = 0; i < t[n].length; ++i)r.push(t[n][i]); e.push('(' + r.join(',') + ')')} else e.push(t[n]); t = e.join(',')} this.securityTags = t}, u.prototype.setUserToken = function (t) {this.userToken = t}, u.prototype.clearCache = function () {this.cache = {}}, u.prototype.setRequestTimeout = function (t) {t && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = t)}, u.prototype.setTimeouts = function (t) {this._timeouts = t}, u.prototype.getTimeouts = function () {return this._timeouts}, u.prototype._getAppIdData = function () {const t = o.get(this.applicationID)

          return null !== t && this._cacheAppIdData(t), t}, u.prototype._setAppIdData = function (t) {return t.lastChange = (new Date).getTime(), this._cacheAppIdData(t), o.set(this.applicationID, t)}, u.prototype._checkAppIdData = function () {const t = this._getAppIdData(); const e = (new Date).getTime()

          return null === t || e - t.lastChange > a ? this._resetInitialAppIdData(t) : t}, u.prototype._resetInitialAppIdData = function (t) {const e = t || {}

          return e.hostIndexes = {
            read: 0,
            write: 0
          }, e.timeoutMultiplier = 1, e.shuffleResult = e.shuffleResult || function (t) {for (var e, n, r = t.length; 0 !== r;)n = Math.floor(Math.random() * r), e = t[r -= 1], t[r] = t[n], t[n] = e; return t}([1, 2, 3]), this._setAppIdData(e)}, u.prototype._cacheAppIdData = function (t) {this._hostIndexes = t.hostIndexes, this._timeoutMultiplier = t.timeoutMultiplier, this._shuffleResult = t.shuffleResult}, u.prototype._partialAppIdDataUpdate = function (t) {const e = n(2); const r = this._getAppIdData()

          return e(t, (function (t, e) {r[e] = t})), this._setAppIdData(r)}, u.prototype._getHostByType = function (t) {return this.hosts[t][this._getHostIndexByType(t)]}, u.prototype._getTimeoutMultiplier = function () {return this._timeoutMultiplier}, u.prototype._getHostIndexByType = function (t) {return this._hostIndexes[t]}, u.prototype._setHostIndexByType = function (t, e) {const r = n(3)(this._hostIndexes)

          return r[e] = t, this._partialAppIdDataUpdate({
            hostIndexes: r
          }), t}, u.prototype._incrementHostIndex = function (t) {return this._setHostIndexByType((this._getHostIndexByType(t) + 1) % this.hosts[t].length, t)}, u.prototype._incrementTimeoutMultipler = function () {const t = Math.max(this._timeoutMultiplier + 1, 4)

          return this._partialAppIdDataUpdate({
            timeoutMultiplier: t
          })}, u.prototype._getTimeoutsForRequest = function (t) {return {
          connect: this._timeouts.connect * this._timeoutMultiplier,
          complete: this._timeouts[t] * this._timeoutMultiplier
        }}}, function (t, e) {t.exports = function (t, e) {e(t, 0)}}, function (t, e, n) {const r = n(13); const i = n(33); const s = n(34)

          function o (t, e) {this.indexName = e, this.as = t, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}}t.exports = o, o.prototype.clearCache = function () {this.cache = {}}, o.prototype.search = r('query'), o.prototype.similarSearch = r('similarQuery'), o.prototype.browse = function (t, e, r) {let i; let s; const o = n(35); const a = this

            0 === arguments.length || 1 === arguments.length && 'function' === typeof arguments[0] ? (i = 0, r = arguments[0], t = void 0) : 'number' === typeof arguments[0] ? (i = arguments[0], 'number' === typeof arguments[1] ? s = arguments[1] : 'function' === typeof arguments[1] && (r = arguments[1], s = void 0), t = void 0, e = void 0) : 'object' === typeof arguments[0] ? ('function' === typeof arguments[1] && (r = arguments[1]), e = arguments[0], t = void 0) : 'string' === typeof arguments[0] && 'function' === typeof arguments[1] && (r = arguments[1], e = void 0), e = o({}, e || {}, {
              page: i,
              hitsPerPage: s,
              query: t
            }); const u = this.as._getSearchParams(e, '')

            return this.as._jsonRequest({
              method: 'POST',
              url: '/1/indexes/' + encodeURIComponent(a.indexName) + '/browse',
              body: {
                params: u
              },
              hostType: 'read',
              callback: r
            })}, o.prototype.browseFrom = function (t, e) {return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/browse',
            body: {
              cursor: t
            },
            hostType: 'read',
            callback: e
          })}, o.prototype.searchForFacetValues = function (t, e) {const r = n(3); const i = n(14)

            if (void 0 === t.facetName || void 0 === t.facetQuery) throw new Error('Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])'); const s = t.facetName; const o = i(r(t), (function (t) {return 'facetName' === t})); const a = this.as._getSearchParams(o, '')

            return this.as._jsonRequest({
              method: 'POST',
              url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/facets/' + encodeURIComponent(s) + '/query',
              hostType: 'read',
              body: {
                params: a
              },
              callback: e
            })}, o.prototype.searchFacet = i((function (t, e) {return this.searchForFacetValues(t, e)}), s('index.searchFacet(params[, callback])', 'index.searchForFacetValues(params[, callback])')), o.prototype._search = function (t, e, n, r) {return this.as._jsonRequest({
            cache: this.cache,
            method: 'POST',
            url: e || '/1/indexes/' + encodeURIComponent(this.indexName) + '/query',
            body: {
              params: t
            },
            hostType: 'read',
            fallback: {
              method: 'GET',
              url: '/1/indexes/' + encodeURIComponent(this.indexName),
              body: {
                params: t
              }
            },
            callback: n,
            additionalUA: r
          })}, o.prototype.getObject = function (t, e, n) {const r = this

            1 !== arguments.length && 'function' !== typeof e || (n = e, e = void 0); let i = ''

            if (void 0 !== e) {i = '?attributes='; for (let s = 0; s < e.length; ++s)0 !== s && (i += ','), i += e[s]} return this.as._jsonRequest({
              method: 'GET',
              url: '/1/indexes/' + encodeURIComponent(r.indexName) + '/' + encodeURIComponent(t) + i,
              hostType: 'read',
              callback: n
            })}, o.prototype.getObjects = function (t, e, r) {const i = n(6); const s = n(7); const o = 'Usage: index.getObjects(arrayOfObjectIDs[, callback])'

            if (!i(t)) throw new Error(o); const a = this

            1 !== arguments.length && 'function' !== typeof e || (r = e, e = void 0); const u = {
              requests: s(t, (function (t) {const n = {
                indexName: a.indexName,
                objectID: t
              }

              return e && (n.attributesToRetrieve = e.join(',')), n}))
            }

            return this.as._jsonRequest({
              method: 'POST',
              url: '/1/indexes/*/objects',
              hostType: 'read',
              body: u,
              callback: r
            })}, o.prototype.as = null, o.prototype.indexName = null, o.prototype.typeAheadArgs = null, o.prototype.typeAheadValueOption = null}, function (t, e) {t.exports = function (t, e) {let n = !1

          return function () {return n || (console.warn(e), n = !0), t.apply(this, arguments)}}}, function (t, e) {t.exports = function (t, e) {const n = t.toLowerCase().replace(/[\.\(\)]/g, '')

          return 'algoliasearch: `' + t + '` was replaced by `' + e + '`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#' + n}}, function (t, e, n) {const r = n(2)

          t.exports = function t (e) {const n = Array.prototype.slice.call(arguments)

            return r(n, (function (n) {for (const r in n)n.hasOwnProperty(r) && ('object' === typeof e[r] && 'object' === typeof n[r] ? e[r] = t({}, e[r], n[r]) : void 0 !== n[r] && (e[r] = n[r]))})), e}}, function (t, e, n) {'use strict'; const r = Object.prototype.hasOwnProperty; const i = Object.prototype.toString; const s = Array.prototype.slice; const o = n(37); const a = Object.prototype.propertyIsEnumerable; const u = !a.call({
          toString: null
        }, 'toString'); const c = a.call((function () {}), 'prototype'); const l = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']; const h = function (t) {const e = t.constructor

          return e && e.prototype === t}; const p = {
          $applicationCache: !0,
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0
        }; const f = function () {if ('undefined' === typeof window) return !1; for (const t in window) try {if (!p['$' + t] && r.call(window, t) && null !== window[t] && 'object' === typeof window[t]) try {h(window[t])} catch (t) {return !0}} catch (t) {return !0} return !1}(); const d = function (t) {const e = null !== t && 'object' === typeof t; const n = '[object Function]' === i.call(t); const s = o(t); const a = e && '[object String]' === i.call(t); const p = []

          if (!e && !n && !s) throw new TypeError('Object.keys called on a non-object'); const d = c && n

          if (a && t.length > 0 && !r.call(t, 0)) for (let g = 0; g < t.length; ++g)p.push(String(g)); if (s && t.length > 0) for (let m = 0; m < t.length; ++m)p.push(String(m)); else for (const v in t)d && 'prototype' === v || !r.call(t, v) || p.push(String(v)); if (u) for (let y = function (t) {if ('undefined' === typeof window || !f) return h(t); try {return h(t)} catch (t) {return !1}}(t), b = 0; b < l.length; ++b)y && 'constructor' === l[b] || !r.call(t, l[b]) || p.push(l[b]); return p}

        d.shim = function () {if (Object.keys) {if (!function () {return 2 === (Object.keys(arguments) || '').length}(1, 2)) {const t = Object.keys

          Object.keys = function (e) {return o(e) ? t(s.call(e)) : t(e)}}} else Object.keys = d; return Object.keys || d}, t.exports = d}, function (t, e, n) {'use strict'; const r = Object.prototype.toString

          t.exports = function (t) {const e = r.call(t); let n = '[object Arguments]' === e

            return n || (n = '[object Array]' !== e && null !== t && 'object' === typeof t && 'number' === typeof t.length && t.length >= 0 && '[object Function]' === r.call(t.callee)), n}}, function (t, e, n) {(function (e) {let r; const i = n(8)('algoliasearch:src/hostIndexState.js'); const s = {
          state: {},
          set: function (t, e) {return this.state[t] = e, this.state[t]},
          get: function (t) {return this.state[t] || null}
        }; const o = {
          set: function (t, n) {s.set(t, n); try {const r = JSON.parse(e.localStorage['algoliasearch-client-js'])

            return r[t] = n, e.localStorage['algoliasearch-client-js'] = JSON.stringify(r), r[t]} catch (e) {return a(t, e)}},
          get: function (t) {try {return JSON.parse(e.localStorage['algoliasearch-client-js'])[t] || null} catch (e) {return a(t, e)}}
        }

        function a (t, n) {return i('localStorage failed with', n), function () {try {e.localStorage.removeItem('algoliasearch-client-js')} catch (t) {}}(), (r = s).get(t)} function u (t, e) {return 1 === arguments.length ? r.get(t) : r.set(t, e)} function c () {try {return 'localStorage' in e && null !== e.localStorage && (e.localStorage['algoliasearch-client-js'] || e.localStorage.setItem('algoliasearch-client-js', JSON.stringify({})), !0)} catch (t) {return !1}}r = c() ? o : s, t.exports = {
          get: u,
          set: u,
          supportsLocalStorage: c
        }}).call(e, n(4))}, function (t, e, n) {let r

          function i (t) {function n () {if (n.enabled) {const t = n; const i = +new Date; const s = i - (r || i)

            t.diff = s, t.prev = r, t.curr = i, r = i; for (var o = new Array(arguments.length), a = 0; a < o.length; a++)o[a] = arguments[a]; o[0] = e.coerce(o[0]), 'string' !== typeof o[0] && o.unshift('%O'); let u = 0

            o[0] = o[0].replace(/%([a-zA-Z%])/g, (function (n, r) {if ('%%' === n) return n; u++; const i = e.formatters[r]

              if ('function' === typeof i) {const s = o[u]

                n = i.call(t, s), o.splice(u, 1), u--} return n})), e.formatArgs.call(t, o); const c = n.log || e.log || console.log.bind(console)

            c.apply(t, o)}} return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = function (t) {let n; let r = 0

            for (n in t)r = (r << 5) - r + t.charCodeAt(n), r |= 0; return e.colors[Math.abs(r) % e.colors.length]}(t), 'function' === typeof e.init && e.init(n), n}(e = t.exports = i.debug = i.default = i).coerce = function (t) {return t instanceof Error ? t.stack || t.message : t}, e.disable = function () {e.enable('')}, e.enable = function (t) {e.save(t), e.names = [], e.skips = []; for (let n = ('string' === typeof t ? t : '').split(/[\s,]+/), r = n.length, i = 0; i < r; i++)n[i] && ('-' === (t = n[i].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + t.substr(1) + '$')) : e.names.push(new RegExp('^' + t + '$')))}, e.enabled = function (t) {let n; let r

            for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1; for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0; return !1}, e.humanize = n(40), e.names = [], e.skips = [], e.formatters = {}}, function (t, e) {const n = 1e3; const r = 6e4; const i = 60 * r; const s = 24 * i

          function o (t, e, n) {if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + ' ' + n : Math.ceil(t / e) + ' ' + n + 's'}t.exports = function (t, e) {e = e || {}; let a; const u = typeof t

            if ('string' === u && t.length > 0) return function (t) {if (!((t = String(t)).length > 100)) {const e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t)

              if (e) {const o = parseFloat(e[1])

                switch ((e[2] || 'ms').toLowerCase()) {case 'years':case 'year':case 'yrs':case 'yr':case 'y':return 315576e5 * o; case 'days':case 'day':case 'd':return o * s; case 'hours':case 'hour':case 'hrs':case 'hr':case 'h':return o * i; case 'minutes':case 'minute':case 'mins':case 'min':case 'm':return o * r; case 'seconds':case 'second':case 'secs':case 'sec':case 's':return o * n; case 'milliseconds':case 'millisecond':case 'msecs':case 'msec':case 'ms':return o; default:return}}}}(t); if ('number' === u && !1 === isNaN(t)) return e.long ? o(a = t, s, 'day') || o(a, i, 'hour') || o(a, r, 'minute') || o(a, n, 'second') || a + ' ms' : function (t) {return t >= s ? Math.round(t / s) + 'd' : t >= i ? Math.round(t / i) + 'h' : t >= r ? Math.round(t / r) + 'm' : t >= n ? Math.round(t / n) + 's' : t + 'ms'}(t); throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(t))}}, function (t, e, n) {'use strict'; const r = n(42); const i = r.Promise || n(43).Promise

          t.exports = function (t, e) {const s = n(12); const o = n(5); const a = n(44); const u = n(46); const c = n(47)

            function l (t, e, r) {return (r = n(3)(r || {}))._ua = r._ua || l.ua, new p(t, e, r)}e = e || '', l.version = n(48), l.ua = 'Algolia for vanilla JavaScript ' + e + l.version, l.initPlaces = c(l), r.__algolia = {
              debug: n(8),
              algoliasearch: l
            }; const h = {
              hasXMLHttpRequest: 'XMLHttpRequest' in r,
              hasXDomainRequest: 'XDomainRequest' in r
            }

            function p () {t.apply(this, arguments)} return h.hasXMLHttpRequest && (h.cors = 'withCredentials' in new XMLHttpRequest), s(p, t), p.prototype._request = function (t, e) {return new i((function (n, r) {if (h.cors || h.hasXDomainRequest) {t = a(t, e.headers); var i; var s; const u = e.body; var c = h.cors ? new XMLHttpRequest : new XDomainRequest; var l = !1

              i = setTimeout(p, e.timeouts.connect), c.onprogress = function () {l || f()}, 'onreadystatechange' in c && (c.onreadystatechange = function () {!l && c.readyState > 1 && f()}), c.onload = function () {if (!s) {let t

                clearTimeout(i); try {t = {
                  body: JSON.parse(c.responseText),
                  responseText: c.responseText,
                  statusCode: c.status,
                  headers: c.getAllResponseHeaders && c.getAllResponseHeaders() || {}
                }} catch (e) {t = new o.UnparsableJSON({
                  more: c.responseText
                })}t instanceof o.UnparsableJSON ? r(t) : n(t)}}, c.onerror = function (t) {s || (clearTimeout(i), r(new o.Network({
                more: t
              })))}, c instanceof XMLHttpRequest ? (c.open(e.method, t, !0), e.forceAuthHeaders && (c.setRequestHeader('x-algolia-application-id', e.headers['x-algolia-application-id']), c.setRequestHeader('x-algolia-api-key', e.headers['x-algolia-api-key']))) : c.open(e.method, t), h.cors && (u && ('POST' === e.method ? c.setRequestHeader('content-type', 'application/x-www-form-urlencoded') : c.setRequestHeader('content-type', 'application/json')), c.setRequestHeader('accept', 'application/json')), u ? c.send(u) : c.send()} else r(new o.Network('CORS not supported')); function p () {s = !0, c.abort(), r(new o.RequestTimeout)} function f () {l = !0, clearTimeout(i), i = setTimeout(p, e.timeouts.complete)}}))}, p.prototype._request.fallback = function (t, e) {return t = a(t, e.headers), new i((function (n, r) {u(t, e, (function (t, e) {t ? r(t) : n(e)}))}))}, p.prototype._promise = {
              reject: function (t) {return i.reject(t)},
              resolve: function (t) {return i.resolve(t)},
              delay: function (t) {return new i((function (e) {setTimeout(e, t)}))},
              all: function (t) {return i.all(t)}
            }, l}}, function (t, e, n) {(function (e) {let n

          n = 'undefined' !== typeof window ? window : void 0 !== e ? e : 'undefined' !== typeof self ? self : {}, t.exports = n}).call(e, n(4))}, function (t, e, n) {(function (e, n) {let r

          r = function () {'use strict'; function t (t) {return 'function' === typeof t} const r = Array.isArray ? Array.isArray : function (t) {return '[object Array]' === Object.prototype.toString.call(t)}; let i = 0; let s = void 0; let o = void 0; let a = function (t, e) {d[i] = t, d[i + 1] = e, 2 === (i += 2) && (o ? o(g) : w())}; const u = 'undefined' !== typeof window ? window : void 0; const c = u || {}; const l = c.MutationObserver || c.WebKitMutationObserver; const h = 'undefined' === typeof self && void 0 !== e && '[object process]' === {}.toString.call(e); const p = 'undefined' !== typeof Uint8ClampedArray && 'undefined' !== typeof importScripts && 'undefined' !== typeof MessageChannel

            function f () {const t = setTimeout

              return function () {return t(g, 1)}} var d = new Array(1e3)

            function g () {for (let t = 0; t < i; t += 2)(0, d[t])(d[t + 1]), d[t] = void 0, d[t + 1] = void 0; i = 0} let m; let v; let y; let b; var w = void 0

            function _ (t, e) {const n = this; const r = new this.constructor(C)

              void 0 === r[S] && P(r); const i = n._state

              if (i) {const s = arguments[i - 1]

                a((function () {return D(i, r, s, n._result)}))} else j(n, r, t, e); return r} function x (t) {if (t && 'object' === typeof t && t.constructor === this) return t; const e = new this(C)

              return E(e, t), e}h ? w = function () {return e.nextTick(g)} : l ? (v = 0, y = new l(g), b = document.createTextNode(''), y.observe(b, {
              characterData: !0
            }), w = function () {b.data = v = ++v % 2}) : p ? ((m = new MessageChannel).port1.onmessage = g, w = function () {return m.port2.postMessage(0)}) : w = void 0 === u ? function () {try {const t = Function('return this')().require('vertx')

              return void 0 !== (s = t.runOnLoop || t.runOnContext) ? function () {s(g)} : f()} catch (t) {return f()}}() : f(); var S = Math.random().toString(36).substring(2)

            function C () {} const A = {
              error: null
            }

            function T (t) {try {return t.then} catch (t) {return A.error = t, A}} function O (e, n, r) {n.constructor === e.constructor && r === _ && n.constructor.resolve === x ? function (t, e) {1 === e._state ? N(t, e._result) : 2 === e._state ? I(t, e._result) : j(e, void 0, (function (e) {return E(t, e)}), (function (e) {return I(t, e)}))}(e, n) : r === A ? (I(e, A.error), A.error = null) : void 0 === r ? N(e, n) : t(r) ? function (t, e, n) {a((function (t) {let r = !1; const i = function (t, e, n, r) {try {t.call(e, n, r)} catch (t) {return t}}(n, e, (function (n) {r || (r = !0, e !== n ? E(t, n) : N(t, n))}), (function (e) {r || (r = !0, I(t, e))}), t._label)

              !r && i && (r = !0, I(t, i))}), t)}(e, n, r) : N(e, n)} function E (t, e) {let n; let r

              t === e ? I(t, new TypeError('You cannot resolve a promise with itself')) : (r = typeof(n = e), null === n || 'object' !== r && 'function' !== r ? N(t, e) : O(t, e, T(e)))} function k (t) {t._onerror && t._onerror(t._result), R(t)} function N (t, e) {void 0 === t._state && (t._result = e, t._state = 1, 0 !== t._subscribers.length && a(R, t))} function I (t, e) {void 0 === t._state && (t._state = 2, t._result = e, a(k, t))} function j (t, e, n, r) {const i = t._subscribers; const s = i.length

              t._onerror = null, i[s] = e, i[s + 1] = n, i[s + 2] = r, 0 === s && t._state && a(R, t)} function R (t) {const e = t._subscribers; const n = t._state

              if (0 !== e.length) {for (let r = void 0, i = void 0, s = t._result, o = 0; o < e.length; o += 3)r = e[o], i = e[o + n], r ? D(n, r, i, s) : i(s); t._subscribers.length = 0}} function D (e, n, r, i) {const s = t(r); let o = void 0; let a = void 0; let u = void 0; let c = void 0

              if (s) {if ((o = function (t, e) {try {return t(e)} catch (t) {return A.error = t, A}}(r, i)) === A ? (c = !0, a = o.error, o.error = null) : u = !0, n === o) return void I(n, new TypeError('A promises callback cannot return that same promise.'))} else o = i, u = !0; void 0 !== n._state || (s && u ? E(n, o) : c ? I(n, a) : 1 === e ? N(n, o) : 2 === e && I(n, o))} let $ = 0

            function P (t) {t[S] = $++, t._state = void 0, t._result = void 0, t._subscribers = []} const q = function () {function t (t, e) {this._instanceConstructor = t, this.promise = new t(C), this.promise[S] || P(this.promise), r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? N(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && N(this.promise, this._result))) : I(this.promise, new Error('Array Methods must be provided an Array'))} return t.prototype._enumerate = function (t) {for (let e = 0; void 0 === this._state && e < t.length; e++) this._eachEntry(t[e], e)}, t.prototype._eachEntry = function (t, e) {const n = this._instanceConstructor; const r = n.resolve

              if (r === x) {const i = T(t)

                if (i === _ && void 0 !== t._state) this._settledAt(t._state, e, t._result); else if ('function' !== typeof i) this._remaining--, this._result[e] = t; else if (n === L) {const s = new n(C)

                  O(s, t, i), this._willSettleAt(s, e)} else this._willSettleAt(new n((function (e) {return e(t)})), e)} else this._willSettleAt(r(t), e)}, t.prototype._settledAt = function (t, e, n) {const r = this.promise

              void 0 === r._state && (this._remaining--, 2 === t ? I(r, n) : this._result[e] = n), 0 === this._remaining && N(r, this._result)}, t.prototype._willSettleAt = function (t, e) {const n = this

              j(t, void 0, (function (t) {return n._settledAt(1, e, t)}), (function (t) {return n._settledAt(2, e, t)}))}, t}(); var L = function () {function t (e) {this[S] = $++, this._result = this._state = void 0, this._subscribers = [], C !== e && ('function' !== typeof e && function () {throw new TypeError('You must pass a resolver function as the first argument to the promise constructor')}(), this instanceof t ? function (t, e) {try {e((function (e) {E(t, e)}), (function (e) {I(t, e)}))} catch (e) {I(t, e)}}(this, e) : function () {throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.')}())} return t.prototype.catch = function (t) {return this.then(null, t)}, t.prototype.finally = function (t) {const e = this.constructor

              return this.then((function (n) {return e.resolve(t()).then((function () {return n}))}), (function (n) {return e.resolve(t()).then((function () {throw n}))}))}, t}()

            return L.prototype.then = _, L.all = function (t) {return new q(this, t).promise}, L.race = function (t) {const e = this

              return r(t) ? new e((function (n, r) {for (let i = t.length, s = 0; s < i; s++)e.resolve(t[s]).then(n, r)})) : new e((function (t, e) {return e(new TypeError('You must pass an array to race.'))}))}, L.resolve = x, L.reject = function (t) {const e = new this(C)

              return I(e, t), e}, L._setScheduler = function (t) {o = t}, L._setAsap = function (t) {a = t}, L._asap = a, L.polyfill = function () {let t = void 0

              if (void 0 !== n)t = n; else if ('undefined' !== typeof self)t = self; else try {t = Function('return this')()} catch (t) {throw new Error('polyfill failed because global object is unavailable in this environment')} const e = t.Promise

              if (e) {let r = null

                try {r = Object.prototype.toString.call(e.resolve())} catch (t) {} if ('[object Promise]' === r && !e.cast) return}t.Promise = L}, L.Promise = L, L}, t.exports = r()}).call(e, n(9), n(4))}, function (t, e, n) {'use strict'; t.exports = function (t, e) {return /\?/.test(t) ? t += '&' : t += '?', t + r(e)}; var r = n(45)}, function (t, e, n) {'use strict'; const r = function (t) {switch (typeof t) {case 'string':return t; case 'boolean':return t ? 'true' : 'false'; case 'number':return isFinite(t) ? t : ''; default:return ''}}

          t.exports = function (t, e, n, a) {return e = e || '&', n = n || '=', null === t && (t = void 0), 'object' === typeof t ? s(o(t), (function (o) {const a = encodeURIComponent(r(o)) + n

            return i(t[o]) ? s(t[o], (function (t) {return a + encodeURIComponent(r(t))})).join(e) : a + encodeURIComponent(r(t[o]))})).join(e) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(t)) : ''}; var i = Array.isArray || function (t) {return '[object Array]' === Object.prototype.toString.call(t)}

          function s (t, e) {if (t.map) return t.map(e); for (var n = [], r = 0; r < t.length; r++)n.push(e(t[r], r)); return n} var o = Object.keys || function (t) {const e = []

            for (const n in t)Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e}}, function (t, e, n) {'use strict'; t.exports = function (t, e, n) {if ('GET' === e.method) {e.debug('JSONP: start'); var s = !1; var o = !1

          i += 1; var a = document.getElementsByTagName('head')[0]; var u = document.createElement('script'); const c = 'algoliaJSONP_' + i; var l = !1

          window[c] = function (t) {!function () {try {delete window[c], delete window[c + '_loaded']} catch (t) {window[c] = window[c + '_loaded'] = void 0}}(), o ? e.debug('JSONP: Late answer, ignoring') : (s = !0, f(), n(null, {
            body: t,
            responseText: JSON.stringify(t)
          }))}, t += '&callback=' + c, e.jsonBody && e.jsonBody.params && (t += '&' + e.jsonBody.params); var h = setTimeout((function () {e.debug('JSONP: Script timeout'), o = !0, f(), n(new r.RequestTimeout)}), e.timeouts.complete)

          u.onreadystatechange = function () {'loaded' !== this.readyState && 'complete' !== this.readyState || p()}, u.onload = p, u.onerror = function () {e.debug('JSONP: Script error'), l || o || (f(), n(new r.JSONPScriptError))}, u.async = !0, u.defer = !0, u.src = t, a.appendChild(u)} else n(new Error('Method ' + e.method + ' ' + t + ' is not supported by JSONP.')); function p () {e.debug('JSONP: success'), l || o || (l = !0, s || (e.debug('JSONP: Fail. Script loaded but did not call the callback'), f(), n(new r.JSONPScriptFail)))} function f () {clearTimeout(h), u.onload = null, u.onreadystatechange = null, u.onerror = null, a.removeChild(u)}}; var r = n(5); var i = 0}, function (t, e, n) {t.exports = function (t) {return function (e, i, s) {const o = n(3);

          (s = s && o(s) || {}).hosts = s.hosts || ['places-dsn.algolia.net', 'places-1.algolianet.com', 'places-2.algolianet.com', 'places-3.algolianet.com'], 0 !== arguments.length && 'object' !== typeof e && void 0 !== e || (e = '', i = '', s._allowEmptyCredentials = !0); const a = t(e, i, s); const u = a.initIndex('places')

          return u.search = r('query', '/1/places/query'), u.getObject = function (t, e) {return this.as._jsonRequest({
            method: 'GET',
            url: '/1/places/' + encodeURIComponent(t),
            hostType: 'read',
            callback: e
          })}, u}}; var r = n(13)}, function (t, e, n) {'use strict'; t.exports = '3.30.0'}, function (t, e, n) {'use strict'; t.exports = n(50)}, function (t, e, n) {'use strict'; const r = n(15)

          n(1).element = r; const i = n(0)

          i.isArray = r.isArray, i.isFunction = r.isFunction, i.isObject = r.isPlainObject, i.bind = r.proxy, i.each = function (t, e) {r.each(t, (function (t, n) {return e(n, t)}))}, i.map = r.map, i.mixin = r.extend, i.Event = r.Event; const s = n(51); const o = n(16)

          function a (t, e, n, a) {n = i.isArray(n) ? n : [].slice.call(arguments, 2); const u = r(t).each((function (t, i) {const u = r(i); const c = new o({
            el: u
          }); const l = a || new s({
            input: u,
            eventBus: c,
            dropdownMenuContainer: e.dropdownMenuContainer,
            hint: void 0 === e.hint || !!e.hint,
            minLength: e.minLength,
            autoselect: e.autoselect,
            autoselectOnBlur: e.autoselectOnBlur,
            tabAutocomplete: e.tabAutocomplete,
            openOnFocus: e.openOnFocus,
            templates: e.templates,
            debug: e.debug,
            clearOnSelected: e.clearOnSelected,
            cssClasses: e.cssClasses,
            datasets: n,
            keyboardShortcuts: e.keyboardShortcuts,
            appendTo: e.appendTo,
            autoWidth: e.autoWidth,
            ariaLabel: e.ariaLabel || i.getAttribute('aria-label')
          })

          u.data('aaAutocomplete', l)}))

          return u.autocomplete = {}, i.each(['open', 'close', 'getVal', 'setVal', 'destroy', 'getWrapper'], (function (t) {u.autocomplete[t] = function () {let e; const n = arguments

            return u.each((function (i, s) {const o = r(s).data('aaAutocomplete')

              e = o[t].apply(o, n)})), e}})), u}a.sources = s.sources, a.escapeHighlightedString = i.escapeHighlightedString; const u = 'autocomplete' in window; const c = window.autocomplete

          a.noConflict = function () {return u ? window.autocomplete = c : delete window.autocomplete, a}, t.exports = a}, function (t, e, n) {'use strict'; const r = n(0); const i = n(1); const s = n(16); const o = n(52); const a = n(59); const u = n(17); const c = n(11)

          function l (t) {let e; let n

            if ((t = t || {}).input || r.error('missing input'), this.isActivated = !1, this.debug = !!t.debug, this.autoselect = !!t.autoselect, this.autoselectOnBlur = !!t.autoselectOnBlur, this.openOnFocus = !!t.openOnFocus, this.minLength = r.isNumber(t.minLength) ? t.minLength : 1, this.autoWidth = void 0 === t.autoWidth || !!t.autoWidth, this.clearOnSelected = !!t.clearOnSelected, this.tabAutocomplete = void 0 === t.tabAutocomplete || !!t.tabAutocomplete, t.hint = !!t.hint, t.hint && t.appendTo) throw new Error('[autocomplete.js] hint and appendTo options can\'t be used at the same time'); this.css = t.css = r.mixin({}, c, t.appendTo ? c.appendTo : {}), this.cssClasses = t.cssClasses = r.mixin({}, c.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix = r.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), this.listboxId = t.listboxId = [this.cssClasses.root, 'listbox', r.getUniqueId()].join('-'); const o = function (t) {let e; let n; let s; let o

              e = i.element(t.input), n = i.element(u.wrapper.replace('%ROOT%', t.cssClasses.root)).css(t.css.wrapper), t.appendTo || 'block' !== e.css('display') || 'table' !== e.parent().css('display') || n.css('display', 'table-cell'); let a; const c = u.dropdown.replace('%PREFIX%', t.cssClasses.prefix).replace('%DROPDOWN_MENU%', t.cssClasses.dropdownMenu)

              s = i.element(c).css(t.css.dropdown).attr({
                role: 'listbox',
                id: t.listboxId
              }), t.templates && t.templates.dropdownMenu && s.html(r.templatify(t.templates.dropdownMenu)()), (o = e.clone().css(t.css.hint).css((a = e, {
                backgroundAttachment: a.css('background-attachment'),
                backgroundClip: a.css('background-clip'),
                backgroundColor: a.css('background-color'),
                backgroundImage: a.css('background-image'),
                backgroundOrigin: a.css('background-origin'),
                backgroundPosition: a.css('background-position'),
                backgroundRepeat: a.css('background-repeat'),
                backgroundSize: a.css('background-size')
              }))).val('').addClass(r.className(t.cssClasses.prefix, t.cssClasses.hint, !0)).removeAttr('id name placeholder required').prop('readonly', !0).attr({
                'aria-hidden': 'true',
                autocomplete: 'off',
                spellcheck: 'false',
                tabindex: -1
              }), o.removeData && o.removeData(), e.data('aaAttrs', {
                'aria-autocomplete': e.attr('aria-autocomplete'),
                'aria-expanded': e.attr('aria-expanded'),
                'aria-owns': e.attr('aria-owns'),
                autocomplete: e.attr('autocomplete'),
                dir: e.attr('dir'),
                role: e.attr('role'),
                spellcheck: e.attr('spellcheck'),
                style: e.attr('style'),
                type: e.attr('type')
              }), e.addClass(r.className(t.cssClasses.prefix, t.cssClasses.input, !0)).attr({
                autocomplete: 'off',
                spellcheck: !1,
                role: 'combobox',
                'aria-autocomplete': t.datasets && t.datasets[0] && t.datasets[0].displayKey ? 'both' : 'list',
                'aria-expanded': 'false',
                'aria-label': t.ariaLabel,
                'aria-owns': t.listboxId
              }).css(t.hint ? t.css.input : t.css.inputWithNoHint); try {e.attr('dir') || e.attr('dir', 'auto')} catch (t) {} return (n = t.appendTo ? n.appendTo(i.element(t.appendTo).eq(0)).eq(0) : e.wrap(n).parent()).prepend(t.hint ? o : null).append(s), {
                wrapper: n,
                input: e,
                hint: o,
                menu: s
              }}(t)

            this.$node = o.wrapper; const a = this.$input = o.input

            e = o.menu, n = o.hint, t.dropdownMenuContainer && i.element(t.dropdownMenuContainer).css('position', 'relative').append(e.css('top', '0')), a.on('blur.aa', (function (t) {const n = document.activeElement

              r.isMsie() && (e[0] === n || e[0].contains(n)) && (t.preventDefault(), t.stopImmediatePropagation(), r.defer((function () {a.focus()})))})), e.on('mousedown.aa', (function (t) {t.preventDefault()})), this.eventBus = t.eventBus || new s({
              el: a
            }), this.dropdown = new l.Dropdown({
              appendTo: t.appendTo,
              wrapper: this.$node,
              menu: e,
              datasets: t.datasets,
              templates: t.templates,
              cssClasses: t.cssClasses,
              minLength: this.minLength
            }).onSync('suggestionClicked', this._onSuggestionClicked, this).onSync('cursorMoved', this._onCursorMoved, this).onSync('cursorRemoved', this._onCursorRemoved, this).onSync('opened', this._onOpened, this).onSync('closed', this._onClosed, this).onSync('shown', this._onShown, this).onSync('empty', this._onEmpty, this).onSync('redrawn', this._onRedrawn, this).onAsync('datasetRendered', this._onDatasetRendered, this), this.input = new l.Input({
              input: a,
              hint: n
            }).onSync('focused', this._onFocused, this).onSync('blurred', this._onBlurred, this).onSync('enterKeyed', this._onEnterKeyed, this).onSync('tabKeyed', this._onTabKeyed, this).onSync('escKeyed', this._onEscKeyed, this).onSync('upKeyed', this._onUpKeyed, this).onSync('downKeyed', this._onDownKeyed, this).onSync('leftKeyed', this._onLeftKeyed, this).onSync('rightKeyed', this._onRightKeyed, this).onSync('queryChanged', this._onQueryChanged, this).onSync('whitespaceChanged', this._onWhitespaceChanged, this), this._bindKeyboardShortcuts(t), this._setLanguageDirection()}r.mixin(l.prototype, {
            _bindKeyboardShortcuts: function (t) {if (t.keyboardShortcuts) {const e = this.$input; const n = []

              r.each(t.keyboardShortcuts, (function (t) {'string' === typeof t && (t = t.toUpperCase().charCodeAt(0)), n.push(t)})), i.element(document).keydown((function (t) {const r = t.target || t.srcElement; const i = r.tagName

                if (!r.isContentEditable && 'INPUT' !== i && 'SELECT' !== i && 'TEXTAREA' !== i) {const s = t.which || t.keyCode;

                  -1 !== n.indexOf(s) && (e.focus(), t.stopPropagation(), t.preventDefault())}}))}},
            _onSuggestionClicked: function (t, e) {let n;

              (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n, {
                selectionMethod: 'click'
              })},
            _onCursorMoved: function (t, e) {const n = this.dropdown.getDatumForCursor(); const r = this.dropdown.getCurrentCursor().attr('id')

              this.input.setActiveDescendant(r), n && (e && this.input.setInputValue(n.value, !0), this.eventBus.trigger('cursorchanged', n.raw, n.datasetName))},
            _onCursorRemoved: function () {this.input.resetInputValue(), this._updateHint(), this.eventBus.trigger('cursorremoved')},
            _onDatasetRendered: function () {this._updateHint(), this.eventBus.trigger('updated')},
            _onOpened: function () {this._updateHint(), this.input.expand(), this.eventBus.trigger('opened')},
            _onEmpty: function () {this.eventBus.trigger('empty')},
            _onRedrawn: function () {this.$node.css('top', '0px'), this.$node.css('left', '0px'); const t = this.$input[0].getBoundingClientRect()

              this.autoWidth && this.$node.css('width', t.width + 'px'); const e = this.$node[0].getBoundingClientRect(); const n = t.bottom - e.top

              this.$node.css('top', n + 'px'); const r = t.left - e.left

              this.$node.css('left', r + 'px'), this.eventBus.trigger('redrawn')},
            _onShown: function () {this.eventBus.trigger('shown'), this.autoselect && this.dropdown.cursorTopSuggestion()},
            _onClosed: function () {this.input.clearHint(), this.input.removeActiveDescendant(), this.input.collapse(), this.eventBus.trigger('closed')},
            _onFocused: function () {if (this.isActivated = !0, this.openOnFocus) {const t = this.input.getQuery()

              t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty(), this.dropdown.open()}},
            _onBlurred: function () {let t; let e

              t = this.dropdown.getDatumForCursor(), e = this.dropdown.getDatumForTopSuggestion(); const n = {
                selectionMethod: 'blur'
              }

              this.debug || (this.autoselectOnBlur && t ? this._select(t, n) : this.autoselectOnBlur && e ? this._select(e, n) : (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()))},
            _onEnterKeyed: function (t, e) {let n; let r

              n = this.dropdown.getDatumForCursor(), r = this.dropdown.getDatumForTopSuggestion(); const i = {
                selectionMethod: 'enterKey'
              }

              n ? (this._select(n, i), e.preventDefault()) : this.autoselect && r && (this._select(r, i), e.preventDefault())},
            _onTabKeyed: function (t, e) {let n

              this.tabAutocomplete ? (n = this.dropdown.getDatumForCursor()) ? (this._select(n, {
                selectionMethod: 'tabKey'
              }), e.preventDefault()) : this._autocomplete(!0) : this.dropdown.close()},
            _onEscKeyed: function () {this.dropdown.close(), this.input.resetInputValue()},
            _onUpKeyed: function () {const t = this.input.getQuery()

              this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()},
            _onDownKeyed: function () {const t = this.input.getQuery()

              this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()},
            _onLeftKeyed: function () {'rtl' === this.dir && this._autocomplete()},
            _onRightKeyed: function () {'ltr' === this.dir && this._autocomplete()},
            _onQueryChanged: function (t, e) {this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()},
            _onWhitespaceChanged: function () {this._updateHint(), this.dropdown.open()},
            _setLanguageDirection: function () {const t = this.input.getLanguageDirection()

              this.dir !== t && (this.dir = t, this.$node.css('direction', t), this.dropdown.setLanguageDirection(t))},
            _updateHint: function () {let t; let e; let n; let i; let s;

              (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (e = this.input.getInputValue(), n = o.normalizeQuery(e), i = r.escapeRegExChars(n), (s = new RegExp('^(?:' + i + ')(.+$)', 'i').exec(t.value)) ? this.input.setHint(e + s[1]) : this.input.clearHint()) : this.input.clearHint()},
            _autocomplete: function (t) {let e; let n; let r; let i

              e = this.input.getHint(), n = this.input.getQuery(), r = t || this.input.isCursorAtEnd(), e && n !== e && r && ((i = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(i.value), this.eventBus.trigger('autocompleted', i.raw, i.datasetName))},
            _select: function (t, e) {void 0 !== t.value && this.input.setQuery(t.value), this.clearOnSelected ? this.setVal('') : this.input.setInputValue(t.value, !0), this._setLanguageDirection(), !1 === this.eventBus.trigger('selected', t.raw, t.datasetName, e).isDefaultPrevented() && (this.dropdown.close(), r.defer(r.bind(this.dropdown.empty, this.dropdown)))},
            open: function () {if (!this.isActivated) {const t = this.input.getInputValue()

              t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty()} this.dropdown.open()},
            close: function () {this.dropdown.close()},
            setVal: function (t) {t = r.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()},
            getVal: function () {return this.input.getQuery()},
            destroy: function () {let t; let e; let n

              this.input.destroy(), this.dropdown.destroy(), t = this.$node, e = this.cssClasses, n = t.find(r.className(e.prefix, e.input)), r.each(n.data('aaAttrs'), (function (t, e) {void 0 === t ? n.removeAttr(e) : n.attr(e, t)})), n.detach().removeClass(r.className(e.prefix, e.input, !0)).insertAfter(t), n.removeData && n.removeData('aaAttrs'), t.remove(), this.$node = null},
            getWrapper: function () {return this.dropdown.$container[0]}
          }), l.Dropdown = a, l.Input = o, l.sources = n(61), t.exports = l}, function (t, e, n) {'use strict'; let r

          r = {
            9: 'tab',
            27: 'esc',
            37: 'left',
            39: 'right',
            13: 'enter',
            38: 'up',
            40: 'down'
          }; const i = n(0); const s = n(1); const o = n(10)

          function a (t) {let e; let n; let o; let a; let u; const c = this;

            (t = t || {}).input || i.error('input is missing'), e = i.bind(this._onBlur, this), n = i.bind(this._onFocus, this), o = i.bind(this._onKeydown, this), a = i.bind(this._onInput, this), this.$hint = s.element(t.hint), this.$input = s.element(t.input).on('blur.aa', e).on('focus.aa', n).on('keydown.aa', o), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = i.noop), i.isMsie() ? this.$input.on('keydown.aa keypress.aa cut.aa paste.aa', (function (t) {r[t.which || t.keyCode] || i.defer(i.bind(c._onInput, c, t))})) : this.$input.on('input.aa', a), this.query = this.$input.val(), this.$overflowHelper = (u = this.$input, s.element('<pre aria-hidden="true"></pre>').css({
              position: 'absolute',
              visibility: 'hidden',
              whiteSpace: 'pre',
              fontFamily: u.css('font-family'),
              fontSize: u.css('font-size'),
              fontStyle: u.css('font-style'),
              fontVariant: u.css('font-variant'),
              fontWeight: u.css('font-weight'),
              wordSpacing: u.css('word-spacing'),
              letterSpacing: u.css('letter-spacing'),
              textIndent: u.css('text-indent'),
              textRendering: u.css('text-rendering'),
              textTransform: u.css('text-transform')
            }).insertAfter(u))} function u (t) {return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey}a.normalizeQuery = function (t) {return (t || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' ')}, i.mixin(a.prototype, o, {
            _onBlur: function () {this.resetInputValue(), this.$input.removeAttr('aria-activedescendant'), this.trigger('blurred')},
            _onFocus: function () {this.trigger('focused')},
            _onKeydown: function (t) {const e = r[t.which || t.keyCode]

              this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + 'Keyed', t)},
            _onInput: function () {this._checkInputValue()},
            _managePreventDefault: function (t, e) {let n; let r; let i

              switch (t) {case 'tab':r = this.getHint(), i = this.getInputValue(), n = r && r !== i && !u(e); break; case 'up':case 'down':n = !u(e); break; default:n = !1}n && e.preventDefault()},
            _shouldTrigger: function (t, e) {let n

              switch (t) {case 'tab':n = !u(e); break; default:n = !0} return n},
            _checkInputValue: function () {let t; let e; let n; let r; let i

              t = this.getInputValue(), r = t, i = this.query, n = !(!(e = a.normalizeQuery(r) === a.normalizeQuery(i)) || !this.query) && this.query.length !== t.length, this.query = t, e ? n && this.trigger('whitespaceChanged', this.query) : this.trigger('queryChanged', this.query)},
            focus: function () {this.$input.focus()},
            blur: function () {this.$input.blur()},
            getQuery: function () {return this.query},
            setQuery: function (t) {this.query = t},
            getInputValue: function () {return this.$input.val()},
            setInputValue: function (t, e) {void 0 === t && (t = this.query), this.$input.val(t), e ? this.clearHint() : this._checkInputValue()},
            expand: function () {this.$input.attr('aria-expanded', 'true')},
            collapse: function () {this.$input.attr('aria-expanded', 'false')},
            setActiveDescendant: function (t) {this.$input.attr('aria-activedescendant', t)},
            removeActiveDescendant: function () {this.$input.removeAttr('aria-activedescendant')},
            resetInputValue: function () {this.setInputValue(this.query, !0)},
            getHint: function () {return this.$hint.val()},
            setHint: function (t) {this.$hint.val(t)},
            clearHint: function () {this.setHint('')},
            clearHintIfInvalid: function () {let t; let e; let n

              n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), '' !== t && n && !this.hasOverflow() || this.clearHint()},
            getLanguageDirection: function () {return (this.$input.css('direction') || 'ltr').toLowerCase()},
            hasOverflow: function () {const t = this.$input.width() - 2

              return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t},
            isCursorAtEnd: function () {let t; let e; let n

              return t = this.$input.val().length, e = this.$input[0].selectionStart, i.isNumber(e) ? e === t : !document.selection || ((n = document.selection.createRange()).moveStart('character', -t), t === n.text.length)},
            destroy: function () {this.$hint.off('.aa'), this.$input.off('.aa'), this.$hint = this.$input = this.$overflowHelper = null}
          }), t.exports = a}, function (t, e, n) {'use strict'; let r; let i; let s; const o = [n(54), n(55), n(56), n(57), n(58)]; let a = -1; let u = []; let c = !1

          function l () {r && i && (r = !1, i.length ? u = i.concat(u) : a = -1, u.length && h())} function h () {if (!r) {c = !1, r = !0; for (var t = u.length, e = setTimeout(l); t;) {for (i = u, u = []; i && ++a < t;)i[a].run(); a = -1, t = u.length}i = null, a = -1, r = !1, clearTimeout(e)}} for (let p = -1, f = o.length; ++p < f;) if (o[p] && o[p].test && o[p].test()) {s = o[p].install(h); break} function d (t, e) {this.fun = t, this.array = e}d.prototype.run = function () {const t = this.fun; const e = this.array

            switch (e.length) {case 0:return t(); case 1:return t(e[0]); case 2:return t(e[0], e[1]); case 3:return t(e[0], e[1], e[2]); default:return t.apply(null, e)}}, t.exports = function (t) {const e = new Array(arguments.length - 1)

            if (arguments.length > 1) for (let n = 1; n < arguments.length; n++)e[n - 1] = arguments[n]; u.push(new d(t, e)), c || r || (c = !0, s())}}, function (t, e, n) {'use strict'; (function (t) {e.test = function () {return void 0 !== t && !t.browser}, e.install = function (e) {return function () {t.nextTick(e)}}}).call(e, n(9))}, function (t, e, n) {'use strict'; (function (t) {const n = t.MutationObserver || t.WebKitMutationObserver

          e.test = function () {return n}, e.install = function (e) {let r = 0; const i = new n(e); const s = t.document.createTextNode('')

            return i.observe(s, {
              characterData: !0
            }), function () {s.data = r = ++r % 2}}}).call(e, n(4))}, function (t, e, n) {'use strict'; (function (t) {e.test = function () {return !t.setImmediate && void 0 !== t.MessageChannel}, e.install = function (e) {const n = new t.MessageChannel

          return n.port1.onmessage = e, function () {n.port2.postMessage(0)}}}).call(e, n(4))}, function (t, e, n) {'use strict'; (function (t) {e.test = function () {return 'document' in t && 'onreadystatechange' in t.document.createElement('script')}, e.install = function (e) {return function () {let n = t.document.createElement('script')

          return n.onreadystatechange = function () {e(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null}, t.document.documentElement.appendChild(n), e}}}).call(e, n(4))}, function (t, e, n) {'use strict'; e.test = function () {return !0}, e.install = function (t) {return function () {setTimeout(t, 0)}}}, function (t, e, n) {'use strict'; const r = n(0); const i = n(1); const s = n(10); const o = n(60); const a = n(11)

          function u (t) {let e; let n; let s; const o = this;

            (t = t || {}).menu || r.error('menu is required'), r.isArray(t.datasets) || r.isObject(t.datasets) || r.error('1 or more datasets required'), t.datasets || r.error('datasets is required'), this.isOpen = !1, this.isEmpty = !0, this.minLength = t.minLength || 0, this.templates = {}, this.appendTo = t.appendTo || !1, this.css = r.mixin({}, a, t.appendTo ? a.appendTo : {}), this.cssClasses = t.cssClasses = r.mixin({}, a.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix || r.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), e = r.bind(this._onSuggestionClick, this), n = r.bind(this._onSuggestionMouseEnter, this), s = r.bind(this._onSuggestionMouseLeave, this); const c = r.className(this.cssClasses.prefix, this.cssClasses.suggestion)

            this.$menu = i.element(t.menu).on('mouseenter.aa', c, n).on('mouseleave.aa', c, s).on('click.aa', c, e), this.$container = t.appendTo ? t.wrapper : this.$menu, t.templates && t.templates.header && (this.templates.header = r.templatify(t.templates.header), this.$menu.prepend(this.templates.header())), t.templates && t.templates.empty && (this.templates.empty = r.templatify(t.templates.empty), this.$empty = i.element('<div class="' + r.className(this.cssClasses.prefix, this.cssClasses.empty, !0) + '"></div>'), this.$menu.append(this.$empty), this.$empty.hide()), this.datasets = r.map(t.datasets, (function (e) {return function (t, e, n) {return new u.Dataset(r.mixin({
              $menu: t,
              cssClasses: n
            }, e))}(o.$menu, e, t.cssClasses)})), r.each(this.datasets, (function (t) {const e = t.getRoot()

              e && 0 === e.parent().length && o.$menu.append(e), t.onSync('rendered', o._onRendered, o)})), t.templates && t.templates.footer && (this.templates.footer = r.templatify(t.templates.footer), this.$menu.append(this.templates.footer())); const l = this

            i.element(window).resize((function () {l._redraw()}))}r.mixin(u.prototype, s, {
            _onSuggestionClick: function (t) {this.trigger('suggestionClicked', i.element(t.currentTarget))},
            _onSuggestionMouseEnter: function (t) {const e = i.element(t.currentTarget)

              if (!e.hasClass(r.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))) {this._removeCursor(); const n = this

                setTimeout((function () {n._setCursor(e, !1)}), 0)}},
            _onSuggestionMouseLeave: function (t) {t.relatedTarget && i.element(t.relatedTarget).closest('.' + r.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).length > 0 || (this._removeCursor(), this.trigger('cursorRemoved'))},
            _onRendered: function (t, e) {if (this.isEmpty = r.every(this.datasets, (function (t) {return t.isEmpty()})), this.isEmpty) if (e.length >= this.minLength && this.trigger('empty'), this.$empty) if (e.length < this.minLength) this._hide(); else {const n = this.templates.empty({
              query: this.datasets[0] && this.datasets[0].query
            })

            this.$empty.html(n), this.$empty.show(), this._show()} else r.any(this.datasets, (function (t) {return t.templates && t.templates.empty})) ? e.length < this.minLength ? this._hide() : this._show() : this._hide(); else this.isOpen && (this.$empty && (this.$empty.empty(), this.$empty.hide()), e.length >= this.minLength ? this._show() : this._hide()); this.trigger('datasetRendered')},
            _hide: function () {this.$container.hide()},
            _show: function () {this.$container.css('display', 'block'), this._redraw(), this.trigger('shown')},
            _redraw: function () {this.isOpen && this.appendTo && this.trigger('redrawn')},
            _getSuggestions: function () {return this.$menu.find(r.className(this.cssClasses.prefix, this.cssClasses.suggestion))},
            _getCursor: function () {return this.$menu.find(r.className(this.cssClasses.prefix, this.cssClasses.cursor)).first()},
            _setCursor: function (t, e) {t.first().addClass(r.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).attr('aria-selected', 'true'), this.trigger('cursorMoved', e)},
            _removeCursor: function () {this._getCursor().removeClass(r.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).removeAttr('aria-selected')},
            _moveCursor: function (t) {let e; let n; let r; let i

              this.isOpen && (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 != (r = ((r = e.index(n) + t) + 1) % (e.length + 1) - 1) ? (r < -1 && (r = e.length - 1), this._setCursor(i = e.eq(r), !0), this._ensureVisible(i)) : this.trigger('cursorRemoved'))},
            _ensureVisible: function (t) {let e; let n; let r; let i

              n = (e = t.position().top) + t.height() + parseInt(t.css('margin-top'), 10) + parseInt(t.css('margin-bottom'), 10), r = this.$menu.scrollTop(), i = this.$menu.height() + parseInt(this.$menu.css('padding-top'), 10) + parseInt(this.$menu.css('padding-bottom'), 10), e < 0 ? this.$menu.scrollTop(r + e) : i < n && this.$menu.scrollTop(r + (n - i))},
            close: function () {this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger('closed'))},
            open: function () {this.isOpen || (this.isOpen = !0, this.isEmpty || this._show(), this.trigger('opened'))},
            setLanguageDirection: function (t) {this.$menu.css('ltr' === t ? this.css.ltr : this.css.rtl)},
            moveCursorUp: function () {this._moveCursor(-1)},
            moveCursorDown: function () {this._moveCursor(1)},
            getDatumForSuggestion: function (t) {let e = null

              return t.length && (e = {
                raw: o.extractDatum(t),
                value: o.extractValue(t),
                datasetName: o.extractDatasetName(t)
              }), e},
            getCurrentCursor: function () {return this._getCursor().first()},
            getDatumForCursor: function () {return this.getDatumForSuggestion(this._getCursor().first())},
            getDatumForTopSuggestion: function () {return this.getDatumForSuggestion(this._getSuggestions().first())},
            cursorTopSuggestion: function () {this._setCursor(this._getSuggestions().first(), !1)},
            update: function (t) {r.each(this.datasets, (function (e) {e.update(t)}))},
            empty: function () {r.each(this.datasets, (function (t) {t.clear()})), this.isEmpty = !0},
            isVisible: function () {return this.isOpen && !this.isEmpty},
            destroy: function () {this.$menu.off('.aa'), this.$menu = null, r.each(this.datasets, (function (t) {t.destroy()}))}
          }), u.Dataset = o, t.exports = u}, function (t, e, n) {'use strict'; const r = n(0); const i = n(1); const s = n(17); const o = n(11); const a = n(10)

          function u (t) {let e; let n; let a; let u;

            (t = t || {}).templates = t.templates || {}, t.source || r.error('missing source'), t.name && (e = t.name, !/^[_a-zA-Z0-9-]+$/.test(e)) && r.error('invalid dataset name: ' + t.name), this.query = null, this._isEmpty = !0, this.highlight = !!t.highlight, this.name = void 0 === t.name || null === t.name ? r.getUniqueId() : t.name, this.source = t.source, this.displayFn = (n = (n = t.display || t.displayKey) || 'value', r.isFunction(n) ? n : function (t) {return t[n]}), this.debounce = t.debounce, this.cache = !1 !== t.cache, this.templates = (a = t.templates, u = this.displayFn, {
              empty: a.empty && r.templatify(a.empty),
              header: a.header && r.templatify(a.header),
              footer: a.footer && r.templatify(a.footer),
              suggestion: a.suggestion || function (t) {return '<p>' + u(t) + '</p>'}
            }), this.css = r.mixin({}, o, t.appendTo ? o.appendTo : {}), this.cssClasses = t.cssClasses = r.mixin({}, o.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix || r.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix); const c = r.className(this.cssClasses.prefix, this.cssClasses.dataset)

            this.$el = t.$menu && t.$menu.find(c + '-' + this.name).length > 0 ? i.element(t.$menu.find(c + '-' + this.name)[0]) : i.element(s.dataset.replace('%CLASS%', this.name).replace('%PREFIX%', this.cssClasses.prefix).replace('%DATASET%', this.cssClasses.dataset)), this.$menu = t.$menu, this.clearCachedSuggestions()}u.extractDatasetName = function (t) {return i.element(t).data('aaDataset')}, u.extractValue = function (t) {return i.element(t).data('aaValue')}, u.extractDatum = function (t) {let e = i.element(t).data('aaDatum')

            return 'string' === typeof e && (e = JSON.parse(e)), e}, r.mixin(u.prototype, a, {
            _render: function (t, e) {if (this.$el) {var n; var o = this; const a = [].slice.call(arguments, 2)

              if (this.$el.empty(), n = e && e.length, this._isEmpty = !n, !n && this.templates.empty) this.$el.html(u.apply(this, a)).prepend(o.templates.header ? l.apply(this, a) : null).append(o.templates.footer ? h.apply(this, a) : null); else if (n) this.$el.html(c.apply(this, a)).prepend(o.templates.header ? l.apply(this, a) : null).append(o.templates.footer ? h.apply(this, a) : null); else if (e && !Array.isArray(e)) throw new TypeError('suggestions must be an array'); this.$menu && this.$menu.addClass(this.cssClasses.prefix + (n ? 'with' : 'without') + '-' + this.name).removeClass(this.cssClasses.prefix + (n ? 'without' : 'with') + '-' + this.name), this.trigger('rendered', t)} function u () {let e = [].slice.call(arguments, 0)

              return e = [
                {
                  query: t,
                  isEmpty: !0
                }
              ].concat(e), o.templates.empty.apply(this, e)} function c () {let t; let n; const a = [].slice.call(arguments, 0); const u = this; const c = s.suggestions.replace('%PREFIX%', this.cssClasses.prefix).replace('%SUGGESTIONS%', this.cssClasses.suggestions)

              return t = i.element(c).css(this.css.suggestions), n = r.map(e, l), t.append.apply(t, n), t; function l (t) {let e; const n = s.suggestion.replace('%PREFIX%', u.cssClasses.prefix).replace('%SUGGESTION%', u.cssClasses.suggestion)

                return (e = i.element(n).attr({
                  role: 'option',
                  id: ['option', Math.floor(1e8 * Math.random())].join('-')
                }).append(o.templates.suggestion.apply(this, [t].concat(a)))).data('aaDataset', o.name), e.data('aaValue', o.displayFn(t) || void 0), e.data('aaDatum', JSON.stringify(t)), e.children().each((function () {i.element(this).css(u.css.suggestionChild)})), e}} function l () {let e = [].slice.call(arguments, 0)

              return e = [
                {
                  query: t,
                  isEmpty: !n
                }
              ].concat(e), o.templates.header.apply(this, e)} function h () {let e = [].slice.call(arguments, 0)

              return e = [
                {
                  query: t,
                  isEmpty: !n
                }
              ].concat(e), o.templates.footer.apply(this, e)}},
            getRoot: function () {return this.$el},
            update: function (t) {function e (e) {if (!this.canceled && t === this.query) {const n = [].slice.call(arguments, 1)

              this.cacheSuggestions(t, e, n), this._render.apply(this, [t, e].concat(n))}} if (this.query = t, this.canceled = !1, this.shouldFetchFromCache(t))e.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs)); else {const n = this; const r = function () {n.canceled || n.source(t, e.bind(n))}

              this.debounce ? (clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout((function () {n.debounceTimeout = null, r()}), this.debounce)) : r()}},
            cacheSuggestions: function (t, e, n) {this.cachedQuery = t, this.cachedSuggestions = e, this.cachedRenderExtraArgs = n},
            shouldFetchFromCache: function (t) {return this.cache && this.cachedQuery === t && this.cachedSuggestions && this.cachedSuggestions.length},
            clearCachedSuggestions: function () {delete this.cachedQuery, delete this.cachedSuggestions, delete this.cachedRenderExtraArgs},
            cancel: function () {this.canceled = !0},
            clear: function () {this.cancel(), this.$el.empty(), this.trigger('rendered', '')},
            isEmpty: function () {return this._isEmpty},
            destroy: function () {this.clearCachedSuggestions(), this.$el = null}
          }), t.exports = u}, function (t, e, n) {'use strict'; t.exports = {
          hits: n(62),
          popularIn: n(63)
        }}, function (t, e, n) {'use strict'; const r = n(0); const i = n(18); const s = n(19)

          t.exports = function (t, e) {const n = s(t.as._ua)

            return n && n[0] >= 3 && n[1] > 20 && ((e = e || {}).additionalUA = 'autocomplete.js ' + i), function (n, i) {t.search(n, e, (function (t, e) {t ? r.error(t.message) : i(e.hits, e)}))}}}, function (t, e, n) {'use strict'; const r = n(0); const i = n(18); const s = n(19)

          t.exports = function (t, e, n, o) {const a = s(t.as._ua)

            if (a && a[0] >= 3 && a[1] > 20 && ((e = e || {}).additionalUA = 'autocomplete.js ' + i), !n.source) return r.error('Missing \'source\' key'); const u = r.isFunction(n.source) ? n.source : function (t) {return t[n.source]}

            if (!n.index) return r.error('Missing \'index\' key'); const c = n.index

            return o = o || {}, function (a, l) {t.search(a, e, (function (t, a) {if (t)r.error(t.message); else {if (a.hits.length > 0) {const h = a.hits[0]; const p = r.mixin({
              hitsPerPage: 0
            }, n)

            delete p.source, delete p.index; const f = s(c.as._ua)

            return f && f[0] >= 3 && f[1] > 20 && (e.additionalUA = 'autocomplete.js ' + i), void c.search(u(h), p, (function (t, e) {if (t)r.error(t.message); else {const n = []

              if (o.includeAll) {const i = o.allTitle || 'All departments'

                n.push(r.mixin({
                  facet: {
                    value: i,
                    count: e.nbHits
                  }
                }, r.cloneDeep(h)))}r.each(e.facets, (function (t, e) {r.each(t, (function (t, i) {n.push(r.mixin({
                facet: {
                  facet: e,
                  value: i,
                  count: t
                }
              }, r.cloneDeep(h)))}))})); for (let s = 1; s < a.hits.length; ++s)n.push(a.hits[s]); l(n, a)}}))}l([])}}))}}}, function (t, e, n) {'use strict'; Object.defineProperty(e, '__esModule', {
          value: !0
        }); const r = 'algolia-docsearch-suggestion'; const i = {
          suggestion: '\n  <a class="' + r + '\n    {{#isCategoryHeader}}' + r + '__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}' + r + '__secondary{{/isSubCategoryHeader}}\n    "\n    aria-label="Link to the result"\n    href="{{{url}}}"\n    >\n    <div class="' + r + '--category-header">\n        <span class="' + r + '--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="' + r + '--wrapper">\n      <div class="' + r + '--subcategory-column">\n        <span class="' + r + '--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcategoryNonEmpty}}\n      <div class="' + r + '--content">\n        <div class="' + r + '--subcategory-inline">{{{subcategory}}}</div>\n        <div class="' + r + '--title">{{{title}}}</div>\n        {{#text}}<div class="' + r + '--text">{{{text}}}</div>{{/text}}\n      </div>\n      {{/isTextOrSubcategoryNonEmpty}}\n    </div>\n  </a>\n  ',
          suggestionSimple: '\n  <div class="' + r + '\n    {{#isCategoryHeader}}' + r + '__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}' + r + '__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="' + r + '--category-header">\n        {{^isLvl0}}\n        <span class="' + r + '--category-header-lvl0 ' + r + '--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="' + r + '--category-header-lvl1 ' + r + '--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="' + r + '--title ' + r + '--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="' + r + '--wrapper">\n      {{#text}}\n      <div class="' + r + '--content">\n        <div class="' + r + '--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  ',
          footer: '\n    <div class="algolia-docsearch-footer">\n      Search by <a class="algolia-docsearch-footer--logo" href="https://www.algolia.com/docsearch">Algolia</a>\n    </div>\n  ',
          empty: '\n  <div class="' + r + '">\n    <div class="' + r + '--wrapper">\n        <div class="' + r + '--content ' + r + '--no-results">\n            <div class="' + r + '--title">\n                <div class="' + r + '--text">\n                    No results found for query <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ',
          searchBox: '\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  '
        }

        e.default = i}, function (t, e, n) {'use strict'; Object.defineProperty(e, '__esModule', {
          value: !0
        }); let r; const i = 'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator ? function (t) {return typeof t} : function (t) {return t && 'function' === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t}; const s = n(20); const o = (r = s) && r.__esModule ? r : {
          default: r
        }; const a = {
          mergeKeyWithParent: function (t, e) {if (void 0 === t[e]) return t; if ('object' !== i(t[e])) return t; const n = o.default.extend({}, t, t[e])

            return delete n[e], n},
          groupBy: function (t, e) {const n = {}

            return o.default.each(t, (function (t, r) {if (void 0 === r[e]) throw new Error('[groupBy]: Object has no key ' + e); let i = r[e]

              'string' === typeof i && (i = i.toLowerCase()), Object.prototype.hasOwnProperty.call(n, i) || (n[i] = []), n[i].push(r)})), n},
          values: function (t) {return Object.keys(t).map((function (e) {return t[e]}))},
          flatten: function (t) {const e = []

            return t.forEach((function (t) {Array.isArray(t) ? t.forEach((function (t) {e.push(t)})) : e.push(t)})), e},
          flattenAndFlagFirst: function (t, e) {const n = this.values(t).map((function (t) {return t.map((function (t, n) {return t[e] = 0 === n, t}))}))

            return this.flatten(n)},
          compact: function (t) {const e = []

            return t.forEach((function (t) {t && e.push(t)})), e},
          getHighlightedValue: function (t, e) {return t._highlightResult && t._highlightResult.hierarchy_camel && t._highlightResult.hierarchy_camel[e] && t._highlightResult.hierarchy_camel[e].matchLevel && 'none' !== t._highlightResult.hierarchy_camel[e].matchLevel && t._highlightResult.hierarchy_camel[e].value ? t._highlightResult.hierarchy_camel[e].value : t._highlightResult && t._highlightResult && t._highlightResult[e] && t._highlightResult[e].value ? t._highlightResult[e].value : t[e]},
          getSnippetedValue: function (t, e) {if (!t._snippetResult || !t._snippetResult[e] || !t._snippetResult[e].value) return t[e]; let n = t._snippetResult[e].value

            return n[0] !== n[0].toUpperCase() && (n = '…' + n), -1 === ['.', '!', '?'].indexOf(n[n.length - 1]) && (n += '…'), n},
          deepClone: function (t) {return JSON.parse(JSON.stringify(t))}
        }

        e.default = a}
      ])}, t.exports = r()},
    372: function (t, e, n) {}
  }
])