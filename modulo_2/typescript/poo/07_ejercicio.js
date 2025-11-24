var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CuentaBase = /** @class */ (function () {
    function CuentaBase() {
        this.saldo = 0;
    }
    CuentaBase.prototype.ModificarSaldo = function (cantidad) {
        this.saldo += cantidad;
    };
    CuentaBase.prototype.ConsultarSaldo = function () {
        return this.saldo;
    };
    return CuentaBase;
}());
var CuentaAhorros = /** @class */ (function (_super) {
    __extends(CuentaAhorros, _super);
    function CuentaAhorros() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaAhorros.prototype.operar = function () {
        console.log("Operación de ahorros realizada.");
    };
    return CuentaAhorros;
}(CuentaBase));
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaCorriente.prototype.operar = function () {
        console.log("Operación corriente realizada.");
    };
    return CuentaCorriente;
}(CuentaBase));
var cuentaluis = new CuentaAhorros();
cuentaluis.ModificarSaldo(500);
console.log("El saldo de la cuenta de ahorros es: " + cuentaluis.ConsultarSaldo());
cuentaluis.operar();
var cuntaluiscorriente = new CuentaCorriente();
cuntaluiscorriente.ModificarSaldo(1000);
console.log("El saldo de la cuenta corriente es: " + cuntaluiscorriente.ConsultarSaldo());
cuntaluiscorriente.operar();
