document.addEventListener("DOMContentLoaded",()=>{
    console.log("pagina cargada");
    todo();
})
function todo(){
    let elemento = document.querySelector(".item");
    let ver = document.querySelector("#des");
    let ocultar =document.querySelector("#rep");

    ver.addEventListener('click',()=>{
        SlideDown(elemento,1000);
    });
    ocultar.addEventListener('click',()=>{
        SlideUp(elemento,1000);
    })
}
function SlideDown(elemento, tiempo){
    elemento.style.transition = `${tiempo/1000}s`;
    elemento.style.height = '250px';
}
function SlideUp(elemento,tiempo){
    elemento.style.transition = `${tiempo/1000}s`;
    elemento.style.height = '0px';   
}