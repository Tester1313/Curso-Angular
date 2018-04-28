import { ConcessionarioDao } from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import { PessoaDao } from "./PessoaDao";

let dao: ConcessionarioDao = new ConcessionarioDao();
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('','');

dao2.inserir(pessoa);
