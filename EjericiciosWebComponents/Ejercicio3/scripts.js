class elementDetails extends HTMLElement {
    constructor() {
        super();

        // this.template = document.querySelector("miTemplate");
        // this.clone = this.template.cloneNode(true);
        // this.appendChild(this.clone);
        this.temp = document.getElementsByTagName("template")[0];
        this.clon = this.temp.content.cloneNode(true);
        
    }
    connectedCallback(){
        this.appendChild(this.clon);
    }
    
}
customElements.define("element-details", elementDetails);