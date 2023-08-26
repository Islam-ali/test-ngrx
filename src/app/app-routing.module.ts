import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calculate', pathMatch: 'full' },
  {
    path: 'calculate',
    loadChildren: ()=> import('./examble-calculate/examble-calculate.module').then(m => m.ExambleCalculateModule)
  },
  {
    path: 'posts',
    loadChildren: ()=> import('./example-effects/example-effects.module').then(m => m.ExampleEffectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
