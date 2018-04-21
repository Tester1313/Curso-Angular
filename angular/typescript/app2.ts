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


class Concessionaria {
    private endereco: string;
    private listaDeCarros: any;
    
    constructor(endereco:string){
        this.endereco = endereco;
    }
    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros;
    }
}
let concessionaria = new Concessionaria('Avenida Paulista');
console.log(concessionaria)