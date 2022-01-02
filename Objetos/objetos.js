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
 // Congelar un objeto

 Object.freeze(producto);

 console.log(Object.isFrozen(producto))


const user = {
    nombre: "Enoc",
    apellido: "Pineda"
}
// Se pueder modifcar los valores de las propiedades
Object.seal(user);

user.nombre = "Paloma"

console.log(user);

console.log(Object.isSealed(user));


// unir dos arreglos

const resultado = {...producto, ...user};

console.log(resultado)

// Object constructor
function Auto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const mazda = new Auto('cx5', 399000);
console.log(mazda);

// Retornar key del objeto

keys = Object.keys(mazda);
console.log(keys)

// Retornar los valores
values = Object.values(mazda);
console.log(values);

// Array con par de llave y valor
entradas = Object.entries(mazda);
console.log(entradas);

