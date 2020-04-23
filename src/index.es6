"use strict";

class RulesHistory {
  constructor({ target = "", rules = [], fields = [], values = [] } = {}) {
    this.selector = document.querySelector(target);
    this.fields = this._arrayItemsToMap(fields);
    this.rules = this._arrayItemsToMap(rules);
    this.values = values;

    this._buildContainers();
    this._buildRulesItems();
    this._buildValues();
    this._buildListeners();
  }

  getValues() {
    var values = [];
    document.querySelectorAll("[data-values-rule]").forEach((el) => {
      var ruleName = el.dataset.valuesRule;
      var ruleValues = {};
      el.querySelectorAll("[data-field]").forEach((childEl) => {
        var fieldName = childEl.dataset.field;
        ruleValues[fieldName] = childEl.value;
      });
      values.push({ rule: ruleName, values: ruleValues });
    });
    // console.log(values);
    return values;
  }

  _arrayItemsToMap(arrItems = []) {
    var list = {};
    arrItems.forEach((item) => (list[item.name] = item));
    return list;
  }

  _parseRules(arrFields = []) {
    var fields = {};
    arrFields.forEach((field) => (fields[field.name] = field));
    return fields;
  }

  _buildContainers() {
    var htmlContent = [];
    htmlContent.push(`<div id="rhb-rules-container"></div>`);
    htmlContent.push(`<hr />`);
    htmlContent.push(`<div id="rhb-values-container"></div>`);
    this.selector.innerHTML = htmlContent.join("");
    this.rulesContainer = document.querySelector("#rhb-rules-container");
    this.valuesContainer = document.querySelector("#rhb-values-container");
  }

  _buildRulesItems() {
    var newRules = [];
    for (const ruleName in this.rules) {
      const rule = this.rules[ruleName];
      var buttonElement = `<button class="rhb-add-rule" data-rule="${rule.name}">+</button>`;
      var ruleItemElement = `<div class="rhb-rule-item">${rule.text} ${buttonElement}</div>`;
      newRules.push(ruleItemElement);
    }
    this.rulesContainer.innerHTML = newRules.join("");
  }

  _buildValues() {
    this.values.forEach((item) => {
      this._appendHtmlToElement(
        this._ruleHtml(item.rule, item.values),
        this.valuesContainer
      );
    });
  }

  _buildListeners() {
    var addRuleBtns = document.querySelectorAll(".rhb-add-rule");
    addRuleBtns.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        var ruleName = ev.target.dataset.rule;
        this._appendHtmlToElement(
          this._ruleHtml(ruleName),
          this.valuesContainer
        );
      });
    });

    var delValueBtns = document.querySelectorAll(".rhb-del-value");
    delValueBtns.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        if (confirm("Are you sure?") == false) return;
        var btn = ev.target;
        btn.parentElement.remove();
      });
    });
  }

  _ruleHtml(ruleName, values = {}) {
    const rule = this.rules[ruleName];
    var ruleText = rule.text;
    var matches = ruleText.matchAll(/\{(\w+)\}/g);
    for (const match of matches) {
      var field = this.fields[match[1]];
      var initValue = values[field.name];
      ruleText = ruleText.replace(
        match[0],
        this._fieldHtml(field, ruleName, initValue)
      );
    }
    var buttonElement = `<button class="rhb-del-value">-</button>`;
    return `<div class="rhb-value-item" data-values-rule="${ruleName}">${ruleText} ${buttonElement}</div>`;
  }

  _fieldHtml(field, ruleName, initValue = "") {
    var fieldElement = "";
    if (field.type == "list") {
      fieldElement = this._fieldList(field, ruleName, initValue);
    } else if (field.type == "text") {
      fieldElement = this._fieldText(field, ruleName, initValue);
    } else {
      fieldElement = `@${field.name}@`;
    }
    return `<span class="rhb-type-${field.type} rhb-field-${field.name}">${fieldElement}</span>`;
  }

  _fieldList(field, ruleName, initValue = "") {
    var fieldOptions = ["<option></option>"];
    fieldOptions.push(
      field.values.map((i) => {
        var value = i[1];
        var selected = initValue == value ? "selected" : "";
        return `<option value="${value}" ${selected}>${i[0]}</option>`;
      })
    );
    return `<select name="${ruleName}[${field.name}]" data-field="${
      field.name
    }">${fieldOptions.join("")}</select>`;
  }

  _fieldText(field, ruleName, initValue = "") {
    return `<input type="text" name="${ruleName}[${field.name}]" data-field="${field.name}" value="${initValue}" />`;
  }

  _appendHtmlToElement(html, toElement) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    var element = tmp.childNodes[0];
    toElement.appendChild(element);
  }
}

module.exports = (selector) => {
  return new RulesHistory(selector);
};
