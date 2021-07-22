import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `


    <h1> {{ title }}</h1>
    <div>
      <button (click)="numero = numero - 1"> - 1</button>
      <span> {{ numero}} </span>
      <button (click)="numero = numero + 1"> + 1</button>
    
      <button (click)="numero = 0"> Colocar a 0 </button>
    </div>
    <br>
    <!-- usando las clases -->
    <div>
      <h4>Este Con Clase</h4>
      <button (click)="restar()"> - 1</button>
      <span> {{ numero}} </span>
      <button (click)="sumar()"> + 1</button>
    
      <button (click)="numero = 0"> Colocar a 0 </button>
    </div>
    <br>
    <!-- usando las clases -->
    <div>
      <h4>Este aumenta en 2</h4>
      <button (click)="acumular(-base)"> - {{ base }}</button>
      <span> {{ numero}} </span>
      <button (click)="acumular(base)"> + {{ base }}</button>
    
      <button (click)="numero = 0"> Colocar a 0 </button>
    </div>`
})

export class ContadorComponet {
    title: string = 'Contador App';
    numero: number = 0;

    sumar() {
        this.numero += 1;
    }
    restar() {
        this.numero -= 1;
    }

    base: number = 10;
    acumular(valor: number) {
        this.numero += valor;
    }
}