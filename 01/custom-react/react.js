function render(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    for(const prop in element.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me',
};

const root = document.getElementById("root");

render(reactElement, root);