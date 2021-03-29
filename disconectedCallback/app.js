class MyCustomElement extends HTMLElement {
    constructor() {
        super();        
        console.log('Hi from Memory'); 
    }

    
    connectedCallback() {
        console.log('Hi from DOM');
    }

    disconnectedCallback(){
        console.log('Bye DOM');
    }
}

customElements.define('my-custom-element', MyCustomElement);
document.querySelector('my-custom-element').remove();