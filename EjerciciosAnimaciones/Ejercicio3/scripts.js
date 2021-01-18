document.addEventListener("DOMContentLoaded",()=>{
    console.log("pagina cargada");
    todo();
})
function todo(){
    let elemento = document.querySelector(".item");
    let ver = document.querySelector("#fadein");
    let ocultar =document.querySelector("#fadeout");

    ver.addEventListener('click',()=>{
        fadeIn(elemento,1000,()=> alert("fade in terminado"));
    });
    ocultar.addEventListener('click',()=>{
        fadeOut(elemento,1000,()=> alert("fade out terminado"));
    })
}
function fadeIn(elemento, tiempo,callback){
    elemento.style.transition = `${tiempo/1000}s`;
    elemento.style.opacity = 1;

    setTimeout(callback,1000);
}
function fadeOut(elemento,tiempo,callback){
    elemento.style.transition = `${tiempo/1000}s`;
    elemento.style.opacity = 0 ;   

    setTimeout(callback,1000);
}