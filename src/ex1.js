

class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                h1 {
                    color: blue;
                }

            </style>
            <h1>Hello World</h1>
        `;
    }
}
window.customElements.define('hello-world', HelloWorld);
//                            ^^^^^^^^^^^   ^^^^^^^^^^^
//                            命名:烤肉串    類別名稱  
console.log(customElements)
