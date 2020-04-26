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
      var initValue = values[field.name];
      ruleText = ruleText.replace(
        match[0],
        this._fieldHtml(field, expressionName, initValue)
      );
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

  _fieldHtml(field, expressionName, initValue = "") {
    var fieldElement = "";
    if (field.type == "list") {
      fieldElement = this._fieldList(field, expressionName, initValue);
    } else if (field.type == "text") {
      fieldElement = this._fieldText(field, expressionName, initValue);
    } else {
      fieldElement = `@${field.name}@`;
    }
    return `<span class="erb-type-${field.type} erb-field-${field.name}">${fieldElement}</span>`;
  }

  _fieldList(field, expressionName, initRule = "") {
    var fieldOptions = ["<option></option>"];
    fieldOptions.push(
      field.values.map((i) => {
        var rule = i[1];
        var selected = initRule == rule ? "selected" : "";
        return `<option value="${rule}" ${selected}>${i[0]}</option>`;
      })
    );
    return `<select name="${expressionName}[${field.name}]" placeholder="${
      field.placeholder
    }" data-field="${field.name}">${fieldOptions.join("")}</select>`;
  }

  _fieldText(field, expressionName, initRule = "") {
    return `<input type="text" placeholder="${field.placeholder}" name="${expressionName}[${field.name}]" data-field="${field.name}" value="${initRule}" />`;
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
