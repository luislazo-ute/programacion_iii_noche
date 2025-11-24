interface Credencial {
    id: number;
    usuario: string;
    contrasena: string;
}

const credenciales: Credencial = {
    id: 1,
    usuario: "Juan Pérez",
    contrasena: "123456"
};

function login(credenciales: Credencial): void {
    if (credenciales.usuario === "Juan Pérez" && credenciales.contrasena === "123456") {
        console.log("¡Bienvenido, " + credenciales.usuario + "!");
    } else {
        console.log("Credenciales incorrectas.");
    }
}

login(credenciales);