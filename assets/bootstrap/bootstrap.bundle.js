/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
        t());
})(this, function () {
  "use strict";
  let e = "transitionend",
    t = (e) =>
      null == e
        ? `${e}`
        : {}.toString
            .call(e)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    i = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t;
    },
    n = (e) => {
      let t = i(e);
      return t && document.querySelector(t) ? t : null;
    },
    s = (e) => {
      let t = i(e);
      return t ? document.querySelector(t) : null;
    },
    r = (e) => {
      if (!e) return 0;
      let { transitionDuration: t, transitionDelay: i } =
          window.getComputedStyle(e),
        n = Number.parseFloat(t),
        s = Number.parseFloat(i);
      return n || s
        ? ((t = t.split(",")[0]),
          (i = i.split(",")[0]),
          (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3)
        : 0;
    },
    o = (t) => {
      t.dispatchEvent(new Event(e));
    },
    a = (e) =>
      !!e &&
      "object" == typeof e &&
      (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    l = (e) =>
      a(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? document.querySelector(e)
        : null,
    c = (e, i, n) => {
      Object.keys(n).forEach((s) => {
        let r = n[s],
          o = i[s],
          l = o && a(o) ? "element" : t(o);
        if (!RegExp(r).test(l))
          throw TypeError(
            `${e.toUpperCase()}: Option "${s}" provided type "${l}" but expected type "${r}".`
          );
      });
    },
    h = (e) =>
      !!a(e) &&
      0 !== e.getClientRects().length &&
      "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    d = (e) =>
      !!(
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        e.classList.contains("disabled")
      ) ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    f = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot
        ? e
        : e.parentNode
        ? f(e.parentNode)
        : null;
    },
    u = () => {},
    p = (e) => {
      e.offsetHeight;
    },
    g = () => {
      let { jQuery: e } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
    m = [],
    v = (e) => {
      "loading" === document.readyState
        ? (m.length ||
            document.addEventListener("DOMContentLoaded", () => {
              m.forEach((e) => e());
            }),
          m.push(e))
        : e();
    },
    b = () => "rtl" === document.documentElement.dir,
    y = (e) => {
      v(() => {
        let t = g();
        if (t) {
          let i = e.NAME,
            n = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
        }
      });
    },
    $ = (e) => {
      "function" == typeof e && e();
    },
    w = (t, i, n = !0) => {
      if (!n) {
        $(t);
        return;
      }
      let s = r(i) + 5,
        a = !1,
        l = ({ target: n }) => {
          n === i && ((a = !0), i.removeEventListener(e, l), $(t));
        };
      i.addEventListener(e, l),
        setTimeout(() => {
          a || o(i);
        }, s);
    },
    E = (e, t, i, n) => {
      let s = e.indexOf(t);
      if (-1 === s) return e[!i && n ? e.length - 1 : 0];
      let r = e.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + r) % r),
        e[Math.max(0, Math.min(s, r - 1))]
      );
    },
    A = /[^.]*(?=\..*)\.|.*/,
    k = /\..*/,
    x = /::\d+$/,
    L = {},
    C = 1,
    O = { mouseenter: "mouseover", mouseleave: "mouseout" },
    T = /^(mouseenter|mouseleave)/i,
    D = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function _(e, t) {
    return (t && `${t}::${C++}`) || e.uidEvent || C++;
  }
  function N(e) {
    let t = _(e);
    return (e.uidEvent = t), (L[t] = L[t] || {}), L[t];
  }
  function I(e, t, i = null) {
    let n = Object.keys(e);
    for (let s = 0, r = n.length; s < r; s++) {
      let o = e[n[s]];
      if (o.originalHandler === t && o.delegationSelector === i) return o;
    }
    return null;
  }
  function S(e, t, i) {
    let n = "string" == typeof t,
      s = B(e),
      r = D.has(s);
    return r || (s = e), [n, n ? i : t, s];
  }
  function P(e, t, i, n, s) {
    var r, o, a, l, c;
    if ("string" != typeof t || !e) return;
    if ((i || ((i = n), (n = null)), T.test(t))) {
      let h = (e) =>
        function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget &&
              !t.delegateTarget.contains(t.relatedTarget))
          )
            return e.call(this, t);
        };
      n ? (n = h(n)) : (i = h(i));
    }
    let [d, f, u] = S(t, i, n),
      p = N(e),
      g = p[u] || (p[u] = {}),
      m = I(g, f, d ? i : null);
    if (m) {
      m.oneOff = m.oneOff && s;
      return;
    }
    let v = _(f, t.replace(A, "")),
      b = d
        ? ((r = e),
          (o = i),
          (a = n),
          function e(t) {
            let i = r.querySelectorAll(o);
            for (let { target: n } = t; n && n !== this; n = n.parentNode)
              for (let s = i.length; s--; )
                if (i[s] === n)
                  return (
                    (t.delegateTarget = n),
                    e.oneOff && H.off(r, t.type, o, a),
                    a.apply(n, [t])
                  );
            return null;
          })
        : ((l = e),
          (c = i),
          function e(t) {
            return (
              (t.delegateTarget = l),
              e.oneOff && H.off(l, t.type, c),
              c.apply(l, [t])
            );
          });
    (b.delegationSelector = d ? i : null),
      (b.originalHandler = f),
      (b.oneOff = s),
      (b.uidEvent = v),
      (g[v] = b),
      e.addEventListener(u, b, d);
  }
  function M(e, t, i, n, s) {
    let r = I(t[i], n, s);
    r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
  }
  function B(e) {
    return O[(e = e.replace(k, ""))] || e;
  }
  let H = {
      on(e, t, i, n) {
        P(e, t, i, n, !1);
      },
      one(e, t, i, n) {
        P(e, t, i, n, !0);
      },
      off(e, t, i, n) {
        if ("string" != typeof t || !e) return;
        let [s, r, o] = S(t, i, n),
          a = o !== t,
          l = N(e),
          c = t.startsWith(".");
        if (void 0 !== r) {
          if (!l || !l[o]) return;
          M(e, l, o, r, s ? i : null);
          return;
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function e(t, i, n, s) {
              let r = i[n] || {};
              Object.keys(r).forEach((e) => {
                if (e.includes(s)) {
                  let o = r[e];
                  M(t, i, n, o.originalHandler, o.delegationSelector);
                }
              });
            })(e, l, i, t.slice(1));
          });
        let h = l[o] || {};
        Object.keys(h).forEach((i) => {
          let n = i.replace(x, "");
          if (!a || t.includes(n)) {
            let s = h[i];
            M(e, l, o, s.originalHandler, s.delegationSelector);
          }
        });
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        let n = g(),
          s = B(t),
          r = D.has(s),
          o,
          a = !0,
          l = !0,
          c = !1,
          h = null;
        return (
          t !== s &&
            n &&
            ((o = n.Event(t, i)),
            n(e).trigger(o),
            (a = !o.isPropagationStopped()),
            (l = !o.isImmediatePropagationStopped()),
            (c = o.isDefaultPrevented())),
          r
            ? (h = document.createEvent("HTMLEvents")).initEvent(s, a, !0)
            : (h = new CustomEvent(t, { bubbles: a, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((e) => {
              Object.defineProperty(h, e, { get: () => i[e] });
            }),
          c && h.preventDefault(),
          l && e.dispatchEvent(h),
          h.defaultPrevented && void 0 !== o && o.preventDefault(),
          h
        );
      },
    },
    j = new Map(),
    R = {
      set(e, t, i) {
        j.has(e) || j.set(e, new Map());
        let n = j.get(e);
        if (!n.has(t) && 0 !== n.size) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(n.keys())[0]
            }.`
          );
          return;
        }
        n.set(t, i);
      },
      get: (e, t) => (j.has(e) && j.get(e).get(t)) || null,
      remove(e, t) {
        if (!j.has(e)) return;
        let i = j.get(e);
        i.delete(t), 0 === i.size && j.delete(e);
      },
    };
  class q {
    constructor(e) {
      if (!(e = l(e))) return;
      (this._element = e),
        R.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      R.remove(this._element, this.constructor.DATA_KEY),
        H.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
    }
    _queueCallback(e, t, i = !0) {
      w(e, t, i);
    }
    static getInstance(e) {
      return R.get(l(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  let W = (e, t = "hide") => {
      let i = `click.dismiss${e.EVENT_KEY}`,
        n = e.NAME;
      H.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this))
        )
          return;
        let r = s(this) || this.closest(`.${n}`),
          o = e.getOrCreateInstance(r);
        o[t]();
      });
    },
    z = ".bs.alert",
    V = `close${z}`,
    F = `closed${z}`;
  class X extends q {
    static get NAME() {
      return "alert";
    }
    close() {
      let e = H.trigger(this._element, V);
      if (e.defaultPrevented) return;
      this._element.classList.remove("show");
      let t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), H.trigger(this._element, F), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = X.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  W(X, "close"), y(X);
  let K = '[data-bs-toggle="button"]',
    Y = "click.bs.button.data-api";
  class Q extends q {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = Q.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  function U(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        (e === Number(e).toString()
          ? Number(e)
          : "" === e || "null" === e
          ? null
          : e))
    );
  }
  function Z(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  H.on(document, Y, K, (e) => {
    e.preventDefault();
    let t = e.target.closest(K),
      i = Q.getOrCreateInstance(t);
    i.toggle();
  }),
    y(Q);
  let G = {
      setDataAttribute(e, t, i) {
        e.setAttribute(`data-bs-${Z(t)}`, i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${Z(t)}`);
      },
      getDataAttributes(e) {
        if (!e) return {};
        let t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = U(
                e.dataset[i]
              );
            }),
          t
        );
      },
      getDataAttribute: (e, t) => U(e.getAttribute(`data-bs-${Z(t)}`)),
      offset(e) {
        let t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset,
        };
      },
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    },
    J = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        let i = [],
          n = e.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(t) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        let t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(t, e).filter((e) => !d(e) && h(e));
      },
    },
    ee = "carousel",
    et = ".bs.carousel",
    ei = ".data-api",
    en = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    es = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    er = "next",
    eo = "prev",
    ea = "left",
    el = "right",
    ec = { ArrowLeft: el, ArrowRight: ea },
    eh = `slide${et}`,
    ed = `slid${et}`,
    ef = `keydown${et}`,
    eu = `mouseenter${et}`,
    ep = `mouseleave${et}`,
    eg = `touchstart${et}`,
    em = `touchmove${et}`,
    e8 = `touchend${et}`,
    ev = `pointerdown${et}`,
    eb = `pointerup${et}`,
    ey = `dragstart${et}`,
    e$ = `load${et}${ei}`,
    ew = `click${et}${ei}`,
    eE = "active",
    eA = ".active.carousel-item";
  class ek extends q {
    constructor(e, t) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(t)),
        (this._indicatorsElement = J.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return en;
    }
    static get NAME() {
      return ee;
    }
    next() {
      this._slide(er);
    }
    nextWhenVisible() {
      !document.hidden && h(this._element) && this.next();
    }
    prev() {
      this._slide(eo);
    }
    pause(e) {
      e || (this._isPaused = !0),
        J.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (o(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(e) {
      e || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = J.findOne(eA, this._element);
      let t = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1) && !(e < 0)) {
        if (this._isSliding) {
          H.one(this._element, ed, () => this.to(e));
          return;
        }
        if (t === e) {
          this.pause(), this.cycle();
          return;
        }
        this._slide(e > t ? er : eo, this._items[e]);
      }
    }
    _getConfig(e) {
      return (
        c(
          ee,
          (e = {
            ...en,
            ...G.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          es
        ),
        e
      );
    }
    _handleSwipe() {
      let e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      let t = e / this.touchDeltaX;
      (this.touchDeltaX = 0), t && this._slide(t > 0 ? el : ea);
    }
    _addEventListeners() {
      this._config.keyboard && H.on(this._element, ef, (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (H.on(this._element, eu, (e) => this.pause(e)),
          H.on(this._element, ep, (e) => this.cycle(e))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      let e = (e) =>
          this._pointerEvent &&
          ("pen" === e.pointerType || "touch" === e.pointerType),
        t = (t) => {
          e(t)
            ? (this.touchStartX = t.clientX)
            : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        },
        i = (e) => {
          this.touchDeltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (e) => this.cycle(e),
                500 + this._config.interval
              )));
        };
      J.find(".carousel-item img", this._element).forEach((e) => {
        H.on(e, ey, (e) => e.preventDefault());
      }),
        this._pointerEvent
          ? (H.on(this._element, ev, (e) => t(e)),
            H.on(this._element, eb, (e) => n(e)),
            this._element.classList.add("pointer-event"))
          : (H.on(this._element, eg, (e) => t(e)),
            H.on(this._element, em, (e) => i(e)),
            H.on(this._element, e8, (e) => n(e)));
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      let t = ec[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
    _getItemIndex(e) {
      return (
        (this._items =
          e && e.parentNode ? J.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(e, t) {
      return E(this._items, t, e === er, this._config.wrap);
    }
    _triggerSlideEvent(e, t) {
      let i = this._getItemIndex(e),
        n = this._getItemIndex(J.findOne(eA, this._element));
      return H.trigger(this._element, eh, {
        relatedTarget: e,
        direction: t,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        let t = J.findOne(".active", this._indicatorsElement);
        t.classList.remove(eE), t.removeAttribute("aria-current");
        let i = J.find("[data-bs-target]", this._indicatorsElement);
        for (let n = 0; n < i.length; n++)
          if (
            Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(e)
          ) {
            i[n].classList.add(eE), i[n].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      let e = this._activeElement || J.findOne(eA, this._element);
      if (!e) return;
      let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = t))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(e, t) {
      let i = this._directionToOrder(e),
        n = J.findOne(eA, this._element),
        s = this._getItemIndex(n),
        r = t || this._getItemByOrder(i, n),
        o = this._getItemIndex(r),
        a = Boolean(this._interval),
        l = i === er,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (r && r.classList.contains(eE)) {
        this._isSliding = !1;
        return;
      }
      if (this._isSliding) return;
      let f = this._triggerSlideEvent(r, d);
      if (f.defaultPrevented || !n || !r) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      let u = () => {
        H.trigger(this._element, ed, {
          relatedTarget: r,
          direction: d,
          from: s,
          to: o,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(h), p(r), n.classList.add(c), r.classList.add(c);
        let g = () => {
          r.classList.remove(c, h),
            r.classList.add(eE),
            n.classList.remove(eE, h, c),
            (this._isSliding = !1),
            setTimeout(u, 0);
        };
        this._queueCallback(g, n, !0);
      } else n.classList.remove(eE), r.classList.add(eE), (this._isSliding = !1), u();
      a && this.cycle();
    }
    _directionToOrder(e) {
      return [el, ea].includes(e)
        ? b()
          ? e === ea
            ? eo
            : er
          : e === ea
          ? er
          : eo
        : e;
    }
    _orderToDirection(e) {
      return [er, eo].includes(e)
        ? b()
          ? e === eo
            ? ea
            : el
          : e === eo
          ? el
          : ea
        : e;
    }
    static carouselInterface(e, t) {
      let i = ek.getOrCreateInstance(e, t),
        { _config: n } = i;
      "object" == typeof t && (n = { ...n, ...t });
      let s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function () {
        ek.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      let t = s(this);
      if (!t || !t.classList.contains("carousel")) return;
      let i = { ...G.getDataAttributes(t), ...G.getDataAttributes(this) },
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        ek.carouselInterface(t, i),
        n && ek.getInstance(t).to(n),
        e.preventDefault();
    }
  }
  H.on(
    document,
    ew,
    "[data-bs-slide], [data-bs-slide-to]",
    ek.dataApiClickHandler
  ),
    H.on(window, e$, () => {
      let e = J.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++)
        ek.carouselInterface(e[t], ek.getInstance(e[t]));
    }),
    y(ek);
  let ex = "collapse",
    eL = "bs.collapse",
    eC = `.${eL}`,
    e9 = { toggle: !0, parent: null },
    eO = { toggle: "boolean", parent: "(null|element)" },
    eT = `show${eC}`,
    eD = `shown${eC}`,
    e_ = `hide${eC}`,
    eN = `hidden${eC}`,
    eI = `click${eC}.data-api`,
    eS = "show",
    eP = "collapse",
    eM = "collapsing",
    eB = "collapsed",
    eH = `:scope .${eP} .${eP}`,
    ej = '[data-bs-toggle="collapse"]';
  class eR extends q {
    constructor(e, t) {
      super(e),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(t)),
        (this._triggerArray = []);
      let i = J.find(ej);
      for (let s = 0, r = i.length; s < r; s++) {
        let o = i[s],
          a = n(o),
          l = J.find(a).filter((e) => e === this._element);
        null !== a &&
          l.length &&
          ((this._selector = a), this._triggerArray.push(o));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return e9;
    }
    static get NAME() {
      return ex;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e = [],
        t;
      if (this._config.parent) {
        let i = J.find(eH, this._config.parent);
        e = J.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !i.includes(e));
      }
      let n = J.findOne(this._selector);
      if (e.length) {
        let s = e.find((e) => n !== e);
        if ((t = s ? eR.getInstance(s) : null) && t._isTransitioning) return;
      }
      let r = H.trigger(this._element, eT);
      if (r.defaultPrevented) return;
      e.forEach((e) => {
        n !== e && eR.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || R.set(e, eL, null);
      });
      let o = this._getDimension();
      this._element.classList.remove(eP),
        this._element.classList.add(eM),
        (this._element.style[o] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      let a = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(eM),
            this._element.classList.add(eP, eS),
            (this._element.style[o] = ""),
            H.trigger(this._element, eD);
        },
        l = o[0].toUpperCase() + o.slice(1),
        c = `scroll${l}`;
      this._queueCallback(a, this._element, !0),
        (this._element.style[o] = `${this._element[c]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      let e = H.trigger(this._element, e_);
      if (e.defaultPrevented) return;
      let t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        p(this._element),
        this._element.classList.add(eM),
        this._element.classList.remove(eP, eS);
      let i = this._triggerArray.length;
      for (let n = 0; n < i; n++) {
        let r = this._triggerArray[n],
          o = s(r);
        o && !this._isShown(o) && this._addAriaAndCollapsedClass([r], !1);
      }
      this._isTransitioning = !0;
      let a = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(eM),
          this._element.classList.add(eP),
          H.trigger(this._element, eN);
      };
      (this._element.style[t] = ""), this._queueCallback(a, this._element, !0);
    }
    _isShown(e = this._element) {
      return e.classList.contains(eS);
    }
    _getConfig(e) {
      return (
        ((e = { ...e9, ...G.getDataAttributes(this._element), ...e }).toggle =
          Boolean(e.toggle)),
        (e.parent = l(e.parent)),
        c(ex, e, eO),
        e
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      let e = J.find(eH, this._config.parent);
      J.find(ej, this._config.parent)
        .filter((t) => !e.includes(t))
        .forEach((e) => {
          let t = s(e);
          t && this._addAriaAndCollapsedClass([e], this._isShown(t));
        });
    }
    _addAriaAndCollapsedClass(e, t) {
      e.length &&
        e.forEach((e) => {
          t ? e.classList.remove(eB) : e.classList.add(eB),
            e.setAttribute("aria-expanded", t);
        });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = {};
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
        let i = eR.getOrCreateInstance(this, t);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  }
  H.on(document, eI, ej, function (e) {
    ("A" === e.target.tagName ||
      (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
      e.preventDefault();
    let t = n(this),
      i = J.find(t);
    i.forEach((e) => {
      eR.getOrCreateInstance(e, { toggle: !1 }).toggle();
    });
  }),
    y(eR);
  var eq = "bottom",
    eW = "right",
    ez = "left",
    eV = "auto",
    eF = ["top", eq, eW, ez],
    eX = "start",
    eK = "clippingParents",
    eY = "viewport",
    e0 = "popper",
    eQ = "reference",
    eU = eF.reduce(function (e, t) {
      return e.concat([t + "-" + eX, t + "-end"]);
    }, []),
    e1 = [].concat(eF, [eV]).reduce(function (e, t) {
      return e.concat([t, t + "-" + eX, t + "-end"]);
    }, []),
    e3 = "beforeRead",
    e2 = "read",
    eZ = "afterRead",
    e4 = "beforeMain",
    eG = "main",
    eJ = "afterMain",
    e5 = "beforeWrite",
    e6 = "write",
    e7 = "afterWrite",
    te = [e3, e2, eZ, e4, eG, eJ, e5, e6, e7];
  function tt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function ti(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function tn(e) {
    var t = ti(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function ts(e) {
    var t = ti(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function tr(e) {
    if ("undefined" == typeof ShadowRoot) return !1;
    var t = ti(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  let to = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function e(t) {
      var i = t.state;
      Object.keys(i.elements).forEach(function (e) {
        var t = i.styles[e] || {},
          n = i.attributes[e] || {},
          s = i.elements[e];
        ts(s) &&
          tt(s) &&
          (Object.assign(s.style, t),
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            !1 === t
              ? s.removeAttribute(e)
              : s.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function e(t) {
      var i = t.state,
        n = {
          popper: {
            position: i.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(i.elements.popper.style, n.popper),
        (i.styles = n),
        i.elements.arrow && Object.assign(i.elements.arrow.style, n.arrow),
        function () {
          Object.keys(i.elements).forEach(function (e) {
            var t = i.elements[e],
              s = i.attributes[e] || {},
              r = Object.keys(
                i.styles.hasOwnProperty(e) ? i.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            ts(t) &&
              tt(t) &&
              (Object.assign(t.style, r),
              Object.keys(s).forEach(function (e) {
                t.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function ta(e) {
    return e.split("-")[0];
  }
  function tl(e, t) {
    var i = e.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function tc(e) {
    var t = tl(e),
      i = e.offsetWidth,
      n = e.offsetHeight;
    return (
      1 >= Math.abs(t.width - i) && (i = t.width),
      1 >= Math.abs(t.height - n) && (n = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
    );
  }
  function th(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && tr(i)) {
      var n = t;
      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function td(e) {
    return ti(e).getComputedStyle(e);
  }
  function tf(e) {
    return ["table", "td", "th"].indexOf(tt(e)) >= 0;
  }
  function tu(e) {
    return (
      (tn(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function tp(e) {
    return "html" === tt(e)
      ? e
      : e.assignedSlot || e.parentNode || (tr(e) ? e.host : null) || tu(e);
  }
  function tg(e) {
    return ts(e) && "fixed" !== td(e).position ? e.offsetParent : null;
  }
  function tm(e) {
    for (var t = ti(e), i = tg(e); i && tf(i) && "static" === td(i).position; )
      i = tg(i);
    return i &&
      ("html" === tt(i) || ("body" === tt(i) && "static" === td(i).position))
      ? t
      : i ||
          (function e(t) {
            var i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              ts(t) &&
              "fixed" === td(t).position
            )
              return null;
            for (
              var n = tp(t);
              ts(n) && 0 > ["html", "body"].indexOf(tt(n));

            ) {
              var s = td(n);
              if (
                "none" !== s.transform ||
                "none" !== s.perspective ||
                "paint" === s.contain ||
                -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                (i && "filter" === s.willChange) ||
                (i && s.filter && "none" !== s.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  function t8(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  var tv = Math.max,
    tb = Math.min,
    ty = Math.round;
  function t$(e, t, i) {
    return tv(e, tb(t, i));
  }
  function tw() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function tE(e) {
    return Object.assign({}, tw(), e);
  }
  function tA(e, t) {
    return t.reduce(function (t, i) {
      return (t[i] = e), t;
    }, {});
  }
  let tk = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i,
        n = t.state,
        s = t.name,
        r = t.options,
        o = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        l = ta(n.placement),
        c = t8(l),
        h = [ez, eW].indexOf(l) >= 0 ? "height" : "width";
      if (o && a) {
        var d,
          f,
          u =
            ((d = r.padding),
            (f = n),
            tE(
              "number" !=
                typeof (d =
                  "function" == typeof d
                    ? d(Object.assign({}, f.rects, { placement: f.placement }))
                    : d)
                ? d
                : tA(d, eF)
            )),
          p = tc(o),
          g =
            n.rects.reference[h] +
            n.rects.reference[c] -
            a[c] -
            n.rects.popper[h],
          m = a[c] - n.rects.reference[c],
          v = tm(o),
          b = v ? ("y" === c ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          y = u["y" === c ? "top" : ez],
          $ = b - p[h] - u["y" === c ? eq : eW],
          w = b / 2 - p[h] / 2 + (g / 2 - m / 2),
          E = t$(y, w, $),
          A = c;
        n.modifiersData[s] = (((i = {})[A] = E), (i.centerOffset = E - w), i);
      }
    },
    effect: function e(t) {
      var i = t.state,
        n = t.options.element,
        s = void 0 === n ? "[data-popper-arrow]" : n;
      null != s &&
        ("string" != typeof s || (s = i.elements.popper.querySelector(s))) &&
        th(i.elements.popper, s) &&
        (i.elements.arrow = s);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function tx(e) {
    return e.split("-")[1];
  }
  var tL = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tC(e) {
    var t,
      i,
      n,
      s,
      r,
      o,
      a = e.popper,
      l = e.popperRect,
      c = e.placement,
      h = e.variation,
      d = e.offsets,
      f = e.position,
      u = e.gpuAcceleration,
      p = e.adaptive,
      g = e.roundOffsets,
      m =
        !0 === g
          ? ((s = (n = d).x),
            (r = n.y),
            {
              x: ty(ty(s * (o = window.devicePixelRatio || 1)) / o) || 0,
              y: ty(ty(r * o) / o) || 0,
            })
          : "function" == typeof g
          ? g(d)
          : d,
      v = m.x,
      b = void 0 === v ? 0 : v,
      y = m.y,
      $ = void 0 === y ? 0 : y,
      w = d.hasOwnProperty("x"),
      E = d.hasOwnProperty("y"),
      A = ez,
      k = "top",
      x = window;
    if (p) {
      var L = tm(a),
        C = "clientHeight",
        O = "clientWidth";
      L === ti(a) &&
        ((L = tu(a)),
        "static" !== td(L).position &&
          "absolute" === f &&
          ((C = "scrollHeight"), (O = "scrollWidth"))),
        ("top" === c || ((c === ez || c === eW) && "end" === h)) &&
          ((k = eq), ($ -= L[C] - l.height), ($ *= u ? 1 : -1)),
        (c === ez || (("top" === c || c === eq) && "end" === h)) &&
          ((A = eW), (b -= L[O] - l.width), (b *= u ? 1 : -1));
    }
    var T = Object.assign({ position: f }, p && tL);
    return u
      ? Object.assign(
          {},
          T,
          (((i = {})[k] = E ? "0" : ""),
          (i[A] = w ? "0" : ""),
          (i.transform =
            1 >= (x.devicePixelRatio || 1)
              ? "translate(" + b + "px, " + $ + "px)"
              : "translate3d(" + b + "px, " + $ + "px, 0)"),
          i)
        )
      : Object.assign(
          {},
          T,
          (((t = {})[k] = E ? $ + "px" : ""),
          (t[A] = w ? b + "px" : ""),
          (t.transform = ""),
          t)
        );
  }
  let t9 = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = n.gpuAcceleration,
        r = n.adaptive,
        o = n.roundOffsets,
        a = void 0 === o || o,
        l = {
          placement: ta(i.placement),
          variation: tx(i.placement),
          popper: i.elements.popper,
          popperRect: i.rects.popper,
          gpuAcceleration: void 0 === s || s,
        };
      null != i.modifiersData.popperOffsets &&
        (i.styles.popper = Object.assign(
          {},
          i.styles.popper,
          tC(
            Object.assign({}, l, {
              offsets: i.modifiersData.popperOffsets,
              position: i.options.strategy,
              adaptive: void 0 === r || r,
              roundOffsets: a,
            })
          )
        )),
        null != i.modifiersData.arrow &&
          (i.styles.arrow = Object.assign(
            {},
            i.styles.arrow,
            tC(
              Object.assign({}, l, {
                offsets: i.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: a,
              })
            )
          )),
        (i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-placement": i.placement,
        }));
    },
    data: {},
  };
  var tO = { passive: !0 };
  let tT = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function e() {},
    effect: function e(t) {
      var i = t.state,
        n = t.instance,
        s = t.options,
        r = s.scroll,
        o = void 0 === r || r,
        a = s.resize,
        l = void 0 === a || a,
        c = ti(i.elements.popper),
        h = [].concat(i.scrollParents.reference, i.scrollParents.popper);
      return (
        o &&
          h.forEach(function (e) {
            e.addEventListener("scroll", n.update, tO);
          }),
        l && c.addEventListener("resize", n.update, tO),
        function () {
          o &&
            h.forEach(function (e) {
              e.removeEventListener("scroll", n.update, tO);
            }),
            l && c.removeEventListener("resize", n.update, tO);
        }
      );
    },
    data: {},
  };
  var tD = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function t_(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return tD[e];
    });
  }
  var tN = { start: "end", end: "start" };
  function tI(e) {
    return e.replace(/start|end/g, function (e) {
      return tN[e];
    });
  }
  function tS(e) {
    var t,
      i = ti(e);
    return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
  }
  function tP(e) {
    return tl(tu(e)).left + tS(e).scrollLeft;
  }
  function tM(e) {
    var t = td(e),
      i = t.overflow,
      n = t.overflowX,
      s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function tB(e, t) {
    void 0 === t && (t = []);
    var i,
      n = (function e(t) {
        return ["html", "body", "#document"].indexOf(tt(t)) >= 0
          ? t.ownerDocument.body
          : ts(t) && tM(t)
          ? t
          : e(tp(t));
      })(e),
      s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
      r = ti(n),
      o = s ? [r].concat(r.visualViewport || [], tM(n) ? n : []) : n,
      a = t.concat(o);
    return s ? a : a.concat(tB(tp(o)));
  }
  function tH(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function tj(e, t) {
    var i, n, s, r, o, a, l, c, h, d, f, u, p, g, m, v, b, y, $;
    return t === eY
      ? tH(
          ((n = ti((i = e))),
          (s = tu(i)),
          (r = n.visualViewport),
          (o = s.clientWidth),
          (a = s.clientHeight),
          (l = 0),
          (c = 0),
          r &&
            ((o = r.width),
            (a = r.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
              ((l = r.offsetLeft), (c = r.offsetTop))),
          { width: o, height: a, x: l + tP(i), y: c })
        )
      : ts(t)
      ? (((d = tl((h = t))).top = d.top + h.clientTop),
        (d.left = d.left + h.clientLeft),
        (d.bottom = d.top + h.clientHeight),
        (d.right = d.left + h.clientWidth),
        (d.width = h.clientWidth),
        (d.height = h.clientHeight),
        (d.x = d.left),
        (d.y = d.top),
        d)
      : tH(
          ((f = tu(e)),
          (p = tu(f)),
          (g = tS(f)),
          (m = null == (u = f.ownerDocument) ? void 0 : u.body),
          (v = tv(
            p.scrollWidth,
            p.clientWidth,
            m ? m.scrollWidth : 0,
            m ? m.clientWidth : 0
          )),
          (b = tv(
            p.scrollHeight,
            p.clientHeight,
            m ? m.scrollHeight : 0,
            m ? m.clientHeight : 0
          )),
          (y = -g.scrollLeft + tP(f)),
          ($ = -g.scrollTop),
          "rtl" === td(m || p).direction &&
            (y += tv(p.clientWidth, m ? m.clientWidth : 0) - v),
          { width: v, height: b, x: y, y: $ })
        );
  }
  function tR(e) {
    var t,
      i = e.reference,
      n = e.element,
      s = e.placement,
      r = s ? ta(s) : null,
      o = s ? tx(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (r) {
      case "top":
        t = { x: a, y: i.y - n.height };
        break;
      case eq:
        t = { x: a, y: i.y + i.height };
        break;
      case eW:
        t = { x: i.x + i.width, y: l };
        break;
      case ez:
        t = { x: i.x - n.width, y: l };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var c = r ? t8(r) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (o) {
        case eX:
          t[c] = t[c] - (i[h] / 2 - n[h] / 2);
          break;
        case "end":
          t[c] = t[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return t;
  }
  function tq(e, t) {
    void 0 === t && (t = {});
    var i,
      n,
      s,
      r,
      o,
      a,
      l,
      c,
      h,
      d = t,
      f = d.placement,
      u = void 0 === f ? e.placement : f,
      p = d.boundary,
      g = d.rootBoundary,
      m = d.elementContext,
      v = void 0 === m ? e0 : m,
      b = d.altBoundary,
      y = d.padding,
      $ = void 0 === y ? 0 : y,
      w = tE("number" != typeof $ ? $ : tA($, eF)),
      E = e.rects.popper,
      A = e.elements[void 0 !== b && b ? (v === e0 ? eQ : e0) : v],
      k =
        ((i = tn(A) ? A : A.contextElement || tu(e.elements.popper)),
        (n = void 0 === p ? eK : p),
        (s = void 0 === g ? eY : g),
        (c = (l = [].concat(
          "clippingParents" === n
            ? ((r = i),
              (o = tB(tp(r))),
              (a =
                ["absolute", "fixed"].indexOf(td(r).position) >= 0 && ts(r)
                  ? tm(r)
                  : r),
              tn(a)
                ? o.filter(function (e) {
                    return tn(e) && th(e, a) && "body" !== tt(e);
                  })
                : [])
            : [].concat(n),
          [s]
        ))[0]),
        ((h = l.reduce(function (e, t) {
          var n = tj(i, t);
          return (
            (e.top = tv(n.top, e.top)),
            (e.right = tb(n.right, e.right)),
            (e.bottom = tb(n.bottom, e.bottom)),
            (e.left = tv(n.left, e.left)),
            e
          );
        }, tj(i, c))).width = h.right - h.left),
        (h.height = h.bottom - h.top),
        (h.x = h.left),
        (h.y = h.top),
        h),
      x = tl(e.elements.reference),
      L = tR({ reference: x, element: E, strategy: "absolute", placement: u }),
      C = tH(Object.assign({}, E, L)),
      O = v === e0 ? C : x,
      T = {
        top: k.top - O.top + w.top,
        bottom: O.bottom - k.bottom + w.bottom,
        left: k.left - O.left + w.left,
        right: O.right - k.right + w.right,
      },
      D = e.modifiersData.offset;
    if (v === e0 && D) {
      var _ = D[u];
      Object.keys(T).forEach(function (e) {
        var t = [eW, eq].indexOf(e) >= 0 ? 1 : -1,
          i = ["top", eq].indexOf(e) >= 0 ? "y" : "x";
        T[e] += _[i] * t;
      });
    }
    return T;
  }
  let tW = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = t.name;
      if (!i.modifiersData[s]._skip) {
        for (
          var r = n.mainAxis,
            o = void 0 === r || r,
            a = n.altAxis,
            l = void 0 === a || a,
            c = n.fallbackPlacements,
            h = n.padding,
            d = n.boundary,
            f = n.rootBoundary,
            u = n.altBoundary,
            p = n.flipVariations,
            g = void 0 === p || p,
            m = n.allowedAutoPlacements,
            v = i.options.placement,
            b = ta(v),
            y = [v]
              .concat(
                c ||
                  (b !== v && g
                    ? (function e(t) {
                        if (ta(t) === eV) return [];
                        var i = t_(t);
                        return [tI(t), i, tI(i)];
                      })(v)
                    : [t_(v)])
              )
              .reduce(function (e, t) {
                var n, s, r, o, a, l, c, u, p, v, b, y, $, w;
                return e.concat(
                  ta(t) === eV
                    ? ((n = i),
                      (s = {
                        placement: t,
                        boundary: d,
                        rootBoundary: f,
                        padding: h,
                        flipVariations: g,
                        allowedAutoPlacements: m,
                      }),
                      (o = (r = s).placement),
                      (a = r.boundary),
                      (l = r.rootBoundary),
                      (c = r.padding),
                      (u = r.flipVariations),
                      (v = void 0 === (p = r.allowedAutoPlacements) ? e1 : p),
                      0 ===
                        ($ = (y = (b = tx(o))
                          ? u
                            ? eU
                            : eU.filter(function (e) {
                                return tx(e) === b;
                              })
                          : eF).filter(function (e) {
                          return v.indexOf(e) >= 0;
                        })).length && ($ = y),
                      Object.keys(
                        (w = $.reduce(function (e, t) {
                          return (
                            (e[t] = tq(n, {
                              placement: t,
                              boundary: a,
                              rootBoundary: l,
                              padding: c,
                            })[ta(t)]),
                            e
                          );
                        }, {}))
                      ).sort(function (e, t) {
                        return w[e] - w[t];
                      }))
                    : t
                );
              }, []),
            $ = i.rects.reference,
            w = i.rects.popper,
            E = new Map(),
            A = !0,
            k = y[0],
            x = 0;
          x < y.length;
          x++
        ) {
          var L = y[x],
            C = ta(L),
            O = tx(L) === eX,
            T = ["top", eq].indexOf(C) >= 0,
            D = T ? "width" : "height",
            _ = tq(i, {
              placement: L,
              boundary: d,
              rootBoundary: f,
              altBoundary: u,
              padding: h,
            }),
            N = T ? (O ? eW : ez) : O ? eq : "top";
          $[D] > w[D] && (N = t_(N));
          var I = t_(N),
            S = [];
          if (
            (o && S.push(_[C] <= 0),
            l && S.push(_[N] <= 0, _[I] <= 0),
            S.every(function (e) {
              return e;
            }))
          ) {
            (k = L), (A = !1);
            break;
          }
          E.set(L, S);
        }
        if (A)
          for (
            var P = g ? 3 : 1,
              M = function e(t) {
                var i = y.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (e) {
                      return e;
                    });
                });
                if (i) return (k = i), "break";
              },
              B = P;
            B > 0 && "break" !== M(B);
            B--
          );
        i.placement !== k &&
          ((i.modifiersData[s]._skip = !0), (i.placement = k), (i.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function tz(e, t, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      }
    );
  }
  function tV(e) {
    return ["top", eW, eq, ez].some(function (t) {
      return e[t] >= 0;
    });
  }
  let tF = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function e(t) {
        var i = t.state,
          n = t.name,
          s = i.rects.reference,
          r = i.rects.popper,
          o = i.modifiersData.preventOverflow,
          a = tq(i, { elementContext: "reference" }),
          l = tq(i, { altBoundary: !0 }),
          c = tz(a, s),
          h = tz(l, r, o),
          d = tV(c),
          f = tV(h);
        (i.modifiersData[n] = {
          referenceClippingOffsets: c,
          popperEscapeOffsets: h,
          isReferenceHidden: d,
          hasPopperEscaped: f,
        }),
          (i.attributes.popper = Object.assign({}, i.attributes.popper, {
            "data-popper-reference-hidden": d,
            "data-popper-escaped": f,
          }));
      },
    },
    tX = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function e(t) {
        var i = t.state,
          n = t.options,
          s = t.name,
          r = n.offset,
          o = void 0 === r ? [0, 0] : r,
          a = e1.reduce(function (e, t) {
            var n, s, r, a, l, c, h, d;
            return (
              (e[t] =
                ((n = t),
                (s = i.rects),
                (r = o),
                (l = [ez, "top"].indexOf((a = ta(n))) >= 0 ? -1 : 1),
                (h = (c =
                  "function" == typeof r
                    ? r(Object.assign({}, s, { placement: n }))
                    : r)[0]),
                (d = c[1]),
                (h = h || 0),
                (d = (d || 0) * l),
                [ez, eW].indexOf(a) >= 0 ? { x: d, y: h } : { x: h, y: d })),
              e
            );
          }, {}),
          l = a[i.placement],
          c = l.x,
          h = l.y;
        null != i.modifiersData.popperOffsets &&
          ((i.modifiersData.popperOffsets.x += c),
          (i.modifiersData.popperOffsets.y += h)),
          (i.modifiersData[s] = a);
      },
    },
    tK = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function e(t) {
        var i = t.state,
          n = t.name;
        i.modifiersData[n] = tR({
          reference: i.rects.reference,
          element: i.rects.popper,
          strategy: "absolute",
          placement: i.placement,
        });
      },
      data: {},
    },
    tY = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function e(t) {
        var i,
          n = t.state,
          s = t.options,
          r = t.name,
          o = s.mainAxis,
          a = void 0 === o || o,
          l = s.altAxis,
          c = void 0 !== l && l,
          h = s.boundary,
          d = s.rootBoundary,
          f = s.altBoundary,
          u = s.padding,
          p = s.tether,
          g = void 0 === p || p,
          m = s.tetherOffset,
          v = void 0 === m ? 0 : m,
          b = tq(n, {
            boundary: h,
            rootBoundary: d,
            padding: u,
            altBoundary: f,
          }),
          y = ta(n.placement),
          $ = tx(n.placement),
          w = !$,
          E = t8(y),
          A = "x" === (i = E) ? "y" : "x",
          k = n.modifiersData.popperOffsets,
          x = n.rects.reference,
          L = n.rects.popper,
          C =
            "function" == typeof v
              ? v(Object.assign({}, n.rects, { placement: n.placement }))
              : v,
          O = { x: 0, y: 0 };
        if (k) {
          if (a || c) {
            var T = "y" === E ? "top" : ez,
              D = "y" === E ? eq : eW,
              _ = "y" === E ? "height" : "width",
              N = k[E],
              I = k[E] + b[T],
              S = k[E] - b[D],
              P = g ? -L[_] / 2 : 0,
              M = $ === eX ? x[_] : L[_],
              B = $ === eX ? -L[_] : -x[_],
              H = n.elements.arrow,
              j = g && H ? tc(H) : { width: 0, height: 0 },
              R = n.modifiersData["arrow#persistent"]
                ? n.modifiersData["arrow#persistent"].padding
                : tw(),
              q = R[T],
              W = R[D],
              z = t$(0, x[_], j[_]),
              V = w ? x[_] / 2 - P - z - q - C : M - z - q - C,
              F = w ? -x[_] / 2 + P + z + W + C : B + z + W + C,
              X = n.elements.arrow && tm(n.elements.arrow),
              K = X ? ("y" === E ? X.clientTop || 0 : X.clientLeft || 0) : 0,
              Y = n.modifiersData.offset
                ? n.modifiersData.offset[n.placement][E]
                : 0,
              Q = k[E] + V - Y - K,
              U = k[E] + F - Y;
            if (a) {
              var Z = t$(g ? tb(I, Q) : I, N, g ? tv(S, U) : S);
              (k[E] = Z), (O[E] = Z - N);
            }
            if (c) {
              var G = k[A],
                J = G + b["x" === E ? "top" : ez],
                ee = G - b["x" === E ? eq : eW],
                et = t$(g ? tb(J, Q) : J, G, g ? tv(ee, U) : ee);
              (k[A] = et), (O[A] = et - G);
            }
          }
          n.modifiersData[r] = O;
        }
      },
      requiresIfExists: ["offset"],
    };
  var t0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function tQ() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function tU(e) {
    void 0 === e && (e = {});
    var t = e,
      i = t.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = t.defaultOptions,
      r = void 0 === s ? t0 : s;
    return function e(t, i, s) {
      void 0 === s && (s = r);
      var o,
        a,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, t0, r),
          modifiersData: {},
          elements: { reference: t, popper: i },
          attributes: {},
          styles: {},
        },
        c = [],
        h = !1,
        d = {
          state: l,
          setOptions: function e(s) {
            var o,
              a,
              h,
              u,
              p,
              g,
              m,
              v,
              b = "function" == typeof s ? s(l.options) : s;
            f(),
              (l.options = Object.assign({}, r, l.options, b)),
              (l.scrollParents = {
                reference: tn(t)
                  ? tB(t)
                  : t.contextElement
                  ? tB(t.contextElement)
                  : [],
                popper: tB(i),
              });
            var y =
              ((v =
                ((u = h =
                  Object.keys(
                    (a = (o = [].concat(n, l.options.modifiers)).reduce(
                      function (e, t) {
                        var i = e[t.name];
                        return (
                          (e[t.name] = i
                            ? Object.assign({}, i, t, {
                                options: Object.assign(
                                  {},
                                  i.options,
                                  t.options
                                ),
                                data: Object.assign({}, i.data, t.data),
                              })
                            : t),
                          e
                        );
                      },
                      {}
                    ))
                  ).map(function (e) {
                    return a[e];
                  })),
                (p = new Map()),
                (g = new Set()),
                (m = []),
                u.forEach(function (e) {
                  p.set(e.name, e);
                }),
                u.forEach(function (e) {
                  g.has(e.name) ||
                    (function e(t) {
                      g.add(t.name),
                        []
                          .concat(t.requires || [], t.requiresIfExists || [])
                          .forEach(function (t) {
                            if (!g.has(t)) {
                              var i = p.get(t);
                              i && e(i);
                            }
                          }),
                        m.push(t);
                    })(e);
                }),
                m)),
              te.reduce(function (e, t) {
                return e.concat(
                  v.filter(function (e) {
                    return e.phase === t;
                  })
                );
              }, []));
            return (
              (l.orderedModifiers = y.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options,
                  n = e.effect;
                if ("function" == typeof n) {
                  var s = n({
                      state: l,
                      name: t,
                      instance: d,
                      options: void 0 === i ? {} : i,
                    }),
                    r = function e() {};
                  c.push(s || r);
                }
              }),
              d.update()
            );
          },
          forceUpdate: function e() {
            if (!h) {
              var t,
                i,
                n,
                s,
                r,
                o,
                a,
                c,
                f,
                u,
                p,
                g,
                m,
                v,
                b = l.elements,
                y = b.reference,
                $ = b.popper;
              if (tQ(y, $)) {
                (l.rects = {
                  reference:
                    ((n = y),
                    (s = tm($)),
                    (r = "fixed" === l.options.strategy),
                    (o = ts(s)),
                    ts(s) &&
                      ((f =
                        (c = (a = s).getBoundingClientRect()).width /
                          a.offsetWidth || 1),
                      c.height,
                      a.offsetHeight),
                    (p = tu(s)),
                    (g = tl(n)),
                    (m = { scrollLeft: 0, scrollTop: 0 }),
                    (v = { x: 0, y: 0 }),
                    (o || (!o && !r)) &&
                      (("body" !== tt(s) || tM(p)) &&
                        (m =
                          ((t = s),
                          t !== ti(t) && ts(t)
                            ? {
                                scrollLeft: (i = t).scrollLeft,
                                scrollTop: i.scrollTop,
                              }
                            : tS(t))),
                      ts(s)
                        ? ((v = tl(s)),
                          (v.x += s.clientLeft),
                          (v.y += s.clientTop))
                        : p && (v.x = tP(p))),
                    {
                      x: g.left + m.scrollLeft - v.x,
                      y: g.top + m.scrollTop - v.y,
                      width: g.width,
                      height: g.height,
                    }),
                  popper: tc($),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var w = 0; w < l.orderedModifiers.length; w++) {
                  if (!0 === l.reset) {
                    (l.reset = !1), (w = -1);
                    continue;
                  }
                  var E = l.orderedModifiers[w],
                    A = E.fn,
                    k = E.options,
                    x = void 0 === k ? {} : k,
                    L = E.name;
                  "function" == typeof A &&
                    (l =
                      A({ state: l, options: x, name: L, instance: d }) || l);
                }
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                d.forceUpdate(), e(l);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (a = void 0), e(o());
                    });
                  })),
                a
              );
            }),
          destroy: function e() {
            f(), (h = !0);
          },
        };
      if (!tQ(t, i)) return d;
      function f() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        d.setOptions(s).then(function (e) {
          !h && s.onFirstUpdate && s.onFirstUpdate(e);
        }),
        d
      );
    };
  }
  var t1 = tU(),
    t3 = tU({ defaultModifiers: [tT, tK, t9, to] }),
    t2 = tU({ defaultModifiers: [tT, tK, t9, to, tX, tW, tY, tk, tF] });
  let tZ = Object.freeze({
      __proto__: null,
      popperGenerator: tU,
      detectOverflow: tq,
      createPopperBase: t1,
      createPopper: t2,
      createPopperLite: t3,
      top: "top",
      bottom: eq,
      right: eW,
      left: ez,
      auto: eV,
      basePlacements: eF,
      start: eX,
      end: "end",
      clippingParents: eK,
      viewport: eY,
      popper: e0,
      reference: eQ,
      variationPlacements: eU,
      placements: e1,
      beforeRead: e3,
      read: e2,
      afterRead: eZ,
      beforeMain: e4,
      main: eG,
      afterMain: eJ,
      beforeWrite: e5,
      write: e6,
      afterWrite: e7,
      modifierPhases: te,
      applyStyles: to,
      arrow: tk,
      computeStyles: t9,
      eventListeners: tT,
      flip: tW,
      hide: tF,
      offset: tX,
      popperOffsets: tK,
      preventOverflow: tY,
    }),
    t4 = "dropdown",
    tG = ".bs.dropdown",
    tJ = ".data-api",
    t5 = "Escape",
    t6 = "Space",
    t7 = "ArrowUp",
    ie = "ArrowDown",
    it = RegExp(`${t7}|${ie}|${t5}`),
    ii = `hide${tG}`,
    is = `hidden${tG}`,
    ir = `show${tG}`,
    io = `shown${tG}`,
    ia = `click${tG}${tJ}`,
    il = `keydown${tG}${tJ}`,
    ic = `keyup${tG}${tJ}`,
    ih = "show",
    id = '[data-bs-toggle="dropdown"]',
    iu = ".dropdown-menu",
    ip = b() ? "top-end" : "top-start",
    ig = b() ? "top-start" : "top-end",
    im = b() ? "bottom-end" : "bottom-start",
    i8 = b() ? "bottom-start" : "bottom-end",
    iv = b() ? "left-start" : "right-start",
    ib = b() ? "right-start" : "left-start",
    iy = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    i$ = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class iw extends q {
    constructor(e, t) {
      super(e),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return iy;
    }
    static get DefaultType() {
      return i$;
    }
    static get NAME() {
      return t4;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (d(this._element) || this._isShown(this._menu)) return;
      let e = { relatedTarget: this._element },
        t = H.trigger(this._element, ir, e);
      if (t.defaultPrevented) return;
      let i = iw.getParentFromElement(this._element);
      this._inNavbar
        ? G.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(i),
        "ontouchstart" in document.documentElement &&
          !i.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((e) => H.on(e, "mouseover", u)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(ih),
        this._element.classList.add(ih),
        H.trigger(this._element, io, e);
    }
    hide() {
      if (d(this._element) || !this._isShown(this._menu)) return;
      let e = { relatedTarget: this._element };
      this._completeHide(e);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(e) {
      let t = H.trigger(this._element, ii, e);
      !t.defaultPrevented &&
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((e) => H.off(e, "mouseover", u)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(ih),
        this._element.classList.remove(ih),
        this._element.setAttribute("aria-expanded", "false"),
        G.removeDataAttribute(this._menu, "popper"),
        H.trigger(this._element, is, e));
    }
    _getConfig(e) {
      if (
        (c(
          t4,
          (e = {
            ...this.constructor.Default,
            ...G.getDataAttributes(this._element),
            ...e,
          }),
          this.constructor.DefaultType
        ),
        "object" == typeof e.reference &&
          !a(e.reference) &&
          "function" != typeof e.reference.getBoundingClientRect)
      )
        throw TypeError(
          `${t4.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return e;
    }
    _createPopper(e) {
      if (void 0 === tZ)
        throw TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = e)
        : a(this._config.reference)
        ? (t = l(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      let i = this._getPopperConfig(),
        n = i.modifiers.find(
          (e) => "applyStyles" === e.name && !1 === e.enabled
        );
      (this._popper = t2(t, this._menu, i)),
        n && G.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(e = this._element) {
      return e.classList.contains(ih);
    }
    _getMenuElement() {
      return J.next(this._element, iu)[0];
    }
    _getPlacement() {
      let e = this._element.parentNode;
      if (e.classList.contains("dropend")) return iv;
      if (e.classList.contains("dropstart")) return ib;
      let t =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? (t ? ig : ip) : t ? i8 : im;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _getPopperConfig() {
      let e = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...e,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(e)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: e, target: t }) {
      let i = J.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(h);
      i.length && E(i, t, e === ie, !i.includes(t)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = iw.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
    static clearMenus(e) {
      if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
        return;
      let t = J.find(id);
      for (let i = 0, n = t.length; i < n; i++) {
        let s = iw.getInstance(t[i]);
        if (!s || !1 === s._config.autoClose || !s._isShown()) continue;
        let r = { relatedTarget: s._element };
        if (e) {
          let o = e.composedPath(),
            a = o.includes(s._menu);
          if (
            o.includes(s._element) ||
            ("inside" === s._config.autoClose && !a) ||
            ("outside" === s._config.autoClose && a) ||
            (s._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          "click" === e.type && (r.clickEvent = e);
        }
        s._completeHide(r);
      }
    }
    static getParentFromElement(e) {
      return s(e) || e.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (
        /input|textarea/i.test(e.target.tagName)
          ? e.key === t6 ||
            (e.key !== t5 &&
              ((e.key !== ie && e.key !== t7) || e.target.closest(iu)))
          : !it.test(e.key)
      )
        return;
      let t = this.classList.contains(ih);
      if (
        (!t && e.key === t5) ||
        (e.preventDefault(), e.stopPropagation(), d(this))
      )
        return;
      let i = this.matches(id) ? this : J.prev(this, id)[0],
        n = iw.getOrCreateInstance(i);
      if (e.key === t5) {
        n.hide();
        return;
      }
      if (e.key === t7 || e.key === ie) {
        t || n.show(), n._selectMenuItem(e);
        return;
      }
      (t && e.key !== t6) || iw.clearMenus();
    }
  }
  H.on(document, il, id, iw.dataApiKeydownHandler),
    H.on(document, il, iu, iw.dataApiKeydownHandler),
    H.on(document, ia, iw.clearMenus),
    H.on(document, ic, iw.clearMenus),
    H.on(document, ia, id, function (e) {
      e.preventDefault(), iw.getOrCreateInstance(this).toggle();
    }),
    y(iw);
  let iE = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    iA = ".sticky-top";
  class ik {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      let e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      let e = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (t) => t + e),
        this._setElementAttributes(iE, "paddingRight", (t) => t + e),
        this._setElementAttributes(iA, "marginRight", (t) => t - e);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, t, i) {
      let n = this.getWidth(),
        s = (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + n)
            return;
          this._saveInitialAttribute(e, t);
          let s = window.getComputedStyle(e)[t];
          e.style[t] = `${i(Number.parseFloat(s))}px`;
        };
      this._applyManipulationCallback(e, s);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(iE, "paddingRight"),
        this._resetElementAttributes(iA, "marginRight");
    }
    _saveInitialAttribute(e, t) {
      let i = e.style[t];
      i && G.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      let i = (e) => {
        let i = G.getDataAttribute(e, t);
        void 0 === i
          ? e.style.removeProperty(t)
          : (G.removeDataAttribute(e, t), (e.style[t] = i));
      };
      this._applyManipulationCallback(e, i);
    }
    _applyManipulationCallback(e, t) {
      a(e) ? t(e) : J.find(e, this._element).forEach(t);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  let ix = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    iL = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    iC = "backdrop",
    i9 = "show",
    iO = `mousedown.bs.${iC}`;
  class iT {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(e) {
      if (!this._config.isVisible) {
        $(e);
        return;
      }
      this._append(),
        this._config.isAnimated && p(this._getElement()),
        this._getElement().classList.add(i9),
        this._emulateAnimation(() => {
          $(e);
        });
    }
    hide(e) {
      if (!this._config.isVisible) {
        $(e);
        return;
      }
      this._getElement().classList.remove(i9),
        this._emulateAnimation(() => {
          this.dispose(), $(e);
        });
    }
    _getElement() {
      if (!this._element) {
        let e = document.createElement("div");
        (e.className = this._config.className),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e);
      }
      return this._element;
    }
    _getConfig(e) {
      return (
        ((e = { ...ix, ...("object" == typeof e ? e : {}) }).rootElement = l(
          e.rootElement
        )),
        c(iC, e, iL),
        e
      );
    }
    _append() {
      !this._isAppended &&
        (this._config.rootElement.append(this._getElement()),
        H.on(this._getElement(), iO, () => {
          $(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (H.off(this._element, iO),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(e) {
      w(e, this._getElement(), this._config.isAnimated);
    }
  }
  let iD = { trapElement: null, autofocus: !0 },
    i_ = { trapElement: "element", autofocus: "boolean" },
    iN = ".bs.focustrap",
    iI = `focusin${iN}`,
    iS = `keydown.tab${iN}`,
    iP = "backward";
  class iM {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      let { trapElement: e, autofocus: t } = this._config;
      !this._isActive &&
        (t && e.focus(),
        H.off(document, iN),
        H.on(document, iI, (e) => this._handleFocusin(e)),
        H.on(document, iS, (e) => this._handleKeydown(e)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), H.off(document, iN));
    }
    _handleFocusin(e) {
      let { target: t } = e,
        { trapElement: i } = this._config;
      if (t === document || t === i || i.contains(t)) return;
      let n = J.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === iP
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(e) {
      "Tab" === e.key &&
        (this._lastTabNavDirection = e.shiftKey ? iP : "forward");
    }
    _getConfig(e) {
      return (
        c("focustrap", (e = { ...iD, ...("object" == typeof e ? e : {}) }), i_),
        e
      );
    }
  }
  let iB = "modal",
    iH = ".bs.modal",
    ij = "Escape",
    iR = { backdrop: !0, keyboard: !0, focus: !0 },
    iq = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    iW = `hide${iH}`,
    iz = `hidePrevented${iH}`,
    iV = `hidden${iH}`,
    iF = `show${iH}`,
    iX = `shown${iH}`,
    iK = `resize${iH}`,
    iY = `click.dismiss${iH}`,
    i0 = `keydown.dismiss${iH}`,
    iQ = `mouseup.dismiss${iH}`,
    iU = `mousedown.dismiss${iH}`,
    i1 = `click${iH}.data-api`,
    i3 = "modal-open",
    i2 = "show",
    iZ = "modal-static";
  class i4 extends q {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._dialog = J.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new ik());
    }
    static get Default() {
      return iR;
    }
    static get NAME() {
      return iB;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown || this._isTransitioning) return;
      let t = H.trigger(this._element, iF, { relatedTarget: e });
      !t.defaultPrevented &&
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(i3),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        H.on(this._dialog, iU, () => {
          H.one(this._element, iQ, (e) => {
            e.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(e)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      let e = H.trigger(this._element, iW);
      if (e.defaultPrevented) return;
      this._isShown = !1;
      let t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(i2),
        H.off(this._element, iY),
        H.off(this._dialog, iU),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((e) => H.off(e, iH)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new iT({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new iM({ trapElement: this._element });
    }
    _getConfig(e) {
      return (
        c(
          iB,
          (e = {
            ...iR,
            ...G.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          iq
        ),
        e
      );
    }
    _showElement(e) {
      let t = this._isAnimated(),
        i = J.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        t && p(this._element),
        this._element.classList.add(i2);
      let n = () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          H.trigger(this._element, iX, { relatedTarget: e });
      };
      this._queueCallback(n, this._dialog, t);
    }
    _setEscapeEvent() {
      this._isShown
        ? H.on(this._element, i0, (e) => {
            this._config.keyboard && e.key === ij
              ? (e.preventDefault(), this.hide())
              : this._config.keyboard ||
                e.key !== ij ||
                this._triggerBackdropTransition();
          })
        : H.off(this._element, i0);
    }
    _setResizeEvent() {
      this._isShown
        ? H.on(window, iK, () => this._adjustDialog())
        : H.off(window, iK);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(i3),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            H.trigger(this._element, iV);
        });
    }
    _showBackdrop(e) {
      H.on(this._element, iY, (e) => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = !1;
          return;
        }
        e.target === e.currentTarget &&
          (!0 === this._config.backdrop
            ? this.hide()
            : "static" === this._config.backdrop &&
              this._triggerBackdropTransition());
      }),
        this._backdrop.show(e);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      let e = H.trigger(this._element, iz);
      if (e.defaultPrevented) return;
      let { classList: t, scrollHeight: i, style: n } = this._element,
        s = i > document.documentElement.clientHeight;
      !((!s && "hidden" === n.overflowY) || t.contains(iZ)) &&
        (s || (n.overflowY = "hidden"),
        t.add(iZ),
        this._queueCallback(() => {
          t.remove(iZ),
            s ||
              this._queueCallback(() => {
                n.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      let e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._scrollBar.getWidth(),
        i = t > 0;
      ((!i && e && !b()) || (i && !e && b())) &&
        (this._element.style.paddingLeft = `${t}px`),
        ((i && !e && !b()) || (!i && e && b())) &&
          (this._element.style.paddingRight = `${t}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, t) {
      return this.each(function () {
        let i = i4.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e](t);
        }
      });
    }
  }
  H.on(document, i1, '[data-bs-toggle="modal"]', function (e) {
    let t = s(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
      H.one(t, iF, (e) => {
        !e.defaultPrevented &&
          H.one(t, iV, () => {
            h(this) && this.focus();
          });
      });
    let i = J.findOne(".modal.show");
    i && i4.getInstance(i).hide();
    let n = i4.getOrCreateInstance(t);
    n.toggle(this);
  }),
    W(i4),
    y(i4);
  let iG = "offcanvas",
    iJ = ".bs.offcanvas",
    i5 = ".data-api",
    i6 = `load${iJ}${i5}`,
    i7 = { backdrop: !0, keyboard: !0, scroll: !1 },
    ne = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    nt = "show",
    ni = ".offcanvas.show",
    nn = `show${iJ}`,
    ns = `shown${iJ}`,
    nr = `hide${iJ}`,
    no = `hidden${iJ}`,
    na = `click${iJ}${i5}`,
    nl = `keydown.dismiss${iJ}`;
  class nc extends q {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return iG;
    }
    static get Default() {
      return i7;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown) return;
      let t = H.trigger(this._element, nn, { relatedTarget: e });
      if (t.defaultPrevented) return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new ik().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(nt);
      let i = () => {
        this._config.scroll || this._focustrap.activate(),
          H.trigger(this._element, ns, { relatedTarget: e });
      };
      this._queueCallback(i, this._element, !0);
    }
    hide() {
      if (!this._isShown) return;
      let e = H.trigger(this._element, nr);
      if (e.defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(nt),
        this._backdrop.hide();
      let t = () => {
        this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._element.style.visibility = "hidden"),
          this._config.scroll || new ik().reset(),
          H.trigger(this._element, no);
      };
      this._queueCallback(t, this._element, !0);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(e) {
      return (
        c(
          iG,
          (e = {
            ...i7,
            ...G.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          ne
        ),
        e
      );
    }
    _initializeBackDrop() {
      return new iT({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new iM({ trapElement: this._element });
    }
    _addEventListeners() {
      H.on(this._element, nl, (e) => {
        this._config.keyboard && "Escape" === e.key && this.hide();
      });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nc.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  H.on(document, na, '[data-bs-toggle="offcanvas"]', function (e) {
    let t = s(this);
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), d(this)))
      return;
    H.one(t, no, () => {
      h(this) && this.focus();
    });
    let i = J.findOne(ni);
    i && i !== t && nc.getInstance(i).hide();
    let n = nc.getOrCreateInstance(t);
    n.toggle(this);
  }),
    H.on(window, i6, () =>
      J.find(ni).forEach((e) => nc.getOrCreateInstance(e).show())
    ),
    W(nc),
    y(nc);
  let nh = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    nd = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    nf =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    nu = (e, t) => {
      let i = e.nodeName.toLowerCase();
      if (t.includes(i))
        return (
          !nh.has(i) || Boolean(nd.test(e.nodeValue) || nf.test(e.nodeValue))
        );
      let n = t.filter((e) => e instanceof RegExp);
      for (let s = 0, r = n.length; s < r; s++) if (n[s].test(i)) return !0;
      return !1;
    };
  function np(e, t, i) {
    if (!e.length) return e;
    if (i && "function" == typeof i) return i(e);
    let n = new window.DOMParser(),
      s = n.parseFromString(e, "text/html"),
      r = [].concat(...s.body.querySelectorAll("*"));
    for (let o = 0, a = r.length; o < a; o++) {
      let l = r[o],
        c = l.nodeName.toLowerCase();
      if (!Object.keys(t).includes(c)) {
        l.remove();
        continue;
      }
      let h = [].concat(...l.attributes),
        d = [].concat(t["*"] || [], t[c] || []);
      h.forEach((e) => {
        nu(e, d) || l.removeAttribute(e.nodeName);
      });
    }
    return s.body.innerHTML;
  }
  y(Popover);
  let ng = "scrollspy",
    nm = ".bs.scrollspy",
    n8 = { offset: 10, method: "auto", target: "" },
    nv = { offset: "number", method: "string", target: "(string|element)" },
    nb = `activate${nm}`,
    ny = `scroll${nm}`,
    n$ = `load${nm}.data-api`,
    nw = "dropdown-item",
    nE = "active",
    nA = ".nav-link",
    nk = ".list-group-item",
    nx = `${nA}, ${nk}, .${nw}`,
    nL = "position";
  class nC extends q {
    constructor(e, t) {
      super(e),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(t)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        H.on(this._scrollElement, ny, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return n8;
    }
    static get NAME() {
      return ng;
    }
    refresh() {
      let e =
          this._scrollElement === this._scrollElement.window ? "offset" : nL,
        t = "auto" === this._config.method ? e : this._config.method,
        i = t === nL ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      let s = J.find(nx, this._config.target);
      s.map((e) => {
        let s = n(e),
          r = s ? J.findOne(s) : null;
        if (r) {
          let o = r.getBoundingClientRect();
          if (o.width || o.height) return [G[t](r).top + i, s];
        }
        return null;
      })
        .filter((e) => e)
        .sort((e, t) => e[0] - t[0])
        .forEach((e) => {
          this._offsets.push(e[0]), this._targets.push(e[1]);
        });
    }
    dispose() {
      H.off(this._scrollElement, nm), super.dispose();
    }
    _getConfig(e) {
      return (
        ((e = {
          ...n8,
          ...G.getDataAttributes(this._element),
          ...("object" == typeof e && e ? e : {}),
        }).target = l(e.target) || document.documentElement),
        c(ng, e, nv),
        e
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      let e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        i = this._config.offset + t - this._getOffsetHeight();
      if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
        let n = this._targets[this._targets.length - 1];
        this._activeTarget !== n && this._activate(n);
        return;
      }
      if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) {
        (this._activeTarget = null), this._clear();
        return;
      }
      for (let s = this._offsets.length; s--; ) {
        let r =
          this._activeTarget !== this._targets[s] &&
          e >= this._offsets[s] &&
          (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]);
        r && this._activate(this._targets[s]);
      }
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      let t = nx
          .split(",")
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        i = J.findOne(t.join(","), this._config.target);
      i.classList.add(nE),
        i.classList.contains(nw)
          ? J.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              nE
            )
          : J.parents(i, ".nav, .list-group").forEach((e) => {
              J.prev(e, `${nA}, ${nk}`).forEach((e) => e.classList.add(nE)),
                J.prev(e, ".nav-item").forEach((e) => {
                  J.children(e, nA).forEach((e) => e.classList.add(nE));
                });
            }),
        H.trigger(this._scrollElement, nb, { relatedTarget: e });
    }
    _clear() {
      J.find(nx, this._config.target)
        .filter((e) => e.classList.contains(nE))
        .forEach((e) => e.classList.remove(nE));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nC.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  H.on(window, n$, () => {
    J.find('[data-bs-spy="scroll"]').forEach((e) => new nC(e));
  }),
    y(nC);
  let n9 = ".bs.tab",
    nO = `hide${n9}`,
    nT = `hidden${n9}`,
    nD = `show${n9}`,
    n_ = `shown${n9}`,
    nN = `click${n9}.data-api`,
    nI = "active",
    nS = "fade",
    nP = "show",
    nM = ".active",
    nB = ":scope > li > .active";
  class nH extends q {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(nI)
      )
        return;
      let e,
        t = s(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        let n = "UL" === i.nodeName || "OL" === i.nodeName ? nB : nM;
        e = (e = J.find(n, i))[e.length - 1];
      }
      let r = e ? H.trigger(e, nO, { relatedTarget: this._element }) : null,
        o = H.trigger(this._element, nD, { relatedTarget: e });
      if (o.defaultPrevented || (null !== r && r.defaultPrevented)) return;
      this._activate(this._element, i);
      let a = () => {
        H.trigger(e, nT, { relatedTarget: this._element }),
          H.trigger(this._element, n_, { relatedTarget: e });
      };
      t ? this._activate(t, t.parentNode, a) : a();
    }
    _activate(e, t, i) {
      let n =
          t && ("UL" === t.nodeName || "OL" === t.nodeName)
            ? J.find(nB, t)
            : J.children(t, nM),
        s = n[0],
        r = i && s && s.classList.contains(nS),
        o = () => this._transitionComplete(e, s, i);
      s && r ? (s.classList.remove(nP), this._queueCallback(o, e, !0)) : o();
    }
    _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove(nI);
        let n = J.findOne(":scope > .dropdown-menu .active", t.parentNode);
        n && n.classList.remove(nI),
          "tab" === t.getAttribute("role") &&
            t.setAttribute("aria-selected", !1);
      }
      e.classList.add(nI),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        p(e),
        e.classList.contains(nS) && e.classList.add(nP);
      let s = e.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode),
        s && s.classList.contains("dropdown-menu"))
      ) {
        let r = e.closest(".dropdown");
        r && J.find(".dropdown-toggle", r).forEach((e) => e.classList.add(nI)),
          e.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nH.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  H.on(
    document,
    nN,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (e) {
      if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), d(this)))
        return;
      let t = nH.getOrCreateInstance(this);
      t.show();
    }
  ),
    y(nH);
  let nj = "toast",
    nR = ".bs.toast",
    nq = `mouseover${nR}`,
    nW = `mouseout${nR}`,
    nz = `focusin${nR}`,
    nV = `focusout${nR}`,
    nF = `hide${nR}`,
    nX = `hidden${nR}`,
    nK = `show${nR}`,
    nY = `shown${nR}`,
    n0 = "hide",
    nQ = "show",
    nU = "showing",
    n1 = { animation: "boolean", autohide: "boolean", delay: "number" },
    n3 = { animation: !0, autohide: !0, delay: 5e3 };
  class n2 extends q {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return n1;
    }
    static get Default() {
      return n3;
    }
    static get NAME() {
      return nj;
    }
    show() {
      let e = H.trigger(this._element, nK);
      if (e.defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      let t = () => {
        this._element.classList.remove(nU),
          H.trigger(this._element, nY),
          this._maybeScheduleHide();
      };
      this._element.classList.remove(n0),
        p(this._element),
        this._element.classList.add(nQ),
        this._element.classList.add(nU),
        this._queueCallback(t, this._element, this._config.animation);
    }
    hide() {
      if (!this._element.classList.contains(nQ)) return;
      let e = H.trigger(this._element, nF);
      if (e.defaultPrevented) return;
      let t = () => {
        this._element.classList.add(n0),
          this._element.classList.remove(nU),
          this._element.classList.remove(nQ),
          H.trigger(this._element, nX);
      };
      this._element.classList.add(nU),
        this._queueCallback(t, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(nQ) &&
          this._element.classList.remove(nQ),
        super.dispose();
    }
    _getConfig(e) {
      return (
        c(
          nj,
          (e = {
            ...n3,
            ...G.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          this.constructor.DefaultType
        ),
        e
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        !this._hasMouseInteraction &&
        !this._hasKeyboardInteraction &&
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      if (t) {
        this._clearTimeout();
        return;
      }
      let i = e.relatedTarget;
      !(this._element === i || this._element.contains(i)) &&
        this._maybeScheduleHide();
    }
    _setListeners() {
      H.on(this._element, nq, (e) => this._onInteraction(e, !0)),
        H.on(this._element, nW, (e) => this._onInteraction(e, !1)),
        H.on(this._element, nz, (e) => this._onInteraction(e, !0)),
        H.on(this._element, nV, (e) => this._onInteraction(e, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = n2.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  return (
    W(n2),
    y(n2),
    {
      Alert: X,
      Button: Q,
      Carousel: ek,
      Collapse: eR,
      Dropdown: iw,
      Modal: i4,
      Offcanvas: nc,
      Popover,
      ScrollSpy: nC,
      Tab: nH,
      Toast: n2,
      Tooltip,
    }
  );
});
