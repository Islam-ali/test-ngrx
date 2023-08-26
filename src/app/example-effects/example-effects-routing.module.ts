import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExambleEffectsComponent } from './examble-effects/examble-effects.component';

const routes: Routes = [
  { path: '', component: ExambleEffectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleEffectsRoutingModule { }
