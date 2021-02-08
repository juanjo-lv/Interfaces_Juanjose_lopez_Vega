document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado");

});


var myTemplate = document.createElement('template');
myTemplate.innerHTML = `
<style>
#contenedor{
    margin-top: 1rem;
    border: 1px solid black;
    width: 50vw;
    height: 10vh;
}
#barra{
    width: 0%;
    height: 100%;
    background-color: red;
   
    display: flex;
    justify-content: flex-start;
    align-items: center;    
}
</style>
    <button id="aceptar">Aceptar</button>
    <button id="parar">Parar</button>
    <div id="contenedor">
        <div id="barra"></div>
    </div>
`
class progressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.clon = myTemplate.content.cloneNode(true);
    }
    connectedCallback() {

        if (this.revisar() == false) {
            alert("datos incorrectos revisa el html")
        } else {
            this.shadowRoot.appendChild(this.clon);
        }

        this.app();


    }
    revisar() {
        const time = this.segundos || 0;
        if (time == 0 || time < 0) {
            return false;
        }
    }
    app() {
        var inter;
        const time = this.segundos || 0;
        const botonCrecer = this.shadowRoot.getElementById("aceptar");
        const barra = this.shadowRoot.getElementById("barra");
        var progreso = 0;
        botonCrecer.addEventListener("click", () => {
            inter = setInterval(() => {

                if (barra.style.width == `100%`) {
                    clearInterval(inter);
                } else {
                    barra.style.width = `${progreso}%`;

                    if (progreso < 100) {
                        progreso++;
                        console.log(progreso)
                    }

                }
                barra.innerHTML = `<span>${progreso}%</span>`;
            }, time / 100);
        });

        const botonParar = this.shadowRoot.getElementById("parar");
        botonParar.addEventListener("click", () => {
            clearInterval(inter);
        })

    }

    get segundos() {
        return this.getAttribute("seconds")
    }
}
customElements.define("progress-bar", progressBar);

