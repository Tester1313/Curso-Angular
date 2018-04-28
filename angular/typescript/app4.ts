//import { ConcessionarioDao } from "./ConcessionariaDao";
//import { PessoaDao } from "./PessoaDao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import { Dao } from "./Dao";

//let dao: ConcessionarioDao = new ConcessionarioDao();
//let dao2: PessoaDao = new PessoaDao();
let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('','');

// Instancia classe generica
let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4: Dao<Pessoa> = new Dao<Pessoa>();
dao3.inserir(concessionaria);

dao4.remover(5);

