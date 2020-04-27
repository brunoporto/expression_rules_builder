# Expression Rules Builder

## Install

```bash
yarn add expression_rules_builder
```

## Usage

```html
<div id="expressions-container"></div>
<div id="rules-container"></div>
<button id="btnGetMyRules">Get Rules</button>
<textarea id="myRules"></textarea>
```

```js
import ExpressionRulesBuilder from "expression-rules-builder";

var erb = new ExpressionRulesBuilder({
  expressionsContainer: "#expressions-container",
  rulesContainer: "#rules-container",
  fields: [
    {
      name: "users",
      placeholder: "Select a user",
      type: "list",
      customClass: "my-select-class",
      values: [
        ["Bruno", "BRUNO"],
        ["José", "JOSE"],
      ],
    },
    {
      name: "roles",
      placeholder: "Select a role",
      customClass: "my-select-class",
      type: "list",
      values: [
        ["Admin", "ADMIN"],
        ["Client", "CLIENT"],
      ],
    },
    {
      name: "groups",
      placeholder: "Select a group",
      customClass: "my-select-class",
      type: "list",
      values: [
        ["Diamond", "DIAMOND"],
        ["Gold", "GOLD"],
        ["Silver", "SILVER"],
      ],
    },
    {
      name: "price",
      placeholder: "0,00",
      customClass: "my-input-class",
      type: "text",
    },
    {
      name: "percent",
      placeholder: "0",
      customClass: "my-input-class",
      type: "text",
    },
  ],
  expressions: [
    { name: "user", text: "the user {users}" },
    {
      name: "user_role",
      text: "the user {users} with role {roles}",
    },
    { name: "group", text: "the user of group {groups}" },
    { name: "price", text: "with price ${price}" },
    { name: "percent", text: "with {percent}% percent" },
  ],
  rules: [
    { expression: "user", fields: { users: "JOSE" } },
    {
      expression: "user_role",
      fields: { users: "BRUNO", roles: "ADMIN" },
    },
    { expression: "price", fields: { price: "50" } },
  ],
});

erb.beforeAddExpression(function (expressionName) {
  if (confirm("Are you sure?") == false) {
    console.log(`stopped by user!`);
    return false;
  }
});
erb.afterAddExpression(function (expressionName) {
  console.log(`Expression ${expressionName} added`);
});
erb.beforeRemoveRule(function (expressionName) {
  if (confirm("Are you sure?") == false) {
    console.log(`stopped by user!`);
    return false;
  }
});
erb.afterRemoveRule(function (expressionName) {
  console.log(`Rule ${expressionName} removed`);
});

document.getElementById("btnGetMyRules").addEventListener("click", (ev) => {
  var values = erb.getRules();
  document.getElementById("myRules").value = JSON.stringify(
    values,
    undefined,
    4
  );
});
```

## Style

```css
/* Expression Item */
div.erb-expression-item {
}
/* Selected Expression Item (expressions added to rules) */
div.erb-expression-item.selected {
}
/* Rule Item */
div.erb-rule-item {
}
/* Wrapper element of field type LIST <select> */
span.erb-type-list {
}
/* Wrapper element of field type TEXT <input> */
span.erb-type-text {
}
/* Wrapper element of any field (FIELD_NAME = field you named)
js:  fields: [{name: "fieldName", ...}]
css: span.erb-field-fieldName { ... }
*/
span.erb-field-FIELD_NAME {
}
/* Button add */
button.erb-add-rule {
}
/* Button remove */
button.erb-del-rule {
}
/* Custom field classes
js:  fields: [{..., customClass: "my-custom-class", ...}]
css: .my-custom-class { ... }
*/
.my-custom-class {
}
```

## Demo

[https://brunoporto.github.io/expression_rules_builder/](https://brunoporto.github.io/expression_rules_builder/)

## Development

To generate dist package:

```bash
yarn run build
```

Run index.html to development [http://localhost:9000](http://localhost:9000):

```bash
yarn run dev
```
