import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string [] = ['Anderson','Uraraka' ,'IronMan','Superman' ,'Batman','Flash' ];

  heroeBorrado: string = '';
  BorrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
