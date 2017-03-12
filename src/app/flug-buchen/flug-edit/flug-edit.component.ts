import { Flug } from './../../entities/flug';
import { FlugService } from './../flug-suchen/flug.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'flug-edit',
    templateUrl: './flug-edit.component.html'
})
export class FlugEditComponent implements OnInit {
    
    id: string;

    flug: Flug;
    message: string;

    constructor(
        private route: ActivatedRoute,
        private flugService: FlugService) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
            
            this
                .flugService
                .findById(this.id)
                .subscribe(
                    (flug: Flug) => {
                        this.flug = flug;
                    },
                    (errReponse) => {
                        console.error('Fehler beim Laden', errReponse);
                    }
                );

        });

    }

    save() {
        this
            .flugService
            .save(this.flug)
            .subscribe(
                (flug) => {
                    console.debug('saved', flug);
                    this.flug = flug;
                    this.message = "Flug wurde erfolgreich gespeichert!";
                },
                (errResponse) => {

                    console.error('Fehler beim Speichern', errResponse);
                    this.message = "Fehler beim Speichern: " + errResponse.text();
                }
            )
    }

}