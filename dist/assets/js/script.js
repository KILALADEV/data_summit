"use strict";
var App = (() => {
  // dist/assets/js/lenis.js
  var eu = Object.defineProperty;
  var tu = (s18, e, t) => e in s18 ? eu(s18, e, { enumerable: true, configurable: true, writable: true, value: t }) : s18[e] = t;
  var F = (s18, e, t) => tu(s18, typeof e != "symbol" ? e + "" : e, t);
  function oi(s18) {
    if (s18 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s18;
  }
  function Sa(s18, e) {
    s18.prototype = Object.create(e.prototype), s18.prototype.constructor = s18, s18.__proto__ = e;
  }
  var Et = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } };
  var Tr = { duration: 0.5, overwrite: false, delay: 0 };
  var eo;
  var Be;
  var le;
  var At = 1e8;
  var ne = 1 / At;
  var Mn = Math.PI * 2;
  var iu = Mn / 4;
  var ru = 0;
  var Ta = Math.sqrt;
  var su = Math.cos;
  var nu = Math.sin;
  var ze = function(e) {
    return typeof e == "string";
  };
  var me = function(e) {
    return typeof e == "function";
  };
  var di = function(e) {
    return typeof e == "number";
  };
  var to = function(e) {
    return typeof e > "u";
  };
  var ei = function(e) {
    return typeof e == "object";
  };
  var ut = function(e) {
    return e !== false;
  };
  var io = function() {
    return typeof window < "u";
  };
  var ps = function(e) {
    return me(e) || ze(e);
  };
  var xa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
  };
  var je = Array.isArray;
  var Cn = /(?:-?\.?\d|\.)+/gi;
  var ba = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var hr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var nn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var Ea = /[+-]=-?[.\d]+/;
  var Pa = /[^,'"\[\]\s]+/gi;
  var ou = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var fe;
  var qt;
  var On;
  var ro;
  var Pt = {};
  var Bs = {};
  var Ma;
  var Ca = function(e) {
    return (Bs = xr(e, Pt)) && ht;
  };
  var so = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
  };
  var ts = function(e, t) {
    return !t && console.warn(e);
  };
  var Oa = function(e, t) {
    return e && (Pt[e] = t) && Bs && (Bs[e] = t) || Pt;
  };
  var is = function() {
    return 0;
  };
  var au = { suppressEvents: true, isStart: true, kill: false };
  var Os = { suppressEvents: true, kill: false };
  var lu = { suppressEvents: true };
  var no = {};
  var Ci = [];
  var kn = {};
  var ka;
  var wt = {};
  var on = {};
  var Oo = 30;
  var ks = [];
  var oo = "";
  var ao = function(e) {
    var t = e[0], i, r;
    if (ei(t) || me(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
      for (r = ks.length; r-- && !ks[r].targetTest(t); ) ;
      i = ks[r];
    }
    for (r = e.length; r--; ) e[r] && (e[r]._gsap || (e[r]._gsap = new el(e[r], i))) || e.splice(r, 1);
    return e;
  };
  var qi = function(e) {
    return e._gsap || ao(Lt(e))[0]._gsap;
  };
  var Da = function(e, t, i) {
    return (i = e[t]) && me(i) ? e[t]() : to(i) && e.getAttribute && e.getAttribute(t) || i;
  };
  var ft = function(e, t) {
    return (e = e.split(",")).forEach(t) || e;
  };
  var we = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  };
  var Pe = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  };
  var gr = function(e, t) {
    var i = t.charAt(0), r = parseFloat(t.substr(2));
    return e = parseFloat(e), i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r;
  };
  var uu = function(e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; ) ;
    return r < i;
  };
  var Vs = function() {
    var e = Ci.length, t = Ci.slice(0), i, r;
    for (kn = {}, Ci.length = 0, i = 0; i < e; i++) r = t[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], true)._lazy = 0);
  };
  var lo = function(e) {
    return !!(e._initted || e._startAt || e.add);
  };
  var Aa = function(e, t, i, r) {
    Ci.length && !Be && Vs(), e.render(t, i, !!(Be && t < 0 && lo(e))), Ci.length && !Be && Vs();
  };
  var La = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Pa).length < 2 ? t : ze(e) ? e.trim() : e;
  };
  var za = function(e) {
    return e;
  };
  var Mt = function(e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  };
  var fu = function(e) {
    return function(t, i) {
      for (var r in i) r in t || r === "duration" && e || r === "ease" || (t[r] = i[r]);
    };
  };
  var xr = function(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  };
  var ko = function s(e, t) {
    for (var i in t) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = ei(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  };
  var Gs = function(e, t) {
    var i = {}, r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  };
  var Wr = function(e) {
    var t = e.parent || fe, i = e.keyframes ? fu(je(e.keyframes)) : Mt;
    if (ut(e.inherit)) for (; t; ) i(e, t.vars.defaults), t = t.parent || t._dp;
    return e;
  };
  var cu = function(e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; ) ;
    return i < 0;
  };
  var Ia = function(e, t, i, r, n) {
    var o = e[r], a;
    if (n) for (a = t[n]; o && o[n] > a; ) o = o._prev;
    return o ? (t._next = o._next, o._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = o, t.parent = t._dp = e, t;
  };
  var Js = function(e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = t._prev, o = t._next;
    n ? n._next = o : e[i] === t && (e[i] = o), o ? o._prev = n : e[r] === t && (e[r] = n), t._next = t._prev = t.parent = null;
  };
  var Di = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
  };
  var Ui = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0)) for (var i = e; i; ) i._dirty = 1, i = i.parent;
    return e;
  };
  var du = function(e) {
    for (var t = e.parent; t && t.parent; ) t._dirty = 1, t.totalDuration(), t = t.parent;
    return e;
  };
  var Dn = function(e, t, i, r) {
    return e._startAt && (Be ? e._startAt.revert(Os) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, true, r));
  };
  var hu = function s2(e) {
    return !e || e._ts && s2(e.parent);
  };
  var Do = function(e) {
    return e._repeat ? br(e._tTime, e = e.duration() + e._rDelay) * e : 0;
  };
  var br = function(e, t) {
    var i = Math.floor(e = Pe(e / t));
    return e && i === e ? i - 1 : i;
  };
  var Ys = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
  };
  var en = function(e) {
    return e._end = Pe(e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0));
  };
  var tn = function(e, t) {
    var i = e._dp;
    return i && i.smoothChildTiming && e._ts && (e._start = Pe(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), en(e), i._dirty || Ui(i, e)), e;
  };
  var Ra = function(e, t) {
    var i;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = Ys(e.rawTime(), t), (!t._dur || fs(0, t.totalDuration(), i) - t._tTime > ne) && t.render(i, true)), Ui(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration()) for (i = e; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
      e._zTime = -ne;
    }
  };
  var jt = function(e, t, i, r) {
    return t.parent && Di(t), t._start = Pe((di(i) ? i : i || e !== fe ? Ot(e, i, t) : e._time) + t._delay), t._end = Pe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ia(e, t, "_first", "_last", e._sort ? "_start" : 0), An(t) || (e._recent = t), r || Ra(e, t), e._ts < 0 && tn(e, e._tTime), e;
  };
  var Fa = function(e, t) {
    return (Pt.ScrollTrigger || so("scrollTrigger", t)) && Pt.ScrollTrigger.create(t, e);
  };
  var Na = function(e, t, i, r, n) {
    if (fo(e, t, n), !e._initted) return 1;
    if (!i && e._pt && !Be && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && ka !== Tt.frame) return Ci.push(e), e._lazy = [n, r], 1;
  };
  var pu = function s3(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s3(t));
  };
  var An = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  };
  var mu = function(e, t, i, r) {
    var n = e.ratio, o = t < 0 || !t && (!e._start && pu(e) && !(!e._initted && An(e)) || (e._ts < 0 || e._dp._ts < 0) && !An(e)) ? 0 : 1, a = e._rDelay, l = 0, u, f, c;
    if (a && e._repeat && (l = fs(0, e._tDur, t), f = br(l, a), e._yoyo && f & 1 && (o = 1 - o), f !== br(e._tTime, a) && (n = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== n || Be || r || e._zTime === ne || !t && e._zTime) {
      if (!e._initted && Na(e, t, r, i, l)) return;
      for (c = e._zTime, e._zTime = t || (i ? ne : 0), i || (i = t && !c), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; ) u.r(o, u.d), u = u._next;
      t < 0 && Dn(e, t, i, true), e._onUpdate && !i && bt(e, "onUpdate"), l && e._repeat && !i && e.parent && bt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Di(e, 1), !i && !Be && (bt(e, o ? "onComplete" : "onReverseComplete", true), e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  };
  var gu = function(e, t, i) {
    var r;
    if (i > t) for (r = e._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > t) return r;
      r = r._next;
    }
    else for (r = e._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < t) return r;
      r = r._prev;
    }
  };
  var Er = function(e, t, i, r) {
    var n = e._repeat, o = Pe(t) || 0, a = e._tTime / e._tDur;
    return a && !r && (e._time *= o / e._dur), e._dur = o, e._tDur = n ? n < 0 ? 1e10 : Pe(o * (n + 1) + e._rDelay * n) : o, a > 0 && !r && tn(e, e._tTime = e._tDur * a), e.parent && en(e), i || Ui(e.parent, e), e;
  };
  var Ao = function(e) {
    return e instanceof rt ? Ui(e) : Er(e, e._dur);
  };
  var _u = { _start: 0, endTime: is, totalDuration: is };
  var Ot = function s4(e, t, i) {
    var r = e.labels, n = e._recent || _u, o = e.duration() >= At ? n.endTime(false) : e._dur, a, l, u;
    return ze(t) && (isNaN(t) || t in r) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (t in r || (r[t] = o), r[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && i && (l = l / 100 * (je(i) ? i[0] : i).totalDuration()), a > 1 ? s4(e, t.substr(0, a - 1), i) + l : o + l)) : t == null ? o : +t;
  };
  var Hr = function(e, t, i) {
    var r = di(t[1]), n = (r ? 2 : 1) + (e < 2 ? 0 : 1), o = t[n], a, l;
    if (r && (o.duration = t[1]), o.parent = i, e) {
      for (a = o, l = i; l && !("immediateRender" in a); ) a = l.vars.defaults || {}, l = ut(l.vars.inherit) && l.parent;
      o.immediateRender = ut(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1];
    }
    return new Ee(t[0], o, t[n + 1]);
  };
  var zi = function(e, t) {
    return e || e === 0 ? t(e) : t;
  };
  var fs = function(e, t, i) {
    return i < e ? e : i > t ? t : i;
  };
  var qe = function(e, t) {
    return !ze(e) || !(t = ou.exec(e)) ? "" : t[1];
  };
  var vu = function(e, t, i) {
    return zi(i, function(r) {
      return fs(e, t, r);
    });
  };
  var Ln = [].slice;
  var Ba = function(e, t) {
    return e && ei(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ei(e[0])) && !e.nodeType && e !== qt;
  };
  var wu = function(e, t, i) {
    return i === void 0 && (i = []), e.forEach(function(r) {
      var n;
      return ze(r) && !t || Ba(r, 1) ? (n = i).push.apply(n, Lt(r)) : i.push(r);
    }) || i;
  };
  var Lt = function(e, t, i) {
    return le && !t && le.selector ? le.selector(e) : ze(e) && !i && (On || !Pr()) ? Ln.call((t || ro).querySelectorAll(e), 0) : je(e) ? wu(e, i) : Ba(e) ? Ln.call(e, 0) : e ? [e] : [];
  };
  var zn = function(e) {
    return e = Lt(e)[0] || ts("Invalid scope") || {}, function(t) {
      var i = e.current || e.nativeElement || e;
      return Lt(t, i.querySelectorAll ? i : i === e ? ts("Invalid scope") || ro.createElement("div") : e);
    };
  };
  var Va = function(e) {
    return e.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var Ga = function(e) {
    if (me(e)) return e;
    var t = ei(e) ? e : { each: e }, i = ji(t.ease), r = t.from || 0, n = parseFloat(t.base) || 0, o = {}, a = r > 0 && r < 1, l = isNaN(r) || a, u = t.axis, f = r, c = r;
    return ze(r) ? f = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0 : !a && l && (f = r[0], c = r[1]), function(h, d, p) {
      var m = (p || t).length, g = o[m], _, v, S, y, T, E, x, M, C;
      if (!g) {
        if (C = t.grid === "auto" ? 0 : (t.grid || [1, At])[1], !C) {
          for (x = -At; x < (x = p[C++].getBoundingClientRect().left) && C < m; ) ;
          C < m && C--;
        }
        for (g = o[m] = [], _ = l ? Math.min(C, m) * f - 0.5 : r % C, v = C === At ? 0 : l ? m * c / C - 0.5 : r / C | 0, x = 0, M = At, E = 0; E < m; E++) S = E % C - _, y = v - (E / C | 0), g[E] = T = u ? Math.abs(u === "y" ? y : S) : Ta(S * S + y * y), T > x && (x = T), T < M && (M = T);
        r === "random" && Va(g), g.max = x - M, g.min = M, g.v = m = (parseFloat(t.amount) || parseFloat(t.each) * (C > m ? m - 1 : u ? u === "y" ? m / C : C : Math.max(C, m / C)) || 0) * (r === "edges" ? -1 : 1), g.b = m < 0 ? n - m : n, g.u = qe(t.amount || t.each) || 0, i = i && m < 0 ? Qa(i) : i;
      }
      return m = (g[h] - g.min) / g.max || 0, Pe(g.b + (i ? i(m) : m) * g.v) + g.u;
    };
  };
  var In = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(i) {
      var r = Pe(Math.round(parseFloat(i) / e) * e * t);
      return (r - r % 1) / t + (di(i) ? 0 : qe(i));
    };
  };
  var Ya = function(e, t) {
    var i = je(e), r, n;
    return !i && ei(e) && (r = i = e.radius || At, e.values ? (e = Lt(e.values), (n = !di(e[0])) && (r *= r)) : e = In(e.increment)), zi(t, i ? me(e) ? function(o) {
      return n = e(o), Math.abs(n - o) <= r ? n : o;
    } : function(o) {
      for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = At, f = 0, c = e.length, h, d; c--; ) n ? (h = e[c].x - a, d = e[c].y - l, h = h * h + d * d) : h = Math.abs(e[c] - a), h < u && (u = h, f = c);
      return f = !r || u <= r ? e[f] : o, n || f === o || di(o) ? f : f + qe(o);
    } : In(e));
  };
  var Wa = function(e, t, i, r) {
    return zi(je(e) ? !t : i === true ? !!(i = 0) : !r, function() {
      return je(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) * i * r) / r;
    });
  };
  var yu = function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return function(r) {
      return t.reduce(function(n, o) {
        return o(n);
      }, r);
    };
  };
  var Su = function(e, t) {
    return function(i) {
      return e(parseFloat(i)) + (t || qe(i));
    };
  };
  var Tu = function(e, t, i) {
    return Xa(e, t, 0, 1, i);
  };
  var Ha = function(e, t, i) {
    return zi(i, function(r) {
      return e[~~t(r)];
    });
  };
  var xu = function s5(e, t, i) {
    var r = t - e;
    return je(e) ? Ha(e, s5(0, e.length), t) : zi(i, function(n) {
      return (r + (n - e) % r) % r + e;
    });
  };
  var bu = function s6(e, t, i) {
    var r = t - e, n = r * 2;
    return je(e) ? Ha(e, s6(0, e.length - 1), t) : zi(i, function(o) {
      return o = (n + (o - e) % n) % n || 0, e + (o > r ? n - o : o);
    });
  };
  var rs = function(e) {
    for (var t = 0, i = "", r, n, o, a; ~(r = e.indexOf("random(", t)); ) o = e.indexOf(")", r), a = e.charAt(r + 7) === "[", n = e.substr(r + 7, o - r - 7).match(a ? Pa : Cn), i += e.substr(t, r - t) + Wa(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), t = o + 1;
    return i + e.substr(t, e.length - t);
  };
  var Xa = function(e, t, i, r, n) {
    var o = t - e, a = r - i;
    return zi(n, function(l) {
      return i + ((l - e) / o * a || 0);
    });
  };
  var Eu = function s7(e, t, i, r) {
    var n = isNaN(e + t) ? 0 : function(d) {
      return (1 - d) * e + d * t;
    };
    if (!n) {
      var o = ze(e), a = {}, l, u, f, c, h;
      if (i === true && (r = 1) && (i = null), o) e = { p: e }, t = { p: t };
      else if (je(e) && !je(t)) {
        for (f = [], c = e.length, h = c - 2, u = 1; u < c; u++) f.push(s7(e[u - 1], e[u]));
        c--, n = function(p) {
          p *= c;
          var m = Math.min(h, ~~p);
          return f[m](p - m);
        }, i = t;
      } else r || (e = xr(je(e) ? [] : {}, e));
      if (!f) {
        for (l in t) uo.call(a, e, l, "get", t[l]);
        n = function(p) {
          return po(p, a) || (o ? e.p : e);
        };
      }
    }
    return zi(i, n);
  };
  var Lo = function(e, t, i) {
    var r = e.labels, n = At, o, a, l;
    for (o in r) a = r[o] - t, a < 0 == !!i && a && n > (a = Math.abs(a)) && (l = o, n = a);
    return l;
  };
  var bt = function(e, t, i) {
    var r = e.vars, n = r[t], o = le, a = e._ctx, l, u, f;
    if (n) return l = r[t + "Params"], u = r.callbackScope || e, i && Ci.length && Vs(), a && (le = a), f = l ? n.apply(u, l) : n.call(u), le = o, f;
  };
  var Rr = function(e) {
    return Di(e), e.scrollTrigger && e.scrollTrigger.kill(!!Be), e.progress() < 1 && bt(e, "onInterrupt"), e;
  };
  var pr;
  var $a = [];
  var qa = function(e) {
    if (e) if (e = !e.name && e.default || e, io() || e.headless) {
      var t = e.name, i = me(e), r = t && !i && e.init ? function() {
        this._props = [];
      } : e, n = { init: is, render: po, add: uo, kill: Gu, modifier: Vu, rawVars: 0 }, o = { targetTest: 0, get: 0, getSetter: ho, aliases: {}, register: 0 };
      if (Pr(), e !== r) {
        if (wt[t]) return;
        Mt(r, Mt(Gs(e, n), o)), xr(r.prototype, xr(n, Gs(e, o))), wt[r.prop = t] = r, e.targetTest && (ks.push(r), no[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Oa(t, r), e.register && e.register(ht, r, ct);
    } else $a.push(e);
  };
  var se = 255;
  var Fr = { aqua: [0, se, se], lime: [0, se, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, se], navy: [0, 0, 128], white: [se, se, se], olive: [128, 128, 0], yellow: [se, se, 0], orange: [se, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [se, 0, 0], pink: [se, 192, 203], cyan: [0, se, se], transparent: [se, se, se, 0] };
  var an = function(e, t, i) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < 0.5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * se + 0.5 | 0;
  };
  var Ua = function(e, t, i) {
    var r = e ? di(e) ? [e >> 16, e >> 8 & se, e & se] : 0 : Fr.black, n, o, a, l, u, f, c, h, d, p;
    if (!r) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Fr[e]) r = Fr[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + n + n + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & se, r & se, parseInt(e.substr(7), 16) / 255];
        e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & se, e & se];
      } else if (e.substr(0, 3) === "hsl") {
        if (r = p = e.match(Cn), !t) l = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = an(l + 1 / 3, n, o), r[1] = an(l, n, o), r[2] = an(l - 1 / 3, n, o);
        else if (~e.indexOf("=")) return r = e.match(ba), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(Cn) || Fr.transparent;
      r = r.map(Number);
    }
    return t && !p && (n = r[0] / se, o = r[1] / se, a = r[2] / se, c = Math.max(n, o, a), h = Math.min(n, o, a), f = (c + h) / 2, c === h ? l = u = 0 : (d = c - h, u = f > 0.5 ? d / (2 - c - h) : d / (c + h), l = c === n ? (o - a) / d + (o < a ? 6 : 0) : c === o ? (a - n) / d + 2 : (n - o) / d + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
  };
  var ja = function(e) {
    var t = [], i = [], r = -1;
    return e.split(Oi).forEach(function(n) {
      var o = n.match(hr) || [];
      t.push.apply(t, o), i.push(r += o.length + 1);
    }), t.c = i, t;
  };
  var zo = function(e, t, i) {
    var r = "", n = (e + r).match(Oi), o = t ? "hsla(" : "rgba(", a = 0, l, u, f, c;
    if (!n) return e;
    if (n = n.map(function(h) {
      return (h = Ua(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
    }), i && (f = ja(e), l = i.c, l.join(r) !== f.c.join(r))) for (u = e.replace(Oi, "1").split(hr), c = u.length - 1; a < c; a++) r += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (f.length ? f : n.length ? n : i).shift());
    if (!u) for (u = e.split(Oi), c = u.length - 1; a < c; a++) r += u[a] + n[a];
    return r + u[c];
  };
  var Oi = (function() {
    var s18 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Fr) s18 += "|" + e + "\\b";
    return new RegExp(s18 + ")", "gi");
  })();
  var Pu = /hsl[a]?\(/;
  var Ka = function(e) {
    var t = e.join(" "), i;
    if (Oi.lastIndex = 0, Oi.test(t)) return i = Pu.test(t), e[1] = zo(e[1], i), e[0] = zo(e[0], i, ja(e[1])), true;
  };
  var ss;
  var Tt = (function() {
    var s18 = Date.now, e = 500, t = 33, i = s18(), r = i, n = 1e3 / 240, o = n, a = [], l, u, f, c, h, d, p = function m(g) {
      var _ = s18() - r, v = g === true, S, y, T, E;
      if ((_ > e || _ < 0) && (i += _ - t), r += _, T = r - i, S = T - o, (S > 0 || v) && (E = ++c.frame, h = T - c.time * 1e3, c.time = T = T / 1e3, o += S + (S >= n ? 4 : n - S), y = 1), v || (l = u(m)), y) for (d = 0; d < a.length; d++) a[d](T, h, E, g);
    };
    return c = { time: 0, frame: 0, tick: function() {
      p(true);
    }, deltaRatio: function(g) {
      return h / (1e3 / (g || 60));
    }, wake: function() {
      Ma && (!On && io() && (qt = On = window, ro = qt.document || {}, Pt.gsap = ht, (qt.gsapVersions || (qt.gsapVersions = [])).push(ht.version), Ca(Bs || qt.GreenSockGlobals || !qt.gsap && qt || {}), $a.forEach(qa)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && c.sleep(), u = f || function(g) {
        return setTimeout(g, o - c.time * 1e3 + 1 | 0);
      }, ss = 1, p(2));
    }, sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(l), ss = 0, u = is;
    }, lagSmoothing: function(g, _) {
      e = g || 1 / 0, t = Math.min(_ || 33, e);
    }, fps: function(g) {
      n = 1e3 / (g || 240), o = c.time * 1e3 + n;
    }, add: function(g, _, v) {
      var S = _ ? function(y, T, E, x) {
        g(y, T, E, x), c.remove(S);
      } : g;
      return c.remove(g), a[v ? "unshift" : "push"](S), Pr(), S;
    }, remove: function(g, _) {
      ~(_ = a.indexOf(g)) && a.splice(_, 1) && d >= _ && d--;
    }, _listeners: a }, c;
  })();
  var Pr = function() {
    return !ss && Tt.wake();
  };
  var Z = {};
  var Mu = /^[\d.\-M][\d.\-,\s]/;
  var Cu = /["']/g;
  var Ou = function(e) {
    for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], n = 1, o = i.length, a, l, u; n < o; n++) l = i[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[r] = isNaN(u) ? u.replace(Cu, "").trim() : +u, r = l.substr(a + 1).trim();
    return t;
  };
  var ku = function(e) {
    var t = e.indexOf("(") + 1, i = e.indexOf(")"), r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  };
  var Du = function(e) {
    var t = (e + "").split("("), i = Z[t[0]];
    return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Ou(t[1])] : ku(e).split(",").map(La)) : Z._CE && Mu.test(e) ? Z._CE("", e) : i;
  };
  var Qa = function(e) {
    return function(t) {
      return 1 - e(1 - t);
    };
  };
  var Za = function s8(e, t) {
    for (var i = e._first, r; i; ) i instanceof rt ? s8(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? s8(i.timeline, t) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = t)), i = i._next;
  };
  var ji = function(e, t) {
    return e && (me(e) ? e : Z[e] || Du(e)) || t;
  };
  var sr = function(e, t, i, r) {
    i === void 0 && (i = function(l) {
      return 1 - t(1 - l);
    }), r === void 0 && (r = function(l) {
      return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
    });
    var n = { easeIn: t, easeOut: i, easeInOut: r }, o;
    return ft(e, function(a) {
      Z[a] = Pt[a] = n, Z[o = a.toLowerCase()] = i;
      for (var l in n) Z[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Z[a + "." + l] = n[l];
    }), n;
  };
  var Ja = function(e) {
    return function(t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  };
  var ln = function s9(e, t, i) {
    var r = t >= 1 ? t : 1, n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = n / Mn * (Math.asin(1 / r) || 0), a = function(f) {
      return f === 1 ? 1 : r * Math.pow(2, -10 * f) * nu((f - o) * n) + 1;
    }, l = e === "out" ? a : e === "in" ? function(u) {
      return 1 - a(1 - u);
    } : Ja(a);
    return n = Mn / n, l.config = function(u, f) {
      return s9(e, u, f);
    }, l;
  };
  var un = function s10(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function(o) {
      return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
    }, r = e === "out" ? i : e === "in" ? function(n) {
      return 1 - i(1 - n);
    } : Ja(i);
    return r.config = function(n) {
      return s10(e, n);
    }, r;
  };
  ft("Linear,Quad,Cubic,Quart,Quint,Strong", function(s18, e) {
    var t = e < 5 ? e + 1 : e;
    sr(s18 + ",Power" + (t - 1), e ? function(i) {
      return Math.pow(i, t);
    } : function(i) {
      return i;
    }, function(i) {
      return 1 - Math.pow(1 - i, t);
    }, function(i) {
      return i < 0.5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2;
    });
  });
  Z.Linear.easeNone = Z.none = Z.Linear.easeIn;
  sr("Elastic", ln("in"), ln("out"), ln());
  (function(s18, e) {
    var t = 1 / e, i = 2 * t, r = 2.5 * t, n = function(a) {
      return a < t ? s18 * a * a : a < i ? s18 * Math.pow(a - 1.5 / e, 2) + 0.75 : a < r ? s18 * (a -= 2.25 / e) * a + 0.9375 : s18 * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
    sr("Bounce", function(o) {
      return 1 - n(1 - o);
    }, n);
  })(7.5625, 2.75);
  sr("Expo", function(s18) {
    return Math.pow(2, 10 * (s18 - 1)) * s18 + s18 * s18 * s18 * s18 * s18 * s18 * (1 - s18);
  });
  sr("Circ", function(s18) {
    return -(Ta(1 - s18 * s18) - 1);
  });
  sr("Sine", function(s18) {
    return s18 === 1 ? 1 : -su(s18 * iu) + 1;
  });
  sr("Back", un("in"), un("out"), un());
  Z.SteppedEase = Z.steps = Pt.SteppedEase = { config: function(e, t) {
    e === void 0 && (e = 1);
    var i = 1 / e, r = e + (t ? 0 : 1), n = t ? 1 : 0, o = 1 - ne;
    return function(a) {
      return ((r * fs(0, o, a) | 0) + n) * i;
    };
  } };
  Tr.ease = Z["quad.out"];
  ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s18) {
    return oo += s18 + "," + s18 + "Params,";
  });
  var el = function(e, t) {
    this.id = ru++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Da, this.set = t ? t.getSetter : ho;
  };
  var ns = (function() {
    function s18(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Er(this, +t.duration, 1, 1), this.data = t.data, le && (this._ctx = le, le.data.push(this)), ss || Tt.wake();
    }
    var e = s18.prototype;
    return e.delay = function(i) {
      return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
    }, e.duration = function(i) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
    }, e.totalDuration = function(i) {
      return arguments.length ? (this._dirty = 0, Er(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, e.totalTime = function(i, r) {
      if (Pr(), !arguments.length) return this._tTime;
      var n = this._dp;
      if (n && n.smoothChildTiming && this._ts) {
        for (tn(this, i), !n._dp || n.parent || Ra(n, this); n && n.parent; ) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, true), n = n.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && jt(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === ne || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Aa(this, i, r)), this;
    }, e.time = function(i, r) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Do(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
    }, e.totalProgress = function(i, r) {
      return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, e.progress = function(i, r) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Do(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    }, e.iteration = function(i, r) {
      var n = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? br(this._tTime, n) + 1 : 1;
    }, e.timeScale = function(i, r) {
      if (!arguments.length) return this._rts === -ne ? 0 : this._rts;
      if (this._rts === i) return this;
      var n = this.parent && this._ts ? Ys(this.parent._time, this) : this._tTime;
      return this._rts = +i || 0, this._ts = this._ps || i === -ne ? 0 : this._rts, this.totalTime(fs(-Math.abs(this._delay), this.totalDuration(), n), r !== false), en(this), du(this);
    }, e.paused = function(i) {
      return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ne && (this._tTime -= ne)))), this) : this._ps;
    }, e.startTime = function(i) {
      if (arguments.length) {
        this._start = i;
        var r = this.parent || this._dp;
        return r && (r._sort || !this.parent) && jt(r, this, i - this._delay), this;
      }
      return this._start;
    }, e.endTime = function(i) {
      return this._start + (ut(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, e.rawTime = function(i) {
      var r = this.parent || this._dp;
      return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ys(r.rawTime(i), this) : this._tTime : this._tTime;
    }, e.revert = function(i) {
      i === void 0 && (i = lu);
      var r = Be;
      return Be = i, lo(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== false && this.kill(), Be = r, this;
    }, e.globalTime = function(i) {
      for (var r = this, n = arguments.length ? i : r.rawTime(); r; ) n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
      return !this.parent && this._sat ? this._sat.globalTime(i) : n;
    }, e.repeat = function(i) {
      return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Ao(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, e.repeatDelay = function(i) {
      if (arguments.length) {
        var r = this._time;
        return this._rDelay = i, Ao(this), r ? this.time(r) : this;
      }
      return this._rDelay;
    }, e.yoyo = function(i) {
      return arguments.length ? (this._yoyo = i, this) : this._yoyo;
    }, e.seek = function(i, r) {
      return this.totalTime(Ot(this, i), ut(r));
    }, e.restart = function(i, r) {
      return this.play().totalTime(i ? -this._delay : 0, ut(r)), this._dur || (this._zTime = -ne), this;
    }, e.play = function(i, r) {
      return i != null && this.seek(i, r), this.reversed(false).paused(false);
    }, e.reverse = function(i, r) {
      return i != null && this.seek(i || this.totalDuration(), r), this.reversed(true).paused(false);
    }, e.pause = function(i, r) {
      return i != null && this.seek(i, r), this.paused(true);
    }, e.resume = function() {
      return this.paused(false);
    }, e.reversed = function(i) {
      return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -ne : 0)), this) : this._rts < 0;
    }, e.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -ne, this;
    }, e.isActive = function() {
      var i = this.parent || this._dp, r = this._start, n;
      return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(true)) >= r && n < this.endTime(true) - ne);
    }, e.eventCallback = function(i, r, n) {
      var o = this.vars;
      return arguments.length > 1 ? (r ? (o[i] = r, n && (o[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete o[i], this) : o[i];
    }, e.then = function(i) {
      var r = this;
      return new Promise(function(n) {
        var o = me(i) ? i : za, a = function() {
          var u = r.then;
          r.then = null, me(o) && (o = o(r)) && (o.then || o === r) && (r.then = u), n(o), r.then = u;
        };
        r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
      });
    }, e.kill = function() {
      Rr(this);
    }, s18;
  })();
  Mt(ns.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -ne, _prom: 0, _ps: false, _rts: 1 });
  var rt = (function(s18) {
    Sa(e, s18);
    function e(i, r) {
      var n;
      return i === void 0 && (i = {}), n = s18.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = ut(i.sortChildren), fe && jt(i.parent || fe, oi(n), r), i.reversed && n.reverse(), i.paused && n.paused(true), i.scrollTrigger && Fa(oi(n), i.scrollTrigger), n;
    }
    var t = e.prototype;
    return t.to = function(r, n, o) {
      return Hr(0, arguments, this), this;
    }, t.from = function(r, n, o) {
      return Hr(1, arguments, this), this;
    }, t.fromTo = function(r, n, o, a) {
      return Hr(2, arguments, this), this;
    }, t.set = function(r, n, o) {
      return n.duration = 0, n.parent = this, Wr(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ee(r, n, Ot(this, o), 1), this;
    }, t.call = function(r, n, o) {
      return jt(this, Ee.delayedCall(0, r, n), o);
    }, t.staggerTo = function(r, n, o, a, l, u, f) {
      return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new Ee(r, o, Ot(this, l)), this;
    }, t.staggerFrom = function(r, n, o, a, l, u, f) {
      return o.runBackwards = 1, Wr(o).immediateRender = ut(o.immediateRender), this.staggerTo(r, n, o, a, l, u, f);
    }, t.staggerFromTo = function(r, n, o, a, l, u, f, c) {
      return a.startAt = o, Wr(a).immediateRender = ut(a.immediateRender), this.staggerTo(r, n, a, l, u, f, c);
    }, t.render = function(r, n, o) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : Pe(r), c = this._zTime < 0 != r < 0 && (this._initted || !u), h, d, p, m, g, _, v, S, y, T, E, x;
      if (this !== fe && f > l && r >= 0 && (f = l), f !== this._tTime || o || c) {
        if (a !== this._time && u && (f += this._time - a, r += this._time - a), h = f, y = this._start, S = this._ts, _ = !S, c && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
          if (E = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(g * 100 + r, n, o);
          if (h = Pe(f % g), f === l ? (m = this._repeat, h = u) : (T = Pe(f / g), m = ~~T, m && m === T && (h = u, m--), h > u && (h = u)), T = br(this._tTime, g), !a && this._tTime && T !== m && this._tTime - T * g - this._dur <= 0 && (T = m), E && m & 1 && (h = u - h, x = 1), m !== T && !this._lock) {
            var M = E && T & 1, C = M === (E && m & 1);
            if (m < T && (M = !M), a = M ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (x ? 0 : Pe(m * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1), a && a !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (u = this._dur, l = this._tDur, C && (this._lock = 2, a = M ? u : -1e-4, this.render(a, true), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !_) return this;
            Za(this, x);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (v = gu(this, Pe(a), Pe(h)), v && (f -= h - (h = v._start))), this._tTime = f, this._time = h, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && !n && !T && (bt(this, "onStart"), this._tTime !== f)) return this;
        if (h >= a && r >= 0) for (d = this._first; d; ) {
          if (p = d._next, (d._act || h >= d._start) && d._ts && v !== d) {
            if (d.parent !== this) return this.render(r, n, o);
            if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, n, o), h !== this._time || !this._ts && !_) {
              v = 0, p && (f += this._zTime = -ne);
              break;
            }
          }
          d = p;
        }
        else {
          d = this._last;
          for (var b = r < 0 ? r : h; d; ) {
            if (p = d._prev, (d._act || b <= d._end) && d._ts && v !== d) {
              if (d.parent !== this) return this.render(r, n, o);
              if (d.render(d._ts > 0 ? (b - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (b - d._start) * d._ts, n, o || Be && lo(d)), h !== this._time || !this._ts && !_) {
                v = 0, p && (f += this._zTime = b ? -ne : ne);
                break;
              }
            }
            d = p;
          }
        }
        if (v && !n && (this.pause(), v.render(h >= a ? 0 : -ne)._zTime = h >= a ? 1 : -1, this._ts)) return this._start = y, en(this), this.render(r, n, o);
        this._onUpdate && !n && bt(this, "onUpdate", true), (f === l && this._tTime >= this.totalDuration() || !f && a) && (y === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Di(this, 1), !n && !(r < 0 && !a) && (f || a || !l) && (bt(this, f === l && r >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(f < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, t.add = function(r, n) {
      var o = this;
      if (di(n) || (n = Ot(this, n, r)), !(r instanceof ns)) {
        if (je(r)) return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
        if (ze(r)) return this.addLabel(r, n);
        if (me(r)) r = Ee.delayedCall(0, r);
        else return this;
      }
      return this !== r ? jt(this, r, n) : this;
    }, t.getChildren = function(r, n, o, a) {
      r === void 0 && (r = true), n === void 0 && (n = true), o === void 0 && (o = true), a === void 0 && (a = -At);
      for (var l = [], u = this._first; u; ) u._start >= a && (u instanceof Ee ? n && l.push(u) : (o && l.push(u), r && l.push.apply(l, u.getChildren(true, n, o)))), u = u._next;
      return l;
    }, t.getById = function(r) {
      for (var n = this.getChildren(1, 1, 1), o = n.length; o--; ) if (n[o].vars.id === r) return n[o];
    }, t.remove = function(r) {
      return ze(r) ? this.removeLabel(r) : me(r) ? this.killTweensOf(r) : (r.parent === this && Js(this, r), r === this._recent && (this._recent = this._last), Ui(this));
    }, t.totalTime = function(r, n) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Pe(Tt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s18.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
    }, t.addLabel = function(r, n) {
      return this.labels[r] = Ot(this, n), this;
    }, t.removeLabel = function(r) {
      return delete this.labels[r], this;
    }, t.addPause = function(r, n, o) {
      var a = Ee.delayedCall(0, n || is, o);
      return a.data = "isPause", this._hasPause = 1, jt(this, a, Ot(this, r));
    }, t.removePause = function(r) {
      var n = this._first;
      for (r = Ot(this, r); n; ) n._start === r && n.data === "isPause" && Di(n), n = n._next;
    }, t.killTweensOf = function(r, n, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; ) Ti !== a[l] && a[l].kill(r, n);
      return this;
    }, t.getTweensOf = function(r, n) {
      for (var o = [], a = Lt(r), l = this._first, u = di(n), f; l; ) l instanceof Ee ? uu(l._targets, a) && (u ? (!Ti || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (f = l.getTweensOf(a, n)).length && o.push.apply(o, f), l = l._next;
      return o;
    }, t.tweenTo = function(r, n) {
      n = n || {};
      var o = this, a = Ot(o, r), l = n, u = l.startAt, f = l.onStart, c = l.onStartParams, h = l.immediateRender, d, p = Ee.to(o, Mt({ ease: n.ease || "none", lazy: false, immediateRender: false, time: a, overwrite: "auto", duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ne, onStart: function() {
        if (o.pause(), !d) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== g && Er(p, g, 0, 1).render(p._time, true, true), d = 1;
        }
        f && f.apply(p, c || []);
      } }, n));
      return h ? p.render(0) : p;
    }, t.tweenFromTo = function(r, n, o) {
      return this.tweenTo(n, Mt({ startAt: { time: Ot(this, r) } }, o));
    }, t.recent = function() {
      return this._recent;
    }, t.nextLabel = function(r) {
      return r === void 0 && (r = this._time), Lo(this, Ot(this, r));
    }, t.previousLabel = function(r) {
      return r === void 0 && (r = this._time), Lo(this, Ot(this, r), 1);
    }, t.currentLabel = function(r) {
      return arguments.length ? this.seek(r, true) : this.previousLabel(this._time + ne);
    }, t.shiftChildren = function(r, n, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; ) a._start >= o && (a._start += r, a._end += r), a = a._next;
      if (n) for (u in l) l[u] >= o && (l[u] += r);
      return Ui(this);
    }, t.invalidate = function(r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), n = n._next;
      return s18.prototype.invalidate.call(this, r);
    }, t.clear = function(r) {
      r === void 0 && (r = true);
      for (var n = this._first, o; n; ) o = n._next, this.remove(n), n = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Ui(this);
    }, t.totalDuration = function(r) {
      var n = 0, o = this, a = o._last, l = At, u, f, c;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
      if (o._dirty) {
        for (c = o.parent; a; ) u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > l && o._sort && a._ts && !o._lock ? (o._lock = 1, jt(o, a, f - a._delay, 1)._lock = 0) : l = f, f < 0 && a._ts && (n -= f, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += f / o._ts, o._time -= f, o._tTime -= f), o.shiftChildren(-f, false, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
        Er(o, o === fe && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
      }
      return o._tDur;
    }, e.updateRoot = function(r) {
      if (fe._ts && (Aa(fe, Ys(r, fe)), ka = Tt.frame), Tt.frame >= Oo) {
        Oo += Et.autoSleep || 120;
        var n = fe._first;
        if ((!n || !n._ts) && Et.autoSleep && Tt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || Tt.sleep();
        }
      }
    }, e;
  })(ns);
  Mt(rt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Au = function(e, t, i, r, n, o, a) {
    var l = new ct(this._pt, e, t, 0, 1, ol, null, n), u = 0, f = 0, c, h, d, p, m, g, _, v;
    for (l.b = i, l.e = r, i += "", r += "", (_ = ~r.indexOf("random(")) && (r = rs(r)), o && (v = [i, r], o(v, e, t), i = v[0], r = v[1]), h = i.match(nn) || []; c = nn.exec(r); ) p = c[0], m = r.substring(u, c.index), d ? d = (d + 1) % 5 : m.substr(-5) === "rgba(" && (d = 1), p !== h[f++] && (g = parseFloat(h[f - 1]) || 0, l._pt = { _next: l._pt, p: m || f === 1 ? m : ",", s: g, c: p.charAt(1) === "=" ? gr(g, p) - g : parseFloat(p) - g, m: d && d < 4 ? Math.round : 0 }, u = nn.lastIndex);
    return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (Ea.test(r) || _) && (l.e = 0), this._pt = l, l;
  };
  var uo = function(e, t, i, r, n, o, a, l, u, f) {
    me(r) && (r = r(n || 0, e, o));
    var c = e[t], h = i !== "get" ? i : me(c) ? u ? e[t.indexOf("set") || !me(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : c, d = me(c) ? u ? Fu : sl : co, p;
    if (ze(r) && (~r.indexOf("random(") && (r = rs(r)), r.charAt(1) === "=" && (p = gr(h, r) + (qe(h) || 0), (p || p === 0) && (r = p))), !f || h !== r || Rn) return !isNaN(h * r) && r !== "" ? (p = new ct(this._pt, e, t, +h || 0, r - (h || 0), typeof c == "boolean" ? Bu : nl, 0, d), u && (p.fp = u), a && p.modifier(a, this, e), this._pt = p) : (!c && !(t in e) && so(t, r), Au.call(this, e, t, h, r, d, l || Et.stringFilter, u));
  };
  var Lu = function(e, t, i, r, n) {
    if (me(e) && (e = Xr(e, n, t, i, r)), !ei(e) || e.style && e.nodeType || je(e) || xa(e)) return ze(e) ? Xr(e, n, t, i, r) : e;
    var o = {}, a;
    for (a in e) o[a] = Xr(e[a], n, t, i, r);
    return o;
  };
  var tl = function(e, t, i, r, n, o) {
    var a, l, u, f;
    if (wt[e] && (a = new wt[e]()).init(n, a.rawVars ? t[e] : Lu(t[e], r, n, o, i), i, r, o) !== false && (i._pt = l = new ct(i._pt, n, e, 0, 1, a.render, a, 0, a.priority), i !== pr)) for (u = i._ptLookup[i._targets.indexOf(n)], f = a._props.length; f--; ) u[a._props[f]] = l;
    return a;
  };
  var Ti;
  var Rn;
  var fo = function s11(e, t, i) {
    var r = e.vars, n = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, f = r.runBackwards, c = r.yoyoEase, h = r.keyframes, d = r.autoRevert, p = e._dur, m = e._startAt, g = e._targets, _ = e.parent, v = _ && _.data === "nested" ? _.vars.targets : g, S = e._overwrite === "auto" && !eo, y = e.timeline, T, E, x, M, C, b, k, O, R, V, G, A, z;
    if (y && (!h || !n) && (n = "none"), e._ease = ji(n, Tr.ease), e._yEase = c ? Qa(ji(c === true ? n : c, Tr.ease)) : 0, c && e._yoyo && !e._repeat && (c = e._yEase, e._yEase = e._ease, e._ease = c), e._from = !y && !!r.runBackwards, !y || h && !r.stagger) {
      if (O = g[0] ? qi(g[0]).harness : 0, A = O && r[O.prop], T = Gs(r, no), m && (m._zTime < 0 && m.progress(1), t < 0 && f && a && !d ? m.render(-1, true) : m.revert(f && p ? Os : au), m._lazy = 0), o) {
        if (Di(e._startAt = Ee.set(g, Mt({ data: "isStart", overwrite: false, parent: _, immediateRender: true, lazy: !m && ut(l), startAt: null, delay: 0, onUpdate: u && function() {
          return bt(e, "onUpdate");
        }, stagger: 0 }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Be || !a && !d) && e._startAt.revert(Os), a && p && t <= 0 && i <= 0) {
          t && (e._zTime = t);
          return;
        }
      } else if (f && p && !m) {
        if (t && (a = false), x = Mt({ overwrite: false, data: "isFromStart", lazy: a && !m && ut(l), immediateRender: a, stagger: 0, parent: _ }, T), A && (x[O.prop] = A), Di(e._startAt = Ee.set(g, x)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Be ? e._startAt.revert(Os) : e._startAt.render(-1, true)), e._zTime = t, !a) s11(e._startAt, ne, ne);
        else if (!t) return;
      }
      for (e._pt = e._ptCache = 0, l = p && ut(l) || l && !p, E = 0; E < g.length; E++) {
        if (C = g[E], k = C._gsap || ao(g)[E]._gsap, e._ptLookup[E] = V = {}, kn[k.id] && Ci.length && Vs(), G = v === g ? E : v.indexOf(C), O && (R = new O()).init(C, A || T, e, G, v) !== false && (e._pt = M = new ct(e._pt, C, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(D) {
          V[D] = M;
        }), R.priority && (b = 1)), !O || A) for (x in T) wt[x] && (R = tl(x, T, e, G, C, v)) ? R.priority && (b = 1) : V[x] = M = uo.call(e, C, x, "get", T[x], G, v, 0, r.stringFilter);
        e._op && e._op[E] && e.kill(C, e._op[E]), S && e._pt && (Ti = e, fe.killTweensOf(C, V, e.globalTime(t)), z = !e.parent, Ti = 0), e._pt && l && (kn[k.id] = 1);
      }
      b && al(e), e._onInit && e._onInit(e);
    }
    e._onUpdate = u, e._initted = (!e._op || e._pt) && !z, h && t <= 0 && y.render(At, true, true);
  };
  var zu = function(e, t, i, r, n, o, a, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], f, c, h, d;
    if (!u) for (u = e._ptCache[t] = [], h = e._ptLookup, d = e._targets.length; d--; ) {
      if (f = h[d][t], f && f.d && f.d._pt) for (f = f.d._pt; f && f.p !== t && f.fp !== t; ) f = f._next;
      if (!f) return Rn = 1, e.vars[t] = "+=0", fo(e, a), Rn = 0, l ? ts(t + " not eligible for reset") : 1;
      u.push(f);
    }
    for (d = u.length; d--; ) c = u[d], f = c._pt || c, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c, f.c = i - f.s, c.e && (c.e = we(i) + qe(c.e)), c.b && (c.b = f.s + qe(c.b));
  };
  var Iu = function(e, t) {
    var i = e[0] ? qi(e[0]).harness : 0, r = i && i.aliases, n, o, a, l;
    if (!r) return t;
    n = xr({}, t);
    for (o in r) if (o in n) for (l = r[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
    return n;
  };
  var Ru = function(e, t, i, r) {
    var n = t.ease || r || "power1.inOut", o, a;
    if (je(t)) a = i[e] || (i[e] = []), t.forEach(function(l, u) {
      return a.push({ t: u / (t.length - 1) * 100, v: l, e: n });
    });
    else for (o in t) a = i[o] || (i[o] = []), o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: n });
  };
  var Xr = function(e, t, i, r, n) {
    return me(e) ? e.call(t, i, r, n) : ze(e) && ~e.indexOf("random(") ? rs(e) : e;
  };
  var il = oo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var rl = {};
  ft(il + ",id,stagger,delay,duration,paused,scrollTrigger", function(s18) {
    return rl[s18] = 1;
  });
  var Ee = (function(s18) {
    Sa(e, s18);
    function e(i, r, n, o) {
      var a;
      typeof r == "number" && (n.duration = r, r = n, n = null), a = s18.call(this, o ? r : Wr(r)) || this;
      var l = a.vars, u = l.duration, f = l.delay, c = l.immediateRender, h = l.stagger, d = l.overwrite, p = l.keyframes, m = l.defaults, g = l.scrollTrigger, _ = l.yoyoEase, v = r.parent || fe, S = (je(i) || xa(i) ? di(i[0]) : "length" in r) ? [i] : Lt(i), y, T, E, x, M, C, b, k;
      if (a._targets = S.length ? ao(S) : ts("GSAP target " + i + " not found. https://gsap.com", !Et.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || h || ps(u) || ps(f)) {
        if (r = a.vars, y = a.timeline = new rt({ data: "nested", defaults: m || {}, targets: v && v.data === "nested" ? v.vars.targets : S }), y.kill(), y.parent = y._dp = oi(a), y._start = 0, h || ps(u) || ps(f)) {
          if (x = S.length, b = h && Ga(h), ei(h)) for (M in h) ~il.indexOf(M) && (k || (k = {}), k[M] = h[M]);
          for (T = 0; T < x; T++) E = Gs(r, rl), E.stagger = 0, _ && (E.yoyoEase = _), k && xr(E, k), C = S[T], E.duration = +Xr(u, oi(a), T, C, S), E.delay = (+Xr(f, oi(a), T, C, S) || 0) - a._delay, !h && x === 1 && E.delay && (a._delay = f = E.delay, a._start += f, E.delay = 0), y.to(C, E, b ? b(T, C, S) : 0), y._ease = Z.none;
          y.duration() ? u = f = 0 : a.timeline = 0;
        } else if (p) {
          Wr(Mt(y.vars.defaults, { ease: "none" })), y._ease = ji(p.ease || r.ease || "none");
          var O = 0, R, V, G;
          if (je(p)) p.forEach(function(A) {
            return y.to(S, A, ">");
          }), y.duration();
          else {
            E = {};
            for (M in p) M === "ease" || M === "easeEach" || Ru(M, p[M], E, p.easeEach);
            for (M in E) for (R = E[M].sort(function(A, z) {
              return A.t - z.t;
            }), O = 0, T = 0; T < R.length; T++) V = R[T], G = { ease: V.e, duration: (V.t - (T ? R[T - 1].t : 0)) / 100 * u }, G[M] = V.v, y.to(S, G, O), O += G.duration;
            y.duration() < u && y.to({}, { duration: u - y.duration() });
          }
        }
        u || a.duration(u = y.duration());
      } else a.timeline = 0;
      return d === true && !eo && (Ti = oi(a), fe.killTweensOf(S), Ti = 0), jt(v, oi(a), n), r.reversed && a.reverse(), r.paused && a.paused(true), (c || !u && !p && a._start === Pe(v._time) && ut(c) && hu(oi(a)) && v.data !== "nested") && (a._tTime = -ne, a.render(Math.max(0, -f) || 0)), g && Fa(oi(a), g), a;
    }
    var t = e.prototype;
    return t.render = function(r, n, o) {
      var a = this._time, l = this._tDur, u = this._dur, f = r < 0, c = r > l - ne && !f ? l : r < ne ? 0 : r, h, d, p, m, g, _, v, S, y;
      if (!u) mu(this, r, n, o);
      else if (c !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
        if (h = c, S = this.timeline, this._repeat) {
          if (m = u + this._rDelay, this._repeat < -1 && f) return this.totalTime(m * 100 + r, n, o);
          if (h = Pe(c % m), c === l ? (p = this._repeat, h = u) : (g = Pe(c / m), p = ~~g, p && p === g ? (h = u, p--) : h > u && (h = u)), _ = this._yoyo && p & 1, _ && (y = this._yEase, h = u - h), g = br(this._tTime, m), h === a && !o && this._initted && p === g) return this._tTime = c, this;
          p !== g && (S && this._yEase && Za(S, _), this.vars.repeatRefresh && !_ && !this._lock && h !== m && this._initted && (this._lock = o = 1, this.render(Pe(m * p), true).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Na(this, f ? r : h, o, n, c)) return this._tTime = 0, this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && p !== g)) return this;
          if (u !== this._dur) return this.render(r, n, o);
        }
        if (this._tTime = c, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (y || this._ease)(h / u), this._from && (this.ratio = v = 1 - v), !a && c && !n && !g && (bt(this, "onStart"), this._tTime !== c)) return this;
        for (d = this._pt; d; ) d.r(v, d.d), d = d._next;
        S && S.render(r < 0 ? r : S._dur * S._ease(h / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && Dn(this, r, n, o), bt(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && bt(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (f && !this._onUpdate && Dn(this, r, true, true), (r || !u) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Di(this, 1), !n && !(f && !a) && (c || a || _) && (bt(this, c === l ? "onComplete" : "onReverseComplete", true), this._prom && !(c < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, t.targets = function() {
      return this._targets;
    }, t.invalidate = function(r) {
      return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s18.prototype.invalidate.call(this, r);
    }, t.resetTo = function(r, n, o, a, l) {
      ss || Tt.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
      return this._initted || fo(this, u), f = this._ease(u / this._dur), zu(this, r, n, o, a, f, u, l) ? this.resetTo(r, n, o, a, 1) : (tn(this, 0), this.parent || Ia(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, t.kill = function(r, n) {
      if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? Rr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Be), this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return this.timeline.killTweensOf(r, n, Ti && Ti.vars.overwrite !== true)._first || Rr(this), this.parent && o !== this.timeline.totalDuration() && Er(this, this._dur * this.timeline._tDur / o, 0, 1), this;
      }
      var a = this._targets, l = r ? Lt(r) : a, u = this._ptLookup, f = this._pt, c, h, d, p, m, g, _;
      if ((!n || n === "all") && cu(a, l)) return n === "all" && (this._pt = 0), Rr(this);
      for (c = this._op = this._op || [], n !== "all" && (ze(n) && (m = {}, ft(n, function(v) {
        return m[v] = 1;
      }), n = m), n = Iu(a, n)), _ = a.length; _--; ) if (~l.indexOf(a[_])) {
        h = u[_], n === "all" ? (c[_] = n, p = h, d = {}) : (d = c[_] = c[_] || {}, p = n);
        for (m in p) g = h && h[m], g && ((!("kill" in g.d) || g.d.kill(m) === true) && Js(this, g, "_pt"), delete h[m]), d !== "all" && (d[m] = 1);
      }
      return this._initted && !this._pt && f && Rr(this), this;
    }, e.to = function(r, n) {
      return new e(r, n, arguments[2]);
    }, e.from = function(r, n) {
      return Hr(1, arguments);
    }, e.delayedCall = function(r, n, o, a) {
      return new e(n, 0, { immediateRender: false, lazy: false, overwrite: false, delay: r, onComplete: n, onReverseComplete: n, onCompleteParams: o, onReverseCompleteParams: o, callbackScope: a });
    }, e.fromTo = function(r, n, o) {
      return Hr(2, arguments);
    }, e.set = function(r, n) {
      return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(r, n);
    }, e.killTweensOf = function(r, n, o) {
      return fe.killTweensOf(r, n, o);
    }, e;
  })(ns);
  Mt(Ee.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  ft("staggerTo,staggerFrom,staggerFromTo", function(s18) {
    Ee[s18] = function() {
      var e = new rt(), t = Ln.call(arguments, 0);
      return t.splice(s18 === "staggerFromTo" ? 5 : 4, 0, 0), e[s18].apply(e, t);
    };
  });
  var co = function(e, t, i) {
    return e[t] = i;
  };
  var sl = function(e, t, i) {
    return e[t](i);
  };
  var Fu = function(e, t, i, r) {
    return e[t](r.fp, i);
  };
  var Nu = function(e, t, i) {
    return e.setAttribute(t, i);
  };
  var ho = function(e, t) {
    return me(e[t]) ? sl : to(e[t]) && e.setAttribute ? Nu : co;
  };
  var nl = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  };
  var Bu = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  };
  var ol = function(e, t) {
    var i = t._pt, r = "";
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; i; ) r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r, i = i._next;
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  };
  var po = function(e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), i = i._next;
  };
  var Vu = function(e, t, i, r) {
    for (var n = this._pt, o; n; ) o = n._next, n.p === r && n.modifier(e, t, i), n = o;
  };
  var Gu = function(e) {
    for (var t = this._pt, i, r; t; ) r = t._next, t.p === e && !t.op || t.op === e ? Js(this, t, "_pt") : t.dep || (i = 1), t = r;
    return !i;
  };
  var Yu = function(e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  };
  var al = function(e) {
    for (var t = e._pt, i, r, n, o; t; ) {
      for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? t._prev._next = t : n = t, (t._next = r) ? r._prev = t : o = t, t = i;
    }
    e._pt = n;
  };
  var ct = (function() {
    function s18(t, i, r, n, o, a, l, u, f) {
      this.t = i, this.s = n, this.c = o, this.p = r, this.r = a || nl, this.d = l || this, this.set = u || co, this.pr = f || 0, this._next = t, t && (t._prev = this);
    }
    var e = s18.prototype;
    return e.modifier = function(i, r, n) {
      this.mSet = this.mSet || this.set, this.set = Yu, this.m = i, this.mt = n, this.tween = r;
    }, s18;
  })();
  ft(oo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s18) {
    return no[s18] = 1;
  });
  Pt.TweenMax = Pt.TweenLite = Ee;
  Pt.TimelineLite = Pt.TimelineMax = rt;
  fe = new rt({ sortChildren: false, defaults: Tr, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
  Et.stringFilter = Ka;
  var Ki = [];
  var Ds = {};
  var Wu = [];
  var Io = 0;
  var Hu = 0;
  var fn = function(e) {
    return (Ds[e] || Wu).map(function(t) {
      return t();
    });
  };
  var Fn = function() {
    var e = Date.now(), t = [];
    e - Io > 2 && (fn("matchMediaInit"), Ki.forEach(function(i) {
      var r = i.queries, n = i.conditions, o, a, l, u;
      for (a in r) o = qt.matchMedia(r[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
      u && (i.revert(), l && t.push(i));
    }), fn("matchMediaRevert"), t.forEach(function(i) {
      return i.onMatch(i, function(r) {
        return i.add(null, r);
      });
    }), Io = e, fn("matchMedia"));
  };
  var ll = (function() {
    function s18(t, i) {
      this.selector = i && zn(i), this.data = [], this._r = [], this.isReverted = false, this.id = Hu++, t && this.add(t);
    }
    var e = s18.prototype;
    return e.add = function(i, r, n) {
      me(i) && (n = r, r = i, i = me);
      var o = this, a = function() {
        var u = le, f = o.selector, c;
        return u && u !== o && u.data.push(o), n && (o.selector = zn(n)), le = o, c = r.apply(o, arguments), me(c) && o._r.push(c), le = u, o.selector = f, o.isReverted = false, c;
      };
      return o.last = a, i === me ? a(o, function(l) {
        return o.add(null, l);
      }) : i ? o[i] = a : a;
    }, e.ignore = function(i) {
      var r = le;
      le = null, i(this), le = r;
    }, e.getTweens = function() {
      var i = [];
      return this.data.forEach(function(r) {
        return r instanceof s18 ? i.push.apply(i, r.getTweens()) : r instanceof Ee && !(r.parent && r.parent.data === "nested") && i.push(r);
      }), i;
    }, e.clear = function() {
      this._r.length = this.data.length = 0;
    }, e.kill = function(i, r) {
      var n = this;
      if (i ? (function() {
        for (var a = n.getTweens(), l = n.data.length, u; l--; ) u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(true, true, false).forEach(function(f) {
          return a.splice(a.indexOf(f), 1);
        }));
        for (a.map(function(f) {
          return { g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0, t: f };
        }).sort(function(f, c) {
          return c.g - f.g || -1 / 0;
        }).forEach(function(f) {
          return f.t.revert(i);
        }), l = n.data.length; l--; ) u = n.data[l], u instanceof rt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ee) && u.revert && u.revert(i);
        n._r.forEach(function(f) {
          return f(i, n);
        }), n.isReverted = true;
      })() : this.data.forEach(function(a) {
        return a.kill && a.kill();
      }), this.clear(), r) for (var o = Ki.length; o--; ) Ki[o].id === this.id && Ki.splice(o, 1);
    }, e.revert = function(i) {
      this.kill(i || {});
    }, s18;
  })();
  var Xu = (function() {
    function s18(t) {
      this.contexts = [], this.scope = t, le && le.data.push(this);
    }
    var e = s18.prototype;
    return e.add = function(i, r, n) {
      ei(i) || (i = { matches: i });
      var o = new ll(0, n || this.scope), a = o.conditions = {}, l, u, f;
      le && !o.selector && (o.selector = le.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = i;
      for (u in i) u === "all" ? f = 1 : (l = qt.matchMedia(i[u]), l && (Ki.indexOf(o) < 0 && Ki.push(o), (a[u] = l.matches) && (f = 1), l.addListener ? l.addListener(Fn) : l.addEventListener("change", Fn)));
      return f && r(o, function(c) {
        return o.add(null, c);
      }), this;
    }, e.revert = function(i) {
      this.kill(i || {});
    }, e.kill = function(i) {
      this.contexts.forEach(function(r) {
        return r.kill(i, true);
      });
    }, s18;
  })();
  var Ws = { registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    t.forEach(function(r) {
      return qa(r);
    });
  }, timeline: function(e) {
    return new rt(e);
  }, getTweensOf: function(e, t) {
    return fe.getTweensOf(e, t);
  }, getProperty: function(e, t, i, r) {
    ze(e) && (e = Lt(e)[0]);
    var n = qi(e || {}).get, o = i ? za : La;
    return i === "native" && (i = ""), e && (t ? o((wt[t] && wt[t].get || n)(e, t, i, r)) : function(a, l, u) {
      return o((wt[a] && wt[a].get || n)(e, a, l, u));
    });
  }, quickSetter: function(e, t, i) {
    if (e = Lt(e), e.length > 1) {
      var r = e.map(function(f) {
        return ht.quickSetter(f, t, i);
      }), n = r.length;
      return function(f) {
        for (var c = n; c--; ) r[c](f);
      };
    }
    e = e[0] || {};
    var o = wt[t], a = qi(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(f) {
      var c = new o();
      pr._pt = 0, c.init(e, i ? f + i : f, pr, 0, [e]), c.render(1, c), pr._pt && po(1, pr);
    } : a.set(e, l);
    return o ? u : function(f) {
      return u(e, l, i ? f + i : f, a, 1);
    };
  }, quickTo: function(e, t, i) {
    var r, n = ht.to(e, Mt((r = {}, r[t] = "+=0.1", r.paused = true, r.stagger = 0, r), i || {})), o = function(l, u, f) {
      return n.resetTo(t, l, u, f);
    };
    return o.tween = n, o;
  }, isTweening: function(e) {
    return fe.getTweensOf(e, true).length > 0;
  }, defaults: function(e) {
    return e && e.ease && (e.ease = ji(e.ease, Tr.ease)), ko(Tr, e || {});
  }, config: function(e) {
    return ko(Et, e || {});
  }, registerEffect: function(e) {
    var t = e.name, i = e.effect, r = e.plugins, n = e.defaults, o = e.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !wt[a] && !Pt[a] && ts(t + " effect requires " + a + " plugin.");
    }), on[t] = function(a, l, u) {
      return i(Lt(a), Mt(l || {}, n), u);
    }, o && (rt.prototype[t] = function(a, l, u) {
      return this.add(on[t](a, ei(l) ? l : (u = l) && {}, this), u);
    });
  }, registerEase: function(e, t) {
    Z[e] = ji(t);
  }, parseEase: function(e, t) {
    return arguments.length ? ji(e, t) : Z;
  }, getById: function(e) {
    return fe.getById(e);
  }, exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var i = new rt(e), r, n;
    for (i.smoothChildTiming = ut(e.smoothChildTiming), fe.remove(i), i._dp = 0, i._time = i._tTime = fe._time, r = fe._first; r; ) n = r._next, (t || !(!r._dur && r instanceof Ee && r.vars.onComplete === r._targets[0])) && jt(i, r, r._start - r._delay), r = n;
    return jt(fe, i, 0), i;
  }, context: function(e, t) {
    return e ? new ll(e, t) : le;
  }, matchMedia: function(e) {
    return new Xu(e);
  }, matchMediaRefresh: function() {
    return Ki.forEach(function(e) {
      var t = e.conditions, i, r;
      for (r in t) t[r] && (t[r] = false, i = 1);
      i && e.revert();
    }) || Fn();
  }, addEventListener: function(e, t) {
    var i = Ds[e] || (Ds[e] = []);
    ~i.indexOf(t) || i.push(t);
  }, removeEventListener: function(e, t) {
    var i = Ds[e], r = i && i.indexOf(t);
    r >= 0 && i.splice(r, 1);
  }, utils: { wrap: xu, wrapYoyo: bu, distribute: Ga, random: Wa, snap: Ya, normalize: Tu, getUnit: qe, clamp: vu, splitColor: Ua, toArray: Lt, selector: zn, mapRange: Xa, pipe: yu, unitize: Su, interpolate: Eu, shuffle: Va }, install: Ca, effects: on, ticker: Tt, updateRoot: rt.updateRoot, plugins: wt, globalTimeline: fe, core: { PropTween: ct, globals: Oa, Tween: Ee, Timeline: rt, Animation: ns, getCache: qi, _removeLinkedListItem: Js, reverting: function() {
    return Be;
  }, context: function(e) {
    return e && le && (le.data.push(e), e._ctx = le), le;
  }, suppressOverwrites: function(e) {
    return eo = e;
  } } };
  ft("to,from,fromTo,delayedCall,set,killTweensOf", function(s18) {
    return Ws[s18] = Ee[s18];
  });
  Tt.add(rt.updateRoot);
  pr = Ws.to({}, { duration: 0 });
  var $u = function(e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; ) i = i._next;
    return i;
  };
  var qu = function(e, t) {
    var i = e._targets, r, n, o;
    for (r in t) for (n = i.length; n--; ) o = e._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = $u(o, r)), o && o.modifier && o.modifier(t[r], e, i[n], r));
  };
  var cn = function(e, t) {
    return { name: e, headless: 1, rawVars: 1, init: function(r, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (ze(n) && (l = {}, ft(n, function(f) {
          return l[f] = 1;
        }), n = l), t) {
          l = {};
          for (u in n) l[u] = t(n[u]);
          n = l;
        }
        qu(a, n);
      };
    } };
  };
  var ht = Ws.registerPlugin({ name: "attr", init: function(e, t, i, r, n) {
    var o, a, l;
    this.tween = i;
    for (o in t) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], r, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  }, render: function(e, t) {
    for (var i = t._pt; i; ) Be ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next;
  } }, { name: "endArray", headless: 1, init: function(e, t) {
    for (var i = t.length; i--; ) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
  } }, cn("roundProps", In), cn("modifiers"), cn("snap", Ya)) || Ws;
  Ee.version = rt.version = ht.version = "3.13.0";
  Ma = 1;
  io() && Pr();
  Z.Power0;
  Z.Power1;
  Z.Power2;
  Z.Power3;
  Z.Power4;
  Z.Linear;
  Z.Quad;
  Z.Cubic;
  Z.Quart;
  Z.Quint;
  Z.Strong;
  Z.Elastic;
  Z.Back;
  Z.SteppedEase;
  Z.Bounce;
  Z.Sine;
  Z.Expo;
  Z.Circ;
  var Ro;
  var xi;
  var _r;
  var mo;
  var Xi;
  var Fo;
  var go;
  var Uu = function() {
    return typeof window < "u";
  };
  var hi = {};
  var Yi = 180 / Math.PI;
  var vr = Math.PI / 180;
  var lr = Math.atan2;
  var No = 1e8;
  var _o = /([A-Z])/g;
  var ju = /(left|right|width|margin|padding|x)/i;
  var Ku = /[\s,\(]\S/;
  var Kt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" };
  var Nn = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  };
  var Qu = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  };
  var Zu = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
  };
  var Ju = function(e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  };
  var ul = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  };
  var fl = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  };
  var ef = function(e, t, i) {
    return e.style[t] = i;
  };
  var tf = function(e, t, i) {
    return e.style.setProperty(t, i);
  };
  var rf = function(e, t, i) {
    return e._gsap[t] = i;
  };
  var sf = function(e, t, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i;
  };
  var nf = function(e, t, i, r, n) {
    var o = e._gsap;
    o.scaleX = o.scaleY = i, o.renderTransform(n, o);
  };
  var of = function(e, t, i, r, n) {
    var o = e._gsap;
    o[t] = i, o.renderTransform(n, o);
  };
  var ce = "transform";
  var dt = ce + "Origin";
  var af = function s12(e, t) {
    var i = this, r = this.target, n = r.style, o = r._gsap;
    if (e in hi && n) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = Kt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return i.tfm[a] = ai(r, a);
      }) : this.tfm[e] = o.x ? o[e] : ai(r, e), e === dt && (this.tfm.zOrigin = o.zOrigin);
      else return Kt.transform.split(",").forEach(function(a) {
        return s12.call(i, a, t);
      });
      if (this.props.indexOf(ce) >= 0) return;
      o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(dt, t, "")), e = ce;
    }
    (n || t) && this.props.push(e, t, n[e]);
  };
  var cl = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
  };
  var lf = function() {
    var e = this.props, t = this.target, i = t.style, r = t._gsap, n, o;
    for (n = 0; n < e.length; n += 3) e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? i[e[n]] = e[n + 2] : i.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(_o, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = go(), (!n || !n.isStart) && !i[ce] && (cl(i), r.zOrigin && i[dt] && (i[dt] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
    }
  };
  var dl = function(e, t) {
    var i = { target: e, props: [], revert: lf, save: af };
    return e._gsap || ht.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(r) {
      return i.save(r);
    }), i;
  };
  var hl;
  var Bn = function(e, t) {
    var i = xi.createElementNS ? xi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : xi.createElement(e);
    return i && i.style ? i : xi.createElement(e);
  };
  var zt = function s13(e, t, i) {
    var r = getComputedStyle(e);
    return r[t] || r.getPropertyValue(t.replace(_o, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && s13(e, Mr(t) || t, 1) || "";
  };
  var Bo = "O,Moz,ms,Ms,Webkit".split(",");
  var Mr = function(e, t, i) {
    var r = t || Xi, n = r.style, o = 5;
    if (e in n && !i) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Bo[o] + e in n); ) ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Bo[o] : "") + e;
  };
  var Vn = function() {
    Uu() && window.document && (Ro = window, xi = Ro.document, _r = xi.documentElement, Xi = Bn("div") || { style: {} }, Bn("div"), ce = Mr(ce), dt = ce + "Origin", Xi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", hl = !!Mr("perspective"), go = ht.core.reverting, mo = 1);
  };
  var Vo = function(e) {
    var t = e.ownerSVGElement, i = Bn("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(true), n;
    r.style.display = "block", i.appendChild(r), _r.appendChild(i);
    try {
      n = r.getBBox();
    } catch {
    }
    return i.removeChild(r), _r.removeChild(i), n;
  };
  var Go = function(e, t) {
    for (var i = t.length; i--; ) if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  };
  var pl = function(e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      t = Vo(e), i = 1;
    }
    return t && (t.width || t.height) || i || (t = Vo(e)), t && !t.width && !t.x && !t.y ? { x: +Go(e, ["x", "cx", "x1"]) || 0, y: +Go(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : t;
  };
  var ml = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && pl(e));
  };
  var er = function(e, t) {
    if (t) {
      var i = e.style, r;
      t in hi && t !== dt && (t = ce), i.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(r === "--" ? t : t.replace(_o, "-$1").toLowerCase())) : i.removeAttribute(t);
    }
  };
  var bi = function(e, t, i, r, n, o) {
    var a = new ct(e._pt, t, i, 0, 1, o ? fl : ul);
    return e._pt = a, a.b = r, a.e = n, e._props.push(i), a;
  };
  var Yo = { deg: 1, rad: 1, turn: 1 };
  var uf = { grid: 1, flex: 1 };
  var Ai = function s14(e, t, i, r) {
    var n = parseFloat(i) || 0, o = (i + "").trim().substr((n + "").length) || "px", a = Xi.style, l = ju.test(t), u = e.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), c = 100, h = r === "px", d = r === "%", p, m, g, _;
    if (r === o || !n || Yo[r] || Yo[o]) return n;
    if (o !== "px" && !h && (n = s14(e, t, i, "px")), _ = e.getCTM && ml(e), (d || o === "%") && (hi[t] || ~t.indexOf("adius"))) return p = _ ? e.getBBox()[l ? "width" : "height"] : e[f], we(d ? n / p * c : n / 100 * p);
    if (a[l ? "width" : "height"] = c + (h ? o : r), m = r !== "rem" && ~t.indexOf("adius") || r === "em" && e.appendChild && !u ? e : e.parentNode, _ && (m = (e.ownerSVGElement || {}).parentNode), (!m || m === xi || !m.appendChild) && (m = xi.body), g = m._gsap, g && d && g.width && l && g.time === Tt.time && !g.uncache) return we(n / g.width * c);
    if (d && (t === "height" || t === "width")) {
      var v = e.style[t];
      e.style[t] = c + r, p = e[f], v ? e.style[t] = v : er(e, t);
    } else (d || o === "%") && !uf[zt(m, "display")] && (a.position = zt(e, "position")), m === e && (a.position = "static"), m.appendChild(Xi), p = Xi[f], m.removeChild(Xi), a.position = "absolute";
    return l && d && (g = qi(m), g.time = Tt.time, g.width = m[f]), we(h ? p * n / c : p && n ? c / p * n : 0);
  };
  var ai = function(e, t, i, r) {
    var n;
    return mo || Vn(), t in Kt && t !== "transform" && (t = Kt[t], ~t.indexOf(",") && (t = t.split(",")[0])), hi[t] && t !== "transform" ? (n = as(e, r), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Xs(zt(e, dt)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Hs[t] && Hs[t](e, t, i) || zt(e, t) || Da(e, t) || (t === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ai(e, t, n, i) + i : n;
  };
  var ff = function(e, t, i, r) {
    if (!i || i === "none") {
      var n = Mr(t, e, 1), o = n && zt(e, n, 1);
      o && o !== i ? (t = n, i = o) : t === "borderColor" && (i = zt(e, "borderTopColor"));
    }
    var a = new ct(this._pt, e.style, t, 0, 1, ol), l = 0, u = 0, f, c, h, d, p, m, g, _, v, S, y, T;
    if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = zt(e, r.substring(4, r.indexOf(")")))), r === "auto" && (m = e.style[t], e.style[t] = r, r = zt(e, t) || r, m ? e.style[t] = m : er(e, t)), f = [i, r], Ka(f), i = f[0], r = f[1], h = i.match(hr) || [], T = r.match(hr) || [], T.length) {
      for (; c = hr.exec(r); ) g = c[0], v = r.substring(l, c.index), p ? p = (p + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1), g !== (m = h[u++] || "") && (d = parseFloat(m) || 0, y = m.substr((d + "").length), g.charAt(1) === "=" && (g = gr(d, g) + y), _ = parseFloat(g), S = g.substr((_ + "").length), l = hr.lastIndex - S.length, S || (S = S || Et.units[t] || y, l === r.length && (r += S, a.e += S)), y !== S && (d = Ai(e, t, m, S) || 0), a._pt = { _next: a._pt, p: v || u === 1 ? v : ",", s: d, c: _ - d, m: p && p < 4 || t === "zIndex" ? Math.round : 0 });
      a.c = l < r.length ? r.substring(l, r.length) : "";
    } else a.r = t === "display" && r === "none" ? fl : ul;
    return Ea.test(r) && (a.e = 0), this._pt = a, a;
  };
  var Wo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" };
  var cf = function(e) {
    var t = e.split(" "), i = t[0], r = t[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i, i = r, r = e), t[0] = Wo[i] || i, t[1] = Wo[r] || r, t.join(" ");
  };
  var df = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t, r = i.style, n = t.u, o = i._gsap, a, l, u;
      if (n === "all" || n === true) r.cssText = "", l = 1;
      else for (n = n.split(","), u = n.length; --u > -1; ) a = n[u], hi[a] && (l = 1, a = a === "transformOrigin" ? dt : ce), er(i, a);
      l && (er(i, ce), o && (o.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", as(i, 1), o.uncache = 1, cl(r)));
    }
  };
  var Hs = { clearProps: function(e, t, i, r, n) {
    if (n.data !== "isFromStart") {
      var o = e._pt = new ct(e._pt, t, i, 0, 0, df);
      return o.u = r, o.pr = -10, o.tween = n, e._props.push(i), 1;
    }
  } };
  var os = [1, 0, 0, 1, 0, 0];
  var gl = {};
  var _l = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  };
  var Ho = function(e) {
    var t = zt(e, ce);
    return _l(t) ? os : t.substr(7).match(ba).map(we);
  };
  var vo = function(e, t) {
    var i = e._gsap || qi(e), r = e.style, n = Ho(e), o, a, l, u;
    return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? os : n) : (n === os && !e.offsetParent && e !== _r && !i.svg && (l = r.display, r.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, _r.appendChild(e)), n = Ho(e), l ? r.display = l : er(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : _r.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  };
  var Gn = function(e, t, i, r, n, o) {
    var a = e._gsap, l = n || vo(e, true), u = a.xOrigin || 0, f = a.yOrigin || 0, c = a.xOffset || 0, h = a.yOffset || 0, d = l[0], p = l[1], m = l[2], g = l[3], _ = l[4], v = l[5], S = t.split(" "), y = parseFloat(S[0]) || 0, T = parseFloat(S[1]) || 0, E, x, M, C;
    i ? l !== os && (x = d * g - p * m) && (M = y * (g / x) + T * (-m / x) + (m * v - g * _) / x, C = y * (-p / x) + T * (d / x) - (d * v - p * _) / x, y = M, T = C) : (E = pl(e), y = E.x + (~S[0].indexOf("%") ? y / 100 * E.width : y), T = E.y + (~(S[1] || S[0]).indexOf("%") ? T / 100 * E.height : T)), r || r !== false && a.smooth ? (_ = y - u, v = T - f, a.xOffset = c + (_ * d + v * m) - _, a.yOffset = h + (_ * p + v * g) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = y, a.yOrigin = T, a.smooth = !!r, a.origin = t, a.originIsAbsolute = !!i, e.style[dt] = "0px 0px", o && (bi(o, a, "xOrigin", u, y), bi(o, a, "yOrigin", f, T), bi(o, a, "xOffset", c, a.xOffset), bi(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", y + " " + T);
  };
  var as = function(e, t) {
    var i = e._gsap || new el(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style, n = i.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = zt(e, dt) || "0", f, c, h, d, p, m, g, _, v, S, y, T, E, x, M, C, b, k, O, R, V, G, A, z, D, Y, w, J, Se, Rt, de, Ie;
    return f = c = h = m = g = _ = v = S = y = 0, d = p = 1, i.svg = !!(e.getCTM && ml(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[ce] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ce] !== "none" ? l[ce] : "")), r.scale = r.rotate = r.translate = "none"), x = vo(e, i.svg), i.svg && (i.uncache ? (D = e.getBBox(), u = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px", z = "") : z = !t && e.getAttribute("data-svg-origin"), Gn(e, z || u, !!z || i.originIsAbsolute, i.smooth !== false, x)), T = i.xOrigin || 0, E = i.yOrigin || 0, x !== os && (k = x[0], O = x[1], R = x[2], V = x[3], f = G = x[4], c = A = x[5], x.length === 6 ? (d = Math.sqrt(k * k + O * O), p = Math.sqrt(V * V + R * R), m = k || O ? lr(O, k) * Yi : 0, v = R || V ? lr(R, V) * Yi + m : 0, v && (p *= Math.abs(Math.cos(v * vr))), i.svg && (f -= T - (T * k + E * R), c -= E - (T * O + E * V))) : (Ie = x[6], Rt = x[7], w = x[8], J = x[9], Se = x[10], de = x[11], f = x[12], c = x[13], h = x[14], M = lr(Ie, Se), g = M * Yi, M && (C = Math.cos(-M), b = Math.sin(-M), z = G * C + w * b, D = A * C + J * b, Y = Ie * C + Se * b, w = G * -b + w * C, J = A * -b + J * C, Se = Ie * -b + Se * C, de = Rt * -b + de * C, G = z, A = D, Ie = Y), M = lr(-R, Se), _ = M * Yi, M && (C = Math.cos(-M), b = Math.sin(-M), z = k * C - w * b, D = O * C - J * b, Y = R * C - Se * b, de = V * b + de * C, k = z, O = D, R = Y), M = lr(O, k), m = M * Yi, M && (C = Math.cos(M), b = Math.sin(M), z = k * C + O * b, D = G * C + A * b, O = O * C - k * b, A = A * C - G * b, k = z, G = D), g && Math.abs(g) + Math.abs(m) > 359.9 && (g = m = 0, _ = 180 - _), d = we(Math.sqrt(k * k + O * O + R * R)), p = we(Math.sqrt(A * A + Ie * Ie)), M = lr(G, A), v = Math.abs(M) > 2e-4 ? M * Yi : 0, y = de ? 1 / (de < 0 ? -de : de) : 0), i.svg && (z = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !_l(zt(e, ce)), z && e.setAttribute("transform", z))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1, v += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p *= -1, v += v <= 0 ? 180 : -180)), t = t || i.uncache, i.x = f - ((i.xPercent = f && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o, i.y = c - ((i.yPercent = c && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o, i.z = h + o, i.scaleX = we(d), i.scaleY = we(p), i.rotation = we(m) + a, i.rotationX = we(g) + a, i.rotationY = we(_) + a, i.skewX = v + a, i.skewY = S + a, i.transformPerspective = y + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || !t && i.zOrigin || 0) && (r[dt] = Xs(u)), i.xOffset = i.yOffset = 0, i.force3D = Et.force3D, i.renderTransform = i.svg ? pf : hl ? vl : hf, i.uncache = 0, i;
  };
  var Xs = function(e) {
    return (e = e.split(" "))[0] + " " + e[1];
  };
  var dn = function(e, t, i) {
    var r = qe(t);
    return we(parseFloat(t) + parseFloat(Ai(e, "x", i + "px", r))) + r;
  };
  var hf = function(e, t) {
    t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, vl(e, t);
  };
  var Vi = "0deg";
  var Lr = "0px";
  var Gi = ") ";
  var vl = function(e, t) {
    var i = t || this, r = i.xPercent, n = i.yPercent, o = i.x, a = i.y, l = i.z, u = i.rotation, f = i.rotationY, c = i.rotationX, h = i.skewX, d = i.skewY, p = i.scaleX, m = i.scaleY, g = i.transformPerspective, _ = i.force3D, v = i.target, S = i.zOrigin, y = "", T = _ === "auto" && e && e !== 1 || _ === true;
    if (S && (c !== Vi || f !== Vi)) {
      var E = parseFloat(f) * vr, x = Math.sin(E), M = Math.cos(E), C;
      E = parseFloat(c) * vr, C = Math.cos(E), o = dn(v, o, x * C * -S), a = dn(v, a, -Math.sin(E) * -S), l = dn(v, l, M * C * -S + S);
    }
    g !== Lr && (y += "perspective(" + g + Gi), (r || n) && (y += "translate(" + r + "%, " + n + "%) "), (T || o !== Lr || a !== Lr || l !== Lr) && (y += l !== Lr || T ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Gi), u !== Vi && (y += "rotate(" + u + Gi), f !== Vi && (y += "rotateY(" + f + Gi), c !== Vi && (y += "rotateX(" + c + Gi), (h !== Vi || d !== Vi) && (y += "skew(" + h + ", " + d + Gi), (p !== 1 || m !== 1) && (y += "scale(" + p + ", " + m + Gi), v.style[ce] = y || "translate(0, 0)";
  };
  var pf = function(e, t) {
    var i = t || this, r = i.xPercent, n = i.yPercent, o = i.x, a = i.y, l = i.rotation, u = i.skewX, f = i.skewY, c = i.scaleX, h = i.scaleY, d = i.target, p = i.xOrigin, m = i.yOrigin, g = i.xOffset, _ = i.yOffset, v = i.forceCSS, S = parseFloat(o), y = parseFloat(a), T, E, x, M, C;
    l = parseFloat(l), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, l += f), l || u ? (l *= vr, u *= vr, T = Math.cos(l) * c, E = Math.sin(l) * c, x = Math.sin(l - u) * -h, M = Math.cos(l - u) * h, u && (f *= vr, C = Math.tan(u - f), C = Math.sqrt(1 + C * C), x *= C, M *= C, f && (C = Math.tan(f), C = Math.sqrt(1 + C * C), T *= C, E *= C)), T = we(T), E = we(E), x = we(x), M = we(M)) : (T = c, M = h, E = x = 0), (S && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (S = Ai(d, "x", o, "px"), y = Ai(d, "y", a, "px")), (p || m || g || _) && (S = we(S + p - (p * T + m * x) + g), y = we(y + m - (p * E + m * M) + _)), (r || n) && (C = d.getBBox(), S = we(S + r / 100 * C.width), y = we(y + n / 100 * C.height)), C = "matrix(" + T + "," + E + "," + x + "," + M + "," + S + "," + y + ")", d.setAttribute("transform", C), v && (d.style[ce] = C);
  };
  var mf = function(e, t, i, r, n) {
    var o = 360, a = ze(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Yi : 1), u = l - r, f = r + u + "deg", c, h;
    return a && (c = n.split("_")[1], c === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), c === "cw" && u < 0 ? u = (u + o * No) % o - ~~(u / o) * o : c === "ccw" && u > 0 && (u = (u - o * No) % o - ~~(u / o) * o)), e._pt = h = new ct(e._pt, t, i, r, u, Qu), h.e = f, h.u = "deg", e._props.push(i), h;
  };
  var Xo = function(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  };
  var gf = function(e, t, i) {
    var r = Xo({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, l, u, f, c, h, d, p;
    r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[ce] = t, a = as(i, 1), er(i, ce), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[ce], o[ce] = t, a = as(i, 1), o[ce] = u);
    for (l in hi) u = r[l], f = a[l], u !== f && n.indexOf(l) < 0 && (d = qe(u), p = qe(f), c = d !== p ? Ai(i, l, u, p) : parseFloat(u), h = parseFloat(f), e._pt = new ct(e._pt, a, l, c, h - c, Nn), e._pt.u = p || 0, e._props.push(l));
    Xo(a, r);
  };
  ft("padding,margin,Width,Radius", function(s18, e) {
    var t = "Top", i = "Right", r = "Bottom", n = "Left", o = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function(a) {
      return e < 2 ? s18 + a : "border" + a + s18;
    });
    Hs[e > 1 ? "border" + s18 : s18] = function(a, l, u, f, c) {
      var h, d;
      if (arguments.length < 4) return h = o.map(function(p) {
        return ai(a, p, u);
      }), d = h.join(" "), d.split(h[0]).length === 5 ? h[0] : d;
      h = (f + "").split(" "), d = {}, o.forEach(function(p, m) {
        return d[p] = h[m] = h[m] || h[(m - 1) / 2 | 0];
      }), a.init(l, d, c);
    };
  });
  var wl = { name: "css", register: Vn, targetTest: function(e) {
    return e.style && e.nodeType;
  }, init: function(e, t, i, r, n) {
    var o = this._props, a = e.style, l = i.vars.startAt, u, f, c, h, d, p, m, g, _, v, S, y, T, E, x, M;
    mo || Vn(), this.styles = this.styles || dl(e), M = this.styles.props, this.tween = i;
    for (m in t) if (m !== "autoRound" && (f = t[m], !(wt[m] && tl(m, t, i, r, e, n)))) {
      if (d = typeof f, p = Hs[m], d === "function" && (f = f.call(i, r, e, n), d = typeof f), d === "string" && ~f.indexOf("random(") && (f = rs(f)), p) p(this, e, m, f, i) && (x = 1);
      else if (m.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(m) + "").trim(), f += "", Oi.lastIndex = 0, Oi.test(u) || (g = qe(u), _ = qe(f)), _ ? g !== _ && (u = Ai(e, m, u, _) + _) : g && (f += g), this.add(a, "setProperty", u, f, r, n, 0, 0, m), o.push(m), M.push(m, 0, a[m]);
      else if (d !== "undefined") {
        if (l && m in l ? (u = typeof l[m] == "function" ? l[m].call(i, r, e, n) : l[m], ze(u) && ~u.indexOf("random(") && (u = rs(u)), qe(u + "") || u === "auto" || (u += Et.units[m] || qe(ai(e, m)) || ""), (u + "").charAt(1) === "=" && (u = ai(e, m))) : u = ai(e, m), h = parseFloat(u), v = d === "string" && f.charAt(1) === "=" && f.substr(0, 2), v && (f = f.substr(2)), c = parseFloat(f), m in Kt && (m === "autoAlpha" && (h === 1 && ai(e, "visibility") === "hidden" && c && (h = 0), M.push("visibility", 0, a.visibility), bi(this, a, "visibility", h ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), m !== "scale" && m !== "transform" && (m = Kt[m], ~m.indexOf(",") && (m = m.split(",")[0]))), S = m in hi, S) {
          if (this.styles.save(m), d === "string" && f.substring(0, 6) === "var(--" && (f = zt(e, f.substring(4, f.indexOf(")"))), c = parseFloat(f)), y || (T = e._gsap, T.renderTransform && !t.parseTransform || as(e, t.parseTransform), E = t.smoothOrigin !== false && T.smooth, y = this._pt = new ct(this._pt, a, ce, 0, 1, T.renderTransform, T, 0, -1), y.dep = 1), m === "scale") this._pt = new ct(this._pt, T, "scaleY", T.scaleY, (v ? gr(T.scaleY, v + c) : c) - T.scaleY || 0, Nn), this._pt.u = 0, o.push("scaleY", m), m += "X";
          else if (m === "transformOrigin") {
            M.push(dt, 0, a[dt]), f = cf(f), T.svg ? Gn(e, f, 0, E, 0, this) : (_ = parseFloat(f.split(" ")[2]) || 0, _ !== T.zOrigin && bi(this, T, "zOrigin", T.zOrigin, _), bi(this, a, m, Xs(u), Xs(f)));
            continue;
          } else if (m === "svgOrigin") {
            Gn(e, f, 1, E, 0, this);
            continue;
          } else if (m in gl) {
            mf(this, T, m, h, v ? gr(h, v + f) : f);
            continue;
          } else if (m === "smoothOrigin") {
            bi(this, T, "smooth", T.smooth, f);
            continue;
          } else if (m === "force3D") {
            T[m] = f;
            continue;
          } else if (m === "transform") {
            gf(this, f, e);
            continue;
          }
        } else m in a || (m = Mr(m) || m);
        if (S || (c || c === 0) && (h || h === 0) && !Ku.test(f) && m in a) g = (u + "").substr((h + "").length), c || (c = 0), _ = qe(f) || (m in Et.units ? Et.units[m] : g), g !== _ && (h = Ai(e, m, u, _)), this._pt = new ct(this._pt, S ? T : a, m, h, (v ? gr(h, v + c) : c) - h, !S && (_ === "px" || m === "zIndex") && t.autoRound !== false ? Ju : Nn), this._pt.u = _ || 0, g !== _ && _ !== "%" && (this._pt.b = u, this._pt.r = Zu);
        else if (m in a) ff.call(this, e, m, u, v ? v + f : f);
        else if (m in e) this.add(e, m, u || e[m], v ? v + f : f, r, n);
        else if (m !== "parseTransform") {
          so(m, f);
          continue;
        }
        S || (m in a ? M.push(m, 0, a[m]) : typeof e[m] == "function" ? M.push(m, 2, e[m]()) : M.push(m, 1, u || e[m])), o.push(m);
      }
    }
    x && al(this);
  }, render: function(e, t) {
    if (t.tween._time || !go()) for (var i = t._pt; i; ) i.r(e, i.d), i = i._next;
    else t.styles.revert();
  }, get: ai, aliases: Kt, getSetter: function(e, t, i) {
    var r = Kt[t];
    return r && r.indexOf(",") < 0 && (t = r), t in hi && t !== dt && (e._gsap.x || ai(e, "x")) ? i && Fo === i ? t === "scale" ? sf : rf : (Fo = i || {}) && (t === "scale" ? nf : of) : e.style && !to(e.style[t]) ? ef : ~t.indexOf("-") ? tf : ho(e, t);
  }, core: { _removeProperty: er, _getMatrix: vo } };
  ht.utils.checkPrefix = Mr;
  ht.core.getStyleSaver = dl;
  (function(s18, e, t, i) {
    var r = ft(s18 + "," + e + "," + t, function(n) {
      hi[n] = 1;
    });
    ft(e, function(n) {
      Et.units[n] = "deg", gl[n] = 1;
    }), Kt[r[13]] = s18 + "," + e, ft(i, function(n) {
      var o = n.split(":");
      Kt[o[1]] = r[o[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s18) {
    Et.units[s18] = "px";
  });
  ht.registerPlugin(wl);
  var _f = ht.registerPlugin(wl) || ht;
  _f.core.Tween;
  function vf(s18, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(s18, i.key, i);
    }
  }
  function wf(s18, e, t) {
    return e && vf(s18.prototype, e), s18;
  }
  var Ne;
  var As;
  var xt;
  var Ei;
  var Pi;
  var wr;
  var yl;
  var Wi;
  var $r;
  var Sl;
  var ui;
  var Yt;
  var Tl;
  var xl = function() {
    return Ne || typeof window < "u" && (Ne = window.gsap) && Ne.registerPlugin && Ne;
  };
  var bl = 1;
  var mr = [];
  var U = [];
  var Zt = [];
  var qr = Date.now;
  var Yn = function(e, t) {
    return t;
  };
  var yf = function() {
    var e = $r.core, t = e.bridge || {}, i = e._scrollers, r = e._proxies;
    i.push.apply(i, U), r.push.apply(r, Zt), U = i, Zt = r, Yn = function(o, a) {
      return t[o](a);
    };
  };
  var ki = function(e, t) {
    return ~Zt.indexOf(e) && Zt[Zt.indexOf(e) + 1][t];
  };
  var Ur = function(e) {
    return !!~Sl.indexOf(e);
  };
  var Je = function(e, t, i, r, n) {
    return e.addEventListener(t, i, { passive: r !== false, capture: !!n });
  };
  var Ze = function(e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  };
  var ms = "scrollLeft";
  var gs = "scrollTop";
  var Wn = function() {
    return ui && ui.isPressed || U.cache++;
  };
  var $s = function(e, t) {
    var i = function r(n) {
      if (n || n === 0) {
        bl && (xt.history.scrollRestoration = "manual");
        var o = ui && ui.isPressed;
        n = r.v = Math.round(n) || (ui && ui.iOS ? 1 : 0), e(n), r.cacheID = U.cache, o && Yn("ss", n);
      } else (t || U.cache !== r.cacheID || Yn("ref")) && (r.cacheID = U.cache, r.v = e());
      return r.v + r.offset;
    };
    return i.offset = 0, e && i;
  };
  var st = { s: ms, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: $s(function(s18) {
    return arguments.length ? xt.scrollTo(s18, Oe.sc()) : xt.pageXOffset || Ei[ms] || Pi[ms] || wr[ms] || 0;
  }) };
  var Oe = { s: gs, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: st, sc: $s(function(s18) {
    return arguments.length ? xt.scrollTo(st.sc(), s18) : xt.pageYOffset || Ei[gs] || Pi[gs] || wr[gs] || 0;
  }) };
  var lt = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Ne.utils.toArray)(e)[0] || (typeof e == "string" && Ne.config().nullTargetWarn !== false ? console.warn("Element not found:", e) : null);
  };
  var Sf = function(e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return true;
    return false;
  };
  var Li = function(e, t) {
    var i = t.s, r = t.sc;
    Ur(e) && (e = Ei.scrollingElement || Pi);
    var n = U.indexOf(e), o = r === Oe.sc ? 1 : 2;
    !~n && (n = U.push(e) - 1), U[n + o] || Je(e, "scroll", Wn);
    var a = U[n + o], l = a || (U[n + o] = $s(ki(e, i), true) || (Ur(e) ? r : $s(function(u) {
      return arguments.length ? e[i] = u : e[i];
    })));
    return l.target = e, a || (l.smooth = Ne.getProperty(e, "scrollBehavior") === "smooth"), l;
  };
  var Hn = function(e, t, i) {
    var r = e, n = e, o = qr(), a = o, l = t || 50, u = Math.max(500, l * 3), f = function(p, m) {
      var g = qr();
      m || g - o > l ? (n = r, r = p, a = o, o = g) : i ? r += p : r = n + (p - n) / (g - a) * (o - a);
    }, c = function() {
      n = r = i ? 0 : r, a = o = 0;
    }, h = function(p) {
      var m = a, g = n, _ = qr();
      return (p || p === 0) && p !== r && f(p), o === a || _ - a > u ? 0 : (r + (i ? g : -g)) / ((i ? _ : o) - m) * 1e3;
    };
    return { update: f, reset: c, getVelocity: h };
  };
  var zr = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  };
  var $o = function(e) {
    var t = Math.max.apply(Math, e), i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  };
  var El = function() {
    $r = Ne.core.globals().ScrollTrigger, $r && $r.core && yf();
  };
  var Pl = function(e) {
    return Ne = e || xl(), !As && Ne && typeof document < "u" && document.body && (xt = window, Ei = document, Pi = Ei.documentElement, wr = Ei.body, Sl = [xt, Ei, Pi, wr], Ne.utils.clamp, Tl = Ne.core.context || function() {
    }, Wi = "onpointerenter" in wr ? "pointer" : "mouse", yl = ye.isTouch = xt.matchMedia && xt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in xt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Yt = ye.eventTypes = ("ontouchstart" in Pi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return bl = 0;
    }, 500), El(), As = 1), As;
  };
  st.op = Oe;
  U.cache = 0;
  var ye = (function() {
    function s18(t) {
      this.init(t);
    }
    var e = s18.prototype;
    return e.init = function(i) {
      As || Pl(Ne) || console.warn("Please gsap.registerPlugin(Observer)"), $r || El();
      var r = i.tolerance, n = i.dragMinimum, o = i.type, a = i.target, l = i.lineHeight, u = i.debounce, f = i.preventDefault, c = i.onStop, h = i.onStopDelay, d = i.ignore, p = i.wheelSpeed, m = i.event, g = i.onDragStart, _ = i.onDragEnd, v = i.onDrag, S = i.onPress, y = i.onRelease, T = i.onRight, E = i.onLeft, x = i.onUp, M = i.onDown, C = i.onChangeX, b = i.onChangeY, k = i.onChange, O = i.onToggleX, R = i.onToggleY, V = i.onHover, G = i.onHoverEnd, A = i.onMove, z = i.ignoreCheck, D = i.isNormalizer, Y = i.onGestureStart, w = i.onGestureEnd, J = i.onWheel, Se = i.onEnable, Rt = i.onDisable, de = i.onClick, Ie = i.scrollSpeed, Ve = i.capture, Te = i.allowClicks, Ke = i.lockAxis, Ge = i.onLockAxis;
      this.target = a = lt(a) || Pi, this.vars = i, d && (d = Ne.utils.toArray(d)), r = r || 1e-9, n = n || 0, p = p || 1, Ie = Ie || 1, o = o || "wheel,touch,pointer", u = u !== false, l || (l = parseFloat(xt.getComputedStyle(wr).lineHeight) || 22);
      var pi, Qe, ot, ee, ge, at, pt, P = this, mt = 0, ti = 0, mi = i.passive || !f && i.passive !== false, he = Li(a, st), ii = Li(a, Oe), gi = he(), Ii = ii(), ke = ~o.indexOf("touch") && !~o.indexOf("pointer") && Yt[0] === "pointerdown", _i = Ur(a), _e = a.ownerDocument || Ei, Ft = [0, 0, 0], Ct = [0, 0, 0], ri = 0, Or = function() {
        return ri = qr();
      }, xe = function(B, te) {
        return (P.event = B) && d && Sf(B.target, d) || te && ke && B.pointerType !== "touch" || z && z(B, te);
      }, cs = function() {
        P._vx.reset(), P._vy.reset(), Qe.pause(), c && c(P);
      }, si = function() {
        var B = P.deltaX = $o(Ft), te = P.deltaY = $o(Ct), L = Math.abs(B) >= r, W = Math.abs(te) >= r;
        k && (L || W) && k(P, B, te, Ft, Ct), L && (T && P.deltaX > 0 && T(P), E && P.deltaX < 0 && E(P), C && C(P), O && P.deltaX < 0 != mt < 0 && O(P), mt = P.deltaX, Ft[0] = Ft[1] = Ft[2] = 0), W && (M && P.deltaY > 0 && M(P), x && P.deltaY < 0 && x(P), b && b(P), R && P.deltaY < 0 != ti < 0 && R(P), ti = P.deltaY, Ct[0] = Ct[1] = Ct[2] = 0), (ee || ot) && (A && A(P), ot && (g && ot === 1 && g(P), v && v(P), ot = 0), ee = false), at && !(at = false) && Ge && Ge(P), ge && (J(P), ge = false), pi = 0;
      }, nr = function(B, te, L) {
        Ft[L] += B, Ct[L] += te, P._vx.update(B), P._vy.update(te), u ? pi || (pi = requestAnimationFrame(si)) : si();
      }, or = function(B, te) {
        Ke && !pt && (P.axis = pt = Math.abs(B) > Math.abs(te) ? "x" : "y", at = true), pt !== "y" && (Ft[2] += B, P._vx.update(B, true)), pt !== "x" && (Ct[2] += te, P._vy.update(te, true)), u ? pi || (pi = requestAnimationFrame(si)) : si();
      }, vi = function(B) {
        if (!xe(B, 1)) {
          B = zr(B, f);
          var te = B.clientX, L = B.clientY, W = te - P.x, N = L - P.y, H = P.isDragging;
          P.x = te, P.y = L, (H || (W || N) && (Math.abs(P.startX - te) >= n || Math.abs(P.startY - L) >= n)) && (ot = H ? 2 : 1, H || (P.isDragging = true), or(W, N));
        }
      }, Ri = P.onPress = function(X) {
        xe(X, 1) || X && X.button || (P.axis = pt = null, Qe.pause(), P.isPressed = true, X = zr(X), mt = ti = 0, P.startX = P.x = X.clientX, P.startY = P.y = X.clientY, P._vx.reset(), P._vy.reset(), Je(D ? a : _e, Yt[1], vi, mi, true), P.deltaX = P.deltaY = 0, S && S(P));
      }, j = P.onRelease = function(X) {
        if (!xe(X, 1)) {
          Ze(D ? a : _e, Yt[1], vi, true);
          var B = !isNaN(P.y - P.startY), te = P.isDragging, L = te && (Math.abs(P.x - P.startX) > 3 || Math.abs(P.y - P.startY) > 3), W = zr(X);
          !L && B && (P._vx.reset(), P._vy.reset(), f && Te && Ne.delayedCall(0.08, function() {
            if (qr() - ri > 300 && !X.defaultPrevented) {
              if (X.target.click) X.target.click();
              else if (_e.createEvent) {
                var N = _e.createEvent("MouseEvents");
                N.initMouseEvent("click", true, true, xt, 1, W.screenX, W.screenY, W.clientX, W.clientY, false, false, false, false, 0, null), X.target.dispatchEvent(N);
              }
            }
          })), P.isDragging = P.isGesturing = P.isPressed = false, c && te && !D && Qe.restart(true), ot && si(), _ && te && _(P), y && y(P, L);
        }
      }, Fi = function(B) {
        return B.touches && B.touches.length > 1 && (P.isGesturing = true) && Y(B, P.isDragging);
      }, Nt = function() {
        return (P.isGesturing = false) || w(P);
      }, Bt = function(B) {
        if (!xe(B)) {
          var te = he(), L = ii();
          nr((te - gi) * Ie, (L - Ii) * Ie, 1), gi = te, Ii = L, c && Qe.restart(true);
        }
      }, Vt = function(B) {
        if (!xe(B)) {
          B = zr(B, f), J && (ge = true);
          var te = (B.deltaMode === 1 ? l : B.deltaMode === 2 ? xt.innerHeight : 1) * p;
          nr(B.deltaX * te, B.deltaY * te, 0), c && !D && Qe.restart(true);
        }
      }, Ni = function(B) {
        if (!xe(B)) {
          var te = B.clientX, L = B.clientY, W = te - P.x, N = L - P.y;
          P.x = te, P.y = L, ee = true, c && Qe.restart(true), (W || N) && or(W, N);
        }
      }, ar = function(B) {
        P.event = B, V(P);
      }, ni = function(B) {
        P.event = B, G(P);
      }, kr = function(B) {
        return xe(B) || zr(B, f) && de(P);
      };
      Qe = P._dc = Ne.delayedCall(h || 0.25, cs).pause(), P.deltaX = P.deltaY = 0, P._vx = Hn(0, 50, true), P._vy = Hn(0, 50, true), P.scrollX = he, P.scrollY = ii, P.isDragging = P.isGesturing = P.isPressed = false, Tl(this), P.enable = function(X) {
        return P.isEnabled || (Je(_i ? _e : a, "scroll", Wn), o.indexOf("scroll") >= 0 && Je(_i ? _e : a, "scroll", Bt, mi, Ve), o.indexOf("wheel") >= 0 && Je(a, "wheel", Vt, mi, Ve), (o.indexOf("touch") >= 0 && yl || o.indexOf("pointer") >= 0) && (Je(a, Yt[0], Ri, mi, Ve), Je(_e, Yt[2], j), Je(_e, Yt[3], j), Te && Je(a, "click", Or, true, true), de && Je(a, "click", kr), Y && Je(_e, "gesturestart", Fi), w && Je(_e, "gestureend", Nt), V && Je(a, Wi + "enter", ar), G && Je(a, Wi + "leave", ni), A && Je(a, Wi + "move", Ni)), P.isEnabled = true, P.isDragging = P.isGesturing = P.isPressed = ee = ot = false, P._vx.reset(), P._vy.reset(), gi = he(), Ii = ii(), X && X.type && Ri(X), Se && Se(P)), P;
      }, P.disable = function() {
        P.isEnabled && (mr.filter(function(X) {
          return X !== P && Ur(X.target);
        }).length || Ze(_i ? _e : a, "scroll", Wn), P.isPressed && (P._vx.reset(), P._vy.reset(), Ze(D ? a : _e, Yt[1], vi, true)), Ze(_i ? _e : a, "scroll", Bt, Ve), Ze(a, "wheel", Vt, Ve), Ze(a, Yt[0], Ri, Ve), Ze(_e, Yt[2], j), Ze(_e, Yt[3], j), Ze(a, "click", Or, true), Ze(a, "click", kr), Ze(_e, "gesturestart", Fi), Ze(_e, "gestureend", Nt), Ze(a, Wi + "enter", ar), Ze(a, Wi + "leave", ni), Ze(a, Wi + "move", Ni), P.isEnabled = P.isPressed = P.isDragging = false, Rt && Rt(P));
      }, P.kill = P.revert = function() {
        P.disable();
        var X = mr.indexOf(P);
        X >= 0 && mr.splice(X, 1), ui === P && (ui = 0);
      }, mr.push(P), D && Ur(a) && (ui = P), P.enable(m);
    }, wf(s18, [{ key: "velocityX", get: function() {
      return this._vx.getVelocity();
    } }, { key: "velocityY", get: function() {
      return this._vy.getVelocity();
    } }]), s18;
  })();
  ye.version = "3.13.0";
  ye.create = function(s18) {
    return new ye(s18);
  };
  ye.register = Pl;
  ye.getAll = function() {
    return mr.slice();
  };
  ye.getById = function(s18) {
    return mr.filter(function(e) {
      return e.vars.id === s18;
    })[0];
  };
  xl() && Ne.registerPlugin(ye);
  var I;
  var cr;
  var q;
  var oe;
  var St;
  var ie;
  var wo;
  var qs;
  var ls;
  var jr;
  var Nr;
  var _s;
  var Xe;
  var rn;
  var Xn;
  var tt;
  var qo;
  var Uo;
  var dr;
  var Ml;
  var hn;
  var Cl;
  var et;
  var $n;
  var Ol;
  var kl;
  var Si;
  var qn;
  var yo;
  var yr;
  var So;
  var Us;
  var Un;
  var pn;
  var vs = 1;
  var $e = Date.now;
  var mn = $e();
  var It = 0;
  var Br = 0;
  var jo = function(e, t, i) {
    var r = vt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return i["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
  };
  var Ko = function(e, t) {
    return t && (!vt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
  };
  var Tf = function s15() {
    return Br && requestAnimationFrame(s15);
  };
  var Qo = function() {
    return rn = 1;
  };
  var Zo = function() {
    return rn = 0;
  };
  var Ut = function(e) {
    return e;
  };
  var Vr = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  };
  var Dl = function() {
    return typeof window < "u";
  };
  var Al = function() {
    return I || Dl() && (I = window.gsap) && I.registerPlugin && I;
  };
  var tr = function(e) {
    return !!~wo.indexOf(e);
  };
  var Ll = function(e) {
    return (e === "Height" ? So : q["inner" + e]) || St["client" + e] || ie["client" + e];
  };
  var zl = function(e) {
    return ki(e, "getBoundingClientRect") || (tr(e) ? function() {
      return Fs.width = q.innerWidth, Fs.height = So, Fs;
    } : function() {
      return li(e);
    });
  };
  var xf = function(e, t, i) {
    var r = i.d, n = i.d2, o = i.a;
    return (o = ki(e, "getBoundingClientRect")) ? function() {
      return o()[r];
    } : function() {
      return (t ? Ll(n) : e["client" + n]) || 0;
    };
  };
  var bf = function(e, t) {
    return !t || ~Zt.indexOf(e) ? zl(e) : function() {
      return Fs;
    };
  };
  var Qt = function(e, t) {
    var i = t.s, r = t.d2, n = t.d, o = t.a;
    return Math.max(0, (i = "scroll" + r) && (o = ki(e, i)) ? o() - zl(e)()[n] : tr(e) ? (St[i] || ie[i]) - Ll(r) : e[i] - e["offset" + r]);
  };
  var ws = function(e, t) {
    for (var i = 0; i < dr.length; i += 3) (!t || ~t.indexOf(dr[i + 1])) && e(dr[i], dr[i + 1], dr[i + 2]);
  };
  var vt = function(e) {
    return typeof e == "string";
  };
  var Ue = function(e) {
    return typeof e == "function";
  };
  var Gr = function(e) {
    return typeof e == "number";
  };
  var Hi = function(e) {
    return typeof e == "object";
  };
  var Ir = function(e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  };
  var gn = function(e, t) {
    if (e.enabled) {
      var i = e._ctx ? e._ctx.add(function() {
        return t(e);
      }) : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  };
  var ur = Math.abs;
  var Il = "left";
  var Rl = "top";
  var To = "right";
  var xo = "bottom";
  var Qi = "width";
  var Zi = "height";
  var Kr = "Right";
  var Qr = "Left";
  var Zr = "Top";
  var Jr = "Bottom";
  var be = "padding";
  var kt = "margin";
  var Cr = "Width";
  var bo = "Height";
  var Ce = "px";
  var Dt = function(e) {
    return q.getComputedStyle(e);
  };
  var Ef = function(e) {
    var t = Dt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  };
  var Jo = function(e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  };
  var li = function(e, t) {
    var i = t && Dt(e)[Xn] !== "matrix(1, 0, 0, 1, 0, 0)" && I.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1), r = e.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  };
  var js = function(e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  };
  var Fl = function(e) {
    var t = [], i = e.labels, r = e.duration(), n;
    for (n in i) t.push(i[n] / r);
    return t;
  };
  var Pf = function(e) {
    return function(t) {
      return I.utils.snap(Fl(e), t);
    };
  };
  var Eo = function(e) {
    var t = I.utils.snap(e), i = Array.isArray(e) && e.slice(0).sort(function(r, n) {
      return r - n;
    });
    return i ? function(r, n, o) {
      o === void 0 && (o = 1e-3);
      var a;
      if (!n) return t(r);
      if (n > 0) {
        for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
        return i[a - 1];
      } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
      return i[0];
    } : function(r, n, o) {
      o === void 0 && (o = 1e-3);
      var a = t(r);
      return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : t(n < 0 ? r - e : r + e);
    };
  };
  var Mf = function(e) {
    return function(t, i) {
      return Eo(Fl(e))(t, i.direction);
    };
  };
  var ys = function(e, t, i, r) {
    return i.split(",").forEach(function(n) {
      return e(t, n, r);
    });
  };
  var Le = function(e, t, i, r, n) {
    return e.addEventListener(t, i, { passive: !r, capture: !!n });
  };
  var Ae = function(e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  };
  var Ss = function(e, t, i) {
    i = i && i.wheelHandler, i && (e(t, "wheel", i), e(t, "touchmove", i));
  };
  var ea = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" };
  var Ts = { toggleActions: "play", anticipatePin: 0 };
  var Ks = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 };
  var Ls = function(e, t) {
    if (vt(e)) {
      var i = e.indexOf("="), r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), e = e.substr(0, i - 1)), e = r + (e in Ks ? Ks[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }
    return e;
  };
  var xs = function(e, t, i, r, n, o, a, l) {
    var u = n.startColor, f = n.endColor, c = n.fontSize, h = n.indent, d = n.fontWeight, p = oe.createElement("div"), m = tr(i) || ki(i, "pinType") === "fixed", g = e.indexOf("scroller") !== -1, _ = m ? ie : i, v = e.indexOf("start") !== -1, S = v ? u : f, y = "border-color:" + S + ";font-size:" + c + ";color:" + S + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((g || l) && m ? "fixed;" : "absolute;"), (g || l || !m) && (y += (r === Oe ? To : xo) + ":" + (o + parseFloat(h)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, _.children[0] ? _.insertBefore(p, _.children[0]) : _.appendChild(p), p._offset = p["offset" + r.op.d2], zs(p, 0, r, v), p;
  };
  var zs = function(e, t, i, r) {
    var n = { display: "block" }, o = i[r ? "os2" : "p2"], a = i[r ? "p2" : "os2"];
    e._isFlipped = r, n[i.a + "Percent"] = r ? -100 : 0, n[i.a] = r ? "1px" : 0, n["border" + o + Cr] = 1, n["border" + a + Cr] = 0, n[i.p] = t + "px", I.set(e, n);
  };
  var $ = [];
  var jn = {};
  var us;
  var ta = function() {
    return $e() - It > 34 && (us || (us = requestAnimationFrame(ci)));
  };
  var fr = function() {
    (!et || !et.isPressed || et.startX > ie.clientWidth) && (U.cache++, et ? us || (us = requestAnimationFrame(ci)) : ci(), It || rr("scrollStart"), It = $e());
  };
  var _n = function() {
    kl = q.innerWidth, Ol = q.innerHeight;
  };
  var Yr = function(e) {
    U.cache++, (e === true || !Xe && !Cl && !oe.fullscreenElement && !oe.webkitFullscreenElement && (!$n || kl !== q.innerWidth || Math.abs(q.innerHeight - Ol) > q.innerHeight * 0.25)) && qs.restart(true);
  };
  var ir = {};
  var Cf = [];
  var Nl = function s16() {
    return Ae(K, "scrollEnd", s16) || $i(true);
  };
  var rr = function(e) {
    return ir[e] && ir[e].map(function(t) {
      return t();
    }) || Cf;
  };
  var _t = [];
  var Bl = function(e) {
    for (var t = 0; t < _t.length; t += 5) (!e || _t[t + 4] && _t[t + 4].query === e) && (_t[t].style.cssText = _t[t + 1], _t[t].getBBox && _t[t].setAttribute("transform", _t[t + 2] || ""), _t[t + 3].uncache = 1);
  };
  var Po = function(e, t) {
    var i;
    for (tt = 0; tt < $.length; tt++) i = $[tt], i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(true, true));
    Us = true, t && Bl(t), t || rr("revert");
  };
  var Vl = function(e, t) {
    U.cache++, (t || !it) && U.forEach(function(i) {
      return Ue(i) && i.cacheID++ && (i.rec = 0);
    }), vt(e) && (q.history.scrollRestoration = yo = e);
  };
  var it;
  var Ji = 0;
  var ia;
  var Of = function() {
    if (ia !== Ji) {
      var e = ia = Ji;
      requestAnimationFrame(function() {
        return e === Ji && $i(true);
      });
    }
  };
  var Gl = function() {
    ie.appendChild(yr), So = !et && yr.offsetHeight || q.innerHeight, ie.removeChild(yr);
  };
  var ra = function(e) {
    return ls(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
      return t.style.display = e ? "none" : "block";
    });
  };
  var $i = function(e, t) {
    if (St = oe.documentElement, ie = oe.body, wo = [q, oe, St, ie], It && !e && !Us) {
      Le(K, "scrollEnd", Nl);
      return;
    }
    Gl(), it = K.isRefreshing = true, U.forEach(function(r) {
      return Ue(r) && ++r.cacheID && (r.rec = r());
    });
    var i = rr("refreshInit");
    Ml && K.sort(), t || Po(), U.forEach(function(r) {
      Ue(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
    }), $.slice(0).forEach(function(r) {
      return r.refresh();
    }), Us = false, $.forEach(function(r) {
      if (r._subPinOffset && r.pin) {
        var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
        r.revert(true, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
      }
    }), Un = 1, ra(true), $.forEach(function(r) {
      var n = Qt(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
      (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, true);
    }), ra(false), Un = 0, i.forEach(function(r) {
      return r && r.render && r.render(-1);
    }), U.forEach(function(r) {
      Ue(r) && (r.smooth && requestAnimationFrame(function() {
        return r.target.style.scrollBehavior = "smooth";
      }), r.rec && r(r.rec));
    }), Vl(yo, 1), qs.pause(), Ji++, it = 2, ci(2), $.forEach(function(r) {
      return Ue(r.vars.onRefresh) && r.vars.onRefresh(r);
    }), it = K.isRefreshing = false, rr("refresh");
  };
  var Kn = 0;
  var Is = 1;
  var es;
  var ci = function(e) {
    if (e === 2 || !it && !Us) {
      K.isUpdating = true, es && es.update(0);
      var t = $.length, i = $e(), r = i - mn >= 50, n = t && $[0].scroll();
      if (Is = Kn > n ? -1 : 1, it || (Kn = n), r && (It && !rn && i - It > 200 && (It = 0, rr("scrollEnd")), Nr = mn, mn = i), Is < 0) {
        for (tt = t; tt-- > 0; ) $[tt] && $[tt].update(0, r);
        Is = 1;
      } else for (tt = 0; tt < t; tt++) $[tt] && $[tt].update(0, r);
      K.isUpdating = false;
    }
    us = 0;
  };
  var Qn = [Il, Rl, xo, To, kt + Jr, kt + Kr, kt + Zr, kt + Qr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var Rs = Qn.concat([Qi, Zi, "boxSizing", "max" + Cr, "max" + bo, "position", kt, be, be + Zr, be + Kr, be + Jr, be + Qr]);
  var kf = function(e, t, i) {
    Sr(i);
    var r = e._gsap;
    if (r.spacerIsNative) Sr(r.spacerState);
    else if (e._gsap.swappedIn) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
    e._gsap.swappedIn = false;
  };
  var vn = function(e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var n = Qn.length, o = t.style, a = e.style, l; n--; ) l = Qn[n], o[l] = i[l];
      o.position = i.position === "absolute" ? "absolute" : "relative", i.display === "inline" && (o.display = "inline-block"), a[xo] = a[To] = "auto", o.flexBasis = i.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Qi] = js(e, st) + Ce, o[Zi] = js(e, Oe) + Ce, o[be] = a[kt] = a[Rl] = a[Il] = "0", Sr(r), a[Qi] = a["max" + Cr] = i[Qi], a[Zi] = a["max" + bo] = i[Zi], a[be] = i[be], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = true;
    }
  };
  var Df = /([A-Z])/g;
  var Sr = function(e) {
    if (e) {
      var t = e.t.style, i = e.length, r = 0, n, o;
      for ((e.t._gsap || I.core.getCache(e.t)).uncache = 1; r < i; r += 2) o = e[r + 1], n = e[r], o ? t[n] = o : t[n] && t.removeProperty(n.replace(Df, "-$1").toLowerCase());
    }
  };
  var bs = function(e) {
    for (var t = Rs.length, i = e.style, r = [], n = 0; n < t; n++) r.push(Rs[n], i[Rs[n]]);
    return r.t = e, r;
  };
  var Af = function(e, t, i) {
    for (var r = [], n = e.length, o = i ? 8 : 0, a; o < n; o += 2) a = e[o], r.push(a, a in t ? t[a] : e[o + 1]);
    return r.t = e.t, r;
  };
  var Fs = { left: 0, top: 0 };
  var sa = function(e, t, i, r, n, o, a, l, u, f, c, h, d, p) {
    Ue(e) && (e = e(l)), vt(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Ls("0" + e.substr(3), i) : 0));
    var m = d ? d.time() : 0, g, _, v;
    if (d && d.seek(0), isNaN(e) || (e = +e), Gr(e)) d && (e = I.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)), a && zs(a, i, r, true);
    else {
      Ue(t) && (t = t(l));
      var S = (e || "0").split(" "), y, T, E, x;
      v = lt(t, l) || ie, y = li(v) || {}, (!y || !y.left && !y.top) && Dt(v).display === "none" && (x = v.style.display, v.style.display = "block", y = li(v), x ? v.style.display = x : v.style.removeProperty("display")), T = Ls(S[0], y[r.d]), E = Ls(S[1] || "0", i), e = y[r.p] - u[r.p] - f + T + n - E, a && zs(a, E, r, i - E < 20 || a._isStart && E > 20), i -= i - E;
    }
    if (p && (l[p] = e || -1e-3, e < 0 && (e = 0)), o) {
      var M = e + i, C = o._isStart;
      g = "scroll" + r.d2, zs(o, M, r, C && M > 20 || !C && (c ? Math.max(ie[g], St[g]) : o.parentNode[g]) <= M + 1), c && (u = li(a), c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ce));
    }
    return d && v && (g = li(v), d.seek(h), _ = li(v), d._caScrollDist = g[r.p] - _[r.p], e = e / d._caScrollDist * h), d && d.seek(m), d ? e : Math.round(e);
  };
  var Lf = /(webkit|moz|length|cssText|inset)/i;
  var na = function(e, t, i, r) {
    if (e.parentNode !== t) {
      var n = e.style, o, a;
      if (t === ie) {
        e._stOrig = n.cssText, a = Dt(e);
        for (o in a) !+o && !Lf.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
        n.top = i, n.left = r;
      } else n.cssText = e._stOrig;
      I.core.getCache(e).uncache = 1, t.appendChild(e);
    }
  };
  var Yl = function(e, t, i) {
    var r = t, n = r;
    return function(o) {
      var a = Math.round(e());
      return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, i && i()), n = r, r = Math.round(o), r;
    };
  };
  var Es = function(e, t, i) {
    var r = {};
    r[t.p] = "+=" + i, I.set(e, r);
  };
  var oa = function(e, t) {
    var i = Li(e, t), r = "_scroll" + t.p2, n = function o(a, l, u, f, c) {
      var h = o.tween, d = l.onComplete, p = {};
      u = u || i();
      var m = Yl(i, u, function() {
        h.kill(), o.tween = 0;
      });
      return c = f && c || 0, f = f || a - u, h && h.kill(), l[r] = a, l.inherit = false, l.modifiers = p, p[r] = function() {
        return m(u + f * h.ratio + c * h.ratio * h.ratio);
      }, l.onUpdate = function() {
        U.cache++, o.tween && ci();
      }, l.onComplete = function() {
        o.tween = 0, d && d.call(h);
      }, h = o.tween = I.to(e, l), h;
    };
    return e[r] = i, i.wheelHandler = function() {
      return n.tween && n.tween.kill() && (n.tween = 0);
    }, Le(e, "wheel", i.wheelHandler), K.isTouch && Le(e, "touchmove", i.wheelHandler), n;
  };
  var K = (function() {
    function s18(t, i) {
      cr || s18.register(I) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), qn(this), this.init(t, i);
    }
    var e = s18.prototype;
    return e.init = function(i, r) {
      if (this.progress = this.start = 0, this.vars && this.kill(true, true), !Br) {
        this.update = this.refresh = this.kill = Ut;
        return;
      }
      i = Jo(vt(i) || Gr(i) || i.nodeType ? { trigger: i } : i, Ts);
      var n = i, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, f = n.onRefresh, c = n.scrub, h = n.trigger, d = n.pin, p = n.pinSpacing, m = n.invalidateOnRefresh, g = n.anticipatePin, _ = n.onScrubComplete, v = n.onSnapComplete, S = n.once, y = n.snap, T = n.pinReparent, E = n.pinSpacer, x = n.containerAnimation, M = n.fastScrollEnd, C = n.preventOverlaps, b = i.horizontal || i.containerAnimation && i.horizontal !== false ? st : Oe, k = !c && c !== 0, O = lt(i.scroller || q), R = I.core.getCache(O), V = tr(O), G = ("pinType" in i ? i.pinType : ki(O, "pinType") || V && "fixed") === "fixed", A = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], z = k && i.toggleActions.split(" "), D = "markers" in i ? i.markers : Ts.markers, Y = V ? 0 : parseFloat(Dt(O)["border" + b.p2 + Cr]) || 0, w = this, J = i.onRefreshInit && function() {
        return i.onRefreshInit(w);
      }, Se = xf(O, V, b), Rt = bf(O, V), de = 0, Ie = 0, Ve = 0, Te = Li(O, b), Ke, Ge, pi, Qe, ot, ee, ge, at, pt, P, mt, ti, mi, he, ii, gi, Ii, ke, _i, _e, Ft, Ct, ri, Or, xe, cs, si, nr, or, vi, Ri, j, Fi, Nt, Bt, Vt, Ni, ar, ni;
      if (w._startClamp = w._endClamp = false, w._dir = b, g *= 45, w.scroller = O, w.scroll = x ? x.time.bind(x) : Te, Qe = Te(), w.vars = i, r = r || i.animation, "refreshPriority" in i && (Ml = 1, i.refreshPriority === -9999 && (es = w)), R.tweenScroll = R.tweenScroll || { top: oa(O, Oe), left: oa(O, st) }, w.tweenTo = Ke = R.tweenScroll[b.p], w.scrubDuration = function(L) {
        Fi = Gr(L) && L, Fi ? j ? j.duration(L) : j = I.to(r, { ease: "expo", totalProgress: "+=0", inherit: false, duration: Fi, paused: true, onComplete: function() {
          return _ && _(w);
        } }) : (j && j.progress(1).kill(), j = 0);
      }, r && (r.vars.lazy = false, r._initted && !w.isReverted || r.vars.immediateRender !== false && i.immediateRender !== false && r.duration() && r.render(0, true, true), w.animation = r.pause(), r.scrollTrigger = w, w.scrubDuration(c), vi = 0, l || (l = r.vars.id)), y && ((!Hi(y) || y.push) && (y = { snapTo: y }), "scrollBehavior" in ie.style && I.set(V ? [ie, St] : O, { scrollBehavior: "auto" }), U.forEach(function(L) {
        return Ue(L) && L.target === (V ? oe.scrollingElement || St : O) && (L.smooth = false);
      }), pi = Ue(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? Pf(r) : y.snapTo === "labelsDirectional" ? Mf(r) : y.directional !== false ? function(L, W) {
        return Eo(y.snapTo)(L, $e() - Ie < 500 ? 0 : W.direction);
      } : I.utils.snap(y.snapTo), Nt = y.duration || { min: 0.1, max: 2 }, Nt = Hi(Nt) ? jr(Nt.min, Nt.max) : jr(Nt, Nt), Bt = I.delayedCall(y.delay || Fi / 2 || 0.1, function() {
        var L = Te(), W = $e() - Ie < 500, N = Ke.tween;
        if ((W || Math.abs(w.getVelocity()) < 10) && !N && !rn && de !== L) {
          var H = (L - ee) / he, De = r && !k ? r.totalProgress() : H, Q = W ? 0 : (De - Ri) / ($e() - Nr) * 1e3 || 0, ve = I.utils.clamp(-H, 1 - H, ur(Q / 2) * Q / 0.185), Ye = H + (y.inertia === false ? 0 : ve), pe, ae, re = y, Gt = re.onStart, ue = re.onInterrupt, gt = re.onComplete;
          if (pe = pi(Ye, w), Gr(pe) || (pe = Ye), ae = Math.max(0, Math.round(ee + pe * he)), L <= ge && L >= ee && ae !== L) {
            if (N && !N._initted && N.data <= ur(ae - L)) return;
            y.inertia === false && (ve = pe - H), Ke(ae, { duration: Nt(ur(Math.max(ur(Ye - De), ur(pe - De)) * 0.185 / Q / 0.05 || 0)), ease: y.ease || "power3", data: ur(ae - L), onInterrupt: function() {
              return Bt.restart(true) && ue && ue(w);
            }, onComplete: function() {
              w.update(), de = Te(), r && !k && (j ? j.resetTo("totalProgress", pe, r._tTime / r._tDur) : r.progress(pe)), vi = Ri = r && !k ? r.totalProgress() : w.progress, v && v(w), gt && gt(w);
            } }, L, ve * he, ae - L - ve * he), Gt && Gt(w, Ke.tween);
          }
        } else w.isActive && de !== L && Bt.restart(true);
      }).pause()), l && (jn[l] = w), h = w.trigger = lt(h || d !== true && d), ni = h && h._gsap && h._gsap.stRevert, ni && (ni = ni(w)), d = d === true ? h : lt(d), vt(a) && (a = { targets: h, className: a }), d && (p === false || p === kt || (p = !p && d.parentNode && d.parentNode.style && Dt(d.parentNode).display === "flex" ? false : be), w.pin = d, Ge = I.core.getCache(d), Ge.spacer ? ii = Ge.pinState : (E && (E = lt(E), E && !E.nodeType && (E = E.current || E.nativeElement), Ge.spacerIsNative = !!E, E && (Ge.spacerState = bs(E))), Ge.spacer = ke = E || oe.createElement("div"), ke.classList.add("pin-spacer"), l && ke.classList.add("pin-spacer-" + l), Ge.pinState = ii = bs(d)), i.force3D !== false && I.set(d, { force3D: true }), w.spacer = ke = Ge.spacer, or = Dt(d), Or = or[p + b.os2], _e = I.getProperty(d), Ft = I.quickSetter(d, b.a, Ce), vn(d, ke, or), Ii = bs(d)), D) {
        ti = Hi(D) ? Jo(D, ea) : ea, P = xs("scroller-start", l, O, b, ti, 0), mt = xs("scroller-end", l, O, b, ti, 0, P), _i = P["offset" + b.op.d2];
        var kr = lt(ki(O, "content") || O);
        at = this.markerStart = xs("start", l, kr, b, ti, _i, 0, x), pt = this.markerEnd = xs("end", l, kr, b, ti, _i, 0, x), x && (ar = I.quickSetter([at, pt], b.a, Ce)), !G && !(Zt.length && ki(O, "fixedMarkers") === true) && (Ef(V ? ie : O), I.set([P, mt], { force3D: true }), cs = I.quickSetter(P, b.a, Ce), nr = I.quickSetter(mt, b.a, Ce));
      }
      if (x) {
        var X = x.vars.onUpdate, B = x.vars.onUpdateParams;
        x.eventCallback("onUpdate", function() {
          w.update(0, 0, 1), X && X.apply(x, B || []);
        });
      }
      if (w.previous = function() {
        return $[$.indexOf(w) - 1];
      }, w.next = function() {
        return $[$.indexOf(w) + 1];
      }, w.revert = function(L, W) {
        if (!W) return w.kill(true);
        var N = L !== false || !w.enabled, H = Xe;
        N !== w.isReverted && (N && (Vt = Math.max(Te(), w.scroll.rec || 0), Ve = w.progress, Ni = r && r.progress()), at && [at, pt, P, mt].forEach(function(De) {
          return De.style.display = N ? "none" : "block";
        }), N && (Xe = w, w.update(N)), d && (!T || !w.isActive) && (N ? kf(d, ke, ii) : vn(d, ke, Dt(d), xe)), N || w.update(N), Xe = H, w.isReverted = N);
      }, w.refresh = function(L, W, N, H) {
        if (!((Xe || !w.enabled) && !W)) {
          if (d && L && It) {
            Le(s18, "scrollEnd", Nl);
            return;
          }
          !it && J && J(w), Xe = w, Ke.tween && !N && (Ke.tween.kill(), Ke.tween = 0), j && j.pause(), m && r && (r.revert({ kill: false }).invalidate(), r.getChildren && r.getChildren(true, true, false).forEach(function(wi) {
            return wi.vars.immediateRender && wi.render(0, true, true);
          })), w.isReverted || w.revert(true, true), w._subPinOffset = false;
          var De = Se(), Q = Rt(), ve = x ? x.duration() : Qt(O, b), Ye = he <= 0.01 || !he, pe = 0, ae = H || 0, re = Hi(N) ? N.end : i.end, Gt = i.endTrigger || h, ue = Hi(N) ? N.start : i.start || (i.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), gt = w.pinnedContainer = i.pinnedContainer && lt(i.pinnedContainer, w), Ht = h && Math.max(0, $.indexOf(w)) || 0, Re = Ht, Fe, We, Bi, ds, He, Me, Xt, sn, Co, Dr, $t, Ar, hs;
          for (D && Hi(N) && (Ar = I.getProperty(P, b.p), hs = I.getProperty(mt, b.p)); Re-- > 0; ) Me = $[Re], Me.end || Me.refresh(0, 1) || (Xe = w), Xt = Me.pin, Xt && (Xt === h || Xt === d || Xt === gt) && !Me.isReverted && (Dr || (Dr = []), Dr.unshift(Me), Me.revert(true, true)), Me !== $[Re] && (Ht--, Re--);
          for (Ue(ue) && (ue = ue(w)), ue = jo(ue, "start", w), ee = sa(ue, h, De, b, Te(), at, P, w, Q, Y, G, ve, x, w._startClamp && "_startClamp") || (d ? -1e-3 : 0), Ue(re) && (re = re(w)), vt(re) && !re.indexOf("+=") && (~re.indexOf(" ") ? re = (vt(ue) ? ue.split(" ")[0] : "") + re : (pe = Ls(re.substr(2), De), re = vt(ue) ? ue : (x ? I.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, ee) : ee) + pe, Gt = h)), re = jo(re, "end", w), ge = Math.max(ee, sa(re || (Gt ? "100% 0" : ve), Gt, De, b, Te() + pe, pt, mt, w, Q, Y, G, ve, x, w._endClamp && "_endClamp")) || -1e-3, pe = 0, Re = Ht; Re--; ) Me = $[Re], Xt = Me.pin, Xt && Me.start - Me._pinPush <= ee && !x && Me.end > 0 && (Fe = Me.end - (w._startClamp ? Math.max(0, Me.start) : Me.start), (Xt === h && Me.start - Me._pinPush < ee || Xt === gt) && isNaN(ue) && (pe += Fe * (1 - Me.progress)), Xt === d && (ae += Fe));
          if (ee += pe, ge += pe, w._startClamp && (w._startClamp += pe), w._endClamp && !it && (w._endClamp = ge || -1e-3, ge = Math.min(ge, Qt(O, b))), he = ge - ee || (ee -= 0.01) && 1e-3, Ye && (Ve = I.utils.clamp(0, 1, I.utils.normalize(ee, ge, Vt))), w._pinPush = ae, at && pe && (Fe = {}, Fe[b.a] = "+=" + pe, gt && (Fe[b.p] = "-=" + Te()), I.set([at, pt], Fe)), d && !(Un && w.end >= Qt(O, b))) Fe = Dt(d), ds = b === Oe, Bi = Te(), Ct = parseFloat(_e(b.a)) + ae, !ve && ge > 1 && ($t = (V ? oe.scrollingElement || St : O).style, $t = { style: $t, value: $t["overflow" + b.a.toUpperCase()] }, V && Dt(ie)["overflow" + b.a.toUpperCase()] !== "scroll" && ($t.style["overflow" + b.a.toUpperCase()] = "scroll")), vn(d, ke, Fe), Ii = bs(d), We = li(d, true), sn = G && Li(O, ds ? st : Oe)(), p ? (xe = [p + b.os2, he + ae + Ce], xe.t = ke, Re = p === be ? js(d, b) + he + ae : 0, Re && (xe.push(b.d, Re + Ce), ke.style.flexBasis !== "auto" && (ke.style.flexBasis = Re + Ce)), Sr(xe), gt && $.forEach(function(wi) {
            wi.pin === gt && wi.vars.pinSpacing !== false && (wi._subPinOffset = true);
          }), G && Te(Vt)) : (Re = js(d, b), Re && ke.style.flexBasis !== "auto" && (ke.style.flexBasis = Re + Ce)), G && (He = { top: We.top + (ds ? Bi - ee : sn) + Ce, left: We.left + (ds ? sn : Bi - ee) + Ce, boxSizing: "border-box", position: "fixed" }, He[Qi] = He["max" + Cr] = Math.ceil(We.width) + Ce, He[Zi] = He["max" + bo] = Math.ceil(We.height) + Ce, He[kt] = He[kt + Zr] = He[kt + Kr] = He[kt + Jr] = He[kt + Qr] = "0", He[be] = Fe[be], He[be + Zr] = Fe[be + Zr], He[be + Kr] = Fe[be + Kr], He[be + Jr] = Fe[be + Jr], He[be + Qr] = Fe[be + Qr], gi = Af(ii, He, T), it && Te(0)), r ? (Co = r._initted, hn(1), r.render(r.duration(), true, true), ri = _e(b.a) - Ct + he + ae, si = Math.abs(he - ri) > 1, G && si && gi.splice(gi.length - 2, 2), r.render(0, true, true), Co || r.invalidate(true), r.parent || r.totalTime(r.totalTime()), hn(0)) : ri = he, $t && ($t.value ? $t.style["overflow" + b.a.toUpperCase()] = $t.value : $t.style.removeProperty("overflow-" + b.a));
          else if (h && Te() && !x) for (We = h.parentNode; We && We !== ie; ) We._pinOffset && (ee -= We._pinOffset, ge -= We._pinOffset), We = We.parentNode;
          Dr && Dr.forEach(function(wi) {
            return wi.revert(false, true);
          }), w.start = ee, w.end = ge, Qe = ot = it ? Vt : Te(), !x && !it && (Qe < Vt && Te(Vt), w.scroll.rec = 0), w.revert(false, true), Ie = $e(), Bt && (de = -1, Bt.restart(true)), Xe = 0, r && k && (r._initted || Ni) && r.progress() !== Ni && r.progress(Ni || 0, true).render(r.time(), true, true), (Ye || Ve !== w.progress || x || m || r && !r._initted) && (r && !k && (r._initted || Ve || r.vars.immediateRender !== false) && r.totalProgress(x && ee < -1e-3 && !Ve ? I.utils.normalize(ee, ge, 0) : Ve, true), w.progress = Ye || (Qe - ee) / he === Ve ? 0 : Ve), d && p && (ke._pinOffset = Math.round(w.progress * ri)), j && j.invalidate(), isNaN(Ar) || (Ar -= I.getProperty(P, b.p), hs -= I.getProperty(mt, b.p), Es(P, b, Ar), Es(at, b, Ar - (H || 0)), Es(mt, b, hs), Es(pt, b, hs - (H || 0))), Ye && !it && w.update(), f && !it && !mi && (mi = true, f(w), mi = false);
        }
      }, w.getVelocity = function() {
        return (Te() - ot) / ($e() - Nr) * 1e3 || 0;
      }, w.endAnimation = function() {
        Ir(w.callbackAnimation), r && (j ? j.progress(1) : r.paused() ? k || Ir(r, w.direction < 0, 1) : Ir(r, r.reversed()));
      }, w.labelToScroll = function(L) {
        return r && r.labels && (ee || w.refresh() || ee) + r.labels[L] / r.duration() * he || 0;
      }, w.getTrailing = function(L) {
        var W = $.indexOf(w), N = w.direction > 0 ? $.slice(0, W).reverse() : $.slice(W + 1);
        return (vt(L) ? N.filter(function(H) {
          return H.vars.preventOverlaps === L;
        }) : N).filter(function(H) {
          return w.direction > 0 ? H.end <= ee : H.start >= ge;
        });
      }, w.update = function(L, W, N) {
        if (!(x && !N && !L)) {
          var H = it === true ? Vt : w.scroll(), De = L ? 0 : (H - ee) / he, Q = De < 0 ? 0 : De > 1 ? 1 : De || 0, ve = w.progress, Ye, pe, ae, re, Gt, ue, gt, Ht;
          if (W && (ot = Qe, Qe = x ? Te() : H, y && (Ri = vi, vi = r && !k ? r.totalProgress() : Q)), g && d && !Xe && !vs && It && (!Q && ee < H + (H - ot) / ($e() - Nr) * g ? Q = 1e-4 : Q === 1 && ge > H + (H - ot) / ($e() - Nr) * g && (Q = 0.9999)), Q !== ve && w.enabled) {
            if (Ye = w.isActive = !!Q && Q < 1, pe = !!ve && ve < 1, ue = Ye !== pe, Gt = ue || !!Q != !!ve, w.direction = Q > ve ? 1 : -1, w.progress = Q, Gt && !Xe && (ae = Q && !ve ? 0 : Q === 1 ? 1 : ve === 1 ? 2 : 3, k && (re = !ue && z[ae + 1] !== "none" && z[ae + 1] || z[ae], Ht = r && (re === "complete" || re === "reset" || re in r))), C && (ue || Ht) && (Ht || c || !r) && (Ue(C) ? C(w) : w.getTrailing(C).forEach(function(Bi) {
              return Bi.endAnimation();
            })), k || (j && !Xe && !vs ? (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", Q, r._tTime / r._tDur) : (j.vars.totalProgress = Q, j.invalidate().restart())) : r && r.totalProgress(Q, !!(Xe && (Ie || L)))), d) {
              if (L && p && (ke.style[p + b.os2] = Or), !G) Ft(Vr(Ct + ri * Q));
              else if (Gt) {
                if (gt = !L && Q > ve && ge + 1 > H && H + 1 >= Qt(O, b), T) if (!L && (Ye || gt)) {
                  var Re = li(d, true), Fe = H - ee;
                  na(d, ie, Re.top + (b === Oe ? Fe : 0) + Ce, Re.left + (b === Oe ? 0 : Fe) + Ce);
                } else na(d, ke);
                Sr(Ye || gt ? gi : Ii), si && Q < 1 && Ye || Ft(Ct + (Q === 1 && !gt ? ri : 0));
              }
            }
            y && !Ke.tween && !Xe && !vs && Bt.restart(true), a && (ue || S && Q && (Q < 1 || !pn)) && ls(a.targets).forEach(function(Bi) {
              return Bi.classList[Ye || S ? "add" : "remove"](a.className);
            }), o && !k && !L && o(w), Gt && !Xe ? (k && (Ht && (re === "complete" ? r.pause().totalProgress(1) : re === "reset" ? r.restart(true).pause() : re === "restart" ? r.restart(true) : r[re]()), o && o(w)), (ue || !pn) && (u && ue && gn(w, u), A[ae] && gn(w, A[ae]), S && (Q === 1 ? w.kill(false, 1) : A[ae] = 0), ue || (ae = Q === 1 ? 1 : 3, A[ae] && gn(w, A[ae]))), M && !Ye && Math.abs(w.getVelocity()) > (Gr(M) ? M : 2500) && (Ir(w.callbackAnimation), j ? j.progress(1) : Ir(r, re === "reverse" ? 1 : !Q, 1))) : k && o && !Xe && o(w);
          }
          if (nr) {
            var We = x ? H / x.duration() * (x._caScrollDist || 0) : H;
            cs(We + (P._isFlipped ? 1 : 0)), nr(We);
          }
          ar && ar(-H / x.duration() * (x._caScrollDist || 0));
        }
      }, w.enable = function(L, W) {
        w.enabled || (w.enabled = true, Le(O, "resize", Yr), V || Le(O, "scroll", fr), J && Le(s18, "refreshInit", J), L !== false && (w.progress = Ve = 0, Qe = ot = de = Te()), W !== false && w.refresh());
      }, w.getTween = function(L) {
        return L && Ke ? Ke.tween : j;
      }, w.setPositions = function(L, W, N, H) {
        if (x) {
          var De = x.scrollTrigger, Q = x.duration(), ve = De.end - De.start;
          L = De.start + ve * L / Q, W = De.start + ve * W / Q;
        }
        w.refresh(false, false, { start: Ko(L, N && !!w._startClamp), end: Ko(W, N && !!w._endClamp) }, H), w.update();
      }, w.adjustPinSpacing = function(L) {
        if (xe && L) {
          var W = xe.indexOf(b.d) + 1;
          xe[W] = parseFloat(xe[W]) + L + Ce, xe[1] = parseFloat(xe[1]) + L + Ce, Sr(xe);
        }
      }, w.disable = function(L, W) {
        if (w.enabled && (L !== false && w.revert(true, true), w.enabled = w.isActive = false, W || j && j.pause(), Vt = 0, Ge && (Ge.uncache = 1), J && Ae(s18, "refreshInit", J), Bt && (Bt.pause(), Ke.tween && Ke.tween.kill() && (Ke.tween = 0)), !V)) {
          for (var N = $.length; N--; ) if ($[N].scroller === O && $[N] !== w) return;
          Ae(O, "resize", Yr), V || Ae(O, "scroll", fr);
        }
      }, w.kill = function(L, W) {
        w.disable(L, W), j && !W && j.kill(), l && delete jn[l];
        var N = $.indexOf(w);
        N >= 0 && $.splice(N, 1), N === tt && Is > 0 && tt--, N = 0, $.forEach(function(H) {
          return H.scroller === w.scroller && (N = 1);
        }), N || it || (w.scroll.rec = 0), r && (r.scrollTrigger = null, L && r.revert({ kill: false }), W || r.kill()), at && [at, pt, P, mt].forEach(function(H) {
          return H.parentNode && H.parentNode.removeChild(H);
        }), es === w && (es = 0), d && (Ge && (Ge.uncache = 1), N = 0, $.forEach(function(H) {
          return H.pin === d && N++;
        }), N || (Ge.spacer = 0)), i.onKill && i.onKill(w);
      }, $.push(w), w.enable(false, false), ni && ni(w), r && r.add && !he) {
        var te = w.update;
        w.update = function() {
          w.update = te, U.cache++, ee || ge || w.refresh();
        }, I.delayedCall(0.01, w.update), he = 0.01, ee = ge = 0;
      } else w.refresh();
      d && Of();
    }, s18.register = function(i) {
      return cr || (I = i || Al(), Dl() && window.document && s18.enable(), cr = Br), cr;
    }, s18.defaults = function(i) {
      if (i) for (var r in i) Ts[r] = i[r];
      return Ts;
    }, s18.disable = function(i, r) {
      Br = 0, $.forEach(function(o) {
        return o[r ? "kill" : "disable"](i);
      }), Ae(q, "wheel", fr), Ae(oe, "scroll", fr), clearInterval(_s), Ae(oe, "touchcancel", Ut), Ae(ie, "touchstart", Ut), ys(Ae, oe, "pointerdown,touchstart,mousedown", Qo), ys(Ae, oe, "pointerup,touchend,mouseup", Zo), qs.kill(), ws(Ae);
      for (var n = 0; n < U.length; n += 3) Ss(Ae, U[n], U[n + 1]), Ss(Ae, U[n], U[n + 2]);
    }, s18.enable = function() {
      if (q = window, oe = document, St = oe.documentElement, ie = oe.body, I && (ls = I.utils.toArray, jr = I.utils.clamp, qn = I.core.context || Ut, hn = I.core.suppressOverwrites || Ut, yo = q.history.scrollRestoration || "auto", Kn = q.pageYOffset || 0, I.core.globals("ScrollTrigger", s18), ie)) {
        Br = 1, yr = document.createElement("div"), yr.style.height = "100vh", yr.style.position = "absolute", Gl(), Tf(), ye.register(I), s18.isTouch = ye.isTouch, Si = ye.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), $n = ye.isTouch === 1, Le(q, "wheel", fr), wo = [q, oe, St, ie], I.matchMedia ? (s18.matchMedia = function(u) {
          var f = I.matchMedia(), c;
          for (c in u) f.add(c, u[c]);
          return f;
        }, I.addEventListener("matchMediaInit", function() {
          return Po();
        }), I.addEventListener("matchMediaRevert", function() {
          return Bl();
        }), I.addEventListener("matchMedia", function() {
          $i(0, 1), rr("matchMedia");
        }), I.matchMedia().add("(orientation: portrait)", function() {
          return _n(), _n;
        })) : console.warn("Requires GSAP 3.11.0 or later"), _n(), Le(oe, "scroll", fr);
        var i = ie.hasAttribute("style"), r = ie.style, n = r.borderTopStyle, o = I.core.Animation.prototype, a, l;
        for (o.revert || Object.defineProperty(o, "revert", { value: function() {
          return this.time(-0.01, true);
        } }), r.borderTopStyle = "solid", a = li(ie), Oe.m = Math.round(a.top + Oe.sc()) || 0, st.m = Math.round(a.left + st.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), i || (ie.setAttribute("style", ""), ie.removeAttribute("style")), _s = setInterval(ta, 250), I.delayedCall(0.5, function() {
          return vs = 0;
        }), Le(oe, "touchcancel", Ut), Le(ie, "touchstart", Ut), ys(Le, oe, "pointerdown,touchstart,mousedown", Qo), ys(Le, oe, "pointerup,touchend,mouseup", Zo), Xn = I.utils.checkPrefix("transform"), Rs.push(Xn), cr = $e(), qs = I.delayedCall(0.2, $i).pause(), dr = [oe, "visibilitychange", function() {
          var u = q.innerWidth, f = q.innerHeight;
          oe.hidden ? (qo = u, Uo = f) : (qo !== u || Uo !== f) && Yr();
        }, oe, "DOMContentLoaded", $i, q, "load", $i, q, "resize", Yr], ws(Le), $.forEach(function(u) {
          return u.enable(0, 1);
        }), l = 0; l < U.length; l += 3) Ss(Ae, U[l], U[l + 1]), Ss(Ae, U[l], U[l + 2]);
      }
    }, s18.config = function(i) {
      "limitCallbacks" in i && (pn = !!i.limitCallbacks);
      var r = i.syncInterval;
      r && clearInterval(_s) || (_s = r) && setInterval(ta, r), "ignoreMobileResize" in i && ($n = s18.isTouch === 1 && i.ignoreMobileResize), "autoRefreshEvents" in i && (ws(Ae) || ws(Le, i.autoRefreshEvents || "none"), Cl = (i.autoRefreshEvents + "").indexOf("resize") === -1);
    }, s18.scrollerProxy = function(i, r) {
      var n = lt(i), o = U.indexOf(n), a = tr(n);
      ~o && U.splice(o, a ? 6 : 2), r && (a ? Zt.unshift(q, r, ie, r, St, r) : Zt.unshift(n, r));
    }, s18.clearMatchMedia = function(i) {
      $.forEach(function(r) {
        return r._ctx && r._ctx.query === i && r._ctx.kill(true, true);
      });
    }, s18.isInViewport = function(i, r, n) {
      var o = (vt(i) ? lt(i) : i).getBoundingClientRect(), a = o[n ? Qi : Zi] * r || 0;
      return n ? o.right - a > 0 && o.left + a < q.innerWidth : o.bottom - a > 0 && o.top + a < q.innerHeight;
    }, s18.positionInViewport = function(i, r, n) {
      vt(i) && (i = lt(i));
      var o = i.getBoundingClientRect(), a = o[n ? Qi : Zi], l = r == null ? a / 2 : r in Ks ? Ks[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
      return n ? (o.left + l) / q.innerWidth : (o.top + l) / q.innerHeight;
    }, s18.killAll = function(i) {
      if ($.slice(0).forEach(function(n) {
        return n.vars.id !== "ScrollSmoother" && n.kill();
      }), i !== true) {
        var r = ir.killAll || [];
        ir = {}, r.forEach(function(n) {
          return n();
        });
      }
    }, s18;
  })();
  K.version = "3.13.0";
  K.saveStyles = function(s18) {
    return s18 ? ls(s18).forEach(function(e) {
      if (e && e.style) {
        var t = _t.indexOf(e);
        t >= 0 && _t.splice(t, 5), _t.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), I.core.getCache(e), qn());
      }
    }) : _t;
  };
  K.revert = function(s18, e) {
    return Po(!s18, e);
  };
  K.create = function(s18, e) {
    return new K(s18, e);
  };
  K.refresh = function(s18) {
    return s18 ? Yr(true) : (cr || K.register()) && $i(true);
  };
  K.update = function(s18) {
    return ++U.cache && ci(s18 === true ? 2 : 0);
  };
  K.clearScrollMemory = Vl;
  K.maxScroll = function(s18, e) {
    return Qt(s18, e ? st : Oe);
  };
  K.getScrollFunc = function(s18, e) {
    return Li(lt(s18), e ? st : Oe);
  };
  K.getById = function(s18) {
    return jn[s18];
  };
  K.getAll = function() {
    return $.filter(function(s18) {
      return s18.vars.id !== "ScrollSmoother";
    });
  };
  K.isScrolling = function() {
    return !!It;
  };
  K.snapDirectional = Eo;
  K.addEventListener = function(s18, e) {
    var t = ir[s18] || (ir[s18] = []);
    ~t.indexOf(e) || t.push(e);
  };
  K.removeEventListener = function(s18, e) {
    var t = ir[s18], i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1);
  };
  K.batch = function(s18, e) {
    var t = [], i = {}, r = e.interval || 0.016, n = e.batchMax || 1e9, o = function(u, f) {
      var c = [], h = [], d = I.delayedCall(r, function() {
        f(c, h), c = [], h = [];
      }).pause();
      return function(p) {
        c.length || d.restart(true), c.push(p.trigger), h.push(p), n <= c.length && d.progress(1);
      };
    }, a;
    for (a in e) i[a] = a.substr(0, 2) === "on" && Ue(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return Ue(n) && (n = n(), Le(K, "refresh", function() {
      return n = e.batchMax();
    })), ls(s18).forEach(function(l) {
      var u = {};
      for (a in i) u[a] = i[a];
      u.trigger = l, t.push(K.create(u));
    }), t;
  };
  var aa = function(e, t, i, r) {
    return t > r ? e(r) : t < 0 && e(0), i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1;
  };
  var wn = function s17(e, t) {
    t === true ? e.style.removeProperty("touch-action") : e.style.touchAction = t === true ? "auto" : t ? "pan-" + t + (ye.isTouch ? " pinch-zoom" : "") : "none", e === St && s17(ie, t);
  };
  var Ps = { auto: 1, scroll: 1 };
  var zf = function(e) {
    var t = e.event, i = e.target, r = e.axis, n = (t.changedTouches ? t.changedTouches[0] : t).target, o = n._gsap || I.core.getCache(n), a = $e(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (; n && n !== ie && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Ps[(l = Dt(n)).overflowY] || Ps[l.overflowX])); ) n = n.parentNode;
      o._isScroll = n && n !== i && !tr(n) && (Ps[(l = Dt(n)).overflowY] || Ps[l.overflowX]), o._isScrollT = a;
    }
    (o._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = true);
  };
  var Wl = function(e, t, i, r) {
    return ye.create({ target: e, capture: true, debounce: false, lockAxis: true, type: t, onWheel: r = r && zf, onPress: r, onDrag: r, onScroll: r, onEnable: function() {
      return i && Le(oe, ye.eventTypes[0], ua, false, true);
    }, onDisable: function() {
      return Ae(oe, ye.eventTypes[0], ua, true);
    } });
  };
  var If = /(input|label|select|textarea)/i;
  var la;
  var ua = function(e) {
    var t = If.test(e.target.tagName);
    (t || la) && (e._gsapAllow = true, la = t);
  };
  var Rf = function(e) {
    Hi(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = true, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var t = e, i = t.normalizeScrollX, r = t.momentum, n = t.allowNestedScroll, o = t.onRelease, a, l, u = lt(e.target) || St, f = I.core.globals().ScrollSmoother, c = f && f.get(), h = Si && (e.content && lt(e.content) || c && e.content !== false && !c.smooth() && c.content()), d = Li(u, Oe), p = Li(u, st), m = 1, g = (ye.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, _ = 0, v = Ue(r) ? function() {
      return r(a);
    } : function() {
      return r || 2.8;
    }, S, y, T = Wl(u, e.type, true, n), E = function() {
      return y = false;
    }, x = Ut, M = Ut, C = function() {
      l = Qt(u, Oe), M = jr(Si ? 1 : 0, l), i && (x = jr(0, Qt(u, st))), S = Ji;
    }, b = function() {
      h._gsap.y = Vr(parseFloat(h._gsap.y) + d.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0;
    }, k = function() {
      if (y) {
        requestAnimationFrame(E);
        var D = Vr(a.deltaY / 2), Y = M(d.v - D);
        if (h && Y !== d.v + d.offset) {
          d.offset = Y - d.v;
          var w = Vr((parseFloat(h && h._gsap.y) || 0) - d.offset);
          h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + w + ", 0, 1)", h._gsap.y = w + "px", d.cacheID = U.cache, ci();
        }
        return true;
      }
      d.offset && b(), y = true;
    }, O, R, V, G, A = function() {
      C(), O.isActive() && O.vars.scrollY > l && (d() > l ? O.progress(1) && d(l) : O.resetTo("scrollY", l));
    };
    return h && I.set(h, { y: "+=0" }), e.ignoreCheck = function(z) {
      return Si && z.type === "touchmove" && k() || m > 1.05 && z.type !== "touchstart" || a.isGesturing || z.touches && z.touches.length > 1;
    }, e.onPress = function() {
      y = false;
      var z = m;
      m = Vr((q.visualViewport && q.visualViewport.scale || 1) / g), O.pause(), z !== m && wn(u, m > 1.01 ? true : i ? false : "x"), R = p(), V = d(), C(), S = Ji;
    }, e.onRelease = e.onGestureStart = function(z, D) {
      if (d.offset && b(), !D) G.restart(true);
      else {
        U.cache++;
        var Y = v(), w, J;
        i && (w = p(), J = w + Y * 0.05 * -z.velocityX / 0.227, Y *= aa(p, w, J, Qt(u, st)), O.vars.scrollX = x(J)), w = d(), J = w + Y * 0.05 * -z.velocityY / 0.227, Y *= aa(d, w, J, Qt(u, Oe)), O.vars.scrollY = M(J), O.invalidate().duration(Y).play(0.01), (Si && O.vars.scrollY >= l || w >= l - 1) && I.to({}, { onUpdate: A, duration: Y });
      }
      o && o(z);
    }, e.onWheel = function() {
      O._ts && O.pause(), $e() - _ > 1e3 && (S = 0, _ = $e());
    }, e.onChange = function(z, D, Y, w, J) {
      if (Ji !== S && C(), D && i && p(x(w[2] === D ? R + (z.startX - z.x) : p() + D - w[1])), Y) {
        d.offset && b();
        var Se = J[2] === Y, Rt = Se ? V + z.startY - z.y : d() + Y - J[1], de = M(Rt);
        Se && Rt !== de && (V += de - Rt), d(de);
      }
      (Y || D) && ci();
    }, e.onEnable = function() {
      wn(u, i ? false : "x"), K.addEventListener("refresh", A), Le(q, "resize", A), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = p.smooth = false), T.enable();
    }, e.onDisable = function() {
      wn(u, true), Ae(q, "resize", A), K.removeEventListener("refresh", A), T.kill();
    }, e.lockAxis = e.lockAxis !== false, a = new ye(e), a.iOS = Si, Si && !d() && d(1), Si && I.ticker.add(Ut), G = a._dc, O = I.to(a, { ease: "power4", paused: true, inherit: false, scrollX: i ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: { scrollY: Yl(d, d(), function() {
      return O.pause();
    }) }, onUpdate: ci, onComplete: G.vars.onComplete }), a;
  };
  K.sort = function(s18) {
    if (Ue(s18)) return $.sort(s18);
    var e = q.pageYOffset || 0;
    return K.getAll().forEach(function(t) {
      return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + q.innerHeight;
    }), $.sort(s18 || function(t, i) {
      return (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((i.vars.containerAnimation ? 1e6 : i._sortY) + (i.vars.refreshPriority || 0) * -1e6);
    });
  };
  K.observe = function(s18) {
    return new ye(s18);
  };
  K.normalizeScroll = function(s18) {
    if (typeof s18 > "u") return et;
    if (s18 === true && et) return et.enable();
    if (s18 === false) {
      et && et.kill(), et = s18;
      return;
    }
    var e = s18 instanceof ye ? s18 : Rf(s18);
    return et && et.target === e.target && et.kill(), tr(e.target) && (et = e), e;
  };
  K.core = { _getVelocityProp: Hn, _inputObserver: Wl, _scrollers: U, _proxies: Zt, bridge: { ss: function() {
    It || rr("scrollStart"), It = $e();
  }, ref: function() {
    return Xe;
  } } };
  Al() && I.registerPlugin(K);
  function fa(s18) {
    return s18 !== null && typeof s18 == "object" && "constructor" in s18 && s18.constructor === Object;
  }
  function Mo(s18, e) {
    s18 === void 0 && (s18 = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
      typeof s18[i] > "u" ? s18[i] = e[i] : fa(e[i]) && fa(s18[i]) && Object.keys(e[i]).length > 0 && Mo(s18[i], e[i]);
    });
  }
  var Hl = { body: {}, addEventListener() {
  }, removeEventListener() {
  }, activeElement: { blur() {
  }, nodeName: "" }, querySelector() {
    return null;
  }, querySelectorAll() {
    return [];
  }, getElementById() {
    return null;
  }, createEvent() {
    return { initEvent() {
    } };
  }, createElement() {
    return { children: [], childNodes: [], style: {}, setAttribute() {
    }, getElementsByTagName() {
      return [];
    } };
  }, createElementNS() {
    return {};
  }, importNode() {
    return null;
  }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
  function Jt() {
    const s18 = typeof document < "u" ? document : {};
    return Mo(s18, Hl), s18;
  }
  var Ff = { document: Hl, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
  }, pushState() {
  }, go() {
  }, back() {
  } }, CustomEvent: function() {
    return this;
  }, addEventListener() {
  }, removeEventListener() {
  }, getComputedStyle() {
    return { getPropertyValue() {
      return "";
    } };
  }, Image() {
  }, Date() {
  }, screen: {}, setTimeout() {
  }, clearTimeout() {
  }, matchMedia() {
    return {};
  }, requestAnimationFrame(s18) {
    return typeof setTimeout > "u" ? (s18(), null) : setTimeout(s18, 0);
  }, cancelAnimationFrame(s18) {
    typeof setTimeout > "u" || clearTimeout(s18);
  } };
  function nt() {
    const s18 = typeof window < "u" ? window : {};
    return Mo(s18, Ff), s18;
  }
  function Nf(s18) {
    return s18 === void 0 && (s18 = ""), s18.trim().split(" ").filter((e) => !!e.trim());
  }
  function Bf(s18) {
    const e = s18;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {
      }
      try {
        delete e[t];
      } catch {
      }
    });
  }
  function Xl(s18, e) {
    return e === void 0 && (e = 0), setTimeout(s18, e);
  }
  function Qs() {
    return Date.now();
  }
  function Vf(s18) {
    const e = nt();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(s18, null)), !t && s18.currentStyle && (t = s18.currentStyle), t || (t = s18.style), t;
  }
  function Gf(s18, e) {
    e === void 0 && (e = "x");
    const t = nt();
    let i, r, n;
    const o = Vf(s18);
    return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((a) => a.replace(",", ".")).join(", ")), n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])), r || 0;
  }
  function Ms(s18) {
    return typeof s18 == "object" && s18 !== null && s18.constructor && Object.prototype.toString.call(s18).slice(8, -1) === "Object";
  }
  function Yf(s18) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? s18 instanceof HTMLElement : s18 && (s18.nodeType === 1 || s18.nodeType === 11);
  }
  function yt() {
    const s18 = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Yf(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, o = r.length; n < o; n += 1) {
          const a = r[n], l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 && l.enumerable && (Ms(s18[a]) && Ms(i[a]) ? i[a].__swiper__ ? s18[a] = i[a] : yt(s18[a], i[a]) : !Ms(s18[a]) && Ms(i[a]) ? (s18[a] = {}, i[a].__swiper__ ? s18[a] = i[a] : yt(s18[a], i[a])) : s18[a] = i[a]);
        }
      }
    }
    return s18;
  }
  function Cs(s18, e, t) {
    s18.style.setProperty(e, t);
  }
  function $l(s18) {
    let { swiper: e, targetPosition: t, side: i } = s18;
    const r = nt(), n = -e.translate;
    let o = null, a;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > n ? "next" : "prev", f = (h, d) => u === "next" && h >= d || u === "prev" && h <= d, c = () => {
      a = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = a);
      const h = Math.max(Math.min((a - o) / l, 1), 0), d = 0.5 - Math.cos(h * Math.PI) / 2;
      let p = n + d * (t - n);
      if (f(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), f(p, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [i]: p });
        }), r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(c);
    };
    c();
  }
  function fi(s18, e) {
    e === void 0 && (e = "");
    const t = nt(), i = [...s18.children];
    return t.HTMLSlotElement && s18 instanceof HTMLSlotElement && i.push(...s18.assignedElements()), e ? i.filter((r) => r.matches(e)) : i;
  }
  function Wf(s18, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const i = t.shift();
      if (s18 === i) return true;
      t.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
    }
  }
  function Hf(s18, e) {
    const t = nt();
    let i = e.contains(s18);
    return !i && t.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(s18), i || (i = Wf(s18, e))), i;
  }
  function Zs(s18) {
    try {
      console.warn(s18);
      return;
    } catch {
    }
  }
  function Zn(s18, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s18);
    return t.classList.add(...Array.isArray(e) ? e : Nf(e)), t;
  }
  function Xf(s18, e) {
    const t = [];
    for (; s18.previousElementSibling; ) {
      const i = s18.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), s18 = i;
    }
    return t;
  }
  function $f(s18, e) {
    const t = [];
    for (; s18.nextElementSibling; ) {
      const i = s18.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), s18 = i;
    }
    return t;
  }
  function Mi(s18, e) {
    return nt().getComputedStyle(s18, null).getPropertyValue(e);
  }
  function ca(s18) {
    let e = s18, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function qf(s18, e) {
    const t = [];
    let i = s18.parentElement;
    for (; i; ) t.push(i), i = i.parentElement;
    return t;
  }
  function da(s18, e, t) {
    const i = nt();
    return s18[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s18, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s18, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
  }
  var yn;
  function Uf() {
    const s18 = nt(), e = Jt();
    return { smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style, touch: !!("ontouchstart" in s18 || s18.DocumentTouch && e instanceof s18.DocumentTouch) };
  }
  function ql() {
    return yn || (yn = Uf()), yn;
  }
  var Sn;
  function jf(s18) {
    let { userAgent: e } = s18 === void 0 ? {} : s18;
    const t = ql(), i = nt(), r = i.navigator.platform, n = e || i.navigator.userAgent, o = { ios: false, android: false }, a = i.screen.width, l = i.screen.height, u = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = n.match(/(iPad).*OS\s([\d_]+)/);
    const c = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !f && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), d = r === "Win32";
    let p = r === "MacIntel";
    const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !f && p && t.touch && m.indexOf(`${a}x${l}`) >= 0 && (f = n.match(/(Version)\/([\d.]+)/), f || (f = [0, 1, "13_0_0"]), p = false), u && !d && (o.os = "android", o.android = true), (f || h || c) && (o.os = "ios", o.ios = true), o;
  }
  function Ul(s18) {
    return s18 === void 0 && (s18 = {}), Sn || (Sn = jf(s18)), Sn;
  }
  var Tn;
  function Kf() {
    const s18 = nt(), e = Ul();
    let t = false;
    function i() {
      const a = s18.navigator.userAgent.toLowerCase();
      return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
    }
    if (i()) {
      const a = String(s18.navigator.userAgent);
      if (a.includes("Version/")) {
        const [l, u] = a.split("Version/")[1].split(" ")[0].split(".").map((f) => Number(f));
        t = l < 16 || l === 16 && u < 2;
      }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s18.navigator.userAgent), n = i(), o = n || r && e.ios;
    return { isSafari: t || n, needPerspectiveFix: t, need3dFix: o, isWebView: r };
  }
  function jl() {
    return Tn || (Tn = Kf()), Tn;
  }
  function Qf(s18) {
    let { swiper: e, on: t, emit: i } = s18;
    const r = nt();
    let n = null, o = null;
    const a = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    }, l = () => {
      !e || e.destroyed || !e.initialized || (n = new ResizeObserver((c) => {
        o = r.requestAnimationFrame(() => {
          const { width: h, height: d } = e;
          let p = h, m = d;
          c.forEach((g) => {
            let { contentBoxSize: _, contentRect: v, target: S } = g;
            S && S !== e.el || (p = v ? v.width : (_[0] || _).inlineSize, m = v ? v.height : (_[0] || _).blockSize);
          }), (p !== h || m !== d) && a();
        });
      }), n.observe(e.el));
    }, u = () => {
      o && r.cancelAnimationFrame(o), n && n.unobserve && e.el && (n.unobserve(e.el), n = null);
    }, f = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", a), r.addEventListener("orientationchange", f);
    }), t("destroy", () => {
      u(), r.removeEventListener("resize", a), r.removeEventListener("orientationchange", f);
    });
  }
  function Zf(s18) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s18;
    const n = [], o = nt(), a = function(f, c) {
      c === void 0 && (c = {});
      const h = o.MutationObserver || o.WebkitMutationObserver, d = new h((p) => {
        if (e.__preventObserver__) return;
        if (p.length === 1) {
          r("observerUpdate", p[0]);
          return;
        }
        const m = function() {
          r("observerUpdate", p[0]);
        };
        o.requestAnimationFrame ? o.requestAnimationFrame(m) : o.setTimeout(m, 0);
      });
      d.observe(f, { attributes: typeof c.attributes > "u" ? true : c.attributes, childList: e.isElement || (typeof c.childList > "u" ? true : c).childList, characterData: typeof c.characterData > "u" ? true : c.characterData }), n.push(d);
    }, l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const f = qf(e.hostEl);
          for (let c = 0; c < f.length; c += 1) a(f[c]);
        }
        a(e.hostEl, { childList: e.params.observeSlideChildren }), a(e.wrapperEl, { attributes: false });
      }
    }, u = () => {
      n.forEach((f) => {
        f.disconnect();
      }), n.splice(0, n.length);
    };
    t({ observer: false, observeParents: false, observeSlideChildren: false }), i("init", l), i("destroy", u);
  }
  var Jf = { on(s18, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return s18.split(" ").forEach((n) => {
      i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][r](e);
    }), i;
  }, once(s18, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r() {
      i.off(s18, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
      e.apply(i, o);
    }
    return r.__emitterProxy = e, i.on(s18, r, t);
  }, onAny(s18, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof s18 != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(s18) < 0 && t.eventsAnyListeners[i](s18), t;
  }, offAny(s18) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(s18);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  }, off(s18, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || s18.split(" ").forEach((i) => {
      typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r, n) => {
        (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1);
      });
    }), t;
  }, emit() {
    const s18 = this;
    if (!s18.eventsListeners || s18.destroyed || !s18.eventsListeners) return s18;
    let e, t, i;
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
    return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), i = s18) : (e = n[0].events, t = n[0].data, i = n[0].context || s18), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
      s18.eventsAnyListeners && s18.eventsAnyListeners.length && s18.eventsAnyListeners.forEach((u) => {
        u.apply(i, [l, ...t]);
      }), s18.eventsListeners && s18.eventsListeners[l] && s18.eventsListeners[l].forEach((u) => {
        u.apply(i, t);
      });
    }), s18;
  } };
  function ec() {
    const s18 = this;
    let e, t;
    const i = s18.el;
    typeof s18.params.width < "u" && s18.params.width !== null ? e = s18.params.width : e = i.clientWidth, typeof s18.params.height < "u" && s18.params.height !== null ? t = s18.params.height : t = i.clientHeight, !(e === 0 && s18.isHorizontal() || t === 0 && s18.isVertical()) && (e = e - parseInt(Mi(i, "padding-left") || 0, 10) - parseInt(Mi(i, "padding-right") || 0, 10), t = t - parseInt(Mi(i, "padding-top") || 0, 10) - parseInt(Mi(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(s18, { width: e, height: t, size: s18.isHorizontal() ? e : t }));
  }
  function tc() {
    const s18 = this;
    function e(b, k) {
      return parseFloat(b.getPropertyValue(s18.getDirectionLabel(k)) || 0);
    }
    const t = s18.params, { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: a } = s18, l = s18.virtual && t.virtual.enabled, u = l ? s18.virtual.slides.length : s18.slides.length, f = fi(r, `.${s18.params.slideClass}, swiper-slide`), c = l ? s18.virtual.slides.length : f.length;
    let h = [];
    const d = [], p = [];
    let m = t.slidesOffsetBefore;
    typeof m == "function" && (m = t.slidesOffsetBefore.call(s18));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(s18));
    const _ = s18.snapGrid.length, v = s18.slidesGrid.length;
    let S = t.spaceBetween, y = -m, T = 0, E = 0;
    if (typeof n > "u") return;
    typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * n : typeof S == "string" && (S = parseFloat(S)), s18.virtualSize = -S, f.forEach((b) => {
      o ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (Cs(i, "--swiper-centered-offset-before", ""), Cs(i, "--swiper-centered-offset-after", ""));
    const x = t.grid && t.grid.rows > 1 && s18.grid;
    x ? s18.grid.initSlides(f) : s18.grid && s18.grid.unsetSlides();
    let M;
    const C = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((b) => typeof t.breakpoints[b].slidesPerView < "u").length > 0;
    for (let b = 0; b < c; b += 1) {
      M = 0;
      let k;
      if (f[b] && (k = f[b]), x && s18.grid.updateSlide(b, k, f), !(f[b] && Mi(k, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          C && (f[b].style[s18.getDirectionLabel("width")] = "");
          const O = getComputedStyle(k), R = k.style.transform, V = k.style.webkitTransform;
          if (R && (k.style.transform = "none"), V && (k.style.webkitTransform = "none"), t.roundLengths) M = s18.isHorizontal() ? da(k, "width") : da(k, "height");
          else {
            const G = e(O, "width"), A = e(O, "padding-left"), z = e(O, "padding-right"), D = e(O, "margin-left"), Y = e(O, "margin-right"), w = O.getPropertyValue("box-sizing");
            if (w && w === "border-box") M = G + D + Y;
            else {
              const { clientWidth: J, offsetWidth: Se } = k;
              M = G + A + z + D + Y + (Se - J);
            }
          }
          R && (k.style.transform = R), V && (k.style.webkitTransform = V), t.roundLengths && (M = Math.floor(M));
        } else M = (n - (t.slidesPerView - 1) * S) / t.slidesPerView, t.roundLengths && (M = Math.floor(M)), f[b] && (f[b].style[s18.getDirectionLabel("width")] = `${M}px`);
        f[b] && (f[b].swiperSlideSize = M), p.push(M), t.centeredSlides ? (y = y + M / 2 + T / 2 + S, T === 0 && b !== 0 && (y = y - n / 2 - S), b === 0 && (y = y - n / 2 - S), Math.abs(y) < 1 / 1e3 && (y = 0), t.roundLengths && (y = Math.floor(y)), E % t.slidesPerGroup === 0 && h.push(y), d.push(y)) : (t.roundLengths && (y = Math.floor(y)), (E - Math.min(s18.params.slidesPerGroupSkip, E)) % s18.params.slidesPerGroup === 0 && h.push(y), d.push(y), y = y + M + S), s18.virtualSize += M + S, T = M, E += 1;
      }
    }
    if (s18.virtualSize = Math.max(s18.virtualSize, n) + g, o && a && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${s18.virtualSize + S}px`), t.setWrapperSize && (i.style[s18.getDirectionLabel("width")] = `${s18.virtualSize + S}px`), x && s18.grid.updateWrapperSize(M, h), !t.centeredSlides) {
      const b = [];
      for (let k = 0; k < h.length; k += 1) {
        let O = h[k];
        t.roundLengths && (O = Math.floor(O)), h[k] <= s18.virtualSize - n && b.push(O);
      }
      h = b, Math.floor(s18.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(s18.virtualSize - n);
    }
    if (l && t.loop) {
      const b = p[0] + S;
      if (t.slidesPerGroup > 1) {
        const k = Math.ceil((s18.virtual.slidesBefore + s18.virtual.slidesAfter) / t.slidesPerGroup), O = b * t.slidesPerGroup;
        for (let R = 0; R < k; R += 1) h.push(h[h.length - 1] + O);
      }
      for (let k = 0; k < s18.virtual.slidesBefore + s18.virtual.slidesAfter; k += 1) t.slidesPerGroup === 1 && h.push(h[h.length - 1] + b), d.push(d[d.length - 1] + b), s18.virtualSize += b;
    }
    if (h.length === 0 && (h = [0]), S !== 0) {
      const b = s18.isHorizontal() && o ? "marginLeft" : s18.getDirectionLabel("marginRight");
      f.filter((k, O) => !t.cssMode || t.loop ? true : O !== f.length - 1).forEach((k) => {
        k.style[b] = `${S}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let b = 0;
      p.forEach((O) => {
        b += O + (S || 0);
      }), b -= S;
      const k = b > n ? b - n : 0;
      h = h.map((O) => O <= 0 ? -m : O > k ? k + g : O);
    }
    if (t.centerInsufficientSlides) {
      let b = 0;
      p.forEach((O) => {
        b += O + (S || 0);
      }), b -= S;
      const k = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (b + k < n) {
        const O = (n - b - k) / 2;
        h.forEach((R, V) => {
          h[V] = R - O;
        }), d.forEach((R, V) => {
          d[V] = R + O;
        });
      }
    }
    if (Object.assign(s18, { slides: f, snapGrid: h, slidesGrid: d, slidesSizesGrid: p }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      Cs(i, "--swiper-centered-offset-before", `${-h[0]}px`), Cs(i, "--swiper-centered-offset-after", `${s18.size / 2 - p[p.length - 1] / 2}px`);
      const b = -s18.snapGrid[0], k = -s18.slidesGrid[0];
      s18.snapGrid = s18.snapGrid.map((O) => O + b), s18.slidesGrid = s18.slidesGrid.map((O) => O + k);
    }
    if (c !== u && s18.emit("slidesLengthChange"), h.length !== _ && (s18.params.watchOverflow && s18.checkOverflow(), s18.emit("snapGridLengthChange")), d.length !== v && s18.emit("slidesGridLengthChange"), t.watchSlidesProgress && s18.updateSlidesOffset(), s18.emit("slidesUpdated"), !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const b = `${t.containerModifierClass}backface-hidden`, k = s18.el.classList.contains(b);
      c <= t.maxBackfaceHiddenSlides ? k || s18.el.classList.add(b) : k && s18.el.classList.remove(b);
    }
  }
  function ic(s18) {
    const e = this, t = [], i = e.virtual && e.params.virtual.enabled;
    let r = 0, n;
    typeof s18 == "number" ? e.setTransition(s18) : s18 === true && e.setTransition(e.params.speed);
    const o = (a) => i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1) if (e.params.centeredSlides) (e.visibleSlides || []).forEach((a) => {
      t.push(a);
    });
    else for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
      const a = e.activeIndex + n;
      if (a > e.slides.length && !i) break;
      t.push(o(a));
    }
    else t.push(o(e.activeIndex));
    for (n = 0; n < t.length; n += 1) if (typeof t[n] < "u") {
      const a = t[n].offsetHeight;
      r = a > r ? a : r;
    }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function rc() {
    const s18 = this, e = s18.slides, t = s18.isElement ? s18.isHorizontal() ? s18.wrapperEl.offsetLeft : s18.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (s18.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s18.cssOverflowAdjustment();
  }
  var ha = (s18, e, t) => {
    e && !s18.classList.contains(t) ? s18.classList.add(t) : !e && s18.classList.contains(t) && s18.classList.remove(t);
  };
  function sc(s18) {
    s18 === void 0 && (s18 = this && this.translate || 0);
    const e = this, t = e.params, { slides: i, rtlTranslate: r, snapGrid: n } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -s18;
    r && (o = s18), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      let f = u.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (f -= i[0].swiperSlideOffset);
      const c = (o + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + a), h = (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + a), d = -(o - f), p = d + e.slidesSizesGrid[l], m = d >= 0 && d <= e.size - e.slidesSizesGrid[l], g = d >= 0 && d < e.size - 1 || p > 1 && p <= e.size || d <= 0 && p >= e.size;
      g && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)), ha(u, g, t.slideVisibleClass), ha(u, m, t.slideFullyVisibleClass), u.progress = r ? -c : c, u.originalProgress = r ? -h : h;
    }
  }
  function nc(s18) {
    const e = this;
    if (typeof s18 > "u") {
      const f = e.rtlTranslate ? -1 : 1;
      s18 = e && e.translate && e.translate * f || 0;
    }
    const t = e.params, i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: n, isEnd: o, progressLoop: a } = e;
    const l = n, u = o;
    if (i === 0) r = 0, n = true, o = true;
    else {
      r = (s18 - e.minTranslate()) / i;
      const f = Math.abs(s18 - e.minTranslate()) < 1, c = Math.abs(s18 - e.maxTranslate()) < 1;
      n = f || r <= 0, o = c || r >= 1, f && (r = 0), c && (r = 1);
    }
    if (t.loop) {
      const f = e.getSlideIndexByData(0), c = e.getSlideIndexByData(e.slides.length - 1), h = e.slidesGrid[f], d = e.slidesGrid[c], p = e.slidesGrid[e.slidesGrid.length - 1], m = Math.abs(s18);
      m >= h ? a = (m - h) / p : a = (m + p - d) / p, a > 1 && (a -= 1);
    }
    Object.assign(e, { progress: r, progressLoop: a, isBeginning: n, isEnd: o }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s18), n && !l && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (l && !n || u && !o) && e.emit("fromEdge"), e.emit("progress", r);
  }
  var xn = (s18, e, t) => {
    e && !s18.classList.contains(t) ? s18.classList.add(t) : !e && s18.classList.contains(t) && s18.classList.remove(t);
  };
  function oc() {
    const s18 = this, { slides: e, params: t, slidesEl: i, activeIndex: r } = s18, n = s18.virtual && t.virtual.enabled, o = s18.grid && t.grid && t.grid.rows > 1, a = (c) => fi(i, `.${t.slideClass}${c}, swiper-slide${c}`)[0];
    let l, u, f;
    if (n) if (t.loop) {
      let c = r - s18.virtual.slidesBefore;
      c < 0 && (c = s18.virtual.slides.length + c), c >= s18.virtual.slides.length && (c -= s18.virtual.slides.length), l = a(`[data-swiper-slide-index="${c}"]`);
    } else l = a(`[data-swiper-slide-index="${r}"]`);
    else o ? (l = e.find((c) => c.column === r), f = e.find((c) => c.column === r + 1), u = e.find((c) => c.column === r - 1)) : l = e[r];
    l && (o || (f = $f(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !f && (f = e[0]), u = Xf(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach((c) => {
      xn(c, c === l, t.slideActiveClass), xn(c, c === f, t.slideNextClass), xn(c, c === u, t.slidePrevClass);
    }), s18.emitSlidesClasses();
  }
  var Ns = (s18, e) => {
    if (!s18 || s18.destroyed || !s18.params) return;
    const t = () => s18.isElement ? "swiper-slide" : `.${s18.params.slideClass}`, i = e.closest(t());
    if (i) {
      let r = i.querySelector(`.${s18.params.lazyPreloaderClass}`);
      !r && s18.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${s18.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (r = i.shadowRoot.querySelector(`.${s18.params.lazyPreloaderClass}`), r && r.remove());
      })), r && r.remove();
    }
  };
  var bn = (s18, e) => {
    if (!s18.slides[e]) return;
    const t = s18.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  };
  var Jn = (s18) => {
    if (!s18 || s18.destroyed || !s18.params) return;
    let e = s18.params.lazyPreloadPrevNext;
    const t = s18.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const i = s18.params.slidesPerView === "auto" ? s18.slidesPerViewDynamic() : Math.ceil(s18.params.slidesPerView), r = s18.activeIndex;
    if (s18.params.grid && s18.params.grid.rows > 1) {
      const o = r, a = [o - e];
      a.push(...Array.from({ length: e }).map((l, u) => o + i + u)), s18.slides.forEach((l, u) => {
        a.includes(l.column) && bn(s18, u);
      });
      return;
    }
    const n = r + i - 1;
    if (s18.params.rewind || s18.params.loop) for (let o = r - e; o <= n + e; o += 1) {
      const a = (o % t + t) % t;
      (a < r || a > n) && bn(s18, a);
    }
    else for (let o = Math.max(r - e, 0); o <= Math.min(n + e, t - 1); o += 1) o !== r && (o > n || o < r) && bn(s18, o);
  };
  function ac(s18) {
    const { slidesGrid: e, params: t } = s18, i = s18.rtlTranslate ? s18.translate : -s18.translate;
    let r;
    for (let n = 0; n < e.length; n += 1) typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : i >= e[n] && i < e[n + 1] && (r = n + 1) : i >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
  }
  function lc(s18) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, { snapGrid: i, params: r, activeIndex: n, realIndex: o, snapIndex: a } = e;
    let l = s18, u;
    const f = (d) => {
      let p = d - e.virtual.slidesBefore;
      return p < 0 && (p = e.virtual.slides.length + p), p >= e.virtual.slides.length && (p -= e.virtual.slides.length), p;
    };
    if (typeof l > "u" && (l = ac(e)), i.indexOf(t) >= 0) u = i.indexOf(t);
    else {
      const d = Math.min(r.slidesPerGroupSkip, l);
      u = d + Math.floor((l - d) / r.slidesPerGroup);
    }
    if (u >= i.length && (u = i.length - 1), l === n && !e.params.loop) {
      u !== a && (e.snapIndex = u, e.emit("snapIndexChange"));
      return;
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = f(l);
      return;
    }
    const c = e.grid && r.grid && r.grid.rows > 1;
    let h;
    if (e.virtual && r.virtual.enabled && r.loop) h = f(l);
    else if (c) {
      const d = e.slides.find((m) => m.column === l);
      let p = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(p) && (p = Math.max(e.slides.indexOf(d), 0)), h = Math.floor(p / r.grid.rows);
    } else if (e.slides[l]) {
      const d = e.slides[l].getAttribute("data-swiper-slide-index");
      d ? h = parseInt(d, 10) : h = l;
    } else h = l;
    Object.assign(e, { previousSnapIndex: a, snapIndex: u, previousRealIndex: o, realIndex: h, previousIndex: n, activeIndex: l }), e.initialized && Jn(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function uc(s18, e) {
    const t = this, i = t.params;
    let r = s18.closest(`.${i.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(s18) && [...e.slice(e.indexOf(s18) + 1, e.length)].forEach((a) => {
      !r && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (r = a);
    });
    let n = false, o;
    if (r) {
      for (let a = 0; a < t.slides.length; a += 1) if (t.slides[a] === r) {
        n = true, o = a;
        break;
      }
    }
    if (r && n) t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var fc = { updateSize: ec, updateSlides: tc, updateAutoHeight: ic, updateSlidesOffset: rc, updateSlidesProgress: sc, updateProgress: nc, updateSlidesClasses: oc, updateActiveIndex: lc, updateClickedSlide: uc };
  function cc(s18) {
    s18 === void 0 && (s18 = this.isHorizontal() ? "x" : "y");
    const e = this, { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let o = Gf(n, s18);
    return o += e.cssOverflowAdjustment(), i && (o = -o), o || 0;
  }
  function dc(s18, e) {
    const t = this, { rtlTranslate: i, params: r, wrapperEl: n, progress: o } = t;
    let a = 0, l = 0;
    const u = 0;
    t.isHorizontal() ? a = i ? -s18 : s18 : l = s18, r.roundLengths && (a = Math.floor(a), l = Math.floor(l)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? a : l, r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -l : r.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(), n.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`);
    let f;
    const c = t.maxTranslate() - t.minTranslate();
    c === 0 ? f = 0 : f = (s18 - t.minTranslate()) / c, f !== o && t.updateProgress(s18), t.emit("setTranslate", t.translate, e);
  }
  function hc() {
    return -this.snapGrid[0];
  }
  function pc() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function mc(s18, e, t, i, r) {
    s18 === void 0 && (s18 = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = true), i === void 0 && (i = true);
    const n = this, { params: o, wrapperEl: a } = n;
    if (n.animating && o.preventInteractionOnTransition) return false;
    const l = n.minTranslate(), u = n.maxTranslate();
    let f;
    if (i && s18 > l ? f = l : i && s18 < u ? f = u : f = s18, n.updateProgress(f), o.cssMode) {
      const c = n.isHorizontal();
      if (e === 0) a[c ? "scrollLeft" : "scrollTop"] = -f;
      else {
        if (!n.support.smoothScroll) return $l({ swiper: n, targetPosition: -f, side: c ? "left" : "top" }), true;
        a.scrollTo({ [c ? "left" : "top"]: -f, behavior: "smooth" });
      }
      return true;
    }
    return e === 0 ? (n.setTransition(0), n.setTranslate(f), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(f), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = true, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(h) {
      !n || n.destroyed || h.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = false, t && n.emit("transitionEnd"));
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), true;
  }
  var gc = { getTranslate: cc, setTranslate: dc, minTranslate: hc, maxTranslate: pc, translateTo: mc };
  function _c(s18, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s18}ms`, t.wrapperEl.style.transitionDelay = s18 === 0 ? "0ms" : ""), t.emit("setTransition", s18, e);
  }
  function Kl(s18) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = s18;
    const { activeIndex: n, previousIndex: o } = e;
    let a = i;
    a || (n > o ? a = "next" : n < o ? a = "prev" : a = "reset"), e.emit(`transition${r}`), t && a === "reset" ? e.emit(`slideResetTransition${r}`) : t && n !== o && (e.emit(`slideChangeTransition${r}`), a === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`));
  }
  function vc(s18, e) {
    s18 === void 0 && (s18 = true);
    const t = this, { params: i } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(), Kl({ swiper: t, runCallbacks: s18, direction: e, step: "Start" }));
  }
  function wc(s18, e) {
    s18 === void 0 && (s18 = true);
    const t = this, { params: i } = t;
    t.animating = false, !i.cssMode && (t.setTransition(0), Kl({ swiper: t, runCallbacks: s18, direction: e, step: "End" }));
  }
  var yc = { setTransition: _c, transitionStart: vc, transitionEnd: wc };
  function Sc(s18, e, t, i, r) {
    s18 === void 0 && (s18 = 0), t === void 0 && (t = true), typeof s18 == "string" && (s18 = parseInt(s18, 10));
    const n = this;
    let o = s18;
    o < 0 && (o = 0);
    const { params: a, snapGrid: l, slidesGrid: u, previousIndex: f, activeIndex: c, rtlTranslate: h, wrapperEl: d, enabled: p } = n;
    if (!p && !i && !r || n.destroyed || n.animating && a.preventInteractionOnTransition) return false;
    typeof e > "u" && (e = n.params.speed);
    const m = Math.min(n.params.slidesPerGroupSkip, o);
    let g = m + Math.floor((o - m) / n.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const _ = -l[g];
    if (a.normalizeSlideIndex) for (let x = 0; x < u.length; x += 1) {
      const M = -Math.floor(_ * 100), C = Math.floor(u[x] * 100), b = Math.floor(u[x + 1] * 100);
      typeof u[x + 1] < "u" ? M >= C && M < b - (b - C) / 2 ? o = x : M >= C && M < b && (o = x + 1) : M >= C && (o = x);
    }
    if (n.initialized && o !== c && (!n.allowSlideNext && (h ? _ > n.translate && _ > n.minTranslate() : _ < n.translate && _ < n.minTranslate()) || !n.allowSlidePrev && _ > n.translate && _ > n.maxTranslate() && (c || 0) !== o)) return false;
    o !== (f || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(_);
    let v;
    o > c ? v = "next" : o < c ? v = "prev" : v = "reset";
    const S = n.virtual && n.params.virtual.enabled;
    if (!(S && r) && (h && -_ === n.translate || !h && _ === n.translate)) return n.updateActiveIndex(o), a.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), a.effect !== "slide" && n.setTranslate(_), v !== "reset" && (n.transitionStart(t, v), n.transitionEnd(t, v)), false;
    if (a.cssMode) {
      const x = n.isHorizontal(), M = h ? _ : -_;
      if (e === 0) S && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = true), S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = true, requestAnimationFrame(() => {
        d[x ? "scrollLeft" : "scrollTop"] = M;
      })) : d[x ? "scrollLeft" : "scrollTop"] = M, S && requestAnimationFrame(() => {
        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = false;
      });
      else {
        if (!n.support.smoothScroll) return $l({ swiper: n, targetPosition: M, side: x ? "left" : "top" }), true;
        d.scrollTo({ [x ? "left" : "top"]: M, behavior: "smooth" });
      }
      return true;
    }
    const E = jl().isSafari;
    return S && !r && E && n.isElement && n.virtual.update(false, false, o), n.setTransition(e), n.setTranslate(_), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, i), n.transitionStart(t, v), e === 0 ? n.transitionEnd(t, v) : n.animating || (n.animating = true, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(M) {
      !n || n.destroyed || M.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(t, v));
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), true;
  }
  function Tc(s18, e, t, i) {
    s18 === void 0 && (s18 = 0), t === void 0 && (t = true), typeof s18 == "string" && (s18 = parseInt(s18, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = s18;
    if (r.params.loop) if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
    else {
      let a;
      if (n) {
        const h = o * r.params.grid.rows;
        a = r.slides.find((d) => d.getAttribute("data-swiper-slide-index") * 1 === h).column;
      } else a = r.getSlideIndexByData(o);
      const l = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, { centeredSlides: u } = r.params;
      let f = r.params.slidesPerView;
      f === "auto" ? f = r.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(r.params.slidesPerView, 10)), u && f % 2 === 0 && (f = f + 1));
      let c = l - a < f;
      if (u && (c = c || a < Math.ceil(f / 2)), i && u && r.params.slidesPerView !== "auto" && !n && (c = false), c) {
        const h = u ? a < r.activeIndex ? "prev" : "next" : a - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
        r.loopFix({ direction: h, slideTo: true, activeSlideIndex: h === "next" ? a + 1 : a - l + 1, slideRealIndex: h === "next" ? r.realIndex : void 0 });
      }
      if (n) {
        const h = o * r.params.grid.rows;
        o = r.slides.find((d) => d.getAttribute("data-swiper-slide-index") * 1 === h).column;
      } else o = r.getSlideIndexByData(o);
    }
    return requestAnimationFrame(() => {
      r.slideTo(o, e, t, i);
    }), r;
  }
  function xc(s18, e, t) {
    e === void 0 && (e = true);
    const i = this, { enabled: r, params: n, animating: o } = i;
    if (!r || i.destroyed) return i;
    typeof s18 > "u" && (s18 = i.params.speed);
    let a = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", true), 1));
    const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : a, u = i.virtual && n.virtual.enabled;
    if (n.loop) {
      if (o && !u && n.loopPreventsSliding) return false;
      if (i.loopFix({ direction: "next" }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + l, s18, e, t);
      }), true;
    }
    return n.rewind && i.isEnd ? i.slideTo(0, s18, e, t) : i.slideTo(i.activeIndex + l, s18, e, t);
  }
  function bc(s18, e, t) {
    e === void 0 && (e = true);
    const i = this, { params: r, snapGrid: n, slidesGrid: o, rtlTranslate: a, enabled: l, animating: u } = i;
    if (!l || i.destroyed) return i;
    typeof s18 > "u" && (s18 = i.params.speed);
    const f = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (u && !f && r.loopPreventsSliding) return false;
      i.loopFix({ direction: "prev" }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    const c = a ? i.translate : -i.translate;
    function h(v) {
      return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
    }
    const d = h(c), p = n.map((v) => h(v)), m = r.freeMode && r.freeMode.enabled;
    let g = n[p.indexOf(d) - 1];
    if (typeof g > "u" && (r.cssMode || m)) {
      let v;
      n.forEach((S, y) => {
        d >= S && (v = y);
      }), typeof v < "u" && (g = m ? n[v] : n[v > 0 ? v - 1 : v]);
    }
    let _ = 0;
    if (typeof g < "u" && (_ = o.indexOf(g), _ < 0 && (_ = i.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (_ = _ - i.slidesPerViewDynamic("previous", true) + 1, _ = Math.max(_, 0))), r.rewind && i.isBeginning) {
      const v = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(v, s18, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode) return requestAnimationFrame(() => {
      i.slideTo(_, s18, e, t);
    }), true;
    return i.slideTo(_, s18, e, t);
  }
  function Ec(s18, e, t) {
    e === void 0 && (e = true);
    const i = this;
    if (!i.destroyed) return typeof s18 > "u" && (s18 = i.params.speed), i.slideTo(i.activeIndex, s18, e, t);
  }
  function Pc(s18, e, t, i) {
    e === void 0 && (e = true), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof s18 > "u" && (s18 = r.params.speed);
    let n = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, n), a = o + Math.floor((n - o) / r.params.slidesPerGroup), l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
      const u = r.snapGrid[a], f = r.snapGrid[a + 1];
      l - u > (f - u) * i && (n += r.params.slidesPerGroup);
    } else {
      const u = r.snapGrid[a - 1], f = r.snapGrid[a];
      l - u <= (f - u) * i && (n -= r.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, s18, e, t);
  }
  function Mc() {
    const s18 = this;
    if (s18.destroyed) return;
    const { params: e, slidesEl: t } = s18, i = e.slidesPerView === "auto" ? s18.slidesPerViewDynamic() : e.slidesPerView;
    let r = s18.getSlideIndexWhenGrid(s18.clickedIndex), n;
    const o = s18.isElement ? "swiper-slide" : `.${e.slideClass}`, a = s18.grid && s18.params.grid && s18.params.grid.rows > 1;
    if (e.loop) {
      if (s18.animating) return;
      n = parseInt(s18.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? s18.slideToLoop(n) : r > (a ? (s18.slides.length - i) / 2 - (s18.params.grid.rows - 1) : s18.slides.length - i) ? (s18.loopFix(), r = s18.getSlideIndex(fi(t, `${o}[data-swiper-slide-index="${n}"]`)[0]), Xl(() => {
        s18.slideTo(r);
      })) : s18.slideTo(r);
    } else s18.slideTo(r);
  }
  var Cc = { slideTo: Sc, slideToLoop: Tc, slideNext: xc, slidePrev: bc, slideReset: Ec, slideToClosest: Pc, slideToClickedSlide: Mc };
  function Oc(s18, e) {
    const t = this, { params: i, slidesEl: r } = t;
    if (!i.loop || t.virtual && t.params.virtual.enabled) return;
    const n = () => {
      fi(r, `.${i.slideClass}, swiper-slide`).forEach((d, p) => {
        d.setAttribute("data-swiper-slide-index", p);
      });
    }, o = () => {
      const h = fi(r, `.${i.slideBlankClass}`);
      h.forEach((d) => {
        d.remove();
      }), h.length > 0 && (t.recalcSlides(), t.updateSlides());
    }, a = t.grid && i.grid && i.grid.rows > 1;
    i.loopAddBlankSlides && (i.slidesPerGroup > 1 || a) && o();
    const l = i.slidesPerGroup * (a ? i.grid.rows : 1), u = t.slides.length % l !== 0, f = a && t.slides.length % i.grid.rows !== 0, c = (h) => {
      for (let d = 0; d < h; d += 1) {
        const p = t.isElement ? Zn("swiper-slide", [i.slideBlankClass]) : Zn("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(p);
      }
    };
    if (u) {
      if (i.loopAddBlankSlides) {
        const h = l - t.slides.length % l;
        c(h), t.recalcSlides(), t.updateSlides();
      } else Zs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      n();
    } else if (f) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - t.slides.length % i.grid.rows;
        c(h), t.recalcSlides(), t.updateSlides();
      } else Zs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      n();
    } else n();
    t.loopFix({ slideRealIndex: s18, direction: i.centeredSlides ? void 0 : "next", initial: e });
  }
  function kc(s18) {
    let { slideRealIndex: e, slideTo: t = true, direction: i, setTranslate: r, activeSlideIndex: n, initial: o, byController: a, byMousewheel: l } = s18 === void 0 ? {} : s18;
    const u = this;
    if (!u.params.loop) return;
    u.emit("beforeLoopFix");
    const { slides: f, allowSlidePrev: c, allowSlideNext: h, slidesEl: d, params: p } = u, { centeredSlides: m, initialSlide: g } = p;
    if (u.allowSlidePrev = true, u.allowSlideNext = true, u.virtual && p.virtual.enabled) {
      t && (!p.centeredSlides && u.snapIndex === 0 ? u.slideTo(u.virtual.slides.length, 0, false, true) : p.centeredSlides && u.snapIndex < p.slidesPerView ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, false, true) : u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, false, true)), u.allowSlidePrev = c, u.allowSlideNext = h, u.emit("loopFix");
      return;
    }
    let _ = p.slidesPerView;
    _ === "auto" ? _ = u.slidesPerViewDynamic() : (_ = Math.ceil(parseFloat(p.slidesPerView, 10)), m && _ % 2 === 0 && (_ = _ + 1));
    const v = p.slidesPerGroupAuto ? _ : p.slidesPerGroup;
    let S = m ? Math.max(v, Math.ceil(_ / 2)) : v;
    S % v !== 0 && (S += v - S % v), S += p.loopAdditionalSlides, u.loopedSlides = S;
    const y = u.grid && p.grid && p.grid.rows > 1;
    f.length < _ + S || u.params.effect === "cards" && f.length < _ + S * 2 ? Zs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : y && p.grid.fill === "row" && Zs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const T = [], E = [], x = y ? Math.ceil(f.length / p.grid.rows) : f.length, M = o && x - g < _ && !m;
    let C = M ? g : u.activeIndex;
    typeof n > "u" ? n = u.getSlideIndex(f.find((A) => A.classList.contains(p.slideActiveClass))) : C = n;
    const b = i === "next" || !i, k = i === "prev" || !i;
    let O = 0, R = 0;
    const G = (y ? f[n].column : n) + (m && typeof r > "u" ? -_ / 2 + 0.5 : 0);
    if (G < S) {
      O = Math.max(S - G, v);
      for (let A = 0; A < S - G; A += 1) {
        const z = A - Math.floor(A / x) * x;
        if (y) {
          const D = x - z - 1;
          for (let Y = f.length - 1; Y >= 0; Y -= 1) f[Y].column === D && T.push(Y);
        } else T.push(x - z - 1);
      }
    } else if (G + _ > x - S) {
      R = Math.max(G - (x - S * 2), v), M && (R = Math.max(R, _ - x + g + 1));
      for (let A = 0; A < R; A += 1) {
        const z = A - Math.floor(A / x) * x;
        y ? f.forEach((D, Y) => {
          D.column === z && E.push(Y);
        }) : E.push(z);
      }
    }
    if (u.__preventObserver__ = true, requestAnimationFrame(() => {
      u.__preventObserver__ = false;
    }), u.params.effect === "cards" && f.length < _ + S * 2 && (E.includes(n) && E.splice(E.indexOf(n), 1), T.includes(n) && T.splice(T.indexOf(n), 1)), k && T.forEach((A) => {
      f[A].swiperLoopMoveDOM = true, d.prepend(f[A]), f[A].swiperLoopMoveDOM = false;
    }), b && E.forEach((A) => {
      f[A].swiperLoopMoveDOM = true, d.append(f[A]), f[A].swiperLoopMoveDOM = false;
    }), u.recalcSlides(), p.slidesPerView === "auto" ? u.updateSlides() : y && (T.length > 0 && k || E.length > 0 && b) && u.slides.forEach((A, z) => {
      u.grid.updateSlide(z, A, u.slides);
    }), p.watchSlidesProgress && u.updateSlidesOffset(), t) {
      if (T.length > 0 && k) {
        if (typeof e > "u") {
          const A = u.slidesGrid[C], D = u.slidesGrid[C + O] - A;
          l ? u.setTranslate(u.translate - D) : (u.slideTo(C + Math.ceil(O), 0, false, true), r && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - D, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - D));
        } else if (r) {
          const A = y ? T.length / p.grid.rows : T.length;
          u.slideTo(u.activeIndex + A, 0, false, true), u.touchEventsData.currentTranslate = u.translate;
        }
      } else if (E.length > 0 && b) if (typeof e > "u") {
        const A = u.slidesGrid[C], D = u.slidesGrid[C - R] - A;
        l ? u.setTranslate(u.translate - D) : (u.slideTo(C - R, 0, false, true), r && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - D, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - D));
      } else {
        const A = y ? E.length / p.grid.rows : E.length;
        u.slideTo(u.activeIndex - A, 0, false, true);
      }
    }
    if (u.allowSlidePrev = c, u.allowSlideNext = h, u.controller && u.controller.control && !a) {
      const A = { slideRealIndex: e, direction: i, setTranslate: r, activeSlideIndex: n, byController: true };
      Array.isArray(u.controller.control) ? u.controller.control.forEach((z) => {
        !z.destroyed && z.params.loop && z.loopFix({ ...A, slideTo: z.params.slidesPerView === p.slidesPerView ? t : false });
      }) : u.controller.control instanceof u.constructor && u.controller.control.params.loop && u.controller.control.loopFix({ ...A, slideTo: u.controller.control.params.slidesPerView === p.slidesPerView ? t : false });
    }
    u.emit("loopFix");
  }
  function Dc() {
    const s18 = this, { params: e, slidesEl: t } = s18;
    if (!e.loop || !t || s18.virtual && s18.params.virtual.enabled) return;
    s18.recalcSlides();
    const i = [];
    s18.slides.forEach((r) => {
      const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
      i[n] = r;
    }), s18.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }), i.forEach((r) => {
      t.append(r);
    }), s18.recalcSlides(), s18.slideTo(s18.realIndex, 0);
  }
  var Ac = { loopCreate: Oc, loopFix: kc, loopDestroy: Dc };
  function Lc(s18) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = true), t.style.cursor = "move", t.style.cursor = s18 ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = false;
    });
  }
  function zc() {
    const s18 = this;
    s18.params.watchOverflow && s18.isLocked || s18.params.cssMode || (s18.isElement && (s18.__preventObserver__ = true), s18[s18.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", s18.isElement && requestAnimationFrame(() => {
      s18.__preventObserver__ = false;
    }));
  }
  var Ic = { setGrabCursor: Lc, unsetGrabCursor: zc };
  function Rc(s18, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Jt() || i === nt()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s18);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function pa(s18, e, t) {
    const i = nt(), { params: r } = s18, n = r.edgeSwipeDetection, o = r.edgeSwipeThreshold;
    return n && (t <= o || t >= i.innerWidth - o) ? n === "prevent" ? (e.preventDefault(), true) : false : true;
  }
  function Fc(s18) {
    const e = this, t = Jt();
    let i = s18;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      pa(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: n, touches: o, enabled: a } = e;
    if (!a || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition) return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = i.target;
    if (n.touchEventsTarget === "wrapper" && !Hf(l, e.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || r.isTouched && r.isMoved) return;
    const u = !!n.noSwipingClass && n.noSwipingClass !== "", f = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && f && (l = f[0]);
    const c = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, h = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (h ? Rc(c, l) : l.closest(c))) {
      e.allowClick = true;
      return;
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
    o.currentX = i.pageX, o.currentY = i.pageY;
    const d = o.currentX, p = o.currentY;
    if (!pa(e, i, d)) return;
    Object.assign(r, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), o.startX = d, o.startY = p, r.touchStartTime = Qs(), e.allowClick = true, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = false);
    let m = true;
    l.matches(r.focusableElements) && (m = false, l.nodeName === "SELECT" && (r.isTouched = false)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== l && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !l.matches(r.focusableElements)) && t.activeElement.blur();
    const g = m && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || g) && !l.isContentEditable && i.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
  }
  function Nc(s18) {
    const e = Jt(), t = this, i = t.touchEventsData, { params: r, touches: n, rtlTranslate: o, enabled: a } = t;
    if (!a || !r.simulateTouch && s18.pointerType === "mouse") return;
    let l = s18;
    if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId)) return;
    let u;
    if (l.type === "touchmove") {
      if (u = [...l.changedTouches].find((T) => T.identifier === i.touchId), !u || u.identifier !== i.touchId) return;
    } else u = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const f = u.pageX, c = u.pageY;
    if (l.preventedByNestedSwiper) {
      n.startX = f, n.startY = c;
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = false), i.isTouched && (Object.assign(n, { startX: f, startY: c, currentX: f, currentY: c }), i.touchStartTime = Qs());
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop) if (t.isVertical()) {
      if (c < n.startY && t.translate <= t.maxTranslate() || c > n.startY && t.translate >= t.minTranslate()) {
        i.isTouched = false, i.isMoved = false;
        return;
      }
    } else {
      if (o && (f > n.startX && -t.translate <= t.maxTranslate() || f < n.startX && -t.translate >= t.minTranslate())) return;
      if (!o && (f < n.startX && t.translate <= t.maxTranslate() || f > n.startX && t.translate >= t.minTranslate())) return;
    }
    if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== l.target && l.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
      i.isMoved = true, t.allowClick = false;
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = f, n.currentY = c;
    const h = n.currentX - n.startX, d = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(h ** 2 + d ** 2) < t.params.threshold) return;
    if (typeof i.isScrolling > "u") {
      let T;
      t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = false : h * h + d * d >= 25 && (T = Math.atan2(Math.abs(d), Math.abs(h)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? T > r.touchAngle : 90 - T > r.touchAngle);
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", l), typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = true), i.isScrolling || l.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
      i.isTouched = false;
      return;
    }
    if (!i.startMoving) return;
    t.allowClick = false, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let p = t.isHorizontal() ? h : d, m = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (p = Math.abs(p) * (o ? 1 : -1), m = Math.abs(m) * (o ? 1 : -1)), n.diff = p, p *= r.touchRatio, o && (p = -p, m = -m);
    const g = t.touchesDirection;
    t.swipeDirection = p > 0 ? "prev" : "next", t.touchesDirection = m > 0 ? "prev" : "next";
    const _ = t.params.loop && !r.cssMode, v = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
      if (_ && v && t.loopFix({ direction: t.swipeDirection }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const T = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true, detail: { bySwiperTouchMove: true } });
        t.wrapperEl.dispatchEvent(T);
      }
      i.allowMomentumBounce = false, r.grabCursor && (t.allowSlideNext === true || t.allowSlidePrev === true) && t.setGrabCursor(true), t.emit("sliderFirstMove", l);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), r._loopSwapReset !== false && i.isMoved && i.allowThresholdMove && g !== t.touchesDirection && _ && v && Math.abs(p) >= 1) {
      Object.assign(n, { startX: f, startY: c, currentX: f, currentY: c, startTranslate: i.currentTranslate }), i.loopSwapReset = true, i.startTranslate = i.currentTranslate;
      return;
    }
    t.emit("sliderMove", l), i.isMoved = true, i.currentTranslate = p + i.startTranslate;
    let S = true, y = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (y = 0), p > 0 ? (_ && v && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({ direction: "prev", setTranslate: true, activeSlideIndex: 0 }), i.currentTranslate > t.minTranslate() && (S = false, r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + p) ** y))) : p < 0 && (_ && v && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({ direction: "next", setTranslate: true, activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))) }), i.currentTranslate < t.maxTranslate() && (S = false, r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - p) ** y))), S && (l.preventedByNestedSwiper = true), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), r.threshold > 0) if (Math.abs(p) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = true, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
  }
  function Bc(s18) {
    const e = this, t = e.touchEventsData;
    let i = s18;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (r = [...i.changedTouches].find((T) => T.identifier === t.touchId), !r || r.identifier !== t.touchId) return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      r = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView))) return;
    t.pointerId = null, t.touchId = null;
    const { params: o, touches: a, rtlTranslate: l, slidesGrid: u, enabled: f } = e;
    if (!f || !o.simulateTouch && i.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = false, !t.isTouched) {
      t.isMoved && o.grabCursor && e.setGrabCursor(false), t.isMoved = false, t.startMoving = false;
      return;
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === true || e.allowSlidePrev === true) && e.setGrabCursor(false);
    const c = Qs(), h = c - t.touchStartTime;
    if (e.allowClick) {
      const T = i.path || i.composedPath && i.composedPath();
      e.updateClickedSlide(T && T[0] || i.target, T), e.emit("tap click", i), h < 300 && c - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
    }
    if (t.lastClickTime = Qs(), Xl(() => {
      e.destroyed || (e.allowClick = true);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = false, t.isMoved = false, t.startMoving = false;
      return;
    }
    t.isTouched = false, t.isMoved = false, t.startMoving = false;
    let d;
    if (o.followFinger ? d = l ? e.translate : -e.translate : d = -t.currentTranslate, o.cssMode) return;
    if (o.freeMode && o.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: d });
      return;
    }
    const p = d >= -e.maxTranslate() && !e.params.loop;
    let m = 0, g = e.slidesSizesGrid[0];
    for (let T = 0; T < u.length; T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
      const E = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[T + E] < "u" ? (p || d >= u[T] && d < u[T + E]) && (m = T, g = u[T + E] - u[T]) : (p || d >= u[T]) && (m = T, g = u[u.length - 1] - u[u.length - 2]);
    }
    let _ = null, v = null;
    o.rewind && (e.isBeginning ? v = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (_ = 0));
    const S = (d - u[m]) / g, y = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (S >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? _ : m + y) : e.slideTo(m)), e.swipeDirection === "prev" && (S > 1 - o.longSwipesRatio ? e.slideTo(m + y) : v !== null && S < 0 && Math.abs(S) > o.longSwipesRatio ? e.slideTo(v) : e.slideTo(m));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(m + y) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(_ !== null ? _ : m + y), e.swipeDirection === "prev" && e.slideTo(v !== null ? v : m));
    }
  }
  function ma() {
    const s18 = this, { params: e, el: t } = s18;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && s18.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = s18, o = s18.virtual && s18.params.virtual.enabled;
    s18.allowSlideNext = true, s18.allowSlidePrev = true, s18.updateSize(), s18.updateSlides(), s18.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && s18.isEnd && !s18.isBeginning && !s18.params.centeredSlides && !a ? s18.slideTo(s18.slides.length - 1, 0, false, true) : s18.params.loop && !o ? s18.slideToLoop(s18.realIndex, 0, false, true) : s18.slideTo(s18.activeIndex, 0, false, true), s18.autoplay && s18.autoplay.running && s18.autoplay.paused && (clearTimeout(s18.autoplay.resizeTimeout), s18.autoplay.resizeTimeout = setTimeout(() => {
      s18.autoplay && s18.autoplay.running && s18.autoplay.paused && s18.autoplay.resume();
    }, 500)), s18.allowSlidePrev = r, s18.allowSlideNext = i, s18.params.watchOverflow && n !== s18.snapGrid && s18.checkOverflow();
  }
  function Vc(s18) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && s18.preventDefault(), e.params.preventClicksPropagation && e.animating && (s18.stopPropagation(), s18.stopImmediatePropagation())));
  }
  function Gc() {
    const s18 = this, { wrapperEl: e, rtlTranslate: t, enabled: i } = s18;
    if (!i) return;
    s18.previousTranslate = s18.translate, s18.isHorizontal() ? s18.translate = -e.scrollLeft : s18.translate = -e.scrollTop, s18.translate === 0 && (s18.translate = 0), s18.updateActiveIndex(), s18.updateSlidesClasses();
    let r;
    const n = s18.maxTranslate() - s18.minTranslate();
    n === 0 ? r = 0 : r = (s18.translate - s18.minTranslate()) / n, r !== s18.progress && s18.updateProgress(t ? -s18.translate : s18.translate), s18.emit("setTranslate", s18.translate, false);
  }
  function Yc(s18) {
    const e = this;
    Ns(e, s18.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function Wc() {
    const s18 = this;
    s18.documentTouchHandlerProceeded || (s18.documentTouchHandlerProceeded = true, s18.params.touchReleaseOnEdges && (s18.el.style.touchAction = "auto"));
  }
  var Ql = (s18, e) => {
    const t = Jt(), { params: i, el: r, wrapperEl: n, device: o } = s18, a = !!i.nested, l = e === "on" ? "addEventListener" : "removeEventListener", u = e;
    !r || typeof r == "string" || (t[l]("touchstart", s18.onDocumentTouchStart, { passive: false, capture: a }), r[l]("touchstart", s18.onTouchStart, { passive: false }), r[l]("pointerdown", s18.onTouchStart, { passive: false }), t[l]("touchmove", s18.onTouchMove, { passive: false, capture: a }), t[l]("pointermove", s18.onTouchMove, { passive: false, capture: a }), t[l]("touchend", s18.onTouchEnd, { passive: true }), t[l]("pointerup", s18.onTouchEnd, { passive: true }), t[l]("pointercancel", s18.onTouchEnd, { passive: true }), t[l]("touchcancel", s18.onTouchEnd, { passive: true }), t[l]("pointerout", s18.onTouchEnd, { passive: true }), t[l]("pointerleave", s18.onTouchEnd, { passive: true }), t[l]("contextmenu", s18.onTouchEnd, { passive: true }), (i.preventClicks || i.preventClicksPropagation) && r[l]("click", s18.onClick, true), i.cssMode && n[l]("scroll", s18.onScroll), i.updateOnWindowResize ? s18[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ma, true) : s18[u]("observerUpdate", ma, true), r[l]("load", s18.onLoad, { capture: true }));
  };
  function Hc() {
    const s18 = this, { params: e } = s18;
    s18.onTouchStart = Fc.bind(s18), s18.onTouchMove = Nc.bind(s18), s18.onTouchEnd = Bc.bind(s18), s18.onDocumentTouchStart = Wc.bind(s18), e.cssMode && (s18.onScroll = Gc.bind(s18)), s18.onClick = Vc.bind(s18), s18.onLoad = Yc.bind(s18), Ql(s18, "on");
  }
  function Xc() {
    Ql(this, "off");
  }
  var $c = { attachEvents: Hc, detachEvents: Xc };
  var ga = (s18, e) => s18.grid && e.grid && e.grid.rows > 1;
  function qc() {
    const s18 = this, { realIndex: e, initialized: t, params: i, el: r } = s18, n = i.breakpoints;
    if (!n || n && Object.keys(n).length === 0) return;
    const o = Jt(), a = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", l = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? s18.el : o.querySelector(i.breakpointsBase), u = s18.getBreakpoint(n, a, l);
    if (!u || s18.currentBreakpoint === u) return;
    const c = (u in n ? n[u] : void 0) || s18.originalParams, h = ga(s18, i), d = ga(s18, c), p = s18.params.grabCursor, m = c.grabCursor, g = i.enabled;
    h && !d ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), s18.emitContainerClasses()) : !h && d && (r.classList.add(`${i.containerModifierClass}grid`), (c.grid.fill && c.grid.fill === "column" || !c.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`), s18.emitContainerClasses()), p && !m ? s18.unsetGrabCursor() : !p && m && s18.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((E) => {
      if (typeof c[E] > "u") return;
      const x = i[E] && i[E].enabled, M = c[E] && c[E].enabled;
      x && !M && s18[E].disable(), !x && M && s18[E].enable();
    });
    const _ = c.direction && c.direction !== i.direction, v = i.loop && (c.slidesPerView !== i.slidesPerView || _), S = i.loop;
    _ && t && s18.changeDirection(), yt(s18.params, c);
    const y = s18.params.enabled, T = s18.params.loop;
    Object.assign(s18, { allowTouchMove: s18.params.allowTouchMove, allowSlideNext: s18.params.allowSlideNext, allowSlidePrev: s18.params.allowSlidePrev }), g && !y ? s18.disable() : !g && y && s18.enable(), s18.currentBreakpoint = u, s18.emit("_beforeBreakpoint", c), t && (v ? (s18.loopDestroy(), s18.loopCreate(e), s18.updateSlides()) : !S && T ? (s18.loopCreate(e), s18.updateSlides()) : S && !T && s18.loopDestroy()), s18.emit("breakpoint", c);
  }
  function Uc(s18, e, t) {
    if (e === void 0 && (e = "window"), !s18 || e === "container" && !t) return;
    let i = false;
    const r = nt(), n = e === "window" ? r.innerHeight : t.clientHeight, o = Object.keys(s18).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: n * l, point: a };
      }
      return { value: a, point: a };
    });
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const { point: l, value: u } = o[a];
      e === "window" ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var jc = { setBreakpoint: qc, getBreakpoint: Uc };
  function Kc(s18, e) {
    const t = [];
    return s18.forEach((i) => {
      typeof i == "object" ? Object.keys(i).forEach((r) => {
        i[r] && t.push(e + r);
      }) : typeof i == "string" && t.push(e + i);
    }), t;
  }
  function Qc() {
    const s18 = this, { classNames: e, params: t, rtl: i, el: r, device: n } = s18, o = Kc(["initialized", t.direction, { "free-mode": s18.params.freeMode && t.freeMode.enabled }, { autoheight: t.autoHeight }, { rtl: i }, { grid: t.grid && t.grid.rows > 1 }, { "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column" }, { android: n.android }, { ios: n.ios }, { "css-mode": t.cssMode }, { centered: t.cssMode && t.centeredSlides }, { "watch-progress": t.watchSlidesProgress }], t.containerModifierClass);
    e.push(...o), r.classList.add(...e), s18.emitContainerClasses();
  }
  function Zc() {
    const s18 = this, { el: e, classNames: t } = s18;
    !e || typeof e == "string" || (e.classList.remove(...t), s18.emitContainerClasses());
  }
  var Jc = { addClasses: Qc, removeClasses: Zc };
  function ed() {
    const s18 = this, { isLocked: e, params: t } = s18, { slidesOffsetBefore: i } = t;
    if (i) {
      const r = s18.slides.length - 1, n = s18.slidesGrid[r] + s18.slidesSizesGrid[r] + i * 2;
      s18.isLocked = s18.size > n;
    } else s18.isLocked = s18.snapGrid.length === 1;
    t.allowSlideNext === true && (s18.allowSlideNext = !s18.isLocked), t.allowSlidePrev === true && (s18.allowSlidePrev = !s18.isLocked), e && e !== s18.isLocked && (s18.isEnd = false), e !== s18.isLocked && s18.emit(s18.isLocked ? "lock" : "unlock");
  }
  var td = { checkOverflow: ed };
  var _a = { init: true, direction: "horizontal", oneWayMovement: false, swiperElementNodeName: "SWIPER-CONTAINER", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, eventsPrefix: "swiper", enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 5, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loop: false, loopAddBlankSlides: true, loopAdditionalSlides: 0, loopPreventsSliding: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-blank", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideFullyVisibleClass: "swiper-slide-fully-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", lazyPreloadPrevNext: 0, runCallbacksOnInit: true, _emitClasses: false };
  function id(s18, e) {
    return function(i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0], n = i[r];
      if (typeof n != "object" || n === null) {
        yt(e, i);
        return;
      }
      if (s18[r] === true && (s18[r] = { enabled: true }), r === "navigation" && s18[r] && s18[r].enabled && !s18[r].prevEl && !s18[r].nextEl && (s18[r].auto = true), ["pagination", "scrollbar"].indexOf(r) >= 0 && s18[r] && s18[r].enabled && !s18[r].el && (s18[r].auto = true), !(r in s18 && "enabled" in n)) {
        yt(e, i);
        return;
      }
      typeof s18[r] == "object" && !("enabled" in s18[r]) && (s18[r].enabled = true), s18[r] || (s18[r] = { enabled: false }), yt(e, i);
    };
  }
  var En = { eventsEmitter: Jf, update: fc, translate: gc, transition: yc, slide: Cc, loop: Ac, grabCursor: Ic, events: $c, breakpoints: jc, checkOverflow: td, classes: Jc };
  var Pn = {};
  var Wt = class _Wt {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
      r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e, t] = r, t || (t = {}), t = yt({}, t), e && !t.el && (t.el = e);
      const o = Jt();
      if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
        const f = [];
        return o.querySelectorAll(t.el).forEach((c) => {
          const h = yt({}, t, { el: c });
          f.push(new _Wt(h));
        }), f;
      }
      const a = this;
      a.__swiper__ = true, a.support = ql(), a.device = Ul({ userAgent: t.userAgent }), a.browser = jl(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((f) => {
        f({ params: t, swiper: a, extendParams: id(t, l), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a) });
      });
      const u = yt({}, _a, l);
      return a.params = yt({}, u, Pn, t), a.originalParams = yt({}, a.params), a.passedParams = yt({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((f) => {
        a.on(f, a.params.on[f]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, { enabled: a.params.enabled, el: e, classNames: [], slides: [], slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal() {
        return a.params.direction === "horizontal";
      }, isVertical() {
        return a.params.direction === "vertical";
      }, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      }, allowSlideNext: a.params.allowSlideNext, allowSlidePrev: a.params.allowSlidePrev, touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: a.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, pointerId: null, touchId: null }, allowClick: true, allowTouchMove: a.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), a.emit("_swiper"), a.params.init && a.init(), a;
    }
    getDirectionLabel(e) {
      return this.isHorizontal() ? e : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this, r = fi(t, `.${i.slideClass}, swiper-slide`), n = ca(r[0]);
      return ca(e) - n;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
    }
    getSlideIndexWhenGrid(e) {
      return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))), e;
    }
    recalcSlides() {
      const e = this, { slidesEl: t, params: i } = e;
      e.slides = fi(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = true, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = false, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(), o = (i.maxTranslate() - r) * e + r;
      i.translateTo(o, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = false);
      const i = this, { params: r, slides: n, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: u } = i;
      let f = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let c = n[u] ? Math.ceil(n[u].swiperSlideSize) : 0, h;
        for (let d = u + 1; d < n.length; d += 1) n[d] && !h && (c += Math.ceil(n[d].swiperSlideSize), f += 1, c > l && (h = true));
        for (let d = u - 1; d >= 0; d -= 1) n[d] && !h && (c += n[d].swiperSlideSize, f += 1, c > l && (h = true));
      } else if (e === "current") for (let c = u + 1; c < n.length; c += 1) (t ? o[c] + a[c] - o[u] < l : o[c] - o[u] < l) && (f += 1);
      else for (let c = u - 1; c >= 0; c -= 1) o[u] - o[c] < l && (f += 1);
      return f;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Ns(e, o);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function r() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode) r(), i.autoHeight && e.updateAutoHeight();
      else {
        if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
          const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(o.length - 1, 0, false, true);
        } else n = e.slideTo(e.activeIndex, 0, false, true);
        n || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = true);
      const i = this, r = i.params.direction;
      return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((n) => {
        e === "vertical" ? n.style.width = "" : n.style.height = "";
      }), i.emit("changeDirection"), t && i.update()), i;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return true;
      let i = e || t.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i) return false;
      i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = true);
      const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : fi(i, r())[0];
      return !o && t.params.createElements && (o = Zn("div", t.params.wrapperClass), i.append(o), fi(i, `.${t.params.slideClass}`).forEach((a) => {
        o.append(a);
      })), Object.assign(t, { el: i, wrapperEl: o, slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o, hostEl: t.isElement ? i.parentNode.host : i, mounted: true, rtl: i.dir.toLowerCase() === "rtl" || Mi(i, "direction") === "rtl", rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Mi(i, "direction") === "rtl"), wrongRTL: Mi(o, "display") === "-webkit-box" }), true;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === false) return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, false, true) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, false, true), t.params.loop && t.loopCreate(void 0, true), t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((n) => {
        n.complete ? Ns(t, n) : n.addEventListener("load", (o) => {
          Ns(t, o.target);
        });
      }), Jn(t), t.initialized = true, Jn(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = true), t === void 0 && (t = true);
      const i = this, { params: r, el: n, wrapperEl: o, slides: a } = i;
      return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = false, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), n && typeof n != "string" && n.removeAttribute("style"), o && o.removeAttribute("style"), a && a.length && a.forEach((l) => {
        l.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((l) => {
        i.off(l);
      }), e !== false && (i.el && typeof i.el != "string" && (i.el.swiper = null), Bf(i)), i.destroyed = true), null;
    }
    static extendDefaults(e) {
      yt(Pn, e);
    }
    static get extendedDefaults() {
      return Pn;
    }
    static get defaults() {
      return _a;
    }
    static installModule(e) {
      _Wt.prototype.__modules__ || (_Wt.prototype.__modules__ = []);
      const t = _Wt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => _Wt.installModule(t)), _Wt) : (_Wt.installModule(e), _Wt);
    }
  };
  Object.keys(En).forEach((s18) => {
    Object.keys(En[s18]).forEach((e) => {
      Wt.prototype[e] = En[s18][e];
    });
  });
  Wt.use([Qf, Zf]);
  function dd(s18) {
    let { swiper: e, extendParams: t, on: i, emit: r, params: n } = s18;
    e.autoplay = { running: false, paused: false, timeLeft: 0 }, t({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: false, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } });
    let o, a, l = n && n.autoplay ? n.autoplay.delay : 3e3, u = n && n.autoplay ? n.autoplay.delay : 3e3, f, c = (/* @__PURE__ */ new Date()).getTime(), h, d, p, m, g, _, v;
    function S(D) {
      !e || e.destroyed || !e.wrapperEl || D.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", S), !(v || D.detail && D.detail.bySwiperTouchMove) && b());
    }
    const y = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? h = true : h && (u = f, h = false);
      const D = e.autoplay.paused ? f : c + u - (/* @__PURE__ */ new Date()).getTime();
      e.autoplay.timeLeft = D, r("autoplayTimeLeft", D, D / l), a = requestAnimationFrame(() => {
        y();
      });
    }, T = () => {
      let D;
      return e.virtual && e.params.virtual.enabled ? D = e.slides.find((w) => w.classList.contains("swiper-slide-active")) : D = e.slides[e.activeIndex], D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0;
    }, E = (D) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(a), y();
      let Y = typeof D > "u" ? e.params.autoplay.delay : D;
      l = e.params.autoplay.delay, u = e.params.autoplay.delay;
      const w = T();
      !Number.isNaN(w) && w > 0 && typeof D > "u" && (Y = w, l = w, u = w), f = Y;
      const J = e.params.speed, Se = () => {
        !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(J, true, true), r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, J, true, true), r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(J, true, true), r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, J, true, true), r("autoplay")), e.params.cssMode && (c = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          E();
        })));
      };
      return Y > 0 ? (clearTimeout(o), o = setTimeout(() => {
        Se();
      }, Y)) : requestAnimationFrame(() => {
        Se();
      }), Y;
    }, x = () => {
      c = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = true, E(), r("autoplayStart");
    }, M = () => {
      e.autoplay.running = false, clearTimeout(o), cancelAnimationFrame(a), r("autoplayStop");
    }, C = (D, Y) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), D || (_ = true);
      const w = () => {
        r("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", S) : b();
      };
      if (e.autoplay.paused = true, Y) {
        g && (f = e.params.autoplay.delay), g = false, w();
        return;
      }
      f = (f || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - c), !(e.isEnd && f < 0 && !e.params.loop) && (f < 0 && (f = 0), w());
    }, b = () => {
      e.isEnd && f < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (c = (/* @__PURE__ */ new Date()).getTime(), _ ? (_ = false, E(f)) : E(), e.autoplay.paused = false, r("autoplayResume"));
    }, k = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const D = Jt();
      D.visibilityState === "hidden" && (_ = true, C(true)), D.visibilityState === "visible" && b();
    }, O = (D) => {
      D.pointerType === "mouse" && (_ = true, v = true, !(e.animating || e.autoplay.paused) && C(true));
    }, R = (D) => {
      D.pointerType === "mouse" && (v = false, e.autoplay.paused && b());
    }, V = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", O), e.el.addEventListener("pointerleave", R));
    }, G = () => {
      e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", O), e.el.removeEventListener("pointerleave", R));
    }, A = () => {
      Jt().addEventListener("visibilitychange", k);
    }, z = () => {
      Jt().removeEventListener("visibilitychange", k);
    };
    i("init", () => {
      e.params.autoplay.enabled && (V(), A(), x());
    }), i("destroy", () => {
      G(), z(), e.autoplay.running && M();
    }), i("_freeModeStaticRelease", () => {
      (p || _) && b();
    }), i("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? M() : C(true, true);
    }), i("beforeTransitionStart", (D, Y, w) => {
      e.destroyed || !e.autoplay.running || (w || !e.params.autoplay.disableOnInteraction ? C(true, true) : M());
    }), i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          M();
          return;
        }
        d = true, p = false, _ = false, m = setTimeout(() => {
          _ = true, p = true, C(true);
        }, 200);
      }
    }), i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !d)) {
        if (clearTimeout(m), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
          p = false, d = false;
          return;
        }
        p && e.params.cssMode && b(), p = false, d = false;
      }
    }), i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (g = true);
    }), Object.assign(e.autoplay, { start: x, stop: M, pause: C, resume: b });
  }
  var va = "1.3.23";
  function Zl(s18, e, t) {
    return Math.max(s18, Math.min(e, t));
  }
  function rd(s18, e, t) {
    return (1 - t) * s18 + t * e;
  }
  function sd(s18, e, t, i) {
    return rd(s18, e, 1 - Math.exp(-t * i));
  }
  function nd(s18, e) {
    return (s18 % e + e) % e;
  }
  var od = class {
    constructor() {
      F(this, "isRunning", false);
      F(this, "value", 0);
      F(this, "from", 0);
      F(this, "to", 0);
      F(this, "currentTime", 0);
      F(this, "lerp");
      F(this, "duration");
      F(this, "easing");
      F(this, "onUpdate");
    }
    advance(s18) {
      var t;
      if (!this.isRunning) return;
      let e = false;
      if (this.duration && this.easing) {
        this.currentTime += s18;
        const i = Zl(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else this.lerp ? (this.value = sd(this.value, this.to, this.lerp * 60, s18), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, e = true)) : (this.value = this.to, e = true);
      e && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(s18, e, { lerp: t, duration: i, easing: r, onStart: n, onUpdate: o }) {
      this.from = this.value = s18, this.to = e, this.lerp = t, this.duration = i, this.easing = r, this.currentTime = 0, this.isRunning = true, n == null || n(), this.onUpdate = o;
    }
  };
  function ad(s18, e) {
    let t;
    return function(...i) {
      clearTimeout(t), t = setTimeout(() => {
        t = void 0, s18.apply(this, i);
      }, e);
    };
  }
  var ld = class {
    constructor(s18, e, { autoResize: t = true, debounce: i = 250 } = {}) {
      F(this, "width", 0);
      F(this, "height", 0);
      F(this, "scrollHeight", 0);
      F(this, "scrollWidth", 0);
      F(this, "debouncedResize");
      F(this, "wrapperResizeObserver");
      F(this, "contentResizeObserver");
      F(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      F(this, "onWrapperResize", () => {
        this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      });
      F(this, "onContentResize", () => {
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      });
      this.wrapper = s18, this.content = e, t && (this.debouncedResize = ad(this.resize, i), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      var s18, e;
      (s18 = this.wrapperResizeObserver) == null || s18.disconnect(), (e = this.contentResizeObserver) == null || e.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Jl = class {
    constructor() {
      F(this, "events", {});
    }
    emit(s18, ...e) {
      var i;
      const t = this.events[s18] || [];
      for (let r = 0, n = t.length; r < n; r++) (i = t[r]) == null || i.call(t, ...e);
    }
    on(s18, e) {
      return this.events[s18] ? this.events[s18].push(e) : this.events[s18] = [e], () => {
        var t;
        this.events[s18] = (t = this.events[s18]) == null ? void 0 : t.filter((i) => e !== i);
      };
    }
    off(s18, e) {
      var t;
      this.events[s18] = (t = this.events[s18]) == null ? void 0 : t.filter((i) => e !== i);
    }
    destroy() {
      this.events = {};
    }
  };
  var ud = 100 / 6;
  var yi = { passive: false };
  function wa(s18, e) {
    return s18 === 1 ? ud : s18 === 2 ? e : 1;
  }
  var fd = class {
    constructor(s18, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      F(this, "touchStart", { x: 0, y: 0 });
      F(this, "lastDelta", { x: 0, y: 0 });
      F(this, "window", { width: 0, height: 0 });
      F(this, "emitter", new Jl());
      F(this, "onTouchStart", (s19) => {
        const { clientX: e2, clientY: t } = s19.targetTouches ? s19.targetTouches[0] : s19;
        this.touchStart.x = e2, this.touchStart.y = t, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s19 });
      });
      F(this, "onTouchMove", (s19) => {
        const { clientX: e2, clientY: t } = s19.targetTouches ? s19.targetTouches[0] : s19, i = -(e2 - this.touchStart.x) * this.options.touchMultiplier, r = -(t - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = e2, this.touchStart.y = t, this.lastDelta = { x: i, y: r }, this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: s19 });
      });
      F(this, "onTouchEnd", (s19) => {
        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: s19 });
      });
      F(this, "onWheel", (s19) => {
        let { deltaX: e2, deltaY: t, deltaMode: i } = s19;
        const r = wa(i, this.window.width), n = wa(i, this.window.height);
        e2 *= r, t *= n, e2 *= this.options.wheelMultiplier, t *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: e2, deltaY: t, event: s19 });
      });
      F(this, "onWindowResize", () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      });
      this.element = s18, this.options = e, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, yi), this.element.addEventListener("touchstart", this.onTouchStart, yi), this.element.addEventListener("touchmove", this.onTouchMove, yi), this.element.addEventListener("touchend", this.onTouchEnd, yi);
    }
    on(s18, e) {
      return this.emitter.on(s18, e);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, yi), this.element.removeEventListener("touchstart", this.onTouchStart, yi), this.element.removeEventListener("touchmove", this.onTouchMove, yi), this.element.removeEventListener("touchend", this.onTouchEnd, yi);
    }
  };
  var ya = (s18) => Math.min(1, 1.001 - 2 ** (-10 * s18));
  var hd = class {
    constructor({ wrapper: s18 = window, content: e = document.documentElement, eventsTarget: t = s18, smoothWheel: i = true, syncTouch: r = false, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: u = 0.1, infinite: f = false, orientation: c = "vertical", gestureOrientation: h = c === "horizontal" ? "both" : "vertical", touchMultiplier: d = 1, wheelMultiplier: p = 1, autoResize: m = true, prevent: g, virtualScroll: _, overscroll: v = true, autoRaf: S = false, anchors: y = false, autoToggle: T = false, allowNestedScroll: E = false, __experimental__naiveDimensions: x = false, naiveDimensions: M = x, stopInertiaOnNavigate: C = false } = {}) {
      F(this, "_isScrolling", false);
      F(this, "_isStopped", false);
      F(this, "_isLocked", false);
      F(this, "_preventNextNativeScrollEvent", false);
      F(this, "_resetVelocityTimeout", null);
      F(this, "_rafId", null);
      F(this, "isTouching");
      F(this, "time", 0);
      F(this, "userData", {});
      F(this, "lastVelocity", 0);
      F(this, "velocity", 0);
      F(this, "direction", 0);
      F(this, "options");
      F(this, "targetScroll");
      F(this, "animatedScroll");
      F(this, "animate", new od());
      F(this, "emitter", new Jl());
      F(this, "dimensions");
      F(this, "virtualScroll");
      F(this, "onScrollEnd", (s19) => {
        s19 instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === false) && s19.stopPropagation();
      });
      F(this, "dispatchScrollendEvent", () => {
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", { bubbles: this.options.wrapper === window, detail: { lenisScrollEnd: true } }));
      });
      F(this, "onTransitionEnd", (s19) => {
        var e2;
        (e2 = s19.propertyName) != null && e2.includes("overflow") && s19.target === this.rootElement && this.checkOverflow();
      });
      F(this, "onClick", (s19) => {
        const e2 = s19.composedPath().filter((i2) => i2 instanceof HTMLAnchorElement && i2.href).map((i2) => new URL(i2.href)), t2 = new URL(window.location.href);
        if (this.options.anchors) {
          const i2 = e2.find((r2) => t2.host === r2.host && t2.pathname === r2.pathname && r2.hash);
          if (i2) {
            const r2 = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, n2 = `#${i2.hash.split("#")[1]}`;
            this.scrollTo(n2, r2);
            return;
          }
        }
        if (this.options.stopInertiaOnNavigate && e2.some((i2) => t2.host === i2.host && t2.pathname !== i2.pathname)) {
          this.reset();
          return;
        }
      });
      F(this, "onPointerDown", (s19) => {
        s19.button === 1 && this.reset();
      });
      F(this, "onVirtualScroll", (s19) => {
        if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s19) === false) return;
        const { deltaX: e2, deltaY: t2, event: i2 } = s19;
        if (this.emitter.emit("virtual-scroll", { deltaX: e2, deltaY: t2, event: i2 }), i2.ctrlKey || i2.lenisStopPropagation) return;
        const r2 = i2.type.includes("touch"), n2 = i2.type.includes("wheel");
        this.isTouching = i2.type === "touchstart" || i2.type === "touchmove";
        const o2 = e2 === 0 && t2 === 0;
        if (this.options.syncTouch && r2 && i2.type === "touchstart" && o2 && !this.isStopped && !this.isLocked) {
          this.reset();
          return;
        }
        const a2 = this.options.gestureOrientation === "vertical" && t2 === 0 || this.options.gestureOrientation === "horizontal" && e2 === 0;
        if (o2 || a2) return;
        let l2 = i2.composedPath();
        l2 = l2.slice(0, l2.indexOf(this.rootElement));
        const u2 = this.options.prevent, f2 = Math.abs(e2) >= Math.abs(t2) ? "horizontal" : "vertical";
        if (l2.find((p2) => {
          var m2, g2, _2, v2, S2;
          return p2 instanceof HTMLElement && (typeof u2 == "function" && (u2 == null ? void 0 : u2(p2)) || ((m2 = p2.hasAttribute) == null ? void 0 : m2.call(p2, "data-lenis-prevent")) || f2 === "vertical" && ((g2 = p2.hasAttribute) == null ? void 0 : g2.call(p2, "data-lenis-prevent-vertical")) || f2 === "horizontal" && ((_2 = p2.hasAttribute) == null ? void 0 : _2.call(p2, "data-lenis-prevent-horizontal")) || r2 && ((v2 = p2.hasAttribute) == null ? void 0 : v2.call(p2, "data-lenis-prevent-touch")) || n2 && ((S2 = p2.hasAttribute) == null ? void 0 : S2.call(p2, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(p2, { deltaX: e2, deltaY: t2 }));
        })) return;
        if (this.isStopped || this.isLocked) {
          i2.cancelable && i2.preventDefault();
          return;
        }
        if (!(this.options.syncTouch && r2 || this.options.smoothWheel && n2)) {
          this.isScrolling = "native", this.animate.stop(), i2.lenisStopPropagation = true;
          return;
        }
        let c2 = t2;
        this.options.gestureOrientation === "both" ? c2 = Math.abs(t2) > Math.abs(e2) ? t2 : e2 : this.options.gestureOrientation === "horizontal" && (c2 = e2), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && t2 > 0 || this.animatedScroll === this.limit && t2 < 0)) && (i2.lenisStopPropagation = true), i2.cancelable && i2.preventDefault();
        const h2 = r2 && this.options.syncTouch, d2 = r2 && i2.type === "touchend";
        d2 && (c2 = Math.sign(c2) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + c2, { programmatic: false, ...h2 ? { lerp: d2 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing } });
      });
      F(this, "onNativeScroll", () => {
        if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
          this._preventNextNativeScrollEvent = false;
          return;
        }
        if (this.isScrolling === false || this.isScrolling === "native") {
          const s19 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - s19, this.direction = Math.sign(this.animatedScroll - s19), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = false, this.emit();
          }, 400));
        }
      });
      F(this, "raf", (s19) => {
        const e2 = s19 - (this.time || s19);
        this.time = s19, this.animate.advance(e2 * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
      });
      window.lenisVersion = va, window.lenis || (window.lenis = {}), window.lenis.version = va, c === "horizontal" && (window.lenis.horizontal = true), r === true && (window.lenis.touch = true), (!s18 || s18 === document.documentElement) && (s18 = window), typeof a == "number" && typeof l != "function" ? l = ya : typeof l == "function" && typeof a != "number" && (a = 1), this.options = { wrapper: s18, content: e, eventsTarget: t, smoothWheel: i, syncTouch: r, syncTouchLerp: n, touchInertiaExponent: o, duration: a, easing: l, lerp: u, infinite: f, gestureOrientation: h, orientation: c, touchMultiplier: d, wheelMultiplier: p, autoResize: m, prevent: g, virtualScroll: _, overscroll: v, autoRaf: S, anchors: y, autoToggle: T, allowNestedScroll: E, naiveDimensions: M, stopInertiaOnNavigate: C }, this.dimensions = new ld(s18, e, { autoResize: m }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new fd(t, { touchMultiplier: d, wheelMultiplier: p }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
    }
    on(s18, e) {
      return this.emitter.on(s18, e);
    }
    off(s18, e) {
      return this.emitter.off(s18, e);
    }
    get overflow() {
      const s18 = this.isHorizontal ? "overflow-x" : "overflow-y";
      return getComputedStyle(this.rootElement)[s18];
    }
    checkOverflow() {
      ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
    }
    setScroll(s18) {
      this.isHorizontal ? this.options.wrapper.scrollTo({ left: s18, behavior: "instant" }) : this.options.wrapper.scrollTo({ top: s18, behavior: "instant" });
    }
    resize() {
      this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.removeProperty("overflow");
          return;
        }
        this.internalStart();
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), this.isStopped = false, this.emit());
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.setProperty("overflow", "clip");
          return;
        }
        this.internalStop();
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), this.isStopped = true, this.emit());
    }
    scrollTo(s18, { offset: e = 0, immediate: t = false, lock: i = false, programmatic: r = true, lerp: n = r ? this.options.lerp : void 0, duration: o = r ? this.options.duration : void 0, easing: a = r ? this.options.easing : void 0, onStart: l, onComplete: u, force: f = false, userData: c } = {}) {
      if ((this.isStopped || this.isLocked) && !f) return;
      let h = s18, d = e;
      if (typeof h == "string" && ["top", "left", "start", "#"].includes(h)) h = 0;
      else if (typeof h == "string" && ["bottom", "right", "end"].includes(h)) h = this.limit;
      else {
        let p = null;
        if (typeof h == "string" ? (p = document.querySelector(h), p || (h === "#top" ? h = 0 : console.warn("Lenis: Target not found", h))) : h instanceof HTMLElement && (h != null && h.nodeType) && (p = h), p) {
          if (this.options.wrapper !== window) {
            const y = this.rootElement.getBoundingClientRect();
            d -= this.isHorizontal ? y.left : y.top;
          }
          const m = p.getBoundingClientRect(), g = getComputedStyle(p), _ = this.isHorizontal ? Number.parseFloat(g.scrollMarginLeft) : Number.parseFloat(g.scrollMarginTop), v = getComputedStyle(this.rootElement), S = this.isHorizontal ? Number.parseFloat(v.scrollPaddingLeft) : Number.parseFloat(v.scrollPaddingTop);
          h = (this.isHorizontal ? m.left : m.top) + this.animatedScroll - (Number.isNaN(_) ? 0 : _) - (Number.isNaN(S) ? 0 : S);
        }
      }
      if (typeof h == "number") {
        if (h += d, this.options.infinite) {
          if (r) {
            this.targetScroll = this.animatedScroll = this.scroll;
            const p = h - this.animatedScroll;
            p > this.limit / 2 ? h -= this.limit : p < -this.limit / 2 && (h += this.limit);
          }
        } else h = Zl(0, h, this.limit);
        if (h === this.targetScroll) {
          l == null || l(this), u == null || u(this);
          return;
        }
        if (this.userData = c ?? {}, t) {
          this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          return;
        }
        r || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = ya : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, { duration: o, easing: a, lerp: n, onStart: () => {
          i && (this.isLocked = true), this.isScrolling = "smooth", l == null || l(this);
        }, onUpdate: (p, m) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = p - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = p, this.setScroll(this.scroll), r && (this.targetScroll = p), m || this.emit(), m && (this.reset(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          }), this.preventNextNativeScrollEvent());
        } });
      }
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = true, requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = false;
      });
    }
    hasNestedScroll(s18, { deltaX: e, deltaY: t }) {
      const i = Date.now();
      s18._lenis || (s18._lenis = {});
      const r = s18._lenis;
      let n, o, a, l, u, f, c, h, d, p;
      if (i - (r.time ?? 0) > 2e3) {
        r.time = Date.now();
        const E = window.getComputedStyle(s18);
        if (r.computedStyle = E, n = ["auto", "overlay", "scroll"].includes(E.overflowX), o = ["auto", "overlay", "scroll"].includes(E.overflowY), u = ["auto"].includes(E.overscrollBehaviorX), f = ["auto"].includes(E.overscrollBehaviorY), r.hasOverflowX = n, r.hasOverflowY = o, !(n || o)) return false;
        c = s18.scrollWidth, h = s18.scrollHeight, d = s18.clientWidth, p = s18.clientHeight, a = c > d, l = h > p, r.isScrollableX = a, r.isScrollableY = l, r.scrollWidth = c, r.scrollHeight = h, r.clientWidth = d, r.clientHeight = p, r.hasOverscrollBehaviorX = u, r.hasOverscrollBehaviorY = f;
      } else a = r.isScrollableX, l = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, c = r.scrollWidth, h = r.scrollHeight, d = r.clientWidth, p = r.clientHeight, u = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
      if (!(n && a || o && l)) return false;
      const m = Math.abs(e) >= Math.abs(t) ? "horizontal" : "vertical";
      let g, _, v, S, y, T;
      if (m === "horizontal") g = Math.round(s18.scrollLeft), _ = c - d, v = e, S = n, y = a, T = u;
      else if (m === "vertical") g = Math.round(s18.scrollTop), _ = h - p, v = t, S = o, y = l, T = f;
      else return false;
      return !T && (g >= _ || g <= 0) ? true : (v > 0 ? g < _ : g > 0) && S && y;
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      const s18 = this.options.wrapper;
      return this.isHorizontal ? s18.scrollX ?? s18.scrollLeft : s18.scrollY ?? s18.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? nd(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(s18) {
      this._isScrolling !== s18 && (this._isScrolling = s18, this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(s18) {
      this._isStopped !== s18 && (this._isStopped = s18, this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(s18) {
      this._isLocked !== s18 && (this._isLocked = s18, this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    get className() {
      let s18 = "lenis";
      return this.options.autoToggle && (s18 += " lenis-autoToggle"), this.isStopped && (s18 += " lenis-stopped"), this.isLocked && (s18 += " lenis-locked"), this.isScrolling && (s18 += " lenis-scrolling"), this.isScrolling === "smooth" && (s18 += " lenis-smooth"), s18;
    }
    updateClassName() {
      this.cleanUpClassName(), this.className.split(" ").forEach((s18) => {
        this.rootElement.classList.add(s18);
      });
    }
    cleanUpClassName() {
      for (const s18 of Array.from(this.rootElement.classList)) (s18 === "lenis" || s18.startsWith("lenis-")) && this.rootElement.classList.remove(s18);
    }
  };

  // dist/assets/js/script.js
  _f.registerPlugin(K);
  (() => {
    function h() {
      const e = document.querySelectorAll(".fadein"), t = window.scrollY, n = window.innerHeight;
      e.forEach((o) => {
        const s18 = o.getBoundingClientRect().top + t;
        t > s18 - n + 150 ? o.classList.add("scrollin") : o.classList.remove("scrollin");
      });
    }
    window.addEventListener("scroll", h), window.addEventListener("load", h);
    function w() {
      const e = document.querySelectorAll(".fadein--view"), t = window.innerHeight * 0.66;
      e.forEach((n) => {
        n.getBoundingClientRect().top < t ? n.classList.add("scrollin--view") : n.classList.remove("scrollin--view");
      });
    }
    window.addEventListener("scroll", w), window.addEventListener("load", w);
    function E() {
      const e = document.querySelector(".js-menu-hambuger"), t = document.querySelector(".js-menu-close"), n = document.querySelector("body");
      e && e.addEventListener("click", function() {
        var o;
        (o = document.querySelector(".m-menu")) == null || o.classList.toggle("is-open"), n.classList.toggle("has-menu");
      }), t && t.addEventListener("click", function() {
        var o;
        (o = document.querySelector(".m-menu")) == null || o.classList.remove("is-open"), n.classList.remove("has-menu");
      });
    }
    function q2() {
      document.addEventListener("click", (e) => {
        var n;
        e.target.closest(".js-anchor") && ((n = document.querySelector(".m-menu")) == null || n.classList.remove("is-open"), document.body.classList.remove("has-menu"));
      });
    }
    function A() {
      const e = document.querySelector("header"), t = () => e ? e.offsetHeight : 0;
      if (document.querySelectorAll(".js-anchor").forEach((o) => {
        o.addEventListener("click", (s18) => {
          if (o.getAttribute("href").includes("#")) {
            const i = new URL(o.href), c = i.hash, u = document.querySelector(c);
            if (location.pathname === i.pathname && u) {
              s18.preventDefault();
              const l = u.getBoundingClientRect().top + window.pageYOffset - t();
              window.lenis ? window.lenis.scrollTo(u, { offset: -t(), duration: 1.2, easing: (d) => Math.min(1, 1.001 - Math.pow(2, -10 * d)) }) : window.scrollTo({ top: l, behavior: "smooth" });
            }
          }
        });
      }), window.location.hash) {
        const o = document.querySelector(window.location.hash);
        o && setTimeout(() => {
          const s18 = o.getBoundingClientRect().top + window.pageYOffset - t();
          window.lenis ? window.lenis.scrollTo(o, { offset: -t(), immediate: false }) : window.scrollTo({ top: s18, behavior: "smooth" });
        }, 300);
      }
    }
    function y() {
      document.querySelectorAll(".svg-repeat, .svg-repeat--reverse").forEach((e) => {
        const t = [], n = e.classList.contains("svg-repeat--reverse");
        e.querySelectorAll("textPath").forEach((o) => {
          const s18 = parseFloat(getComputedStyle(o.closest("svg")).getPropertyValue("--speed")) || 20, a = _f.fromTo(o, { attr: { startOffset: n ? "-100%" : "0%" } }, { attr: { startOffset: n ? "0%" : "-100%" }, duration: s18, ease: "none", repeat: -1, paused: true });
          t.push(a);
        }), K.create({ trigger: e, start: "top 120%", end: "bottom -20%", onEnter: () => {
          t.forEach((o) => o.play());
        }, onEnterBack: () => {
          t.forEach((o) => o.play());
        }, onLeave: () => {
          t.forEach((o) => o.pause());
        }, onLeaveBack: () => {
          t.forEach((o) => o.pause());
        } });
      });
    }
    function v() {
      document.querySelectorAll(".js-svg-text").forEach((e, t) => {
        const n = `path-${t}`, s18 = ((e.dataset.text || "TEXT") + "\u3000").repeat(50), a = e.dataset.class || "", i = e.dataset.color || "#E60014", c = e.classList.contains("svg-repeat--reverse");
        e.innerHTML = `
        <svg
          class="${a}"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="${e.dataset.viewbox}"
          style="${c ? "transform:scaleX(-1);transform-origin:center;" : ""}"
        >
          <path
            id="${n}"
            d="${e.dataset.path}"
            stroke="${i}"
            fill="none"
            stroke-miterlimit="10"
          />

          <text
            class="story-text"
            fill="#fff"
            font-size="${e.dataset.font}"
            letter-spacing="2"
            dominant-baseline="middle"
          >
            <textPath
              href="#${n}"
              startOffset="0%"
              text-anchor="start"
            >
              ${s18}
            </textPath>
          </text>
        </svg>
      `;
      });
    }
    function b() {
      [{ id: "#wavePath", trigger: ".js-line-01", start: "top 80%", end: "bottom bottom", direction: 1, scrub: 3 }, { id: "#wavePath-sp", trigger: ".js-line-01", start: "top 80%", end: "bottom bottom", direction: 1, scrub: 3 }, { id: "#wavePath2", trigger: ".js-line-02", start: "top 80%", end: "bottom 130%", direction: -1, scrub: 3 }, { id: "#wavePath2-sp", trigger: ".js-line-02", start: "top 80%", end: "bottom bottom", direction: 1, scrub: 3 }, { id: "#wavePath3", trigger: ".js-line-03", start: "top 80%", end: "bottom bottom", direction: -1, scrub: 3 }, { id: "#wavePath3-sp", trigger: ".js-line-03", start: "top 80%", end: "bottom bottom", direction: 1, scrub: 3 }, { id: "#intro", trigger: ".js-intro-line", start: "bottom 90%", end: "bottom bottom", direction: -1, scrub: 3 }, { id: "#intro-sp", trigger: ".js-intro-line", start: "bottom 90%", end: "bottom bottom", direction: -1, scrub: 3 }, { id: "#movie", trigger: ".js-movie-line", start: "bottom 130%", end: "bottom bottom", direction: -1, scrub: 3 }, { id: "#movie-sp", trigger: ".js-movie-line", start: "bottom 130%", end: "bottom bottom", direction: -1, scrub: 3 }].forEach(({ id: t, trigger: n, direction: o, scrub: s18, start: a, end: i }) => {
        const c = document.querySelector(t);
        if (!c) return;
        const u = c.getTotalLength(), l = u * o;
        _f.set(c, { strokeDasharray: u, strokeDashoffset: l }), _f.to(c, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: n, start: a, end: i, scrub: s18 } });
      });
    }
    function T() {
      const e = document.querySelector(".js-product");
      if (!e) return;
      const t = document.querySelector(".top-about__item:nth-child(1)"), n = document.querySelector(".top-about__item:nth-child(2)"), o = document.querySelector(".top-about__item:nth-child(3)");
      if (!t || !n || !o) return;
      _f.matchMedia().add({ desktop: "(min-width: 769px)", mobile: "(max-width: 768px)" }, ({ conditions: a }) => {
        const i = a.desktop, c = i ? 350 : 200, u = (l, { startX: d = 0, endX: m = 0, rotate: Y = 0, endY: F2 = 0, scale: V = 1 }) => {
          _f.set(l, { y: c, x: d, scale: 0.95, rotation: 0, force3D: true, transformOrigin: "center center" }), _f.to(l, { x: m, y: F2, scale: V, rotation: Y, ease: "none", scrollTrigger: { trigger: i ? e : l, start: "top 95%", end: "bottom 90%", scrub: 0.8, invalidateOnRefresh: true } });
        };
        u(t, { startX: i ? -80 : -20, endX: 0, rotate: i ? -10 : -6, endY: 0 }), u(n, { startX: 0, endX: 0, rotate: i ? 8 : 5, endY: i ? -20 : -10 }), u(o, { startX: i ? 80 : 20, endX: 0, rotate: i ? 10 : 6, endY: 0 });
      });
    }
    function f(e) {
      const t = document.querySelector(e);
      if (!t) return;
      const n = [...t.querySelectorAll(".top-product__item")];
      _f.set(t.querySelectorAll(".top-product__tooltips"), { autoAlpha: 0, scale: 0, y: 10, xPercent: -50 });
      let o = 0, s18 = [];
      const a = { root: null, rootMargin: "0px -30% 0px -30%", threshold: 0 }, i = new IntersectionObserver((c) => {
        c.forEach((u) => {
          const d = u.target.querySelector(".top-product__tooltips");
          if (d) {
            if (u.isIntersecting) {
              if (o++, o % 2 === 0) {
                if (s18.includes(d)) return;
                _f.fromTo(d, { autoAlpha: 0, scale: 0, y: 10, xPercent: -50 }, { autoAlpha: 1, scale: 1, y: 0, xPercent: -50, duration: 0.4, ease: "back.out(1.7)", overwrite: "auto" }), s18.push(d);
              }
            } else if (s18.includes(d) && s18.length > 2) {
              const m = s18.indexOf(d);
              m > -1 && s18.splice(m, 1), _f.to(d, { autoAlpha: 0, scale: 0, y: 10, duration: 0.25, overwrite: "auto" });
            }
          }
        });
      }, a);
      n.forEach((c) => i.observe(c));
    }
    function k() {
      const e = document.querySelector(".top-mv"), t = (e == null ? void 0 : e.querySelector(".top-mv__title")) || null;
      function n() {
        _f.set(t, { opacity: 0, y: 30 });
      }
      n(), _f.timeline({}).to(t, { duration: 1.5, opacity: 1, y: 0, ease: "power3.out" }, 0.8);
    }
    function x() {
      _f.utils.toArray(".js-svgAction").forEach((t) => {
        const n = t.querySelectorAll("path, circle, rect, polyline");
        _f.set(n, { strokeDasharray: (o, s18) => s18.getTotalLength(), strokeDashoffset: (o, s18) => s18.getTotalLength() }), _f.to(n, { strokeDashoffset: 0, duration: 3, ease: "power3.inOut", scrollTrigger: { trigger: t, start: "top 95%" } });
      });
    }
    function P() {
      _f.utils.toArray(".js-deco").forEach((t) => {
        const n = Math.random() < 0.5 ? -1 : 1, o = _f.utils.random(20, 45), s18 = _f.utils.random(3, 5);
        _f.from(t, { scrollTrigger: { trigger: t, start: "top 85%", once: true }, opacity: 0, y: 30, duration: 0.8, ease: "power2.out", onComplete() {
          _f.to(t, { y: n * o, duration: s18, repeat: -1, yoyo: true, ease: "sine.inOut" });
        } });
      });
    }
    function j() {
      const e = document.querySelectorAll(".js-open-modal"), t = document.querySelectorAll(".js-close-modal"), n = document.querySelectorAll(".overlay"), o = document.querySelector("body");
      e.forEach((a) => {
        a.addEventListener("click", () => {
          const i = a.getAttribute("data-modal-target"), c = document.querySelector(i);
          c && (c.classList.add("is-active"), o.classList.add("has-modal"), document.body.style.overflow = "hidden", window.lenis && window.lenis.stop());
        });
      }), t.forEach((a) => {
        a.addEventListener("click", () => {
          const i = a.closest(".c-modal");
          i && s18(i);
        });
      }), n.forEach((a) => {
        a.addEventListener("click", () => {
          const i = a.closest(".c-modal") || document.querySelector(".c-modal.is-active");
          i && s18(i);
        });
      });
      function s18(a) {
        a.classList.remove("is-active"), document.querySelector(".c-modal.is-active") || (o.classList.remove("has-modal"), document.body.style.overflow = "", window.lenis && window.lenis.start());
      }
    }
    function _() {
      if (window.innerWidth < 769) new Wt(".js-character-main", { modules: [dd], loop: true, slidesPerView: "auto", centeredSlides: true, spaceBetween: 16, autoplay: { delay: 4e3, disableOnInteraction: false } });
      else {
        const t = new Wt(".js-character-main2", { modules: [dd], loop: true, slidesPerView: 1, allowTouchMove: false, autoplay: { delay: 4e3, disableOnInteraction: false } }), n = new Wt(".js-character-main", { loop: true, slidesPerView: "auto", breakpoints: { 0: { slidesPerView: "auto", centeredSlides: true, spaceBetween: 16 }, 769: { slidesPerView: "auto", centeredSlides: false } } });
        t.on("slideChange", () => {
          n.slideToLoop(t.realIndex);
        }), n.on("click", () => {
          t.slideToLoop(n.clickedIndex);
        });
      }
    }
    function I2() {
      window.addEventListener("load", async () => {
        await document.fonts.ready, window.lenis = null;
        let e = null;
        const t = window.matchMedia("(max-width: 768px)");
        function n(l) {
          window.lenis && window.lenis.raf(l), e = requestAnimationFrame(n);
        }
        function o() {
          e || (e = requestAnimationFrame(n));
        }
        function s18() {
          e && (cancelAnimationFrame(e), e = null);
        }
        function a() {
          const l = /iP(ad|hone|od)/.test(navigator.userAgent);
          window.lenis = new hd({ smooth: true, lerp: 0.07, smoothTouch: !l }), o();
        }
        function i() {
          var l, d;
          window.lenis && ((d = (l = window.lenis).destroy) == null || d.call(l), window.lenis = null), s18();
        }
        function c() {
          v(), b(), y(), K.refresh();
        }
        function u(l) {
          l.matches ? (i(), c()) : (a(), requestAnimationFrame(() => {
            c();
          }));
        }
        u(t), t.addEventListener("change", u), window.addEventListener("pageshow", (l) => {
          const d = performance.getEntriesByType("navigation")[0];
          (l.persisted || (d == null ? void 0 : d.type) === "back_forward") && window.lenis && window.lenis.scrollTo(window.scrollY, { immediate: true });
        });
      });
    }
    _f.utils.toArray(".top-product__intro").forEach((e) => {
      _f.fromTo(e, { clipPath: "inset( 0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", ease: "none", scrollTrigger: { trigger: e, start: "top bottom", end: "bottom bottom", scrub: 2 } });
    });
    function O() {
      document.querySelectorAll(".top-lineup__item").forEach((t) => {
        t.querySelectorAll("svg path").forEach((o) => {
          const s18 = o.getTotalLength();
          _f.set(o, { strokeDasharray: s18, strokeDashoffset: -s18 }), _f.to(o, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: t, start: "top 90%", end: "bottom 100%", scrub: 2 } });
        });
      });
    }
    function M() {
      const e = document.querySelector(".l-header");
      let t = window.scrollY;
      window.addEventListener("scroll", () => {
        const n = window.scrollY;
        n > t && n > 50 ? e.classList.add("is-hidden") : e.classList.remove("is-hidden"), t = n;
      });
    }
    function B() {
      const e = document.querySelectorAll(".js-play-music"), t = document.getElementById("bgMusic"), n = document.querySelector(".top-intro__control");
      !e.length || !t || (t.loop = true, e.forEach((o) => {
        o.addEventListener("click", () => {
          const s18 = !e[0].classList.contains("is-paused");
          n.classList.toggle("is-paused"), e.forEach((a) => {
            a.classList.toggle("is-paused", s18), a.setAttribute("aria-pressed", s18);
          }), s18 ? t.play() : t.pause();
        });
      }));
    }
    function C() {
      const e = document.querySelector(".js-bubble"), t = document.querySelector(".js-bubble-mask");
      if (!e || !t) return;
      t.innerHTML = "";
      const n = 20;
      e.offsetWidth, e.offsetHeight, t.style.gridTemplateColumns = `repeat(${n}, 1fr)`, _f.set(e, { autoAlpha: 0, scale: 0.35, rotate: -4 }), _f.timeline({ scrollTrigger: { trigger: ".top-intro__control", start: "center center", toggleActions: "play none none reverse" } }).to(e, { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1.4, 0.35)" }, 0);
    }
    function D() {
      const e = document.querySelector(".top-movie__background");
      if (!e) return;
      const t = document.createElement("script");
      t.src = "https://www.youtube.com/iframe_api", document.head.appendChild(t), window.onYouTubeIframeAPIReady = () => {
        const n = new window.YT.Player("youtube-player", { videoId: "aRNqI-xNDcA", playerVars: { autoplay: 0, mute: 1, controls: 0, playsinline: 1, rel: 0, loop: 1, playlist: "aRNqI-xNDcA" }, events: { onReady() {
          new IntersectionObserver(([s18]) => {
            s18.isIntersecting, n.playVideo();
          }, { threshold: 0.5 }).observe(e);
        }, onStateChange(o) {
          o.data === YT.PlayerState.ENDED && (n.seekTo(0), n.playVideo());
        } } });
      };
    }
    function R() {
      const e = document.querySelector(".top-intro__showcase");
      e && (_f.set(e, { y: 100, opacity: 0, rotate: -8, transformOrigin: "50% 50%" }), _f.timeline({ scrollTrigger: { trigger: e, start: "top 85%", toggleActions: "play none none none", once: true }, onComplete() {
        _f.to(e, { y: "-=30", duration: 2.5, ease: "sine.inOut", repeat: -1, yoyo: true }), _f.to(e, { rotate: 2, duration: 3.5, ease: "sine.inOut", repeat: -1, yoyo: true });
      } }).to(e, { y: 0, opacity: 1, rotate: 0, duration: 1.5, ease: "power3.out" }));
    }
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.body.classList.add("loaded");
      }, 500);
    });
    async function S() {
      A(), E(), q2(), v(), y(), b(), T(), k(), x(), _(), I2(), j(), O(), M(), B(), C(), D(), R(), P(), document.querySelectorAll(".top-product-track").forEach((e) => e.classList.add("is-active")), f(".js-vampire"), f(".js-snowman"), f(".js-alien");
    }
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", S) : S();
  })();
})();
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
