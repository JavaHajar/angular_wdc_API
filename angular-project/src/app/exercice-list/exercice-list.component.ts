import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../exercice.service';

import { Exercice } from "../exercice";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css']
})
export class ExerciceListComponent implements OnInit {
  // exercices:any;

  // constructor(private service:ExerciceService) { }

  // ngOnInit() {
  //   this.exercices= this.service.getExercices().subscribe((data)=>this.exercices=data);
  // }


  exercices!: Observable<Exercice[]>;
  exercice!:Exercice;

  constructor(private exerciceService: ExerciceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.exercices = this.exerciceService.getExercicesList();
  }

  deleteExercice(id: number) {
    this.exerciceService.deleteExercice(id)
      .subscribe(
        (data) => {
          this.reloadData();
        },
        error => console.log(error));
  }

  updateExercice(id: number){
    this.router.navigate(['update-exercice', id]);
  }


}
