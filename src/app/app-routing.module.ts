import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordGussComponent } from './components/word-guss/word-guss.component';

const routes: Routes = [
  {path:"",component:WordGussComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
