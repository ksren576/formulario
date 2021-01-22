function obtenerValor(id) {
  return document.getElementById(id).value;
}

function esCorreoValido(correo) {
    return correo.indexOf('@') > -1 && correo.indexOf('.') > -1  && correo.indexOf('@') < correo.indexOf('.') - 1
}

function validar() {
  let nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = obtenerValor("nombre");
  apellidos = obtenerValor("apellidos");
  correo = obtenerValor("correo");
  usuario = obtenerValor("usuario");
  clave = obtenerValor("pass");
  telefono = obtenerValor("telefono");

  let mensaje = "";

  //validaciones
  // Nombre
  if (nombre === "") {
    mensaje += "- El campo nombre es obligatorio\n";
  }
  if (nombre.length > 30) {
    mensaje += "- El campo nombre debe tener hasta 30 caracteres\n";
  }

  // Apellido
  if (apellidos === "") {
    mensaje += "- El campo apellidos es obligatorio\n";
  }
  if (apellidos.length > 80) {
    mensaje += "- El campo apellidos debe tener hasta 80 caracteres\n";
  }

  // correo
  if (correo === "") {
    mensaje += "- El campo correo es obligatorio\n";
  }
  if (correo.length > 100) {
    mensaje += "- El campo correo debe tener hasta 100 caracteres\n";
  }
  if (!esCorreoValido(correo)) {
    mensaje += "- El campo correo no es válido\n";
  }

  // usuario
  if (usuario === "") {
    mensaje += "- El campo usuario es obligatorio\n";
  }
  if (usuario.length > 20) {
    mensaje += "- El campo usuario debe tener hasta 20 caracteres\n";
  }

  // clave
  if (clave === "") {
    mensaje += "- El campo clave es obligatorio\n";
  }

  // telefono
  if (telefono === "") {
    mensaje += "- El campo telefono es obligatorio\n";
  }
  if (telefono.length > 15) {
    mensaje += "- El campo telefono debe tener hasta 15 caracteres\n";
  }
  if (isNaN(Number(telefono))) {
    mensaje += "- El campo telefono debe ser numerico\n";
  }

  if (mensaje) {
    alert(mensaje);
  } else {
    alert(`Bienvenido/a ${nombre} ${apellidos} tus credenciales son\nusuario: ${usuario}\ncontraseña: ${clave}`);
  }

  return mensaje ? false : true;
}
