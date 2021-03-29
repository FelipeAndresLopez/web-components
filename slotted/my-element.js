class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>
                    <slot name="title">

                    </slot>
                </h1>
                <p>
                    <slot name="paragraph">

                    </slot>
                </p>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `
            <style>
                ::slotted(span){
                    font-size: 30px;
                    color: red;
                }

                ::slotted(.blue){
                    color: blue;
                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define("my-element", myElement);