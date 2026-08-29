const { version } = require("../package.json");

/**
 * Genera un saludo de bienvenida para proyecto-app.
 * @param {string} [name] Nombre de la persona a saludar.
 * @returns {string} Mensaje de saludo con la versión actual.
 */
function greet(name = "mundo") {
  return `¡Hola, ${name}! Bienvenido a proyecto-app v${version}.`;
}

module.exports = { greet };
