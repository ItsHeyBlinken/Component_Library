import me, { useRef as gn, useDebugValue as Xr, createElement as mn, useContext as yt, forwardRef as yn, createContext as vn, useState as bn } from "react";
var xr = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function wn() {
  if (Kr)
    return We;
  Kr = 1;
  var e = me, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, w) {
    var d, p = {}, m = null, S = null;
    w !== void 0 && (m = "" + w), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (d in l)
      o.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (f && f.defaultProps)
      for (d in l = f.defaultProps, l)
        p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: r, type: f, key: m, ref: S, props: p, _owner: a.current };
  }
  return We.Fragment = t, We.jsx = c, We.jsxs = c, We;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Sn() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), R = Symbol.iterator, A = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = R && n[R] || n[A];
      return typeof s == "function" ? s : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          u[h - 1] = arguments[h];
        T("error", n, u);
      }
    }
    function T(n, s, u) {
      {
        var h = C.ReactDebugCurrentFrame, k = h.getStackAddendum();
        k !== "" && (s += "%s", u = u.concat([k]));
        var O = u.map(function(E) {
          return String(E);
        });
        O.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, O);
      }
    }
    var P = !1, $ = !1, v = !1, g = !1, Y = !1, G;
    G = Symbol.for("react.module.reference");
    function je(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || Y || n === a || n === w || n === d || g || n === S || P || $ || v || typeof n == "object" && n !== null && (n.$$typeof === m || n.$$typeof === p || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === G || n.getModuleId !== void 0));
    }
    function De(n, s, u) {
      var h = n.displayName;
      if (h)
        return h;
      var k = s.displayName || s.name || "";
      return k !== "" ? u + "(" + k + ")" : u;
    }
    function be(n) {
      return n.displayName || "Context";
    }
    function V(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case w:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var s = n;
            return be(s) + ".Consumer";
          case c:
            var u = n;
            return be(u._context) + ".Provider";
          case l:
            return De(n, n.render, "ForwardRef");
          case p:
            var h = n.displayName || null;
            return h !== null ? h : V(n.type) || "Memo";
          case m: {
            var k = n, O = k._payload, E = k._init;
            try {
              return V(E(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, le = 0, Ue, we, Fe, H, ae, ie, z;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Me() {
      {
        if (le === 0) {
          Ue = console.log, we = console.info, Fe = console.warn, H = console.error, ae = console.group, ie = console.groupCollapsed, z = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        le++;
      }
    }
    function xe() {
      {
        if (le--, le === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, n, {
              value: Ue
            }),
            info: re({}, n, {
              value: we
            }),
            warn: re({}, n, {
              value: Fe
            }),
            error: re({}, n, {
              value: H
            }),
            group: re({}, n, {
              value: ae
            }),
            groupCollapsed: re({}, n, {
              value: ie
            }),
            groupEnd: re({}, n, {
              value: z
            })
          });
        }
        le < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = C.ReactCurrentDispatcher, se;
    function K(n, s, u) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (k) {
            var h = k.stack.trim().match(/\n( *(at )?)/);
            se = h && h[1] || "";
          }
        return `
` + se + n;
      }
    }
    var J = !1, ce;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Ee();
    }
    function Z(n, s) {
      if (!n || J)
        return "";
      {
        var u = ce.get(n);
        if (u !== void 0)
          return u;
      }
      var h;
      J = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = te.current, te.current = null, Me();
      try {
        if (s) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (W) {
              h = W;
            }
            Reflect.construct(n, [], E);
          } else {
            try {
              E.call();
            } catch (W) {
              h = W;
            }
            n.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            h = W;
          }
          n();
        }
      } catch (W) {
        if (W && h && typeof W.stack == "string") {
          for (var x = W.stack.split(`
`), L = h.stack.split(`
`), N = x.length - 1, j = L.length - 1; N >= 1 && j >= 0 && x[N] !== L[j]; )
            j--;
          for (; N >= 1 && j >= 0; N--, j--)
            if (x[N] !== L[j]) {
              if (N !== 1 || j !== 1)
                do
                  if (N--, j--, j < 0 || x[N] !== L[j]) {
                    var q = `
` + x[N].replace(" at new ", " at ");
                    return n.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", n.displayName)), typeof n == "function" && ce.set(n, q), q;
                  }
                while (N >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        J = !1, te.current = O, xe(), Error.prepareStackTrace = k;
      }
      var ke = n ? n.displayName || n.name : "", fe = ke ? K(ke) : "";
      return typeof n == "function" && ce.set(n, fe), fe;
    }
    function Vt(n, s, u) {
      return Z(n, !1);
    }
    function Ut(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function Ge(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Z(n, Ut(n));
      if (typeof n == "string")
        return K(n);
      switch (n) {
        case w:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Vt(n.render);
          case p:
            return Ge(n.type, s, u);
          case m: {
            var h = n, k = h._payload, O = h._init;
            try {
              return Ge(O(k), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, Dr = {}, Fr = C.ReactDebugCurrentFrame;
    function He(n) {
      if (n) {
        var s = n._owner, u = Ge(n.type, n._source, s ? s.type : null);
        Fr.setExtraStackFrame(u);
      } else
        Fr.setExtraStackFrame(null);
    }
    function Gt(n, s, u, h, k) {
      {
        var O = Function.call.bind(ze);
        for (var E in n)
          if (O(n, E)) {
            var x = void 0;
            try {
              if (typeof n[E] != "function") {
                var L = Error((h || "React class") + ": " + u + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              x = n[E](s, E, h, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              x = N;
            }
            x && !(x instanceof Error) && (He(k), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", u, E, typeof x), He(null)), x instanceof Error && !(x.message in Dr) && (Dr[x.message] = !0, He(k), y("Failed %s type: %s", u, x.message), He(null));
          }
      }
    }
    var Ht = Array.isArray;
    function dr(n) {
      return Ht(n);
    }
    function qt(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Xt(n) {
      try {
        return Mr(n), !1;
      } catch {
        return !0;
      }
    }
    function Mr(n) {
      return "" + n;
    }
    function zr(n) {
      if (Xt(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qt(n)), Mr(n);
    }
    var Le = C.ReactCurrentOwner, Kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lr, Wr, pr;
    pr = {};
    function Jt(n) {
      if (ze.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Zt(n) {
      if (ze.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Qt(n, s) {
      if (typeof n.ref == "string" && Le.current && s && Le.current.stateNode !== s) {
        var u = V(Le.current.type);
        pr[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Le.current.type), n.ref), pr[u] = !0);
      }
    }
    function en(n, s) {
      {
        var u = function() {
          Lr || (Lr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function rn(n, s) {
      {
        var u = function() {
          Wr || (Wr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var tn = function(n, s, u, h, k, O, E) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
        props: E,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function nn(n, s, u, h, k) {
      {
        var O, E = {}, x = null, L = null;
        u !== void 0 && (zr(u), x = "" + u), Zt(s) && (zr(s.key), x = "" + s.key), Jt(s) && (L = s.ref, Qt(s, k));
        for (O in s)
          ze.call(s, O) && !Kt.hasOwnProperty(O) && (E[O] = s[O]);
        if (n && n.defaultProps) {
          var N = n.defaultProps;
          for (O in N)
            E[O] === void 0 && (E[O] = N[O]);
        }
        if (x || L) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          x && en(E, j), L && rn(E, j);
        }
        return tn(n, x, L, k, h, Le.current, E);
      }
    }
    var hr = C.ReactCurrentOwner, Br = C.ReactDebugCurrentFrame;
    function Re(n) {
      if (n) {
        var s = n._owner, u = Ge(n.type, n._source, s ? s.type : null);
        Br.setExtraStackFrame(u);
      } else
        Br.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function mr(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Yr() {
      {
        if (hr.current) {
          var n = V(hr.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function on(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var Vr = {};
    function an(n) {
      {
        var s = Yr();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Ur(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = an(s);
        if (Vr[u])
          return;
        Vr[u] = !0;
        var h = "";
        n && n._owner && n._owner !== hr.current && (h = " It was passed a child from " + V(n._owner.type) + "."), Re(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, h), Re(null);
      }
    }
    function Gr(n, s) {
      {
        if (typeof n != "object")
          return;
        if (dr(n))
          for (var u = 0; u < n.length; u++) {
            var h = n[u];
            mr(h) && Ur(h, s);
          }
        else if (mr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var k = M(n);
          if (typeof k == "function" && k !== n.entries)
            for (var O = k.call(n), E; !(E = O.next()).done; )
              mr(E.value) && Ur(E.value, s);
        }
      }
    }
    function sn(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === p))
          u = s.propTypes;
        else
          return;
        if (u) {
          var h = V(s);
          Gt(u, n.props, "prop", h, n);
        } else if (s.PropTypes !== void 0 && !gr) {
          gr = !0;
          var k = V(s);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cn(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var h = s[u];
          if (h !== "children" && h !== "key") {
            Re(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Re(null);
            break;
          }
        }
        n.ref !== null && (Re(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Hr = {};
    function qr(n, s, u, h, k, O) {
      {
        var E = je(n);
        if (!E) {
          var x = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = on(k);
          L ? x += L : x += Yr();
          var N;
          n === null ? N = "null" : dr(n) ? N = "array" : n !== void 0 && n.$$typeof === r ? (N = "<" + (V(n.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : N = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, x);
        }
        var j = nn(n, s, u, k, O);
        if (j == null)
          return j;
        if (E) {
          var q = s.children;
          if (q !== void 0)
            if (h)
              if (dr(q)) {
                for (var ke = 0; ke < q.length; ke++)
                  Gr(q[ke], n);
                Object.freeze && Object.freeze(q);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gr(q, n);
        }
        if (ze.call(s, "key")) {
          var fe = V(n), W = Object.keys(s).filter(function(hn) {
            return hn !== "key";
          }), yr = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Hr[fe + yr]) {
            var pn = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yr, fe, pn, fe), Hr[fe + yr] = !0;
          }
        }
        return n === o ? cn(j) : sn(j), j;
      }
    }
    function un(n, s, u) {
      return qr(n, s, u, !0);
    }
    function ln(n, s, u) {
      return qr(n, s, u, !1);
    }
    var fn = ln, dn = un;
    Be.Fragment = o, Be.jsx = fn, Be.jsxs = dn;
  }()), Be;
}
process.env.NODE_ENV === "production" ? xr.exports = wn() : xr.exports = Sn();
var U = xr.exports, B = function() {
  return B = Object.assign || function(r) {
    for (var t, o = 1, a = arguments.length; o < a; o++) {
      t = arguments[o];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, B.apply(this, arguments);
};
function Ce(e, r, t) {
  if (t || arguments.length === 2)
    for (var o = 0, a = r.length, i; o < a; o++)
      (i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), i[o] = r[o]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function xn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var En = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rn = /* @__PURE__ */ xn(
  function(e) {
    return En.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), I = "-ms-", Ve = "-moz-", _ = "-webkit-", vt = "comm", ir = "rule", $r = "decl", kn = "@import", bt = "@keyframes", _n = "@layer", wt = Math.abs, Ar = String.fromCharCode, Er = Object.assign;
function Cn(e, r) {
  return F(e, 0) ^ 45 ? (((r << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function St(e) {
  return e.trim();
}
function oe(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function b(e, r, t) {
  return e.replace(r, t);
}
function Ze(e, r, t) {
  return e.indexOf(r, t);
}
function F(e, r) {
  return e.charCodeAt(r) | 0;
}
function Te(e, r, t) {
  return e.slice(r, t);
}
function ee(e) {
  return e.length;
}
function xt(e) {
  return e.length;
}
function Ye(e, r) {
  return r.push(e), e;
}
function Tn(e, r) {
  return e.map(r).join("");
}
function Zr(e, r) {
  return e.filter(function(t) {
    return !oe(t, r);
  });
}
var sr = 1, Pe = 1, Et = 0, X = 0, D = 0, Ie = "";
function cr(e, r, t, o, a, i, c, f) {
  return { value: e, root: r, parent: t, type: o, props: a, children: i, line: sr, column: Pe, length: c, return: "", siblings: f };
}
function ue(e, r) {
  return Er(cr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function _e(e) {
  for (; e.root; )
    e = ue(e.root, { children: [e] });
  Ye(e, e.siblings);
}
function Pn() {
  return D;
}
function On() {
  return D = X > 0 ? F(Ie, --X) : 0, Pe--, D === 10 && (Pe = 1, sr--), D;
}
function Q() {
  return D = X < Et ? F(Ie, X++) : 0, Pe++, D === 10 && (Pe = 1, sr++), D;
}
function he() {
  return F(Ie, X);
}
function Qe() {
  return X;
}
function ur(e, r) {
  return Te(Ie, e, r);
}
function Rr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $n(e) {
  return sr = Pe = 1, Et = ee(Ie = e), X = 0, [];
}
function An(e) {
  return Ie = "", e;
}
function vr(e) {
  return St(ur(X - 1, kr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function In(e) {
  for (; (D = he()) && D < 33; )
    Q();
  return Rr(e) > 2 || Rr(D) > 3 ? "" : " ";
}
function Nn(e, r) {
  for (; --r && Q() && !(D < 48 || D > 102 || D > 57 && D < 65 || D > 70 && D < 97); )
    ;
  return ur(e, Qe() + (r < 6 && he() == 32 && Q() == 32));
}
function kr(e) {
  for (; Q(); )
    switch (D) {
      case e:
        return X;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kr(D);
        break;
      case 40:
        e === 41 && kr(e);
        break;
      case 92:
        Q();
        break;
    }
  return X;
}
function jn(e, r) {
  for (; Q() && e + D !== 47 + 10; )
    if (e + D === 42 + 42 && he() === 47)
      break;
  return "/*" + ur(r, X - 1) + "*" + Ar(e === 47 ? e : Q());
}
function Dn(e) {
  for (; !Rr(he()); )
    Q();
  return ur(e, X);
}
function Fn(e) {
  return An(er("", null, null, null, [""], e = $n(e), 0, [0], e));
}
function er(e, r, t, o, a, i, c, f, l) {
  for (var w = 0, d = 0, p = c, m = 0, S = 0, R = 0, A = 1, M = 1, C = 1, y = 0, T = "", P = a, $ = i, v = o, g = T; M; )
    switch (R = y, y = Q()) {
      case 40:
        if (R != 108 && F(g, p - 1) == 58) {
          Ze(g += b(vr(y), "&", "&\f"), "&\f", wt(w ? f[w - 1] : 0)) != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += vr(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += In(R);
        break;
      case 92:
        g += Nn(Qe() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            Ye(Mn(jn(Q(), Qe()), r, t, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * A:
        f[w++] = ee(g) * C;
      case 125 * A:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            M = 0;
          case 59 + d:
            C == -1 && (g = b(g, /\f/g, "")), S > 0 && ee(g) - p && Ye(S > 32 ? et(g + ";", o, t, p - 1, l) : et(b(g, " ", "") + ";", o, t, p - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (Ye(v = Qr(g, r, t, w, d, a, f, T, P = [], $ = [], p, i), i), y === 123)
              if (d === 0)
                er(g, r, v, v, P, i, p, f, $);
              else
                switch (m === 99 && F(g, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    er(e, v, v, o && Ye(Qr(e, v, v, 0, 0, a, f, T, a, P = [], p, $), $), a, $, p, f, o ? P : $);
                    break;
                  default:
                    er(g, v, v, v, [""], $, 0, f, $);
                }
        }
        w = d = S = 0, A = C = 1, T = g = "", p = c;
        break;
      case 58:
        p = 1 + ee(g), S = R;
      default:
        if (A < 1) {
          if (y == 123)
            --A;
          else if (y == 125 && A++ == 0 && On() == 125)
            continue;
        }
        switch (g += Ar(y), y * A) {
          case 38:
            C = d > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            f[w++] = (ee(g) - 1) * C, C = 1;
            break;
          case 64:
            he() === 45 && (g += vr(Q())), m = he(), d = p = ee(T = g += Dn(Qe())), y++;
            break;
          case 45:
            R === 45 && ee(g) == 2 && (A = 0);
        }
    }
  return i;
}
function Qr(e, r, t, o, a, i, c, f, l, w, d, p) {
  for (var m = a - 1, S = a === 0 ? i : [""], R = xt(S), A = 0, M = 0, C = 0; A < o; ++A)
    for (var y = 0, T = Te(e, m + 1, m = wt(M = c[A])), P = e; y < R; ++y)
      (P = St(M > 0 ? S[y] + " " + T : b(T, /&\f/g, S[y]))) && (l[C++] = P);
  return cr(e, r, t, a === 0 ? ir : f, l, w, d, p);
}
function Mn(e, r, t, o) {
  return cr(e, r, t, vt, Ar(Pn()), Te(e, 2, -2), 0, o);
}
function et(e, r, t, o, a) {
  return cr(e, r, t, $r, Te(e, 0, o), Te(e, o + 1, -1), o, a);
}
function Rt(e, r, t) {
  switch (Cn(e, r)) {
    case 5103:
      return _ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _ + e + e;
    case 4789:
      return Ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _ + e + Ve + e + I + e + e;
    case 5936:
      switch (F(e, r + 11)) {
        case 114:
          return _ + e + I + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return _ + e + I + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return _ + e + I + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return _ + e + I + e + e;
    case 6165:
      return _ + e + I + "flex-" + e + e;
    case 5187:
      return _ + e + b(e, /(\w+).+(:[^]+)/, _ + "box-$1$2" + I + "flex-$1$2") + e;
    case 5443:
      return _ + e + I + "flex-item-" + b(e, /flex-|-self/g, "") + (oe(e, /flex-|baseline/) ? "" : I + "grid-row-" + b(e, /flex-|-self/g, "")) + e;
    case 4675:
      return _ + e + I + "flex-line-pack" + b(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return _ + e + I + b(e, "shrink", "negative") + e;
    case 5292:
      return _ + e + I + b(e, "basis", "preferred-size") + e;
    case 6060:
      return _ + "box-" + b(e, "-grow", "") + _ + e + I + b(e, "grow", "positive") + e;
    case 4554:
      return _ + b(e, /([^-])(transform)/g, "$1" + _ + "$2") + e;
    case 6187:
      return b(b(b(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return b(e, /(image-set\([^]*)/, _ + "$1$`$1");
    case 4968:
      return b(b(e, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + e + e;
    case 4200:
      if (!oe(e, /flex-|baseline/))
        return I + "grid-column-align" + Te(e, r) + e;
      break;
    case 2592:
    case 3360:
      return I + b(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(o, a) {
        return r = a, oe(o.props, /grid-\w+-end/);
      }) ? ~Ze(e + (t = t[r].value), "span", 0) ? e : I + b(e, "-start", "") + e + I + "grid-row-span:" + (~Ze(t, "span", 0) ? oe(t, /\d+/) : +oe(t, /\d+/) - +oe(e, /\d+/)) + ";" : I + b(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(o) {
        return oe(o.props, /grid-\w+-start/);
      }) ? e : I + b(b(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ee(e) - 1 - r > 6)
        switch (F(e, r + 1)) {
          case 109:
            if (F(e, r + 4) !== 45)
              break;
          case 102:
            return b(e, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + Ve + (F(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ze(e, "stretch", 0) ? Rt(b(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return b(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, f, l, w) {
        return I + a + ":" + i + w + (c ? I + a + "-span:" + (f ? l : +l - +i) + w : "") + e;
      });
    case 4949:
      if (F(e, r + 6) === 121)
        return b(e, ":", ":" + _) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return b(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + _ + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + I + "$2box$3") + e;
        case 100:
          return b(e, ":", ":" + I) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return b(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function nr(e, r) {
  for (var t = "", o = 0; o < e.length; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function zn(e, r, t, o) {
  switch (e.type) {
    case _n:
      if (e.children.length)
        break;
    case kn:
    case $r:
      return e.return = e.return || e.value;
    case vt:
      return "";
    case bt:
      return e.return = e.value + "{" + nr(e.children, o) + "}";
    case ir:
      if (!ee(e.value = e.props.join(",")))
        return "";
  }
  return ee(t = nr(e.children, o)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ln(e) {
  var r = xt(e);
  return function(t, o, a, i) {
    for (var c = "", f = 0; f < r; f++)
      c += e[f](t, o, a, i) || "";
    return c;
  };
}
function Wn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Bn(e, r, t, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case $r:
        e.return = Rt(e.value, e.length, t);
        return;
      case bt:
        return nr([ue(e, { value: b(e.value, "@", "@" + _) })], o);
      case ir:
        if (e.length)
          return Tn(t = e.props, function(a) {
            switch (oe(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                _e(ue(e, { props: [b(a, /:(read-\w+)/, ":" + Ve + "$1")] })), _e(ue(e, { props: [a] })), Er(e, { props: Zr(t, o) });
                break;
              case "::placeholder":
                _e(ue(e, { props: [b(a, /:(plac\w+)/, ":" + _ + "input-$1")] })), _e(ue(e, { props: [b(a, /:(plac\w+)/, ":" + Ve + "$1")] })), _e(ue(e, { props: [b(a, /:(plac\w+)/, I + "input-$1")] })), _e(ue(e, { props: [a] })), Er(e, { props: Zr(t, o) });
                break;
            }
            return "";
          });
    }
}
var Yn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ye = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", kt = "active", _t = "data-styled-version", lr = "6.1.19", Ir = `/*!sc*/
`, or = typeof window < "u" && typeof document < "u", Vn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), rt = /invalid hook call/i, qe = /* @__PURE__ */ new Set(), Un = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", o = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        rt.test(c) ? (i = !1, qe.delete(o)) : a.apply(void 0, Ce([c], f, !1));
      }, gn(), i && !qe.has(o) && (console.warn(o), qe.add(o));
    } catch (c) {
      rt.test(c.message) && qe.delete(o);
    } finally {
      console.error = a;
    }
  }
}, fr = Object.freeze([]), Oe = Object.freeze({});
function Gn(e, r, t) {
  return t === void 0 && (t = Oe), e.theme !== t.theme && e.theme || r || t.theme;
}
var _r = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Hn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qn = /(^-|-$)/g;
function tt(e) {
  return e.replace(Hn, "-").replace(qn, "");
}
var Xn = /(a)(d)/gi, Xe = 52, nt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Cr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > Xe; r = r / Xe | 0)
    t = nt(r % Xe) + t;
  return (nt(r % Xe) + t).replace(Xn, "$1-$2");
}
var br, Ct = 5381, de = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Tt = function(e) {
  return de(Ct, e);
};
function Kn(e) {
  return Cr(Tt(e) >>> 0);
}
function Pt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function wr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ot = typeof Symbol == "function" && Symbol.for, $t = Ot ? Symbol.for("react.memo") : 60115, Jn = Ot ? Symbol.for("react.forward_ref") : 60112, Zn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Qn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, At = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, eo = ((br = {})[Jn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, br[$t] = At, br);
function ot(e) {
  return ("type" in (r = e) && r.type.$$typeof) === $t ? At : "$$typeof" in e ? eo[e.$$typeof] : Zn;
  var r;
}
var ro = Object.defineProperty, to = Object.getOwnPropertyNames, at = Object.getOwnPropertySymbols, no = Object.getOwnPropertyDescriptor, oo = Object.getPrototypeOf, it = Object.prototype;
function It(e, r, t) {
  if (typeof r != "string") {
    if (it) {
      var o = oo(r);
      o && o !== it && It(e, o, t);
    }
    var a = to(r);
    at && (a = a.concat(at(r)));
    for (var i = ot(e), c = ot(r), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Qn || t && t[l] || c && l in c || i && l in i)) {
        var w = no(r, l);
        try {
          ro(e, l, w);
        } catch {
        }
      }
    }
  }
  return e;
}
function $e(e) {
  return typeof e == "function";
}
function Nr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function pe(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function st(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], o = 1; o < e.length; o++)
    t += r ? r + e[o] : e[o];
  return t;
}
function Ae(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Tr(e, r, t) {
  if (t === void 0 && (t = !1), !t && !Ae(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      e[o] = Tr(e[o], r[o]);
  else if (Ae(r))
    for (var o in r)
      e[o] = Tr(e[o], r[o]);
  return e;
}
function jr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var ao = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function io() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var t = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    t = t.replace(/%[a-z]/, c);
  }), t;
}
function Ne(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(io.apply(void 0, Ce([ao[e]], r, !1)).trim());
}
var so = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, o = 0; o < r; o++)
      t += this.groupSizes[o];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; r >= i; )
        if ((i <<= 1) < 0)
          throw Ne(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), l = (c = 0, t.length); c < l; c++)
      this.tag.insertRule(f, t[c]) && (this.groupSizes[r]++, f++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], o = this.indexOfGroup(r), a = o + t;
      this.groupSizes[r] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var o = this.groupSizes[r], a = this.indexOfGroup(r), i = a + o, c = a; c < i; c++)
      t += "".concat(this.tag.getRule(c)).concat(Ir);
    return t;
  }, e;
}(), co = 1 << 30, rr = /* @__PURE__ */ new Map(), ar = /* @__PURE__ */ new Map(), tr = 1, Ke = function(e) {
  if (rr.has(e))
    return rr.get(e);
  for (; ar.has(tr); )
    tr++;
  var r = tr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > co))
    throw Ne(16, "".concat(r));
  return rr.set(e, r), ar.set(r, e), r;
}, uo = function(e, r) {
  tr = r + 1, rr.set(e, r), ar.set(r, e);
}, lo = "style[".concat(ye, "][").concat(_t, '="').concat(lr, '"]'), fo = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), po = function(e, r, t) {
  for (var o, a = t.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(r, o);
}, ho = function(e, r) {
  for (var t, o = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Ir), a = [], i = 0, c = o.length; i < c; i++) {
    var f = o[i].trim();
    if (f) {
      var l = f.match(fo);
      if (l) {
        var w = 0 | parseInt(l[1], 10), d = l[2];
        w !== 0 && (uo(d, w), po(e, d, l[3]), e.getTag().insertRules(w, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
}, ct = function(e) {
  for (var r = document.querySelectorAll(lo), t = 0, o = r.length; t < o; t++) {
    var a = r[t];
    a && a.getAttribute(ye) !== kt && (ho(e, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function go() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Nt = function(e) {
  var r = document.head, t = e || r, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(ye, "]")));
    return l[l.length - 1];
  }(t), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(ye, kt), o.setAttribute(_t, lr);
  var c = go();
  return c && o.setAttribute("nonce", c), t.insertBefore(o, i), o;
}, mo = function() {
  function e(r) {
    this.element = Nt(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === t)
          return c;
      }
      throw Ne(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), yo = function() {
  function e(r) {
    this.element = Nt(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(t);
      return this.element.insertBefore(o, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), vo = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), ut = or, bo = { isServer: !or, useCSSOMInjection: !Vn }, jt = function() {
  function e(r, t, o) {
    r === void 0 && (r = Oe), t === void 0 && (t = {});
    var a = this;
    this.options = B(B({}, bo), r), this.gs = t, this.names = new Map(o), this.server = !!r.isServer, !this.server && or && ut && (ut = !1, ct(this)), jr(this, function() {
      return function(i) {
        for (var c = i.getTag(), f = c.length, l = "", w = function(p) {
          var m = function(C) {
            return ar.get(C);
          }(p);
          if (m === void 0)
            return "continue";
          var S = i.names.get(m), R = c.getGroup(p);
          if (S === void 0 || !S.size || R.length === 0)
            return "continue";
          var A = "".concat(ye, ".g").concat(p, '[id="').concat(m, '"]'), M = "";
          S !== void 0 && S.forEach(function(C) {
            C.length > 0 && (M += "".concat(C, ","));
          }), l += "".concat(R).concat(A, '{content:"').concat(M, '"}').concat(Ir);
        }, d = 0; d < f; d++)
          w(d);
        return l;
      }(a);
    });
  }
  return e.registerId = function(r) {
    return Ke(r);
  }, e.prototype.rehydrate = function() {
    !this.server && or && ct(this);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(B(B({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var o = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new vo(a) : o ? new mo(a) : new yo(a);
    }(this.options), new so(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Ke(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(t), this.names.set(r, o);
    }
  }, e.prototype.insertRules = function(r, t, o) {
    this.registerName(r, t), this.getTag().insertRules(Ke(r), o);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Ke(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), wo = /&/g, So = /^\s*\/\/.*$/gm;
function Dt(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(o) {
      return "".concat(r, " ").concat(o);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Dt(t.children, r)), t;
  });
}
function xo(e) {
  var r, t, o, a = e === void 0 ? Oe : e, i = a.options, c = i === void 0 ? Oe : i, f = a.plugins, l = f === void 0 ? fr : f, w = function(m, S, R) {
    return R.startsWith(t) && R.endsWith(t) && R.replaceAll(t, "").length > 0 ? ".".concat(r) : m;
  }, d = l.slice();
  d.push(function(m) {
    m.type === ir && m.value.includes("&") && (m.props[0] = m.props[0].replace(wo, t).replace(o, w));
  }), c.prefix && d.push(Bn), d.push(zn);
  var p = function(m, S, R, A) {
    S === void 0 && (S = ""), R === void 0 && (R = ""), A === void 0 && (A = "&"), r = A, t = S, o = new RegExp("\\".concat(t, "\\b"), "g");
    var M = m.replace(So, ""), C = Fn(R || S ? "".concat(R, " ").concat(S, " { ").concat(M, " }") : M);
    c.namespace && (C = Dt(C, c.namespace));
    var y = [];
    return nr(C, Ln(d.concat(Wn(function(T) {
      return y.push(T);
    })))), y;
  };
  return p.hash = l.length ? l.reduce(function(m, S) {
    return S.name || Ne(15), de(m, S.name);
  }, Ct).toString() : "", p;
}
var Eo = new jt(), Pr = xo(), Ft = me.createContext({ shouldForwardProp: void 0, styleSheet: Eo, stylis: Pr });
Ft.Consumer;
me.createContext(void 0);
function lt() {
  return yt(Ft);
}
var ft = function() {
  function e(r, t) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Pr);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, jr(this, function() {
      throw Ne(12, String(o.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Pr), this.name + r.hash;
  }, e;
}(), Ro = function(e) {
  return e >= "A" && e <= "Z";
};
function dt(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var o = e[t];
    if (t === 1 && o === "-" && e[0] === "-")
      return e;
    Ro(o) ? r += "-" + o.toLowerCase() : r += o;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var Mt = function(e) {
  return e == null || e === !1 || e === "";
}, zt = function(e) {
  var r, t, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Mt(i) && (Array.isArray(i) && i.isCss || $e(i) ? o.push("".concat(dt(a), ":"), i, ";") : Ae(i) ? o.push.apply(o, Ce(Ce(["".concat(a, " {")], zt(i), !1), ["}"], !1)) : o.push("".concat(dt(a), ": ").concat((r = a, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Yn || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return o;
};
function ge(e, r, t, o) {
  if (Mt(e))
    return [];
  if (Nr(e))
    return [".".concat(e.styledComponentId)];
  if ($e(e)) {
    if (!$e(i = e) || i.prototype && i.prototype.isReactComponent || !r)
      return [e];
    var a = e(r);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof ft || Ae(a) || a === null || console.error("".concat(Pt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(a, r, t, o);
  }
  var i;
  return e instanceof ft ? t ? (e.inject(t, o), [e.getName(o)]) : [e] : Ae(e) ? zt(e) : Array.isArray(e) ? Array.prototype.concat.apply(fr, e.map(function(c) {
    return ge(c, r, t, o);
  })) : [e.toString()];
}
function ko(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if ($e(t) && !Nr(t))
      return !1;
  }
  return !0;
}
var _o = Tt(lr), Co = function() {
  function e(r, t, o) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && ko(r), this.componentId = t, this.baseHash = de(_o, t), this.baseStyle = o, jt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        a = pe(a, this.staticRulesId);
      else {
        var i = st(ge(this.rules, r, t, o)), c = Cr(de(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(this.componentId, c)) {
          var f = o(i, ".".concat(c), void 0, this.componentId);
          t.insertRules(this.componentId, c, f);
        }
        a = pe(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = de(this.baseHash, o.hash), w = "", d = 0; d < this.rules.length; d++) {
        var p = this.rules[d];
        if (typeof p == "string")
          w += p, process.env.NODE_ENV !== "production" && (l = de(l, p));
        else if (p) {
          var m = st(ge(p, r, t, o));
          l = de(l, m + d), w += m;
        }
      }
      if (w) {
        var S = Cr(l >>> 0);
        t.hasNameForId(this.componentId, S) || t.insertRules(this.componentId, S, o(w, ".".concat(S), void 0, this.componentId)), a = pe(a, S);
      }
    }
    return a;
  }, e;
}(), Lt = me.createContext(void 0);
Lt.Consumer;
var Sr = {}, pt = /* @__PURE__ */ new Set();
function To(e, r, t) {
  var o = Nr(e), a = e, i = !wr(e), c = r.attrs, f = c === void 0 ? fr : c, l = r.componentId, w = l === void 0 ? function(P, $) {
    var v = typeof P != "string" ? "sc" : tt(P);
    Sr[v] = (Sr[v] || 0) + 1;
    var g = "".concat(v, "-").concat(Kn(lr + v + Sr[v]));
    return $ ? "".concat($, "-").concat(g) : g;
  }(r.displayName, r.parentComponentId) : l, d = r.displayName, p = d === void 0 ? function(P) {
    return wr(P) ? "styled.".concat(P) : "Styled(".concat(Pt(P), ")");
  }(e) : d, m = r.displayName && r.componentId ? "".concat(tt(r.displayName), "-").concat(r.componentId) : r.componentId || w, S = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, R = r.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var A = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var M = r.shouldForwardProp;
      R = function(P, $) {
        return A(P, $) && M(P, $);
      };
    } else
      R = A;
  }
  var C = new Co(t, m, o ? a.componentStyle : void 0);
  function y(P, $) {
    return function(v, g, Y) {
      var G = v.attrs, je = v.componentStyle, De = v.defaultProps, be = v.foldedComponentIds, V = v.styledComponentId, re = v.target, le = me.useContext(Lt), Ue = lt(), we = v.shouldForwardProp || Ue.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Xr(V);
      var Fe = Gn(g, le, De) || Oe, H = function(xe, te, se) {
        for (var K, J = B(B({}, te), { className: void 0, theme: se }), ce = 0; ce < xe.length; ce += 1) {
          var Ee = $e(K = xe[ce]) ? K(J) : K;
          for (var Z in Ee)
            J[Z] = Z === "className" ? pe(J[Z], Ee[Z]) : Z === "style" ? B(B({}, J[Z]), Ee[Z]) : Ee[Z];
        }
        return te.className && (J.className = pe(J.className, te.className)), J;
      }(G, g, Fe), ae = H.as || re, ie = {};
      for (var z in H)
        H[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && H.theme === Fe || (z === "forwardedAs" ? ie.as = H.forwardedAs : we && !we(z, ae) || (ie[z] = H[z], we || process.env.NODE_ENV !== "development" || Rn(z) || pt.has(z) || !_r.has(ae) || (pt.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Se = function(xe, te) {
        var se = lt(), K = xe.generateAndInjectStyles(te, se.styleSheet, se.stylis);
        return process.env.NODE_ENV !== "production" && Xr(K), K;
      }(je, H);
      process.env.NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(Se);
      var Me = pe(be, V);
      return Se && (Me += " " + Se), H.className && (Me += " " + H.className), ie[wr(ae) && !_r.has(ae) ? "class" : "className"] = Me, Y && (ie.ref = Y), mn(ae, ie);
    }(T, P, $);
  }
  y.displayName = p;
  var T = me.forwardRef(y);
  return T.attrs = S, T.componentStyle = C, T.displayName = p, T.shouldForwardProp = R, T.foldedComponentIds = o ? pe(a.foldedComponentIds, a.styledComponentId) : "", T.styledComponentId = m, T.target = o ? a.target : e, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(P) {
    this._foldedDefaultProps = o ? function($) {
      for (var v = [], g = 1; g < arguments.length; g++)
        v[g - 1] = arguments[g];
      for (var Y = 0, G = v; Y < G.length; Y++)
        Tr($, G[Y], !0);
      return $;
    }({}, a.defaultProps, P) : P;
  } }), process.env.NODE_ENV !== "production" && (Un(p, m), T.warnTooManyClasses = function(P, $) {
    var v = {}, g = !1;
    return function(Y) {
      if (!g && (v[Y] = !0, Object.keys(v).length >= 200)) {
        var G = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(P).concat(G, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, v = {};
      }
    };
  }(p, m)), jr(T, function() {
    return ".".concat(T.styledComponentId);
  }), i && It(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), T;
}
function ht(e, r) {
  for (var t = [e[0]], o = 0, a = r.length; o < a; o += 1)
    t.push(r[o], e[o + 1]);
  return t;
}
var gt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Po(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  if ($e(e) || Ae(e))
    return gt(ge(ht(fr, Ce([e], r, !0))));
  var o = e;
  return r.length === 0 && o.length === 1 && typeof o[0] == "string" ? ge(o) : gt(ge(ht(o, r)));
}
function Or(e, r, t) {
  if (t === void 0 && (t = Oe), !r)
    throw Ne(1, r);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(r, t, Po.apply(void 0, Ce([a], i, !1)));
  };
  return o.attrs = function(a) {
    return Or(e, r, B(B({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Or(e, r, B(B({}, t), a));
  }, o;
}
var Wt = function(e) {
  return Or(To, e);
}, ve = Wt;
_r.forEach(function(e) {
  ve[e] = Wt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Je = "__sc-".concat(ye, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Je] || (window[Je] = 0), window[Je] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Je] += 1);
const Oo = ve.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: e }) => e.spacing.sm};
  padding: ${({ theme: e, size: r }) => r === "xs" ? `${e.spacing.xs} ${e.spacing.sm}` : r === "sm" ? `${e.spacing.sm} ${e.spacing.md}` : r === "lg" ? `${e.spacing.md} ${e.spacing.lg}` : r === "xl" ? `${e.spacing.lg} ${e.spacing.xl}` : `${e.spacing.sm} ${e.spacing.md}`};
  font-size: ${({ theme: e, size: r }) => r === "xs" ? e.typography.fontSize.xs : r === "sm" ? e.typography.fontSize.sm : r === "lg" ? e.typography.fontSize.lg : r === "xl" ? e.typography.fontSize.xl : e.typography.fontSize.md};
  font-family: ${({ theme: e }) => e.typography.fontFamily};
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
  
  /* Variant styles */
  background-color: ${({ theme: e, variant: r, disabled: t }) => t ? e.colors.background.secondary : r === "primary" ? e.colors.primary : r === "secondary" ? e.colors.secondary : r === "success" ? e.colors.success : r === "warning" ? e.colors.warning : r === "error" ? e.colors.error : r === "info" ? e.colors.info : e.colors.primary};
  
  color: ${({ theme: e, variant: r, disabled: t }) => t ? e.colors.text.disabled : "#ffffff"};
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &:focus {
    outline: 2px solid ${({ theme: e }) => e.colors.primary};
    outline-offset: 2px;
  }
`, $o = ve.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, Fo = ({
  children: e,
  onClick: r,
  disabled: t = !1,
  loading: o = !1,
  fullWidth: a = !1,
  type: i = "button",
  icon: c,
  iconPosition: f = "left",
  variant: l = "primary",
  size: w = "md",
  className: d,
  style: p,
  ...m
}) => {
  const S = () => {
    !t && !o && r && r();
  }, R = () => o ? /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx($o, {}),
    e
  ] }) : c ? /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    f === "left" && c,
    e,
    f === "right" && c
  ] }) : e;
  return /* @__PURE__ */ U.jsx(
    Oo,
    {
      onClick: S,
      disabled: t || o,
      fullWidth: a,
      type: i,
      variant: l,
      size: w,
      className: d,
      style: p,
      ...m,
      children: R()
    }
  );
}, Ao = ve.div`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
`, Io = ve.label`
  font-size: ${({ theme: e }) => e.typography.fontSize.sm};
  font-weight: 500;
  color: ${({ theme: e, error: r }) => r ? e.colors.error : e.colors.text.primary};
  margin-bottom: ${({ theme: e }) => e.spacing.xs};
`, No = ve.input`
  padding: ${({ theme: e, size: r }) => r === "xs" ? `${e.spacing.xs} ${e.spacing.sm}` : r === "sm" ? `${e.spacing.sm} ${e.spacing.md}` : r === "lg" ? `${e.spacing.md} ${e.spacing.lg}` : r === "xl" ? `${e.spacing.lg} ${e.spacing.xl}` : `${e.spacing.sm} ${e.spacing.md}`};
  font-size: ${({ theme: e, size: r }) => r === "xs" ? e.typography.fontSize.xs : r === "sm" ? e.typography.fontSize.sm : r === "lg" ? e.typography.fontSize.lg : r === "xl" ? e.typography.fontSize.xl : e.typography.fontSize.md};
  font-family: ${({ theme: e }) => e.typography.fontFamily};
  border: 2px solid ${({ theme: e, hasError: r }) => r ? e.colors.error : e.colors.background.secondary};
  border-radius: 6px;
  background-color: ${({ theme: e }) => e.colors.background.primary};
  color: ${({ theme: e }) => e.colors.text.primary};
  width: 100%;
  transition: all 0.2s ease-in-out;
  
  &::placeholder {
    color: ${({ theme: e }) => e.colors.text.secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme: e }) => e.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme: e }) => e.colors.primary}20;
  }
  
  &:disabled {
    background-color: ${({ theme: e }) => e.colors.background.secondary};
    color: ${({ theme: e }) => e.colors.text.disabled};
    cursor: not-allowed;
  }
  
  &:read-only {
    background-color: ${({ theme: e }) => e.colors.background.secondary};
  }
`, mt = ve.span`
  font-size: ${({ theme: e }) => e.typography.fontSize.xs};
  color: ${({ theme: e, error: r }) => r ? e.colors.error : e.colors.text.secondary};
  margin-top: ${({ theme: e }) => e.spacing.xs};
`, jo = yn(({
  type: e = "text",
  placeholder: r,
  value: t,
  defaultValue: o,
  onValueChange: a,
  onFocus: i,
  onBlur: c,
  disabled: f = !1,
  required: l = !1,
  readOnly: w = !1,
  error: d,
  label: p,
  helperText: m,
  fullWidth: S = !1,
  name: R,
  id: A,
  autoComplete: M,
  autoFocus: C = !1,
  className: y,
  style: T,
  ...P
}, $) => {
  const v = A || R || `input-${Math.random().toString(36).substr(2, 9)}`, g = `${v}-label`, Y = `${v}-helper`, G = `${v}-error`, je = (be) => {
    a && a(be.target.value);
  }, De = [
    m && Y,
    d && G
  ].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ U.jsxs(Ao, { fullWidth: S, className: y, style: T, children: [
    p && /* @__PURE__ */ U.jsxs(
      Io,
      {
        htmlFor: v,
        id: g,
        error: d,
        children: [
          p,
          l && /* @__PURE__ */ U.jsx("span", { "aria-label": "required", children: " *" })
        ]
      }
    ),
    /* @__PURE__ */ U.jsx(
      No,
      {
        ref: $,
        id: v,
        type: e,
        placeholder: r,
        value: t,
        defaultValue: o,
        onChange: je,
        onFocus: i,
        onBlur: c,
        disabled: f,
        required: l,
        readOnly: w,
        name: R,
        autoComplete: M,
        autoFocus: C,
        hasError: !!d,
        "aria-labelledby": p ? g : void 0,
        "aria-describedby": De,
        "aria-invalid": !!d,
        ...P
      }
    ),
    m && !d && /* @__PURE__ */ U.jsx(mt, { id: Y, children: m }),
    d && /* @__PURE__ */ U.jsx(mt, { error: d, id: G, children: d })
  ] });
});
jo.displayName = "Input";
const ne = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    info: "#17a2b8",
    text: {
      primary: "#212529",
      secondary: "#6c757d",
      disabled: "#adb5bd"
    },
    background: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      paper: "#ffffff"
    }
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "3rem"
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.75rem",
      h4: "1.5rem",
      h5: "1.25rem",
      h6: "1rem"
    }
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px"
  }
}, Bt = vn(ne), Mo = () => {
  const e = yt(Bt);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, zo = ({
  theme: e = {},
  children: r
}) => {
  var o, a, i;
  const t = {
    ...ne,
    ...e,
    colors: {
      ...ne.colors,
      ...e.colors,
      text: {
        ...ne.colors.text,
        ...(o = e.colors) == null ? void 0 : o.text
      },
      background: {
        ...ne.colors.background,
        ...(a = e.colors) == null ? void 0 : a.background
      }
    },
    spacing: {
      ...ne.spacing,
      ...e.spacing
    },
    typography: {
      ...ne.typography,
      ...e.typography,
      fontSize: {
        ...ne.typography.fontSize,
        ...(i = e.typography) == null ? void 0 : i.fontSize
      }
    },
    breakpoints: {
      ...ne.breakpoints,
      ...e.breakpoints
    }
  };
  return /* @__PURE__ */ U.jsx(Bt.Provider, { value: t, children: r });
};
function Lo(e, r) {
  const [t, o] = bn(() => {
    if (typeof window > "u")
      return r;
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : r;
    } catch (i) {
      return console.warn(`Error reading localStorage key "${e}":`, i), r;
    }
  });
  return [t, (i) => {
    try {
      const c = i instanceof Function ? i(t) : i;
      o(c), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(c));
    } catch (c) {
      console.warn(`Error setting localStorage key "${e}":`, c);
    }
  }];
}
const Wo = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), Bo = (e) => /^[\+]?[1-9][\d]{0,15}$/.test(e.replace(/[\s\-\(\)]/g, "")), Yo = (e) => {
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}, Vo = (e) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/.test(e), Uo = (e) => typeof e == "string" ? e.trim().length > 0 : e != null, Go = (e, r) => e.length >= r, Ho = (e, r) => e.length <= r, qo = (e) => !isNaN(e) && typeof Number(e) == "number", Xo = (e) => Number.isInteger(Number(e)), Ko = (e) => e > 0, Jo = (e, r, t) => e >= r && e <= t, Yt = (e, r) => {
  const t = typeof e == "string" ? new Date(e) : e;
  if (isNaN(t.getTime()))
    return "Invalid Date";
  const o = {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...r
  };
  return new Intl.DateTimeFormat("en-US", o).format(t);
}, Zo = (e) => Yt(e, {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
}), Qo = (e) => {
  const r = typeof e == "string" ? new Date(e) : e, o = Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / 1e3);
  if (o < 60)
    return "just now";
  const a = Math.floor(o / 60);
  if (a < 60)
    return `${a} minute${a > 1 ? "s" : ""} ago`;
  const i = Math.floor(a / 60);
  if (i < 24)
    return `${i} hour${i > 1 ? "s" : ""} ago`;
  const c = Math.floor(i / 24);
  return c < 7 ? `${c} day${c > 1 ? "s" : ""} ago` : Yt(r);
}, ea = (e, r) => {
  const t = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...r
  };
  return new Intl.NumberFormat("en-US", t).format(e);
}, ra = (e, r = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: r
}).format(e), ta = (e) => {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, t = ["Bytes", "KB", "MB", "GB", "TB"], o = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, o)).toFixed(2)) + " " + t[o];
}, na = (e) => {
  const r = e.replace(/\D/g, "");
  return r.length === 10 ? `(${r.slice(0, 3)}) ${r.slice(3, 6)}-${r.slice(6)}` : r.length === 11 && r.startsWith("1") ? `+1 (${r.slice(1, 4)}) ${r.slice(4, 7)}-${r.slice(7)}` : e;
}, oa = (e) => document.querySelector(e), aa = (e) => Array.from(document.querySelectorAll(e)), ia = (e) => {
  const r = e.getBoundingClientRect();
  return r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth);
}, sa = (e) => {
  const r = e.getBoundingClientRect();
  return {
    top: r.top + window.pageYOffset,
    left: r.left + window.pageXOffset,
    bottom: r.bottom + window.pageYOffset,
    right: r.right + window.pageXOffset,
    width: r.width,
    height: r.height
  };
}, ca = (e, r = {}) => {
  e.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
    ...r
  });
}, ua = (e, r, t, o) => (e.addEventListener(r, t, o), () => {
  e.removeEventListener(r, t, o);
}), la = (e, r) => {
  let t;
  return (...o) => {
    clearTimeout(t), t = setTimeout(() => e(...o), r);
  };
}, fa = (e, r) => {
  let t;
  return (...o) => {
    t || (e(...o), t = !0, setTimeout(() => t = !1, r));
  };
};
export {
  Fo as Button,
  jo as Input,
  zo as ThemeProvider,
  ua as addEventListenerWithCleanup,
  la as debounce,
  ra as formatCurrency,
  Yt as formatDate,
  Zo as formatDateTime,
  ta as formatFileSize,
  ea as formatNumber,
  na as formatPhoneNumber,
  Qo as formatRelativeTime,
  oa as getElement,
  sa as getElementPosition,
  aa as getElements,
  Wo as isEmail,
  Jo as isInRange,
  ia as isInViewport,
  Xo as isInteger,
  qo as isNumber,
  Bo as isPhoneNumber,
  Ko as isPositive,
  Uo as isRequired,
  Vo as isStrongPassword,
  Yo as isUrl,
  Ho as maxLength,
  Go as minLength,
  ca as scrollIntoView,
  fa as throttle,
  Lo as useLocalStorage,
  Mo as useTheme
};
