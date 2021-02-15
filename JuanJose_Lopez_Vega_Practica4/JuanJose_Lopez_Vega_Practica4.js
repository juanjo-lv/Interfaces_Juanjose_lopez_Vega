document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");
  tiempo();
  mostrar();
  ocultar();
  adivinar();
});

/*Variables a usar durante la ejecución del juego*/

// coleccion de cartas , es un array de objetos que contiene la url de la carta. la solución y el valor a adivinar en el juego
var coleccion = [
  {
    pregunta: "imgs/cartas/frontales/batalla-lepantofrontal.png",
    anio: 1571,
    solucion: "imgs/cartas/reversos/batalla-lepantoreverso.png",
  },
  {
    pregunta: "imgs/cartas/frontales/cortesCadiz.png",
    anio: 1812,
    solucion: "imgs/cartas/reversos/cortesCadizReverso.png",
  },
  {
    pregunta: "imgs/cartas/frontales/descubrimientoAmerica.PNG",
    anio: 1492,
    solucion: "imgs/cartas/reversos/DescubrimientoAmericaReverso.PNG",
  },
  {
    pregunta: "imgs/cartas/frontales/guadalete.PNG",
    anio: 711,
    solucion: "imgs/cartas/reversos/GuadaleteReverso.png",
  },
  {
    pregunta: "imgs/cartas/frontales/GuerraCivil.PNG",
    anio: 1936,
    solucion: "imgs/cartas/reversos/GuerraCivilReverso.PNG",
  },
  {
    pregunta: "imgs/cartas/frontales/Meninas.PNG",
    anio: 1656,
    solucion: "imgs/cartas/reversos/MeninasReverso.PNG",
  },
  {
    pregunta: "imgs/cartas/frontales/Olimpiadas.PNG",
    anio: 1992,
    solucion: "imgs/cartas/reversos/OlimpiadasReverso.PNG",
  },
  {
    pregunta: "imgs/cartas/frontales/PrimerFerrocaril.PNG",
    anio: 1848,
    solucion: "imgs/cartas/reversos/PrimerFerrocarilReverso.PNG",
  },
  {
    pregunta: "imgs/cartas/frontales/quijote.png",
    anio: 1605,
    solucion: "imgs/cartas/reversos/QuijoteReverso.PNG",
  },
  {
    pregunta: "imgs/cartas/frontales/ReyesCat.PNG",
    anio: 1469,
    solucion: "imgs/cartas/reversos/ReyesCatReverso.PNG",
  },
];
// se genera un valor al azar para seleccionar una carta de las 10 posibles, y se guarda tanto la imagen y el valor en variables
var azar = parseInt(getRandomArbitrary(0, 9));
var ruta = coleccion[azar].pregunta;
var correcta = coleccion[azar].anio;
var sol = coleccion[azar].solucion;



/*  FUNCIONES PARA QUE SE USAN DURANTE EL JUEGO:*/

// genera un numero aleatorio entre 0 y 9 para que salga una carta al azar entre toda la colección
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/*la funcion tiempo inicia el tiempo de la partida e inserta el webcomponent*/
function tiempo() {
  let elemento = document.getElementById("empezar");
  let contador = document.getElementById("contador");
  let inputrespuesta = document.getElementById("resp");
  let botonresolver = document.getElementById("botonResolver");
  let pista = document.querySelector(".tip");

  var min = 2;
  var sec = 59;

  elemento.addEventListener("click", () => {

     /*se muestran los elementos cuando se inicia el juego*/
    elemento.style.display = "none";
    inputrespuesta.style.visibility="visible";
    botonresolver.style.visibility="visible";
    apareceFormulario();
    /*se inserta el webcomponent que corresponde a la carta*/
    let iniciar = document.querySelector(".muestra");
    /*Atributo cara 
          0 : si la carta no ha girado mostrando la solución
          1 : para que la carta gire mostrando la solución
          mediante un attributechangedcallback se llama a un metodo de la clase llamado girar 
    */      
    iniciar.innerHTML = "<carta-historia id='miCarta' cara='0'></carta-historia>";
    
    
    /*Lleva el tiempo de la partida*/
    let temp = setInterval(() => {  
      sec--;
      if (sec == 0) {
        if (min == 0 && sec == 0) {
          clearInterval(temp);
          //si se acaba el tiempo se acaba la partida
          let perderTiempo = document.getElementById("tiempo");
          let carta = document.getElementById("miCarta");
          carta.setAttribute("cara",1);
         let parar = setTimeout(() => {
          perderTiempo.style.display="block";
           clearTimeout(parar)
         }, 1500 );
        } else {
          sec = 59;
          min--;
        }
      }
      contador.innerHTML = `${min} min ${sec} s`;
    }, 1000);


  });
  
 
  
}
/* mostar y ocultar son para el desplegable de reglas*/
function mostrar() {
  let abajo = document.querySelector("#fabajo");
  let arriba = document.querySelector("#farriba");
  let oculto = document.querySelector(".desplegado");

  abajo.addEventListener("click", () => {
    oculto.style.transition = "1s";
    abajo.style.visibility = "hidden";
    arriba.style.visibility = "visible";
    var incremento = 1;
    var pararcrecer = setInterval(() => {
      if (incremento <= "25") {
        oculto.style.height = `${incremento}rem`;
        incremento += 5;
        console.log(incremento);
      } else {
        clearInterval(pararcrecer);
        setTimeout(() => {
          oculto.style.visibility = "visible";
          
        }, 500);
      }
    }, 16);
    /*animacion de mostrar contenido a 60fps*/
  });
}
/* Oculta el desplegable de reglas*/

function ocultar() {
  let abajo = document.querySelector("#fabajo");
  let arriba = document.querySelector("#farriba");
  let oculto = document.querySelector(".desplegado");

  arriba.addEventListener("click", () => {
    oculto.style.transition = "all 0.5s ease 0s";
    arriba.style.visibility = "hidden";
    abajo.style.visibility = "visible";

    oculto.style.transition = "0.5";
    oculto.style.visibility = "hidden";
    setTimeout(() => {
      oculto.style.height = "0";
    }, 450);
  });
}

/* implementa una animación para que el formulario donde el jugador contesta caiga del cielo cuando se inicia el juego*/
function apareceFormulario(){
    let formulario = document.querySelector(".formulario");
    let incremento = 0;
    let para = setInterval(() => {
      formulario.style.top=`${incremento+=1}%`
      if(incremento == "40"){
         clearInterval(para);
      }
    }, 16);
    
}
function darPista(){
var start = null;
var element = document.querySelector('.tip');

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform = 'translateY(' + Math.min(progress / 10, 100) + 'px)';
  if (progress < 1000) {
    var ani = window.requestAnimationFrame(step);
  }else{
    cancelAnimationFrame(ani);
    element.style.transform = 'translateY(' + Math.min(progress / 10, 0) + 'px)';
  }
  
}
window.requestAnimationFrame(step);
}


function adivinar() {
  var botonResolver = document.getElementById("botonResolver");
  var fallos = 0;
  var pista = document.querySelector(".tip");
  var intentos = document.querySelector("#fallos_cometidos");
 
  botonResolver.addEventListener("click", () => {
    var respuesta = document.getElementById("resp").value;
    
    pista.style.visibility="visible";
    pista.style.transition="0.2s"

    if (correcta - 10 < respuesta && respuesta < correcta) {
      fallos++;
      pista.innerHTML = `No llegas por muy poco</br> estás en la decada correcta`;
      pista.style.backgroundColor = "#F7F130";
      pista.style.boxShadow=`#F7E230 8px 8px`;
      intentos.innerHTML=` ${fallos}`;
      darPista();
      
    } else if (correcta - 100 < respuesta && respuesta < correcta) {
      fallos++;
      pista.innerHTML = `  La fecha es posterior </br> al menos has acertado el siglo`;
      pista.style.backgroundColor = "#FFC300";
      pista.style.boxShadow=`#F78430 8px 8px`;
      intentos.innerHTML=` ${fallos}`;
      darPista();
      
    } else if (respuesta < correcta - 101 && respuesta < correcta) {
      fallos++;
      pista.innerHTML = `La fecha es muy posterior</br> no llegas por bastante`;
      pista.style.backgroundColor = "#C70039";
      pista.style.boxShadow=`purple 8px 8px`;
      intentos.innerHTML=` ${fallos}`;
      darPista();
     
    } else if (respuesta == correcta) {
      let ganar = document.getElementById("ganar");
      let carta = document.getElementById("miCarta");
      pista.innerHTML = `Felicidades has conseguido acertar la fecha`;
      pista.style.backgroundColor = "#55FF33";
      pista.style.boxShadow=`#F78430 8px 8px`;
      carta.setAttribute("cara",1);
     let parar = setTimeout(() => {
      ganar.style.display="block";
       clearTimeout(parar)
     }, 1500 );

    } else if (correcta + 10 > respuesta && respuesta > correcta) {
      fallos++;
      pista.innerHTML = `Te pasas por muy poco</br> estás en la decada correcta`;
      pista.style.backgroundColor = "#F7F130";
      pista.style.boxShadow=`#F7E230 8px 8px`;
      intentos.innerHTML=` ${fallos}`;
      darPista();
    
    } else if (correcta + 100 > respuesta && respuesta > correcta) {
      fallos++;
      pista.innerHTML = `Te has pasado </br> al menos has acertado el siglo`;
      pista.style.backgroundColor = "#FFC300";
      pista.style.boxShadow=`#F78430 8px 8px`;
      intentos.innerHTML=` ${fallos}`;
      darPista();
    }else if(respuesta > correcta - 101 && respuesta > correcta) {
      fallos++;
      pista.innerHTML = `Te has pasado por más de un siglo`;
      pista.style.backgroundColor = "#C70039";
      pista.style.boxShadow=`purple 8px 8px`;
      intentos.innerHTML=` ${fallos}`;
      darPista();
    }
    if (fallos > 5) {
      //En caso de que los fallos lleguen a 5 el mensaje de perder aparece
      let perderFallos = document.getElementById("fallos");
       let carta = document.getElementById("miCarta");
       carta.setAttribute("cara",1);
      let parar = setTimeout(() => {
        perderFallos.style.display="block";
        clearTimeout(parar)
      }, 1500 );
      
    }
  });
}

