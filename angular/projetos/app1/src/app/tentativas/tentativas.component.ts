import { Component, OnInit, Input } from '@angular/core';

import { Coracao } from './../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(false),new Coracao(true),new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnInit() {
    console.log('This.tentativas', this.tentativas)
  }

}