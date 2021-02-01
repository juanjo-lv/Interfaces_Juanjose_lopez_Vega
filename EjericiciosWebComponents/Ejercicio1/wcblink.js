class Wcblink extends HTMLElement {

    constructor() {

        super();

    }
    connectedCallback() {
        this.cambiarColor();
    }

    // getters and setters
    get baseColor() {
        return this.getAttribute("baseColor");
    }
    set baseColor(newVal) {
        this.setAttribute('baseColor', newVal)
    }

    get alternativeColor() {
        return this.getAttribute("alternativeColor");
    }
    set alternativeColor(newVal) {
        this.setAttribute('alternativeColor', newVal)
    }


    get changeInterval() {
        return this.getAttribute("changeInterval");
    }
    set changeInterval(newVal) {
        this.setAttribute('changeInterval', newVal)
    }
  
    cambiarColor() {
        var n =0;

        // Si no se le asigna un valor a la etiqueta toma el segundo valor
        const time = this.changeInterval || 500;
        const alternativo = this.alternativeColor || "transparent";
        const base = this.baseColor || "inherit";

        //la llamada al get sin () sino falla
        setInterval(() => {
            if (n % 2 == 0) {
                this.style.color = alternativo;
                n++;

            } else {
                this.style.color = base;
                n++;

            }
        }, time);
    }
}

customElements.define("wc-blink", Wcblink);