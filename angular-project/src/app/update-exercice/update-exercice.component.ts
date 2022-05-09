import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceService } from '../exercice.service';

@Component({
  selector: 'app-update-exercice',
  templateUrl: './update-exercice.component.html',
  styleUrls: ['./update-exercice.component.css']
})
export class UpdateExerciceComponent implements OnInit {
  id!: number;
  exercice!: Exercice;

  constructor(private route: ActivatedRoute,private router: Router,
    private exerciceService: ExerciceService) { }

  ngOnInit() {
    this.exercice = new Exercice();
    this.id = this.route.snapshot.params['id'];
    
    this.exerciceService.getExercice(this.id)
      .subscribe(data => {
        console.log(data)
        this.exercice = data;
      }, error => console.log(error));
  }

  updateExercice() {
    this.exerciceService.updateExercice(this.exercice)
      .subscribe(data => {
        console.log(data);
        this.exercice = new Exercice();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateExercice();    
  }

  gotoList() {
    this.router.navigate(['/exercices']);
  }

}
