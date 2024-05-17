//Fonctionnement de React
// On crée un fichier, ici "creact.js"

// On crée la fonction Creact, avec dedans notre fonction createElement.
const Creact = {
    createElement: (type, attributes, children) => {
        const element = document.createElement(type)

        for(let key in attributes) {
            element.setAttributes(key, attributes[key])
        }

        for(let child of children) {
            element.append(child)
        } 
        return element
    }
}

const CreactDOM = {
    createRoot: (root) => {
        return {
            render: (creactElemenent) => {
                root.innerHTML = null
                root.appendChild(creactElement)
            }
        }
    }
}
