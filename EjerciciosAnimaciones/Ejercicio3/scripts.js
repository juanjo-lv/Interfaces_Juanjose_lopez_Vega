document.addEventListener("DOMContentLoaded",()=>{
    console.log("pagina cargada");
    todo();
})
function todo(){
    let elemento = document.querySelector(".item");
    let ver = document.querySelector("#fadein");
    let ocultar =document.querySelector("#fadeout");

    ver.addEventListener('click',()=>{
        fadeIn(elemento,1000);
    });
    ocultar.addEventListener('click',()=>{
        fadeOut(elemento,1000);
    })
}
function fadeIn(elemento, tiempo){
    elemento.style.transition = `${tiempo/1000}s`;
    elemento.style.opacity = 1;
}
function fadeOut(elemento,tiempo){
    elemento.style.transition = `${tiempo/1000}s`;
    elemento.style.opacity = 0 ;   
}