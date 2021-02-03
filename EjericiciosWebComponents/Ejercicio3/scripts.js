class elementDetails extends HTMLElement {
    constructor() {
        super();

        // this.template = document.querySelector("miTemplate");
        // this.clone = this.template.cloneNode(true);
        // this.appendChild(this.clone);
        this.temp = document.getElementById("miTemplate").content;
        this.clon = this.temp.cloneNode(true);
        
        
        
    }
    connectedCallback(){
        this.appendChild(this.clon);
    }
}
customElements.define("element-details", elementDetails);