export class Vehiculo {
    public marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    moverse(): void {
        console.log("El vehículo de marca " + this.marca + " se está moviendo.");
    }
}

class moto extends Vehiculo {};
const miMoto = new moto("Yamaha");
miMoto.moverse();
