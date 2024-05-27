// Create a class for the element
class TodoElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        const wrapper = document.createElement("div")
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const content = document.createElement("div");
        content.innerText="primul todo"
        wrapper.appendChild(checkbox);
        wrapper.appendChild(content);
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("to-do-element", TodoElement);