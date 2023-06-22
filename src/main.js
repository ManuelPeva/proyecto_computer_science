// URL de la API de productos
const apiUrl = 'https://rickandmortyapi.com/api/character/?page=42';

// Obtener referencias a los elementos HTML
const productList = document.getElementById('productList');

// Función para cargar los productos desde la API
async function cargarProductos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results; // Obtener los resultados de la API
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        return [];
    }
}

// Función para mostrar los productos filtrados
async function mostrarProductosFiltrados() {
    // Cargar productos desde la API
    const productos = await cargarProductos();

    // Limpiar lista de productos
    productList.innerHTML = '';

    // Mostrar productos filtrados
    productos.forEach(personaje => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.width = '19rem';
        cardElement.style.marginBottom = '1.25rem';
        cardElement.style.marginLeft = '2.55rem';
     

        // Agregar evento de mouseover para mostrar la sombra al pasar el cursor
        cardElement.addEventListener('mouseover', () => {
            cardElement.style.boxShadow = '10px 5px 5px #88FF4D';

        });

        // Agregar evento de mouseout para quitar la sombra al retirar el cursor
        cardElement.addEventListener('mouseout', () => {
            cardElement.style.boxShadow = '';
        });

        const imageElement = document.createElement('img');
        imageElement.classList.add('card-img-top');
        imageElement.src = personaje.image; // Utilizar la propiedad 'image' del objeto 'personaje'
        imageElement.alt = personaje.name;
        cardElement.appendChild(imageElement);

        const cardBodyElement = document.createElement('div');
        cardBodyElement.classList.add('card-body');
        cardElement.appendChild(cardBodyElement);

        const titleElement = document.createElement('h5');
        titleElement.classList.add('card-title');
        titleElement.textContent = personaje.name;
        cardBodyElement.appendChild(titleElement);
        cardBodyElement.style.textAlign = 'center';

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('card-text');
        descriptionElement.textContent = `Status: ${personaje.status}, Species: ${personaje.species}`; // Agregar más información del personaje si deseas
        cardBodyElement.appendChild(descriptionElement);

        const linkElement = document.createElement('a');
        linkElement.classList.add('btn', 'btn-primary');
        
        linkElement.href = 'https://www.justwatch.com/mx/serie/rick-and-morty';
        linkElement.textContent = 'ver este episodio';
        linkElement.style.backgroundColor = '#3C8F9F'; // Establecer el color de fondo
        linkElement.style.borderColor = '#D0D949'; // Establecer el color de borde

        cardBodyElement.appendChild(linkElement);


        productList.appendChild(cardElement);
    });
}

// Mostrar todos los productos al cargar la página
mostrarProductosFiltrados();
