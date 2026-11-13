import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloWorldComponent} from './helloworld/helloworld.component';
import {MinhapaginaComponent} from './minhapagina/minhapagina.component';
import {CalculadoraComponent} from './calculadora/calculadora.component'
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ListaCompras2Component } from './lista-compras2/lista-compras2.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhapaginaComponent, CalculadoraComponent, ListaComprasComponent, ListaCompras2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjTest';
}
