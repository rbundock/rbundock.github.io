/*!
 * ScrollTrigger 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? t(exports) : 'function' == typeof define && define.amd ? define(['exports'], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function J(e) {
    return e;
  }
  function K(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function L() {
    return 'undefined' != typeof window;
  }
  function M() {
    return Se || (L() && (Se = window.gsap) && Se.registerPlugin && Se);
  }
  function N(e) {
    return !!~o.indexOf(e);
  }
  function O(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }
  function P(t, e) {
    var r = e.s,
      n = e.sc,
      o = h.indexOf(t),
      i = n === ot.sc ? 1 : 2;
    return (
      ~o || (o = h.push(t) - 1),
      h[o + i] ||
        (h[o + i] =
          O(t, r) ||
          (N(t)
            ? n
            : function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              }))
    );
  }
  function Q(e) {
    return (
      O(e, 'getBoundingClientRect') ||
      (N(e)
        ? function () {
            return (pt.width = Me.innerWidth), (pt.height = Me.innerHeight), pt;
          }
        : function () {
            return it(e);
          })
    );
  }
  function T(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return (r = 'scroll' + n) && (i = O(e, r)) ? i() - Q(e)()[o] : N(e) ? Math.max(ke[r], Pe[r]) - (Me['inner' + n] || ke['client' + n] || Pe['client' + n]) : e[r] - e['offset' + n];
  }
  function U(e, t) {
    for (var r = 0; r < d.length; r += 3) (t && !~t.indexOf(d[r + 1])) || e(d[r], d[r + 1], d[r + 2]);
  }
  function V(e) {
    return 'string' == typeof e;
  }
  function W(e) {
    return 'function' == typeof e;
  }
  function X(e) {
    return 'number' == typeof e;
  }
  function Y(e) {
    return 'object' == typeof e;
  }
  function Z(e) {
    return W(e) && e();
  }
  function $(r, n) {
    return function () {
      var e = Z(r),
        t = Z(n);
      return function () {
        Z(e), Z(t);
      };
    };
  }
  function ta(e) {
    return Me.getComputedStyle(e);
  }
  function va(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function xa(e, t) {
    var r = t.d2;
    return e['offset' + r] || e['client' + r] || 0;
  }
  function ya(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function Ba(t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n);
    });
  }
  function Ca(e, t, r) {
    return e.addEventListener(t, r, { passive: !0 });
  }
  function Da(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function Ha(e, t) {
    if (V(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))), (e = n + (e in w ? w[e] * t : ~e.indexOf('%') ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0));
    }
    return e;
  }
  function Ia(e, t, r, n, o, i, a) {
    var s = o.startColor,
      l = o.endColor,
      c = o.fontSize,
      f = o.indent,
      u = o.fontWeight,
      p = _e.createElement('div'),
      d = N(r) || 'fixed' === O(r, 'pinType'),
      g = -1 !== e.indexOf('scroller'),
      h = d ? Pe : r,
      v = -1 !== e.indexOf('start'),
      m = v ? s : l,
      b = 'border-color:' + m + ';font-size:' + c + ';color:' + m + ';font-weight:' + u + ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (b += 'position:' + (g && d ? 'fixed;' : 'absolute;')), (!g && d) || (b += (n === ot ? x : y) + ':' + (i + parseFloat(f)) + 'px;'), a && (b += 'box-sizing:border-box;text-align:left;width:' + a.offsetWidth + 'px;'), (p._isStart = v), p.setAttribute('class', 'gsap-marker-' + e), (p.style.cssText = b), (p.innerText = t || 0 === t ? e + '-' + t : e), h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p), (p._offset = p['offset' + n.op.d2]), C(p, 0, n, v), p;
  }
  function Ma() {
    return (l = l || s(D));
  }
  function Na() {
    l || ((l = s(D)), Xe || E('scrollStart'), (Xe = He()));
  }
  function Oa() {
    return !Le && !r && !_e.fullscreenElement && a.restart(!0);
  }
  function Ua(e) {
    var t,
      r = Se.ticker.frame,
      n = [],
      o = 0;
    if (g !== r || De) {
      for (z(); o < k.length; o += 4) (t = Me.matchMedia(k[o]).matches) !== k[o + 3] && ((k[o + 3] = t) ? n.push(o) : z(1, k[o]) || (W(k[o + 2]) && k[o + 2]()));
      for (A(), o = 0; o < n.length; o++) (t = n[o]), (Ve = k[t]), (k[t + 2] = k[t + 1](e));
      (Ve = 0), i && B(0, 1), (g = r), E('matchMedia');
    }
  }
  function Va() {
    return Da(G, 'scrollEnd', Va) || B(!0);
  }
  function fb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var o, i = F.length, a = t.style, s = e.style; i--; ) a[(o = F[i])] = r[o];
      (a.position = 'absolute' === r.position ? 'absolute' : 'relative'), 'inline' === r.display && (a.display = 'inline-block'), (s[y] = s[x] = 'auto'), (a.overflow = 'visible'), (a.boxSizing = 'border-box'), (a[Je] = xa(e, nt) + rt), (a[qe] = xa(e, ot) + rt), (a[Ge] = s[et] = s.top = s[m] = '0'), ut(n), (s[Je] = s.maxWidth = r[Je]), (s[qe] = s.maxHeight = r[qe]), (s[Ge] = r[Ge]), e.parentNode.insertBefore(t, e), t.appendChild(e);
    }
  }
  function ib(e) {
    for (var t = H.length, r = e.style, n = [], o = 0; o < t; o++) n.push(H[o], r[H[o]]);
    return (n.t = e), n;
  }
  function lb(e, t, r, n, o, i, a, s, l, c, f, u) {
    if ((W(e) && (e = e(s)), V(e) && 'max' === e.substr(0, 3) && (e = u + ('=' === e.charAt(4) ? Ha('0' + e.substr(3), r) : 0)), X(e))) a && C(a, r, n, !0);
    else {
      W(t) && (t = t(s));
      var p,
        d,
        g,
        h = Ee(t)[0] || Pe,
        v = it(h) || {},
        m = e.split(' ');
      (v && (v.left || v.top)) || 'none' !== ta(h).display || ((g = h.style.display), (h.style.display = 'block'), (v = it(h)), g ? (h.style.display = g) : h.style.removeProperty('display')), (p = Ha(m[0], v[n.d])), (d = Ha(m[1] || '0', r)), (e = v[n.p] - l[n.p] - c + p + o - d), a && C(a, d, n, r - d < 20 || (a._isStart && 20 < d)), (r -= r - d);
    }
    if (i) {
      var b = e + r,
        x = i._isStart;
      (u = 'scroll' + n.d2), C(i, b, n, (x && 20 < b) || (!x && (f ? Math.max(Pe[u], ke[u]) : i.parentNode[u]) <= b + 1)), f && ((l = it(a)), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + rt));
    }
    return Math.round(e);
  }
  function nb(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === Pe) {
        for (o in ((e._stOrig = a.cssText), (i = ta(e)))) +o || j.test(o) || !i[o] || 'string' != typeof a[o] || '0' === o || (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Se.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function ob(l, e) {
    function Ue(e, t, r, n, o) {
      var i = Ue.tween,
        a = t.onComplete,
        s = {};
      return (
        i && i.kill(),
        (c = Math.round(r)),
        (t[p] = e),
        ((t.modifiers = s)[p] = function (e) {
          return (e = K(u())) !== c && e !== f && 2 < Math.abs(e - c) ? (i.kill(), (Ue.tween = 0)) : (e = r + n * i.ratio + o * i.ratio * i.ratio), (f = c), (c = K(e));
        }),
        (t.onComplete = function () {
          (Ue.tween = 0), a && a.call(i);
        }),
        (i = Ue.tween = Se.to(l, t))
      );
    }
    var c,
      f,
      u = P(l, e),
      p = '_scroll' + e.p2;
    return (
      (l[p] = u),
      l.addEventListener('wheel', function () {
        return Ue.tween && Ue.tween.kill() && (Ue.tween = 0);
      }),
      Ue
    );
  }
  var Se,
    i,
    Me,
    _e,
    ke,
    Pe,
    o,
    a,
    s,
    l,
    Ee,
    Ne,
    Ie,
    c,
    Le,
    Ae,
    f,
    ze,
    u,
    p,
    d,
    We,
    Be,
    r,
    Re,
    Ve,
    g,
    De = 1,
    Fe = [],
    h = [],
    He = Date.now,
    v = He(),
    Xe = 0,
    Ye = 1,
    Ze = Math.abs,
    t = 'scrollLeft',
    n = 'scrollTop',
    m = 'left',
    x = 'right',
    y = 'bottom',
    Je = 'width',
    qe = 'height',
    $e = 'Right',
    je = 'Left',
    Ke = 'Top',
    Qe = 'Bottom',
    Ge = 'padding',
    et = 'margin',
    tt = 'Width',
    b = 'Height',
    rt = 'px',
    nt = {
      s: t,
      p: m,
      p2: je,
      os: x,
      os2: $e,
      d: Je,
      d2: tt,
      a: 'x',
      sc: function sc(e) {
        return arguments.length ? Me.scrollTo(e, ot.sc()) : Me.pageXOffset || _e[t] || ke[t] || Pe[t] || 0;
      },
    },
    ot = {
      s: n,
      p: 'top',
      p2: Ke,
      os: y,
      os2: Qe,
      d: qe,
      d2: b,
      a: 'y',
      op: nt,
      sc: function sc(e) {
        return arguments.length ? Me.scrollTo(nt.sc(), e) : Me.pageYOffset || _e[n] || ke[n] || Pe[n] || 0;
      },
    },
    it = function _getBounds(e, t) {
      var r = t && 'matrix(1, 0, 0, 1, 0, 0)' !== ta(e)[f] && Se.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    at = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
    st = { toggleActions: 'play', anticipatePin: 0 },
    w = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    C = function _positionMarker(e, t, r, n) {
      var o = { display: 'block' },
        i = r[n ? 'os2' : 'p2'],
        a = r[n ? 'p2' : 'os2'];
      (e._isFlipped = n), (o[r.a + 'Percent'] = n ? -100 : 0), (o[r.a] = n ? '1px' : 0), (o['border' + i + tt] = 1), (o['border' + a + tt] = 0), (o[r.p] = t + 'px'), Se.set(e, o);
    },
    lt = [],
    ct = {},
    S = {},
    _ = [],
    k = [],
    E = function _dispatch(e) {
      return (
        (S[e] &&
          S[e].map(function (e) {
            return e();
          })) ||
        _
      );
    },
    I = [],
    A = function _revertRecorded(e) {
      for (var t = 0; t < I.length; t += 4) (e && I[t + 3] !== e) || ((I[t].style.cssText = I[t + 1]), (I[t + 2].uncache = 1));
    },
    z = function _revertAll(e, t) {
      var r;
      for (ze = 0; ze < lt.length; ze++) (r = lt[ze]), (t && r.media !== t) || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
      A(t), t || E('revert');
    },
    B = function _refreshAll(e, t) {
      if (!Xe || e) {
        var r = E('refreshInit');
        for (We && G.sort(), t || z(), ze = 0; ze < lt.length; ze++) lt[ze].refresh();
        for (
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
            ze = lt.length;
          ze--;

        )
          lt[ze].scroll.rec = 0;
        a.pause(), E('refresh');
      } else Ca(G, 'scrollEnd', Va);
    },
    R = 0,
    ft = 1,
    D = function _updateAll() {
      var e = lt.length,
        t = He(),
        r = 50 <= t - v,
        n = e && lt[0].scroll();
      if (((ft = n < R ? -1 : 1), (R = n), r && (Xe && !Ae && 200 < t - Xe && ((Xe = 0), E('scrollEnd')), (Ie = v), (v = t)), ft < 0)) {
        for (ze = e; 0 < ze--; ) lt[ze] && lt[ze].update(0, r);
        ft = 1;
      } else for (ze = 0; ze < e; ze++) lt[ze] && lt[ze].update(0, r);
      l = 0;
    },
    F = [m, 'top', y, x, et + Qe, et + $e, et + Ke, et + je, 'display', 'flexShrink', 'float', 'zIndex'],
    H = F.concat([Je, qe, 'boxSizing', 'max' + tt, 'max' + b, 'position', et, Ge, Ge + Ke, Ge + $e, Ge + Qe, Ge + je]),
    q = /([A-Z])/g,
    ut = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Se.core.getCache(e.t)).uncache = 1; i < o; i += 2) (r = e[i + 1]), (t = e[i]), r ? (n[t] = r) : n[t] && n.removeProperty(t.replace(q, '-$1').toLowerCase());
      }
    },
    pt = { left: 0, top: 0 },
    j = /(?:webkit|moz|length|cssText|inset)/i;
  nt.op = ot;
  var G =
    ((ScrollTrigger.prototype.init = function init(w, C) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), Ye)) {
        var d,
          n,
          u,
          S,
          M,
          _,
          k,
          E,
          I,
          L,
          A,
          z,
          e,
          U,
          B,
          R,
          D,
          F,
          t,
          H,
          g,
          Z,
          q,
          h,
          $,
          v,
          m,
          r,
          b,
          x,
          j,
          o,
          p,
          y,
          K,
          G,
          ee,
          te = (w = va(V(w) || X(w) || w.nodeType ? { trigger: w } : w, st)).horizontal ? nt : ot,
          re = w.onUpdate,
          ne = w.toggleClass,
          i = w.id,
          oe = w.onToggle,
          ie = w.onRefresh,
          a = w.scrub,
          ae = w.trigger,
          se = w.pin,
          le = w.pinSpacing,
          ce = w.invalidateOnRefresh,
          fe = w.anticipatePin,
          s = w.onScrubComplete,
          ue = w.onSnapComplete,
          pe = w.once,
          de = w.snap,
          ge = w.pinReparent,
          he = !a && 0 !== a,
          ve = Ee(w.scroller || Me)[0],
          l = Se.core.getCache(ve),
          me = N(ve),
          be = 'pinType' in w ? 'fixed' === w.pinType : me || 'fixed' === O(ve, 'pinType'),
          xe = [w.onEnter, w.onLeave, w.onEnterBack, w.onLeaveBack],
          ye = he && w.toggleActions.split(' '),
          c = 'markers' in w ? w.markers : st.markers,
          we = me ? 0 : parseFloat(ta(ve)['border' + te.p2 + tt]) || 0,
          Ce = this,
          f =
            w.onRefreshInit &&
            function () {
              return w.onRefreshInit(Ce);
            },
          Te = (function _getSizeFunc(e, t, r) {
            var n = r.d,
              o = r.d2,
              i = r.a;
            return (i = O(e, 'getBoundingClientRect'))
              ? function () {
                  return i()[n];
                }
              : function () {
                  return (t ? Me['inner' + o] : e['client' + o]) || 0;
                };
          })(ve, me, te),
          Oe = (function _getOffsetsFunc(e, t) {
            return !t || ~Fe.indexOf(e)
              ? Q(e)
              : function () {
                  return pt;
                };
          })(ve, me);
        (Ce.media = Ve),
          (fe *= 45),
          lt.push(Ce),
          (Ce.scroller = ve),
          (Ce.scroll = P(ve, te)),
          (M = Ce.scroll()),
          (Ce.vars = w),
          (C = C || w.animation),
          'refreshPriority' in w && (We = 1),
          (l.tweenScroll = l.tweenScroll || { top: ob(ve, ot), left: ob(ve, nt) }),
          (Ce.tweenTo = d = l.tweenScroll[te.p]),
          C &&
            ((C.vars.lazy = !1),
            C._initted || (!1 !== C.vars.immediateRender && !1 !== w.immediateRender && C.render(0, !0, !0)),
            (Ce.animation = C.pause()),
            (C.scrollTrigger = Ce),
            (o = X(a) && a) &&
              (j = Se.to(C, {
                ease: 'power3',
                duration: o,
                onComplete: function onComplete() {
                  return s && s(Ce);
                },
              })),
            (b = 0),
            (i = i || C.vars.id)),
          de &&
            (Y(de) || (de = { snapTo: de }),
            'scrollBehavior' in Pe.style && Se.set(me ? [Pe, ke] : ve, { scrollBehavior: 'auto' }),
            (u = W(de.snapTo)
              ? de.snapTo
              : 'labels' === de.snapTo
              ? (function _getClosestLabel(t) {
                  return function (e) {
                    return Se.utils.snap(ya(t), e);
                  };
                })(C)
              : 'labelsDirectional' === de.snapTo
              ? (function _getLabelAtDirection(o) {
                  return function (e, t) {
                    var r,
                      n = ya(o);
                    if (
                      (n.sort(function (e, t) {
                        return e - t;
                      }),
                      0 < t.direction)
                    ) {
                      for (e -= 1e-4, r = 0; r < n.length; r++) if (n[r] >= e) return n[r];
                      return n.pop();
                    }
                    for (r = n.length, e += 1e-4; r--; ) if (n[r] <= e) return n[r];
                    return n[0];
                  };
                })(C)
              : Se.utils.snap(de.snapTo)),
            (p = de.duration || { min: 0.1, max: 2 }),
            (p = Y(p) ? Ne(p.min, p.max) : Ne(p, p)),
            (y = Se.delayedCall(de.delay || o / 2 || 0.1, function () {
              if (Math.abs(Ce.getVelocity()) < 10 && !Ae) {
                var e = C && !he ? C.totalProgress() : Ce.progress,
                  t = ((e - x) / (He() - Ie)) * 1e3 || 0,
                  r = (Ze(t / 2) * t) / 0.185,
                  n = e + (!1 === de.inertia ? 0 : r),
                  o = Ne(0, 1, u(n, Ce)),
                  i = Ce.scroll(),
                  a = Math.round(k + o * U),
                  s = de.onStart,
                  l = de.onInterrupt,
                  c = de.onComplete,
                  f = d.tween;
                if (i <= E && k <= i && a !== i) {
                  if (f && !f._initted && f.data <= Math.abs(a - i)) return;
                  d(
                    a,
                    {
                      duration: p(Ze((0.185 * Math.max(Ze(n - e), Ze(o - e))) / t / 0.05 || 0)),
                      ease: de.ease || 'power3',
                      data: Math.abs(a - i),
                      onInterrupt: function onInterrupt() {
                        return y.restart(!0) && l && l(Ce);
                      },
                      onComplete: function onComplete() {
                        (b = x = C && !he ? C.totalProgress() : Ce.progress), ue && ue(Ce), c && c(Ce);
                      },
                    },
                    i,
                    r * U,
                    a - i - r * U
                  ),
                    s && s(Ce, d.tween);
                }
              } else Ce.isActive && y.restart(!0);
            }).pause())),
          i && (ct[i] = Ce),
          (ae = Ce.trigger = Ee(ae || se)[0]),
          (se = !0 === se ? ae : Ee(se)[0]),
          V(ne) && (ne = { targets: ae, className: ne }),
          se && (!1 === le || le === et || (le = !(!le && 'flex' === ta(se.parentNode).display) && Ge), (Ce.pin = se), !1 !== w.force3D && Se.set(se, { force3D: !0 }), (n = Se.core.getCache(se)).spacer ? (B = n.pinState) : ((n.spacer = F = _e.createElement('div')), F.setAttribute('class', 'pin-spacer' + (i ? ' pin-spacer-' + i : '')), (n.pinState = B = ib(se))), (Ce.spacer = F = n.spacer), (r = ta(se)), (h = r[le + te.os2]), (H = Se.getProperty(se)), (g = Se.quickSetter(se, te.a, rt)), fb(se, F, r), (D = ib(se))),
          c &&
            ((e = Y(c) ? va(c, at) : at),
            (A = Ia('scroller-start', i, ve, te, e, 0)),
            (z = Ia('scroller-end', i, ve, te, e, 0, A)),
            (t = A['offset' + te.op.d2]),
            (I = Ia('start', i, ve, te, e, t)),
            (L = Ia('end', i, ve, te, e, t)),
            be ||
              ((function _makePositionable(e) {
                e.style.position = 'absolute' === ta(e).position ? 'absolute' : 'relative';
              })(me ? Pe : ve),
              Se.set([A, z], { force3D: !0 }),
              (v = Se.quickSetter(A, te.a, rt)),
              (m = Se.quickSetter(z, te.a, rt)))),
          (Ce.revert = function (e) {
            var t = !1 !== e || !Ce.enabled,
              r = Le;
            t !== S &&
              (t && ((G = Math.max(Ce.scroll(), Ce.scroll.rec || 0)), (K = Ce.progress), (ee = C && C.progress())),
              I &&
                [I, L, A, z].forEach(function (e) {
                  return (e.style.display = t ? 'none' : 'block');
                }),
              t && (Le = 1),
              Ce.update(t),
              (Le = r),
              se &&
                (t
                  ? (function _swapPinOut(e, t, r) {
                      if ((ut(r), e.parentNode === t)) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                      }
                    })(se, F, B)
                  : (ge && Ce.isActive) || fb(se, F, ta(se), $)),
              (S = t));
          }),
          (Ce.refresh = function (e, t) {
            if ((!Le && Ce.enabled) || t)
              if (se && e && Xe) Ca(ScrollTrigger, 'scrollEnd', Va);
              else {
                (Le = 1), j && j.pause(), ce && C && C.progress(0).invalidate(), S || Ce.revert();
                for (var r, n, o, i, a, s, l, c, f, u = Te(), p = Oe(), d = T(ve, te), g = 0, h = 0, v = w.end, m = w.endTrigger || ae, b = w.start || (0 !== w.start && ae ? (se ? '0 0' : '0 100%') : 0), x = (ae && Math.max(0, lt.indexOf(Ce))) || 0, y = x; y--; ) (s = lt[y]).end || s.refresh(0, 1) || (Le = 1), !(l = s.pin) || (l !== ae && l !== se) || s.revert();
                for (k = lb(b, ae, u, te, Ce.scroll(), I, A, Ce, p, we, be, d) || (se ? -0.001 : 0), W(v) && (v = v(Ce)), V(v) && !v.indexOf('+=') && (~v.indexOf(' ') ? (v = (V(b) ? b.split(' ')[0] : '') + v) : ((g = Ha(v.substr(2), u)), (v = V(b) ? b : k + g), (m = ae))), E = Math.max(k, lb(v || (m ? '100% 0' : d), m, u, te, Ce.scroll() + g, L, z, Ce, p, we, be, d)) || -0.001, U = E - k || ((k -= 0.01) && 0.001), g = 0, y = x; y--; ) (l = (s = lt[y]).pin) && s.start - s._pinPush < k && ((r = s.end - s.start), l === ae && (g += r), l === se && (h += r));
                if (((k += g), (E += g), (Ce._pinPush = h), I && g && (((r = {})[te.a] = '+=' + g), Se.set([I, L], r)), se))
                  (r = ta(se)),
                    (i = te === ot),
                    (o = Ce.scroll()),
                    (Z = parseFloat(H(te.a)) + h),
                    !d && 1 < E && ((me ? Pe : ve).style['overflow-' + te.a] = 'scroll'),
                    fb(se, F, r),
                    (D = ib(se)),
                    (n = it(se, !0)),
                    (c = be && P(ve, i ? nt : ot)()),
                    le && ((($ = [le + te.os2, U + h + rt]).t = F), (y = le === Ge ? xa(se, te) + U + h : 0) && $.push(te.d, y + rt), ut($), be && Ce.scroll(G)),
                    be &&
                      (((a = { top: n.top + (i ? o - k : c) + rt, left: n.left + (i ? c : o - k) + rt, boxSizing: 'border-box', position: 'fixed' })[Je] = a.maxWidth = Math.ceil(n.width) + rt),
                      (a[qe] = a.maxHeight = Math.ceil(n.height) + rt),
                      (a[et] = a[et + Ke] = a[et + $e] = a[et + Qe] = a[et + je] = '0'),
                      (a[Ge] = r[Ge]),
                      (a[Ge + Ke] = r[Ge + Ke]),
                      (a[Ge + $e] = r[Ge + $e]),
                      (a[Ge + Qe] = r[Ge + Qe]),
                      (a[Ge + je] = r[Ge + je]),
                      (R = (function _copyState(e, t, r) {
                        for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                        return (o.t = e.t), o;
                      })(B, a, ge))),
                    C ? ((f = C._initted), Be(1), C.progress(1, !0), (q = H(te.a) - Z + U + h), U !== q && R.splice(R.length - 2, 2), C.progress(0, !0), f || C.invalidate(), Be(0)) : (q = U);
                else if (ae && Ce.scroll()) for (n = ae.parentNode; n && n !== Pe; ) n._pinOffset && ((k -= n._pinOffset), (E -= n._pinOffset)), (n = n.parentNode);
                for (y = 0; y < x; y++) !(s = lt[y].pin) || (s !== ae && s !== se) || lt[y].revert(!1);
                (Ce.start = k), (Ce.end = E), (M = _ = Ce.scroll()) < G && Ce.scroll(G), Ce.revert(!1), (Le = 0), C && he && C._initted && C.progress(ee, !0).render(C.time(), !0, !0), K !== Ce.progress && (j && C.totalProgress(K, !0), (Ce.progress = K), Ce.update()), se && le && (F._pinOffset = Math.round(Ce.progress * q)), ie && ie(Ce);
              }
          }),
          (Ce.getVelocity = function () {
            return ((Ce.scroll() - _) / (He() - Ie)) * 1e3 || 0;
          }),
          (Ce.update = function (e, t) {
            var r,
              n,
              o,
              i,
              a,
              s = Ce.scroll(),
              l = e ? 0 : (s - k) / U,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              f = Ce.progress;
            if ((t && ((_ = M), (M = s), de && ((x = b), (b = C && !he ? C.totalProgress() : c))), fe && !c && se && !Le && !De && Xe && k < s + ((s - _) / (He() - Ie)) * fe && (c = 1e-4), c !== f && Ce.enabled)) {
              if (((i = (a = (r = Ce.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f), (Ce.direction = f < c ? 1 : -1), (Ce.progress = c), he || (!j || Le || De ? C && C.totalProgress(c, !!Le) : ((j.vars.totalProgress = c), j.invalidate().restart())), se))
                if ((e && le && (F.style[le + te.os2] = h), be)) {
                  if (i) {
                    if (((o = !e && f < c && s < E + 1 && s + 1 >= T(ve, te)), ge))
                      if (e || (!r && !o)) nb(se, F);
                      else {
                        var u = it(se, !0),
                          p = s - k;
                        nb(se, Pe, u.top + (te === ot ? p : 0) + rt, u.left + (te === ot ? 0 : p) + rt);
                      }
                    ut(r || o ? R : D), (q !== U && c < 1 && r) || g(Z + (1 !== c || o ? 0 : q));
                  }
                } else g(Z + q * c);
              !de || d.tween || Le || De || y.restart(!0),
                ne &&
                  (a || (pe && c && (c < 1 || !Re))) &&
                  Ee(ne.targets).forEach(function (e) {
                    return e.classList[r || pe ? 'add' : 'remove'](ne.className);
                  }),
                !re || he || e || re(Ce),
                i && !Le ? ((n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3), he && ((o = (!a && 'none' !== ye[n + 1] && ye[n + 1]) || ye[n]), C && ('complete' === o || 'reset' === o || o in C) && ('complete' === o ? C.pause().totalProgress(1) : 'reset' === o ? C.restart(!0).pause() : C[o]()), re && re(Ce)), (!a && Re) || (oe && a && oe(Ce), xe[n] && xe[n](Ce), pe && (1 === c ? Ce.kill(!1, 1) : (xe[n] = 0)), a || (xe[(n = 1 === c ? 1 : 3)] && xe[n](Ce)))) : he && re && !Le && re(Ce);
            }
            m && (v(s + (A._isFlipped ? 1 : 0)), m(s));
          }),
          (Ce.enable = function () {
            Ce.enabled ||
              ((Ce.enabled = !0),
              Ca(ve, 'resize', Oa),
              Ca(ve, 'scroll', Na),
              f && Ca(ScrollTrigger, 'refreshInit', f),
              C && C.add
                ? Se.delayedCall(0.01, function () {
                    return k || E || Ce.refresh();
                  }) &&
                  (U = 0.01) &&
                  (k = E = 0)
                : Ce.refresh());
          }),
          (Ce.disable = function (e, t) {
            if (Ce.enabled && (!1 !== e && Ce.revert(), (Ce.enabled = Ce.isActive = !1), t || (j && j.pause()), (G = 0), n && (n.uncache = 1), f && Da(ScrollTrigger, 'refreshInit', f), y && (y.pause(), d.tween && d.tween.kill() && (d.tween = 0)), !me)) {
              for (var r = lt.length; r--; ) if (lt[r].scroller === ve && lt[r] !== Ce) return;
              Da(ve, 'resize', Oa), Da(ve, 'scroll', Na);
            }
          }),
          (Ce.kill = function (e, t) {
            Ce.disable(e, t), i && delete ct[i];
            var r = lt.indexOf(Ce);
            lt.splice(r, 1),
              r === ze && 0 < ft && ze--,
              C && ((C.scrollTrigger = null), e && C.render(-1), t || C.kill()),
              I &&
                [I, L, A, z].forEach(function (e) {
                  return e.parentNode.removeChild(e);
                }),
              se &&
                (n && (n.uncache = 1),
                (r = 0),
                lt.forEach(function (e) {
                  return e.pin === se && r++;
                }),
                r || (n.spacer = 0));
          }),
          Ce.enable();
      } else this.update = this.refresh = this.kill = J;
    }),
    (ScrollTrigger.register = function register(e) {
      if (!i && ((Se = e || M()), L() && window.document && ((Me = window), (_e = document), (ke = _e.documentElement), (Pe = _e.body)), Se && ((Ee = Se.utils.toArray), (Ne = Se.utils.clamp), (Be = Se.core.suppressOverwrites || J), Se.core.globals('ScrollTrigger', ScrollTrigger), Pe))) {
        (s =
          Me.requestAnimationFrame ||
          function (e) {
            return setTimeout(e, 16);
          }),
          Ca(Me, 'wheel', Na),
          (o = [Me, _e, ke, Pe]),
          Ca(_e, 'scroll', Na);
        var t,
          r = Pe.style,
          n = r.borderTop;
        (r.borderTop = '1px solid #000'),
          (t = it(Pe)),
          (ot.m = Math.round(t.top + ot.sc()) || 0),
          (nt.m = Math.round(t.left + nt.sc()) || 0),
          n ? (r.borderTop = n) : r.removeProperty('border-top'),
          (c = setInterval(Ma, 200)),
          Se.delayedCall(0.5, function () {
            return (De = 0);
          }),
          Ca(_e, 'touchcancel', J),
          Ca(Pe, 'touchstart', J),
          Ba(Ca, _e, 'pointerdown,touchstart,mousedown', function () {
            return (Ae = 1);
          }),
          Ba(Ca, _e, 'pointerup,touchend,mouseup', function () {
            return (Ae = 0);
          }),
          (f = Se.utils.checkPrefix('transform')),
          H.push(f),
          (i = He()),
          (a = Se.delayedCall(0.2, B).pause()),
          (d = [
            _e,
            'visibilitychange',
            function () {
              var e = Me.innerWidth,
                t = Me.innerHeight;
              _e.hidden ? ((u = e), (p = t)) : (u === e && p === t) || Oa();
            },
            _e,
            'DOMContentLoaded',
            B,
            Me,
            'load',
            function () {
              return Xe || B();
            },
            Me,
            'resize',
            Oa,
          ]),
          U(Ca);
      }
      return i;
    }),
    (ScrollTrigger.defaults = function defaults(e) {
      for (var t in e) st[t] = e[t];
    }),
    (ScrollTrigger.kill = function kill() {
      (Ye = 0),
        lt.slice(0).forEach(function (e) {
          return e.kill(1);
        });
    }),
    (ScrollTrigger.config = function config(e) {
      'limitCallbacks' in e && (Re = !!e.limitCallbacks);
      var t = e.syncInterval;
      (t && clearInterval(c)) || ((c = t) && setInterval(Ma, t)), 'autoRefreshEvents' in e && (U(Da) || U(Ca, e.autoRefreshEvents || 'none'), (r = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
    }),
    (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = Ee(e)[0],
        n = h.indexOf(r),
        o = N(r);
      ~n && h.splice(n, o ? 6 : 2), o ? Fe.unshift(Me, t, Pe, t, ke, t) : Fe.unshift(r, t);
    }),
    (ScrollTrigger.matchMedia = function matchMedia(e) {
      var t, r, n, o, i;
      for (r in e) (n = k.indexOf(r)), (o = e[r]), 'all' === (Ve = r) ? o() : (t = Me.matchMedia(r)) && (t.matches && (i = o()), ~n ? ((k[n + 1] = $(k[n + 1], o)), (k[n + 2] = $(k[n + 2], i))) : ((n = k.length), k.push(r, o, i), t.addListener ? t.addListener(Ua) : t.addEventListener('change', Ua)), (k[n + 3] = t.matches)), (Ve = 0);
      return k;
    }),
    (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
      e || (k.length = 0), 0 <= (e = k.indexOf(e)) && k.splice(e, 4);
    }),
    ScrollTrigger);
  function ScrollTrigger(e, t) {
    i || ScrollTrigger.register(Se) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), this.init(e, t);
  }
  (G.version = '3.6.1'),
    (G.saveStyles = function (e) {
      return e
        ? Ee(e).forEach(function (e) {
            if (e && e.style) {
              var t = I.indexOf(e);
              0 <= t && I.splice(t, 4), I.push(e, e.style.cssText, Se.core.getCache(e), Ve);
            }
          })
        : I;
    }),
    (G.revert = function (e, t) {
      return z(!e, t);
    }),
    (G.create = function (e, t) {
      return new G(e, t);
    }),
    (G.refresh = function (e) {
      return e ? Oa() : B(!0);
    }),
    (G.update = D),
    (G.maxScroll = function (e, t) {
      return T(e, t ? nt : ot);
    }),
    (G.getScrollFunc = function (e, t) {
      return P(Ee(e)[0], t ? nt : ot);
    }),
    (G.getById = function (e) {
      return ct[e];
    }),
    (G.getAll = function () {
      return lt.slice(0);
    }),
    (G.isScrolling = function () {
      return !!Xe;
    }),
    (G.addEventListener = function (e, t) {
      var r = S[e] || (S[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (G.removeEventListener = function (e, t) {
      var r = S[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (G.batch = function (e, t) {
      function yi(e, t) {
        var r = [],
          n = [],
          o = Se.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t) o[r] = 'on' === r.substr(0, 2) && W(t[r]) && 'onRefreshInit' !== r ? yi(0, t[r]) : t[r];
      return (
        W(a) &&
          ((a = a()),
          Ca(G, 'refresh', function () {
            return (a = t.batchMax());
          })),
        Ee(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(G.create(t));
        }),
        n
      );
    }),
    (G.sort = function (e) {
      return lt.sort(
        e ||
          function (e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
          }
      );
    }),
    M() && Se.registerPlugin(G),
    (e.ScrollTrigger = G),
    (e.default = G);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
