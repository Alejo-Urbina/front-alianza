import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveClientComponent } from './components/save-client/save-client.component';
import { GetClientComponent } from './components/get-client/get-client.component';

const routes: Routes = [
  { path: 'save-client', component: SaveClientComponent },
  { path: 'get-client', component: GetClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
