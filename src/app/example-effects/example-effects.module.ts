import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleEffectsRoutingModule } from './example-effects-routing.module';
import { ExambleEffectsComponent } from './examble-effects/examble-effects.component';


@NgModule({
  declarations: [
    ExambleEffectsComponent
  ],
  imports: [
    CommonModule,
    ExampleEffectsRoutingModule
  ]
})
export class ExampleEffectsModule { }
