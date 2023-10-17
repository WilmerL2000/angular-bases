import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter.component';

@NgModule({
    declarations: [
        CounterComponent
    ],
    /* The `exports` property in the `NgModule` decorator is used to specify which components, directives,
    or pipes from the current module should be made available for use in other modules. */
    exports: [
        CounterComponent
    ]
})
export class CounterModule { }