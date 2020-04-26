window["ExpressionRulesBuilder"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.es6":
/*!***********************!*\
  !*** ./src/index.es6 ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ExpressionExpressionsBuilder = /*#__PURE__*/function () {
  function ExpressionExpressionsBuilder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$expressionsConta = _ref.expressionsContainer,
        expressionsContainer = _ref$expressionsConta === void 0 ? "" : _ref$expressionsConta,
        _ref$rulesContainer = _ref.rulesContainer,
        rulesContainer = _ref$rulesContainer === void 0 ? "" : _ref$rulesContainer,
        _ref$fields = _ref.fields,
        fields = _ref$fields === void 0 ? [] : _ref$fields,
        _ref$expressions = _ref.expressions,
        expressions = _ref$expressions === void 0 ? [] : _ref$expressions,
        _ref$rules = _ref.rules,
        rules = _ref$rules === void 0 ? [] : _ref$rules;

    _classCallCheck(this, ExpressionExpressionsBuilder);

    this.expressionsContainer = document.querySelector(expressionsContainer);
    this.rulesContainer = document.querySelector(rulesContainer);
    this.fields = this._arrayItemsToMap(fields);
    this.expressions = this._arrayItemsToMap(expressions);
    this.rules = rules;

    this._buildRules();

    this._buildExpressionsItems();
  }

  _createClass(ExpressionExpressionsBuilder, [{
    key: "getRules",
    value: function getRules() {
      var rules = [];
      this.rulesContainer.querySelectorAll(".erb-rule-item").forEach(function (el) {
        var ruleName = el.dataset.ruleName;
        var ruleRules = {};
        el.querySelectorAll("[data-field]").forEach(function (childEl) {
          var fieldName = childEl.dataset.field;
          ruleRules[fieldName] = childEl.rule;
        });
        rules.push({
          rule: ruleName,
          rules: ruleRules
        });
      });
      return rules;
    }
  }, {
    key: "_arrayItemsToMap",
    value: function _arrayItemsToMap() {
      var arrItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var list = {};
      arrItems.forEach(function (item) {
        return list[item.name] = item;
      });
      return list;
    }
  }, {
    key: "_parseExpressions",
    value: function _parseExpressions() {
      var arrFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fields = {};
      arrFields.forEach(function (field) {
        return fields[field.name] = field;
      });
      return fields;
    }
  }, {
    key: "_buildExpressionsItems",
    value: function _buildExpressionsItems() {
      for (var ruleName in this.expressions) {
        var rule = this.expressions[ruleName];

        var btnAddEl = this._createAddButton(ruleName);

        var ruleItemElement = this._createItem(rule.name, rule.text, "erb-rule-item", btnAddEl);

        if (document.querySelector(".erb-rule-item[data-rule-name=".concat(ruleName, "]")) !== null) {
          ruleItemElement.classList.add("selected");
        }

        this.expressionsContainer.appendChild(ruleItemElement);
      }
    }
  }, {
    key: "_buildRules",
    value: function _buildRules() {
      var _this = this;

      this.rules.forEach(function (item) {
        var ruleName = item.rule;

        _this.rulesContainer.appendChild(_this._createRuleItemElement(ruleName, item.rules));
      });
    }
  }, {
    key: "_attachListenerToAddButton",
    value: function _attachListenerToAddButton(btnElement) {
      var _this2 = this;

      btnElement.addEventListener("click", function (ev) {
        var btn = ev.target;
        btn.parentElement.classList.add("selected");
        var ruleName = btn.dataset.ruleName;

        _this2.rulesContainer.appendChild(_this2._createRuleItemElement(ruleName));
      });
    }
  }, {
    key: "_attachListenerToDelButton",
    value: function _attachListenerToDelButton(btnElement) {
      btnElement.addEventListener("click", function (ev) {
        if (confirm("Are you sure?") == false) return;
        var btn = ev.target;
        var ruleName = btn.dataset.ruleName;
        var ruleItemEl = document.querySelector(".erb-rule-item[data-rule-name=".concat(ruleName, "]"));

        if (ruleItemEl) {
          ruleItemEl.classList.remove("selected");
          btn.parentElement.remove();
        }
      });
    }
  }, {
    key: "_createRuleItemElement",
    value: function _createRuleItemElement(ruleName) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.expressions[ruleName];
      var ruleText = rule.text;
      var matches = ruleText.matchAll(/\{(\w+)\}/g);

      var _iterator = _createForOfIteratorHelper(matches),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var match = _step.value;
          var field = this.fields[match[1]];
          var initRule = rules[field.name];
          ruleText = ruleText.replace(match[0], this._fieldHtml(field, ruleName, initRule));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var btnDelEl = this._createDelButton(ruleName);

      var ruleItemElement = this._createItem(ruleName, ruleText, "erb-rule-item", btnDelEl);

      return ruleItemElement;
    }
  }, {
    key: "_createAddButton",
    value: function _createAddButton(ruleName) {
      var btn = document.createElement("BUTTON");
      btn.classList = "erb-add-rule";
      btn.innerHTML = "+";
      btn.dataset.ruleName = ruleName;

      this._attachListenerToAddButton(btn);

      return btn;
    }
  }, {
    key: "_createDelButton",
    value: function _createDelButton(ruleName) {
      var btn = document.createElement("BUTTON");
      btn.classList = "erb-del-rule";
      btn.innerHTML = "-";
      btn.dataset.ruleName = ruleName;

      this._attachListenerToDelButton(btn);

      return btn;
    }
  }, {
    key: "_createItem",
    value: function _createItem(ruleName, ruleText, className, actionBtn) {
      var div = document.createElement("DIV");
      div.classList = className;
      div.dataset.ruleName = ruleName;
      div.innerHTML = ruleText;
      div.appendChild(actionBtn);
      return div;
    }
  }, {
    key: "_fieldHtml",
    value: function _fieldHtml(field, ruleName) {
      var initRule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fieldElement = "";

      if (field.type == "list") {
        fieldElement = this._fieldList(field, ruleName, initRule);
      } else if (field.type == "text") {
        fieldElement = this._fieldText(field, ruleName, initRule);
      } else {
        fieldElement = "@".concat(field.name, "@");
      }

      return "<span class=\"erb-type-".concat(field.type, " erb-field-").concat(field.name, "\">").concat(fieldElement, "</span>");
    }
  }, {
    key: "_fieldList",
    value: function _fieldList(field, ruleName) {
      var initRule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fieldOptions = ["<option></option>"];
      fieldOptions.push(field.rules.map(function (i) {
        var rule = i[1];
        var selected = initRule == rule ? "selected" : "";
        return "<option rule=\"".concat(rule, "\" ").concat(selected, ">").concat(i[0], "</option>");
      }));
      return "<select name=\"".concat(ruleName, "[").concat(field.name, "]\" data-field=\"").concat(field.name, "\">").concat(fieldOptions.join(""), "</select>");
    }
  }, {
    key: "_fieldText",
    value: function _fieldText(field, ruleName) {
      var initRule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return "<input type=\"text\" name=\"".concat(ruleName, "[").concat(field.name, "]\" data-field=\"").concat(field.name, "\" rule=\"").concat(initRule, "\" />");
    }
  }, {
    key: "_appendHtmlToElement",
    value: function _appendHtmlToElement(html, toElement) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      var element = tmp.childNodes[0];
      toElement.appendChild(element);
    }
  }]);

  return ExpressionExpressionsBuilder;
}();

module.exports = function (opts) {
  return new ExpressionExpressionsBuilder(opts);
};

/***/ })

/******/ });
//# sourceMappingURL=expression-rules-builder.js.map