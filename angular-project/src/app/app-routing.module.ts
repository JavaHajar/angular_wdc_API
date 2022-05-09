import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { CreateExerciceComponent } from './create-exercice/create-exercice.component';
import { UpdateExerciceComponent } from './update-exercice/update-exercice.component';

import { ActiviteListComponent } from './activite-list/activite-list.component';
import { CreateActiviteComponent } from './create-activite/create-activite.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercice', pathMatch: 'full' },
  { path: 'exercices', component: ExerciceListComponent },
  { path: 'add-exercice', component: CreateExerciceComponent },
  { path: 'update-exercice/:id', component: UpdateExerciceComponent },
  // { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'activites', component: ActiviteListComponent },
  { path: 'add-activite', component: CreateActiviteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
