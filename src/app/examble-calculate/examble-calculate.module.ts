import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExambleCalculateRoutingModule } from './examble-calculate-routing.module';
import { ExambleCalculateComponent } from './examble-calculate.component';


@NgModule({
  declarations: [
    ExambleCalculateComponent
  ],
  imports: [
    CommonModule,
    ExambleCalculateRoutingModule
  ]
})
export class ExambleCalculateModule { }
