abstract class CuentaBase {
    protected saldo: number = 0;
    abstract operar(): void;

    ModificarSaldo(cantidad: number): void {
        this.saldo += cantidad;
    }
    ConsultarSaldo(): number {
        return this.saldo;
    }
}  

class CuentaAhorros extends CuentaBase {
    operar(): void {
        console.log("Operación de ahorros realizada.");
    }
}

class CuentaCorriente extends CuentaBase {
    operar(): void {
        console.log("Operación corriente realizada.");
    }
}

const cuentaluis = new CuentaAhorros();
cuentaluis.ModificarSaldo(500);
console.log("El saldo de la cuenta de ahorros es: " + cuentaluis.ConsultarSaldo());
cuentaluis.operar();

const cuntaluiscorriente = new CuentaCorriente();
cuntaluiscorriente.ModificarSaldo(1000);
console.log("El saldo de la cuenta corriente es: " + cuntaluiscorriente.ConsultarSaldo());
cuntaluiscorriente.operar();