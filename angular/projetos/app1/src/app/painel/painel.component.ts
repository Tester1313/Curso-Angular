import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public teste: String[] = ['teste', 'teste', 'teste2'];
  public instrucao: String = 'Traduza a frase: ';
  public resposta: String = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {}

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if(this.resposta == this.rodadaFrase.frasePtBr) {
      alert('A traducao esta correta')
      this.rodada++;

      this.progresso = this.progresso + (100 / this.frases.length) ;
      this.atualizaRodada();
      
    } else {
      alert('A traducao esta correta')
    }
  }

  public atualizaRodada() {
    //define a frase da rodada com base em alguns lógica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar a resposta
    this.resposta = '';
  }
}
