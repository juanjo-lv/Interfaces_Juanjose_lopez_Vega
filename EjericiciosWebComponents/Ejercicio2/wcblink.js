class WcBlinkSpan extends HTMLSpanElement{
    constructor(){
        super()
    }
    connectedCallback() {
        this.style.color = this.getAttribute("baseColor");
        this.cambiaColor();
    }
    cambiaColor(){
        let n = 0;
        const time = this.getAttribute("changeInterval") || 1000;
        const main = this.getAttribute("baseColor") || "inherit";
        const sec = this.getAttribute("alternativeColor") || "transparent";

        
        setInterval(()=>{
            if(n % 2 ==0){
                this.style.color = main;
                n++;
            }else{
                this.style.color = sec;
                n++;
            }

        },time)

    }
}
customElements.define("wc-blink-span", WcBlinkSpan , {extends:'span'});