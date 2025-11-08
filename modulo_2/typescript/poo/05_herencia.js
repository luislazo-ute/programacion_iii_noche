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
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca) {
        this.marca = marca;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("El vehículo de marca " + this.marca + " se está moviendo.");
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var moto = /** @class */ (function (_super) {
    __extends(moto, _super);
    function moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return moto;
}(Vehiculo));
;
var miMoto = new moto("Yamaha");
miMoto.moverse();
