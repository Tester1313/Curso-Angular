import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public teste: String[] = ['teste', 'teste', 'teste2'];
  public instrucao: String = 'Traduza a frase: ';
  public resposta: String = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  //Output Permite que o evento esteja exposto ao componente pai
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {}

  ngOnDestroy() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if(this.resposta == this.rodadaFrase.frasePtBr) {
      this.rodada++;

      this.progresso = this.progresso + (100 / this.frases.length) ;

      if(this.rodada == this.frases.length) {
        this.encerrarJogo.emit('vitoria')
      } 

      this.atualizaRodada();
      
    } else {
      this.tentativas--

      if(this.tentativas <= -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada() {
    //define a frase da rodada com base em alguns lógica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar a resposta
    this.resposta = '';
  }
}
