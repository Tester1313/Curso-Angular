"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('lógica de inserir');
        return false;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return false;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('lógica selelcionar todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
