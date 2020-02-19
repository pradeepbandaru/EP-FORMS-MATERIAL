import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextboxSampleComponent } from './samples/textbox-sample/textbox-sample.component';

const routes: Routes = [  { path: 'Textbox', component: TextboxSampleComponent, resolve: {} },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
