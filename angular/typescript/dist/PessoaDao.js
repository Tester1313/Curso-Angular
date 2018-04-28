"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('lógica de inserir');
        return false;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return false;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica selecionar');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('lógica selelcionar todos');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
