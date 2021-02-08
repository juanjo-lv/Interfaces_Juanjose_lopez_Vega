document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");
  desbloquearJuego();
  tiempo();
  mostrar();
  ocultar();
  adivinar()

});

/*Variables a usar durante la ejecución del juego*/

// coleccion de cartas , es un array de objetos que contiene la url de la carta. la solución y el valor a adivinar en el juego
var coleccion = [
  {pregunta: "imgs/cartas/frontales/batalla-lepantofrontal.png", anio : 1571, solucion:"imgs/cartas/reversos/batalla-lepantoreverso.png"},
  {pregunta: "imgs/cartas/frontales/cortesCadiz.png", anio : 1812, solucion:"imgs/cartas/reversos/cortesCadizReverso.png"},
  {pregunta: "imgs/cartas/frontales/descubrimientoAmerica.PNG", anio : 1492, solucion:"imgs/cartas/reversos/DescubrimientoAmericaReverso.PNG"},
  {pregunta: "imgs/cartas/frontales/guadalete.PNG", anio : 711, solucion:"imgs/cartas/reversos/GuadaleteReverso.png"},
  {pregunta: "imgs/cartas/frontales/GuerraCivil.PNG", anio : 1936, solucion:"imgs/cartas/reversos/GuerraCivilReverso.PNG"},
  {pregunta: "imgs/cartas/frontales/Meninas.PNG", anio : 1571, solucion:"imgs/cartas/reversos/MeninasReverso.PNG"},
  {pregunta: "imgs/cartas/frontales/Olimpiadas.PNG", anio : 1992, solucion:"imgs/cartas/reversos/OlimpiadasReverso.PNG"},
  {pregunta: "imgs/cartas/frontales/PrimerFerrocaril.PNG", anio :1848, solucion:"imgs/cartas/reversos/PrimerFerrocarilReverso.PNG"},
  {pregunta:  "imgs/cartas/frontales/quijote.png", anio : 1605, solucion:"imgs/cartas/reversos/QuijoteReverso.PNG"},
  {pregunta: "imgs/cartas/frontales/ReyesCat.PNG", anio : 1469, solucion:"imgs/cartas/reversos/ReyesCatReverso.PNG"}
];
// se genera un valor al azar para seleccionar una carta de las 10 posibles, y se guarda tanto la imagen y el valor en variables
var azar = parseInt(getRandomArbitrary(0,9));
var ruta = coleccion[azar].pregunta;
var respuesta = coleccion[azar].anio;;
var sol = coleccion[azar].solucion;

//Contenido del web component se inserta mediante template
var myTemplate = document.createElement('template');
myTemplate.innerHTML = `
<style>
  .carta img{
    width: 15rem;
    height: 20rem;
  }
  #prueba{
    display: block;
  }
  #solucion{
    display : none;
  }

</style>

<div class="carta">
<img id="prueba" src="${ruta}" alt="">
<img id="solucion" src="${sol}" alt="">
</div>
`;

/*  FUNCIONES PARA QUE SE USAN DURANTE EL JUEGO:*/

// genera un numero aleatorio entre 0 y 9 para que salga una carta al azar entre toda la colección
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function desbloquearJuego(){
  var boton1 = document.getElementById("comenzarJuego");
  var bienvenido = document.querySelector(".bienvenido");
  boton1.addEventListener("click",()=>{
      bienvenido.style.display="none";
  })
}

/*la funcion tiempo inicia el tiempo de la partida e inserta el webcomponent*/
function tiempo() {
  var elemento = document.getElementById("empezar");
  var contador = document.getElementById("contador")
  
  var min = 0;
  var sec = 5;
  
elemento.addEventListener("click",()=>{
     let temp = setInterval(() => {
       elemento.style.display ="none";
         sec--;
         if(sec==0){
          if(min==0 && sec==0){
            clearInterval(temp)
            // alert("has perdido por tiempo");
            // location.reload();
          }else{
              sec=59;
              min--;
          }
         }
         contador.innerHTML=`${min} min ${sec} s`

     }, 1000);
     
     let iniciar = document.querySelector(".muestra");
     iniciar.innerHTML="<carta-historia modo='0'></carta-historia>"
});  
}
function mensajePerder(){

}
/* Permite mostrar el desplegable que muestra las reglas*/
function mostrar() {
    let abajo = document.querySelector("#fabajo");
    let arriba = document.querySelector("#farriba");
    let oculto = document.querySelector(".desplegado")

    abajo.addEventListener("click",()=>{
        oculto.style.transition = "1s";
        abajo.style.visibility="hidden";
        arriba.style.visibility="visible";
        var incremento = 1;
       var pararcrecer = setInterval(() => {
          if(incremento<="25"){
            oculto.style.height =`${incremento}rem`
            incremento+= 5;
            console.log(incremento)
          }else{
            clearInterval(pararcrecer)
            setTimeout(() => {
              oculto.style.visibility ="visible";
            }, 600);
            
          }

        }, 16);
        /*animacion de mostrar contenido a 60fps*/
         
    })
   
}
/* Oculta el desplegable de reglas*/

function ocultar() {
  let abajo = document.querySelector("#fabajo");
  let arriba = document.querySelector("#farriba");
  let oculto = document.querySelector(".desplegado")
    
      arriba.addEventListener("click",()=>{
        oculto.style.transition ="all 0.5s ease 0s"
        arriba.style.visibility="hidden";
        abajo.style.visibility="visible";

        oculto.style.transition="0.5";
        oculto.style.visibility = "hidden";
        setTimeout(() => {
          oculto.style.height ="0";
        }, 450);                
    })
} 
function adivinar(){
   var botonResolver = document.getElementById("botonResolver");
   var vidas = 5;
   var element = document.getElementsByTagName("carta-historica");
   botonResolver.addEventListener("click",()=>{
    var resul = document.getElementById("resp").value;
    if(respuesta!=resul){
      alert("has fallado intentalo otra vez")
    }else{
      
      alert("felicidades has ganado")
      location.reload();
    }
   })
}
/*Clase Cartas que hereda de HTMLElement, cada web component es una carta */
class Cartas extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({ mode: "open" });
      this.clon = myTemplate.content.cloneNode(true);
      
    }
    connectedCallback(){
 
        this.shadowRoot.appendChild(this.clon);
    }
   set modo(newVal){
     return this.setAttribute("modo",newVal);
   }
   get modo(){
     return this.getAttribute("modo");
   }
}

customElements.define("carta-historia",Cartas);

