class Carro {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}


class Concessionaria {
    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
}

class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: any;

    constructor(nome: string, carroPreferido: string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: any): void {
        this.carro = carro;
    } 

    public dizerCarroQueTem(): any {
        return this.carro;
    }
}

// criar carros

let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 3);
let carroC = new Carro('cerato', 2);

// montar lista de carros concessionaria
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

// exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros());