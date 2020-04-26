# expression_rules_builder

## Options

```html
<div id="expressions-container"></div>
<div id="rules-container"></div>
```

```js
var erb = ExpressionRulesBuilder({
  expressionsContainer: "#expressions-container",
  rulesContainer: "#rules-container",
  fields: [
    {
      name: "fieldName",
      placeholder: "fieldName",
      type: "list",
      values: [
        ["Label", "value"],
        ["Label", "value"],
        ["Label", "value"],
      ],
    },
    {
      name: "fieldName2",
      placeholder: "fieldName2",
      type: "text",
    },
  ],
  expressions: [
    {
      name: "expression1",
      text: "Lorem ipsum dolor sit {fieldName}, consectetur adipiscing elit.",
    },
    {
      name: "expression2",
      text: "Donec {fieldName} ullamcorper. Duis consequat {fieldName2}",
    },
  ],
  rules: [
    {
      expression: "expression2",
      fields: { fieldName: "whatever", fieldName2: "something" },
    },
  ],
});

var values = erb.getRules();
// values => [{ expression: "expression2", values: { fieldName: "whatever", fieldName2: "something" } }]

erb.beforeAddExpression(function (expressionName) {
  if (confirm("Are you sure?") == false) {
    console.log(`Stopped by user!`);
    return false; // return false to stop action
  }
});

erb.afterAddExpression(function (expressionName) {
  console.log(`Expression ${expressionName} added`);
});

erb.beforeRemoveRule(function (expressionName) {
  if (confirm("Are you sure?") == false) {
    console.log(`Stopped by user!`);
    return false; // return false to stop action
  }
});

erb.afterRemoveRule(function (expressionName) {
  console.log(`Rule ${expressionName} removed`);
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
```

## Behavior

Ao selecionar um item na lista de regras, ele marcará o item com a classe "selected", possibilitando que você desabilite, oculte ou altere o estilo das regras selecionadas.

## Commands

Para gerar o pacote de distribuição em /dist

```bash
yarn run build
```

Para iniciar o servidor de DEV e testar o exemplo (index.html) em http://localhost:9000/

```bash
yarn run dev
```
