abstract class Animal {
    abstract emitirSonido(): void;

    dormir(): void {
        console.log("ZZZzzzzz.....");
    }
}

class Perro extends Animal {
    emitirSonido(): void {
        console.log("Guau Guau");
    }
}

const dog = new Perro();
dog.emitirSonido();
dog.dormir();  