import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: String = 'Traduza a frase: ';
  public resposta: String;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void {
    if(this.resposta == this.rodadaFrase.frasePtBr) {
      alert('A traducao esta correta')
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length) ;
      console.log(this.progresso);
      this.rodadaFrase = this.frases[this.rodada];     
      
    } else {
      alert('A traducao esta correta')
    }
    
  }
}
