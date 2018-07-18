import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  coracaoVazio: string = '/assets/coracao_vazio.png';
  coracaoCheio: string = '/assets/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
