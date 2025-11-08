class Libro {
    public titulo: string;
    private autor: string;
    protected cota: string = '123323322';

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
    getAutor(): string {
        return this.autor;
    }

    getCota(): string {
        return this.cota;
    }
}

const libroHistoriaQuito = new Libro("Historia de Quito", "Juan Perez");

console.log('Título del libro:', libroHistoriaQuito.titulo); // Acceso permitido
console.log('Autor del libro:', libroHistoriaQuito.getAutor()); // Acceso permitido mediante método público
console.log('Cota del libro:', libroHistoriaQuito.getCota()); // Acceso permitido mediante método protegido