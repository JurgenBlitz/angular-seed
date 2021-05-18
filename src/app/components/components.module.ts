import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
    declarations: [
        MainHeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        MainHeaderComponent
    ]
})
export class ComponentsModule { }