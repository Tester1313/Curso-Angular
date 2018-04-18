class Carro {
    private modelo: string;
    private numeroDePortas: number = 0;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number, velocidade: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
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

let carroA = new Carro('Fusca',1,1);
console.log(carroA)
carroA.acelerar();console.log(carroA)