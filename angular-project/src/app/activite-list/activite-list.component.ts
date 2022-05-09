import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../activite.service';

import { Activite } from "../activite";
import { Responsable } from "../activite";
import { Typeresponsable } from "../activite";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})
export class ActiviteListComponent implements OnInit {

  // typeofres!:Observable<Typeresponsable>;
  activites!: Observable<Activite[]>;
  // responsables!:Observable<Responsable>;
  // exercice!:Exercice;

  constructor(private activiteService: ActiviteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.activites = this.activiteService.getActiviteList();
  }

  deleteActivite(id: number) {
    this.activiteService.deleteActivite(id)
      .subscribe(
        (data) => {
          this.reloadData();
        },
        error => console.log(error));
  }

  updateActivite(id: number){
    this.router.navigate(['update-exercice', id]);
  }



}
