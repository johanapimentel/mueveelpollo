var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var ancho = document.getElementById("areaHtml").clientWidth;
var largo = document.getElementById("areaHtml").clientHeight;
var posX = ancho/2;
var posY = largo/2;
var linea = 5;
var area = document.getElementById("areaHtml").getContext("2d");
document.addEventListener("keydown", dibujarTeclado);

var mapa = {
    url:"tile.png",
    cargaOk: false
}  
var pollo = {
    url:"pollo.png",
    cargaOk: false
} 

// dibujar fondo de la villa
mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

// dibujar el pollo de la villa
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarPollo() {
    pollo.cargaOk = true;
    dibujame();
}    

function cargarMapa() {
    mapa.cargaOk = true;
    dibujame();
}  

function dibujame() {
    if (mapa.cargaOk){
        area.drawImage(mapa.imagen, 0,0);
        console.log("dibujando mapa");
    }
    if (pollo.cargaOk){
        area.drawImage(pollo.imagen, posX,posY);
        console.log("dibujando pollo");
    }
}

function dibujarTeclado(evento) {
    switch(evento.keyCode){
        case teclas.UP:
            dibujame();
            posY = posY - linea;
        break;
        case teclas.DOWN:
            dibujame();
            posY = posY + linea;
        break;
        case teclas.LEFT:
            dibujame();
            posX = posX - linea;
        break;
        case teclas.RIGHT:
            dibujame();
            posX = posX + linea;
        break;
        default:
            alert("debe pulsar una flecha para seguir moviendose");
        break;
    }
}