import { Flug } from './../../entities/flug';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'flug-card',
    templateUrl: './flug-card.component.html'
})
export class FlugCardComponent implements OnInit, OnChanges  {

    @Input() item: Flug;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() {
        console.debug('ctor', this.item);
    }

    ngOnInit() {
        console.debug('init', this.item);
    }

    ngOnChanges(changes) {
        console.debug('changes', this.item);

        if (changes['item']) {
            console.debug('  changes: item');
        }
        if (changes['selected']) {
            console.debug('  changes: selected');
        }
    }

    select() {
        //this.selected = true;
        this.selectedChange.next(true);
    }

    deselect() {
        //this.selected = false;
        this.selectedChange.next(false);
    }
}