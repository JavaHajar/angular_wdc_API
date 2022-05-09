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

@NgModule({
  declarations: [
    AppComponent,
    ExerciceListComponent,
    CreateExerciceComponent,
    UpdateExerciceComponent,
    CreateActiviteComponent,
    UpdateActiviteComponent,
    ActiviteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
