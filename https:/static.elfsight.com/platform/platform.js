/**
 * @license
 elfsight.com

  Copyright (c) 2023 Elfsight, LLC. ALL RIGHTS RESERVED

 domready (c) Dustin Diaz 2014 - License MIT
*/
'use strict';
!function(modules) {
  /**
   * @param {number} moduleId
   * @return {?}
   */
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      exports : {},
      id : moduleId,
      loaded : false
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = true, module.exports;
  }
  var installedModules = {};
  return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "/dev/", __webpack_require__(0);
}([function(canCreateDiscussions, isSlidingUp, require) {
  require(1);
  require(2)(window);
  require(64);
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  /** @type {string} */
  mixin.exports = __webpack_require__.p + "index.html";
}, function(context, canCreateDiscussions, require) {
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function init(data) {
    if (!data.eapps) {
      var client = {};
      var self = new EventEmitter;
      var newNode = new Node(data, data.document.body, self);
      var conf = new Configuration;
      client.platform = newNode.facade();
      client.apps = self.facade();
      client.analytics = conf.facade();
      data.eapps = client;
    }
  }
  require(3);
  var Node = require(52);
  var EventEmitter = require(59);
  var Configuration = require(62);
  /** @type {function(!Object): undefined} */
  context.exports = init;
}, function(canCreateDiscussions, isSlidingUp, saveNotifs) {
  saveNotifs(4);
  saveNotifs(42);
  saveNotifs(49);
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var $export = __webpack_require__(5);
  $export($export.S + $export.F, "Object", {
    assign : __webpack_require__(26)
  });
}, function(module, canCreateDiscussions, __webpack_require__) {
  var global = __webpack_require__(6);
  var core = __webpack_require__(7);
  var hide = __webpack_require__(8);
  var redefine = __webpack_require__(18);
  var ctx = __webpack_require__(24);
  /** @type {string} */
  var PROTOTYPE = "prototype";
  /**
   * @param {string} type
   * @param {string} name
   * @param {string} source
   * @return {undefined}
   */
  var $export = function $export(type, name, source) {
    var key;
    var own;
    var out;
    var returnThis;
    /** @type {number} */
    var IS_FORCED = type & $export.F;
    /** @type {number} */
    var IS_GLOBAL = type & $export.G;
    /** @type {number} */
    var IS_STATIC = type & $export.S;
    /** @type {number} */
    var IS_PROTO = type & $export.P;
    /** @type {number} */
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    if (IS_GLOBAL) {
      /** @type {string} */
      source = name;
    }
    for (key in source) {
      own = !IS_FORCED && target && void 0 !== target[key];
      out = (own ? target : source)[key];
      returnThis = IS_BIND && own ? ctx(out, global) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out;
      if (target) {
        redefine(target, key, out, type & $export.U);
      }
      if (exports[key] != out) {
        hide(exports, key, returnThis);
      }
      if (IS_PROTO && expProto[key] != out) {
        expProto[key] = out;
      }
    }
  };
  global.core = core;
  /** @type {number} */
  $export.F = 1;
  /** @type {number} */
  $export.G = 2;
  /** @type {number} */
  $export.S = 4;
  /** @type {number} */
  $export.P = 8;
  /** @type {number} */
  $export.B = 16;
  /** @type {number} */
  $export.W = 32;
  /** @type {number} */
  $export.U = 64;
  /** @type {number} */
  $export.R = 128;
  /** @type {function(string, string, string): undefined} */
  module.exports = $export;
}, function(module, canCreateDiscussions) {
  var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  if ("number" == typeof __g) {
    __g = global;
  }
}, function(module, canCreateDiscussions) {
  var core = module.exports = {
    version : "2.6.5"
  };
  if ("number" == typeof __e) {
    __e = core;
  }
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var dP = __webpack_require__(9);
  var createDesc = __webpack_require__(17);
  /** @type {function(!Object, string, !Object): ?} */
  mixin.exports = __webpack_require__(13) ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function(n, name, t) {
    return n[name] = t, n;
  };
}, function(canCreateDiscussions, minF, __webpack_require__) {
  var anObject = __webpack_require__(10);
  var _UiIcon = __webpack_require__(12);
  var toIObject = __webpack_require__(16);
  /** @type {function(!Object, string, !Object): !Object} */
  var dP = Object.defineProperty;
  /** @type {!Function} */
  minF.f = __webpack_require__(13) ? Object.defineProperty : function(O, P, Attributes) {
    if (anObject(O), P = toIObject(P, true), anObject(Attributes), _UiIcon) {
      try {
        return dP(O, P, Attributes);
      } catch (e) {
      }
    }
    if ("get" in Attributes || "set" in Attributes) {
      throw TypeError("Accessors not supported!");
    }
    return "value" in Attributes && (O[P] = Attributes.value), O;
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  var next = iter_f(11);
  /**
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(name) {
    if (!next(name)) {
      throw TypeError(name + " is not an object!");
    }
    return name;
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} space
   * @return {?}
   */
  function stringify(space) {
    return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(_class) {
      return typeof _class;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(space);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  mixin.exports = function(obj) {
    return "object" === stringify(obj) ? null !== obj : "function" == typeof obj;
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  /** @type {boolean} */
  mixin.exports = !__webpack_require__(13) && !__webpack_require__(14)(function() {
    return 7 != Object.defineProperty(__webpack_require__(15)("div"), "a", {
      get : function() {
        return 7;
      }
    }).a;
  });
}, function(mixin, canCreateDiscussions, saveNotifs) {
  /** @type {boolean} */
  mixin.exports = !saveNotifs(14)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get : function() {
        return 7;
      }
    }).a;
  });
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} exec
   * @return {?}
   */
  mixin.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var isObject = __webpack_require__(11);
  var document = __webpack_require__(6).document;
  var valueMightNeedDecoding = isObject(document) && isObject(document.createElement);
  /**
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(value) {
    return valueMightNeedDecoding ? document.createElement(value) : {};
  };
}, function(mixin, canCreateDiscussions, n) {
  var f = n(11);
  /**
   * @param {!Object} obj
   * @param {string} value
   * @return {?}
   */
  mixin.exports = function(obj, value) {
    if (!f(obj)) {
      return obj;
    }
    var fn;
    var o;
    if (value && "function" == typeof(fn = obj.toString) && !f(o = fn.call(obj))) {
      return o;
    }
    if ("function" == typeof(fn = obj.valueOf) && !f(o = fn.call(obj))) {
      return o;
    }
    if (!value && "function" == typeof(fn = obj.toString) && !f(o = fn.call(obj))) {
      return o;
    }
    throw TypeError("Can't convert object to primitive value");
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {number} obj
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(obj, name) {
    return {
      enumerable : !(1 & obj),
      configurable : !(2 & obj),
      writable : !(4 & obj),
      value : name
    };
  };
}, function(mixin, canCreateDiscussions, require) {
  var ScrollView = require(6);
  var h = require(8);
  var next = require(19);
  var text = require(20)("src");
  var path = require(21);
  /** @type {string} */
  var TO_STRING = "toString";
  /** @type {!Array<string>} */
  var TPL = ("" + path).split(TO_STRING);
  /**
   * @param {?} it
   * @return {?}
   */
  require(7).inspectSource = function(it) {
    return path.call(it);
  };
  (mixin.exports = function(obj, key, value, s) {
    /** @type {boolean} */
    var cb = "function" == typeof value;
    if (cb) {
      if (!next(value, "name")) {
        h(value, "name", key);
      }
    }
    if (obj[key] !== value) {
      if (cb) {
        if (!next(value, text)) {
          h(value, text, obj[key] ? "" + obj[key] : TPL.join(String(key)));
        }
      }
      if (obj === ScrollView) {
        /** @type {string} */
        obj[key] = value;
      } else {
        if (s) {
          if (obj[key]) {
            /** @type {string} */
            obj[key] = value;
          } else {
            h(obj, key, value);
          }
        } else {
          delete obj[key];
          h(obj, key, value);
        }
      }
    }
  })(Function.prototype, TO_STRING, function() {
    return "function" == typeof this && this[text] || path.call(this);
  });
}, function(mixin, canCreateDiscussions) {
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = {}.hasOwnProperty;
  /**
   * @param {!Object} object
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(object, name) {
    return hasOwn.call(object, name);
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {number} */
  var id = 0;
  /** @type {number} */
  var px = Math.random();
  /**
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(name) {
    return "Symbol(".concat(void 0 === name ? "" : name, ")_", (++id + px).toString(36));
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  mixin.exports = saveNotifs(22)("native-function-to-string", Function.toString);
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var docRecord = __webpack_require__(7);
  var global = __webpack_require__(6);
  /** @type {string} */
  var SHARED = "__core-js_shared__";
  var params = global[SHARED] || (global[SHARED] = {});
  (mixin.exports = function(name, value) {
    return params[name] || (params[name] = void 0 !== value ? value : {});
  })("versions", []).push({
    version : docRecord.version,
    mode : __webpack_require__(23) ? "pure" : "global",
    copyright : "\u00c2\u00a9 2019 Denis Pushkarev (zloirock.ru)"
  });
}, function(mixin, canCreateDiscussions) {
  /** @type {boolean} */
  mixin.exports = false;
}, function(mixin, canCreateDiscussions, new_val_func) {
  var h = new_val_func(25);
  /**
   * @param {!Object} e
   * @param {number} value
   * @param {!Object} method
   * @return {?}
   */
  mixin.exports = function(e, value, method) {
    if (h(e), void 0 === value) {
      return e;
    }
    switch(method) {
      case 1:
        return function(change) {
          return e.call(value, change);
        };
      case 2:
        return function(change, b) {
          return e.call(value, change, b);
        };
      case 3:
        return function(change, end, b) {
          return e.call(value, change, end, b);
        };
    }
    return function() {
      return e.apply(value, arguments);
    };
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(name) {
    if ("function" != typeof name) {
      throw TypeError(name + " is not a function!");
    }
    return name;
  };
}, function(module, canCreateDiscussions, require) {
  var f = require(27);
  var template = require(39);
  var pIE = require(40);
  var m = require(41);
  var parseProj = require(30);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var $assign = Object.assign;
  /** @type {!Function} */
  module.exports = !$assign || require(14)(function() {
    var A = {};
    var B = {};
    var S = Symbol();
    /** @type {string} */
    var K = "abcdefghijklmnopqrst";
    return A[S] = 7, K.split("").forEach(function(k) {
      /** @type {string} */
      B[k] = k;
    }), 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K;
  }) ? function(obj, name) {
    var a = m(obj);
    /** @type {number} */
    var length = arguments.length;
    /** @type {number} */
    var i = 1;
    var n = template.f;
    var isEnum = pIE.f;
    for (; length > i;) {
      var key;
      var x = parseProj(arguments[i++]);
      var rest = n ? f(x).concat(n(x)) : f(x);
      var chop = rest.length;
      /** @type {number} */
      var idx = 0;
      for (; chop > idx;) {
        if (isEnum.call(x, key = rest[idx++])) {
          a[key] = x[key];
        }
      }
    }
    return a;
  } : $assign;
}, function(mixin, canCreateDiscussions, n) {
  var f = n(28);
  var i = n(38);
  /** @type {function(!Object): !Array<string>} */
  mixin.exports = Object.keys || function(object) {
    return f(object, i);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var has = __webpack_require__(19);
  var type = __webpack_require__(29);
  var isSubsetSum = __webpack_require__(33)(false);
  var IE_PROTO = __webpack_require__(37)("IE_PROTO");
  /**
   * @param {!Object} obj
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(obj, value) {
    var key;
    var k = type(obj);
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var room = [];
    for (key in k) {
      if (key != IE_PROTO && has(k, key)) {
        room.push(key);
      }
    }
    for (; value.length > i;) {
      if (has(k, key = value[i++])) {
        if (!~isSubsetSum(room, key)) {
          room.push(key);
        }
      }
    }
    return room;
  };
}, function(mixin, canCreateDiscussions, n) {
  var i = n(30);
  var h = n(32);
  /**
   * @param {!Object} x
   * @return {?}
   */
  mixin.exports = function(x) {
    return i(h(x));
  };
}, function(module, canCreateDiscussions, pointFromEvent) {
  var p = pointFromEvent(31);
  /** @type {!Function} */
  module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(a) {
    return "String" == p(a) ? a.split("") : Object(a);
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {function(this:*): string} */
  var objectToString$2 = {}.toString;
  /**
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(value) {
    return objectToString$2.call(value).slice(8, -1);
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {number} name
   * @return {?}
   */
  mixin.exports = function(name) {
    if (void 0 == name) {
      throw TypeError("Can't call method on  " + name);
    }
    return name;
  };
}, function(mixin, canCreateDiscussions, n) {
  var f = n(29);
  var a = n(34);
  var h = n(36);
  /**
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(value) {
    return function(json, obj, folderPath) {
      var s;
      var o = f(json);
      var i = a(o.length);
      var p = h(folderPath, i);
      if (value && obj != obj) {
        for (; i > p;) {
          if (s = o[p++], s != s) {
            return true;
          }
        }
      } else {
        for (; i > p; p++) {
          if ((value || p in o) && o[p] === obj) {
            return value || p || 0;
          }
        }
      }
      return !value && -1;
    };
  };
}, function(mixin, canCreateDiscussions, new_val_func) {
  var h = new_val_func(35);
  /** @type {function(...?): number} */
  var f = Math.min;
  /**
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(name) {
    return name > 0 ? f(h(name), 9007199254740991) : 0;
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {function(?): number} */
  var ceil = Math.ceil;
  /** @type {function(?): number} */
  var floor = Math.floor;
  /**
   * @param {!Object} it
   * @return {?}
   */
  mixin.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
}, function(mixin, canCreateDiscussions, _$$mdAnimate_) {
  var boundedIndex = _$$mdAnimate_(35);
  /** @type {function(...?): number} */
  var max = Math.max;
  /** @type {function(...?): number} */
  var min = Math.min;
  /**
   * @param {?} index
   * @param {string} value
   * @return {?}
   */
  mixin.exports = function(index, value) {
    return index = boundedIndex(index), index < 0 ? max(index + value, 0) : min(index, value);
  };
}, function(mixin, canCreateDiscussions, require) {
  var d = require(22)("keys");
  var callback = require(20);
  /**
   * @param {!Object} n
   * @return {?}
   */
  mixin.exports = function(n) {
    return d[n] || (d[n] = callback(n));
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array<string>} */
  mixin.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(canCreateDiscussions, exports) {
  /** @type {function(!Object): !Array<?>} */
  exports.f = Object.getOwnPropertySymbols;
}, function(canCreateDiscussions, exports) {
  /** @type {function(this:Object, string): boolean} */
  exports.f = {}.propertyIsEnumerable;
}, function(mixin, canCreateDiscussions, parseValueFn) {
  var value = parseValueFn(32);
  /**
   * @param {!Object} obj
   * @return {?}
   */
  mixin.exports = function(obj) {
    return Object(value(obj));
  };
}, function(canCreateDiscussions, isSlidingUp, require) {
  var $export = require(5);
  var error = require(43)(2);
  $export($export.P + $export.F * !require(48)([].filter, true), "Array", {
    filter : function(name) {
      return error(this, name, arguments[1]);
    }
  });
}, function(mixin, canCreateDiscussions, n) {
  var next = n(24);
  var end = n(30);
  var c = n(41);
  var a = n(34);
  var p = n(44);
  /**
   * @param {number} object
   * @param {number} tag
   * @return {?}
   */
  mixin.exports = function(object, tag) {
    /** @type {boolean} */
    var isArray = 1 == object;
    /** @type {boolean} */
    var isObject = 2 == object;
    /** @type {boolean} */
    var was_ctrl_key = 3 == object;
    /** @type {boolean} */
    var was_alt_key = 4 == object;
    /** @type {boolean} */
    var flat_slope = 6 == object;
    /** @type {boolean} */
    var definedExports = 5 == object || flat_slope;
    var test = tag || p;
    return function(value, count, callback) {
      var r;
      var v;
      var b = c(value);
      var result = end(b);
      var done = next(count, callback, 3);
      var m = a(result.length);
      /** @type {number} */
      var name = 0;
      var left = isArray ? test(value, m) : isObject ? test(value, 0) : void 0;
      for (; m > name; name++) {
        if ((definedExports || name in result) && (r = result[name], v = done(r, name, b), object)) {
          if (isArray) {
            left[name] = v;
          } else {
            if (v) {
              switch(object) {
                case 3:
                  return true;
                case 5:
                  return r;
                case 6:
                  return name;
                case 2:
                  left.push(r);
              }
            } else {
              if (was_alt_key) {
                return false;
              }
            }
          }
        }
      }
      return flat_slope ? -1 : was_ctrl_key || was_alt_key ? was_alt_key : left;
    };
  };
}, function(mixin, canCreateDiscussions, install) {
  var require = install(45);
  /**
   * @param {!Object} path
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(path, name) {
    return new (require(path))(name);
  };
}, function(mixin, canCreateDiscussions, require) {
  var sphereKnn = require(11);
  var mix = require(46);
  var sortKey = require(47)("species");
  /**
   * @param {!Object} obj
   * @return {?}
   */
  mixin.exports = function(obj) {
    var a;
    return mix(obj) && (a = obj.constructor, "function" != typeof a || a !== Array && !mix(a.prototype) || (a = void 0), sphereKnn(a) && (a = a[sortKey], null === a && (a = void 0))), void 0 === a ? Array : a;
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  var next = iter_f(31);
  /** @type {function(*): boolean} */
  mixin.exports = Array.isArray || function(obj) {
    return "Array" == next(obj);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var store = __webpack_require__(22)("wks");
  var uid = __webpack_require__(20);
  var Symbol = __webpack_require__(6).Symbol;
  /** @type {boolean} */
  var USE_SYMBOL = "function" == typeof Symbol;
  /** @type {function(!Object): ?} */
  var JSO = mixin.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
  };
  JSO.store = store;
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var checkedSubscribe = saveNotifs(14);
  /**
   * @param {!Object} obj
   * @param {!Object} name
   * @return {?}
   */
  mixin.exports = function(obj, name) {
    return !!obj && checkedSubscribe(function() {
      if (name) {
        obj.call(null, function() {
        }, 1);
      } else {
        obj.call(null);
      }
    });
  };
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var $export = __webpack_require__(5);
  $export($export.P, "Function", {
    bind : __webpack_require__(50)
  });
}, function(mixin, canCreateDiscussions, require) {
  var tryCatch = require(25);
  var Emitter = require(11);
  var invoke = require(51);
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = [].slice;
  var fns = {};
  /**
   * @param {?} value
   * @param {number} i
   * @param {?} model
   * @return {?}
   */
  var construct = function(value, i, model) {
    if (!(i in fns)) {
      /** @type {!Array} */
      var group_by = [];
      /** @type {number} */
      var g = 0;
      for (; g < i; g++) {
        /** @type {string} */
        group_by[g] = "a[" + g + "]";
      }
      fns[i] = Function("F,a", "return new F(" + group_by.join(",") + ")");
    }
    return fns[i](value, model);
  };
  mixin.exports = Function.bind || function(that) {
    var fn = tryCatch(this);
    /** @type {!Array<?>} */
    var headArgs = slice.call(arguments, 1);
    /**
     * @return {?}
     */
    var proxy = function bound() {
      /** @type {!Array<?>} */
      var args = headArgs.concat(slice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    return Emitter(fn.prototype) && (proxy.prototype = fn.prototype), proxy;
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} fn
   * @param {!Array} a
   * @param {?} n
   * @return {?}
   */
  mixin.exports = function(fn, a, n) {
    /** @type {boolean} */
    var hasStrings = void 0 === n;
    switch(a.length) {
      case 0:
        return hasStrings ? fn() : fn.call(n);
      case 1:
        return hasStrings ? fn(a[0]) : fn.call(n, a[0]);
      case 2:
        return hasStrings ? fn(a[0], a[1]) : fn.call(n, a[0], a[1]);
      case 3:
        return hasStrings ? fn(a[0], a[1], a[2]) : fn.call(n, a[0], a[1], a[2]);
      case 4:
        return hasStrings ? fn(a[0], a[1], a[2], a[3]) : fn.call(n, a[0], a[1], a[2], a[3]);
    }
    return fn.apply(n, a);
  };
}, function(exp, canCreateDiscussions, require) {
  var makeToggleFocusable = require(53);
  var route = require(54);
  var exports = require(57);
  var KanbanRecord = require(58);
  /** @type {string} */
  var config = "eapps.Platform";
  /** @type {!RegExp} */
  var hasExtRx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  /**
   * @param {!Object} target
   * @param {!Object} el
   * @param {!Object} t
   * @return {undefined}
   */
  var create = function(target, el, t) {
    var observer;
    var self = this;
    var test = {};
    /** @type {!Array} */
    var item = [];
    /** @type {!Array} */
    var items = [];
    /** @type {!Array} */
    var g = [];
    /**
     * @return {undefined}
     */
    self.initialize = function() {
      self.logError = exports.withModule(config);
      makeToggleFocusable(function() {
        el = el || target.document.body;
        self.establishPreconnections();
        self.observe();
        self.collectWidgets(el);
        self.boot();
        self.watchWidgetReset();
      });
    };
    /**
     * @return {undefined}
     */
    self.establishPreconnections = function() {
      self.preconnect(self.getPlatformUrl());
      self.preconnect("https://static.elfsight.com");
      self.preconnect("https://service-reviews-ultimate.elfsight.com");
      self.preconnect("https://storage.elfsight.com");
    };
    /**
     * @param {string} e
     * @return {undefined}
     */
    self.preconnect = function(e) {
      /** @type {!Element} */
      var item = document.createElement("link");
      /** @type {string} */
      item.href = e;
      /** @type {string} */
      item.rel = "preconnect";
      /** @type {string} */
      item.crossOrigin = "";
      document.head.appendChild(item);
    };
    /**
     * @return {?}
     */
    self.facade = function() {
      return new KanbanRecord(self);
    };
    /**
     * @param {number} v
     * @return {undefined}
     */
    self.requireWidget = function(v) {
      if ("string" != typeof v) {
        self.logError("Widget Public ID required and should be a string", {
          pid : v
        });
      }
      if (!~item.indexOf(v)) {
        item.push(v);
      }
    };
    /**
     * @param {!Node} text
     * @return {undefined}
     */
    self.addPlaceholder = function(text) {
      if (!~items.indexOf(text)) {
        items.push(text);
      }
    };
    /**
     * @param {!Node} result
     * @return {?}
     */
    self.getEappsClass = function(result) {
      var successRates = result.className.split(" ");
      return 1 === successRates.length ? result.className : successRates.length > 1 ? (successRates.filter(function(pathToDestinationFile) {
        return /elfsight-app-[\S]+/.test(pathToDestinationFile);
      }), successRates[0]) : void 0;
    };
    /**
     * @param {!Node} t
     * @return {?}
     */
    self.getWidgetIdByElement = function(t) {
      return "div" === t.tagName.toLowerCase() ? self.getEappsClass(t).replace("elfsight-app-", "") : t.getAttribute("data-id");
    };
    /**
     * @param {!Node} img
     * @return {?}
     */
    self.getLazyMode = function(img) {
      /** @type {string} */
      var DATA_ORIGINAL_SRC = "data-elfsight-app-lazy";
      if (!img.hasAttribute(DATA_ORIGINAL_SRC)) {
        return "disabled";
      }
      var undefined = img.getAttribute(DATA_ORIGINAL_SRC);
      return "first-activity" === undefined || "disabled" === undefined ? undefined : "enabled";
    };
    /**
     * @param {!Object} target
     * @return {?}
     */
    self.getWidgetsElements = function(target) {
      if (target = target || el, !target || "function" != typeof target.getElementsByTagName || "function" != typeof target.querySelectorAll) {
        return [];
      }
      /** @type {!Array<?>} */
      var j = Array.prototype.slice.call(target.getElementsByTagName("elfsight-app"));
      /** @type {!Array<?>} */
      var rowChunk = Array.prototype.slice.call(target.querySelectorAll('*[class^="elfsight-app"]'));
      /** @type {!Array<?>} */
      var transform = rowChunk.concat(j);
      return target instanceof HTMLElement && ~target.className.indexOf("elfsight-app") && transform.push(target), transform;
    };
    /**
     * @param {!Object} diff
     * @return {undefined}
     */
    self.collectWidgets = function(diff) {
      self.getWidgetsElements(diff).forEach(function(t) {
        var g = self.getWidgetIdByElement(t);
        if (g) {
          var debugColors = self.getLazyMode(t);
          if ("disabled" !== debugColors) {
            /** @type {boolean} */
            var rdftypes = "first-activity" === debugColors;
            self.bootWidgetDeferredly(t, g, rdftypes);
          } else {
            self.requireWidget(g);
          }
          self.addPlaceholder(t);
        }
      });
    };
    /**
     * @param {!Node} c
     * @param {undefined} r
     * @param {boolean} a
     * @return {undefined}
     */
    self.bootWidgetDeferredly = function(c, r, a) {
      /**
       * @param {?} regionfilter
       * @return {undefined}
       */
      function success(regionfilter) {
        disablePreviewLinks();
        self.requireWidget(r);
        self.revise();
      }
      /**
       * @return {undefined}
       */
      function disablePreviewLinks() {
        if (r) {
          r.disconnect();
        }
        events.forEach(function(type) {
          window.removeEventListener(type, success, useCapture);
        });
      }
      var r;
      /** @type {!Array} */
      var events = ["scroll", "mousemove", "touchstart", "keydown", "click"];
      var useCapture = {
        capture : true,
        passive : true
      };
      /** @type {boolean} */
      var booA = !a;
      if (booA && "IntersectionObserver" in window) {
        /** @type {!IntersectionObserver} */
        r = new IntersectionObserver(function(array) {
          /** @type {number} */
          var i = 0;
          for (; i < array.length; ++i) {
            if (array[i].isIntersecting) {
              success(array[i]);
              break;
            }
          }
        });
      }
      if (r) {
        r.observe(c);
      }
      events.forEach(function(e) {
        window.addEventListener(e, success, useCapture);
      });
    };
    /**
     * @return {undefined}
     */
    self.watchWidgetReset = function() {
      window.addEventListener("message", function(rawResponse) {
        var data = rawResponse.data;
        if (data.action && "EappsPlatform.widgetReset" === data.action) {
          self.resetWidget(data.widgetId);
        }
      });
    };
    /**
     * @param {string} obj
     * @return {undefined}
     */
    self.resetWidget = function(obj) {
      /**
       * @param {string} i
       * @return {?}
       */
      var abstractAltContent = function buildReceiveDiv(i) {
        /** @type {!Element} */
        var smileyContainer = document.createElement("div");
        return smileyContainer.className = "elfsight-app-" + i, smileyContainer;
      };
      self.getWidgetsElements().forEach(function(list) {
        if (self.getWidgetIdByElement(list) === obj) {
          delete test[obj];
          list.parentNode.replaceChild(abstractAltContent(obj), list);
        }
      });
    };
    /**
     * @param {!Node} element
     * @return {?}
     */
    self.initWidget = function(element) {
      var p = self.getWidgetIdByElement(element);
      var opts = test[p];
      if (opts) {
        if (!opts.status || !opts.data) {
          return void self.logError('Widget "' + p + '" can`t be initialized because ' + opts.reason, element);
        }
        opts.data.id = p;
        /** @type {boolean} */
        opts.data.platform = true;
        if (opts.user) {
          opts.data.isOwner = opts.user.owner;
        }
        t.initWidget(element, opts.data);
      }
    };
    /**
     * @param {!Object} done
     * @param {!Object} opts
     * @return {undefined}
     */
    self.boot = function(done, opts) {
      var options = opts || item;
      if (options.length) {
        /** @type {!XMLHttpRequest} */
        var request = new XMLHttpRequest;
        var sanitized = self.getPlatformUrl();
        /** @type {string} */
        sanitized = sanitized + "/p/boot/";
        var chunk = route.stringify({
          w : options.join(","),
          page : self.getPage()
        });
        request.open("get", sanitized + "?" + chunk);
        /** @type {boolean} */
        request.withCredentials = true;
        /**
         * @return {undefined}
         */
        request.onload = function() {
          /** @type {*} */
          var result = JSON.parse(request.response);
          if (!result.status) {
            self.logError("Boot failed because " + result.reason, result.data);
          }
          /** @type {!Object} */
          test = Object.assign({}, test, result.data.widgets);
          self.loadAssets(result.data.assets);
          items.forEach(self.initWidget.bind(self));
          if (done) {
            done();
          }
        };
        request.send();
      }
    };
    /**
     * @return {?}
     */
    self.getPage = function() {
      try {
        /** @type {string} */
        var path = document.location.href;
        if (hasExtRx.test(path)) {
          return (new URL(path)).toString();
        }
      } catch (e) {
      }
    };
    /**
     * @return {?}
     */
    self.getPlatformUrl = function() {
      return target.eappsCustomPlatformUrl ? target.eappsCustomPlatformUrl : self.useServiceCore() ? "https://core.service.elfsight.com" : "https://apps.elfsight.com";
    };
    /**
     * @return {?}
     */
    self.useServiceCore = function() {
      return !!document.querySelector("script[data-use-service-core]");
    };
    /**
     * @return {undefined}
     */
    self.revise = function() {
      /** @type {!Array<?>} */
      var callback = item.filter(function(pre) {
        return !(pre in test);
      });
      if (callback.length > 0) {
        self.boot(null, callback);
      } else {
        items.forEach(self.initWidget.bind(self));
      }
    };
    /**
     * @param {string} paths
     * @return {undefined}
     */
    self.loadAssets = function(paths) {
      if (paths && paths.length) {
        paths.filter(function(e) {
          return g.indexOf(e) === -1;
        }).forEach(function(t) {
          var node = target.document.createElement("script");
          /** @type {string} */
          node.src = t;
          node.setAttribute("defer", "defer");
          node.setAttribute("charset", "UTF-8");
          target.document.head.appendChild(node);
          g.push(t);
        });
      }
    };
    /**
     * @return {undefined}
     */
    self.observe = function() {
      if (target.MutationObserver && !observer) {
        var observerConfig = {
          childList : true,
          subtree : true,
          characterData : true
        };
        /** @type {null} */
        var _takingTooLongTimeout = null;
        /** @type {!MutationObserver} */
        observer = new MutationObserver(function(wrappersTemplates) {
          /**
           * @param {!Node} data
           * @return {undefined}
           */
          var caller = function(data) {
            self.requireWidget(self.getWidgetIdByElement(data));
            self.addPlaceholder(data);
          };
          wrappersTemplates.forEach(function(mutation) {
            /**
             * @param {!Object} v
             * @return {undefined}
             */
            var i = function(v) {
              var a = self.getWidgetsElements(v);
              a.forEach(caller);
              if (a.length > 0) {
                if (_takingTooLongTimeout) {
                  clearTimeout(_takingTooLongTimeout);
                }
                /** @type {number} */
                _takingTooLongTimeout = setTimeout(function() {
                  self.revise();
                }, 1E3);
              }
            };
            Array.prototype.forEach.call(mutation.addedNodes, i);
          });
        });
        observer.observe(target.document, observerConfig);
      }
    };
    self.initialize();
  };
  /** @type {function(!Object, !Object, !Object): undefined} */
  exp.exports = create;
}, function(module, canCreateDiscussions, n) {
  !function(type, factory) {
    module.exports = factory();
  }("domready", function() {
    var listener;
    /** @type {!Array} */
    var t = [];
    /** @type {!HTMLDocument} */
    var doc = document;
    /** @type {function(this:Element, string=): undefined} */
    var hack = doc.documentElement.doScroll;
    /** @type {string} */
    var domContentLoaded = "DOMContentLoaded";
    /** @type {boolean} */
    var calculatedMap = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
    return calculatedMap || doc.addEventListener(domContentLoaded, listener = function() {
      doc.removeEventListener(domContentLoaded, listener);
      /** @type {number} */
      calculatedMap = 1;
      for (; listener = t.shift();) {
        listener();
      }
    }), function(e) {
      if (calculatedMap) {
        setTimeout(e, 0);
      } else {
        t.push(e);
      }
    };
  });
}, function(canCreateDiscussions, text, __webpack_require__) {
  /**
   * @param {!Array} pos
   * @return {?}
   */
  function fn(pos) {
    return (fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(object) {
      return typeof object;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(pos);
  }
  /**
   * @param {!Object} opts
   * @return {?}
   */
  function encoderForArrayFormat(opts) {
    switch(opts.arrayFormat) {
      case "index":
        return function(username, password, browser) {
          return null === password ? [encode(username, opts), "[", browser, "]"].join("") : [encode(username, opts), "[", encode(browser, opts), "]=", encode(password, opts)].join("");
        };
      case "bracket":
        return function(text, string) {
          return null === string ? encode(text, opts) : [encode(text, opts), "[]=", encode(string, opts)].join("");
        };
      default:
        return function(text, string) {
          return null === string ? encode(text, opts) : [encode(text, opts), "=", encode(string, opts)].join("");
        };
    }
  }
  /**
   * @param {(Array|HTMLCollection|Node|NodeList|Window|string)} opts
   * @return {?}
   */
  function parserForArrayFormat(opts) {
    var ref;
    switch(opts.arrayFormat) {
      case "index":
        return function(name, value, store) {
          return ref = /\[(\d*)\]$/.exec(name), name = name.replace(/\[\d*\]$/, ""), ref ? (void 0 === store[name] && (store[name] = {}), void(store[name][ref[1]] = value)) : void(store[name] = value);
        };
      case "bracket":
        return function(name, value, result) {
          return ref = /(\[\])$/.exec(name), name = name.replace(/\[\]$/, ""), ref ? void 0 === result[name] ? void(result[name] = [value]) : void(result[name] = [].concat(result[name], value)) : void(result[name] = value);
        };
      default:
        return function(name, value, result) {
          return void 0 === result[name] ? void(result[name] = value) : void(result[name] = [].concat(result[name], value));
        };
    }
  }
  /**
   * @param {string} value
   * @param {!Object} opts
   * @return {?}
   */
  function encode(value, opts) {
    return opts.encode ? opts.strict ? strictUriEncode(value) : encodeURIComponent(value) : value;
  }
  /**
   * @param {!Array} o
   * @return {?}
   */
  function check(o) {
    return Array.isArray(o) ? o.sort() : "object" === fn(o) ? check(Object.keys(o)).sort(function(a, b) {
      return Number(a) - Number(b);
    }).map(function(namefrom) {
      return o[namefrom];
    }) : o;
  }
  var strictUriEncode = __webpack_require__(55);
  var objectAssign = __webpack_require__(56);
  /**
   * @param {string} listStr
   * @return {?}
   */
  text.extract = function(listStr) {
    return listStr.split("?")[1] || "";
  };
  /**
   * @param {string} url
   * @param {(Array|Document|DocumentFragment|Element|HTMLCollection|NodeList|string)} opts
   * @return {?}
   */
  text.parse = function(url, opts) {
    opts = objectAssign({
      arrayFormat : "none"
    }, opts);
    var formatter = parserForArrayFormat(opts);
    /** @type {!Object} */
    var value = Object.create(null);
    return "string" != typeof url ? value : (url = url.trim().replace(/^(\?|#|&)/, "")) ? (url.split("&").forEach(function(commaParam) {
      /** @type {!Array<string>} */
      var headersAndBody = commaParam.replace(/\+/g, " ").split("=");
      /** @type {string} */
      var key = headersAndBody.shift();
      /** @type {(string|undefined)} */
      var val = headersAndBody.length > 0 ? headersAndBody.join("=") : void 0;
      /** @type {(null|string)} */
      val = void 0 === val ? null : decodeURIComponent(val);
      formatter(decodeURIComponent(key), val, value);
    }), Object.keys(value).sort().reduce(function(result, key) {
      var object = value[key];
      return Boolean(object) && "object" === fn(object) && !Array.isArray(object) ? result[key] = check(object) : result[key] = object, result;
    }, Object.create(null))) : value;
  };
  /**
   * @param {!Array} value
   * @param {?} opts
   * @return {?}
   */
  text.stringify = function(value, opts) {
    var defaults = {
      encode : true,
      strict : true,
      arrayFormat : "none"
    };
    opts = objectAssign(defaults, opts);
    var formatter = encoderForArrayFormat(opts);
    return value ? Object.keys(value).sort().map(function(i) {
      var key = value[i];
      if (void 0 === key) {
        return "";
      }
      if (null === key) {
        return encode(i, opts);
      }
      if (Array.isArray(key)) {
        /** @type {!Array} */
        var result = [];
        return key.slice().forEach(function(val2) {
          if (void 0 !== val2) {
            result.push(formatter(i, val2, result.length));
          }
        }), result.join("&");
      }
      return encode(i, opts) + "=" + encode(key, opts);
    }).filter(function(inRevIdx) {
      return inRevIdx.length > 0;
    }).join("&") : "";
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} object
   * @return {?}
   */
  mixin.exports = function(object) {
    return encodeURIComponent(object).replace(/[!'()*]/g, function(strUtf8) {
      return "%" + strUtf8.charCodeAt(0).toString(16).toUpperCase();
    });
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Array} a
   * @return {?}
   */
  function n(a) {
    if (null === a || void 0 === a) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(a);
  }
  /**
   * @return {?}
   */
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      /** @type {!String} */
      var test1 = new String("abc");
      if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) {
        return false;
      }
      var map = {};
      /** @type {number} */
      var i = 0;
      for (; i < 10; i++) {
        /** @type {number} */
        map["_" + String.fromCharCode(i)] = i;
      }
      /** @type {!Array<?>} */
      var outChance = Object.getOwnPropertyNames(map).map(function(oldOrient) {
        return map[oldOrient];
      });
      if ("0123456789" !== outChance.join("")) {
        return false;
      }
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(gid) {
        /** @type {string} */
        b[gid] = gid;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, b)).join("");
    } catch (e) {
      return false;
    }
  }
  /** @type {function(!Object): !Array<?>} */
  var ownSymbols = Object.getOwnPropertySymbols;
  /** @type {function(this:Object, *): boolean} */
  var __hasProp = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, string): boolean} */
  var fn = Object.prototype.propertyIsEnumerable;
  /** @type {!Function} */
  mixin.exports = shouldUseNative() ? Object.assign : function(a, name) {
    var obj;
    var keys;
    var o = n(a);
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      /** @type {!Object} */
      obj = Object(arguments[i]);
      var name;
      for (name in obj) {
        if (__hasProp.call(obj, name)) {
          o[name] = obj[name];
        }
      }
      if (ownSymbols) {
        /** @type {!Array<?>} */
        keys = ownSymbols(obj);
        /** @type {number} */
        var i = 0;
        for (; i < keys.length; i++) {
          if (fn.call(obj, keys[i])) {
            o[keys[i]] = obj[keys[i]];
          }
        }
      }
    }
    return o;
  };
}, function(meta, canCreateDiscussions) {
  /**
   * @param {!Object} name
   * @param {!Object} n
   * @param {!Object} i
   * @return {undefined}
   */
  function fn(name, n, i) {
    /** @type {!Array} */
    var s = [i + ' throws: "' + name + '"'];
    if (n) {
      s.push("with \n\t ->");
      s.push(n);
    }
    console.error.apply(console, s);
  }
  /**
   * @param {string} m
   * @return {?}
   */
  fn.withModule = function(m) {
    return function(a, i) {
      return fn(a, i, m);
    };
  };
  /** @type {function(!Object, !Object, !Object): undefined} */
  meta.exports = fn;
}, function(module, canCreateDiscussions) {
  /**
   * @param {!Object} object
   * @return {undefined}
   */
  var AVChatClient = function(object) {
    var tab = this;
    /**
     * @return {undefined}
     */
    tab.initialize = function() {
    };
    /**
     * @param {number} width
     * @return {?}
     */
    tab.requireWidget = function(width) {
      return object.requireWidget(width);
    };
    /**
     * @param {string} widget
     * @return {?}
     */
    tab.resetWidget = function(widget) {
      return object.resetWidget(widget);
    };
    tab.initialize();
  };
  /** @type {function(!Object): undefined} */
  module.exports = AVChatClient;
}, function(exp, canCreateDiscussions, require) {
  var exports = require(57);
  var KanbanRecord = require(60);
  var Field = require(61);
  /** @type {string} */
  var config = "eapps.AppsManager";
  /**
   * @return {undefined}
   */
  var create = function() {
    var self = this;
    var filters = {};
    /** @type {!Array} */
    var sections = [];
    /** @type {!Array} */
    var ws = [];
    /**
     * @return {undefined}
     */
    self.initialize = function() {
      self.logError = exports.withModule(config);
    };
    /**
     * @return {?}
     */
    self.facade = function() {
      return new KanbanRecord(self);
    };
    /**
     * @param {?} name
     * @param {?} cmd
     * @return {?}
     */
    self.register = function(name, cmd) {
      if (filters.name) {
        return void self.logError('Application "' + name + '" is already registered');
      }
      var config = new cmd;
      filters[name] = new Field(config);
      self.initWidgetsFromBuffer(name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    self.app = function(name) {
      return filters[name];
    };
    /**
     * @param {!Node} opt
     * @param {!Object} config
     * @return {undefined}
     */
    self.initWidget = function(opt, config) {
      var t = self.app(config.app);
      if (t) {
        if (ws.indexOf(opt) !== -1) {
          return;
        }
        ws.push(opt);
        t.initWidget(opt, config);
        self.sendExtensionPostMessage(opt, config);
      } else {
        sections.push({
          element : opt,
          config : config,
          initialized : false
        });
      }
    };
    /**
     * @param {?} v
     * @return {undefined}
     */
    self.initWidgetsFromBuffer = function(v) {
      if (sections && sections.length) {
        sections.forEach(function(options) {
          if (!(v !== options.config.app || options.initialized)) {
            /** @type {boolean} */
            options.initialized = true;
            self.initWidget(options.element, options.config);
          }
        });
      }
    };
    /**
     * @param {!Node} kind
     * @param {!Object} options
     * @return {undefined}
     */
    self.sendExtensionPostMessage = function(kind, options) {
      window.postMessage({
        method : "postMessagePlatformWidget",
        data : {
          settings : options.settings,
          app_slug : options.app,
          public_id : options.id,
          platform : "eapps"
        }
      }, "*");
    };
    self.initialize();
  };
  /** @type {function(): undefined} */
  exp.exports = create;
}, function(module, canCreateDiscussions) {
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  var Context = function(type) {
    var sqwidgetCore = this;
    /**
     * @return {undefined}
     */
    sqwidgetCore.initialize = function() {
    };
    /**
     * @param {?} name
     * @param {?} ctx
     * @return {?}
     */
    sqwidgetCore.register = function(name, ctx) {
      return type.register(name, ctx);
    };
    sqwidgetCore.initialize();
  };
  /** @type {function(!Object): undefined} */
  module.exports = Context;
}, function(module, gen34_options) {
  (function(canCreateDiscussions) {
    /**
     * @param {!Object} obj
     * @return {undefined}
     */
    var Calendar = function(obj) {
      var self = this;
      /** @type {boolean} */
      var i = false;
      /** @type {!Array} */
      var sections = [];
      var testMiddlewares = canCreateDiscussions.eappsCustomPlatformUrl || "https://apps.elfsight.com";
      /**
       * @return {undefined}
       */
      self.initialize = function() {
        obj.whenReady(self.ready.bind(self));
      };
      /**
       * @return {undefined}
       */
      self.ready = function() {
        /** @type {boolean} */
        i = true;
        self.initWidgetsFromBuffer();
      };
      /**
       * @param {!Node} opt
       * @param {!Object} config
       * @return {undefined}
       */
      self.initWidget = function(opt, config) {
        if (i) {
          /** @type {string} */
          config.websiteUrl = window.location.host || "undefined";
          var options = {
            widgetId : config.id || null,
            widgetOrigin : "apps.elfsight.com",
            websiteUrl : config.websiteUrl,
            deactivate : 1 === config.preferences.disable_widget,
            deactivatedWidgetUrl : config.preferences.deactivated_widget_url,
            showElfsightLogo : !config.preferences.hide_elfsight_logo,
            owner : config.isOwner,
            platform : config.platform,
            freeLinkUrl : config.preferences.free_link_url,
            displayFreeLink : config.preferences.display_free_link,
            displayFreeLinkRemove : config.preferences.display_free_link_remove,
            freeLinkURL : config.preferences.free_link_url,
            freeLinkRemoveURL : config.preferences.free_link_remove_url,
            freeLinkAnchor : config.preferences.free_link_anchor,
            displayDeactivation : config.preferences.display_deactivation,
            deactivationURL : config.preferences.deactivation_url
          };
          config.settings = [config.settings, options].reduce(function(soFar, obj) {
            return Object.keys(obj).forEach(function(key) {
              soFar[key] = obj[key];
            }), soFar;
          }, {});
          obj.initWidget(opt, config.settings, config);
          if (config.isOwner) {
            self.initToolbar(opt, config);
          }
        } else {
          sections.push({
            element : opt,
            config : config,
            initialized : false
          });
        }
      };
      /**
       * @param {!Node} target
       * @param {!Object} item
       * @return {undefined}
       */
      self.initToolbar = function(target, item) {
        /**
         * @return {?}
         */
        item.usageStatus = function() {
          /** @type {string} */
          var color = "green";
          return item.percentage >= 100 && (color = "red"), item.percentage >= 90 && item.percentage < 100 && (color = "orange"), color;
        };
        /** @type {!HTMLDocument} */
        var n = document.implementation.createHTMLDocument();
        /** @type {string} */
        n.body.innerHTML = '<div class="eapps-widget-toolbar">\n                <div class="eapps-widget-toolbar-panel-wrapper">\n                    <div class="eapps-widget-toolbar-panel-only-you">Panel only seen by widget owner</div>\n                    \n                    <div class="eapps-widget-toolbar-panel">\n                        <a href="'.concat(testMiddlewares, "/panel/applications/").concat(item.app, "/?utm_source=clients&utm_medium=user-panel&utm_campaign=elfsight-icon&utm_content=").concat(item.app, 
        "&utm_term=").concat(item.websiteUrl, '" target="_blank" title="Panel only seen by widget owner"> \n                            <div class="eapps-widget-toolbar-panel-logo">\n                                <svg width="15px" height="15px" viewBox="0 0 15 15">\n                                    <path d="M9.3907705,9.84479984 C9.39084949,9.84789591 9.39120496,9.85095229 9.39120496,9.85408806 C9.39120496,10.061247 9.22563696,10.22907 9.0213232,10.22907 C8.95852427,10.22907 8.89943798,10.2130737 8.84761899,10.1850899 L8.84754,10.1851296 L7.07973033,9.29155556 L7.08206061,9.28885642 C6.36524438,8.95487756 5.87944133,8.32105601 5.8725295,7.59228825 C5.8724505,7.59197071 5.87205554,7.5920104 5.87205554,7.59161347 C5.87205554,7.04563305 5.78595386,6.41089856 4.91573446,5.65760038 C3.20314046,4.17545506 0.437578214,1.75392969 0.14052742,1.49378024 C0.133220626,1.48790564 0.126229802,1.4816738 0.119396962,1.47528319 C0.116118779,1.47238559 0.113906992,1.47048031 0.113906992,1.47048031 L0.114025481,1.47032154 C0.0438802595,1.40204918 0,1.30619002 0,1.19981216 C0,0.992653173 0.165568,0.824830183 0.369763267,0.824830183 C0.437222748,0.824830183 0.500298153,0.84344631 0.554763389,0.875439056 L0.554881878,0.875240589 L8.16441401,4.79566183 C8.18708482,4.80685532 8.20940017,4.81848544 8.23159702,4.83027433 L8.26027125,4.84504021 C8.26027125,4.84504021 8.25995528,4.84539745 8.25991578,4.84543714 C8.94031653,5.21748181 9.39013856,5.85916262 9.39013856,6.58888301 C9.39013856,6.59412252 9.38970411,6.59924295 9.38966461,6.60448246 L9.39013856,6.60392675 C9.39013856,6.60392675 9.39013856,7.81560238 9.39013856,8.75974562 C9.39013856,9.47057204 9.39065201,9.79137275 9.3907705,9.84479984 Z M7.53431857,14.7455202 C3.55890924,14.6059985 0.437604872,11.2422351 0.576433956,7.24703185 C0.583108811,7.05447997 0.592627391,6.86419061 0.614903238,6.67604469 C0.626238643,6.5803443 0.774902276,5.85483139 1.42366658,5.94136264 C1.91002258,6.00626108 2.06393921,6.43383658 2.02799768,6.75971802 C2.02108585,6.82235395 2.00698571,6.9880335 2.00698571,6.9880335 C1.99805957,7.0901245 1.99174018,7.19296966 1.98810654,7.296569 C1.87645083,10.5094981 4.38663075,13.2146316 7.58357031,13.3268443 C10.7804309,13.4390571 13.4722142,10.9164331 13.58387,7.70354372 C13.6955257,4.49049559 11.1853457,1.78536206 7.98852467,1.67314929 C7.62634467,1.66044746 7.27060255,1.68180242 6.924458,1.73395933 C6.924458,1.73395933 6.08816582,1.8731238 5.90186232,1.30555026 C5.72160174,0.756354691 6.14271005,0.438650054 6.4277935,0.379070511 C6.94780024,0.279003871 7.48672566,0.235103155 8.03781591,0.254473453 C12.0131067,0.393995167 15.1343716,3.75771881 14.9955425,7.75308087 C14.8567529,11.7482842 11.5095699,14.8850419 7.53431857,14.7455202 Z" id="path-1"></path>\n                                </svg>\n                            </div>\n                        </a>\n                        \n                        <a href="').concat(testMiddlewares, 
        "/panel/applications/").concat(item.app, "/edit/").concat(item.id, "/?utm_source=clients&utm_medium=user-panel&utm_campaign=edit-widget&utm_content=").concat(item.app, "&utm_term=").concat(item.websiteUrl, '" target="_blank"> \n                            <div class="eapps-widget-toolbar-panel-edit">\n                                <div class="eapps-widget-toolbar-panel-edit-icon">\n                                    <svg width="15px" height="15px" viewBox="0 0 15 15">\n                                        <path d="M11.8409658,5.0838519 C11.9103036,5.1860702 12.0261968,5.24949902 12.1508333,5.25 L12.25,5.25 C13.2164983,5.25 14,6.03350169 14,7 C14,7.96649831 13.2164983,8.75 12.25,8.75 L12.1998265,8.74999536 C12.0487015,8.7505981 11.9123649,8.84088722 11.8528316,8.97979334 C11.7877518,9.12733583 11.817782,9.29295657 11.9216456,9.39918771 L11.9564161,9.43395833 C12.2850259,9.76220278 12.4696678,10.2076171 12.4696678,10.6720833 C12.4696678,11.1365495 12.2850259,11.5819639 11.956875,11.9097495 C11.6286306,12.2383593 11.1832162,12.4230011 10.71875,12.4230011 C10.2542838,12.4230011 9.80886945,12.2383593 9.48085438,11.909979 L9.45042877,11.8795032 C9.33962324,11.7711153 9.1740025,11.7410852 9.02646001,11.8061649 C8.88755388,11.8656983 8.79726477,12.0020348 8.79666667,12.1508333 L8.79666667,12.25 C8.79666667,13.2164983 8.01316498,14 7.04666667,14 C6.08016835,14 5.29666667,13.2164983 5.29666667,12.25 C5.2931854,12.0554921 5.19476641,11.9178878 5.01447022,11.8503365 C4.87266417,11.7877518 4.70704343,11.817782 4.60081229,11.9216456 L4.56604167,11.9564161 C4.23779722,12.2850259 3.79238285,12.4696678 3.32791667,12.4696678 C2.86345048,12.4696678 2.41803612,12.2850259 2.09025055,11.956875 C1.76164072,11.6286306 1.5769989,11.1832162 1.5769989,10.71875 C1.5769989,10.2542838 1.76164072,9.80886945 2.09002104,9.48085438 L2.12049683,9.45042877 C2.22888469,9.33962324 2.25891482,9.1740025 2.1938351,9.02646001 C2.13430173,8.88755388 1.99796517,8.79726477 1.84916667,8.79666667 L1.75,8.79666667 C0.783501688,8.79666667 1.94289029e-16,8.01316498 0,7.04666667 C-1.2952602e-16,6.08016835 0.783501688,5.29666667 1.75,5.29666667 C1.94450787,5.2931854 2.0821122,5.19476641 2.14966349,5.01447022 C2.21224816,4.87266417 2.18221802,4.70704343 2.07835438,4.60081229 L2.04358388,4.56604167 C1.71497406,4.23779722 1.53033223,3.79238285 1.53033223,3.32791667 C1.53033223,2.86345048 1.71497406,2.41803612 2.043125,2.09025055 C2.37136945,1.76164072 2.81678382,1.5769989 3.28125,1.5769989 C3.74571618,1.5769989 4.19113055,1.76164072 4.51914562,2.09002104 L4.54957123,2.12049683 C4.66037676,2.22888469 4.8259975,2.25891482 4.96780355,2.19633016 C5.00517877,2.17983498 5.04407976,2.16735698 5.0838519,2.15903418 C5.1860702,2.08969644 5.24949902,1.97380324 5.25,1.84916667 L5.25,1.75 C5.25,0.783501688 6.03350169,1.94289029e-16 7,0 C7.96649831,0 8.75,0.783501688 8.75,1.75 L8.74999536,1.80017349 C8.7505981,1.9512985 8.84088722,2.08763507 8.98552978,2.14966349 C9.12733583,2.21224816 9.29295657,2.18221802 9.39918771,2.07835438 L9.43395833,2.04358388 C9.76220278,1.71497406 10.2076171,1.53033223 10.6720833,1.53033223 C11.1365495,1.53033223 11.5819639,1.71497406 11.9097495,2.043125 C12.2383593,2.37136945 12.4230011,2.81678382 12.4230011,3.28125 C12.4230011,3.74571618 12.2383593,4.19113055 11.909979,4.51914562 L11.8795032,4.54957123 C11.7711153,4.66037676 11.7410852,4.8259975 11.8036698,4.96780355 C11.820165,5.00517877 11.832643,5.04407976 11.8409658,5.0838519 Z M5.32570846,3.30839955 C4.77441872,3.50165553 4.15603406,3.36755835 3.72918771,2.94997896 L3.69395833,2.91474945 C3.58454352,2.80521284 3.43607206,2.74366557 3.28125,2.74366557 C3.12642794,2.74366557 2.97795648,2.80521284 2.86808278,2.91520833 C2.75854618,3.02462315 2.6969989,3.17309461 2.6969989,3.32791667 C2.6969989,3.48273873 2.75854618,3.63121018 2.86831229,3.74085438 L2.90783651,3.78042877 C3.3497255,4.23217443 3.47215604,4.90739742 3.23081273,5.45135564 C3.01171177,6.04708399 2.45070951,6.44833064 1.8025,6.46333333 L1.75,6.46333333 C1.4278339,6.46333333 1.16666667,6.72450056 1.16666667,7.04666667 C1.16666667,7.36883277 1.4278339,7.63 1.75,7.63 L1.85149318,7.63000464 C2.46761824,7.63246196 3.02345194,8.00056374 3.26366984,8.56113688 C3.51882271,9.13926925 3.39639217,9.81449224 2.94997896,10.2708123 L2.91474945,10.3060417 C2.80521284,10.4154565 2.74366557,10.5639279 2.74366557,10.71875 C2.74366557,10.8735721 2.80521284,11.0220435 2.91520833,11.1319172 C3.02462315,11.2414538 3.17309461,11.3030011 3.32791667,11.3030011 C3.48273873,11.3030011 3.63121018,11.2414538 3.74085438,11.1316877 L3.78042877,11.0921635 C4.23217443,10.6502745 4.90739742,10.527844 5.45135564,10.7691873 C6.04708399,10.9882882 6.44833064,11.5492905 6.46333333,12.1975 L6.46333333,12.25 C6.46333333,12.5721661 6.72450056,12.8333333 7.04666667,12.8333333 C7.36883277,12.8333333 7.63,12.5721661 7.63,12.25 L7.63000464,12.1485068 C7.63246196,11.5323818 8.00056374,10.9765481 8.56113688,10.7363302 C9.13926925,10.4811773 9.81449224,10.6036078 10.2708123,11.050021 L10.3060417,11.0852505 C10.4154565,11.1947872 10.5639279,11.2563344 10.71875,11.2563344 C10.8735721,11.2563344 11.0220435,11.1947872 11.1319172,11.0847917 C11.2414538,10.9753769 11.3030011,10.8269054 11.3030011,10.6720833 C11.3030011,10.5172613 11.2414538,10.3687898 11.1316877,10.2591456 L11.0921635,10.2195712 C10.6502745,9.76782557 10.527844,9.09260258 10.7829968,8.51447022 C11.0232147,7.95389707 11.5790484,7.58579529 12.1975,7.58333333 L12.25,7.58333333 C12.5721661,7.58333333 12.8333333,7.3221661 12.8333333,7 C12.8333333,6.6778339 12.5721661,6.41666667 12.25,6.41666667 L12.1485068,6.41666203 C11.5323818,6.41420471 10.9765481,6.04610293 10.7338351,5.47979334 C10.7127093,5.43050161 10.6985296,5.37864558 10.6916004,5.32570846 C10.4983445,4.77441872 10.6324417,4.15603406 11.050021,3.72918771 L11.0852505,3.69395833 C11.1947872,3.58454352 11.2563344,3.43607206 11.2563344,3.28125 C11.2563344,3.12642794 11.1947872,2.97795648 11.0847917,2.86808278 C10.9753769,2.75854618 10.8269054,2.6969989 10.6720833,2.6969989 C10.5172613,2.6969989 10.3687898,2.75854618 10.2591456,2.86831229 L10.2195712,2.90783651 C9.76782557,3.3497255 9.09260258,3.47215604 8.52020666,3.21949823 C7.95389707,2.97678527 7.58579529,2.42095158 7.58333333,1.8025 L7.58333333,1.75 C7.58333333,1.4278339 7.3221661,1.16666667 7,1.16666667 C6.6778339,1.16666667 6.41666667,1.4278339 6.41666667,1.75 L6.41666203,1.85149318 C6.41420471,2.46761824 6.04610293,3.02345194 5.47979334,3.2661649 C5.43050161,3.2872907 5.37864558,3.3014704 5.32570846,3.30839955 Z M7,9.33333333 C5.71133558,9.33333333 4.66666667,8.28866442 4.66666667,7 C4.66666667,5.71133558 5.71133558,4.66666667 7,4.66666667 C8.28866442,4.66666667 9.33333333,5.71133558 9.33333333,7 C9.33333333,8.28866442 8.28866442,9.33333333 7,9.33333333 Z M7,8.16666667 C7.64433221,8.16666667 8.16666667,7.64433221 8.16666667,7 C8.16666667,6.35566779 7.64433221,5.83333333 7,5.83333333 C6.35566779,5.83333333 5.83333333,6.35566779 5.83333333,7 C5.83333333,7.64433221 6.35566779,8.16666667 7,8.16666667 Z"></path>\n                                    </svg>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-edit-label">Edit widget</div>\n                            </div>\n                        </a>\n                        \n                        <div class="eapps-widget-toolbar-panel-views eapps-widget-toolbar-panel-views-').concat(item.usageStatus(), 
        '">\n                            <div class="eapps-widget-toolbar-panel-views-label">Views</div>\n                            \n                            <div class="eapps-widget-toolbar-panel-views-bar">\n                                <div class="eapps-widget-toolbar-panel-views-bar-inner" style="width:').concat(item.percentage, '%"></div>\n                            </div>\n                            \n                            <div class="eapps-widget-toolbar-panel-views-percent">').concat(Math.round(item.percentage), 
        '%</div>\n                        </div>\n                        \n                        <a href="').concat(testMiddlewares, "/panel/applications/").concat(item.app, "/?show_pricing=true&utm_source=clients&utm_medium=user-panel&utm_campaign=extend-limits&utm_content=").concat(item.app, "&utm_term=").concat(item.websiteUrl, '" target="_blank" style="display:').concat(item.percentage >= 90 ? "block" : "none", '">\n                            <div class="eapps-widget-toolbar-panel-views-get-more">\n                                Extend Limit\n                            </div>\n                        </a>\n                    </div>\n                    \n                    <div class="eapps-widget-toolbar-panel-share" style="display:').concat(item.percentage < 
        90 ? "inline-flex" : "none", '">\n                        <div class="eapps-widget-toolbar-panel-share-button">\n                            <svg width="12px" height="12px" viewBox="0 0 24 24">\n                                <path id="XMLID_31_" d="M12.7,15.3c-4.5,0.1-8.4,2.5-10.7,6c-0.2,0.3-0.6,0.5-0.9,0.5c-0.1,0-0.2,0-0.3,0c-0.5-0.1-0.8-0.6-0.8-1c0,0,0-0.1,0-0.1c0-7.1,5.7-12.9,12.7-13V5.5c0-0.5,0.3-0.9,0.7-1.1c0.2-0.1,0.4-0.1,0.6-0.1c0.3,0,0.5,0.1,0.7,0.2l8.8,6c0.3,0.2,0.5,0.6,0.5,0.9c0,0.4-0.2,0.7-0.5,1l-8.8,6.1c-0.2,0.2-0.5,0.2-0.7,0.2c-0.2,0-0.4,0-0.6-0.1c-0.4-0.2-0.7-0.7-0.7-1.1V15.3z"></path>\n                            </svg>\n                            \n                            <span>Share</span>\n                        </div>\n                        \n                        <div class="eapps-widget-toolbar-panel-share-block">\n                            <div class="eapps-widget-toolbar-panel-share-block-text">\n                                <div class="eapps-widget-toolbar-panel-share-block-text-icon">\u00f0\u0178\u201d\u00a5</div>\n                                Tell your customers about<br>new website functionality!\n                            </div>\n                            \n                            <div class="eapps-widget-toolbar-panel-share-block-actions">\n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-facebook eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="javascript:void(0)"\n                                       onclick="window.open(\'http://www.facebook.com/sharer.php?u=').concat(encodeURIComponent(item.websiteUrl), 
        '\', \'facebook\', \'width=555,height=640,toolbar=0,status=0\'); return false;"\n                                       target="_blank" title="Share on Facebook">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M234.747 554.565V346.624h152.512v-81.02C387.259 125.893 492.2.068 621.186.068h168.068v207.918H621.186c-18.412 0-39.85 22.329-39.85 55.801v82.826h207.918v207.929H581.336v469.39H387.247V554.564H234.746z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-twitter eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="https://twitter.com/share?url=').concat(encodeURIComponent(item.websiteUrl), 
        '&via=elfsight&text=Now my site is cool as ever with a widget by Elfsight from https://elfsight.com/"\n                                       onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;"\n                                       target="_blank" title="Share on Twitter">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M912.964 321.322c13.032 289.559-202.954 612.433-585.152 612.433-116.254 0-224.521-34.104-315.596-92.559 109.203 12.898 218.206-17.38 304.798-85.227-90.111-1.646-166.12-61.158-192.344-142.973 32.258 6.181 64.008 4.388 92.974-3.532-98.995-19.869-167.378-109.096-165.13-204.452 27.789 15.427 59.512 24.699 93.255 25.742-91.676-61.278-117.633-182.336-63.713-274.868C183.633 280.463 335.317 362.425 506.4 370.988c-29.983-128.778 67.66-252.779 200.585-252.779 59.204 0 112.682 25.006 150.238 65.011 46.882-9.232 90.927-26.384 130.744-49.959-15.386 48.059-48.046 88.438-90.526 113.926 41.61-4.977 81.307-16.069 118.208-32.445-27.562 41.316-62.456 77.574-102.688 106.581z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-google eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="https://plus.google.com/share?url=').concat(encodeURIComponent(item.websiteUrl), 
        '"\n                                       onclick="javascript:window.open(this.href, \'google+\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480\');return false;"\n                                       target="_blank" title="Share on Google+">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M327.072 448.23v127.536s123.72-.164 174.097-.164c-27.28 82.677-69.698 127.7-174.097 127.7-105.651 0-188.112-85.65-188.112-191.302s82.461-191.302 188.112-191.302c55.861 0 91.937 19.633 125.029 47.001 26.49-26.49 24.274-30.264 91.669-93.908-57.209-52.071-133.245-83.815-216.695-83.815C149.223 189.976 5.051 334.151 5.051 512s144.175 322.024 322.024 322.024c265.837 0 330.813-231.474 309.271-385.793H327.072zm580.285 6.38V343.018h-79.709V454.61H712.866v79.709h114.782v114.782h79.709V534.319h111.592V454.61H907.357z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>');
        /** @type {!Element} */
        var foElm = n.body.children[0];
        target.classList.add("eapps-widget", "eapps-widget-show-toolbar");
        target.appendChild(foElm);
      };
      /**
       * @return {undefined}
       */
      self.initWidgetsFromBuffer = function() {
        if (sections && sections.length) {
          sections.forEach(function(account) {
            if (!account.initialized) {
              /** @type {boolean} */
              account.initialized = true;
              self.initWidget(account.element, account.config);
            }
          });
        }
      };
      self.initialize();
    };
    /** @type {function(!Object): undefined} */
    module.exports = Calendar;
  }).call(gen34_options, function() {
    return this;
  }());
}, function(module, canCreateDiscussions, require) {
  var BaseOverlay = require(63);
  /**
   * @return {undefined}
   */
  var test = function() {
    var options = this;
    /** @type {null} */
    options.timeout = null;
    /** @type {!Array} */
    options.buffer = [];
    /** @type {!Array} */
    options.steps = [];
    /**
     * @return {?}
     */
    options.facade = function() {
      return new BaseOverlay(options);
    };
    /**
     * @return {undefined}
     */
    options.send = function() {
      if (options.timeout) {
        clearTimeout(options.timeout);
      }
      /** @type {number} */
      options.timeout = setTimeout(function() {
        if (options.buffer && options.buffer.length) {
          options.buffer.forEach(function(self) {
            if (options.steps && !options.steps.length) {
              options.steps.push({
                app : self.app,
                widgetId : self.widgetId,
                event : self.event,
                count : self.count
              });
            } else {
              /** @type {boolean} */
              var n = false;
              options.steps.forEach(function(obj, name) {
                if (obj.app == self.app && obj.widgetId == self.widgetId && obj.event == self.event) {
                  options.steps[name].count += self.count;
                  /** @type {boolean} */
                  n = true;
                }
              });
              if (!n) {
                options.steps.push({
                  app : self.app,
                  widgetId : self.widgetId,
                  event : self.event,
                  count : self.count
                });
              }
            }
          });
          /** @type {!Array} */
          options.dataToSend = [];
          options.steps.forEach(function(scope) {
            options.dataToSend.push({
              a : scope.app,
              w : scope.widgetId,
              e : scope.event,
              c : scope.count
            });
          });
          /** @type {!XMLHttpRequest} */
          var mxhr = new XMLHttpRequest;
          mxhr.open("POST", "https://eapps-analytics.elfsight.com/store", true);
          mxhr.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
          mxhr.send(btoa(JSON.stringify(options.dataToSend)));
          /** @type {!Array} */
          options.dataToSend = [];
          /** @type {!Array} */
          options.buffer = [];
          /** @type {!Array} */
          options.steps = [];
        }
      }, 2500);
    };
    /**
     * @param {?} canonicalDir
     * @return {undefined}
     */
    options.store = function(canonicalDir) {
    };
  };
  /** @type {function(): undefined} */
  module.exports = test;
}, function(module, canCreateDiscussions) {
  /**
   * @param {!Object} object
   * @return {undefined}
   */
  var createStore = function(object) {
    var dg_el = this;
    /**
     * @param {?} canonicalDir
     * @return {undefined}
     */
    dg_el.store = function(canonicalDir) {
    };
  };
  /** @type {function(!Object): undefined} */
  module.exports = createStore;
}, function(module, canCreateDiscussions, traverse) {
  var result = traverse(65);
  if ("string" == typeof result) {
    /** @type {!Array} */
    result = [[module.id, result, ""]];
  }
  traverse(67)(result, {});
  if (result.locals) {
    module.exports = result.locals;
  }
}, function(module, results, saveNotifs) {
  results = module.exports = saveNotifs(66)();
  results.push([module.id, 'div.eapps-widget{position:relative}div.eapps-widget.eapps-widget-show-toolbar:before{position:absolute;content:"";display:block;bottom:0;top:0;left:0;right:0;pointer-events:none;border:1px solid transparent;transition:border .3s ease;z-index:1}.eapps-widget-toolbar{position:absolute;top:-32px;left:0;right:0;display:block;z-index:99999;padding-bottom:4px;transition:all .3s ease;pointer-events:none;opacity:0}.eapps-widget:hover .eapps-widget-toolbar{opacity:1;pointer-events:auto}.eapps-widget-toolbar a{text-decoration:none;box-shadow:none!important}.eapps-widget-toolbar-panel{border-radius:6px;background-color:#222;color:#fff;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;top:0;position:relative;transition:all .3s ease;opacity:0;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 0 0 1px hsla(0,0%,100%,.2);height:28px}.eapps-widget:hover .eapps-widget-toolbar-panel{opacity:1}.eapps-widget-toolbar-panel-wrapper{width:100%;position:relative}.eapps-widget-toolbar-panel-only-you{position:absolute;top:-24px;font-size:11px;line-height:14px;color:#9c9c9c;padding:5px 4px}.eapps-widget-toolbar-panel-logo{width:28px;height:28px;border-right:1px solid hsla(0,0%,100%,.2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.eapps-widget-toolbar-panel-logo svg{display:block;width:15px;height:15px;fill:#f93262}.eapps-widget-toolbar-panel-edit{font-size:12px;font-weight:400;line-height:14px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding:9px;border-right:1px solid hsla(0,0%,100%,.2);color:#fff;text-decoration:none}.eapps-widget-toolbar-panel-edit-icon{width:14px;height:14px;margin-right:8px}.eapps-widget-toolbar-panel-edit-icon svg{display:block;width:100%;height:100%;fill:#fff}.eapps-widget-toolbar-panel-views{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-views-label{font-size:12px;font-weight:400;line-height:14px;margin-left:8px}.eapps-widget-toolbar-panel-views-bar{display:-ms-inline-flexbox;display:inline-flex;width:70px;height:3px;border-radius:2px;margin-left:8px;background-color:hsla(0,0%,100%,.3)}.eapps-widget-toolbar-panel-views-bar-inner{border-radius:2px;background-color:#4ad504}.eapps-widget-toolbar-panel-views-green .eapps-widget-toolbar-panel-views-bar-inner{background-color:#4ad504}.eapps-widget-toolbar-panel-views-red .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ff4734}.eapps-widget-toolbar-panel-views-orange .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ffb400}.eapps-widget-toolbar-panel-views-percent{display:-ms-inline-flexbox;display:inline-flex;margin-left:8px;margin-right:8px;font-size:12px;font-weight:400;line-height:14px}.eapps-widget-toolbar-panel-views-get-more{padding:9px 16px;background-color:#f93262;color:#fff;font-size:12px;font-weight:400;border-radius:0 6px 6px 0}.eapps-widget-toolbar-panel-share{position:absolute;top:0;display:inline-block;margin-left:8px;width:83px;height:28px;padding-bottom:4px;box-sizing:content-box!important}.eapps-widget-toolbar-panel-share:hover .eapps-widget-toolbar-panel-share-block{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-button{padding:0 18px;height:28px;background-color:#1c91ff;color:#fff;font-size:12px;font-weight:400;border-radius:6px;position:absolute;top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;cursor:default;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-share-button svg{display:inline-block;margin-right:6px;fill:#fff;position:relative;top:-1px}.eapps-widget-toolbar-panel-share-block{position:absolute;background:#fff;border:1px solid hsla(0,0%,7%,.1);border-radius:10px;width:209px;top:32px;transform:translateX(-63px);opacity:0;pointer-events:none;transition:all .3s ease;box-shadow:0 4px 6px rgba(0,0,0,.05)}.eapps-widget-toolbar-panel-share-block:hover{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-block-text{color:#111;font-size:15px;font-weight:400;padding:12px 0;text-align:center}.eapps-widget-toolbar-panel-share-block-text-icon{padding-bottom:4px}.eapps-widget-toolbar-panel-share-block-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid hsla(0,0%,7%,.1)}.eapps-widget-toolbar-panel-share-block-actions-item{width:33.333333%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:39px;transition:all .3s ease;background-color:transparent}.eapps-widget-toolbar-panel-share-block-actions-item:hover{background-color:#fafafa}.eapps-widget-toolbar-panel-share-block-actions-item a{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-share-block-actions-item-icon{width:16px;height:16px;display:block}.eapps-widget-toolbar-panel-share-block-actions-item-facebook .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#3c5a9b}.eapps-widget-toolbar-panel-share-block-actions-item-twitter .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#1ab2e8}.eapps-widget-toolbar-panel-share-block-actions-item-google .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#dd4b39}.eapps-widget-toolbar-panel-share-block-actions-item:not(:last-child){border-right:1px solid hsla(0,0%,7%,.1)}', 
  ""]);
}, function(mixin, canCreateDiscussions) {
  /**
   * @return {?}
   */
  mixin.exports = function() {
    /** @type {!Array} */
    var e = [];
    return e.toString = function() {
      /** @type {!Array} */
      var parts = [];
      /** @type {number} */
      var i = 0;
      for (; i < this.length; i++) {
        var m = this[i];
        if (m[2]) {
          parts.push("@media " + m[2] + "{" + m[1] + "}");
        } else {
          parts.push(m[1]);
        }
      }
      return parts.join("");
    }, e.i = function(n, a) {
      if ("string" == typeof n) {
        /** @type {!Array} */
        n = [[null, n, ""]];
      }
      var map = {};
      /** @type {number} */
      var i = 0;
      for (; i < this.length; i++) {
        var pid = this[i][0];
        if ("number" == typeof pid) {
          /** @type {boolean} */
          map[pid] = true;
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < n.length; i++) {
        var b = n[i];
        if (!("number" == typeof b[0] && map[b[0]])) {
          if (a && !b[2]) {
            /** @type {string} */
            b[2] = a;
          } else {
            if (a) {
              /** @type {string} */
              b[2] = "(" + b[2] + ") and (" + a + ")";
            }
          }
          e.push(b);
        }
      }
    }, e;
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!NodeList} styles
   * @param {!Object} options
   * @return {undefined}
   */
  function add(styles, options) {
    /** @type {number} */
    var i = 0;
    for (; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];
      if (domStyle) {
        domStyle.refs++;
        /** @type {number} */
        var j = 0;
        for (; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
        for (; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j], options));
        }
      } else {
        /** @type {!Array} */
        var parts = [];
        /** @type {number} */
        j = 0;
        for (; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j], options));
        }
        stylesInDom[item.id] = {
          id : item.id,
          refs : 1,
          parts : parts
        };
      }
    }
  }
  /**
   * @param {!Object} input
   * @return {?}
   */
  function render(input) {
    /** @type {!Array} */
    var ret = [];
    var newStyles = {};
    /** @type {number} */
    var i = 0;
    for (; i < input.length; i++) {
      var item = input[i];
      var id = item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = {
        css : css,
        media : media,
        sourceMap : sourceMap
      };
      if (newStyles[id]) {
        newStyles[id].parts.push(part);
      } else {
        ret.push(newStyles[id] = {
          id : id,
          parts : [part]
        });
      }
    }
    return ret;
  }
  /**
   * @param {!Object} options
   * @param {(Node|Window)} styleElement
   * @return {undefined}
   */
  function insertStyleElement(options, styleElement) {
    var head = getHeadElement();
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
    if ("top" === options.insertAt) {
      if (lastStyleElementInsertedAtTop) {
        if (lastStyleElementInsertedAtTop.nextSibling) {
          head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
          head.appendChild(styleElement);
        }
      } else {
        head.insertBefore(styleElement, head.firstChild);
      }
      styleElementsInsertedAtTop.push(styleElement);
    } else {
      if ("bottom" !== options.insertAt) {
        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
      }
      head.appendChild(styleElement);
    }
  }
  /**
   * @param {!Node} styleElement
   * @return {undefined}
   */
  function removeStyleElement(styleElement) {
    styleElement.parentNode.removeChild(styleElement);
    /** @type {number} */
    var idx = styleElementsInsertedAtTop.indexOf(styleElement);
    if (idx >= 0) {
      styleElementsInsertedAtTop.splice(idx, 1);
    }
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function createStyleElement(options) {
    /** @type {!Element} */
    var styleElement = document.createElement("style");
    return styleElement.type = "text/css", insertStyleElement(options, styleElement), styleElement;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function createLinkElement(options) {
    /** @type {!Element} */
    var styleElement = document.createElement("link");
    return styleElement.rel = "stylesheet", insertStyleElement(options, styleElement), styleElement;
  }
  /**
   * @param {!Function} obj
   * @param {!Object} options
   * @return {?}
   */
  function addStyle(obj, options) {
    var style;
    var update;
    var remove;
    if (options.singleton) {
      /** @type {number} */
      var key = connectionId++;
      style = singleton || (singleton = createStyleElement(options));
      update = applyToSingletonTag.bind(null, style, key, false);
      remove = applyToSingletonTag.bind(null, style, key, true);
    } else {
      if (obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa) {
        style = createLinkElement(options);
        update = updateLink.bind(null, style);
        /**
         * @return {undefined}
         */
        remove = function() {
          removeStyleElement(style);
          if (style.href) {
            URL.revokeObjectURL(style.href);
          }
        };
      } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);
        /**
         * @return {undefined}
         */
        remove = function() {
          removeStyleElement(style);
        };
      }
    }
    return update(obj), function(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
          return;
        }
        update(obj = newObj);
      } else {
        remove();
      }
    };
  }
  /**
   * @param {!Node} me
   * @param {?} index
   * @param {boolean} remove
   * @param {!Object} obj
   * @return {undefined}
   */
  function applyToSingletonTag(me, index, remove, obj) {
    var css = remove ? "" : obj.css;
    if (me.styleSheet) {
      me.styleSheet.cssText = replaceText(index, css);
    } else {
      /** @type {!Text} */
      var style = document.createTextNode(css);
      var items = me.childNodes;
      if (items[index]) {
        me.removeChild(items[index]);
      }
      if (items.length) {
        me.insertBefore(style, items[index]);
      } else {
        me.appendChild(style);
      }
    }
  }
  /**
   * @param {!Node} styleElement
   * @param {!Object} obj
   * @return {undefined}
   */
  function applyToTag(styleElement, obj) {
    var css = obj.css;
    var media = obj.media;
    if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      for (; styleElement.firstChild;) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }
  /**
   * @param {!Object} obj
   * @param {!Object} options
   * @return {undefined}
   */
  function updateLink(obj, options) {
    var r = options.css;
    var map = options.sourceMap;
    if (map) {
      /** @type {string} */
      r = r + ("\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(map)))) + " */");
    }
    /** @type {!Blob} */
    var file = new Blob([r], {
      type : "text/css"
    });
    var url = obj.href;
    /** @type {string} */
    obj.href = URL.createObjectURL(file);
    if (url) {
      URL.revokeObjectURL(url);
    }
  }
  var stylesInDom = {};
  /**
   * @param {!Function} hasher
   * @return {?}
   */
  var memoize = function(hasher) {
    var s;
    return function() {
      return "undefined" == typeof s && (s = hasher.apply(this, arguments)), s;
    };
  };
  var isOldIE = memoize(function() {
    return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
  });
  var getHeadElement = memoize(function() {
    return document.head || document.getElementsByTagName("head")[0];
  });
  /** @type {null} */
  var singleton = null;
  /** @type {number} */
  var connectionId = 0;
  /** @type {!Array} */
  var styleElementsInsertedAtTop = [];
  /**
   * @param {!Object} name
   * @param {!Object} options
   * @return {?}
   */
  mixin.exports = function(name, options) {
    options = options || {};
    if ("undefined" == typeof options.singleton) {
      options.singleton = isOldIE();
    }
    if ("undefined" == typeof options.insertAt) {
      /** @type {string} */
      options.insertAt = "bottom";
    }
    var val = render(name);
    return add(val, options), function(url) {
      /** @type {!Array} */
      var m = [];
      /** @type {number} */
      var i = 0;
      for (; i < val.length; i++) {
        var signature = val[i];
        var item = stylesInDom[signature.id];
        item.refs--;
        m.push(item);
      }
      if (url) {
        var html = render(url);
        add(html, options);
      }
      /** @type {number} */
      i = 0;
      for (; i < m.length; i++) {
        item = m[i];
        if (0 === item.refs) {
          /** @type {number} */
          var i = 0;
          for (; i < item.parts.length; i++) {
            item.parts[i]();
          }
          delete stylesInDom[item.id];
        }
      }
    };
  };
  var replaceText = function() {
    /** @type {!Array} */
    var values = [];
    return function(i, n) {
      return values[i] = n, values.filter(Boolean).join("\n");
    };
  }();
}]);
