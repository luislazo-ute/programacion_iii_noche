import { Vehiculo } from "./05_herencia";

class Camion extends Vehiculo {
    capacidadCarga: number=0;

    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    };

    getCapacidad(): number {
        return this.capacidadCarga;
    }
}

const miCamion = new Camion("Volvo");
miCamion.setCapacidad(1000);
console.log("La capacidad de carga del camión es: " + miCamion.getCapacidad() + " kg");
miCamion.moverse();