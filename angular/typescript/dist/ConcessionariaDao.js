"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionarioDao = /** @class */ (function () {
    function ConcessionarioDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionarioDao.prototype.inserir = function (object) {
        console.log('lógica de inserir');
        return false;
    };
    ConcessionarioDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return false;
    };
    ConcessionarioDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Concessionaria_1.default('', []);
    };
    ConcessionarioDao.prototype.selecionar = function (id) {
        console.log('lógica selecionar');
        return new Concessionaria_1.default('', []);
    };
    ConcessionarioDao.prototype.selecionarTodos = function () {
        console.log('lógica selelcionar todos');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionarioDao;
}());
exports.ConcessionarioDao = ConcessionarioDao;
