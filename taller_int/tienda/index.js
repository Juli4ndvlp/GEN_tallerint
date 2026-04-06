const { Usuario, UsuarioVIP } = require("./usuarios");
const { Producto, ProductoDigital } = require("./producto");

// Usuarios
const cliente = new Usuario("Ana", "ana@email.com");
const admin = new Usuario("Juli", "juli@email.com", "admin", "Platinum");
const vip = new UsuarioVIP("Carlos", "carlos@email.com");

//productos 
const camisa = new Producto("Camisa", 50000, "Ropa");
const audifonos = new Producto("Audífonos", 120000, "Electrónica");
const cursoJS = new ProductoDigital("Curso de JS", 80000, "anual");
const appDesign = new ProductoDigital("App de Diseño", 150000, "de por vida");

console.log(admin.desactivar());

// des
const precioConDescuento = camisa.aplicarDescuento(20);
console.log(`Camisa con 20% descuento: $${precioConDescuento}`);

//tarjetas
console.log("\n── PRODUCTOS ──");
console.log(camisa.tarjeta());
console.log(audifonos.tarjeta());
console.log(cursoJS.tarjeta());
console.log(appDesign.tarjeta());

//Resumenes
console.log("\n── USUARIOS ──");
console.log(cliente.resumen());
console.log(admin.resumen());
console.log(vip.resumen());

