import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../exercice.service';
import { Exercice } from "../exercice";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exercice',
  templateUrl: './create-exercice.component.html',
  styleUrls: ['./create-exercice.component.css']
})
export class CreateExerciceComponent implements OnInit {

  exercice: Exercice = new Exercice();
  submitted = false;

  constructor(private exerciceService: ExerciceService,
    private router: Router) { }

  ngOnInit() {
  }

  newExercice(): void {
    this.submitted = false;
    this.exercice = new Exercice();
  }

  saveExercice() {
    this.exerciceService
    .createExercice(this.exercice).subscribe(data => {
      console.log(data)
      this.exercice = new Exercice();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveExercice();    
  }

  gotoList() {
    this.router.navigate(['/exercices']);
  }
}
