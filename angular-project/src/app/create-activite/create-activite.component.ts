import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-activite',
  templateUrl: './create-activite.component.html',
  styleUrls: ['./create-activite.component.css']
})
export class CreateActiviteComponent implements OnInit {

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
