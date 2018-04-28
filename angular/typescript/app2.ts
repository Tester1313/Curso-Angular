import  Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';
import { qualquerString } from './Veiculo';

// criar carros

let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 3);
let carroC = new Carro('cerato', 2);

// montar lista de carros concessionaria
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

// exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros());

// Comprar o carro
let cliente = new Pessoa('Thiago', 'veloster');

// Funcao map realiza loop em cada uma das posições do array
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {

        //compra o carro
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem());