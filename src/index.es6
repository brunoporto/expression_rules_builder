"use strict";

class ExpressionExpressionsBuilder {
  constructor({
    expressionsContainer = "",
    rulesContainer = "",
    fields = [],
    expressions = [],
    rules = [],
  } = {}) {
    this.expressionsContainer = document.querySelector(expressionsContainer);
    this.rulesContainer = document.querySelector(rulesContainer);
    this.fields = this._arrayItemsToMap(fields);
    this.expressions = this._arrayItemsToMap(expressions);
    this.rules = rules;
    this._buildRules();
    this._buildExpressionsItems();
  }

  getRules() {
    var rules = [];
    this.rulesContainer.querySelectorAll(".erb-rule-item").forEach((el) => {
      var expressionName = el.dataset.expressionName;
      var fields = {};
      el.querySelectorAll("[data-field]").forEach((childEl) => {
        var fieldName = childEl.dataset.field;
        fields[fieldName] = childEl.value;
      });
      rules.push({ expression: expressionName, fields: fields });
    });
    return rules;
  }

  beforeAddExpression(callback) {
    this.beforeAddCb = callback;
  }
  afterAddExpression(callback) {
    this.afterAddCb = callback;
  }
  beforeRemoveRule(callback) {
    this.beforeRemoveCb = callback;
  }
  afterRemoveRule(callback) {
    this.afterRemoveCb = callback;
  }

  _arrayItemsToMap(arrItems = []) {
    var list = {};
    arrItems.forEach((item) => (list[item.name] = item));
    return list;
  }

  _parseExpressions(arrFields = []) {
    var fields = {};
    arrFields.forEach((field) => (fields[field.name] = field));
    return fields;
  }

  _buildExpressionsItems() {
    for (const expressionName in this.expressions) {
      const expression = this.expressions[expressionName];
      var btnAddEl = this._createAddButton(expressionName);
      var expressionItemElement = this._createItem(
        expression.name,
        expression.text,
        "erb-expression-item",
        btnAddEl
      );
      if (
        document.querySelector(
          `.erb-rule-item[data-expression-name=${expressionName}]`
        ) !== null
      ) {
        expressionItemElement.classList.add("selected");
      }
      this.expressionsContainer.appendChild(expressionItemElement);
    }
  }

  _buildRules() {
    this.rules.forEach((rule) => {
      var expressionName = rule.expression;
      this.rulesContainer.appendChild(
        this._createRuleItemElement(expressionName, rule.fields)
      );
    });
  }

  _attachListenerToAddButton(btnElement) {
    btnElement.addEventListener("click", (ev) => {
      var btn = ev.target;
      var expressionName = btn.dataset.expressionName;
      if (this.beforeAddCb) {
        if (this.beforeAddCb(expressionName) === false) return;
      }
      btn.parentElement.classList.add("selected");
      this.rulesContainer.appendChild(
        this._createRuleItemElement(expressionName)
      );
      if (this.afterAddCb) this.afterAddCb(expressionName);
    });
  }

  _attachListenerToDelButton(btnElement) {
    btnElement.addEventListener("click", (ev) => {
      var btn = ev.target;
      var expressionName = btn.dataset.expressionName;
      if (this.beforeRemoveCb) {
        if (this.beforeRemoveCb(expressionName) === false) return;
      }
      var expressionItemEl = document.querySelector(
        `.erb-expression-item[data-expression-name=${expressionName}]`
      );
      if (expressionItemEl) {
        expressionItemEl.classList.remove("selected");
      }
      btn.parentElement.remove();
      if (this.afterRemoveCb) this.afterRemoveCb(expressionName);
    });
  }

  _createRuleItemElement(expressionName, values = {}) {
    const expression = this.expressions[expressionName];
    var ruleText = expression.text;
    var matches = ruleText.matchAll(/\{(\w+)\}/g);
    for (const match of matches) {
      var field = this.fields[match[1]];
      if (field) {
        var initValue = values[field.name];
        var fieldElement = this._fieldElement(field, expressionName, initValue);
        ruleText = ruleText.replace(match[0], fieldElement.outerHTML);
      } else {
        ruleText = ruleText.replace(match[0], `!!INVALID FIELD: ${match[1]}!!`);
      }
    }
    var btnDelEl = this._createDelButton(expressionName);
    var ruleItemElement = this._createItem(
      expressionName,
      ruleText,
      "erb-rule-item",
      btnDelEl
    );
    return ruleItemElement;
  }

  _createAddButton(expressionName) {
    var btn = document.createElement("BUTTON");
    btn.classList = "erb-add-rule";
    btn.innerHTML = "+";
    btn.dataset.expressionName = expressionName;
    this._attachListenerToAddButton(btn);
    return btn;
  }

  _createDelButton(expressionName) {
    var btn = document.createElement("BUTTON");
    btn.classList = "erb-del-rule";
    btn.innerHTML = "-";
    btn.dataset.expressionName = expressionName;
    this._attachListenerToDelButton(btn);
    return btn;
  }

  _createItem(expressionName, expressionText, className, actionBtn) {
    var div = document.createElement("DIV");
    div.classList = className;
    div.dataset.expressionName = expressionName;
    div.innerHTML = expressionText;
    div.appendChild(actionBtn);
    return div;
  }

  _fieldElement(field, expressionName, initValue = "") {
    var fieldElement = "";
    if (field.type == "list") {
      fieldElement = this._fieldList(field, expressionName, initValue);
    } else if (field.type == "text") {
      fieldElement = this._fieldText(field, expressionName, initValue);
    } else {
      fieldElement = document.createElement("SPAN");
      fieldElement.innerHTML = `@${field.name}@`;
    }
    var fieldContainer = this._fieldContainerTag(field);
    fieldContainer.append(fieldElement);
    return fieldContainer;
  }

  _fieldList(field, expressionName, initValue = "") {
    var selectTag = this._selectTag(field, expressionName);
    var emptyOptionTag = this._optionTag();
    selectTag.appendChild(emptyOptionTag);
    field.values.map((i) => {
      var value = i[1];
      var selected = initValue == value;
      var optionTag = this._optionTag(value, i[0], selected);
      selectTag.appendChild(optionTag);
    });
    return selectTag;
  }

  _fieldText(field, expressionName, initValue = "") {
    return this._inputTag(field, expressionName, initValue);
  }

  _inputTag(field, expressionName, initValue = "") {
    var nodeElement = document.createElement("INPUT");
    if (field.customClass) nodeElement.classList = field.customClass;
    if (field.placeholder) nodeElement.placeholder = field.placeholder;
    nodeElement.name = `${expressionName}[${field.name}]`;
    nodeElement.dataset.field = field.name;
    nodeElement.defaultValue = initValue;
    return nodeElement;
  }
  _selectTag(field, expressionName) {
    var nodeElement = document.createElement("SELECT");
    if (field.customClass) nodeElement.classList = field.customClass;
    if (field.placeholder) nodeElement.placeholder = field.placeholder;
    nodeElement.name = `${expressionName}[${field.name}]`;
    nodeElement.dataset.field = field.name;
    return nodeElement;
  }
  _optionTag(value = "", text = "", selected = false) {
    var nodeElement = document.createElement("OPTION");
    if (selected) nodeElement.defaultSelected = true;
    nodeElement.value = value;
    nodeElement.innerHTML = text;
    return nodeElement;
  }
  _fieldContainerTag(field) {
    var nodeElement = document.createElement("SPAN");
    nodeElement.classList = `erb-type-${field.type} erb-field-${field.name}`;
    return nodeElement;
  }

  _appendHtmlToElement(html, toElement) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    var element = tmp.childNodes[0];
    toElement.appendChild(element);
  }
}

module.exports = (opts) => {
  return new ExpressionExpressionsBuilder(opts);
};
