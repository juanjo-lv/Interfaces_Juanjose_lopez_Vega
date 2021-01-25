document.addEventListener("DOMContentLoaded",()=>{
    animacion()
});


function animacion(){
    var e1,e2,e3,e4,elemento;
e1 = document.querySelector(".uno");
e2 = document.querySelector(".dos");
e3 = document.querySelector(".tres");
e4 = document.querySelector(".cuatro");
elemento = document.querySelector(".item");

    document.addEventListener("click",()=>{
       var set1 = setTimeout(() => {
            e1.style.visibility="visible";
        }, 1000);
        var set2 = setTimeout(() => {
            e2.style.visibility="visible";
        }, 2000);
         var set3 = setTimeout(() => {
            e3.style.visibility="visible";
        }, 3000);
        var set4 = setTimeout(() => {
            e4.style.visibility="visible";
        }, 4000);

        document.addEventListener("click",()=>{
            clearInterval(set1);
            clearInterval(set2);
            clearInterval(set3);
            clearInterval(set4);
            e1.style.visibility="hidden";
            e2.style.visibility="hidden";
            e3.style.visibility="hidden";
            e4.style.visibility="hidden";
        })
    });   
    
    
}
