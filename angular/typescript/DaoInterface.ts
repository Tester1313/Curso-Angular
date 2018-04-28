export interface DaoInterface<T> { // T corresponde ao Type que será recebido
   nomeTabela: string;

   inserir(object: T): boolean;
   atualizar(object: T):boolean;
   remover(id: number): T;
   selecionar(id: number): T;
   selecionarTodos(): [T];
}