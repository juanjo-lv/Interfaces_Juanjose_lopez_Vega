document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");
//   tiempo();
  mostrar();
  //ocultar();
});

function tiempo() {
  var elemento = document.getElementById("tiempo");
  var contador = document.getElementById("contador")
  
  var hora = 0;
  var min = 0;
  var sec = 0;
  
elemento.addEventListener("click",()=>{
     let temp = setInterval(() => {
         sec++;
         if(sec==59){
             sec=0;
             min++;
             if(min==59){
                sec =0;
                min = 0
                hora++;
            } 
         }
         contador.innerHTML=`${hora}h ${min}min ${sec}s`
     }, 1000);
});  
}
function mostrar() {
    let barra = document.querySelector(".reglas");
    let oculto = document.querySelector(".desplegado")

    barra.addEventListener("click",()=>{
        oculto.style.transition = "1s";
        oculto.style.height ="20rem" ;

        var despe = setTimeout(() => {
          oculto.style.opacity = "1";
          clearTimeout(despe);
        }, 500);

    })
    
}
function ocultar() {
  let barra = document.querySelector(".reglas");
  let oculto = document.querySelector(".desplegado")
    
      barra.addEventListener("click",()=>{
        oculto.style.opacity = "0";
        setTimeout(() => {
          oculto.style.height ="0px" ;
        }, 2000);
       
        
        
                
    })
}


