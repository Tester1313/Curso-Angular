import { DaoInterface } from "./DAOInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';

   inserir(object: T): boolean {
        console.log('lógica de inserir');
        return false;
   }

   atualizar(object: T):boolean {
        console.log('lógica update');
        return false;
   }

   remover(id: number): T {
        console.log('lógica delete');
        return Object();
   }

   selecionar(id: number): T {
        console.log('lógica selecionar')
        return Object();
   }

   selecionarTodos(): [T] {
        console.log('lógica selelcionar todos')
        return [Object()];
   }
}