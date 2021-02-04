var nombre = "NECESITA NOMBRE";
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
<p id="atributos">ATRIBUTOS</p>
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
    this.attachShadow({ mode: "open" });
    this.clon = myTemplate.content.cloneNode(true);
    
    if (n == 2) {
      this.clon.querySelector("summary").innerHTML = `  <span id="nomb">
        <slot name="miNombre">slot</slot>
      </span>
      <span id="desc>
        <slot name="miDescripcion">Un marcador de posición dentro de un componente
        web que los ususarios pueden rellenar con su propio marcado, con el efecto
        de componer diferentes árboles DOM juntos</slot>
      </span>`;

      this.clon.getElementById("nomAt").innerHTML = `name   <ul>
        <li id="descAt">El atributo name del slot</li>
      </ul>`;
    }else if( n ==3){
        this.clon.querySelector("summary").innerHTML = `  <span id="nomb">
        <slot name="miNombre">template</slot>
      </span>
      <span id="desc>
        <slot name="miDescripcion">Un mecanismo para guardar contenido en el lado cliente que no se renderiza
        cuando la página se carga sino que posteriormente se puede instanciar
        en tiempo de ejecución usando JavaScript</slot>
      </span>`;
    }
    
  }
  connectedCallback() {
   
    this.shadowRoot.appendChild(this.clon);
    
  }
}

customElements.define("element-details", elementDetails);
