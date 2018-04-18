"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas, velocidade) {
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carroA = new Carro('Fusca', 1, 1);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
