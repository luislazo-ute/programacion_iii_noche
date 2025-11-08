var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.cota = '123323322';
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    return Libro;
}());
var libroHistoriaQuito = new Libro("Historia de Quito", "Juan Perez");
console.log('Título del libro:', libroHistoriaQuito.titulo); // Acceso permitido
console.log('Autor del libro:', libroHistoriaQuito.getAutor()); // Acceso permitido mediante método público
console.log('Cota del libro:', libroHistoriaQuito.getCota()); // Acceso permitido mediante método protegido
