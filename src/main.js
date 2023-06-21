    // URL de la API de productos
    const apiUrl = 'https://rickandmortyapi.com/api/character/?page=19';

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
        linkElement.href = '#';
        linkElement.textContent = 'ver este episodio';
        cardBodyElement.appendChild(linkElement);

        productList.appendChild(cardElement);
    });
    }

    // Mostrar todos los productos al cargar la página
    mostrarProductosFiltrados();
