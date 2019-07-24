import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {path: '', redirectTo: 'pets', pathMatch: 'full'},
  {path: 'pets', component: HomeComponent},
  {path: 'pets/edit/:id', component: EditComponent},
  {path: 'pets/details/:id', component: DetailsComponent},
  {path: 'pets/new', component: NewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

