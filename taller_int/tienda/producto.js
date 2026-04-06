class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    calcularTotal() {
        return this.precio * 1.19;
    }
    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }
    resumen() {
        return `Nombre: ${this.nombre} | Categoría: ${this.categoria} | Precio base: $${this.precio}`;
    }
    tarjeta() {
        return `${this.nombre} (${this.categoria}) — Precio con IVA: $${this.calcularTotal().toFixed(2)}`;
    }

}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }
    calcularTotal() {
        return this.precio;
    }
    tarjeta() {
        return `${this.nombre} (${this.categoria}) — Licencia: ${this.licencia} | Precio: $${this.precio}`;
    }
}

module.exports = { Producto, ProductoDigital };