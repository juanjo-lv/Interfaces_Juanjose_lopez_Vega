document.addEventListener("DOMContentLoaded",()=>{
    console.log("DOM Cargado");
    func();
});
function func(){
    const tiempo = document.querySelector('.num');
    const cont = document.querySelector('.contador');

    const iniciar = document.querySelector('#iniciar');
    const parar = document.querySelector('#parar');

    let SI;

    iniciar.addEventListener('click',()=>{
        let t = tiempo.value;
        if(t>0){
            SI = setInterval(()=>{
                cont.innerHTML=t;                    
                t--;
                
                if(t<0){
                    cont.style.color='red';
                    clearInterval(SI);
                }else{
                    cont.style.color='black';
                }
            },1000);
        }else{
            alert('numero no valido');
        }

    });

    parar.addEventListener('click',()=>{
        clearInterval(SI);
    });
}
