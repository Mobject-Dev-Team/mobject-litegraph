/**
 * MIT License
 *
 * Copyright (c) 2024 benhar-dev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Third Party Licenses
 * --------------------
 *
 * MIT License
 * 
 * Copyright (C) 2013 by Javi Agenjo
 * Copyright (C) 2022 by atlasan
 * Copyright (C) 2024 by Daniel Lewis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateMethodInitSpec(e, a) {
  _checkPrivateRedeclaration(e, a), a.add(e);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * Class representing a link object that stores link information between two nodes.
 */
var LLink = /*#__PURE__*/function () {
  /**
   * Create a link object.
   * @param {string} id - The unique identifier of the link.
   * @param {string} type - The type of the link.
   * @param {string} origin_id - The identifier of the origin node.
   * @param {string} origin_slot - The slot of the origin node the link is connected to.
   * @param {string} target_id - The identifier of the target node.
   * @param {string} target_slot - The slot of the target node the link is connected to.
   */
  function LLink(id, type, origin_id, origin_slot, target_id, target_slot) {
    _classCallCheck(this, LLink);
    this.id = id;
    this.type = type;
    this.origin_id = origin_id;
    this.origin_slot = origin_slot;
    this.target_id = target_id;
    this.target_slot = target_slot;
    this._data = null;
    this._pos = new Float32Array(2); // center
  }

  /**
   * Configure the link object with new data.
   * @param {Array|Object} o - An array or object containing link data to configure.
   */
  return _createClass(LLink, [{
    key: "configure",
    value: function configure(o) {
      if (o.constructor === Array) {
        this.id = o[0];
        this.origin_id = o[1];
        this.origin_slot = o[2];
        this.target_id = o[3];
        this.target_slot = o[4];
        this.type = o[5];
      } else {
        this.id = o.id;
        this.type = o.type;
        this.origin_id = o.origin_id;
        this.origin_slot = o.origin_slot;
        this.target_id = o.target_id;
        this.target_slot = o.target_slot;
      }
    }

    /**
     * Serialize the link object to an array.
     * @returns {Array} An array containing the serialized link data.
     */
  }, {
    key: "serialize",
    value: function serialize() {
      return [this.id, this.origin_id, this.origin_slot, this.target_id, this.target_slot, this.type];
    }
  }]);
}();

/**
 * WIP
 * intended to replace direct (single) assignment of callbacks [ event entrypoint ]
 */
var CallbackHandler = /*#__PURE__*/function () {
  function CallbackHandler(ref) {
    _classCallCheck(this, CallbackHandler);
    _defineProperty(this, "debug", false);
    /**
     * subscribe callbacks for events
     * @method registerCallbackHandler
     * @param {string} name event name to register to
     * @param {function} callback function to call when processing the event name
     * @param {object} opts options for registerCallBackHandler
     * @param {number} opts.priority default handler as 0, lesser value executes after, greater value will be execute before but their value eventually overridden in case if not stopping the chain
     * @param {boolean} opts.is_default original library handlers would have true, while custom registered has choice to be eventually treathed as such
     * @returns {number} the id of the handler for the specified name
     */
    _defineProperty(this, "registerCallbackHandler", function (name, callback, opts) {
      if (!opts || _typeof(opts) !== "object") opts = {};
      var def_opts = {
        priority: 0,
        is_default: false,
        call_once: false
      };
      opts = Object.assign(def_opts, opts);
      if (typeof callback !== "function") {
        if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_error("registerCallbackHandler", "Invalid callback");
        return false;
      }
      if (typeof this.callbacks_handlers[name] === "undefined") {
        this.callbacks_handlers[name] = {
          last_id: 0,
          handlers: []
        };
      }
      var h_id = this.callbacks_handlers[name].last_id++;
      if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_debug("registerCallbackHandler", "new callback handler", name, h_id);
      this.callbacks_handlers[name].handlers.push({
        id: h_id,
        priority: opts.priority,
        callback: callback,
        data: opts // enqueue passed options, can store info in here
      });

      // sort descending
      this.callbacks_handlers[name].handlers.sort(function (a, b) {
        return b.priority - a.priority;
      });

      // if (typeof(this)=="object" && typeof(this.debug)!=="undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose("registerCallbackHandler","sorted",this.callbacks_handlers[name]);

      return h_id; // return the cbhandle id
    });
    this.callbacks_handlers = {};
    this.ob_ref = ref;
    if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_debug("CallbackHandler Initialize callbacks", ref);
  }
  return _createClass(CallbackHandler, [{
    key: "unregisterCallbackHandler",
    value:
    /**
     * 
     * @param {string} name event name to unregister from
     * @param {number} h_id the handler pointer, need to be saved when registering the callback
     * @returns {boolean} true if found
     */
    function unregisterCallbackHandler(name, h_id) {
      // if (typeof(this)=="object" && typeof(this.debug)!=="undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose("unregisterCallbackHandler","Checking in handlers",this.callbacks_handlers,name,h_id);
      if (typeof this.callbacks_handlers[name] !== "undefined") {
        var nHandlers = this.callbacks_handlers[name].handlers.length;
        this.callbacks_handlers[name].handlers = this.callbacks_handlers[name].handlers.filter(function (obj) {
          // if (typeof(this)=="object" && typeof(this.debug)!=="undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose("unregisterCallbackHandler","Checking handle",obj.id,h_id);
          if (obj.id === h_id) {
            LiteGraph.log_info("unregisterCallbackHandler", name, h_id);
          }
          return obj.id !== h_id;
        });
        if (this.callbacks_handlers[name].handlers.length < nHandlers) {
          return true;
        }
      }
      LiteGraph.log_warn("unregisterCallbackHandler", "no handlers for", name, h_id);
      return false;
    }

    /**
     * Executes the callbacks and cache their result
     * execution if from higher priority down
     * handler data is passed as first argument, than all the additional pars passed to this
     * @param {string} name the event name for which execute the callbacks registered to
     * @param {object} opts specify the option here
     * @param {object} opts.def_cb can specify a callback here to be treated as default callback, executed after the >= 0, eventually prevented
     * @returns {null|boolean|object} get back default result, and along the chain
     */
  }, {
    key: "processCallbackHandlers",
    value: function processCallbackHandlers(name, opts /*, .. arguments */) {
      if (!opts || _typeof(opts) !== "object") opts = {};
      var def_opts = {
        // WIP :: think try and implement options
        // process: "all", return: "first_result", skip_null_return: true, append_last_return: false
        // min_piority: false, max_priority: false
        def_cb: false // the [default] callback : in LG this is the previous(current) function called when an event is executed, can be undefined or null
      };
      opts = Object.assign(def_opts, opts);
      var cbHandle = this;
      if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose.apply(LiteGraph, ["**processCallbackHandlers**"].concat(Array.prototype.slice.call(arguments)));

      // ensure callback name is present on this
      if (typeof this.callbacks_handlers[name] == "undefined") {
        this.callbacks_handlers[name] = {
          last_id: 0,
          handlers: []
        };
      }
      var aArgs = [].slice.call(arguments).slice(2);
      // if (typeof(this)=="object" && typeof(this.debug)!=="undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose("Cleaned arguments (slice 2)",aArgs,"original",arguments);

      // previous implementation of converting arguments
      // using shorter ([].slice.call(arguments)).slice(2)
      // can clean when checked works fine
      // function clean_args(args) {
      //     let aRet = [];
      //     for(let iA=2; iA<args.length; iA++) {
      //         // if(typeof(args[iA])!=="undefined")
      //         aRet.push(args[iA]);
      //     }
      //     return aRet;
      // }
      // var aArgs = clean_args(arguments);

      var stepRet = null; // temp step specific result 
      var cbRet = null; // progressive final result
      var aResChain = []; // progressive results chain
      var oCbInfo = {}; // info passed to the callback
      var cbResPriority = 0; // incremental result priority
      var defCbChecked = false; // flag activated when executed the [default] callback
      var preventDefCb = false; // if to prevent the [default] callback execution (set eventually by some callback result)
      var breakCycle = false; // if to stop callback execution (set eventually by some callback result)

      var executeDefaultCb = function executeDefaultCb() {
        if (!preventDefCb && typeof opts.def_cb == "function") {
          var _opts$def_cb;
          // execute default callback
          if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_verbose.apply(LiteGraph, ["Calling DEFAULT w Args"].concat(_toConsumableArray(aArgs)));
          // stepRet = opts.def_cb(...aArgs); // OLD, not working because of bas THIS 
          // call method on ref object (LiteGraph, LGraphNode, LGraphCanvas, ...) in othe method `this` will than correctly set
          stepRet = (_opts$def_cb = opts.def_cb).call.apply(_opts$def_cb, [cbHandle.ob_ref].concat(_toConsumableArray(aArgs))); // could pass more data
          if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "default callback executed", stepRet);
          checkStepRet();
        } else {
          if (typeof opts.def_cb == "function") {
            if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "preventing default passed", opts.def_cb);
          }
        }
        defCbChecked = true;
      };
      /**
       * called for each callback to push and merge results
       * void
       */
      var checkStepRet = function checkStepRet() {
        aResChain.push(stepRet); // cache result
        // check result for structured object
        if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "checkStepRet", "stepRet check", stepRet);
        if (_typeof(stepRet) == "object") {
          if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "checkStepRet", "result is object", stepRet);
          if (typeof stepRet.prevent_default !== "undefined" && stepRet.prevent_default) {
            preventDefCb = true;
          }
          if (typeof stepRet.return_value !== "undefined") {
            {
              if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "checkStepRet", "set result from object", stepRet, oCbInfo);
              cbRet = stepRet;
            }
          } else {
            if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "checkStepRet", "set result, not object", stepRet, oCbInfo);
            cbRet = stepRet;
          }
          if (typeof stepRet.stop_replication !== "undefined" && stepRet.stop_replication) {
            if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "checkStepRet", "stop_replication", oCbInfo);
            breakCycle = true;
            return; // will break;
          }
        } else {
          if (cbHandle.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "checkStepRet", "result NOT object", stepRet);
          // ? save current result if not null or undefined (?)
          if (stepRet !== null && stepRet !== undefined) {
            cbRet = stepRet; // TODO maybe to remove, leave for current stability
          }
        }
      };
      var _iterator = _createForOfIteratorHelper(this.callbacks_handlers[name].handlers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _cbhX$callback;
          var cbhX = _step.value;
          // eventually prevent cb marked as default
          if (preventDefCb && cbhX.is_default) {
            if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose("processCallbackHandlers", "preventing default registered", cbhX);
            continue;
          }

          // execute default if already processed the ones >= 0
          if (cbhX.priority < 0 && !defCbChecked) {
            if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_verbose("processCallbackHandlers", "process default passed", "nextCb:", cbhX);
            executeDefaultCb();
            if (breakCycle) break;
          }
          oCbInfo = {
            name: name // name of the handler
            ,
            id: cbhX.id // id of the handler for the name
            ,
            current_return_value: cbRet // current temporary value (if >= second call and previous return a value) 
            ,
            data: cbhX.data // pass the priority and the additional data passed
            ,
            results_chain: aResChain
            // opts: def_opts
          };

          // execute callback
          // OLD, not working because of bas THIS : stepRet = cbhX.callback(oCbInfo,...aArgs);
          // call method on ref object (LiteGraph, LGraphNode, LGraphCanvas, ...) in the method `this` will than correctly set
          stepRet = (_cbhX$callback = cbhX.callback).call.apply(_cbhX$callback, [this.ob_ref, oCbInfo].concat(_toConsumableArray(aArgs)));
          if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "callback executed", stepRet, oCbInfo);

          // push result
          checkStepRet();
          if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "result checked", "cbRet", cbRet, "aResChain", aResChain, "cbResPriority", cbResPriority, "defCbChecked", defCbChecked, "preventDefCb", preventDefCb, "breakCycle", breakCycle);
          if (breakCycle) break;
          if (cbhX.data.call_once) {
            this.unregisterCallbackHandler(name, cbhX.id);
            if (_typeof(this) == "object" && typeof this.debug !== "undefined" && this.debug && LiteGraph !== undefined) LiteGraph.log_debug("processCallbackHandlers", "unregistered call_once", oCbInfo);
          }
        } // end cycle

        // recheck for default cb passed after cycling
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!defCbChecked) {
        executeDefaultCb();
      }

      // if(cbRet===null){
      //     // return default true if no callbacks specified a return value
      //     // [ some original LG callback execution checks for boolean return ]
      //     cbRet = true;
      // }
      return cbRet;

      // could return obj instead and there check for values, etc ..
      // TODO would be probably better to always return an object to than check for result and make easier code in implementation
    }
  }]);
}();

/**
 * Class responsible for handling scale and offset transformations for an HTML element,
 * enabling zooming and dragging functionalities.
 */
var DragAndScale = /*#__PURE__*/function () {
  /**
   * Creates an instance of DragAndScale.
   * @param {HTMLElement} element - The HTML element to apply scale and offset transformations.
   * @param {boolean} skip_events - Flag indicating whether to skip binding mouse and wheel events.
   *
   * Rendering:
   * toCanvasContext() is HTMLCanvas, and onredraw is probably also.  The rest is all HTML+CSS+JS
   */

  function DragAndScale(element, skip_events) {
    var _this = this;
    _classCallCheck(this, DragAndScale);
    _defineProperty(this, "onMouseDown", function (event) {
      if (!_this.enabled) {
        return;
      }
      var canvas = _this.element;
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      event.canvasx = x;
      event.canvasy = y;
      event.dragging = _this.dragging;
      var is_inside = !_this.viewport || _this.viewport && x >= _this.viewport[0] && x < _this.viewport[0] + _this.viewport[2] && y >= _this.viewport[1] && y < _this.viewport[1] + _this.viewport[3];
      if (is_inside) {
        _this.dragging = true;
        _this.abortController = new AbortController();
        document.addEventListener("pointermove", _this.onMouseMove, {
          signal: _this.abortController.signal
        });
        document.addEventListener("pointerup", _this.onMouseUp, {
          signal: _this.abortController.signal
        });
      }
      _this.last_mouse[0] = x;
      _this.last_mouse[1] = y;
    });
    _defineProperty(this, "onMouseMove", function (event) {
      if (!_this.enabled) {
        return;
      }
      var canvas = _this.element;
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      event.canvasx = x;
      event.canvasy = y;
      event.dragging = _this.dragging;
      var deltax = x - _this.last_mouse[0];
      var deltay = y - _this.last_mouse[1];
      if (_this.dragging) {
        _this.mouseDrag(deltax, deltay);
      }
      _this.last_mouse[0] = x;
      _this.last_mouse[1] = y;
    });
    _defineProperty(this, "onMouseUp", function (_event) {
      var _this$abortController;
      _this.dragging = false;
      (_this$abortController = _this.abortController) === null || _this$abortController === void 0 || _this$abortController.abort();
    });
    _defineProperty(this, "onWheel", function (event) {
      event.wheel = -event.deltaY;

      // from stack overflow
      event.delta = event.wheelDelta ? event.wheelDelta / 40 : event.deltaY ? -event.deltaY / 3 : 0;
      _this.changeDeltaScale(1.0 + event.delta * 0.05);
    });
    this.offset = new Float32Array([0, 0]);
    this.scale = 1;
    this.max_scale = 10;
    this.min_scale = 0.1;
    this.onredraw = null;
    this.enabled = true;
    this.last_mouse = [0, 0];
    this.element = null;
    this.visible_area = new Float32Array(4);
    if (element) {
      this.element = element;
      if (!skip_events) {
        this.bindEvents(element);
      }
    }
  }

  /**
   * Binds mouse and wheel events to the specified HTML element.
   *
   * @param {HTMLElement} element - The HTML element to bind the events to.
   */
  return _createClass(DragAndScale, [{
    key: "bindEvents",
    value: function bindEvents(element) {
      this.last_mouse = new Float32Array(2);
      element.addEventListener("pointerdown", this.onMouseDown);
      element.addEventListener("wheel", this.onWheel);
    }
  }, {
    key: "computeVisibleArea",
    value:
    /**
     * Computes the visible area of the DragAndScale element based on the viewport.
     *
     * If the element is not set, the visible area will be reset to zero.
     *
     * @param {Array<number>} [viewport] - The viewport configuration to calculate the visible area.
     */
    function computeVisibleArea(viewport) {
      if (!this.element) {
        this.visible_area.set([0, 0, 0, 0]);
        return;
      }
      var width = this.element.width;
      var height = this.element.height;
      var startx = -this.offset[0];
      var starty = -this.offset[1];
      if (viewport) {
        startx += viewport[0] / this.scale;
        starty += viewport[1] / this.scale;
        var _viewport$slice = viewport.slice(2),
          _viewport$slice2 = _slicedToArray(_viewport$slice, 2),
          vpWidth = _viewport$slice2[0],
          vpHeight = _viewport$slice2[1];
        width = vpWidth;
        height = vpHeight;
      }
      var endx = startx + width / this.scale;
      var endy = starty + height / this.scale;
      var coords = [startx, starty, endx - startx, endy - starty];
      this.visible_area.set(coords);
      return coords;
    }

    /**
     * Applies the scale and offset transformations to the given 2D canvas rendering context.
     *
     * @param {CanvasRenderingContext2D} ctx - The 2D canvas rendering context to apply transformations to.
     */
  }, {
    key: "toCanvasContext",
    value: function toCanvasContext(ctx) {
      ctx.scale(this.scale, this.scale);
      ctx.translate(this.offset[0], this.offset[1]);
    }

    /**
     * Converts a position from DragAndScale offset coordinates to canvas coordinates.
     *
     * @param {Array<number>} pos - The position in DragAndScale offset coordinates to convert.
     * @returns {Array<number>} The converted position in canvas coordinates.
     */
  }, {
    key: "convertOffsetToCanvas",
    value: function convertOffsetToCanvas(pos) {
      return [(pos[0] + this.offset[0]) * this.scale, (pos[1] + this.offset[1]) * this.scale];
    }

    /**
     * Converts a position from canvas coordinates to DragAndScale offset coordinates.
     *
     * @param {Array<number>} pos - The position in canvas coordinates to convert.
     * @param {Array<number>} [out=[0, 0]] - The output array to store the converted position in DragAndScale offset coordinates.
     * @returns {Array<number>} The converted position in DragAndScale offset coordinates.
     */
  }, {
    key: "convertCanvasToOffset",
    value: function convertCanvasToOffset(pos) {
      var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
      out[0] = pos[0] / this.scale - this.offset[0];
      out[1] = pos[1] / this.scale - this.offset[1];
      return out;
    }
  }, {
    key: "mouseDrag",
    value: function mouseDrag(x, y) {
      var _this$onredraw;
      this.offset[0] += x / this.scale;
      this.offset[1] += y / this.scale;
      (_this$onredraw = this.onredraw) === null || _this$onredraw === void 0 || _this$onredraw.call(this, this);
    }

    /**
     * Changes the scale of the DragAndScale element to the specified value around the zooming center.
     *
     * @param {number} value - The new scale value to set, clamped between min_scale and max_scale.
     * @param {Array<number>} zooming_center - The center point for zooming, defaulting to the middle of the element.
     */
  }, {
    key: "changeScale",
    value: function changeScale(value, zooming_center) {
      var _this$onredraw2;
      LiteGraph.log_debug("dragandscale", "changeScale", value, zooming_center);
      value = LiteGraph.clamp(value, this.min_scale, this.max_scale);
      if (value == this.scale || !this.element) {
        return;
      }
      var rect = this.element.getBoundingClientRect();
      if (!rect) {
        return;
      }
      zooming_center = zooming_center || [rect.width * 0.5, rect.height * 0.5];
      var center = this.convertCanvasToOffset(zooming_center);
      LiteGraph.log_debug("dragandscale", "changeScale", "center", center);
      this.scale = value;
      if (Math.abs(this.scale - 1) < 0.01) {
        this.scale = 1;
      }
      var new_center = this.convertCanvasToOffset(zooming_center);
      LiteGraph.log_debug("dragandscale", "changeScale", "new center", new_center);
      var delta_offset = [new_center[0] - center[0], new_center[1] - center[1]];
      LiteGraph.log_debug("dragandscale", "changeScale", value, zooming_center);
      this.offset[0] += delta_offset[0];
      this.offset[1] += delta_offset[1];
      (_this$onredraw2 = this.onredraw) === null || _this$onredraw2 === void 0 || _this$onredraw2.call(this, this);
    }

    /**
     * Changes the scale of the DragAndScale element by a delta value relative to the current scale.
     *
     * @param {number} value - The delta value by which to scale the element.
     * @param {Array<number>} zooming_center - The center point for zooming the element.
     */
  }, {
    key: "changeDeltaScale",
    value: function changeDeltaScale(value, zooming_center) {
      this.changeScale(this.scale * value, zooming_center);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.scale = 1;
      this.offset[0] = 0;
      this.offset[1] = 0;
    }
  }]);
}();

var _ContextMenu_brand = /*#__PURE__*/new WeakSet();
var ContextMenu = /*#__PURE__*/function () {
  /**
  * @constructor
  * @param {Array<Object>} values (allows object { title: "Nice text", callback: function ... })
  * @param {Object} options [optional] Some options:\
  * - title: title to show on top of the menu
  * - callback: function to call when an option is clicked, it receives the item information
  * - ignore_item_callbacks: ignores the callback inside the item, it just calls the options.callback
  * - event: you can pass a MouseEvent, this way the ContextMenu appears in that position
  * - isCustomEvent: added to allow not default events
  *
  *   Rendering notes: This is only relevant to rendered graphs, and is rendered using HTML+CSS+JS.
  */
  function ContextMenu(values) {
    var _options$scroll_speed, _options$filter_enabl;
    var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ContextMenu);
    _classPrivateMethodInitSpec(this, _ContextMenu_brand);
    this.options = _options;
    (_options$scroll_speed = _options.scroll_speed) !== null && _options$scroll_speed !== void 0 ? _options$scroll_speed : _options.scroll_speed = 0.1;
    (_options$filter_enabl = _options.filter_enabled) !== null && _options$filter_enabl !== void 0 ? _options$filter_enabl : _options.filter_enabled = true;
    this.menu_elements = [];
    _assertClassBrand(_ContextMenu_brand, this, _linkToParent).call(this);
    _assertClassBrand(_ContextMenu_brand, this, _validateEventClass).call(this);
    _assertClassBrand(_ContextMenu_brand, this, _createRoot).call(this);
    _assertClassBrand(_ContextMenu_brand, this, _bindEvents).call(this);
    this.setTitle(this.options.title);
    this.addItems(values);
    _assertClassBrand(_ContextMenu_brand, this, _insertMenu).call(this);
    _assertClassBrand(_ContextMenu_brand, this, _calculateBestPosition).call(this);
    if (LiteGraph.context_menu_filter_enabled && _options.filter_enabled) {
      this.createFilter(values, _options);
    }
  }
  return _createClass(ContextMenu, [{
    key: "createFilter",
    value: function createFilter(values, options) {
      var _this = this;
      if (!values || !values.length || values.length == 1) return;
      var filter = document.createElement("input");
      filter.classList.add("context-menu-filter");
      filter.placeholder = "Filter list";
      this.root.prepend(filter);
      var items = Array.from(this.root.querySelectorAll(".litemenu-entry"));
      var displayedItems = [].concat(items);
      var itemCount = displayedItems.length;
      console.info(options);

      // We must request an animation frame for the current node of the active canvas to update.
      requestAnimationFrame(function () {
        var _currentNode$widgets;
        var currentNode = options.extra; //LGraphCanvas.active_canvas.current_node;
        var clickedComboValue = currentNode === null || currentNode === void 0 || (_currentNode$widgets = currentNode.widgets) === null || _currentNode$widgets === void 0 || (_currentNode$widgets = _currentNode$widgets.filter(function (w) {
          return w.type === "combo" && w.options.values.length === values.length;
        }).find(function (w) {
          return w.options.values.every(function (v, i) {
            return v === values[i];
          });
        })) === null || _currentNode$widgets === void 0 ? void 0 : _currentNode$widgets.value;
        var selectedIndex = clickedComboValue ? values.findIndex(function (v) {
          return v === clickedComboValue;
        }) : 0;
        if (selectedIndex < 0) {
          selectedIndex = 0;
        }
        var selectedItem = displayedItems[selectedIndex];
        updateSelected();

        // Apply highlighting to the selected item
        function updateSelected() {
          var _selectedItem, _selectedItem2, _selectedItem3, _selectedItem4;
          (_selectedItem = selectedItem) === null || _selectedItem === void 0 || _selectedItem.style.setProperty("background-color", "");
          (_selectedItem2 = selectedItem) === null || _selectedItem2 === void 0 || _selectedItem2.style.setProperty("color", "");
          selectedItem = displayedItems[selectedIndex];
          (_selectedItem3 = selectedItem) === null || _selectedItem3 === void 0 || _selectedItem3.style.setProperty("background-color", "#ccc", "important");
          (_selectedItem4 = selectedItem) === null || _selectedItem4 === void 0 || _selectedItem4.style.setProperty("color", "#000", "important");
        }
        var positionList = function positionList() {
          var rect = _this.root.getBoundingClientRect();

          // If the top is off-screen then shift the element with scaling applied
          if (rect.top < 0) {
            var scale = 1 - _this.root.getBoundingClientRect().height / _this.root.clientHeight;
            var shift = _this.root.clientHeight * scale / 2;
            _this.root.style.top = -shift + "px";
          }
        };

        // Arrow up/down to select items
        filter.addEventListener("keydown", function (event) {
          var _selectedItem5, _selectedItem6;
          switch (event.key) {
            case "ArrowUp":
              event.preventDefault();
              if (selectedIndex === 0) {
                selectedIndex = itemCount - 1;
              } else {
                selectedIndex--;
              }
              updateSelected();
              break;
            case "ArrowRight":
              /* event.preventDefault();
              selectedIndex = itemCount - 1;
              updateSelected(); */
              (_selectedItem5 = selectedItem) === null || _selectedItem5 === void 0 || _selectedItem5.do_click(event); //click();
              break;
            case "ArrowDown":
              event.preventDefault();
              if (selectedIndex === itemCount - 1) {
                selectedIndex = 0;
              } else {
                selectedIndex++;
              }
              updateSelected();
              break;
            case "ArrowLeft":
              var parentMenu = _this.parentMenu;
              _this.close(event, true);
              if (parentMenu) {
                var parentFilter = Array.from(parentMenu.root.querySelectorAll(".context-menu-filter"));
                if (parentFilter && parentFilter.length) {
                  parentFilter[0].style.display = "block";
                  parentFilter[0].focus();
                }
              }
              /* event.preventDefault();
              selectedIndex = 0;
              updateSelected(); */
              break;
            case "Enter":
              (_selectedItem6 = selectedItem) === null || _selectedItem6 === void 0 || _selectedItem6.do_click(event); //click();
              break;
            case "Escape":
              _this.close();
              break;
          }
        });
        filter.addEventListener("input", function () {
          // Hide all items that don't match our filter
          var term = filter.value.toLocaleLowerCase();
          // When filtering, recompute which items are visible for arrow up/down and maintain selection.
          displayedItems = items.filter(function (item) {
            var isVisible = !term || item.textContent.toLocaleLowerCase().includes(term);
            item.style.display = isVisible ? "block" : "none";
            return isVisible;
          });
          selectedIndex = 0;
          if (displayedItems.includes(selectedItem)) {
            selectedIndex = displayedItems.findIndex(function (d) {
              return d === selectedItem;
            });
          }
          itemCount = displayedItems.length;
          updateSelected();

          // If we have an event then we can try and position the list under the source
          if (options.event) {
            var top = options.event.clientY - 10;
            var bodyRect = document.body.getBoundingClientRect();
            var rootRect = _this.root.getBoundingClientRect();
            if (bodyRect.height && top > bodyRect.height - rootRect.height - 10) {
              top = Math.max(0, bodyRect.height - rootRect.height - 10);
            }
            _this.root.style.top = top + "px";
            positionList();
          }
        });
        requestAnimationFrame(function () {
          // Focus the filter box when opening
          filter.focus();
          positionList();
        });
      });
    }

    /**
     * Creates a title element if it doesn't have one.
     * Sets the title of the menu.
     * @param {string} title - The title to be set.
     */
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      var _this$titleElement;
      if (!title) return;
      (_this$titleElement = this.titleElement) !== null && _this$titleElement !== void 0 ? _this$titleElement : this.titleElement = document.createElement("div");
      var element = this.titleElement;
      element.className = "litemenu-title";
      element.innerHTML = title;
      if (!this.root.parentElement) this.root.appendChild(element);
    }

    /**
     * Adds a set of values to the menu.
     * @param {Array<string|object>} values - An array of values to be added.
     */
  }, {
    key: "addItems",
    value: function addItems(values) {
      for (var i = 0; i < values.length; i++) {
        var name = values[i];
        if (typeof name !== 'string') {
          name = name && name.content !== undefined ? String(name.content) : String(name);
        }
        var value = values[i];

        // this.menu_elements.push(this.addItem(name, value, this.options));
        this.addItem(name, value, this.options);
      }
    }
  }, {
    key: "addItem",
    value:
    /**
     * Adds an item to the menu.
     * @param {string} name - The name of the item.
     * @param {object | null} value - The value associated with the item.
     * @param {object} [options={}] - Additional options for the item.
     * @returns {HTMLElement} - The created HTML element representing the added item.
     */
    function addItem(name, value) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // value.callbacks_on_element_created ??= false; 

      LiteGraph.log_verbose.apply(LiteGraph, ["contextmenu", "addItem"].concat(Array.prototype.slice.call(arguments)));
      var element = document.createElement("div");
      element.className = "litemenu-entry submenu";
      var disabled = false;
      var thisItem = element;
      if (value === null) {
        element.classList.add("separator");
      } else {
        var _value$title;
        element.innerHTML = (_value$title = value === null || value === void 0 ? void 0 : value.title) !== null && _value$title !== void 0 ? _value$title : name;
        element.value = value;
        if (value) {
          if (value.disabled) {
            disabled = true;
            element.classList.add("disabled");
          }
          if (value.submenu || value.has_submenu) {
            element.classList.add("has_submenu");
          }
        }
        if (typeof value == "function") {
          element.dataset["value"] = name;
          element.onclick_callback = value;
        } else {
          element.dataset["value"] = value;
        }
        if (value.className) {
          element.className += " " + value.className;
        }
        // execute element additional construction function
        if (typeof value.callbacks_on_element_created !== "undefined") {
          if (typeof value.callbacks_on_element_created == "function") {
            value.callbacks_on_element_created = [value.callbacks_on_element_created];
          }
          var thisMenu = this;
          value.callbacks_on_element_created.forEach(function (fun) {
            if (typeof fun == "function") {
              LiteGraph.log_debug("contextmenu", "addItem", "callbacks_on_element_created", element, fun);
              fun(element, thisMenu);
            }
          });
        }
      }
      this.root.appendChild(element);
      if (!disabled) {
        element.addEventListener("click", handleMenuItemClick);
        element.do_click = function (event, ignore_parent_menu) {
          // LiteGraph.log_verbose("contextmenu", "addItem", "do_click", "handleMenuItemClick", "this", this, "thisItem", thisItem, "event", event, "ignore_parent_menu", ignore_parent_menu);
          if (!event) {
            LiteGraph.log_warn.apply(LiteGraph, ["contextmenu", "addItem", "do_click", "has no event"].concat(Array.prototype.slice.call(arguments)));
          } else if (!event.clientX) {
            LiteGraph.log_warn("contextmenu", "addItem", "do_click", "event has no clientX info", event);
          } else {
            LiteGraph.log_verbose("contextmenu", "addItem", "do_click", "has clientX", event);
          }
          handleMenuItemClick.call(thisItem, event, ignore_parent_menu);
        };
      }
      if (!disabled && options.autoopen) {
        element.addEventListener("pointerenter", function (event) {
          var value = _this2.value;
          if (!value || !value.has_submenu) {
            return;
          }
          // if it is a submenu, autoopen like the item was clicked
          handleMenuItemClick.call(_this2, event);
        });
      }
      var that = this;
      function handleMenuItemClick(event) {
        var _that$current_submenu;
        var value = this.value;
        var closeParent = true;
        LiteGraph.log_debug("contextmenu", "handleMenuItemClick", "process", value, event, options, closeParent, this.current_submenu, this);

        // Close any current submenu
        (_that$current_submenu = that.current_submenu) === null || _that$current_submenu === void 0 || _that$current_submenu.close(event);

        // Hide filter
        var thisFilter = Array.from(that.root.querySelectorAll(".context-menu-filter"));
        if (thisFilter && thisFilter.length) {
          thisFilter[0].style.display = "none";
        }

        // Execute global callback
        if (options.callback) {
          LiteGraph.log_debug("contextmenu", "handleMenuItemClick", "global callback", this, value, options, event, that, options.node);
          var globalCallbackResult = options.callback.call(this, value, options, event, that, options.node);
          if (globalCallbackResult === true) {
            LiteGraph.log_debug("contextmenu", "handleMenuItemClick", "global callback processed, dont close parent?", globalCallbackResult);
            closeParent = false;
          } else {
            LiteGraph.log_debug("contextmenu", "handleMenuItemClick", "global callback processed, will close parent", globalCallbackResult);
          }
        }

        // Handle special cases
        if (value) {
          if (value.callback && !options.ignore_item_callbacks && value.disabled !== true) {
            LiteGraph.log_debug("contextmenu", "handleMenuItemClick", "using value callback and !ignore_item_callbacks", this, value, options, event, that, options.node);
            var itemCallbackResult = value.callback.call(this, value, options, event, that, options.extra);
            if (itemCallbackResult === true) {
              closeParent = false;
            }
          }
          if (value.submenu) {
            LiteGraph.log_debug("contextmenu", "handleMenuItemClick", "SUBMENU", this, value, value.submenu.options, event, that, options);
            if (!value.submenu.options) {
              // throw new Error("contextmenu", "handleMenuItemClick", "submenu needs options");
              LiteGraph.log_warn("contextmenu", "handleMenuItemClick", "SUBMENU", "submenu needs options");
              return;
            }
            // Recursively create submenu
            new that.constructor(value.submenu.options, {
              callback: value.submenu.callback,
              event: event,
              parentMenu: that,
              ignore_item_callbacks: value.submenu.ignore_item_callbacks,
              title: value.submenu.title,
              extra: value.submenu.extra,
              autoopen: options.autoopen
            });
            closeParent = false;
          }
        }

        // Close parent menu if necessary and not locked
        if (closeParent && !that.lock) {
          that.close();
        }
      }

      // push to menu_elements here
      this.menu_elements.push(element);
      return element;
    }

    /**
     * Closes this menu.
     * @param {Event} [e] - The event that triggered the close action.
     * @param {boolean} [ignore_parent_menu=false] - Whether to ignore the parent menu when closing.
     */
  }, {
    key: "close",
    value: function close(e, ignore_parent_menu) {
      var _this$current_submenu;
      if (this.parentMenu && !ignore_parent_menu) {
        this.parentMenu.lock = false;
        this.parentMenu.current_submenu = null;
        if (e === undefined) {
          this.parentMenu.close();
        } else if (e && !ContextMenu.isCursorOverElement(e, this.parentMenu.root)) {
          ContextMenu.trigger(this.parentMenu.root, "pointerleave", e);
        }
      }
      (_this$current_submenu = this.current_submenu) === null || _this$current_submenu === void 0 || _this$current_submenu.close(e, true);
      if (this.root.closing_timer) {
        clearTimeout(this.root.closing_timer);
      }
      if (this.root.parentNode) {
        this.root.parentNode.removeChild(this.root);
      }
    }

    /**
     * Closes all open ContextMenus in the specified window.
     * @param {Window} [ref_window=window] - The window object to search for open menus.
     */
  }, {
    key: "getTopMenu",
    value:
    // returns the top most menu
    function getTopMenu() {
      var _this$options$parentM, _this$options$parentM2;
      return (_this$options$parentM = (_this$options$parentM2 = this.options.parentMenu) === null || _this$options$parentM2 === void 0 ? void 0 : _this$options$parentM2.getTopMenu()) !== null && _this$options$parentM !== void 0 ? _this$options$parentM : this;
    }
  }, {
    key: "getFirstEvent",
    value: function getFirstEvent() {
      var _this$options$parentM3, _this$options$parentM4;
      return (_this$options$parentM3 = (_this$options$parentM4 = this.options.parentMenu) === null || _this$options$parentM4 === void 0 ? void 0 : _this$options$parentM4.getFirstEvent()) !== null && _this$options$parentM3 !== void 0 ? _this$options$parentM3 : this.options.event;
    }
  }], [{
    key: "trigger",
    value:
    /**
     * Triggers an event on the specified element with the given event name and parameters.
     * @param {HTMLElement} element - The element on which to trigger the event.
     * @param {string} event_name - The name of the event to trigger.
     * @param {Object} params - Additional parameters to include in the event.
     * @param {HTMLElement} origin - The origin of the event <currently not supported as CustomEvent can't have a target!>
     * @returns {CustomEvent} - The created CustomEvent instance.
     * @BUG: Probable bug related to params, origin not being configured/populated correctly
     */
    function trigger(element, event_name, params, origin) {
      var evt = new CustomEvent(event_name, {
        bubbles: true,
        cancelable: true,
        detail: params
      });
      Object.defineProperty(evt, 'target', {
        value: origin
      });
      if (element.dispatchEvent) {
        element.dispatchEvent(evt);
      } else if (element.__events) {
        element.__events.dispatchEvent(evt);
      }
      return evt;
    }
  }, {
    key: "isCursorOverElement",
    value: function isCursorOverElement(event, element) {
      return LiteGraph.isInsideRectangle(event.clientX, event.clientY, element.left, element.top, element.width, element.height);
    }
  }]);
}();
function _createRoot() {
  var root = this.root = document.createElement("div");
  if (this.options.className) {
    root.className = this.options.className;
  }
  root.classList.add("litegraph", "litecontextmenu", "litemenubar-panel");
  root.style.minWidth = "80px";
  root.style.minHeight = "10px";
  return root;
}
function _bindEvents() {
  var _this3 = this;
  var root = this.root;
  LiteGraph.log_info("**contextmenu**", "binding events on root", root, this);
  root.style.pointerEvents = "none";
  setTimeout(function () {
    root.style.pointerEvents = "auto";
  }, 100); // delay so the mouse up event is not caught by this element

  // this prevents the default context browser menu to open in case this menu was created when pressing right button
  root.addEventListener("pointerup", function (e) {
    // LiteGraph.log?.("pointerevents: ContextMenu up root prevent");
    e.preventDefault();
    return true;
  });
  root.addEventListener("contextmenu", function (e) {
    if (e.button != 2) {
      // right button
      return false;
    }
    e.preventDefault();
    return false;
  });
  root.addEventListener("pointerdown", function (e) {
    // LiteGraph.log?.("pointerevents: ContextMenu down");
    if (e.button == 2) {
      _this3.close();
      e.preventDefault();
      return true;
    }
  });
  root.addEventListener("wheel", function (e) {
    var pos = parseInt(root.style.top);
    root.style.top = (pos + e.deltaY * _this3.options.scroll_speed).toFixed() + "px";
    e.preventDefault();
    return true;
  });
  root.addEventListener("pointerenter", function (_event) {
    // LiteGraph.log?.("pointerevents: ContextMenu enter");
    if (root.closing_timer) {
      clearTimeout(root.closing_timer);
    }
  });
}
function _linkToParent() {
  var parentMenu = this.options.parentMenu;
  if (!parentMenu) return;
  if (parentMenu.constructor !== this.constructor) {
    LiteGraph.log_error("contextmenu", "linkToParent", "parentMenu must be of class ContextMenu, ignoring it");
    this.options.parentMenu = null;
    return;
  }
  this.parentMenu = parentMenu;
  this.parentMenu.lock = true;
  this.parentMenu.current_submenu = this;
}
function _validateEventClass() {
  if (!this.options.event) return;
  if (this.options.isCustomEvent) {
    LiteGraph.log_verbose("contextmenu", "linkToParent", "Custom event for ContextMenu.", this.options.event);
    return;
  }

  // why should we ignore other events ?
  // use strings because comparing classes between windows doesnt work
  var eventClass = this.options.event.constructor.name;
  if (eventClass !== "MouseEvent" && eventClass !== "CustomEvent" && eventClass !== "PointerEvent") {
    LiteGraph.log_warn("Event passed to ContextMenu is not of type MouseEvent or CustomEvent. Was originally ignoring it. (".concat(eventClass, ")"));
    // this.options.event = null;
  }
}
function _insertMenu() {
  var _this$options$event$t, _this$options$event, _doc$fullscreenElemen;
  var doc = (_this$options$event$t = (_this$options$event = this.options.event) === null || _this$options$event === void 0 ? void 0 : _this$options$event.target.ownerDocument) !== null && _this$options$event$t !== void 0 ? _this$options$event$t : document;
  var parent = (_doc$fullscreenElemen = doc.fullscreenElement) !== null && _doc$fullscreenElemen !== void 0 ? _doc$fullscreenElemen : doc.body;
  this.root;
  parent.appendChild(this.root);
}
function _calculateBestPosition() {
  var options = this.options;
  var root = this.root;
  var left = options.left || 0;
  var top = options.top || 0;
  this.top_original = top;
  if (options.event) {
    left = options.event.clientX - 10;
    top = options.event.clientY - 10;
    if (options.title) {
      top -= 20;
    }
    this.top_original = top;
    if (options.parentMenu) {
      var rect = options.parentMenu.root.getBoundingClientRect();
      left = rect.left + rect.width;
    }
    var body_rect = document.body.getBoundingClientRect();
    var root_rect = root.getBoundingClientRect();
    if (body_rect.height === 0) LiteGraph.log_error("document.body height is 0. That is dangerous, set html,body { height: 100%; }");
    if (body_rect.width && left > body_rect.width - root_rect.width - 10) {
      left = body_rect.width - root_rect.width - 10;
    }
    if (body_rect.height && top > body_rect.height - root_rect.height - 10) {
      top = body_rect.height - root_rect.height - 10;
    }
  } else {
    LiteGraph.log_debug("contextmenu", "calculateBestPosition", "has no event");
  }
  root.style.left = "".concat(left, "px");
  root.style.top = "".concat(top, "px");
  if (options.scale) {
    root.style.transform = "scale(".concat(options.scale, ")");
  }
}
_defineProperty(ContextMenu, "closeAll", function () {
  var _ref_window$document;
  var ref_window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var elements = ref_window === null || ref_window === void 0 || (_ref_window$document = ref_window.document) === null || _ref_window$document === void 0 ? void 0 : _ref_window$document.querySelectorAll(".litecontextmenu");
  if (!elements || !elements.length) return;
  elements.forEach(function (element) {
    if (element.close) {
      element.close();
    } else {
      var _element$parentNode;
      (_element$parentNode = element.parentNode) === null || _element$parentNode === void 0 || _element$parentNode.removeChild(element);
    }
  });
});

/**
 * This class is in charge of rendering one graph inside a canvas. And provides all the interaction required.
 * Valid callbacks are: onNodeSelected, onNodeDeselected, onShowNodePanel, onNodeDblClicked
 *
 * @class LGraphCanvas
 * @constructor
 * @param {HTMLCanvas} canvas the canvas where you want to render (it accepts a selector in string format or the canvas element itself)
 * @param {LGraph} graph [optional]
 * @param {Object} options [optional] { skip_rendering, autoresize, viewport }
 */
var LGraphCanvas = /*#__PURE__*/function () {
  function LGraphCanvas(canvas, graph, options) {
    var _this = this,
      _options;
    _classCallCheck(this, LGraphCanvas);
    /**
     * Called when a mouse wheel event has to be processed
     * @method processMouseWheel
     **/
    _defineProperty(this, "processMouseWheel", function (e) {
      if (!_this.graph || !_this.allow_dragcanvas) {
        return;
      }
      var delta = e.wheelDeltaY != null ? e.wheelDeltaY : e.detail * -60;
      _this.adjustMouseEvent(e);
      var x = e.clientX;
      var y = e.clientY;
      var is_inside = !_this.viewport || _this.viewport && x >= _this.viewport[0] && x < _this.viewport[0] + _this.viewport[2] && y >= _this.viewport[1] && y < _this.viewport[1] + _this.viewport[3];
      if (!is_inside) return;
      var scale = _this.ds.scale;
      if (delta > 0) {
        scale *= 1.1;
      } else if (delta < 0) {
        scale *= 1 / 1.1;
      }

      // TODO check this, probably should use DragAndScale instead
      // should check too that target is always the correct element when getting buondingBox
      // this.ds.changeScale(scale, [e.clientX, e.clientY]);
      var rect = e.target.getBoundingClientRect();
      _this.setZoom(scale, [e.clientX - rect.left, e.clientY - rect.top]);
      _this.graph.change();
      e.preventDefault();
      return false; // prevent default
    });
    /**
     * process a key event
     * @method processKey
     **/
    /**
     * TODO : processKey replace static keys for config values
     * TODO : processKey save keys being down, fire single first keyDown instead of constantly pressed (use new event and promote that), clean on up
     * NOTE should use event.repeat meanwhile
     */
    _defineProperty(this, "processKey", function (e) {
      if (!_this.graph) {
        return;
      }
      var block_default = false;
      var r = null;
      LiteGraph.log_verbose("lgraphcanvas", "processKey", e);
      if (e.target.localName == "input") {
        return;
      }
      if (e.type == "keydown") {
        if (e.keyCode == 32) {
          // space
          _this.dragging_canvas = true;
          block_default = true;
        }
        if (e.keyCode == 27) {
          // esc
          if (_this.node_panel) _this.node_panel.close();
          block_default = true;
        }

        // select all Control A
        if (e.keyCode == 65 && e.ctrlKey) {
          _this.selectNodes();
          block_default = true;
        }
        if (e.keyCode === 67 && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
          // copy
          if (_this.selected_nodes) {
            _this.copyToClipboard();
            block_default = true;
          }
        }
        if (e.keyCode === 86 && (e.metaKey || e.ctrlKey)) {
          // paste
          _this.pasteFromClipboard(e.shiftKey);
        }

        // delete or backspace
        if (e.keyCode == 46 || LiteGraph.backspace_delete && e.keyCode == 8) {
          if (e.target.localName != "input" && e.target.localName != "textarea") {
            _this.deleteSelectedNodes();
            block_default = true;
          }
        }

        // collapse
        // ...

        // ctlr+Z, ctlr+Y (or ctlr+shift+Z)
        if (LiteGraph.actionHistory_enabled) {
          if (e.keyCode == 89 && e.ctrlKey || e.keyCode == 90 && e.ctrlKey && e.shiftKey) {
            // Y
            _this.graph.actionHistoryForward();
          } else if (e.keyCode == 90 && e.ctrlKey) {
            // Z
            _this.graph.actionHistoryBack();
          }
        }
        if (Object.keys(_this.selected_nodes).length) {
          for (var i in _this.selected_nodes) {
            // TAG callback node event entrypoint
            // SHOULD check return value (block canvasProcess? block_default?)
            r = _this.selected_nodes[i].processCallbackHandlers("onKeyDown", {
              def_cb: _this.selected_nodes[i].onKeyDown
            }, e);
            // could a node stop replicating to the others ?
            if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) {
              LiteGraph.log_debug("lgraphcanvas", "processKey", "onKeyDown has been processed with result true, prevent event bubbling");
              block_default = true;
            }
          }
        }

        // TAG callback GRAPHCANVAS event entrypoint
        // SHOULD check return value (block_default?)
        r = _this.processCallbackHandlers("onKeyDown", {
          def_cb: _this.onKeyDown
        }, e);
        if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) {
          LiteGraph.log_debug("lgraphcanvas", "processKey", "onKeyDown has been processed with result true, prevent event bubbling");
          block_default = true;
        } else {
          LiteGraph.log_verbose("lgraphcanvas", "processKey", "onKeyDown processed by CB handlers", r);
        }
      } else if (e.type == "keyup") {
        if (e.keyCode == 32) {
          // space
          _this.dragging_canvas = false;
        }
        if (_this.selected_nodes) {
          for (var _i in _this.selected_nodes) {
            // TAG callback node event entrypoint
            // SHOULD check return value (block_default?)
            _this.selected_nodes[_i].processCallbackHandlers("onKeyUp", {
              def_cb: _this.selected_nodes[_i].onKeyUp
            }, e);
          }
        }
      }
      _this.graph.change();
      if (block_default) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }
    });
    /**
     * process a item drop event on top the canvas
     * @method processDrop
     **/
    _defineProperty(this, "processDrop", function (e) {
      e.preventDefault();
      _this.adjustMouseEvent(e);
      var r = null;
      var x = e.clientX;
      var y = e.clientY;
      var is_inside = !_this.viewport || _this.viewport && x >= _this.viewport[0] && x < _this.viewport[0] + _this.viewport[2] && y >= _this.viewport[1] && y < _this.viewport[1] + _this.viewport[3];
      if (!is_inside) {
        LiteGraph.log_debug("graphcanvas processDrop", "Outside viewport (client)", x, y);
        return;
      }
      x = e.localX;
      y = e.localY;
      is_inside = !_this.viewport || _this.viewport && x >= _this.viewport[0] && x < _this.viewport[0] + _this.viewport[2] && y >= _this.viewport[1] && y < _this.viewport[1] + _this.viewport[3];
      if (!is_inside) {
        LiteGraph.log_debug("graphcanvas processDrop", "Outside viewport (local)", x, y);
        return;
      }
      var pos = [e.canvasX, e.canvasY];
      var node = _this.graph ? _this.graph.getNodeOnPos(pos[0], pos[1]) : null;
      LiteGraph.log_verbose("graphcanvas processDrop", "going to process", pos, node);
      if (!node) {
        LiteGraph.log_verbose("lgraphcanvas", "processDrop", "look for drop implemetation in CANVAS", e);
        r = _this.processCallbackHandlers("onDropItem", {
          def_cb: _this.onDropItem
        }, e);
        if (r === null || !r || _typeof(r) == "object" && !r.return_value) {
          LiteGraph.log_verbose("lgraphcanvas", "processDrop", "running default implementation", e);
          _this.checkDropItem(e);
          return r === null ? r : _typeof(r) == "object" ? r.return_value : r; // this is probably ignored
        } else {
          return r; // this is probably ignored
        }
      } else {
        // has dropped on node

        // check for dropped files
        var files = e.dataTransfer.files;
        if (files && files.length) {
          for (var i = 0; i < files.length; i++) {
            var file = e.dataTransfer.files[0];
            var filename = file.name;
            LiteGraph.log_debug("lgraphcanvas", "processDrop", "file on node", file);

            // execute onDropFile on node
            r = node.processCallbackHandlers("onDropFile", {
              def_cb: node.onDropFile
            }, file);

            // if not getting a positive result, process file as data and call onDropData
            if (!r || _typeof(r) == "object" && !r.return_value) {
              // prepare reader
              var reader = new FileReader();
              reader.onload = function (event) {
                var data = event.target.result;
                LiteGraph.log_debug("lgraphcanvas", "processDrop", "data on node", data, filename, file);
                // execute onDropData on node
                node.processCallbackHandlers("onDropData", {
                  def_cb: node.onDropData
                }, data, filename, file);
              };

              // read data
              var type = file.type.split("/")[0];
              if (type == "text" || type == "") {
                reader.readAsText(file);
              } else if (type == "image") {
                reader.readAsDataURL(file);
              } else {
                reader.readAsArrayBuffer(file);
              }
            }
          }
        }

        // execute onDropItem on NODE
        r = node.processCallbackHandlers("onDropItem", {
          def_cb: node.onDropItem
        }, e);
        // if getting a positive result, return
        if (r === true || _typeof(r) == "object" && r.return_value) {
          return true;
        }

        // execute onDropItem on CANVAS
        r = _this.processCallbackHandlers("onDropItem", {
          def_cb: _this.onDropItem
        }, e);
        // if getting a positive result, return
        if (r === true || _typeof(r) == "object" && r.return_value) {
          return true;
        }
        LiteGraph.log_info("lgraphcanvas", "processDrop", "neither node and canvas has processed the drop");
        return false;
      }
    });
    (_options = options) !== null && _options !== void 0 ? _options : options = {
      skip_render: false,
      autoresize: false,
      clip_all_nodes: false,
      free_resize: true,
      groups_alpha: 0.21,
      groups_border_alpha: 0.45,
      groups_triangle_handler_size: 15,
      groups_title_font: "Arial",
      groups_title_alignment: "left",
      groups_title_font_size: 24,
      // group font size is actually a lgraphgroup property, and the default is in LiteGraph
      groups_title_wrap: true,
      groups_add_around_selected: true,
      groups_add_default_spacing: 15,
      hide_widget_label_when_small: 150 //false,
    };
    this.options = options;

    // register CallbackHandler methods on this
    this.callbackhandler_setup();

    // if(graph === undefined)
    //	throw new Error("No graph assigned");
    this.background_image = LGraphCanvas.DEFAULT_BACKGROUND_IMAGE;
    if (canvas && canvas.constructor === String) {
      canvas = document.querySelector(canvas);
    }
    this.ds = new DragAndScale();
    this.zoom_modify_alpha = true; // otherwise it generates ugly patterns when scaling down too much

    this.title_text_font = "".concat(LiteGraph.NODE_TEXT_SIZE, "px Arial");
    this.inner_text_font = "normal ".concat(LiteGraph.NODE_SUBTEXT_SIZE, "px Arial");
    this.node_title_color = LiteGraph.NODE_TITLE_COLOR;
    this.default_link_color = LiteGraph.LINK_COLOR;
    this.default_connection_color = {
      input_off: "#778",
      input_on: "#7F7",
      // "#BBD"
      output_off: "#778",
      output_on: "#7F7" // "#BBD"
    };
    this.default_connection_color_byType = {}; /* number: "#7F7", string: "#77F", boolean: "#F77",*/
    this.default_connection_color_byTypeOff = {}; /* number: "#474", string: "#447", boolean: "#744",*/
    this.drag_mode = false; // never used ?
    this.dragging_rectangle = null;
    this.filter = null; // allows to filter to only accept some type of nodes in a graph

    this.highquality_render = true;
    this.use_gradients = false; // set to true to render titlebar with gradients
    this.editor_alpha = 1; // used for transition
    this.pause_rendering = false;
    this.clear_background = true;
    this.clear_background_color = "#222";
    this.read_only = false; // if set to true users cannot modify the graph
    //  this.render_only_selected = true; // @TODO Atlasan figures this isn't used
    this.live_mode = false;
    this.show_info = true;
    this.allow_dragcanvas = true;
    this.allow_dragnodes = true;
    this.allow_interaction = true; // allow to control widgets, buttons, collapse, etc
    this.multi_select = false; // allow selecting multi nodes without pressing extra keys
    this.allow_searchbox = true;
    //  this.allow_reconnect_links = true; // @TODO: replaced by Atlasan.  Clean up.  allows to change a connection with having to redo it again
    this.move_destination_link_without_shift = false;
    this.align_to_grid = false; // snap to grid

    this.drag_mode = false;
    this.dragging_rectangle = null;
    this.filter = null; // allows to filter to only accept some type of nodes in a graph

    this.set_canvas_dirty_on_mouse_event = true; // forces to redraw the canvas if the mouse does anything
    this.always_render_background = false;
    this.render_shadows = true;
    this.render_canvas_border = true;
    this.render_connections_shadows = false; // too much cpu
    this.render_connections_border = true;
    this.render_curved_connections = true;
    this.render_connection_arrows = false;
    this.render_collapsed_slots = true;
    this.render_execution_order = false;
    this.render_title_colored = true;
    this.render_link_tooltip = true;
    this.links_render_mode = LiteGraph.SPLINE_LINK;

    // TODO refactor: options object do need refactoring .. all the options are actually outside of it
    this.autoresize = options.autoresize;
    this.skip_render = options.skip_render;
    this.clip_all_nodes = options.clip_all_nodes;
    this.free_resize = options.free_resize;
    this.mouse = [0, 0]; // mouse in canvas coordinates, where 0,0 is the top-left corner of the blue rectangle
    this.graph_mouse = [0, 0]; // mouse in graph coordinates, where 0,0 is the top-left corner of the blue rectangle
    this.canvas_mouse = this.graph_mouse; // LEGACY: REMOVE THIS, USE GRAPH_MOUSE INSTEAD

    // to personalize the search box
    this.onSearchBox = null;
    this.onSearchBoxSelection = null;

    // callbacks
    this.onMouse = null;
    this.onDrawBackground = null; // to render background objects (behind nodes and connections) in the canvas affected by transform
    this.onDrawForeground = null; // to render foreground objects (above nodes and connections) in the canvas affected by transform
    this.onDrawOverlay = null; // to render foreground objects not affected by transform (for GUIs)
    this.onDrawLinkTooltip = null; // called when rendering a tooltip
    this.onNodeMoved = null; // called after moving a node
    this.onSelectionChange = null; // called if the selection changes
    this.onConnectingChange = null; // called before any link changes
    this.onBeforeChange = null; // called before modifying the graph
    this.onAfterChange = null; // called after modifying the graph

    this.connections_width = 3;
    this.round_radius = 8;
    this.current_node = null;
    this.node_widget = null; // used for widgets: active (clicked) widget
    this.over_widget = null;
    this.over_node = null;
    this.over_link_center = null;
    this.last_mouse_position = [0, 0];
    this.visible_area = this.ds.visible_area;
    this.visible_links = [];
    this.viewport = options.viewport || null; // to constraint render area to a portion of the canvas
    this.low_quality_rendering_threshold = 5; // amount of slow fps to switch to low quality rendering

    // link canvas and graph
    graph === null || graph === void 0 || graph.attachCanvas(this);
    this.setCanvas(canvas, options.skip_events);
    this.clear();
    if (!this.skip_render && !options.skip_render) {
      this.startRendering();
    }

    // event dispatcher, along direct (single) assignment of callbacks [ event entrypoint ]
    this.callbackhandler_setup();
    LiteGraph.processCallbackHandlers("on_lgraphcanvas_construct", {
      def_cb: LiteGraph.on_lgraphcanvas_construct
    }, this);
  }
  return _createClass(LGraphCanvas, [{
    key: "callbackhandler_setup",
    value: function callbackhandler_setup() {
      this.cb_handler = new CallbackHandler(this);
      // register CallbackHandler methods on this // Should move as class standard class methods?
      // this.registerCallbackHandler = function(){ return this.cb_handler.registerCallbackHandler(...arguments); };
      // this.unregisterCallbackHandler = function(){ return this.cb_handler.unregisterCallbackHandler(...arguments); };
      // this.processCallbackHandlers = function(){ return this.cb_handler.processCallbackHandlers(...arguments); };
    }
  }, {
    key: "registerCallbackHandler",
    value: function registerCallbackHandler() {
      var _this$cb_handler;
      // if(!this.cb_handler) this.callbackhandler_setup();
      return (_this$cb_handler = this.cb_handler).registerCallbackHandler.apply(_this$cb_handler, arguments);
    }
  }, {
    key: "unregisterCallbackHandler",
    value: function unregisterCallbackHandler() {
      var _this$cb_handler2;
      // if(!this.cb_handler) this.callbackhandler_setup();
      return (_this$cb_handler2 = this.cb_handler).unregisterCallbackHandler.apply(_this$cb_handler2, arguments);
    }
  }, {
    key: "processCallbackHandlers",
    value: function processCallbackHandlers() {
      var _this$cb_handler3;
      // if(!this.cb_handler) this.callbackhandler_setup();
      return (_this$cb_handler3 = this.cb_handler).processCallbackHandlers.apply(_this$cb_handler3, arguments);
    }
  }, {
    key: "clear",
    value:
    /**
     * clears all the data inside
     *
     * @method clear
     */
    function clear() {
      this.frame = 0;
      this.last_draw_time = 0;
      this.render_time = 0;
      this.fps = 0;
      this.low_quality_rendering_counter = 0;

      // this.scale = 1;
      // this.offset = [0,0];

      this.dragging_rectangle = null;
      this.selected_nodes = {};
      this.selected_group = null;
      this.visible_nodes = [];
      this.node_dragged = null;
      this.node_over = null;
      this.node_capturing_input = null;
      this.connecting_node = null;
      this.connecting = false; // ment to progressively replace connecting_node
      this.highlighted_links = {};
      this.dragging_canvas = false;
      this.dirty_canvas = true;
      this.dirty_bgcanvas = true;
      this.dirty_area = null;
      this.node_in_panel = null;
      this.node_widget = null;
      this.last_mouse = [0, 0];
      this.last_mouseclick = 0;
      this.pointer_is_down = false;
      this.pointer_is_double = false;
      this.visible_area.set([0, 0, 0, 0]);

      // TAG callback graphrenderer event entrypoint
      this.processCallbackHandlers("onClear", {
        def_cb: this.onClear
      });
    }

    /**
     * assigns a graph, you can reassign graphs to the same canvas
     *
     * @method setGraph
     * @param {LGraph} graph
     */
  }, {
    key: "setGraph",
    value: function setGraph(graph, skip_clear) {
      if (this.graph == graph) {
        return;
      }
      if (!skip_clear) {
        this.clear();
      }
      if (!graph) {
        var _this$graph;
        (_this$graph = this.graph) === null || _this$graph === void 0 || _this$graph.detachCanvas(this);
        return;
      }
      graph.attachCanvas(this);
      LiteGraph.log_debug("lgraphcanvas", "setGraph", graph, this);

      // remove the graph stack in case a subgraph was open
      this._graph_stack && (this._graph_stack = null);
      this.setDirty(true, true);
    }

    /**
     * returns the top level graph (in case there are subgraphs open on the canvas)
     *
     * @method getTopGraph
     * @return {LGraph} graph
     */
  }, {
    key: "getTopGraph",
    value: function getTopGraph() {
      if (this._graph_stack.length) return this._graph_stack[0];
      return this.graph;
    }

    /**
     * opens a graph contained inside a node in the current graph
     *
     * @method openSubgraph
     * @param {LGraph} graph
     */
  }, {
    key: "openSubgraph",
    value: function openSubgraph(graph) {
      if (!graph) {
        throw new Error("graph cannot be null");
      }
      if (this.graph == graph) {
        throw new Error("graph cannot be the same");
      }
      this.clear();
      if (this.graph) {
        this._graph_stack || (this._graph_stack = []);
        this._graph_stack.push(this.graph);
      }
      var prev_graph = this.graph;
      this.processCallbackHandlers("onOpenSubgraph", {
        def_cb: this.onOpenSubgraph
      }, graph, prev_graph);
      graph.attachCanvas(this);
      this.checkPanels();
      this.setDirty(true, true);
    }

    /**
     * closes a subgraph contained inside a node
     *
     * @method closeSubgraph
     * @param {LGraph} assigns a graph
     */
  }, {
    key: "closeSubgraph",
    value: function closeSubgraph() {
      if (!this._graph_stack || this._graph_stack.length == 0) {
        return;
      }
      var subgraph_node = this.graph._subgraph_node;
      var prev_graph = this.graph;
      var graph = this._graph_stack.pop();
      this.selected_nodes = {};
      this.highlighted_links = {};
      this.processCallbackHandlers("onCloseSubgraph", {
        def_cb: this.onCloseSubgraph
      }, graph, prev_graph, subgraph_node);
      graph.attachCanvas(this);
      this.setDirty(true, true);
      if (subgraph_node) {
        this.centerOnNode(subgraph_node);
        this.selectNodes([subgraph_node]);
      }
      // when close sub graph back to offset [0, 0] scale 1
      this.ds.offset = [0, 0];
      this.ds.scale = 1;
    }

    /**
     * returns the visually active graph (in case there are more in the stack)
     * @method getCurrentGraph
     * @return {LGraph} the active graph
     */
  }, {
    key: "getCurrentGraph",
    value: function getCurrentGraph() {
      return this.graph;
    }

    /**
     * assigns a canvas
     *
     * @method setCanvas
     * @param {Canvas} assigns a canvas (also accepts the ID of the element (not a selector)
     */
  }, {
    key: "setCanvas",
    value: function setCanvas(canvas, skip_events) {
      if (canvas) {
        if (canvas.constructor === String) {
          canvas = document.getElementById(canvas);
          if (!canvas) {
            throw new Error("Error creating LiteGraph canvas: Canvas not found");
          }
        }
      }
      if (canvas === this.canvas) {
        return;
      }
      if (!canvas && this.canvas) {
        // maybe detach events from old_canvas
        if (!skip_events) {
          this.unbindEvents();
        }
      }
      this.canvas = canvas;
      this.ds.element = canvas;
      if (!canvas) {
        return;
      }

      // this.canvas.tabindex = "1000";
      canvas.className += " lgraphcanvas";
      canvas.data = this;
      canvas.tabindex = "1"; // to allow key events

      // bg canvas: used for non changing stuff
      this.bgcanvas = document.createElement("canvas");
      this.bgcanvas.width = this.canvas.width;
      this.bgcanvas.height = this.canvas.height;
      if (canvas.getContext == null) {
        if (canvas.localName != "canvas") {
          throw new Error("Element supplied for LGraphCanvas must be a <canvas> element, you passed a " + canvas.localName);
        }
        throw new Error("This browser doesn't support Canvas");
      }
      var ctx = this.ctx = canvas.getContext("2d");
      if (ctx == null) {
        if (!canvas.webgl_enabled) {
          LiteGraph.log_info("This canvas seems to be WebGL, enabling WebGL renderer");
        }
        this.enableWebGL();
      }
      if (!skip_events) {
        this.bindEvents();
      }
    }

    // used in some events to capture them
  }, {
    key: "_doNothing",
    value: function _doNothing(e) {
      LiteGraph.log_verbose("pointerevents: _doNothing " + e.type);
      e.preventDefault();
      return false;
    }
  }, {
    key: "_doReturnTrue",
    value: function _doReturnTrue(e) {
      e.preventDefault();
      return true;
    }

    /**
     * binds mouse, keyboard, touch and drag events to the canvas
     * @method bindEvents
     **/
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      if (this._events_binded) {
        LiteGraph.log_warn("LGraphCanvas: events already binded");
        return;
      }
      this._events_binded = true;
      var canvas = this.canvas;
      var ref_window = this.getCanvasWindow();
      var document = ref_window.document; // multiwindows

      LiteGraph.log_info("[lgraphcanvas]", "BINDing events", canvas, document);

      // Pointer
      this._mousedown_callback = this.processMouseDown.bind(this);
      this._mousemove_callback = this.processMouseMove.bind(this);
      this._mouseup_callback = this.processMouseUp.bind(this);
      canvas.addEventListener("pointerdown", this._mousedown_callback); //, true);
      canvas.addEventListener("pointermove", this._mousemove_callback);
      canvas.addEventListener("pointerup", this._mouseup_callback); //, true);
      canvas.addEventListener("contextmenu", this._doNothing);

      // Wheel
      canvas.addEventListener("wheel", this.processMouseWheel);

      // Keyboard
      canvas.addEventListener("keydown", this.processKey);
      document.addEventListener("keyup", this.processKey); // in document, otherwise it doesn't fire keyup

      // Drop
      canvas.addEventListener("dragover", this._doNothing, false);
      canvas.addEventListener("dragend", this._doNothing, false);
      canvas.addEventListener("drop", this.processDrop);
      canvas.addEventListener("dragenter", this._doReturnTrue, false);
    }

    /**
     * unbinds mouse events from the canvas
     * @method unbindEvents
     **/
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (!this._events_binded) {
        LiteGraph.log_warn("LGraphCanvas: no events binded");
        return;
      }
      this._events_binded = false;
      var canvas = this.canvas;
      var ref_window = this.getCanvasWindow();
      var document = ref_window.document;
      LiteGraph.log_info("[lgraphcanvas]", "UNbinding events", canvas, document);

      // Pointer
      canvas.removeEventListener("pointerdown", this._mousedown_callback); //, true);
      canvas.removeEventListener("pointermove", this._mousemove_callback);
      canvas.removeEventListener("pointerup", this._mouseup_callback); //, true);
      canvas.removeEventListener("contextmenu", this._doNothing);

      // Wheel
      canvas.removeEventListener("wheel", this.processMouseWheel);

      // Keyboard
      canvas.removeEventListener("keydown", this.processKey);
      document.removeEventListener("keyup", this.processKey);

      // Drop
      canvas.removeEventListener("dragover", this._doNothing, false);
      canvas.removeEventListener("dragend", this._doNothing, false);
      canvas.removeEventListener("drop", this.processDrop);
      canvas.removeEventListener("dragenter", this._doReturnTrue, false);
      this._mousedown_callback = null;
    }
  }, {
    key: "enableWebGL",
    value:
    /**
     * this function allows to render the canvas using WebGL instead of Canvas2D
     * this is useful if you plant to render 3D objects inside your nodes, it uses litegl.js for webgl and canvas2DtoWebGL to emulate the Canvas2D calls in webGL
     * @method enableWebGL
     **/
    function enableWebGL() {
      if (typeof GL === "undefined") {
        throw new Error("litegl.js must be included to use a WebGL canvas");
      }
      if (typeof enableWebGLCanvas === "undefined") {
        throw new Error("webglCanvas.js must be included to use this feature");
      }
      this.gl = this.ctx = enableWebGLCanvas(this.canvas);
      this.ctx.webgl = true;
      this.bgcanvas = this.canvas;
      this.bgctx = this.gl;
      this.canvas.webgl_enabled = true;

      /*
      GL.create({ canvas: this.bgcanvas });
      this.bgctx = enableWebGLCanvas( this.bgcanvas );
      window.gl = this.gl;
      */
    }

    /**
     * marks as dirty the canvas, this way it will be rendered again
     *
     * @class LGraphCanvas
     * @method setDirty
     * @param {bool} fgcanvas if the foreground canvas is dirty (the one containing the nodes)
     * @param {bool} bgcanvas if the background canvas is dirty (the one containing the wires)
     */
  }, {
    key: "setDirty",
    value: function setDirty(fgcanvas, bgcanvas) {
      if (fgcanvas) {
        this.dirty_canvas = true;
      }
      if (bgcanvas) {
        this.dirty_bgcanvas = true;
      }
    }

    /**
     * Used to attach the canvas in a popup
     *
     * @method getCanvasWindow
     * @return {window} returns the window where the canvas is attached (the DOM root node)
     */
  }, {
    key: "getCanvasWindow",
    value: function getCanvasWindow() {
      var _doc$defaultView;
      if (!this.canvas) {
        return window;
      }
      var doc = this.canvas.ownerDocument;
      return (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : doc.parentWindow;
    }

    /**
     * starts rendering the content of the canvas when needed
     *
     * @method startRendering
     */
  }, {
    key: "startRendering",
    value: function startRendering() {
      if (this.is_rendering) {
        return;
      } // already rendering

      this.is_rendering = true;
      renderFrame.call(this);
      function renderFrame() {
        if (!this.pause_rendering) {
          this.draw();
        }
        var window = this.getCanvasWindow();
        if (this.is_rendering) {
          window.requestAnimationFrame(renderFrame.bind(this));
        }
      }
    }

    /**
     * stops rendering the content of the canvas (to save resources)
     *
     * @method stopRendering
     */
  }, {
    key: "stopRendering",
    value: function stopRendering() {
      this.is_rendering = false;
      /*
      if(this.rendering_timer_id)
      {
      clearInterval(this.rendering_timer_id);
      this.rendering_timer_id = null;
      }
      */
    }

    /* LiteGraphCanvas input */

    // used to block future mouse events (because of im gui)
  }, {
    key: "blockClick",
    value: function blockClick() {
      this.block_click = true;
      this.last_mouseclick = 0;
    }
  }, {
    key: "processUserInputDown",
    value: function processUserInputDown(e) {
      if (this.pointer_is_down && e.isPrimary !== undefined && !e.isPrimary) {
        this.userInput_isNotPrimary = true;
        // DBG("pointerevents: userInput_isNotPrimary start");
      } else {
        this.userInput_isNotPrimary = false;
      }
      this.userInput_type = e.pointerType ? e.pointerType : false;
      this.userInput_id = e.pointerId ? e.pointerId : false;
      if (e.pointerType) {
        switch (e.pointerType) {
          case "mouse":
            break;
          case "pen":
            break;
          case "touch":
            break;
          default:
            LiteGraph.log_debug("pointerType unknown " + ev.pointerType);
        }
      }
      if (e.button !== undefined) {
        this.userInput_button = e.button;
        LiteGraph.log_verbose("input button ", e.button);
        switch (e.button) {
                  }
      }
      if (e.buttons !== undefined) {
        this.userInput_button_s = e.buttons;
        LiteGraph.log_verbose("input button_S ", e.buttons);
      }
      this.userInput_touches = e.changedTouches !== undefined && e.changedTouches.length !== undefined ? e.changedTouches : false;
      if (this.userInput_touches && this.userInput_touches.length) {
        LiteGraph.log_debug("check multiTouches", e.changedTouches);
      }
      return this.processMouseDown(e);
    }
  }, {
    key: "processMouseDown",
    value: function processMouseDown(e) {
      var _this2 = this;
      if (this.set_canvas_dirty_on_mouse_event) this.dirty_canvas = true;
      if (!this.graph) {
        return;
      }
      this.adjustMouseEvent(e);
      var ref_window = this.getCanvasWindow();
      LGraphCanvas.active_canvas = this;

      // processing mouseDown for all canvas ?

      var x = e.clientX;
      var y = e.clientY;
      LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "pointerId:" + e.pointerId + " which:" + e.which + " isPrimary:" + e.isPrimary + " :: x y " + x + " " + y, "previousClick", this.last_mouseclick, "diffTimeClick", this.last_mouseclick ? LiteGraph.getTime() - this.last_mouseclick : "notlast");
      LiteGraph.log_verbose("coordinates", x, y, this.viewport, "canvas coordinates", e.canvasX, e.canvasY);
      this.ds.viewport = this.viewport;
      var is_inside = !this.viewport || this.viewport && x >= this.viewport[0] && x < this.viewport[0] + this.viewport[2] && y >= this.viewport[1] && y < this.viewport[1] + this.viewport[3];

      // move mouse move event to the window in case it drags outside of the canvas
      if (!this.options.skip_events) {
        this.canvas.removeEventListener("pointermove", this._mousemove_callback);
        ref_window.document.addEventListener("pointermove", this._mousemove_callback, true); // catch for the entire window
        ref_window.document.addEventListener("pointerup", this._mouseup_callback, true);
      }
      if (!is_inside) {
        return;
      }
      var node = this.graph.getNodeOnPos(e.canvasX, e.canvasY, this.visible_nodes, 5);
      var skip_action = false;
      var now = LiteGraph.getTime();
      var is_primary = e.isPrimary === undefined || e.isPrimary;
      var is_double_click = now - this.last_mouseclick < 300 && is_primary;
      this.mouse[0] = e.clientX;
      this.mouse[1] = e.clientY;
      this.graph_mouse[0] = e.canvasX;
      this.graph_mouse[1] = e.canvasY;
      this.last_click_position = [this.mouse[0], this.mouse[1]];
      if (this.pointer_is_down && is_primary) {
        this.pointer_is_double = true;
        LiteGraph.log_verbose("pointerevents: pointer_is_double start");
      } else {
        this.pointer_is_double = false;
      }
      this.pointer_is_down = true;
      this.canvas.focus();
      LiteGraph.ContextMenuClass.closeAll(ref_window);

      // if (this.onMouse?.(e))
      //     return;

      // TAG callback graphrenderer event entrypoint
      var cbRet = this.processCallbackHandlers("onClear", {
        def_cb: this.onMouse
      }, e);
      if (typeof cbRet != "undefined" && cbRet !== null && (cbRet === false || _typeof(cbRet) == "object" && cbRet.return_value === false)) {
        LiteGraph.log_info("lgraphcanvas", "processMouseDown", "callback prevents continue");
        return;
      }

      // left button mouse / single finger
      if (e.which == 1 && !this.userInput_isNotPrimary) {
        if (e.ctrlKey) {
          LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "starting box selection");
          this.dragging_rectangle = new Float32Array(4);
          this.dragging_rectangle[0] = e.canvasX;
          this.dragging_rectangle[1] = e.canvasY;
          this.dragging_rectangle[2] = 1;
          this.dragging_rectangle[3] = 1;
          skip_action = true;
        }

        // clone node ALT dragging
        if (LiteGraph.alt_drag_do_clone_nodes && e.altKey && node && this.allow_interaction && !skip_action && !this.read_only) {
          LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "cloning node");
          var original_node = node;
          var cloned = node.clone();
          if (cloned) {
            cloned.pos[0] += 5;
            cloned.pos[1] += 5;
            this.graph.add(cloned, false, {
              doCalcSize: false
            });
            node = cloned;
            if (LiteGraph.alt_shift_drag_connect_clone_with_input && e.shiftKey) {
              // process links
              LiteGraph.log_verbose("lgraphcanvas", "processMouseDown", "altCloned", original_node, node);
              if (original_node.inputs && original_node.inputs.length) {
                // DBG("cycle original inputs",original_node.inputs);
                for (var j = 0; j < original_node.inputs.length; ++j) {
                  var input = original_node.inputs[j];
                  if (!input || input.link == null) {
                    // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "processMouseDown", "alt drag cloning", "not input link",input);
                    continue;
                  }
                  var ob_link = this.graph.links[input.link];
                  if (!ob_link) {
                    LiteGraph.log_warn("lgraphcanvas", "processMouseDown", "not graph link info for input", input, original_node);
                    continue;
                  }
                  if (ob_link.type === LiteGraph.EVENT) {
                    // TODO put a sequencer in the middle or implement multi input
                    LiteGraph.log_info("lgraphcanvas", "processMouseDown", "alt drag cloning", "skip moving events", input);
                    continue;
                  }
                  var source_node;
                  if (ob_link.origin_id) {
                    source_node = this.graph.getNodeById(ob_link.origin_id);
                  }
                  var target_node = node;
                  if (source_node && target_node) {
                    LiteGraph.log_verbose("lgraphcanvas", "processMouseDown", "alt drag cloning", "connect newly created", source_node, target_node, ob_link);
                    // DBG LiteGraph.log_info("connect cloned node",ob_link.origin_slot, target_node, ob_link.target_slot);
                    source_node.connect(ob_link.origin_slot, target_node, ob_link.target_slot);
                  }
                }
              }
            }
            skip_action = true;
            if (!block_drag_node) {
              if (this.allow_dragnodes) {
                this.graph.beforeChange();
                this.node_dragged = node;
              }
              if (!this.selected_nodes[node.id]) {
                this.processNodeSelected(node, e);
              }
            }
          }
        }
        var clicking_canvas_bg = false;

        // when clicked on top of a node
        // and it is not interactive
        // or action skipped or read_only
        if (node && (this.allow_interaction || node.flags.allow_interaction) && !skip_action && !this.read_only) {
          LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicking on node");
          if (!this.live_mode && !node.flags.pinned) {
            this.bringToFront(node);
          } // if it wasn't selected?

          // not dragging mouse to connect two slots
          // interaction allowed, not collpased, not live_mode
          if (this.allow_interaction && !this.connecting_node && !node.flags.collapsed && !this.live_mode) {
            // Search for corner for resize
            if (!skip_action && node.resizable !== false && LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, node.pos[0] + node.size[0] - 9, node.pos[1] + node.size[1] - 9, 18, 18)) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "start resizing node");
              this.graph.beforeChange();
              this.resizing_node = node;
              this.canvas.style.cursor = "se-resize";
              skip_action = true;
            } else {
              // search for outputs
              if (node.outputs) {
                for (var i = 0, l = node.outputs.length; i < l; ++i) {
                  var _output = node.outputs[i];
                  var link_pos = node.getConnectionPos(false, i);
                  if (LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, link_pos[0] - 15, link_pos[1] - 10, 30, 20)) {
                    this.connecting_node = node;
                    this.connecting_output = _output;
                    this.connecting_output.slot_index = i;
                    this.connecting_pos = node.getConnectionPos(false, i);
                    this.connecting_slot = i;
                    LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicked on output slot", node, _output);
                    if (LiteGraph.shift_click_do_break_link_from) {
                      // break with shift
                      if (e.shiftKey) {
                        node.disconnectOutput(i);
                      }
                    } else {
                      // move with shift
                      if (e.shiftKey) {
                        // || this.move_source_link_without_shift
                        LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "will move link source slot", this.connecting_node, this.connecting_slot, this.connecting_output, this.connecting_pos);

                        // this.connecting_node
                        // this.connecting_output

                        var aOLinks = [];
                        var aONodes = [];
                        var aOSlots = [];
                        var aConnectingInputs = [];
                        if (_output.links !== null && _output.links.length) {
                          for (var il in _output.links) {
                            var oNodeX = false;
                            var oLnkX = this.graph.links[_output.links[il]];
                            if (oLnkX && this.graph._nodes_by_id[oLnkX.target_id]) {
                              oNodeX = this.graph._nodes_by_id[oLnkX.target_id];
                              if (oNodeX) {
                                aOLinks.push(oLnkX);
                                aONodes.push(oNodeX);
                                aOSlots.push(oLnkX.target_slot);
                                aConnectingInputs.push({
                                  node: oNodeX,
                                  slot: oLnkX.target_slot,
                                  link: oLnkX
                                });
                              }
                            }
                          }
                        }

                        // WIP implemented multi links ....
                        // TODO use a trick for now: visually dragging one and check ther rest later on

                        if (aOLinks.length) {
                          // should disconnect output
                          node.disconnectOutput(i);
                          this.connecting_output = false;
                          this.connecting = {
                            inputs: aConnectingInputs
                          };
                          LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "moving links source slot", this.connecting);
                          var _link_info = aOLinks[0];
                          this.connecting_node = this.graph._nodes_by_id[_link_info.target_id];
                          this.connecting_slot = _link_info.target_slot;
                          this.connecting_input = this.connecting_node.inputs[this.connecting_slot];
                          // this.connecting_input.slot_index = this.connecting_slot;
                          this.connecting_pos = this.connecting_node.getConnectionPos(true, this.connecting_slot);
                          this.dirty_bgcanvas = true;
                          skip_action = true;
                        }
                      }
                    }
                    if (is_double_click) {
                      // TAG callback node event entrypoint
                      node.processCallbackHandlers("onOutputDblClick", {
                        def_cb: node.onOutputDblClick
                      }, i, e);
                    } else {
                      // TAG callback node event entrypoint
                      node.processCallbackHandlers("onOutputClick", {
                        def_cb: node.onOutputClick
                      }, i, e);
                    }
                    skip_action = true;
                    break;
                  }
                }
              }

              // search for inputs
              if (node.inputs) {
                for (var _i2 = 0, _l = node.inputs.length; _i2 < _l; ++_i2) {
                  var _input = node.inputs[_i2];
                  var _link_pos = node.getConnectionPos(true, _i2);
                  if (LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, _link_pos[0] - 15, _link_pos[1] - 10, 30, 20)) {
                    LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicked on input slot", node, _input);
                    if (is_double_click) {
                      // TAG callback node event entrypoint
                      node.processCallbackHandlers("onInputDblClick", {
                        def_cb: node.onInputDblClick
                      }, _i2, e);
                    } else {
                      // TAG callback node event entrypoint
                      node.processCallbackHandlers("onInputClick", {
                        def_cb: node.onInputDblClick
                      }, _i2, e);
                    }
                    if (_input.link !== null) {
                      var link_info = this.graph.links[_input.link]; // before disconnecting
                      if (LiteGraph.click_do_break_link_to) {
                        node.disconnectInput(_i2);
                        this.dirty_bgcanvas = true;
                        skip_action = true;
                      }
                      if (
                      // this.allow_reconnect_links ||
                      // this.move_destination_link_without_shift ||
                      e.shiftKey) {
                        if (!LiteGraph.click_do_break_link_to) {
                          node.disconnectInput(_i2);
                        }
                        this.connecting_node = this.graph._nodes_by_id[link_info.origin_id];
                        this.connecting_slot = link_info.origin_slot;
                        this.connecting_output = this.connecting_node.outputs[this.connecting_slot];
                        this.connecting_pos = this.connecting_node.getConnectionPos(false, this.connecting_slot);
                        LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "moving link destination slot", this.connecting_node, this.connecting_slot, this.connecting_output, this.connecting_pos);
                        this.dirty_bgcanvas = true;
                        skip_action = true;
                      }
                    }
                    if (!skip_action) {
                      // connect from in to out, from to to from
                      this.connecting_node = node;
                      this.connecting_input = _input;
                      this.connecting_input.slot_index = _i2;
                      this.connecting_pos = node.getConnectionPos(true, _i2);
                      this.connecting_slot = _i2;
                      this.dirty_bgcanvas = true;
                      skip_action = true;
                    }
                  }
                }
              }
            } // not resizing
          }

          // it wasn't clicked on the links boxes, nor on slots
          if (!skip_action) {
            LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "check clicked on node", node);
            var block_drag_node = false;
            var pos = [e.canvasX - node.pos[0], e.canvasY - node.pos[1]];

            // widgets
            var widget = this.processNodeWidgets(node, this.graph_mouse, e);
            if (widget) {
              block_drag_node = true;
              this.node_widget = [node, widget];
            }
            var _cbRet = null;

            // double clicking
            if (this.allow_interaction && is_double_click && this.selected_nodes[node.id]) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "double clicked on node", node);
              // TAG callback node event entrypoint
              _cbRet = node.processCallbackHandlers("onDblClick", {
                def_cb: node.onDblClick
              }, e, pos, this);
              if (_cbRet !== null && (_cbRet === true || _typeof(_cbRet) == "object" && _cbRet.return_value)) {
                LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "dragging blocked by onDblClick", _cbRet);
              } else {
                this.processNodeDblClicked(node);
              }
              block_drag_node = true;
            }

            // TAG callback node event entrypoint
            _cbRet = node.processCallbackHandlers("onMouseDown", {
              def_cb: node.onMouseDown
            }, e, pos, this);

            // if do not capture mouse
            if (_cbRet !== null && (_cbRet === true || _typeof(_cbRet) == "object" && _cbRet.return_value)) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "dragging blocked by onMouseDownCbRet", _cbRet);
              block_drag_node = true;
            } else {
              // open subgraph button
              if (node.subgraph && !node.skip_subgraph_button) {
                LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicked on subgraph");
                if (!node.flags.collapsed && pos[0] > node.size[0] - LiteGraph.NODE_TITLE_HEIGHT && pos[1] < 0) {
                  setTimeout(function () {
                    _this2.openSubgraph(node.subgraph);
                  }, 10);
                }
              }
              if (this.live_mode) {
                clicking_canvas_bg = true;
                block_drag_node = true;
              }
            }
            if (!block_drag_node) {
              if (this.allow_dragnodes) {
                LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "started dragging", node);
                this.graph.beforeChange();
                this.node_dragged = node;
              }
              this.processNodeSelected(node, e);
            } else {
              /**
               * Don't call the function if the block is already selected.
               * Otherwise, it could cause the block to be unselected while its panel is open.
               */
              if (!node.is_selected) {
                LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "node selected", node);
                this.processNodeSelected(node, e);
              }
            }
            this.dirty_canvas = true;
          }
        } else {
          // clicked outside of nodes
          LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicked outside nodes");
          if (!skip_action) {
            // search for mouseDown on LINKS
            if (!this.read_only) {
              for (var _i3 = 0; _i3 < this.visible_links.length; ++_i3) {
                var link = this.visible_links[_i3];
                var center = link._pos;
                if (!center || e.canvasX < center[0] - 4 || e.canvasX > center[0] + 4 || e.canvasY < center[1] - 4 || e.canvasY > center[1] + 4) {
                  continue;
                }
                LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicked on link", link);
                // link clicked
                this.showLinkMenu(link, e);
                this.over_link_center = null; // clear tooltip
                break;
              }
            }

            // search for mouseDown on GROUPS
            this.selected_group = this.graph.getGroupOnPos(e.canvasX, e.canvasY);
            this.selected_group_resizing = false;
            if (this.selected_group && !this.read_only) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "clicked on group", link);
              if (e.ctrlKey) {
                this.dragging_rectangle = null;
              }
              var dist = LiteGraph.distance([e.canvasX, e.canvasY], [this.selected_group.pos[0] + this.selected_group.size[0], this.selected_group.pos[1] + this.selected_group.size[1]]);
              if (dist * this.ds.scale < this.options.groups_triangle_handler_size) {
                this.selected_group_resizing = true;
              } else {
                this.selected_group.recomputeInsideNodes();
              }
            }
            if (is_double_click && !this.read_only && this.allow_searchbox) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "showing search box");
              this.showSearchBox(e);
              e.preventDefault();
              e.stopPropagation();
            }
            LiteGraph.log_debug("DEBUG canvas click is_double_click,this.allow_searchbox", is_double_click, this.allow_searchbox);
            clicking_canvas_bg = true;
          }
        }
        if (!skip_action && clicking_canvas_bg && this.allow_dragcanvas) {
          LiteGraph.log_debug("lgraphcanvas", "processMouseDown", "dragging_canvas start");
          this.dragging_canvas = true;
        }
      } else if (e.which == 2) {
        // middle button

        if (LiteGraph.middle_click_slot_add_default_node) {
          if (node && this.allow_interaction && !skip_action && !this.read_only) {
            // not dragging mouse to connect two slots
            if (!this.connecting_node && !node.flags.collapsed && !this.live_mode) {
              var mClikSlot = false;
              var mClikSlot_index = false;
              var mClikSlot_isOut = false;
              // search for outputs
              if (node.outputs) {
                for (var _i4 = 0, _l2 = node.outputs.length; _i4 < _l2; ++_i4) {
                  var output = node.outputs[_i4];
                  var _link_pos2 = node.getConnectionPos(false, _i4);
                  if (LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, _link_pos2[0] - 15, _link_pos2[1] - 10, 30, 20)) {
                    mClikSlot = output;
                    mClikSlot_index = _i4;
                    mClikSlot_isOut = true;
                    break;
                  }
                }
              }

              // search for inputs
              if (node.inputs) {
                for (var _i5 = 0, _l3 = node.inputs.length; _i5 < _l3; ++_i5) {
                  var input_clk = node.inputs[_i5];
                  var _link_pos3 = node.getConnectionPos(true, _i5);
                  if (LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, _link_pos3[0] - 15, _link_pos3[1] - 10, 30, 20)) {
                    mClikSlot = input_clk;
                    mClikSlot_index = _i5;
                    mClikSlot_isOut = false;
                    break;
                  }
                }
              }
              LiteGraph.log_verbose("middleClickSlots? " + mClikSlot + " & " + (mClikSlot_index !== false));
              if (mClikSlot && mClikSlot_index !== false) {
                var alphaPosY = 0.5 - (mClikSlot_index + 1) / (mClikSlot_isOut ? node.outputs.length : node.inputs.length);
                var node_bounding = node.getBounding();
                // estimate a position: this is a bad semi-bad-working mess .. REFACTOR with a correct autoplacement that knows about the others slots and nodes
                var posRef = [!mClikSlot_isOut ? node_bounding[0] : node_bounding[0] + node_bounding[2],
                // + node_bounding[0]/this.canvas.width*150
                e.canvasY - 80 // + node_bounding[0]/this.canvas.width*66 // vertical "derive"
                ];
                this.createDefaultNodeForSlot({
                  nodeFrom: !mClikSlot_isOut ? null : node,
                  slotFrom: !mClikSlot_isOut ? null : mClikSlot_index,
                  nodeTo: !mClikSlot_isOut ? node : null,
                  slotTo: !mClikSlot_isOut ? mClikSlot_index : null,
                  position: posRef,
                  // ,e: e
                  nodeType: "AUTO",
                  // nodeNewType
                  posAdd: [!mClikSlot_isOut ? -30 : 30, -alphaPosY * 130],
                  // -alphaPosY*30]
                  posSizeFix: [!mClikSlot_isOut ? -1 : 0, 0] // -alphaPosY*2*/
                });
              }
            }
          }
        } else if (!skip_action && this.allow_dragcanvas) {
          LiteGraph.log_verbose("pointerevents: dragging_canvas start from middle button");
          this.dragging_canvas = true;
        }
      } else if (e.which == 3 || LiteGraph.two_fingers_opens_menu && this.userInput_isNotPrimary) {
        // right button
        if (this.allow_interaction && !skip_action && !this.read_only) {
          // is it hover a node ?
          if (node) {
            if (Object.keys(this.selected_nodes).length && (this.selected_nodes[node.id] || e.shiftKey || e.ctrlKey || e.metaKey)) {
              // is multiselected or using shift to include the now node
              if (!this.selected_nodes[node.id]) this.selectNodes([node], true); // add this if not present
            } else {
              // update selection
              this.selectNodes([node]);
            }
          }

          // show menu on this node
          this.processContextMenu(node, e);
        }
      }

      // TODO
      // if(this.node_selected != prev_selected)
      //	this.onNodeSelectionChange(this.node_selected);

      this.last_mouse[0] = e.clientX;
      this.last_mouse[1] = e.clientY;
      this.last_mouseclick = LiteGraph.getTime();
      this.last_mouse_dragging = true;

      /*
      if( (this.dirty_canvas || this.dirty_bgcanvas) && this.rendering_timer_id == null)
          this.draw();
      */

      this.graph.change();

      // this is to ensure to defocus(blur) if a text input element is on focus
      if (!ref_window.document.activeElement || ref_window.document.activeElement.nodeName.toLowerCase() != "input" && ref_window.document.activeElement.nodeName.toLowerCase() != "textarea") {
        e.preventDefault();
      }
      e.stopPropagation();
      // TAG callback graphrenderer event entrypoint
      this.processCallbackHandlers("onMouseDown", {
        def_cb: this.onMouseDown
      }, e);
      return false;
    }

    /**
     * Called when a mouse move event has to be processed
     * @method processMouseMove
     **/
  }, {
    key: "processMouseMove",
    value: function processMouseMove(e) {
      if (this.autoresize) {
        this.resize(); // ? really ? every mouse move ? TODO move this
      }
      if (this.set_canvas_dirty_on_mouse_event) {
        this.dirty_canvas = true;
      }
      if (!this.graph) {
        LiteGraph.log_warn("lgraphcanvas", "processMouseMove", "no canvas ref");
        return;
      }
      LGraphCanvas.active_canvas = this;
      this.adjustMouseEvent(e);
      var mouse = [e.clientX, e.clientY];
      this.mouse[0] = mouse[0];
      this.mouse[1] = mouse[1];
      var delta = [mouse[0] - this.last_mouse[0], mouse[1] - this.last_mouse[1]];
      this.last_mouse = mouse;
      this.graph_mouse[0] = e.canvasX;
      this.graph_mouse[1] = e.canvasY;

      // DBG EXCESS LiteGraph.log_verbose("pointerevents: processMouseMove "+e.pointerId+" "+e.isPrimary);

      // TODO CHECK ensure block_click should prevent all following 
      if (this.block_click) {
        LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "block_click");
        e.preventDefault();
        return false;
      }
      this.over_widget = false; // will set again later on here

      e.dragging = this.last_mouse_dragging;

      // pass event to active widget (previously)clicked
      if (this.node_widget) {
        this.processNodeWidgets(this.node_widget[0], this.graph_mouse, e, this.node_widget[1]);
        this.dirty_canvas = true;
      }

      // get node over
      var node = this.graph.getNodeOnPos(e.canvasX, e.canvasY, this.visible_nodes);
      this.over_node = node;
      if (this.dragging_rectangle) {
        LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "making rectangle");
        this.dragging_rectangle[2] = e.canvasX - this.dragging_rectangle[0];
        this.dragging_rectangle[3] = e.canvasY - this.dragging_rectangle[1];
        this.dirty_canvas = true;
      } else if (this.selected_group && !this.read_only) {
        // moving/resizing a group
        if (this.selected_group_resizing) {
          LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "resizing group");
          this.selected_group.size = [e.canvasX - this.selected_group.pos[0], e.canvasY - this.selected_group.pos[1]];
        } else {
          LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "dragging group");
          var deltax = delta[0] / this.ds.scale;
          var deltay = delta[1] / this.ds.scale;
          this.selected_group.move(deltax, deltay, e.ctrlKey);
          if (this.selected_group._nodes.length) {
            this.dirty_canvas = true;
          }
          if (deltax || deltay) {
            this.processCallbackHandlers("onGroupMoving", {
              def_cb: this.onGroupMoving
            }, this.selected_group, deltax, deltay);
          }
        }
        this.dirty_bgcanvas = true;
      } else if (this.dragging_canvas) {
        LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "dragging_canvas");
        this.ds.offset[0] += delta[0] / this.ds.scale;
        this.ds.offset[1] += delta[1] / this.ds.scale;
        this.dirty_canvas = true;
        this.dirty_bgcanvas = true;
      } else if ((this.allow_interaction || node && node.flags.allow_interaction) && !this.read_only) {
        if (this.connecting_node) {
          this.dirty_canvas = true;
        }

        // remove mouseover flag
        for (var i = 0, l = this.graph._nodes.length; i < l; ++i) {
          if (this.graph._nodes[i].mouseOver && node != this.graph._nodes[i]) {
            // mouse leave
            this.graph._nodes[i].mouseOver = false;
            if (this.node_over) {
              // TAG callback node event entrypoint
              this.node_over.processCallbackHandlers("onMouseLeave", {
                def_cb: this.node_over.onMouseLeave
              }, e);
            }
            this.node_over = null;
            this.dirty_canvas = true;
          }
        }

        // mouse over a node
        if (node) {
          if (node.redraw_on_mouse) this.dirty_canvas = true;

          // this.canvas.style.cursor = "move";
          if (!node.mouseOver) {
            // mouse enter
            node.mouseOver = true;
            this.node_over = node;
            this.dirty_canvas = true;
            // TAG callback node event entrypoint
            node.processCallbackHandlers("onMouseEnter", {
              def_cb: node.onMouseEnter
            }, e);
          }

          // in case the node wants to do something
          // TAG callback node event entrypoint
          node.processCallbackHandlers("onMouseMove", {
            def_cb: node.onMouseMove
          }, e, [e.canvasX - node.pos[0], e.canvasY - node.pos[1]], this);

          // TODO replace processNodeWidgets for dedicated method to just checking overing: implement int processNodeWidgets too
          var widgetOver = this.processNodeWidgets(node, this.graph_mouse); // not passing event! just check, e );
          if (widgetOver) {
            this.over_widget = widgetOver;
          }

          // if dragging a link
          if (this.connecting_node) {
            var pos;
            if (this.connecting_output) {
              pos = this._highlight_input || [0, 0]; // to store the output of isOverNodeInput

              // on top of input
              if (!this.isOverNodeBox(node, e.canvasX, e.canvasY)) {
                // check if I have a slot below de mouse
                var slot = this.isOverNodeInput(node, e.canvasX, e.canvasY, pos);
                if (slot != -1 && node.inputs[slot]) {
                  var slot_type = node.inputs[slot].type;
                  if (LiteGraph.isValidConnection(this.connecting_output.type, slot_type)) {
                    this._highlight_input = pos;
                    this._highlight_input_slot = node.inputs[slot]; // @TODO CHECK THIS
                  }
                } else {
                  this._highlight_input = null;
                  this._highlight_input_slot = null; // @TODO CHECK THIS
                }
              }
            } else if (this.connecting_input) {
              pos = this._highlight_output || [0, 0]; // to store the output of isOverNodeOutput

              // on top of output
              if (this.isOverNodeBox(node, e.canvasX, e.canvasY)) {
                // check if I have a slot below de mouse
                var _slot2 = this.isOverNodeOutput(node, e.canvasX, e.canvasY, pos);
                if (_slot2 != -1 && node.outputs[_slot2]) {
                  var _slot_type = node.outputs[_slot2].type;
                  if (LiteGraph.isValidConnection(this.connecting_input.type, _slot_type)) {
                    this._highlight_output = pos;
                  }
                } else {
                  this._highlight_output = null;
                }
              }
            }
          }

          // Search for corner
          if (this.canvas) {
            if (LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, node.pos[0] + node.size[0] - 5, node.pos[1] + node.size[1] - 5, 5, 5)) {
              this.canvas.style.cursor = "se-resize";
            } else {
              this.canvas.style.cursor = "crosshair";
            }
          }
        } else {
          // not over a node

          // search for link connector
          var over_link = null;
          for (var _i6 = 0; _i6 < this.visible_links.length; ++_i6) {
            var link = this.visible_links[_i6];
            var center = link._pos;
            if (!center || e.canvasX < center[0] - 4 || e.canvasX > center[0] + 4 || e.canvasY < center[1] - 4 || e.canvasY > center[1] + 4) {
              continue;
            }
            over_link = link;
            break;
          }
          if (over_link != this.over_link_center) {
            this.over_link_center = over_link;
            this.dirty_canvas = true;
          }
          if (this.canvas) {
            this.canvas.style.cursor = "";
          }
        } // end

        // send event to node if capturing input (used with widgets that allow drag outside of the area of the node)
        if (this.node_capturing_input && this.node_capturing_input != node) {
          // TAG callback node event entrypoint
          this.node_capturing_input.processCallbackHandlers("onMouseMove", {
            def_cb: this.node_capturing_input.onMouseMove
          }, e, [e.canvasX - this.node_capturing_input.pos[0], e.canvasY - this.node_capturing_input.pos[1]], this);
        }

        // node being dragged
        if (this.node_dragged && !this.live_mode) {
          LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "draggin!", this.selected_nodes);
          for (var _i7 in this.selected_nodes) {
            var n = this.selected_nodes[_i7];
            var off = [delta[0] / this.ds.scale, delta[1] / this.ds.scale];
            n.pos[0] += off[0];
            n.pos[1] += off[1];
            if (!n.is_selected) this.processNodeSelected(n, e);
            // Don't call the function if the block is already selected. Otherwise, it could cause the block to be unselected while dragging.
            n.processCallbackHandlers("onDrag", {
              def_cb: n.onDrag
            }, off);
          }
          this.dirty_canvas = true;
          this.dirty_bgcanvas = true;
        }
        if (this.resizing_node && !this.live_mode) {
          // convert mouse to node space
          var desired_size = [e.canvasX - this.resizing_node.pos[0], e.canvasY - this.resizing_node.pos[1]];
          var min_size = this.free_resize ? LiteGraph.NODE_MIN_SIZE : this.resizing_node.computeSize(); //this.resizing_node.size_basic; // .computeSize();
          desired_size[0] = Math.max(min_size[0], desired_size[0]);
          desired_size[1] = Math.max(min_size[1], desired_size[1]);
          this.resizing_node.setSize(desired_size);
          this.canvas.style.cursor = "se-resize";
          this.dirty_canvas = true;
          this.dirty_bgcanvas = true;
        }
      } else {
        if (this.read_only) {
          LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "canvas is read only", this);
        } else {
          // interaction not allowed
          LiteGraph.log_verbose("lgraphcanvas", "processMouseMove", "interaction not allowed (nor canvas and node)", this.allow_interaction, node.flags);
        }
      }
      e.preventDefault();
      return false;
    }

    /**
     * Called when a mouse up event has to be processed
     * @method processMouseUp
     **/
  }, {
    key: "processMouseUp",
    value: function processMouseUp(e) {
      var is_primary = e.isPrimary === undefined || e.isPrimary;

      // early exit for extra pointer
      if (!is_primary) {
        /* e.stopPropagation();
        e.preventDefault();*/
        LiteGraph.log_verbose("pointerevents: processMouseUp pointerN_stop " + e.pointerId + " " + e.isPrimary);
        return false;
      }
      LiteGraph.log_verbose("pointerevents: processMouseUp " + e.pointerId + " " + e.isPrimary + " :: " + e.clientX + " " + e.clientY);
      if (this.set_canvas_dirty_on_mouse_event) this.dirty_canvas = true;
      if (!this.graph) {
        LiteGraph.log_warn("lgraphcanvas", "processMouseUp", "has not graph", this);
        return;
      }
      var window = this.getCanvasWindow();
      var document = window.document;
      LGraphCanvas.active_canvas = this;

      // restore the mousemove event back to the canvas
      if (!this.options.skip_events) {
        LiteGraph.log_verbose("pointerevents: processMouseUp restoreEventListener");
        document.removeEventListener("pointermove", this._mousemove_callback, true);
        this.canvas.addEventListener("pointermove", this._mousemove_callback);
        document.removeEventListener("pointerup", this._mouseup_callback, true);
      }
      this.adjustMouseEvent(e);
      var now = LiteGraph.getTime();
      e.click_time = now - this.last_mouseclick;
      this.last_mouse_dragging = false;
      this.last_click_position = null;
      if (this.block_click) {
        LiteGraph.log_verbose("pointerevents: processMouseUp block_clicks");
        this.block_click = false; // used to avoid sending twice a click in a immediate button
      }
      LiteGraph.log_debug("pointerevents: processMouseUp which: " + e.which);
      if (e.which == 1) {
        if (this.node_widget) {
          this.processNodeWidgets(this.node_widget[0], this.graph_mouse, e);
        }

        // left button
        this.node_widget = null;
        if (this.selected_group) {
          var diffx = this.selected_group.pos[0] - Math.round(this.selected_group.pos[0]);
          var diffy = this.selected_group.pos[1] - Math.round(this.selected_group.pos[1]);
          this.selected_group.move(diffx, diffy, e.ctrlKey);
          this.selected_group.pos[0] = Math.round(this.selected_group.pos[0]);
          this.selected_group.pos[1] = Math.round(this.selected_group.pos[1]);
          if (this.selected_group._nodes.length) {
            this.dirty_canvas = true;
          }
          this.selected_group.recomputeInsideNodes();
          if (this.selected_group_resizing) {
            this.processCallbackHandlers("onGroupResized", {
              def_cb: this.onGroupResized
            }, this.selected_group);
            this.graph.onGraphChanged({
              action: "groupResize",
              doSave: true
            });
            this.graph.afterChange(); // this.selected_group
          } else {
            if (diffx || diffy) {
              this.processCallbackHandlers("onGroupMoved", {
                def_cb: this.onGroupMoved
              }, this.selected_group);
              this.graph.onGraphChanged({
                action: "groupMove",
                doSave: true
              });
              this.graph.afterChange(); // this.selected_group
            }
          }
          this.selected_group = null;
        }
        this.selected_group_resizing = false;
        var node = this.graph.getNodeOnPos(e.canvasX, e.canvasY, this.visible_nodes);
        if (this.dragging_rectangle) {
          if (this.graph) {
            var nodes = this.graph._nodes;
            var node_bounding = new Float32Array(4);

            // compute bounding and flip if left to right
            var w = Math.abs(this.dragging_rectangle[2]);
            var h = Math.abs(this.dragging_rectangle[3]);
            var startx = this.dragging_rectangle[2] < 0 ? this.dragging_rectangle[0] - w : this.dragging_rectangle[0];
            var starty = this.dragging_rectangle[3] < 0 ? this.dragging_rectangle[1] - h : this.dragging_rectangle[1];
            this.dragging_rectangle[0] = startx;
            this.dragging_rectangle[1] = starty;
            this.dragging_rectangle[2] = w;
            this.dragging_rectangle[3] = h;

            // test dragging rect size, if minimun simulate a click
            if (!node || w > 10 && h > 10) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseUp", "computing box selection for nodes", this.dragging_rectangle);
              // test against all nodes (not visible because the rectangle maybe start outside
              var to_select = [];
              for (var i = 0; i < nodes.length; ++i) {
                var nodeX = nodes[i];
                nodeX.getBounding(node_bounding);
                if (!LiteGraph.overlapBounding(this.dragging_rectangle, node_bounding)) {
                  continue;
                } // out of the visible area
                to_select.push(nodeX);
              }
              if (to_select.length) {
                LiteGraph.log_debug("lgraphcanvas", "processMouseUp", "selecting nodes", to_select);
                this.selectNodes(to_select, e.shiftKey); // add to selection with shift
              }
            } else {
              // will select of update selection
              this.selectNodes([node], e.shiftKey || e.ctrlKey); // add to selection add to selection with ctrlKey or shiftKey
            }
          }
          this.dragging_rectangle = null;
        } else if (this.connecting_node) {
          // dragging a connection
          this.dirty_canvas = true;
          this.dirty_bgcanvas = true;
          var connInOrOut = this.connecting_output || this.connecting_input;
          var connType = connInOrOut.type;
          node = this.graph.getNodeOnPos(e.canvasX, e.canvasY, this.visible_nodes);

          // node below mouse
          if (node) {
            // slot below mouse? connect
            var slot;
            if (this.connecting_output) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseUp", "connecting_output", this.connecting_output, "connecting_node", this.connecting_node, "connecting_slot", this.connecting_slot);
              slot = this.isOverNodeInput(node, e.canvasX, e.canvasY);
              if (slot != -1) {
                this.connecting_node.connect(this.connecting_slot, node, slot);
              } else {
                // not on top of an input
                // look for a good slot
                this.connecting_node.connectByType(this.connecting_slot, node, connType);
              }
            } else if (this.connecting_input) {
              LiteGraph.log_debug("lgraphcanvas", "processMouseUp", "connecting_input", this.connecting_input, "connecting_node", this.connecting_node, "connecting_slot", this.connecting_slot);
              slot = this.isOverNodeOutput(node, e.canvasX, e.canvasY);
              if (slot != -1) {
                if (this.connecting && this.connecting.inputs) {
                  // multi connect
                  for (var iC in this.connecting.inputs) {
                    node.connect(slot, this.connecting.inputs[iC].node, this.connecting.inputs[iC].slot);
                  }
                } else {
                  // default single connect
                  node.connect(slot, this.connecting_node, this.connecting_slot); // this is inverted has output-input nature like
                }
              } else {
                // not on top of an input
                // look for a good slot
                this.connecting_node.connectByTypeOutput(this.connecting_slot, node, connType);
              }
            }
            // }
          } else {
            // add menu when releasing link in empty space
            if (LiteGraph.release_link_on_empty_shows_menu) {
              if (e.shiftKey && this.allow_searchbox) {
                if (this.connecting_output) {
                  this.showSearchBox(e, {
                    node_from: this.connecting_node,
                    slot_from: this.connecting_output,
                    type_filter_in: this.connecting_output.type
                  });
                } else if (this.connecting_input) {
                  this.showSearchBox(e, {
                    node_to: this.connecting_node,
                    slot_from: this.connecting_input,
                    type_filter_out: this.connecting_input.type
                  });
                }
              } else {
                if (this.connecting_output) {
                  this.showConnectionMenu({
                    nodeFrom: this.connecting_node,
                    slotFrom: this.connecting_output,
                    e: e
                  });
                } else if (this.connecting_input) {
                  this.showConnectionMenu({
                    nodeTo: this.connecting_node,
                    slotTo: this.connecting_input,
                    e: e
                  });
                }
              }
            }
          }
          this.connecting_output = null;
          this.connecting_input = null;
          this.connecting_pos = null;
          this.connecting_node = null;
          this.connecting_slot = -1;
          this.connecting = false;
        } else if (this.resizing_node) {
          // not dragging connection
          this.dirty_canvas = true;
          this.dirty_bgcanvas = true;
          this.graph.afterChange(this.resizing_node);
          this.resizing_node = null;
        } else if (this.node_dragged) {
          // node being dragged?
          node = this.node_dragged;
          if (node && e.click_time < 300 && LiteGraph.isInsideRectangle(e.canvasX, e.canvasY, node.pos[0], node.pos[1] - LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT)) {
            node.collapse();
          }
          this.dirty_canvas = true;
          this.dirty_bgcanvas = true;
          this.node_dragged.pos[0] = Math.round(this.node_dragged.pos[0]);
          this.node_dragged.pos[1] = Math.round(this.node_dragged.pos[1]);
          if (this.graph.config.align_to_grid || this.align_to_grid) {
            this.node_dragged.alignToGrid();
          }
          // TAG callback graphrenderer event entrypoint
          this.processCallbackHandlers("onNodeMoved", {
            def_cb: this.onNodeMoved
          }, this.node_dragged, this.selected_nodes);
          // multi nodes dragged ?
          for (var _i8 in this.selected_nodes) {
            var ndrg = this.selected_nodes[_i8];
            ndrg.processCallbackHandlers("onMoved", {
              def_cb: ndrg.onMoved
            }, this.node_dragged, this.selected_nodes);
          }
          this.graph.onGraphChanged({
            action: "nodeDrag",
            doSave: true
          });
          this.graph.afterChange(this.node_dragged);
          this.node_dragged = null;
        } else {
          // no node being dragged
          // get node over
          node = this.graph.getNodeOnPos(e.canvasX, e.canvasY, this.visible_nodes);
          if (!node && e.click_time < 300) {
            this.deselectAllNodes();
          }
          this.dirty_canvas = true;
          this.dragging_canvas = false;
          if (this.node_over) {
            // TAG callback node event entrypoint
            this.node_over.processCallbackHandlers("onMouseUp", {
              def_cb: this.node_over.onMouseUp
            }, e, [e.canvasX - this.node_over.pos[0], e.canvasY - this.node_over.pos[1]], this);
          }
          if (this.node_capturing_input) {
            // TAG callback node event entrypoint
            this.node_capturing_input.processCallbackHandlers("onMouseUp", {
              def_cb: this.node_capturing_input.onMouseUp
            }, e, [e.canvasX - this.node_capturing_input.pos[0], e.canvasY - this.node_capturing_input.pos[1]]);
          }
        }
      } else if (e.which == 2) {
        // middle button
        // trace("middle");
        this.dirty_canvas = true;
        this.dragging_canvas = false;
      } else if (e.which == 3) {
        // right button
        // trace("right");
        this.dirty_canvas = true;
        this.dragging_canvas = false;
      }

      /*
      if((this.dirty_canvas || this.dirty_bgcanvas) && this.rendering_timer_id == null)
          this.draw();
      */

      if (is_primary) {
        this.pointer_is_down = false;
        this.pointer_is_double = false;
      }
      this.graph.change();
      LiteGraph.log_verbose("pointerevents: processMouseUp stopPropagation");
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, {
    key: "isOverNodeBox",
    value:
    /**
     * returns true if a position (in graph space) is on top of a node little corner box
     * @method isOverNodeBox
     **/
    function isOverNodeBox(node, canvasx, canvasy) {
      var title_height = LiteGraph.NODE_TITLE_HEIGHT;
      if (LiteGraph.isInsideRectangle(canvasx, canvasy, node.pos[0] + 2, node.pos[1] + 2 - title_height, title_height - 4, title_height - 4)) {
        return true;
      }
      return false;
    }

    /**
     * returns the INDEX if a position (in graph space) is on top of a node input slot
     * @method isOverNodeInput
     **/
  }, {
    key: "isOverNodeInput",
    value: function isOverNodeInput(node, canvasx, canvasy, slot_pos) {
      if (node.inputs) {
        for (var i = 0, l = node.inputs.length; i < l; ++i) {
          var link_pos = node.getConnectionPos(true, i);
          var is_inside = false;
          if (node.horizontal) {
            is_inside = LiteGraph.isInsideRectangle(canvasx, canvasy, link_pos[0] - 5, link_pos[1] - 10, 10, 20);
          } else {
            is_inside = LiteGraph.isInsideRectangle(canvasx, canvasy, link_pos[0] - 10, link_pos[1] - 5, 40, 10);
          }
          if (is_inside) {
            if (slot_pos) {
              slot_pos[0] = link_pos[0];
              slot_pos[1] = link_pos[1];
            }
            return i;
          }
        }
      }
      return -1;
    }

    /**
     * returns the INDEX if a position (in graph space) is on top of a node output slot
     * @method isOverNodeOuput
     **/
  }, {
    key: "isOverNodeOutput",
    value: function isOverNodeOutput(node, canvasx, canvasy, slot_pos) {
      if (node.outputs) {
        for (var i = 0, l = node.outputs.length; i < l; ++i) {
          var link_pos = node.getConnectionPos(false, i);
          var is_inside = false;
          if (node.horizontal) {
            is_inside = LiteGraph.isInsideRectangle(canvasx, canvasy, link_pos[0] - 5, link_pos[1] - 10, 10, 20);
          } else {
            is_inside = LiteGraph.isInsideRectangle(canvasx, canvasy, link_pos[0] - 10, link_pos[1] - 5, 40, 10);
          }
          if (is_inside) {
            if (slot_pos) {
              slot_pos[0] = link_pos[0];
              slot_pos[1] = link_pos[1];
            }
            return i;
          }
        }
      }
      return -1;
    }
  }, {
    key: "copyToClipboard",
    value: function copyToClipboard() {
      var clipboard_info = {
        nodes: [],
        links: []
      };
      var index = 0;
      var selected_nodes_array = [];
      for (var i in this.selected_nodes) {
        var node = this.selected_nodes[i];
        if (node.clonable === false) continue;
        node._relative_id = index;
        selected_nodes_array.push(node);
        index += 1;
      }
      for (var _i9 = 0; _i9 < selected_nodes_array.length; ++_i9) {
        var _node = selected_nodes_array[_i9];
        if (_node.clonable === false) continue;
        var cloned = _node.clone();
        if (!cloned) {
          LiteGraph.log_warn("node type not found: " + _node.type);
          continue;
        }
        clipboard_info.nodes.push(cloned.serialize());
        if (_node.inputs && _node.inputs.length) {
          for (var j = 0; j < _node.inputs.length; ++j) {
            var input = _node.inputs[j];
            if (!input || input.link == null) {
              continue;
            }
            var link_info = this.graph.links[input.link];
            if (!link_info) {
              continue;
            }
            var target_node = this.graph.getNodeById(link_info.origin_id);
            if (!target_node) {
              continue;
            }
            clipboard_info.links.push([target_node._relative_id, link_info.origin_slot,
            // j,
            _node._relative_id, link_info.target_slot, target_node.id]);
          }
        }
      }
      LiteGraph.log_verbose("copyToClipboard", clipboard_info);
      localStorage.setItem("litegrapheditor_clipboard", JSON.stringify(clipboard_info));
    }
  }, {
    key: "pasteFromClipboard",
    value: function pasteFromClipboard() {
      var isConnectUnselected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // if ctrl + shift + v is off, return when isConnectUnselected is true (shift is pressed) to maintain old behavior
      if (!LiteGraph.ctrl_shift_v_paste_connect_unselected_outputs && isConnectUnselected) {
        return;
      }
      var data = localStorage.getItem("litegrapheditor_clipboard");
      if (!data) {
        return;
      }
      this.graph.beforeChange(); // TODO check and investigate beforeChange afterChange

      // create nodes
      var clipboard_info = JSON.parse(data);
      // calculate top-left node, could work without this processing but using diff with last node pos :: clipboard_info.nodes[clipboard_info.nodes.length-1].pos
      var posMin = false;
      var posMinIndexes = false;
      for (var i = 0; i < clipboard_info.nodes.length; ++i) {
        if (posMin) {
          if (posMin[0] > clipboard_info.nodes[i].pos[0]) {
            posMin[0] = clipboard_info.nodes[i].pos[0];
            posMinIndexes[0] = i;
          }
          if (posMin[1] > clipboard_info.nodes[i].pos[1]) {
            posMin[1] = clipboard_info.nodes[i].pos[1];
            posMinIndexes[1] = i;
          }
        } else {
          posMin = [clipboard_info.nodes[i].pos[0], clipboard_info.nodes[i].pos[1]];
          posMinIndexes = [i, i];
        }
      }
      var nodes = [];
      for (var _i10 = 0; _i10 < clipboard_info.nodes.length; ++_i10) {
        var node_data = clipboard_info.nodes[_i10];
        var node = LiteGraph.createNode(node_data.type);
        if (node) {
          node.configure(node_data);

          // paste in last known mouse position
          node.pos[0] += this.graph_mouse[0] - posMin[0]; // += 5;
          node.pos[1] += this.graph_mouse[1] - posMin[1]; // += 5;

          this.graph.add(node, {
            doProcessChange: false
          });
          nodes.push(node);
        }
      }

      // create links
      for (var _i11 = 0; _i11 < clipboard_info.links.length; ++_i11) {
        var link_info = clipboard_info.links[_i11];
        var origin_node = undefined;
        var origin_node_relative_id = link_info[0];
        if (origin_node_relative_id != null) {
          origin_node = nodes[origin_node_relative_id];
        } else if (LiteGraph.ctrl_shift_v_paste_connect_unselected_outputs && isConnectUnselected) {
          var origin_node_id = link_info[4];
          if (origin_node_id) {
            origin_node = this.graph.getNodeById(origin_node_id);
          }
        }
        var target_node = nodes[link_info[2]];
        if (origin_node && target_node) origin_node.connect(link_info[1], target_node, link_info[3]);else LiteGraph.log_warn("Warning, nodes missing on pasting");
      }
      this.selectNodes(nodes);
      this.graph.onGraphChanged({
        action: "paste",
        doSave: true
      });
      this.graph.afterChange(); // TODO investigate and revise afterChange
    }
  }, {
    key: "checkDropItem",
    value:
    // called if the graph doesn't have a default drop item behaviour
    function checkDropItem(e) {
      if (e.dataTransfer.files.length) {
        var file = e.dataTransfer.files[0];
        var ext = LGraphCanvas.getFileExtension(file.name);
        var nodetype = LiteGraph.node_types_by_file_extension[ext];
        if (nodetype) {
          this.graph.beforeChange();
          var node = LiteGraph.createNode(nodetype.type);
          node.pos = [e.canvasX, e.canvasY];
          this.graph.add(node, false, {
            doProcessChange: false
          });
          node.processCallbackHandlers("onDropFile", {
            def_cb: node.onDropFile
          }, file);
          this.graph.onGraphChanged({
            action: "fileDrop",
            doSave: true
          });
          this.graph.afterChange();
        }
      }
    }
  }, {
    key: "processNodeDblClicked",
    value: function processNodeDblClicked(n) {
      var r = this.processCallbackHandlers("onShowNodePanel", {
        def_cb: this.onShowNodePanel
      }, n);
      if (r === null || _typeof(r) == "object" && (r.return_value === null || !r.return_value)) {
        this.showShowNodePanel(n); // use onShowNodePanel, this is an only local method
      }
      this.processCallbackHandlers("onNodeDblClicked", {
        def_cb: this.onNodeDblClicked
      }, n);
      this.setDirty(true);
    }
  }, {
    key: "processNodeSelected",
    value: function processNodeSelected(node, e) {
      this.selectNode(node, e && (e.shiftKey || e.ctrlKey || this.multi_select));
      this.processCallbackHandlers("onNodeSelected", {
        def_cb: this.onNodeSelected
      }, node);
    }

    /**
     * selects a given node (or adds it to the current selection)
     * @method selectNode
     **/
  }, {
    key: "selectNode",
    value: function selectNode(node, add_to_current_selection) {
      if (node == null) {
        this.deselectAllNodes();
      } else {
        this.selectNodes([node], add_to_current_selection);
      }
    }

    /**
     * selects several nodes (or adds them to the current selection)
     * @method selectNodes
     **/
  }, {
    key: "selectNodes",
    value: function selectNodes(nodes, add_to_current_selection) {
      var _this3 = this;
      if (!add_to_current_selection) {
        this.deselectAllNodes();
      }
      nodes = nodes || this.graph._nodes;
      if (typeof nodes === "string") nodes = [nodes];
      if (typeof nodes.length === "undefined") nodes = [nodes];
      Object.values(nodes).forEach(function (node) {
        var _node$inputs, _node$outputs;
        if (node.is_selected) {
          _this3.deselectNode(node);
          return;
        }
        node.is_selected = true;
        _this3.selected_nodes[node.id] = node;
        node.processCallbackHandlers("onSelected", {
          def_cb: node.onSelected
        });
        (_node$inputs = node.inputs) === null || _node$inputs === void 0 || _node$inputs.forEach(function (input) {
          _this3.highlighted_links[input.link] = true;
        });
        (_node$outputs = node.outputs) === null || _node$outputs === void 0 || _node$outputs.forEach(function (out) {
          var _out$links;
          (_out$links = out.links) === null || _out$links === void 0 || _out$links.forEach(function (link) {
            _this3.highlighted_links[link] = true;
          });
        });
      });
      this.processCallbackHandlers("onSelectionChange", {
        def_cb: this.onSelectionChange
      }, this.selected_nodes);
      this.setDirty(true);
    }

    /**
     * removes a node from the current selection
     * @method deselectNode
     **/
  }, {
    key: "deselectNode",
    value: function deselectNode(node) {
      var _node$inputs2,
        _this4 = this,
        _node$outputs2;
      if (!node.is_selected) return;
      node.processCallbackHandlers("onDeselected", {
        def_cb: node.onDeselected
      });
      node.is_selected = false;
      this.processCallbackHandlers("onNodeDeselected", {
        def_cb: this.onNodeDeselected
      }, node);

      // Remove highlighted
      (_node$inputs2 = node.inputs) === null || _node$inputs2 === void 0 || _node$inputs2.forEach(function (input) {
        var _this4$highlighted_li;
        (_this4$highlighted_li = _this4.highlighted_links) === null || _this4$highlighted_li === void 0 || delete _this4$highlighted_li[input.link];
      });
      (_node$outputs2 = node.outputs) === null || _node$outputs2 === void 0 || _node$outputs2.forEach(function (out) {
        var _out$links2;
        (_out$links2 = out.links) === null || _out$links2 === void 0 || _out$links2.forEach(function (link) {
          var _this4$highlighted_li2;
          return (_this4$highlighted_li2 = _this4.highlighted_links) === null || _this4$highlighted_li2 === void 0 || delete _this4$highlighted_li2[link];
        });
      });
    }

    /**
     * removes all nodes from the current selection
     * @method deselectAllNodes
     **/
  }, {
    key: "deselectAllNodes",
    value: function deselectAllNodes() {
      var _this$graph$_nodes,
        _this5 = this;
      if (!this.graph) {
        return;
      }
      (_this$graph$_nodes = this.graph._nodes) === null || _this$graph$_nodes === void 0 || _this$graph$_nodes.forEach(function (node) {
        if (!node.is_selected) return;
        node.processCallbackHandlers("onDeselected", {
          def_cb: node.onDeselected
        });
        node.is_selected = false;
        _this5.processCallbackHandlers("onNodeDeselected", {
          def_cb: _this5.onNodeDeselected
        }, node);
      });
      this.selected_nodes = {};
      this.current_node = null;
      this.highlighted_links = {};
      this.processCallbackHandlers("onSelectionChange", {
        def_cb: this.onSelectionChange
      }, this.selected_nodes);
      this.setDirty(true);
    }

    /**
     * deletes all nodes in the current selection from the graph
     * @method deleteSelectedNodes
     **/
  }, {
    key: "deleteSelectedNodes",
    value: function deleteSelectedNodes() {
      this.graph.beforeChange();
      for (var i in this.selected_nodes) {
        var node = this.selected_nodes[i];
        if (node.block_delete) continue;

        // TODO make a better version
        // TODO should be an option default off
        // should use auto connect
        // autoconnect when possible (very basic, only takes into account first input-output)
        if (node.inputs && node.inputs.length && node.outputs && node.outputs.length && LiteGraph.isValidConnection(node.inputs[0].type, node.outputs[0].type) && node.inputs[0].link && node.outputs[0].links && node.outputs[0].links.length) {
          var input_link = node.graph.links[node.inputs[0].link];
          var output_link = node.graph.links[node.outputs[0].links[0]];
          var input_node = node.getInputNode(0);
          var output_node = node.getOutputNodes(0)[0];
          if (input_node && output_node) input_node.connect(input_link.origin_slot, output_node, output_link.target_slot);
        }
        this.graph.remove(node);
        this.processCallbackHandlers("onNodeDeselected", {
          def_cb: this.onNodeDeselected
        }, node);
      }
      this.selected_nodes = {};
      this.current_node = null;
      this.highlighted_links = {};
      this.setDirty(true);
      this.graph.afterChange();
    }

    /**
     * centers the camera on a given node
     * @method centerOnNode
     **/
  }, {
    key: "centerOnNode",
    value: function centerOnNode(node) {
      this.ds.offset[0] = -node.pos[0] - node.size[0] * 0.5 + this.canvas.width * 0.5 / this.ds.scale;
      this.ds.offset[1] = -node.pos[1] - node.size[1] * 0.5 + this.canvas.height * 0.5 / this.ds.scale;
      this.setDirty(true, true);
    }
  }, {
    key: "recenter",
    value: function recenter() {
      this.ds.offset[0] = 0;
      this.ds.offset[1] = 0;
      this.setDirty(true, true);
    }

    // BAD WIP
    // TODO check right scaling and positioning
    /*centerOnSelection(){
        // const canvas = LGraphCanvas.active_canvas;
        const bounds = this.getBoundaryForSelection();
        if(bounds){
            const boundPos = [bounds[0], bounds[1]];
            var canvasPos = this.convertCanvasToOffset(boundPos);
            this.ds.offset[0] = canvasPos[0]; // - (this.canvas.width * 0.5) / this.ds.scale;
            this.ds.offset[1] = canvasPos[1]; // - (this.canvas.height * 0.5) / this.ds.scale;
            this.ds.changeScale(this.canvas.width/bounds[2]*2, [canvasPos[0]+bounds[2]/2,canvasPos[1]+bounds[3]/2]);
            this.setDirty(true, true);
            return true;
        }else{
            return false;
        }
    }*/
  }, {
    key: "getMouseCoordinates",
    value: function getMouseCoordinates() {
      return this.graph_mouse;
    }

    // getAdjustedMouseCoordinates(pos){
    //     var clientX_rel = 0;
    //     var clientY_rel = 0;

    //     if (this.canvas) {
    //         var b = this.canvas.getBoundingClientRect();
    //         clientX_rel = pos[0] - b.left;
    //         clientY_rel = pos[1] - b.top;
    //     } else {
    //         clientX_rel = pos[0];
    //         clientY_rel = pos[1];
    //     }

    //     return [clientX_rel / this.ds.scale - this.ds.offset[0]
    //             ,clientY_rel / this.ds.scale - this.ds.offset[1]
    //         ];
    // }

    /**
     * adds some useful properties to a mouse event, like the position in graph coordinates
     * @method adjustMouseEvent
     **/
  }, {
    key: "adjustMouseEvent",
    value: function adjustMouseEvent(e) {
      var clientX_rel = 0;
      var clientX = 0;
      var clientY_rel = 0;
      var clientY = 0;
      if (!e.clientX) {
        // simulate position via event (little hack)
        var mouseCoord = this.getMouseCoordinates();
        var gloCoord = this.convertOffsetToEditorArea(mouseCoord);

        // need prompt to be absolute positioned relative to editor-area that needs relative positioning

        // prevent error for some read-only events: setting getter-only property
        try {
          e.clientX = gloCoord[0];
          e.clientY = gloCoord[1];
        } catch (error) {
          LiteGraph.log_debug("lgraphcanvas", "adjustMouseEvent", "failed set custom prop on event", e);
        }
        clientX = gloCoord[0];
        clientY = gloCoord[1];
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      if (this.canvas) {
        var b = this.canvas.getBoundingClientRect();
        clientX_rel = clientX - b.left;
        clientY_rel = clientY - b.top;
      } else {
        clientX_rel = clientX;
        clientY_rel = clientY;
      }

      // e.deltaX = clientX_rel - this.last_mouse_position[0];
      // e.deltaY = clientY_rel- this.last_mouse_position[1];

      this.last_mouse_position[0] = clientX_rel;
      this.last_mouse_position[1] = clientY_rel;
      e.canvasX = clientX_rel / this.ds.scale - this.ds.offset[0];
      e.canvasY = clientY_rel / this.ds.scale - this.ds.offset[1];

      // DBG EXCESS LiteGraph.log_verbose("pointerevents: adjustMouseEvent "+e.clientX+":"+e.clientY+" "+clientX_rel+":"+clientY_rel+" "+e.canvasX+":"+e.canvasY);
    }

    /**
     * changes the zoom level of the graph (default is 1), you can pass also a place used to pivot the zoom
     * @method setZoom
     **/
  }, {
    key: "setZoom",
    value: function setZoom(value, zooming_center) {
      this.ds.changeScale(value, zooming_center);

      /*
      if(!zooming_center && this.canvas)
          zooming_center = [this.canvas.width * 0.5,this.canvas.height * 0.5];
       var center = this.convertOffsetToCanvas( zooming_center );
       this.ds.scale = value;
       if(this.scale > this.max_zoom)
          this.scale = this.max_zoom;
      else if(this.scale < this.min_zoom)
          this.scale = this.min_zoom;
       var new_center = this.convertOffsetToCanvas( zooming_center );
      var delta_offset = [new_center[0] - center[0], new_center[1] - center[1]];
       this.offset[0] += delta_offset[0];
      this.offset[1] += delta_offset[1];
      */

      this.dirty_canvas = true;
      this.dirty_bgcanvas = true;
    }

    /**
     * converts a coordinate from graph coordinates to canvas2D coordinates
     * @method convertOffsetToCanvas
     **/
  }, {
    key: "convertOffsetToCanvas",
    value: function convertOffsetToCanvas(pos, out) {
      return this.ds.convertOffsetToCanvas(pos, out);
    }

    /**
     * converts a coordinate from Canvas2D coordinates to graph space
     * @method convertCanvasToOffset
     **/
  }, {
    key: "convertCanvasToOffset",
    value: function convertCanvasToOffset(pos, out) {
      return this.ds.convertCanvasToOffset(pos, out);
    }

    /**
     * converts a coordinate from Canvas2D coordinates to global space
     * @method convertCanvasToOffset
     **/
  }, {
    key: "convertOffsetToEditorArea",
    value: function convertOffsetToEditorArea(pos) {
      // working actually for absolute positioning to editor-area eg. prompt with class graphdialog
      var rect = this.canvas.getBoundingClientRect();
      var canvasPos = this.convertOffsetToCanvas(pos);
      // return [canvasPos[0]+rect.left, canvasPos[1]+rect.top];
      return [canvasPos[0] + rect.left, canvasPos[1] + rect.top];
      // not working
      // const canvasAbsPos = this.cumulativeOffset(this.canvas);
      // const canvasPos = this.convertOffsetToCanvas(pos);
      // return [canvasPos[0]+canvasAbsPos[0], pos[1]+canvasAbsPos[1]];
    }

    // converts event coordinates from canvas2D to graph coordinates
  }, {
    key: "convertEventToCanvasOffset",
    value: function convertEventToCanvasOffset(e) {
      var rect = this.canvas.getBoundingClientRect();
      return this.convertCanvasToOffset([e.clientX - rect.left, e.clientY - rect.top]);
    }
  }, {
    key: "cumulativeOffset",
    value: function cumulativeOffset(element) {
      var top = 0,
        left = 0;
      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);
      // return {top: top, left: left};
      return [left, top];
    }

    /**
     * brings a node to front (above all other nodes)
     * @method bringToFront
     **/
  }, {
    key: "bringToFront",
    value: function bringToFront(node) {
      var i = this.graph._nodes.indexOf(node);
      if (i == -1) {
        return;
      }
      this.graph._nodes.splice(i, 1);
      this.graph._nodes.push(node);
    }

    /**
     * sends a node to the back (below all other nodes)
     * @method sendToBack
     **/
  }, {
    key: "sendToBack",
    value: function sendToBack(node) {
      var i = this.graph._nodes.indexOf(node);
      if (i == -1) {
        return;
      }
      this.graph._nodes.splice(i, 1);
      this.graph._nodes.unshift(node);
    }

    /**
     * checks which nodes are visible (inside the camera area)
     * @method computeVisibleNodes
     **/
  }, {
    key: "computeVisibleNodes",
    value: function computeVisibleNodes(nodes, out) {
      var visible_nodes = out || [];
      visible_nodes.length = 0;
      nodes = nodes || this.graph._nodes;
      for (var i = 0, l = nodes.length; i < l; ++i) {
        var n = nodes[i];

        // skip rendering nodes in live mode
        if (this.live_mode && !n.onDrawBackground && !n.onDrawForeground) {
          continue;
        }
        if (!LiteGraph.overlapBounding(this.visible_area, n.getBounding(temp, true))) {
          continue;
        } // out of the visible area

        visible_nodes.push(n);
      }
      return visible_nodes;
    }

    /**
     * renders the whole canvas content, by rendering in two separated canvas, one containing the background grid and the connections, and one containing the nodes)
     * @method draw
     **/
  }, {
    key: "draw",
    value: function draw(force_canvas, force_bgcanvas) {
      if (!this.canvas || this.canvas.width == 0 || this.canvas.height == 0) {
        return;
      }

      // fps counting
      var now = LiteGraph.getTime();
      this.render_time = (now - this.last_draw_time) * 0.001;
      this.last_draw_time = now;
      if (this.graph) {
        this.ds.computeVisibleArea(this.viewport);
      }
      if (this.dirty_bgcanvas || force_bgcanvas || this.always_render_background || this.graph && this.graph._last_trigger_time && now - this.graph._last_trigger_time < 1000) {
        this.drawBackCanvas();
      }
      var draw_front_canvas = this.dirty_canvas || force_canvas;
      if (draw_front_canvas) {
        this.drawFrontCanvas();
      }
      this.fps = this.render_time ? 1.0 / this.render_time : 0;
      this.frame += 1;

      // update low qualty counter
      if (this.ds.scale < 0.7) {
        if (draw_front_canvas) {
          // count only slow frames with havy rendering
          var threshold = this.low_quality_rendering_threshold;
          var acceptable_fps = 45;
          if (this.fps < acceptable_fps) {
            this.low_quality_rendering_counter += acceptable_fps / this.fps;
            this.low_quality_rendering_counter = Math.min(this.low_quality_rendering_counter, 2 * threshold); // clamp counter
          } else {
            // make 100 slower the recovery as there are a lot of cahced rendering calls
            this.low_quality_rendering_counter -= this.fps / acceptable_fps * 0.01;
            this.low_quality_rendering_counter = Math.max(this.low_quality_rendering_counter, 0); // clamp counter
          }
        }
      } else {
        // force reset to high quality when zoomed in
        this.low_quality_rendering_counter = 0;
      }
    }

    /**
     * draws the front canvas (the one containing all the nodes)
     * @method drawFrontCanvas
     **/
  }, {
    key: "drawFrontCanvas",
    value: function drawFrontCanvas() {
      var _ctx$finish2D;
      this.dirty_canvas = false;
      if (!this.ctx) {
        this.ctx = this.bgcanvas.getContext("2d");
      }
      var ctx = this.ctx;
      if (!ctx) {
        // maybe is using webgl...
        LiteGraph.log_warn("lgraphcanvas", "drawFrontCanvas", "no ctx", this);
        return;
      }
      var canvas = this.canvas;
      if (ctx.start2D && !this.viewport) {
        ctx.start2D();
        ctx.restore();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      // clip dirty area if there is one, otherwise work in full canvas
      var area = this.viewport || this.dirty_area;
      if (area) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(area[0], area[1], area[2], area[3]);
        ctx.clip();
      }

      // clear
      // canvas.width = canvas.width;
      if (this.clear_background) {
        if (area) ctx.clearRect(area[0], area[1], area[2], area[3]);else ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // draw bg canvas
      if (this.bgcanvas == this.canvas) {
        this.drawBackCanvas();
      } else {
        ctx.drawImage(this.bgcanvas, 0, 0);
      }

      // rendering
      this.processCallbackHandlers("onRender", {
        def_cb: this.onRender
      }, canvas, ctx);

      // info widget
      if (this.show_info) {
        this.renderInfo(ctx, area ? area[0] : 0, area ? area[1] : 0);
      }
      if (this.graph) {
        // apply transformations
        ctx.save();
        this.ds.toCanvasContext(ctx);
        var visible_nodes = this.computeVisibleNodes(null, this.visible_nodes);
        for (var i = 0; i < visible_nodes.length; ++i) {
          var node = visible_nodes[i];

          // transform coords system
          ctx.save();
          ctx.translate(node.pos[0], node.pos[1]);

          // Draw
          this.drawNode(node, ctx);

          // Restore
          ctx.restore();
        }

        // on top (debug)
        if (this.render_execution_order) {
          this.drawExecutionOrder(ctx);
        }

        // connections ontop?
        if (this.graph.config.links_ontop) {
          if (!this.live_mode) {
            this.drawConnections(ctx);
          }
        }

        // current connection (the one being dragged by the mouse)
        if (this.connecting_pos != null) {
          ctx.lineWidth = this.connections_width;
          var link_color = null;
          var connInOrOut = this.connecting_output || this.connecting_input;
          var connType = connInOrOut.type;
          var connDir = connInOrOut.dir;
          if (connDir == null) {
            if (this.connecting_output) connDir = this.connecting_node.horizontal ? LiteGraph.DOWN : LiteGraph.RIGHT;else connDir = this.connecting_node.horizontal ? LiteGraph.UP : LiteGraph.LEFT;
          }
          var connShape = connInOrOut.shape;
          switch (connType) {
            case LiteGraph.EVENT:
            case LiteGraph.ACTION:
              link_color = LiteGraph.EVENT_LINK_COLOR;
              break;
            default:
              link_color = LiteGraph.CONNECTING_LINK_COLOR;
          }

          // the connection being dragged by the mouse
          this.renderLink(ctx, this.connecting_pos, [this.graph_mouse[0], this.graph_mouse[1]], null, false, null, link_color, connDir, LiteGraph.CENTER);
          ctx.beginPath();
          if (connType === LiteGraph.EVENT || connType === LiteGraph.ACTION || connShape === LiteGraph.BOX_SHAPE) {
            ctx.rect(this.connecting_pos[0] - 6 + 0.5, this.connecting_pos[1] - 5 + 0.5, 14, 10);
            ctx.fill();
            ctx.beginPath();
            ctx.rect(this.graph_mouse[0] - 6 + 0.5, this.graph_mouse[1] - 5 + 0.5, 14, 10);
          } else if (connShape === LiteGraph.ARROW_SHAPE) {
            ctx.moveTo(this.connecting_pos[0] + 8, this.connecting_pos[1] + 0.5);
            ctx.lineTo(this.connecting_pos[0] - 4, this.connecting_pos[1] + 6 + 0.5);
            ctx.lineTo(this.connecting_pos[0] - 4, this.connecting_pos[1] - 6 + 0.5);
            ctx.closePath();
          } else {
            ctx.arc(this.connecting_pos[0], this.connecting_pos[1], 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.graph_mouse[0], this.graph_mouse[1], 4, 0, Math.PI * 2);
          }
          ctx.fill();
          ctx.fillStyle = "#ffcc00";
          if (this._highlight_input) {
            ctx.beginPath();
            var shape = this._highlight_input_slot.shape;
            if (shape === LiteGraph.ARROW_SHAPE) {
              ctx.moveTo(this._highlight_input[0] + 8, this._highlight_input[1] + 0.5);
              ctx.lineTo(this._highlight_input[0] - 4, this._highlight_input[1] + 6 + 0.5);
              ctx.lineTo(this._highlight_input[0] - 4, this._highlight_input[1] - 6 + 0.5);
              ctx.closePath();
            } else {
              ctx.arc(this._highlight_input[0], this._highlight_input[1], 6, 0, Math.PI * 2);
            }
            ctx.fill();
          }
          if (this._highlight_output) {
            ctx.beginPath();
            if (shape === LiteGraph.ARROW_SHAPE) {
              ctx.moveTo(this._highlight_output[0] + 8, this._highlight_output[1] + 0.5);
              ctx.lineTo(this._highlight_output[0] - 4, this._highlight_output[1] + 6 + 0.5);
              ctx.lineTo(this._highlight_output[0] - 4, this._highlight_output[1] - 6 + 0.5);
              ctx.closePath();
            } else {
              ctx.arc(this._highlight_output[0], this._highlight_output[1], 6, 0, Math.PI * 2);
            }
            ctx.fill();
          }
        }

        // the selection rectangle
        if (this.dragging_rectangle) {
          ctx.strokeStyle = "#FFF";
          ctx.strokeRect(this.dragging_rectangle[0], this.dragging_rectangle[1], this.dragging_rectangle[2], this.dragging_rectangle[3]);
        }

        // on top of link center
        if (this.over_link_center && this.render_link_tooltip) {
          this.drawLinkTooltip(ctx, this.over_link_center);
        } else {
          // are we sure to call this here (?) should check for over_link
          this.processCallbackHandlers("onDrawLinkTooltip", {
            def_cb: this.onDrawLinkTooltip
          }, ctx, null);
        }

        // custom info
        this.processCallbackHandlers("onDrawForeground", {
          def_cb: this.onDrawForeground
        }, ctx, this.visible_rect);
        ctx.restore();
      } else {
        LiteGraph.log_warn("lgraphcanvas", "drawFrontCanvas", "no graph", this);
      }

      // draws panel in the corner
      if (this._graph_stack && this._graph_stack.length) {
        this.drawSubgraphPanel(ctx);
      }
      this.processCallbackHandlers("onDrawOverlay", {
        def_cb: this.onDrawOverlay
      }, ctx);
      if (area) {
        ctx.restore();
      }
      (_ctx$finish2D = ctx.finish2D) === null || _ctx$finish2D === void 0 || _ctx$finish2D.call(ctx); // this is a function original developer (Javi tamat) use in webgl renderer
    }

    /**
     * draws the panel in the corner that shows subgraph properties
     * @method drawSubgraphPanel
     **/
  }, {
    key: "drawSubgraphPanel",
    value: function drawSubgraphPanel(ctx) {
      var subgraph = this.graph;
      if (!subgraph) return;
      var subnode = subgraph._subgraph_node;
      if (!subnode) {
        LiteGraph.log_warn("subgraph without subnode");
        return;
      }
      this.drawSubgraphPanelLeft(subgraph, subnode, ctx);
      this.drawSubgraphPanelRight(subgraph, subnode, ctx);
    }
  }, {
    key: "drawSubgraphPanelLeft",
    value: function drawSubgraphPanelLeft(subgraph, subnode, ctx) {
      var num = subnode.inputs ? subnode.inputs.length : 0;
      var w = 200;
      var h = Math.floor(LiteGraph.NODE_SLOT_HEIGHT * 1.6);
      ctx.fillStyle = "#111";
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.roundRect(10, 10, w, (num + 1) * h + 50, [8]);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#888";
      ctx.font = "14px Arial";
      ctx.textAlign = "left";
      ctx.fillText("Graph Inputs", 20, 34);
      // var pos = this.mouse;

      if (this.drawButton(w - 20, 20, 20, 20, "X", "#151515")) {
        this.closeSubgraph();
        return;
      }
      var y = 50;
      ctx.font = "14px Arial";
      if (subnode.inputs) for (var i = 0; i < subnode.inputs.length; ++i) {
        var input = subnode.inputs[i];
        if (input.not_subgraph_input) continue;

        // input button clicked
        if (this.drawButton(20, y + 2, w - 20, h - 2)) {
          var type = subnode.constructor.input_node_type || "graph/input";
          this.graph.beforeChange();
          var newnode = LiteGraph.createNode(type);
          if (newnode) {
            subgraph.add(newnode, false, {
              doProcessChange: false
            });
            this.block_click = false;
            this.last_click_position = null;
            this.selectNodes([newnode]);
            this.node_dragged = newnode;
            this.dragging_canvas = false;
            newnode.setProperty("name", input.name);
            newnode.setProperty("type", input.type);
            this.node_dragged.pos[0] = this.graph_mouse[0] - 5;
            this.node_dragged.pos[1] = this.graph_mouse[1] - 5;
            this.graph.afterChange();
          } else LiteGraph.log_error("graph input node not found:", type);
        }
        ctx.fillStyle = "#9C9";
        ctx.beginPath();
        ctx.arc(w - 16, y + h * 0.5, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#AAA";
        ctx.fillText(input.name, 30, y + h * 0.75);
        // var tw = ctx.measureText(input.name);
        ctx.fillStyle = "#777";
        ctx.fillText(input.type, 130, y + h * 0.75);
        y += h;
      }
      // add + button
      if (this.drawButton(20, y + 2, w - 20, h - 2, "+", "#151515", "#222")) {
        this.showSubgraphPropertiesDialog(subnode);
      }
    }
  }, {
    key: "drawSubgraphPanelRight",
    value: function drawSubgraphPanelRight(subgraph, subnode, ctx) {
      var num = subnode.outputs ? subnode.outputs.length : 0;
      var canvas_w = this.bgcanvas.width;
      var w = 200;
      var h = Math.floor(LiteGraph.NODE_SLOT_HEIGHT * 1.6);
      ctx.fillStyle = "#111";
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.roundRect(canvas_w - w - 10, 10, w, (num + 1) * h + 50, [8]);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#888";
      ctx.font = "14px Arial";
      ctx.textAlign = "left";
      var title_text = "Graph Outputs";
      var tw = ctx.measureText(title_text).width;
      ctx.fillText(title_text, canvas_w - tw - 20, 34);
      // var pos = this.mouse;
      if (this.drawButton(canvas_w - w, 20, 20, 20, "X", "#151515")) {
        this.closeSubgraph();
        return;
      }
      var y = 50;
      ctx.font = "14px Arial";
      if (subnode.outputs) for (var i = 0; i < subnode.outputs.length; ++i) {
        var output = subnode.outputs[i];
        if (output.not_subgraph_input) continue;

        // output button clicked
        if (this.drawButton(canvas_w - w, y + 2, w - 20, h - 2)) {
          var type = subnode.constructor.output_node_type || "graph/output";
          this.graph.beforeChange();
          var newnode = LiteGraph.createNode(type);
          if (newnode) {
            subgraph.add(newnode, false, {
              doProcessChange: false
            });
            this.block_click = false;
            this.last_click_position = null;
            this.selectNodes([newnode]);
            this.node_dragged = newnode;
            this.dragging_canvas = false;
            newnode.setProperty("name", output.name);
            newnode.setProperty("type", output.type);
            this.node_dragged.pos[0] = this.graph_mouse[0] - 5;
            this.node_dragged.pos[1] = this.graph_mouse[1] - 5;
            this.graph.afterChange();
          } else LiteGraph.log_error("graph input node not found:", type);
        }
        ctx.fillStyle = "#9C9";
        ctx.beginPath();
        ctx.arc(canvas_w - w + 16, y + h * 0.5, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#AAA";
        ctx.fillText(output.name, canvas_w - w + 30, y + h * 0.75);
        // var tw = ctx.measureText(input.name);
        ctx.fillStyle = "#777";
        ctx.fillText(output.type, canvas_w - w + 130, y + h * 0.75);
        y += h;
      }
      // add + button
      if (this.drawButton(canvas_w - w, y + 2, w - 20, h - 2, "+", "#151515", "#222")) {
        this.showSubgraphPropertiesDialogRight(subnode);
      }
    }

    // Draws a button into the canvas overlay and computes if it was clicked using the immediate gui paradigm
  }, {
    key: "drawButton",
    value: function drawButton(x, y, w, h, text, bgcolor, hovercolor, textcolor) {
      var ctx = this.ctx;
      bgcolor = bgcolor || LiteGraph.NODE_DEFAULT_COLOR;
      hovercolor = hovercolor || "#555";
      textcolor = textcolor || LiteGraph.NODE_TEXT_COLOR;
      var pos = this.ds.convertOffsetToCanvas(this.graph_mouse);
      var hover = LiteGraph.isInsideRectangle(pos[0], pos[1], x, y, w, h);
      pos = this.last_click_position ? [this.last_click_position[0], this.last_click_position[1]] : null;
      if (pos) {
        var rect = this.canvas.getBoundingClientRect();
        pos[0] -= rect.left;
        pos[1] -= rect.top;
      }
      var clicked = pos && LiteGraph.isInsideRectangle(pos[0], pos[1], x, y, w, h);
      ctx.fillStyle = hover ? hovercolor : bgcolor;
      if (clicked) ctx.fillStyle = "#AAA";
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, [4]);
      ctx.fill();
      if (text != null) {
        if (text.constructor == String) {
          ctx.fillStyle = textcolor;
          ctx.textAlign = "center";
          ctx.font = (h * 0.65 | 0) + "px Arial";
          ctx.fillText(text, x + w * 0.5, y + h * 0.75);
          ctx.textAlign = "left";
        }
      }
      var was_clicked = clicked && !this.block_click;
      if (clicked) this.blockClick();
      return was_clicked;
    }
  }, {
    key: "isAreaClicked",
    value: function isAreaClicked(x, y, w, h, hold_click) {
      var pos = this.last_click_position;
      var clicked = pos && LiteGraph.isInsideRectangle(pos[0], pos[1], x, y, w, h);
      var was_clicked = clicked && !this.block_click;
      if (clicked && hold_click) this.blockClick();
      return was_clicked;
    }

    /**
     * draws some useful stats in the corner of the canvas
     * @method renderInfo
     **/
  }, {
    key: "renderInfo",
    value: function renderInfo(ctx, x, y) {
      x = x || 10;
      y = y || this.canvas.height - 80;
      ctx.save();
      ctx.translate(x, y);
      ctx.font = "10px Arial";
      ctx.fillStyle = "#888";
      ctx.textAlign = "left";
      if (this.graph) {
        ctx.fillText("T: " + this.graph.globaltime.toFixed(2) + "s", 5, 13 * 1);
        ctx.fillText("I: " + this.graph.iteration, 5, 13 * 2);
        ctx.fillText("N: " + this.graph._nodes.length + " [" + this.visible_nodes.length + "]", 5, 13 * 3);
        ctx.fillText("V: " + this.graph._version, 5, 13 * 4);
        ctx.fillText("FPS:" + this.fps.toFixed(2), 5, 13 * 5);
      } else {
        ctx.fillText("No graph selected", 5, 13 * 1);
      }
      ctx.restore();
    }

    /**
     * draws the back canvas (the one containing the background and the connections)
     * @method drawBackCanvas
     **/
  }, {
    key: "drawBackCanvas",
    value: function drawBackCanvas() {
      var _this6 = this,
        _ctx$finish;
      var canvas = this.bgcanvas;

      // ComfyUI compatibility
      // ensure correct sizing
      this.bgcanvas.width = this.canvas.width;
      this.bgcanvas.height = this.canvas.height;
      if (!this.bgctx) {
        this.bgctx = this.bgcanvas.getContext("2d");
      }
      var ctx = this.bgctx;
      if (ctx.start) {
        ctx.start();
      }
      var viewport = this.viewport || [0, 0, ctx.canvas.width, ctx.canvas.height];

      // clear
      if (this.clear_background) {
        ctx.clearRect(viewport[0], viewport[1], viewport[2], viewport[3]);
      }

      // show subgraph stack header
      if (this._graph_stack && this._graph_stack.length) {
        ctx.save();
        var subgraph_node = this.graph._subgraph_node;
        ctx.strokeStyle = subgraph_node.bgcolor;
        ctx.lineWidth = 10;
        ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
        ctx.lineWidth = 1;
        ctx.font = "40px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = subgraph_node.bgcolor || "#AAA";
        var title = "";
        this._graph_stack.slice(1).forEach(function (item, index) {
          title += "".concat(item._subgraph_node.getTitle(), " ").concat(index < _this6._graph_stack.length - 2 ? ">> " : "");
        });
        ctx.fillText(title + subgraph_node.getTitle(), canvas.width * 0.5, 40);
        ctx.restore();
      }
      var bg_already_painted = false;
      var r = this.processCallbackHandlers("onRenderBackground", {
        def_cb: this.onRenderBackground
      }, canvas, ctx);
      if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) {
        bg_already_painted = true;
      }

      // reset in case of error
      if (!this.viewport) {
        ctx.restore();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      this.visible_links.length = 0;
      if (this.graph) {
        // apply transformations
        ctx.save();
        this.ds.toCanvasContext(ctx);

        // render BG
        if (this.ds.scale < 1.5 && !bg_already_painted && this.clear_background_color) {
          ctx.fillStyle = this.clear_background_color;
          ctx.fillRect(this.visible_area[0], this.visible_area[1], this.visible_area[2], this.visible_area[3]);
        }
        if (this.background_image && this.ds.scale > 0.5 && !bg_already_painted) {
          if (this.zoom_modify_alpha) {
            ctx.globalAlpha = (1.0 - 0.5 / this.ds.scale) * this.editor_alpha;
          } else {
            ctx.globalAlpha = this.editor_alpha;
          }
          ctx.imageSmoothingEnabled = ctx.imageSmoothingEnabled = false; // ctx.mozImageSmoothingEnabled =
          if (!this._bg_img || this._bg_img.name != this.background_image) {
            this._bg_img = new Image();
            this._bg_img.name = this.background_image;
            this._bg_img.src = this.background_image;
            var that = this;
            this._bg_img.onload = function () {
              that.draw(true, true);
            };
          }
          var pattern = null;
          if (this._pattern == null && this._bg_img.width > 0) {
            pattern = ctx.createPattern(this._bg_img, "repeat");
            this._pattern_img = this._bg_img;
            this._pattern = pattern;
          } else {
            pattern = this._pattern;
          }
          if (pattern) {
            ctx.fillStyle = pattern;
            ctx.fillRect(this.visible_area[0], this.visible_area[1], this.visible_area[2], this.visible_area[3]);
            ctx.fillStyle = "transparent";
          }
          ctx.globalAlpha = 1.0;
          ctx.imageSmoothingEnabled = ctx.imageSmoothingEnabled = true; // = ctx.mozImageSmoothingEnabled
        }

        // groups
        if (this.graph._groups.length && !this.live_mode) {
          this.drawGroups(canvas, ctx);
        }
        this.processCallbackHandlers("onDrawBackground", {
          def_cb: this.onDrawBackground
        }, ctx, this.visible_area);
        if (this.onBackgroundRender) {
          // LEGACY
          LiteGraph.log_error("WARNING! onBackgroundRender deprecated, now is named onDrawBackground ");
          this.onBackgroundRender = null;
        }

        // DEBUG: show clipping area
        // ctx.fillStyle = "red";
        // ctx.fillRect( this.visible_area[0] + 10, this.visible_area[1] + 10, this.visible_area[2] - 20, this.visible_area[3] - 20);

        // bg
        if (this.render_canvas_border) {
          ctx.strokeStyle = "#235";
          ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }
        if (this.render_connections_shadows) {
          ctx.shadowColor = "#000";
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowColor = "rgba(0,0,0,0)";
        }

        // draw connections
        if (!this.live_mode) {
          this.drawConnections(ctx);
        }
        ctx.shadowColor = "rgba(0,0,0,0)";

        // restore state
        ctx.restore();
      }
      (_ctx$finish = ctx.finish) === null || _ctx$finish === void 0 || _ctx$finish.call(ctx);
      this.dirty_bgcanvas = false;
      this.dirty_canvas = true; // to force to repaint the front canvas with the bgcanvas
    }

    /**
     * draws the given node inside the canvas
     * @method drawNode
     **/
  }, {
    key: "drawNode",
    value: function drawNode(node, ctx) {
      this.current_node = node;
      var color = node.color || node.constructor.color || LiteGraph.NODE_DEFAULT_COLOR;
      var bgcolor = node.bgcolor || node.constructor.bgcolor || LiteGraph.NODE_DEFAULT_BGCOLOR;
      var low_quality = this.ds.scale < 0.6; // zoomed out

      // only render if it forces it to do it
      if (this.live_mode) {
        if (!node.flags.collapsed) {
          ctx.shadowColor = "transparent";
          node.processCallbackHandlers("onDrawForeground", {
            def_cb: node.onDrawForeground
          }, ctx, this, this.canvas);
        }
        return;
      }
      var editor_alpha = this.editor_alpha;
      ctx.globalAlpha = editor_alpha;
      if (this.render_shadows && !low_quality) {
        ctx.shadowColor = LiteGraph.DEFAULT_SHADOW_COLOR;
        ctx.shadowOffsetX = 2 * this.ds.scale;
        ctx.shadowOffsetY = 2 * this.ds.scale;
        ctx.shadowBlur = 3 * this.ds.scale;
      } else {
        ctx.shadowColor = "transparent";
      }

      // custom draw collapsed method (draw after shadows because they are affected)
      if (node.flags.collapsed) {
        var r = node.processCallbackHandlers("onDrawCollapsed", {
          def_cb: node.onDrawCollapsed
        }, ctx, this);
        if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) {
          return;
        }
      }

      // clip if required (mask)
      var shape = node._shape || LiteGraph.BOX_SHAPE;
      var size = temp_vec2;
      temp_vec2.set(node.size);
      var horizontal = node.horizontal; // || node.flags.horizontal;

      if (node.flags.collapsed) {
        ctx.font = this.title_text_font;
        var title = node.getTitle ? node.getTitle() : node.title;
        if (title != null) {
          node._collapsed_width = Math.min(node.size[0], ctx.measureText(title).width + LiteGraph.NODE_TITLE_HEIGHT * 2); // LiteGraph.NODE_COLLAPSED_WIDTH;
          size[0] = node._collapsed_width;
          size[1] = 0;
        }
      }
      if (node.clip_area || this.clip_all_nodes) {
        // Start clipping
        ctx.save();
        ctx.beginPath();
        if (shape == LiteGraph.BOX_SHAPE) {
          ctx.rect(0, 0, size[0], size[1]);
        } else if (shape == LiteGraph.ROUND_SHAPE) {
          ctx.roundRect(0, 0, size[0], size[1], [10]);
        } else if (shape == LiteGraph.CIRCLE_SHAPE) {
          ctx.arc(size[0] * 0.5, size[1] * 0.5, size[0] * 0.5, 0, Math.PI * 2);
        }
        ctx.clip();
      }

      // draw shape
      if (node.has_errors) {
        bgcolor = "red";
      }
      this.drawNodeShape(node, ctx, size, color, bgcolor, node.is_selected, node.mouseOver);
      ctx.shadowColor = "transparent";

      // draw foreground
      node.processCallbackHandlers("onDrawForeground", {
        def_cb: node.onDrawForeground
      }, ctx, this, this.canvas);

      // node tooltip
      if (LiteGraph.show_node_tooltip && node.mouseOver && node.is_selected && (!this.selected_nodes || Object.keys(this.selected_nodes).length <= 1)) {
        this.drawNodeTooltip(ctx, node);
      }

      // connection slots
      ctx.textAlign = horizontal ? "center" : "left";
      ctx.font = this.inner_text_font;
      var render_text = !this.lowQualityRenderingRequired(0.6);
      var out_slot = this.connecting_output;
      var in_slot = this.connecting_input;
      ctx.lineWidth = 1;
      var max_y = 0;
      var slot_pos = new Float32Array(2); // to reuse
      var doStroke;

      // render inputs and outputs
      if (!node.flags.collapsed) {
        // input connection slots
        if (node.inputs) {
          for (var i = 0; i < node.inputs.length; i++) {
            var slot = node.inputs[i];
            var slot_type = slot.type;
            var slot_shape = slot.shape;
            ctx.globalAlpha = editor_alpha;
            // change opacity of incompatible slots when dragging a connection
            if (this.connecting_output && !LiteGraph.isValidConnection(slot.type, out_slot.type)) {
              ctx.globalAlpha = 0.4 * editor_alpha;
            }
            ctx.fillStyle = slot.link != null ? slot.color_on || this.default_connection_color_byType[slot_type] || this.default_connection_color.input_on : slot.color_off || this.default_connection_color_byTypeOff[slot_type] || this.default_connection_color_byType[slot_type] || this.default_connection_color.input_off;
            var pos = node.getConnectionPos(true, i, slot_pos);
            pos[0] -= node.pos[0];
            pos[1] -= node.pos[1];
            if (max_y < pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5) {
              max_y = pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5;
            }
            ctx.beginPath();
            if (slot_type == "array") {
              slot_shape = LiteGraph.GRID_SHAPE; // place in addInput? addOutput instead?
            } else if (slot.name == "onTrigger" || slot.name == "onExecuted") {
              slot_shape = LiteGraph.ARROW_SHAPE;
            } else if (slot_type === LiteGraph.EVENT || slot_type === LiteGraph.ACTION) {
              slot_shape = LiteGraph.BOX_SHAPE;
            }
            doStroke = true;
            if (slot_shape === LiteGraph.BOX_SHAPE) {
              if (horizontal) {
                ctx.rect(pos[0] - 5 + 0.5, pos[1] - 8 + 0.5, 10, 14);
              } else {
                ctx.rect(pos[0] - 6 + 0.5, pos[1] - 5 + 0.5, 14, 10);
              }
            } else if (slot_shape === LiteGraph.ARROW_SHAPE) {
              ctx.moveTo(pos[0] + 8, pos[1] + 0.5);
              ctx.lineTo(pos[0] - 4, pos[1] + 6 + 0.5);
              ctx.lineTo(pos[0] - 4, pos[1] - 6 + 0.5);
              ctx.closePath();
            } else if (slot_shape === LiteGraph.GRID_SHAPE) {
              ctx.rect(pos[0] - 4, pos[1] - 4, 2, 2);
              ctx.rect(pos[0] - 1, pos[1] - 4, 2, 2);
              ctx.rect(pos[0] + 2, pos[1] - 4, 2, 2);
              ctx.rect(pos[0] - 4, pos[1] - 1, 2, 2);
              ctx.rect(pos[0] - 1, pos[1] - 1, 2, 2);
              ctx.rect(pos[0] + 2, pos[1] - 1, 2, 2);
              ctx.rect(pos[0] - 4, pos[1] + 2, 2, 2);
              ctx.rect(pos[0] - 1, pos[1] + 2, 2, 2);
              ctx.rect(pos[0] + 2, pos[1] + 2, 2, 2);
              doStroke = false;
            } else {
              if (low_quality) ctx.rect(pos[0] - 4, pos[1] - 4, 8, 8); // faster
              else ctx.arc(pos[0], pos[1], 4, 0, Math.PI * 2);
            }
            ctx.fill();

            // render name
            if (render_text && !(slot.name == "onTrigger" || slot.name == "onExecuted")) {
              var text = slot.label != null ? slot.label : slot.name;
              if (text) {
                ctx.fillStyle = LiteGraph.NODE_TEXT_COLOR;
                if (horizontal || slot.dir == LiteGraph.UP) {
                  ctx.fillText(text, pos[0], pos[1] - 10);
                } else {
                  ctx.fillText(text, pos[0] + 10, pos[1] + 5);
                }
              }
            }
          }
        }

        // output connection slots

        ctx.textAlign = horizontal ? "center" : "right";
        ctx.strokeStyle = "black";
        if (node.outputs) {
          for (var _i12 = 0; _i12 < node.outputs.length; _i12++) {
            var _slot3 = node.outputs[_i12];
            var _slot_type2 = _slot3.type;
            var _slot_shape = _slot3.shape;

            // change opacity of incompatible slots when dragging a connection
            if (this.connecting_input && !LiteGraph.isValidConnection(_slot_type2, in_slot.type)) {
              ctx.globalAlpha = 0.4 * editor_alpha;
            }
            var _pos = node.getConnectionPos(false, _i12, slot_pos);
            _pos[0] -= node.pos[0];
            _pos[1] -= node.pos[1];
            if (max_y < _pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5) {
              max_y = _pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5;
            }
            ctx.fillStyle = _slot3.links && _slot3.links.length ? _slot3.color_on || this.default_connection_color_byType[_slot_type2] || this.default_connection_color.output_on : _slot3.color_off || this.default_connection_color_byTypeOff[_slot_type2] || this.default_connection_color_byType[_slot_type2] || this.default_connection_color.output_off;
            ctx.beginPath();
            // ctx.rect( node.size[0] - 14,i*14,10,10);

            if (_slot_type2 == "array") {
              _slot_shape = LiteGraph.GRID_SHAPE;
            } else if (_slot3.name == "onTrigger" || _slot3.name == "onExecuted") {
              _slot_shape = LiteGraph.ARROW_SHAPE;
            } else if (_slot_type2 === LiteGraph.EVENT || _slot_type2 === LiteGraph.ACTION) {
              _slot_shape = LiteGraph.BOX_SHAPE;
            }
            doStroke = true;
            if (_slot_shape === LiteGraph.BOX_SHAPE) {
              if (horizontal) {
                ctx.rect(_pos[0] - 5 + 0.5, _pos[1] - 8 + 0.5, 10, 14);
              } else {
                ctx.rect(_pos[0] - 6 + 0.5, _pos[1] - 5 + 0.5, 14, 10);
              }
            } else if (_slot_shape === LiteGraph.ARROW_SHAPE) {
              ctx.moveTo(_pos[0] + 8, _pos[1] + 0.5);
              ctx.lineTo(_pos[0] - 4, _pos[1] + 6 + 0.5);
              ctx.lineTo(_pos[0] - 4, _pos[1] - 6 + 0.5);
              ctx.closePath();
            } else if (_slot_shape === LiteGraph.GRID_SHAPE) {
              ctx.rect(_pos[0] - 4, _pos[1] - 4, 2, 2);
              ctx.rect(_pos[0] - 1, _pos[1] - 4, 2, 2);
              ctx.rect(_pos[0] + 2, _pos[1] - 4, 2, 2);
              ctx.rect(_pos[0] - 4, _pos[1] - 1, 2, 2);
              ctx.rect(_pos[0] - 1, _pos[1] - 1, 2, 2);
              ctx.rect(_pos[0] + 2, _pos[1] - 1, 2, 2);
              ctx.rect(_pos[0] - 4, _pos[1] + 2, 2, 2);
              ctx.rect(_pos[0] - 1, _pos[1] + 2, 2, 2);
              ctx.rect(_pos[0] + 2, _pos[1] + 2, 2, 2);
              doStroke = false;
            } else {
              if (low_quality) ctx.rect(_pos[0] - 4, _pos[1] - 4, 8, 8);else ctx.arc(_pos[0], _pos[1], 4, 0, Math.PI * 2);
            }

            // trigger
            // if(slot.node_id != null && slot.slot == -1)
            //	ctx.fillStyle = "#F85";

            // if(slot.links != null && slot.links.length)
            ctx.fill();
            if (!low_quality && doStroke) ctx.stroke();

            // render output name
            if (render_text && !(_slot3.name == "onTrigger" || _slot3.name == "onExecuted")) {
              var _text = _slot3.label != null ? _slot3.label : _slot3.name;
              if (_text) {
                ctx.fillStyle = LiteGraph.NODE_TEXT_COLOR;
                if (horizontal || _slot3.dir == LiteGraph.DOWN) {
                  ctx.fillText(_text, _pos[0], _pos[1] - 8);
                } else {
                  ctx.fillText(_text, _pos[0] - 10, _pos[1] + 5);
                }
              }
            }
          }
        }
        ctx.textAlign = "left";
        ctx.globalAlpha = 1;
        if (node.widgets) {
          var widgets_y = max_y;
          if (horizontal || node.widgets_up) {
            widgets_y = 2;
          }
          if (node.widgets_start_y != null) widgets_y = node.widgets_start_y;
          this.drawNodeWidgets(node, widgets_y, ctx, this.node_widget && this.node_widget[0] == node ? this.node_widget[1] : null);
        }
      } else if (this.render_collapsed_slots) {
        // if collapsed
        var input_slot = null;
        var output_slot = null;

        // get first connected slot to render
        if (node.inputs) {
          for (var _i13 = 0; _i13 < node.inputs.length; _i13++) {
            var slot_i = node.inputs[_i13];
            if (slot_i.link == null) {
              continue;
            }
            input_slot = slot_i;
            break;
          }
        }
        if (node.outputs) {
          for (var _i14 = 0; _i14 < node.outputs.length; _i14++) {
            var slot_o = node.outputs[_i14];
            if (!slot_o.links || !slot_o.links.length) {
              continue;
            }
            output_slot = slot_o;
          }
        }
        if (input_slot) {
          var x = 0;
          var y = LiteGraph.NODE_TITLE_HEIGHT * -0.5; // center
          if (horizontal) {
            x = node._collapsed_width * 0.5;
            y = -LiteGraph.NODE_TITLE_HEIGHT;
          }
          ctx.fillStyle = "#686";
          ctx.beginPath();
          if (input_slot.type === LiteGraph.EVENT || input_slot.type === LiteGraph.ACTION || input_slot.shape === LiteGraph.BOX_SHAPE) {
            ctx.rect(x - 7 + 0.5, y - 4, 14, 8);
          } else if (input_slot.shape === LiteGraph.ARROW_SHAPE) {
            ctx.moveTo(x + 8, y);
            ctx.lineTo(x + -4, y - 4);
            ctx.lineTo(x + -4, y + 4);
            ctx.closePath();
          } else {
            ctx.arc(x, y, 4, 0, Math.PI * 2);
          }
          ctx.fill();
        }
        if (output_slot) {
          var _x = node._collapsed_width;
          var _y = LiteGraph.NODE_TITLE_HEIGHT * -0.5; // center
          if (horizontal) {
            _x = node._collapsed_width * 0.5;
            _y = 0;
          }
          ctx.fillStyle = "#686";
          ctx.strokeStyle = "black";
          ctx.beginPath();
          if (output_slot.type === LiteGraph.EVENT || output_slot.type === LiteGraph.ACTION || output_slot.shape === LiteGraph.BOX_SHAPE) {
            ctx.rect(_x - 7 + 0.5, _y - 4, 14, 8);
          } else if (output_slot.shape === LiteGraph.ARROW_SHAPE) {
            ctx.moveTo(_x + 6, _y);
            ctx.lineTo(_x - 6, _y - 4);
            ctx.lineTo(_x - 6, _y + 4);
            ctx.closePath();
          } else {
            ctx.arc(_x, _y, 4, 0, Math.PI * 2);
          }
          ctx.fill();
          // ctx.stroke();
        }
      }
      if (node.clip_area || this.clip_all_nodes) {
        ctx.restore();
      }
      ctx.globalAlpha = 1.0;
    }
  }, {
    key: "drawNodeTooltip",
    value: function drawNodeTooltip(ctx, node) {
      if (!node || !ctx) {
        LiteGraph.log_warn("drawNodeTooltip: invalid node or ctx", node, ctx);
        return;
      }
      var text = node.properties.tooltip != undefined ? node.properties.tooltip : "";
      if (!text || text == "") {
        if (LiteGraph.show_node_tooltip_use_descr_property && node.constructor.desc) {
          text = node.constructor.desc;
        }
      }
      text = (text + "").trim();
      if (!text || text == "") {
        // DBG("Empty tooltip");
        return;
      }
      var pos = [0, -LiteGraph.NODE_TITLE_HEIGHT]; // node.pos;
      // text = text.substr(0,30); //avoid weird
      // text = text + "\n" + text;
      var size = node.flags.collapsed ? [LiteGraph.NODE_COLLAPSED_WIDTH, LiteGraph.NODE_TITLE_HEIGHT] : node.size;

      // using a trick to save the calculated height of the tip the first time using trasparent, to than show it
      // node.ttip_oTMultiRet is not set or false the first time

      ctx.font = "14px Courier New";
      // var info = ctx.measureText(text);
      var w = Math.max(node.size[0], 160) + 20; // info.width + 20;
      var h = node.ttip_oTMultiRet ? node.ttip_oTMultiRet.height + 15 : 21;
      ctx.globalAlpha = 0.7 * this.editor_alpha;
      ctx.shadowColor = node.ttip_oTMultiRet ? "black" : "transparent";
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 3;
      ctx.fillStyle = node.ttip_oTMultiRet ? "#454" : "transparent";
      ctx.beginPath();
      ctx.roundRect(pos[0] - w * 0.5 + size[0] / 2, pos[1] - 15 - h, w, h, [3]);
      ctx.moveTo(pos[0] - 10 + size[0] / 2, pos[1] - 15);
      ctx.lineTo(pos[0] + 10 + size[0] / 2, pos[1] - 15);
      ctx.lineTo(pos[0] + size[0] / 2, pos[1] - 5);
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.textAlign = "center";
      ctx.fillStyle = node.ttip_oTMultiRet ? "#CEC" : "transparent";
      ctx.globalAlpha = this.editor_alpha;

      // ctx.fillText(text, pos[0] + size[0]/2, pos[1] - 15 - h * 0.3);
      var oTMultiRet = LiteGraph.canvasFillTextMultiline(ctx, text, pos[0] + size[0] / 2, pos[1] - h, w, 14);
      node.ttip_oTMultiRet = oTMultiRet;
      ctx.closePath();
    }

    // used by this.over_link_center
  }, {
    key: "drawLinkTooltip",
    value: function drawLinkTooltip(ctx, link) {
      var pos = link._pos;
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 3, 0, Math.PI * 2);
      ctx.fill();
      if (link.data == null) return;
      var r = this.processCallbackHandlers("onDrawLinkTooltip", {
        def_cb: this.onDrawLinkTooltip
      }, ctx, link, this);
      if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) {
        return;
      }
      var data = link.data;
      var text = null;
      if (data.constructor === Number) text = data.toFixed(2);else if (data.constructor === String) text = "\"" + data + "\"";else if (data.constructor === Boolean) text = String(data);else if (data.toToolTip) text = data.toToolTip();else {
        try {
          text = "[" + data.constructor.name + "]";
        } catch (e) {
          text = "[" + _typeof(data) + "]";
        }
      }
      if (text == null) return;
      text = text.substr(0, 30); // avoid weird

      ctx.font = "14px Courier New";
      var info = ctx.measureText(text);
      var w = info.width + 20;
      var h = 24;
      ctx.shadowColor = "black";
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 3;
      ctx.fillStyle = "#454";
      ctx.beginPath();
      ctx.roundRect(pos[0] - w * 0.5, pos[1] - 15 - h, w, h, [3]);
      ctx.moveTo(pos[0] - 10, pos[1] - 15);
      ctx.lineTo(pos[0] + 10, pos[1] - 15);
      ctx.lineTo(pos[0], pos[1] - 5);
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.textAlign = "center";
      ctx.fillStyle = "#CEC";
      ctx.fillText(text, pos[0], pos[1] - 15 - h * 0.3);
    }
  }, {
    key: "drawNodeShape",
    value: function drawNodeShape(node, ctx, size, fgcolor, bgcolor, selected, mouse_over) {
      // bg rect
      ctx.strokeStyle = fgcolor;
      ctx.fillStyle = bgcolor;
      var r = null;
      var title_height = LiteGraph.NODE_TITLE_HEIGHT;
      var low_quality = this.lowQualityRenderingRequired(0.5);

      // render node area depending on shape
      var shape = node._shape || node.constructor.shape || LiteGraph.ROUND_SHAPE;
      var title_mode = node.constructor.title_mode;
      var render_title = true;
      if (title_mode == LiteGraph.TRANSPARENT_TITLE || title_mode == LiteGraph.NO_TITLE) {
        render_title = false;
      } else if (title_mode == LiteGraph.AUTOHIDE_TITLE && mouse_over) {
        render_title = true;
      }
      var area = tmp_area;
      area[0] = 0; // x
      area[1] = render_title ? -title_height : 0; // y
      area[2] = size[0] + 1; // w
      area[3] = render_title ? size[1] + title_height : size[1]; // h

      var old_alpha = ctx.globalAlpha;

      // full node shape
      // if(node.flags.collapsed)
      {
        ctx.beginPath();
        if (shape == LiteGraph.BOX_SHAPE || low_quality) {
          ctx.fillRect(area[0], area[1], area[2], area[3]);
        } else if (shape == LiteGraph.ROUND_SHAPE || shape == LiteGraph.CARD_SHAPE) {
          ctx.roundRect(area[0], area[1], area[2], area[3], shape == LiteGraph.CARD_SHAPE ? [this.round_radius, this.round_radius, 0, 0] : [this.round_radius]);
        } else if (shape == LiteGraph.CIRCLE_SHAPE) {
          ctx.arc(size[0] * 0.5, size[1] * 0.5, size[0] * 0.5, 0, Math.PI * 2);
        }
        ctx.fill();

        // separator
        if (!node.flags.collapsed && render_title) {
          ctx.shadowColor = "transparent";
          ctx.fillStyle = "rgba(0,0,0,0.2)";
          ctx.fillRect(0, -1, area[2], 2);
        }
      }
      ctx.shadowColor = "transparent";
      node.processCallbackHandlers("onDrawBackground", {
        def_cb: node.onDrawBackground
      }, ctx, this, this.canvas, this.graph_mouse);

      // title bg (remember, it is rendered ABOVE the node)
      if (render_title || title_mode == LiteGraph.TRANSPARENT_TITLE) {
        // title bar
        r = node.processCallbackHandlers("onDrawTitleBar", {
          def_cb: node.onDrawTitleBar
        }, ctx, title_height, size, this.ds.scale, fgcolor);
        if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) ; else if (title_mode != LiteGraph.TRANSPARENT_TITLE && (node.constructor.title_color || this.render_title_colored)) {
          var title_color = node.constructor.title_color || fgcolor;
          if (node.flags.collapsed) {
            ctx.shadowColor = LiteGraph.DEFAULT_SHADOW_COLOR;
          }

          //* gradient test
          if (this.use_gradients) {
            var grad = LGraphCanvas.gradients[title_color];
            if (!grad) {
              grad = LGraphCanvas.gradients[title_color] = ctx.createLinearGradient(0, 0, 400, 0);
              grad.addColorStop(0, title_color); // TODO refactor: validate color !! prevent DOMException
              grad.addColorStop(1, "#000");
            }
            ctx.fillStyle = grad;
          } else {
            ctx.fillStyle = title_color;
          }

          // ctx.globalAlpha = 0.5 * old_alpha;
          ctx.beginPath();
          if (shape == LiteGraph.BOX_SHAPE || low_quality) {
            ctx.rect(0, -title_height, size[0] + 1, title_height);
          } else if (shape == LiteGraph.ROUND_SHAPE || shape == LiteGraph.CARD_SHAPE) {
            ctx.roundRect(0, -title_height, size[0] + 1, title_height, node.flags.collapsed ? [this.round_radius] : [this.round_radius, this.round_radius, 0, 0]);
          }
          ctx.fill();
          ctx.shadowColor = "transparent";
        }
        var colState = false;
        if (LiteGraph.node_box_coloured_by_mode && LiteGraph.NODE_MODES_COLORS[node.mode]) {
          colState = LiteGraph.NODE_MODES_COLORS[node.mode];
        }
        if (LiteGraph.node_box_coloured_when_on) {
          colState = node.action_triggered ? "#FFF" : node.execute_triggered ? "#AAA" : colState;
        }

        // title box
        var box_size = 10;
        r = node.processCallbackHandlers("onDrawTitleBox", {
          def_cb: node.onDrawTitleBox
        }, ctx, title_height, size, this.ds.scale);
        if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) ; else if (shape == LiteGraph.ROUND_SHAPE || shape == LiteGraph.CIRCLE_SHAPE || shape == LiteGraph.CARD_SHAPE) {
          if (low_quality) {
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(title_height * 0.5, title_height * -0.5, box_size * 0.5 + 1, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = node.boxcolor || colState || LiteGraph.NODE_DEFAULT_BOXCOLOR;
          if (low_quality) ctx.fillRect(title_height * 0.5 - box_size * 0.5, title_height * -0.5 - box_size * 0.5, box_size, box_size);else {
            ctx.beginPath();
            ctx.arc(title_height * 0.5, title_height * -0.5, box_size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          if (low_quality) {
            ctx.fillStyle = "black";
            ctx.fillRect((title_height - box_size) * 0.5 - 1, (title_height + box_size) * -0.5 - 1, box_size + 2, box_size + 2);
          }
          ctx.fillStyle = node.boxcolor || colState || LiteGraph.NODE_DEFAULT_BOXCOLOR;
          ctx.fillRect((title_height - box_size) * 0.5, (title_height + box_size) * -0.5, box_size, box_size);
        }
        ctx.globalAlpha = old_alpha;

        // title text
        node.processCallbackHandlers("onDrawTitleText", {
          def_cb: node.onDrawTitleText
        }, ctx, title_height, size, this.ds.scale, this.title_text_font, selected);
        if (!low_quality) {
          ctx.font = this.title_text_font;
          var title = String(node.getTitle());
          if (title) {
            if (selected) {
              ctx.fillStyle = LiteGraph.NODE_SELECTED_TITLE_COLOR;
            } else {
              ctx.fillStyle = node.constructor.title_text_color || this.node_title_color;
            }
            if (node.flags.collapsed) {
              ctx.textAlign = "left";
              ctx.fillText(title,
              // NO? .substring(0,20), // avoid urls too long
              title_height,
              // + measure.width * 0.5,
              LiteGraph.NODE_TITLE_TEXT_Y - title_height);
              ctx.textAlign = "left";
            } else {
              ctx.textAlign = "left";
              ctx.fillText(title, title_height, LiteGraph.NODE_TITLE_TEXT_Y - title_height);
            }
          }
        }

        // subgraph box
        if (!node.flags.collapsed && node.subgraph && !node.skip_subgraph_button) {
          var w = LiteGraph.NODE_TITLE_HEIGHT;
          var x = node.size[0] - w;
          var over = LiteGraph.isInsideRectangle(this.graph_mouse[0] - node.pos[0], this.graph_mouse[1] - node.pos[1], x + 2, -w + 2, w - 4, w - 4);
          ctx.fillStyle = over ? "#888" : "#555";
          if (shape == LiteGraph.BOX_SHAPE || low_quality) ctx.fillRect(x + 2, -w + 2, w - 4, w - 4);else {
            ctx.beginPath();
            ctx.roundRect(x + 2, -w + 2, w - 4, w - 4, [4]);
            ctx.fill();
          }
          ctx.fillStyle = "#333";
          ctx.beginPath();
          ctx.moveTo(x + w * 0.2, -w * 0.6);
          ctx.lineTo(x + w * 0.8, -w * 0.6);
          ctx.lineTo(x + w * 0.5, -w * 0.3);
          ctx.fill();
        }

        // custom title render
        node.processCallbackHandlers("onDrawTitle", {
          def_cb: node.onDrawTitle
        }, ctx);
      }

      // render selection marker
      if (selected) {
        node.processCallbackHandlers("onBounding", {
          def_cb: node.onBounding
        }, area);
        if (title_mode == LiteGraph.TRANSPARENT_TITLE) {
          area[1] -= title_height;
          area[3] += title_height;
        }
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        if (shape == LiteGraph.BOX_SHAPE) {
          ctx.rect(-6 + area[0], -6 + area[1], 12 + area[2], 12 + area[3]);
        } else if (shape == LiteGraph.ROUND_SHAPE || shape == LiteGraph.CARD_SHAPE && node.flags.collapsed) {
          ctx.roundRect(-6 + area[0], -6 + area[1], 12 + area[2], 12 + area[3], [this.round_radius * 2]);
        } else if (shape == LiteGraph.CARD_SHAPE) {
          ctx.roundRect(-6 + area[0], -6 + area[1], 12 + area[2], 12 + area[3], [this.round_radius * 2, 2, this.round_radius * 2, 2]);
        } else if (shape == LiteGraph.CIRCLE_SHAPE) {
          ctx.arc(size[0] * 0.5, size[1] * 0.5, size[0] * 0.5 + 6, 0, Math.PI * 2);
        }
        ctx.strokeStyle = LiteGraph.NODE_BOX_OUTLINE_COLOR;
        ctx.stroke();
        ctx.strokeStyle = fgcolor;
        ctx.globalAlpha = 1;
      }

      // these counter helps in conditioning drawing based on if the node has been executed or an action occurred
      if (node.execute_triggered > 0) node.execute_triggered--;
      if (node.action_triggered > 0) node.action_triggered--;
    }

    /**
     * draws every connection visible in the canvas
     * OPTIMIZE THIS: pre-catch connections position instead of recomputing them every time
     * @method drawConnections
     **/
  }, {
    key: "drawConnections",
    value: function drawConnections(ctx) {
      var now = LiteGraph.getTime();
      var visible_area = this.visible_area;
      margin_area[0] = visible_area[0] - 20;
      margin_area[1] = visible_area[1] - 20;
      margin_area[2] = visible_area[2] + 40;
      margin_area[3] = visible_area[3] + 40;

      // draw connections
      ctx.lineWidth = this.connections_width;
      ctx.fillStyle = "#AAA";
      ctx.strokeStyle = "#AAA";
      ctx.globalAlpha = this.editor_alpha;
      // for every node
      var nodes = this.graph._nodes;
      for (var n = 0, l = nodes.length; n < l; ++n) {
        var node = nodes[n];
        // for every input (we render just inputs because it is easier as every slot can only have one input)
        if (!node.inputs || !node.inputs.length) {
          continue;
        }
        for (var i = 0; i < node.inputs.length; ++i) {
          var input = node.inputs[i];
          if (!input || input.link == null) {
            continue;
          }
          var link_id = input.link;
          var link = this.graph.links[link_id];
          if (!link) {
            continue;
          }

          // find link info
          var start_node = this.graph.getNodeById(link.origin_id);
          if (start_node == null) {
            continue;
          }
          var start_node_slot = link.origin_slot;
          var start_node_slotpos = null;
          if (start_node_slot == -1) {
            start_node_slotpos = [start_node.pos[0] + 10, start_node.pos[1] + 10];
          } else {
            start_node_slotpos = start_node.getConnectionPos(false, start_node_slot, tempA);
          }
          var end_node_slotpos = node.getConnectionPos(true, i, tempB);

          // compute link bounding
          link_bounding[0] = start_node_slotpos[0];
          link_bounding[1] = start_node_slotpos[1];
          link_bounding[2] = end_node_slotpos[0] - start_node_slotpos[0];
          link_bounding[3] = end_node_slotpos[1] - start_node_slotpos[1];
          if (link_bounding[2] < 0) {
            link_bounding[0] += link_bounding[2];
            link_bounding[2] = Math.abs(link_bounding[2]);
          }
          if (link_bounding[3] < 0) {
            link_bounding[1] += link_bounding[3];
            link_bounding[3] = Math.abs(link_bounding[3]);
          }

          // skip links outside of the visible area of the canvas
          if (!LiteGraph.overlapBounding(link_bounding, margin_area)) {
            continue;
          }
          var start_slot = start_node.outputs[start_node_slot];
          var end_slot = node.inputs[i];
          if (!start_slot || !end_slot) {
            continue;
          }
          var start_dir = start_slot.dir || (start_node.horizontal ? LiteGraph.DOWN : LiteGraph.RIGHT);
          var end_dir = end_slot.dir || (node.horizontal ? LiteGraph.UP : LiteGraph.LEFT);
          this.renderLink(ctx, start_node_slotpos, end_node_slotpos, link, false, 0, null, start_dir, end_dir);

          // event triggered rendered on top
          if (link && link._last_time && now - link._last_time < 1000) {
            var f = 2.0 - (now - link._last_time) * 0.002;
            var tmp = ctx.globalAlpha;
            ctx.globalAlpha = tmp * f;
            this.renderLink(ctx, start_node_slotpos, end_node_slotpos, link, true, f, "white", start_dir, end_dir);
            ctx.globalAlpha = tmp;
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    /**
     * draws a link between two points
     * @method renderLink
     * @param {vec2} a start pos
     * @param {vec2} b end pos
     * @param {Object} link the link object with all the link info
     * @param {boolean} skip_border ignore the shadow of the link
     * @param {boolean} flow show flow animation (for events)
     * @param {string} color the color for the link
     * @param {number} start_dir the direction enum
     * @param {number} end_dir the direction enum
     * @param {number} num_sublines number of sublines (useful to represent vec3 or rgb)
     **/
  }, {
    key: "renderLink",
    value: function renderLink(ctx, a, b, link, skip_border, flow, color, start_dir, end_dir, num_sublines) {
      if (link) {
        this.visible_links.push(link);
      }

      // choose color
      if (!color && link) {
        color = link.color || LGraphCanvas.link_type_colors[link.type];
      }
      if (!color) {
        color = this.default_link_color;
      }
      if (link != null && this.highlighted_links[link.id]) {
        color = "#FFF";
      }
      start_dir = start_dir || LiteGraph.RIGHT;
      end_dir = end_dir || LiteGraph.LEFT;
      var dist = LiteGraph.distance(a, b);
      if (this.render_connections_border && this.ds.scale > 0.6) {
        ctx.lineWidth = this.connections_width + 4;
      }
      ctx.lineJoin = "round";
      num_sublines = num_sublines || 1;
      if (num_sublines > 1) {
        ctx.lineWidth = 0.5;
      }

      // begin line shape
      ctx.beginPath();
      for (var i = 0; i < num_sublines; i += 1) {
        var offsety = (i - (num_sublines - 1) * 0.5) * 5;
        if (this.links_render_mode == LiteGraph.SPLINE_LINK) {
          ctx.moveTo(a[0], a[1] + offsety);
          var start_offset_x = 0;
          var start_offset_y = 0;
          var end_offset_x = 0;
          var end_offset_y = 0;
          switch (start_dir) {
            case LiteGraph.LEFT:
              start_offset_x = dist * -0.25;
              break;
            case LiteGraph.RIGHT:
              start_offset_x = dist * 0.25;
              break;
            case LiteGraph.UP:
              start_offset_y = dist * -0.25;
              break;
            case LiteGraph.DOWN:
              start_offset_y = dist * 0.25;
              break;
          }
          switch (end_dir) {
            case LiteGraph.LEFT:
              end_offset_x = dist * -0.25;
              break;
            case LiteGraph.RIGHT:
              end_offset_x = dist * 0.25;
              break;
            case LiteGraph.UP:
              end_offset_y = dist * -0.25;
              break;
            case LiteGraph.DOWN:
              end_offset_y = dist * 0.25;
              break;
          }
          ctx.bezierCurveTo(a[0] + start_offset_x, a[1] + start_offset_y + offsety, b[0] + end_offset_x, b[1] + end_offset_y + offsety, b[0], b[1] + offsety);
        } else if (this.links_render_mode == LiteGraph.LINEAR_LINK) {
          ctx.moveTo(a[0], a[1] + offsety);
          var _start_offset_x = 0;
          var _start_offset_y = 0;
          var _end_offset_x = 0;
          var _end_offset_y = 0;
          switch (start_dir) {
            case LiteGraph.LEFT:
              _start_offset_x = -1;
              break;
            case LiteGraph.RIGHT:
              _start_offset_x = 1;
              break;
            case LiteGraph.UP:
              _start_offset_y = -1;
              break;
            case LiteGraph.DOWN:
              _start_offset_y = 1;
              break;
          }
          switch (end_dir) {
            case LiteGraph.LEFT:
              _end_offset_x = -1;
              break;
            case LiteGraph.RIGHT:
              _end_offset_x = 1;
              break;
            case LiteGraph.UP:
              _end_offset_y = -1;
              break;
            case LiteGraph.DOWN:
              _end_offset_y = 1;
              break;
          }
          var l = 15;
          ctx.lineTo(a[0] + _start_offset_x * l, a[1] + _start_offset_y * l + offsety);
          ctx.lineTo(b[0] + _end_offset_x * l, b[1] + _end_offset_y * l + offsety);
          ctx.lineTo(b[0], b[1] + offsety);
        } else if (this.links_render_mode == LiteGraph.STRAIGHT_LINK) {
          ctx.moveTo(a[0], a[1]);
          var start_x = a[0];
          var start_y = a[1];
          var end_x = b[0];
          var end_y = b[1];
          if (start_dir == LiteGraph.RIGHT) {
            start_x += 10;
          } else {
            start_y += 10;
          }
          if (end_dir == LiteGraph.LEFT) {
            end_x -= 10;
          } else {
            end_y -= 10;
          }
          ctx.lineTo(start_x, start_y);
          ctx.lineTo((start_x + end_x) * 0.5, start_y);
          ctx.lineTo((start_x + end_x) * 0.5, end_y);
          ctx.lineTo(end_x, end_y);
          ctx.lineTo(b[0], b[1]);
        } else {
          return;
        } // unknown
      }

      // rendering the outline of the connection can be a little bit slow
      if (this.render_connections_border && this.ds.scale > 0.6 && !skip_border) {
        ctx.strokeStyle = "rgba(0,0,0,0.5)";
        ctx.stroke();
      }
      ctx.lineWidth = this.connections_width;
      ctx.fillStyle = ctx.strokeStyle = color;
      ctx.stroke();
      // end line shape

      var pos = this.computeConnectionPoint(a, b, 0.5, start_dir, end_dir);
      if (link && link._pos) {
        link._pos[0] = pos[0];
        link._pos[1] = pos[1];
      }

      // render arrow in the middle
      if (this.ds.scale >= 0.6 && this.highquality_render && end_dir != LiteGraph.CENTER) {
        // render arrow
        if (this.render_connection_arrows) {
          // compute two points in the connection
          var posA = this.computeConnectionPoint(a, b, 0.25, start_dir, end_dir);
          var posB = this.computeConnectionPoint(a, b, 0.26, start_dir, end_dir);
          var posC = this.computeConnectionPoint(a, b, 0.75, start_dir, end_dir);
          var posD = this.computeConnectionPoint(a, b, 0.76, start_dir, end_dir);

          // compute the angle between them so the arrow points in the right direction
          var angleA = 0;
          var angleB = 0;
          if (this.render_curved_connections) {
            angleA = -Math.atan2(posB[0] - posA[0], posB[1] - posA[1]);
            angleB = -Math.atan2(posD[0] - posC[0], posD[1] - posC[1]);
          } else {
            angleB = angleA = b[1] > a[1] ? 0 : Math.PI;
          }

          // render arrow
          ctx.save();
          ctx.translate(posA[0], posA[1]);
          ctx.rotate(angleA);
          ctx.beginPath();
          ctx.moveTo(-5, -3);
          ctx.lineTo(0, +7);
          ctx.lineTo(+5, -3);
          ctx.fill();
          ctx.restore();
          ctx.save();
          ctx.translate(posC[0], posC[1]);
          ctx.rotate(angleB);
          ctx.beginPath();
          ctx.moveTo(-5, -3);
          ctx.lineTo(0, +7);
          ctx.lineTo(+5, -3);
          ctx.fill();
          ctx.restore();
        }

        // circle
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // render flowing points
      if (flow) {
        ctx.fillStyle = color;
        for (var _i15 = 0; _i15 < 5; ++_i15) {
          var f = (LiteGraph.getTime() * 0.001 + _i15 * 0.2) % 1;
          pos = this.computeConnectionPoint(a, b, f, start_dir, end_dir);
          ctx.beginPath();
          ctx.arc(pos[0], pos[1], 5, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }

    // returns the link center point based on curvature
  }, {
    key: "computeConnectionPoint",
    value: function computeConnectionPoint(a, b, t, start_dir, end_dir) {
      start_dir = start_dir || LiteGraph.RIGHT;
      end_dir = end_dir || LiteGraph.LEFT;
      var dist = LiteGraph.distance(a, b);
      var p0 = a;
      var p1 = [a[0], a[1]];
      var p2 = [b[0], b[1]];
      var p3 = b;
      switch (start_dir) {
        case LiteGraph.LEFT:
          p1[0] += dist * -0.25;
          break;
        case LiteGraph.RIGHT:
          p1[0] += dist * 0.25;
          break;
        case LiteGraph.UP:
          p1[1] += dist * -0.25;
          break;
        case LiteGraph.DOWN:
          p1[1] += dist * 0.25;
          break;
      }
      switch (end_dir) {
        case LiteGraph.LEFT:
          p2[0] += dist * -0.25;
          break;
        case LiteGraph.RIGHT:
          p2[0] += dist * 0.25;
          break;
        case LiteGraph.UP:
          p2[1] += dist * -0.25;
          break;
        case LiteGraph.DOWN:
          p2[1] += dist * 0.25;
          break;
      }
      var c1 = (1 - t) * (1 - t) * (1 - t);
      var c2 = 3 * ((1 - t) * (1 - t)) * t;
      var c3 = 3 * (1 - t) * (t * t);
      var c4 = t * t * t;
      var x = c1 * p0[0] + c2 * p1[0] + c3 * p2[0] + c4 * p3[0];
      var y = c1 * p0[1] + c2 * p1[1] + c3 * p2[1] + c4 * p3[1];
      return [x, y];
    }
  }, {
    key: "drawExecutionOrder",
    value: function drawExecutionOrder(ctx) {
      ctx.shadowColor = "transparent";
      ctx.globalAlpha = 0.25;
      ctx.textAlign = "center";
      ctx.strokeStyle = "white";
      ctx.globalAlpha = 0.75;
      var visible_nodes = this.visible_nodes;
      for (var i = 0; i < visible_nodes.length; ++i) {
        var node = visible_nodes[i];
        ctx.fillStyle = "black";
        ctx.fillRect(node.pos[0] - LiteGraph.NODE_TITLE_HEIGHT, node.pos[1] - LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT);
        if (node.order == 0) {
          ctx.strokeRect(node.pos[0] - LiteGraph.NODE_TITLE_HEIGHT + 0.5, node.pos[1] - LiteGraph.NODE_TITLE_HEIGHT + 0.5, LiteGraph.NODE_TITLE_HEIGHT, LiteGraph.NODE_TITLE_HEIGHT);
        }
        ctx.fillStyle = "#FFF";
        ctx.fillText(node.order, node.pos[0] + LiteGraph.NODE_TITLE_HEIGHT * -0.5, node.pos[1] - 6);
      }
      ctx.globalAlpha = 1;
    }

    /**
     * draws the widgets stored inside a node
     * @method drawNodeWidgets
     **/
  }, {
    key: "drawNodeWidgets",
    value: function drawNodeWidgets(node, posY, ctx, active_widget) {
      if (!node.widgets || !node.widgets.length) {
        return 0;
      }
      var width = node.size[0];
      var widgets = node.widgets;
      posY += 2;
      var H = LiteGraph.NODE_WIDGET_HEIGHT;
      var show_text = !this.lowQualityRenderingRequired(0.5);
      ctx.save();
      ctx.globalAlpha = this.editor_alpha;
      var outline_color = LiteGraph.WIDGET_OUTLINE_COLOR;
      var background_color = LiteGraph.WIDGET_BGCOLOR;
      var text_color = LiteGraph.WIDGET_TEXT_COLOR;
      var secondary_text_color = LiteGraph.WIDGET_SECONDARY_TEXT_COLOR;
      var margin = 15;
      var is_over_widget = false;
      for (var i = 0; i < widgets.length; ++i) {
        var w = widgets[i];
        var y = posY;
        if (w.y) {
          y = w.y;
        }
        w.last_y = y;
        ctx.strokeStyle = outline_color;
        ctx.fillStyle = "#222";
        ctx.textAlign = "left";
        // ctx.lineWidth = 2;
        if (w.disabled) ctx.globalAlpha *= 0.5;
        var widget_width = w.width || width;

        // is over this widget?
        is_over_widget = this.over_widget == w;
        switch (w.type) {
          case "button":
            if (w.clicked) {
              ctx.fillStyle = "#AAA";
              w.clicked = false;
              this.dirty_canvas = true;
            }
            ctx.fillRect(margin, y, widget_width - margin * 2, H);
            if (show_text && !w.disabled) ctx.strokeRect(margin, y, widget_width - margin * 2, H);
            if (show_text) {
              ctx.textAlign = "center";
              ctx.fillStyle = text_color;
              if (is_over_widget || this.options.hide_widget_label_when_small === true || this.options.hide_widget_label_when_small < width) {
                ctx.fillText(w.label || w.name, widget_width * 0.5, y + H * 0.7);
              }
            }
            break;
          case "toggle":
            ctx.textAlign = "left";
            ctx.strokeStyle = outline_color;
            ctx.fillStyle = background_color;
            ctx.beginPath();
            if (show_text) ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5]);else ctx.rect(margin, y, widget_width - margin * 2, H);
            ctx.fill();
            if (show_text && !w.disabled) ctx.stroke();
            ctx.fillStyle = w.value ? "#89A" : "#333";
            ctx.beginPath();
            ctx.arc(widget_width - margin * 2, y + H * 0.5, H * 0.36, 0, Math.PI * 2);
            ctx.fill();
            if (show_text) {
              ctx.fillStyle = secondary_text_color;
              var label = w.label || w.name;
              if (label != null) {
                if (is_over_widget || this.options.hide_widget_label_when_small === true || this.options.hide_widget_label_when_small < width) {
                  ctx.fillText(label, margin * 2, y + H * 0.7);
                }
              }
              ctx.fillStyle = w.value ? text_color : secondary_text_color;
              ctx.textAlign = "right";
              ctx.fillText(w.value ? w.options.on || "on" : w.options.off || "off", widget_width - 40, y + H * 0.7);
            }
            break;
          case "slider":
            ctx.fillStyle = background_color;
            ctx.fillRect(margin, y, widget_width - margin * 2, H);
            var range = w.options.max - w.options.min;
            var nvalue = (w.value - w.options.min) / range;
            if (nvalue < 0.0) nvalue = 0.0;
            if (nvalue > 1.0) nvalue = 1.0;
            ctx.fillStyle = w.options.hasOwnProperty("slider_color") ? w.options.slider_color : active_widget == w ? "#89A" : "#678";
            ctx.fillRect(margin, y, nvalue * (widget_width - margin * 2), H);
            if (show_text && !w.disabled) ctx.strokeRect(margin, y, widget_width - margin * 2, H);
            if (w.marker) {
              var marker_nvalue = (w.marker - w.options.min) / range;
              if (marker_nvalue < 0.0) marker_nvalue = 0.0;
              if (marker_nvalue > 1.0) marker_nvalue = 1.0;
              ctx.fillStyle = w.options.hasOwnProperty("marker_color") ? w.options.marker_color : "#AA9";
              ctx.fillRect(margin + marker_nvalue * (widget_width - margin * 2), y, 2, H);
            }
            if (show_text) {
              ctx.textAlign = "center";
              ctx.fillStyle = text_color;
              if (is_over_widget || this.options.hide_widget_label_when_small === true || this.options.hide_widget_label_when_small < width) {
                ctx.fillText(w.label || w.name + "  " + LiteGraph.formatNumber(w.value, w.options.precision != null ? w.options.precision : 3), widget_width * 0.5, y + H * 0.7);
              }
            }
            break;
          case "number":
          case "combo":
            ctx.textAlign = "left";
            ctx.strokeStyle = outline_color;
            ctx.fillStyle = background_color;
            ctx.beginPath();
            if (show_text) ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5]);else ctx.rect(margin, y, widget_width - margin * 2, H);
            ctx.fill();
            if (show_text) {
              if (!w.disabled) ctx.stroke();
              ctx.fillStyle = text_color;
              if (!w.disabled) {
                ctx.beginPath();
                ctx.moveTo(margin + 16, y + 5);
                ctx.lineTo(margin + 6, y + H * 0.5);
                ctx.lineTo(margin + 16, y + H - 5);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(widget_width - margin - 16, y + 5);
                ctx.lineTo(widget_width - margin - 6, y + H * 0.5);
                ctx.lineTo(widget_width - margin - 16, y + H - 5);
                ctx.fill();
              }
              ctx.fillStyle = secondary_text_color;
              if (is_over_widget || this.options.hide_widget_label_when_small === true || this.options.hide_widget_label_when_small < width) {
                ctx.fillText(w.label || w.name, margin * 2 + 5, y + H * 0.7);
              }
              ctx.fillStyle = text_color;
              ctx.textAlign = "right";
              if (w.type == "number") {
                ctx.fillText(LiteGraph.formatNumber(w.value, w.options.precision !== undefined ? w.options.precision : 3), widget_width - margin * 2 - 20, y + H * 0.7);
              } else {
                var v = w.value;
                if (w.options.values) {
                  var values = w.options.values;
                  if (values.constructor === Function) values = values();
                  if (values && values.constructor !== Array) v = values[w.value];
                }
                ctx.fillText(v, widget_width - margin * 2 - 20, y + H * 0.7);
              }
            }
            break;
          case "string":
          case "text":
            ctx.textAlign = "left";
            ctx.strokeStyle = outline_color;
            ctx.fillStyle = background_color;
            ctx.beginPath();
            if (show_text) ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5]);else ctx.rect(margin, y, widget_width - margin * 2, H);
            ctx.fill();
            if (show_text) {
              if (!w.disabled) ctx.stroke();
              ctx.save();
              ctx.beginPath();
              ctx.rect(margin, y, widget_width - margin * 2, H);
              ctx.clip();

              // ctx.stroke();
              ctx.fillStyle = secondary_text_color;
              var _label = w.label || w.name;
              if (_label != null) {
                if (is_over_widget || this.options.hide_widget_label_when_small === true || this.options.hide_widget_label_when_small < width) {
                  ctx.fillText(_label, margin * 2, y + H * 0.7);
                }
              }
              ctx.fillStyle = text_color;
              ctx.textAlign = "right";
              ctx.fillText(String(w.value).substr(0, 30), widget_width - margin * 2, y + H * 0.7); // 30 chars max
              ctx.restore();
            }
            break;
          default:
            if (w.draw) {
              w.draw(ctx, node, widget_width, y, H);
            }
            break;
        }
        posY += (w.computeSize ? w.computeSize(widget_width)[1] : H) + 4;
        ctx.globalAlpha = this.editor_alpha;
      }
      ctx.restore();
      ctx.textAlign = "left";
    }

    /**
     * process an event on widgets, or check overed widget if no event 
     * @method processNodeWidgets
     **/
  }, {
    key: "processNodeWidgets",
    value: function processNodeWidgets(node, pos, event, active_widget) {
      // if node has no widgets or not allowed interaction, return null
      if (!node.widgets || !node.widgets.length || !this.allow_interaction && !node.flags.allow_interaction) {
        if (!node.widgets || !node.widgets.length) LiteGraph.log_verbose("graph processNodeWidgets", "no widgets for node", node);
        if (!this.allow_interaction && !node.flags.allow_interaction) LiteGraph.log_verbose("graph processNodeWidgets", "interaction not allowed on graph and not overridden on node", node);
        return null;
      }
      var x = pos[0] - node.pos[0];
      var y = pos[1] - node.pos[1];
      var width = node.size[0];
      var height = LiteGraph.NODE_WIDGET_HEIGHT;
      var deltaX = (event === null || event === void 0 ? void 0 : event.deltaX) || (event === null || event === void 0 ? void 0 : event.deltax) || 0;
      var that = this;
      var ref_window = this.getCanvasWindow();
      var widget_width = width;
      var widget_height = height;
      for (var i = 0; i < node.widgets.length; ++i) {
        var w = node.widgets[i];
        if (!w || w.disabled) continue;
        if (typeof w.computeSize == "function") {
          var wSize = w.computeSize(node.size[0], node.size[1]);
          widget_width = wSize[0];
          widget_height = wSize[1];
        } else {
          widget_width = w.width || width;
          widget_height = w.height || height;
        }
        // outside
        if (w != active_widget && (x < 6 || x > widget_width - 12 || y < w.last_y || y > w.last_y + widget_height || w.last_y === undefined)) {
          continue;
        }
        var old_value = w.value;
        LiteGraph.log_verbose("graph processNodeWidgets", "has widget", w);

        // if ( w == active_widget || (x > 6 && x < widget_width - 12 && y > w.last_y && y < w.last_y + widget_height) ) {
        // inside widget
        if (event) {
          switch (w.type) {
            case "button":
              if (event.type === "pointerdown") {
                if (w.callback) {
                  LiteGraph.log_debug("graph processNodeWidgets", "button, calling callback", w.callback);
                  setTimeout(function () {
                    w.callback(w, that, node, pos, event);
                  }, 20);
                } else {
                  LiteGraph.log_verbose("graph processNodeWidgets", "button, has not callback", w);
                }
                w.clicked = true;
                this.dirty_canvas = true;
              } else {
                LiteGraph.log_verbose("graph processNodeWidgets", "button, event is not pointer down", event);
              }
              break;
            case "slider":
              var nvalue = LiteGraph.clamp((x - 15) / (widget_width - 30), 0, 1);
              if (w.options.read_only) break;
              w.value = w.options.min + (w.options.max - w.options.min) * nvalue;
              if (old_value != w.value) {
                setTimeout(function () {
                  inner_value_change(w, w.value, old_value);
                }, 20);
              }
              this.dirty_canvas = true;
              break;
            case "number":
            case "combo":
            case "enum":
              if (event.type == "pointermove" && w.type == "number") {
                if (deltaX) w.value += deltaX * 0.1 * (w.options.step || 1);
                if (w.options.min != null && w.value < w.options.min) {
                  w.value = w.options.min;
                }
                if (w.options.max != null && w.value > w.options.max) {
                  w.value = w.options.max;
                }
              } else if (event.type == "pointerdown") {
                var values = w.options.values;
                if (values && values.constructor === Function) {
                  values = w.options.values(w, node);
                }
                var values_list = null;
                if (w.type != "number") values_list = values.constructor === Array ? values : Object.keys(values);
                var delta = x < 40 ? -1 : x > widget_width - 40 ? 1 : 0;
                if (w.type == "number") {
                  w.value += delta * (w.options.step || 1);
                  if (w.options.min != null && w.value < w.options.min) {
                    w.value = w.options.min;
                  }
                  if (w.options.max != null && w.value > w.options.max) {
                    w.value = w.options.max;
                  }
                } else if (delta) {
                  // clicked on arrow, used for combos
                  var index = -1;
                  this.last_mouseclick = 0; // avoids double click event
                  if (values.constructor === Object) index = values_list.indexOf(String(w.value)) + delta;else index = values_list.indexOf(w.value) + delta;
                  if (index >= values_list.length) {
                    index = values_list.length - 1;
                  }
                  if (index < 0) {
                    index = 0;
                  }
                  if (values.constructor === Array) w.value = values[index];else {
                    // combo arrow
                    console.debug("ARROW_ComboOrOtherWidget", "clickCHECK", w, index, values);
                    if (values != values_list) {
                      w.value = Object.keys(values)[index];
                    } else {
                      w.value = index;
                    }
                  }
                } else {
                  // combo clicked
                  // var text_values = values != values_list ? Object.values(values) : values;
                  var entries = [];
                  if (values != values_list) {
                    Object.keys(values).forEach(function (element) {
                      entries.push({
                        value: element,
                        content: values[element]
                      });
                    });
                  } else {
                    // using simple
                    entries = values;
                  }
                  console.debug("ComboOrOtherWidget", "filling from", values, "to", entries);
                  var inner_clicked = function inner_clicked(v, cnv, node, pos, event, value_original) {
                    var _console;
                    (_console = console).debug.apply(_console, ["ComboOrOtherWidget", "inner_clicked"].concat(Array.prototype.slice.call(arguments)));
                    console.debug("ComboOrOtherWidget", "inner_clicked", v, entries, values, values_list, "old_value", old_value);
                    if (_typeof(v) == "object" && typeof v.value !== "undefined") {
                      console.debug("ComboOrOtherWidget", "inner_clicked", "using object key value", v);
                      this.value = v.value;
                      inner_value_change(this, v.value, old_value);
                    } else {
                      // if(values != values_list){
                      //     console.debug("ComboOrOtherWidget","inner_clicked","value from key?",v,);
                      //     // using simples
                      //     v = entries.indexOf(v);
                      // }
                      console.debug("ComboOrOtherWidget", "inner_clicked", "using simple", v);
                      // using simples
                      this.value = v;
                      inner_value_change(this, v, old_value);
                    }
                    that.dirty_canvas = true;
                    return false;
                  };
                  LiteGraph.ContextMenu(entries, {
                    scale: Math.max(1, this.ds.scale),
                    event: event,
                    className: "dark",
                    callback: inner_clicked.bind(w)
                  }, ref_window);
                }
                // end mousedown
              } else if (event.type == "pointerup" && w.type == "number") {
                var _delta = x < 40 ? -1 : x > widget_width - 40 ? 1 : 0;
                if (event.click_time < 200 && _delta == 0) {
                  this.prompt("Value", w.value, function (v) {
                    // check if v is a valid equation or a number
                    if (/^[0-9+\-*/()\s]+|\d+\.\d+$/.test(v)) {
                      try {
                        // solve the equation if possible
                        v = eval(v);
                      } catch (error) {
                        LiteGraph.log_warn(error);
                      }
                    }
                    this.value = Number(v);
                    inner_value_change(this, this.value, old_value);
                  }.bind(w), event);
                }
              }
              if (old_value != w.value) setTimeout(function () {
                inner_value_change(this, this.value, old_value);
              }.bind(w), 20);
              this.dirty_canvas = true;
              break;
            case "boolean":
            case "toggle":
              if (event.type == "pointerdown") {
                w.value = !w.value;
                setTimeout(function () {
                  inner_value_change(w, w.value);
                }, 20);
              }
              break;
            case "string":
            case "text":
              if (event.type == "pointerdown") {
                this.prompt("Value", w.value, function (v) {
                  // @TODO: this.value = v; // CHECK
                  inner_value_change(this, v);
                }.bind(w), event, w.options ? w.options.multiline : false);
              }
              break;
            default:
              if (w.mouse) {
                this.dirty_canvas = w.mouse(event, [x, y], node);
              }
              break;
          }
        }
        return w;
      } // end for

      function inner_value_change(widget, value, old_value) {
        LiteGraph.log_debug("inner_value_change for processNodeWidgets", widget, value);
        var value_original = value;
        // value changed
        if (old_value != w.value) {
          node.processCallbackHandlers("onWidgetChanged", {
            def_cb: node.onWidgetChanged
          }, w.name, w.value, old_value, w);
          // node.graph._version++;
          node.graph.onGraphChanged({
            action: "widgetChanged",
            doSave: true
          }); // tag: graph event entrypoint
        }
        if (widget.type == "number") {
          value = Number(value);
        }
        widget.value = value;
        if (widget.options && widget.options.property && node.properties[widget.options.property] !== undefined) {
          node.setProperty(widget.options.property, value);
        }
        if (widget.callback) {
          widget.callback(widget.value, that, node, pos, event, value_original);
        }
      }
      return null;
    }

    /**
     * draws every group area in the background
     * @method drawGroups
     **/
  }, {
    key: "drawGroups",
    value: function drawGroups(canvas, ctx) {
      if (!this.graph) {
        return;
      }
      var groups = this.graph._groups;
      ctx.save();
      for (var i = 0; i < groups.length; ++i) {
        var group = groups[i];
        if (!LiteGraph.overlapBounding(this.visible_area, group._bounding)) {
          continue;
        } // out of the visible area

        ctx.fillStyle = group.color || "#335";
        ctx.strokeStyle = group.color || "#335";
        if (this.options.groups_border_alpha >= 0) {
          if (ctx.setStrokeColor) {
            // only webkit
            ctx.setStrokeColor(ctx.strokeStyle, this.options.groups_border_alpha);
          }
        }
        var pos = group._pos;
        var size = group._size;
        ctx.globalAlpha = this.options.groups_alpha * this.editor_alpha; // check, not affecting
        ctx.beginPath();
        ctx.rect(pos[0] + 0.5, pos[1] + 0.5, size[0], size[1]);
        ctx.fill();
        ctx.globalAlpha = this.editor_alpha;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pos[0] + size[0], pos[1] + size[1]);
        ctx.lineTo(pos[0] + size[0] - this.options.groups_triangle_handler_size, pos[1] + size[1]);
        ctx.lineTo(pos[0] + size[0], pos[1] + size[1] - this.options.groups_triangle_handler_size);
        ctx.fill();
        var font_size = group.font_size || this.options.groups_title_font_size || LiteGraph.DEFAULT_GROUP_FONT_SIZE;
        ctx.font = font_size + "px " + this.options.groups_title_font;
        ctx.textAlign = this.options.groups_title_alignment;
        if (this.options.groups_title_wrap) {
          LiteGraph.canvasFillTextMultiline(ctx, group.title, pos[0] + 4, pos[1] + font_size, size[0], font_size);
        } else {
          ctx.fillText(group.title, pos[0] + 4, pos[1] + font_size);
        }
      }
      ctx.restore();
    }
  }, {
    key: "adjustNodesSize",
    value: function adjustNodesSize() {
      var nodes = this.graph._nodes;
      for (var i = 0; i < nodes.length; ++i) {
        nodes[i].size = nodes[i].computeSize();
      }
      this.setDirty(true, true);
    }

    /**
     * resizes the canvas to a given size, if no size is passed, then it tries to fill the parentNode
     * @method resize
     **/
  }, {
    key: "resize",
    value: function resize(width, height) {
      if (!width && !height) {
        var parent = this.canvas.parentNode;
        width = parent.offsetWidth;
        height = parent.offsetHeight;
        LiteGraph.log_debug("lgraphcanvas", "resize", "not passed: AUTO", parent, width, height);
      } else {
        LiteGraph.log_debug("lgraphcanvas", "resize", "passed", width, height, parent);
      }
      if (this.canvas.width == width && this.canvas.height == height) {
        return;
      }
      this.canvas.width = width;
      this.canvas.height = height;
      this.bgcanvas.width = this.canvas.width;
      this.bgcanvas.height = this.canvas.height;
      this.setDirty(true, true);
    }

    /**
     * switches to live mode (node shapes are not rendered, only the content)
     * this feature was designed when graphs where meant to create user interfaces
     * @method switchLiveMode
     **/
  }, {
    key: "switchLiveMode",
    value: function switchLiveMode(transition) {
      if (!transition) {
        this.live_mode = !this.live_mode;
        this.dirty_canvas = true;
        this.dirty_bgcanvas = true;
        return;
      }
      var self = this;
      var delta = this.live_mode ? 1.1 : 0.9;
      if (this.live_mode) {
        this.live_mode = false;
        this.editor_alpha = 0.1;
      }
      var t = setInterval(function () {
        self.editor_alpha *= delta;
        self.dirty_canvas = true;
        self.dirty_bgcanvas = true;
        if (delta < 1 && self.editor_alpha < 0.01) {
          clearInterval(t);
          if (delta < 1) {
            self.live_mode = true;
          }
        }
        if (delta > 1 && self.editor_alpha > 0.99) {
          clearInterval(t);
          self.editor_alpha = 1;
        }
      }, 1);
    }

    /* @TODO: Validate this is never called
    onNodeSelectionChange() {
        return; // disabled
    }
    */

    /* this is an implementation for touch not in production and not ready
        */
    /* LGraphCanvas.prototype.touchHandler = function(event) {
        //alert("foo");
        var touches = event.changedTouches,
            first = touches[0],
            type = "";
         switch (event.type) {
            case "touchstart":
                type = "pointerdown";
                break;
            case "touchmove":
                type = "pointermove";
                break;
            case "touchend":
                type = "pointerup";
                break;
            default:
                return;
        }
         //initMouseEvent(type, canBubble, cancelable, view, clickCount,
        //           screenX, screenY, clientX, clientY, ctrlKey,
        //           altKey, shiftKey, metaKey, button, relatedTarget);
         // this is eventually a Dom object, get the LGraphCanvas back
        if(typeof this.getCanvasWindow == "undefined"){
            var window = this.lgraphcanvas.getCanvasWindow();
        }else{
            var window = this.getCanvasWindow();
        }
         var document = window.document;
         var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(
            type,
            true,
            true,
            window,
            1,
            first.screenX,
            first.screenY,
            first.clientX,
            first.clientY,
            false,
            false,
            false,
            false,
            0, //left
            null
        );
        first.target.dispatchEvent(simulatedEvent);
        event.preventDefault();
    };*/

    /* CONTEXT MENU ********************/
  }, {
    key: "boundaryNodesForSelection",
    value:
    /**
     * Determines the furthest nodes in each direction for the currently selected nodes
     * @return {{left: LGraphNode, top: LGraphNode, right: LGraphNode, bottom: LGraphNode}}
     */
    function boundaryNodesForSelection() {
      return LGraphCanvas.getBoundaryNodes(Object.values(this.selected_nodes));
    }

    // returns x, y, w, h
  }, {
    key: "getBoundaryForSelection",
    value: function getBoundaryForSelection() {
      var nodesBounds = this.boundaryNodesForSelection();
      if (!nodesBounds || nodesBounds.left === null) return false;
      var ln = nodesBounds.left.getBounding();
      var tn = nodesBounds.top.getBounding();
      var rn = nodesBounds.right.getBounding();
      var bn = nodesBounds.bottom.getBounding();
      return [ln[0], tn[1], rn[0] + rn[2] - ln[0], bn[1] + bn[3] - tn[1]];
    }
  }, {
    key: "getCoordinateCenter",
    value: function getCoordinateCenter(ob4v) {
      return [ob4v[0] + ob4v[2] / 2, ob4v[1] + ob4v[3] / 2];
    }

    /**
     *
     * @param {LGraphNode[]} nodes a list of nodes
     * @param {"top"|"bottom"|"left"|"right"} direction Direction to align the nodes
     * @param {LGraphNode?} align_to Node to align to (if null, align to the furthest node in the given direction)
     */
  }, {
    key: "doShowMenuNodeProperties",
    value: function doShowMenuNodeProperties(element, options, e, prev_menu, node) {
      LGraphCanvas.onShowMenuNodeProperties(element, options, e, prev_menu, node);
    }
  }, {
    key: "showLinkMenu",
    value: function showLinkMenu(link, e) {
      var that = this;
      LiteGraph.log_verbose(link);
      var node_left = that.graph.getNodeById(link.origin_id);
      var node_right = that.graph.getNodeById(link.target_id);
      var fromType = false;
      if (node_left && node_left.outputs && node_left.outputs[link.origin_slot]) fromType = node_left.outputs[link.origin_slot].type;
      var destType = false;
      if (node_right && node_right.outputs && node_right.outputs[link.target_slot]) destType = node_right.inputs[link.target_slot].type;
      var options = ["Add Node", null, "Delete", null];
      var menu = LiteGraph.ContextMenu(options, {
        event: e,
        title: link.data != null ? link.data.constructor.name : null,
        callback: inner_clicked
      });
      function inner_clicked(v, options, e) {
        switch (v) {
          case "Add Node":
            LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "inner_clicked", "calling onMenuAdd");
            LGraphCanvas.onMenuAdd(null, null, e, menu, function (node) {
              if (!node.inputs || !node.inputs.length || !node.outputs || !node.outputs.length) {
                return;
              }
              LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "inner_clicked", "node autoconnect on add node on link");
              // leave the connection type checking inside connectByType
              if (node_left.connectByType(link.origin_slot, node, fromType)) {
                node.connectByType(link.target_slot, node_right, destType);
                node.pos[0] -= node.size[0] * 0.5;
              }
            });
            break;
          case "Delete":
            LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "inner_clicked", "remove link");
            that.graph.removeLink(link.id);
            break;
          default:
            LiteGraph.log_debug.apply(LiteGraph, ["lgraphcanvas", "showLinkMenu", "inner_clicked", "node in the middle or other operation"].concat(Array.prototype.slice.call(arguments)));
          /* var nodeCreated = createDefaultNodeForSlot({   nodeFrom: node_left
                                                          ,slotFrom: link.origin_slot
                                                          ,nodeTo: node
                                                          ,slotTo: link.target_slot
                                                          ,e: e
                                                          ,nodeType: "AUTO"
                                                      });
          if(nodeCreated) LiteGraph.log_debug("new node in beetween "+v+" created");*/
        }
      }
      return false;
    }
  }, {
    key: "createDefaultNodeForSlot",
    value: function createDefaultNodeForSlot() {
      var optPass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // addNodeMenu for connection
      var opts = Object.assign({
        nodeFrom: null,
        // input
        slotFrom: null,
        // input
        nodeTo: null,
        // output
        slotTo: null,
        // output
        position: [],
        // pass the event coords
        nodeType: null,
        // choose a nodetype to add, AUTO to set at first good
        posAdd: [0, 0],
        // adjust x,y
        posSizeFix: [0, 0] // alpha, adjust the position x,y based on the new node size w,h
      }, optPass);
      var that = this;
      var isFrom = opts.nodeFrom && opts.slotFrom !== null;
      var isTo = !isFrom && opts.nodeTo && opts.slotTo !== null;
      if (!isFrom && !isTo) {
        LiteGraph.log_warn("lgraphcanvas", "createDefaultNodeForSlot", "No data passed " + opts.nodeFrom + " " + opts.slotFrom + " " + opts.nodeTo + " " + opts.slotTo);
        return false;
      }
      if (!opts.nodeType) {
        LiteGraph.log_warn("lgraphcanvas", "createDefaultNodeForSlot", "No type");
        return false;
      }
      var nodeX = isFrom ? opts.nodeFrom : opts.nodeTo;
      var slotX = isFrom ? opts.slotFrom : opts.slotTo;
      var iSlotConn = false;
      switch (_typeof(slotX)) {
        case "string":
          iSlotConn = isFrom ? nodeX.findOutputSlot(slotX, false) : nodeX.findInputSlot(slotX, false);
          slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
          break;
        case "object":
          // ok slotX
          iSlotConn = isFrom ? nodeX.findOutputSlot(slotX.name) : nodeX.findInputSlot(slotX.name);
          break;
        case "number":
          iSlotConn = slotX;
          slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
          break;
        default:
          // bad ?
          // iSlotConn = 0;
          LiteGraph.log_warn("lgraphcanvas", "createDefaultNodeForSlot", "Cant get slot information " + slotX);
          return false;
      }
      if (slotX === false || iSlotConn === false) {
        LiteGraph.log_warn("lgraphcanvas", "createDefaultNodeForSlot", "bad slotX " + slotX + " " + iSlotConn);
      }

      // check for defaults nodes for this slottype
      var fromSlotType = slotX.type == LiteGraph.EVENT ? "_event_" : slotX.type;
      var slotTypesDefault = isFrom ? LiteGraph.slot_types_default_out : LiteGraph.slot_types_default_in;
      if (slotTypesDefault && slotTypesDefault[fromSlotType]) {
        if (slotX.link !== null) ;
        var nodeNewType = false;
        if (_typeof(slotTypesDefault[fromSlotType]) == "object") {
          for (var typeX in slotTypesDefault[fromSlotType]) {
            if (opts.nodeType == slotTypesDefault[fromSlotType][typeX] || opts.nodeType == "AUTO") {
              nodeNewType = slotTypesDefault[fromSlotType][typeX];
              LiteGraph.log_verbose("lgraphcanvas", "createDefaultNodeForSlot", "opts.nodeType == slotTypesDefault[fromSlotType][typeX] :: " + opts.nodeType);
              break; // --------
            }
          }
        } else {
          if (opts.nodeType == slotTypesDefault[fromSlotType] || opts.nodeType == "AUTO") nodeNewType = slotTypesDefault[fromSlotType];
        }
        if (nodeNewType) {
          var nodeNewOpts = false;
          if (_typeof(nodeNewType) == "object" && nodeNewType.node) {
            nodeNewOpts = nodeNewType;
            nodeNewType = nodeNewType.node;
          }

          // that.graph.beforeChange();

          var newNode = LiteGraph.createNode(nodeNewType);
          if (newNode) {
            // if is object pass options
            if (nodeNewOpts) {
              if (nodeNewOpts.properties) {
                for (var _i16 = 0, _Object$entries = Object.entries(nodeNewOpts.properties); _i16 < _Object$entries.length; _i16++) {
                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i16], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];
                  newNode.addProperty(key, value);
                }
              }
              if (nodeNewOpts.inputs) {
                newNode.inputs = [];
                Object.values(nodeNewOpts.inputs).forEach(function (value) {
                  newNode.addOutput(value[0], value[1]);
                });
              }
              if (nodeNewOpts.outputs) {
                newNode.outputs = [];
                Object.values(nodeNewOpts.outputs).forEach(function (value) {
                  newNode.addOutput(value[0], value[1]);
                });
              }
              if (nodeNewOpts.title) {
                newNode.title = nodeNewOpts.title;
              }
              if (nodeNewOpts.json) {
                newNode.configure(nodeNewOpts.json);
              }
            }

            // add the node
            that.graph.add(newNode);
            newNode.pos = [opts.position[0] + opts.posAdd[0] + (opts.posSizeFix[0] ? opts.posSizeFix[0] * newNode.size[0] : 0), opts.position[1] + opts.posAdd[1] + (opts.posSizeFix[1] ? opts.posSizeFix[1] * newNode.size[1] : 0)]; // that.last_click_position; //[e.canvasX+30, e.canvasX+5];*/

            // that.graph.afterChange();

            // connect the two!
            if (isFrom) {
              opts.nodeFrom.connectByType(iSlotConn, newNode, fromSlotType);
            } else {
              opts.nodeTo.connectByTypeOutput(iSlotConn, newNode, fromSlotType);
            }

            /* if connecting in between
            if (isFrom && isTo){
                //@TODO
                // managing externally ? eg. link
            }
            */

            return true;
          } else {
            LiteGraph.log_warn("lgraphcanvas", "createDefaultNodeForSlot", "failed creating " + nodeNewType);
          }
        }
      }
      return false;
    }
  }, {
    key: "showConnectionMenu",
    value: function showConnectionMenu() {
      var optPass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // addNodeMenu for connection

      var opts = Object.assign({
        nodeFrom: null,
        // input
        slotFrom: null,
        // input
        nodeTo: null,
        // output
        slotTo: null,
        // output
        e: null,
        isCustomEvent: false
      }, optPass);
      var that = this;
      var isFrom = opts.nodeFrom && opts.slotFrom;
      var isTo = !isFrom && opts.nodeTo && opts.slotTo;
      if (!isFrom && !isTo) {
        LiteGraph.log_warn("lgraphcanvas", "showConnectionMenu", "No data passed to showConnectionMenu");
        return false;
      }
      var nodeX = isFrom ? opts.nodeFrom : opts.nodeTo;
      var slotX = isFrom ? opts.slotFrom : opts.slotTo;
      var iSlotConn = false;
      switch (_typeof(slotX)) {
        case "string":
          iSlotConn = isFrom ? nodeX.findOutputSlot(slotX, false) : nodeX.findInputSlot(slotX, false);
          slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
          break;
        case "object":
          // ok slotX
          iSlotConn = isFrom ? nodeX.findOutputSlot(slotX.name) : nodeX.findInputSlot(slotX.name);
          break;
        case "number":
          iSlotConn = slotX;
          slotX = isFrom ? nodeX.outputs[slotX] : nodeX.inputs[slotX];
          break;
        default:
          // bad ?
          // iSlotConn = 0;
          LiteGraph.log_warn("lgraphcanvas", "showConnectionMenu", "Cant get slot information " + slotX);
          return false;
      }
      var options = ["Add Node", null];
      if (that.allow_searchbox) {
        options.push("Search");
        options.push(null);
      }

      // get defaults nodes for this slottype
      var fromSlotType = slotX.type === LiteGraph.EVENT ? "_event_" : slotX.type;
      var slotTypesDefault = isFrom ? LiteGraph.slot_types_default_out : LiteGraph.slot_types_default_in;
      if (slotTypesDefault && slotTypesDefault[fromSlotType]) {
        var slotType = slotTypesDefault[fromSlotType];
        if (Array.isArray(slotType) || _typeof(slotType) === "object") {
          Object.values(slotType).forEach(function (typeX) {
            options.push(typeX);
          });
        } else {
          options.push(slotType);
        }
      }

      // build menu
      var menu = LiteGraph.ContextMenu(options, {
        event: opts.e,
        isCustomEvent: opts.isCustomEvent,
        title: (slotX && slotX.name != "" ? slotX.name + (fromSlotType ? " | " : "") : "") + (slotX && fromSlotType ? fromSlotType : ""),
        callback: function callback(v, options, e) {
          var cases = {
            "Add Node": function Add_Node() {
              LiteGraph.log_debug("lgraphcanvas", "showConnectionMenu", "callback", "Add Node calling onMenuAdd", v, options, e);
              LGraphCanvas.onMenuAdd(null, null, e, menu, function (node) {
                isFrom ? opts.nodeFrom.connectByType(iSlotConn, node, fromSlotType) : opts.nodeTo.connectByTypeOutput(iSlotConn, node, fromSlotType);
              });
            },
            "Search": function Search() {
              isFrom ? that.showSearchBox(e, {
                node_from: opts.nodeFrom,
                slot_from: slotX,
                type_filter_in: fromSlotType
              }) : that.showSearchBox(e, {
                node_to: opts.nodeTo,
                slot_from: slotX,
                type_filter_out: fromSlotType
              });
            },
            "default": function _default() {
              LiteGraph.log_debug("lgraphcanvas", "showConnectionMenu", "callback", "createDefaultNodeForSlot", v, options, e);
              // const new_pos = this.convertOffsetToEditorArea([opts.e.clientX, opts.e.clientY]);
              var new_pos = [opts.e.canvasX, opts.e.canvasY];
              that.createDefaultNodeForSlot(Object.assign(opts, {
                position: new_pos,
                nodeType: v
              }));
            }
          };

          // Execute the corresponding function based on the value of v
          (cases[v] || cases["default"])();
        }
      });
      return false;
    }
  }, {
    key: "doShowNodeInfoEditor",
    value: function doShowNodeInfoEditor(node, item, e, options) {
      LGraphCanvas.onShowNodeInfoEditor(item, options, e, null, node);
    }

    // TODO refactor :: this is used fot title but not for properties!
  }, {
    key: "prompt",
    value:
    // refactor: there are different dialogs, some uses createDialog some dont
    // prompt v2
    function prompt() {
      var _this7 = this,
        _this$prompt_box;
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var value = arguments.length > 1 ? arguments[1] : undefined;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var event = arguments.length > 3 ? arguments[3] : undefined;
      var multiline = arguments.length > 4 ? arguments[4] : undefined;
      var dialog = document.createElement("div");
      dialog.is_modified = false;
      dialog.className = "graphdialog rounded";
      if (multiline) dialog.innerHTML = "<span class='name'></span> <textarea autofocus class='value'></textarea><button class='rounded'>OK</button>";else dialog.innerHTML = "<span class='name'></span> <input autofocus type='text' class='value'/><button class='rounded'>OK</button>";
      dialog.close = function () {
        var _dialog$parentNode;
        _this7.prompt_box = null;
        (_dialog$parentNode = dialog.parentNode) === null || _dialog$parentNode === void 0 || _dialog$parentNode.removeChild(dialog);
      };
      var graphcanvas = LGraphCanvas.active_canvas;
      var canvas = graphcanvas.canvas;
      canvas.parentNode.appendChild(dialog);
      if (this.ds.scale > 1) {
        dialog.style.transform = "scale(".concat(this.ds.scale, ")");
      }
      var dialogCloseTimer = null;
      dialog.addEventListener("pointerleave", function (_event) {
        if (LiteGraph.dialog_close_on_mouse_leave && !dialog.is_modified && LiteGraph.dialog_close_on_mouse_leave) {
          dialogCloseTimer = setTimeout(dialog.close, LiteGraph.dialog_close_on_mouse_leave_delay);
        }
      });
      dialog.addEventListener("pointerenter", function (_event) {
        if (LiteGraph.dialog_close_on_mouse_leave && dialogCloseTimer) {
          clearTimeout(dialogCloseTimer);
        }
      });
      var selInDia = dialog.querySelectorAll("select");
      if (selInDia) {
        selInDia.forEach(function (selIn) {
          selIn.addEventListener("click", function (_event) {
          });
          selIn.addEventListener("blur", function (_event) {
          });
          selIn.addEventListener("change", function (_event) {
          });
        });
      }
      (_this$prompt_box = this.prompt_box) === null || _this$prompt_box === void 0 || _this$prompt_box.close();
      this.prompt_box = dialog;
      var name_element = dialog.querySelector(".name");
      name_element.innerText = title;
      var value_element = dialog.querySelector(".value");
      value_element.value = value;
      var input = value_element;
      input.addEventListener("keydown", function (e) {
        dialog.is_modified = true;
        switch (e.keyCode) {
          case 27:
            // ESC key
            dialog.close();
            break;
          case 13:
            // Enter key
            if (e.target.localName !== "textarea" && typeof callback == "function") {
              callback(input.value);
              _this7.setDirty(true); // CHECK should probably call graphChanged instead
            }
            LiteGraph.log_debug("lgraphcanvas", "prompt", "prompt v2 ENTER", input.value, e.target.localName, callback);
            dialog.close();
            break;
          default:
            return;
          // Ignore other key codes
        }
        e.preventDefault();
        e.stopPropagation();
      });
      var button = dialog.querySelector("button");
      button.addEventListener("click", function (_event) {
        if (typeof callback == "function") {
          callback(input.value);
          _this7.setDirty(true); // CHECK should probably call graphChanged instead
        }
        LiteGraph.log_debug("lgraphcanvas", "prompt", "prompt v2 OK", input.value, callback);
        dialog.close();
      });
      var rect = canvas.getBoundingClientRect();
      var offsetx = -20;
      var offsety = -20;
      if (rect) {
        offsetx -= rect.left;
        offsety -= rect.top;
      }
      if (event) {
        dialog.style.left = event.clientX + offsetx + "px";
        dialog.style.top = event.clientY + offsety + "px";
      } else {
        dialog.style.left = canvas.width * 0.5 + offsetx + "px";
        dialog.style.top = canvas.height * 0.5 + offsety + "px";
      }
      setTimeout(function () {
        input.focus();
      }, 10);
      return dialog;
    }
  }, {
    key: "showSearchBox",
    value: function showSearchBox(event, options) {
      // proposed defaults
      var def_options = {
        slot_from: null,
        node_from: null,
        node_to: null,
        do_type_filter: LiteGraph.search_filter_enabled,
        // TODO check for registered_slot_[in/out]_types not empty // this will be checked for functionality enabled : filter on slot type, in and out
        type_filter_in: false,
        // these are default: pass to set initially set values
        type_filter_out: false,
        show_general_if_none_on_typefilter: true,
        show_general_after_typefiltered: true,
        hide_on_mouse_leave: LiteGraph.search_hide_on_mouse_leave,
        hide_on_mouse_leave_time: LiteGraph.search_hide_on_mouse_leave_time,
        show_all_if_empty: true,
        show_all_on_open: LiteGraph.search_show_all_on_open
      };
      options = Object.assign(def_options, options || {});
      if (_typeof(event) !== "object" || typeof event.target == "undefined") {
        if (typeof options.event !== "undefined") {
          LiteGraph.log_debug("lgraphcanvas", "showSearchBox", "event not passed directly, using event from options", options.event, "first par was:", event);
          event = options.event;
        }
      }
      LiteGraph.log_debug("lgraphcanvas", "showSearchBox", event, options);
      if (typeof that == "undefined") {
        var that = this;
      } else {
        LiteGraph.log_debug("lgraphcanvas", "showSearchBox", "using already present graphcanvas reference", that, "this is other?", this);
      }
      var graphcanvas = LGraphCanvas.active_canvas;
      var canvas = graphcanvas.canvas;
      var root_document = canvas.ownerDocument || document;
      var dialog = document.createElement("div");
      dialog.className = "litegraph litesearchbox graphdialog rounded";
      dialog.innerHTML = "<span class='name'>Search</span> <input autofocus type='text' class='value rounded'/>";
      if (options.do_type_filter) {
        dialog.innerHTML += "<select class='slot_in_type_filter'><option value=''></option></select>";
        dialog.innerHTML += "<select class='slot_out_type_filter'><option value=''></option></select>";
      }
      if (options.show_close_button) {
        dialog.innerHTML += "<button class='close_searchbox close'>X</button>";
      }
      dialog.innerHTML += "<div class='helper'></div>";
      if (root_document.fullscreenElement) root_document.fullscreenElement.appendChild(dialog);else {
        root_document.body.appendChild(dialog);
        root_document.body.style.overflow = "hidden";
      }
      // dialog element has been appended

      if (options.do_type_filter) {
        var selIn = dialog.querySelector(".slot_in_type_filter");
        var selOut = dialog.querySelector(".slot_out_type_filter");
      }
      dialog.close = function () {
        that.search_box = null;
        this.blur();
        canvas.focus();
        root_document.body.style.overflow = "";
        setTimeout(function () {
          var _that$canvas;
          (_that$canvas = that.canvas) === null || _that$canvas === void 0 || _that$canvas.focus();
          if (!that.canvas) {
            LiteGraph.log_debug("lgraphcanvas", "showSearchBox", "dont have reference to canvas", that, "this is other?", this);
          }
        }, 20); // important, if canvas loses focus keys wont be captured
        if (dialog.parentNode) {
          dialog.parentNode.removeChild(dialog);
        }
      };
      if (typeof that.ds !== "undefined") {
        if (that.ds.scale > 1) {
          dialog.style.transform = "scale(".concat(that.ds.scale, ")");
        }
      } else {
        LiteGraph.log_debug("lgraphcanvas", "showSearchBox", "ds reference not found, is this graphcanvas or what", "that", that, "this", this);
      }

      // hide on mouse leave
      if (options.hide_on_mouse_leave) {
        var prevent_timeout = false;
        var timeout_close = null;
        dialog.addEventListener("pointerenter", function (_event) {
          if (timeout_close) {
            clearTimeout(timeout_close);
            timeout_close = null;
          }
        });
        dialog.addEventListener("pointerleave", function (_event) {
          if (prevent_timeout) {
            return;
          }
          timeout_close = setTimeout(function () {
            dialog.close();
          }, options.hide_on_mouse_leave_time);
        });
        // if filtering, check focus changed to comboboxes and prevent closing
        if (options.do_type_filter) {
          selIn.addEventListener("click", function (_event) {
            prevent_timeout++;
          });
          selIn.addEventListener("blur", function (_event) {
            prevent_timeout = 0;
          });
          selIn.addEventListener("change", function (_event) {
            prevent_timeout = -1;
          });
          selOut.addEventListener("click", function (_event) {
            prevent_timeout++;
          });
          selOut.addEventListener("blur", function (_event) {
            prevent_timeout = 0;
          });
          selOut.addEventListener("change", function (_event) {
            prevent_timeout = -1;
          });
        }
      }
      if (that.search_box) {
        that.search_box.close();
      }
      that.search_box = dialog;
      var helper = dialog.querySelector(".helper");
      var first = null;
      var timeout = null;
      var selected = null;
      var input = dialog.querySelector("input");
      if (input) {
        input.addEventListener("blur", function (_event) {
          if (that.search_box) this.focus();
        });
        input.addEventListener("keydown", function (e) {
          if (e.keyCode == 38) {
            // @TODO: deprecated
            // UP
            changeSelection(false);
          } else if (e.keyCode == 40) {
            // DOWN
            changeSelection(true);
          } else if (e.keyCode == 27) {
            // ESC
            dialog.close();
          } else if (e.keyCode == 13) {
            refreshHelper();
            if (selected) {
              select(selected.innerHTML);
            } else if (first) {
              select(first);
            } else {
              dialog.close();
            }
          } else {
            if (timeout) {
              clearInterval(timeout);
            }
            timeout = setTimeout(refreshHelper, 250);
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return true;
        });
      }

      // if should filter on type, load and fill selected and choose elements if passed
      if (options.do_type_filter) {
        if (selIn) {
          var aSlots = LiteGraph.slot_types_in;
          var nSlots = aSlots.length; // this for object :: Object.keys(aSlots).length;

          if (options.type_filter_in == LiteGraph.EVENT || options.type_filter_in == LiteGraph.ACTION) options.type_filter_in = "_event_";
          /* this will filter on * .. but better do it manually in case
          else if(options.type_filter_in === "" || options.type_filter_in === 0)
              options.type_filter_in = "*";*/

          for (var iK = 0; iK < nSlots; iK++) {
            var opt = document.createElement('option');
            opt.value = aSlots[iK];
            opt.innerHTML = aSlots[iK];
            selIn.appendChild(opt);
            if (options.type_filter_in !== false && (options.type_filter_in + "").toLowerCase() == (aSlots[iK] + "").toLowerCase()) {
              // selIn.selectedIndex ..
              opt.selected = true; // ? check this: multiselect!! (NO!,NO?)
              // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas","showSearchBox","comparing IN INCLUDED"+options.type_filter_in+" :: "+aSlots[iK]);
            }
          }
          selIn.addEventListener("change", function () {
            refreshHelper();
          });
        }
        if (selOut) {
          var _aSlots = LiteGraph.slot_types_out;
          var _nSlots = _aSlots.length; // this for object :: Object.keys(aSlots).length;

          if (options.type_filter_out == LiteGraph.EVENT || options.type_filter_out == LiteGraph.ACTION) options.type_filter_out = "_event_";
          /* this will filter on * .. but better do it manually in case
          else if(options.type_filter_out === "" || options.type_filter_out === 0)
              options.type_filter_out = "*";*/

          for (var _iK = 0; _iK < _nSlots; _iK++) {
            var _opt = document.createElement('option');
            _opt.value = _aSlots[_iK];
            _opt.innerHTML = _aSlots[_iK];
            selOut.appendChild(_opt);
            if (options.type_filter_out !== false && (options.type_filter_out + "").toLowerCase() == (_aSlots[_iK] + "").toLowerCase()) {
              // selOut.selectedIndex ..
              _opt.selected = true; // ? check this: multiselect!! (NO!,NO?)
              // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas","showSearchBox","comparing IN INCLUDED"+options.type_filter_in+" :: "+aSlots[iK]);
            }
          }
          selOut.addEventListener("change", function () {
            refreshHelper();
          });
        }
      }
      if (options.show_close_button) {
        var button = dialog.querySelector(".close");
        button.addEventListener("click", dialog.close);
      }

      // compute best position
      var rect = canvas.getBoundingClientRect();
      var left = (event ? event.clientX : rect.left + rect.width * 0.5) - 80;
      var top = (event ? event.clientY : rect.top + rect.height * 0.5) - 20;
      if (rect.width - left < 470) left = rect.width - 470;
      if (rect.height - top < 220) top = rect.height - 220;
      if (left < rect.left + 20) left = rect.left + 20;
      if (top < rect.top + 20) top = rect.top + 20;
      dialog.style.left = left + "px";
      dialog.style.top = top + "px";

      /*
      var offsetx = -20;
      var offsety = -20;
      if (rect) {
          offsetx -= rect.left;
          offsety -= rect.top;
      }
       if (event) {
          dialog.style.left = event.clientX + offsetx + "px";
          dialog.style.top = event.clientY + offsety + "px";
      } else {
          dialog.style.left = canvas.width * 0.5 + offsetx + "px";
          dialog.style.top = canvas.height * 0.5 + offsety + "px";
      }
      canvas.parentNode.appendChild(dialog);
      */

      input.focus();
      if (options.show_all_on_open) refreshHelper();
      function select(name) {
        if (name) {
          if (!that || _typeof(that) !== "object" || typeof that.processCallbackHandlers == "undefined") {
            LiteGraph.log_warn("lgraphcanvas", "showSearchBox", "select", "that reference is wrong", that, dialog, this, options);
            return;
          }
          var r = that.processCallbackHandlers("onSearchBoxSelection", {
            def_cb: that.onSearchBoxSelection
          }, name, event, graphcanvas);
          if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) ; else {
            var extra = LiteGraph.searchbox_extras[name.toLowerCase()];
            if (extra) {
              name = extra.type;
            }
            graphcanvas.graph.beforeChange();
            var node = LiteGraph.createNode(name);
            if (!node) {
              LiteGraph.log_warn("lgraphcanvas", "showSearchBox", "select", "failed creating the node", node);
              dialog.close();
              return false;
            }
            node.pos = graphcanvas.convertEventToCanvasOffset(event);
            graphcanvas.graph.add(node, false, {
              doProcessChange: false
            });
            if (extra && extra.data) {
              if (extra.data.properties) {
                for (var i in extra.data.properties) {
                  node.addProperty(i, extra.data.properties[i]);
                }
              }
              if (extra.data.inputs) {
                node.inputs = [];
                for (var _i17 in extra.data.inputs) {
                  node.addOutput(extra.data.inputs[_i17][0], extra.data.inputs[_i17][1]);
                }
              }
              if (extra.data.outputs) {
                node.outputs = [];
                for (var _i18 in extra.data.outputs) {
                  node.addOutput(extra.data.outputs[_i18][0], extra.data.outputs[_i18][1]);
                }
              }
              if (extra.data.title) {
                node.title = extra.data.title;
              }
              if (extra.data.json) {
                node.configure(extra.data.json);
              }
            }
            var iS;

            // join node after inserting
            if (options.node_from) {
              iS = false;
              switch (_typeof(options.slot_from)) {
                case "string":
                  iS = options.node_from.findOutputSlot(options.slot_from);
                  break;
                case "object":
                  if (options.slot_from.name) {
                    iS = options.node_from.findOutputSlot(options.slot_from.name);
                  } else {
                    iS = -1;
                  }
                  if (iS == -1 && typeof options.slot_from.slot_index !== "undefined") iS = options.slot_from.slot_index;
                  break;
                case "number":
                  iS = options.slot_from;
                  break;
                default:
                  iS = 0;
                // try with first if no name set
              }
              if (typeof options.node_from.outputs[iS] !== "undefined") {
                if (iS !== false && iS > -1) {
                  options.node_from.connectByType(iS, node, options.node_from.outputs[iS].type);
                }
              } else {
                LiteGraph.log_warn("lgraphcanvas", "showSearchBox", "select", "cant find slot node_from to join using from slot type", options.slot_from, options.node_from.outputs);
              }
            }
            if (options.node_to) {
              iS = false;
              switch (_typeof(options.slot_from)) {
                case "string":
                  iS = options.node_to.findInputSlot(options.slot_from);
                  break;
                case "object":
                  if (options.slot_from.name) {
                    iS = options.node_to.findInputSlot(options.slot_from.name);
                  } else {
                    iS = -1;
                  }
                  if (iS == -1 && typeof options.slot_from.slot_index !== "undefined") iS = options.slot_from.slot_index;
                  break;
                case "number":
                  iS = options.slot_from;
                  break;
                default:
                  iS = 0;
                // try with first if no name set
              }
              if (typeof options.node_to.inputs[iS] !== "undefined") {
                if (iS !== false && iS > -1) {
                  // try connection
                  options.node_to.connectByTypeOutput(iS, node, options.node_to.inputs[iS].type);
                }
              } else {
                LiteGraph.log_warn("lgraphcanvas", "showSearchBox", "select", "cant find slot node_to to join using from slot type", options.slot_from, options.node_to.inputs);
              }
            }
            graphcanvas.graph.afterChange();
          }
        }
        dialog.close();
      }
      function changeSelection(forward) {
        var prev = selected;
        if (selected) {
          selected.classList.remove("selected");
        }
        if (!selected) {
          selected = forward ? helper.childNodes[0] : helper.childNodes[helper.childNodes.length];
        } else {
          selected = forward ? selected.nextSibling : selected.previousSibling;
          if (!selected) {
            selected = prev;
          }
        }
        if (!selected) {
          return;
        }
        selected.classList.add("selected");
        selected.scrollIntoView({
          block: "end",
          behavior: "smooth"
        });
      }
      function refreshHelper() {
        timeout = null;
        var str = input.value;
        first = null;
        helper.innerHTML = "";
        if (!str && !options.show_all_if_empty) {
          return;
        }
        if (that.onSearchBox) {
          var list = that.onSearchBox(helper, str, graphcanvas);
          if (list) {
            for (var i = 0; i < list.length; ++i) {
              addResult(list[i]);
            }
          }
        } else {
          var inner_test_filter = function inner_test_filter(type) {
            var optsIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var optsDef = {
              skipFilter: false,
              inTypeOverride: false,
              outTypeOverride: false
            };
            var opts = Object.assign(optsDef, optsIn);
            var ctor = LiteGraph.registered_node_types[type];
            if (filter && ctor.filter != filter) return false;
            var str_node = type.toLowerCase();
            var a_srch_parts = str.toLowerCase().split(" ");
            var passTextSearch = true;
            var _iterator2 = _createForOfIteratorHelper(a_srch_parts),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _i_srch = _step2.value;
                LiteGraph.log_verbose("search", "check", _i_srch, str_node); // verbose debug, make new higher level
                if (_i_srch.trim() === "") continue;
                if (str_node.indexOf(_i_srch) == -1) {
                  passTextSearch = false;
                  LiteGraph.log_verbose("search", "do not pass", _i_srch, str_node); // verbose debug, make new higher level
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if ((!options.show_all_if_empty || str) && !passTextSearch) return false;

            // filter by slot IN, OUT types
            if (options.do_type_filter && !opts.skipFilter) {
              var sType = type;
              var doesInc;
              var sV = sIn.value;
              if (opts.inTypeOverride !== false) sV = opts.inTypeOverride;
              // if (sV.toLowerCase() == "_event_") sV = LiteGraph.EVENT; // -1

              if (sIn && sV) {
                // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "showSearchBox", "inner_test_filter", "IN will check filter against "+sV);
                if (LiteGraph.registered_slot_in_types[sV] && LiteGraph.registered_slot_in_types[sV].nodes) {
                  // type is stored
                  // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "showSearchBox", "inner_test_filter", "IN check "+sType+" in "+LiteGraph.registered_slot_in_types[sV].nodes);
                  doesInc = LiteGraph.registered_slot_in_types[sV].nodes.includes(sType);
                  if (doesInc !== false) ; else {
                    // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "showSearchBox", "inner_test_filter", "IN "+LiteGraph.registered_slot_in_types[sV]," DONT includes "+type);
                    return false;
                  }
                }
              }
              sV = sOut.value;
              if (opts.outTypeOverride !== false) {
                sV = opts.outTypeOverride;
              }
              // if (sV.toLowerCase() == "_event_") sV = LiteGraph.EVENT; // -1

              if (sOut && sV) {
                // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "showSearchBox", "inner_test_filter", "IN will check filter against "+sV);
                if (LiteGraph.registered_slot_out_types[sV] && LiteGraph.registered_slot_out_types[sV].nodes) {
                  // type is stored
                  // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "showSearchBox", "inner_test_filter", "IN check "+sType+" in "+LiteGraph.registered_slot_in_types[sV].nodes);
                  doesInc = LiteGraph.registered_slot_out_types[sV].nodes.includes(sType);
                  if (doesInc !== false) ; else {
                    // DBG EXCESS LiteGraph.log_verbose("lgraphcanvas", "showSearchBox", "inner_test_filter", "IN "+LiteGraph.registered_slot_in_types[sV]," DONT includes "+type);
                    return false;
                  }
                }
              }
            }
            return true;
          };
          var c = 0;
          str = str.toLowerCase();
          var filter = graphcanvas.filter || graphcanvas.graph.filter;
          var sIn, sOut;

          // filter by type preprocess
          if (options.do_type_filter && that.search_box) {
            sIn = that.search_box.querySelector(".slot_in_type_filter");
            sOut = that.search_box.querySelector(".slot_out_type_filter");
          } else {
            sIn = false;
            sOut = false;
          }

          // extras
          for (var _i19 in LiteGraph.searchbox_extras) {
            var extra = LiteGraph.searchbox_extras[_i19];
            // var passTextSearch = extra.desc.toLowerCase().indexOf(str) !== -1;
            var str_node = extra.desc.toLowerCase();
            var str_title = extra.title ? extra.title.toLowerCase() : "";
            var a_srch_parts = str.toLowerCase().split(" ");
            var passTextSearch = true;
            var _iterator = _createForOfIteratorHelper(a_srch_parts),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i_srch = _step.value;
                // DBG EXCESS LiteGraph.log_verbose("search","check",i_srch,str_node); // verbose debug, make new higher level
                if (i_srch.trim() === "") continue;
                if (str_node.indexOf(i_srch) == -1 && str_title.indexOf(i_srch) == -1) {
                  passTextSearch = false;
                  // DBG EXCESS LiteGraph.log_verbose("search","do not pass",i_srch,str_node); // verbose debug, make new higher level
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if ((!options.show_all_if_empty || str) && !passTextSearch) {
              continue;
            }
            var ctor = LiteGraph.registered_node_types[extra.type];
            if (ctor && ctor.filter != filter) continue;
            if (!inner_test_filter(extra.type)) continue;
            addResult(extra.desc, "searchbox_extra");
            if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) {
              break;
            }
          }
          var filtered = null;
          // filter by nodetype
          if (Array.prototype.filter) {
            // filter supported
            var keys = Object.keys(LiteGraph.registered_node_types); // types
            filtered = keys.filter(inner_test_filter);
          } else {
            filtered = [];
            for (var _i20 in LiteGraph.registered_node_types) {
              if (inner_test_filter(_i20)) {
                filtered.push(_i20);
              }
            }
          }
          // add filter by title and desc
          // TODO
          /* if (Array.prototype.filter) { // filter supported
              let keys = Object.keys( LiteGraph.registered_node_types ); // types
              filtered = keys.filter( inner_test_filter );
          } else {
              filtered = [];
              for (let i in LiteGraph.registered_node_types) {
                  if( inner_test_filter(i) ){
                      filtered.push(i);
                  }
              }
          } */

          for (var _i21 = 0; _i21 < filtered.length; _i21++) {
            addResult(filtered[_i21]);
            if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) {
              break;
            }
          }

          // add general type if filtering
          if (options.show_general_after_typefiltered && (sIn.value || sOut.value)) {
            var filtered_extra = [];
            for (var _i22 in LiteGraph.registered_node_types) {
              if (inner_test_filter(_i22, {
                inTypeOverride: sIn && sIn.value ? "*" : false,
                outTypeOverride: sOut && sOut.value ? "*" : false
              })) filtered_extra.push(_i22);
            }
            for (var _i23 = 0; _i23 < filtered_extra.length; _i23++) {
              addResult(filtered_extra[_i23], "generic_type");
              if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) {
                break;
              }
            }
          }

          // check il filtering gave no results
          if ((sIn.value || sOut.value) && helper.childNodes.length == 0 && options.show_general_if_none_on_typefilter) {
            var _filtered_extra = [];
            for (var _i24 in LiteGraph.registered_node_types) {
              if (inner_test_filter(_i24, {
                skipFilter: true
              })) _filtered_extra.push(_i24);
            }
            for (var _i25 = 0; _i25 < _filtered_extra.length; _i25++) {
              addResult(_filtered_extra[_i25], "not_in_filter");
              if (LGraphCanvas.search_limit !== -1 && c++ > LGraphCanvas.search_limit) {
                break;
              }
            }
          }
        }
        function addResult(type, className) {
          var help = document.createElement("div");
          if (!first) {
            first = type;
          }
          help.innerText = type;
          help.dataset["type"] = escape(type); // @TODO: deprecated
          help.className = "litegraph lite-search-item";
          if (className) {
            help.className += " " + className;
          }
          help.addEventListener("click", function (_event) {
            select(unescape(this.dataset["type"]));
          });
          helper.appendChild(help);
        }
      }
      return dialog;
    }
  }, {
    key: "showEditPropertyValue",
    value: function showEditPropertyValue(node, property, options) {
      if (!node || node.properties[property] === undefined) {
        return;
      }
      options = options || {};
      var info = node.getPropertyInfo(property);
      var type = info && info !== null ? info.type : "string";
      var input_html;
      if (type == "string" || type == "number" || type == "array" || type == "object" || type == "code") {
        input_html = "<input autofocus type='text' class='value'/>";
      } else if ((type == "enum" || type == "combo") && info.values) {
        LiteGraph.log_debug("lgraphcanvas", "showEditPropertyValue", "CREATING ENUM COMBO", input, type, dialog);
        input_html = "<select autofocus type='text' class='value'>";
        for (var i in info.values) {
          var v = i;
          if (info.values.constructor === Array) v = info.values[i];
          input_html += "<option value='" + v + "' " + (v == node.properties[property] ? "selected" : "") + ">" + info.values[i] + "</option>";
        }
        input_html += "</select>";
      } else if (type == "boolean" || type == "toggle") {
        input_html = "<input autofocus type='checkbox' class='value' " + (node.properties[property] ? "checked" : "") + "/>";
      } else {
        LiteGraph.log_warn("lgraphcanvas", "showEditPropertyValue", "unknown type", type);
        return;
      }
      var dialog = this.createDialog("<span class='name'>" + (info.label ? info.label : property) + "</span>" + input_html + "<button>OK</button>", options);
      var input = false;
      if ((type == "enum" || type == "combo") && info.values) {
        LiteGraph.log_debug("lgraphcanvas", "showEditPropertyValue", "showEditPropertyValue ENUM COMBO", input, type, dialog);
        input = dialog.querySelector("select");
        input.addEventListener("change", function (e) {
          dialog.modified();
          LiteGraph.log_debug("lgraphcanvas", "showEditPropertyValue", "Enum change", input, info, e.target);
          setValue(e.target.value);
          // var index = e.target.value;
          // setValue( e.options[e.selectedIndex].value );
        });
      } else if (type == "boolean" || type == "toggle") {
        LiteGraph.log_debug("lgraphcanvas", "showEditPropertyValue", "TOGGLE", input, type, dialog);
        input = dialog.querySelector("input");
        if (input) {
          input.addEventListener("click", function (_event) {
            dialog.modified();
            setValue(!!input.checked);
          });
        }
      } else {
        input = dialog.querySelector("input");
        LiteGraph.log_debug("lgraphcanvas", "showEditPropertyValue", input, type, dialog);
        if (input) {
          input.addEventListener("blur", function (_event) {
            this.focus();
          });
          v = node.properties[property] !== undefined ? node.properties[property] : "";
          if (type !== 'string') {
            v = JSON.stringify(v);
          }
          input.value = v;
          input.addEventListener("keydown", function (e) {
            if (e.keyCode == 27) {
              // ESC
              dialog.close();
            } else if (e.keyCode == 13) {
              // ENTER
              inner(); // save
            } else if (e.keyCode != 13) {
              dialog.modified();
              return;
            }
            e.preventDefault();
            e.stopPropagation();
          });
        }
      }
      if (input) input.focus();
      var button = dialog.querySelector("button");
      button.addEventListener("click", inner);
      function inner() {
        setValue(input.value);
      }
      function setValue(value) {
        var _node$graph;
        if (info && info.values && info.values.constructor === Object && info.values[value] != undefined) value = info.values[value];
        if (typeof node.properties[property] == "number") {
          value = Number(value);
        }
        if (type == "array" || type == "object") {
          value = JSON.parse(value);
        }
        var prevValue = node.properties[property];
        node.properties[property] = value;
        (_node$graph = node.graph) === null || _node$graph === void 0 || _node$graph.onGraphChanged({
          action: "propertyChanged",
          doSave: true
        });

        // Call onPropertyChanged and block the change if needed
        var r = node.processCallbackHandlers("onPropertyChanged", {
          def_cb: node.onPropertyChanged
        }, property, value, prevValue);
        if (r === false || r !== null && _typeof(r) == "object" && r.return_value === false) {
          node.properties[property] = prevValue;
          LiteGraph.log_debug("lgraphcanvas", "showEditPropertyValue", "setValue", "prevent property set by cbHandler", property, value, prevValue, r);
        }
        if (options.onclose) options.onclose();
        dialog.close();
        node.setDirtyCanvas(true, true);
      }
      return dialog;
    }

    // TODO refactor, theer are different dialog, some uses createDialog, some dont
  }, {
    key: "createDialog",
    value: function createDialog(html, options) {
      var def_options = {
        checkForInput: false,
        closeOnLeave: true,
        closeOnLeave_checkModified: true
      };
      options = Object.assign(def_options, options || {});
      var dialog = document.createElement("div");
      dialog.className = "graphdialog";
      dialog.innerHTML = html;
      dialog.is_modified = false;
      var rect = this.canvas.getBoundingClientRect();
      var offsetx = -20;
      var offsety = -20;
      if (rect) {
        offsetx -= rect.left;
        offsety -= rect.top;
      }
      if (options.position) {
        offsetx += options.position[0];
        offsety += options.position[1];
      } else if (options.event) {
        offsetx += options.event.clientX;
        offsety += options.event.clientY;
      } else {
        // centered
        offsetx += this.canvas.width * 0.5;
        offsety += this.canvas.height * 0.5;
      }
      dialog.style.left = offsetx + "px";
      dialog.style.top = offsety + "px";
      this.canvas.parentNode.appendChild(dialog);

      // check for input and use default behaviour: save on enter, close on esc
      if (options.checkForInput) {
        var aI = [];
        var focused = false;
        aI = dialog.querySelectorAll("input");
        if (aI) {
          aI.forEach(function (iX) {
            iX.addEventListener("keydown", function (e) {
              dialog.modified();
              if (e.keyCode == 27) {
                dialog.close();
              } else if (e.keyCode != 13) {
                return;
              }
              // set value ?
              e.preventDefault();
              e.stopPropagation();
            });
            if (!focused) iX.focus();
          });
        }
      }
      dialog.modified = function () {
        dialog.is_modified = true;
      };
      dialog.close = function () {
        if (dialog.parentNode) {
          dialog.parentNode.removeChild(dialog);
        }
      };
      var dialogCloseTimer = null;
      var prevent_timeout = false;
      dialog.addEventListener("pointerleave", function (_event) {
        if (prevent_timeout) return;
        if (options.closeOnLeave || LiteGraph.dialog_close_on_mouse_leave) if (!dialog.is_modified && LiteGraph.dialog_close_on_mouse_leave) dialogCloseTimer = setTimeout(dialog.close, LiteGraph.dialog_close_on_mouse_leave_delay); // dialog.close();
      });
      dialog.addEventListener("pointerenter", function (_event) {
        if (options.closeOnLeave || LiteGraph.dialog_close_on_mouse_leave) if (dialogCloseTimer) clearTimeout(dialogCloseTimer);
      });
      var selInDia = dialog.querySelectorAll("select");
      if (selInDia) {
        // if filtering, check focus changed to comboboxes and prevent closing
        selInDia.forEach(function (selIn) {
          selIn.addEventListener("click", function (_event) {
            prevent_timeout++;
          });
          selIn.addEventListener("blur", function (_event) {
            prevent_timeout = 0;
          });
          selIn.addEventListener("change", function (_event) {
            prevent_timeout = -1;
          });
        });
      }
      return dialog;
    }
  }, {
    key: "createPanel",
    value: function createPanel(title, options) {
      options = options || {};
      var ref_window = options.window || window;
      var root = document.createElement("div");
      root.className = "litegraph dialog";
      root.innerHTML = "<div class='dialog-header'><span class='dialog-title'></span></div><div class='dialog-content'></div><div style='display:none;' class='dialog-alt-content'></div><div class='dialog-footer'></div>";
      root.header = root.querySelector(".dialog-header");
      if (options.width) root.style.width = options.width + (options.width.constructor === Number ? "px" : "");
      if (options.height) root.style.height = options.height + (options.height.constructor === Number ? "px" : "");
      if (options.closable) {
        var close = document.createElement("span");
        close.innerHTML = "&#10005;";
        close.classList.add("close");
        close.addEventListener("click", function () {
          root.close();
        });
        root.header.appendChild(close);
      }
      root.title_element = root.querySelector(".dialog-title");
      root.title_element.innerText = title;
      root.content = root.querySelector(".dialog-content");
      root.alt_content = root.querySelector(".dialog-alt-content");
      root.footer = root.querySelector(".dialog-footer");
      root.close = function () {
        if (root.onClose && typeof root.onClose == "function") {
          root.onClose();
        }
        if (root.parentNode) root.parentNode.removeChild(root);
        /* XXX CHECK THIS */
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
        /* XXX this was not working, was fixed with an IF, check this */
        // check: maybe need a .call(this)
      };

      // function to swap panel content
      root.toggleAltContent = function (force) {
        var vTo, vAlt;
        if (typeof force != "undefined") {
          vTo = force ? "block" : "none";
          vAlt = force ? "none" : "block";
        } else {
          vTo = root.alt_content.style.display != "block" ? "block" : "none";
          vAlt = root.alt_content.style.display != "block" ? "none" : "block";
        }
        root.alt_content.style.display = vTo;
        root.content.style.display = vAlt;
      };
      root.toggleFooterVisibility = function (force) {
        var vTo;
        if (typeof force != "undefined") {
          vTo = force ? "block" : "none";
        } else {
          vTo = root.footer.style.display != "block" ? "block" : "none";
        }
        root.footer.style.display = vTo;
      };
      root.clear = function () {
        this.content.innerHTML = "";
      };
      root.addHTML = function (code, classname, on_footer) {
        var elem = document.createElement("div");
        if (classname) elem.className = classname;
        elem.innerHTML = code;
        if (on_footer) root.footer.appendChild(elem);else root.content.appendChild(elem);
        return elem;
      };
      root.addButton = function (name, callback, options) {
        var elem = document.createElement("button");
        elem.innerText = name;
        elem.options = options;
        elem.classList.add("btn");
        elem.addEventListener("click", callback);
        root.footer.appendChild(elem);
        return elem;
      };
      root.addSeparator = function () {
        var elem = document.createElement("div");
        elem.className = "separator";
        root.content.appendChild(elem);
      };
      root.addWidget = function (type, name, value, options, callback) {
        options = options || {};
        var str_value = String(value);
        type = type.toLowerCase();
        if (type == "number") str_value = LiteGraph.formatNumber(value, 3);
        var elem = document.createElement("div");
        elem.className = "property";
        elem.innerHTML = "<span class='property_name'></span><span class='property_value'></span>";
        elem.querySelector(".property_name").innerText = options.label || name;
        var value_element = elem.querySelector(".property_value");
        value_element.innerText = str_value;
        elem.dataset["property"] = name;
        elem.dataset["type"] = options.type || type;
        elem.options = options;
        elem.value = value;
        LiteGraph.log_debug("lgraphcanvas", "createPanel", "addWidget", type, value, value_element, options);
        if (type == "code") {
          elem.addEventListener("click", function (_event) {
            root.inner_showCodePad(this.dataset["property"]);
          });
        } else if (type == "boolean") {
          elem.classList.add("boolean");
          if (value) elem.classList.add("bool-on");
          elem.addEventListener("click", function () {
            // var v = node.properties[this.dataset["property"]];
            // node.setProperty(this.dataset["property"],!v); this.innerText = v ? "on" : "off";
            var propname = this.dataset["property"];
            this.value = !this.value;
            this.classList.toggle("bool-on");
            this.querySelector(".property_value").innerText = this.value ? "on" : "off";
            innerChange(propname, this.value);
          });
        } else if (type == "string" || type == "number") {
          value_element.setAttribute("contenteditable", true);
          value_element.addEventListener("keydown", function (e) {
            if (e.code == "Enter" && (type != "string" || !e.shiftKey)) {
              // allow for multiline
              e.preventDefault();
              this.blur();
            }
          });
          value_element.addEventListener("blur", function () {
            var v = this.innerText;
            var propname = this.parentNode.dataset["property"];
            var proptype = this.parentNode.dataset["type"];
            if (proptype == "number") v = Number(v);
            innerChange(propname, v);
          });
        } else if (type == "enum" || type == "combo") {
          str_value = LGraphCanvas.getPropertyPrintableValue(value, options.values);
          value_element.innerText = str_value;
          LiteGraph.log_debug("lgraphcanvas", "createPanel", "addWidget", "ENUM COMBO", type, str_value, value_element, options);
          value_element.addEventListener("click", function (event) {
            var values = options.values || [];
            var propname = this.parentNode.dataset["property"];
            var elem_that = this;
            LiteGraph.ContextMenu(values, {
              event: event,
              className: "dark",
              callback: inner_clicked
            }, ref_window);
            function inner_clicked(v) {
              // node.setProperty(propname,v);
              // graphcanvas.dirty_canvas = true;
              elem_that.innerText = v;
              innerChange(propname, v);
              return false;
            }
          });
        }
        root.content.appendChild(elem);
        function innerChange(name, value) {
          LiteGraph.log_debug("lgraphcanvas", "createPanel", "addWidget", "innerChange", name, value, options);
          // that.dirty_canvas = true;
          if (options.callback) options.callback(name, value, options);
          if (callback) callback(name, value, options);
        }
        return elem;
      };
      if (root.onOpen && typeof root.onOpen == "function") root.onOpen();
      return root;
    }
  }, {
    key: "showShowGraphOptionsPanel",
    value: function showShowGraphOptionsPanel(refOpts, obEv) {
      var graphcanvas;
      if (this.constructor && this.constructor.name == "HTMLDivElement") {
        var _obEv$event;
        // assume coming from the menu event click
        if (!(obEv !== null && obEv !== void 0 && (_obEv$event = obEv.event) !== null && _obEv$event !== void 0 && (_obEv$event = _obEv$event.target) !== null && _obEv$event !== void 0 && _obEv$event.lgraphcanvas)) {
          LiteGraph.log_warn("lgraphcanvas", "showShowGraphOptionsPanel", "References not found to add optionPanel", refOpts, obEv); // need a ref to canvas obj
          LiteGraph.log_debug("lgraphcanvas", "showShowGraphOptionsPanel", "!obEv || !obEv.event || !obEv.event.target || !obEv.event.target.lgraphcanvas", obEv, obEv.event, obEv.event.target, obEv.event.target.lgraphcanvas);
          return;
        }
        graphcanvas = obEv.event.target.lgraphcanvas;
      } else {
        // assume called internally
        graphcanvas = this;
      }
      graphcanvas.closePanels();
      var ref_window = graphcanvas.getCanvasWindow();
      panel = graphcanvas.createPanel("Options", {
        closable: true,
        window: ref_window,
        onOpen: function onOpen() {
          graphcanvas.OPTIONPANEL_IS_OPEN = true;
        },
        onClose: function onClose() {
          graphcanvas.OPTIONPANEL_IS_OPEN = false;
          graphcanvas.options_panel = null;
        }
      });
      graphcanvas.options_panel = panel;
      panel.id = "option-panel";
      panel.classList.add("settings");
      function inner_refresh() {
        panel.content.innerHTML = ""; // clear

        var fUpdate = function fUpdate(name, value, options) {
          switch (name) {
            /* case "Render mode":
                // Case ""..
                if (options.values && options.key){
                    var kV = Object.values(options.values).indexOf(value);
                    if (kV>=0 && options.values[kV]){
                        LiteGraph.log_debug("update graph options: "+options.key+": "+kV);
                        graphcanvas[options.key] = kV;
                        //LiteGraph.log_debug(graphcanvas);
                        break;
                    }
                }
                LiteGraph.log_warn("unexpected options");
                LiteGraph.log_debug(options);
                break;*/
            default:
              LiteGraph.log_verbose("lgraphcanvas", "showShowGraphOptionsPanel", "want to update graph options: " + name + ": " + value);
              if (options && options.key) {
                name = options.key;
              }
              if (options.values) {
                value = Object.values(options.values).indexOf(value);
              }
              LiteGraph.log_verbose("lgraphcanvas", "showShowGraphOptionsPanel", "update graph option: " + name + ": " + value);
              graphcanvas[name] = value;
              break;
          }
        };

        // panel.addWidget( "string", "Graph name", "", {}, fUpdate); // implement

        var aProps = LiteGraph.availableCanvasOptions;
        aProps.sort();
        for (var pI in aProps) {
          var pX = aProps[pI];
          panel.addWidget("boolean", pX, graphcanvas[pX], {
            key: pX,
            on: "on",
            off: "off"
          }, fUpdate);
        }
        panel.addWidget("combo", "Render mode", LiteGraph.LINK_RENDER_MODES[graphcanvas.links_render_mode], {
          key: "links_render_mode",
          values: LiteGraph.LINK_RENDER_MODES
        }, fUpdate);
        panel.addSeparator();
        panel.footer.innerHTML = ""; // clear
      }
      inner_refresh();
      graphcanvas.canvas.parentNode.appendChild(panel);
    }
  }, {
    key: "showShowNodePanel",
    value: function showShowNodePanel(node) {
      this.SELECTED_NODE = node;
      this.closePanels();
      var ref_window = this.getCanvasWindow();
      var graphcanvas = this;
      var panel = this.createPanel(node.title || "", {
        closable: true,
        window: ref_window,
        onOpen: function onOpen() {
          graphcanvas.NODEPANEL_IS_OPEN = true;
        },
        onClose: function onClose() {
          graphcanvas.NODEPANEL_IS_OPEN = false;
          graphcanvas.node_panel = null;
        }
      });
      graphcanvas.node_panel = panel;
      panel.id = "node-panel";
      panel.node = node;
      panel.classList.add("settings");
      function inner_refresh() {
        panel.content.innerHTML = ""; // clear
        panel.addHTML("<span class='node_type'>" + node.type + "</span>" + "<span class='node_desc'>" + (node.constructor.desc || "") + "</span>" + "<span class='separator'></span>");
        panel.addHTML("<h3>Properties</h3>");
        var fUpdate = function fUpdate(name, value) {
          graphcanvas.graph.beforeChange(node);
          switch (name) {
            case "Title":
              node.title = value;
              break;
            case "Mode":
              var kV = Object.values(LiteGraph.NODE_MODES).indexOf(value);
              if (kV >= 0 && LiteGraph.NODE_MODES[kV]) {
                node.changeMode(kV);
              } else {
                LiteGraph.log_warn("lgraphcanvas", "showShowNodePanel", "unexpected mode", value, kV);
              }
              break;
            case "Color":
              if (LGraphCanvas.node_colors[value]) {
                node.color = LGraphCanvas.node_colors[value].color;
                node.bgcolor = LGraphCanvas.node_colors[value].bgcolor;
              } else {
                LiteGraph.log_warn("lgraphcanvas", "showShowNodePanel", "unexpected color", value);
              }
              break;
            default:
              node.setProperty(name, value);
              break;
          }
          graphcanvas.graph.afterChange();
          graphcanvas.dirty_canvas = true;
        };
        panel.addWidget("string", "Title", node.title, {}, fUpdate);
        panel.addWidget("combo", "Mode", LiteGraph.NODE_MODES[node.mode], {
          values: LiteGraph.NODE_MODES
        }, fUpdate);
        var nodeCol = "";
        if (node.color !== undefined) {
          nodeCol = Object.keys(LGraphCanvas.node_colors).filter(function (nK) {
            return LGraphCanvas.node_colors[nK].color == node.color;
          });
        }
        panel.addWidget("combo", "Color", nodeCol, {
          values: Object.keys(LGraphCanvas.node_colors)
        }, fUpdate);
        for (var pName in node.properties) {
          var value = node.properties[pName];
          var info = node.getPropertyInfo(pName);
          var type = info && info !== null ? info.type : "string";

          // in case the user wants control over the side panel widget
          if (node.onAddPropertyToPanel && node.onAddPropertyToPanel(pName, panel, value, info, fUpdate)) {
            continue;
          }
          panel.addWidget(info.widget || type, pName, value, info, fUpdate);
        }
        panel.addSeparator();
        if (node.onShowCustomPanelInfo) node.onShowCustomPanelInfo(panel);
        panel.footer.innerHTML = ""; // clear
        panel.addButton("Delete", function () {
          if (node.block_delete) return;
          node.graph.remove(node);
          panel.close();
        }).classList.add("delete");
      }
      panel.inner_showCodePad = function (propname) {
        panel.classList.remove("settings");
        panel.classList.add("centered");

        /* TODO restore, export to extensions
        if(window.CodeFlask) //disabled for now
        {
            panel.content.innerHTML = "<div class='code'></div>";
            var flask = new CodeFlask( "div.code", { language: 'js' });
            flask.updateCode(node.properties[propname]);
            flask.onUpdate( function(code) {
                node.setProperty(propname, code);
            });
        }
        else
        {*/
        panel.alt_content.innerHTML = "<textarea class='code'></textarea>";
        var textarea = panel.alt_content.querySelector("textarea");
        var fDoneWith = function fDoneWith() {
          panel.toggleAltContent(false); // if(node_prop_div) node_prop_div.style.display = "block"; // panel.close();
          panel.toggleFooterVisibility(true);
          textarea.parentNode.removeChild(textarea);
          panel.classList.add("settings");
          panel.classList.remove("centered");
          inner_refresh();
        };
        textarea.value = node.properties[propname];
        textarea.addEventListener("keydown", function (e) {
          if (e.code == "Enter" && e.ctrlKey) {
            node.setProperty(propname, textarea.value);
            fDoneWith();
          }
        });
        panel.toggleAltContent(true);
        panel.toggleFooterVisibility(false);
        textarea.style.height = "calc(100% - 40px)";
        /* }*/
        var assign = panel.addButton("Assign", function () {
          node.setProperty(propname, textarea.value);
          fDoneWith();
        });
        panel.alt_content.appendChild(assign); // panel.content.appendChild(assign);
        var button = panel.addButton("Close", fDoneWith);
        button.style["float"] = "right";
        panel.alt_content.appendChild(button); // panel.content.appendChild(button);
      };
      inner_refresh();
      this.canvas.parentNode.appendChild(panel);
    }
  }, {
    key: "showSubgraphPropertiesDialog",
    value: function showSubgraphPropertiesDialog(node) {
      LiteGraph.log_debug("lgraphcanvas", "showSubgraphPropertiesDialog", "showing subgraph properties dialog");
      var old_panel = this.canvas.parentNode.querySelector(".subgraph_dialog");
      if (old_panel) old_panel.close();
      var panel = this.createPanel("Subgraph Inputs", {
        closable: true,
        width: 500
      });
      panel.node = node;
      panel.classList.add("subgraph_dialog");
      function inner_refresh() {
        panel.clear();

        // show currents
        if (node.inputs) for (var i = 0; i < node.inputs.length; ++i) {
          var input = node.inputs[i];
          if (input.not_subgraph_input) continue;
          var html = "<button>&#10005;</button> <span class='bullet_icon'></span><span class='name'></span><span class='type'></span>";
          var elem = panel.addHTML(html, "subgraph_property");
          elem.dataset["name"] = input.name;
          elem.dataset["slot"] = i;
          elem.querySelector(".name").innerText = input.name;
          elem.querySelector(".type").innerText = input.type;
          elem.querySelector("button").addEventListener("click", function (_event) {
            node.removeInput(Number(this.parentNode.dataset["slot"]));
            inner_refresh();
          });
        }
      }

      // add extra
      var html = " + <span class='label'>Name</span><input class='name'/><span class='label'>Type</span><input class='type'></input><button>+</button>";
      var elem = panel.addHTML(html, "subgraph_property extra", true);
      elem.querySelector("button").addEventListener("click", function (_event) {
        var elem = this.parentNode;
        var name = elem.querySelector(".name").value;
        var type = elem.querySelector(".type").value;
        if (!name || node.findInputSlot(name) != -1) return;
        if (["event", "action"].indexOf(type) > -1) {
          type = LiteGraph.EVENT;
        }
        node.addInput(name, type);
        elem.querySelector(".name").value = "";
        elem.querySelector(".type").value = "";
        inner_refresh();
      });
      inner_refresh();
      this.canvas.parentNode.appendChild(panel);
      return panel;
    }
  }, {
    key: "showSubgraphPropertiesDialogRight",
    value: function showSubgraphPropertiesDialogRight(node) {
      LiteGraph.log_verbose("lgraphcanvas", "showSubgraphPropertiesDialogRight", "showing subgraph properties dialog RIGHT");

      // old_panel if old_panel is exist close it
      var old_panel = this.canvas.parentNode.querySelector(".subgraph_dialog");
      if (old_panel) old_panel.close();
      // new panel
      var panel = this.createPanel("Subgraph Outputs", {
        closable: true,
        width: 500
      });
      panel.node = node;
      panel.classList.add("subgraph_dialog");
      function inner_refresh() {
        panel.clear();
        // show currents
        if (node.outputs) for (var i = 0; i < node.outputs.length; ++i) {
          var input = node.outputs[i];
          if (input.not_subgraph_output) continue;
          var html = "<button>&#10005;</button> <span class='bullet_icon'></span><span class='name'></span><span class='type'></span>";
          var elem = panel.addHTML(html, "subgraph_property");
          elem.dataset["name"] = input.name;
          elem.dataset["slot"] = i;
          elem.querySelector(".name").innerText = input.name;
          elem.querySelector(".type").innerText = input.type;
          elem.querySelector("button").addEventListener("click", function (_event) {
            node.removeOutput(Number(this.parentNode.dataset["slot"]));
            inner_refresh();
          });
        }
      }

      // add extra
      var html = " + <span class='label'>Name</span><input class='name'/><span class='label'>Type</span><input class='type'></input><button>+</button>";
      var elem = panel.addHTML(html, "subgraph_property extra", true);
      elem.querySelector(".name").addEventListener("keydown", function (_event) {
        if (_event.keyCode == 13) {
          addOutput.apply(this);
        }
      });
      elem.querySelector("button").addEventListener("click", function (_event) {
        addOutput.apply(this);
      });
      function addOutput() {
        var elem = this.parentNode;
        var name = elem.querySelector(".name").value;
        var type = elem.querySelector(".type").value;
        if (!name || node.findOutputSlot(name) != -1) return;
        if (["event", "action"].indexOf(type) > -1) {
          type = LiteGraph.EVENT;
        }
        node.addOutput(name, type);
        elem.querySelector(".name").value = "";
        elem.querySelector(".type").value = "";
        inner_refresh();
      }
      inner_refresh();
      this.canvas.parentNode.appendChild(panel);
      return panel;
    }

    /**
     * will close node-panel and option-panel
     * @returns void 
     */
  }, {
    key: "closePanels",
    value: function closePanels() {
      var panel = document.querySelector("#node-panel");
      if (panel) panel.close(); // ? panel.close.call(panel);
      panel = document.querySelector("#option-panel");
      if (panel) panel.close(); // ? panel.close.call(panel);
    }

    /**
     * will close .litegraph.dialog
     * @returns void
     */
  }, {
    key: "checkPanels",
    value: function checkPanels() {
      if (!this.canvas) return;
      var panels = this.canvas.parentNode.querySelectorAll(".litegraph.dialog");
      for (var i = 0; i < panels.length; ++i) {
        var panel = panels[i];
        if (!panel.node) continue;
        if (!panel.node.graph || panel.graph != this.graph) panel.close();
      }
    }
  }, {
    key: "getCanvasMenuOptions",
    value: function getCanvasMenuOptions() {
      var options = null;
      var that = this;
      var r = this.processCallbackHandlers("getMenuOptions", {
        def_cb: this.getMenuOptions
      });
      if (r !== null && (r === true || _typeof(r) == "object" && r.return_value === true)) ; else {
        options = [{
          content: "Add Node",
          has_submenu: true,
          callback: LGraphCanvas.onMenuAdd
        }, {
          content: "Search",
          has_submenu: false,
          callback: that.showSearchBox
        }, {
          content: "Add Group",
          callback: LGraphCanvas.onGroupAdd
        }
        // { content: "Arrange", callback: that.graph.arrange },
        // {content:"Collapse All", callback: LGraphCanvas.onMenuCollapseAll }
        ];
        if (Object.keys(this.selected_nodes).length > 1) {
          options.push({
            content: "Align",
            has_submenu: true,
            callback: LGraphCanvas.onGroupAlign
          });
        }
        if (this._graph_stack && this._graph_stack.length > 0) {
          options.push(null, {
            content: "Close subgraph",
            callback: this.closeSubgraph.bind(this)
          });
        }
      }
      r = this.processCallbackHandlers("getExtraMenuOptions", {
        def_cb: this.getExtraMenuOptions
      }, this, options);
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          options = options.concat(r.return_value);
        }
      }
      return options;
    }

    // called by processContextMenu to extract the menu list
  }, {
    key: "getNodeMenuOptions",
    value: function getNodeMenuOptions(node) {
      var options = null;
      var r = node.processCallbackHandlers("getMenuOptions", {
        def_cb: node.getMenuOptions
      }, this);
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          options = r.return_value;
        }
      }
      if (options === null) {
        options = [{
          content: "Inputs",
          has_submenu: true,
          // disabled: true, // disable Input and Output slots ? would need better check :: TODO use showMenuNodeOptional ins
          callback: LGraphCanvas.showMenuNodeOptionalInputs
        }, {
          content: "Outputs",
          has_submenu: true,
          // disabled: true, // disable Input and Output slots ? would need better check :: TODO use showMenuNodeOptional ins
          callback: LGraphCanvas.showMenuNodeOptionalOutputs
        }, null, {
          content: "Properties",
          has_submenu: true,
          callback: LGraphCanvas.onShowMenuNodeProperties
        }, null, {
          content: "Title",
          callback: LGraphCanvas.onShowNodeInfoEditor
        }, {
          content: "Mode",
          has_submenu: true,
          callback: LGraphCanvas.onMenuNodeMode
        }];
        if (node.resizable !== false) {
          options.push({
            content: "Resize",
            callback: LGraphCanvas.onMenuResizeNode
          });
        }
        options.push({
          content: "Collapse",
          callback: LGraphCanvas.onMenuNodeCollapse
        }, {
          content: "Pin",
          callback: LGraphCanvas.onMenuNodePin
        }, {
          content: "Colors",
          has_submenu: true,
          callback: LGraphCanvas.onMenuNodeColors
        }, {
          content: "Shapes",
          has_submenu: true,
          callback: LGraphCanvas.onMenuNodeShapes
        }, null);
      }

      // disable Input and Output slots ? would need better check :: TODO use showMenuNodeOptional instead

      // r = node.processCallbackHandlers("onGetInputs",{
      //     def_cb: node.onGetInputs
      // });
      // if(r!==null && (typeof(r)=="object")){
      //     if(typeof(r.return_value)=="object"){
      //         if(typeof(r.return_value.length)!=="undefined" && r.return_value.length){
      //             options[0].disabled = false;
      //         }
      //     }else if(typeof(r.length)!=="undefined" && r.length){
      //         options[0].disabled = false;
      //     }
      // }

      // r = node.processCallbackHandlers("onGetOutputs",{
      //     def_cb: node.onGetOutputs
      // });
      // if(r!==null && (typeof(r)=="object")){
      //     if(typeof(r.return_value)=="object"){
      //         if(typeof(r.return_value.length)!=="undefined" && r.return_value.length){
      //             options[1].disabled = false;
      //         }
      //     }else if(typeof(r.length)!=="undefined" && r.length){
      //         options[0].disabled = false;
      //     }
      // }

      if (LiteGraph.do_add_triggers_slots) options[1].disabled = false;
      r = node.processCallbackHandlers("getExtraMenuOptions", {
        def_cb: node.getExtraMenuOptions
      }, this, options);
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          if (typeof r.return_value.length !== "undefined" && r.return_value.length) {
            extra.push(null);
            options = extra.concat(r.return_value);
          }
        }
      }
      if (node.clonable !== false) {
        options.push({
          content: "Clone",
          callback: LGraphCanvas.onMenuNodeClone
        });
      }
      /*
      if(0) // @TODO: implement collpase to SubGraph
      options.push({
          content: "To Subgraph",
          callback: LGraphCanvas.onMenuNodeToSubgraph
      });
      */
      if (Object.keys(this.selected_nodes).length > 1) {
        options.push({
          content: "Align Selected To",
          has_submenu: true,
          callback: LGraphCanvas.onNodeAlign
        });
      }
      options.push(null, {
        content: "Remove",
        disabled: !(node.removable !== false && !node.block_delete),
        callback: LGraphCanvas.onMenuNodeRemove
      });
      if (node.graph) {
        node.graph.processCallbackHandlers("onGetNodeMenuOptions", {
          def_cb: node.graph.onGetNodeMenuOptions
        }, options, node);
      }
      return options;
    }
  }, {
    key: "getGroupMenuOptions",
    value: function getGroupMenuOptions() {
      var o = [{
        content: "Title",
        callback: LGraphCanvas.onShowNodeInfoEditor
      }, {
        content: "Color",
        has_submenu: true,
        callback: LGraphCanvas.onMenuNodeColors
      }, {
        content: "Font size",
        property: "font_size",
        type: "Number",
        callback: LGraphCanvas.onShowNodeInfoEditor
      }, null, {
        content: "Remove",
        callback: LGraphCanvas.onMenuNodeRemove
      }];
      return o;
    }
  }, {
    key: "processContextMenu",
    value: function processContextMenu(node, event) {
      var that = this;
      var canvas = LGraphCanvas.active_canvas;
      var ref_window = canvas.getCanvasWindow();
      var menu_info = null;
      var options = {
        event: event,
        callback: inner_option_clicked,
        extra: node
      };
      if (node) options.title = node.type;

      // check if mouse is in input
      var slot = null;
      if (node) {
        slot = node.getSlotInPosition(event.canvasX, event.canvasY);
        LGraphCanvas.active_node = node;
      }
      if (slot) {
        // on slot
        menu_info = [];
        var r = node.processCallbackHandlers("getSlotMenuOptions", {
          def_cb: node.getSlotMenuOptions
        }, slot);
        if (r !== null && _typeof(r) == "object" && _typeof(r.return_value) == "object") {
          menu_info = r.return_value;
        } else {
          var _slot4, _slot$input;
          if ((_slot4 = slot) !== null && _slot4 !== void 0 && (_slot4 = _slot4.output) !== null && _slot4 !== void 0 && (_slot4 = _slot4.links) !== null && _slot4 !== void 0 && _slot4.length || (_slot$input = slot.input) !== null && _slot$input !== void 0 && _slot$input.link) {
            menu_info.push({
              content: "Disconnect Links",
              slot: slot
            });
          }
          var _slot = slot.input || slot.output;
          if (_slot.removable && LiteGraph.canRemoveSlots) {
            menu_info.push(_slot.locked ? "Cannot remove" : {
              content: "Remove Slot",
              slot: slot
            });
          }
          if (!_slot.nameLocked && LiteGraph.canRenameSlots) {
            menu_info.push({
              content: "Rename Slot",
              slot: slot
            });
          }
        }
        var slotOb = slot.input || slot.output;
        options.title = slotOb.type || "*";
        if (slotOb.type == LiteGraph.ACTION) {
          options.title = "Action";
        } else if (slotOb.type == LiteGraph.EVENT) {
          options.title = "Event";
        }
      } else {
        if (node) {
          // on node
          menu_info = this.getNodeMenuOptions(node);
        } else {
          menu_info = this.getCanvasMenuOptions();
          var group = this.graph.getGroupOnPos(event.canvasX, event.canvasY);
          options.filter_enabled = false;
          if (group) {
            // on group
            menu_info.push(null, {
              content: "Edit Group",
              has_submenu: true,
              submenu: {
                title: "Group",
                extra: group,
                options: this.getGroupMenuOptions(group)
              }
            });
            menu_info.push(null, {
              content: "Select nodes",
              canvas: this,
              group: group,
              callback: function callback(this_mi, options, e, menu) {
                console.warn(this_mi);
                this_mi.canvas.selectNodes(this_mi.group._nodes);
              }
            });
          }
        }
      }

      // show menu
      if (!menu_info) {
        return;
      }
      LiteGraph.ContextMenu(menu_info, options, ref_window);
      function inner_option_clicked(v, options) {
        if (!v) {
          return;
        }
        var info;
        if (v.content == "Remove Slot") {
          info = v.slot;
          node.graph.beforeChange();
          if (info.input) {
            node.removeInput(info.slot);
          } else if (info.output) {
            node.removeOutput(info.slot);
          }
          node.graph.afterChange();
          return;
        } else if (v.content == "Disconnect Links") {
          info = v.slot;
          node.graph.beforeChange();
          if (info.output) {
            node.disconnectOutput(info.slot);
          } else if (info.input) {
            node.disconnectInput(info.slot);
          }
          node.graph.afterChange();
          return;
        } else if (v.content == "Rename Slot") {
          info = v.slot;
          var slot_info = info.input ? node.getInputInfo(info.slot) : node.getOutputInfo(info.slot);
          var dialog = that.createDialog("<span class='name'>Name</span><input autofocus type='text'/><button>OK</button>", options);
          var input = dialog.querySelector("input");
          if (input && slot_info) {
            input.value = slot_info.label || "";
          }
          var inner = function inner() {
            node.graph.beforeChange();
            if (input.value) {
              if (slot_info) {
                slot_info.label = input.value;
              }
              that.setDirty(true);
            }
            dialog.close();
            node.graph.afterChange();
          };
          dialog.querySelector("button").addEventListener("click", inner);
          input.addEventListener("keydown", function (e) {
            dialog.is_modified = true;
            if (e.keyCode == 27) {
              // ESC
              dialog.close();
            } else if (e.keyCode == 13) {
              inner(); // save
            } else if (e.keyCode != 13 && e.target.localName != "textarea") {
              return;
            }
            e.preventDefault();
            e.stopPropagation();
          });
          input.focus();
        }
        // if(v.callback)
        //	return v.callback.call(that, node, options, e, menu, that, event );
      }
    }
  }, {
    key: "lowQualityRenderingRequired",
    value:
    /**
     * returns ture if low qualty rendering requered at requested scale
     * */
    function lowQualityRenderingRequired(activation_scale) {
      if (this.ds.scale < activation_scale) {
        return this.low_quality_rendering_counter > this.low_quality_rendering_threshold;
      }
      return false;
    }

    /**
     * Changes the background color of the canvas.
     *
     * @method updateBackground
     * @param {image} String
     * @param {clearBackgroundColor} String
     * @
     */
  }, {
    key: "updateBackground",
    value: function updateBackground(image, clearBackgroundColor) {
      var _this8 = this;
      this._bg_img = new Image();
      this._bg_img.name = image;
      this._bg_img.src = image;
      this._bg_img.onload = function () {
        _this8.draw(true, true);
      };
      this.background_image = image;
      this.clear_background = true;
      this.clear_background_color = clearBackgroundColor;
      this._pattern = null;
    }
  }], [{
    key: "getFileExtension",
    value: function getFileExtension(url) {
      // const urlObj = new URL(url);
      // const path = urlObj.pathname;
      // const lastDotIndex = path.lastIndexOf(".");
      // if (lastDotIndex === -1) return "";
      // return path.slice(lastDotIndex + 1).toLowerCase();
      url = url ? url + "" : "";
      return url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
    }
  }, {
    key: "onGroupAdd",
    value: function onGroupAdd(info, entry, mouse_event) {
      var canvas = LGraphCanvas.active_canvas;
      var group = new LiteGraph.LGraphGroup();
      if (canvas.options.groups_add_around_selected && Object.keys(canvas.selected_nodes).length) {
        var bounds = canvas.getBoundaryForSelection();
        if (bounds) {
          var spacing = canvas.options.groups_add_default_spacing;
          var titleSpace = canvas.options.groups_title_font_size * 1.5;
          group.pos = [bounds[0] - spacing, bounds[1] - titleSpace - spacing];
          group.size = [bounds[2] + spacing * 2, bounds[3] + titleSpace + spacing * 2];
          LiteGraph.log_debug("lgraphcanvas", "onGroupAdd", "groups_add_around_selected", bounds, group);
        } else {
          group.pos = canvas.convertEventToCanvasOffset(mouse_event); // as default
        }
      } else {
        group.pos = canvas.convertEventToCanvasOffset(mouse_event);
      }
      canvas.graph.add(group);
    }

    /**
     * Determines the furthest nodes in each direction
     * @param nodes {LGraphNode[]} the nodes to from which boundary nodes will be extracted
     * @return {{left: LGraphNode, top: LGraphNode, right: LGraphNode, bottom: LGraphNode}}
     */
  }, {
    key: "getBoundaryNodes",
    value: function getBoundaryNodes(nodes) {
      var top = null;
      var right = null;
      var bottom = null;
      var left = null;
      for (var nID in nodes) {
        var node = nodes[nID];
        var _node$pos = _slicedToArray(node.pos, 2),
          x = _node$pos[0],
          y = _node$pos[1];
        var _node$size = _slicedToArray(node.size, 2),
          width = _node$size[0],
          height = _node$size[1];
        if (top === null || y < top.pos[1]) {
          top = node;
        }
        if (right === null || x + width > right.pos[0] + right.size[0]) {
          right = node;
        }
        if (bottom === null || y + height > bottom.pos[1] + bottom.size[1]) {
          bottom = node;
        }
        if (left === null || x < left.pos[0]) {
          left = node;
        }
      }
      return {
        "top": top,
        "right": right,
        "bottom": bottom,
        "left": left
      };
    }
  }, {
    key: "alignNodes",
    value: function alignNodes(nodes, direction, align_to) {
      if (!nodes) {
        return;
      }
      var canvas = LGraphCanvas.active_canvas;
      var boundaryNodes = [];
      if (align_to === undefined) {
        boundaryNodes = LGraphCanvas.getBoundaryNodes(nodes);
      } else {
        boundaryNodes = {
          "top": align_to,
          "right": align_to,
          "bottom": align_to,
          "left": align_to
        };
      }
      for (var _i26 = 0, _Object$entries2 = Object.entries(canvas.selected_nodes); _i26 < _Object$entries2.length; _i26++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i26], 2);
          _Object$entries2$_i[0];
          var node = _Object$entries2$_i[1];
        switch (direction) {
          case "right":
            node.pos[0] = boundaryNodes["right"].pos[0] + boundaryNodes["right"].size[0] - node.size[0];
            break;
          case "left":
            node.pos[0] = boundaryNodes["left"].pos[0];
            break;
          case "top":
            node.pos[1] = boundaryNodes["top"].pos[1];
            break;
          case "bottom":
            node.pos[1] = boundaryNodes["bottom"].pos[1] + boundaryNodes["bottom"].size[1] - node.size[1];
            break;
        }
      }
      canvas.dirty_canvas = true;
      canvas.dirty_bgcanvas = true;
    }
  }, {
    key: "onNodeAlign",
    value: function onNodeAlign(value, options, event, prev_menu, node) {
      LiteGraph.ContextMenu(["Top", "Bottom", "Left", "Right"], {
        event: event,
        callback: inner_clicked,
        parentMenu: prev_menu
      });
      function inner_clicked(value) {
        LGraphCanvas.alignNodes(LGraphCanvas.active_canvas.selected_nodes, value.toLowerCase(), node);
      }
    }
  }, {
    key: "onGroupAlign",
    value: function onGroupAlign(value, options, event, prev_menu) {
      LiteGraph.ContextMenu(["Top", "Bottom", "Left", "Right"], {
        event: event,
        callback: inner_clicked,
        parentMenu: prev_menu
      });
      function inner_clicked(value) {
        LGraphCanvas.alignNodes(LGraphCanvas.active_canvas.selected_nodes, value.toLowerCase());
      }
    }
  }, {
    key: "onMenuAdd",
    value: function onMenuAdd(node, options, e, prev_menu, _callback) {
      var canvas = LGraphCanvas.active_canvas;
      var ref_window = canvas.getCanvasWindow();
      var graph = canvas.graph;
      if (!graph) return;
      function inner_onMenuAdded(base_category, prev_menu) {
        var categories = LiteGraph.getNodeTypesCategories(canvas.filter || graph.filter).filter(function (category) {
          return category.startsWith(base_category);
        });
        var entries = [];
        categories.map(function (category) {
          if (!category) return;
          var base_category_regex = new RegExp('^(' + base_category + ')');
          var category_name = category.replace(base_category_regex, "").split('/')[0];
          var category_path = base_category === '' ? category_name + '/' : base_category + category_name + '/';
          var name = category_name;
          if (name.indexOf("::") != -1)
            // in case it has a namespace like "shader::math/rand" it hides the namespace
            name = name.split("::")[1];
          var index = entries.findIndex(function (entry) {
            return entry.value === category_path;
          });
          if (index === -1) {
            entries.push({
              value: category_path,
              content: name,
              has_submenu: true,
              callback: function callback(value, event, mouseEvent, contextMenu) {
                LiteGraph.log_debug.apply(LiteGraph, ["onMenuAdd", "inner_onMenuAdded", "categories callback"].concat(Array.prototype.slice.call(arguments)));
                inner_onMenuAdded(value.value, contextMenu);
              }
            });
          }
        });
        var nodes = LiteGraph.getNodeTypesInCategory(base_category.slice(0, -1), canvas.filter || graph.filter);
        nodes.map(function (node) {
          if (node.skip_list) return;
          var entry = {
            value: node.type,
            content: node.title,
            has_submenu: false,
            callback: function callback(value, event, mouseEvent, contextMenu) {
              var first_event = contextMenu.getFirstEvent();
              canvas.graph.beforeChange();
              var node = LiteGraph.createNode(value.value);
              LiteGraph.log_debug.apply(LiteGraph, ["onMenuAdd", "inner_onMenuAdded", "node entry callback", first_event].concat(Array.prototype.slice.call(arguments)));
              if (node) {
                node.pos = canvas.convertEventToCanvasOffset(first_event);
                canvas.graph.add(node);
              }
              if (_callback) {
                _callback(node);
              }
              canvas.graph.afterChange();
            }
          };
          entries.push(entry);
        });
        var e_check = e ? e : options.event;
        // LiteGraph.log_debug("lgraphcanvas", "onMenuAdd", "inner_onMenuAdded", "opening ContextMenu", e, options);
        LiteGraph.log_debug("lgraphcanvas", "onMenuAdd", "inner_onMenuAdded", "opening ContextMenu", entries, {
          event: e_check,
          parentMenu: prev_menu
        }, ref_window);
        LiteGraph.ContextMenu(entries, {
          event: e_check,
          parentMenu: prev_menu
        }, ref_window);
      }
      inner_onMenuAdded('', prev_menu);
      return false;
    }
  }, {
    key: "onMenuCollapseAll",
    value: function onMenuCollapseAll() {}
  }, {
    key: "onMenuNodeEdit",
    value: function onMenuNodeEdit() {}
  }, {
    key: "showMenuNodeOptionalInputs",
    value: function showMenuNodeOptionalInputs(v, options, e, prev_menu, node) {
      if (!node) {
        return;
      }
      var that = this;
      var r = null;
      var canvas = LGraphCanvas.active_canvas;
      var ref_window = canvas.getCanvasWindow();
      options = node.optional_inputs;
      r = node.processCallbackHandlers("onGetInputs", {
        def_cb: node.onGetInputs
      });
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          options = r.return_value;
        } else if (typeof r.length !== "undefined") {
          options = r;
        }
      }
      var entries = [];
      if (options) {
        for (var i = 0; i < options.length; i++) {
          var entry = options[i];
          if (!entry) {
            entries.push(null);
            continue;
          }
          var label = entry[0];
          if (!entry[2]) entry[2] = {};
          if (entry[2].label) {
            label = entry[2].label;
          }
          entry[2].removable = true;
          entry[2].optional = true;
          var data = {
            content: label,
            value: entry
          };
          if (entry[1] == LiteGraph.ACTION) {
            data.className = "event";
          }
          entries.push(data);
        }
      }

      // add callback for modifing the menu elements onMenuNodeInputs
      r = node.processCallbackHandlers("onMenuNodeInputs", {
        def_cb: node.onMenuNodeInputs
      }, entries);
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          entries = r.return_value;
        }
      }
      if (LiteGraph.do_add_triggers_slots) {
        // canvas.allow_addOutSlot_onExecuted
        if (node.findInputSlot("onTrigger") == -1) {
          entries.push({
            content: "On Trigger",
            value: ["onTrigger", LiteGraph.EVENT, {
              nameLocked: true,
              removable: true,
              optional: true
            }],
            className: "event"
          }); // , opts: {}
        }
      }
      if (!entries.length) {
        LiteGraph.log_debug("lgraphcanvas", "showMenuNodeOptionalInputs", "no input entries");
        return;
      }
      LiteGraph.ContextMenu(entries, {
        event: e,
        callback: inner_clicked,
        parentMenu: prev_menu,
        node: node
      }, ref_window);
      function inner_clicked(v, e, prev) {
        if (!node) {
          return;
        }
        if (v.callback) {
          v.callback.call(that, node, v, e, prev);
        }
        if (v.value) {
          node.graph.beforeChange();
          var slotOpts = {}; // TODO CHECK THIS :: can be removed: removabled:true? .. optional: true?
          if (v.value[2]) slotOpts = Object.assign(slotOpts, v.value[2]);
          node.addInput(v.value[0], v.value[1], slotOpts);
          // a callback to the node when adding a slot
          node.processCallbackHandlers("onNodeInputAdd", {
            def_cb: node.onNodeInputAdd
          }, v.value);
          node.setDirtyCanvas(true, true);
          node.graph.afterChange();
        }
      }
      return false;
    }
  }, {
    key: "showMenuNodeOptionalOutputs",
    value: function showMenuNodeOptionalOutputs(v, options, e, prev_menu, node) {
      if (!node) {
        return;
      }
      var that = this;
      var canvas = LGraphCanvas.active_canvas;
      var ref_window = canvas.getCanvasWindow();
      options = node.optional_outputs;
      var r = node.processCallbackHandlers("onGetOutputs", {
        def_cb: node.onGetOutputs
      });
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          options = r.return_value;
        } else if (typeof r.length !== "undefined") {
          options = r;
        }
      }
      var entries = [];
      if (options) {
        for (var i = 0; i < options.length; i++) {
          var entry = options[i];
          if (!entry) {
            // separator?
            entries.push(null);
            continue;
          }
          if (node.flags && node.flags.skip_repeated_outputs && node.findOutputSlot(entry[0]) != -1) {
            continue;
          } // skip the ones already on
          var label = entry[0];
          if (!entry[2]) entry[2] = {};
          if (entry[2].label) {
            label = entry[2].label;
          }
          entry[2].removable = true;
          entry[2].optional = true;
          var data = {
            content: label,
            value: entry
          };
          if (entry[1] == LiteGraph.EVENT) {
            data.className = "event";
          }
          entries.push(data);
        }
      }

      // add callback for modifing the menu elements onMenuNodeOutputs
      r = node.processCallbackHandlers("onMenuNodeOutputs", {
        def_cb: node.onMenuNodeOutputs
      }, entries);
      if (r !== null && _typeof(r) == "object") {
        if (_typeof(r.return_value) == "object") {
          entries = r.return_value;
        }
      }
      if (LiteGraph.do_add_triggers_slots) {
        // canvas.allow_addOutSlot_onExecuted
        if (node.findOutputSlot("onExecuted") == -1) {
          entries.push({
            content: "On Executed",
            value: ["onExecuted", LiteGraph.EVENT, {
              nameLocked: true,
              removable: true,
              optional: true
            }],
            className: "event"
          });
        }
      }
      if (!entries.length) {
        return;
      }
      LiteGraph.ContextMenu(entries, {
        event: e,
        callback: inner_clicked,
        parentMenu: prev_menu,
        node: node
      }, ref_window);
      function inner_clicked(v, e, prev) {
        if (!node) {
          return;
        }
        if (v.callback) {
          v.callback.call(that, node, v, e, prev);
        }
        if (!v.value) {
          return;
        }
        var value = v.value[1];
        if (value && (value.constructor === Object || value.constructor === Array)) {
          // submenu why?
          var entries = [];
          for (var _i27 in value) {
            entries.push({
              content: _i27,
              value: value[_i27]
            });
          }
          LiteGraph.ContextMenu(entries, {
            event: e,
            callback: inner_clicked,
            parentMenu: prev_menu,
            node: node
          });
          return false;
        } else {
          node.graph.beforeChange();
          var slotOpts = {}; // TODO CHECK THIS :: can be removed: removabled:true? .. optional: true?
          if (v.value[2]) slotOpts = Object.assign(slotOpts, v.value[2]);
          // if(v.opts) slotOpts = Object.assign(slotOpts, v.opts);

          node.addOutput(v.value[0], v.value[1], slotOpts);
          // a callback to the node when adding a slot
          node.processCallbackHandlers("onNodeOutputAdd", {
            def_cb: node.onNodeOutputAdd
          }, v.value);
          node.setDirtyCanvas(true, true);
          node.graph.afterChange();
        }
      }
      return false;
    }
  }, {
    key: "onShowMenuNodeProperties",
    value: function onShowMenuNodeProperties(element, options, e, prev_menu, node) {
      if (!node || !node.properties) {
        return;
      }
      var canvas = LGraphCanvas.active_canvas;
      var ref_window = canvas.getCanvasWindow();
      var entries = [];
      var _loop = function _loop() {
        var value = node.properties[i] !== undefined ? node.properties[i] : " ";
        if (_typeof(value) == "object") value = JSON.stringify(value);
        var info = node.getPropertyInfo(i);
        var info_type = info && info !== null ? info.type : "string";
        var readonly = info && info !== null ? info.readonly ? true : false : false;
        var prevent_input_bind = info && info !== null ? info.prevent_input_bind ? true : false : false;
        var prevent_output_bind = info && info !== null ? info.prevent_output_bind ? true : false : false;
        var propName = info && info !== null && info.label ? info.label : i;

        // parse combo
        if (info_type == "enum" || info_type == "combo") {
          value = LGraphCanvas.getPropertyPrintableValue(value, info.values);
        }

        // value could contain invalid html characters, clean that
        value = LGraphCanvas.decodeHTML(value);
        var htmlEntry = "<span class='property_name'>" + propName + "</span>" + "<span class='property_value'>" + value + "</span>";
        var callbacks_on_element_created = []; // can pass in element construction function

        // allow property binding
        if (!prevent_input_bind && !readonly && LiteGraph.properties_allow_input_binding) {
          var relSlotOb = node.findInputSlot(propName, true);
          var hasSlotByName = relSlotOb !== -1;
          var slotBinded = hasSlotByName ? relSlotOb.param_bind : false;
          htmlEntry += "<span class='property_input_bind'>" + (slotBinded
          // input exists and is binded
          ? "<span class='property_input_binded'>linked</span>"
          // input is not binded or does not exist
          : hasSlotByName ? "<span class='property_input_exist'>" + "<input type='button' class='btn_bind_in btn_bind_property_to_input' value='link input' />" + "</span>" : "<span class=''>" + "<input type='button' class='btn_bind_in btn_bind_property_to_input' value='create input' />" + "</span>") + "</span>";
          callbacks_on_element_created.push(function (el, menu) {
            LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "calling callback_on_element_created", propName, el, slotBinded, relSlotOb);
            var btnConfirm = el.querySelector('.btn_bind_in');
            if (!btnConfirm) {
              el.disabled = "disabled";
              LiteGraph.log_warn("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", ".btn_bind_in not found", propName, el);
            } else {
              LiteGraph.log_info("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", ".btn_bind_in binding!", btnConfirm, propName);
              btnConfirm.addEventListener("click", function (ev) {
                relSlotOb = node.findInputSlot(propName, true);
                hasSlotByName = relSlotOb !== -1;
                slotBinded = hasSlotByName ? relSlotOb.param_bind : false;
                if (!slotBinded) {
                  var _menu$close;
                  if (!hasSlotByName) {
                    LiteGraph.log_info("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "callback_on_element_created", "properties_allow_input_binding", "btnConfirm", "CREATING NEW INPUT ON NODE", relSlotOb, propName);
                    // propName
                    node.addInput(propName, info_type, {
                      removable: true,
                      nameLocked: true
                    });
                    relSlotOb = node.findInputSlot(propName, true);
                  }
                  LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "callback_on_element_created", "properties_allow_input_binding", "btnConfirm", "Linking property to input", relSlotOb);
                  relSlotOb.param_bind = true;
                  (_menu$close = menu.close) === null || _menu$close === void 0 || _menu$close.call(menu, ev, true);
                } else {
                  LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "callback_on_element_created", "properties_allow_input_binding", "btnConfirm", "Property already binded", relSlotOb, propName);
                }
                ev.preventDefault();
                ev.stopPropagation();
              });
            }
          });
        }
        if (!prevent_output_bind && LiteGraph.properties_allow_output_binding) {
          var _relSlotOb = node.findOutputSlot(propName, true);
          var _hasSlotByName = _relSlotOb !== -1;
          var _slotBinded = _hasSlotByName ? _relSlotOb.param_bind : false;
          htmlEntry += "<span class='property_output_bind'>" + (_slotBinded
          // output exists and is binded
          ? "<span class='property_output_binded'>linked</span>"
          // output is not binded or does not exist
          : _hasSlotByName ? "<span class='property_output_exist'>" + "<input type='button' class='btn_bind_out btn_bind_property_to_output' value='link output' />" + "</span>" : "<span class=''>" + "<input type='button' class='btn_bind_out btn_bind_property_to_output' value='create output' />" + "</span>") + "</span>";
          callbacks_on_element_created.push(function (el, menu) {
            LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "output calling callback_on_element_created", propName, el, _slotBinded, _relSlotOb);
            var btnConfirm = el.querySelector('.btn_bind_out');
            if (!btnConfirm) {
              el.disabled = "disabled";
              LiteGraph.log_warn("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "output .btn_bind_out not found", propName, el);
            } else {
              LiteGraph.log_info("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "output .btn_bind_out binding!", btnConfirm, propName);
              btnConfirm.addEventListener("click", function (ev) {
                _relSlotOb = node.findOutputSlot(propName, true);
                _hasSlotByName = _relSlotOb !== -1;
                _slotBinded = _hasSlotByName ? _relSlotOb.param_bind : false;
                if (!_slotBinded) {
                  var _menu$close2;
                  if (!_hasSlotByName) {
                    LiteGraph.log_info("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "output callback_on_element_created", "properties_allow_output_binding", "btnConfirm", "CREATING NEW OUTPUT ON NODE", _relSlotOb, propName);
                    // propName
                    node.addOutput(propName, info_type, {
                      removable: true,
                      nameLocked: true
                    });
                    _relSlotOb = node.findOutputSlot(propName, true);
                  }
                  LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "output callback_on_element_created", "properties_allow_output_binding", "btnConfirm", "Linking property to output", _relSlotOb);
                  _relSlotOb.param_bind = true;
                  (_menu$close2 = menu.close) === null || _menu$close2 === void 0 || _menu$close2.call(menu, ev, true);
                } else {
                  LiteGraph.log_debug("lgraphcanvas", "showLinkMenu", "onShowMenuNodeProperties", "output callback_on_element_created", "properties_allow_output_binding", "btnConfirm", "Property already binded", _relSlotOb, propName);
                }
                ev.preventDefault();
                ev.stopPropagation();
              });
            }
          });
        }
        // WIP TODO RESTART FROM HERE allow widget binding
        if (LiteGraph.properties_allow_widget_binding) {
          var _node$widgets;
          (_node$widgets = node.widgets) === null || _node$widgets === void 0 ? void 0 : _node$widgets.find(function (widget) {
            var _widget$options;
            return widget && ((_widget$options = widget.options) === null || _widget$options === void 0 ? void 0 : _widget$options.property) === propName;
          });
          //     let relSlotOb = node.findInputSlot(propName, true);
          //     let hasSlotByName = relSlotOb !== -1;
          //     let slotBinded = hasSlotByName ? relSlotOb.param_bind : false;
          //     htmlEntry += "<span class='property_input_bind'>"
          //                     + ( slotBinded
          //                             // input exists and is binded
          //                             ?   "<span class='property_input_binded'>linked</span>"
          //                             // input is not binded or does not exist
          //                             :   ( hasSlotByName
          //                                     ?   "<span class='property_input_exist'>"
          //                                             + "<input type='button' class='btn_confirm btn_bind_property_to_input' value='link input' />"
          //                                         + "</span>"
          //                                     : "<span class=''>"
          //                                             + "<input type='button' class='btn_confirm btn_bind_property_to_input' value='create input' />"
          //                                         + "</span>"
          //                                 )
          //                         )
          //                 +"</span>";
          //         callbacks_on_element_created.push(function(el, menu){
          //         LiteGraph.log_debug("lgraphcanvas","showLinkMenu","onShowMenuNodeProperties","calling callback_on_element_created",propName,el,slotBinded,relSlotOb);
          //         let btnConfirm = el.querySelector('.btn_confirm');
          //         if(!btnConfirm){
          //             el.disabled = "disabled";
          //             LiteGraph.log_warn("lgraphcanvas","showLinkMenu","onShowMenuNodeProperties",".btn_confirm not found",propName,el);
          //         }else{
          //             LiteGraph.log_info("lgraphcanvas","showLinkMenu","onShowMenuNodeProperties",".btn_confirm binding!",btnConfirm,propName);
          //             btnConfirm.addEventListener("click", function(ev){
          //                 relSlotOb = node.findInputSlot(propName, true);
          //                 hasSlotByName = relSlotOb !== -1;
          //                 slotBinded = hasSlotByName ? relSlotOb.param_bind : false;
          //                 if ( !slotBinded ){
          //                     if( !hasSlotByName ){
          //                         LiteGraph.log_info("lgraphcanvas","showLinkMenu","onShowMenuNodeProperties","callback_on_element_created","properties_allow_input_binding","btnConfirm","CREATING NEW INPUT ON NODE",relSlotOb,propName);
          //                         // propName
          //                         node.addInput(propName, info_type, {removable: true, nameLocked: true});
          //                         relSlotOb = node.findInputSlot(propName, true);
          //                     }
          //                     LiteGraph.log_debug("lgraphcanvas","showLinkMenu","onShowMenuNodeProperties","callback_on_element_created","properties_allow_input_binding","btnConfirm","Linking property to input",relSlotOb);
          //                     relSlotOb.param_bind = true;
          //                     menu.close?.(ev, true);
          //                 }else{
          //                     LiteGraph.log_debug("lgraphcanvas","showLinkMenu","onShowMenuNodeProperties","callback_on_element_created","properties_allow_input_binding","btnConfirm","Property already binded",relSlotOb,propName);
          //                 }
          //                 ev.preventDefault();
          //                 ev.stopPropagation();
          //             });
          //         }
          //     });
        }
        entries.push({
          content: htmlEntry,
          value: i,
          callbacks_on_element_created: callbacks_on_element_created,
          readonly: readonly
        });
      };
      for (var i in node.properties) {
        _loop();
      }
      if (!entries.length) {
        return;
      }
      LiteGraph.ContextMenu(entries, {
        event: e,
        callback: inner_clicked,
        parentMenu: prev_menu,
        allow_html: true,
        node: node
      }, ref_window);
      function inner_clicked(v, options, event, parent_menu, rel_node) {
        LiteGraph.log_debug.apply(LiteGraph, ["lgraphcanvas", "onShowMenuNodeProperties", "inner_clicked", this].concat(Array.prototype.slice.call(arguments)));
        if (!node) {
          return;
        }
        console.warn("**showeditproperty**", v, options);
        if (!this.disabled && !v.disabled) {
          if (!v.readonly) {
            var rect = this.getBoundingClientRect();
            canvas.showEditPropertyValue(node, v.value, {
              position: [rect.left, rect.top]
            });
          }
        }
      }
      return false;
    }
  }, {
    key: "decodeHTML",
    value: function decodeHTML(str) {
      var e = document.createElement("div");
      e.innerText = str;
      return e.innerHTML;
    }
  }, {
    key: "onMenuResizeNode",
    value: function onMenuResizeNode(value, options, e, menu, node) {
      if (!node) {
        return;
      }
      var canvas = LGraphCanvas.active_canvas;
      canvas.getCanvasWindow();
      var graph = canvas.graph;
      graph === null || graph === void 0 || graph.onGraphChanged({
        action: "resize",
        doSave: true
      });
      var fApplyMultiNode = function fApplyMultiNode(node) {
        node.size = node.computeSize();
        node.processCallbackHandlers("onResize", {
          def_cb: node.onResize
        }, node.size);
      };
      var graphcanvas = LGraphCanvas.active_canvas;
      if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
        fApplyMultiNode(node);
      } else {
        for (var i in graphcanvas.selected_nodes) {
          fApplyMultiNode(graphcanvas.selected_nodes[i]);
        }
      }
      node.setDirtyCanvas(true, true);
    }
  }, {
    key: "onShowNodeInfoEditor",
    value: function onShowNodeInfoEditor(item, options, e, menu, node) {
      var property = item.property || "title";
      var value = node[property];

      // TODO refactor :: use createDialog ?

      var dialog = document.createElement("div");
      dialog.is_modified = false;
      dialog.className = "graphdialog";
      dialog.innerHTML = "<span class='name'></span><input autofocus type='text' class='value'/><button>OK</button>";
      dialog.close = function () {
        var _dialog$parentNode2;
        (_dialog$parentNode2 = dialog.parentNode) === null || _dialog$parentNode2 === void 0 || _dialog$parentNode2.removeChild(dialog);
      };
      var title = dialog.querySelector(".name");
      title.innerText = property;
      var input = dialog.querySelector(".value");
      var inner = function inner() {
        if (input) {
          setValue(input.value);
        }
      };
      if (input) {
        input.value = value;
        input.addEventListener("blur", function (_event) {
          this.focus();
        });
        input.addEventListener("keydown", function (e) {
          dialog.is_modified = true;
          if (e.keyCode == 27) {
            // ESC
            dialog.close();
          } else if (e.keyCode == 13) {
            inner(); // save
          } else if (e.keyCode != 13 && e.target.localName != "textarea") {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
        });
      }
      var graphcanvas = LGraphCanvas.active_canvas;
      var canvas = graphcanvas.canvas;
      var rect = canvas.getBoundingClientRect();
      var offsetx = -20;
      var offsety = -20;
      if (rect) {
        offsetx -= rect.left;
        offsety -= rect.top;
      }
      if (event) {
        dialog.style.left = event.clientX + offsetx + "px";
        dialog.style.top = event.clientY + offsety + "px";
      } else {
        dialog.style.left = canvas.width * 0.5 + offsetx + "px";
        dialog.style.top = canvas.height * 0.5 + offsety + "px";
      }
      var button = dialog.querySelector("button");
      button.addEventListener("click", inner);
      canvas.parentNode.appendChild(dialog);
      if (input) input.focus();
      var dialogCloseTimer = null;
      dialog.addEventListener("pointerleave", function (_event) {
        if (LiteGraph.dialog_close_on_mouse_leave && !dialog.is_modified) {
          dialogCloseTimer = setTimeout(dialog.close, LiteGraph.dialog_close_on_mouse_leave_delay);
        }
      });
      dialog.addEventListener("pointerenter", function (_event) {
        if (LiteGraph.dialog_close_on_mouse_leave && dialogCloseTimer) {
          clearTimeout(dialogCloseTimer);
        }
      });
      var setValue = function setValue(value) {
        var _dialog$parentNode3;
        switch (item.type) {
          case "Number":
            value = Number(value);
            break;
          case "Boolean":
            value = Boolean(value);
            break;
        }
        node[property] = value;
        (_dialog$parentNode3 = dialog.parentNode) === null || _dialog$parentNode3 === void 0 || _dialog$parentNode3.removeChild(dialog);
        node.setDirtyCanvas(true, true);
      };
    }
  }, {
    key: "getPropertyPrintableValue",
    value: function getPropertyPrintableValue(value, values) {
      if (!values) return String(value);
      if (values.constructor === Array) {
        return String(value);
      }
      if (values.constructor === Object) {
        var desc_value = "";
        for (var k in values) {
          if (values[k] != value) continue;
          desc_value = k;
          break;
        }
        return String(value) + " (" + desc_value + ")";
      }
    }
  }, {
    key: "onMenuNodeCollapse",
    value: function onMenuNodeCollapse(value, options, e, menu, node) {
      node.graph.beforeChange(/* ?*/);
      var fApplyMultiNode = function fApplyMultiNode(node) {
        node.collapse();
      };
      var graphcanvas = LGraphCanvas.active_canvas;
      if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
        fApplyMultiNode(node);
      } else {
        for (var i in graphcanvas.selected_nodes) {
          fApplyMultiNode(graphcanvas.selected_nodes[i]);
        }
      }
      node.graph.afterChange(/* ?*/);
    }
  }, {
    key: "onMenuNodePin",
    value: function onMenuNodePin(value, options, e, menu, node) {
      node.pin();
    }
  }, {
    key: "onMenuNodeMode",
    value: function onMenuNodeMode(value, options, e, menu, node) {
      LiteGraph.ContextMenu(LiteGraph.NODE_MODES, {
        event: e,
        callback: inner_clicked,
        parentMenu: menu,
        node: node
      });
      function inner_clicked(v) {
        if (!node) {
          return;
        }
        var kV = Object.values(LiteGraph.NODE_MODES).indexOf(v);
        var fApplyMultiNode = function fApplyMultiNode(node) {
          if (kV >= 0 && LiteGraph.NODE_MODES[kV]) node.changeMode(kV);else {
            LiteGraph.log_warn("lgraphcanvas", "onMenuNodeMode", "unexpected mode", v, kV);
            node.changeMode(LiteGraph.ALWAYS);
          }
        };
        var graphcanvas = LGraphCanvas.active_canvas;
        if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
          fApplyMultiNode(node);
        } else {
          for (var i in graphcanvas.selected_nodes) {
            fApplyMultiNode(graphcanvas.selected_nodes[i]);
          }
        }
      }
      return false;
    }
  }, {
    key: "onMenuNodeColors",
    value: function onMenuNodeColors(value, options, e, menu, node) {
      if (!node) {
        // ? happens ?
        // throw new Error("no node for color");
        LiteGraph.log_warn("lgraphcanvas", "onMenuNodeColors", "invalid node");
        return;
      }
      var values = [];
      values.push({
        value: null,
        content: "<span style='display: block; padding-left: 4px;'>No color</span>"
      });
      for (var i in LGraphCanvas.node_colors) {
        var color = LGraphCanvas.node_colors[i];
        value = {
          value: i,
          content: "<span style='display: block; color: #999; padding-left: 4px; border-left: 8px solid " + color.color + "; background-color:" + color.bgcolor + "'>" + i + "</span>"
        };
        values.push(value);
      }
      LiteGraph.ContextMenu(values, {
        event: e,
        callback: inner_clicked,
        parentMenu: menu,
        node: node
      });
      function inner_clicked(v) {
        if (!node) {
          LiteGraph.log_warn("lgraphcanvas", "onMenuNodeColors", "inner_clicked", "no node");
          return;
        }
        var color = v.value ? LGraphCanvas.node_colors[v.value] : null;
        var fApplyColor = function fApplyColor(node) {
          if (color) {
            if (node.constructor === LiteGraph.LGraphGroup) {
              node.color = color.groupcolor;
            } else {
              node.color = color.color;
              node.bgcolor = color.bgcolor;
            }
          } else {
            delete node.color;
            delete node.bgcolor;
          }
        };
        var graphcanvas = LGraphCanvas.active_canvas;
        if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
          fApplyColor(node);
        } else {
          for (var _i28 in graphcanvas.selected_nodes) {
            fApplyColor(graphcanvas.selected_nodes[_i28]);
          }
        }
        node.setDirtyCanvas(true, true);
      }
      return false;
    }
  }, {
    key: "onMenuNodeShapes",
    value: function onMenuNodeShapes(value, options, e, menu, node) {
      if (!node) {
        // ? happens ?
        // throw new Error("no node passed");
        LiteGraph.log_warn("lgraphcanvas", "onMenuNodeShapes", "invalid node");
        return;
      }
      LiteGraph.ContextMenu(LiteGraph.VALID_SHAPES, {
        event: e,
        callback: inner_clicked,
        parentMenu: menu,
        node: node
      });
      function inner_clicked(v) {
        if (!node) {
          LiteGraph.log_warn("lgraphcanvas", "onMenuNodeShapes", "inner_clicked", "no node");
          return;
        }
        node.graph.beforeChange(/* ?*/); // node

        var fApplyMultiNode = function fApplyMultiNode(node) {
          node.shape = v;
        };
        var graphcanvas = LGraphCanvas.active_canvas;
        if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
          fApplyMultiNode(node);
        } else {
          for (var i in graphcanvas.selected_nodes) {
            fApplyMultiNode(graphcanvas.selected_nodes[i]);
          }
        }
        node.graph.afterChange(/* ?*/); // node
        node.setDirtyCanvas(true);
      }
      return false;
    }
  }, {
    key: "onMenuNodeRemove",
    value: function onMenuNodeRemove(value, options, e, menu, node) {
      if (!node) {
        // ? happens ?
        // throw new Error("no node passed");
        LiteGraph.log_warn("lgraphcanvas", "onMenuNodeShapes", "invalid node");
        return;
      }
      var graph = node.graph;
      graph.beforeChange();
      var fApplyMultiNode = function fApplyMultiNode(node) {
        if (node.removable === false) {
          return;
        }
        graph.remove(node);
      };
      var graphcanvas = LGraphCanvas.active_canvas;
      if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
        fApplyMultiNode(node);
      } else {
        for (var i in graphcanvas.selected_nodes) {
          fApplyMultiNode(graphcanvas.selected_nodes[i]);
        }
      }
      graph.afterChange();
      node.setDirtyCanvas(true, true);
    }
  }, {
    key: "onMenuNodeToSubgraph",
    value: function onMenuNodeToSubgraph(value, options, e, menu, node) {
      var graph = node.graph;
      var graphcanvas = LGraphCanvas.active_canvas;
      if (!graphcanvas) {
        // ? happens ?
        // throw new Error("no graph");
        LiteGraph.log_warn("lgraphcanvas", "onMenuNodeToSubgraph", "graphcanvas invalid");
        return;
      }
      var nodes_list = Object.values(graphcanvas.selected_nodes || {});
      if (!nodes_list.length) nodes_list = [node];
      var subgraph_node = LiteGraph.createNode("graph/subgraph");
      subgraph_node.pos = node.pos.concat();
      graph.add(subgraph_node);
      subgraph_node.buildFromNodes(nodes_list);
      graphcanvas.deselectAllNodes();
      node.setDirtyCanvas(true, true);
    }
  }, {
    key: "onMenuNodeClone",
    value: function onMenuNodeClone(value, options, e, menu, node) {
      node.graph.beforeChange();
      var newSelected = {};
      var fApplyMultiNode = function fApplyMultiNode(node) {
        if (node.clonable === false) {
          return;
        }
        var newnode = node.clone();
        if (!newnode) {
          return;
        }
        newnode.pos = [node.pos[0] + 5, node.pos[1] + 5];
        node.graph.add(newnode);
        newSelected[newnode.id] = newnode;
      };
      var graphcanvas = LGraphCanvas.active_canvas;
      if (!graphcanvas.selected_nodes || Object.keys(graphcanvas.selected_nodes).length <= 1) {
        fApplyMultiNode(node);
      } else {
        for (var i in graphcanvas.selected_nodes) {
          fApplyMultiNode(graphcanvas.selected_nodes[i]);
        }
      }
      if (Object.keys(newSelected).length) {
        graphcanvas.selectNodes(newSelected);
      }
      node.graph.afterChange();
      node.setDirtyCanvas(true, true);
    }
  }]);
}();

/* LGraphCanvas render */
_defineProperty(LGraphCanvas, "DEFAULT_BACKGROUND_IMAGE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNrs1rEKwjAUhlETUkj3vP9rdmr1Ysammk2w5wdxuLgcMHyptfawuZX4pJSWZTnfnu/lnIe/jNNxHHGNn//HNbbv+4dr6V+11uF527arU7+u63qfa/bnmh8sWLBgwYJlqRf8MEptXPBXJXa37BSl3ixYsGDBMliwFLyCV/DeLIMFCxYsWLBMwSt4Be/NggXLYMGCBUvBK3iNruC9WbBgwYJlsGApeAWv4L1ZBgsWLFiwYJmCV/AK3psFC5bBggULloJX8BpdwXuzYMGCBctgwVLwCl7Be7MMFixYsGDBsu8FH1FaSmExVfAxBa/gvVmwYMGCZbBg/W4vAQYA5tRF9QYlv/QAAAAASUVORK5CYII=");
_defineProperty(LGraphCanvas, "link_type_colors", {
  "-1": "#A86",
  "number": "#AAA",
  "node": "#DCA",
  "string": "#77F",
  "boolean": "#F77"
});
_defineProperty(LGraphCanvas, "gradients", {});
// cache of gradients
_defineProperty(LGraphCanvas, "search_limit", -1);
_defineProperty(LGraphCanvas, "node_colors", {
  red: {
    color: "#322",
    bgcolor: "#533",
    groupcolor: "#A88"
  },
  brown: {
    color: "#332922",
    bgcolor: "#593930",
    groupcolor: "#b06634"
  },
  green: {
    color: "#232",
    bgcolor: "#353",
    groupcolor: "#8A8"
  },
  blue: {
    color: "#223",
    bgcolor: "#335",
    groupcolor: "#88A"
  },
  pale_blue: {
    color: "#2a363b",
    bgcolor: "#3f5159",
    groupcolor: "#3f789e"
  },
  cyan: {
    color: "#233",
    bgcolor: "#355",
    groupcolor: "#8AA"
  },
  purple: {
    color: "#323",
    bgcolor: "#535",
    groupcolor: "#a1309b"
  },
  yellow: {
    color: "#432",
    bgcolor: "#653",
    groupcolor: "#b58b2a"
  },
  black: {
    color: "#222",
    bgcolor: "#000",
    groupcolor: "#444"
  }
});
var temp = new Float32Array(4);
var temp_vec2 = new Float32Array(2);

/**
 * draws the shape of the given node in the canvas
 * @method drawNodeShape
 **/
var tmp_area = new Float32Array(4);
var margin_area = new Float32Array(4);
var link_bounding = new Float32Array(4);
var tempA = new Float32Array(2);
var tempB = new Float32Array(2);

/**
 * LGraph is the class that contain a full graph. We instantiate one and add nodes to it, and then we can run the execution loop.
 * supported callbacks:
    + onNodeAdded: when a new node is added to the graph
    + onNodeRemoved: when a node inside this graph is removed
    + onNodeConnectionChange: some connection has changed in the graph (connected or disconnected)
 */
var LGraph = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {Object} o data from previous serialization [optional]} o
   */
  function LGraph(o) {
    _classCallCheck(this, LGraph);
    LiteGraph.log_debug("Graph created", o);
    this.list_of_graphcanvas = null;
    this.callbackhandler_setup();
    this.clear();
    if (o) {
      this.configure(o);
    }
    LiteGraph.processCallbackHandlers("on_lgraph_construct", {
      def_cb: LiteGraph.on_lgraph_construct
    }, this);
  }
  return _createClass(LGraph, [{
    key: "callbackhandler_setup",
    value: function callbackhandler_setup() {
      this.cb_handler = new CallbackHandler(this);
    }
  }, {
    key: "registerCallbackHandler",
    value: function registerCallbackHandler() {
      var _this$cb_handler;
      return (_this$cb_handler = this.cb_handler).registerCallbackHandler.apply(_this$cb_handler, arguments);
    }
  }, {
    key: "unregisterCallbackHandler",
    value: function unregisterCallbackHandler() {
      var _this$cb_handler2;
      return (_this$cb_handler2 = this.cb_handler).unregisterCallbackHandler.apply(_this$cb_handler2, arguments);
    }
  }, {
    key: "processCallbackHandlers",
    value: function processCallbackHandlers() {
      var _this$cb_handler3;
      return (_this$cb_handler3 = this.cb_handler).processCallbackHandlers.apply(_this$cb_handler3, arguments);
    }
  }, {
    key: "getSupportedTypes",
    value:
    /**
     * Gets the supported types of the LGraph class, falling back to the default supported types if not defined for the instance.
     * @returns {Array} An array of supported types for the LGraph class.
     */
    function getSupportedTypes() {
      var _this$supported_types;
      return (_this$supported_types = this.supported_types) !== null && _this$supported_types !== void 0 ? _this$supported_types : LGraph.supported_types;
    }

    /**
     * Removes all nodes from this graph
     * @method clear
     */
  }, {
    key: "clear",
    value: function clear() {
      var _this$_nodes;
      this.stop();
      this.status = LGraph.STATUS_STOPPED;
      this.last_node_id = 0;
      this.last_link_id = 0;
      this._version = -1; // used to detect changes

      // safe clear
      (_this$_nodes = this._nodes) === null || _this$_nodes === void 0 || _this$_nodes.forEach(function (node) {
        node.processCallbackHandlers("onRemoved", {
          def_cb: node.onRemoved
        });
      });

      // nodes
      this._nodes = [];
      this._nodes_by_id = {};
      this._nodes_in_order = []; // nodes sorted in execution order
      this._nodes_executable = null; // nodes that contain onExecute sorted in execution order

      // other scene stuff
      this._groups = [];

      // links
      this.links = {}; // container with all the links

      // iterations
      this.iteration = 0;

      // custom data
      this.config = {};
      this.configApplyDefaults();
      this.vars = {};
      this.extra = {}; // to store custom data

      // timing
      this.globaltime = 0;
      this.runningtime = 0;
      this.fixedtime = 0;
      this.fixedtime_lapse = 0.01;
      this.elapsed_time = 0.01;
      this.last_update_time = 0;
      this.starttime = 0;
      this.catch_errors = true;

      // savings
      this.history = {
        actionHistory: [],
        actionHistoryVersions: [],
        actionHistoryPtr: 0
      };
      this.nodes_executing = [];
      this.nodes_actioning = [];
      this.node_ancestorsCalculated = [];
      this.nodes_executedAction = [];

      // subgraph_data
      this.inputs = {};
      this.outputs = {};

      // notify canvas to redraw
      this.change();
      this.sendActionToCanvas("clear");
    }

    /**
    * Apply config values to LGraph config object
    * @method configApply
     * @param {object} opts options to merge
    */
  }, {
    key: "configApply",
    value: function configApply(opts) {
      /*
      align_to_grid
      links_ontop
      */
      this.config = Object.assign(this.config, opts);
    }

    /**
    * Apply config values to LGraph config object
    * @method configApply
     * @param {object} opts options to merge
    */
  }, {
    key: "configApplyDefaults",
    value: function configApplyDefaults() {
      var opts = LiteGraph.graphDefaultConfig;
      this.configApply(opts);
    }

    /**
     * Attach Canvas to this graph
     * @method attachCanvas
     * @param {GraphCanvas} graph_canvas
     */
  }, {
    key: "attachCanvas",
    value: function attachCanvas(graphcanvas) {
      var _this$list_of_graphca;
      if (!(graphcanvas instanceof LGraphCanvas)) {
        throw new Error("attachCanvas expects a LiteGraph.LGraphCanvas instance");
      }
      if (graphcanvas.graph && graphcanvas.graph != this) {
        LiteGraph.log_debug("lgraph", "attachCanvas", "detaching previous");
        graphcanvas.graph.detachCanvas(graphcanvas);
      }
      graphcanvas.graph = this;
      (_this$list_of_graphca = this.list_of_graphcanvas) !== null && _this$list_of_graphca !== void 0 ? _this$list_of_graphca : this.list_of_graphcanvas = [];
      var pos = this.list_of_graphcanvas.indexOf(graphcanvas);
      if (pos == -1) {
        LiteGraph.log_debug("lgraph", "attachCanvas", "attaching canvas");
        this.list_of_graphcanvas.push(graphcanvas);
      } else {
        LiteGraph.log_debug("lgraph", "attachCanvas", "canvas was already attached");
      }
    }

    /**
     * Detach Canvas from this graph
     * @method detachCanvas
     * @param {GraphCanvas} graph_canvas
     */
  }, {
    key: "detachCanvas",
    value: function detachCanvas(graphcanvas) {
      if (!this.list_of_graphcanvas) {
        return;
      }
      var pos = this.list_of_graphcanvas.indexOf(graphcanvas);
      if (pos == -1) {
        return;
      }
      // graphcanvas.graph = null; // ?!
      LiteGraph.log_debug("lgraph", "detachCanvas", pos, this.list_of_graphcanvas, this);
      this.list_of_graphcanvas.splice(pos, 1);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      if (!this.list_of_graphcanvas) {
        return;
      }
      return this.list_of_graphcanvas[0];
    }

    /**
     * Starts running this graph every interval milliseconds.
     * @method start
     * @param {number} interval amount of milliseconds between executions, if 0 then it renders to the monitor refresh rate
     */
  }, {
    key: "start",
    value: function start() {
      var _this = this;
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.status === LGraph.STATUS_RUNNING) {
        return;
      }
      this.status = LGraph.STATUS_RUNNING;
      this.processCallbackHandlers("onPlayEvent", {
        def_cb: this.onPlayEvent
      });
      this.sendEventToAllNodes("onStart");
      this.starttime = LiteGraph.getTime();
      this.last_update_time = this.starttime;
      var _onAnimationFrame = function onAnimationFrame() {
        if (_this.execution_timer_id !== -1) {
          return;
        }
        window.requestAnimationFrame(_onAnimationFrame);
        _this.processCallbackHandlers("onBeforeStep", {
          def_cb: _this.onBeforeStep
        });
        _this.runStep(1, !_this.catch_errors);
        _this.processCallbackHandlers("onAfterStep", {
          def_cb: _this.onAfterStep
        });
      };
      if (interval === 0 && (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame) {
        this.execution_timer_id = -1;
        _onAnimationFrame();
      } else {
        this.execution_timer_id = setInterval(function () {
          _this.processCallbackHandlers("onBeforeStep", {
            def_cb: _this.onBeforeStep
          });
          _this.runStep(1, !_this.catch_errors);
          _this.processCallbackHandlers("onAfterStep", {
            def_cb: _this.onAfterStep
          });
        }, interval);
      }
    }

    /**
     * Stops the execution loop of the graph
     * @method stop execution
     */
  }, {
    key: "stop",
    value: function stop() {
      if (this.status == LGraph.STATUS_STOPPED) {
        return;
      }
      this.status = LGraph.STATUS_STOPPED;
      this.processCallbackHandlers("onStopEvent", {
        def_cb: this.onStopEvent
      });
      if (this.execution_timer_id != null) {
        if (this.execution_timer_id != -1) {
          clearInterval(this.execution_timer_id);
        }
        this.execution_timer_id = null;
      }
      this.sendEventToAllNodes("onStop");

      // TODO CHECK THIS : TRYING to refresh canvas, for multiview one still need a manual refresh (mouseover) 
      // var thisGraph = this;
      // let fRefreshOnStop = function(){
      //     thisGraph.change();
      //     // thisGraph.setDirtyCanvas(true,true);
      //     thisGraph.sendActionToCanvas("draw");
      //     LiteGraph.log_warn("finally drawing on stop");
      // };
      // if(window.requestAnimationFrame){
      //     window.requestAnimationFrame(fRefreshOnStop);
      // }
      // setTimeout(fRefreshOnStop,972);
    }

    /**
     * Run N steps (cycles) of the graph
     * @method runStep
     * @param {number} num number of steps to run, default is 1
     * @param {Boolean} do_not_catch_errors [optional] if you want to try/catch errors
     * @param {number} limit max number of nodes to execute (used to execute from start to a node)
     */
  }, {
    key: "runStep",
    value: function runStep() {
      var _this$_nodes_executab;
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var do_not_catch_errors = arguments.length > 1 ? arguments[1] : undefined;
      var limit = arguments.length > 2 ? arguments[2] : undefined;
      var start = LiteGraph.getTime();
      this.globaltime = 0.001 * (start - this.starttime);
      var nodes = (_this$_nodes_executab = this._nodes_executable) !== null && _this$_nodes_executab !== void 0 ? _this$_nodes_executab : this._nodes;
      if (!nodes) {
        return;
      }
      limit || (limit = nodes.length);
      if (do_not_catch_errors) {
        for (var i = 0; i < num; i++) {
          nodes.forEach(function (node) {
            var _node$_waiting_action;
            if (LiteGraph.use_deferred_actions && (_node$_waiting_action = node._waiting_actions) !== null && _node$_waiting_action !== void 0 && _node$_waiting_action.length) {
              node.executePendingActions();
            }
            if (node.mode === LiteGraph.ALWAYS) {
              var _node$doExecute;
              (_node$doExecute = node.doExecute) === null || _node$doExecute === void 0 || _node$doExecute.call(node);
            }
          });
          this.fixedtime += this.fixedtime_lapse;
          this.processCallbackHandlers("onExecuteStep", {
            def_cb: this.onExecuteStep
          });
        }
        this.processCallbackHandlers("onAfterExecute", {
          def_cb: this.onAfterExecute
        });
      } else {
        // catch errors
        try {
          for (var _i = 0; _i < num; _i++) {
            nodes.forEach(function (node) {
              var _node$_waiting_action2;
              if (LiteGraph.use_deferred_actions && (_node$_waiting_action2 = node._waiting_actions) !== null && _node$_waiting_action2 !== void 0 && _node$_waiting_action2.length) {
                node.executePendingActions();
              }
              if (node.mode === LiteGraph.ALWAYS) {
                var _node$doExecute2;
                (_node$doExecute2 = node.doExecute) === null || _node$doExecute2 === void 0 || _node$doExecute2.call(node);
              }
            });
            this.fixedtime += this.fixedtime_lapse;
            this.processCallbackHandlers("onExecuteStep", {
              def_cb: this.onExecuteStep
            });
          }
          this.processCallbackHandlers("onAfterExecute", {
            def_cb: this.onAfterExecute
          });
          this.errors_in_execution = false;
        } catch (err) {
          this.errors_in_execution = true;
          if (LiteGraph.throw_errors) {
            throw err;
          }
          LiteGraph.log_warn("lgraph", "Error during execution", err);
          this.stop();
        }
      }
      var now = LiteGraph.getTime();
      var elapsed = now - start;
      if (elapsed == 0) {
        elapsed = 1;
      }
      this.execution_time = 0.001 * elapsed;
      this.globaltime += 0.001 * elapsed;
      this.iteration += 1;
      this.elapsed_time = (now - this.last_update_time) * 0.001;
      this.last_update_time = now;
      this.nodes_executing = [];
      this.nodes_actioning = [];
      this.node_ancestorsCalculated = [];
      this.nodes_executedAction = [];
    }

    /**
     * Updates the graph execution order according to relevance of the nodes (nodes with only outputs have more relevance than
     * nodes with only inputs.
     * @method updateExecutionOrder
     */
  }, {
    key: "updateExecutionOrder",
    value: function updateExecutionOrder() {
      this._nodes_in_order = this.computeExecutionOrder(false);
      this._nodes_executable = [];
      for (var i = 0; i < this._nodes_in_order.length; ++i) {
        if (this._nodes_in_order[i].onExecute) {
          this._nodes_executable.push(this._nodes_in_order[i]);
        }
      }
    }

    /**
     * Computes the execution order of nodes in the flow graph based on their connections and levels.
     * @param {boolean} only_onExecute - Indicates whether to consider only nodes with an onExecute method.
     * @param {boolean} set_level - If true, assigns levels to the nodes based on their connections.
     * @returns {Array} An array of nodes in the calculated execution order.
     *
     * @TODO:This whole concept is a mistake.  Should call graph back from output nodes
     */
  }, {
    key: "computeExecutionOrder",
    value: function computeExecutionOrder(only_onExecute, set_level) {
      var L = [];
      var S = [];
      var M = {};
      var visited_links = {}; // to avoid repeating links
      var remaining_links = {}; // to a

      // search for the nodes without inputs (starting nodes)
      for (var i = 0, _l = this._nodes.length; i < _l; ++i) {
        var _node = this._nodes[i];
        if (only_onExecute && !_node.onExecute) {
          continue;
        }
        M[_node.id] = _node; // add to pending nodes

        var num = 0; // num of input connections
        if (_node.inputs) {
          for (var j = 0, l2 = _node.inputs.length; j < l2; j++) {
            if (_node.inputs[j] && _node.inputs[j].link != null) {
              num += 1;
            }
          }
        }
        if (num == 0) {
          // is a starting node
          S.push(_node);
          if (set_level) {
            _node._level = 1;
          }
        } else {
          // num of input links
          if (set_level) {
            _node._level = 0;
          }
          remaining_links[_node.id] = num;
        }
      }
      while (S.length != 0) {
        // get an starting node
        var node = S.shift();
        L.push(node); // add to ordered list
        delete M[node.id]; // remove from the pending nodes

        if (!node.outputs) {
          continue;
        }

        // for every output
        for (var _i2 = 0; _i2 < node.outputs.length; _i2++) {
          var output = node.outputs[_i2];
          // not connected
          if (output == null || output.links == null || output.links.length == 0) {
            continue;
          }

          // for every connection
          for (var _j = 0; _j < output.links.length; _j++) {
            var link_id = output.links[_j];
            var link = this.links[link_id];
            if (!link) {
              continue;
            }

            // already visited link (ignore it)
            if (visited_links[link.id]) {
              continue;
            }
            var target_node = this.getNodeById(link.target_id);
            if (target_node == null) {
              visited_links[link.id] = true;
              continue;
            }
            if (set_level && (!target_node._level || target_node._level <= node._level)) {
              target_node._level = node._level + 1;
            }
            visited_links[link.id] = true; // mark as visited
            remaining_links[target_node.id] -= 1; // reduce the number of links remaining
            if (remaining_links[target_node.id] == 0) {
              S.push(target_node);
            } // if no more links, then add to starters array
          }
        }
      }

      // the remaining ones (loops)
      for (var _i3 in M) {
        L.push(M[_i3]);
      }
      if (L.length != this._nodes.length && LiteGraph.debug) {
        LiteGraph.log_warn("lgraph", "computeExecutionOrder", "something went wrong, nodes missing");
      }
      var l = L.length;

      // save order number in the node
      for (var _i4 = 0; _i4 < l; ++_i4) {
        L[_i4].order = _i4;
      }

      // sort now by priority
      L = L.sort(function (A, B) {
        var Ap = A.constructor.priority || A.priority || 0;
        var Bp = B.constructor.priority || B.priority || 0;
        if (Ap == Bp) {
          // if same priority, sort by order
          return A.order - B.order;
        }
        return Ap - Bp; // sort by priority
      });

      // save order number in the node, again...
      for (var _i5 = 0; _i5 < l; ++_i5) {
        L[_i5].order = _i5;
      }
      return L;
    }

    /**
     * Returns all the nodes that could affect this one (ancestors) by crawling all the inputs recursively.
     * It doesn't include the node itself
     * @method getAncestors
     * @return {Array} an array with all the LiteGraph.LGraphNodes that affect this node, in order of execution
     */
  }, {
    key: "getAncestors",
    value: function getAncestors(node) {
      var optsIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var optsDef = {
        modesSkip: [],
        modesOnly: [],
        typesSkip: [],
        typesOnly: []
      };
      var opts = Object.assign(optsDef, optsIn);
      var ancestors = [];
      var ancestorsIds = [];
      var pending = [node];
      var visited = {};
      while (pending.length) {
        var current = pending.shift();
        if (!current) {
          continue;
        }
        if (visited[current.id]) {
          continue;
        }
        // mark as visited
        visited[current.id] = true;

        // add to ancestors
        if (current.id != node.id) {
          // mode check
          if (opts.modesSkip && opts.modesSkip.length) {
            if (opts.modesSkip.indexOf(current.mode) != -1) {
              // DBG EXCESS (keep) LiteGraph.log_verbose("mode skip "+current.id+":"+current.order+" :: "+current.mode);
              continue;
            }
          }
          if (opts.modesOnly && opts.modesOnly.length) {
            if (opts.modesOnly.indexOf(current.mode) == -1) {
              // DBG EXCESS (keep) LiteGraph.log_verbose("mode only "+current.id+":"+current.order+" :: "+current.mode);
              continue;
            }
          }
          if (ancestorsIds.indexOf(current.id) == -1) {
            ancestors.push(current);
            ancestorsIds.push(current.id);
            // DBG EXCESS (keep) LiteGraph.log_verbose("push current "+current.id+":"+current.order);
          }
        }

        // get its inputs
        if (!current.inputs) {
          continue;
        }
        for (var i = 0; i < current.inputs.length; ++i) {
          var input = current.getInputNode(i);
          if (!input) continue;
          var inputType = current.inputs[i].type;

          // type check
          if (opts.typesSkip && opts.typesSkip.length) {
            if (opts.typesSkip.indexOf(inputType) != -1) {
              // DBG EXCESS (keep) LiteGraph.log_verbose("type skip "+input.id+":"+input.order+" :: "+inputType);
              continue;
            }
          }
          if (opts.typesOnly && opts.typesOnly.length) {
            if (opts.typesOnly.indexOf(input.mode) == -1) {
              // DBG EXCESS (keep) LiteGraph.log_verbose("type only "+input.id+":"+input.order+" :: "+inputType);
              continue;
            }
          }

          // DBG EXCESS (keep) LiteGraph.log_verbose("input "+i+" "+input.id+":"+input.order);
          // push em in
          if (ancestorsIds.indexOf(input.id) == -1) {
            if (!visited[input.id]) {
              pending.push(input);
              // DBG EXCESS (keep) LiteGraph.log_verbose("push input "+input.id+":"+input.order);
            }
          }
        }
      }
      ancestors.sort(function (a, b) {
        return a.order - b.order;
      });
      return ancestors;
    }

    /**
     * Positions every node in a more readable manner
     * @method arrange
     */
  }, {
    key: "arrange",
    value: function arrange() {
      var margin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var layout = arguments.length > 1 ? arguments[1] : undefined;
      var nodes = this.computeExecutionOrder(false, true);
      var columns = [];
      for (var i = 0; i < nodes.length; ++i) {
        var _columns$col;
        var node = nodes[i];
        var col = node._level || 1;
        (_columns$col = columns[col]) !== null && _columns$col !== void 0 ? _columns$col : columns[col] = [];
        columns[col].push(node);
      }
      var x = margin;
      for (var _i6 = 0; _i6 < columns.length; ++_i6) {
        var column = columns[_i6];
        if (!column) {
          continue;
        }
        var max_size = 100;
        var y = margin + LiteGraph.NODE_TITLE_HEIGHT;
        for (var j = 0; j < column.length; ++j) {
          var _node2 = column[j];
          _node2.pos[0] = layout == LiteGraph.VERTICAL_LAYOUT ? y : x;
          _node2.pos[1] = layout == LiteGraph.VERTICAL_LAYOUT ? x : y;
          var max_size_index = layout == LiteGraph.VERTICAL_LAYOUT ? 1 : 0;
          if (_node2.size[max_size_index] > max_size) {
            max_size = _node2.size[max_size_index];
          }
          var node_size_index = layout == LiteGraph.VERTICAL_LAYOUT ? 0 : 1;
          y += _node2.size[node_size_index] + margin + LiteGraph.NODE_TITLE_HEIGHT;
        }
        x += max_size + margin;
      }
      this.setDirtyCanvas(true, true);
    }

    /**
     * Returns the amount of time the graph has been running in milliseconds
     * @method getTime
     * @return {number} number of milliseconds the graph has been running
     */
  }, {
    key: "getTime",
    value: function getTime() {
      return this.globaltime;
    }

    /**
     * Returns the amount of time accumulated using the fixedtime_lapse var. This is used in context where the time increments should be constant
     * @method getFixedTime
     * @return {number} number of milliseconds the graph has been running
     */
  }, {
    key: "getFixedTime",
    value: function getFixedTime() {
      return this.fixedtime;
    }

    /**
     * Returns the amount of time it took to compute the latest iteration. Take into account that this number could be not correct
     * if the nodes are using graphical actions
     * @method getElapsedTime
     * @return {number} number of milliseconds it took the last cycle
     */
  }, {
    key: "getElapsedTime",
    value: function getElapsedTime() {
      return this.elapsed_time;
    }

    /**
     * Sends an event to all the nodes, useful to trigger stuff
     * TODO :: nice stuff !! check and improve
     * @method sendEventToAllNodes
     * @param {String} eventname the name of the event (function to be called)
     * @param {Array} params parameters in array format
     */
  }, {
    key: "sendEventToAllNodes",
    value: function sendEventToAllNodes(eventname, params) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LiteGraph.ALWAYS;
      var nodes = this._nodes_in_order ? this._nodes_in_order : this._nodes;
      if (!nodes) {
        return;
      }
      for (var j = 0, l = nodes.length; j < l; ++j) {
        var node = nodes[j];
        if (node.constructor === LiteGraph.Subgraph && eventname !== "onExecute") {
          if (node.mode == mode) {
            node.sendEventToAllNodes(eventname, params, mode);
          }
          continue;
        }
        if (typeof node[eventname] !== "function" || node.mode !== mode) {
          continue;
        }
        if (params === undefined) {
          node[eventname]();
        } else if (Array.isArray(params)) {
          node[eventname].apply(node, params);
        } else {
          node[eventname](params);
        }
      }
    }

    /**
     * Sends an action with parameters to the connected GraphCanvas instances for processing.
     * @param {string} action - The action to be performed on the GraphCanvas instances.
     * @param {Array} params - An array of parameters to be passed to the action method.
     */
  }, {
    key: "sendActionToCanvas",
    value: function sendActionToCanvas(action, params) {
      if (!this.list_of_graphcanvas) {
        return;
      }
      var _iterator = _createForOfIteratorHelper(this.list_of_graphcanvas),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          if (typeof c[action] == "function" && c[action] && params) {
            c[action].apply(c, _toConsumableArray(params));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Adds a new node instance to this graph
     * @method add
     * @param {LiteGraph.LGraphNode} node the instance of the node
     */
  }, {
    key: "add",
    value: function add(node, skip_compute_order) {
      var optsIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var optsDef = {
        doProcessChange: true,
        doCalcSize: true
      };
      var opts = Object.assign(optsDef, optsIn);
      if (!node) {
        return;
      }

      // groups
      if (node.constructor === LiteGraph.LGraphGroup) {
        this._groups.push(node);
        this.setDirtyCanvas(true);
        this.change();
        node.graph = this;
        this.onGraphChanged({
          action: "groupAdd",
          doSave: opts.doProcessChange
        });
        return;
      }

      // nodes
      if (node.id != -1 && this._nodes_by_id[node.id] != null) {
        LiteGraph.log_debug("lgraph", "add", "there is already a node with this ID, changing it", node);
        if (LiteGraph.use_uuids) {
          node.id = LiteGraph.uuidv4();
        } else {
          node.id = ++this.last_node_id;
        }
      }
      if (LiteGraph.MAX_NUMBER_OF_NODES > 0 && this._nodes.length >= LiteGraph.MAX_NUMBER_OF_NODES) {
        LiteGraph.log_error("lgraph", "add", "max number of nodes in a graph reached", LiteGraph.MAX_NUMBER_OF_NODES);
        return;
        // throw new Error("LiteGraph: max number of nodes in a graph reached");
      }

      // give him an id
      if (LiteGraph.use_uuids) {
        if (node.id == null || node.id == -1) node.id = LiteGraph.uuidv4();
      } else {
        if (node.id == null || node.id == -1) {
          node.id = ++this.last_node_id;
        } else if (this.last_node_id < node.id) {
          this.last_node_id = node.id;
        }
      }
      node.graph = this;
      this.onGraphChanged({
        action: "nodeAdd",
        doSave: opts.doProcessChange
      });
      this._nodes.push(node);
      this._nodes_by_id[node.id] = node;
      node.processCallbackHandlers("onAdded", {
        def_cb: node.onAdded
      }, this);
      if (this.config.align_to_grid) {
        node.alignToGrid();
      }
      if (!skip_compute_order) {
        this.updateExecutionOrder();
      }
      this.processCallbackHandlers("onNodeAdded", {
        def_cb: this.onNodeAdded
      }, node);
      if (opts.doCalcSize) {
        node.setSize(node.computeSize());
      }
      this.setDirtyCanvas(true);
      this.change();
      return node; // to chain actions
    }

    /**
     * Removes a node from the graph
     * @method remove
     * @param {LiteGraph.LGraphNode} node the instance of the node
     */
  }, {
    key: "remove",
    value: function remove(node) {
      if (node.constructor === LiteGraph.LGraphGroup) {
        var index = this._groups.indexOf(node);
        if (index != -1) {
          this._groups.splice(index, 1);
        }
        node.graph = null;
        this.onGraphChanged({
          action: "groupRemove"
        });
        this.setDirtyCanvas(true, true);
        this.change();
        return;
      }
      if (this._nodes_by_id[node.id] == null) {
        return;
      } // not found

      if (node.ignore_remove) {
        return;
      } // cannot be removed

      // this.beforeChange(); // sure? - almost sure is wrong

      // disconnect inputs
      if (node.inputs) {
        for (var i = 0; i < node.inputs.length; i++) {
          var slot = node.inputs[i];
          if (slot.link != null) {
            node.disconnectInput(i, {
              doProcessChange: false
            });
          }
        }
      }

      // disconnect outputs
      if (node.outputs) {
        for (var _i7 = 0; _i7 < node.outputs.length; _i7++) {
          var _slot = node.outputs[_i7];
          if (_slot.links != null && _slot.links.length) {
            node.disconnectOutput(_i7, false, {
              doProcessChange: false
            });
          }
        }
      }

      // node.id = -1; //why?

      // callback
      node.processCallbackHandlers("onRemoved", {
        def_cb: node.onRemoved
      }, this);
      node.graph = null;

      // remove from canvas render
      if (this.list_of_graphcanvas) {
        for (var _i8 = 0; _i8 < this.list_of_graphcanvas.length; ++_i8) {
          var canvas = this.list_of_graphcanvas[_i8];
          if (canvas.selected_nodes[node.id]) {
            delete canvas.selected_nodes[node.id];
          }
          if (canvas.node_dragged == node) {
            canvas.node_dragged = null;
          }
        }
      }

      // remove from containers
      var pos = this._nodes.indexOf(node);
      if (pos != -1) {
        this._nodes.splice(pos, 1);
      }
      delete this._nodes_by_id[node.id];
      this.processCallbackHandlers("onNodeRemoved", {
        def_cb: this.onNodeRemoved
      }, node);
      this.onGraphChanged({
        action: "nodeRemove"
      });

      // close panels
      this.sendActionToCanvas("checkPanels");
      this.setDirtyCanvas(true, true);
      // this.afterChange(); // sure? - almost sure is wrong
      this.change();
      this.updateExecutionOrder();
    }

    /**
     * Returns a node by its id.
     * @method getNodeById
     * @param {Number} id
     */
  }, {
    key: "getNodeById",
    value: function getNodeById(id) {
      if (id == null) {
        return null;
      }
      return this._nodes_by_id[id];
    }

    /**
     * Returns a list of nodes that matches a class
     * @method findNodesByClass
     * @param {Class} classObject the class itself (not an string)
     * @return {Array} a list with all the nodes of this type
     */
  }, {
    key: "findNodesByClass",
    value: function findNodesByClass(classObject) {
      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      result = this._nodes.filter(function (node) {
        return node.constructor === classObject;
      });
      return result;
    }

    /**
     * Returns a list of nodes that matches a type
     * @method findNodesByType
     * @param {String} type the name of the node type
     * @return {Array} a list with all the nodes of this type
     */
  }, {
    key: "findNodesByType",
    value: function findNodesByType(type) {
      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var lowerCaseType = type.toLowerCase();
      result = this._nodes.filter(function (node) {
        return node.type.toLowerCase() === lowerCaseType;
      });
      return result;
    }

    /**
     * Returns the first node that matches a name in its title
     * @method findNodeByTitle
     * @param {String} name the name of the node to search
     * @return {Node} the node or null
     */
  }, {
    key: "findNodeByTitle",
    value: function findNodeByTitle(title) {
      var _this$_nodes$find;
      return (_this$_nodes$find = this._nodes.find(function (node) {
        return node.title === title;
      })) !== null && _this$_nodes$find !== void 0 ? _this$_nodes$find : null;
    }

    /**
     * Returns a list of nodes that matches a name
     * @method findNodesByTitle
     * @param {String} name the name of the node to search
     * @return {Array} a list with all the nodes with this name
     */
  }, {
    key: "findNodesByTitle",
    value: function findNodesByTitle(title) {
      return this._nodes.filter(function (node) {
        return node.title === title;
      });
    }

    /**
     * Returns the top-most node in this position of the canvas
     * @method getNodeOnPos
     * @param {number} x the x coordinate in canvas space
     * @param {number} y the y coordinate in canvas space
     * @param {Array} nodes_list a list with all the nodes to search from, by default is all the nodes in the graph
     * @return {LiteGraph.LGraphNode} the node at this position or null
     */
  }, {
    key: "getNodeOnPos",
    value: function getNodeOnPos(x, y) {
      var _nodes_list$reverse$f;
      var nodes_list = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodes;
      var margin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return (_nodes_list$reverse$f = nodes_list.reverse().find(function (node) {
        return node.isPointInside(x, y, margin);
      })) !== null && _nodes_list$reverse$f !== void 0 ? _nodes_list$reverse$f : null;
    }

    /**
     * Returns the y closest group enclosing a position
     * @method getGroupOnPos
     * @param {number} x the x coordinate in canvas space
     * @param {number} y the y coordinate in canvas space
     * @return {LiteGraph.LGraphGroup} the group or null
     */
  }, {
    key: "getGroupOnPos",
    value: function getGroupOnPos(x, y) {
      // let firstGroupMatching = this._groups.find((group) => group.isPointInside(x, y, 2, true)) ?? null;
      var aMatchingGroups = this._groups.filter(function (group, index) {
        return group.isPointInside(x, y, 2, true); // ?? null;
      });
      if (!aMatchingGroups.length) return null;
      LiteGraph.log_verbose("lgraph", "getGroupOnPos", "matching groups by x,y", x, y, aMatchingGroups);
      var aSortedByYDistance = aMatchingGroups.sort(function (a, b) {
        return Math.abs(a._pos[1] - y) > Math.abs(b._pos[1] - y);
      });
      LiteGraph.log_verbose("lgraph", "getGroupOnPos", "sorted groups y distance", aSortedByYDistance);
      return aSortedByYDistance[0];
    }

    /**
     * Checks that the node type matches the node type registered, used when replacing a nodetype by a newer version during execution
     * this replaces the ones using the old version with the new version
     * @method checkNodeTypes
     */
  }, {
    key: "checkNodeTypes",
    value: function checkNodeTypes() {
      for (var i = 0; i < this._nodes.length; i++) {
        var node = this._nodes[i];
        var ctor = LiteGraph.registered_node_types[node.type];
        if (node.constructor == ctor) {
          continue;
        }
        LiteGraph.log_debug("lgraph", "checkNodeTypes", "node being replaced by newer version", node.type);
        var newnode = LiteGraph.createNode(node.type);
        this._nodes[i] = newnode;
        newnode.configure(node.serialize());
        newnode.graph = this;
        this._nodes_by_id[newnode.id] = newnode;
        if (node.inputs) {
          newnode.inputs = node.inputs.concat();
        }
        if (node.outputs) {
          newnode.outputs = node.outputs.concat();
        }
      }
      this.updateExecutionOrder();
    }

    /**
     * Executes an action on the GraphInput nodes based on the provided action name and parameters.
     * @param {string} action - The name of the action to be executed on the GraphInput nodes.
     * @param {any} param - The parameter to pass to the action method.
     * @param {object} options - Additional options for the action.
    */
  }, {
    key: "onAction",
    value: function onAction(action, param, options) {
      this._input_nodes = this.findNodesByClass(LiteGraph.GraphInput, this._input_nodes);
      LiteGraph.log_debug.apply(LiteGraph, ["lgraph", "onAction", "will trigger actionDo on input nodes", this._input_nodes, "with name(?!)"].concat(Array.prototype.slice.call(arguments)));
      for (var i = 0; i < this._input_nodes.length; ++i) {
        var node = this._input_nodes[i];
        if (node.properties.name != action) {
          continue;
        }
        // wrap node.onAction(action, param);
        LiteGraph.log_debug.apply(LiteGraph, ["lgraph", "onAction", node, "node actionDo"].concat(Array.prototype.slice.call(arguments)));
        node.actionDo(action, param, options);
        break;
      }
    }

    // TODO check this, investigate, _last_trigger_time ? who calls trigger ? who calls triggerInput ? who calls onTrigger ?
  }, {
    key: "trigger",
    value: function trigger(action, param) {
      LiteGraph.log_debug("lgraph", "trigger", action, param);
      // this.onTrigger?.(action, param);
      this.processCallbackHandlers("onTrigger", {
        def_cb: this.onTrigger
      }, action, param);
    }

    /**
     * Tell this graph it has a global graph input of this type
     * @method addGlobalInput
     * @param {String} name
     * @param {String} type
     * @param {*} value [optional]
     */
  }, {
    key: "addInput",
    value: function addInput(name, type, value) {
      var input = this.inputs[name];
      if (input) {
        // already exist
        return;
      }
      this.beforeChange();
      this.inputs[name] = {
        name: name,
        type: type,
        value: value
      };
      this.onGraphChanged({
        action: "addInput"
      });
      this.afterChange();
      this.processCallbackHandlers("onInputAdded", {
        def_cb: this.onInputAdded
      }, name, type);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
    }

    /**
     * Assign a data to the global graph input
     * @method setGlobalInputData
     * @param {String} name
     * @param {*} data
     */
  }, {
    key: "setInputData",
    value: function setInputData(name, data) {
      var input = this.inputs[name];
      if (!input) {
        return;
      }
      input.value = data;
    }

    /**
     * Returns the current value of a global graph input
     * @method getInputData
     * @param {String} name
     * @return {*} the data
     */
  }, {
    key: "getInputData",
    value: function getInputData(name) {
      var input = this.inputs[name];
      if (!input) {
        return null;
      }
      return input.value;
    }

    /**
     * Changes the name of a global graph input
     * @method renameInput
     * @param {String} old_name
     * @param {String} new_name
     */
  }, {
    key: "renameInput",
    value: function renameInput(old_name, name) {
      if (name == old_name) {
        return;
      }
      if (!this.inputs[old_name]) {
        return false;
      }
      if (this.inputs[name]) {
        LiteGraph.log_error("lgraph", "renameInut", "there is already one input with that name");
        return false;
      }
      this.inputs[name] = this.inputs[old_name];
      delete this.inputs[old_name];
      this.onGraphChanged({
        action: "renameInput"
      });
      this.processCallbackHandlers("onInputRenamed", {
        def_cb: this.onInputRenamed
      }, old_name, name);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
    }

    /**
     * Changes the type of a global graph input
     * @method changeInputType
     * @param {String} name
     * @param {String} type
     */
  }, {
    key: "changeInputType",
    value: function changeInputType(name, type) {
      if (!this.inputs[name]) {
        return false;
      }
      if (this.inputs[name].type && String(this.inputs[name].type).toLowerCase() == String(type).toLowerCase()) {
        return;
      }
      this.inputs[name].type = type;
      this.onGraphChanged({
        action: "changeInputType"
      });
      this.processCallbackHandlers("onInputTypeChanged", {
        def_cb: this.onInputTypeChanged
      }, name, type);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
    }

    /**
     * Removes a global graph input
     * @method removeInput
     * @param {String} name
     * @param {String} type
     */
  }, {
    key: "removeInput",
    value: function removeInput(name) {
      if (!this.inputs[name]) {
        return false;
      }
      delete this.inputs[name];
      this.onGraphChanged({
        action: "graphRemoveInput"
      });
      this.processCallbackHandlers("onInputRemoved", {
        def_cb: this.onInputRemoved
      }, name);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
      return true;
    }

    /**
     * Creates a global graph output
     * @method addOutput
     * @param {String} name
     * @param {String} type
     * @param {*} value
     */
  }, {
    key: "addOutput",
    value: function addOutput(name, type, value) {
      this.outputs[name] = {
        name: name,
        type: type,
        value: value
      };
      this.onGraphChanged({
        action: "addOutput"
      });
      this.processCallbackHandlers("onOutputAdded", {
        def_cb: this.onOutputAdded
      }, name, type);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
    }

    /**
     * Assign a data to the global output
     * @method setOutputData
     * @param {String} name
     * @param {String} value
     */
  }, {
    key: "setOutputData",
    value: function setOutputData(name, value) {
      var output = this.outputs[name];
      if (!output) {
        return;
      }
      output.value = value;
    }

    /**
     * Returns the current value of a global graph output
     * @method getOutputData
     * @param {String} name
     * @return {*} the data
     */
  }, {
    key: "getOutputData",
    value: function getOutputData(name) {
      var output = this.outputs[name];
      if (!output) {
        return null;
      }
      return output.value;
    }

    /**
     * Renames a global graph output
     * @method renameOutput
     * @param {String} old_name
     * @param {String} new_name
     */
  }, {
    key: "renameOutput",
    value: function renameOutput(old_name, name) {
      if (!this.outputs[old_name]) {
        return false;
      }
      if (this.outputs[name]) {
        LiteGraph.log_error("lgraph", "renameOutput", "there is already one output with that name");
        return false;
      }
      this.outputs[name] = this.outputs[old_name];
      delete this.outputs[old_name];
      this._version++;
      this.processCallbackHandlers("onOutputRenamed", {
        def_cb: this.onOutputRenamed
      }, old_name, name);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
    }

    /**
     * Changes the type of a global graph output
     * @method changeOutputType
     * @param {String} name
     * @param {String} type
     */
  }, {
    key: "changeOutputType",
    value: function changeOutputType(name, type) {
      if (!this.outputs[name]) {
        return false;
      }
      if (this.outputs[name].type && String(this.outputs[name].type).toLowerCase() == String(type).toLowerCase()) {
        return;
      }
      this.outputs[name].type = type;
      this.onGraphChanged({
        action: "changeOutputType"
      });
      this.processCallbackHandlers("onOutputTypeChanged", {
        def_cb: this.onOutputTypeChanged
      }, name, type);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
    }

    /**
     * Removes a global graph output
     * @method removeOutput
     * @param {String} name
     */
  }, {
    key: "removeOutput",
    value: function removeOutput(name) {
      if (!this.outputs[name]) {
        return false;
      }
      delete this.outputs[name];
      this.onGraphChanged({
        action: "removeOutput"
      });
      this.processCallbackHandlers("onOutputRemoved", {
        def_cb: this.onOutputRemoved
      }, name);
      this.processCallbackHandlers("onInputsOutputsChange", {
        def_cb: this.onInputsOutputsChange
      });
      return true;
    }

    /**
     * Triggers the 'onTrigger' method on nodes with a specific title by passing a value to them.
     * // TODO check this, investigate, _last_trigger_time ? who calls triggerInput ? who calls onTrigger ?
     * @param {string} name - The title of the nodes to trigger.
     * @param {any} value - The value to pass to the 'onTrigger' method of the nodes.
     */
  }, {
    key: "triggerInput",
    value: function triggerInput(name, value) {
      var nodes = this.findNodesByTitle(name);
      for (var i = 0; i < nodes.length; ++i) {
        nodes[i].onTrigger(value);
      }
    }

    /**
     * Sets a callback function on nodes with a specific title by invoking their 'setTrigger' method.
     * // TODO check this, investigate, who calls setCallback, setTrigger, onTrigger ?
     * @param {string} name - The title of the nodes to set the callback function on.
     * @param {Function} func - The callback function to be set on the nodes.
     */
  }, {
    key: "setCallback",
    value: function setCallback(name, func) {
      var nodes = this.findNodesByTitle(name);
      for (var i = 0; i < nodes.length; ++i) {
        nodes[i].setTrigger(func);
      }
    }

    /**
     * Executes actions before a change with the provided information detail.
     * Calls the 'onBeforeChange' function on the class instance and sends the action to connected GraphCanvas instances.
     * @param {object} info - The information detail about the change.
     */
  }, {
    key: "beforeChange",
    value: function beforeChange(info) {
      this.processCallbackHandlers("onBeforeChange", {
        def_cb: this.onBeforeChange
      }, this, info);
      this.sendActionToCanvas("onBeforeChange", this);
    }

    /**
     * Executes actions after a change with the provided information detail.
     * Calls the 'onAfterChange' function on the class instance and sends the action to connected GraphCanvas instances.
     * @param {object} info - The information detail about the change.
     */
  }, {
    key: "afterChange",
    value: function afterChange(info) {
      this.processCallbackHandlers("onAfterChange", {
        def_cb: this.onAfterChange
      }, this, info);
      this.sendActionToCanvas("onAfterChange", this);
    }

    /**
     * Handles changes in node connections and triggers related actions.
     * Updates the execution order, calls the 'onConnectionChange' function on the class instance and connected GraphCanvas instances, and increments the version.
     * @param {object} node - The node where the connection change occurred.
     * @param {object} link_info - Information about the changed connection.
     */
  }, {
    key: "connectionChange",
    value: function connectionChange(node) {
      this.updateExecutionOrder();
      this.processCallbackHandlers("onConnectionChange", {
        def_cb: this.onConnectionChange
      }, node);
      this.onGraphChanged({
        action: "connectionChange",
        doSave: false
      });
      this.sendActionToCanvas("onConnectionChange");
    }

    /**
     * returns if the graph is in live mode
     * @method isLive
     */
  }, {
    key: "isLive",
    value: function isLive() {
      if (!this.list_of_graphcanvas) {
        return false;
      }
      for (var i = 0; i < this.list_of_graphcanvas.length; ++i) {
        var c = this.list_of_graphcanvas[i];
        if (c.live_mode) {
          return true;
        }
      }
      return false;
    }

    /**
     * clears the triggered slot animation in all links (stop visual animation)
     * @method clearTriggeredSlots
     */
  }, {
    key: "clearTriggeredSlots",
    value: function clearTriggeredSlots() {
      for (var i in this.links) {
        var _link_info;
        var link_info = this.links[i];
        if (!link_info) {
          continue;
        }
        (_link_info = link_info)._last_time && (_link_info._last_time = 0);
      }
    }

    /**
     * Indicates a visual change in the graph (not the structure) and triggers related actions.
     * Logs a message if in debug mode, sends a 'setDirty' action with parameters to connected GraphCanvas instances, and calls the 'on_change' function on the class instance.
     * @method change
     */
  }, {
    key: "change",
    value: function change() {
      LiteGraph.log_verbose("lgraph", "change", "Graph visually changed");
      this.sendActionToCanvas("setDirty", [true, true]);
      this.processCallbackHandlers("on_change", {
        // name refactor ? is this being used ?
        def_cb: this.on_change
      }, this);
    }
  }, {
    key: "setDirtyCanvas",
    value: function setDirtyCanvas(fg, bg) {
      this.sendActionToCanvas("setDirty", [fg, bg]);
    }

    /**
     * Destroys a link
     * @method removeLink
     * @param {Number} link_id
     */
  }, {
    key: "removeLink",
    value: function removeLink(link_id) {
      var link = this.links[link_id];
      if (!link) {
        return;
      }
      var node = this.getNodeById(link.target_id);
      if (node) {
        this.beforeChange();
        node.disconnectInput(link.target_slot); /* , optsIn */
        this.afterChange();
      }
    }

    /**
     * Creates a Object containing all the info about this graph, it can be serialized
     * @method serialize
     * @return {Object} value of the node
     */
  }, {
    key: "serialize",
    value: function serialize() {
      var nodesInfo = this._nodes.map(function (node) {
        return node.serialize();
      });
      // TODO ensure and remove
      // var nodesInfo = [];
      // for (var i = 0, l = this._nodes.length; i < l; ++i) {
      //     nodesInfo.push(this._nodes[i].serialize());
      // }

      // pack link info into a non-verbose format
      var links = [];
      for (var i in this.links) {
        // links is an OBJECT
        var link = this.links[i];
        if (!link.serialize) {
          // weird bug I havent solved yet
          LiteGraph.log_warn("lgraph", "serialize", "weird LLink bug, link info is not a LLink but a regular object");
          var link2 = new LLink();
          for (var j in link) {
            link2[j] = link[j];
          }
          this.links[i] = link2;
          link = link2;
        }
        links.push(link.serialize());
      }
      var groupsInfo = this._groups.map(function (group) {
        return group.serialize();
      });
      // TODO ensure and remove
      // var groupsInfo = [];
      // for (var i = 0; i < this._groups.length; ++i) {
      //     groupsInfo.push(this._groups[i].serialize());
      // }

      var data = {
        last_node_id: this.last_node_id,
        last_link_id: this.last_link_id,
        nodes: nodesInfo,
        links: links,
        groups: groupsInfo,
        config: this.config,
        extra: this.extra,
        version: LiteGraph.VERSION
      };
      this.processCallbackHandlers("onSerialize", {
        def_cb: this.onSerialize
      }, data);
      LiteGraph.log_verbose("lgraph", "serialize", data);
      return data;
    }

    /**
     * Configure a graph from a JSON string
     * @method configure
     * @param {String} str configure a graph from a JSON string
     * @param {Boolean} returns if there was any error parsing
     */
  }, {
    key: "configure",
    value: function configure(data, keep_old) {
      var _this2 = this,
        _data$extra;
      if (!data) {
        return;
      }
      if (!keep_old) {
        this.clear();
      }
      var nodes = data.nodes;

      // decode links info (they are very verbose)
      if (data.links && data.links.constructor === Array) {
        var links = [];
        for (var i = 0; i < data.links.length; ++i) {
          var link_data = data.links[i];
          if (!link_data) {
            // @BUG: "weird bug" originally
            LiteGraph.log_warn("lgraph", "configure", "serialized graph link data contains errors, skipping.", link_data, i, data.links);
            continue;
          }
          var link = new LLink();
          link.configure(link_data);
          links[link.id] = link;
        }
        data.links = links;
      }

      // copy all stored fields
      for (var _i9 in data) {
        if (["nodes", "groups"].includes(_i9)) continue; // exclude "nodes" and "groups" properties from direct copy
        this[_i9] = data[_i9]; // TODO should probably use LiteGraph.cloneObject
      }
      var error = false;

      // create nodes
      this._nodes = [];
      if (nodes) {
        for (var _i10 = 0, l = nodes.length; _i10 < l; ++_i10) {
          var n_info = nodes[_i10]; // stored info
          var node = LiteGraph.createNode(n_info.type, n_info.title);
          if (!node) {
            LiteGraph.log_warn("lgraph", "configure", "Node not found or has errors", n_info.type, n_info);

            // in case of error we create a replacement node to avoid losing info
            node = new LiteGraph.LGraphNode();
            node.last_serialization = n_info;
            node.has_errors = true;
            error = true;
            // continue;
          }
          node.id = n_info.id; // id it or it will create a new id
          this.add(node, true, {
            doProcessChange: false
          }); // add before configure, otherwise configure cannot create links
        }

        // configure nodes afterwards so they can reach each other
        nodes.forEach(function (n_info) {
          var node = _this2.getNodeById(n_info.id);
          node === null || node === void 0 || node.configure(n_info);
        });
      }

      // groups
      this._groups.length = 0;
      if (data.groups) {
        data.groups.forEach(function (groupData) {
          var group = new LiteGraph.LGraphGroup();
          group.configure(groupData);
          _this2.add(group, true, {
            doProcessChange: false
          });
        });
      }
      this.updateExecutionOrder();
      this.extra = (_data$extra = data.extra) !== null && _data$extra !== void 0 ? _data$extra : {};
      this.processCallbackHandlers("onConfigure", {
        def_cb: this.onConfigure
      }, data);

      // TODO implement: when loading (configuring) a whole graph, skip calling graphChanged on every single configure
      if (!data._version) {
        this.onGraphChanged({
          action: "graphConfigure",
          doSave: false
        }); // this._version++;
      } else {
        LiteGraph.log_debug("lgraph", "configure", "skip onGraphChanged when configure passing version too!"); // atlasan DEBUG REMOVE
      }
      this.setDirtyCanvas(true, true);
      return error;
    }

    /**
     * Loads graph data from a given URL or file and configures the graph accordingly.
     * @param {string | File | Blob} url - The URL or file to load the graph data from.
     * @param {Function} callback - An optional callback function to be executed after loading and configuring the graph.
     */
    // @TODO implement Node.JS loading? check string for being a graph
  }, {
    key: "load",
    value: function load(url, callback) {
      var that = this;

      // from file
      if (url.constructor === File || url.constructor === Blob) {
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
          var data = JSON.parse(event.target.result);
          that.configure(data);
          callback === null || callback === void 0 || callback();
        });
        reader.readAsText(url);
        return;
      }

      // is a string, then an URL
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.send(null);
      req.onload = function (_event) {
        if (req.status !== 200) {
          LiteGraph.log_error("Error loading graph:", req.status, req.response);
          return;
        }
        var data = JSON.parse(req.response);
        that.configure(data);
        callback === null || callback === void 0 || callback();
      };
      req.onerror = function (err) {
        LiteGraph.log_error("Error loading graph:", err);
      };
    }

    /**
    * Meant to serve the history-saving mechanism
    * @method onGraphSaved
    * @param {object} optsIn options
    */
  }, {
    key: "onGraphSaved",
    value: function onGraphSaved() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {};
      var opts = Object.assign(optsDef, optsIn);
      LiteGraph.log_debug("onGraphSaved", opts);
      this.savedVersion = this._version;
    }

    /**
    * Meant to serve the history-saving mechanism
    * @method onGraphSaved
    * @param {object} optsIn options
    */
  }, {
    key: "onGraphLoaded",
    value: function onGraphLoaded() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {};
      var opts = Object.assign(optsDef, optsIn);
      LiteGraph.log_debug("onGraphLoaded", opts);
      this.savedVersion = this._version;
    }

    /**
    * Ment to be track down every change annotating the action, the history and prevent-exit mechanism, call to change _version
    * @method onGraphChanged
    * @param {object} optsIn options
    */
  }, {
    key: "onGraphChanged",
    value: function onGraphChanged() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        action: "",
        doSave: true,
        // log action in graph.history
        doSaveGraph: true // save
      };
      var opts = Object.assign(optsDef, optsIn);
      this._version++;
      if (opts.action) {
        LiteGraph.log_debug("Graph change", opts.action);
      } else {
        LiteGraph.log_debug("Graph change, no action", opts);
      }

      // TAG: EXTENSION, COULD extract and MOVE history to feature ?
      if (opts.doSave && LiteGraph.actionHistory_enabled) {
        LiteGraph.log_debug("LG_history", "onGraphChanged SAVE :: " + opts.action); // debug history

        var oHistory = {
          actionName: opts.action
        };
        if (opts.doSaveGraph) {
          // this seems a heavy method, but the alternative is way more complex: every action has to have its contrary
          oHistory = Object.assign(oHistory, {
            graphSave: this.serialize()
          });
        }
        var obH = this.history;

        // check if pointer has gone back: remove newest
        while (obH.actionHistoryPtr < obH.actionHistoryVersions.length - 1) {
          LiteGraph.log_debug("LG_history", "popping: gone back? " + (obH.actionHistoryPtr + " < " + (obH.actionHistoryVersions.length - 1))); // debug history
          obH.actionHistoryVersions.pop();
        }
        // check if maximum saves
        if (obH.actionHistoryVersions.length >= LiteGraph.actionHistoryMaxSave) {
          var olderSave = obH.actionHistoryVersions.shift();
          LiteGraph.log_debug("LG_history", "maximum saves reached: " + obH.actionHistoryVersions.length + ", remove older: " + olderSave); // debug history
          obH.actionHistory[olderSave] = false; // unset
        }

        // update pointer
        obH.actionHistoryPtr = obH.actionHistoryVersions.length;
        obH.actionHistoryVersions.push(obH.actionHistoryPtr);

        // save to pointer
        obH.actionHistory[obH.actionHistoryPtr] = oHistory;
        this.onGraphSaved({
          iVersion: obH.actionHistoryPtr
        });
        LiteGraph.log_debug("LG_history", "saved: " + obH.actionHistoryPtr, oHistory.actionName); // debug history
      }
    }

    /**
    * Go back in action history
    * @method actionHistoryBack
    * @param {object} optsIn options
    */
  }, {
    key: "actionHistoryBack",
    value: function actionHistoryBack() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        steps: 1
      };
      var opts = Object.assign(optsDef, optsIn);
      var obH = this.history;
      if (obH.actionHistoryPtr != undefined && obH.actionHistoryPtr >= 0) {
        obH.actionHistoryPtr -= opts.steps;
        LiteGraph.log_debug("LG_history", "step back: " + obH.actionHistoryPtr); // debug history
        if (!this.actionHistoryLoad({
          iVersion: obH.actionHistoryPtr
        })) {
          LiteGraph.log_warn("LG_history", "Load failed, restore pointer? " + obH.actionHistoryPtr); // debug history
          // history not found?
          obH.actionHistoryPtr += opts.steps;
          return false;
        } else {
          LiteGraph.log_debug("LG_history", "loaded back: " + obH.actionHistoryPtr); // debug history
          LiteGraph.log_debug(this.history);
          return true;
        }
      } else {
        LiteGraph.log_debug("LG_history", "is already at older state");
        return false;
      }
    }

    /**
    * Go forward in action history
    * @method actionHistoryForward
    * @param {object} optsIn options
    */
  }, {
    key: "actionHistoryForward",
    value: function actionHistoryForward() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        steps: 1
      };
      var opts = Object.assign(optsDef, optsIn);
      var obH = this.history;
      if (obH.actionHistoryPtr < obH.actionHistoryVersions.length) {
        obH.actionHistoryPtr += opts.steps;
        LiteGraph.log_debug("LG_history", "step forward: " + obH.actionHistoryPtr); // debug history
        if (!this.actionHistoryLoad({
          iVersion: obH.actionHistoryPtr
        })) {
          LiteGraph.log_warn("LG_history", "Load failed, restore pointer? " + obH.actionHistoryPtr); // debug history
          // history not found?
          obH.actionHistoryPtr -= opts.steps;
          return false;
        } else {
          LiteGraph.log_debug("LG_history", "loaded forward: " + obH.actionHistoryPtr); // debug history
          return true;
        }
      } else {
        LiteGraph.log_debug("LG_history", "is already at newer state");
        return false;
      }
    }

    /**
    * Load from action history
    * @method actionHistoryLoad
    * @param {object} optsIn options
    */
  }, {
    key: "actionHistoryLoad",
    value: function actionHistoryLoad() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        iVersion: false,
        backStep: false
      };
      var opts = Object.assign(optsDef, optsIn);
      var obH = this.history;
      if (obH.actionHistory[opts.iVersion] && obH.actionHistory[opts.iVersion].graphSave) {
        var tmpHistory = JSON.stringify(this.history);
        this.configure(obH.actionHistory[opts.iVersion].graphSave);
        this.history = JSON.parse(tmpHistory);
        LiteGraph.log_debug("history loaded: " + opts.iVersion, obH.actionHistory[opts.iVersion].actionName); // debug history
        this.onGraphLoaded({
          iVersion: opts.iVersion
        });
        return true;
      } else {
        return false;
      }
    }

    /**
     * connect TWO nodes looking for matching types
     * @method autoConnectNodes
     **/
  }, {
    key: "autoConnectNodes",
    value: function autoConnectNodes(node_from, node_to) {
      var optsIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var optsDef = {
        keep_alredy_connected: true
      };
      var opts = Object.assign(optsDef, optsIn);
      if (!node_from || !node_to || !node_from.outputs || !node_from.outputs.length || !node_to.inputs || !node_to.inputs.length) {
        return false;
      }
      // cycle outputs
      // for(let iO in node_from.outputs){ // WARNING THIS GETS INDEXES AS STRING : ARE THOSE SAVED AS STRING AND IF SO WHY?
      for (var iO = 0; iO < node_from.outputs.length; iO++) {
        // TODO: Check if outputs are keyed by string and when
        var output = node_from.outputs[iO];
        if (!opts.keep_alredy_connected) {
          if (output.links !== null && output.links.length > 0) {
            continue;
          }
        }
        node_from.connectByType(iO, node_to, output.type, {
          preferFreeSlot: true
        });
      }
    }
  }, {
    key: "updateNodeLinks",
    value: function updateNodeLinks(node, is_input, slots_from, slots_to) {
      LiteGraph.log_debug("lgraph", "updateNodeLinks", "looking for links", node.id, is_input, slots_from, slots_to);

      // cycle links
      for (var i in this.links) {
        var link_info = this.links[i];
        if (link_info === null || !link_info) {
          continue;
        }
        if (is_input) {
          if (link_info.target_id == node.id) {
            // found link with target the node
            if (link_info.target_slot == slots_from) {
              // found link with target the slot
              LiteGraph.log_debug("lgraph", "updateNodeLinks", "updating link input", this.links[i], node, is_input, slots_from, slots_to);
              this.links[i].target_slot = slots_to;
            }
          }
        } else {
          if (link_info.origin_id == node.id) {
            // found link with origin the node
            if (link_info.origin_slot == slots_from) {
              // found link with origin the slot
              LiteGraph.log_debug("lgraph", "updateNodeLinks", "updating link output", this.links[i], node, is_input, slots_from, slots_to);
              this.links[i].origin_slot = slots_to;
            }
          }
        }
      }
    }
  }]);
}();
// default supported types
_defineProperty(LGraph, "supported_types", ["number", "string", "boolean"]);
_defineProperty(LGraph, "STATUS_STOPPED", 1);
_defineProperty(LGraph, "STATUS_RUNNING", 2);

/*
title: string
pos: [x,y]
size: [x,y]
size_basic: [x,y] minimum size for the node beforeRecalculation

input|output: every connection
    +  { name:string, type:string, pos: [x,y]=Optional, direction: "input"|"output", links: Array });

general properties:
    + clip_area: if you render outside the node, it will be clipped
    + unsafe_execution: not allowed for safe execution
    + skip_repeated_outputs: when adding new outputs, it wont show if there is one already connected
    + resizable: if set to false it wont be resizable with the mouse
    + horizontal: slots are distributed horizontally
    + widgets_start_y: widgets start at y distance from the top of the node

flags object:
    + collapsed: if it is collapsed

supported callbacks:
    + onAdded: when added to graph (warning: this is called BEFORE the node is configured when loading)
    + onRemoved: when removed from graph
    + onStart:	when the graph starts playing
    + onStop:	when the graph stops playing
    + onDrawForeground: render the inside widgets inside the node
    + onDrawBackground: render the background area inside the node (only in edit mode)
    + onMouseDown
    + onMouseMove
    + onMouseUp
    + onMouseEnter
    + onMouseLeave
    + onExecute: execute the node
    + onPropertyChanged: when a property is changed in the panel (return true to skip default behaviour)
    + onGetInputs: returns an array of possible inputs
    + onGetOutputs: returns an array of possible outputs
    + onBounding: in case this node has a bigger bounding than the node itself (the callback receives the bounding as [x,y,w,h])
    + onDblClick: double clicked in the node
    + onInputDblClick: input slot double clicked (can be used to automatically create a node connected)
    + onOutputDblClick: output slot double clicked (can be used to automatically create a node connected)
    + onConfigure: called after the node has been configured
    + onSerialize: to add extra info when serializing (the callback receives the object that should be filled with the data)
    + onSelected
    + onDeselected
    + onDropItem : DOM item dropped over the node
    + onDropFile : file dropped over the node
    + onConnectInput : if returns false the incoming connection will be canceled
    + onConnectionsChange : a connection changed (new one or removed) (LiteGraph.INPUT or LiteGraph.OUTPUT, slot, true if connected, link_info, input_info )
    + onAction: action slot triggered
    + getExtraMenuOptions: to add option to context menu
*/

/**
 * Base Class for all the node type classes
 * @class LGraphNode
 * @param {String} name a name for the node
 */

var LGraphNode = /*#__PURE__*/function () {
  // TODO check when is this called: a default node from the ones included will have his constructor
  // should every node extend this istead of 
  function LGraphNode() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    _classCallCheck(this, LGraphNode);
    _defineProperty(this, "cb_handler", false);
    // a custom registered node will have his custom constructor
    LiteGraph.log_verbose("lgraphNODE", "ORIGINAL constructor", this, title);
    this.title = title;
    this.post_constructor.apply(this, arguments);
  }
  return _createClass(LGraphNode, [{
    key: "post_constructor",
    value: function post_constructor() {
      var _this$size, _this$size_basic, _this$graph, _this$_pos, _this$type, _this$inputs, _this$outputs, _this$connections, _this$properties, _this$properties_info, _this$flags;
      (_this$size = this.size) !== null && _this$size !== void 0 ? _this$size : this.size = LiteGraph.NODE_MIN_SIZE; //this.size ??= [LiteGraph.NODE_WIDTH, 60];
      (_this$size_basic = this.size_basic) !== null && _this$size_basic !== void 0 ? _this$size_basic : this.size_basic = this.size;
      (_this$graph = this.graph) !== null && _this$graph !== void 0 ? _this$graph : this.graph = null;
      (_this$_pos = this._pos) !== null && _this$_pos !== void 0 ? _this$_pos : this._pos = new Float32Array(10, 10);
      if (LiteGraph.use_uuids) {
        var _this$id;
        (_this$id = this.id) !== null && _this$id !== void 0 ? _this$id : this.id = LiteGraph.uuidv4();
      } else {
        var _this$id2;
        (_this$id2 = this.id) !== null && _this$id2 !== void 0 ? _this$id2 : this.id = -1; // not know till not added
      }
      (_this$type = this.type) !== null && _this$type !== void 0 ? _this$type : this.type = null;

      // inputs available: array of inputs
      (_this$inputs = this.inputs) !== null && _this$inputs !== void 0 ? _this$inputs : this.inputs = [];
      (_this$outputs = this.outputs) !== null && _this$outputs !== void 0 ? _this$outputs : this.outputs = [];
      (_this$connections = this.connections) !== null && _this$connections !== void 0 ? _this$connections : this.connections = [];

      // local data
      (_this$properties = this.properties) !== null && _this$properties !== void 0 ? _this$properties : this.properties = {}; // for the values
      (_this$properties_info = this.properties_info) !== null && _this$properties_info !== void 0 ? _this$properties_info : this.properties_info = []; // for the info

      (_this$flags = this.flags) !== null && _this$flags !== void 0 ? _this$flags : this.flags = {};

      // DBG EXCESS LiteGraph.log_verbose("lgraphNODE", "postconstruct",this,...arguments);
      // register CallbackHandler methods on this
      this.callbackhandler_setup();
      // this cbhandler is probably not registered by a node that does not inherit default contructor, if that has not called callbackhandler_setup yet
      this.processCallbackHandlers("onPostConstruct", {
        def_cb: this.onPostConstruct
      });
      LiteGraph.processCallbackHandlers("on_lgraphnode_construct", {
        def_cb: LiteGraph.on_lgraphnode_construct
      }, this);
    }
  }, {
    key: "callbackhandler_setup",
    value: function callbackhandler_setup() {
      this.cb_handler = new CallbackHandler(this);
      // register CallbackHandler methods on this // Should move as class standard class methods?
      // this.registerCallbackHandler = function(){ return this.cb_handler.registerCallbackHandler(...arguments); };
      // this.unregisterCallbackHandler = function(){ return this.cb_handler.unregisterCallbackHandler(...arguments); };
      // this.processCallbackHandlers = function(){ return this.cb_handler.processCallbackHandlers(...arguments); };
    }
  }, {
    key: "registerCallbackHandler",
    value: function registerCallbackHandler() {
      var _this$cb_handler;
      if (!this.cb_handler) this.callbackhandler_setup(); // needed if constructor calls callback events
      return (_this$cb_handler = this.cb_handler).registerCallbackHandler.apply(_this$cb_handler, arguments);
    }
  }, {
    key: "unregisterCallbackHandler",
    value: function unregisterCallbackHandler() {
      var _this$cb_handler2;
      if (!this.cb_handler) this.callbackhandler_setup(); // needed if constructor calls callback events
      return (_this$cb_handler2 = this.cb_handler).unregisterCallbackHandler.apply(_this$cb_handler2, arguments);
    }
  }, {
    key: "processCallbackHandlers",
    value: function processCallbackHandlers() {
      var _this$cb_handler3;
      if (!this.cb_handler) this.callbackhandler_setup(); // needed if constructor calls callback events
      return (_this$cb_handler3 = this.cb_handler).processCallbackHandlers.apply(_this$cb_handler3, arguments);
    }
  }, {
    key: "pos",
    get: function get() {
      return this._pos;
    }

    /**
     * configure a node from an object containing the serialized info
     * @method configure
     */,
    set: function set(v) {
      var _this$_pos2;
      if (!v || v.length < 2) {
        return;
      }
      (_this$_pos2 = this._pos) !== null && _this$_pos2 !== void 0 ? _this$_pos2 : this._pos = new Float32Array(10, 10);
      this._pos[0] = v[0];
      this._pos[1] = v[1];
    }
  }, {
    key: "configure",
    value: function configure(info) {
      var _this = this,
        _this$inputs2,
        _this$outputs2,
        _this$graph3;
      LiteGraph.log_debug("lgraphnode", "configure", this, info);
      if (this.graph) this.graph.onGraphChanged({
        action: "nodeBeforeConfigure",
        doSave: false
      });
      Object.entries(info).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (key === "properties") {
          for (var k in value) {
            _this.properties[k] = value[k];
            _this.processCallbackHandlers("onPropertyChanged", {
              def_cb: _this.onPropertyChanged
            }, k, value[k]);
          }
          return;
        }
        if (LiteGraph.reprocess_slot_while_node_configure) {
          // process inputs and outputs, checking for name to handle node changes
          if (key === "inputs" || key === "outputs") {
            LiteGraph.log_debug("lgraphnode", "syncObjectByProperty", key, info[key], _this[key]);
            var resSync = _this.syncObjectByProperty(info[key], _this[key], "name");
            _this[key] = resSync.ob_dest;
            if (resSync.keys_remap && Object.keys(resSync.keys_remap).length) {
              if (_this.graph) {
                for (var slotFrom in resSync.keys_remap) {
                  var slotTo = resSync.keys_remap[slotFrom];
                  _this.graph.updateNodeLinks(_this, key === "inputs", slotFrom, slotTo);
                }
              }
            }
            return;
          }
        }
        if (value === null) {
          // CHECK THIS should copy null value key? probably should
          LiteGraph.log_verbose("lgraphnode", "configure", "should copy null value key? probably should", key, _this[key]);
          return;
        } else if (_typeof(value) === "object") {
          if (_this[key] && typeof _this[key].configure == "function") {
            _this[key].configure(value);
            LiteGraph.log_verbose("lgraphnode", "configure", "use var internal configure method", key, value);
          } else {
            LiteGraph.log_verbose("lgraphnode", "configure", "set ob var key", key, value, _this[key]);
            _this[key] = LiteGraph.cloneObject(value, _this[key]);
          }
        } else {
          LiteGraph.log_verbose("lgraphnode", "configure", "set node var", key, value);
          _this[key] = value;
        }
      });
      if (!info.title) {
        this.title = this.constructor.title;
      }
      (_this$inputs2 = this.inputs) === null || _this$inputs2 === void 0 || _this$inputs2.forEach(function (input, i) {
        if (!input.link) return;
        var link_info = _this.graph ? _this.graph.links[input.link] : null;
        _this.processCallbackHandlers("onConnectionsChange", {
          def_cb: _this.onConnectionsChange
        }, LiteGraph.INPUT, i, true, link_info, input);
        _this.processCallbackHandlers("onInputAdded", {
          def_cb: _this.onInputAdded
        }, input);
      });
      (_this$outputs2 = this.outputs) === null || _this$outputs2 === void 0 || _this$outputs2.forEach(function (output, i) {
        if (!output.links) return;
        output.links.forEach(function (link, i) {
          var _this$graph2;
          var link_info = ((_this$graph2 = _this.graph) === null || _this$graph2 === void 0 ? void 0 : _this$graph2.links[link]) || null; // fixed
          LiteGraph.log_verbose("lgraphnode", "configure", "cycle outputlinks", link, i, link_info);
          _this.processCallbackHandlers("onConnectionsChange", {
            def_cb: _this.onConnectionsChange
          }, LiteGraph.OUTPUT, i, true, link_info, output);
        });
        _this.processCallbackHandlers("onOutputAdded", {
          def_cb: _this.onOutputAdded
        }, output);
      });
      if (this.widgets) {
        var _info$widgets_values;
        this.widgets.forEach(function (w) {
          if (!w) {
            return;
          }
          if (w.options && w.options.property && _this.properties[w.options.property] !== undefined) {
            w.value = JSON.parse(JSON.stringify(_this.properties[w.options.property]));
          }
        });
        (_info$widgets_values = info.widgets_values) === null || _info$widgets_values === void 0 || _info$widgets_values.forEach(function (value, i) {
          if (_this.widgets[i]) {
            _this.widgets[i].value = value;
          }
        });
      }
      this.processCallbackHandlers("onConfigure", {
        def_cb: this.onConfigure
      }, info);
      (_this$graph3 = this.graph) === null || _this$graph3 === void 0 || _this$graph3.onGraphChanged({
        action: "nodeConfigure",
        doSave: false
      });
      LiteGraph.log_debug("lgraphnode", "configure complete", this);
    }

    /**
     * serialize the content
     * @method serialize
     */
  }, {
    key: "serialize",
    value: function serialize() {
      var _o$type;
      // create serialization object
      var o = {
        id: this.id,
        type: this.type,
        pos: this.pos,
        size: this.size,
        flags: LiteGraph.cloneObject(this.flags),
        order: this.order,
        mode: this.mode
      };

      // special case for when there were errors
      if (this.constructor === LGraphNode && this.last_serialization) {
        return this.last_serialization;
      }
      if (this.inputs) {
        o.inputs = LiteGraph.cloneObject(this.inputs);
      }
      if (this.outputs) {
        // clear outputs last data (because data in connections is never serialized but stored inside the outputs info)
        this.outputs.forEach(function (output) {
          delete output._data;
        });
        o.outputs = LiteGraph.cloneObject(this.outputs);
      }
      if (this.title && this.title != this.constructor.title) {
        o.title = this.title;
      }
      if (this.properties) {
        o.properties = LiteGraph.cloneObject(this.properties);
      }
      if (this.widgets && this.serialize_widgets) {
        o.widgets_values = this.widgets.map(function (widget) {
          var _widget$value;
          return (_widget$value = widget === null || widget === void 0 ? void 0 : widget.value) !== null && _widget$value !== void 0 ? _widget$value : null;
        });
      }
      (_o$type = o.type) !== null && _o$type !== void 0 ? _o$type : o.type = this.constructor.type;
      if (this.color) {
        o.color = this.color;
      }
      if (this.bgcolor) {
        o.bgcolor = this.bgcolor;
      }
      if (this.boxcolor) {
        o.boxcolor = this.boxcolor;
      }
      if (this.shape) {
        o.shape = this.shape;
      }
      var r = this.processCallbackHandlers("onSerialize", {
        def_cb: this.onSerialize
      }, o);
      // DBG EXCESS LiteGraph.log_verbose("lgraphnode", "serialize", "onSerialize", o, r);

      if (r !== null && _typeof(r) == "object" && r.return_value !== null) {
        LiteGraph.log_warn("lgraphnode", "onSerialize shouldnt return anything, data should be stored in the object pass in the first parameter");
      }
      return o;
    }

    /* Creates a clone of this node */
  }, {
    key: "clone",
    value: function clone() {
      var _data$inputs, _data$outputs;
      var node = LiteGraph.createNode(this.type);
      if (!node) {
        return null;
      }

      // we clone it because serialize returns shared containers
      var data = LiteGraph.cloneObject(this.serialize());

      // remove links
      (_data$inputs = data.inputs) === null || _data$inputs === void 0 || _data$inputs.forEach(function (input) {
        input.link = null;
      });
      (_data$outputs = data.outputs) === null || _data$outputs === void 0 || _data$outputs.forEach(function (output) {
        if (output.links) output.links.length = 0;
      });
      delete data["id"];
      if (LiteGraph.use_uuids) {
        data["id"] = LiteGraph.uuidv4();
      }

      // remove links
      node.configure(data);
      return node;
    }

    /**
     * serialize and stringify
     * @method toString
     */
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.serialize());
    }

    // LGraphNode.prototype.deserialize = function(info) {} //this cannot be done from within, must be done in LiteGraph

    /**
     * get the title string
     * @method getTitle
     */
  }, {
    key: "getTitle",
    value: function getTitle() {
      var _this$title;
      return (_this$title = this.title) !== null && _this$title !== void 0 ? _this$title : this.constructor.title;
    }

    /**
     * sets the value of a property
     * @method setProperty
     * @param {String} name
     * @param {*} value
     */
  }, {
    key: "setProperty",
    value: function setProperty(name, value) {
      var _this$widgets;
      this.properties || (this.properties = {});

      // Check if the new value is the same as the current value
      if (value === this.properties[name]) {
        return;
      }
      var prevValue = this.properties[name];
      this.properties[name] = value;

      // Call onPropertyChanged and revert the change if needed
      var r = this.processCallbackHandlers("onPropertyChanged", {
        def_cb: this.onPropertyChanged
      }, name, value, prevValue);
      if (r === false || r !== null && _typeof(r) == "object" && r.return_value === false) {
        this.properties[name] = prevValue;
        LiteGraph.log_debug("lgraphnode", "setProperty", "prevent property set by cbHandler", name, value, prevValue, r);
      }

      // Update the widget value associated with the property name
      var widgetToUpdate = (_this$widgets = this.widgets) === null || _this$widgets === void 0 ? void 0 : _this$widgets.find(function (widget) {
        var _widget$options;
        return widget && ((_widget$options = widget.options) === null || _widget$options === void 0 ? void 0 : _widget$options.property) === name;
      });
      if (widgetToUpdate) {
        widgetToUpdate.value = value;
      }
    }

    // Execution *************************
    /**
     * sets the output data
     * @method setOutputData
     * @param {number|string} slot
     * @param {*} data
     */
  }, {
    key: "setOutputData",
    value: function setOutputData(slot, data) {
      var _slot,
        _this$outputs$slot$li,
        _this2 = this;
      if (!this.outputs) {
        return;
      }
      if (((_slot = slot) === null || _slot === void 0 ? void 0 : _slot.constructor) === String) {
        // not a niche case: consider that removable and optional slots will move indexes! just pass int value if preferred
        slot = this.findOutputSlot(slot);
      }
      if (slot == -1 || slot >= this.outputs.length) {
        return;
      }
      slot = this.getOutputSlot(slot);
      var output_info = this.outputs[slot];
      if (!output_info) {
        return;
      }

      // store data in the output itself in case we want to debug
      output_info._data = data;

      // if there are connections, pass the data to the connections
      (_this$outputs$slot$li = this.outputs[slot].links) === null || _this$outputs$slot$li === void 0 || _this$outputs$slot$li.forEach(function (link_id) {
        var link = _this2.graph.links[link_id];
        if (link) {
          link.data = data;
        }
      });
    }

    /**
     * sets the output data type, useful when you want to be able to overwrite the data type
     * @method setOutputDataType
     * @param {number|string} slot
     * @param {String} datatype
     */
  }, {
    key: "setOutputDataType",
    value: function setOutputDataType(slot, type) {
      var _slot2,
        _this$outputs$slot,
        _this3 = this;
      if (!this.outputs) {
        return;
      }
      if (((_slot2 = slot) === null || _slot2 === void 0 ? void 0 : _slot2.constructor) === String) {
        // not a niche case: consider that removable and optional slots will move indexes! just pass int value if preferred
        slot = this.findOutputSlot(slot);
      }
      if (slot == -1 || slot >= this.outputs.length) {
        return;
      }
      var output_info = this.outputs[slot];
      if (!output_info) {
        return;
      }
      // store data in the output itself in case we want to debug
      output_info.type = type;

      // if there are connections, pass the data to the connections
      (_this$outputs$slot = this.outputs[slot]) === null || _this$outputs$slot === void 0 || (_this$outputs$slot = _this$outputs$slot.links) === null || _this$outputs$slot === void 0 || _this$outputs$slot.forEach(function (link_id) {
        if (_this3.graph.links[link_id]) {
          _this3.graph.links[link_id].type = type;
        }
      });
    }

    /**
     * Retrieves the input data (data traveling through the connection) from one slot
     * @method getInputData
     * @param {number|string} slot
     * @param {boolean} force_update if set to true it will force the connected node of this slot to output data into this link
     * @return {*} data or if it is not connected returns undefined
     */
  }, {
    key: "getInputData",
    value: function getInputData(slot, force_update, refresh_tree) {
      var _slot3, _this$graph4;
      if (!this.inputs) {
        return;
      } // undefined;

      if (((_slot3 = slot) === null || _slot3 === void 0 ? void 0 : _slot3.constructor) === String) {
        // not a niche case: consider that removable and optional slots will move indexes! just pass int value if preferred
        slot = this.findInputSlot(slot);
      }
      if (slot == -1 || slot >= this.inputs.length) {
        return;
      }
      if (this.inputs[slot].type == LiteGraph.ACTION) {
        // DBG EXCESS LiteGraph.log_verbose("lgraphnode", "getInputData", "skip getting data for event type", this.inputs[slot]);
        return;
      }
      var ob_input = this.inputs[slot];
      if (typeof ob_input.hard_coded_value != "undefined") {
        console.debug("HARD_CODED_INPUT", this, ob_input, ob_input.hard_coded_value);
        return ob_input.hard_coded_value;
      }
      var link_id = ob_input.link;
      var link = (_this$graph4 = this.graph) === null || _this$graph4 === void 0 ? void 0 : _this$graph4.links[link_id];
      if (!link) {
        // DBG EXCESS LiteGraph.log_verbose("lgraphnode", "getInputData", "No link", link_id, slot, this);
        return null;
      }
      if (!force_update) {
        return link.data;
      }

      // forcing origin data update
      // will execute the node (eventually after updating ancestors)

      var node = this.graph.getNodeById(link.origin_id);
      if (!node) {
        LiteGraph.log_debug("lgraphnode", "getInputData", "No origin node, return the link data", link.data, link, slot, this);
        return link.data;
      }

      // TODO Consider moving this out of here and use a single ancestorsCalculation (for each event?)
      // CHECK THIS : used in logic/while , is ATM necessary? does this solve reading self value while executing loops ?
      if (refresh_tree) {
        LiteGraph.log_warn("CHECK THIS", "lgraphnode", "getInputData", "Refreshing ancestors tree by ForcedUpdateSlotData", link, slot, this);
        LiteGraph.log_debug("lgraphnode", "getInputData", "Refreshing ancestors tree by ForcedUpdateSlotData", link, slot, this);
        var uIdRand = this.id + "_getInputData_forced_" + LiteGraph.uuidv4();
        var optsAncestors = {
          action: uIdRand,
          options: {
            action_call: uIdRand
          }
        };
        this.refreshAncestors(optsAncestors);
      }
      if (node.updateOutputData) {
        // tag: node event entrypoint
        node.updateOutputData(link.origin_slot);
      } else {
        node.doExecute();
      }
      return link.data;
    }

    /**
     * Retrieves the input data type (in case this supports multiple input types)
     * @method getInputDataType
     * @param {number|string} slot
     * @return {String} datatype in string format
     */
  }, {
    key: "getInputDataType",
    value: function getInputDataType(slot) {
      var _slot4;
      if (!this.inputs) {
        return null;
      } // undefined;
      if (((_slot4 = slot) === null || _slot4 === void 0 ? void 0 : _slot4.constructor) === String) {
        // not a niche case: consider that removable and optional slots will move indexes! just pass int value if preferred
        slot = this.findInputSlot(slot);
      }
      if (slot >= this.inputs.length || this.inputs[slot].link == null) {
        return null;
      }
      if (this.inputs[slot].type == LiteGraph.ACTION) {
        // DBG EXCESS LiteGraph.log_verbose("lgraphnode", "getInputDataType", "skip getting data for event type", this.inputs[slot]);
        return;
      }
      var link_id = this.inputs[slot].link;
      var link = this.graph.links[link_id];
      if (!link) {
        // bug: weird case but it happens sometimes
        LiteGraph.log_warn("lgraphnode", "getInputDataType", "No link", link_id, slot, this);
        return null;
      }
      var node = this.graph.getNodeById(link.origin_id);
      if (!node) {
        return link.type;
      }
      var output_info = node.outputs[link.origin_slot];
      if (output_info) {
        return output_info.type;
      }
      return null;
    }

    /**
     * Retrieves the input data from one slot using its name instead of slot number
     * OLD: IMPLEMENTED in getInputData,use that instead
     * @method getInputDataByName
     * @param {String} slot_name
     * @param {boolean} force_update if set to true it will force the connected node of this slot to output data into this link
     * @return {*} data or if it is not connected returns null
     */
  }, {
    key: "getInputDataByName",
    value: function getInputDataByName(slot_name, force_update) {
      var slot = this.findInputSlot(slot_name);
      if (slot == -1) {
        return null;
      }
      return this.getInputData(slot, force_update);
    }

    /**
     * tells you if there is a connection in one input slot
     * @method isInputConnected
     * @param {number} slot
     * @return {boolean}
     */
  }, {
    key: "isInputConnected",
    value: function isInputConnected(slot) {
      if (!this.inputs) {
        return false;
      }
      return slot < this.inputs.length && this.inputs[slot].link != null;
    }

    /**
     * tells you info about an input connection (which node, type, etc)
     * @method getInputInfo
     * @param {number} slot
     * @return {Object} object or null { link: id, name: string, type: string or 0 }
     */
  }, {
    key: "getInputInfo",
    value: function getInputInfo(slot) {
      if (!this.inputs) {
        return null;
      }
      if (slot < this.inputs.length) {
        return this.inputs[slot];
      }
      return null;
    }

    /**
     * Returns the link info in the connection of an input slot
     * @method getInputLink
     * @param {number} slot
     * @return {LiteGraph.LLink} object or null
     */
  }, {
    key: "getInputLink",
    value: function getInputLink(slot) {
      if (!this.inputs) {
        return null;
      }
      if (slot < this.inputs.length) {
        var slot_info = this.inputs[slot];
        return this.graph.links[slot_info.link];
      }
      return null;
    }

    /**
     * returns the node connected in the input slot
     * @method getInputNode
     * @param {number} slot
     * @return {LGraphNode} node or null
     */
  }, {
    key: "getInputNode",
    value: function getInputNode(slot) {
      if (!this.inputs) {
        return null;
      }
      if (slot >= this.inputs.length) {
        return null;
      }
      var input = this.inputs[slot];
      if (!input || input.link === null) {
        return null;
      }
      var link_info = this.graph.links[input.link];
      if (!link_info) {
        return null;
      }
      return this.graph.getNodeById(link_info.origin_id);
    }

    /**
     * returns the value of an input with this name, otherwise checks if there is a property with that name
     * @method getInputOrProperty
     * @param {string} name
     * @return {*} value
     */
  }, {
    key: "getInputOrProperty",
    value: function getInputOrProperty(name) {
      if (this.inputs) {
        for (var i = 0, l = this.inputs.length; i < l; ++i) {
          var input_info = this.inputs[i];
          if (name == input_info.name && input_info.link != null) {
            var link = this.graph.links[input_info.link];
            if (link) {
              return link.data;
            }
          }
        }
      }
      return this.properties ? this.properties[name] : null;
    }

    /**
     * tells you the last output data that went in that slot
     * @method getOutputData
     * @param {number} slot
     * @return {Object}  object or null
     */
  }, {
    key: "getOutputData",
    value: function getOutputData(slot) {
      if (!this.outputs) {
        return null;
      }
      if (slot >= this.outputs.length) {
        return null;
      }
      var info = this.outputs[slot];
      return info._data;
    }

    /**
     * tells you info about an output connection (which node, type, etc)
     * @method getOutputInfo
     * @param {number} slot
     * @return {Object}  object or null { name: string, type: string, links: [ ids of links in number ] }
     */
  }, {
    key: "getOutputInfo",
    value: function getOutputInfo(slot) {
      if (!this.outputs) {
        return null;
      }
      if (slot < this.outputs.length) {
        return this.outputs[slot];
      }
      return null;
    }

    /**
     * tells you if there is a connection in one output slot
     * @method isOutputConnected
     * @param {number} slot
     * @return {boolean}
     */
  }, {
    key: "isOutputConnected",
    value: function isOutputConnected(slot) {
      if (!this.outputs) {
        return false;
      }
      return slot < this.outputs.length && this.outputs[slot].links && this.outputs[slot].links.length;
    }

    /**
     * tells you if there is any connection in the output slots
     * @method isAnyOutputConnected
     * @return {boolean}
     */
  }, {
    key: "isAnyOutputConnected",
    value: function isAnyOutputConnected() {
      return this.outputs ? this.outputs.some(function (output) {
        return output.links && output.links.length;
      }) : false;
    }

    /**
     * retrieves all the nodes connected to this output slot
     * @method getOutputNodes
     * @param {number} slot
     * @return {array}
     */
  }, {
    key: "getOutputNodes",
    value: function getOutputNodes(slot) {
      var _this4 = this;
      if (!this.outputs || slot >= this.outputs.length) {
        return null;
      }
      var output = this.outputs[slot];
      if (!output.links || output.links.length === 0) {
        return null;
      }
      return output.links.map(function (link_id) {
        return _this4.graph.links[link_id];
      }).filter(function (link) {
        return link;
      }).map(function (link) {
        return _this4.graph.getNodeById(link.target_id);
      }).filter(function (target_node) {
        return target_node;
      });
    }
  }, {
    key: "addOnTriggerInput",
    value: function addOnTriggerInput() {
      var trigS = this.findInputSlot("onTrigger");
      if (trigS == -1) {
        // !trigS ||
        this.addInput("onTrigger", LiteGraph.EVENT, {
          removable: true,
          nameLocked: true
        });
        return this.findInputSlot("onTrigger");
      }
      return trigS;
    }
  }, {
    key: "addOnExecutedOutput",
    value: function addOnExecutedOutput() {
      var trigS = this.findOutputSlot("onExecuted");
      if (trigS == -1) {
        // !trigS ||
        this.addOutput("onExecuted", LiteGraph.ACTION, {
          removable: true,
          nameLocked: true
        });
        return this.findOutputSlot("onExecuted");
      }
      return trigS;
    }
  }, {
    key: "onAfterExecuteNode",
    value: function onAfterExecuteNode(param, options) {
      var trigS = this.findOutputSlot("onExecuted");
      if (trigS != -1) {
        LiteGraph.log_verbose("lgraphnode", "onAfterExecuteNode", this.id + ":" + this.order + " triggering slot onAfterExecute", param, options);
        this.triggerSlot(trigS, param, null, options);
      }
    }
  }, {
    key: "onAfterActionedNode",
    value: function onAfterActionedNode(param, options) {
      var trigS = this.findOutputSlot("onExecuted");
      if (trigS != -1) {
        LiteGraph.log_verbose("lgraphnode", "onAfterActionedNode", this.id + ":" + this.order + " triggering slot onAfterActionedNode", this, trigS, param, options);
        this.triggerSlot(trigS, param, null, options);
      }
    }

    // ComfyUI compatiblity
  }, {
    key: "onResize",
    value: function onResize(size) {
      // empty, will eventually implement
    }
  }, {
    key: "changeMode",
    value: function changeMode(modeTo) {
      switch (modeTo) {
        case LiteGraph.ON_TRIGGER:
          this.addOnTriggerInput();
          this.addOnExecutedOutput();
          break;
        case LiteGraph.ON_EVENT:
          // this.addOnExecutedOutput();
          break;
        case LiteGraph.NEVER:
          break;
        case LiteGraph.ALWAYS:
          break;
        case LiteGraph.ON_REQUEST:
          break;
        default:
          return false;
      }
      this.mode = modeTo;
      return true;
    }

    /**
     * Triggers the execution of actions that were deferred when the action was triggered
     * @method executePendingActions
     */
  }, {
    key: "executePendingActions",
    value: function executePendingActions() {
      var _this5 = this;
      if (!this._waiting_actions || !this._waiting_actions.length) return;
      this._waiting_actions.forEach(function (p) {
        _this5.onAction(p[0], p[1], p[2], p[3], p[4]);
      });
      this._waiting_actions.length = 0;
    }

    /**
     * Triggers the node code execution, place a boolean/counter to mark the node as being executed
     * @method doExecute
     * @param {*} param
     * @param {*} options
     */
  }, {
    key: "doExecute",
    value: function doExecute(param) {
      var _options$action_call, _this$graph5, _this$graph6;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.mode === LiteGraph.NEVER) {
        LiteGraph.log_verbose("lgraphNODE", "doExecute", "prevent execution in mode NEVER", this.id);
        return;
      }

      // enable this to give the event an ID
      (_options$action_call = options.action_call) !== null && _options$action_call !== void 0 ? _options$action_call : options.action_call = "".concat(this.id, "_exec_").concat(LiteGraph.uuidv4()); // TODO replace all ath.floor(Math.random()*9999) by LiteGraph.uuidv4

      if ((_this$graph5 = this.graph) !== null && _this$graph5 !== void 0 && _this$graph5.nodes_executing && (_this$graph6 = this.graph) !== null && _this$graph6 !== void 0 && _this$graph6.nodes_executing[this.id]) {
        LiteGraph.log_debug("lgraphNODE", "doExecute", "already executing! Prevent! " + this.id + ":" + this.order);
        return;
      }
      if (LiteGraph.ensureNodeSingleExecution && this.exec_version && this.exec_version >= this.graph.iteration && this.exec_version !== undefined) {
        LiteGraph.log_debug("lgraphNODE", "doExecute", "!! NODE already EXECUTED THIS STEP !! " + this.exec_version);
        return;
      }
      // LiteGraph.log_debug("Actioned ? "+this.id+":"+this.order+" :: "+this.action_call);
      if (LiteGraph.ensureUniqueExecutionAndActionCall) {
        // if(this.action_call && options && options.action_call && this.action_call == options.action_call){
        if (this.graph.nodes_executedAction[this.id] && options && options.action_call && this.graph.nodes_executedAction[this.id] == options.action_call) {
          LiteGraph.log_debug("lgraphNODE", "doExecute", "!! NODE already ACTION THIS STEP !! " + options.action_call);
          return;
        }
      }
      this.graph.nodes_executing[this.id] = true; // .push(this.id);

      // update binded properties
      if (LiteGraph.properties_allow_input_binding) {
        this.doUpdateBindedInputProperties();
      }

      // --- NODE EXECUTION ---
      // this.onExecute(param, options);
      this.processCallbackHandlers("onExecute", {
        def_cb: this.onExecute
      }, param, options);
      this.graph.nodes_executing[this.id] = false; // .pop();

      // save execution/action ref
      this.exec_version = this.graph.iteration;
      if (options && options.action_call) {
        this.action_call = options.action_call; // if (param)
        this.graph.nodes_executedAction[this.id] = options.action_call;
      }

      // update output slot binded to properties
      if (LiteGraph.properties_allow_output_binding) {
        this.doUpdateBindedOutputProperties();
      }
      this.execute_triggered = 2; // helper to draw currently executing, the nFrames it will be used (-- each step), means "how old" is the event

      this.processCallbackHandlers("onAfterExecuteNode", {
        def_cb: this.onAfterExecuteNode
      }, param, options);
    }
    /**
     * retrocompatibility :: old doExecute
     * @method doExecute
     * @param {*} param
     * @param {*} options
     */
  }, {
    key: "execute",
    value: function execute(param) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      LiteGraph.log_debug("lgraphnode", "execute", "You should replace .execute with .doExecute, has been renamed");
      return this.doExecute(param, options);
    }

    /**
     * Triggers an action, wrapped by logics to control execution flow
     * @method actionDo
     * @param {String} action name
     * @param {*} param
     */
  }, {
    key: "actionDo",
    value: function actionDo(action, param) {
      var _options$action_call2;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var action_slot = arguments.length > 3 ? arguments[3] : undefined;
      // if (this.onAction) {

      // enable this to give the event an ID
      (_options$action_call2 = options.action_call) !== null && _options$action_call2 !== void 0 ? _options$action_call2 : options.action_call = "".concat(this.id, "_").concat(action ? action : "action", "_").concat(LiteGraph.uuidv4());
      if (LiteGraph.ensureNodeSingleAction) {
        if (this.graph.nodes_actioning && this.graph.nodes_actioning[this.id] == options.action_call) {
          // == action){
          LiteGraph.log_debug("lgraphnode", "actionDo", "already actioning! Prevent! " + this.id + ":" + this.order + " :: " + options.action_call);
          return;
        }
      }
      LiteGraph.log_debug("CheckActioned ? " + this.id + ":" + this.order + " :: " + this.action_call);
      if (LiteGraph.ensureUniqueExecutionAndActionCall) {
        // if(this.action_call && options && options.action_call && this.action_call == options.action_call){
        if (this.graph.nodes_executedAction[this.id] && options && options.action_call && this.graph.nodes_executedAction[this.id] == options.action_call) {
          LiteGraph.log_debug("lgraphnode", "actionDo", "!! NODE already ACTION THIS STEP !! " + options.action_call);
          return;
        }
      }
      this.graph.nodes_actioning[this.id] = action ? action : "actioning"; // .push(this.id);

      // this.onAction(action, param, options, action_slot);
      this.processCallbackHandlers("onAction", {
        def_cb: this.onAction
      }, action, param, options, action_slot);
      this.graph.nodes_actioning[this.id] = false; // .pop();

      // save execution/action ref
      if (options && options.action_call) {
        this.action_call = options.action_call; // if (param)
        this.graph.nodes_executedAction[this.id] = options.action_call;
      }
      // }
      this.action_triggered = 2; // the nFrames it will be used (-- each step), means "how old" is the event
      // callback on after actioned
      // TODO check if should trigger slots like when executing or not
      this.processCallbackHandlers("onAfterActionedNode", {
        def_cb: this.onAfterActionedNode
      }, param, options);
    }

    /**
     * Triggers an event in this node, this will trigger any output with the same name
     * @method trigger
     * @param {String} event name ( "on_play", ... ) if action is equivalent to false then the event is send to all
     * @param {*} param
     */
  }, {
    key: "trigger",
    value: function trigger(action, param, options) {
      var _this6 = this;
      if (!this.outputs || this.outputs.length === 0) {
        return;
      }

      // TODO check this, investigate, _last_trigger_time ? who calls trigger ?
      this.graph && (this.graph._last_trigger_time = LiteGraph.getTime());
      var triggered = 0;
      this.outputs.forEach(function (output, i) {
        if (output && output.type === LiteGraph.EVENT && (!action || output.name === action)) {
          // TODO add callback handler onTriggerSlot
          LiteGraph.log_verbose("lgraphnode", "trigger", "triggering slot", i, param, options);
          _this6.triggerSlot(i, param, null, options);
          triggered++;
        } else {
          LiteGraph.log_verbose("lgraphnode", "trigger", "skip slot", output);
        }
      });
      if (!triggered) {
        LiteGraph.log_debug.apply(LiteGraph, ["lgraphnode", "trigger", "nothing found"].concat(Array.prototype.slice.call(arguments)));
      }
    }

    /**
     * Triggers a slot event in this node: cycle output slots and launch execute/action on connected nodes
     * @method triggerSlot
     * @param {Number|string} slot the output slot
     * @param {*} param
     * @param {Number} link_id [optional] in case you want to trigger and specific output link in a slot
     */
  }, {
    key: "triggerSlot",
    value: function triggerSlot(slot, param, link_id) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (!this.outputs) {
        return;
      }
      if (slot === null) {
        LiteGraph.log_error("lgraphnode", "triggerSlot", "wrong slot", slot);
        return;
      }
      if (slot.constructor !== Number) {
        // LiteGraph.log_warn("lgraphnode", "triggerSlot","slot must be a number, use node.trigger('name') if you want to use a string");
        slot = this.getOutputSlot(slot);
      }
      var output = this.outputs[slot];
      if (!output) {
        return;
      }
      var links = output.links;
      if (!links || !links.length) {
        return;
      }
      if (this.mode === LiteGraph.NEVER) {
        return;
      }

      // check for ancestors calls
      if (this.graph && this.graph.ancestorsCall) {
        // LiteGraph.log_debug("ancestors call, prevent triggering slot "+slot+" on "+this.id+":"+this.order);
        return;
      }
      if (this.graph) {
        this.graph._last_trigger_time = LiteGraph.getTime();
      }

      // for every link attached here
      for (var k = 0; k < links.length; ++k) {
        var _target_slot;
        var id = links[k];
        if (link_id != null && link_id != id) {
          // to skip links
          continue;
        }
        var link_info = this.graph.links[links[k]];
        if (!link_info) {
          // not connected
          continue;
        }
        link_info._last_time = LiteGraph.getTime();
        var node = this.graph.getNodeById(link_info.target_id);
        if (!node) {
          // node not found?
          continue;
        }
        var target_slot = node.inputs[link_info.target_slot];
        if (node.mode === LiteGraph.ON_TRIGGER || ((_target_slot = target_slot) === null || _target_slot === void 0 ? void 0 : _target_slot.name) === "onTrigger") {
          // generate unique trigger ID if not present
          if (!options.action_call) options.action_call = "".concat(this.id, "_trigg_").concat(LiteGraph.uuidv4()); // TODO replace here and there fakeunique ID with real unique
          if (LiteGraph.refreshAncestorsOnTriggers) node.refreshAncestors({
            action: "trigger",
            param: param,
            options: options
          });
          if (node.onExecute) {
            // -- wrapping node.onExecute(param); --
            node.doExecute(param, options);
          }
        } else if (node.onAction) {
          // generate unique action ID if not present
          if (!options.action_call) options.action_call = "".concat(this.id, "_act_").concat(LiteGraph.uuidv4());
          // pass the action name
          var target_connection = node.inputs[link_info.target_slot];

          // METHOD 1 ancestors
          if (LiteGraph.refreshAncestorsOnActions) node.refreshAncestors({
            action: target_connection.name,
            param: param,
            options: options
          });

          // instead of executing them now, it will be executed in the next graph loop, to ensure data flow
          if (LiteGraph.use_deferred_actions && node.onExecute) {
            var _node, _node$_waiting_action;
            (_node$_waiting_action = (_node = node)._waiting_actions) !== null && _node$_waiting_action !== void 0 ? _node$_waiting_action : _node._waiting_actions = [];
            node._waiting_actions.push([target_connection.name, param, options, link_info.target_slot]);
            LiteGraph.log_debug("lgraphnode", "triggerSlot", "push to deferred", target_connection.name, param, options, link_info.target_slot); //+this.id+":"+this.order+" :: "+target_connection.name);
          } else {
            // wrap node.onAction(target_connection.name, param);
            LiteGraph.log_debug("lgraphnode", "triggerSlot", "call actionDo", node, target_connection.name, param, options, link_info.target_slot);
            node.actionDo(target_connection.name, param, options, link_info.target_slot);
          }
        } else {
          // TODO CHECK
          LiteGraph.log_debug("lgraphnode", "triggerSlot", "not executing node, what to do with this Node Mode on slot triggered?", node.mode, this);
        }
      }
    }

    /**
     * clears the trigger slot animation
     * @method clearTriggeredSlot
     * @param {Number} slot the index of the output slot
     * @param {Number} link_id [optional] in case you want to trigger and specific output link in a slot
     */
  }, {
    key: "clearTriggeredSlot",
    value: function clearTriggeredSlot(slot, link_id) {
      var _this7 = this;
      if (!this.outputs || !this.outputs[slot] || !this.outputs[slot].links) {
        return;
      }
      this.outputs[slot].links.forEach(function (id) {
        if (link_id !== null && link_id !== id) {
          // Skip links
          return;
        }
        var link_info = _this7.graph.links[id];
        if (!link_info) {
          // Not connected
          return;
        }
        link_info._last_time = 0;
      });
    }
  }, {
    key: "doUpdateBindedInputProperties",
    value: function doUpdateBindedInputProperties() {
      var _this8 = this;
      var thisNode = this;
      this.inputs.forEach(function (ob_input) {
        if (ob_input.param_bind) {
          LiteGraph.log_verbose("lgraphnode", "doUpdateBindedInputProperties", "has bind", ob_input, thisNode);
          if (thisNode.properties && typeof thisNode.properties[ob_input.name] !== "undefined") {
            var inputData = thisNode.getInputData(ob_input.name);
            if (inputData !== null) {
              // thisNode.properties[ob_input.name] = link.data;
              LiteGraph.log_verbose("lgraphnode", "doUpdateBindedInputProperties", "update value", ob_input.name, inputData, thisNode);
              _this8.setProperty(ob_input.name, inputData);
            }
          } else {
            LiteGraph.log_warn("lgraphnode", "doUpdateBindedInputProperties", "inexisting property", ob_input.name, thisNode);
          }
        }
      });
    }
  }, {
    key: "doUpdateBindedOutputProperties",
    value: function doUpdateBindedOutputProperties() {
      var _this9 = this;
      var thisNode = this;
      this.outputs.forEach(function (ob_output) {
        if (ob_output.param_bind) {
          LiteGraph.log_verbose("lgraphnode", "doUpdateBindedOutputProperties", "has bind", ob_output, thisNode);
          if (thisNode.properties && typeof thisNode.properties[ob_output.name] !== "undefined") {
            var propertyData = _this9.properties[ob_output.name];
            LiteGraph.log_verbose("lgraphnode", "doUpdateBindedOutputProperties", "update value", ob_output.name, propertyData, thisNode);
            _this9.setOutputData(ob_output.name, propertyData);
          } else {
            LiteGraph.log_warn("lgraphnode", "doUpdateBindedOutputProperties", "inexisting property", ob_output.name, outputData, thisNode);
          }
        }
      });
    }

    /**
     * set the node size to auto computed
     * @method autoSize
     */
  }, {
    key: "autoSize",
    value: function autoSize(only_greater_than_current) {
      var minSize = this.computeSize();
      var newSize = only_greater_than_current && this.size ? [Math.max(this.size[0], minSize[0]), Math.max(this.size[1], minSize[1])] : minSize;
      this.setSize(newSize);
    }

    /**
     * changes node size and triggers callback
     * @method setSize
     * @param {vec2} size
     */
  }, {
    key: "setSize",
    value: function setSize(size) {
      this.size = size;
      this.processCallbackHandlers("onResize", {
        def_cb: this.onResize
      }, this.size);
    }

    /**
     * add a new property to this node
     * @method addProperty
     * @param {string} name
     * @param {*} default_value
     * @param {string} type string defining the output type ("vec3","number",...)
     * @param {Object} extra_info this can be used to have special properties of the property (like values, etc)
     */
  }, {
    key: "addProperty",
    value: function addProperty(name, default_value, type, extra_info) {
      var _default_value, _type, _this$properties_info2, _this$properties2;
      (_default_value = default_value) !== null && _default_value !== void 0 ? _default_value : default_value = null;
      (_type = type) !== null && _type !== void 0 ? _type : type = null;
      var o = _objectSpread2({
        name: name,
        type: type,
        default_value: default_value
      }, extra_info);
      this.properties_info = (_this$properties_info2 = this.properties_info) !== null && _this$properties_info2 !== void 0 ? _this$properties_info2 : [];
      this.properties_info.push(o);
      this.properties = (_this$properties2 = this.properties) !== null && _this$properties2 !== void 0 ? _this$properties2 : {};
      this.properties[name] = default_value;
      return o;
    }

    /**
     * Add a new input or output slot to use in this node.
     * @param {string} name - Name of the slot.
     * @param {string} type - Type of the slot ("vec3", "number", etc). For a generic type, use "0".
     * @param {Object} extra_info - Additional information for the slot (e.g., label, color, position).
     * @param {boolean} isInput - Whether the slot being added is an input slot.
     * @returns {Object} The newly added slot (input or output).
     *
     * @NOTE: These methods are slightly different, and it would be optimal to keep them separate,
     * but our goal here is to refactor them so they *aren't* slightly different.
     */
  }, {
    key: "addInput",
    value: function addInput(name, type, extra_info) {
      return this.addSlot(name, type, extra_info, true);
    }
  }, {
    key: "addOutput",
    value: function addOutput(name, type, extra_info) {
      return this.addSlot(name, type, extra_info, false);
    }
  }, {
    key: "addSlot",
    value: function addSlot(name, type, extra_info, isInput) {
      var slot = isInput ? _objectSpread2({
        name: name,
        type: type,
        link: null
      }, extra_info) : _objectSpread2({
        name: name,
        type: type,
        links: null
      }, extra_info);
      if (isInput) {
        var _this$inputs3;
        this.inputs = (_this$inputs3 = this.inputs) !== null && _this$inputs3 !== void 0 ? _this$inputs3 : [];
        this.inputs.push(slot);
        this.processCallbackHandlers("onInputAdded", {
          def_cb: this.onInputAdded
        }, slot);
        LiteGraph.registerNodeAndSlotType(this, type);
      } else {
        var _this$outputs3;
        this.outputs = (_this$outputs3 = this.outputs) !== null && _this$outputs3 !== void 0 ? _this$outputs3 : [];
        this.outputs.push(slot);
        this.processCallbackHandlers("onOutputAdded", {
          def_cb: this.onOutputAdded
        }, slot);
        if (LiteGraph.auto_load_slot_types) {
          LiteGraph.registerNodeAndSlotType(this, type, true);
        }
      }
      this.autoSize(true);
      this.setDirtyCanvas(true, true);
      return slot;
    }

    /**
     * Add multiple input or output slots to use in this node.
     * @param {Array} array - Array of triplets like [[name, type, extra_info], [...]].
     * @param {boolean} isInput - Whether the slots being added are input slots.
     *
     * @NOTE: These methods are slightly different, and it would be optimal to keep them separate,
     * but our goal here is to refactor them so they *aren't* slightly different.
     */
  }, {
    key: "addInputs",
    value: function addInputs(array) {
      this.addSlots(array, true);
    }
  }, {
    key: "addOutputs",
    value: function addOutputs(array) {
      this.addSlots(array, false);
    }
  }, {
    key: "addSlots",
    value: function addSlots(array, isInput) {
      var _this10 = this;
      if (typeof array === 'string') array = [array];
      array.forEach(function (info) {
        var _info$, _info$2;
        var slot = isInput ? _objectSpread2({
          name: info[0],
          type: info[1],
          link: null
        }, (_info$ = info[2]) !== null && _info$ !== void 0 ? _info$ : {}) : _objectSpread2({
          name: info[0],
          type: info[1],
          links: null
        }, (_info$2 = info[2]) !== null && _info$2 !== void 0 ? _info$2 : {});
        if (isInput) {
          var _this10$inputs;
          _this10.inputs = (_this10$inputs = _this10.inputs) !== null && _this10$inputs !== void 0 ? _this10$inputs : [];
          _this10.inputs.push(slot);
          _this10.processCallbackHandlers("onInputAdded", {
            def_cb: _this10.onInputAdded
          }, slot);
          LiteGraph.registerNodeAndSlotType(_this10, info[1]);
        } else {
          var _this10$outputs;
          _this10.outputs = (_this10$outputs = _this10.outputs) !== null && _this10$outputs !== void 0 ? _this10$outputs : [];
          _this10.outputs.push(slot);
          _this10.processCallbackHandlers("onOutputAdded", {
            def_cb: _this10.onOutputAdded
          }, slot);
          if (LiteGraph.auto_load_slot_types) {
            LiteGraph.registerNodeAndSlotType(_this10, info[1], true);
          }
        }
      });
      this.autoSize();
      this.setDirtyCanvas(true, true);
    }

    /**
     * remove an existing input slot
     * @method removeInput
     * @param {number} slot
     *
     * @NOTE: These two are different enough yet I can't even mash them together meaningfully.
     */
  }, {
    key: "removeInput",
    value: function removeInput(slot) {
      var _this11 = this;
      this.disconnectInput(slot);
      var removedInput = this.inputs.splice(slot, 1)[0];
      this.inputs.slice(slot).filter(function (input) {
        return !!input;
      }).forEach(function (input) {
        var link = _this11.graph.links[input.link];
        (link === null || link === void 0 ? void 0 : link.target_slot) && link.target_slot--;
      });
      this.autoSize();
      this.processCallbackHandlers("onInputRemoved", {
        def_cb: this.onInputRemoved
      }, slot, removedInput);
      this.setDirtyCanvas(true, true);
    }

    /**
     * remove an existing output slot
     * @method removeOutput
     * @param {number} slot
     */
  }, {
    key: "removeOutput",
    value: function removeOutput(slot) {
      var _this12 = this;
      this.disconnectOutput(slot);
      this.outputs = this.outputs.filter(function (_, index) {
        return index !== slot;
      });
      this.outputs.slice(slot).forEach(function (output) {
        if (!output || !output.links) {
          return;
        }
        output.links.forEach(function (linkId) {
          var link = _this12.graph.links[linkId];
          if (link) {
            link.origin_slot -= 1;
          }
        });
      });
      this.autoSize();
      this.processCallbackHandlers("onOutputRemoved", {
        def_cb: this.onOutputRemoved
      }, slot);
      this.setDirtyCanvas(true, true);
    }

    /**
     * Add a special connection to this node (used for special kinds of graphs)
     * @method addConnection
     * @param {string} name - The name of the connection
     * @param {string} type - String defining the input type ("vec3", "number", etc.)
     * @param {Float32[]} pos - Position of the connection inside the node as an array [x, y]
     * @param {string} direction - Specifies if it is an input or output connection
     */
  }, {
    key: "addConnection",
    value: function addConnection(name, type, pos, direction) {
      var o = {
        name: name,
        type: type,
        pos: pos,
        direction: direction,
        links: null
      };
      this.connections.push(o);
      return o;
    }
  }, {
    key: "getDefaultCanvas",
    value: function getDefaultCanvas() {
      if (!this.graph) return false;
      if (!this.graph.list_of_graphcanvas || !this.graph.list_of_graphcanvas.length) return false;
      return this.graph.list_of_graphcanvas[0];
    }

    /**
     * computes the minimum size of a node according to its inputs and output slots
     * @method computeSize
     * @param {vec2} minHeight
     * @return {vec2} the total size
     */
  }, {
    key: "computeSize",
    value: function computeSize(out) {
      if (this.constructor.size) {
        return this.constructor.size.concat();
      }
      var node = this;
      var size = out || new Float32Array([0, 0]);
      var font_size = LiteGraph.NODE_TEXT_SIZE; // although it should be graphcanvas.inner_text_font size

      // computeWidth
      var get_text_width = function get_text_width(text, isTitle) {
        if (!text) {
          return 0;
        }
        var lgcanvas = node.getDefaultCanvas();
        if (lgcanvas && lgcanvas.canvas && lgcanvas.ctx) {
          var _lgcanvas$ctx;
          if (isTitle) {
            lgcanvas.ctx.font = lgcanvas.title_text_font;
          } else {
            lgcanvas.ctx.font = lgcanvas.inner_text_font;
          }
          var measuredT = (_lgcanvas$ctx = lgcanvas.ctx) === null || _lgcanvas$ctx === void 0 ? void 0 : _lgcanvas$ctx.measureText(text);
          if (measuredT) {
            // DBG EXCESS LiteGraph.log_verbose("lgraphnode","computeSize","measured text",text,measuredT,this);
            return measuredT.width;
          }
        }
        // fallback
        // DBG EXCESS LiteGraph.log_verbose("lgraphnode","computeSize","fallback size",text,font_size * text.length * 0.6,this);
        return font_size * text.length * 0.423; // TODO this is not precise
      };
      var node_title = node.title;
      try {
        node_title = this.getTitle();
      } catch (e) {
        // skip :: being in construction properties could not be set yet
      }
      var title_width = 40 + get_text_width(node_title, true); // this.title
      var input_width = 0;
      var output_width = 0;
      if (this.inputs) {
        input_width = this.inputs.reduce(function (maxWidth, input) {
          var text = input.label || input.name || "";
          var text_width = get_text_width(text);
          return Math.max(maxWidth, text_width);
        }, 0);
      }
      if (this.outputs) {
        output_width = this.outputs.reduce(function (maxWidth, output) {
          var text = output.label || output.name || "";
          var text_width = get_text_width(text);
          return Math.max(maxWidth, text_width);
        }, 0);
      }
      if (this.horizontal) {
        // const lastIPos = this.getConnectionPos();
        size[0] = Math.max(size[0], title_width);
        size[1] = this.outputs.length ? Math.max(size[1], LiteGraph.NODE_SLOT_HEIGHT + 10) : size[1];
      } else {
        // basicWidth
        size[0] = Math.max(input_width + output_width + 40 + 10, title_width);
        // basicHeight
        size[1] = this.getSlotsHeight();
      }

      // min Width Height
      size[0] = Math.max(size[0], LiteGraph.NODE_MIN_WIDTH);
      size[0] = Math.max(size[0], LiteGraph.NODE_MIN_SIZE[0]);
      size[1] = Math.max(size[1], LiteGraph.NODE_MIN_SIZE[1]);

      // widgets calc
      var widgetsHeight = 0;
      if (this.widgets && this.widgets.length) {
        // width fallback
        size[0] = Math.max(size[0], LiteGraph.NODE_MIN_WIDTH * 1.5);
        // cycle widgets
        for (var i = 0, l = this.widgets.length; i < l; ++i) {
          if (this.widgets[i].computeSize) {
            var wSize = this.widgets[i].computeSize(size[0]);
            widgetsHeight += wSize[1] + 4;
            size[0] = Math.max(size[0], wSize[0]);
          } else {
            widgetsHeight += LiteGraph.NODE_WIDGET_HEIGHT + 4;
            size[0] = Math.max(size[0], LiteGraph.NODE_WIDTH); // using node width as widget default WIDHT TODO refcator
          }
        }
        widgetsHeight += 8;
      }

      // process height
      if (this.widgets_up) {
        size[1] = Math.max(size[1], widgetsHeight);
      } else if (this.widgets_start_y != null) {
        size[1] = Math.max(size[1], widgetsHeight + this.widgets_start_y);
      } else {
        size[1] += widgetsHeight;
      }
      if (this.constructor.min_height) {
        size[1] = Math.max(size[1], this.constructor.min_height);
      }

      // size[1] += 6; // y margin
      return size;
    }
  }, {
    key: "getSlotsHeight",
    value: function getSlotsHeight() {
      // minimum height calculated by slots or 1
      var rowHeight = Math.max(this.inputs ? this.inputs.length : 1, this.outputs ? this.outputs.length : 1, 1) * LiteGraph.NODE_SLOT_HEIGHT + 10;
      // add margin (should this be always?)
      return rowHeight + (this.constructor.slot_start_y || 0);
    }

    /**
     * returns all the info available about a property of this node.
     *
     * @method getPropertyInfo
     * @param {String} property name of the property
     * @return {Object} the object with all the available info
    */
  }, {
    key: "getPropertyInfo",
    value: function getPropertyInfo(property) {
      var info = null;

      // there are several ways to define info about a property
      // legacy mode
      if (this.properties_info) {
        for (var i = 0; i < this.properties_info.length; ++i) {
          if (this.properties_info[i].name == property) {
            info = this.properties_info[i];
            break;
          }
        }
      }
      // litescene mode using the constructor
      if (this.constructor["@".concat(property)]) {
        info = this.constructor["@".concat(property)];
      }
      if (this.constructor.widgets_info && this.constructor.widgets_info[property]) {
        info = this.constructor.widgets_info[property];
      }

      // litescene mode using the constructor
      if (!info) {
        // info = this.onGetPropertyInfo(property);
        var r = this.processCallbackHandlers("onGetPropertyInfo", {
          def_cb: this.onGetPropertyInfo
        }, property);
        if (r !== null && _typeof(r) == "object" && r.return_value !== null) {
          info = r.return_value;
        }
      }

      // DISABLED: REFACTOR code will use info.type or info. even if not valid
      // if still has no info, that's a "property does not exists and nobody is managing it"
      // if (info === null || typeof(info) == "undefined"){
      // return null;
      // }

      if (!info) {
        info = {};
      }
      if (!info.type) {
        info.type = _typeof(this.properties[property]);
      }
      /* if(!info.property){
          info.property = property;
      } */
      if (info.widget == "combo") {
        info.type = "enum";
      }
      return info;
    }

    /**
     * Defines a widget inside the node, it will be rendered on top of the node, you can control lots of properties
     *
     * @method addWidget
     * @param {String} type the widget type (could be "number","string","combo"
     * @param {String} name the text to show on the widget
     * @param {String} value the default value
     * @param {Function|String} callback function to call when it changes (optionally, it can be the name of the property to modify)
     * @param {Object} options the object that contains special properties of this widget
     * @return {Object} the created widget object
     */
  }, {
    key: "addWidget",
    value: function addWidget(type, name, value, callback, options) {
      var _this$widgets2;
      (_this$widgets2 = this.widgets) !== null && _this$widgets2 !== void 0 ? _this$widgets2 : this.widgets = [];
      if (!options && callback && callback.constructor === Object) {
        options = callback;
        callback = null;
      }
      if (options && options.constructor === String)
        // options can be the property name
        options = {
          property: options
        };
      if (callback && callback.constructor === String) {
        var _options;
        // callback can be the property name
        (_options = options) !== null && _options !== void 0 ? _options : options = {};
        options.property = callback;
        callback = null;
      }
      if (callback && callback.constructor !== Function) {
        LiteGraph.log_warn("lgraphnode", "addWidget", "callback must be a function", callback);
        callback = null;
      }
      var w = {
        type: type.toLowerCase(),
        name: name,
        value: value,
        callback: callback,
        options: options || {}
      };
      if (w.options.y !== undefined) {
        w.y = w.options.y;
      }
      if (!callback && !w.options.callback && !w.options.property) ;
      if (type == "combo" && !w.options.values) {
        // throw Error("LiteGraph addWidget('combo',...) requires to pass values in options: { values:['red','blue'] }");
        LiteGraph.log_warn("lgraphnode", "addWidget", "combo requires to pass values in options eg: { values:['red','blue'] }");
        return;
      }
      this.widgets.push(w);
      this.setSize(this.computeSize());
      return w;
    }
  }, {
    key: "addCustomWidget",
    value: function addCustomWidget(custom_widget) {
      var _this$widgets3;
      (_this$widgets3 = this.widgets) !== null && _this$widgets3 !== void 0 ? _this$widgets3 : this.widgets = [];
      this.widgets.push(custom_widget);
      return custom_widget;
    }

    /**
     * Returns the bounding box of the object, used for rendering purposes
     * @method getBounding
     * @param {Float32[]} [out] - [Optional] A place to store the output to reduce garbage
     * @param {boolean} [compute_outer] - [Optional] Set to true to include the shadow and connection points in the bounding calculation
     * @return {Float32[]} The bounding box in the format of [topLeftCornerX, topLeftCornerY, width, height]
     */
  }, {
    key: "getBounding",
    value: function getBounding() {
      var _this$flags2;
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Float32Array(4);
      var compute_outer = arguments.length > 1 ? arguments[1] : undefined;
      var nodePos = this.pos;
      var isCollapsed = (_this$flags2 = this.flags) === null || _this$flags2 === void 0 ? void 0 : _this$flags2.collapsed;
      var nodeSize = this.size;
      var left_offset = 0;
      // 1 offset due to how nodes are rendered
      var right_offset = 1;
      var top_offset = 0;
      var bottom_offset = 0;
      if (compute_outer) {
        // 4 offset for collapsed node connection points
        left_offset = 4;
        // 6 offset for right shadow and collapsed node connection points
        right_offset = 6 + left_offset;
        // 4 offset for collapsed nodes top connection points
        top_offset = 4;
        // 5 offset for bottom shadow and collapsed node connection points
        bottom_offset = 5 + top_offset;
      }
      out[0] = nodePos[0] - left_offset;
      out[1] = nodePos[1] - LiteGraph.NODE_TITLE_HEIGHT - top_offset;
      out[2] = isCollapsed ? (this._collapsed_width || LiteGraph.NODE_COLLAPSED_WIDTH) + right_offset : nodeSize[0] + right_offset;
      out[3] = isCollapsed ? LiteGraph.NODE_TITLE_HEIGHT + bottom_offset : nodeSize[1] + LiteGraph.NODE_TITLE_HEIGHT + bottom_offset;
      this.processCallbackHandlers("onBounding", {
        def_cb: this.onBounding
      }, out);
      // TAG this callback could return behavior
      return out;
    }

    /**
     * checks if a point is inside the shape of a node
     * @method isPointInside
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
  }, {
    key: "isPointInside",
    value: function isPointInside(x, y) {
      var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var skip_title = arguments.length > 3 ? arguments[3] : undefined;
      var margin_top = this.graph && this.graph.isLive() ? 0 : LiteGraph.NODE_TITLE_HEIGHT;
      if (skip_title) {
        margin_top = 0;
      }
      if (this.flags && this.flags.collapsed) {
        // if ( distance([x,y], [this.pos[0] + this.size[0]*0.5, this.pos[1] + this.size[1]*0.5]) < LiteGraph.NODE_COLLAPSED_RADIUS)
        if (LiteGraph.isInsideRectangle(x, y, this.pos[0] - margin, this.pos[1] - LiteGraph.NODE_TITLE_HEIGHT - margin, (this._collapsed_width || LiteGraph.NODE_COLLAPSED_WIDTH) + 2 * margin, LiteGraph.NODE_TITLE_HEIGHT + 2 * margin)) {
          return true;
        }
      } else if (this.pos[0] - 4 - margin < x && this.pos[0] + this.size[0] + 4 + margin > x && this.pos[1] - margin_top - margin < y && this.pos[1] + this.size[1] + margin > y) {
        return true;
      }
      return false;
    }

    /**
     * checks if a point is inside a node slot, and returns info about which slot
     * @method getSlotInPosition
     * @param {number} x
     * @param {number} y
     * @return {Object} if found the object contains { input|output: slot object, slot: number, link_pos: [x,y] }
     */
  }, {
    key: "getSlotInPosition",
    value: function getSlotInPosition(x, y) {
      // search for inputs
      var link_pos = new Float32Array(2);
      if (this.inputs) {
        for (var i = 0, l = this.inputs.length; i < l; ++i) {
          var input = this.inputs[i];
          this.getConnectionPos(true, i, link_pos);
          if (LiteGraph.isInsideRectangle(x, y, link_pos[0] - 10, link_pos[1] - 5, 20, 10)) {
            return {
              input: input,
              slot: i,
              link_pos: link_pos
            };
          }
        }
      }
      if (this.outputs) {
        for (var _i = 0, _l = this.outputs.length; _i < _l; ++_i) {
          var output = this.outputs[_i];
          this.getConnectionPos(false, _i, link_pos);
          if (LiteGraph.isInsideRectangle(x, y, link_pos[0] - 10, link_pos[1] - 5, 20, 10)) {
            return {
              output: output,
              slot: _i,
              link_pos: link_pos
            };
          }
        }
      }
      return null;
    }

    /**
     * returns the input slot with a given name (used for dynamic slots), -1 if not found
     * @method findInputSlot
     * @param {string} name the name of the slot
     * @param {boolean} returnObj if the obj itself wanted
     * @return {number|object} the slot (-1 if not found)
     */
  }, {
    key: "findInputSlot",
    value: function findInputSlot(name, returnObj) {
      if (!this.inputs) {
        return -1;
      }
      for (var i = 0, l = this.inputs.length; i < l; ++i) {
        if (name == this.inputs[i].name) {
          return !returnObj ? i : this.inputs[i];
        }
      }
      return -1;
    }

    /**
     * returns the output slot with a given name (used for dynamic slots), -1 if not found
     * @method findOutputSlot
     * @param {string} name the name of the slot
     * @param {boolean} returnObj if the obj itself wanted
     * @return {number|object} the slot (-1 if not found)
     */
  }, {
    key: "findOutputSlot",
    value: function findOutputSlot(name) {
      var returnObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.outputs) {
        return -1;
      }
      for (var i = 0, l = this.outputs.length; i < l; ++i) {
        if (name == this.outputs[i].name) {
          return !returnObj ? i : this.outputs[i];
        }
      }
      return -1;
    }

    /**
     * Get a slot from his index or name
     * @param {boolean} is_input use look for input / output 
     * @param {number|string} slot_index_or_name 
     * @returns 
     */
  }, {
    key: "getSlot",
    value: function getSlot(is_input, slot_index_or_name) {
      var returnObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!is_input || is_input === LiteGraph.OUTPUT) {
        if (this.outputs[slot_index_or_name] !== "undefined") {
          return !returnObj ? slot_index_or_name : this.outputs[slot_index_or_name];
        } else {
          return this.findInputSlot(slot_index_or_name, returnObj);
        }
      } else {
        if (this.inputs[slot_index_or_name] !== "undefined") {
          return !returnObj ? slot_index_or_name : this.inputs[slot_index_or_name];
        } else {
          return this.findOutputSlot(slot_index_or_name, returnObj);
        }
      }
    }
  }, {
    key: "getOutputSlot",
    value: function getOutputSlot(index_or_name) {
      var returnObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.getSlot(false, index_or_name, returnObj);
    }
  }, {
    key: "getInputSlot",
    value: function getInputSlot(index_or_name) {
      var returnObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.getSlot(true, index_or_name, returnObj);
    }

    // TODO refactor: USE SINGLE findInput/findOutput functions! :: merge options

    /**
     * returns the first free input slot, can filter by types
     * @method findInputSlotFree
     * @param {object} options
     * @return {number|object} the slot (-1 if not found)
     */
  }, {
    key: "findInputSlotFree",
    value: function findInputSlotFree() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        returnObj: false,
        typesNotAccepted: []
      };
      var opts = Object.assign(optsDef, optsIn);
      if (!this.inputs) {
        return -1;
      }
      for (var i = 0, l = this.inputs.length; i < l; ++i) {
        if (this.inputs[i].link && this.inputs[i].link != null) {
          continue;
        }
        if (opts.typesNotAccepted && opts.typesNotAccepted.includes && opts.typesNotAccepted.includes(this.inputs[i].type)) {
          continue;
        }
        return !opts.returnObj ? i : this.inputs[i];
      }
      return -1;
    }

    /**
     * returns the first output slot free, can filter by types
     * @method findOutputSlotFree
     * @param {object} options
     * @return {number|object} the slot (-1 if not found)
     */
  }, {
    key: "findOutputSlotFree",
    value: function findOutputSlotFree() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        returnObj: false,
        typesNotAccepted: []
      };
      var opts = Object.assign(optsDef, optsIn);
      if (!this.outputs) {
        return -1;
      }
      for (var i = 0, l = this.outputs.length; i < l; ++i) {
        if (this.outputs[i].links && this.outputs[i].links != null) {
          continue;
        }
        if (opts.typesNotAccepted && opts.typesNotAccepted.includes && opts.typesNotAccepted.includes(this.outputs[i].type)) {
          continue;
        }
        return !opts.returnObj ? i : this.outputs[i];
      }
      return -1;
    }

    /**
     * findSlotByType for INPUTS
     */
  }, {
    key: "findInputSlotByType",
    value: function findInputSlotByType(type, returnObj, preferFreeSlot, doNotUseOccupied) {
      return this.findSlotByType(true, type, returnObj, preferFreeSlot, doNotUseOccupied);
    }

    /**
     * findSlotByType for OUTPUTS
     */
  }, {
    key: "findOutputSlotByType",
    value: function findOutputSlotByType(type, returnObj, preferFreeSlot, doNotUseOccupied) {
      return this.findSlotByType(false, type, returnObj, preferFreeSlot, doNotUseOccupied);
    }

    /**
     * returns the output (or input) slot with a given type, -1 if not found
     * @method findSlotByType
     * @param {boolean} is_input use inputs (true), or outputs (false)
     * @param {string} type the type of the slot to look for (multi type by ,) 
     * @param {boolean} returnObj if the obj itself wanted
     * @param {boolean} preferFreeSlot if we want a free slot (if not found, will return the first of the type anyway)
     * @return {number|object} the slot (-1 if not found)
     */
  }, {
    key: "findSlotByType",
    value: function findSlotByType() {
      var is_input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type = arguments.length > 1 ? arguments[1] : undefined;
      var returnObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var preferFreeSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var doNotUseOccupied = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var aSlots = is_input ? this.inputs : this.outputs;
      if (!aSlots) {
        return -1;
      }
      // !! empty string type is considered 0, * !!
      if (!type || type == "" || type == "*") type = 0;
      // cycle for this slots
      for (var i = 0, l = aSlots.length; i < l; ++i) {
        var aSource = (type + "").toLowerCase().split(",");
        var aDest = aSlots[i].type == "0" || aSlots[i].type == "*" ? 0 : aSlots[i].type;
        aDest = (aDest + "").toLowerCase().split(",");
        // cycle for the slot types
        for (var sI = 0; sI < aSource.length; sI++) {
          for (var dI = 0; dI < aDest.length; dI++) {
            if (aSource[sI] == "_event_") aSource[sI] = LiteGraph.EVENT;
            if (aDest[sI] == "_event_") aDest[sI] = LiteGraph.EVENT;
            if (aSource[sI] == "*") aSource[sI] = 0;
            if (aDest[sI] == "*") aDest[sI] = 0;
            if (aSource[sI] == aDest[dI]) {
              if (preferFreeSlot && (aSlots[i].link && aSlots[i].link !== null || aSlots[i].links && aSlots[i].links !== null)) {
                LiteGraph.log_verbose("lgraphnode", "findSlotByType", "preferFreeSlot but has link", aSource[sI], aDest[dI], "from types", type, "checked types", aSlots[i].type);
                continue;
              }
              LiteGraph.log_verbose("lgraphnode", "findSlotByType", "found right type", i, aSlots[i], "from types", type, "checked types", aSlots[i].type);
              return !returnObj ? i : aSlots[i];
            } else {
              LiteGraph.log_verbose("lgraphnode", "findSlotByType", "slot not right type", aSource[sI], aDest[dI], "from types", type, "checked types", aSlots[i].type);
            }
          }
        }
      }
      // if didnt find some, checking if need to force on already placed ones
      if (preferFreeSlot && !doNotUseOccupied) {
        for (var _i2 = 0, _l2 = aSlots.length; _i2 < _l2; ++_i2) {
          var _aSource = (type + "").toLowerCase().split(",");
          var _aDest = aSlots[_i2].type == "0" || aSlots[_i2].type == "*" ? "0" : aSlots[_i2].type;
          _aDest = (_aDest + "").toLowerCase().split(",");
          for (var _sI = 0; _sI < _aSource.length; _sI++) {
            for (var _dI = 0; _dI < _aDest.length; _dI++) {
              if (_aSource[_sI] == "*") _aSource[_sI] = 0;
              if (_aDest[_sI] == "*") _aDest[_sI] = 0;
              if (_aSource[_sI] == _aDest[_dI]) {
                return !returnObj ? _i2 : aSlots[_i2];
              }
            }
          }
        }
      }
      return -1;
    }

    /**
     * connect this node output to the input of another node BY TYPE
     * @method connectByType
     * @param {number|string} slot (could be the number of the slot or the string with the name of the slot)
     * @param {LGraphNode} node the target node
     * @param {string} target_type the input slot type of the target node
     * @return {Object} the link_info is created, otherwise null
     */
  }, {
    key: "connectByType",
    value: function connectByType(slot, target_node) {
      var target_slotType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "*";
      var optsIn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var optsDef = {
        createEventInCase: true,
        firstFreeIfOutputGeneralInCase: true,
        generalTypeInCase: true,
        preferFreeSlot: false
      };
      var opts = Object.assign(optsDef, optsIn);
      if (target_node && target_node.constructor === Number) {
        target_node = this.graph.getNodeById(target_node);
      }
      // look for free slots
      var target_slot = target_node.findInputSlotByType(target_slotType, false, true);
      if (target_slot >= 0 && target_slot !== null) {
        LiteGraph.log_debug("lgraphnode", "connectByType", "type " + target_slotType + " for " + target_slot);
        return this.connect(slot, target_node, target_slot);
      } else {
        // LiteGraph.log?.("type "+target_slotType+" not found or not free?")
        if (opts.createEventInCase && target_slotType == LiteGraph.EVENT) {
          // WILL CREATE THE onTrigger IN SLOT
          LiteGraph.log_debug("lgraphnode", "connectByType", "connect WILL CREATE THE onTrigger " + target_slotType + " to " + target_node);
          return this.connect(slot, target_node, -1);
        }
        // connect to the first general output slot if not found a specific type and
        if (opts.generalTypeInCase) {
          target_slot = target_node.findInputSlotByType(0, false, true, true);
          LiteGraph.log_debug("lgraphnode", "connectByType", "connect TO a general type (*, 0), if not found the specific type ", target_slotType, " to ", target_node, "RES_SLOT:", target_slot);
          if (target_slot >= 0) {
            return this.connect(slot, target_node, target_slot);
          }
        }
        // connect to the first free input slot if not found a specific type and this output is general
        if (opts.firstFreeIfOutputGeneralInCase && (target_slotType == 0 || target_slotType == "*" || target_slotType == "")) {
          target_slot = target_node.findInputSlotFree({
            typesNotAccepted: [LiteGraph.EVENT]
          });
          LiteGraph.log_debug("lgraphnode", "connectByType", "connect TO TheFirstFREE ", target_slotType, " to ", target_node, "RES_SLOT:", target_slot);
          if (target_slot >= 0) {
            return this.connect(slot, target_node, target_slot);
          }
        }
        LiteGraph.log_debug("lgraphnode", "connectByType", "no way to connect type: ", target_slotType, " to targetNODE ", target_node);
        // TODO filter

        return null;
      }
    }

    /**
     * connect this node input to the output of another node BY TYPE
     * @method connectByType
     * @param {number|string} slot (could be the number of the slot or the string with the name of the slot)
     * @param {LGraphNode} node the target node
     * @param {string} target_type the output slot type of the target node
     * @return {Object} the link_info is created, otherwise null
     */
  }, {
    key: "connectByTypeOutput",
    value: function connectByTypeOutput(slot, source_node) {
      var source_slotType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "*";
      var optsIn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var optsDef = {
        createEventInCase: true,
        firstFreeIfInputGeneralInCase: true,
        generalTypeInCase: true
      };
      var opts = Object.assign(optsDef, optsIn);
      if (source_node && source_node.constructor === Number) {
        source_node = this.graph.getNodeById(source_node);
      }
      var source_slot = source_node.findOutputSlotByType(source_slotType, false, true);
      if (source_slot >= 0 && source_slot !== null) {
        LiteGraph.log_debug("lgraphnode", "connectByTypeOutput", "type " + source_slotType + " for " + source_slot);
        return source_node.connect(source_slot, this, slot);
      } else {
        // connect to the first general output slot if not found a specific type and
        if (opts.generalTypeInCase) {
          source_slot = source_node.findOutputSlotByType(0, false, true, true);
          if (source_slot >= 0) {
            return source_node.connect(source_slot, this, slot);
          }
        }
        if (opts.createEventInCase && source_slotType == LiteGraph.EVENT) {
          // WILL CREATE THE onExecuted OUT SLOT
          if (LiteGraph.do_add_triggers_slots) {
            source_slot = source_node.addOnExecutedOutput();
            return source_node.connect(source_slot, this, slot);
          }
        }
        // connect to the first free output slot if not found a specific type and this input is general
        if (opts.firstFreeIfInputGeneralInCase && (source_slotType == 0 || source_slotType == "*" || source_slotType == "" || source_slotType == "undefined")) {
          source_slot = source_node.findOutputSlotFree({
            typesNotAccepted: [LiteGraph.EVENT]
          });
          if (source_slot >= 0) {
            return source_node.connect(source_slot, this, slot);
          }
        }
        LiteGraph.log_debug("lgraphnode", "connectByTypeOutput", "no way to connect (not found or not free?) byOUT type: ", source_slotType, " to sourceNODE ", source_node);
        // TODO filter

        return null;
      }
    }

    /**
     * connect this node output to the input of another node
     * @method connect
     * @param {number|string} slot (could be the number of the slot or the string with the name of the slot)
     * @param {LGraphNode} node the target node
     * @param {number|string} target_slot the input slot of the target node (could be the number of the slot or the string with the name of the slot, or -1 to connect a trigger)
     * @return {Object} the link_info is created, otherwise null
     */
  }, {
    key: "connect",
    value: function connect(slot, target_node) {
      var _output$links;
      var target_slot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (!this.graph) {
        // could be connected before adding it to a graph
        LiteGraph.log_warn("lgraphnode", "connect", "Error, node doesn't belong to any graph. Nodes must be added first to a graph before connecting them.", this); // due to link ids being associated with graphs
        return null;
      }
      var r = null;

      // seek for the output slot
      /* if (slot.constructor === String) {
          slot = this.findOutputSlot(slot);
          if (slot == -1) {
              LiteGraph.log_warn("lgraphnode","connect", "Error, string slot not found",this,slot);
              return null;
          }
      } else if (!this.outputs || slot >= this.outputs.length) {
          LiteGraph.log_warn("lgraphnode","connect", "Error, number slot not found",this,slot);
          return null;
      } */
      slot = this.getOutputSlot(slot);
      if (slot == -1) {
        LiteGraph.log_warn("lgraphnode", "connect", "Slot not found", this, slot);
        return null;
      }
      if (target_node && target_node.constructor === Number) {
        // check this ? Number constructor falling back to ID ?
        LiteGraph.log_debug("lgraphnode", "connect", "Target node constructor is number", target_node);
        target_node = this.graph.getNodeById(target_node);
        LiteGraph.log_debug("lgraphnode", "connect", "Target node number constructor, looked for node by ID", target_node);
      }
      if (!target_node) {
        // throw new Error("target node is null");
        LiteGraph.log_warn("lgraphnode", "connect", "Target node null", target_node);
        return;
      }

      // avoid loopback
      if (target_node == this) {
        return null;
      }
      if (target_slot === LiteGraph.EVENT) {
        if (LiteGraph.do_add_triggers_slots) {
          // search for first slot with event? :: NO this is done outside
          // LiteGraph.log?.("Connect: Creating triggerEvent");
          // force mode
          target_node.changeMode(LiteGraph.ON_TRIGGER);
          target_slot = target_node.findInputSlot("onTrigger");
          LiteGraph.log_debug("lgraphnode", "connect", "Created onTrigger slot", target_slot);
        } else {
          return null; // -- break --
        }
      } else {
        target_slot = target_node.getInputSlot(target_slot);
      }

      // you can specify the slot by name
      /* if (target_slot.constructor === String) {
          target_slot = target_node.findInputSlot(target_slot);
          if (target_slot == -1) {
              LiteGraph.log_warn("lgraphnode","connect", "Target string slot not found",target_slot);
              return null;
          }
      } else */

      if (!target_node.inputs || target_slot == -1
      // target_slot >= target_node.inputs.length
      ) {
        LiteGraph.log_warn("lgraphnode", "connect", "Target slot not found", target_slot, target_node.inputs);
        return null;
      }
      var changed = false;
      var input = target_node.inputs[target_slot];
      var link_info = null;
      var output = this.outputs[slot];
      if (!this.outputs[slot]) {
        LiteGraph.log_warn("lgraphnode", "connect", "Invalid processed output slot: ", slot, this.outputs);
        return null;
      }

      // callback ,allow the node to change target slot
      r = target_node.processCallbackHandlers("onBeforeConnectInput", {
        def_cb: target_node.onBeforeConnectInput
      }, target_node);
      if (r !== null && _typeof(r) == "object" && r.return_value !== null) {
        LiteGraph.log_debug("lgraphnode", "connect", "Node onBeforeConnectInput changing target_slot", target_slot, r.return_value);
        target_slot = r.return_value;
      }

      // callback, allow the node to stop connection
      r = this.processCallbackHandlers("onConnectOutput", {
        def_cb: this.onConnectOutput
      }, slot, input.type, input, target_node, target_slot);
      if (r !== null && (r === false || _typeof(r) == "object" && r.return_value === false)) {
        LiteGraph.log_debug("lgraphnode", "connect", "Node onConnectOutput stopping connection", r.return_value);
        return null;
      }

      // check target_slot and check connection types
      if (target_slot === false || target_slot === null || !LiteGraph.isValidConnection(output.type, input.type)) {
        LiteGraph.log_warn("lgraphnode", "connect", "target_slot is NOT valid", target_slot, output.type, input.type);
        this.setDirtyCanvas(false, true);
        if (changed) this.graph.connectionChange(this, link_info);
        return null;
      } else {
        LiteGraph.log_debug("lgraphnode", "connect", "target_slot is valid", target_slot);
      }

      // callback, allow the target node to stop connection
      r = target_node.processCallbackHandlers("onConnectInput", {
        def_cb: target_node.onConnectInput
      }, target_slot, output.type, output, this, slot);
      if (r !== null && (r === false || _typeof(r) == "object" && r.return_value === false)) {
        LiteGraph.log_debug("lgraphnode", "connect", "targetNode onConnectInput stopping connection", r.return_value);
        return null;
      }
      // check :: was already called just few steps here above
      // if ( this.onConnectOutput?.(slot, input.type, input, target_node, target_slot) === false ) {
      //     return null;
      // }

      // if there is something already plugged there, disconnect
      if (target_node.inputs[target_slot] && target_node.inputs[target_slot].link != null) {
        this.graph.beforeChange();
        target_node.disconnectInput(target_slot, {
          doProcessChange: false
        });
        changed = true;
      }
      if ((_output$links = output.links) !== null && _output$links !== void 0 && _output$links.length) {
        switch (output.type) {
          case LiteGraph.EVENT:
            if (!LiteGraph.allow_multi_output_for_events) {
              this.graph.beforeChange();
              this.disconnectOutput(slot, false, {
                doProcessChange: false
              }); // Input(target_slot, {doProcessChange: false});
              changed = true;
            }
            break;
        }
      }
      var nextId;
      if (LiteGraph.use_uuids) nextId = LiteGraph.uuidv4();else nextId = ++this.graph.last_link_id;

      // create link class
      link_info = new LiteGraph.LLink(nextId, input.type || output.type, this.id, slot, target_node.id, target_slot);

      // add to graph links list
      this.graph.links[link_info.id] = link_info;

      // connect in output
      if (output.links == null) {
        output.links = [];
      }
      output.links.push(link_info.id);
      // connect in input
      if (typeof target_node.inputs[target_slot] == "undefined") {
        LiteGraph.log_warn("lgraphnode", "connect", "FIXME error, target_slot does not exists on target_node", target_node, target_slot);
      }
      target_node.inputs[target_slot].link = link_info.id;
      this.processCallbackHandlers("onConnectionsChange", {
        def_cb: this.onConnectionsChange
      }, LiteGraph.OUTPUT, slot, true, link_info, output);
      target_node.processCallbackHandlers("onConnectionsChange", {
        def_cb: target_node.onConnectionsChange
      }, LiteGraph.INPUT, target_slot, true, link_info, input);
      if (this.graph) {
        this.graph.processCallbackHandlers("onNodeConnectionChange", {
          def_cb: this.graph.onNodeConnectionChange
        }, LiteGraph.INPUT, target_node, target_slot, this, slot);
        this.graph.processCallbackHandlers("onNodeConnectionChange", {
          def_cb: this.graph.onNodeConnectionChange
        }, LiteGraph.OUTPUT, this, slot, target_node, target_slot);
      }
      this.graph.onGraphChanged({
        action: "connect"
      });
      this.setDirtyCanvas(false, true);
      this.graph.afterChange();
      this.graph.connectionChange(this, link_info);
      return link_info;
    }

    /**
     * disconnect one output to an specific node
     * @method disconnectOutput
     * @param {number|string} slot (could be the number of the slot or the string with the name of the slot)
     * @param {LGraphNode} target_node the target node to which this slot is connected [Optional, if not target_node is specified all nodes will be disconnected]
     * @return {boolean} if it was disconnected successfully
     */
  }, {
    key: "disconnectOutput",
    value: function disconnectOutput(slot, target_node) {
      var optsIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var optsDef = {
        doProcessChange: true
      };
      var opts = Object.assign(optsDef, optsIn);

      /* if (slot.constructor === String) {
          slot = this.findOutputSlot(slot);
          if (slot == -1) {
              LiteGraph.log_warn("lgraphnode","disconnectOutput","Error, string slot not found",slot);
              return false;
          }
      } else if (!this.outputs || slot >= this.outputs.length) {
          LiteGraph.log_warn("lgraphnode","disconnectOutput","Error, number slot not found",slot);
          return false;
      } */
      slot = this.getOutputSlot(slot);

      // get output slot
      var output = this.outputs[slot];
      if (!output || !output.links || output.links.length == 0) {
        LiteGraph.log_warn("lgraphnode", "disconnectOutput", "Error, invalid slot or not linked", slot, output);
        return false;
      }

      // one of the output links in this slot
      if (target_node) {
        if (target_node.constructor === Number) {
          // check this ? Number constructor falling back to ID ?
          LiteGraph.log_debug("lgraphnode", "disconnectOutput", "Target node constructor is number", target_node);
          target_node = this.graph.getNodeById(target_node);
          LiteGraph.log_debug("lgraphnode", "disconnectOutput", "Target node number constructor, looked for node by ID", target_node);
        }
        if (!target_node) {
          LiteGraph.log_warn("lgraphnode", "disconnectOutput", "target node not found", target_node);
          return false;
        }
        for (var i = 0, l = output.links.length; i < l; i++) {
          var link_id = output.links[i];
          var link_info = this.graph.links[link_id];

          // is the link we are searching for...
          if (link_info.target_id == target_node.id) {
            var _this$graph7;
            output.links.splice(i, 1); // remove here
            var input = target_node.inputs[link_info.target_slot];
            input.link = null; // remove there
            delete this.graph.links[link_id]; // remove the link from the links pool
            (_this$graph7 = this.graph) === null || _this$graph7 === void 0 || _this$graph7.onGraphChanged({
              action: "disconnectOutput",
              doSave: opts.doProcessChange
            });

            // link_info hasn't been modified so its ok

            target_node.processCallbackHandlers("onConnectionsChange", {
              def_cb: target_node.onConnectionsChange
            }, LiteGraph.INPUT, link_info.target_slot, false, link_info, input);
            this.processCallbackHandlers("onConnectionsChange", {
              def_cb: this.onConnectionsChange
            }, LiteGraph.OUTPUT, slot, false, link_info, output);
            if (this.graph) {
              this.graph.processCallbackHandlers("onNodeConnectionChange", {
                def_cb: this.graph.onNodeConnectionChange
              }, LiteGraph.OUTPUT, this, slot, target_node, link_info.target_slot);
              this.graph.processCallbackHandlers("onNodeConnectionChange", {
                def_cb: this.graph.onNodeConnectionChange
              }, LiteGraph.INPUT, target_node, link_info.target_slot, this, slot);
            }
            break;
          }
        }
      } else {
        // all the links in this output slot
        for (var _i3 = 0, _l3 = output.links.length; _i3 < _l3; _i3++) {
          var _this$graph8;
          var _link_id = output.links[_i3];
          var _link_info = this.graph.links[_link_id];
          if (!_link_info) {
            // bug: it happens sometimes
            LiteGraph.log_warn("lgraphnode", "disconnectOutput", "A link is invalid", _link_id, this, output);
            continue;
          }
          target_node = this.graph.getNodeById(_link_info.target_id);
          input = null;
          (_this$graph8 = this.graph) === null || _this$graph8 === void 0 || _this$graph8.onGraphChanged({
            action: "disconnectOutput",
            doSave: opts.doProcessChange
          });
          if (target_node) {
            input = target_node.inputs[_link_info.target_slot];
            input.link = null; // remove other side link

            target_node.processCallbackHandlers("onConnectionsChange", {
              def_cb: target_node.onConnectionsChange
            }, LiteGraph.INPUT, _link_info.target_slot, false, _link_info, input);
            this.graph.processCallbackHandlers("onNodeConnectionChange", {
              def_cb: this.graph.onNodeConnectionChange
            }, LiteGraph.INPUT, target_node, _link_info.target_slot, this);
          }
          delete this.graph.links[_link_id]; // remove the link from the links pool

          this.processCallbackHandlers("onConnectionsChange", {
            def_cb: this.onConnectionsChange
          }, LiteGraph.OUTPUT, slot, false, _link_info, output);
          this.graph.processCallbackHandlers("onNodeConnectionChange", {
            def_cb: this.graph.onNodeConnectionChange
          }, LiteGraph.OUTPUT, this, slot, target_node, _link_info.target_slot);
        }
        output.links = null;
      }
      this.setDirtyCanvas(false, true);
      this.graph.connectionChange(this);
      return true;
    }

    /**
     * disconnect one input
     * @method disconnectInput
     * @param {number|string} slot (could be the number of the slot or the string with the name of the slot)
     * @return {boolean} if it was disconnected successfully
     */
  }, {
    key: "disconnectInput",
    value: function disconnectInput(slot) {
      var optsIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var optsDef = {
        doProcessChange: true
      };
      var opts = Object.assign(optsDef, optsIn);

      // seek for the output slot
      /* if (slot.constructor === String) {
          slot = this.findInputSlot(slot);
          if (slot == -1) {
              LiteGraph.log_warn("lgraphnode", "disconnectInput", "Error, string slot not found",slot);
              return false;
          }
      } else if (!this.inputs || slot >= this.inputs.length) {
          LiteGraph.log_warn("lgraphnode", "disconnectInput", "Error, number slot not found",slot);
          return false;
      } */
      slot = this.getInputSlot(slot);
      var input = this.inputs[slot];
      if (!input) {
        return false;
      }
      var link_id = this.inputs[slot].link;
      if (link_id != null) {
        this.inputs[slot].link = null;

        // remove other side
        var link_info = this.graph.links[link_id];
        if (link_info) {
          var _this$graph9;
          var target_node = this.graph.getNodeById(link_info.origin_id);
          if (!target_node) {
            return false;
          }
          var output = target_node.outputs[link_info.origin_slot];
          if (!output || !output.links || output.links.length == 0) {
            return false;
          }

          // search in the inputs list for this link
          for (var i = 0, l = output.links.length; i < l; i++) {
            if (output.links[i] == link_id) {
              output.links.splice(i, 1);
              break;
            }
          }
          delete this.graph.links[link_id]; // remove from the pool
          (_this$graph9 = this.graph) === null || _this$graph9 === void 0 || _this$graph9.onGraphChanged({
            action: "disconnectInput",
            doSave: opts.doProcessChange
          });
          this.processCallbackHandlers("onConnectionsChange", {
            def_cb: this.onConnectionsChange
          }, LiteGraph.INPUT, slot, false, link_info, input);
          target_node.processCallbackHandlers("onConnectionsChange", {
            def_cb: target_node.onConnectionsChange
          }, LiteGraph.OUTPUT, i, false, link_info, output);
          if (this.graph) {
            this.graph.processCallbackHandlers("onNodeConnectionChange", {
              def_cb: this.graph.onNodeConnectionChange
            }, LiteGraph.OUTPUT, target_node, i);
            this.graph.processCallbackHandlers("onNodeConnectionChange", {
              def_cb: this.graph.onNodeConnectionChange
            }, LiteGraph.INPUT, this, slot);
          }
        }
      } // link != null

      this.setDirtyCanvas(false, true);
      if (this.graph) this.graph.connectionChange(this);
      return true;
    }

    /**
     * Returns the center of a connection point in canvas coordinates
     * @method getConnectionPos
     * @param {boolean} is_input - True if it is an input slot, false if it is an output slot
     * @param {number | string} slot - Could be the number of the slot or the string with the name of the slot
     * @param {vec2} [out] - [Optional] A place to store the output to reduce garbage
     * @return {Float32[]} The position as [x, y]
     */
  }, {
    key: "getConnectionPos",
    value: function getConnectionPos(is_input, slot_number) {
      var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Float32Array(2);
      var num_slots = 0;
      if (is_input && this.inputs) {
        num_slots = this.inputs.length;
      }
      if (!is_input && this.outputs) {
        num_slots = this.outputs.length;
      }
      var offset = LiteGraph.NODE_SLOT_HEIGHT * 0.5;
      if (this.flags.collapsed) {
        var w = this._collapsed_width || LiteGraph.NODE_COLLAPSED_WIDTH;
        if (this.horizontal) {
          out[0] = this.pos[0] + w * 0.5;
          if (is_input) {
            out[1] = this.pos[1] - LiteGraph.NODE_TITLE_HEIGHT;
          } else {
            out[1] = this.pos[1];
          }
        } else {
          if (is_input) {
            out[0] = this.pos[0];
          } else {
            out[0] = this.pos[0] + w;
          }
          out[1] = this.pos[1] - LiteGraph.NODE_TITLE_HEIGHT * 0.5;
        }
        return out;
      }

      // if not specifing a slot fallback to title center, similar to collapsed
      if (is_input && slot_number == -1) {
        LiteGraph.log_debug("lgraphnode", "getConnectionPos", "asking for connection slot -1");
        out[0] = this.pos[0] + LiteGraph.NODE_TITLE_HEIGHT * 0.5;
        out[1] = this.pos[1] + LiteGraph.NODE_TITLE_HEIGHT * 0.5;
        return out;
      }

      // hard-coded pos
      if (is_input && num_slots > slot_number && this.inputs[slot_number].pos) {
        out[0] = this.pos[0] + this.inputs[slot_number].pos[0];
        out[1] = this.pos[1] + this.inputs[slot_number].pos[1];
        return out;
      } else if (!is_input && num_slots > slot_number && this.outputs[slot_number].pos) {
        out[0] = this.pos[0] + this.outputs[slot_number].pos[0];
        out[1] = this.pos[1] + this.outputs[slot_number].pos[1];
        return out;
      }

      // horizontal distributed slots
      if (this.horizontal) {
        out[0] = this.pos[0] + (slot_number + 0.5) * (this.size[0] / num_slots);
        if (is_input) {
          out[1] = this.pos[1] - LiteGraph.NODE_TITLE_HEIGHT;
        } else {
          out[1] = this.pos[1] + this.size[1];
        }
        return out;
      }

      // default vertical slots
      if (is_input) {
        out[0] = this.pos[0] + offset;
      } else {
        out[0] = this.pos[0] + this.size[0] + 1 - offset;
      }
      out[1] = this.pos[1] + (slot_number + 0.7) * LiteGraph.NODE_SLOT_HEIGHT + (this.constructor.slot_start_y || 0);
      return out;
    }

    /* Force align to grid */
  }, {
    key: "alignToGrid",
    value: function alignToGrid() {
      this.pos[0] = LiteGraph.CANVAS_GRID_SIZE * Math.round(this.pos[0] / LiteGraph.CANVAS_GRID_SIZE);
      this.pos[1] = LiteGraph.CANVAS_GRID_SIZE * Math.round(this.pos[1] / LiteGraph.CANVAS_GRID_SIZE);
    }

    /* Console output */
  }, {
    key: "trace",
    value: function trace(msg) {
      var _this$console$push, _this$console;
      if (!this.console) {
        this.console = [];
      }
      (_this$console$push = (_this$console = this.console).push) === null || _this$console$push === void 0 || _this$console$push.call(_this$console, msg);
      if (this.console.length > LGraphNode.MAX_CONSOLE) {
        var _this$console$shift, _this$console2;
        (_this$console$shift = (_this$console2 = this.console).shift) === null || _this$console$shift === void 0 || _this$console$shift.call(_this$console2);
      }
      this.graph.processCallbackHandlers("onNodeTrace", {
        def_cb: this.graph.onNodeTrace
      }, this, msg);
    }

    /* Forces to redraw or the main canvas (LGraphNode) or the bg canvas (links) */
  }, {
    key: "setDirtyCanvas",
    value: function setDirtyCanvas(dirty_foreground, dirty_background) {
      if (!this.graph) {
        return;
      }
      this.graph.sendActionToCanvas("setDirty", [dirty_foreground, dirty_background]);
    }
  }, {
    key: "loadImage",
    value: function loadImage(url) {
      var img = new Image();
      img.src = LiteGraph.node_images_path + url;
      img.ready = false;
      var that = this;
      img.onload = function () {
        this.ready = true;
        that.setDirtyCanvas(true);
      };
      return img;
    }

    // safe LGraphNode action execution (not sure if safe)
    /*
    LGraphNode.prototype.executeAction = function(action)
    {
    if(action == "") return false;
     if( action.indexOf(";") != -1 || action.indexOf("}") != -1)
    {
        this.trace("Error: Action contains unsafe characters");
        return false;
    }
     var tokens = action.split("(");
    var func_name = tokens[0];
    if( typeof(this[func_name]) != "function")
    {
        this.trace("Error: Action not found on node: " + func_name);
        return false;
    }
     var code = action;
     try
    {
        var _foo = eval;
        eval = null;
        (new Function("with(this) { " + code + "}")).call(this);
        eval = _foo;
    }
    catch (err)
    {
        this.trace("Error executing action {" + action + "} :" + err);
        return false;
    }
     return true;
    }
    */

    /* Allows to get onMouseMove and onMouseUp events even if the mouse is out of focus */
  }, {
    key: "captureInput",
    value: function captureInput(v) {
      if (!this.graph || !this.graph.list_of_graphcanvas) {
        return;
      }
      var list = this.graph.list_of_graphcanvas;
      for (var i = 0; i < list.length; ++i) {
        var c = list[i];
        // releasing somebody elses capture?!
        if (!v && c.node_capturing_input != this) {
          continue;
        }

        // change
        c.node_capturing_input = v ? this : null;
      }
    }

    /**
     * Collapse the node to make it smaller on the canvas
     * @method collapse
     **/
  }, {
    key: "collapse",
    value: function collapse(force) {
      this.graph.onGraphChanged({
        action: "collapse"
      });
      if (this.constructor.collapsable === false && !force) {
        return;
      }
      if (!this.flags.collapsed) {
        this.flags.collapsed = true;
      } else {
        this.flags.collapsed = false;
      }
      this.setDirtyCanvas(true, true);
    }

    /**
     * Forces the node to do not move or realign on Z
     * @method pin
     **/
  }, {
    key: "pin",
    value: function pin(v) {
      this.graph.onGraphChanged({
        action: "pin"
      });
      if (v === undefined) {
        this.flags.pinned = !this.flags.pinned;
      } else {
        this.flags.pinned = v;
      }
    }
  }, {
    key: "localToScreen",
    value: function localToScreen(x, y, graphcanvas) {
      return [(x + this.pos[0]) * graphcanvas.scale + graphcanvas.offset[0], (y + this.pos[1]) * graphcanvas.scale + graphcanvas.offset[1]];
    }
  }, {
    key: "refreshAncestors",
    value: function refreshAncestors() {
      var optsIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var optsDef = {
        action: "",
        param: null,
        options: null,
        passParam: true
      };
      var opts = Object.assign(optsDef, optsIn);
      if (!this.inputs) {
        return;
      }
      if (LiteGraph.preventAncestorRecalculation) {
        if (this.graph.node_ancestorsCalculated && this.graph.node_ancestorsCalculated[this.id]) {
          LiteGraph.log_verbose("lgraphnode", "refreshAncestors", "already calculated subtree! Prevent! " + this.id + ":" + this.order, this);
          return;
        }
      }
      if (!opts.action || opts.action == "") opts.action = this.id + "_ancestors";
      if (!opts.param || opts.param == "") opts.param = this.id + "_ancestors";
      if (!opts.options) opts.options = {};
      opts.options = Object.assign({
        action_call: opts.action
      }, opts.options);
      LiteGraph.log_verbose("lgraphnode", "refreshAncestors", "ancestors processing", this.id + ":" + this.order + " " + opts.options.action_call, this);
      this.graph.ancestorsCall = true; // prevent triggering slots

      var optsAncestors = {
        modesSkip: [LiteGraph.NEVER, LiteGraph.ON_EVENT, LiteGraph.ON_TRIGGER],
        modesOnly: [LiteGraph.ALWAYS, LiteGraph.ON_REQUEST],
        typesSkip: [LiteGraph.ACTION],
        typesOnly: []
      };
      var aAncestors = this.graph.getAncestors(this, optsAncestors);
      for (var iN in aAncestors) {
        LiteGraph.log_verbose("lgraphnode", "refreshAncestors", "doExecute ancestor", iN, aAncestors[iN], opts.param, opts.options);
        aAncestors[iN].doExecute(opts.param, opts.options);
        this.graph.node_ancestorsCalculated[aAncestors[iN].id] = true;
      }
      this.graph.ancestorsCall = false; // restore triggering slots
      this.graph.node_ancestorsCalculated[this.id] = true;
      return true;
    }

    /**
    * syncObjectByProperty will ensure using the right index for node inputs and outputs when onConfigure (de-serializing) 
    * @param {*} ob_from 
    * @param {*} ob_dest 
    * @param {*} property 
    * @param {*} optsIn 
    * @returns {object} return the result object and differences if found
    */
  }, {
    key: "syncObjectByProperty",
    value: function syncObjectByProperty(ob_from, ob_dest, property, optsIn) {
      var optsDef = {
        only_in_source: "append",
        // only_in_dest: "keep"
        fallback_checks: [{
          name: "type"
        }]
      };
      var opts = Object.assign({}, optsDef, optsIn);
      if (ob_from === null || !ob_from) ob_from = [];
      if (ob_dest === null || !ob_dest) ob_dest = [];
      var new_dest = [];
      var keys_remap = {};
      var only_in_target = ob_dest.filter(function (input) {
        return !ob_from.some(function (srcInput) {
          return srcInput[property] === input[property];
        });
      });
      /* if (opts.only_in_dest !== "keep") {
          new_dest = ob_dest.filter(input => ob_from.some(srcInput => srcInput[property] === input[property]) || opts.only_in_dest === "keep");
      } */

      var sourceUsedIds = [];
      var aNotFoundInSource = [];
      // cycle dest, for each cycle source for matching
      ob_dest.forEach(function (destInput, destIndex) {
        var foundInSource = false;
        ob_from.forEach(function (sourceInput, sourceIndex) {
          if (foundInSource) return;
          if (sourceUsedIds.includes(sourceIndex)) {
            LiteGraph.log_verbose("syncObjectByProperty", "skip used", sourceInput, sourceIndex);
          } else if (sourceInput[property] === destInput[property]) {
            foundInSource = true;
            sourceUsedIds.push(sourceIndex);
            new_dest[destIndex] = LiteGraph.cloneObject(sourceInput);
            if (destIndex != sourceIndex) {
              LiteGraph.log_debug("syncObjectByProperty", "push SHIFTED", destInput[property], destInput, sourceIndex, destIndex);
              keys_remap[sourceIndex] = destIndex;
            } else {
              LiteGraph.log_verbose("syncObjectByProperty", "found ok, same index", destInput[property], sourceInput, destIndex);
            }
          }
        });
        if (!foundInSource) {
          //} && !hasChangedIndex){
          aNotFoundInSource.push({
            ob: destInput,
            index: destIndex
          });
          // TODO: should check link ?!
          // TODO: should try to connect by type before than pushing, check AUDIO example (has invalid link or bad behavior?)
        }
      });
      if (aNotFoundInSource.length) {
        if (!opts.fallback_checks.length) {
          aNotFoundInSource.forEach(function (ob, i) {
            LiteGraph.log_debug("syncObjectByProperty", "!using fallback checks", "push !foundInSource", ob.ob[property], ob);
            new_dest[ob.index] = LiteGraph.cloneObject(ob.ob);
          });
        } else {
          aNotFoundInSource.forEach(function (ob, i) {
            var destInput = ob.ob;
            var destIndex = ob.index;
            // LiteGraph.log_warn("syncObjectByProperty", "CHECKING", destIndex, destInput);
            var foundInSource = false;
            opts.fallback_checks.forEach(function (checkX, ckI) {
              if (foundInSource) return;
              ob_from.forEach(function (sourceInput, sourceIndex) {
                if (foundInSource) return;
                if (sourceUsedIds.includes(sourceIndex)) {
                  LiteGraph.log_verbose("syncObjectByProperty", "aNotFoundInSource skip used slot", sourceInput, sourceIndex);
                } else if (sourceInput[checkX.name] === destInput[checkX.name]
                // && (!checkX.dest_valid || )
                ) {
                  foundInSource = true;
                  sourceUsedIds.push(sourceIndex);
                  new_dest[destIndex] = LiteGraph.cloneObject(sourceInput);
                  LiteGraph.log_debug("syncObjectByProperty", "aNotFoundInSource", checkX, "push SHIFTED", destInput[checkX], destInput, sourceIndex, destIndex);
                  keys_remap[sourceIndex] = destIndex;
                }
              });
            });
            if (!foundInSource) {
              LiteGraph.log_debug("syncObjectByProperty", "aNotFoundInSource, push !foundInSource", ob.ob[property], ob);
              new_dest[ob.index] = LiteGraph.cloneObject(ob.ob);
            }
          });
        }
      }

      // check only in source
      /* let only_in_source = ob_from.filter(input => !ob_dest.some(destInput => destInput[property] === input[property]));
      if (opts.only_in_source === "append" && only_in_source.length) {
          LiteGraph.log_debug("syncObjectByProperty", "push only_in_source", only_in_source);
          new_dest.push(...only_in_source);
      } */
      var destUsedIds = [];
      // cycle source, for each cycle dest
      var only_in_source = [];
      ob_from.forEach(function (sourceInput, sourceIndex) {
        var foundInDest = false;
        if (sourceUsedIds.includes(sourceIndex)) {
          return;
        }
        ob_dest.forEach(function (destInput, destIndex) {
          if (foundInDest) return;
          if (destUsedIds.includes(destIndex)) {
            LiteGraph.log_verbose("syncObjectByProperty", "only_in_source", "skip checked slot", sourceInput, sourceIndex);
          } else if (sourceInput[property] === destInput[property]) {
            destUsedIds.push(destIndex);
            foundInDest = true;
          }
        });
        if (!foundInDest) {
          // TODO: should try to connect by type before than pushing, check AUDIO example (has invalid link or bad behavior?)
          LiteGraph.log_debug("syncObjectByProperty", "push only_in_source", sourceInput[property], sourceInput);
          new_dest.push(LiteGraph.cloneObject(sourceInput));
          keys_remap[sourceIndex] = new_dest.length - 1;
          only_in_source.push(sourceInput);
        }
      });
      LiteGraph.log_info("lgraphnode", "syncByProperty", {
        only_in_source: only_in_source,
        only_in_target: only_in_target,
        ob_from: ob_from,
        ob_dest: ob_dest,
        new_dest: new_dest,
        keys_remap: keys_remap
      });
      return {
        ob_dest: new_dest,
        keys_remap: keys_remap,
        only_in_source: only_in_source,
        only_in_target: only_in_target
      };
    }
  }]);
}();

var LGraphGroup = /*#__PURE__*/function () {
  /**
   * Constructor for the LGraphGroup class.
   * @param {string} [title="Group"] - The title of the group.
   */
  function LGraphGroup() {
    var _LiteGraph$LGraphCanv, _LiteGraph$LGraphCanv2;
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Group";
    _classCallCheck(this, LGraphGroup);
    _defineProperty(this, "getBounding", function () {
      var _LiteGraph$LGraphNode;
      (_LiteGraph$LGraphNode = LiteGraph.LGraphNode.prototype.getBounding).call.apply(_LiteGraph$LGraphNode, [this].concat(Array.prototype.slice.call(arguments)));
    });
    _defineProperty(this, "isPointInside", LiteGraph.LGraphNode.prototype.isPointInside);
    _defineProperty(this, "setDirtyCanvas", LiteGraph.LGraphNode.prototype.setDirtyCanvas);
    this.title = title;
    this.font_size = 24;
    this.color = (_LiteGraph$LGraphCanv = (_LiteGraph$LGraphCanv2 = LiteGraph.LGraphCanvas.node_colors.pale_blue) === null || _LiteGraph$LGraphCanv2 === void 0 ? void 0 : _LiteGraph$LGraphCanv2.groupcolor) !== null && _LiteGraph$LGraphCanv !== void 0 ? _LiteGraph$LGraphCanv : "#AAA";
    this._bounding = new Float32Array([10, 10, 140, 80]);
    this._pos = this._bounding.subarray(0, 2);
    this._size = this._bounding.subarray(2, 4);
    this._nodes = [];
    this._groups = [];
    this.graph = null;
    this.callbackhandler_setup();
  }
  return _createClass(LGraphGroup, [{
    key: "callbackhandler_setup",
    value: function callbackhandler_setup() {
      this.cb_handler = new CallbackHandler(this);
    }
  }, {
    key: "registerCallbackHandler",
    value: function registerCallbackHandler() {
      var _this$cb_handler;
      if (!this.cb_handler) this.callbackhandler_setup(); // needed if constructor calls callback events
      return (_this$cb_handler = this.cb_handler).registerCallbackHandler.apply(_this$cb_handler, arguments);
    }
  }, {
    key: "unregisterCallbackHandler",
    value: function unregisterCallbackHandler() {
      var _this$cb_handler2;
      if (!this.cb_handler) this.callbackhandler_setup(); // needed if constructor calls callback events
      return (_this$cb_handler2 = this.cb_handler).unregisterCallbackHandler.apply(_this$cb_handler2, arguments);
    }
  }, {
    key: "processCallbackHandlers",
    value: function processCallbackHandlers() {
      var _this$cb_handler3;
      if (!this.cb_handler) this.callbackhandler_setup(); // needed if constructor calls callback events
      return (_this$cb_handler3 = this.cb_handler).processCallbackHandlers.apply(_this$cb_handler3, arguments);
    }
  }, {
    key: "pos",
    get: function get() {
      return this._pos;
    },
    set: function set(v) {
      if (!v || v.length < 2) {
        return;
      }
      this._pos[0] = v[0];
      this._pos[1] = v[1];
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }

    /**
     * Updates the properties of the LGraphGroup instance based on the provided configuration object.
     * @param {Object} o - The configuration object with properties to update.
     * @param {string} o.title - The new title for the group.
     * @param {Float32Array} o.bounding - The new bounding box for the group.
     * @param {string} o.color - The new color for the group.
     * @param {number} o.font_size - The new font size for the group.
     */,
    set: function set(v) {
      if (!v || v.length < 2) {
        return;
      }
      this._size[0] = Math.max(140, v[0]);
      this._size[1] = Math.max(80, v[1]);
    }
  }, {
    key: "configure",
    value: function configure(o) {
      this.title = o.title;
      // this._bounding.set(o.bounding); // TODO original, will remove this comment: Happens that arrays are sometimes (strangely) exported as object with keyed strings: eg. [v0, v1] to {"0": v0, "1": v1}
      // this._bounding = LiteGraph.parseStringifyObject(o.bounding, this._bounding); // tried specific cleaner implementation, reverted to cloneObject
      this._bounding = LiteGraph.cloneObject(o.bounding, this._bounding);
      this.color = o.color;
      if (o.font_size) this.font_size = o.font_size;
    }

    /**
     * Serializes the LGraphGroup instance into a plain JavaScript object.
     * @returns {Object} - The serialized representation of the LGraphGroup instance.
     * - title: string - The title of the group.
     * - bounding: Array<number> - The bounding box coordinates [x, y, width, height].
     * - color: string - The color of the group.
     * - font_size: number - The font size of the group.
     */
  }, {
    key: "serialize",
    value: function serialize() {
      var b = this._bounding;
      return {
        title: this.title,
        bounding: b.map(function (value) {
          return Math.round(value);
        }),
        color: this.color,
        font_size: this.font_size
      };
    }

    /**
     * Moves the LGraphGroup instance by the specified deltas and optionally updates the positions of contained nodes.
     * @param {number} deltax - The amount to move the group along the x-axis.
     * @param {number} deltay - The amount to move the group along the y-axis.
     * @param {boolean} ignore_nodes - Flag to indicate whether to move contained nodes along with the group.
     */
  }, {
    key: "move",
    value: function move(deltax, deltay, ignore_nodes) {
      var _console$error, _console, _console$error2, _console2;
      if (isNaN(deltax)) (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, "LGraphGroup.move() deltax NaN");
      if (isNaN(deltay)) (_console$error2 = (_console2 = console).error) === null || _console$error2 === void 0 || _console$error2.call(_console2, "LGraphGroup.move() deltay NaN");
      this._pos[0] += deltax;
      this._pos[1] += deltay;
      if (ignore_nodes) {
        return;
      }
      this._nodes.forEach(function (node) {
        node.pos[0] += deltax;
        node.pos[1] += deltay;
      });
      this._groups.forEach(function (group) {
        group.pos[0] += deltax;
        group.pos[1] += deltay;
      });
    }

    /**
     * Recomputes and updates the list of nodes inside the LGraphGroup based on their bounding boxes.
     * This method checks for nodes that overlap with the group's bounding box and updates the internal nodes list accordingly.
     */
  }, {
    key: "recomputeInsideNodes",
    value: function recomputeInsideNodes() {
      var _this = this;
      this._nodes.length = 0;
      var nodes = this.graph._nodes;
      var node_bounding = new Float32Array(4);
      this._nodes = nodes.filter(function (node) {
        node.getBounding(node_bounding);
        return LiteGraph.overlapBounding(_this._bounding, node_bounding, -LGraphGroup.opts.inclusion_distance);
      });
      this.recomputeInsideGroups();
    }

    /**
     * Recomputes and updates the list of groups [LGraphGroup] inside this LGraphGroup based on their bounding boxes.
     */
  }, {
    key: "recomputeInsideGroups",
    value: function recomputeInsideGroups() {
      var _this2 = this;
      this._groups.length = 0;
      var groups = this.graph._groups;
      var group_bounding = new Float32Array(4);
      this._groups = groups.filter(function (group) {
        group.getBounding(group_bounding);
        return LiteGraph.isBoundingInsideRectangle.apply(LiteGraph, [group_bounding].concat(_toConsumableArray(_this2._bounding)));
        // return LiteGraph.overlapBounding(this._bounding, group_bounding, -LGraphGroup.opts.inclusion_distance);
      });
    }
  }]);
}();
_defineProperty(LGraphGroup, "opts", {
  inclusion_distance: 36 // distance to border to consider included inside the group 
});

/**
 * extracted from base nodes
 */

// Subgraph: a node that contains a graph
var Subgraph = /*#__PURE__*/function () {
  function Subgraph() {
    _classCallCheck(this, Subgraph);
    this.size = [140, 80];
    this.properties = {
      enabled: true
    };
    this.enabled = true;

    // create inner graph
    this.subgraph = new LiteGraph.LGraph();
    this.subgraph._subgraph_node = this;
    this.subgraph._is_subgraph = true;
    this.subgraph.onTrigger = this.onSubgraphTrigger.bind(this);

    // nodes input node added inside
    this.subgraph.onInputAdded = this.onSubgraphNewInput.bind(this);
    this.subgraph.onInputRenamed = this.onSubgraphRenamedInput.bind(this);
    this.subgraph.onInputTypeChanged = this.onSubgraphTypeChangeInput.bind(this);
    this.subgraph.onInputRemoved = this.onSubgraphRemovedInput.bind(this);
    this.subgraph.onOutputAdded = this.onSubgraphNewOutput.bind(this);
    this.subgraph.onOutputRenamed = this.onSubgraphRenamedOutput.bind(this);
    this.subgraph.onOutputTypeChanged = this.onSubgraphTypeChangeOutput.bind(this);
    this.subgraph.onOutputRemoved = this.onSubgraphRemovedOutput.bind(this);
  }
  return _createClass(Subgraph, [{
    key: "onGetInputs",
    value: function onGetInputs() {
      return [["enabled", "boolean"]];
    }

    /*
    Subgraph.prototype.onDrawTitle = function(ctx) {
        if (this.flags.collapsed) {
            return;
        }
         ctx.fillStyle = "#555";
        var w = LiteGraph.NODE_TITLE_HEIGHT;
        var x = this.size[0] - w;
        ctx.fillRect(x, -w, w, w);
        ctx.fillStyle = "#333";
        ctx.beginPath();
        ctx.moveTo(x + w * 0.2, -w * 0.6);
        ctx.lineTo(x + w * 0.8, -w * 0.6);
        ctx.lineTo(x + w * 0.5, -w * 0.3);
        ctx.fill();
    };
    */
  }, {
    key: "onDblClick",
    value: function onDblClick(e, pos, graphcanvas) {
      var that = this;
      setTimeout(function () {
        graphcanvas.openSubgraph(that.subgraph);
      }, 10);
    }

    /*
    Subgraph.prototype.onMouseDown = function(e, pos, graphcanvas) {
        if (
            !this.flags.collapsed &&
            pos[0] > this.size[0] - LiteGraph.NODE_TITLE_HEIGHT &&
            pos[1] < 0
        ) {
            var that = this;
            setTimeout(function() {
                graphcanvas.openSubgraph(that.subgraph);
            }, 10);
        }
    };
    */
  }, {
    key: "onAction",
    value: function onAction(action, param) {
      LiteGraph.log_debug.apply(LiteGraph, ["subgraph", "onAction"].concat(Array.prototype.slice.call(arguments)));
      this.subgraph.onAction(action, param);
    }
  }, {
    key: "onExecute",
    value: function onExecute() {
      this.enabled = this.getInputOrProperty("enabled");
      if (!this.enabled) {
        return;
      }

      // send inputs to subgraph global inputs
      if (this.inputs) {
        for (var i = 0; i < this.inputs.length; i++) {
          var input = this.inputs[i];
          var value = this.getInputData(i);
          this.subgraph.setInputData(input.name, value);
        }
      }

      // execute
      LiteGraph.log_verbose("subgraph", "onExecute", "subgraph runStep", this.subgraph);
      this.subgraph.runStep();

      // send subgraph global outputs to outputs
      if (this.outputs) {
        for (var _i = 0; _i < this.outputs.length; _i++) {
          var output = this.outputs[_i];
          var _value = this.subgraph.getOutputData(output.name);
          LiteGraph.log_verbose("subgraph", "onExecute", "outputDataSet", _i, _value);
          this.setOutputData(_i, _value);
        }
      }
    }
  }, {
    key: "sendEventToAllNodes",
    value: function sendEventToAllNodes(eventname, param, mode) {
      if (this.enabled) {
        LiteGraph.log_debug.apply(LiteGraph, ["subgraph", "sendEventToAllNodes"].concat(Array.prototype.slice.call(arguments)));
        this.subgraph.sendEventToAllNodes(eventname, param, mode);
      }
    }
  }, {
    key: "onDrawBackground",
    value: function onDrawBackground(ctx, graphcanvas, canvas, pos) {
      if (this.flags.collapsed) return;
      var y = this.size[1] - LiteGraph.NODE_TITLE_HEIGHT + 0.5;
      // button
      var over = LiteGraph.isInsideRectangle(pos[0], pos[1], this.pos[0], this.pos[1] + y, this.size[0], LiteGraph.NODE_TITLE_HEIGHT);
      var overleft = LiteGraph.isInsideRectangle(pos[0], pos[1], this.pos[0], this.pos[1] + y, this.size[0] / 2, LiteGraph.NODE_TITLE_HEIGHT);
      ctx.fillStyle = over ? "#555" : "#222";
      ctx.beginPath();
      if (this._shape == LiteGraph.BOX_SHAPE) {
        if (overleft) {
          ctx.rect(0, y, this.size[0] / 2 + 1, LiteGraph.NODE_TITLE_HEIGHT);
        } else {
          ctx.rect(this.size[0] / 2, y, this.size[0] / 2 + 1, LiteGraph.NODE_TITLE_HEIGHT);
        }
      } else {
        if (overleft) {
          ctx.roundRect(0, y, this.size[0] / 2 + 1, LiteGraph.NODE_TITLE_HEIGHT, [0, 0, 8, 8]);
        } else {
          ctx.roundRect(this.size[0] / 2, y, this.size[0] / 2 + 1, LiteGraph.NODE_TITLE_HEIGHT, [0, 0, 8, 8]);
        }
      }
      if (over) {
        ctx.fill();
      } else {
        ctx.fillRect(0, y, this.size[0] + 1, LiteGraph.NODE_TITLE_HEIGHT);
      }
      // button
      ctx.textAlign = "center";
      ctx.font = "24px Arial";
      ctx.fillStyle = over ? "#DDD" : "#999";
      ctx.fillText("+", this.size[0] * 0.25, y + 24);
      ctx.fillText("+", this.size[0] * 0.75, y + 24);
    }

    // Subgraph.prototype.onMouseDown = function(e, localpos, graphcanvas)
    // {
    // 	var y = this.size[1] - LiteGraph.NODE_TITLE_HEIGHT + 0.5;
    // 	if(localpos[1] > y)
    // 	{
    // 		graphcanvas.showSubgraphPropertiesDialog(this);
    // 	}
    // }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e, localpos, graphcanvas) {
      var _console$log, _console;
      var y = this.size[1] - LiteGraph.NODE_TITLE_HEIGHT + 0.5;
      (_console$log = (_console = console).log) === null || _console$log === void 0 || _console$log.call(_console, 0);
      if (localpos[1] > y) {
        if (localpos[0] < this.size[0] / 2) {
          var _console$log2, _console2;
          (_console$log2 = (_console2 = console).log) === null || _console$log2 === void 0 || _console$log2.call(_console2, 1);
          graphcanvas.showSubgraphPropertiesDialog(this);
        } else {
          var _console$log3, _console3;
          (_console$log3 = (_console3 = console).log) === null || _console$log3 === void 0 || _console$log3.call(_console3, 2);
          graphcanvas.showSubgraphPropertiesDialogRight(this);
        }
      }
    }
  }, {
    key: "computeSize",
    value: function computeSize() {
      var num_inputs = this.inputs ? this.inputs.length : 0;
      var num_outputs = this.outputs ? this.outputs.length : 0;
      return [200, Math.max(num_inputs, num_outputs) * LiteGraph.NODE_SLOT_HEIGHT + LiteGraph.NODE_TITLE_HEIGHT];
    }

    //* *** INPUTS ***********************************
  }, {
    key: "onSubgraphTrigger",
    value: function onSubgraphTrigger(event) {
      LiteGraph.log_debug.apply(LiteGraph, ["subgraph", "onSubgraphTrigger"].concat(Array.prototype.slice.call(arguments)));
      var slot = this.findOutputSlot(event);
      if (slot != -1) {
        this.triggerSlot(slot);
      }
    }
  }, {
    key: "onSubgraphNewInput",
    value: function onSubgraphNewInput(name, type) {
      var slot = this.findInputSlot(name);
      if (slot == -1) {
        // add input to the node
        this.addInput(name, type);
      }
    }
  }, {
    key: "onSubgraphRenamedInput",
    value: function onSubgraphRenamedInput(oldname, name) {
      var slot = this.findInputSlot(oldname);
      if (slot == -1) {
        return;
      }
      var info = this.getInputInfo(slot);
      info.name = name;
    }
  }, {
    key: "onSubgraphTypeChangeInput",
    value: function onSubgraphTypeChangeInput(name, type) {
      var slot = this.findInputSlot(name);
      if (slot == -1) {
        return;
      }
      var info = this.getInputInfo(slot);
      info.type = type;
    }
  }, {
    key: "onSubgraphRemovedInput",
    value: function onSubgraphRemovedInput(name) {
      var slot = this.findInputSlot(name);
      if (slot == -1) {
        return;
      }
      this.removeInput(slot);
    }

    //* *** OUTPUTS ***********************************
  }, {
    key: "onSubgraphNewOutput",
    value: function onSubgraphNewOutput(name, type) {
      var slot = this.findOutputSlot(name);
      if (slot == -1) {
        this.addOutput(name, type);
      }
    }
  }, {
    key: "onSubgraphRenamedOutput",
    value: function onSubgraphRenamedOutput(oldname, name) {
      var slot = this.findOutputSlot(oldname);
      if (slot == -1) {
        return;
      }
      var info = this.getOutputInfo(slot);
      info.name = name;
    }
  }, {
    key: "onSubgraphTypeChangeOutput",
    value: function onSubgraphTypeChangeOutput(name, type) {
      var slot = this.findOutputSlot(name);
      if (slot == -1) {
        return;
      }
      var info = this.getOutputInfo(slot);
      info.type = type;
    }
  }, {
    key: "onSubgraphRemovedOutput",
    value: function onSubgraphRemovedOutput(name) {
      var slot = this.findOutputSlot(name);
      if (slot == -1) {
        return;
      }
      this.removeOutput(slot);
    }
  }, {
    key: "getExtraMenuOptions",
    value: function getExtraMenuOptions(graphcanvas) {
      var that = this;
      return [{
        content: "Open",
        callback: function callback() {
          graphcanvas.openSubgraph(that.subgraph);
        }
      }];
    }
  }, {
    key: "onResize",
    value: function onResize(size) {
      size[1] += 20; // TODO check and verify onResize callback :: using byRef! 
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var data = LiteGraph.LGraphNode.prototype.serialize.call(this);
      data.subgraph = this.subgraph.serialize();
      return data;
    }

    // no need to define node.configure, the default method detects node.subgraph and passes the object to node.subgraph.configure()
  }, {
    key: "reassignSubgraphUUIDs",
    value: function reassignSubgraphUUIDs(graph) {
      var idMap = {
        nodeIDs: {},
        linkIDs: {}
      };
      var _iterator = _createForOfIteratorHelper(graph.nodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _node = _step.value;
          var oldID = _node.id;
          var newID = LiteGraph.uuidv4();
          _node.id = newID;
          if (idMap.nodeIDs[oldID] || idMap.nodeIDs[newID]) {
            throw new Error("New/old node UUID wasn't unique in changed map! ".concat(oldID, " ").concat(newID));
          }
          idMap.nodeIDs[oldID] = newID;
          idMap.nodeIDs[newID] = oldID;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(graph.links),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var link = _step2.value;
          var _oldID = link[0];
          var _newID = LiteGraph.uuidv4();
          link[0] = _newID;
          if (idMap.linkIDs[_oldID] || idMap.linkIDs[_newID]) {
            throw new Error("New/old link UUID wasn't unique in changed map! ".concat(_oldID, " ").concat(_newID));
          }
          idMap.linkIDs[_oldID] = _newID;
          idMap.linkIDs[_newID] = _oldID;
          var nodeFrom = link[1];
          var nodeTo = link[3];
          if (!idMap.nodeIDs[nodeFrom]) {
            throw new Error("Old node UUID not found in mapping! ".concat(nodeFrom));
          }
          link[1] = idMap.nodeIDs[nodeFrom];
          if (!idMap.nodeIDs[nodeTo]) {
            throw new Error("Old node UUID not found in mapping! ".concat(nodeTo));
          }
          link[3] = idMap.nodeIDs[nodeTo];
        }

        // Reconnect links
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(graph.nodes),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _node2 = _step3.value;
          if (_node2.inputs) {
            var _iterator5 = _createForOfIteratorHelper(_node2.inputs),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var input = _step5.value;
                if (input.link) {
                  input.link = idMap.linkIDs[input.link];
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          if (_node2.outputs) {
            var _iterator6 = _createForOfIteratorHelper(_node2.outputs),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var output = _step6.value;
                if (output.links) {
                  output.links = output.links.map(function (l) {
                    return idMap.linkIDs[l];
                  });
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }

        // Recurse!
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(graph.nodes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _node3 = _step4.value;
          if (_node3.type === "graph/subgraph") {
            var merge = reassignGraphUUIDs(_node3.subgraph);
            idMap.nodeIDs.assign(merge.nodeIDs);
            idMap.linkIDs.assign(merge.linkIDs);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      var node = LiteGraph.createNode(this.type);
      var data = this.serialize();
      if (LiteGraph.use_uuids) {
        // LiteGraph.LGraph.serialize() seems to reuse objects in the original graph. But we
        // need to change node IDs here, so clone it first.
        var subgraph = LiteGraph.cloneObject(data.subgraph);
        this.reassignSubgraphUUIDs(subgraph);
        data.subgraph = subgraph;
      }
      delete data["id"];
      delete data["inputs"];
      delete data["outputs"];
      node.configure(data);
      return node;
    }
  }, {
    key: "buildFromNodes",
    value: function buildFromNodes(nodes) {
      // clear all?
      // TODO

      // nodes that connect data between parent graph and subgraph

      // mark inner nodes
      var ids = {};
      // TODO: these aren't currently used.  Examine and decide whether to excise.
      //    var min_x = 0;
      //    var max_x = 0;
      for (var i = 0; i < nodes.length; ++i) {
        ids[node.id] = nodes[i];
        //      min_x = Math.min(node.pos[0], min_x);
        //      max_x = Math.max(node.pos[0], min_x);
      }
      for (var _i2 = 0; _i2 < nodes.length; ++_i2) {
        var _node4 = nodes[_i2];
        // check inputs
        if (_node4.inputs) for (var j = 0; j < _node4.inputs.length; ++j) {
          var input = _node4.inputs[j];
          if (!input || !input.link) continue;
          var link = _node4.graph.links[input.link];
          if (!link) continue;
          if (ids[link.origin_id]) continue;
          // this.addInput(input.name,link.type);
          this.subgraph.addInput(input.name, link.type);
          /*
          var input_node = LiteGraph.createNode("graph/input");
          this.subgraph.add( input_node );
          input_node.pos = [min_x - 200, last_input_y ];
          last_input_y += 100;
          */
        }

        // check outputs
        if (_node4.outputs) for (var _j = 0; _j < _node4.outputs.length; ++_j) {
          var output = _node4.outputs[_j];
          if (!output || !output.links || !output.links.length) continue;
          //    var is_external = false;
          for (var k = 0; k < output.links.length; ++k) {
            var _link = _node4.graph.links[output.links[k]];
            if (!_link) continue;
            if (ids[_link.target_id]) continue;
            //        is_external = true;
            break;
          }
          // if (!is_external) continue;
          // this.addOutput(output.name,output.type);
          /*
          var output_node = LiteGraph.createNode("graph/output");
          this.subgraph.add( output_node );
          output_node.pos = [max_x + 50, last_output_y ];
          last_output_y += 100;
          */
        }
      }

      // detect inputs and outputs
      // split every connection in two data_connection nodes
      // keep track of internal connections
      // connect external connections

      // clone nodes inside subgraph and try to reconnect them

      // connect edge subgraph nodes to extarnal connections nodes
    }
  }]);
}();
_defineProperty(Subgraph, "title", "Subgraph");
_defineProperty(Subgraph, "desc", "Graph inside a node");
_defineProperty(Subgraph, "title_color", "#334");
var GraphInput = /*#__PURE__*/function () {
  function GraphInput() {
    _classCallCheck(this, GraphInput);
    this.addOutput("", "number");
    this.name_in_graph = "";
    this.properties = {
      name: "",
      type: "number",
      value: 0
    };
    var that = this;
    this.name_widget = this.addWidget("text", "Name", this.properties.name, function (v) {
      if (!v) {
        return;
      }
      that.setProperty("name", v);
    });
    this.type_widget = this.addWidget("text", "Type", this.properties.type, function (v) {
      that.setProperty("type", v);
    });
    this.value_widget = this.addWidget("number", "Value", this.properties.value, function (v) {
      that.setProperty("value", v);
    });
    this.widgets_up = true;
    this.size = [180, 90];
  }
  return _createClass(GraphInput, [{
    key: "onConfigure",
    value: function onConfigure() {
      this.updateType();
    }

    // ensures the type in the node output and the type in the associated graph input are the same
  }, {
    key: "updateType",
    value: function updateType() {
      var type = this.properties.type;
      this.type_widget.value = type;

      // update output
      if (type == "action" || type == "event") type = LiteGraph.EVENT;
      if (this.outputs[0].type !== type) {
        if (!LiteGraph.isValidConnection(this.outputs[0].type, type)) this.disconnectOutput(0);
        this.outputs[0].type = type;
      }
      this.properties.type = type;

      // update widget
      if (type == "number") {
        this.value_widget.type = "number";
        this.value_widget.value = Number(); // 0
      } else if (type == "boolean") {
        this.value_widget.type = "toggle";
        this.value_widget.value = this.value_widget.value && (this.value_widget.value + "").toLocaleLowerCase() !== "false" && this.value_widget.value !== "" ? true : false; // "true"
      } else if (type == "string") {
        this.value_widget.type = "text";
        this.value_widget.value = this.value_widget.value + ""; // ""
      } else {
        this.value_widget.type = null;
        // this.value_widget.value = null;
      }
      this.properties.value = this.value_widget.value;

      // update graph
      if (this.graph && this.name_in_graph) {
        this.graph.changeInputType(this.name_in_graph, type);
      }
    }

    // this is executed AFTER the property has changed
  }, {
    key: "onPropertyChanged",
    value: function onPropertyChanged(name, v) {
      if (name == "name") {
        if (v == "" || v == this.name_in_graph || v == "enabled") {
          return false;
        }
        if (this.graph) {
          if (this.name_in_graph) {
            // already added
            this.graph.renameInput(this.name_in_graph, v);
          } else {
            this.graph.addInput(v, this.properties.type);
          }
        } // what if not?!
        this.name_widget.value = v;
        this.name_in_graph = v;
      } else if (name == "type") {
        this.updateType();
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      if (this.flags.collapsed) {
        return this.properties.name;
      }
      return this.title;
    }
  }, {
    key: "onAction",
    value: function onAction(action, param) {
      if (this.properties.type == LiteGraph.EVENT) {
        LiteGraph.log_debug("GraphInput", "onAction", "triggering slot", action, param);
        this.triggerSlot(0, param);
      } else {
        LiteGraph.log_debug.apply(LiteGraph, ["GraphInput", "onAction", "NOT eventAction TYPE", "this", this, "arugments"].concat(Array.prototype.slice.call(arguments)));
      }
    }
  }, {
    key: "onExecute",
    value: function onExecute() {
      var name = this.properties.name;
      // read from global input
      var data = this.graph.inputs[name];
      if (!data) {
        this.setOutputData(0, this.properties.value);
        return;
      }
      this.setOutputData(0, data.value !== undefined ? data.value : this.properties.value);
    }
  }, {
    key: "onRemoved",
    value: function onRemoved() {
      if (this.name_in_graph) {
        this.graph.removeInput(this.name_in_graph);
      }
    }
  }]);
}();

// Output for a subgraph
_defineProperty(GraphInput, "title", "Input");
_defineProperty(GraphInput, "desc", "Input of the graph");
var GraphOutput = /*#__PURE__*/function () {
  function GraphOutput() {
    _classCallCheck(this, GraphOutput);
    this.addInput("", "");
    this.name_in_graph = "";
    this.properties = {
      name: "",
      type: ""
    };

    // Object.defineProperty(this.properties, "name", {
    //     get: function() {
    //         return that.name_in_graph;
    //     },
    //     set: function(v) {
    //         if (v == "" || v == that.name_in_graph) {
    //             return;
    //         }
    //         if (that.name_in_graph) {
    //             //already added
    //             that.graph.renameOutput(that.name_in_graph, v);
    //         } else {
    //             that.graph.addOutput(v, that.properties.type);
    //         }
    //         that.name_widget.value = v;
    //         that.name_in_graph = v;
    //     },
    //     enumerable: true
    // });

    // Object.defineProperty(this.properties, "type", {
    //     get: function() {
    //         return that.inputs[0].type;
    //     },
    //     set: function(v) {
    //         if (v == "action" || v == "event") {
    //             v = LiteGraph.ACTION;
    //         }
    //         if (!LiteGraph.isValidConnection(that.inputs[0].type,v))
    // 			that.disconnectInput(0);
    //         that.inputs[0].type = v;
    //         if (that.name_in_graph) {
    //             //already added
    //             that.graph.changeOutputType(
    //                 that.name_in_graph,
    //                 that.inputs[0].type
    //             );
    //         }
    //         that.type_widget.value = v || "";
    //     },
    //     enumerable: true
    // });

    this.name_widget = this.addWidget("text", "Name", this.properties.name, "name");
    this.type_widget = this.addWidget("text", "Type", this.properties.type, "type");
    this.widgets_up = true;
    this.size = [180, 60];
  }
  return _createClass(GraphOutput, [{
    key: "onPropertyChanged",
    value: function onPropertyChanged(name, v) {
      if (name == "name") {
        if (v == "" || v == this.name_in_graph || v == "enabled") {
          return false;
        }
        if (this.graph) {
          if (this.name_in_graph) {
            // already added
            this.graph.renameOutput(this.name_in_graph, v);
          } else {
            this.graph.addOutput(v, this.properties.type);
          }
        } // what if not?!
        this.name_widget.value = v;
        this.name_in_graph = v;
      } else if (name == "type") {
        this.updateType();
      }
    }
  }, {
    key: "updateType",
    value: function updateType() {
      var type = this.properties.type;
      if (this.type_widget) this.type_widget.value = type;

      // update output
      if (type == "action" || type == "event") type = LiteGraph.EVENT;
      if (this.inputs[0].type !== type) {
        if (!LiteGraph.isValidConnection(this.inputs[0].type, type)) this.disconnectInput(0);
        this.inputs[0].type = type;
      }
      this.properties.type = type;

      // TODO CHECK why differente from GraphInput 
      /* // update widget
      if (type == "number") {
          this.value_widget.type = "number";
          this.value_widget.value = Number(); // 0
      } else if (type == "boolean") {
          this.value_widget.type = "toggle";
          this.value_widget.value = this.value_widget.value&&(this.value_widget.value+"").toLocaleLowerCase()!=="false"&&this.value_widget.value!==""?true:false; // "true"
      } else if (type == "string") {
          this.value_widget.type = "text";
          this.value_widget.value = this.value_widget.value+""; // ""
      } else {
          this.value_widget.type = null;
          // this.value_widget.value = null;
      }
      this.properties.value = this.value_widget.value; */

      // update graph
      if (this.graph && this.name_in_graph) {
        this.graph.changeOutputType(this.name_in_graph, type);
      }
    }
  }, {
    key: "onExecute",
    value: function onExecute() {
      this._value = this.getInputData(0);
      // setting graph output by name
      this.graph.setOutputData(this.properties.name, this._value);
    }
  }, {
    key: "onAction",
    value: function onAction(action, param) {
      if (this.properties.type == LiteGraph.ACTION) {
        LiteGraph.log_debug.apply(LiteGraph, ["GraphOutput", "onAction"].concat(Array.prototype.slice.call(arguments)));
        LiteGraph.log_debug("GraphOutput", "onAction", "graphTrigger", this.properties.name, param);
        // ---> subgraph_node.trigger(this.properties.name, param);
        this.triggerSlot(this.properties.name, param);
        // this.onTrigger(this.properties.name, param);
        this.graph.trigger(this.properties.name, param);
        // node.doExecute?.() !!
      } else {
        LiteGraph.log_debug("GraphOutput", "onAction", "skipping not ACTION type", this.properties.type, this.properties);
      }
    }
  }, {
    key: "onRemoved",
    value: function onRemoved() {
      if (this.name_in_graph) {
        this.graph.removeOutput(this.name_in_graph);
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      if (this.flags.collapsed) {
        return this.properties.name;
      }
      return this.title;
    }
  }]);
}();

// LiteGraph.registerNodeType("graph/subgraph", Subgraph);
// LiteGraph.registerNodeType("graph/input", GraphInput);
// LiteGraph.registerNodeType("graph/output", GraphOutput);
_defineProperty(GraphOutput, "title", "Output");
_defineProperty(GraphOutput, "desc", "Output of the graph");
var NodeFunction = /*#__PURE__*/function (_LGraphNode) {
  function NodeFunction() {
    var _this;
    _classCallCheck(this, NodeFunction);
    // this.size = [140, 80];
    // this.properties = { subgraph: null };
    // this.enabled = true;
    _this = _callSuper(this, NodeFunction, arguments);
    _this._subgraph = null;
    _this._linking = false;
    _this.addWidget("button", "subgraph_link", null, function (widget, canvas, node, pos, event) {
      var _console4;
      (_console4 = console).debug.apply(_console4, ["SUBGRAPHLINK"].concat(Array.prototype.slice.call(arguments)));
      if (node._linking) {
        node._linking = false;
        widget.name = "subgraph_link";
      } else {
        node._linking = true;
        widget.name = "click on subgraph";
      }
    });
    _this.addWidget("button", "refresh", null, _this.refreshFunctions_byEvent);
    _this.addWidget("button", "CALL", null, _this.onBtnExecute);
    _this._wCombo = _this.addWidget("combo", "functions", _this.functionChange, {
      values: []
    });
    _this._subMap = [];
    _this._subGFuncNode = null;
    _this.properties = {
      func_subgraph_id: null
    };
    return _this;
  }
  _inherits(NodeFunction, _LGraphNode);
  return _createClass(NodeFunction, [{
    key: "onBtnExecute",
    value: function onBtnExecute(value, canvas, node, pos, event, value_second) {
      var _console5;
      (_console5 = console).error.apply(_console5, ["SELFEXECUTE", this].concat(Array.prototype.slice.call(arguments)));
      node.doExecute();
    }
  }, {
    key: "functionChange",
    value: function functionChange(value, canvas, node, pos, event, value_second) {
      var _console6;
      console.error("FUNCTIONCHANGE", "this", this);
      (_console6 = console).error.apply(_console6, ["FUNCTIONCHANGE", "arguments"].concat(Array.prototype.slice.call(arguments)));
      console.error("FUNCTIONCHANGE", "node", node);
      node.btnSetFunction(null, canvas, node, pos, event);
    }
  }, {
    key: "onConfigure",
    value: function onConfigure() {
      this.ensureSubFunction();
    }

    // SETTING initial onExecute: will override when setting a proper function
    // eg. in a node.js env there will be no add and no chance to check if related node has already been added before this
  }, {
    key: "onExecute",
    value: function onExecute() {
      this.ensureSubFunction();
    }
  }, {
    key: "onAdded",
    value: function onAdded() {
      if (this.properties["func_subgraph_id"] !== null && this.properties["func_subgraph_id"] !== undefined) {
        this._wCombo.value = this.properties["func_subgraph_id"];
      }
      this.refreshFunctions();
    }
  }, {
    key: "refreshFunctions_byEvent",
    value: function refreshFunctions_byEvent(widget, canvas, node, pos, event) {
      node.refreshFunctions.bind(node);
    }
  }, {
    key: "refreshFunctions",
    value: function refreshFunctions() {
      var _this$graph,
        _this2 = this;
      var aSubgraphs = (_this$graph = this.graph) === null || _this$graph === void 0 ? void 0 : _this$graph.findNodesByClass(Subgraph);
      console.debug("NODEFUNCTION refreshFunctions", this, aSubgraphs, this._wCombo);
      this._wCombo.options.values = {};
      this._subMap = [];
      if (aSubgraphs && aSubgraphs.length) {
        aSubgraphs.forEach(function (element) {
          // using array
          // this._wCombo.options.values.push(element.title);
          // using object
          _this2._wCombo.options.values[element.id] = element.title;
          _this2._subMap.push(element.id);
          if (_this2.properties["func_subgraph_id"] === element.id) {
            _this2._wCombo.value = element.id;
          }
        });
      }
    }
  }, {
    key: "ensureSubFunction",
    value: function ensureSubFunction() {
      if (!this._subGFuncNode) {
        if (this.properties["func_subgraph_id"] !== null && this.properties["func_subgraph_id"] !== undefined) {
          // this.refreshFunctions();
          this.lookForFuncNodeById(this.properties["func_subgraph_id"]);
          this.refreshFunctions();
        }
      }
    }
  }, {
    key: "lookForFuncNodeById",
    value: function lookForFuncNodeById(nId) {
      var subGFuncNode = this.graph.getNodeById(nId);
      if (subGFuncNode) {
        console.error("NODEFUNCTION CALL", "this?", this);
        this.updateSubFunction(subGFuncNode);
      } else {
        console.error("NODEFUNCTION CALL", "nodeNotFound", nId);
        this.updateSubFunction(false);
      }
    }
  }, {
    key: "btnSetFunction",
    value: function btnSetFunction(widget, canvas, node, pos, event) {
      console.debug("NODEFUNCTION CALL", node, node._wCombo.value);
      this.lookForFuncNodeById(node._wCombo.value);
    }
  }, {
    key: "updateSubFunction",
    value: function updateSubFunction(nodeFrom) {
      var _this3 = this;
      // const nodeFrom = this._subGFuncNode;
      this._subGFuncNode = nodeFrom;
      // const nodeFrom = this._subGFuncNode;
      console.debug("REFRESHSLOTS", this);
      if (nodeFrom !== undefined && nodeFrom !== null && nodeFrom) {
        this.properties["func_subgraph_id"] = nodeFrom.id;
        // this.inputs = LiteGraph.cloneObject(nodeFrom.inputs) ?? [];
        nodeFrom.inputs.forEach(function (element, index) {
          // element.links = [];
          if (typeof _this3.inputs[index] !== "undefined" && _this3.inputs[index].type == element.type) ; else {
            _this3.inputs[index] = {
              name: element.name,
              type: element.type
            };
          }
        });
        // this.outputs = LiteGraph.cloneObject(nodeFrom.outputs) ?? [];
        nodeFrom.outputs.forEach(function (element, index) {
          // element.links = [];
          if (typeof _this3.outputs[index] !== "undefined" && _this3.outputs[index].type == element.type) ; else {
            _this3.outputs[index] = {
              name: element.name,
              type: element.type
            };
          }
        });
        this.autoSize();
      } else {
        this.properties["func_subgraph_id"] = null;
        this.inputs = [];
        this.outputs = [];
      }
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var nodeFrom = this._subGFuncNode;
      console.debug("BINDEVENTS", this);
      if (nodeFrom !== undefined && nodeFrom !== null && nodeFrom) {
        this.onExecute = function () {
          var _this4 = this;
          console.debug("NODEFUNCTION executing", this);
          // should execute subgraph passing right values
          this.inputs.forEach(function (element, index) {
            var iVal = _this4.getInputData(index);
            nodeFrom.inputs[index].hard_coded_value = iVal;
            console.debug("read and set input data", index, iVal);
          });
          // --
          console.debug("execute function node", nodeFrom);
          nodeFrom.doExecute();
          // --
          this.outputs.forEach(function (element, index) {
            // nodeFrom.outputs[index].hard_coded_value ?
            var oVal = nodeFrom.getOutputData(index);
            // BAD // set to related graph output
            // BAD nodeFrom.graph.setOutputData(element.name, oVal);
            // BAD console.debug("read and set graph output data", index, element, oVal);
            // set to node output, not enough ?
            _this4.setOutputData(index, oVal);
            console.debug("read and set output node data", index, oVal);
          });
          // --
          // than clean inputs
          this.inputs.forEach(function (element, index) {
            delete nodeFrom.inputs[index].hard_coded_value;
            console.debug("clean hard coded input data", index);
          });
        };
      } else {
        this.onExecute = function () {
          // no action
          console.debug("NODEFUNCTION has no functionset", this);
        };
      }
    }
  }]);
}(LGraphNode);
_defineProperty(NodeFunction, "title", "NodeFunction");
_defineProperty(NodeFunction, "desc", "Subgraph as function");

// global.js
function getGlobalObject() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('Unable to determine global object');
}
function setGlobalVariable(key, value) {
  var globalObject = getGlobalObject();
  globalObject[key] = value;
}
function getGlobalVariable(key) {
  var globalObject = getGlobalObject();
  return globalObject[key];
}

/**
 * @class LiteGraph
 *
 * @NOTE:
 * Try to avoid adding things to this class.
 * https://dzone.com/articles/singleton-anti-pattern
 */
var LiteGraphClass = /*#__PURE__*/function () {
  // set via this.logging_set_level

  function LiteGraphClass() {
    _classCallCheck(this, LiteGraphClass);
    _defineProperty(this, "VERSION", "a0.11.0");
    _defineProperty(this, "LLink", null);
    //LLink;
    _defineProperty(this, "LGraph", null);
    //LGraph;
    _defineProperty(this, "LGraphNode", null);
    //LGraphNode;
    _defineProperty(this, "LGraphGroup", null);
    //LGraphGroup;
    _defineProperty(this, "LGraphCanvas", null);
    //LGraphCanvas;
    _defineProperty(this, "Subgraph", null);
    //Subgraph;
    _defineProperty(this, "GraphInput", null);
    //GraphInput;
    _defineProperty(this, "GraphOutput", null);
    //GraphOutput;
    _defineProperty(this, "DragAndScale", null);
    //DragAndScale;
    _defineProperty(this, "ContextMenuClass", null);
    //ContextMenuClass;
    _defineProperty(this, "ContextMenu", null);
    // ContextMenu = function(){ return new ContextMenuClass(...arguments); };
    _defineProperty(this, "CallbackHandler", null);
    //CallbackHandler;
    _defineProperty(this, "CANVAS_GRID_SIZE", 10);
    _defineProperty(this, "NODE_TITLE_HEIGHT", 30);
    _defineProperty(this, "NODE_TITLE_TEXT_Y", 20);
    _defineProperty(this, "NODE_SLOT_HEIGHT", 20);
    _defineProperty(this, "NODE_WIDGET_HEIGHT", 20);
    _defineProperty(this, "NODE_WIDTH", 140);
    _defineProperty(this, "NODE_MIN_WIDTH", 50);
    _defineProperty(this, "NODE_MIN_SIZE", [50, 0]);
    _defineProperty(this, "NODE_COLLAPSED_RADIUS", 10);
    _defineProperty(this, "NODE_COLLAPSED_WIDTH", 80);
    _defineProperty(this, "NODE_TITLE_COLOR", "#999");
    _defineProperty(this, "NODE_SELECTED_TITLE_COLOR", "#FFF");
    _defineProperty(this, "NODE_TEXT_SIZE", 14);
    _defineProperty(this, "NODE_TEXT_COLOR", "#AAA");
    _defineProperty(this, "NODE_SUBTEXT_SIZE", 12);
    _defineProperty(this, "NODE_DEFAULT_COLOR", "#333");
    _defineProperty(this, "NODE_DEFAULT_BGCOLOR", "#353535");
    _defineProperty(this, "NODE_DEFAULT_BOXCOLOR", "#666");
    _defineProperty(this, "NODE_DEFAULT_SHAPE", "box");
    _defineProperty(this, "NODE_BOX_OUTLINE_COLOR", "#FFF");
    _defineProperty(this, "DEFAULT_SHADOW_COLOR", "rgba(0,0,0,0.5)");
    _defineProperty(this, "DEFAULT_GROUP_FONT", 24);
    _defineProperty(this, "WIDGET_BGCOLOR", "#222");
    _defineProperty(this, "WIDGET_OUTLINE_COLOR", "#666");
    _defineProperty(this, "WIDGET_TEXT_COLOR", "#DDD");
    _defineProperty(this, "WIDGET_SECONDARY_TEXT_COLOR", "#999");
    _defineProperty(this, "LINK_COLOR", "#9A9");
    _defineProperty(this, "EVENT_LINK_COLOR", "#A86");
    _defineProperty(this, "CONNECTING_LINK_COLOR", "#AFA");
    _defineProperty(this, "MAX_NUMBER_OF_NODES", 1000);
    // avoid infinite loops
    _defineProperty(this, "DEFAULT_POSITION", [100, 100]);
    // default node position
    _defineProperty(this, "VALID_SHAPES", ["default", "box", "round", "card"]);
    // ,"circle"
    // shapes are used for nodes but also for slots
    _defineProperty(this, "BOX_SHAPE", 1);
    _defineProperty(this, "ROUND_SHAPE", 2);
    _defineProperty(this, "CIRCLE_SHAPE", 3);
    _defineProperty(this, "CARD_SHAPE", 4);
    _defineProperty(this, "ARROW_SHAPE", 5);
    _defineProperty(this, "GRID_SHAPE", 6);
    // intended for slot arrays
    // enums
    _defineProperty(this, "INPUT", 1);
    _defineProperty(this, "OUTPUT", 2);
    _defineProperty(this, "EVENT", -1);
    // for outputs
    _defineProperty(this, "ACTION", -1);
    // for inputs
    _defineProperty(this, "NODE_MODES", ["Always", "On Event", "Never", "On Trigger", "On Request"]);
    // helper
    _defineProperty(this, "NODE_MODES_COLORS", ["#666", "#422", "#333", "#224", "#626"]);
    // use with node_box_coloured_by_mode
    _defineProperty(this, "ALWAYS", 0);
    _defineProperty(this, "ON_EVENT", 1);
    _defineProperty(this, "NEVER", 2);
    _defineProperty(this, "ON_TRIGGER", 3);
    _defineProperty(this, "ON_REQUEST", 4);
    // used from event-based nodes, where ancestors are recursively executed on needed
    _defineProperty(this, "UP", 1);
    _defineProperty(this, "DOWN", 2);
    _defineProperty(this, "LEFT", 3);
    _defineProperty(this, "RIGHT", 4);
    _defineProperty(this, "CENTER", 5);
    _defineProperty(this, "LINK_RENDER_MODES", ["Straight", "Linear", "Spline"]);
    // helper
    _defineProperty(this, "STRAIGHT_LINK", 0);
    _defineProperty(this, "LINEAR_LINK", 1);
    _defineProperty(this, "SPLINE_LINK", 2);
    _defineProperty(this, "NORMAL_TITLE", 0);
    _defineProperty(this, "NO_TITLE", 1);
    _defineProperty(this, "TRANSPARENT_TITLE", 2);
    _defineProperty(this, "AUTOHIDE_TITLE", 3);
    _defineProperty(this, "VERTICAL_LAYOUT", "vertical");
    // arrange nodes vertically
    _defineProperty(this, "proxy", null);
    // used to redirect calls
    _defineProperty(this, "node_images_path", "");
    _defineProperty(this, "catch_exceptions", true);
    _defineProperty(this, "throw_errors", true);
    _defineProperty(this, "allow_scripts", false);
    // nodes should be check this value before executing unsafe code :: does not prevent anything in the main library, implement in nodes :: if set to true some nodes like Formula would be allowed to evaluate code that comes from unsafe sources (like node configuration), which could lead to exploits
    _defineProperty(this, "use_deferred_actions", true);
    // executes actions during the graph execution flow
    _defineProperty(this, "registered_node_types", {});
    // nodetypes by string
    _defineProperty(this, "node_types_by_file_extension", {});
    // used for dropping files in the canvas
    _defineProperty(this, "Nodes", {});
    // node types by classname
    _defineProperty(this, "Globals", {});
    // used to store vars between graphs
    _defineProperty(this, "searchbox_extras", {});
    // used to add extra features to the search box
    _defineProperty(this, "auto_sort_node_types", false);
    // [true!] If set to true, will automatically sort node types / categories in the context menus
    _defineProperty(this, "node_box_coloured_when_on", false);
    // [true!] this make the nodes box (top left circle) coloured when triggered (execute/action), visual feedback
    _defineProperty(this, "node_box_coloured_by_mode", false);
    // [true!] nodebox based on node mode, visual feedback
    _defineProperty(this, "dialog_close_on_mouse_leave", true);
    // [false on mobile] better true if not touch device, TODO add an helper/listener to close if false
    _defineProperty(this, "dialog_close_on_mouse_leave_delay", 500);
    _defineProperty(this, "shift_click_do_break_link_from", true);
    // [false!] prefer false if too easy to break links - implement with ALT or TODO custom keys
    _defineProperty(this, "click_do_break_link_to", false);
    // [false!]prefer false, way too easy to break links
    _defineProperty(this, "search_filter_enabled", false);
    // [true!] enable filtering slots type in the search widget, !requires auto_load_slot_types or manual set registered_slot_[in/out]_types and slot_types_[in/out]
    _defineProperty(this, "search_hide_on_mouse_leave", true);
    // [false on mobile] better true if not touch device, TODO add an helper/listener to close if false
    _defineProperty(this, "search_hide_on_mouse_leave_time", 1200);
    // time before hiding
    _defineProperty(this, "search_show_all_on_open", true);
    // [true!] opens the results list when opening the search widget
    _defineProperty(this, "show_node_tooltip", false);
    // [true!] show a tooltip with node property "tooltip" over the selected node
    _defineProperty(this, "show_node_tooltip_use_descr_property", false);
    // enabled tooltip from desc when property tooltip not set
    _defineProperty(this, "auto_load_slot_types", false);
    // [if want false, use true, run, get vars values to be statically set, than disable] nodes types and nodeclass association with node types need to be calculated, if dont want this, calculate once and set registered_slot_[in/out]_types and slot_types_[in/out]
    // set these values if not using auto_load_slot_types
    _defineProperty(this, "registered_slot_in_types", {});
    // slot types for nodeclass
    _defineProperty(this, "registered_slot_out_types", {});
    // slot types for nodeclass
    _defineProperty(this, "slot_types_in", []);
    // slot types IN
    _defineProperty(this, "slot_types_out", []);
    // slot types OUT
    _defineProperty(this, "slot_types_default_in", []);
    // specify for each IN slot type a(/many) default node(s), use single string, array, or object (with node, title, parameters, ..) like for search
    _defineProperty(this, "slot_types_default_out", []);
    // specify for each OUT slot type a(/many) default node(s), use single string, array, or object (with node, title, parameters, ..) like for search
    _defineProperty(this, "graphDefaultConfig", {
      align_to_grid: true,
      links_ontop: false
    });
    _defineProperty(this, "alt_drag_do_clone_nodes", false);
    // [true!] very handy, ALT click to clone and drag the new node
    _defineProperty(this, "alt_shift_drag_connect_clone_with_input", true);
    // [true!] very handy, when cloning, keep input connections with SHIFT
    _defineProperty(this, "do_add_triggers_slots", false);
    // [true!] will create and connect event slots when using action/events connections, !WILL CHANGE node mode when using onTrigger (enable mode colors), onExecuted does not need this
    _defineProperty(this, "allow_multi_output_for_events", true);
    // [false!] being events, it is strongly reccomended to use them sequentially, one by one
    _defineProperty(this, "middle_click_slot_add_default_node", false);
    // [true!] allows to create and connect a ndoe clicking with the third button (wheel)
    _defineProperty(this, "release_link_on_empty_shows_menu", false);
    // [true!] dragging a link to empty space will open a menu, add from list, search or defaults
    _defineProperty(this, "two_fingers_opens_menu", false);
    // [true!] using pointer event isPrimary, when is not simulate right click
    _defineProperty(this, "backspace_delete", true);
    // [false!] delete key is enough, don't mess with text edit and custom
    _defineProperty(this, "ctrl_shift_v_paste_connect_unselected_outputs", false);
    // [true!] allows ctrl + shift + v to paste nodes with the outputs of the unselected nodes connected with the inputs of the newly pasted nodes
    _defineProperty(this, "actionHistory_enabled", false);
    // cntrlZ, cntrlY
    _defineProperty(this, "actionHistoryMaxSave", 300);
    /* EXECUTING ACTIONS AFTER UPDATING VALUES - ANCESTORS */
    _defineProperty(this, "refreshAncestorsOnTriggers", false);
    // [true!]
    _defineProperty(this, "refreshAncestorsOnActions", false);
    // [true!]
    _defineProperty(this, "ensureUniqueExecutionAndActionCall", false);
    // [true!] the new tecnique.. let's make it working best of
    // if true, all newly created nodes/links will use string UUIDs for their id fields instead of integers.
    // use this if you must have node IDs that are unique across all graphs and subgraphs.
    _defineProperty(this, "use_uuids", false);
    // enable filtering elements of the context menu with keypress (+ arrows for navigation, escape to close)
    _defineProperty(this, "context_menu_filter_enabled", false);
    // FIX event handler removal
    // ,"editor_alpha" //= 1; //used for transition
    _defineProperty(this, "canRemoveSlots", true);
    _defineProperty(this, "canRemoveSlots_onlyOptional", true);
    _defineProperty(this, "canRenameSlots", true);
    _defineProperty(this, "canRenameSlots_onlyOptional", true);
    _defineProperty(this, "ensureNodeSingleExecution", false);
    // OLD this will prevent nodes to be executed more than once for step (comparing graph.iteration)
    _defineProperty(this, "ensureNodeSingleAction", false);
    // OLD this will prevent nodes to be executed more than once for action call!
    _defineProperty(this, "preventAncestorRecalculation", false);
    // OLD(?) when calculating the ancestors, set a flag to prevent recalculate the subtree
    _defineProperty(this, "allowMultiOutputForEvents", false);
    // being events, it is strongly reccomended to use them sequentually, one by one
    _defineProperty(this, "reprocess_slot_while_node_configure", false);
    // reprocess inputs and output node slots comparing by name, will fix index changes, works on dynamics
    _defineProperty(this, "properties_allow_input_binding", false);
    // [true!] allow create and bind inputs, will update binded property value on node execute 
    _defineProperty(this, "properties_allow_output_binding", false);
    // [true!] allow create and bind outputs, will update output slots when node executed 
    _defineProperty(this, "log_methods", ['error', 'warn', 'info', 'log', 'debug']);
    _defineProperty(this, "cb_handler", false);
    _defineProperty(this, "debug", true);
    // enable/disable logging :: in this.debug_level is stored the actual numeric value
    _defineProperty(this, "debug_level", 2);
    _defineProperty(this, "extendClass", function (target, origin) {
      for (var i in origin) {
        // copy class properties
        if (target.hasOwnProperty(i)) {
          continue;
        }
        target[i] = origin[i];
      }
      if (origin.prototype) {
        // copy prototype properties
        for (var _i in origin.prototype) {
          // only enumerable
          if (!origin.prototype.hasOwnProperty(_i)) {
            continue;
          }
          if (target.prototype.hasOwnProperty(_i)) {
            // avoid overwriting existing ones
            continue;
          }

          // copy getters
          if (origin.prototype.__lookupGetter__(_i)) {
            target.prototype.__defineGetter__(_i, origin.prototype.__lookupGetter__(_i));
          } else {
            target.prototype[_i] = origin.prototype[_i];
          }

          // and setters
          if (origin.prototype.__lookupSetter__(_i)) {
            target.prototype.__defineSetter__(_i, origin.prototype.__lookupSetter__(_i));
          }
        }
      }
    });
    // used to create nodes from wrapping functions
    _defineProperty(this, "getParameterNames", function (func) {
      return (func + "").replace(/[/][/].*$/gm, "") // strip single-line comments
      .replace(/\s+/g, "") // strip white space
      .replace(/[/][*][^/*]*[*][/]/g, "") // strip multi-line comments  /**/
      .split("){", 1)[0].replace(/^[^(]*[(]/, "") // extract the parameters
      .replace(/=[^,]+/g, "") // strip any ES6 defaults
      .split(",").filter(Boolean); // split & filter [""]
    });
    _defineProperty(this, "clamp", function (v, a, b) {
      return a > v ? a : b < v ? b : v;
    });
    // @BUG checking
    /* pointerAddListener = () => {
        console.error?.("Removed and being re-integrated sorta");
    };
    pointerRemoveListener = () => {
        console.error?.("Removed and being re-integrated sorta");
    };
    set pointerevents_method(v) {
        console.error?.("Removed and being re-integrated sorta");
    }
    get pointerevents_method() {
        console.error?.("Removed and being re-integrated sorta");
    } */
    _defineProperty(this, "closeAllContextMenus", function () {
      LiteGraph.log_verbose('LiteGraph.closeAllContextMenus is deprecated in favor of ContextMenu.closeAll()');
      ContextMenu.closeAll();
    });
  } // if exporting stripping include for a bundle will trow error because not yet instantiated other classes
  // this.initialize();

  /**
   * initialize LiteGraph, call when other classes are instantiated
   */
  return _createClass(LiteGraphClass, [{
    key: "initialize",
    value: function initialize() {
      // event dispatcher, along direct (single) assignment of callbacks [ event entrypoint ]
      this.callbackhandler_setup();
      this.LLink = LLink;
      this.LGraph = LGraph;
      this.LGraphNode = LGraphNode;
      this.LGraphGroup = LGraphGroup;
      this.LGraphCanvas = LGraphCanvas;
      this.Subgraph = Subgraph;
      this.GraphInput = GraphInput;
      this.GraphOutput = GraphOutput;
      this.DragAndScale = DragAndScale;
      this.ContextMenuClass = ContextMenu;
      this.ContextMenu = function () {
        return _construct(ContextMenu, Array.prototype.slice.call(arguments));
      };
      this.CallbackHandler = CallbackHandler;

      // base inclusion
      this.includeBasicNodes();
    }
  }, {
    key: "includeBasicNodes",
    value: function includeBasicNodes() {
      this.registerNodeType("graph/subgraph", Subgraph);
      this.registerNodeType("graph/input", GraphInput);
      this.registerNodeType("graph/output", GraphOutput);
      this.registerNodeType("graph/function", NodeFunction);
    }
  }, {
    key: "callbackhandler_setup",
    value: function callbackhandler_setup() {
      if (this.cb_handler) return;
      this.cb_handler = new CallbackHandler(this);
      // register CallbackHandler methods on this // Should move as class standard class methods?
      this.registerCallbackHandler = function () {
        var _this$cb_handler;
        return (_this$cb_handler = this.cb_handler).registerCallbackHandler.apply(_this$cb_handler, arguments);
      };
      this.unregisterCallbackHandler = function () {
        var _this$cb_handler2;
        return (_this$cb_handler2 = this.cb_handler).unregisterCallbackHandler.apply(_this$cb_handler2, arguments);
      };
      this.processCallbackHandlers = function () {
        var _this$cb_handler3;
        return (_this$cb_handler3 = this.cb_handler).processCallbackHandlers.apply(_this$cb_handler3, arguments);
      };
    }
  }, {
    key: "registerCallbackHandler",
    value: function registerCallbackHandler() {
      var _this$cb_handler4;
      this.callbackhandler_setup();
      (_this$cb_handler4 = this.cb_handler).registerCallbackHandler.apply(_this$cb_handler4, arguments);
    }
  }, {
    key: "unregisterCallbackHandler",
    value: function unregisterCallbackHandler() {
      var _this$cb_handler5;
      this.callbackhandler_setup();
      (_this$cb_handler5 = this.cb_handler).unregisterCallbackHandler.apply(_this$cb_handler5, arguments);
    }
  }, {
    key: "processCallbackHandlers",
    value: function processCallbackHandlers() {
      var _this$cb_handler6;
      this.callbackhandler_setup();
      (_this$cb_handler6 = this.cb_handler).processCallbackHandlers.apply(_this$cb_handler6, arguments);
    }

    // set logging debug_level
    // from -1 (none), 0 (error), .. to 5 (debug) based on console methods 'error', 'warn', 'info', 'log', 'debug'
    // could be set higher to enable verbose logging
  }, {
    key: "logging_set_level",
    value: function logging_set_level(v) {
      this.debug_level = Number(v);
    }

    // entrypoint to debug log
    // pass 0 (error) to 4 (debug), (or more for verbose logging)
  }, {
    key: "logging",
    value: function logging(lvl /**/) {
      var _console;
      // arguments

      if (!this.debug && this.debug_level > 0) {
        // force only errors
        this.debug_level = 0;
      }
      if (lvl > this.debug_level) {
        return; // -- break, log only below or equal current --
      }
      function clean_args(args) {
        var aRet = [];
        if (lvl < 0 || lvl > 4) aRet.push("loglvl:" + lvl); // include not standard log level
        for (var iA = 1; iA < args.length; iA++) {
          if (typeof args[iA] !== "undefined") aRet.push(args[iA]);
        }
        return aRet;
      }
      var lvl_txt = "debug";
      if (lvl >= 0 && lvl <= 4) lvl_txt = ['error', 'warn', 'info', 'log', 'debug'][lvl];
      if (typeof console[lvl_txt] !== "function") {
        console.warn("[LG-log] invalid console method", lvl_txt, clean_args(arguments));
        throw new RangeError();
      }
      (_console = console)[lvl_txt].apply(_console, ["[LG]"].concat(_toConsumableArray(clean_args(arguments))));
    }
  }, {
    key: "log_error",
    value: function log_error() {
      this.logging.apply(this, [0].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "log_warn",
    value: function log_warn() {
      this.logging.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "log_info",
    value: function log_info() {
      this.logging.apply(this, [2].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "log_log",
    value: function log_log() {
      this.logging.apply(this, [3].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "log_debug",
    value: function log_debug() {
      this.logging.apply(this, [4].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "log_verbose",
    value: function log_verbose() {
      this.logging.apply(this, [5].concat(Array.prototype.slice.call(arguments)));
    }

    /**
     * Register a node class so it can be listed when the user wants to create a new one
     * @method registerNodeType
     * @param {String} type name of the node and path
     * @param {Class} base_class class containing the structure of a node
     */
  }, {
    key: "registerNodeType",
    value: function registerNodeType(type, base_class) {
      if (!base_class.prototype) {
        throw new Error("Cannot register a simple object, it must be a class with a prototype");
      }
      base_class.type = type;
      this.log_debug("registerNodeType", "start", type);
      var classname = base_class.name;
      var pos = type.lastIndexOf("/");
      base_class.category = type.substring(0, pos);
      if (!base_class.title) {
        base_class.title = classname;
      }
      var propertyDescriptors = Object.getOwnPropertyDescriptors(LGraphNode.prototype);

      // WIP BAD
      // extend constructor instead of copy properties :: WANTED to have originalconstructor too
      // using manual constructor (?)
      // if(base_class.prototype.hasOwnProperty("constructor")){
      //     var base_constructor = base_class.prototype.constructor;
      //     function extendedConstructor(that){
      //         LGraphNode.prototype.constructor.bind(that);
      //         base_constructor.bind(that);
      //     }
      //     base_class.prototype.constructor = extendedConstructor(this);
      //     base_class.constructor = extendedConstructor(this);
      // }

      // Iterate over each property descriptor
      Object.keys(propertyDescriptors).forEach(function (propertyName) {
        // Check if the property already exists on the target prototype
        if (!base_class.prototype.hasOwnProperty(propertyName)) {
          // If the property doesn't exist, copy it from the source to the target
          Object.defineProperty(base_class.prototype, propertyName, propertyDescriptors[propertyName]);
          // TOO MUCH VERBOSE :: this.log_verbose("registerNodeType","defineProperty",type,base_class.prototype, propertyName, propertyDescriptors[propertyName]);
        }
      });
      var prev = this.registered_node_types[type];
      if (prev) {
        this.log_debug("registerNodeType", "replacing node type", type, prev);
      }
      if (!Object.prototype.hasOwnProperty.call(base_class.prototype, "shape")) {
        Object.defineProperty(base_class.prototype, "shape", {
          set: function set(v) {
            switch (v) {
              case "default":
                delete this._shape;
                break;
              case "box":
                this._shape = LiteGraph.BOX_SHAPE;
                break;
              case "round":
                this._shape = LiteGraph.ROUND_SHAPE;
                break;
              case "circle":
                this._shape = LiteGraph.CIRCLE_SHAPE;
                break;
              case "card":
                this._shape = LiteGraph.CARD_SHAPE;
                break;
              default:
                this._shape = v;
            }
          },
          get: function get() {
            return this._shape;
          },
          enumerable: true,
          configurable: true
        });

        // used to know which nodes to create when dragging files to the canvas
        if (base_class.supported_extensions) {
          for (var _i2 in base_class.supported_extensions) {
            var _ext = base_class.supported_extensions[_i2];
            if (_ext && _ext.constructor === String) {
              this.node_types_by_file_extension[_ext.toLowerCase()] = base_class;
            }
          }
        }
      }
      this.registered_node_types[type] = base_class;
      if (base_class.constructor.name) {
        this.Nodes[classname] = base_class;
      }
      this.processCallbackHandlers("onNodeTypeRegistered", {
        def_cb: this.onNodeTypeRegistered
      }, type, base_class);
      if (prev) {
        this.processCallbackHandlers("onNodeTypeReplaced", {
          def_cb: this.onNodeTypeReplaced
        }, type, base_class, prev);
      }

      // warnings
      if (base_class.prototype.onPropertyChange) {
        LiteGraph.log_warn("LiteGraph node class " + type + " has onPropertyChange method, it must be called onPropertyChanged with d at the end");
      }

      // used to know which nodes create when dragging files to the canvas
      if (base_class.supported_extensions) {
        for (var i = 0; i < base_class.supported_extensions.length; i++) {
          var ext = base_class.supported_extensions[i];
          if (ext && ext.constructor === String) this.node_types_by_file_extension[ext.toLowerCase()] = base_class;
        }
      }
      this.log_debug("registerNodeType", "type registered", type);
      if (this.auto_load_slot_types) {
        var _base_class$title;
        // auto_load_slot_types should be used when not specifing slot type to LiteGraph
        // good for testing: this will create a temporary node for each type
        this.log_debug("registerNodeType", "auto_load_slot_types, create empy tmp node", type);
        var tmpnode = new base_class((_base_class$title = base_class.title) !== null && _base_class$title !== void 0 ? _base_class$title : "tmpnode");
        tmpnode.post_constructor(); // could not call, but eventually checking for errors in the chain ?
      }
    }

    /**
     * removes a node type from the system
     * @method unregisterNodeType
     * @param {String|Object} type name of the node or the node constructor itself
     */
  }, {
    key: "unregisterNodeType",
    value: function unregisterNodeType(type) {
      var base_class = type.constructor === String ? this.registered_node_types[type] : type;
      if (!base_class) {
        throw new Error("node type not found to unregister: " + type);
      }
      delete this.registered_node_types[base_class.type];
      if (base_class.constructor.name) {
        delete this.Nodes[base_class.constructor.name];
      }
    }

    /**
    * Save a slot type and his node
    * @method registerSlotType
    * @param {String|Object} type name of the node or the node constructor itself
    * @param {String} slot_type name of the slot type (variable type), eg. string, number, array, boolean, ..
    */
  }, {
    key: "registerNodeAndSlotType",
    value: function registerNodeAndSlotType(type, slot_type) {
      var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var base_class = type.constructor === String && this.registered_node_types[type] !== "anonymous" ? this.registered_node_types[type] : type;
      var class_type = base_class.constructor.type;
      var allTypes = [];
      if (typeof slot_type === "string") {
        allTypes = slot_type.split(",");
      } else if (slot_type == this.EVENT || slot_type == this.ACTION) {
        allTypes = ["_event_"];
      } else {
        allTypes = ["*"];
      }
      for (var i = 0; i < allTypes.length; ++i) {
        var slotType = allTypes[i];
        if (slotType === "") {
          slotType = "*";
        }
        var registerTo = out ? "registered_slot_out_types" : "registered_slot_in_types";
        if (this[registerTo][slotType] === undefined) {
          this[registerTo][slotType] = {
            nodes: []
          };
        }
        if (!this[registerTo][slotType].nodes.includes(class_type)) {
          this[registerTo][slotType].nodes.push(class_type);
        }

        // check if is a new type
        if (!out) {
          if (!this.slot_types_in.includes(slotType.toLowerCase())) {
            this.slot_types_in.push(slotType.toLowerCase());
            this.slot_types_in.sort();
          }
        } else {
          if (!this.slot_types_out.includes(slotType.toLowerCase())) {
            this.slot_types_out.push(slotType.toLowerCase());
            this.slot_types_out.sort();
          }
        }
      }
    }

    /**
     * Create a new nodetype by passing an object with some properties
     * like onCreate, inputs:Array, outputs:Array, properties, onExecute
     * @method buildNodeClassFromObject
     * @param {String} name node name with namespace (p.e.: 'math/sum')
     * @param {Object} object methods expected onCreate, inputs, outputs, properties, onExecute
     */
  }, {
    key: "buildNodeClassFromObject",
    value: function buildNodeClassFromObject(name, object) {
      var ctor_code = "";
      if (object.inputs) for (var i = 0; i < object.inputs.length; ++i) {
        var _name = object.inputs[i][0];
        var _type = object.inputs[i][1];
        if (_type && _type.constructor === String) _type = '"' + _type + '"';
        ctor_code += "this.addInput('" + _name + "'," + _type + ");\n";
      }
      if (object.outputs) for (var _i3 = 0; _i3 < object.outputs.length; ++_i3) {
        var _name2 = object.outputs[_i3][0];
        var _type2 = object.outputs[_i3][1];
        if (_type2 && _type2.constructor === String) _type2 = '"' + _type2 + '"';
        ctor_code += "this.addOutput('" + _name2 + "'," + _type2 + ");\n";
      }
      if (object.properties) for (var _i4 in object.properties) {
        var prop = object.properties[_i4];
        if (prop && prop.constructor === String) prop = '"' + prop + '"';
        ctor_code += "this.addProperty('" + _i4 + "'," + prop + ");\n";
      }
      ctor_code += "if(this.onCreate)this.onCreate()";
      var classobj = Function(ctor_code);
      for (var _i5 in object) if (_i5 != "inputs" && _i5 != "outputs" && _i5 != "properties") classobj.prototype[_i5] = object[_i5];
      classobj.title = object.title || name.split("/").pop();
      classobj.desc = object.desc || "Generated from object";
      this.registerNodeType(name, classobj);
      return classobj;
    }

    /**
     * Create a new nodetype by passing a function, it wraps it with a proper class and generates inputs according to the parameters of the function.
     * Useful to wrap simple methods that do not require properties, and that only process some input to generate an output.
     * @method wrapFunctionAsNode
     * @param {String} name node name with namespace (p.e.: 'math/sum')
     * @param {Function} func
     * @param {Array} param_types [optional] an array containing the type of every parameter, otherwise parameters will accept any type
     * @param {String} return_type [optional] string with the return type, otherwise it will be generic
     * @param {Object} properties [optional] properties to be configurable
     */
  }, {
    key: "wrapFunctionAsNode",
    value: function wrapFunctionAsNode(name, func, param_types, return_type, properties) {
      var names = LiteGraph.getParameterNames(func);
      var code = names.map(function (name, i) {
        var paramType = param_types !== null && param_types !== void 0 && param_types[i] ? "'".concat(param_types[i], "'") : "0";
        return "this.addInput('".concat(name, "', ").concat(paramType, ");");
      }).join("\n");
      var returnTypeStr = return_type ? "'".concat(return_type, "'") : 0;
      var propertiesStr = properties ? "this.properties = ".concat(JSON.stringify(properties), ";") : "";
      var classObj = new Function("\n            ".concat(code, "\n            this.addOutput('out', ").concat(returnTypeStr, ");\n            ").concat(propertiesStr, "\n        "));
      classObj.title = name.split("/").pop();
      classObj.desc = "Generated from ".concat(func.name);
      classObj.prototype.onExecute = function () {
        var _this = this;
        var params = names.map(function (name, i) {
          return _this.getInputData(i);
        });
        var result = func.apply(this, params);
        this.setOutputData(0, result);
      };
      // TODO: should probably set onConfigure or INIT too the value set ??

      this.registerNodeType(name, classObj);
      return classObj;
    }
  }, {
    key: "wrapObjectAsNodeCollection",
    value: function wrapObjectAsNodeCollection(obj, objectNameId) {
      var _this2 = this;
      if (_typeof(obj) !== "object") {
        // && typeof(obj)!=="function"){
        return;
      }
      var propsDescr = Object.getOwnPropertyDescriptors(obj);
      Object.keys(propsDescr).forEach(function (propertyName) {
        console.debug("cyclingProps", objectNameId, propertyName, obj, _typeof(obj[propertyName]));
        if (typeof obj[propertyName] == "function") {
          // .arguments
          try {
            console.info("**", obj[propertyName]["arguments"]);
          } catch (e) {}
          _this2.wrapFunctionAsNode(objectNameId + "/" + propertyName, obj[propertyName]);
        }
      });
    }

    /**
     * Removes all previously registered node's types
     */
  }, {
    key: "clearRegisteredTypes",
    value: function clearRegisteredTypes() {
      this.registered_node_types = {};
      this.node_types_by_file_extension = {};
      this.Nodes = {};
      this.searchbox_extras = {};
    }

    /**
     * Adds this method to all nodetypes, existing and to be created
     * (You can add it to LGraphNode.prototype but then existing node types wont have it)
     * @method addNodeMethod
     * @param {Function} func
     */
  }, {
    key: "addNodeMethod",
    value: function addNodeMethod(name, func) {
      LGraphNode.prototype[name] = func;
      for (var i in this.registered_node_types) {
        var type = this.registered_node_types[i];
        if (type.prototype[name]) {
          type.prototype["_" + name] = type.prototype[name];
        } // keep old in case of replacing
        type.prototype[name] = func;
      }
    }

    /**
     * Create a node of a given type with a name. The node is not attached to any graph yet.
     * @method createNode
     * @param {String} type full name of the node class. p.e. "math/sin"
     * @param {String} name a name to distinguish from other nodes
     * @param {Object} options to set options
     */
  }, {
    key: "createNode",
    value: function createNode(type, title) {
      var _this$registered_node, _ref, _title, _node, _node$title, _node2, _node2$properties, _node3, _node3$properties_inf, _node4, _node4$flags, _node5, _node5$size, _node6, _node6$pos, _node7, _node7$mode;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var base_class = (_this$registered_node = this.registered_node_types[type]) !== null && _this$registered_node !== void 0 ? _this$registered_node : null;
      if (!base_class) {
        this.log_debug("GraphNode type \"".concat(type, "\" not registered."));
        return null;
      }
      LiteGraph.log_verbose("createNode", type, title, options, base_class);
      title = (_ref = (_title = title) !== null && _title !== void 0 ? _title : base_class.title) !== null && _ref !== void 0 ? _ref : type;
      var node = null;
      if (LiteGraph.catch_exceptions) {
        try {
          node = new base_class(title);
        } catch (err) {
          this.log_error("createNode", err);
          return null;
        }
      } else {
        node = new base_class(title);
      }

      // extend constructor with the extended always executed (custom class or lgraphnode)
      node.post_constructor();

      // basic size, before computing
      node.size_basic = node.size;
      node.type = type;
      (_node$title = (_node = node).title) !== null && _node$title !== void 0 ? _node$title : _node.title = title;
      (_node2$properties = (_node2 = node).properties) !== null && _node2$properties !== void 0 ? _node2$properties : _node2.properties = {};
      (_node3$properties_inf = (_node3 = node).properties_info) !== null && _node3$properties_inf !== void 0 ? _node3$properties_inf : _node3.properties_info = [];
      (_node4$flags = (_node4 = node).flags) !== null && _node4$flags !== void 0 ? _node4$flags : _node4.flags = {};
      (_node5$size = (_node5 = node).size) !== null && _node5$size !== void 0 ? _node5$size : _node5.size = node.computeSize();
      (_node6$pos = (_node6 = node).pos) !== null && _node6$pos !== void 0 ? _node6$pos : _node6.pos = LiteGraph.DEFAULT_POSITION.concat();
      (_node7$mode = (_node7 = node).mode) !== null && _node7$mode !== void 0 ? _node7$mode : _node7.mode = LiteGraph.ALWAYS;

      // extra options
      Object.assign(node, options);
      LiteGraph.log_verbose("createNode", "created", node, node.processCallbackHandlers);

      // callback node event entrypoint
      node.processCallbackHandlers("onNodeCreated", {
        def_cb: node.onNodeCreated
      });
      return node;
    }

    /**
     * Returns a registered node type with a given name
     * @method getNodeType
     * @param {String} type full name of the node class. p.e. "math/sin"
     * @return {Class} the node class
     */
  }, {
    key: "getNodeType",
    value: function getNodeType(type) {
      return this.registered_node_types[type];
    }

    /**
     * Returns a list of node types matching one category
     * @method getNodeType
     * @param {String} category category name
     * @return {Array} array with all the node classes
     */
  }, {
    key: "getNodeTypesInCategory",
    value: function getNodeTypesInCategory(category, filter) {
      var filteredTypes = Object.values(this.registered_node_types).filter(function (type) {
        if (type.filter !== filter) {
          return false;
        }
        if (category === "") {
          return type.category === null;
        } else {
          return type.category === category;
        }
      });
      if (this.auto_sort_node_types) {
        filteredTypes.sort(function (a, b) {
          return a.title.localeCompare(b.title);
        });
      }
      return filteredTypes;
    }

    /**
     * Returns a list with all the node type categories
     * @method getNodeTypesCategories
     * @param {String} filter only nodes with ctor.filter equal can be shown
     * @return {Array} array with all the names of the categories
     */
  }, {
    key: "getNodeTypesCategories",
    value: function getNodeTypesCategories(filter) {
      var categories = {
        "": 1
      };
      Object.values(this.registered_node_types).forEach(function (type) {
        if (type.category && !type.skip_list && type.filter === filter) {
          categories[type.category] = 1;
        }
      });
      var result = Object.keys(categories);
      return this.auto_sort_node_types ? result.sort() : result;
    }

    // debug purposes: reloads all the js scripts that matches a wildcard
  }, {
    key: "reloadNodes",
    value: function reloadNodes(folder_wildcard) {
      var tmp = document.getElementsByTagName("script");
      // weird, this array changes by its own, so we use a copy
      var script_files = [];
      for (var i = 0; i < tmp.length; i++) {
        script_files.push(tmp[i]);
      }
      var docHeadObj = document.getElementsByTagName("head")[0];
      folder_wildcard = document.location.href + folder_wildcard;
      for (var _i6 = 0; _i6 < script_files.length; _i6++) {
        var src = script_files[_i6].src;
        if (!src || src.substr(0, folder_wildcard.length) != folder_wildcard) {
          continue;
        }
        try {
          this.log_debug("Reloading: " + src);
          var dynamicScript = document.createElement("script");
          dynamicScript.type = "text/javascript";
          dynamicScript.src = src;
          docHeadObj.appendChild(dynamicScript);
          docHeadObj.removeChild(script_files[_i6]);
        } catch (err) {
          if (LiteGraph.throw_errors) {
            throw err;
          }
          this.log_debug("Error while reloading " + src);
        }
      }
      this.log_debug("Nodes reloaded");
    }

    /**
     * This is a cleaner helper to .configure methods that rely on json import
     * Happens that arrays are sometimes (strangely) exported as object with keyed strings: eg. [v0, v1] to {"0": v0, "1": v1}
     * This method successfully convert those to back to accessible by key numbers {0: v0, 1:v1} - note this is an object not an array as eventually was in origin
     * This eg. happens with groups ._bounding and nodes .position, but could happen anywere, advised implementation of parseStringifyObject to sanitize
     * @param {object} obj the object to parse clean
     * @returns the cleaned object
     */
  }, {
    key: "parseStringifyObject",
    value: function parseStringifyObject(obj, target) {
      // method 1: not working
      // return JSON.parse(JSON.stringify(obj));

      // method 2: working
      // for (const key in obj) {
      //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
      //         target[key] = obj[key];
      //     }
      // }
      // return target;

      // just use cloneObject, original solution
      return this.cloneObject(obj, target);
    }
  }, {
    key: "cloneObject",
    value: function cloneObject(obj, target) {
      if (obj == null) {
        return null;
      }
      var clonedObj = JSON.parse(JSON.stringify(obj));
      if (!target) {
        return clonedObj;
      }
      for (var key in clonedObj) {
        if (Object.prototype.hasOwnProperty.call(clonedObj, key)) {
          target[key] = clonedObj[key];
        }
      }
      return target;
    }

    /*
    * https://gist.github.com/jed/982883?permalink_comment_id=852670#gistcomment-852670
    */
  }, {
    key: "uuidv4",
    value: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
        return (a ^ Math.random() * 16 >> a / 4).toString(16);
      });
    }

    /**
     * Returns if the types of two slots are compatible (taking into account wildcards, etc)
     * @method isValidConnection
     * @param {String} type_a
     * @param {String} type_b
     * @return {Boolean} true if they can be connected
     */
  }, {
    key: "isValidConnection",
    value: function isValidConnection(type_a, type_b) {
      if (type_a === "" || type_a === "*") type_a = 0;
      if (type_b === "" || type_b === "*") type_b = 0;
      if (!type_a || !type_b || type_a === type_b || type_a === LiteGraph.EVENT && type_b === LiteGraph.ACTION) {
        return true;
      }
      type_a = String(type_a).toLowerCase();
      type_b = String(type_b).toLowerCase();
      if (!type_a.includes(",") && !type_b.includes(",")) {
        return type_a === type_b;
      }
      var supported_types_a = type_a.split(",");
      var supported_types_b = type_b.split(",");
      var _iterator = _createForOfIteratorHelper(supported_types_a),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var supported_type_a = _step.value;
          var _iterator2 = _createForOfIteratorHelper(supported_types_b),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var supported_type_b = _step2.value;
              if (this.isValidConnection(supported_type_a, supported_type_b)) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }

    /**
     * Register a string in the search box so when the user types it it will recommend this node
     * @method registerSearchboxExtra
     * @param {String} node_type the node recommended
     * @param {String} description text to show next to it
     * @param {Object} data it could contain info of how the node should be configured
     * @return {Boolean} true if they can be connected
     */
  }, {
    key: "registerSearchboxExtra",
    value: function registerSearchboxExtra(node_type, description, data) {
      this.searchbox_extras[description.toLowerCase()] = {
        type: node_type,
        desc: description,
        // title: node_type.title, TODO implement searching by title, desc, and extra pars
        data: data
      };
    }

    /**
     * Wrapper to load files (from url using fetch or from file using FileReader)
     * @method fetchFile
     * @param {String|File|Blob} url the url of the file (or the file itself)
     * @param {String} type an string to know how to fetch it: "text","arraybuffer","json","blob"
     * @param {Function} on_complete callback(data)
     * @param {Function} on_error in case of an error
     * @return {FileReader|Promise} returns the object used to
     */
  }, {
    key: "fetchFile",
    value: function fetchFile(url, type, on_complete, on_error) {
      var _this3 = this;
      if (!url) return null;
      type = type || "text";
      if (url.constructor === String) {
        if (url.substr(0, 4) == "http" && LiteGraph.proxy) {
          url = LiteGraph.proxy + url.substr(url.indexOf(":") + 3);
        }
        return fetch(url).then(function (response) {
          if (!response.ok) throw new Error("File not found"); // it will be catch below
          if (type == "arraybuffer") return response.arrayBuffer();else if (type == "text" || type == "string") return response.text();else if (type == "json") return response.json();else if (type == "blob") return response.blob();
        }).then(function (data) {
          if (on_complete) on_complete(data);
        })["catch"](function (error) {
          _this3.log_error("error fetching file:", url);
          if (on_error) on_error(error);
        });
      } else if (url.constructor === File || url.constructor === Blob) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var v = e.target.result;
          if (type == "json") v = JSON.parse(v);
          if (on_complete) on_complete(v);
        };
        if (type == "arraybuffer") return reader.readAsArrayBuffer(url);else if (type == "text" || type == "json") return reader.readAsText(url);else if (type == "blob") return reader.readAsBinaryString(url);
      }
      return null;
    }

    // @TODO These weren't even directly bound, so could be used as free functions
  }, {
    key: "compareObjects",
    value: function compareObjects(a, b) {
      var aKeys = Object.keys(a);
      if (aKeys.length !== Object.keys(b).length) {
        return false;
      }
      return aKeys.every(function (key) {
        return a[key] === b[key];
      });
    }
  }, {
    key: "distance",
    value: function distance(a, b) {
      var _a = _slicedToArray(a, 2),
        xA = _a[0],
        yA = _a[1];
      var _b = _slicedToArray(b, 2),
        xB = _b[0],
        yB = _b[1];
      return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
    }
  }, {
    key: "colorToString",
    value: function colorToString(c) {
      return "rgba(" + Math.round(c[0] * 255).toFixed() + "," + Math.round(c[1] * 255).toFixed() + "," + Math.round(c[2] * 255).toFixed() + "," + (c.length == 4 ? c[3].toFixed(2) : "1.0") + ")";
    }
  }, {
    key: "textCalculateMaxWidth",
    value: function textCalculateMaxWidth(text) {
      // TODO RESTART FROM HERE
      // const retCalc = this.canvasFillTextMultiline();
      // USING ctx.measureText directly
    }

    /**
     * helper function to write text to a canvas calculating multiline and returning info on final sizes 
     * @param {*} context 
     * @param {*} text 
     * @param {*} x 
     * @param {*} y 
     * @param {*} maxWidth 
     * @param {*} lineHeight 
     * @returns 
     */
  }, {
    key: "canvasFillTextMultiline",
    value: function canvasFillTextMultiline(context, text, x, y, maxWidth, lineHeight) {
      var words = (text + "").trim().split(' ');
      var line = '';
      var ret = {
        lines: [],
        maxW: 0,
        height: 0
      };
      if (words.length > 1) {
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y + lineHeight * ret.lines.length);
            line = words[n] + ' ';
            // y += lineHeight;
            ret.max = testWidth;
            ret.lines.push(line);
          } else {
            line = testLine;
          }
        }
      } else {
        line = words[0];
      }
      context.fillText(line, x, y + lineHeight * ret.lines.length);
      ret.lines.push(line);
      ret.height = lineHeight * ret.lines.length || lineHeight;
      return ret;
    }
  }, {
    key: "isInsideRectangle",
    value: function isInsideRectangle(x, y, left, top, width, height) {
      return x > left && x < left + width && y > top && y < top + height;
    }
  }, {
    key: "isBoundingInsideRectangle",
    value: function isBoundingInsideRectangle(bounding, left, top, width, height) {
      var x = bounding[0];
      var y = bounding[1];
      if (!(x > left && x < left + width && y > top && y < top + height)) return false;
      x = bounding[0] + bounding[2];
      y = bounding[1] + bounding[3];
      if (!(x > left && x < left + width && y > top && y < top + height)) return false;
      return true;
    }

    // [minx,miny,maxx,maxy]
  }, {
    key: "growBounding",
    value: function growBounding(bounding, x, y) {
      if (x < bounding[0]) {
        bounding[0] = x;
      } else if (x > bounding[2]) {
        bounding[2] = x;
      }
      if (y < bounding[1]) {
        bounding[1] = y;
      } else if (y > bounding[3]) {
        bounding[3] = y;
      }
    }

    // point inside bounding box
  }, {
    key: "isInsideBounding",
    value: function isInsideBounding(p, bb) {
      return p[0] >= bb[0][0] && p[1] >= bb[0][1] && p[0] <= bb[1][0] && p[1] <= bb[1][1];
    }

    // bounding overlap, format: [ startx, starty, width, height ]
  }, {
    key: "overlapBounding",
    value: function overlapBounding(a, b, add) {
      add = add || 0;
      var A_end_x = a[0] + a[2] + add;
      var A_end_y = a[1] + a[3] + add;
      var B_end_x = b[0] + b[2] + add;
      var B_end_y = b[1] + b[3] + add;
      return !(a[0] > B_end_x || a[1] > B_end_y || A_end_x < b[0] || A_end_y < b[1]);
    }

    // Convert a hex value to its decimal value - the inputted hex must be in the
    //	format of a hex triplet - the kind we use for HTML colours. The function
    //	will return an array with three values.
  }, {
    key: "hex2num",
    value: function hex2num(hex) {
      if (hex.charAt(0) == "#") {
        hex = hex.slice(1);
      } // Remove the '#' char - if there is one.
      hex = hex.toUpperCase();
      var hex_alphabets = "0123456789ABCDEF";
      var value = new Array(3);
      var k = 0;
      var int1, int2;
      for (var i = 0; i < 6; i += 2) {
        int1 = hex_alphabets.indexOf(hex.charAt(i));
        int2 = hex_alphabets.indexOf(hex.charAt(i + 1));
        value[k] = int1 * 16 + int2;
        k++;
      }
      return value;
    }

    // Give a array with three values as the argument and the function will return
    //	the corresponding hex triplet.
  }, {
    key: "num2hex",
    value: function num2hex(triplet) {
      var hex_alphabets = "0123456789ABCDEF";
      var hex = "#";
      var int1, int2;
      for (var i = 0; i < 3; i++) {
        int1 = triplet[i] / 16;
        int2 = triplet[i] % 16;
        hex += hex_alphabets.charAt(int1) + hex_alphabets.charAt(int2);
      }
      return hex;
    }
  }, {
    key: "getTime",
    value: function getTime() {
      if (typeof performance != "undefined") {
        return performance.now(); //.bind(performance);
      } else if (typeof Date != "undefined" && Date.now) ; else if (typeof process != "undefined") {
        var t = process.hrtime();
        return t[0] * 0.001 + t[1] * 1e-6;
      } else {
        return new Date().getTime();
      }
    }

    /**
     * 
     * @param {number} n number to be formatted
     * @param {*} precision decimal positions
     * @returns formatted number to precision witouth trailing zeros
     */
  }, {
    key: "formatNumber",
    value: function formatNumber(n) {
      var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      n = Number(n);
      if (n === NaN) {
        return "";
      } else {
        return n.toFixed(precision).replace(/(\.\d*[1-9])0+$|\.0*$/, '$1');
      }
    }
  }]);
}();

// !¿ TODO MOVE THESE HELPERS ?!
// timer that works everywhere
// if (typeof performance != "undefined") {
//     LiteGraphClass.getTime = performance.now.bind(performance);
// } else if (typeof Date != "undefined" && Date.now) {
//     LiteGraphClass.getTime = Date.now.bind(Date);
// } else if (typeof process != "undefined") {
//     LiteGraphClass.getTime = () => {
//         var t = process.hrtime();
//         return t[0] * 0.001 + t[1] * 1e-6;
//     };
// } else {
//     LiteGraphClass.getTime = function getTime() {
//         return new Date().getTime();
//     };
// }

// @BROWSERONLY
if (typeof window != "undefined" && !window["requestAnimationFrame"]) {
  window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}
getGlobalObject();
if (!getGlobalVariable("LiteGraph")) {
  setGlobalVariable("LiteGraph", new LiteGraphClass());
  var LGInst = getGlobalVariable("LiteGraph");
  LGInst.log_info("LiteGraph instantiated", LGInst.getTime());
}
var LiteGraph = getGlobalVariable("LiteGraph");

export { CallbackHandler, ContextMenu, DragAndScale, GraphInput, GraphOutput, LGraph, LGraphCanvas, LGraphGroup, LGraphNode, LLink, LiteGraph, NodeFunction, Subgraph, getGlobalObject, getGlobalVariable, setGlobalVariable };