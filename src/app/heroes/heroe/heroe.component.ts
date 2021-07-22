import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent {

    nombre : string = 'IronMan';
    edad : number = 10;


    get nombreCapitalizado() : string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        if (this.nombre == 'SpiderMan') {
            this.nombre = 'IronMan';
        } else {
            this.nombre = 'SpiderMan';
        }
    }
    cambiarEdad(): void {
        this.edad += 1;
    }
    
}