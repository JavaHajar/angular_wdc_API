import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { CreateExerciceComponent } from './create-exercice/create-exercice.component';
import { UpdateExerciceComponent } from './update-exercice/update-exercice.component';
import { FormsModule } from '@angular/forms';
import { CreateActiviteComponent } from './create-activite/create-activite.component';
import { UpdateActiviteComponent } from './update-activite/update-activite.component';
import { ActiviteListComponent } from './activite-list/activite-list.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceListComponent,
    CreateExerciceComponent,
    UpdateExerciceComponent,
    CreateActiviteComponent,
    UpdateActiviteComponent,
    ActiviteListComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
