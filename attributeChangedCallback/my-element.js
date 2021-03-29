class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});        
    }

    static get observedAttributes(){
        return ['title', 'paragraph', 'img'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr === 'title') {
            this.title = newValue;
        }

        if(attr === 'paragraph') {
            this.paragraph = newValue;
        }

        if(attr === 'img') {
            this.img = newValue;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2 class="title">
                    ${this.title}
                </h2>
                <p>
                    ${this.paragraph}
                </p>
                <div>
                    <img src="${this.img}" />
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `
            <style>
                .title {
                    color: red;
                }
            </style>
        `;    
    }

    render () {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);