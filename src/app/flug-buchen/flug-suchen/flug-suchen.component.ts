import { FlugService } from './flug.service';
import { Flug } from './../../entities/flug';
import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

@Component({
    selector: 'flug-suchen',
    templateUrl: './flug-suchen.component.html'
})
export class FlugSuchenComponent {

    public von: string;
    public nach: string;

    public fluege: Array<Flug> = [];
    public selectedFlug: Flug;

    public basket = {
        "3": true,
        "4": false,
        "5": true
    };

    constructor(private flugService: FlugService) {
        console.debug('ctor');
    }

    search(): void {

        this.flugService
            .find(this.von, this.nach)
            .subscribe(
                (fluege) => {
                    this.fluege = fluege;
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                }
            );

    }

    select(f: Flug): void {
        this.selectedFlug = f;
    }

}