var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.password = "123345";
        this.username = username;
    }
    Usuario.prototype.autenticar = function (password) {
        return password === this.password;
    };
    return Usuario;
}());
var user = new Usuario("llazo");
var autenticacion = user.autenticar("123345");
if (autenticacion) {
    console.log("Usuario autenticado correctamente.");
}
else {
    console.log("Error de autenticación.");
}
