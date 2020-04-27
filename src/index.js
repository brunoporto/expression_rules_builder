import ExpressionRulesBuilder from "./expression-rules-builder";

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
