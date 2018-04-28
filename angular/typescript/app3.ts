import Carro from "./Carro";
import Moto from "./Moto";

let carro = new Carro('velost', 3);
carro.acelerar();

let moto = new Moto();
moto.acelerar();

console.log(moto);
console.log(carro);