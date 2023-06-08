// Funcion que verifica si la url contiene parametros
function verificarParametros(url, inicio, parametros) {
  if (inicio !== -1) {
    const cadenaParametros = url.slice(inicio + 1);
    const paresParametros = cadenaParametros.split('&');

    getObjectParametros(paresParametros, parametros);
  }
}
// Encapsulación del codigo
function getObjectParametros(paresParametros, parametros) {
  for (const element of paresParametros) {
    const par = element.split('=');
    const nombre = decodeURIComponent(par[0]);
    const valor = decodeURIComponent(par[1]);
    parametros[nombre] = valor;
  }
}
// Función para obtener los parámetros de la URL
function getParametrosURL() {
  const parametros = {};
  const url = window.location.href;
  const inicio = url.indexOf('?');

  verificarParametros(url, inicio, parametros)
  return parametros;
}
// entrando al objeto con nuevos valores que esta funcion generó
const parametros = getParametrosURL();
// Agregando los valores al DOM
const content = document.querySelector('.content');
content.data = parametros.certificate;