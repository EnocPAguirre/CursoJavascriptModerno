const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 299.5,
    dispobible: true
};

// Agregando nuevas propiedades 
producto.imagen = 'imagen.png';
//Eliminar propiedades de un objeto
delete producto.dispobible;

console.log(producto)

// Destructuracion
const {nombre, precio} = producto;

console.log(nombre)
console.log(precio)

// Crear objeto dentro de objeto
producto.informacion = {
    medidas: {
        peso: "1KG",
        medida: "1m"
    }
}

console.log(producto)

// Descructuracion de un objeto dentro de otro objeto

const { informacion: { medidas}} = producto;

console.log(medidas)

