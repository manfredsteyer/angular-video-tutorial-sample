import { OrtPipe } from './pipes/ort.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OrtPipe
    ],
    providers: [
    ],
    exports: [
        OrtPipe
    ]
})
export class SharedModule {
}