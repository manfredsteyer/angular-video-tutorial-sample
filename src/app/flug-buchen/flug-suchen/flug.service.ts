import { Headers, URLSearchParams, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flug } from '../../entities/flug';

@Injectable()
export class FlugService {

    constructor(private http: Http) {
        console.debug('ctor');
    }

    find(von: string, nach: string): Observable<Flug[]> {
        let url = 'http://www.angular.at/api/flug';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('abflugOrt', von);
        search.set('zielOrt', nach);

        return this.http
                    .get(url, { headers, search })
                    .map(response => response.json());
    }


    findById(id: string): Observable<Flug> {
        let url = 'http://www.angular.at/api/flug';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('flugNummer', id);

        return this.http
                    .get(url, { headers, search })
                    .map(response => response.json());
    }


    save(flug: Flug): Observable<Flug> {
        let url = 'http://www.angular.at/api/flug';

        let headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');

        return this.http
                    .post(url, flug, { headers })
                    .map(response => response.json());
    }

}