class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo() {
        return `Hola ${this.nombre} tu rol es ${this.rol}`;
    }
    resumen() {
        return `Usuario: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}, Activo: ${this.activo}`;
    }
    desactivar() {
        this.activo = false;
        return `El usuario ${this.nombre} ha sido desactivado.`;
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "VIP");
        this.membresia = membresia;
    }
    saludo() {
        return `Hola ${this.nombre} tu membresia es ${this.membresia}`;
    }
    beneficios() {
        if (this.membresia === "Gold") {
            return "Membresía Gold: descuentos del 10%, soporte prioritario y acceso a ofertas exclusivas.";
        } else if (this.membresia === "Platinum") {
            return "Membresía Platinum: descuentos del 25%, soporte 24/7, acceso VIP y envíos gratis.";
        } else {
            return "Membresía no reconocida.";
        }
    }
}

module.exports = { Usuario, UsuarioVIP };
