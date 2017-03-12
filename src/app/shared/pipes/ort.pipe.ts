import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ort',
    pure: true
})
export class OrtPipe implements PipeTransform {

    transform(value: string, fmt: string) {
        // fmt: short, long
        let short: string;
        let long: string;

        switch(value) {
            case "Graz":
                short = 'GRZ';
                long = 'Flughafen Graz Thalerhof';
            break;

            case "Hamburg":
                short = 'HAM';
                long = 'Airport Hamburg';
            break;

            default:
                short = long = 'ROM';

        }

        if (fmt == 'short') {
            return short;
        }

        return long;

    }

}