import { Component } from '@angular/core';

@Component({
    selector: '.app-topo',
    templateUrl: './topo.component.html',
    // No caso do template pode-se utilizar '' ou "" ou `` onde o ultimo permite a quebra de linha
    //template: '<p>Esse é o componente topo</p>'
    //styles: [' .exemplo { color: red }']
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';
}
