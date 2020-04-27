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
        var expressionName = el.dataset.expressionName;
        var fields = {};
        el.querySelectorAll("[data-field]").forEach(function (childEl) {
          var fieldName = childEl.dataset.field;
          fields[fieldName] = childEl.value;
        });
        rules.push({
          expression: expressionName,
          fields: fields
        });
      });
      return rules;
    }
  }, {
    key: "beforeAddExpression",
    value: function beforeAddExpression(callback) {
      this.beforeAddCb = callback;
    }
  }, {
    key: "afterAddExpression",
    value: function afterAddExpression(callback) {
      this.afterAddCb = callback;
    }
  }, {
    key: "beforeRemoveRule",
    value: function beforeRemoveRule(callback) {
      this.beforeRemoveCb = callback;
    }
  }, {
    key: "afterRemoveRule",
    value: function afterRemoveRule(callback) {
      this.afterRemoveCb = callback;
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
      for (var expressionName in this.expressions) {
        var expression = this.expressions[expressionName];

        var btnAddEl = this._createAddButton(expressionName);

        var expressionItemElement = this._createItem(expression.name, expression.text, "erb-expression-item", btnAddEl);

        if (document.querySelector(".erb-rule-item[data-expression-name=".concat(expressionName, "]")) !== null) {
          expressionItemElement.classList.add("selected");
        }

        this.expressionsContainer.appendChild(expressionItemElement);
      }
    }
  }, {
    key: "_buildRules",
    value: function _buildRules() {
      var _this = this;

      this.rules.forEach(function (rule) {
        var expressionName = rule.expression;

        _this.rulesContainer.appendChild(_this._createRuleItemElement(expressionName, rule.fields));
      });
    }
  }, {
    key: "_attachListenerToAddButton",
    value: function _attachListenerToAddButton(btnElement) {
      var _this2 = this;

      btnElement.addEventListener("click", function (ev) {
        var btn = ev.target;
        var expressionName = btn.dataset.expressionName;

        if (_this2.beforeAddCb) {
          if (_this2.beforeAddCb(expressionName) === false) return;
        }

        btn.parentElement.classList.add("selected");

        _this2.rulesContainer.appendChild(_this2._createRuleItemElement(expressionName));

        if (_this2.afterAddCb) _this2.afterAddCb(expressionName);
      });
    }
  }, {
    key: "_attachListenerToDelButton",
    value: function _attachListenerToDelButton(btnElement) {
      var _this3 = this;

      btnElement.addEventListener("click", function (ev) {
        var btn = ev.target;
        var expressionName = btn.dataset.expressionName;

        if (_this3.beforeRemoveCb) {
          if (_this3.beforeRemoveCb(expressionName) === false) return;
        }

        var expressionItemEl = document.querySelector(".erb-expression-item[data-expression-name=".concat(expressionName, "]"));

        if (expressionItemEl) {
          expressionItemEl.classList.remove("selected");
        }

        btn.parentElement.remove();
        if (_this3.afterRemoveCb) _this3.afterRemoveCb(expressionName);
      });
    }
  }, {
    key: "_createRuleItemElement",
    value: function _createRuleItemElement(expressionName) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var expression = this.expressions[expressionName];
      var ruleText = expression.text;
      var matches = ruleText.matchAll(/\{(\w+)\}/g);

      var _iterator = _createForOfIteratorHelper(matches),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var match = _step.value;
          var field = this.fields[match[1]];

          if (field) {
            var initValue = values[field.name];

            var fieldElement = this._fieldElement(field, expressionName, initValue);

            ruleText = ruleText.replace(match[0], fieldElement.outerHTML);
          } else {
            ruleText = ruleText.replace(match[0], "!!INVALID FIELD: ".concat(match[1], "!!"));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var btnDelEl = this._createDelButton(expressionName);

      var ruleItemElement = this._createItem(expressionName, ruleText, "erb-rule-item", btnDelEl);

      return ruleItemElement;
    }
  }, {
    key: "_createAddButton",
    value: function _createAddButton(expressionName) {
      var btn = document.createElement("BUTTON");
      btn.classList = "erb-add-rule";
      btn.innerHTML = "+";
      btn.dataset.expressionName = expressionName;

      this._attachListenerToAddButton(btn);

      return btn;
    }
  }, {
    key: "_createDelButton",
    value: function _createDelButton(expressionName) {
      var btn = document.createElement("BUTTON");
      btn.classList = "erb-del-rule";
      btn.innerHTML = "-";
      btn.dataset.expressionName = expressionName;

      this._attachListenerToDelButton(btn);

      return btn;
    }
  }, {
    key: "_createItem",
    value: function _createItem(expressionName, expressionText, className, actionBtn) {
      var div = document.createElement("DIV");
      div.classList = className;
      div.dataset.expressionName = expressionName;
      div.innerHTML = expressionText;
      div.appendChild(actionBtn);
      return div;
    }
  }, {
    key: "_fieldElement",
    value: function _fieldElement(field, expressionName) {
      var initValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var fieldElement = "";

      if (field.type == "list") {
        fieldElement = this._fieldList(field, expressionName, initValue);
      } else if (field.type == "text") {
        fieldElement = this._fieldText(field, expressionName, initValue);
      } else {
        fieldElement = document.createElement("SPAN");
        fieldElement.innerHTML = "@".concat(field.name, "@");
      }

      var fieldContainer = this._fieldContainerTag(field);

      fieldContainer.append(fieldElement);
      return fieldContainer;
    }
  }, {
    key: "_fieldList",
    value: function _fieldList(field, expressionName) {
      var _this4 = this;

      var initValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      var selectTag = this._selectTag(field, expressionName);

      var emptyOptionTag = this._optionTag();

      selectTag.appendChild(emptyOptionTag);
      field.values.map(function (i) {
        var value = i[1];
        var selected = initValue == value;

        var optionTag = _this4._optionTag(value, i[0], selected);

        selectTag.appendChild(optionTag);
      });
      return selectTag;
    }
  }, {
    key: "_fieldText",
    value: function _fieldText(field, expressionName) {
      var initValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return this._inputTag(field, expressionName, initValue);
    }
  }, {
    key: "_inputTag",
    value: function _inputTag(field, expressionName) {
      var initValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var nodeElement = document.createElement("INPUT");
      if (field.customClass) nodeElement.classList = field.customClass;
      if (field.placeholder) nodeElement.placeholder = field.placeholder;
      nodeElement.name = "".concat(expressionName, "[").concat(field.name, "]");
      nodeElement.dataset.field = field.name;
      nodeElement.defaultValue = initValue;
      return nodeElement;
    }
  }, {
    key: "_selectTag",
    value: function _selectTag(field, expressionName) {
      var nodeElement = document.createElement("SELECT");
      if (field.customClass) nodeElement.classList = field.customClass;
      if (field.placeholder) nodeElement.placeholder = field.placeholder;
      nodeElement.name = "".concat(expressionName, "[").concat(field.name, "]");
      nodeElement.dataset.field = field.name;
      return nodeElement;
    }
  }, {
    key: "_optionTag",
    value: function _optionTag() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var nodeElement = document.createElement("OPTION");
      if (selected) nodeElement.defaultSelected = true;
      nodeElement.value = value;
      nodeElement.innerHTML = text;
      return nodeElement;
    }
  }, {
    key: "_fieldContainerTag",
    value: function _fieldContainerTag(field) {
      var nodeElement = document.createElement("SPAN");
      nodeElement.classList = "erb-type-".concat(field.type, " erb-field-").concat(field.name);
      return nodeElement;
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