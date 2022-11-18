const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.toggleAttribute('show');
});

close.addEventListener('click', () => {
  cerrarmodal()
});

function openmodal(tipo) {
  modal_container.classList.add('show');
  if (tipo == "camOscura") {
    let textoModalCamara = document.getElementById("textoModalCamara");
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    textoModalCamara.innerHTML = "La cámara oscura permitió proyectar una imagen plana al inferior de una superficie la cual consiste en una caja cerrada con un pequeño agujero el cual proyectaba luz de una pared creada por daguerrotipo Louis."
    titulomodalcamara.innerHTML = "Camara Oscura"
  }
  if (tipo == "camColondio") {
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    let textoModalCamara = document.getElementById("textoModalCamara");
    textoModalCamara.innerHTML = "La cámara colondio húmedo inventada por Frederick Scott Acher. El cual hizo un grandioso proceso inventando aquella cámara."
    titulomodalcamara.innerHTML = "Cámara colondio"
  }
  if (tipo == "camEastman") {
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    let textoModalCamara = document.getElementById("textoModalCamara");
    textoModalCamara.innerHTML = "George Eastman fue el fundador de la Eastman Kodak Company e inventor del rollo de película, que sustituyó a la placa de cristal, con lo cual consiguió poner la fotografía a disposición. "
    titulomodalcamara.innerHTML = "Eastman Kodak"
  }
  if (tipo == "camLeica") {
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    let textoModalCamara = document.getElementById("textoModalCamara");
    textoModalCamara.innerHTML = "La leica fue la primera cámara compacta de película de 35mm. Los primeros prototipos fueron construidos por Oskar Barnack en E litz Optische Werke, Wetzlar, en 1913. Barnack uso película estándar de cine de 35mm, pero amplio el tamaño de la imagen hasta los 24x36mm."
    titulomodalcamara.innerHTML = "La leica"
  }
  if (tipo == "camCasete") {
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    let textoModalCamara = document.getElementById("textoModalCamara");
    textoModalCamara.innerHTML = "Esta cámara registraba las imágenes en una cinta de casete y tardo 23 segundos en capturar su primera imagen en diciembre "
    titulomodalcamara.innerHTML = "Cámara Casete"
  }
  if (tipo == "camDigital") {
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    let textoModalCamara = document.getElementById("textoModalCamara");
    textoModalCamara.innerHTML = "Una cámara digital es una cámara fotográfica que, en vez de captar y almacenar fotografías en película química como las cámaras fotográficas de película fotográfica, recurren a la fotografía digital para generar y almacenar imágenes"
    titulomodalcamara.innerHTML = "Cámara Digital"
  }
  if (tipo == "camModerna") {
    let titulomodalcamara = document.getElementById('titulomodalcamara')
    let textoModalCamara = document.getElementById("textoModalCamara");
    textoModalCamara.innerHTML = "Las cámaras digitales modernas generalmente tienen varias funsiones y contienen dispositivos capaces de grabar sonido y/o videos."
    titulomodalcamara.innerHTML = "cámaras digitales modernas"
  }
}


function cerrarmodal() {
  modal_container.classList.remove('show');
}
