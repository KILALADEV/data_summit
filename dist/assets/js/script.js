"use strict";
var App = (() => {
  // dist/assets/js/lenis.js
  var pl = Object.defineProperty;
  var gl = (s18, t, i) => t in s18 ? pl(s18, t, { enumerable: true, configurable: true, writable: true, value: i }) : s18[t] = i;
  var R = (s18, t, i) => gl(s18, typeof t != "symbol" ? t + "" : t, i);
  function ii(s18) {
    if (s18 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s18;
  }
  function $o(s18, t) {
    s18.prototype = Object.create(t.prototype), s18.prototype.constructor = s18, s18.__proto__ = t;
  }
  var Se = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } };
  var Qr = { duration: 0.5, overwrite: false, delay: 0 };
  var As;
  var It;
  var lt;
  var De = 1e8;
  var st = 1 / De;
  var us = Math.PI * 2;
  var ml = us / 4;
  var vl = 0;
  var Go = Math.sqrt;
  var yl = Math.cos;
  var wl = Math.sin;
  var At = function(t) {
    return typeof t == "string";
  };
  var gt = function(t) {
    return typeof t == "function";
  };
  var ai = function(t) {
    return typeof t == "number";
  };
  var zs = function(t) {
    return typeof t > "u";
  };
  var Qe = function(t) {
    return typeof t == "object";
  };
  var le = function(t) {
    return t !== false;
  };
  var Ls = function() {
    return typeof window < "u";
  };
  var hn = function(t) {
    return gt(t) || At(t);
  };
  var qo = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
  };
  var qt = Array.isArray;
  var xl = /random\([^)]+\)/g;
  var Tl = /,\s*/g;
  var oo = /(?:-?\.?\d|\.)+/gi;
  var Ko = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var Kn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var Qo = /[+-]=-?[.\d]+/;
  var bl = /[^,'"\[\]\s]+/gi;
  var Sl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var ht;
  var Ve;
  var fs;
  var Ns;
  var Ce = {};
  var An = {};
  var Zo;
  var jo = function(t) {
    return (An = vr(t, Ce)) && ce;
  };
  var Fs = function(t, i) {
    return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
  };
  var Zr = function(t, i) {
    return !i && console.warn(t);
  };
  var Jo = function(t, i) {
    return t && (Ce[t] = i) && An && (An[t] = i) || Ce;
  };
  var jr = function() {
    return 0;
  };
  var Cl = { suppressEvents: true, isStart: true, kill: false };
  var Sn = { suppressEvents: true, kill: false };
  var kl = { suppressEvents: true };
  var Is = {};
  var Ti = [];
  var hs = {};
  var ta;
  var ve = {};
  var Qn = {};
  var ao = 30;
  var Cn = [];
  var Ys = "";
  var Bs = function(t) {
    var i = t[0], e, r;
    if (Qe(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = Cn.length; r-- && !Cn[r].targetTest(i); ) ;
      e = Cn[r];
    }
    for (r = t.length; r--; ) t[r] && (t[r]._gsap || (t[r]._gsap = new Ta(t[r], e))) || t.splice(r, 1);
    return t;
  };
  var Wi = function(t) {
    return t._gsap || Bs(Re(t))[0]._gsap;
  };
  var ea = function(t, i, e) {
    return (e = t[i]) && gt(e) ? t[i]() : zs(e) && t.getAttribute && t.getAttribute(i) || e;
  };
  var ue = function(t, i) {
    return (t = t.split(",")).forEach(i) || t;
  };
  var wt = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  };
  var ft = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  };
  var hr = function(t, i) {
    var e = i.charAt(0), r = parseFloat(i.substr(2));
    return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
  };
  var Pl = function(t, i) {
    for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; ) ;
    return r < e;
  };
  var zn = function() {
    var t = Ti.length, i = Ti.slice(0), e, r;
    for (hs = {}, Ti.length = 0, e = 0; e < t; e++) r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], true)._lazy = 0);
  };
  var Xs = function(t) {
    return !!(t._initted || t._startAt || t.add);
  };
  var ia = function(t, i, e, r) {
    Ti.length && !It && zn(), t.render(i, e, !!(It && i < 0 && Xs(t))), Ti.length && !It && zn();
  };
  var ra = function(t) {
    var i = parseFloat(t);
    return (i || i === 0) && (t + "").match(bl).length < 2 ? i : At(t) ? t.trim() : t;
  };
  var na = function(t) {
    return t;
  };
  var ke = function(t, i) {
    for (var e in i) e in t || (t[e] = i[e]);
    return t;
  };
  var Ol = function(t) {
    return function(i, e) {
      for (var r in e) r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
    };
  };
  var vr = function(t, i) {
    for (var e in i) t[e] = i[e];
    return t;
  };
  var lo = function s(t, i) {
    for (var e in i) e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = Qe(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
    return t;
  };
  var Ln = function(t, i) {
    var e = {}, r;
    for (r in t) r in i || (e[r] = t[r]);
    return e;
  };
  var Ir = function(t) {
    var i = t.parent || ht, e = t.keyframes ? Ol(qt(t.keyframes)) : ke;
    if (le(t.inherit)) for (; i; ) e(t, i.vars.defaults), i = i.parent || i._dp;
    return t;
  };
  var El = function(t, i) {
    for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; ) ;
    return e < 0;
  };
  var sa = function(t, i, e, r, n) {
    var o = t[r], a;
    if (n) for (a = i[n]; o && o[n] > a; ) o = o._prev;
    return o ? (i._next = o._next, o._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = o, i.parent = i._dp = t, i;
  };
  var Vn = function(t, i, e, r) {
    e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
    var n = i._prev, o = i._next;
    n ? n._next = o : t[e] === i && (t[e] = o), o ? o._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
  };
  var Ci = function(t, i) {
    t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
  };
  var Hi = function(t, i) {
    if (t && (!i || i._end > t._dur || i._start < 0)) for (var e = t; e; ) e._dirty = 1, e = e.parent;
    return t;
  };
  var Ml = function(t) {
    for (var i = t.parent; i && i.parent; ) i._dirty = 1, i.totalDuration(), i = i.parent;
    return t;
  };
  var cs = function(t, i, e, r) {
    return t._startAt && (It ? t._startAt.revert(Sn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, true, r));
  };
  var Dl = function s2(t) {
    return !t || t._ts && s2(t.parent);
  };
  var uo = function(t) {
    return t._repeat ? yr(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  };
  var yr = function(t, i) {
    var e = Math.floor(t = ft(t / i));
    return t && e === t ? e - 1 : e;
  };
  var Nn = function(t, i) {
    return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
  };
  var Un = function(t) {
    return t._end = ft(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
  };
  var $n = function(t, i) {
    var e = t._dp;
    return e && e.smoothChildTiming && t._ts && (t._start = ft(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), Un(t), e._dirty || Hi(e, t)), t;
  };
  var oa = function(t, i) {
    var e;
    if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = Nn(t.rawTime(), i), (!i._dur || an(0, i.totalDuration(), e) - i._tTime > st) && i.render(e, true)), Hi(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (e = t; e._dp; ) e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
      t._zTime = -st;
    }
  };
  var $e = function(t, i, e, r) {
    return i.parent && Ci(i), i._start = ft((ai(e) ? e : e || t !== ht ? Oe(t, e, i) : t._time) + i._delay), i._end = ft(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), sa(t, i, "_first", "_last", t._sort ? "_start" : 0), ds(i) || (t._recent = i), r || oa(t, i), t._ts < 0 && $n(t, t._tTime), t;
  };
  var aa = function(t, i) {
    return (Ce.ScrollTrigger || Fs("scrollTrigger", i)) && Ce.ScrollTrigger.create(i, t);
  };
  var la = function(t, i, e, r, n) {
    if (Hs(t, i, n), !t._initted) return 1;
    if (!e && t._pt && !It && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && ta !== we.frame) return Ti.push(t), t._lazy = [n, r], 1;
  };
  var Rl = function s3(t) {
    var i = t.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s3(i));
  };
  var ds = function(t) {
    var i = t.data;
    return i === "isFromStart" || i === "isStart";
  };
  var Al = function(t, i, e, r) {
    var n = t.ratio, o = i < 0 || !i && (!t._start && Rl(t) && !(!t._initted && ds(t)) || (t._ts < 0 || t._dp._ts < 0) && !ds(t)) ? 0 : 1, a = t._rDelay, l = 0, u, f, _;
    if (a && t._repeat && (l = an(0, t._tDur, i), f = yr(l, a), t._yoyo && f & 1 && (o = 1 - o), f !== yr(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || It || r || t._zTime === st || !i && t._zTime) {
      if (!t._initted && la(t, i, r, e, l)) return;
      for (_ = t._zTime, t._zTime = i || (e ? st : 0), e || (e = i && !_), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; ) u.r(o, u.d), u = u._next;
      i < 0 && cs(t, i, e, true), t._onUpdate && !e && Te(t, "onUpdate"), l && t._repeat && !e && t.parent && Te(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && Ci(t, 1), !e && !It && (Te(t, o ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
    } else t._zTime || (t._zTime = i);
  };
  var zl = function(t, i, e) {
    var r;
    if (e > i) for (r = t._first; r && r._start <= e; ) {
      if (r.data === "isPause" && r._start > i) return r;
      r = r._next;
    }
    else for (r = t._last; r && r._start >= e; ) {
      if (r.data === "isPause" && r._start < i) return r;
      r = r._prev;
    }
  };
  var wr = function(t, i, e, r) {
    var n = t._repeat, o = ft(i) || 0, a = t._tTime / t._tDur;
    return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ft(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && $n(t, t._tTime = t._tDur * a), t.parent && Un(t), e || Hi(t.parent, t), t;
  };
  var fo = function(t) {
    return t instanceof ae ? Hi(t) : wr(t, t._dur);
  };
  var Ll = { _start: 0, endTime: jr, totalDuration: jr };
  var Oe = function s4(t, i, e) {
    var r = t.labels, n = t._recent || Ll, o = t.duration() >= De ? n.endTime(false) : t._dur, a, l, u;
    return At(i) && (isNaN(i) || i in r) ? (l = i.charAt(0), u = i.substr(-1) === "%", a = i.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = o), r[i]) : (l = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), u && e && (l = l / 100 * (qt(e) ? e[0] : e).totalDuration()), a > 1 ? s4(t, i.substr(0, a - 1), e) + l : o + l)) : i == null ? o : +i;
  };
  var Yr = function(t, i, e) {
    var r = ai(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = i[n], a, l;
    if (r && (o.duration = i[1]), o.parent = e, t) {
      for (a = o, l = e; l && !("immediateRender" in a); ) a = l.vars.defaults || {}, l = le(l.vars.inherit) && l.parent;
      o.immediateRender = le(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[n - 1];
    }
    return new Ct(i[0], o, i[n + 1]);
  };
  var Ei = function(t, i) {
    return t || t === 0 ? i(t) : i;
  };
  var an = function(t, i, e) {
    return e < t ? t : e > i ? i : e;
  };
  var $t = function(t, i) {
    return !At(t) || !(i = Sl.exec(t)) ? "" : i[1];
  };
  var Nl = function(t, i, e) {
    return Ei(e, function(r) {
      return an(t, i, r);
    });
  };
  var _s = [].slice;
  var ua = function(t, i) {
    return t && Qe(t) && "length" in t && (!i && !t.length || t.length - 1 in t && Qe(t[0])) && !t.nodeType && t !== Ve;
  };
  var Fl = function(t, i, e) {
    return e === void 0 && (e = []), t.forEach(function(r) {
      var n;
      return At(r) && !i || ua(r, 1) ? (n = e).push.apply(n, Re(r)) : e.push(r);
    }) || e;
  };
  var Re = function(t, i, e) {
    return lt && !i && lt.selector ? lt.selector(t) : At(t) && !e && (fs || !xr()) ? _s.call((i || Ns).querySelectorAll(t), 0) : qt(t) ? Fl(t, e) : ua(t) ? _s.call(t, 0) : t ? [t] : [];
  };
  var ps = function(t) {
    return t = Re(t)[0] || Zr("Invalid scope") || {}, function(i) {
      var e = t.current || t.nativeElement || t;
      return Re(i, e.querySelectorAll ? e : e === t ? Zr("Invalid scope") || Ns.createElement("div") : t);
    };
  };
  var fa = function(t) {
    return t.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var ha = function(t) {
    if (gt(t)) return t;
    var i = Qe(t) ? t : { each: t }, e = Vi(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, o = {}, a = r > 0 && r < 1, l = isNaN(r) || a, u = i.axis, f = r, _ = r;
    return At(r) ? f = _ = { center: 0.5, edges: 0.5, end: 1 }[r] || 0 : !a && l && (f = r[0], _ = r[1]), function(c, h, p) {
      var d = (p || i).length, g = o[d], x, v, b, y, S, P, T, O, k;
      if (!g) {
        if (k = i.grid === "auto" ? 0 : (i.grid || [1, De])[1], !k) {
          for (T = -De; T < (T = p[k++].getBoundingClientRect().left) && k < d; ) ;
          k < d && k--;
        }
        for (g = o[d] = [], x = l ? Math.min(k, d) * f - 0.5 : r % k, v = k === De ? 0 : l ? d * _ / k - 0.5 : r / k | 0, T = 0, O = De, P = 0; P < d; P++) b = P % k - x, y = v - (P / k | 0), g[P] = S = u ? Math.abs(u === "y" ? y : b) : Go(b * b + y * y), S > T && (T = S), S < O && (O = S);
        r === "random" && fa(g), g.max = T - O, g.min = O, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (k > d ? d - 1 : u ? u === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (r === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = $t(i.amount || i.each) || 0, e = e && d < 0 ? Ql(e) : e;
      }
      return d = (g[c] - g.min) / g.max || 0, ft(g.b + (e ? e(d) : d) * g.v) + g.u;
    };
  };
  var gs = function(t) {
    var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(e) {
      var r = ft(Math.round(parseFloat(e) / t) * t * i);
      return (r - r % 1) / i + (ai(e) ? 0 : $t(e));
    };
  };
  var ca = function(t, i) {
    var e = qt(t), r, n;
    return !e && Qe(t) && (r = e = t.radius || De, t.values ? (t = Re(t.values), (n = !ai(t[0])) && (r *= r)) : t = gs(t.increment)), Ei(i, e ? gt(t) ? function(o) {
      return n = t(o), Math.abs(n - o) <= r ? n : o;
    } : function(o) {
      for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = De, f = 0, _ = t.length, c, h; _--; ) n ? (c = t[_].x - a, h = t[_].y - l, c = c * c + h * h) : c = Math.abs(t[_] - a), c < u && (u = c, f = _);
      return f = !r || u <= r ? t[f] : o, n || f === o || ai(o) ? f : f + $t(o);
    } : gs(t));
  };
  var da = function(t, i, e, r) {
    return Ei(qt(t) ? !i : e === true ? !!(e = 0) : !r, function() {
      return qt(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
    });
  };
  var Il = function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e];
    return function(r) {
      return i.reduce(function(n, o) {
        return o(n);
      }, r);
    };
  };
  var Yl = function(t, i) {
    return function(e) {
      return t(parseFloat(e)) + (i || $t(e));
    };
  };
  var Bl = function(t, i, e) {
    return pa(t, i, 0, 1, e);
  };
  var _a = function(t, i, e) {
    return Ei(e, function(r) {
      return t[~~i(r)];
    });
  };
  var Xl = function s5(t, i, e) {
    var r = i - t;
    return qt(t) ? _a(t, s5(0, t.length), i) : Ei(e, function(n) {
      return (r + (n - t) % r) % r + t;
    });
  };
  var Wl = function s6(t, i, e) {
    var r = i - t, n = r * 2;
    return qt(t) ? _a(t, s6(0, t.length - 1), i) : Ei(e, function(o) {
      return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o);
    });
  };
  var Jr = function(t) {
    return t.replace(xl, function(i) {
      var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(Tl);
      return da(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
    });
  };
  var pa = function(t, i, e, r, n) {
    var o = i - t, a = r - e;
    return Ei(n, function(l) {
      return e + ((l - t) / o * a || 0);
    });
  };
  var Hl = function s7(t, i, e, r) {
    var n = isNaN(t + i) ? 0 : function(h) {
      return (1 - h) * t + h * i;
    };
    if (!n) {
      var o = At(t), a = {}, l, u, f, _, c;
      if (e === true && (r = 1) && (e = null), o) t = { p: t }, i = { p: i };
      else if (qt(t) && !qt(i)) {
        for (f = [], _ = t.length, c = _ - 2, u = 1; u < _; u++) f.push(s7(t[u - 1], t[u]));
        _--, n = function(p) {
          p *= _;
          var d = Math.min(c, ~~p);
          return f[d](p - d);
        }, e = i;
      } else r || (t = vr(qt(t) ? [] : {}, t));
      if (!f) {
        for (l in i) Ws.call(a, t, l, "get", i[l]);
        n = function(p) {
          return $s(p, a) || (o ? t.p : t);
        };
      }
    }
    return Ei(e, n);
  };
  var ho = function(t, i, e) {
    var r = t.labels, n = De, o, a, l;
    for (o in r) a = r[o] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (l = o, n = a);
    return l;
  };
  var Te = function(t, i, e) {
    var r = t.vars, n = r[i], o = lt, a = t._ctx, l, u, f;
    if (n) return l = r[i + "Params"], u = r.callbackScope || t, e && Ti.length && zn(), a && (lt = a), f = l ? n.apply(u, l) : n.call(u), lt = o, f;
  };
  var Dr = function(t) {
    return Ci(t), t.scrollTrigger && t.scrollTrigger.kill(!!It), t.progress() < 1 && Te(t, "onInterrupt"), t;
  };
  var ur;
  var ga = [];
  var ma = function(t) {
    if (t) if (t = !t.name && t.default || t, Ls() || t.headless) {
      var i = t.name, e = gt(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = { init: jr, render: $s, add: Ws, kill: ou, modifier: su, rawVars: 0 }, o = { targetTest: 0, get: 0, getSetter: Us, aliases: {}, register: 0 };
      if (xr(), t !== r) {
        if (ve[i]) return;
        ke(r, ke(Ln(t, n), o)), vr(r.prototype, vr(n, Ln(t, o))), ve[r.prop = i] = r, t.targetTest && (Cn.push(r), Is[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      Jo(i, r), t.register && t.register(ce, r, fe);
    } else ga.push(t);
  };
  var nt = 255;
  var Rr = { aqua: [0, nt, nt], lime: [0, nt, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, nt], navy: [0, 0, 128], white: [nt, nt, nt], olive: [128, 128, 0], yellow: [nt, nt, 0], orange: [nt, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [nt, 0, 0], pink: [nt, 192, 203], cyan: [0, nt, nt], transparent: [nt, nt, nt, 0] };
  var Zn = function(t, i, e) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * nt + 0.5 | 0;
  };
  var va = function(t, i, e) {
    var r = t ? ai(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Rr.black, n, o, a, l, u, f, _, c, h, p;
    if (!r) {
      if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Rr[t]) r = Rr[t];
      else if (t.charAt(0) === "#") {
        if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & nt, r & nt, parseInt(t.substr(7), 16) / 255];
        t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & nt, t & nt];
      } else if (t.substr(0, 3) === "hsl") {
        if (r = p = t.match(oo), !i) l = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Zn(l + 1 / 3, n, o), r[1] = Zn(l, n, o), r[2] = Zn(l - 1 / 3, n, o);
        else if (~t.indexOf("=")) return r = t.match(Ko), e && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(oo) || Rr.transparent;
      r = r.map(Number);
    }
    return i && !p && (n = r[0] / nt, o = r[1] / nt, a = r[2] / nt, _ = Math.max(n, o, a), c = Math.min(n, o, a), f = (_ + c) / 2, _ === c ? l = u = 0 : (h = _ - c, u = f > 0.5 ? h / (2 - _ - c) : h / (_ + c), l = _ === n ? (o - a) / h + (o < a ? 6 : 0) : _ === o ? (a - n) / h + 2 : (n - o) / h + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
  };
  var ya = function(t) {
    var i = [], e = [], r = -1;
    return t.split(bi).forEach(function(n) {
      var o = n.match(lr) || [];
      i.push.apply(i, o), e.push(r += o.length + 1);
    }), i.c = e, i;
  };
  var co = function(t, i, e) {
    var r = "", n = (t + r).match(bi), o = i ? "hsla(" : "rgba(", a = 0, l, u, f, _;
    if (!n) return t;
    if (n = n.map(function(c) {
      return (c = va(c, i, 1)) && o + (i ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
    }), e && (f = ya(t), l = e.c, l.join(r) !== f.c.join(r))) for (u = t.replace(bi, "1").split(lr), _ = u.length - 1; a < _; a++) r += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
    if (!u) for (u = t.split(bi), _ = u.length - 1; a < _; a++) r += u[a] + n[a];
    return r + u[_];
  };
  var bi = (function() {
    var s18 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in Rr) s18 += "|" + t + "\\b";
    return new RegExp(s18 + ")", "gi");
  })();
  var Vl = /hsl[a]?\(/;
  var wa = function(t) {
    var i = t.join(" "), e;
    if (bi.lastIndex = 0, bi.test(i)) return e = Vl.test(i), t[1] = co(t[1], e), t[0] = co(t[0], e, ya(t[1])), true;
  };
  var tn;
  var we = (function() {
    var s18 = Date.now, t = 500, i = 33, e = s18(), r = e, n = 1e3 / 240, o = n, a = [], l, u, f, _, c, h, p = function d(g) {
      var x = s18() - r, v = g === true, b, y, S, P;
      if ((x > t || x < 0) && (e += x - i), r += x, S = r - e, b = S - o, (b > 0 || v) && (P = ++_.frame, c = S - _.time * 1e3, _.time = S = S / 1e3, o += b + (b >= n ? 4 : n - b), y = 1), v || (l = u(d)), y) for (h = 0; h < a.length; h++) a[h](S, c, P, g);
    };
    return _ = { time: 0, frame: 0, tick: function() {
      p(true);
    }, deltaRatio: function(g) {
      return c / (1e3 / (g || 60));
    }, wake: function() {
      Zo && (!fs && Ls() && (Ve = fs = window, Ns = Ve.document || {}, Ce.gsap = ce, (Ve.gsapVersions || (Ve.gsapVersions = [])).push(ce.version), jo(An || Ve.GreenSockGlobals || !Ve.gsap && Ve || {}), ga.forEach(ma)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && _.sleep(), u = f || function(g) {
        return setTimeout(g, o - _.time * 1e3 + 1 | 0);
      }, tn = 1, p(2));
    }, sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(l), tn = 0, u = jr;
    }, lagSmoothing: function(g, x) {
      t = g || 1 / 0, i = Math.min(x || 33, t);
    }, fps: function(g) {
      n = 1e3 / (g || 240), o = _.time * 1e3 + n;
    }, add: function(g, x, v) {
      var b = x ? function(y, S, P, T) {
        g(y, S, P, T), _.remove(b);
      } : g;
      return _.remove(g), a[v ? "unshift" : "push"](b), xr(), b;
    }, remove: function(g, x) {
      ~(x = a.indexOf(g)) && a.splice(x, 1) && h >= x && h--;
    }, _listeners: a }, _;
  })();
  var xr = function() {
    return !tn && we.wake();
  };
  var q = {};
  var Ul = /^[\d.\-M][\d.\-,\s]/;
  var $l = /["']/g;
  var Gl = function(t) {
    for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, o = e.length, a, l, u; n < o; n++) l = e[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), i[r] = isNaN(u) ? u.replace($l, "").trim() : +u, r = l.substr(a + 1).trim();
    return i;
  };
  var ql = function(t) {
    var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
    return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
  };
  var Kl = function(t) {
    var i = (t + "").split("("), e = q[i[0]];
    return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [Gl(i[1])] : ql(t).split(",").map(ra)) : q._CE && Ul.test(t) ? q._CE("", t) : e;
  };
  var Ql = function(t) {
    return function(i) {
      return 1 - t(1 - i);
    };
  };
  var Vi = function(t, i) {
    return t && (gt(t) ? t : q[t] || Kl(t)) || i;
  };
  var ji = function(t, i, e, r) {
    e === void 0 && (e = function(l) {
      return 1 - i(1 - l);
    }), r === void 0 && (r = function(l) {
      return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
    });
    var n = { easeIn: i, easeOut: e, easeInOut: r }, o;
    return ue(t, function(a) {
      q[a] = Ce[a] = n, q[o = a.toLowerCase()] = e;
      for (var l in n) q[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = q[a + "." + l] = n[l];
    }), n;
  };
  var xa = function(t) {
    return function(i) {
      return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
    };
  };
  var jn = function s8(t, i, e) {
    var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), o = n / us * (Math.asin(1 / r) || 0), a = function(f) {
      return f === 1 ? 1 : r * Math.pow(2, -10 * f) * wl((f - o) * n) + 1;
    }, l = t === "out" ? a : t === "in" ? function(u) {
      return 1 - a(1 - u);
    } : xa(a);
    return n = us / n, l.config = function(u, f) {
      return s8(t, u, f);
    }, l;
  };
  var Jn = function s9(t, i) {
    i === void 0 && (i = 1.70158);
    var e = function(o) {
      return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
    }, r = t === "out" ? e : t === "in" ? function(n) {
      return 1 - e(1 - n);
    } : xa(e);
    return r.config = function(n) {
      return s9(t, n);
    }, r;
  };
  ue("Linear,Quad,Cubic,Quart,Quint,Strong", function(s18, t) {
    var i = t < 5 ? t + 1 : t;
    ji(s18 + ",Power" + (i - 1), t ? function(e) {
      return Math.pow(e, i);
    } : function(e) {
      return e;
    }, function(e) {
      return 1 - Math.pow(1 - e, i);
    }, function(e) {
      return e < 0.5 ? Math.pow(e * 2, i) / 2 : 1 - Math.pow((1 - e) * 2, i) / 2;
    });
  });
  q.Linear.easeNone = q.none = q.Linear.easeIn;
  ji("Elastic", jn("in"), jn("out"), jn());
  (function(s18, t) {
    var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function(a) {
      return a < i ? s18 * a * a : a < e ? s18 * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? s18 * (a -= 2.25 / t) * a + 0.9375 : s18 * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
    ji("Bounce", function(o) {
      return 1 - n(1 - o);
    }, n);
  })(7.5625, 2.75);
  ji("Expo", function(s18) {
    return Math.pow(2, 10 * (s18 - 1)) * s18 + s18 * s18 * s18 * s18 * s18 * s18 * (1 - s18);
  });
  ji("Circ", function(s18) {
    return -(Go(1 - s18 * s18) - 1);
  });
  ji("Sine", function(s18) {
    return s18 === 1 ? 1 : -yl(s18 * ml) + 1;
  });
  ji("Back", Jn("in"), Jn("out"), Jn());
  q.SteppedEase = q.steps = Ce.SteppedEase = { config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, o = 1 - st;
    return function(a) {
      return ((r * an(0, o, a) | 0) + n) * e;
    };
  } };
  Qr.ease = q["quad.out"];
  ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s18) {
    return Ys += s18 + "," + s18 + "Params,";
  });
  var Ta = function(t, i) {
    this.id = vl++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : ea, this.set = i ? i.getSetter : Us;
  };
  var en = (function() {
    function s18(i) {
      this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, wr(this, +i.duration, 1, 1), this.data = i.data, lt && (this._ctx = lt, lt.data.push(this)), tn || we.wake();
    }
    var t = s18.prototype;
    return t.delay = function(e) {
      return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
    }, t.duration = function(e) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
    }, t.totalDuration = function(e) {
      return arguments.length ? (this._dirty = 0, wr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, t.totalTime = function(e, r) {
      if (xr(), !arguments.length) return this._tTime;
      var n = this._dp;
      if (n && n.smoothChildTiming && this._ts) {
        for ($n(this, e), !n._dp || n.parent || oa(n, this); n && n.parent; ) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, true), n = n.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && $e(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ia(this, e, r)), this;
    }, t.time = function(e, r) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + uo(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
    }, t.totalProgress = function(e, r) {
      return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, t.progress = function(e, r) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + uo(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    }, t.iteration = function(e, r) {
      var n = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? yr(this._tTime, n) + 1 : 1;
    }, t.timeScale = function(e, r) {
      if (!arguments.length) return this._rts === -st ? 0 : this._rts;
      if (this._rts === e) return this;
      var n = this.parent && this._ts ? Nn(this.parent._time, this) : this._tTime;
      return this._rts = +e || 0, this._ts = this._ps || e === -st ? 0 : this._rts, this.totalTime(an(-Math.abs(this._delay), this.totalDuration(), n), r !== false), Un(this), Ml(this);
    }, t.paused = function(e) {
      return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
    }, t.startTime = function(e) {
      if (arguments.length) {
        this._start = ft(e);
        var r = this.parent || this._dp;
        return r && (r._sort || !this.parent) && $e(r, this, this._start - this._delay), this;
      }
      return this._start;
    }, t.endTime = function(e) {
      return this._start + (le(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, t.rawTime = function(e) {
      var r = this.parent || this._dp;
      return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Nn(r.rawTime(e), this) : this._tTime : this._tTime;
    }, t.revert = function(e) {
      e === void 0 && (e = kl);
      var r = It;
      return It = e, Xs(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== false && this.kill(), It = r, this;
    }, t.globalTime = function(e) {
      for (var r = this, n = arguments.length ? e : r.rawTime(); r; ) n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
      return !this.parent && this._sat ? this._sat.globalTime(e) : n;
    }, t.repeat = function(e) {
      return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, fo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, t.repeatDelay = function(e) {
      if (arguments.length) {
        var r = this._time;
        return this._rDelay = e, fo(this), r ? this.time(r) : this;
      }
      return this._rDelay;
    }, t.yoyo = function(e) {
      return arguments.length ? (this._yoyo = e, this) : this._yoyo;
    }, t.seek = function(e, r) {
      return this.totalTime(Oe(this, e), le(r));
    }, t.restart = function(e, r) {
      return this.play().totalTime(e ? -this._delay : 0, le(r)), this._dur || (this._zTime = -st), this;
    }, t.play = function(e, r) {
      return e != null && this.seek(e, r), this.reversed(false).paused(false);
    }, t.reverse = function(e, r) {
      return e != null && this.seek(e || this.totalDuration(), r), this.reversed(true).paused(false);
    }, t.pause = function(e, r) {
      return e != null && this.seek(e, r), this.paused(true);
    }, t.resume = function() {
      return this.paused(false);
    }, t.reversed = function(e) {
      return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -st : 0)), this) : this._rts < 0;
    }, t.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -st, this;
    }, t.isActive = function() {
      var e = this.parent || this._dp, r = this._start, n;
      return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(true)) >= r && n < this.endTime(true) - st);
    }, t.eventCallback = function(e, r, n) {
      var o = this.vars;
      return arguments.length > 1 ? (r ? (o[e] = r, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete o[e], this) : o[e];
    }, t.then = function(e) {
      var r = this, n = r._prom;
      return new Promise(function(o) {
        var a = gt(e) ? e : na, l = function() {
          var f = r.then;
          r.then = null, n && n(), gt(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), o(a), r.then = f;
        };
        r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? l() : r._prom = l;
      });
    }, t.kill = function() {
      Dr(this);
    }, s18;
  })();
  ke(en.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -st, _prom: 0, _ps: false, _rts: 1 });
  var ae = (function(s18) {
    $o(t, s18);
    function t(e, r) {
      var n;
      return e === void 0 && (e = {}), n = s18.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = le(e.sortChildren), ht && $e(e.parent || ht, ii(n), r), e.reversed && n.reverse(), e.paused && n.paused(true), e.scrollTrigger && aa(ii(n), e.scrollTrigger), n;
    }
    var i = t.prototype;
    return i.to = function(r, n, o) {
      return Yr(0, arguments, this), this;
    }, i.from = function(r, n, o) {
      return Yr(1, arguments, this), this;
    }, i.fromTo = function(r, n, o, a) {
      return Yr(2, arguments, this), this;
    }, i.set = function(r, n, o) {
      return n.duration = 0, n.parent = this, Ir(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ct(r, n, Oe(this, o), 1), this;
    }, i.call = function(r, n, o) {
      return $e(this, Ct.delayedCall(0, r, n), o);
    }, i.staggerTo = function(r, n, o, a, l, u, f) {
      return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new Ct(r, o, Oe(this, l)), this;
    }, i.staggerFrom = function(r, n, o, a, l, u, f) {
      return o.runBackwards = 1, Ir(o).immediateRender = le(o.immediateRender), this.staggerTo(r, n, o, a, l, u, f);
    }, i.staggerFromTo = function(r, n, o, a, l, u, f, _) {
      return a.startAt = o, Ir(a).immediateRender = le(a.immediateRender), this.staggerTo(r, n, a, l, u, f, _);
    }, i.render = function(r, n, o) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : ft(r), _ = this._zTime < 0 != r < 0 && (this._initted || !u), c, h, p, d, g, x, v, b, y, S, P, T;
      if (this !== ht && f > l && r >= 0 && (f = l), f !== this._tTime || o || _) {
        if (a !== this._time && u && (f += this._time - a, r += this._time - a), c = f, y = this._start, b = this._ts, x = !b, _ && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
          if (P = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(g * 100 + r, n, o);
          if (c = ft(f % g), f === l ? (d = this._repeat, c = u) : (S = ft(f / g), d = ~~S, d && d === S && (c = u, d--), c > u && (c = u)), S = yr(this._tTime, g), !a && this._tTime && S !== d && this._tTime - S * g - this._dur <= 0 && (S = d), P && d & 1 && (c = u - c, T = 1), d !== S && !this._lock) {
            var O = P && S & 1, k = O === (P && d & 1);
            if (d < S && (O = !O), a = O ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (T ? 0 : ft(d * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && Te(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, S = d), a && a !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = O ? u : -1e-4, this.render(a, true), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !x) return this;
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (v = zl(this, ft(a), ft(c)), v && (f -= c - (c = v._start))), this._tTime = f, this._time = c, this._act = !!b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && u && !n && !S && (Te(this, "onStart"), this._tTime !== f)) return this;
        if (c >= a && r >= 0) for (h = this._first; h; ) {
          if (p = h._next, (h._act || c >= h._start) && h._ts && v !== h) {
            if (h.parent !== this) return this.render(r, n, o);
            if (h.render(h._ts > 0 ? (c - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (c - h._start) * h._ts, n, o), c !== this._time || !this._ts && !x) {
              v = 0, p && (f += this._zTime = -st);
              break;
            }
          }
          h = p;
        }
        else {
          h = this._last;
          for (var C = r < 0 ? r : c; h; ) {
            if (p = h._prev, (h._act || C <= h._end) && h._ts && v !== h) {
              if (h.parent !== this) return this.render(r, n, o);
              if (h.render(h._ts > 0 ? (C - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (C - h._start) * h._ts, n, o || It && Xs(h)), c !== this._time || !this._ts && !x) {
                v = 0, p && (f += this._zTime = C ? -st : st);
                break;
              }
            }
            h = p;
          }
        }
        if (v && !n && (this.pause(), v.render(c >= a ? 0 : -st)._zTime = c >= a ? 1 : -1, this._ts)) return this._start = y, Un(this), this.render(r, n, o);
        this._onUpdate && !n && Te(this, "onUpdate", true), (f === l && this._tTime >= this.totalDuration() || !f && a) && (y === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Ci(this, 1), !n && !(r < 0 && !a) && (f || a || !l) && (Te(this, f === l && r >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(f < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, i.add = function(r, n) {
      var o = this;
      if (ai(n) || (n = Oe(this, n, r)), !(r instanceof en)) {
        if (qt(r)) return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
        if (At(r)) return this.addLabel(r, n);
        if (gt(r)) r = Ct.delayedCall(0, r);
        else return this;
      }
      return this !== r ? $e(this, r, n) : this;
    }, i.getChildren = function(r, n, o, a) {
      r === void 0 && (r = true), n === void 0 && (n = true), o === void 0 && (o = true), a === void 0 && (a = -De);
      for (var l = [], u = this._first; u; ) u._start >= a && (u instanceof Ct ? n && l.push(u) : (o && l.push(u), r && l.push.apply(l, u.getChildren(true, n, o)))), u = u._next;
      return l;
    }, i.getById = function(r) {
      for (var n = this.getChildren(1, 1, 1), o = n.length; o--; ) if (n[o].vars.id === r) return n[o];
    }, i.remove = function(r) {
      return At(r) ? this.removeLabel(r) : gt(r) ? this.killTweensOf(r) : (r.parent === this && Vn(this, r), r === this._recent && (this._recent = this._last), Hi(this));
    }, i.totalTime = function(r, n) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ft(we.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s18.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
    }, i.addLabel = function(r, n) {
      return this.labels[r] = Oe(this, n), this;
    }, i.removeLabel = function(r) {
      return delete this.labels[r], this;
    }, i.addPause = function(r, n, o) {
      var a = Ct.delayedCall(0, n || jr, o);
      return a.data = "isPause", this._hasPause = 1, $e(this, a, Oe(this, r));
    }, i.removePause = function(r) {
      var n = this._first;
      for (r = Oe(this, r); n; ) n._start === r && n.data === "isPause" && Ci(n), n = n._next;
    }, i.killTweensOf = function(r, n, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; ) mi !== a[l] && a[l].kill(r, n);
      return this;
    }, i.getTweensOf = function(r, n) {
      for (var o = [], a = Re(r), l = this._first, u = ai(n), f; l; ) l instanceof Ct ? Pl(l._targets, a) && (u ? (!mi || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (f = l.getTweensOf(a, n)).length && o.push.apply(o, f), l = l._next;
      return o;
    }, i.tweenTo = function(r, n) {
      n = n || {};
      var o = this, a = Oe(o, r), l = n, u = l.startAt, f = l.onStart, _ = l.onStartParams, c = l.immediateRender, h, p = Ct.to(o, ke({ ease: n.ease || "none", lazy: false, immediateRender: false, time: a, overwrite: "auto", duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || st, onStart: function() {
        if (o.pause(), !h) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== g && wr(p, g, 0, 1).render(p._time, true, true), h = 1;
        }
        f && f.apply(p, _ || []);
      } }, n));
      return c ? p.render(0) : p;
    }, i.tweenFromTo = function(r, n, o) {
      return this.tweenTo(n, ke({ startAt: { time: Oe(this, r) } }, o));
    }, i.recent = function() {
      return this._recent;
    }, i.nextLabel = function(r) {
      return r === void 0 && (r = this._time), ho(this, Oe(this, r));
    }, i.previousLabel = function(r) {
      return r === void 0 && (r = this._time), ho(this, Oe(this, r), 1);
    }, i.currentLabel = function(r) {
      return arguments.length ? this.seek(r, true) : this.previousLabel(this._time + st);
    }, i.shiftChildren = function(r, n, o) {
      o === void 0 && (o = 0);
      var a = this._first, l = this.labels, u;
      for (r = ft(r); a; ) a._start >= o && (a._start += r, a._end += r), a = a._next;
      if (n) for (u in l) l[u] >= o && (l[u] += r);
      return Hi(this);
    }, i.invalidate = function(r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), n = n._next;
      return s18.prototype.invalidate.call(this, r);
    }, i.clear = function(r) {
      r === void 0 && (r = true);
      for (var n = this._first, o; n; ) o = n._next, this.remove(n), n = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Hi(this);
    }, i.totalDuration = function(r) {
      var n = 0, o = this, a = o._last, l = De, u, f, _;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
      if (o._dirty) {
        for (_ = o.parent; a; ) u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > l && o._sort && a._ts && !o._lock ? (o._lock = 1, $e(o, a, f - a._delay, 1)._lock = 0) : l = f, f < 0 && a._ts && (n -= f, (!_ && !o._dp || _ && _.smoothChildTiming) && (o._start += ft(f / o._ts), o._time -= f, o._tTime -= f), o.shiftChildren(-f, false, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
        wr(o, o === ht && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
      }
      return o._tDur;
    }, t.updateRoot = function(r) {
      if (ht._ts && (ia(ht, Nn(r, ht)), ta = we.frame), we.frame >= ao) {
        ao += Se.autoSleep || 120;
        var n = ht._first;
        if ((!n || !n._ts) && Se.autoSleep && we._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || we.sleep();
        }
      }
    }, t;
  })(en);
  ke(ae.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Zl = function(t, i, e, r, n, o, a) {
    var l = new fe(this._pt, t, i, 0, 1, Oa, null, n), u = 0, f = 0, _, c, h, p, d, g, x, v;
    for (l.b = e, l.e = r, e += "", r += "", (x = ~r.indexOf("random(")) && (r = Jr(r)), o && (v = [e, r], o(v, t, i), e = v[0], r = v[1]), c = e.match(Kn) || []; _ = Kn.exec(r); ) p = _[0], d = r.substring(u, _.index), h ? h = (h + 1) % 5 : d.substr(-5) === "rgba(" && (h = 1), p !== c[f++] && (g = parseFloat(c[f - 1]) || 0, l._pt = { _next: l._pt, p: d || f === 1 ? d : ",", s: g, c: p.charAt(1) === "=" ? hr(g, p) - g : parseFloat(p) - g, m: h && h < 4 ? Math.round : 0 }, u = Kn.lastIndex);
    return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (Qo.test(r) || x) && (l.e = 0), this._pt = l, l;
  };
  var Ws = function(t, i, e, r, n, o, a, l, u, f) {
    gt(r) && (r = r(n || 0, t, o));
    var _ = t[i], c = e !== "get" ? e : gt(_) ? u ? t[i.indexOf("set") || !gt(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : t[i]() : _, h = gt(_) ? u ? iu : ka : Vs, p;
    if (At(r) && (~r.indexOf("random(") && (r = Jr(r)), r.charAt(1) === "=" && (p = hr(c, r) + ($t(c) || 0), (p || p === 0) && (r = p))), !f || c !== r || ms) return !isNaN(c * r) && r !== "" ? (p = new fe(this._pt, t, i, +c || 0, r - (c || 0), typeof _ == "boolean" ? nu : Pa, 0, h), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!_ && !(i in t) && Fs(i, r), Zl.call(this, t, i, c, r, h, l || Se.stringFilter, u));
  };
  var jl = function(t, i, e, r, n) {
    if (gt(t) && (t = Br(t, n, i, e, r)), !Qe(t) || t.style && t.nodeType || qt(t) || qo(t)) return At(t) ? Br(t, n, i, e, r) : t;
    var o = {}, a;
    for (a in t) o[a] = Br(t[a], n, i, e, r);
    return o;
  };
  var ba = function(t, i, e, r, n, o) {
    var a, l, u, f;
    if (ve[t] && (a = new ve[t]()).init(n, a.rawVars ? i[t] : jl(i[t], r, n, o, e), e, r, o) !== false && (e._pt = l = new fe(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== ur)) for (u = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; ) u[a._props[f]] = l;
    return a;
  };
  var mi;
  var ms;
  var Hs = function s10(t, i, e) {
    var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, f = r.runBackwards, _ = r.yoyoEase, c = r.keyframes, h = r.autoRevert, p = t._dur, d = t._startAt, g = t._targets, x = t.parent, v = x && x.data === "nested" ? x.vars.targets : g, b = t._overwrite === "auto" && !As, y = t.timeline, S = r.easeReverse || _, P, T, O, k, C, B, M, K, I, Q, $, z, Z;
    if (y && (!c || !n) && (n = "none"), t._ease = Vi(n, Qr.ease), t._rEase = S && (Vi(S) || t._ease), t._from = !y && !!r.runBackwards, t._from && (t.ratio = 1), !y || c && !r.stagger) {
      if (K = g[0] ? Wi(g[0]).harness : 0, z = K && r[K.prop], P = Ln(r, Is), d && (d._zTime < 0 && d.progress(1), i < 0 && f && a && !h ? d.render(-1, true) : d.revert(f && p ? Sn : Cl), d._lazy = 0), o) {
        if (Ci(t._startAt = Ct.set(g, ke({ data: "isStart", overwrite: false, parent: x, immediateRender: true, lazy: !d && le(l), startAt: null, delay: 0, onUpdate: u && function() {
          return Te(t, "onUpdate");
        }, stagger: 0 }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (It || !a && !h) && t._startAt.revert(Sn), a && p && i <= 0 && e <= 0) {
          i && (t._zTime = i);
          return;
        }
      } else if (f && p && !d) {
        if (i && (a = false), O = ke({ overwrite: false, data: "isFromStart", lazy: a && !d && le(l), immediateRender: a, stagger: 0, parent: x }, P), z && (O[K.prop] = z), Ci(t._startAt = Ct.set(g, O)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (It ? t._startAt.revert(Sn) : t._startAt.render(-1, true)), t._zTime = i, !a) s10(t._startAt, st, st);
        else if (!i) return;
      }
      for (t._pt = t._ptCache = 0, l = p && le(l) || l && !p, T = 0; T < g.length; T++) {
        if (C = g[T], M = C._gsap || Bs(g)[T]._gsap, t._ptLookup[T] = Q = {}, hs[M.id] && Ti.length && zn(), $ = v === g ? T : v.indexOf(C), K && (I = new K()).init(C, z || P, t, $, v) !== false && (t._pt = k = new fe(t._pt, C, I.name, 0, 1, I.render, I, 0, I.priority), I._props.forEach(function(it) {
          Q[it] = k;
        }), I.priority && (B = 1)), !K || z) for (O in P) ve[O] && (I = ba(O, P, t, $, C, v)) ? I.priority && (B = 1) : Q[O] = k = Ws.call(t, C, O, "get", P[O], $, v, 0, r.stringFilter);
        t._op && t._op[T] && t.kill(C, t._op[T]), b && t._pt && (mi = t, ht.killTweensOf(C, Q, t.globalTime(i)), Z = !t.parent, mi = 0), t._pt && l && (hs[M.id] = 1);
      }
      B && Ea(t), t._onInit && t._onInit(t);
    }
    t._onUpdate = u, t._initted = (!t._op || t._pt) && !Z, c && i <= 0 && y.render(De, true, true);
  };
  var Jl = function(t, i, e, r, n, o, a, l) {
    var u = (t._pt && t._ptCache || (t._ptCache = {}))[i], f, _, c, h;
    if (!u) for (u = t._ptCache[i] = [], c = t._ptLookup, h = t._targets.length; h--; ) {
      if (f = c[h][i], f && f.d && f.d._pt) for (f = f.d._pt; f && f.p !== i && f.fp !== i; ) f = f._next;
      if (!f) return ms = 1, t.vars[i] = "+=0", Hs(t, a), ms = 0, l ? Zr(i + " not eligible for reset. Try splitting into individual properties") : 1;
      u.push(f);
    }
    for (h = u.length; h--; ) _ = u[h], f = _._pt || _, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c, f.c = e - f.s, _.e && (_.e = wt(e) + $t(_.e)), _.b && (_.b = f.s + $t(_.b));
  };
  var tu = function(t, i) {
    var e = t[0] ? Wi(t[0]).harness : 0, r = e && e.aliases, n, o, a, l;
    if (!r) return i;
    n = vr({}, i);
    for (o in r) if (o in n) for (l = r[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
    return n;
  };
  var eu = function(t, i, e, r) {
    var n = i.ease || r || "power1.inOut", o, a;
    if (qt(i)) a = e[t] || (e[t] = []), i.forEach(function(l, u) {
      return a.push({ t: u / (i.length - 1) * 100, v: l, e: n });
    });
    else for (o in i) a = e[o] || (e[o] = []), o === "ease" || a.push({ t: parseFloat(t), v: i[o], e: n });
  };
  var Br = function(t, i, e, r, n) {
    return gt(t) ? t.call(i, e, r, n) : At(t) && ~t.indexOf("random(") ? Jr(t) : t;
  };
  var Sa = Ys + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
  var Ca = {};
  ue(Sa + ",id,stagger,delay,duration,paused,scrollTrigger", function(s18) {
    return Ca[s18] = 1;
  });
  var Ct = (function(s18) {
    $o(t, s18);
    function t(e, r, n, o) {
      var a;
      typeof r == "number" && (n.duration = r, r = n, n = null), a = s18.call(this, o ? r : Ir(r)) || this;
      var l = a.vars, u = l.duration, f = l.delay, _ = l.immediateRender, c = l.stagger, h = l.overwrite, p = l.keyframes, d = l.defaults, g = l.scrollTrigger, x = r.parent || ht, v = (qt(e) || qo(e) ? ai(e[0]) : "length" in r) ? [e] : Re(e), b, y, S, P, T, O, k, C;
      if (a._targets = v.length ? Bs(v) : Zr("GSAP target " + e + " not found. https://gsap.com", !Se.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, p || c || hn(u) || hn(f)) {
        r = a.vars;
        var B = r.easeReverse || r.yoyoEase;
        if (b = a.timeline = new ae({ data: "nested", defaults: d || {}, targets: x && x.data === "nested" ? x.vars.targets : v }), b.kill(), b.parent = b._dp = ii(a), b._start = 0, c || hn(u) || hn(f)) {
          if (P = v.length, k = c && ha(c), Qe(c)) for (T in c) ~Sa.indexOf(T) && (C || (C = {}), C[T] = c[T]);
          for (y = 0; y < P; y++) S = Ln(r, Ca), S.stagger = 0, B && (S.easeReverse = B), C && vr(S, C), O = v[y], S.duration = +Br(u, ii(a), y, O, v), S.delay = (+Br(f, ii(a), y, O, v) || 0) - a._delay, !c && P === 1 && S.delay && (a._delay = f = S.delay, a._start += f, S.delay = 0), b.to(O, S, k ? k(y, O, v) : 0), b._ease = q.none;
          b.duration() ? u = f = 0 : a.timeline = 0;
        } else if (p) {
          Ir(ke(b.vars.defaults, { ease: "none" })), b._ease = Vi(p.ease || r.ease || "none");
          var M = 0, K, I, Q;
          if (qt(p)) p.forEach(function($) {
            return b.to(v, $, ">");
          }), b.duration();
          else {
            S = {};
            for (T in p) T === "ease" || T === "easeEach" || eu(T, p[T], S, p.easeEach);
            for (T in S) for (K = S[T].sort(function($, z) {
              return $.t - z.t;
            }), M = 0, y = 0; y < K.length; y++) I = K[y], Q = { ease: I.e, duration: (I.t - (y ? K[y - 1].t : 0)) / 100 * u }, Q[T] = I.v, b.to(v, Q, M), M += Q.duration;
            b.duration() < u && b.to({}, { duration: u - b.duration() });
          }
        }
        u || a.duration(u = b.duration());
      } else a.timeline = 0;
      return h === true && !As && (mi = ii(a), ht.killTweensOf(v), mi = 0), $e(x, ii(a), n), r.reversed && a.reverse(), r.paused && a.paused(true), (_ || !u && !p && a._start === ft(x._time) && le(_) && Dl(ii(a)) && x.data !== "nested") && (a._tTime = -st, a.render(Math.max(0, -f) || 0)), g && aa(ii(a), g), a;
    }
    var i = t.prototype;
    return i.render = function(r, n, o) {
      var a = this._time, l = this._tDur, u = this._dur, f = r < 0, _ = r > l - st && !f ? l : r < st ? 0 : r, c, h, p, d, g, x, v, b;
      if (!u) Al(this, r, n, o);
      else if (_ !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
        if (c = _, b = this.timeline, this._repeat) {
          if (d = u + this._rDelay, this._repeat < -1 && f) return this.totalTime(d * 100 + r, n, o);
          if (c = ft(_ % d), _ === l ? (p = this._repeat, c = u) : (g = ft(_ / d), p = ~~g, p && p === g ? (c = u, p--) : c > u && (c = u)), x = this._yoyo && p & 1, x && (c = u - c), g = yr(this._tTime, d), c === a && !o && this._initted && p === g) return this._tTime = _, this;
          p !== g && this.vars.repeatRefresh && !x && !this._lock && c !== d && this._initted && (this._lock = o = 1, this.render(ft(d * p), true).invalidate()._lock = 0);
        }
        if (!this._initted) {
          if (la(this, f ? r : c, o, n, _)) return this._tTime = 0, this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && p !== g)) return this;
          if (u !== this._dur) return this.render(r, n, o);
        }
        if (this._rEase) {
          var y = c < a;
          if (y !== this._inv) {
            var S = y ? a : u - a;
            this._inv = y, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = S ? (y ? -1 : 1) / S : 0, this._invScale = y ? -this.ratio : 1 - this.ratio, this._invEase = y ? this._rEase : this._ease;
          }
          this.ratio = v = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = v = this._ease(c / u);
        if (this._from && (this.ratio = v = 1 - v), this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && _ && !n && !g && (Te(this, "onStart"), this._tTime !== _)) return this;
        for (h = this._pt; h; ) h.r(v, h.d), h = h._next;
        b && b.render(r < 0 ? r : b._dur * b._ease(c / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && cs(this, r, n, o), Te(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && Te(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && cs(this, r, true, true), (r || !u) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Ci(this, 1), !n && !(f && !a) && (_ || a || x) && (Te(this, _ === l ? "onComplete" : "onReverseComplete", true), this._prom && !(_ < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, i.targets = function() {
      return this._targets;
    }, i.invalidate = function(r) {
      return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s18.prototype.invalidate.call(this, r);
    }, i.resetTo = function(r, n, o, a, l) {
      tn || we.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
      return this._initted || Hs(this, u), f = this._ease(u / this._dur), Jl(this, r, n, o, a, f, u, l) ? this.resetTo(r, n, o, a, 1) : ($n(this, 0), this.parent || sa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, i.kill = function(r, n) {
      if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? Dr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!It), this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return this.timeline.killTweensOf(r, n, mi && mi.vars.overwrite !== true)._first || Dr(this), this.parent && o !== this.timeline.totalDuration() && wr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
      }
      var a = this._targets, l = r ? Re(r) : a, u = this._ptLookup, f = this._pt, _, c, h, p, d, g, x;
      if ((!n || n === "all") && El(a, l)) return n === "all" && (this._pt = 0), Dr(this);
      for (_ = this._op = this._op || [], n !== "all" && (At(n) && (d = {}, ue(n, function(v) {
        return d[v] = 1;
      }), n = d), n = tu(a, n)), x = a.length; x--; ) if (~l.indexOf(a[x])) {
        c = u[x], n === "all" ? (_[x] = n, p = c, h = {}) : (h = _[x] = _[x] || {}, p = n);
        for (d in p) g = c && c[d], g && ((!("kill" in g.d) || g.d.kill(d) === true) && Vn(this, g, "_pt"), delete c[d]), h !== "all" && (h[d] = 1);
      }
      return this._initted && !this._pt && f && Dr(this), this;
    }, t.to = function(r, n) {
      return new t(r, n, arguments[2]);
    }, t.from = function(r, n) {
      return Yr(1, arguments);
    }, t.delayedCall = function(r, n, o, a) {
      return new t(n, 0, { immediateRender: false, lazy: false, overwrite: false, delay: r, onComplete: n, onReverseComplete: n, onCompleteParams: o, onReverseCompleteParams: o, callbackScope: a });
    }, t.fromTo = function(r, n, o) {
      return Yr(2, arguments);
    }, t.set = function(r, n) {
      return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
    }, t.killTweensOf = function(r, n, o) {
      return ht.killTweensOf(r, n, o);
    }, t;
  })(en);
  ke(Ct.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  ue("staggerTo,staggerFrom,staggerFromTo", function(s18) {
    Ct[s18] = function() {
      var t = new ae(), i = _s.call(arguments, 0);
      return i.splice(s18 === "staggerFromTo" ? 5 : 4, 0, 0), t[s18].apply(t, i);
    };
  });
  var Vs = function(t, i, e) {
    return t[i] = e;
  };
  var ka = function(t, i, e) {
    return t[i](e);
  };
  var iu = function(t, i, e, r) {
    return t[i](r.fp, e);
  };
  var ru = function(t, i, e) {
    return t.setAttribute(i, e);
  };
  var Us = function(t, i) {
    return gt(t[i]) ? ka : zs(t[i]) && t.setAttribute ? ru : Vs;
  };
  var Pa = function(t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
  };
  var nu = function(t, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * t), i);
  };
  var Oa = function(t, i) {
    var e = i._pt, r = "";
    if (!t && i.b) r = i.b;
    else if (t === 1 && i.e) r = i.e;
    else {
      for (; e; ) r = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + r, e = e._next;
      r += i.c;
    }
    i.set(i.t, i.p, r, i);
  };
  var $s = function(t, i) {
    for (var e = i._pt; e; ) e.r(t, e.d), e = e._next;
  };
  var su = function(t, i, e, r) {
    for (var n = this._pt, o; n; ) o = n._next, n.p === r && n.modifier(t, i, e), n = o;
  };
  var ou = function(t) {
    for (var i = this._pt, e, r; i; ) r = i._next, i.p === t && !i.op || i.op === t ? Vn(this, i, "_pt") : i.dep || (e = 1), i = r;
    return !e;
  };
  var au = function(t, i, e, r) {
    r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
  };
  var Ea = function(t) {
    for (var i = t._pt, e, r, n, o; i; ) {
      for (e = i._next, r = n; r && r.pr > i.pr; ) r = r._next;
      (i._prev = r ? r._prev : o) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : o = i, i = e;
    }
    t._pt = n;
  };
  var fe = (function() {
    function s18(i, e, r, n, o, a, l, u, f) {
      this.t = e, this.s = n, this.c = o, this.p = r, this.r = a || Pa, this.d = l || this, this.set = u || Vs, this.pr = f || 0, this._next = i, i && (i._prev = this);
    }
    var t = s18.prototype;
    return t.modifier = function(e, r, n) {
      this.mSet = this.mSet || this.set, this.set = au, this.m = e, this.mt = n, this.tween = r;
    }, s18;
  })();
  ue(Ys + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s18) {
    return Is[s18] = 1;
  });
  Ce.TweenMax = Ce.TweenLite = Ct;
  Ce.TimelineLite = Ce.TimelineMax = ae;
  ht = new ae({ sortChildren: false, defaults: Qr, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
  Se.stringFilter = wa;
  var Ui = [];
  var kn = {};
  var lu = [];
  var _o = 0;
  var uu = 0;
  var ts = function(t) {
    return (kn[t] || lu).map(function(i) {
      return i();
    });
  };
  var vs = function() {
    var t = Date.now(), i = [];
    t - _o > 2 && (ts("matchMediaInit"), Ui.forEach(function(e) {
      var r = e.queries, n = e.conditions, o, a, l, u;
      for (a in r) o = Ve.matchMedia(r[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
      u && (e.revert(), l && i.push(e));
    }), ts("matchMediaRevert"), i.forEach(function(e) {
      return e.onMatch(e, function(r) {
        return e.add(null, r);
      });
    }), _o = t, ts("matchMedia"));
  };
  var Ma = (function() {
    function s18(i, e) {
      this.selector = e && ps(e), this.data = [], this._r = [], this.isReverted = false, this.id = uu++, i && this.add(i);
    }
    var t = s18.prototype;
    return t.add = function(e, r, n) {
      gt(e) && (n = r, r = e, e = gt);
      var o = this, a = function() {
        var u = lt, f = o.selector, _;
        return u && u !== o && u.data.push(o), n && (o.selector = ps(n)), lt = o, _ = r.apply(o, arguments), gt(_) && o._r.push(_), lt = u, o.selector = f, o.isReverted = false, _;
      };
      return o.last = a, e === gt ? a(o, function(l) {
        return o.add(null, l);
      }) : e ? o[e] = a : a;
    }, t.ignore = function(e) {
      var r = lt;
      lt = null, e(this), lt = r;
    }, t.getTweens = function() {
      var e = [];
      return this.data.forEach(function(r) {
        return r instanceof s18 ? e.push.apply(e, r.getTweens()) : r instanceof Ct && !(r.parent && r.parent.data === "nested") && e.push(r);
      }), e;
    }, t.clear = function() {
      this._r.length = this.data.length = 0;
    }, t.kill = function(e, r) {
      var n = this;
      if (e ? (function() {
        for (var a = n.getTweens(), l = n.data.length, u; l--; ) u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(true, true, false).forEach(function(f) {
          return a.splice(a.indexOf(f), 1);
        }));
        for (a.map(function(f) {
          return { g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0, t: f };
        }).sort(function(f, _) {
          return _.g - f.g || -1 / 0;
        }).forEach(function(f) {
          return f.t.revert(e);
        }), l = n.data.length; l--; ) u = n.data[l], u instanceof ae ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ct) && u.revert && u.revert(e);
        n._r.forEach(function(f) {
          return f(e, n);
        }), n.isReverted = true;
      })() : this.data.forEach(function(a) {
        return a.kill && a.kill();
      }), this.clear(), r) for (var o = Ui.length; o--; ) Ui[o].id === this.id && Ui.splice(o, 1);
    }, t.revert = function(e) {
      this.kill(e || {});
    }, s18;
  })();
  var fu = (function() {
    function s18(i) {
      this.contexts = [], this.scope = i, lt && lt.data.push(this);
    }
    var t = s18.prototype;
    return t.add = function(e, r, n) {
      Qe(e) || (e = { matches: e });
      var o = new Ma(0, n || this.scope), a = o.conditions = {}, l, u, f;
      lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = e;
      for (u in e) u === "all" ? f = 1 : (l = Ve.matchMedia(e[u]), l && (Ui.indexOf(o) < 0 && Ui.push(o), (a[u] = l.matches) && (f = 1), l.addListener ? l.addListener(vs) : l.addEventListener("change", vs)));
      return f && r(o, function(_) {
        return o.add(null, _);
      }), this;
    }, t.revert = function(e) {
      this.kill(e || {});
    }, t.kill = function(e) {
      this.contexts.forEach(function(r) {
        return r.kill(e, true);
      });
    }, s18;
  })();
  var Fn = { registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e];
    i.forEach(function(r) {
      return ma(r);
    });
  }, timeline: function(t) {
    return new ae(t);
  }, getTweensOf: function(t, i) {
    return ht.getTweensOf(t, i);
  }, getProperty: function(t, i, e, r) {
    At(t) && (t = Re(t)[0]);
    var n = Wi(t || {}).get, o = e ? na : ra;
    return e === "native" && (e = ""), t && (i ? o((ve[i] && ve[i].get || n)(t, i, e, r)) : function(a, l, u) {
      return o((ve[a] && ve[a].get || n)(t, a, l, u));
    });
  }, quickSetter: function(t, i, e) {
    if (t = Re(t), t.length > 1) {
      var r = t.map(function(f) {
        return ce.quickSetter(f, i, e);
      }), n = r.length;
      return function(f) {
        for (var _ = n; _--; ) r[_](f);
      };
    }
    t = t[0] || {};
    var o = ve[i], a = Wi(t), l = a.harness && (a.harness.aliases || {})[i] || i, u = o ? function(f) {
      var _ = new o();
      ur._pt = 0, _.init(t, e ? f + e : f, ur, 0, [t]), _.render(1, _), ur._pt && $s(1, ur);
    } : a.set(t, l);
    return o ? u : function(f) {
      return u(t, l, e ? f + e : f, a, 1);
    };
  }, quickTo: function(t, i, e) {
    var r, n = ce.to(t, ke((r = {}, r[i] = "+=0.1", r.paused = true, r.stagger = 0, r), e || {})), o = function(l, u, f) {
      return n.resetTo(i, l, u, f);
    };
    return o.tween = n, o;
  }, isTweening: function(t) {
    return ht.getTweensOf(t, true).length > 0;
  }, defaults: function(t) {
    return t && t.ease && (t.ease = Vi(t.ease, Qr.ease)), lo(Qr, t || {});
  }, config: function(t) {
    return lo(Se, t || {});
  }, registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ve[a] && !Ce[a] && Zr(i + " effect requires " + a + " plugin.");
    }), Qn[i] = function(a, l, u) {
      return e(Re(a), ke(l || {}, n), u);
    }, o && (ae.prototype[i] = function(a, l, u) {
      return this.add(Qn[i](a, Qe(l) ? l : (u = l) && {}, this), u);
    });
  }, registerEase: function(t, i) {
    q[t] = Vi(i);
  }, parseEase: function(t, i) {
    return arguments.length ? Vi(t, i) : q;
  }, getById: function(t) {
    return ht.getById(t);
  }, exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new ae(t), r, n;
    for (e.smoothChildTiming = le(t.smoothChildTiming), ht.remove(e), e._dp = 0, e._time = e._tTime = ht._time, r = ht._first; r; ) n = r._next, (i || !(!r._dur && r instanceof Ct && r.vars.onComplete === r._targets[0])) && $e(e, r, r._start - r._delay), r = n;
    return $e(ht, e, 0), e;
  }, context: function(t, i) {
    return t ? new Ma(t, i) : lt;
  }, matchMedia: function(t) {
    return new fu(t);
  }, matchMediaRefresh: function() {
    return Ui.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i) i[r] && (i[r] = false, e = 1);
      e && t.revert();
    }) || vs();
  }, addEventListener: function(t, i) {
    var e = kn[t] || (kn[t] = []);
    ~e.indexOf(i) || e.push(i);
  }, removeEventListener: function(t, i) {
    var e = kn[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  }, utils: { wrap: Xl, wrapYoyo: Wl, distribute: ha, random: da, snap: ca, normalize: Bl, getUnit: $t, clamp: Nl, splitColor: va, toArray: Re, selector: ps, mapRange: pa, pipe: Il, unitize: Yl, interpolate: Hl, shuffle: fa }, install: jo, effects: Qn, ticker: we, updateRoot: ae.updateRoot, plugins: ve, globalTimeline: ht, core: { PropTween: fe, globals: Jo, Tween: Ct, Timeline: ae, Animation: en, getCache: Wi, _removeLinkedListItem: Vn, reverting: function() {
    return It;
  }, context: function(t) {
    return t && lt && (lt.data.push(t), t._ctx = lt), lt;
  }, suppressOverwrites: function(t) {
    return As = t;
  } } };
  ue("to,from,fromTo,delayedCall,set,killTweensOf", function(s18) {
    return Fn[s18] = Ct[s18];
  });
  we.add(ae.updateRoot);
  ur = Fn.to({}, { duration: 0 });
  var hu = function(t, i) {
    for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; ) e = e._next;
    return e;
  };
  var cu = function(t, i) {
    var e = t._targets, r, n, o;
    for (r in i) for (n = e.length; n--; ) o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = hu(o, r)), o && o.modifier && o.modifier(i[r], t, e[n], r));
  };
  var es = function(t, i) {
    return { name: t, headless: 1, rawVars: 1, init: function(r, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (At(n) && (l = {}, ue(n, function(f) {
          return l[f] = 1;
        }), n = l), i) {
          l = {};
          for (u in n) l[u] = i(n[u]);
          n = l;
        }
        cu(a, n);
      };
    } };
  };
  var ce = Fn.registerPlugin({ name: "attr", init: function(t, i, e, r, n) {
    var o, a, l;
    this.tween = e;
    for (o in i) l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", i[o], r, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  }, render: function(t, i) {
    for (var e = i._pt; e; ) It ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  } }, { name: "endArray", headless: 1, init: function(t, i) {
    for (var e = i.length; e--; ) this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  } }, es("roundProps", gs), es("modifiers"), es("snap", ca)) || Fn;
  Ct.version = ae.version = ce.version = "3.15.0";
  Zo = 1;
  Ls() && xr();
  q.Power0;
  q.Power1;
  q.Power2;
  q.Power3;
  q.Power4;
  q.Linear;
  q.Quad;
  q.Cubic;
  q.Quart;
  q.Quint;
  q.Strong;
  q.Elastic;
  q.Back;
  q.SteppedEase;
  q.Bounce;
  q.Sine;
  q.Expo;
  q.Circ;
  var po;
  var vi;
  var cr;
  var Gs;
  var Bi;
  var go;
  var qs;
  var du = function() {
    return typeof window < "u";
  };
  var li = {};
  var Fi = 180 / Math.PI;
  var dr = Math.PI / 180;
  var ir = Math.atan2;
  var mo = 1e8;
  var Ks = /([A-Z])/g;
  var _u = /(left|right|width|margin|padding|x)/i;
  var pu = /[\s,\(]\S/;
  var Ge = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" };
  var ys = function(t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
  };
  var gu = function(t, i) {
    return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
  };
  var mu = function(t, i) {
    return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
  };
  var vu = function(t, i) {
    return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
  };
  var yu = function(t, i) {
    var e = i.s + i.c * t;
    i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
  };
  var Da = function(t, i) {
    return i.set(i.t, i.p, t ? i.e : i.b, i);
  };
  var Ra = function(t, i) {
    return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
  };
  var wu = function(t, i, e) {
    return t.style[i] = e;
  };
  var xu = function(t, i, e) {
    return t.style.setProperty(i, e);
  };
  var Tu = function(t, i, e) {
    return t._gsap[i] = e;
  };
  var bu = function(t, i, e) {
    return t._gsap.scaleX = t._gsap.scaleY = e;
  };
  var Su = function(t, i, e, r, n) {
    var o = t._gsap;
    o.scaleX = o.scaleY = e, o.renderTransform(n, o);
  };
  var Cu = function(t, i, e, r, n) {
    var o = t._gsap;
    o[i] = e, o.renderTransform(n, o);
  };
  var ct = "transform";
  var he = ct + "Origin";
  var ku = function s11(t, i) {
    var e = this, r = this.target, n = r.style, o = r._gsap;
    if (t in li && n) {
      if (this.tfm = this.tfm || {}, t !== "transform") t = Ge[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = ri(r, a);
      }) : this.tfm[t] = o.x ? o[t] : ri(r, t), t === he && (this.tfm.zOrigin = o.zOrigin);
      else return Ge.transform.split(",").forEach(function(a) {
        return s11.call(e, a, i);
      });
      if (this.props.indexOf(ct) >= 0) return;
      o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(he, i, "")), t = ct;
    }
    (n || i) && this.props.push(t, i, n[t]);
  };
  var Aa = function(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  };
  var Pu = function() {
    var t = this.props, i = this.target, e = i.style, r = i._gsap, n, o;
    for (n = 0; n < t.length; n += 3) t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ks, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = qs(), (!n || !n.isStart) && !e[ct] && (Aa(e), r.zOrigin && e[he] && (e[he] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
    }
  };
  var za = function(t, i) {
    var e = { target: t, props: [], revert: Pu, save: ku };
    return t._gsap || ce.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
      return e.save(r);
    }), e;
  };
  var La;
  var ws = function(t, i) {
    var e = vi.createElementNS ? vi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : vi.createElement(t);
    return e && e.style ? e : vi.createElement(t);
  };
  var be = function s12(t, i, e) {
    var r = getComputedStyle(t);
    return r[i] || r.getPropertyValue(i.replace(Ks, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && s12(t, Tr(i) || i, 1) || "";
  };
  var vo = "O,Moz,ms,Ms,Webkit".split(",");
  var Tr = function(t, i, e) {
    var r = i || Bi, n = r.style, o = 5;
    if (t in n && !e) return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(vo[o] + t in n); ) ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? vo[o] : "") + t;
  };
  var xs = function() {
    du() && window.document && (po = window, vi = po.document, cr = vi.documentElement, Bi = ws("div") || { style: {} }, ws("div"), ct = Tr(ct), he = ct + "Origin", Bi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", La = !!Tr("perspective"), qs = ce.core.reverting, Gs = 1);
  };
  var yo = function(t) {
    var i = t.ownerSVGElement, e = ws("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(true), n;
    r.style.display = "block", e.appendChild(r), cr.appendChild(e);
    try {
      n = r.getBBox();
    } catch {
    }
    return e.removeChild(r), cr.removeChild(e), n;
  };
  var wo = function(t, i) {
    for (var e = i.length; e--; ) if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
  };
  var Na = function(t) {
    var i, e;
    try {
      i = t.getBBox();
    } catch {
      i = yo(t), e = 1;
    }
    return i && (i.width || i.height) || e || (i = yo(t)), i && !i.width && !i.x && !i.y ? { x: +wo(t, ["x", "cx", "x1"]) || 0, y: +wo(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : i;
  };
  var Fa = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Na(t));
  };
  var ki = function(t, i) {
    if (i) {
      var e = t.style, r;
      i in li && i !== he && (i = ct), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(Ks, "-$1").toLowerCase())) : e.removeAttribute(i);
    }
  };
  var yi = function(t, i, e, r, n, o) {
    var a = new fe(t._pt, i, e, 0, 1, o ? Ra : Da);
    return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
  };
  var xo = { deg: 1, rad: 1, turn: 1 };
  var Ou = { grid: 1, flex: 1 };
  var Pi = function s13(t, i, e, r) {
    var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Bi.style, l = _u.test(i), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), _ = 100, c = r === "px", h = r === "%", p, d, g, x;
    if (r === o || !n || xo[r] || xo[o]) return n;
    if (o !== "px" && !c && (n = s13(t, i, e, "px")), x = t.getCTM && Fa(t), (h || o === "%") && (li[i] || ~i.indexOf("adius"))) return p = x ? t.getBBox()[l ? "width" : "height"] : t[f], wt(h ? n / p * _ : n / 100 * p);
    if (a[l ? "width" : "height"] = _ + (c ? o : r), d = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, x && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === vi || !d.appendChild) && (d = vi.body), g = d._gsap, g && h && g.width && l && g.time === we.time && !g.uncache) return wt(n / g.width * _);
    if (h && (i === "height" || i === "width")) {
      var v = t.style[i];
      t.style[i] = _ + r, p = t[f], v ? t.style[i] = v : ki(t, i);
    } else (h || o === "%") && !Ou[be(d, "display")] && (a.position = be(t, "position")), d === t && (a.position = "static"), d.appendChild(Bi), p = Bi[f], d.removeChild(Bi), a.position = "absolute";
    return l && h && (g = Wi(d), g.time = we.time, g.width = d[f]), wt(c ? p * n / _ : p && n ? _ / p * n : 0);
  };
  var ri = function(t, i, e, r) {
    var n;
    return Gs || xs(), i in Ge && i !== "transform" && (i = Ge[i], ~i.indexOf(",") && (i = i.split(",")[0])), li[i] && i !== "transform" ? (n = nn(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : Yn(be(t, he)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = In[i] && In[i](t, i, e) || be(t, i) || ea(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Pi(t, i, n, e) + e : n;
  };
  var Eu = function(t, i, e, r) {
    if (!e || e === "none") {
      var n = Tr(i, t, 1), o = n && be(t, n, 1);
      o && o !== e ? (i = n, e = o) : i === "borderColor" && (e = be(t, "borderTopColor"));
    }
    var a = new fe(this._pt, t.style, i, 0, 1, Oa), l = 0, u = 0, f, _, c, h, p, d, g, x, v, b, y, S;
    if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = be(t, r.substring(4, r.indexOf(")")))), r === "auto" && (d = t.style[i], t.style[i] = r, r = be(t, i) || r, d ? t.style[i] = d : ki(t, i)), f = [e, r], wa(f), e = f[0], r = f[1], c = e.match(lr) || [], S = r.match(lr) || [], S.length) {
      for (; _ = lr.exec(r); ) g = _[0], v = r.substring(l, _.index), p ? p = (p + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1), g !== (d = c[u++] || "") && (h = parseFloat(d) || 0, y = d.substr((h + "").length), g.charAt(1) === "=" && (g = hr(h, g) + y), x = parseFloat(g), b = g.substr((x + "").length), l = lr.lastIndex - b.length, b || (b = b || Se.units[i] || y, l === r.length && (r += b, a.e += b)), y !== b && (h = Pi(t, i, d, b) || 0), a._pt = { _next: a._pt, p: v || u === 1 ? v : ",", s: h, c: x - h, m: p && p < 4 || i === "zIndex" ? Math.round : 0 });
      a.c = l < r.length ? r.substring(l, r.length) : "";
    } else a.r = i === "display" && r === "none" ? Ra : Da;
    return Qo.test(r) && (a.e = 0), this._pt = a, a;
  };
  var To = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" };
  var Mu = function(t) {
    var i = t.split(" "), e = i[0], r = i[1] || "50%";
    return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = To[e] || e, i[1] = To[r] || r, i.join(" ");
  };
  var Du = function(t, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var e = i.t, r = e.style, n = i.u, o = e._gsap, a, l, u;
      if (n === "all" || n === true) r.cssText = "", l = 1;
      else for (n = n.split(","), u = n.length; --u > -1; ) a = n[u], li[a] && (l = 1, a = a === "transformOrigin" ? he : ct), ki(e, a);
      l && (ki(e, ct), o && (o.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", nn(e, 1), o.uncache = 1, Aa(r)));
    }
  };
  var In = { clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new fe(t._pt, i, e, 0, 0, Du);
      return o.u = r, o.pr = -10, o.tween = n, t._props.push(e), 1;
    }
  } };
  var rn = [1, 0, 0, 1, 0, 0];
  var Ia = {};
  var Ya = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  };
  var bo = function(t) {
    var i = be(t, ct);
    return Ya(i) ? rn : i.substr(7).match(Ko).map(wt);
  };
  var Qs = function(t, i) {
    var e = t._gsap || Wi(t), r = t.style, n = bo(t), o, a, l, u;
    return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? rn : n) : (n === rn && !t.offsetParent && t !== cr && !e.svg && (l = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, cr.appendChild(t)), n = bo(t), l ? r.display = l : ki(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : cr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  };
  var Ts = function(t, i, e, r, n, o) {
    var a = t._gsap, l = n || Qs(t, true), u = a.xOrigin || 0, f = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, h = l[0], p = l[1], d = l[2], g = l[3], x = l[4], v = l[5], b = i.split(" "), y = parseFloat(b[0]) || 0, S = parseFloat(b[1]) || 0, P, T, O, k;
    e ? l !== rn && (T = h * g - p * d) && (O = y * (g / T) + S * (-d / T) + (d * v - g * x) / T, k = y * (-p / T) + S * (h / T) - (h * v - p * x) / T, y = O, S = k) : (P = Na(t), y = P.x + (~b[0].indexOf("%") ? y / 100 * P.width : y), S = P.y + (~(b[1] || b[0]).indexOf("%") ? S / 100 * P.height : S)), r || r !== false && a.smooth ? (x = y - u, v = S - f, a.xOffset = _ + (x * h + v * d) - x, a.yOffset = c + (x * p + v * g) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = y, a.yOrigin = S, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[he] = "0px 0px", o && (yi(o, a, "xOrigin", u, y), yi(o, a, "yOrigin", f, S), yi(o, a, "xOffset", _, a.xOffset), yi(o, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", y + " " + S);
  };
  var nn = function(t, i) {
    var e = t._gsap || new Ta(t);
    if ("x" in e && !i && !e.uncache) return e;
    var r = t.style, n = e.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = be(t, he) || "0", f, _, c, h, p, d, g, x, v, b, y, S, P, T, O, k, C, B, M, K, I, Q, $, z, Z, it, m, ot, Kt, ze, dt, zt;
    return f = _ = c = d = g = x = v = b = y = 0, h = p = 1, e.svg = !!(t.getCTM && Fa(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[ct] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ct] !== "none" ? l[ct] : "")), r.scale = r.rotate = r.translate = "none"), T = Qs(t, e.svg), e.svg && (e.uncache ? (Z = t.getBBox(), u = e.xOrigin - Z.x + "px " + (e.yOrigin - Z.y) + "px", z = "") : z = !i && t.getAttribute("data-svg-origin"), Ts(t, z || u, !!z || e.originIsAbsolute, e.smooth !== false, T)), S = e.xOrigin || 0, P = e.yOrigin || 0, T !== rn && (B = T[0], M = T[1], K = T[2], I = T[3], f = Q = T[4], _ = $ = T[5], T.length === 6 ? (h = Math.sqrt(B * B + M * M), p = Math.sqrt(I * I + K * K), d = B || M ? ir(M, B) * Fi : 0, v = K || I ? ir(K, I) * Fi + d : 0, v && (p *= Math.abs(Math.cos(v * dr))), e.svg && (f -= S - (S * B + P * K), _ -= P - (S * M + P * I))) : (zt = T[6], ze = T[7], m = T[8], ot = T[9], Kt = T[10], dt = T[11], f = T[12], _ = T[13], c = T[14], O = ir(zt, Kt), g = O * Fi, O && (k = Math.cos(-O), C = Math.sin(-O), z = Q * k + m * C, Z = $ * k + ot * C, it = zt * k + Kt * C, m = Q * -C + m * k, ot = $ * -C + ot * k, Kt = zt * -C + Kt * k, dt = ze * -C + dt * k, Q = z, $ = Z, zt = it), O = ir(-K, Kt), x = O * Fi, O && (k = Math.cos(-O), C = Math.sin(-O), z = B * k - m * C, Z = M * k - ot * C, it = K * k - Kt * C, dt = I * C + dt * k, B = z, M = Z, K = it), O = ir(M, B), d = O * Fi, O && (k = Math.cos(O), C = Math.sin(O), z = B * k + M * C, Z = Q * k + $ * C, M = M * k - B * C, $ = $ * k - Q * C, B = z, Q = Z), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, x = 180 - x), h = wt(Math.sqrt(B * B + M * M + K * K)), p = wt(Math.sqrt($ * $ + zt * zt)), O = ir(Q, $), v = Math.abs(O) > 2e-4 ? O * Fi : 0, y = dt ? 1 / (dt < 0 ? -dt : dt) : 0), e.svg && (z = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Ya(be(t, ct)), z && t.setAttribute("transform", z))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (h *= -1, v += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (p *= -1, v += v <= 0 ? 180 : -180)), i = i || e.uncache, e.x = f - ((e.xPercent = f && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = _ - ((e.yPercent = _ && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = c + o, e.scaleX = wt(h), e.scaleY = wt(p), e.rotation = wt(d) + a, e.rotationX = wt(g) + a, e.rotationY = wt(x) + a, e.skewX = v + a, e.skewY = b + a, e.transformPerspective = y + o, (e.zOrigin = parseFloat(u.split(" ")[2]) || !i && e.zOrigin || 0) && (r[he] = Yn(u)), e.xOffset = e.yOffset = 0, e.force3D = Se.force3D, e.renderTransform = e.svg ? Au : La ? Ba : Ru, e.uncache = 0, e;
  };
  var Yn = function(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  };
  var is = function(t, i, e) {
    var r = $t(i);
    return wt(parseFloat(i) + parseFloat(Pi(t, "x", e + "px", r))) + r;
  };
  var Ru = function(t, i) {
    i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Ba(t, i);
  };
  var Li = "0deg";
  var Or = "0px";
  var Ni = ") ";
  var Ba = function(t, i) {
    var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.z, u = e.rotation, f = e.rotationY, _ = e.rotationX, c = e.skewX, h = e.skewY, p = e.scaleX, d = e.scaleY, g = e.transformPerspective, x = e.force3D, v = e.target, b = e.zOrigin, y = "", S = x === "auto" && t && t !== 1 || x === true;
    if (b && (_ !== Li || f !== Li)) {
      var P = parseFloat(f) * dr, T = Math.sin(P), O = Math.cos(P), k;
      P = parseFloat(_) * dr, k = Math.cos(P), o = is(v, o, T * k * -b), a = is(v, a, -Math.sin(P) * -b), l = is(v, l, O * k * -b + b);
    }
    g !== Or && (y += "perspective(" + g + Ni), (r || n) && (y += "translate(" + r + "%, " + n + "%) "), (S || o !== Or || a !== Or || l !== Or) && (y += l !== Or || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ni), u !== Li && (y += "rotate(" + u + Ni), f !== Li && (y += "rotateY(" + f + Ni), _ !== Li && (y += "rotateX(" + _ + Ni), (c !== Li || h !== Li) && (y += "skew(" + c + ", " + h + Ni), (p !== 1 || d !== 1) && (y += "scale(" + p + ", " + d + Ni), v.style[ct] = y || "translate(0, 0)";
  };
  var Au = function(t, i) {
    var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.rotation, u = e.skewX, f = e.skewY, _ = e.scaleX, c = e.scaleY, h = e.target, p = e.xOrigin, d = e.yOrigin, g = e.xOffset, x = e.yOffset, v = e.forceCSS, b = parseFloat(o), y = parseFloat(a), S, P, T, O, k;
    l = parseFloat(l), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, l += f), l || u ? (l *= dr, u *= dr, S = Math.cos(l) * _, P = Math.sin(l) * _, T = Math.sin(l - u) * -c, O = Math.cos(l - u) * c, u && (f *= dr, k = Math.tan(u - f), k = Math.sqrt(1 + k * k), T *= k, O *= k, f && (k = Math.tan(f), k = Math.sqrt(1 + k * k), S *= k, P *= k)), S = wt(S), P = wt(P), T = wt(T), O = wt(O)) : (S = _, O = c, P = T = 0), (b && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (b = Pi(h, "x", o, "px"), y = Pi(h, "y", a, "px")), (p || d || g || x) && (b = wt(b + p - (p * S + d * T) + g), y = wt(y + d - (p * P + d * O) + x)), (r || n) && (k = h.getBBox(), b = wt(b + r / 100 * k.width), y = wt(y + n / 100 * k.height)), k = "matrix(" + S + "," + P + "," + T + "," + O + "," + b + "," + y + ")", h.setAttribute("transform", k), v && (h.style[ct] = k);
  };
  var zu = function(t, i, e, r, n) {
    var o = 360, a = At(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Fi : 1), u = l - r, f = r + u + "deg", _, c;
    return a && (_ = n.split("_")[1], _ === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), _ === "cw" && u < 0 ? u = (u + o * mo) % o - ~~(u / o) * o : _ === "ccw" && u > 0 && (u = (u - o * mo) % o - ~~(u / o) * o)), t._pt = c = new fe(t._pt, i, e, r, u, gu), c.e = f, c.u = "deg", t._props.push(e), c;
  };
  var So = function(t, i) {
    for (var e in i) t[e] = i[e];
    return t;
  };
  var Lu = function(t, i, e) {
    var r = So({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, l, u, f, _, c, h, p;
    r.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), o[ct] = i, a = nn(e, 1), ki(e, ct), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[ct], o[ct] = i, a = nn(e, 1), o[ct] = u);
    for (l in li) u = r[l], f = a[l], u !== f && n.indexOf(l) < 0 && (h = $t(u), p = $t(f), _ = h !== p ? Pi(e, l, u, p) : parseFloat(u), c = parseFloat(f), t._pt = new fe(t._pt, a, l, _, c - _, ys), t._pt.u = p || 0, t._props.push(l));
    So(a, r);
  };
  ue("padding,margin,Width,Radius", function(s18, t) {
    var i = "Top", e = "Right", r = "Bottom", n = "Left", o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
      return t < 2 ? s18 + a : "border" + a + s18;
    });
    In[t > 1 ? "border" + s18 : s18] = function(a, l, u, f, _) {
      var c, h;
      if (arguments.length < 4) return c = o.map(function(p) {
        return ri(a, p, u);
      }), h = c.join(" "), h.split(c[0]).length === 5 ? c[0] : h;
      c = (f + "").split(" "), h = {}, o.forEach(function(p, d) {
        return h[p] = c[d] = c[d] || c[(d - 1) / 2 | 0];
      }), a.init(l, h, _);
    };
  });
  var Xa = { name: "css", register: xs, targetTest: function(t) {
    return t.style && t.nodeType;
  }, init: function(t, i, e, r, n) {
    var o = this._props, a = t.style, l = e.vars.startAt, u, f, _, c, h, p, d, g, x, v, b, y, S, P, T, O, k;
    Gs || xs(), this.styles = this.styles || za(t), O = this.styles.props, this.tween = e;
    for (d in i) if (d !== "autoRound" && (f = i[d], !(ve[d] && ba(d, i, e, r, t, n)))) {
      if (h = typeof f, p = In[d], h === "function" && (f = f.call(e, r, t, n), h = typeof f), h === "string" && ~f.indexOf("random(") && (f = Jr(f)), p) p(this, t, d, f, e) && (T = 1);
      else if (d.substr(0, 2) === "--") u = (getComputedStyle(t).getPropertyValue(d) + "").trim(), f += "", bi.lastIndex = 0, bi.test(u) || (g = $t(u), x = $t(f), x ? g !== x && (u = Pi(t, d, u, x) + x) : g && (f += g)), this.add(a, "setProperty", u, f, r, n, 0, 0, d), o.push(d), O.push(d, 0, a[d]);
      else if (h !== "undefined") {
        if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(e, r, t, n) : l[d], At(u) && ~u.indexOf("random(") && (u = Jr(u)), $t(u + "") || u === "auto" || (u += Se.units[d] || $t(ri(t, d)) || ""), (u + "").charAt(1) === "=" && (u = ri(t, d))) : u = ri(t, d), c = parseFloat(u), v = h === "string" && f.charAt(1) === "=" && f.substr(0, 2), v && (f = f.substr(2)), _ = parseFloat(f), d in Ge && (d === "autoAlpha" && (c === 1 && ri(t, "visibility") === "hidden" && _ && (c = 0), O.push("visibility", 0, a.visibility), yi(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), d !== "scale" && d !== "transform" && (d = Ge[d], ~d.indexOf(",") && (d = d.split(",")[0]))), b = d in li, b) {
          if (this.styles.save(d), k = f, h === "string" && f.substring(0, 6) === "var(--") {
            if (f = be(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
              var C = t.style.perspective;
              t.style.perspective = f, f = be(t, "perspective"), C ? t.style.perspective = C : ki(t, "perspective");
            }
            _ = parseFloat(f);
          }
          if (y || (S = t._gsap, S.renderTransform && !i.parseTransform || nn(t, i.parseTransform), P = i.smoothOrigin !== false && S.smooth, y = this._pt = new fe(this._pt, a, ct, 0, 1, S.renderTransform, S, 0, -1), y.dep = 1), d === "scale") this._pt = new fe(this._pt, S, "scaleY", S.scaleY, (v ? hr(S.scaleY, v + _) : _) - S.scaleY || 0, ys), this._pt.u = 0, o.push("scaleY", d), d += "X";
          else if (d === "transformOrigin") {
            O.push(he, 0, a[he]), f = Mu(f), S.svg ? Ts(t, f, 0, P, 0, this) : (x = parseFloat(f.split(" ")[2]) || 0, x !== S.zOrigin && yi(this, S, "zOrigin", S.zOrigin, x), yi(this, a, d, Yn(u), Yn(f)));
            continue;
          } else if (d === "svgOrigin") {
            Ts(t, f, 1, P, 0, this);
            continue;
          } else if (d in Ia) {
            zu(this, S, d, c, v ? hr(c, v + f) : f);
            continue;
          } else if (d === "smoothOrigin") {
            yi(this, S, "smooth", S.smooth, f);
            continue;
          } else if (d === "force3D") {
            S[d] = f;
            continue;
          } else if (d === "transform") {
            Lu(this, f, t);
            continue;
          }
        } else d in a || (d = Tr(d) || d);
        if (b || (_ || _ === 0) && (c || c === 0) && !pu.test(f) && d in a) g = (u + "").substr((c + "").length), _ || (_ = 0), x = $t(f) || (d in Se.units ? Se.units[d] : g), g !== x && (c = Pi(t, d, u, x)), this._pt = new fe(this._pt, b ? S : a, d, c, (v ? hr(c, v + _) : _) - c, !b && (x === "px" || d === "zIndex") && i.autoRound !== false ? yu : ys), this._pt.u = x || 0, b && k !== f ? (this._pt.b = u, this._pt.e = k, this._pt.r = vu) : g !== x && x !== "%" && (this._pt.b = u, this._pt.r = mu);
        else if (d in a) Eu.call(this, t, d, u, v ? v + f : f);
        else if (d in t) this.add(t, d, u || t[d], v ? v + f : f, r, n);
        else if (d !== "parseTransform") {
          Fs(d, f);
          continue;
        }
        b || (d in a ? O.push(d, 0, a[d]) : typeof t[d] == "function" ? O.push(d, 2, t[d]()) : O.push(d, 1, u || t[d])), o.push(d);
      }
    }
    T && Ea(this);
  }, render: function(t, i) {
    if (i.tween._time || !qs()) for (var e = i._pt; e; ) e.r(t, e.d), e = e._next;
    else i.styles.revert();
  }, get: ri, aliases: Ge, getSetter: function(t, i, e) {
    var r = Ge[i];
    return r && r.indexOf(",") < 0 && (i = r), i in li && i !== he && (t._gsap.x || ri(t, "x")) ? e && go === e ? i === "scale" ? bu : Tu : (go = e || {}) && (i === "scale" ? Su : Cu) : t.style && !zs(t.style[i]) ? wu : ~i.indexOf("-") ? xu : Us(t, i);
  }, core: { _removeProperty: ki, _getMatrix: Qs } };
  ce.utils.checkPrefix = Tr;
  ce.core.getStyleSaver = za;
  (function(s18, t, i, e) {
    var r = ue(s18 + "," + t + "," + i, function(n) {
      li[n] = 1;
    });
    ue(t, function(n) {
      Se.units[n] = "deg", Ia[n] = 1;
    }), Ge[r[13]] = s18 + "," + t, ue(e, function(n) {
      var o = n.split(":");
      Ge[o[1]] = r[o[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s18) {
    Se.units[s18] = "px";
  });
  ce.registerPlugin(Xa);
  var Nu = ce.registerPlugin(Xa) || ce;
  Nu.core.Tween;
  function Fu(s18, t) {
    for (var i = 0; i < t.length; i++) {
      var e = t[i];
      e.enumerable = e.enumerable || false, e.configurable = true, "value" in e && (e.writable = true), Object.defineProperty(s18, e.key, e);
    }
  }
  function Iu(s18, t, i) {
    return t && Fu(s18.prototype, t), s18;
  }
  var Ft;
  var Pn;
  var xe;
  var wi;
  var xi;
  var _r;
  var Wa;
  var Ii;
  var pr;
  var Ha;
  var si;
  var Be;
  var Va;
  var Ua = function() {
    return Ft || typeof window < "u" && (Ft = window.gsap) && Ft.registerPlugin && Ft;
  };
  var $a = 1;
  var fr = [];
  var H = [];
  var Ke = [];
  var Xr = Date.now;
  var bs = function(t, i) {
    return i;
  };
  var Yu = function() {
    var t = pr.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
    e.push.apply(e, H), r.push.apply(r, Ke), H = e, Ke = r, bs = function(o, a) {
      return i[o](a);
    };
  };
  var Si = function(t, i) {
    return ~Ke.indexOf(t) && Ke[Ke.indexOf(t) + 1][i];
  };
  var Wr = function(t) {
    return !!~Ha.indexOf(t);
  };
  var te = function(t, i, e, r, n) {
    return t.addEventListener(i, e, { passive: r !== false, capture: !!n });
  };
  var Jt = function(t, i, e, r) {
    return t.removeEventListener(i, e, !!r);
  };
  var cn = "scrollLeft";
  var dn = "scrollTop";
  var Ss = function() {
    return si && si.isPressed || H.cache++;
  };
  var Bn = function(t, i) {
    var e = function r(n) {
      if (n || n === 0) {
        $a && (xe.history.scrollRestoration = "manual");
        var o = si && si.isPressed;
        n = r.v = Math.round(n) || (si && si.iOS ? 1 : 0), t(n), r.cacheID = H.cache, o && bs("ss", n);
      } else (i || H.cache !== r.cacheID || bs("ref")) && (r.cacheID = H.cache, r.v = t());
      return r.v + r.offset;
    };
    return e.offset = 0, t && e;
  };
  var ne = { s: cn, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: Bn(function(s18) {
    return arguments.length ? xe.scrollTo(s18, Ot.sc()) : xe.pageXOffset || wi[cn] || xi[cn] || _r[cn] || 0;
  }) };
  var Ot = { s: dn, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: ne, sc: Bn(function(s18) {
    return arguments.length ? xe.scrollTo(ne.sc(), s18) : xe.pageYOffset || wi[dn] || xi[dn] || _r[dn] || 0;
  }) };
  var oe = function(t, i) {
    return (i && i._ctx && i._ctx.selector || Ft.utils.toArray)(t)[0] || (typeof t == "string" && Ft.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  };
  var Bu = function(t, i) {
    for (var e = i.length; e--; ) if (i[e] === t || i[e].contains(t)) return true;
    return false;
  };
  var Oi = function(t, i) {
    var e = i.s, r = i.sc;
    Wr(t) && (t = wi.scrollingElement || xi);
    var n = H.indexOf(t), o = r === Ot.sc ? 1 : 2;
    !~n && (n = H.push(t) - 1), H[n + o] || te(t, "scroll", Ss);
    var a = H[n + o], l = a || (H[n + o] = Bn(Si(t, e), true) || (Wr(t) ? r : Bn(function(u) {
      return arguments.length ? t[e] = u : t[e];
    })));
    return l.target = t, a || (l.smooth = Ft.getProperty(t, "scrollBehavior") === "smooth"), l;
  };
  var Cs = function(t, i, e) {
    var r = t, n = t, o = Xr(), a = o, l = i || 50, u = Math.max(500, l * 3), f = function(p, d) {
      var g = Xr();
      d || g - o > l ? (n = r, r = p, a = o, o = g) : e ? r += p : r = n + (p - n) / (g - a) * (o - a);
    }, _ = function() {
      n = r = e ? 0 : r, a = o = 0;
    }, c = function(p) {
      var d = a, g = n, x = Xr();
      return (p || p === 0) && p !== r && f(p), o === a || x - a > u ? 0 : (r + (e ? g : -g)) / ((e ? x : o) - d) * 1e3;
    };
    return { update: f, reset: _, getVelocity: c };
  };
  var Er = function(t, i) {
    return i && !t._gsapAllow && t.cancelable !== false && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
  };
  var Co = function(t) {
    var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
    return Math.abs(i) >= Math.abs(e) ? i : e;
  };
  var Ga = function() {
    pr = Ft.core.globals().ScrollTrigger, pr && pr.core && Yu();
  };
  var qa = function(t) {
    return Ft = t || Ua(), !Pn && Ft && typeof document < "u" && document.body && (xe = window, wi = document, xi = wi.documentElement, _r = wi.body, Ha = [xe, wi, xi, _r], Ft.utils.clamp, Va = Ft.core.context || function() {
    }, Ii = "onpointerenter" in _r ? "pointer" : "mouse", Wa = xt.isTouch = xe.matchMedia && xe.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in xe || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Be = xt.eventTypes = ("ontouchstart" in xi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in xi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return $a = 0;
    }, 500), Pn = 1), pr || Ga(), Pn;
  };
  ne.op = Ot;
  H.cache = 0;
  var xt = (function() {
    function s18(i) {
      this.init(i);
    }
    var t = s18.prototype;
    return t.init = function(e) {
      Pn || qa(Ft) || console.warn("Please gsap.registerPlugin(Observer)"), pr || Ga();
      var r = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, l = e.lineHeight, u = e.debounce, f = e.preventDefault, _ = e.onStop, c = e.onStopDelay, h = e.ignore, p = e.wheelSpeed, d = e.event, g = e.onDragStart, x = e.onDragEnd, v = e.onDrag, b = e.onPress, y = e.onRelease, S = e.onRight, P = e.onLeft, T = e.onUp, O = e.onDown, k = e.onChangeX, C = e.onChangeY, B = e.onChange, M = e.onToggleX, K = e.onToggleY, I = e.onHover, Q = e.onHoverEnd, $ = e.onMove, z = e.ignoreCheck, Z = e.isNormalizer, it = e.onGestureStart, m = e.onGestureEnd, ot = e.onWheel, Kt = e.onEnable, ze = e.onDisable, dt = e.onClick, zt = e.scrollSpeed, Yt = e.capture, Tt = e.allowClicks, Qt = e.lockAxis, Bt = e.onLockAxis;
      this.target = a = oe(a) || xi, this.vars = e, h && (h = Ft.utils.toArray(h)), r = r || 1e-9, n = n || 0, p = p || 1, zt = zt || 1, o = o || "wheel,touch,pointer", u = u !== false, l || (l = parseFloat(xe.getComputedStyle(_r).lineHeight) || 22);
      var ui, Zt, jt, j, mt, se, de, w = this, _e = 0, Ze = 0, fi = e.passive || !f && e.passive !== false, _t = Oi(a, ne), je = Oi(a, Ot), hi = _t(), Mi = je(), Et = ~o.indexOf("touch") && !~o.indexOf("pointer") && Be[0] === "pointerdown", ci = Wr(a), vt = a.ownerDocument || wi, Le = [0, 0, 0], Pe = [0, 0, 0], Je = 0, Sr = function() {
        return Je = Xr();
      }, bt = function(L, J) {
        return (w.event = L) && h && Bu(L.target, h) || J && Et && L.pointerType !== "touch" || z && z(L, J);
      }, ln = function() {
        w._vx.reset(), w._vy.reset(), Zt.pause(), _ && _(w);
      }, ti = function() {
        var L = w.deltaX = Co(Le), J = w.deltaY = Co(Pe), E = Math.abs(L) >= r, N = Math.abs(J) >= r;
        B && (E || N) && B(w, L, J, Le, Pe), E && (S && w.deltaX > 0 && S(w), P && w.deltaX < 0 && P(w), k && k(w), M && w.deltaX < 0 != _e < 0 && M(w), _e = w.deltaX, Le[0] = Le[1] = Le[2] = 0), N && (O && w.deltaY > 0 && O(w), T && w.deltaY < 0 && T(w), C && C(w), K && w.deltaY < 0 != Ze < 0 && K(w), Ze = w.deltaY, Pe[0] = Pe[1] = Pe[2] = 0), (j || jt) && ($ && $(w), jt && (g && jt === 1 && g(w), v && v(w), jt = 0), j = false), se && !(se = false) && Bt && Bt(w), mt && (ot(w), mt = false), ui = 0;
      }, Ji = function(L, J, E) {
        Le[E] += L, Pe[E] += J, w._vx.update(L), w._vy.update(J), u ? ui || (ui = requestAnimationFrame(ti)) : ti();
      }, tr = function(L, J) {
        Qt && !de && (w.axis = de = Math.abs(L) > Math.abs(J) ? "x" : "y", se = true), de !== "y" && (Le[2] += L, w._vx.update(L, true)), de !== "x" && (Pe[2] += J, w._vy.update(J, true)), u ? ui || (ui = requestAnimationFrame(ti)) : ti();
      }, di = function(L) {
        if (!bt(L, 1)) {
          L = Er(L, f);
          var J = L.clientX, E = L.clientY, N = J - w.x, A = E - w.y, F = w.isDragging;
          w.x = J, w.y = E, (F || (N || A) && (Math.abs(w.startX - J) >= n || Math.abs(w.startY - E) >= n)) && (jt || (jt = F ? 2 : 1), F || (w.isDragging = true), tr(N, A));
        }
      }, Di = w.onPress = function(Y) {
        bt(Y, 1) || Y && Y.button || (w.axis = de = null, Zt.pause(), w.isPressed = true, Y = Er(Y), _e = Ze = 0, w.startX = w.x = Y.clientX, w.startY = w.y = Y.clientY, w._vx.reset(), w._vy.reset(), te(Z ? a : vt, Be[1], di, fi, true), w.deltaX = w.deltaY = 0, b && b(w));
      }, V = w.onRelease = function(Y) {
        if (!bt(Y, 1)) {
          Jt(Z ? a : vt, Be[1], di, true);
          var L = !isNaN(w.y - w.startY), J = w.isDragging, E = J && (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3), N = Er(Y);
          !E && L && (w._vx.reset(), w._vy.reset(), f && Tt && Ft.delayedCall(0.08, function() {
            if (Xr() - Je > 300 && !Y.defaultPrevented) {
              if (Y.target.click) Y.target.click();
              else if (vt.createEvent) {
                var A = vt.createEvent("MouseEvents");
                A.initMouseEvent("click", true, true, xe, 1, N.screenX, N.screenY, N.clientX, N.clientY, false, false, false, false, 0, null), Y.target.dispatchEvent(A);
              }
            }
          })), w.isDragging = w.isGesturing = w.isPressed = false, _ && J && !Z && Zt.restart(true), jt && ti(), x && J && x(w), y && y(w, E);
        }
      }, Ri = function(L) {
        return L.touches && L.touches.length > 1 && (w.isGesturing = true) && it(L, w.isDragging);
      }, Ne = function() {
        return (w.isGesturing = false) || m(w);
      }, Fe = function(L) {
        if (!bt(L)) {
          var J = _t(), E = je();
          Ji((J - hi) * zt, (E - Mi) * zt, 1), hi = J, Mi = E, _ && Zt.restart(true);
        }
      }, Ie = function(L) {
        if (!bt(L)) {
          L = Er(L, f), ot && (mt = true);
          var J = (L.deltaMode === 1 ? l : L.deltaMode === 2 ? xe.innerHeight : 1) * p;
          Ji(L.deltaX * J, L.deltaY * J, 0), _ && !Z && Zt.restart(true);
        }
      }, Ai = function(L) {
        if (!bt(L)) {
          var J = L.clientX, E = L.clientY, N = J - w.x, A = E - w.y;
          w.x = J, w.y = E, j = true, _ && Zt.restart(true), (N || A) && tr(N, A);
        }
      }, er = function(L) {
        w.event = L, I(w);
      }, ei = function(L) {
        w.event = L, Q(w);
      }, Cr = function(L) {
        return bt(L) || Er(L, f) && dt(w);
      };
      Zt = w._dc = Ft.delayedCall(c || 0.25, ln).pause(), w.deltaX = w.deltaY = 0, w._vx = Cs(0, 50, true), w._vy = Cs(0, 50, true), w.scrollX = _t, w.scrollY = je, w.isDragging = w.isGesturing = w.isPressed = false, Va(this), w.enable = function(Y) {
        return w.isEnabled || (te(ci ? vt : a, "scroll", Ss), o.indexOf("scroll") >= 0 && te(ci ? vt : a, "scroll", Fe, fi, Yt), o.indexOf("wheel") >= 0 && te(a, "wheel", Ie, fi, Yt), (o.indexOf("touch") >= 0 && Wa || o.indexOf("pointer") >= 0) && (te(a, Be[0], Di, fi, Yt), te(vt, Be[2], V), te(vt, Be[3], V), Tt && te(a, "click", Sr, true, true), dt && te(a, "click", Cr), it && te(vt, "gesturestart", Ri), m && te(vt, "gestureend", Ne), I && te(a, Ii + "enter", er), Q && te(a, Ii + "leave", ei), $ && te(a, Ii + "move", Ai)), w.isEnabled = true, w.isDragging = w.isGesturing = w.isPressed = j = jt = false, w._vx.reset(), w._vy.reset(), hi = _t(), Mi = je(), Y && Y.type && Di(Y), Kt && Kt(w)), w;
      }, w.disable = function() {
        w.isEnabled && (fr.filter(function(Y) {
          return Y !== w && Wr(Y.target);
        }).length || Jt(ci ? vt : a, "scroll", Ss), w.isPressed && (w._vx.reset(), w._vy.reset(), Jt(Z ? a : vt, Be[1], di, true)), Jt(ci ? vt : a, "scroll", Fe, Yt), Jt(a, "wheel", Ie, Yt), Jt(a, Be[0], Di, Yt), Jt(vt, Be[2], V), Jt(vt, Be[3], V), Jt(a, "click", Sr, true), Jt(a, "click", Cr), Jt(vt, "gesturestart", Ri), Jt(vt, "gestureend", Ne), Jt(a, Ii + "enter", er), Jt(a, Ii + "leave", ei), Jt(a, Ii + "move", Ai), w.isEnabled = w.isPressed = w.isDragging = false, ze && ze(w));
      }, w.kill = w.revert = function() {
        w.disable();
        var Y = fr.indexOf(w);
        Y >= 0 && fr.splice(Y, 1), si === w && (si = 0);
      }, fr.push(w), Z && Wr(a) && (si = w), w.enable(d);
    }, Iu(s18, [{ key: "velocityX", get: function() {
      return this._vx.getVelocity();
    } }, { key: "velocityY", get: function() {
      return this._vy.getVelocity();
    } }]), s18;
  })();
  xt.version = "3.15.0";
  xt.create = function(s18) {
    return new xt(s18);
  };
  xt.register = qa;
  xt.getAll = function() {
    return fr.slice();
  };
  xt.getById = function(s18) {
    return fr.filter(function(t) {
      return t.vars.id === s18;
    })[0];
  };
  Ua() && Ft.registerPlugin(xt);
  var D;
  var or;
  var W;
  var et;
  var ye;
  var tt;
  var Zs;
  var Xn;
  var sn;
  var Hr;
  var Ar;
  var _n;
  var Vt;
  var Gn;
  var ks;
  var ie;
  var ko;
  var Po;
  var ar;
  var Ka;
  var rs;
  var Qa;
  var ee;
  var Ps;
  var Za;
  var ja;
  var gi;
  var Os;
  var js;
  var gr;
  var Js;
  var Vr;
  var Es;
  var ns;
  var pn = 1;
  var Ut = Date.now;
  var ss = Ut();
  var Ae = 0;
  var zr = 0;
  var Oo = function(t, i, e) {
    var r = me(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
  };
  var Eo = function(t, i) {
    return i && (!me(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
  };
  var Xu = function s14() {
    return zr && requestAnimationFrame(s14);
  };
  var Mo = function() {
    return Gn = 1;
  };
  var Do = function() {
    return Gn = 0;
  };
  var Ue = function(t) {
    return t;
  };
  var Lr = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  };
  var Ja = function() {
    return typeof window < "u";
  };
  var tl = function() {
    return D || Ja() && (D = window.gsap) && D.registerPlugin && D;
  };
  var Ki = function(t) {
    return !!~Zs.indexOf(t);
  };
  var el = function(t) {
    return (t === "Height" ? Js : W["inner" + t]) || ye["client" + t] || tt["client" + t];
  };
  var il = function(t) {
    return Si(t, "getBoundingClientRect") || (Ki(t) ? function() {
      return Rn.width = W.innerWidth, Rn.height = Js, Rn;
    } : function() {
      return ni(t);
    });
  };
  var Wu = function(t, i, e) {
    var r = e.d, n = e.d2, o = e.a;
    return (o = Si(t, "getBoundingClientRect")) ? function() {
      return o()[r];
    } : function() {
      return (i ? el(n) : t["client" + n]) || 0;
    };
  };
  var Hu = function(t, i) {
    return !i || ~Ke.indexOf(t) ? il(t) : function() {
      return Rn;
    };
  };
  var qe = function(t, i) {
    var e = i.s, r = i.d2, n = i.d, o = i.a;
    return Math.max(0, (e = "scroll" + r) && (o = Si(t, e)) ? o() - il(t)()[n] : Ki(t) ? (ye[e] || tt[e]) - el(r) : t[e] - t["offset" + r]);
  };
  var gn = function(t, i) {
    for (var e = 0; e < ar.length; e += 3) (!i || ~i.indexOf(ar[e + 1])) && t(ar[e], ar[e + 1], ar[e + 2]);
  };
  var me = function(t) {
    return typeof t == "string";
  };
  var Gt = function(t) {
    return typeof t == "function";
  };
  var Nr = function(t) {
    return typeof t == "number";
  };
  var Yi = function(t) {
    return typeof t == "object";
  };
  var Mr = function(t, i, e) {
    return t && t.progress(i ? 0 : 1) && e && t.pause();
  };
  var rr = function(t, i, e) {
    if (t.enabled) {
      var r = t._ctx ? t._ctx.add(function() {
        return i(t, e);
      }) : i(t, e);
      r && r.totalTime && (t.callbackAnimation = r);
    }
  };
  var nr = Math.abs;
  var rl = "left";
  var nl = "top";
  var to = "right";
  var eo = "bottom";
  var $i = "width";
  var Gi = "height";
  var Ur = "Right";
  var $r = "Left";
  var Gr = "Top";
  var qr = "Bottom";
  var St = "padding";
  var Ee = "margin";
  var br = "Width";
  var io = "Height";
  var Pt = "px";
  var Me = function(t) {
    return W.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
  };
  var Vu = function(t) {
    var i = Me(t).position;
    t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  };
  var Ro = function(t, i) {
    for (var e in i) e in t || (t[e] = i[e]);
    return t;
  };
  var ni = function(t, i) {
    var e = i && Me(t)[ks] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1), r = t.getBoundingClientRect ? t.getBoundingClientRect() : t.scrollingElement.getBoundingClientRect();
    return e && e.progress(0).kill(), r;
  };
  var Wn = function(t, i) {
    var e = i.d2;
    return t["offset" + e] || t["client" + e] || 0;
  };
  var sl = function(t) {
    var i = [], e = t.labels, r = t.duration(), n;
    for (n in e) i.push(e[n] / r);
    return i;
  };
  var Uu = function(t) {
    return function(i) {
      return D.utils.snap(sl(t), i);
    };
  };
  var ro = function(t) {
    var i = D.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
      return r - n;
    });
    return e ? function(r, n, o) {
      o === void 0 && (o = 1e-3);
      var a;
      if (!n) return i(r);
      if (n > 0) {
        for (r -= o, a = 0; a < e.length; a++) if (e[a] >= r) return e[a];
        return e[a - 1];
      } else for (a = e.length, r += o; a--; ) if (e[a] <= r) return e[a];
      return e[0];
    } : function(r, n, o) {
      o === void 0 && (o = 1e-3);
      var a = i(r);
      return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : i(n < 0 ? r - t : r + t);
    };
  };
  var $u = function(t) {
    return function(i, e) {
      return ro(sl(t))(i, e.direction);
    };
  };
  var mn = function(t, i, e, r) {
    return e.split(",").forEach(function(n) {
      return t(i, n, r);
    });
  };
  var Rt = function(t, i, e, r, n) {
    return t.addEventListener(i, e, { passive: !r, capture: !!n });
  };
  var Dt = function(t, i, e, r) {
    return t.removeEventListener(i, e, !!r);
  };
  var vn = function(t, i, e) {
    e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
  };
  var Ao = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" };
  var yn = { toggleActions: "play", anticipatePin: 0 };
  var Hn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 };
  var On = function(t, i) {
    if (me(t)) {
      var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
      ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in Hn ? Hn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
    }
    return t;
  };
  var wn = function(t, i, e, r, n, o, a, l) {
    var u = n.startColor, f = n.endColor, _ = n.fontSize, c = n.indent, h = n.fontWeight, p = et.createElement("div"), d = Ki(e) || Si(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, x = d ? tt : e.tagName === "IFRAME" ? e.contentDocument.body : e, v = t.indexOf("start") !== -1, b = v ? u : f, y = "border-color:" + b + ";font-size:" + _ + ";color:" + b + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((g || l) && d ? "fixed;" : "absolute;"), (g || l || !d) && (y += (r === Ot ? to : eo) + ":" + (o + parseFloat(c)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), p.style.cssText = y, p.innerText = i || i === 0 ? t + "-" + i : t, x.children[0] ? x.insertBefore(p, x.children[0]) : x.appendChild(p), p._offset = p["offset" + r.op.d2], En(p, 0, r, v), p;
  };
  var En = function(t, i, e, r) {
    var n = { display: "block" }, o = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
    t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + o + br] = 1, n["border" + a + br] = 0, n[e.p] = i + "px", D.set(t, n);
  };
  var X = [];
  var Ms = {};
  var on;
  var zo = function() {
    return Ut() - Ae > 34 && (on || (on = requestAnimationFrame(oi)));
  };
  var sr = function() {
    (!ee || !ee.isPressed || ee.startX > tt.clientWidth) && (H.cache++, ee ? on || (on = requestAnimationFrame(oi)) : oi(), Ae || Zi("scrollStart"), Ae = Ut());
  };
  var os = function() {
    ja = W.innerWidth, Za = W.innerHeight;
  };
  var Fr = function(t) {
    H.cache++, (t === true || !Vt && !Qa && !et.fullscreenElement && !et.webkitFullscreenElement && (!Ps || ja !== W.innerWidth || Math.abs(W.innerHeight - Za) > W.innerHeight * 0.25)) && Xn.restart(true);
  };
  var Qi = {};
  var Gu = [];
  var ol = function s15() {
    return Dt(U, "scrollEnd", s15) || Xi(true);
  };
  var Zi = function(t) {
    return Qi[t] && Qi[t].map(function(i) {
      return i();
    }) || Gu;
  };
  var ge = [];
  var al = function(t) {
    for (var i = 0; i < ge.length; i += 5) (!t || ge[i + 4] && ge[i + 4].query === t) && (ge[i].style.cssText = ge[i + 1], ge[i].getBBox && ge[i].setAttribute("transform", ge[i + 2] || ""), ge[i + 3].uncache = 1);
  };
  var ll = function() {
    return H.forEach(function(t) {
      return Gt(t) && ++t.cacheID && (t.rec = t());
    });
  };
  var no = function(t, i) {
    var e;
    for (ie = 0; ie < X.length; ie++) e = X[ie], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(true, true));
    Vr = true, i && al(i), i || Zi("revert");
  };
  var ul = function(t, i) {
    H.cache++, (i || !re) && H.forEach(function(e) {
      return Gt(e) && e.cacheID++ && (e.rec = 0);
    }), me(t) && (W.history.scrollRestoration = js = t);
  };
  var re;
  var qi = 0;
  var Lo;
  var qu = function() {
    if (Lo !== qi) {
      var t = Lo = qi;
      requestAnimationFrame(function() {
        return t === qi && Xi(true);
      });
    }
  };
  var fl = function() {
    tt.appendChild(gr), Js = !ee && gr.offsetHeight || W.innerHeight, tt.removeChild(gr);
  };
  var No = function(t) {
    return sn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
      return i.style.display = t ? "none" : "block";
    });
  };
  var Xi = function(t, i) {
    if (ye = et.documentElement, tt = et.body, Zs = [W, et, ye, tt], Ae && !t && !Vr) {
      Rt(U, "scrollEnd", ol);
      return;
    }
    fl(), re = U.isRefreshing = true, Vr || ll();
    var e = Zi("refreshInit");
    Ka && U.sort(), i || no(), H.forEach(function(r) {
      Gt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
    }), X.slice(0).forEach(function(r) {
      return r.refresh();
    }), Vr = false, X.forEach(function(r) {
      if (r._subPinOffset && r.pin) {
        var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
        r.revert(true, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
      }
    }), Es = 1, No(true), X.forEach(function(r) {
      var n = qe(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
      (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, true);
    }), No(false), Es = 0, e.forEach(function(r) {
      return r && r.render && r.render(-1);
    }), H.forEach(function(r) {
      Gt(r) && (r.smooth && requestAnimationFrame(function() {
        return r.target.style.scrollBehavior = "smooth";
      }), r.rec && r(r.rec));
    }), ul(js, 1), Xn.pause(), qi++, re = 2, oi(2), X.forEach(function(r) {
      return Gt(r.vars.onRefresh) && r.vars.onRefresh(r);
    }), re = U.isRefreshing = false, Zi("refresh");
  };
  var Ds = 0;
  var Mn = 1;
  var Kr;
  var oi = function(t) {
    if (t === 2 || !re && !Vr) {
      U.isUpdating = true, Kr && Kr.update(0);
      var i = X.length, e = Ut(), r = e - ss >= 50, n = i && X[0].scroll();
      if (Mn = Ds > n ? -1 : 1, re || (Ds = n), r && (Ae && !Gn && e - Ae > 200 && (Ae = 0, Zi("scrollEnd")), Ar = ss, ss = e), Mn < 0) {
        for (ie = i; ie-- > 0; ) X[ie] && X[ie].update(0, r);
        Mn = 1;
      } else for (ie = 0; ie < i; ie++) X[ie] && X[ie].update(0, r);
      U.isUpdating = false;
    }
    on = 0;
  };
  var Rs = [rl, nl, eo, to, Ee + qr, Ee + Ur, Ee + Gr, Ee + $r, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var Dn = Rs.concat([$i, Gi, "boxSizing", "max" + br, "max" + io, "position", Ee, St, St + Gr, St + Ur, St + qr, St + $r]);
  var Ku = function(t, i, e) {
    mr(e);
    var r = t._gsap;
    if (r.spacerIsNative) mr(r.spacerState);
    else if (t._gsap.swappedIn) {
      var n = i.parentNode;
      n && (n.insertBefore(t, i), n.removeChild(i));
    }
    t._gsap.swappedIn = false;
  };
  var as = function(t, i, e, r) {
    if (!t._gsap.swappedIn) {
      for (var n = Rs.length, o = i.style, a = t.style, l; n--; ) l = Rs[n], o[l] = e[l];
      o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[eo] = a[to] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[$i] = Wn(t, ne) + Pt, o[Gi] = Wn(t, Ot) + Pt, o[St] = a[Ee] = a[nl] = a[rl] = "0", mr(r), a[$i] = a["max" + br] = e[$i], a[Gi] = a["max" + io] = e[Gi], a[St] = e[St], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = true;
    }
  };
  var Qu = /([A-Z])/g;
  var mr = function(t) {
    if (t) {
      var i = t.t.style, e = t.length, r = 0, n, o;
      for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; r < e; r += 2) o = t[r + 1], n = t[r], o ? i[n] = o : i[n] && i.removeProperty(n.replace(Qu, "-$1").toLowerCase());
    }
  };
  var xn = function(t) {
    for (var i = Dn.length, e = t.style, r = [], n = 0; n < i; n++) r.push(Dn[n], e[Dn[n]]);
    return r.t = t, r;
  };
  var Zu = function(t, i, e) {
    for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2) a = t[o], r.push(a, a in i ? i[a] : t[o + 1]);
    return r.t = t.t, r;
  };
  var Rn = { left: 0, top: 0 };
  var Fo = function(t, i, e, r, n, o, a, l, u, f, _, c, h, p) {
    Gt(t) && (t = t(l)), me(t) && t.substr(0, 3) === "max" && (t = c + (t.charAt(4) === "=" ? On("0" + t.substr(3), e) : 0));
    var d = h ? h.time() : 0, g, x, v;
    if (h && h.seek(0), isNaN(t) || (t = +t), Nr(t)) h && (t = D.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, c, t)), a && En(a, e, r, true);
    else {
      Gt(i) && (i = i(l));
      var b = (t || "0").split(" "), y, S, P, T;
      v = oe(i, l) || tt, y = ni(v) || {}, (!y || !y.left && !y.top) && Me(v).display === "none" && (T = v.style.display, v.style.display = "block", y = ni(v), T ? v.style.display = T : v.style.removeProperty("display")), S = On(b[0], y[r.d]), P = On(b[1] || "0", e), t = y[r.p] - u[r.p] - f + S + n - P, a && En(a, P, r, e - P < 20 || a._isStart && P > 20), e -= e - P;
    }
    if (p && (l[p] = t || -1e-3, t < 0 && (t = 0)), o) {
      var O = t + e, k = o._isStart;
      g = "scroll" + r.d2, En(o, O, r, k && O > 20 || !k && (_ ? Math.max(tt[g], ye[g]) : o.parentNode[g]) <= O + 1), _ && (u = ni(a), _ && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Pt));
    }
    return h && v && (g = ni(v), h.seek(c), x = ni(v), h._caScrollDist = g[r.p] - x[r.p], t = t / h._caScrollDist * c), h && h.seek(d), h ? t : Math.round(t);
  };
  var ju = /(webkit|moz|length|cssText|inset)/i;
  var Io = function(t, i, e, r) {
    if (t.parentNode !== i) {
      var n = t.style, o, a;
      if (i === tt) {
        t._stOrig = n.cssText, a = Me(t);
        for (o in a) !+o && !ju.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
        n.top = e, n.left = r;
      } else n.cssText = t._stOrig;
      D.core.getCache(t).uncache = 1, i.appendChild(t);
    }
  };
  var hl = function(t, i, e) {
    var r = i, n = r;
    return function(o) {
      var a = Math.round(t());
      return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = r, r = Math.round(o), r;
    };
  };
  var Tn = function(t, i, e) {
    var r = {};
    r[i.p] = "+=" + e, D.set(t, r);
  };
  var Yo = function(t, i) {
    var e = Oi(t, i), r = "_scroll" + i.p2, n = function o(a, l, u, f, _) {
      var c = o.tween, h = l.onComplete, p = {};
      u = u || e();
      var d = hl(e, u, function() {
        c.kill(), o.tween = 0;
      });
      return _ = f && _ || 0, f = f || a - u, c && c.kill(), l[r] = a, l.inherit = false, l.modifiers = p, p[r] = function() {
        return d(u + f * c.ratio + _ * c.ratio * c.ratio);
      }, l.onUpdate = function() {
        H.cache++, o.tween && oi();
      }, l.onComplete = function() {
        o.tween = 0, h && h.call(c);
      }, c = o.tween = D.to(t, l), c;
    };
    return t[r] = e, e.wheelHandler = function() {
      return n.tween && n.tween.kill() && (n.tween = 0);
    }, Rt(t, "wheel", e.wheelHandler), U.isTouch && Rt(t, "touchmove", e.wheelHandler), n;
  };
  var U = (function() {
    function s18(i, e) {
      or || s18.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Os(this), this.init(i, e);
    }
    var t = s18.prototype;
    return t.init = function(e, r) {
      if (this.progress = this.start = 0, this.vars && this.kill(true, true), !zr) {
        this.update = this.refresh = this.kill = Ue;
        return;
      }
      e = Ro(me(e) || Nr(e) || e.nodeType ? { trigger: e } : e, yn);
      var n = e, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, f = n.onRefresh, _ = n.scrub, c = n.trigger, h = n.pin, p = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin, x = n.onScrubComplete, v = n.onSnapComplete, b = n.once, y = n.snap, S = n.pinReparent, P = n.pinSpacer, T = n.containerAnimation, O = n.fastScrollEnd, k = n.preventOverlaps, C = e.horizontal || e.containerAnimation && e.horizontal !== false ? ne : Ot, B = !_ && _ !== 0, M = oe(e.scroller || W), K = D.core.getCache(M), I = Ki(M), Q = ("pinType" in e ? e.pinType : Si(M, "pinType") || I && "fixed") === "fixed", $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], z = B && e.toggleActions.split(" "), Z = "markers" in e ? e.markers : yn.markers, it = I ? 0 : parseFloat(Me(M)["border" + C.p2 + br]) || 0, m = this, ot = e.onRefreshInit && function() {
        return e.onRefreshInit(m);
      }, Kt = Wu(M, I, C), ze = Hu(M, I), dt = 0, zt = 0, Yt = 0, Tt = Oi(M, C), Qt, Bt, ui, Zt, jt, j, mt, se, de, w, _e, Ze, fi, _t, je, hi, Mi, Et, ci, vt, Le, Pe, Je, Sr, bt, ln, ti, Ji, tr, di, Di, V, Ri, Ne, Fe, Ie, Ai, er, ei;
      if (m._startClamp = m._endClamp = false, m._dir = C, g *= 45, m.scroller = M, m.scroll = T ? T.time.bind(T) : Tt, Zt = Tt(), m.vars = e, r = r || e.animation, "refreshPriority" in e && (Ka = 1, e.refreshPriority === -9999 && (Kr = m)), K.tweenScroll = K.tweenScroll || { top: Yo(M, Ot), left: Yo(M, ne) }, m.tweenTo = Qt = K.tweenScroll[C.p], m.scrubDuration = function(E) {
        Ri = Nr(E) && E, Ri ? V ? V.duration(E) : V = D.to(r, { ease: "expo", totalProgress: "+=0", inherit: false, duration: Ri, paused: true, onComplete: function() {
          return x && x(m);
        } }) : (V && V.progress(1).kill(), V = 0);
      }, r && (r.vars.lazy = false, r._initted && !m.isReverted || r.vars.immediateRender !== false && e.immediateRender !== false && r.duration() && r.render(0, true, true), m.animation = r.pause(), r.scrollTrigger = m, m.scrubDuration(_), di = 0, l || (l = r.vars.id)), y && ((!Yi(y) || y.push) && (y = { snapTo: y }), "scrollBehavior" in tt.style && D.set(I ? [tt, ye] : M, { scrollBehavior: "auto" }), H.forEach(function(E) {
        return Gt(E) && E.target === (I ? et.scrollingElement || ye : M) && (E.smooth = false);
      }), ui = Gt(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? Uu(r) : y.snapTo === "labelsDirectional" ? $u(r) : y.directional !== false ? function(E, N) {
        return ro(y.snapTo)(E, Ut() - zt < 500 ? 0 : N.direction);
      } : D.utils.snap(y.snapTo), Ne = y.duration || { min: 0.1, max: 2 }, Ne = Yi(Ne) ? Hr(Ne.min, Ne.max) : Hr(Ne, Ne), Fe = D.delayedCall(y.delay || Ri / 2 || 0.1, function() {
        var E = Tt(), N = Ut() - zt < 500, A = Qt.tween;
        if ((N || Math.abs(m.getVelocity()) < 10) && !A && !Gn && dt !== E) {
          var F = (E - j) / _t, Mt = r && !B ? r.totalProgress() : F, G = N ? 0 : (Mt - Di) / (Ut() - Ar) * 1e3 || 0, yt = D.utils.clamp(-F, 1 - F, nr(G / 2) * G / 0.185), Xt = F + (y.inertia === false ? 0 : yt), pt, at, rt = y, Ye = rt.onStart, ut = rt.onInterrupt, pe = rt.onComplete;
          if (pt = ui(Xt, m), Nr(pt) || (pt = Xt), at = Math.max(0, Math.round(j + pt * _t)), E <= mt && E >= j && at !== E) {
            if (A && !A._initted && A.data <= nr(at - E)) return;
            y.inertia === false && (yt = pt - F), Qt(at, { duration: Ne(nr(Math.max(nr(Xt - Mt), nr(pt - Mt)) * 0.185 / G / 0.05 || 0)), ease: y.ease || "power3", data: nr(at - E), onInterrupt: function() {
              return Fe.restart(true) && ut && rr(m, ut);
            }, onComplete: function() {
              m.update(), dt = Tt(), r && !B && (V ? V.resetTo("totalProgress", pt, r._tTime / r._tDur) : r.progress(pt)), di = Di = r && !B ? r.totalProgress() : m.progress, v && v(m), pe && rr(m, pe);
            } }, E, yt * _t, at - E - yt * _t), Ye && rr(m, Ye, Qt.tween);
          }
        } else m.isActive && dt !== E && Fe.restart(true);
      }).pause()), l && (Ms[l] = m), c = m.trigger = oe(c || h !== true && h), ei = c && c._gsap && c._gsap.stRevert, ei && (ei = ei(m)), h = h === true ? c : oe(h), me(a) && (a = { targets: c, className: a }), h && (p === false || p === Ee || (p = !p && h.parentNode && h.parentNode.style && Me(h.parentNode).display === "flex" ? false : St), m.pin = h, Bt = D.core.getCache(h), Bt.spacer ? je = Bt.pinState : (P && (P = oe(P), P && !P.nodeType && (P = P.current || P.nativeElement), Bt.spacerIsNative = !!P, P && (Bt.spacerState = xn(P))), Bt.spacer = Et = P || et.createElement("div"), Et.classList.add("pin-spacer"), l && Et.classList.add("pin-spacer-" + l), Bt.pinState = je = xn(h)), e.force3D !== false && D.set(h, { force3D: true }), m.spacer = Et = Bt.spacer, tr = Me(h), Sr = tr[p + C.os2], vt = D.getProperty(h), Le = D.quickSetter(h, C.a, Pt), as(h, Et, tr), Mi = xn(h)), Z) {
        Ze = Yi(Z) ? Ro(Z, Ao) : Ao, w = wn("scroller-start", l, M, C, Ze, 0), _e = wn("scroller-end", l, M, C, Ze, 0, w), ci = w["offset" + C.op.d2];
        var Cr = oe(Si(M, "content") || M);
        se = this.markerStart = wn("start", l, Cr, C, Ze, ci, 0, T), de = this.markerEnd = wn("end", l, Cr, C, Ze, ci, 0, T), T && (er = D.quickSetter([se, de], C.a, Pt)), !Q && !(Ke.length && Si(M, "fixedMarkers") === true) && (Vu(I ? tt : M), D.set([w, _e], { force3D: true }), ln = D.quickSetter(w, C.a, Pt), Ji = D.quickSetter(_e, C.a, Pt));
      }
      if (T) {
        var Y = T.vars.onUpdate, L = T.vars.onUpdateParams;
        T.eventCallback("onUpdate", function() {
          m.update(0, 0, 1), Y && Y.apply(T, L || []);
        });
      }
      if (m.previous = function() {
        return X[X.indexOf(m) - 1];
      }, m.next = function() {
        return X[X.indexOf(m) + 1];
      }, m.revert = function(E, N) {
        if (!N) return m.kill(true);
        var A = E !== false || !m.enabled, F = Vt;
        A !== m.isReverted && (A && (Ie = Math.max(Tt(), m.scroll.rec || 0), Yt = m.progress, Ai = r && r.progress()), se && [se, de, w, _e].forEach(function(Mt) {
          return Mt.style.display = A ? "none" : "block";
        }), A && (Vt = m, m.update(A)), h && (!S || !m.isActive) && (A ? Ku(h, Et, je) : as(h, Et, Me(h), bt)), A || m.update(A), Vt = F, m.isReverted = A);
      }, m.refresh = function(E, N, A, F) {
        if (!((Vt || !m.enabled) && !N)) {
          if (h && E && Ae) {
            Rt(s18, "scrollEnd", ol);
            return;
          }
          !re && ot && ot(m), Vt = m, Qt.tween && !A && (Qt.tween.kill(), Qt.tween = 0), V && V.pause(), d && r && (r.revert({ kill: false }).invalidate(), r.getChildren ? r.getChildren(true, true, false).forEach(function(_i) {
            return _i.vars.immediateRender && _i.render(0, true, true);
          }) : r.vars.immediateRender && r.render(0, true, true)), m.isReverted || m.revert(true, true), m._subPinOffset = false;
          var Mt = Kt(), G = ze(), yt = T ? T.duration() : qe(M, C), Xt = _t <= 0.01 || !_t, pt = 0, at = F || 0, rt = Yi(A) ? A.end : e.end, Ye = e.endTrigger || c, ut = Yi(A) ? A.start : e.start || (e.start === 0 || !c ? 0 : h ? "0 0" : "0 100%"), pe = m.pinnedContainer = e.pinnedContainer && oe(e.pinnedContainer, m), Xe = c && Math.max(0, X.indexOf(m)) || 0, Lt = Xe, Nt, Wt, zi, un, Ht, kt, We, qn, so, kr, He, Pr, fn;
          for (Z && Yi(A) && (Pr = D.getProperty(w, C.p), fn = D.getProperty(_e, C.p)); Lt-- > 0; ) kt = X[Lt], kt.end || kt.refresh(0, 1) || (Vt = m), We = kt.pin, We && (We === c || We === h || We === pe) && !kt.isReverted && (kr || (kr = []), kr.unshift(kt), kt.revert(true, true)), kt !== X[Lt] && (Xe--, Lt--);
          for (Gt(ut) && (ut = ut(m)), ut = Oo(ut, "start", m), j = Fo(ut, c, Mt, C, Tt(), se, w, m, G, it, Q, yt, T, m._startClamp && "_startClamp") || (h ? -1e-3 : 0), Gt(rt) && (rt = rt(m)), me(rt) && !rt.indexOf("+=") && (~rt.indexOf(" ") ? rt = (me(ut) ? ut.split(" ")[0] : "") + rt : (pt = On(rt.substr(2), Mt), rt = me(ut) ? ut : (T ? D.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, j) : j) + pt, Ye = c)), rt = Oo(rt, "end", m), mt = Math.max(j, Fo(rt || (Ye ? "100% 0" : yt), Ye, Mt, C, Tt() + pt, de, _e, m, G, it, Q, yt, T, m._endClamp && "_endClamp")) || -1e-3, pt = 0, Lt = Xe; Lt--; ) kt = X[Lt] || {}, We = kt.pin, We && kt.start - kt._pinPush <= j && !T && kt.end > 0 && (Nt = kt.end - (m._startClamp ? Math.max(0, kt.start) : kt.start), (We === c && kt.start - kt._pinPush < j || We === pe) && isNaN(ut) && (pt += Nt * (1 - kt.progress)), We === h && (at += Nt));
          if (j += pt, mt += pt, m._startClamp && (m._startClamp += pt), m._endClamp && !re && (m._endClamp = mt || -1e-3, mt = Math.min(mt, qe(M, C))), _t = mt - j || (j -= 0.01) && 1e-3, Xt && (Yt = D.utils.clamp(0, 1, D.utils.normalize(j, mt, Ie))), m._pinPush = at, se && pt && (Nt = {}, Nt[C.a] = "+=" + pt, pe && (Nt[C.p] = "-=" + Tt()), D.set([se, de], Nt)), h && !(Es && m.end >= qe(M, C))) Nt = Me(h), un = C === Ot, zi = Tt(), Pe = parseFloat(vt(C.a)) + at, !yt && mt > 1 && (He = (I ? et.scrollingElement || ye : M).style, He = { style: He, value: He["overflow" + C.a.toUpperCase()] }, I && Me(tt)["overflow" + C.a.toUpperCase()] !== "scroll" && (He.style["overflow" + C.a.toUpperCase()] = "scroll")), as(h, Et, Nt), Mi = xn(h), Wt = ni(h, true), qn = Q && Oi(M, un ? ne : Ot)(), p ? (bt = [p + C.os2, _t + at + Pt], bt.t = Et, Lt = p === St ? Wn(h, C) + _t + at : 0, Lt && (bt.push(C.d, Lt + Pt), Et.style.flexBasis !== "auto" && (Et.style.flexBasis = Lt + Pt)), mr(bt), pe && X.forEach(function(_i) {
            _i.pin === pe && _i.vars.pinSpacing !== false && (_i._subPinOffset = true);
          }), Q && Tt(Ie)) : (Lt = Wn(h, C), Lt && Et.style.flexBasis !== "auto" && (Et.style.flexBasis = Lt + Pt)), Q && (Ht = { top: Wt.top + (un ? zi - j : qn) + Pt, left: Wt.left + (un ? qn : zi - j) + Pt, boxSizing: "border-box", position: "fixed" }, Ht[$i] = Ht["max" + br] = Math.ceil(Wt.width) + Pt, Ht[Gi] = Ht["max" + io] = Math.ceil(Wt.height) + Pt, Ht[Ee] = Ht[Ee + Gr] = Ht[Ee + Ur] = Ht[Ee + qr] = Ht[Ee + $r] = "0", Ht[St] = Nt[St], Ht[St + Gr] = Nt[St + Gr], Ht[St + Ur] = Nt[St + Ur], Ht[St + qr] = Nt[St + qr], Ht[St + $r] = Nt[St + $r], hi = Zu(je, Ht, S), re && Tt(0)), r ? (so = r._initted, rs(1), r.render(r.duration(), true, true), Je = vt(C.a) - Pe + _t + at, ti = Math.abs(_t - Je) > 1, Q && ti && hi.splice(hi.length - 2, 2), r.render(0, true, true), so || r.invalidate(true), r.parent || r.totalTime(r.totalTime()), rs(0)) : Je = _t, He && (He.value ? He.style["overflow" + C.a.toUpperCase()] = He.value : He.style.removeProperty("overflow-" + C.a));
          else if (c && Tt() && !T) for (Wt = c.parentNode; Wt && Wt !== tt; ) Wt._pinOffset && (j -= Wt._pinOffset, mt -= Wt._pinOffset), Wt = Wt.parentNode;
          kr && kr.forEach(function(_i) {
            return _i.revert(false, true);
          }), m.start = j, m.end = mt, Zt = jt = re ? Ie : Tt(), !T && !re && (Zt < Ie && Tt(Ie), m.scroll.rec = 0), m.revert(false, true), zt = Ut(), Fe && (dt = -1, Fe.restart(true)), Vt = 0, r && B && (r._initted || Ai) && r.progress() !== Ai && r.progress(Ai || 0, true).render(r.time(), true, true), (Xt || Yt !== m.progress || T || d || r && !r._initted) && (r && !B && (r._initted || Yt || r.vars.immediateRender !== false) && r.totalProgress(T && j < -1e-3 && !Yt ? D.utils.normalize(j, mt, 0) : Yt, true), m.progress = Xt || (Zt - j) / _t === Yt ? 0 : Yt), h && p && (Et._pinOffset = Math.round(m.progress * Je)), V && V.invalidate(), isNaN(Pr) || (Pr -= D.getProperty(w, C.p), fn -= D.getProperty(_e, C.p), Tn(w, C, Pr), Tn(se, C, Pr - (F || 0)), Tn(_e, C, fn), Tn(de, C, fn - (F || 0))), Xt && !re && m.update(), f && !re && !fi && (fi = true, f(m), fi = false);
        }
      }, m.getVelocity = function() {
        return (Tt() - jt) / (Ut() - Ar) * 1e3 || 0;
      }, m.endAnimation = function() {
        Mr(m.callbackAnimation), r && (V ? V.progress(1) : r.paused() ? B || Mr(r, m.direction < 0, 1) : Mr(r, r.reversed()));
      }, m.labelToScroll = function(E) {
        return r && r.labels && (j || m.refresh() || j) + r.labels[E] / r.duration() * _t || 0;
      }, m.getTrailing = function(E) {
        var N = X.indexOf(m), A = m.direction > 0 ? X.slice(0, N).reverse() : X.slice(N + 1);
        return (me(E) ? A.filter(function(F) {
          return F.vars.preventOverlaps === E;
        }) : A).filter(function(F) {
          return m.direction > 0 ? F.end <= j : F.start >= mt;
        });
      }, m.update = function(E, N, A) {
        if (!(T && !A && !E)) {
          var F = re === true ? Ie : m.scroll(), Mt = E ? 0 : (F - j) / _t, G = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0, yt = m.progress, Xt, pt, at, rt, Ye, ut, pe, Xe;
          if (N && (jt = Zt, Zt = T ? Tt() : F, y && (Di = di, di = r && !B ? r.totalProgress() : G)), g && h && !Vt && !pn && Ae && (!G && j < F + (F - jt) / (Ut() - Ar) * g ? G = 1e-4 : G === 1 && mt > F + (F - jt) / (Ut() - Ar) * g && (G = 0.9999)), G !== yt && m.enabled) {
            if (Xt = m.isActive = !!G && G < 1, pt = !!yt && yt < 1, ut = Xt !== pt, Ye = ut || !!G != !!yt, m.direction = G > yt ? 1 : -1, m.progress = G, Ye && !Vt && (at = G && !yt ? 0 : G === 1 ? 1 : yt === 1 ? 2 : 3, B && (rt = !ut && z[at + 1] !== "none" && z[at + 1] || z[at], Xe = r && (rt === "complete" || rt === "reset" || rt in r))), k && (ut || Xe) && (Xe || _ || !r) && (Gt(k) ? k(m) : m.getTrailing(k).forEach(function(zi) {
              return zi.endAnimation();
            })), B || (V && !Vt && !pn ? (V._dp._time - V._start !== V._time && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", G, r._tTime / r._tDur) : (V.vars.totalProgress = G, V.invalidate().restart())) : r && r.totalProgress(G, !!(Vt && (zt || E)))), h) {
              if (E && p && (Et.style[p + C.os2] = Sr), !Q) Le(Lr(Pe + Je * G));
              else if (Ye) {
                if (pe = !E && G > yt && mt + 1 > F && F + 1 >= qe(M, C), S) if (!E && (Xt || pe)) {
                  var Lt = ni(h, true), Nt = F - j;
                  Io(h, tt, Lt.top + (C === Ot ? Nt : 0) + Pt, Lt.left + (C === Ot ? 0 : Nt) + Pt);
                } else Io(h, Et);
                mr(Xt || pe ? hi : Mi), ti && G < 1 && Xt || Le(Pe + (G === 1 && !pe ? Je : 0));
              }
            }
            y && !Qt.tween && !Vt && !pn && Fe.restart(true), a && (ut || b && G && (G < 1 || !ns)) && sn(a.targets).forEach(function(zi) {
              return zi.classList[Xt || b ? "add" : "remove"](a.className);
            }), o && !B && !E && o(m), Ye && !Vt ? (B && (Xe && (rt === "complete" ? r.pause().totalProgress(1) : rt === "reset" ? r.restart(true).pause() : rt === "restart" ? r.restart(true) : r[rt]()), o && o(m)), (ut || !ns) && (u && ut && rr(m, u), $[at] && rr(m, $[at]), b && (G === 1 ? m.kill(false, 1) : $[at] = 0), ut || (at = G === 1 ? 1 : 3, $[at] && rr(m, $[at]))), O && !Xt && Math.abs(m.getVelocity()) > (Nr(O) ? O : 2500) && (Mr(m.callbackAnimation), V ? V.progress(1) : Mr(r, rt === "reverse" ? 1 : !G, 1))) : B && o && !Vt && o(m);
          }
          if (Ji) {
            var Wt = T ? F / T.duration() * (T._caScrollDist || 0) : F;
            ln(Wt + (w._isFlipped ? 1 : 0)), Ji(Wt);
          }
          er && er(-F / T.duration() * (T._caScrollDist || 0));
        }
      }, m.enable = function(E, N) {
        m.enabled || (m.enabled = true, Rt(M, "resize", Fr), I || Rt(M, "scroll", sr), ot && Rt(s18, "refreshInit", ot), E !== false && (m.progress = Yt = 0, Zt = jt = dt = Tt()), N !== false && m.refresh());
      }, m.getTween = function(E) {
        return E && Qt ? Qt.tween : V;
      }, m.setPositions = function(E, N, A, F) {
        if (T) {
          var Mt = T.scrollTrigger, G = T.duration(), yt = Mt.end - Mt.start;
          E = Mt.start + yt * E / G, N = Mt.start + yt * N / G;
        }
        m.refresh(false, false, { start: Eo(E, A && !!m._startClamp), end: Eo(N, A && !!m._endClamp) }, F), m.update();
      }, m.adjustPinSpacing = function(E) {
        if (bt && E) {
          var N = bt.indexOf(C.d) + 1;
          bt[N] = parseFloat(bt[N]) + E + Pt, bt[1] = parseFloat(bt[1]) + E + Pt, mr(bt);
        }
      }, m.disable = function(E, N) {
        if (E !== false && m.revert(true, true), m.enabled && (m.enabled = m.isActive = false, N || V && V.pause(), Ie = 0, Bt && (Bt.uncache = 1), ot && Dt(s18, "refreshInit", ot), Fe && (Fe.pause(), Qt.tween && Qt.tween.kill() && (Qt.tween = 0)), !I)) {
          for (var A = X.length; A--; ) if (X[A].scroller === M && X[A] !== m) return;
          Dt(M, "resize", Fr), I || Dt(M, "scroll", sr);
        }
      }, m.kill = function(E, N) {
        m.disable(E, N), V && !N && V.kill(), l && delete Ms[l];
        var A = X.indexOf(m);
        A >= 0 && X.splice(A, 1), A === ie && Mn > 0 && ie--, A = 0, X.forEach(function(F) {
          return F.scroller === m.scroller && (A = 1);
        }), A || re || (m.scroll.rec = 0), r && (r.scrollTrigger = null, E && r.revert({ kill: false }), N || r.kill()), se && [se, de, w, _e].forEach(function(F) {
          return F.parentNode && F.parentNode.removeChild(F);
        }), Kr === m && (Kr = 0), h && (Bt && (Bt.uncache = 1), A = 0, X.forEach(function(F) {
          return F.pin === h && A++;
        }), A || (Bt.spacer = 0)), e.onKill && e.onKill(m);
      }, X.push(m), m.enable(false, false), ei && ei(m), r && r.add && !_t) {
        var J = m.update;
        m.update = function() {
          m.update = J, H.cache++, j || mt || m.refresh();
        }, D.delayedCall(0.01, m.update), _t = 0.01, j = mt = 0;
      } else m.refresh();
      h && qu();
    }, s18.register = function(e) {
      return or || (D = e || tl(), Ja() && window.document && s18.enable(), or = zr), or;
    }, s18.defaults = function(e) {
      if (e) for (var r in e) yn[r] = e[r];
      return yn;
    }, s18.disable = function(e, r) {
      zr = 0, X.forEach(function(o) {
        return o[r ? "kill" : "disable"](e);
      }), Dt(W, "wheel", sr), Dt(et, "scroll", sr), clearInterval(_n), Dt(et, "touchcancel", Ue), Dt(tt, "touchstart", Ue), mn(Dt, et, "pointerdown,touchstart,mousedown", Mo), mn(Dt, et, "pointerup,touchend,mouseup", Do), Xn.kill(), gn(Dt);
      for (var n = 0; n < H.length; n += 3) vn(Dt, H[n], H[n + 1]), vn(Dt, H[n], H[n + 2]);
    }, s18.enable = function() {
      if (W = window, et = document, ye = et.documentElement, tt = et.body, D) {
        if (sn = D.utils.toArray, Hr = D.utils.clamp, Os = D.core.context || Ue, rs = D.core.suppressOverwrites || Ue, js = W.history.scrollRestoration || "auto", Ds = W.pageYOffset || 0, D.core.globals("ScrollTrigger", s18), tt) {
          zr = 1, gr = document.createElement("div"), gr.style.height = "100vh", gr.style.position = "absolute", fl(), Xu(), xt.register(D), s18.isTouch = xt.isTouch, gi = xt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ps = xt.isTouch === 1, Rt(W, "wheel", sr), Zs = [W, et, ye, tt], D.matchMedia ? (s18.matchMedia = function(f) {
            var _ = D.matchMedia(), c;
            for (c in f) _.add(c, f[c]);
            return _;
          }, D.addEventListener("matchMediaInit", function() {
            ll(), no();
          }), D.addEventListener("matchMediaRevert", function() {
            return al();
          }), D.addEventListener("matchMedia", function() {
            Xi(0, 1), Zi("matchMedia");
          }), D.matchMedia().add("(orientation: portrait)", function() {
            return os(), os;
          })) : console.warn("Requires GSAP 3.11.0 or later"), os(), Rt(et, "scroll", sr);
          var e = tt.hasAttribute("style"), r = tt.style, n = r.borderTopStyle, o = D.core.Animation.prototype, a, l;
          for (o.revert || Object.defineProperty(o, "revert", { value: function() {
            return this.time(-0.01, true);
          } }), r.borderTopStyle = "solid", a = ni(tt), Ot.m = Math.round(a.top + Ot.sc()) || 0, ne.m = Math.round(a.left + ne.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (tt.setAttribute("style", ""), tt.removeAttribute("style")), _n = setInterval(zo, 250), D.delayedCall(0.5, function() {
            return pn = 0;
          }), Rt(et, "touchcancel", Ue), Rt(tt, "touchstart", Ue), mn(Rt, et, "pointerdown,touchstart,mousedown", Mo), mn(Rt, et, "pointerup,touchend,mouseup", Do), ks = D.utils.checkPrefix("transform"), Dn.push(ks), or = Ut(), Xn = D.delayedCall(0.2, Xi).pause(), ar = [et, "visibilitychange", function() {
            var f = W.innerWidth, _ = W.innerHeight;
            et.hidden ? (ko = f, Po = _) : (ko !== f || Po !== _) && Fr();
          }, et, "DOMContentLoaded", Xi, W, "load", Xi, W, "resize", Fr], gn(Rt), X.forEach(function(f) {
            return f.enable(0, 1);
          }), l = 0; l < H.length; l += 3) vn(Dt, H[l], H[l + 1]), vn(Dt, H[l], H[l + 2]);
        } else if (et) {
          var u = function f() {
            s18.enable(), et.removeEventListener("DOMContentLoaded", f);
          };
          et.addEventListener("DOMContentLoaded", u);
        }
      }
    }, s18.config = function(e) {
      "limitCallbacks" in e && (ns = !!e.limitCallbacks);
      var r = e.syncInterval;
      r && clearInterval(_n) || (_n = r) && setInterval(zo, r), "ignoreMobileResize" in e && (Ps = s18.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (gn(Dt) || gn(Rt, e.autoRefreshEvents || "none"), Qa = (e.autoRefreshEvents + "").indexOf("resize") === -1);
    }, s18.scrollerProxy = function(e, r) {
      var n = oe(e), o = H.indexOf(n), a = Ki(n);
      ~o && H.splice(o, a ? 6 : 2), r && (a ? Ke.unshift(W, r, tt, r, ye, r) : Ke.unshift(n, r));
    }, s18.clearMatchMedia = function(e) {
      X.forEach(function(r) {
        return r._ctx && r._ctx.query === e && r._ctx.kill(true, true);
      });
    }, s18.isInViewport = function(e, r, n) {
      var o = (me(e) ? oe(e) : e).getBoundingClientRect(), a = o[n ? $i : Gi] * r || 0;
      return n ? o.right - a > 0 && o.left + a < W.innerWidth : o.bottom - a > 0 && o.top + a < W.innerHeight;
    }, s18.positionInViewport = function(e, r, n) {
      me(e) && (e = oe(e));
      var o = e.getBoundingClientRect(), a = o[n ? $i : Gi], l = r == null ? a / 2 : r in Hn ? Hn[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
      return n ? (o.left + l) / W.innerWidth : (o.top + l) / W.innerHeight;
    }, s18.killAll = function(e) {
      if (X.slice(0).forEach(function(n) {
        return n.vars.id !== "ScrollSmoother" && n.kill();
      }), e !== true) {
        var r = Qi.killAll || [];
        Qi = {}, r.forEach(function(n) {
          return n();
        });
      }
    }, s18;
  })();
  U.version = "3.15.0";
  U.saveStyles = function(s18) {
    return s18 ? sn(s18).forEach(function(t) {
      if (t && t.style) {
        var i = ge.indexOf(t);
        i >= 0 && ge.splice(i, 5), ge.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), Os());
      }
    }) : ge;
  };
  U.revert = function(s18, t) {
    return no(!s18, t);
  };
  U.create = function(s18, t) {
    return new U(s18, t);
  };
  U.refresh = function(s18) {
    return s18 ? Fr(true) : (or || U.register()) && Xi(true);
  };
  U.update = function(s18) {
    return ++H.cache && oi(s18 === true ? 2 : 0);
  };
  U.clearScrollMemory = ul;
  U.maxScroll = function(s18, t) {
    return qe(s18, t ? ne : Ot);
  };
  U.getScrollFunc = function(s18, t) {
    return Oi(oe(s18), t ? ne : Ot);
  };
  U.getById = function(s18) {
    return Ms[s18];
  };
  U.getAll = function() {
    return X.filter(function(s18) {
      return s18.vars.id !== "ScrollSmoother";
    });
  };
  U.isScrolling = function() {
    return !!Ae;
  };
  U.snapDirectional = ro;
  U.addEventListener = function(s18, t) {
    var i = Qi[s18] || (Qi[s18] = []);
    ~i.indexOf(t) || i.push(t);
  };
  U.removeEventListener = function(s18, t) {
    var i = Qi[s18], e = i && i.indexOf(t);
    e >= 0 && i.splice(e, 1);
  };
  U.batch = function(s18, t) {
    var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, f) {
      var _ = [], c = [], h = D.delayedCall(r, function() {
        f(_, c), _ = [], c = [];
      }).pause();
      return function(p) {
        _.length || h.restart(true), _.push(p.trigger), c.push(p), n <= _.length && h.progress(1);
      };
    }, a;
    for (a in t) e[a] = a.substr(0, 2) === "on" && Gt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
    return Gt(n) && (n = n(), Rt(U, "refresh", function() {
      return n = t.batchMax();
    })), sn(s18).forEach(function(l) {
      var u = {};
      for (a in e) u[a] = e[a];
      u.trigger = l, i.push(U.create(u));
    }), i;
  };
  var Bo = function(t, i, e, r) {
    return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
  };
  var ls = function s16(t, i) {
    i === true ? t.style.removeProperty("touch-action") : t.style.touchAction = i === true ? "auto" : i ? "pan-" + i + (xt.isTouch ? " pinch-zoom" : "") : "none", t === ye && s16(tt, i);
  };
  var bn = { auto: 1, scroll: 1 };
  var Ju = function(t) {
    var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, o = n._gsap || D.core.getCache(n), a = Ut(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(bn[(l = Me(n)).overflowY] || bn[l.overflowX])); ) n = n.parentNode;
      o._isScroll = n && n !== e && !Ki(n) && (bn[(l = Me(n)).overflowY] || bn[l.overflowX]), o._isScrollT = a;
    }
    (o._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = true);
  };
  var cl = function(t, i, e, r) {
    return xt.create({ target: t, capture: true, debounce: false, lockAxis: true, type: i, onWheel: r = r && Ju, onPress: r, onDrag: r, onScroll: r, onEnable: function() {
      return e && Rt(et, xt.eventTypes[0], Wo, false, true);
    }, onDisable: function() {
      return Dt(et, xt.eventTypes[0], Wo, true);
    } });
  };
  var tf = /(input|label|select|textarea)/i;
  var Xo;
  var Wo = function(t) {
    var i = tf.test(t.target.tagName);
    (i || Xo) && (t._gsapAllow = true, Xo = i);
  };
  var ef = function(t) {
    Yi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = true, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
    var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, o = i.onRelease, a, l, u = oe(t.target) || ye, f = D.core.globals().ScrollSmoother, _ = f && f.get(), c = gi && (t.content && oe(t.content) || _ && t.content !== false && !_.smooth() && _.content()), h = Oi(u, Ot), p = Oi(u, ne), d = 1, g = (xt.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth, x = 0, v = Gt(r) ? function() {
      return r(a);
    } : function() {
      return r || 2.8;
    }, b, y, S = cl(u, t.type, true, n), P = function() {
      return y = false;
    }, T = Ue, O = Ue, k = function() {
      l = qe(u, Ot), O = Hr(gi ? 1 : 0, l), e && (T = Hr(0, qe(u, ne))), b = qi;
    }, C = function() {
      c._gsap.y = Lr(parseFloat(c._gsap.y) + h.offset) + "px", c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(c._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0;
    }, B = function() {
      if (y) {
        requestAnimationFrame(P);
        var Z = Lr(a.deltaY / 2), it = O(h.v - Z);
        if (c && it !== h.v + h.offset) {
          h.offset = it - h.v;
          var m = Lr((parseFloat(c && c._gsap.y) || 0) - h.offset);
          c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", c._gsap.y = m + "px", h.cacheID = H.cache, oi();
        }
        return true;
      }
      h.offset && C(), y = true;
    }, M, K, I, Q, $ = function() {
      k(), M.isActive() && M.vars.scrollY > l && (h() > l ? M.progress(1) && h(l) : M.resetTo("scrollY", l));
    };
    return c && D.set(c, { y: "+=0" }), t.ignoreCheck = function(z) {
      return gi && z.type === "touchmove" && B() || d > 1.05 && z.type !== "touchstart" || a.isGesturing || z.touches && z.touches.length > 1;
    }, t.onPress = function() {
      y = false;
      var z = d;
      d = Lr((W.visualViewport && W.visualViewport.scale || 1) / g), M.pause(), z !== d && ls(u, d > 1.01 ? true : e ? false : "x"), K = p(), I = h(), k(), b = qi;
    }, t.onRelease = t.onGestureStart = function(z, Z) {
      if (h.offset && C(), !Z) Q.restart(true);
      else {
        H.cache++;
        var it = v(), m, ot;
        e && (m = p(), ot = m + it * 0.05 * -z.velocityX / 0.227, it *= Bo(p, m, ot, qe(u, ne)), M.vars.scrollX = T(ot)), m = h(), ot = m + it * 0.05 * -z.velocityY / 0.227, it *= Bo(h, m, ot, qe(u, Ot)), M.vars.scrollY = O(ot), M.invalidate().duration(it).play(0.01), (gi && M.vars.scrollY >= l || m >= l - 1) && D.to({}, { onUpdate: $, duration: it });
      }
      o && o(z);
    }, t.onWheel = function() {
      M._ts && M.pause(), Ut() - x > 1e3 && (b = 0, x = Ut());
    }, t.onChange = function(z, Z, it, m, ot) {
      if (qi !== b && k(), Z && e && p(T(m[2] === Z ? K + (z.startX - z.x) : p() + Z - m[1])), it) {
        h.offset && C();
        var Kt = ot[2] === it, ze = Kt ? I + z.startY - z.y : h() + it - ot[1], dt = O(ze);
        Kt && ze !== dt && (I += dt - ze), h(dt);
      }
      (it || Z) && oi();
    }, t.onEnable = function() {
      ls(u, e ? false : "x"), U.addEventListener("refresh", $), Rt(W, "resize", $), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = p.smooth = false), S.enable();
    }, t.onDisable = function() {
      ls(u, true), Dt(W, "resize", $), U.removeEventListener("refresh", $), S.kill();
    }, t.lockAxis = t.lockAxis !== false, a = new xt(t), a.iOS = gi, gi && !h() && h(1), gi && D.ticker.add(Ue), Q = a._dc, M = D.to(a, { ease: "power4", paused: true, inherit: false, scrollX: e ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: { scrollY: hl(h, h(), function() {
      return M.pause();
    }) }, onUpdate: oi, onComplete: Q.vars.onComplete }), a;
  };
  U.sort = function(s18) {
    if (Gt(s18)) return X.sort(s18);
    var t = W.pageYOffset || 0;
    return U.getAll().forEach(function(i) {
      return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + W.innerHeight;
    }), X.sort(s18 || function(i, e) {
      return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
    });
  };
  U.observe = function(s18) {
    return new xt(s18);
  };
  U.normalizeScroll = function(s18) {
    if (typeof s18 > "u") return ee;
    if (s18 === true && ee) return ee.enable();
    if (s18 === false) {
      ee && ee.kill(), ee = s18;
      return;
    }
    var t = s18 instanceof xt ? s18 : ef(s18);
    return ee && ee.target === t.target && ee.kill(), Ki(t.target) && (ee = t), t;
  };
  U.core = { _getVelocityProp: Cs, _inputObserver: cl, _scrollers: H, _proxies: Ke, bridge: { ss: function() {
    Ae || Zi("scrollStart"), Ae = Ut();
  }, ref: function() {
    return Vt;
  } } };
  tl() && D.registerPlugin(U);
  var Ho = "1.3.25";
  function dl(s18, t, i) {
    return Math.max(s18, Math.min(t, i));
  }
  function rf(s18, t, i) {
    return (1 - i) * s18 + i * t;
  }
  function nf(s18, t, i, e) {
    return rf(s18, t, 1 - Math.exp(-i * e));
  }
  function sf(s18, t) {
    return (s18 % t + t) % t;
  }
  var of = class {
    constructor() {
      R(this, "isRunning", false);
      R(this, "value", 0);
      R(this, "from", 0);
      R(this, "to", 0);
      R(this, "currentTime", 0);
      R(this, "lerp");
      R(this, "duration");
      R(this, "easing");
      R(this, "onUpdate");
    }
    advance(s18) {
      var i;
      if (!this.isRunning) return;
      let t = false;
      if (this.duration && this.easing) {
        this.currentTime += s18;
        const e = dl(0, this.currentTime / this.duration, 1);
        t = e >= 1;
        const r = t ? 1 : this.easing(e);
        this.value = this.from + (this.to - this.from) * r;
      } else this.lerp ? (this.value = nf(this.value, this.to, this.lerp * 60, s18), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = true)) : (this.value = this.to, t = true);
      t && this.stop(), (i = this.onUpdate) == null || i.call(this, this.value, t);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(s18, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: o }) {
      this.from = this.value = s18, this.to = t, this.lerp = i, this.duration = e, this.easing = r, this.currentTime = 0, this.isRunning = true, n == null || n(), this.onUpdate = o;
    }
  };
  function af(s18, t) {
    let i;
    return function(...e) {
      clearTimeout(i), i = setTimeout(() => {
        i = void 0, s18.apply(this, e);
      }, t);
    };
  }
  var lf = class {
    constructor(s18, t, { autoResize: i = true, debounce: e = 250 } = {}) {
      R(this, "width", 0);
      R(this, "height", 0);
      R(this, "scrollHeight", 0);
      R(this, "scrollWidth", 0);
      R(this, "debouncedResize");
      R(this, "wrapperResizeObserver");
      R(this, "contentResizeObserver");
      R(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      R(this, "onWrapperResize", () => {
        this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      });
      R(this, "onContentResize", () => {
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      });
      this.wrapper = s18, this.content = t, i && (this.debouncedResize = af(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      var s18, t;
      (s18 = this.wrapperResizeObserver) == null || s18.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var _l = class {
    constructor() {
      R(this, "events", {});
    }
    emit(s18, ...t) {
      var e;
      const i = this.events[s18] || [];
      for (let r = 0, n = i.length; r < n; r++) (e = i[r]) == null || e.call(i, ...t);
    }
    on(s18, t) {
      return this.events[s18] ? this.events[s18].push(t) : this.events[s18] = [t], () => {
        var i;
        this.events[s18] = (i = this.events[s18]) == null ? void 0 : i.filter((e) => t !== e);
      };
    }
    off(s18, t) {
      var i;
      this.events[s18] = (i = this.events[s18]) == null ? void 0 : i.filter((e) => t !== e);
    }
    destroy() {
      this.events = {};
    }
  };
  var uf = 100 / 6;
  var pi = { passive: false };
  function Vo(s18, t) {
    return s18 === 1 ? uf : s18 === 2 ? t : 1;
  }
  var ff = class {
    constructor(s18, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      R(this, "touchStart", { x: 0, y: 0 });
      R(this, "lastDelta", { x: 0, y: 0 });
      R(this, "window", { width: 0, height: 0 });
      R(this, "emitter", new _l());
      R(this, "onTouchStart", (s19) => {
        const { clientX: t2, clientY: i } = s19.targetTouches ? s19.targetTouches[0] : s19;
        this.touchStart.x = t2, this.touchStart.y = i, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s19 });
      });
      R(this, "onTouchMove", (s19) => {
        const { clientX: t2, clientY: i } = s19.targetTouches ? s19.targetTouches[0] : s19, e = -(t2 - this.touchStart.x) * this.options.touchMultiplier, r = -(i - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = t2, this.touchStart.y = i, this.lastDelta = { x: e, y: r }, this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: s19 });
      });
      R(this, "onTouchEnd", (s19) => {
        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: s19 });
      });
      R(this, "onWheel", (s19) => {
        let { deltaX: t2, deltaY: i, deltaMode: e } = s19;
        const r = Vo(e, this.window.width), n = Vo(e, this.window.height);
        t2 *= r, i *= n, t2 *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t2, deltaY: i, event: s19 });
      });
      R(this, "onWindowResize", () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      });
      this.element = s18, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, pi), this.element.addEventListener("touchstart", this.onTouchStart, pi), this.element.addEventListener("touchmove", this.onTouchMove, pi), this.element.addEventListener("touchend", this.onTouchEnd, pi);
    }
    on(s18, t) {
      return this.emitter.on(s18, t);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, pi), this.element.removeEventListener("touchstart", this.onTouchStart, pi), this.element.removeEventListener("touchmove", this.onTouchMove, pi), this.element.removeEventListener("touchend", this.onTouchEnd, pi);
    }
  };
  var Uo = (s18) => Math.min(1, 1.001 - 2 ** (-10 * s18));
  var cf = class {
    constructor({ wrapper: s18 = window, content: t = document.documentElement, eventsTarget: i = s18, smoothWheel: e = true, syncTouch: r = false, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: u = 0.1, infinite: f = false, orientation: _ = "vertical", gestureOrientation: c = _ === "horizontal" ? "both" : "vertical", touchMultiplier: h = 1, wheelMultiplier: p = 1, autoResize: d = true, prevent: g, virtualScroll: x, overscroll: v = true, autoRaf: b = false, anchors: y = false, autoToggle: S = false, allowNestedScroll: P = false, __experimental__naiveDimensions: T = false, naiveDimensions: O = T, stopInertiaOnNavigate: k = false } = {}) {
      R(this, "_isScrolling", false);
      R(this, "_isStopped", false);
      R(this, "_isLocked", false);
      R(this, "_preventNextNativeScrollEvent", false);
      R(this, "_resetVelocityTimeout", null);
      R(this, "_rafId", null);
      R(this, "_isDraggingSelection", false);
      R(this, "isTouching");
      R(this, "isIos");
      R(this, "time", 0);
      R(this, "userData", {});
      R(this, "lastVelocity", 0);
      R(this, "velocity", 0);
      R(this, "direction", 0);
      R(this, "options");
      R(this, "targetScroll");
      R(this, "animatedScroll");
      R(this, "animate", new of());
      R(this, "emitter", new _l());
      R(this, "dimensions");
      R(this, "virtualScroll");
      R(this, "onScrollEnd", (s19) => {
        s19 instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === false) && s19.stopPropagation();
      });
      R(this, "dispatchScrollendEvent", () => {
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", { bubbles: this.options.wrapper === window, detail: { lenisScrollEnd: true } }));
      });
      R(this, "onTransitionEnd", (s19) => {
        var t2;
        (t2 = s19.propertyName) != null && t2.includes("overflow") && s19.target === this.rootElement && this.checkOverflow();
      });
      R(this, "onClick", (s19) => {
        const t2 = s19.composedPath().filter((e2) => e2 instanceof HTMLAnchorElement && e2.href).map((e2) => new URL(e2.href)), i2 = new URL(window.location.href);
        if (this.options.anchors) {
          const e2 = t2.find((r2) => i2.host === r2.host && i2.pathname === r2.pathname && r2.hash);
          if (e2) {
            const r2 = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, n2 = decodeURIComponent(e2.hash);
            this.scrollTo(n2, r2);
            return;
          }
        }
        if (this.options.stopInertiaOnNavigate && t2.some((e2) => i2.host === e2.host && i2.pathname !== e2.pathname)) {
          this.reset();
          return;
        }
      });
      R(this, "onPointerDown", (s19) => {
        s19.button === 1 && this.reset();
      });
      R(this, "onVirtualScroll", (s19) => {
        if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s19) === false) return;
        const { deltaX: t2, deltaY: i2, event: e2 } = s19;
        if (this.emitter.emit("virtual-scroll", { deltaX: t2, deltaY: i2, event: e2 }), e2.ctrlKey || e2.lenisStopPropagation) return;
        const r2 = e2.type.includes("touch"), n2 = e2.type.includes("wheel");
        if (r2 && this.isIos && (e2.type === "touchstart" && (this._isDraggingSelection = this.isTouchOnSelectionHandle(e2)), this._isDraggingSelection)) {
          e2.type === "touchend" && (this._isDraggingSelection = false);
          return;
        }
        this.isTouching = e2.type === "touchstart" || e2.type === "touchmove";
        const o2 = t2 === 0 && i2 === 0;
        if (this.options.syncTouch && r2 && e2.type === "touchstart" && o2 && !this.isStopped && !this.isLocked) {
          this.reset();
          return;
        }
        const a2 = this.options.gestureOrientation === "vertical" && i2 === 0 || this.options.gestureOrientation === "horizontal" && t2 === 0;
        if (o2 || a2) return;
        let l2 = e2.composedPath();
        l2 = l2.slice(0, l2.indexOf(this.rootElement));
        const u2 = this.options.prevent, f2 = Math.abs(t2) >= Math.abs(i2) ? "horizontal" : "vertical";
        if (l2.find((p2) => {
          var d2, g2, x2, v2, b2;
          return p2 instanceof HTMLElement && (typeof u2 == "function" && (u2 == null ? void 0 : u2(p2)) || ((d2 = p2.hasAttribute) == null ? void 0 : d2.call(p2, "data-lenis-prevent")) || f2 === "vertical" && ((g2 = p2.hasAttribute) == null ? void 0 : g2.call(p2, "data-lenis-prevent-vertical")) || f2 === "horizontal" && ((x2 = p2.hasAttribute) == null ? void 0 : x2.call(p2, "data-lenis-prevent-horizontal")) || r2 && ((v2 = p2.hasAttribute) == null ? void 0 : v2.call(p2, "data-lenis-prevent-touch")) || n2 && ((b2 = p2.hasAttribute) == null ? void 0 : b2.call(p2, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(p2, { deltaX: t2, deltaY: i2 }));
        })) return;
        if (this.isStopped || this.isLocked) {
          e2.cancelable && e2.preventDefault();
          return;
        }
        if (!(this.options.syncTouch && r2 || this.options.smoothWheel && n2)) {
          this.isScrolling = "native", this.animate.stop(), e2.lenisStopPropagation = true;
          return;
        }
        let _2 = i2;
        this.options.gestureOrientation === "both" ? _2 = Math.abs(i2) > Math.abs(t2) ? i2 : t2 : this.options.gestureOrientation === "horizontal" && (_2 = t2), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i2 > 0 || this.animatedScroll === this.limit && i2 < 0)) && (e2.lenisStopPropagation = true), e2.cancelable && e2.preventDefault();
        const c2 = r2 && this.options.syncTouch, h2 = r2 && e2.type === "touchend";
        h2 && (_2 = Math.sign(_2) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + _2, { programmatic: false, ...c2 ? { lerp: h2 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing } });
      });
      R(this, "onNativeScroll", () => {
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
      R(this, "raf", (s19) => {
        const t2 = s19 - (this.time || s19);
        this.time = s19, this.animate.advance(t2 * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
      });
      window.lenisVersion = Ho, window.lenis || (window.lenis = {}), window.lenis.version = Ho, _ === "horizontal" && (window.lenis.horizontal = true), r === true && (window.lenis.touch = true), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s18 || s18 === document.documentElement) && (s18 = window), typeof a == "number" && typeof l != "function" ? l = Uo : typeof l == "function" && typeof a != "number" && (a = 1), this.options = { wrapper: s18, content: t, eventsTarget: i, smoothWheel: e, syncTouch: r, syncTouchLerp: n, touchInertiaExponent: o, duration: a, easing: l, lerp: u, infinite: f, gestureOrientation: c, orientation: _, touchMultiplier: h, wheelMultiplier: p, autoResize: d, prevent: g, virtualScroll: x, overscroll: v, autoRaf: b, anchors: y, autoToggle: S, allowNestedScroll: P, naiveDimensions: O, stopInertiaOnNavigate: k }, this.dimensions = new lf(s18, t, { autoResize: d }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new ff(i, { touchMultiplier: h, wheelMultiplier: p }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
    }
    on(s18, t) {
      return this.emitter.on(s18, t);
    }
    off(s18, t) {
      return this.emitter.off(s18, t);
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
    isTouchOnSelectionHandle(s18) {
      const t = window.getSelection();
      if (!t || t.isCollapsed || t.rangeCount === 0) return false;
      const i = s18.targetTouches[0] ?? s18.changedTouches[0];
      if (!i) return false;
      const e = t.getRangeAt(0).getClientRects();
      if (e.length === 0) return false;
      const r = e[0], n = e[e.length - 1], o = 40, a = Math.hypot(i.clientX - r.left, i.clientY - r.top) <= o, l = Math.hypot(i.clientX - n.right, i.clientY - n.bottom) <= o;
      return a || l;
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
    scrollTo(s18, { offset: t = 0, immediate: i = false, lock: e = false, programmatic: r = true, lerp: n = r ? this.options.lerp : void 0, duration: o = r ? this.options.duration : void 0, easing: a = r ? this.options.easing : void 0, onStart: l, onComplete: u, force: f = false, userData: _ } = {}) {
      if ((this.isStopped || this.isLocked) && !f) return;
      let c = s18, h = t;
      if (typeof c == "string" && ["top", "left", "start", "#"].includes(c)) c = 0;
      else if (typeof c == "string" && ["bottom", "right", "end"].includes(c)) c = this.limit;
      else {
        let p = null;
        if (typeof c == "string" ? (p = c.startsWith("#") ? document.getElementById(c.slice(1)) : document.querySelector(c), p || (c === "#top" ? c = 0 : console.warn("Lenis: Target not found", c))) : c instanceof HTMLElement && (c != null && c.nodeType) && (p = c), p) {
          if (this.options.wrapper !== window) {
            const y = this.rootElement.getBoundingClientRect();
            h -= this.isHorizontal ? y.left : y.top;
          }
          const d = p.getBoundingClientRect(), g = getComputedStyle(p), x = this.isHorizontal ? Number.parseFloat(g.scrollMarginLeft) : Number.parseFloat(g.scrollMarginTop), v = getComputedStyle(this.rootElement), b = this.isHorizontal ? Number.parseFloat(v.scrollPaddingLeft) : Number.parseFloat(v.scrollPaddingTop);
          c = (this.isHorizontal ? d.left : d.top) + this.animatedScroll - (Number.isNaN(x) ? 0 : x) - (Number.isNaN(b) ? 0 : b);
        }
      }
      if (typeof c == "number") {
        if (c += h, this.options.infinite) {
          if (r) {
            this.targetScroll = this.animatedScroll = this.scroll;
            const p = c - this.animatedScroll;
            p > this.limit / 2 ? c -= this.limit : p < -this.limit / 2 && (c += this.limit);
          }
        } else c = dl(0, c, this.limit);
        if (c === this.targetScroll) {
          l == null || l(this), u == null || u(this);
          return;
        }
        if (this.userData = _ ?? {}, i) {
          this.animatedScroll = this.targetScroll = c, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          return;
        }
        r || (this.targetScroll = c), typeof o == "number" && typeof a != "function" ? a = Uo : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, c, { duration: o, easing: a, lerp: n, onStart: () => {
          e && (this.isLocked = true), this.isScrolling = "smooth", l == null || l(this);
        }, onUpdate: (p, d) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = p - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = p, this.setScroll(this.scroll), r && (this.targetScroll = p), d || this.emit(), d && (this.reset(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
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
    hasNestedScroll(s18, { deltaX: t, deltaY: i }) {
      const e = Date.now();
      s18._lenis || (s18._lenis = {});
      const r = s18._lenis;
      let n, o, a, l, u, f, _, c, h, p;
      if (e - (r.time ?? 0) > 2e3) {
        r.time = Date.now();
        const P = window.getComputedStyle(s18);
        if (r.computedStyle = P, n = ["auto", "overlay", "scroll"].includes(P.overflowX), o = ["auto", "overlay", "scroll"].includes(P.overflowY), u = ["auto"].includes(P.overscrollBehaviorX), f = ["auto"].includes(P.overscrollBehaviorY), r.hasOverflowX = n, r.hasOverflowY = o, !(n || o)) return false;
        _ = s18.scrollWidth, c = s18.scrollHeight, h = s18.clientWidth, p = s18.clientHeight, a = _ > h, l = c > p, r.isScrollableX = a, r.isScrollableY = l, r.scrollWidth = _, r.scrollHeight = c, r.clientWidth = h, r.clientHeight = p, r.hasOverscrollBehaviorX = u, r.hasOverscrollBehaviorY = f;
      } else a = r.isScrollableX, l = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, _ = r.scrollWidth, c = r.scrollHeight, h = r.clientWidth, p = r.clientHeight, u = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
      if (!(n && a || o && l)) return false;
      const d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      let g, x, v, b, y, S;
      if (d === "horizontal") g = Math.round(s18.scrollLeft), x = _ - h, v = t, b = n, y = a, S = u;
      else if (d === "vertical") g = Math.round(s18.scrollTop), x = c - p, v = i, b = o, y = l, S = f;
      else return false;
      return !S && (g >= x || g <= 0) ? true : (v > 0 ? g < x : g > 0) && b && y;
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
      return this.options.infinite ? sf(this.animatedScroll, this.limit) : this.animatedScroll;
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
  Nu.registerPlugin(U);
  var s17 = { rafId: null, mq: window.matchMedia("(max-width: 768px)"), lastScrollY: window.scrollY, init: () => {
    s17.initScrollEffects(), s17.initNavigation(), s17.initAnchorLinks(), s17.initModals(), s17.initLenisSystem(), s17.initAccording(), window.addEventListener("load", () => setTimeout(() => document.body.classList.add("loaded"), 500));
  }, initAccording: () => {
    document.querySelectorAll("[data-accordion-group]").forEach((o) => {
      const t = o.querySelectorAll(".c-accordion__button");
      t.forEach((e) => {
        e.addEventListener("click", () => {
          const i = e.getAttribute("aria-expanded") === "true", a = e.getAttribute("aria-controls"), d = document.getElementById(a);
          d && (t.forEach((r) => {
            if (r !== e) {
              r.setAttribute("aria-expanded", "false");
              const u = r.getAttribute("aria-controls"), l = document.getElementById(u);
              l && (l.hidden = true);
            }
          }), e.setAttribute("aria-expanded", !i), d.hidden = i);
        });
      });
    });
  }, initScrollEffects: () => {
    const n = document.querySelectorAll(".fadein"), o = () => {
      const t = window.scrollY;
      n.forEach((e) => {
        const i = t > e.getBoundingClientRect().top + t - window.innerHeight + 150;
        e.classList.toggle("scrollin", i);
      });
    };
    window.addEventListener("scroll", o), window.addEventListener("load", o);
  }, initNavigation: () => {
    const n = document.body, o = document.querySelector(".m-menu");
    document.addEventListener("click", (t) => {
      const e = t.target;
      e.closest(".js-menu-hambuger") && (o == null || o.classList.toggle("is-open"), n.classList.toggle("has-menu")), (e.closest(".js-menu-close") || e.closest(".js-anchor")) && (o == null || o.classList.remove("is-open"), n.classList.remove("has-menu"));
    });
  }, initAnchorLinks: () => {
    const n = () => {
      var t;
      return ((t = document.querySelector("header")) == null ? void 0 : t.offsetHeight) || 0;
    }, o = (t, e = true) => {
      const i = t.getBoundingClientRect().top + window.pageYOffset - n();
      window.lenis ? window.lenis.scrollTo(t, { offset: -n(), duration: e ? 1.2 : void 0, immediate: !e, easing: (a) => Math.min(1, 1.001 - Math.pow(2, -10 * a)) }) : window.scrollTo({ top: i, behavior: e ? "smooth" : "auto" });
    };
    if (document.querySelectorAll(".js-anchor").forEach((t) => {
      t.addEventListener("click", (e) => {
        const i = t.getAttribute("href");
        if (!(i != null && i.includes("#"))) return;
        const a = new URL(t.href), d = document.querySelector(a.hash);
        location.pathname === a.pathname && d && (e.preventDefault(), o(d));
      });
    }), window.location.hash) {
      const t = document.querySelector(window.location.hash);
      t && setTimeout(() => o(t, false), 300);
    }
  }, initModals: () => {
    const n = document.body;
    document.querySelectorAll(".js-open-modal").forEach((t) => {
      t.addEventListener("click", () => {
        var i;
        const e = document.querySelector(t.getAttribute("data-modal-target"));
        e && (e.classList.add("is-active"), n.classList.add("has-modal"), n.style.overflow = "hidden", (i = window.lenis) == null || i.stop());
      });
    });
    const o = (t) => {
      var e;
      t.classList.remove("is-active"), document.querySelector(".c-modal.is-active") || (n.classList.remove("has-modal"), n.style.overflow = "", (e = window.lenis) == null || e.start());
    };
    document.querySelectorAll(".js-close-modal, .overlay").forEach((t) => {
      t.addEventListener("click", () => {
        const e = t.closest(".c-modal") || document.querySelector(".c-modal.is-active");
        e && o(e);
      });
    });
  }, initLenisSystem: () => {
    window.addEventListener("load", async () => {
      await document.fonts.ready, window.lenis = null;
      const n = (t) => {
        var e;
        (e = window.lenis) == null || e.raf(t), s17.rafId = requestAnimationFrame(n);
      }, o = (t) => {
        var e, i;
        t.matches ? (window.lenis && ((i = (e = window.lenis).destroy) == null || i.call(e), window.lenis = null), cancelAnimationFrame(s17.rafId), s17.rafId = null, U.refresh()) : (window.lenis = new cf({ smooth: true, lerp: 0.1, smoothTouch: !/iP(ad|hone|od)/.test(navigator.userAgent) }), s17.rafId || (s17.rafId = requestAnimationFrame(n)), requestAnimationFrame(() => U.refresh()));
      };
      o(s17.mq), s17.mq.addEventListener("change", o), window.addEventListener("pageshow", (t) => {
        const e = performance.getEntriesByType("navigation")[0];
        (t.persisted || (e == null ? void 0 : e.type) === "back_forward") && window.lenis && window.lenis.scrollTo(window.scrollY, { immediate: true });
      });
    });
  } };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s17.init) : s17.init();
})();
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
