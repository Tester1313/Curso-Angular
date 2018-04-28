import { DaoInterface } from "./DAOInterface";
import Concessionaria from "./Concessionaria";

export class ConcessionarioDao implements DaoInterface { 

    nomeTabela: string = 'tb_concessionaria';

   inserir(object: Concessionaria): boolean {
        console.log('lógica de inserir');
        return false;
   }

   atualizar(object: Concessionaria):boolean {
        console.log('lógica update');
        return false;
   }

   remover(id: number): Concessionaria {
        console.log('lógica delete');
        return new Concessionaria('',[]);
   }

   selecionar(id: number): Concessionaria {
        console.log('lógica selecionar')
        return new Concessionaria('',[]);
   }

   selecionarTodos(): [Concessionaria] {
        console.log('lógica selelcionar todos')
        return [new Concessionaria('',[])];
   }
}