;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    "/0+H": function (e, t, n) {
      "use strict"
      ;(t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(r.default.useContext(o.AmpStateContext))
        })
      var a,
        r = (a = n("q1tI")) && a.__esModule ? a : { default: a },
        o = n("lwAK")
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          a = e.hybrid,
          r = void 0 !== a && a,
          o = e.hasQuery,
          i = void 0 !== o && o
        return n || (r && i)
      }
    },
    "48fX": function (e, t, n) {
      var a = n("qhzo")
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && a(e, t)
      }
    },
    "5fIB": function (e, t, n) {
      var a = n("7eYB")
      e.exports = function (e) {
        if (Array.isArray(e)) return a(e)
      }
    },
    "7O5W": function (e, t, n) {
      "use strict"
      ;(function (e) {
        function a(e) {
          return (a =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                })(e)
        }
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n]
            ;(a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a)
          }
        }
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n)
            "function" === typeof Object.getOwnPropertySymbols &&
              (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                })
              )),
              a.forEach(function (t) {
                o(e, t, n[t])
              })
          }
          return e
        }
        function c(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n = [],
                a = !0,
                r = !1,
                o = void 0
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(a = (i = c.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  a = !0
                );
              } catch (l) {
                ;(r = !0), (o = l)
              } finally {
                try {
                  a || null == c.return || c.return()
                } finally {
                  if (r) throw o
                }
              }
              return n
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              )
            })()
          )
        }
        n.d(t, "a", function () {
          return xe
        }),
          n.d(t, "b", function () {
            return we
          }),
          n.d(t, "c", function () {
            return _e
          })
        var l = function () {},
          s = {},
          f = {},
          p = { mark: l, measure: l }
        try {
          "undefined" !== typeof window && (s = window),
            "undefined" !== typeof document && (f = document),
            "undefined" !== typeof MutationObserver && MutationObserver,
            "undefined" !== typeof performance && (p = performance)
        } catch (Ee) {}
        var u = (s.navigator || {}).userAgent,
          d = void 0 === u ? "" : u,
          h = s,
          m = f,
          g = p,
          y =
            (h.document,
            !!m.documentElement &&
              !!m.head &&
              "function" === typeof m.addEventListener &&
              "function" === typeof m.createElement),
          v =
            (~d.indexOf("MSIE") || d.indexOf("Trident/"),
            (function () {
              try {
              } catch (Ee) {
                return !1
              }
            })(),
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          b = v.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
          w = {
            GROUP: "group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary",
          },
          k =
            ([
              "xs",
              "sm",
              "lg",
              "fw",
              "ul",
              "li",
              "border",
              "pull-left",
              "pull-right",
              "spin",
              "pulse",
              "rotate-90",
              "rotate-180",
              "rotate-270",
              "flip-horizontal",
              "flip-vertical",
              "flip-both",
              "stack",
              "stack-1x",
              "stack-2x",
              "inverse",
              "layers",
              "layers-text",
              "layers-counter",
              w.GROUP,
              w.SWAP_OPACITY,
              w.PRIMARY,
              w.SECONDARY,
            ]
              .concat(
                v.map(function (e) {
                  return "".concat(e, "x")
                })
              )
              .concat(
                b.map(function (e) {
                  return "w-".concat(e)
                })
              ),
            h.FontAwesomeConfig || {})
        if (m && "function" === typeof m.querySelector) {
          ;[
            ["data-family-prefix", "familyPrefix"],
            ["data-replacement-class", "replacementClass"],
            ["data-auto-replace-svg", "autoReplaceSvg"],
            ["data-auto-add-css", "autoAddCss"],
            ["data-auto-a11y", "autoA11y"],
            ["data-search-pseudo-elements", "searchPseudoElements"],
            ["data-observe-mutations", "observeMutations"],
            ["data-mutate-approach", "mutateApproach"],
            ["data-keep-original-source", "keepOriginalSource"],
            ["data-measure-performance", "measurePerformance"],
            ["data-show-missing-icons", "showMissingIcons"],
          ].forEach(function (e) {
            var t = c(e, 2),
              n = t[0],
              a = t[1],
              r = (function (e) {
                return "" === e || ("false" !== e && ("true" === e || e))
              })(
                (function (e) {
                  var t = m.querySelector("script[" + e + "]")
                  if (t) return t.getAttribute(e)
                })(n)
              )
            void 0 !== r && null !== r && (k[a] = r)
          })
        }
        var _ = i(
          {},
          {
            familyPrefix: "fa",
            replacementClass: "svg-inline--fa",
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0,
          },
          k
        )
        _.autoReplaceSvg || (_.observeMutations = !1)
        var x = i({}, _)
        h.FontAwesomeConfig = x
        var E = h || {}
        E.___FONT_AWESOME___ || (E.___FONT_AWESOME___ = {}),
          E.___FONT_AWESOME___.styles || (E.___FONT_AWESOME___.styles = {}),
          E.___FONT_AWESOME___.hooks || (E.___FONT_AWESOME___.hooks = {}),
          E.___FONT_AWESOME___.shims || (E.___FONT_AWESOME___.shims = [])
        var O = E.___FONT_AWESOME___,
          G = []
        y &&
          ((m.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
            m.readyState
          ) ||
            m.addEventListener("DOMContentLoaded", function e() {
              m.removeEventListener("DOMContentLoaded", e),
                1,
                G.map(function (e) {
                  return e()
                })
            }))
        var M,
          A = function () {},
          I =
            "undefined" !== typeof e &&
            "undefined" !== typeof e.process &&
            "function" === typeof e.process.emit,
          T = "undefined" === typeof setImmediate ? setTimeout : setImmediate,
          S = []
        function P() {
          for (var e = 0; e < S.length; e++) S[e][0](S[e][1])
          ;(S = []), (M = !1)
        }
        function C(e, t) {
          S.push([e, t]), M || ((M = !0), T(P, 0))
        }
        function j(e) {
          var t = e.owner,
            n = t._state,
            a = t._data,
            r = e[n],
            o = e.then
          if ("function" === typeof r) {
            n = "fulfilled"
            try {
              a = r(a)
            } catch (Ee) {
              H(o, Ee)
            }
          }
          z(o, a) || ("fulfilled" === n && N(o, a), "rejected" === n && H(o, a))
        }
        function z(e, t) {
          var n
          try {
            if (e === t)
              throw new TypeError(
                "A promises callback cannot return that same promise."
              )
            if (t && ("function" === typeof t || "object" === a(t))) {
              var r = t.then
              if ("function" === typeof r)
                return (
                  r.call(
                    t,
                    function (a) {
                      n || ((n = !0), t === a ? W(e, a) : N(e, a))
                    },
                    function (t) {
                      n || ((n = !0), H(e, t))
                    }
                  ),
                  !0
                )
            }
          } catch (Ee) {
            return n || H(e, Ee), !0
          }
          return !1
        }
        function N(e, t) {
          ;(e !== t && z(e, t)) || W(e, t)
        }
        function W(e, t) {
          "pending" === e._state &&
            ((e._state = "settled"), (e._data = t), C(L, e))
        }
        function H(e, t) {
          "pending" === e._state &&
            ((e._state = "settled"), (e._data = t), C(R, e))
        }
        function D(e) {
          e._then = e._then.forEach(j)
        }
        function L(e) {
          ;(e._state = "fulfilled"), D(e)
        }
        function R(t) {
          ;(t._state = "rejected"),
            D(t),
            !t._handled && I && e.process.emit("unhandledRejection", t._data, t)
        }
        function F(t) {
          e.process.emit("rejectionHandled", t)
        }
        function Y(e) {
          if ("function" !== typeof e)
            throw new TypeError("Promise resolver " + e + " is not a function")
          if (this instanceof Y === !1)
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            )
          ;(this._then = []),
            (function (e, t) {
              function n(e) {
                H(t, e)
              }
              try {
                e(function (e) {
                  N(t, e)
                }, n)
              } catch (Ee) {
                n(Ee)
              }
            })(e, this)
        }
        ;(Y.prototype = {
          constructor: Y,
          _state: "pending",
          _then: null,
          _data: void 0,
          _handled: !1,
          then: function (e, t) {
            var n = {
              owner: this,
              then: new this.constructor(A),
              fulfilled: e,
              rejected: t,
            }
            return (
              (!t && !e) ||
                this._handled ||
                ((this._handled = !0),
                "rejected" === this._state && I && C(F, this)),
              "fulfilled" === this._state || "rejected" === this._state
                ? C(j, n)
                : this._then.push(n),
              n.then
            )
          },
          catch: function (e) {
            return this.then(null, e)
          },
        }),
          (Y.all = function (e) {
            if (!Array.isArray(e))
              throw new TypeError("You must pass an array to Promise.all().")
            return new Y(function (t, n) {
              var a = [],
                r = 0
              function o(e) {
                return (
                  r++,
                  function (n) {
                    ;(a[e] = n), --r || t(a)
                  }
                )
              }
              for (var i, c = 0; c < e.length; c++)
                (i = e[c]) && "function" === typeof i.then
                  ? i.then(o(c), n)
                  : (a[c] = i)
              r || t(a)
            })
          }),
          (Y.race = function (e) {
            if (!Array.isArray(e))
              throw new TypeError("You must pass an array to Promise.race().")
            return new Y(function (t, n) {
              for (var a, r = 0; r < e.length; r++)
                (a = e[r]) && "function" === typeof a.then ? a.then(t, n) : t(a)
            })
          }),
          (Y.resolve = function (e) {
            return e && "object" === a(e) && e.constructor === Y
              ? e
              : new Y(function (t) {
                  t(e)
                })
          }),
          (Y.reject = function (e) {
            return new Y(function (t, n) {
              n(e)
            })
          })
        var X = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
        function q(e) {
          if (e && y) {
            var t = m.createElement("style")
            t.setAttribute("type", "text/css"), (t.innerHTML = e)
            for (
              var n = m.head.childNodes, a = null, r = n.length - 1;
              r > -1;
              r--
            ) {
              var o = n[r],
                i = (o.tagName || "").toUpperCase()
              ;["STYLE", "LINK"].indexOf(i) > -1 && (a = o)
            }
            return m.head.insertBefore(t, a), e
          }
        }
        function V() {
          for (var e = 12, t = ""; e-- > 0; )
            t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
              (62 * Math.random()) | 0
            ]
          return t
        }
        function B(e) {
          return ""
            .concat(e)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
        }
        function U(e) {
          return Object.keys(e || {}).reduce(function (t, n) {
            return t + "".concat(n, ": ").concat(e[n], ";")
          }, "")
        }
        function K(e) {
          return (
            e.size !== X.size ||
            e.x !== X.x ||
            e.y !== X.y ||
            e.rotate !== X.rotate ||
            e.flipX ||
            e.flipY
          )
        }
        function Z(e) {
          var t = e.transform,
            n = e.containerWidth,
            a = e.iconWidth,
            r = { transform: "translate(".concat(n / 2, " 256)") },
            o = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
            i = "scale("
              .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
              .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
            c = "rotate(".concat(t.rotate, " 0 0)")
          return {
            outer: r,
            inner: { transform: "".concat(o, " ").concat(i, " ").concat(c) },
            path: { transform: "translate(".concat((a / 2) * -1, " -256)") },
          }
        }
        var J = { x: 0, y: 0, width: "100%", height: "100%" }
        function Q(e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return (
            e.attributes &&
              (e.attributes.fill || t) &&
              (e.attributes.fill = "black"),
            e
          )
        }
        function $(e) {
          var t = e.icons,
            n = t.main,
            a = t.mask,
            r = e.prefix,
            o = e.iconName,
            c = e.transform,
            l = e.symbol,
            s = e.title,
            f = e.maskId,
            p = e.titleId,
            u = e.extra,
            d = e.watchable,
            h = void 0 !== d && d,
            m = a.found ? a : n,
            g = m.width,
            y = m.height,
            v = "fa-w-".concat(Math.ceil((g / y) * 16)),
            b = [
              x.replacementClass,
              o ? "".concat(x.familyPrefix, "-").concat(o) : "",
              v,
            ]
              .filter(function (e) {
                return -1 === u.classes.indexOf(e)
              })
              .concat(u.classes)
              .join(" "),
            w = {
              children: [],
              attributes: i({}, u.attributes, {
                "data-prefix": r,
                "data-icon": o,
                class: b,
                role: u.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(g, " ").concat(y),
              }),
            }
          h && (w.attributes["data-fa-i2svg"] = ""),
            s &&
              w.children.push({
                tag: "title",
                attributes: {
                  id:
                    w.attributes["aria-labelledby"] ||
                    "title-".concat(p || V()),
                },
                children: [s],
              })
          var k = i({}, w, {
              prefix: r,
              iconName: o,
              main: n,
              mask: a,
              maskId: f,
              transform: c,
              symbol: l,
              styles: u.styles,
            }),
            _ =
              a.found && n.found
                ? (function (e) {
                    var t,
                      n = e.children,
                      a = e.attributes,
                      r = e.main,
                      o = e.mask,
                      c = e.maskId,
                      l = e.transform,
                      s = r.width,
                      f = r.icon,
                      p = o.width,
                      u = o.icon,
                      d = Z({ transform: l, containerWidth: p, iconWidth: s }),
                      h = {
                        tag: "rect",
                        attributes: i({}, J, { fill: "white" }),
                      },
                      m = f.children ? { children: f.children.map(Q) } : {},
                      g = {
                        tag: "g",
                        attributes: i({}, d.inner),
                        children: [
                          Q(
                            i(
                              {
                                tag: f.tag,
                                attributes: i({}, f.attributes, d.path),
                              },
                              m
                            )
                          ),
                        ],
                      },
                      y = {
                        tag: "g",
                        attributes: i({}, d.outer),
                        children: [g],
                      },
                      v = "mask-".concat(c || V()),
                      b = "clip-".concat(c || V()),
                      w = {
                        tag: "mask",
                        attributes: i({}, J, {
                          id: v,
                          maskUnits: "userSpaceOnUse",
                          maskContentUnits: "userSpaceOnUse",
                        }),
                        children: [h, y],
                      },
                      k = {
                        tag: "defs",
                        children: [
                          {
                            tag: "clipPath",
                            attributes: { id: b },
                            children:
                              ((t = u), "g" === t.tag ? t.children : [t]),
                          },
                          w,
                        ],
                      }
                    return (
                      n.push(k, {
                        tag: "rect",
                        attributes: i(
                          {
                            fill: "currentColor",
                            "clip-path": "url(#".concat(b, ")"),
                            mask: "url(#".concat(v, ")"),
                          },
                          J
                        ),
                      }),
                      { children: n, attributes: a }
                    )
                  })(k)
                : (function (e) {
                    var t = e.children,
                      n = e.attributes,
                      a = e.main,
                      r = e.transform,
                      o = U(e.styles)
                    if ((o.length > 0 && (n.style = o), K(r))) {
                      var c = Z({
                        transform: r,
                        containerWidth: a.width,
                        iconWidth: a.width,
                      })
                      t.push({
                        tag: "g",
                        attributes: i({}, c.outer),
                        children: [
                          {
                            tag: "g",
                            attributes: i({}, c.inner),
                            children: [
                              {
                                tag: a.icon.tag,
                                children: a.icon.children,
                                attributes: i({}, a.icon.attributes, c.path),
                              },
                            ],
                          },
                        ],
                      })
                    } else t.push(a.icon)
                    return { children: t, attributes: n }
                  })(k),
            E = _.children,
            O = _.attributes
          return (
            (k.children = E),
            (k.attributes = O),
            l
              ? (function (e) {
                  var t = e.prefix,
                    n = e.iconName,
                    a = e.children,
                    r = e.attributes,
                    o = e.symbol
                  return [
                    {
                      tag: "svg",
                      attributes: { style: "display: none;" },
                      children: [
                        {
                          tag: "symbol",
                          attributes: i({}, r, {
                            id:
                              !0 === o
                                ? ""
                                    .concat(t, "-")
                                    .concat(x.familyPrefix, "-")
                                    .concat(n)
                                : o,
                          }),
                          children: a,
                        },
                      ],
                    },
                  ]
                })(k)
              : (function (e) {
                  var t = e.children,
                    n = e.main,
                    a = e.mask,
                    r = e.attributes,
                    o = e.styles,
                    c = e.transform
                  if (K(c) && n.found && !a.found) {
                    var l = { x: n.width / n.height / 2, y: 0.5 }
                    r.style = U(
                      i({}, o, {
                        "transform-origin": ""
                          .concat(l.x + c.x / 16, "em ")
                          .concat(l.y + c.y / 16, "em"),
                      })
                    )
                  }
                  return [{ tag: "svg", attributes: r, children: t }]
                })(k)
          )
        }
        var ee = function () {},
          te =
            (x.measurePerformance && g && g.mark && g.measure,
            function (e, t, n, a) {
              var r,
                o,
                i,
                c = Object.keys(e),
                l = c.length,
                s =
                  void 0 !== a
                    ? (function (e, t) {
                        return function (n, a, r, o) {
                          return e.call(t, n, a, r, o)
                        }
                      })(t, a)
                    : t
              for (
                void 0 === n ? ((r = 1), (i = e[c[0]])) : ((r = 0), (i = n));
                r < l;
                r++
              )
                i = s(i, e[(o = c[r])], o, e)
              return i
            })
        function ne(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            a = n.skipHooks,
            r = void 0 !== a && a,
            o = Object.keys(t).reduce(function (e, n) {
              var a = t[n]
              return !!a.icon ? (e[a.iconName] = a.icon) : (e[n] = a), e
            }, {})
          "function" !== typeof O.hooks.addPack || r
            ? (O.styles[e] = i({}, O.styles[e] || {}, o))
            : O.hooks.addPack(e, o),
            "fas" === e && ne("fa", t)
        }
        var ae = O.styles,
          re = O.shims,
          oe = function () {
            var e = function (e) {
              return te(
                ae,
                function (t, n, a) {
                  return (t[a] = te(n, e, {})), t
                },
                {}
              )
            }
            e(function (e, t, n) {
              return t[3] && (e[t[3]] = n), e
            }),
              e(function (e, t, n) {
                var a = t[2]
                return (
                  (e[n] = n),
                  a.forEach(function (t) {
                    e[t] = n
                  }),
                  e
                )
              })
            var t = "far" in ae
            te(
              re,
              function (e, n) {
                var a = n[0],
                  r = n[1],
                  o = n[2]
                return (
                  "far" !== r || t || (r = "fas"),
                  (e[a] = { prefix: r, iconName: o }),
                  e
                )
              },
              {}
            )
          }
        oe()
        O.styles
        function ie(e, t, n) {
          if (e && e[t] && e[t][n])
            return { prefix: t, iconName: n, icon: e[t][n] }
        }
        function ce(e) {
          var t = e.tag,
            n = e.attributes,
            a = void 0 === n ? {} : n,
            r = e.children,
            o = void 0 === r ? [] : r
          return "string" === typeof e
            ? B(e)
            : "<"
                .concat(t, " ")
                .concat(
                  (function (e) {
                    return Object.keys(e || {})
                      .reduce(function (t, n) {
                        return t + "".concat(n, '="').concat(B(e[n]), '" ')
                      }, "")
                      .trim()
                  })(a),
                  ">"
                )
                .concat(o.map(ce).join(""), "</")
                .concat(t, ">")
        }
        var le = function (e) {
          var t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
          return e
            ? e
                .toLowerCase()
                .split(" ")
                .reduce(function (e, t) {
                  var n = t.toLowerCase().split("-"),
                    a = n[0],
                    r = n.slice(1).join("-")
                  if (a && "h" === r) return (e.flipX = !0), e
                  if (a && "v" === r) return (e.flipY = !0), e
                  if (((r = parseFloat(r)), isNaN(r))) return e
                  switch (a) {
                    case "grow":
                      e.size = e.size + r
                      break
                    case "shrink":
                      e.size = e.size - r
                      break
                    case "left":
                      e.x = e.x - r
                      break
                    case "right":
                      e.x = e.x + r
                      break
                    case "up":
                      e.y = e.y - r
                      break
                    case "down":
                      e.y = e.y + r
                      break
                    case "rotate":
                      e.rotate = e.rotate + r
                  }
                  return e
                }, t)
            : t
        }
        function se(e) {
          ;(this.name = "MissingIcon"),
            (this.message = e || "Icon unavailable"),
            (this.stack = new Error().stack)
        }
        ;(se.prototype = Object.create(Error.prototype)),
          (se.prototype.constructor = se)
        var fe = { fill: "currentColor" },
          pe = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
          ue = {
            tag: "path",
            attributes: i({}, fe, {
              d:
                "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            }),
          },
          de = i({}, pe, { attributeName: "opacity" })
        i({}, fe, { cx: "256", cy: "364", r: "28" }),
          i({}, pe, { attributeName: "r", values: "28;14;28;28;14;28;" }),
          i({}, de, { values: "1;0;1;1;0;1;" }),
          i({}, fe, {
            opacity: "1",
            d:
              "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
          }),
          i({}, de, { values: "1;0;0;0;0;1;" }),
          i({}, fe, {
            opacity: "0",
            d:
              "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
          }),
          i({}, de, { values: "0;0;1;1;0;0;" }),
          O.styles
        function he(e) {
          var t = e[0],
            n = e[1],
            a = c(e.slice(4), 1)[0]
          return {
            found: !0,
            width: t,
            height: n,
            icon: Array.isArray(a)
              ? {
                  tag: "g",
                  attributes: {
                    class: "".concat(x.familyPrefix, "-").concat(w.GROUP),
                  },
                  children: [
                    {
                      tag: "path",
                      attributes: {
                        class: ""
                          .concat(x.familyPrefix, "-")
                          .concat(w.SECONDARY),
                        fill: "currentColor",
                        d: a[0],
                      },
                    },
                    {
                      tag: "path",
                      attributes: {
                        class: "".concat(x.familyPrefix, "-").concat(w.PRIMARY),
                        fill: "currentColor",
                        d: a[1],
                      },
                    },
                  ],
                }
              : { tag: "path", attributes: { fill: "currentColor", d: a } },
          }
        }
        O.styles
        function me() {
          var e = "svg-inline--fa",
            t = x.familyPrefix,
            n = x.replacementClass,
            a =
              'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}'
          if ("fa" !== t || n !== e) {
            var r = new RegExp("\\.".concat("fa", "\\-"), "g"),
              o = new RegExp("\\--".concat("fa", "\\-"), "g"),
              i = new RegExp("\\.".concat(e), "g")
            a = a
              .replace(r, ".".concat(t, "-"))
              .replace(o, "--".concat(t, "-"))
              .replace(i, ".".concat(n))
          }
          return a
        }
        function ge() {
          x.autoAddCss && !ke && (q(me()), (ke = !0))
        }
        function ye(e, t) {
          return (
            Object.defineProperty(e, "abstract", { get: t }),
            Object.defineProperty(e, "html", {
              get: function () {
                return e.abstract.map(function (e) {
                  return ce(e)
                })
              },
            }),
            Object.defineProperty(e, "node", {
              get: function () {
                if (y) {
                  var t = m.createElement("div")
                  return (t.innerHTML = e.html), t.children
                }
              },
            }),
            e
          )
        }
        function ve(e) {
          var t = e.prefix,
            n = void 0 === t ? "fa" : t,
            a = e.iconName
          if (a) return ie(we.definitions, n, a) || ie(O.styles, n, a)
        }
        var be,
          we = new ((function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              })(this, e),
                (this.definitions = {})
            }
            var t, n, a
            return (
              (t = e),
              (n = [
                {
                  key: "add",
                  value: function () {
                    for (
                      var e = this,
                        t = arguments.length,
                        n = new Array(t),
                        a = 0;
                      a < t;
                      a++
                    )
                      n[a] = arguments[a]
                    var r = n.reduce(this._pullDefinitions, {})
                    Object.keys(r).forEach(function (t) {
                      ;(e.definitions[t] = i({}, e.definitions[t] || {}, r[t])),
                        ne(t, r[t]),
                        oe()
                    })
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this.definitions = {}
                  },
                },
                {
                  key: "_pullDefinitions",
                  value: function (e, t) {
                    var n = t.prefix && t.iconName && t.icon ? { 0: t } : t
                    return (
                      Object.keys(n).map(function (t) {
                        var a = n[t],
                          r = a.prefix,
                          o = a.iconName,
                          i = a.icon
                        e[r] || (e[r] = {}), (e[r][o] = i)
                      }),
                      e
                    )
                  },
                },
              ]) && r(t.prototype, n),
              a && r(t, a),
              e
            )
          })())(),
          ke = !1,
          _e = {
            transform: function (e) {
              return le(e)
            },
          },
          xe =
            ((be = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.transform,
                a = void 0 === n ? X : n,
                r = t.symbol,
                o = void 0 !== r && r,
                c = t.mask,
                l = void 0 === c ? null : c,
                s = t.maskId,
                f = void 0 === s ? null : s,
                p = t.title,
                u = void 0 === p ? null : p,
                d = t.titleId,
                h = void 0 === d ? null : d,
                m = t.classes,
                g = void 0 === m ? [] : m,
                y = t.attributes,
                v = void 0 === y ? {} : y,
                b = t.styles,
                w = void 0 === b ? {} : b
              if (e) {
                var k = e.prefix,
                  _ = e.iconName,
                  E = e.icon
                return ye(i({ type: "icon" }, e), function () {
                  return (
                    ge(),
                    x.autoA11y &&
                      (u
                        ? (v["aria-labelledby"] = ""
                            .concat(x.replacementClass, "-title-")
                            .concat(h || V()))
                        : ((v["aria-hidden"] = "true"),
                          (v.focusable = "false"))),
                    $({
                      icons: {
                        main: he(E),
                        mask: l
                          ? he(l.icon)
                          : { found: !1, width: null, height: null, icon: {} },
                      },
                      prefix: k,
                      iconName: _,
                      transform: i({}, X, a),
                      symbol: o,
                      title: u,
                      maskId: f,
                      titleId: h,
                      extra: { attributes: v, styles: w, classes: g },
                    })
                  )
                })
              }
            }),
            function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = (e || {}).icon ? e : ve(e || {}),
                a = t.mask
              return (
                a && (a = (a || {}).icon ? a : ve(a || {})),
                be(n, i({}, t, { mask: a }))
              )
            })
      }.call(this, n("yLpj")))
    },
    "8Kt/": function (e, t, n) {
      "use strict"
      n("oI91")
      ;(t.__esModule = !0), (t.defaultHead = f), (t.default = void 0)
      var a,
        r = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e }
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, r, o)
                : (n[r] = e[r])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("q1tI")),
        o = (a = n("Xuae")) && a.__esModule ? a : { default: a },
        i = n("lwAK"),
        c = n("FYa8"),
        l = n("/0+H")
      function s() {
        if ("function" !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement("meta", { charSet: "utf-8" })]
        return (
          e ||
            t.push(
              r.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        )
      }
      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t)
              },
              [])
            )
          : e.concat(t)
      }
      var u = ["name", "httpEquiv", "charSet", "itemProp"]
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(f(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                a = {}
              return function (r) {
                var o = !0
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  var i = r.key.slice(r.key.indexOf("$") + 1)
                  e.has(i) ? (o = !1) : e.add(i)
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    t.has(r.type) ? (o = !1) : t.add(r.type)
                    break
                  case "meta":
                    for (var c = 0, l = u.length; c < l; c++) {
                      var s = u[c]
                      if (r.props.hasOwnProperty(s))
                        if ("charSet" === s) n.has(s) ? (o = !1) : n.add(s)
                        else {
                          var f = r.props[s],
                            p = a[s] || new Set()
                          p.has(f) ? (o = !1) : (p.add(f), (a[s] = p))
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return r.default.cloneElement(e, { key: n })
          })
      }
      function h(e) {
        var t = e.children,
          n = (0, r.useContext)(i.AmpStateContext),
          a = (0, r.useContext)(c.HeadManagerContext)
        return r.default.createElement(
          o.default,
          {
            reduceComponentsToState: d,
            headManager: a,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t
        )
      }
      h.rewind = function () {}
      var m = h
      t.default = m
    },
    "9Dj+": function (e, t, n) {
      "use strict"
      var a = n("q1tI"),
        r = n.n(a),
        o = n("8Kt/"),
        i = n.n(o),
        c = n("7O5W"),
        l = n("8tEE"),
        s = n("y9Zw"),
        f = function () {
          var e = Object(s.a)().copyright
          return "\xa9 ".concat(new Date().getFullYear(), " ").concat(e)
        },
        p = n("tcnT"),
        u = r.a.createElement,
        d = function () {
          Object(s.a)().social
          return u(
            "footer",
            { className: "w-full pb-8" },
            u(
              p.a,
              null,
              u(
                "div",
                { className: "text-xs pt-8 text-center text-white-80" },
                f()
              )
            )
          )
        }
      d.defaultProps = { crumbs: [] }
      var h = d,
        m = r.a.createElement
      c.b.add(l.a)
      t.a = function (e) {
        e.title, e.path
        var t = e.children
        return m(
          r.a.Fragment,
          null,
          m(
            i.a,
            null,
            m("link", {
              href:
                "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap",
              rel: "stylesheet",
            })
          ),
          m("main", { className: "min-screen-h bg-dark-gray shadow-card" }, t),
          m(h, null)
        )
      }
    },
    FYa8: function (e, t, n) {
      "use strict"
      var a
      ;(t.__esModule = !0), (t.HeadManagerContext = void 0)
      var r = ((a = n("q1tI")) && a.__esModule
        ? a
        : { default: a }
      ).default.createContext({})
      t.HeadManagerContext = r
    },
    H8eV: function (e, t, n) {
      "use strict"
      var a = n("q1tI"),
        r = n.n(a),
        o = n("y9Zw"),
        i = n("8Kt/"),
        c = n.n(i)
      function l(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t)
      }
      var s = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        f = function (e) {
          var t = []
          e.titleTemplate && (s.templateTitle = e.titleTemplate)
          var n = ""
          e.title &&
            ((n = e.title),
            s.templateTitle &&
              (n = s.templateTitle.replace(/%s/g, function () {
                return n
              })),
            t.push(r.a.createElement("title", { key: "title" }, n)))
          var a = e.noindex || s.noindex || e.dangerouslySetAllPagesToNoIndex,
            o = e.nofollow || s.nofollow || e.dangerouslySetAllPagesToNoFollow
          if (
            (a || o
              ? (e.dangerouslySetAllPagesToNoIndex && (s.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0),
                t.push(
                  r.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (a ? "noindex" : "index") +
                      "," +
                      (o ? "nofollow" : "follow"),
                  })
                ),
                t.push(
                  r.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content:
                      (a ? "noindex" : "index") +
                      "," +
                      (o ? "nofollow" : "follow"),
                  })
                ))
              : (t.push(
                  r.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow",
                  })
                ),
                t.push(
                  r.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content: "index,follow",
                  })
                )),
            e.description &&
              t.push(
                r.a.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.mobileAlternate &&
              t.push(
                r.a.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                t.push(
                  r.a.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                )
              }),
            e.twitter &&
              (e.twitter.cardType &&
                t.push(
                  r.a.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                t.push(
                  r.a.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                t.push(
                  r.a.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              t.push(
                r.a.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                t.push(
                  r.a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var i = e.openGraph.type.toLowerCase()
              t.push(
                r.a.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: i,
                })
              ),
                "profile" === i && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === i && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "book:author:0" + n,
                            property: "book:author",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.book.isbn &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "book:tag:0" + n,
                            property: "book:tag",
                            content: e,
                          })
                        )
                      }))
                  : "article" === i && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "article:author:0" + n,
                            property: "article:author",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.article.section &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "article:tag:0" + n,
                            property: "article:tag",
                            content: e,
                          })
                        )
                      }))
                  : ("video.movie" !== i &&
                      "video.episode" !== i &&
                      "video.tv_show" !== i &&
                      "video.other" !== i) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, n) {
                        e.profile &&
                          t.push(
                            r.a.createElement("meta", {
                              key: "video:actor:0" + n,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            t.push(
                              r.a.createElement("meta", {
                                key: "video:actor:role:0" + n,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            )
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "video:director:0" + n,
                            property: "video:director",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "video:writer:0" + n,
                            property: "video:writer",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.duration &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, n) {
                        t.push(
                          r.a.createElement("meta", {
                            key: "video:tag:0" + n,
                            property: "video:tag",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.series &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ))
            }
            ;(e.openGraph.title || e.title) &&
              t.push(
                r.a.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: e.openGraph.title || n,
                })
              ),
              (e.openGraph.description || e.description) &&
                t.push(
                  r.a.createElement("meta", {
                    key: "og:description",
                    property: "og:description",
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth &&
                (s.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (s.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, n) {
                  t.push(
                    r.a.createElement("meta", {
                      key: "og:image:0" + n,
                      property: "og:image",
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "og:image:alt0" + n,
                          property: "og:image:alt",
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          r.a.createElement("meta", {
                            key: "og:image:width0" + n,
                            property: "og:image:width",
                            content: e.width.toString(),
                          })
                        )
                      : s.defaultOpenGraphImageWidth &&
                        t.push(
                          r.a.createElement("meta", {
                            key: "og:image:width0" + n,
                            property: "og:image:width",
                            content: s.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          r.a.createElement("meta", {
                            key: "og:image:height" + n,
                            property: "og:image:height",
                            content: e.height.toString(),
                          })
                        )
                      : s.defaultOpenGraphImageHeight &&
                        t.push(
                          r.a.createElement("meta", {
                            key: "og:image:height" + n,
                            property: "og:image:height",
                            content: s.defaultOpenGraphImageHeight.toString(),
                          })
                        )
                }),
              e.defaultOpenGraphVideoWidth &&
                (s.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (s.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, n) {
                  t.push(
                    r.a.createElement("meta", {
                      key: "og:video:0" + n,
                      property: "og:video",
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        r.a.createElement("meta", {
                          key: "og:video:alt0" + n,
                          property: "og:video:alt",
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          r.a.createElement("meta", {
                            key: "og:video:width0" + n,
                            property: "og:video:width",
                            content: e.width.toString(),
                          })
                        )
                      : s.defaultOpenGraphVideoWidth &&
                        t.push(
                          r.a.createElement("meta", {
                            key: "og:video:width0" + n,
                            property: "og:video:width",
                            content: s.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          r.a.createElement("meta", {
                            key: "og:video:height" + n,
                            property: "og:video:height",
                            content: e.height.toString(),
                          })
                        )
                      : s.defaultOpenGraphVideoHeight &&
                        t.push(
                          r.a.createElement("meta", {
                            key: "og:video:height" + n,
                            property: "og:video:height",
                            content: s.defaultOpenGraphVideoHeight.toString(),
                          })
                        )
                }),
              e.openGraph.locale &&
                t.push(
                  r.a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                t.push(
                  r.a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                )
          }
          return (
            e.canonical &&
              t.push(
                r.a.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                t.push(
                  r.a.createElement(
                    "meta",
                    Object.assign({ key: e.name ? e.name : e.property }, e)
                  )
                )
              }),
            t
          )
        },
        p =
          (a.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this
            }
            return (
              l(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  n = e.noindex,
                  a = void 0 !== n && n,
                  o = e.nofollow,
                  i = e.description,
                  l = e.canonical,
                  s = e.openGraph,
                  p = e.facebook,
                  u = e.twitter,
                  d = e.additionalMetaTags,
                  h = e.titleTemplate,
                  m = e.mobileAlternate,
                  g = e.languageAlternates
                return r.a.createElement(
                  c.a,
                  null,
                  f({
                    title: t,
                    noindex: a,
                    nofollow: o,
                    description: i,
                    canonical: l,
                    facebook: p,
                    openGraph: s,
                    additionalMetaTags: d,
                    twitter: u,
                    titleTemplate: h,
                    mobileAlternate: m,
                    languageAlternates: g,
                  })
                )
              }),
              t
            )
          })(a.Component)),
        u = r.a.createElement,
        d = function (e) {
          var t = e.title,
            n = e.description,
            a = e.path,
            r = (e.lang, e.index),
            i = Object(o.a)(),
            c = i.siteTitle,
            l = i.siteDescription,
            s = i.siteUrl,
            f = (i.author, i.keywords),
            d = "" !== t ? "".concat(t, " | ").concat(c) : c,
            h = "" !== n ? n : "Home" == t ? l : "",
            m = "".concat(s).concat(a)
          return u(p, {
            title: d,
            description: h,
            canonical: m,
            noindex: !r,
            nofollow: !r,
            additionalMetaTags: [{ name: "keywords", content: f.join(", ") }],
            openGraph: {
              url: m,
              title: d,
              description: h,
              locale: "en_US",
              site_name: c,
              type: "website",
            },
          })
        }
      d.defaultProps = {
        lang: "en",
        title: "",
        description: "",
        path: "",
        index: !0,
      }
      t.a = d
    },
    T0f4: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          n(t)
        )
      }
      e.exports = n
    },
    Xuae: function (e, t, n) {
      "use strict"
      var a = n("mPvQ"),
        r = n("/GRZ"),
        o = n("i2R6"),
        i = (n("qXWd"), n("48fX")),
        c = n("tCBg"),
        l = n("T0f4")
      function s(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = l(e)
          if (t) {
            var r = l(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return c(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var f = n("q1tI"),
        p = (function (e) {
          i(n, e)
          var t = s(n)
          function n(e) {
            var o
            return (
              r(this, n),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      a(o.props.headManager.mountedInstances),
                      o.props
                    )
                  )
              }),
              (o._hasHeadManager =
                o.props.headManager && o.props.headManager.mountedInstances),
              o
            )
          }
          return (
            o(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: "render",
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.default = p
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        )
      }
    },
    lwAK: function (e, t, n) {
      "use strict"
      var a
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var r = ((a = n("q1tI")) && a.__esModule
        ? a
        : { default: a }
      ).default.createContext({})
      t.AmpStateContext = r
    },
    mPvQ: function (e, t, n) {
      var a = n("5fIB"),
        r = n("rlHP"),
        o = n("KckH"),
        i = n("kG2m")
      e.exports = function (e) {
        return a(e) || r(e) || o(e) || i()
      }
    },
    oI91: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
    },
    qXWd: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
    },
    tCBg: function (e, t, n) {
      var a = n("C+bE"),
        r = n("qXWd")
      e.exports = function (e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t) ? r(e) : t
      }
    },
    tcnT: function (e, t, n) {
      "use strict"
      var a = n("q1tI"),
        r = n.n(a).a.createElement,
        o = ""
          .concat("pl-2 md:pl-8 lg:pl-20 xl:pl-32 2xl:pl-40 3xl:pl-56", " ")
          .concat("pr-2 md:pr-8 lg:pr-20 xl:pr-32 2xl:pr-40 3xl:pr-56"),
        i = function (e) {
          var t = e.className,
            n = e.style,
            a = e.children
          return r(
            "div",
            { className: "".concat(o, " ").concat(t), style: n },
            a
          )
        }
      ;(i.defaultProps = { className: "", style: {} }), (t.a = i)
    },
    w1t4: function (e) {
      e.exports = JSON.parse(
        '{"siteTitle":"Dead Man\'s Toe Productions","copyright":"Dead Man\'s Toe Productions","author":{"name":"Arianna Armon"},"siteDescription":"Dead Man\'s Toe Productions","siteUrl":"https://www.deadmanstoeproductions.com/","social":{"instagram":"dmt.prod"},"keywords":["Dead Man\'s Toe Productions"]}'
      )
    },
    y9Zw: function (e, t, n) {
      "use strict"
      var a = n("w1t4")
      t.a = function () {
        return a
      }
    },
    yLpj: function (e, t) {
      var n
      n = (function () {
        return this
      })()
      try {
        n = n || new Function("return this")()
      } catch (a) {
        "object" === typeof window && (n = window)
      }
      e.exports = n
    },
  },
])
