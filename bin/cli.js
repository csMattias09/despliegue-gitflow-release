#!/usr/bin/env node

const { greet } = require("../src/greet");
const { login } = require("../src/login");

const [comando, ...args] = process.argv.slice(2);

if (comando === "login") {
  const [username, password] = args;
  const resultado = login(username, password);
  console.log(resultado.message);
  process.exitCode = resultado.ok ? 0 : 1;
} else {
  console.log(greet(comando));
}
