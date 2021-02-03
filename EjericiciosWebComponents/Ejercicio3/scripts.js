class elementDetails extends HTMLElement {
    constructor() {
        super();
        
        this.temp = document.getElementById("miTemplate").content;
        this.clon = this.temp.cloneNode(true);
        
        
        
    }
    connectedCallback(){
        this.appendChild(this.clon);
    }
}
customElements.define("element-details", elementDetails);