"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promises = _interopRequireDefault(require("fs/promises"));
var _chalk = _interopRequireDefault(require("chalk"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @typedef { "black" | "gray" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright" } Color
 */
var LoggerModule = exports["default"] = /*#__PURE__*/function () {
  /**
   * @param {Object} [options] 
   * @param {Boolean} [options.debug]
   * @param {Object} [options.file]
   * @param {Boolean} [options.file.enable]
   * @param {String} [options.file.path]
   * @param {String} [options.file.fileName]
   * @param {String} [options.timestampFormat]
   */
  function LoggerModule(options) {
    var _options$file,
      _options$file2,
      _options$file3,
      _this = this;
    _classCallCheck(this, LoggerModule);
    this.settings = {
      debug: !!options.debug,
      file: {
        enable: !!((_options$file = options.file) !== null && _options$file !== void 0 && _options$file.enable),
        path: _path["default"].resolve(process.cwd(), ((_options$file2 = options.file) === null || _options$file2 === void 0 ? void 0 : _options$file2.path) || 'logs'),
        fileName: ((_options$file3 = options.file) === null || _options$file3 === void 0 ? void 0 : _options$file3.fileName) || 'log'
      },
      timestampFormat: options.timestampFormat || 'default'
    };
    var timestamp = function timestamp() {
      var now = new Date();
      var year = now.getFullYear();
      var month = _this._padZero(now.getMonth() + 1);
      var day = _this._padZero(now.getDate());
      var hours = _this._padZero(now.getHours());
      var minutes = _this._padZero(now.getMinutes());
      var seconds = _this._padZero(now.getSeconds());
      return "".concat(day, "-").concat(month, "-").concat(year, "_").concat(hours, "-").concat(minutes, "-").concat(seconds);
    };
    this.pathLog = _path["default"].resolve(this.settings.file.path + '/' + this.settings.file.fileName + "_" + timestamp() + '.log');
    this.log = this.log;
    this.info = this.info;
    this.debug = this.debug;
    this.warn = this.warn;
    this.error = this.error;
    this.prefix = this.prefix;
    if (this.settings.debug) this._internalLog("Logger started!");
    if (this.settings.debug && this.settings.file.enable) this._internalLog("File logging enabled! In the path: " + this.pathLog);
  }

  /**
   * @param {String} prefix
   * @param {String} message
   * @param {Color} [prefixColor]
   * @param {Color} [messageColor]
   */
  _createClass(LoggerModule, [{
    key: "prefix",
    value: function prefix(_prefix, message, prefixColor, messageColor) {
      return this._log(_prefix, message, prefixColor, messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
  }, {
    key: "log",
    value: function log(message) {
      var messageColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "blueBright";
      return this._log("LOG", message, "blue", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
  }, {
    key: "error",
    value: function error(message) {
      var messageColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "redBright";
      return this._log("ERROR", message, "red", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
  }, {
    key: "info",
    value: function info(message) {
      var messageColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "greenBright";
      return this._log("INFO", message, "green", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
  }, {
    key: "debug",
    value: function debug(message) {
      var messageColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "magentaBright";
      return this._log("DEBUG", message, "magenta", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
  }, {
    key: "warn",
    value: function warn(message) {
      var messageColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yellowBright";
      return this._log("WARN", message, "yellow", messageColor);
    }

    /**
     * @param {String} level
     * @param {String} message
     * @param {Color} [levelColor]
     * @param {Color} [messageColor]
     */
  }, {
    key: "_log",
    value: function _log(level, message) {
      var levelColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "white";
      var messageColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "white";
      var timestamp = this._formatTimestamp();
      var logHeader = "".concat(timestamp.color, " ").concat(_chalk["default"].gray('[')).concat(_chalk["default"][levelColor](level)).concat(_chalk["default"].gray(']'));
      var messageFormatColor = "".concat(logHeader, " ").concat(_chalk["default"][messageColor](message));
      var messageFormaText = "".concat(timestamp.text, " [").concat(level, "] ").concat(message);
      console.log(messageFormatColor);
      this._saveLog(messageFormaText);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
  }, {
    key: "_internalLog",
    value: function _internalLog(message) {
      var messageColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yellowBright";
      return console.log(this._formatTimestamp().color + _chalk["default"].gray(' [') + _chalk["default"].blue("LOGGER-MODULE") + _chalk["default"].gray('] ') + _chalk["default"][messageColor](message));
    }
  }, {
    key: "_formatTimestamp",
    value: function _formatTimestamp() {
      var now = new Date();
      if (this.settings.timestampFormat === 'default') {
        return this._defaultTimestampFormat(now);
      } else if (typeof this.settings.timestampFormat === 'string') {
        return this._customTimestampFormat(this.settings.timestampFormat, now);
      } else {
        this.error('Invalid timestamp format');
      }
    }

    /**
     * @param {Date} date 
     */
  }, {
    key: "_defaultTimestampFormat",
    value: function _defaultTimestampFormat(date) {
      var year = date.getFullYear();
      var month = this._padZero(date.getMonth() + 1);
      var day = this._padZero(date.getDate());
      var hours = this._padZero(date.getHours());
      var minutes = this._padZero(date.getMinutes());
      var seconds = this._padZero(date.getSeconds());
      return {
        color: _chalk["default"].gray('[') + _chalk["default"].cyan("".concat(day, "/").concat(month, "/").concat(year)) + _chalk["default"].gray(' - ') + _chalk["default"].green("".concat(hours, ":").concat(minutes, ":").concat(seconds)) + _chalk["default"].gray(']'),
        text: "[".concat(day, "/").concat(month, "/").concat(year, " - ").concat(hours, ":").concat(minutes, ":").concat(seconds, "]")
      };
    }

    /**
     * @param {String} format 
     * @param {Date} date 
     */
  }, {
    key: "_customTimestampFormat",
    value: function _customTimestampFormat(format, date) {
      var _this2 = this;
      var formatMapping = {
        'yyyy': date.getFullYear(),
        'yy': String(date.getFullYear()).slice(-2),
        'MM': this._padZero(date.getMonth() + 1),
        'M': date.getMonth() + 1,
        'dd': this._padZero(date.getDate()),
        'd': date.getDate(),
        'HH': this._padZero(date.getHours()),
        'H': date.getHours(),
        'hh': this._padZero(date.getHours() % 12 || 12),
        'h': date.getHours() % 12 || 12,
        'mm': this._padZero(date.getMinutes()),
        'm': date.getMinutes(),
        'ss': this._padZero(date.getSeconds()),
        's': date.getSeconds(),
        'a': date.getHours() < 12 ? 'AM' : 'PM'
      };
      var splitted = format.split(' ');
      var formattedTimestamp = [];
      var formattedTimestampText = [];
      var timeRegex = /yyyy|yy|MM|M|dd|d|HH|H|hh|h|mm|m|ss|s|a/g;
      splitted.forEach(function (part) {
        var colorRegex = /\{\{([^}]+)\}\}/g;
        var colorMatches = part.match(colorRegex);
        if (colorMatches) {
          colorMatches.forEach(function (match) {
            var color = match.replace('{{', '').replace('}}', '').trim();
            var text = part.replace(match, '');
            if (!_this2._isValidColor(color)) {
              color = "white";
            }
            text = text.replace(timeRegex, function (match) {
              return formatMapping[match];
            });
            formattedTimestamp.push(_chalk["default"][color](text));
            formattedTimestampText.push(text);
          });
        } else {
          var text = part.replace(timeRegex, function (match) {
            return formatMapping[match];
          });
          formattedTimestamp.push(text);
          formattedTimestampText.push(text);
        }
      });
      return {
        color: _chalk["default"].gray('[') + formattedTimestamp.join(' ') + _chalk["default"].gray(']'),
        text: "[".concat(formattedTimestamp.join(' '), "]")
      };
    }

    /**
     * @param {Number} value
     */
  }, {
    key: "_padZero",
    value: function _padZero(value) {
      return value.toString().padStart(2, '0');
    }

    /**
     * @param {String} message 
     */
  }, {
    key: "_saveLog",
    value: (function () {
      var _saveLog2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(message) {
        var _this3 = this;
        var checkLogsFolder, checkLogsFile;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.settings.file.enable) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              checkLogsFolder = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _promises["default"].access(_this3.settings.file.path);
                      case 3:
                        _context.next = 19;
                        break;
                      case 5:
                        _context.prev = 5;
                        _context.t0 = _context["catch"](0);
                        if (!(_context.t0.code === 'ENOENT')) {
                          _context.next = 18;
                          break;
                        }
                        _context.prev = 8;
                        _context.next = 11;
                        return _promises["default"].mkdir(_this3.settings.file.path, {
                          recursive: true
                        });
                      case 11:
                        _context.next = 16;
                        break;
                      case 13:
                        _context.prev = 13;
                        _context.t1 = _context["catch"](8);
                        _this3._internalLog("Error creating directory: ".concat(_this3.settings.file.path), "redBright");
                      case 16:
                        _context.next = 19;
                        break;
                      case 18:
                        _this3._internalLog("Error checking directory: ".concat(_context.t0.message), "redBright");
                      case 19:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[0, 5], [8, 13]]);
                }));
                return function checkLogsFolder() {
                  return _ref.apply(this, arguments);
                };
              }();
              _context3.next = 5;
              return checkLogsFolder();
            case 5:
              checkLogsFile = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return checkLogsFolder();
                      case 3:
                        _context2.next = 5;
                        return _promises["default"].access(_this3.pathLog);
                      case 5:
                        _context2.next = 24;
                        break;
                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2["catch"](0);
                        if (!(_context2.t0.code === 'ENOENT')) {
                          _context2.next = 23;
                          break;
                        }
                        _context2.prev = 10;
                        _context2.next = 13;
                        return checkLogsFolder();
                      case 13:
                        _context2.next = 15;
                        return _promises["default"].writeFile(_this3.pathLog, "");
                      case 15:
                        _context2.next = 21;
                        break;
                      case 17:
                        _context2.prev = 17;
                        _context2.t1 = _context2["catch"](10);
                        console.log(_context2.t1);
                        _this3._internalLog("Error creating log file: ".concat(_context2.t1.message), "redBright");
                      case 21:
                        _context2.next = 24;
                        break;
                      case 23:
                        _this3._internalLog("Error checking log file: ".concat(_context2.t0.message), "redBright");
                      case 24:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 7], [10, 17]]);
                }));
                return function checkLogsFile() {
                  return _ref2.apply(this, arguments);
                };
              }();
              _context3.next = 8;
              return checkLogsFile();
            case 8:
              _context3.prev = 8;
              if (message) {
                _context3.next = 11;
                break;
              }
              return _context3.abrupt("return");
            case 11:
              _context3.next = 13;
              return _promises["default"].appendFile(this.pathLog, "".concat(message, "\n"));
            case 13:
              _context3.next = 18;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](8);
              this._internalLog("Error saving log: ".concat(_context3.t0.message), "redBright");
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[8, 15]]);
      }));
      function _saveLog(_x) {
        return _saveLog2.apply(this, arguments);
      }
      return _saveLog;
    }()
    /**
     * @param {String} color
     * @returns {Boolean}
     */
    )
  }, {
    key: "_isValidColor",
    value: function _isValidColor(color) {
      var validColors = ["black", "gray", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "blackBright", "redBright", "greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright"];
      return validColors.includes(color);
    }
  }]);
  return LoggerModule;
}();