class elementDetails extends HTMLElement {
    constructor() {
        super();


        this.temp = document.getElementById("miTemplate").content;
        this.clon = this.temp.cloneNode(true);
        

        this.attachShadow({mode :'open'})
        // se crea automaticamente una variable llamada shadowRoot 

        

        
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.clon);
    }
}
customElements.define("element-details", elementDetails);