document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click",animacion);
});


function animacion() {
    var e1, e2, e3, e4, elemento;
    e1 = document.querySelector(".uno");
    e2 = document.querySelector(".dos");
    e3 = document.querySelector(".tres");
    e4 = document.querySelector(".cuatro");
    elemento = document.querySelector(".item");

    
        var set1 = setTimeout(() => {
            e1.style.visibility = "visible";
            clearInterval(set1);
        }, 1000);
        var set2 = setTimeout(() => {
            e2.style.visibility = "visible";
            clearInterval(set2);
        }, 2000);
        var set3 = setTimeout(() => {
            e3.style.visibility = "visible";
            clearInterval(set3);
        }, 3000);
        var set4 = setTimeout(() => {
            e4.style.visibility = "visible";
            clearInterval(set4);
        }, 4000);


        var set5 = setTimeout(() => {
            e1.style.visibility = "hidden";
            e2.style.visibility = "hidden";
            e3.style.visibility = "hidden";
            e4.style.visibility = "hidden";
            clearInterval(set5);
            requestAnimationFrame(animacion)
        }, 5000);
    

}

