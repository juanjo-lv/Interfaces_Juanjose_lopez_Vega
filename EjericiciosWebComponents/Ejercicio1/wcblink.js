class Wcblink extends HTMLElement {

    constructor() {

        super();

    }
    connectedCallback() {
        this.getAttribute("baseColor");
        this.getAttribute("alternativeColor");
        this.getAttribute("changeInterval");

        this.cambiarColor();
    }

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
        setInterval(() => {
            if (n % 2 == 0) {
                this.style.color = this.getAttribute("alternativeColor");
                n++;

            } else {
                this.style.color = this.getAttribute("baseColor");
                n++;

            }
        }, this.getAttribute("changeInterval"));
    }
}

customElements.define("wc-blink", Wcblink);