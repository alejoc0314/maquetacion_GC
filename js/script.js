//Funciones reloj, fecha y hora 

function actualizarHora () {
var fecha = new Date();
var dia = fecha.getDate().toString().padStart(2, '0');
var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
var anio = fecha.getFullYear();
var fechaActual = dia + '/' + mes + '/' + anio;
document.getElementById('fecha').innerHTML = fechaActual;

var hora = fecha.getHours().toString().padStart(2, '0');
var minutos = fecha.getMinutes().toString().padStart(2, '0');

var periodo = hora >= 12 ? 'p.m.' : 'a.m';

document.getElementById("hora").innerHTML = hora + ":" + minutos + ' ' + periodo;
}

actualizarHora();
setInterval(actualizarHora, 60000); 

//Funcion reloj reunión

function actualizarReloj() {

    const fechaActual = new Date();
    const fechaObjetivo = new Date('2023-03-30');
  
    const diferencia = fechaObjetivo.getTime() - fechaActual.getTime();
  
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  
    document.querySelector('.dias').textContent = dias.toString().padStart(2, '0');
    document.querySelector('.horas').textContent = horas.toString().padStart(2, '0');
    document.querySelector('.minutos').textContent = minutos.toString().padStart(2, '0');
  }

  actualizarReloj();
  setInterval(actualizarReloj, 60000); 

//Función cerrar sesión - esta función solo muestra una alerta

function cerrar_sesion() {
    if (window.confirm("¿Está seguro que desea cerrar sesión?")) {
    } else {
    }
}

//Funcion cancelar poder - esta función solo muestra una alerta

function cancelar_poder() {
    if (window.confirm("¿Está seguro que desea cancelar el poder?")) {
    } else {
    }
}


  
  
  
  
  
  
  