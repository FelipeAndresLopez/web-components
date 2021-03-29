class MyElement extends HTMLElement {
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
                <div>
                    <p>
                        <slot name="paragraph">

                        </slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles(){
        return `
            <style>
                :host{
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading1: 30px;
                    --heading2: 25px;
                }

                section {
                    background-color: var(--primary-color);
                }

                section div {
                    background-color: var(--secondary-color);
                }

                h1 {
                    font-size: var(--heading1);
                }

                p {
                    font-size: var(--heading2);
                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define('my-element', MyElement);