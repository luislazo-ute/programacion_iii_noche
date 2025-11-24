"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _05_herencia_1 = require("./05_herencia");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capacidadCarga = 0;
        return _this;
    }
    Camion.prototype.setCapacidad = function (capacidad) {
        this.capacidadCarga = capacidad;
    };
    ;
    Camion.prototype.getCapacidad = function () {
        return this.capacidadCarga;
    };
    return Camion;
}(_05_herencia_1.Vehiculo));
var miCamion = new Camion("Volvo");
miCamion.setCapacidad(1000);
console.log("La capacidad de carga del camión es: " + miCamion.getCapacidad() + " kg");
miCamion.moverse();
