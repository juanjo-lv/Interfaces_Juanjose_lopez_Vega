var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');


function mostrar(){
    uno.style.display="block";
}
function mostrar2(){
    dos.style.display="block";
}
function mostrar3(){
    tres.style.display="block";
}
function mostrar4(){
    cuatro.style.display="block";
}

uno.addEventListener("click",setTimeout(mostrar(),1000));
dos.addEventListener("click",setTimeout(mostrar2(),1000));
tres.addEventListener("click",setTimeout(mostrar3(),1000));
cuatro.addEventListener("click",setTimeout(mostrar4(),1000));