//// WEB COMPONENTS ///////

//Contenido del web component Cartas se inserta mediante template
var myTemplate = document.createElement("template");
myTemplate.innerHTML = `
<style>
  .carta > div > img{
    width: 15rem;
    height: 20rem;
  }
  .solucion{
    visibility: hidden;
  }
  .carta{
    transform-style: preserve-3d; 
    transition: all 0.5s linear;
  }
  .prueba{
    position: absolute;
    backface-visibility: hidden;
  }
  .solucion{
    transform: rotateY(180deg);
  }
</style>

<div class="carta">
  <div class="prueba">
  <img  src="${ruta}" alt="" >
  </div>
  <div class="solucion">
  <img  src="${sol}" alt="" >
  </div>
</div>
`;
/*Clase Cartas que hereda de HTMLElement, cada web component es una carta */
class Cartas extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.clon = myTemplate.content.cloneNode(true);
  }
  connectedCallback() {
    this.shadowRoot.appendChild(this.clon);
  }

  get cara(){
    return this.getAttribute("cara");
  }
  set cara(newVal){
    return this.setAttribute("cara",newVal)
  }
  static get observedAttributes(){
    return ['cara'];
  }
  attributeChangedCallback(nombre,viejo,nuevo){
     this.girar();
  }
  /*Propiedad que hace que la carta gire mostrando la solución*/
  girar(){
    
    this.shadowRoot.querySelector(".carta").style.transform = `rotateY(`+180+`deg)`;
    this.shadowRoot.querySelector(".prueba").style.visibility = `hidden`;
    this.shadowRoot.querySelector(".solucion").style.visibility = `visible`;
  }
  
}


/* Clase mensaje */
var myTemplateMensajes = document.createElement("template");
myTemplateMensajes.innerHTML=`
<style>
.mensaje{
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.103);
  backdrop-filter: blur(1rem);
  z-index: 2;
}

.mensaje_descripcion{
  position: relative;
  top: 25%;
  left: 30%;
  width: 40vw;
  height: 40vh;
  
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
}
p{
  font-family: 'Fredoka One', cursive;
}
</style>

<div class="mensaje">
  <div class="mensaje_descripcion">
    <p><slot name="miDescripcion">....</slot></p>
    <div><slot name="img"></slot></div>
    <button type="button" id="aceptar"><slot name="bot">Confirmar</slot></button>
  </div>
</div>

`;
class Mensaje extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:"open"});
    this.clon2 = myTemplateMensajes.content.cloneNode(true);
  }
  connectedCallback(){
    this.shadowRoot.appendChild(this.clon2);
    this.desbloquearJuego();
    
    
  }
  desbloquearJuego() {
    const iniciar = this.shadowRoot.getElementById("aceptar")
    const desbloc = this.shadowRoot.querySelector(".mensaje");
    iniciar.addEventListener("click", () => {
      desbloc.style.display = "none";
      if(this.getAttribute("mode")!="0"){
        location.reload();
      }
      
    });
  }
}
customElements.define("texto-mensaje",Mensaje);
customElements.define("carta-historia", Cartas);
