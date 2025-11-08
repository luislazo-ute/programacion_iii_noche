class Usuario {
    private password: string="123345";
    public username: string;

    constructor(username: string) {
        this.username = username;
    }

    autenticar(password: string): boolean {
        return password === this.password;
    }
}

const user = new Usuario("llazo");
const autenticacion = user.autenticar("123345");
if (autenticacion) {
    console.log("Usuario autenticado correctamente.");
} else {
    console.log("Error de autenticación.");
}
