//menu lateral
var menu_visible =false
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }

}
//oculto el menu una vez que selecciona una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//creo las barras a partir de otra identificada con su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//se selecciona todas las barras para manipularlas
let hmtl = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let diseño = document.getElementById("diseño");
crearBarra(diseño);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

//ahoar guardamos la cantidad de barras que se pintan
//para eso se usa un arreglo, con cada posicion correspondiente a un elemento

let contadores = [-1,-1,-1,-1,-1, -1];

let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervaljavascript);
        }, 100);
        const intervalDiseño = setInterval(function(){
            pintarBarra(diseño, 11, 2, intervalDiseño);
        }, 100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 3, intervalPhotoshop);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores [indice];
    if(x < cantidad){
        let elementos = id_barra.getElementbyClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//se detecta el scrolling del mouse
