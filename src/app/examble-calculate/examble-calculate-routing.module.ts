import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExambleCalculateComponent } from './examble-calculate.component';

const routes: Routes = [
  { path: '', component: ExambleCalculateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExambleCalculateRoutingModule { }
