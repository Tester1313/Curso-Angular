import { DaoInterface } from "./DAOInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface<Pessoa> { 

    nomeTabela: string = 'tb_pessoa';

   inserir(object: Pessoa): boolean {
        console.log('lógica de inserir');
        return false;
   }

   atualizar(object: Pessoa):boolean {
        console.log('lógica update');
        return false;
   }

   remover(id: number): Pessoa {
        console.log('lógica delete');
        return new Pessoa('','');
   }

   selecionar(id: number): Pessoa {
        console.log('lógica selecionar')
        return new Pessoa('','');
   }

   selecionarTodos(): [Pessoa] {
        console.log('lógica selelcionar todos')
        return [new Pessoa('','') ];
   }
}