  // Función para obtener los parámetros de la URL
  function getParametrosURL() {
    const parametros = {};
    const url = window.location.href;
    const inicio = url.indexOf('?');

    if (inicio !== -1) {
      const cadenaParametros = url.slice(inicio + 1);
      const paresParametros = cadenaParametros.split('&');

      for (let i = 0; i < paresParametros.length; i++) {
        const par = paresParametros[i].split('=');
        const nombre = decodeURIComponent(par[0]);
        const valor = decodeURIComponent(par[1]);
        parametros[nombre] = valor;
      }
    }

    return parametros;
  }

const parametros = getParametrosURL();

const content = document.querySelector('.content');
content.data = parametros.certificateNormal;