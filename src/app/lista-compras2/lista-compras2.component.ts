import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras2',
  imports: [FormsModule],
  templateUrl: './lista-compras2.component.html',
  styleUrl: './lista-compras2.component.scss'
})
export class ListaCompras2Component {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemlista = new ItemLista();
    itemlista.nome = this.item;
    itemlista.id = this.lista.length + 1;
    this.lista.push(itemlista);
    //console.log("item recebido: "+this.item);

    this.item = '';
    console.table(this.lista);
  }
}
