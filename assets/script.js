// const list = document.getElementsByClassName("list");
// console.log(list);
// const app = document.getElementById("app");
// console.log(app);


// On fait une fonction avec comme paramètres des points communs à tout cela
// Ce qui revient à chaque fois est le type(div,ul...), attribut(class,Id) et child


function createElement(type,attributes,children) {
    const element = document.createElement(type)
// Avec la boucle for in on parcourt l'objet et on crée pour chaque clé l'élément correspondant
// for in pour avoir la clé
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    // boucle for of pour avoir la valeur
    for (let child of children) {
        element.append(child)
    }

    return element
}

const element = createElement('div', { class: 'shopping' }, [
    createElement('h1', { class: 'shopping-title '}, [ 'Ma liste de courses']),
    createElement('ul', { class: 'shopping-list '}, [ 
        createElement('li', { class: 'shopping-product' }, ['oeufs']),
        createElement('li', { class: 'shopping-product' }, ['poulet']),
        createElement('li', { class: 'shopping-product' }, ['lentille'])
    ])
])

document.getElementById('app').appendChild(element)
// On crée l'élément div HTML
// const element = document.createElement("div");
// // On lui donne la classe shopping
// element.classList.add("box-container");

// // On crée l'élément h1 HTML
// const h1 = document.createElement("h1");
// // On lui donne la classe shopping-title
// h1.classList.add("shopping-title");

// // On écrit le texte du h1
// h1.innerText = "Liste de courses";

// // On assigne h1 en tant qu'enfant à element
// element.appendChild(h1);

// const ul = document.createElement('ul')
// ul.classList.add('shopping-list')

// const li1 = document.createElement('li')
// li1.classList.add('shopping-products')
// li1.innerText = 'Oeufs'

// const li2 = document.createElement('li')
// li2.classList.add('shopping-product')
// li2.innerText = 'Liquide vaisselle'

// ul.appendChild(li1);
// ul.appendChild(li2)

// element.appendChild(h1)
// element.appendChild(ul)
