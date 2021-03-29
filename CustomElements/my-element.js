const template = document.createElement('div');
template.innerHTML = `
    <style>
        .text {
            color: red;
        }

        p {
            color: blue;
        }
    </style>
    <p class="text">Hello world 2!</p>
    <p>Another sample</p>
`;
class myElement extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
    }

    connectedCallback() {
        this.p.textContent = 'Hello world!';
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

customElements.define('my-element', myElement);