class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.title = this.getAttribute('title');
        this.paragraph = this.getAttribute('paragraph');
        this.img = this.getAttribute('img');
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