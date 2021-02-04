var menor ="&lt;"
var mayor = "&gt;";

var nombre = `${menor} NECESITA NOMBRE ${mayor}`;
var desc = "NECESITA DESCRIPCION";
var att = "Ninguno";
var attdesc = "";

var myTemplate = document.createElement("template");
myTemplate.innerHTML = `
<style>
summary{
    width:50%;
}
span{
    margin-right :1rem;
}
#nomb{
    color: royalblue;
    font-weight: bold;
  }
 li{
     list-style-type : none;
 } 
 #atributos{
     background-color : royalblue;
     color: white;
     display:inline-block;
     padding : .3rem;
     border-radius : .5rem
 }
</style>
<details>
<summary    >
  <span id="nomb">
    <slot name="miNombre">${nombre}</slot>
  </span>
  <span id="desc>
    <slot name="miDescripcion">${desc}</slot>
  </span>
</summary>
<p id="atributos">Atributos</p>
<ul>
<li id="nomAt">
  ${att}
  <ul>
    <li id="descAt">${attdesc}</li>
  </ul>
</li>
</ul>
</details>  
`;

var n = 0;
class elementDetails extends HTMLElement {
  constructor() {
    super();
    console.log(n++);
    this.tipo = null;
    this.attachShadow({ mode: "open" });
    this.clon = myTemplate.content.cloneNode(true);
    

    
  }
  connectedCallback() {
    this.tipo = this.getAttribute("tipo")
    this.shadowRoot.appendChild(this.clon);
    console.log(this.tipo)

    if (this.tipo == "1") {
        this.shadowRoot.querySelector("summary").innerHTML = `  <span id="nomb">
          <slot name="miNombre">${menor} slot ${mayor}</slot>
        </span>
        <span id="desc>
          <slot name="miDescripcion">Un marcador de posición dentro de un componente
          web que los ususarios pueden rellenar con su propio marcado, con el efecto
          de componer diferentes árboles DOM juntos</slot>
        </span>`;
  
        this.shadowRoot.getElementById("nomAt").innerHTML = `name   <ul>
          <li id="descAt">El atributo name del slot</li>
        </ul>`;
      }else if( this.tipo == "2"){
          this.shadowRoot.querySelector("summary").innerHTML = `  <span id="nomb">
          <slot name="miNombre">${menor} template ${mayor}</slot>
        </span>
        <span id="desc>
          <slot name="miDescripcion">Un mecanismo para guardar contenido en el lado cliente que no se renderiza
          cuando la página se carga sino que posteriormente se puede instanciar
          en tiempo de ejecución usando JavaScript</slot>
        </span>`;
      }
      this.insertadjacentHTML('afterend','hr')
  }
}

customElements.define("element-details", elementDetails);
