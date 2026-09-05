const crypto = require("node:crypto");

// Usuarios de ejemplo. La contraseña nunca se guarda en texto plano,
// se guarda su hash (sha256) para simular una práctica real de seguridad.
const usuarios = new Map([
  ["admin", hashPassword("admin123")],
  ["luis", hashPassword("clave456")],
]);

/**
 * Genera el hash sha256 de una contraseña.
 * @param {string} password
 * @returns {string} Hash en hexadecimal.
 */
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

/**
 * Valida credenciales de usuario contra el registro en memoria.
 * @param {string} username Nombre de usuario.
 * @param {string} password Contraseña en texto plano.
 * @returns {{ ok: boolean, message: string }} Resultado del login.
 */
function login(username, password) {
  if (!username || !password) {
    return { ok: false, message: "Usuario y contraseña son obligatorios." };
  }

  const hashGuardado = usuarios.get(username);
  if (!hashGuardado) {
    return { ok: false, message: "Usuario no encontrado." };
  }

  const hashIngresado = hashPassword(password);
  if (hashIngresado !== hashGuardado) {
    return { ok: false, message: "Contraseña incorrecta." };
  }

  return { ok: true, message: `Bienvenido, ${username}.` };
}

module.exports = { login, hashPassword };
