import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { CreateExerciceComponent } from './create-exercice/create-exercice.component';
import { UpdateExerciceComponent } from './update-exercice/update-exercice.component';

import { ActiviteListComponent } from './activite-list/activite-list.component';
import { CreateActiviteComponent } from './create-activite/create-activite.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'exercices', component: ExerciceListComponent },
  { path: 'add-exercice', component: CreateExerciceComponent },
  { path: 'update-exercice/:id', component: UpdateExerciceComponent },
  // { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'activites', component: ActiviteListComponent },
  { path: 'add-activite', component: CreateActiviteComponent },
  
  { path: 'login', component: LoginComponent },
  {path: 'logout', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
