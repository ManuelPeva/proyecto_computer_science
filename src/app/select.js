  // URL de la API de productos
const apiUrl = 'https://rickandmortyapi.com/api/character/?page=';

// Obtener referencias a los elementos HTML
const productList = document.getElementById('productList');
const categorySelect = document.getElementById('category');

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

  // Obtener el valor seleccionado del elemento <select> de categoría
  const selectedCategory = categorySelect.value;

  // Filtrar productos por categoría
  const productosFiltrados = productos.filter(personaje => {
    if (selectedCategory === '') {
      return true; // Mostrar todos los productos si no se selecciona ninguna categoría
    } else {
      return personaje.species === selectedCategory; // Filtrar por categoría seleccionada
    }
  });

  // Limpiar lista de productos
  productList.innerHTML = '';

  // Mostrar productos filtrados
  productosFiltrados.forEach(personaje => {
    // Resto del código para crear y mostrar los productos en las cards
    // ...
  });
}

// Agregar evento de cambio al elemento <select> de categoría
categorySelect.addEventListener('change', mostrarProductosFiltrados);

// Mostrar todos los productos al cargar la página
mostrarProductosFiltrados();
