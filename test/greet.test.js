const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../src/greet");

test("saluda con el nombre por defecto (mundo)", () => {
  assert.match(greet(), /¡Hola, mundo!/);
});

test("saluda con un nombre personalizado", () => {
  assert.match(greet("Luis"), /¡Hola, Luis!/);
});

test("incluye la versión del package.json", () => {
  const { version } = require("../package.json");
  assert.ok(greet().includes(version));
});
