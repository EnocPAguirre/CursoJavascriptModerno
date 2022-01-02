const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 299.5,
    dispobible: true
};

// Agregando nuevas propiedades 

producto.imagen = 'imagen.png';
delete producto.dispobible;

console.log(producto)