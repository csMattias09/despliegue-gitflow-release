const test = require("node:test");
const assert = require("node:assert");
const { login } = require("../src/login");

test("permite el login con credenciales correctas", () => {
  const resultado = login("admin", "admin123");
  assert.strictEqual(resultado.ok, true);
  assert.match(resultado.message, /Bienvenido, admin/);
});

test("rechaza una contraseña incorrecta", () => {
  const resultado = login("admin", "contraseña-mala");
  assert.strictEqual(resultado.ok, false);
  assert.match(resultado.message, /Contraseña incorrecta/);
});

test("rechaza un usuario que no existe", () => {
  const resultado = login("no-existe", "cualquiera");
  assert.strictEqual(resultado.ok, false);
  assert.match(resultado.message, /Usuario no encontrado/);
});

test("rechaza credenciales vacías", () => {
  const resultado = login("", "");
  assert.strictEqual(resultado.ok, false);
  assert.match(resultado.message, /obligatorios/);
});
