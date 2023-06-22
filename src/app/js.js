// Datos de ejemplo de productos
const productos = [
    {
      id: 1,
      categoria: "Electrónica",
      titulo: "Alexa",
      descripcion: "Modelo super moderno ",
      imagen: "https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX425_.jpg"
    },
    {
        id: 2,
        categoria: "Electrónica",
        titulo: "Xiaomi",
        descripcion: "10C NFC 128GB",
        imagen: "https://m.media-amazon.com/images/I/51QnUnRPVEL._AC_SX569_.jpg"
      },
      {
        id: 3,
        categoria: "Ropa",
        titulo: "Camiseta",
        descripcion: "cuello redondo para hombre",
        imagen: "https://m.media-amazon.com/images/I/81rknfd6CZL._AC_SX679_.jpg"
      },
      {
        id: 4,
        categoria: "Ropa",
        titulo: "Cinturon clásico",
        descripcion: "Cinturón para hombre",
        imagen: "https://m.media-amazon.com/images/I/713Og-pjL-L._AC_SX466_.jpg"
      },
      {
        id: 5,
        categoria: "Hogar",
        titulo: "Tramontina",
        descripcion: "Batería de cocina",
        imagen: "https://m.media-amazon.com/images/I/917lrynYhsL._AC_SY355_.jpg"
      },
      {
        id: 6,
        categoria: "Hogar",
        titulo: "Luz de noche",
        descripcion: "Astrnauta mascota",
        imagen: "https://m.media-amazon.com/images/I/41c0EnMcXHL._AC_.jpg"
      }
  ];
  
  // Función para mostrar los productos en las cards
  function mostrarProductos(productos) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
  
    productos.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-4");
      card.style.alignItems = "center";
      card.style.textAlign = "center";
      card.style.marginBottom = "1.25rem";
      card.style.marginLeft = "1.25rem";
      card.style.height = "19rem";
  
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = producto.imagen;
      img.alt = producto.titulo;
      img.style.maxWidth = "28%";
      img.style.objectFit = "cover";
      img.style.marginTop = "12px";
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = producto.titulo;
  
      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = producto.descripcion;
  
      cardBody.appendChild(title);
      cardBody.appendChild(description);
  
      card.appendChild(img);
      card.appendChild(cardBody);
  
      productList.appendChild(card);
    });
  }
  
  // Función para filtrar los productos por categoría
  function filtrarProductos(categoria) {
    const productosFiltrados = categoria
      ? productos.filter(producto => producto.categoria === categoria)
      : productos;
  
    mostrarProductos(productosFiltrados);
  }
  
  // Función para buscar productos por título o descripción
  function buscarProductos(termino) {
    const productosEncontrados = productos.filter(producto =>
      producto.titulo.toLowerCase().includes(termino.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
  
    mostrarProductos(productosEncontrados);
  }
  
  // Función para manejar el evento del botón de filtro
  function handleFilterBtnClick() {
    const categorySelect = document.getElementById("category");
    const searchInput = document.getElementById("search");
  
    const categoriaSeleccionada = categorySelect.value;
    const terminoBusqueda = searchInput.value;
  
    filtrarProductos(categoriaSeleccionada);
    buscarProductos(terminoBusqueda);
  }
  
  // Agregar el evento al botón de filtro
  const filterBtn = document.getElementById("filterBtn");
  filterBtn.addEventListener("click", handleFilterBtnClick);
  
  // Ejecutar la función al cargar la página
  mostrarProductos(productos);
  