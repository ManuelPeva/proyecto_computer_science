// Datos de ejemplo
const productos = [
    { nombre: 'Producto 1', categoria: 'Electrónica', precio: 100 },
    { nombre: 'Producto 2', categoria: 'Ropa', precio: 50 },
    { nombre: 'Producto 3', categoria: 'Hogar', precio: 200 },
    // Agrega más productos aquí
  ];
  
  // Obtener referencias a los elementos HTML
  const categorySelect = document.getElementById('category');
  const priceInput = document.getElementById('price');
  const productList = document.getElementById('productList');
  const filterBtn = document.getElementById('filterBtn');
  
  // Función para mostrar los productos filtrados
  function mostrarProductosFiltrados() {
    const categoriaSeleccionada = categorySelect.value;
    const precioSeleccionado = parseFloat(priceInput.value);
  
    // Filtrar productos según las selecciones del usuario
    const productosFiltrados = productos.filter(producto => {
      if (categoriaSeleccionada && producto.categoria !== categoriaSeleccionada) {
        return false;
      }
      if (precioSeleccionado && producto.precio > precioSeleccionado) {
        return false;
      }
      return true;
    });
  
    // Limpiar lista de productos
    productList.innerHTML = '';
  
    // Mostrar productos filtrados
    productosFiltrados.forEach(producto => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerText = `${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: $${producto.precio}`;
      productList.appendChild(productElement);
    });
  }
  
  // Asignar evento click al botón de filtrar
  filterBtn.addEventListener('click', mostrarProductosFiltrados);
  
  // Mostrar todos los productos al cargar la página
  mostrarProductosFiltrados();
  