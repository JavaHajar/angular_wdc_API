import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../activite.service';
import { Activite } from "../activite";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Responsable } from "../activite";

@Component({
  selector: 'app-create-activite',
  templateUrl: './create-activite.component.html',
  styleUrls: ['./create-activite.component.css']
})
export class CreateActiviteComponent implements OnInit {

  activite: Activite = new Activite();
  responsables!:Observable<Responsable>;
  submitted = false;

  constructor(private activiteService: ActiviteService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.responsables = this.activiteService.getResponsableList();
    }

  newActivite(): void {
    this.submitted = false;
    this.activite = new Activite();
  }

  saveActivite() {
    this.activiteService
    .createActivite(this.activite).subscribe(data => {
      console.log(data)
      this.activite = new Activite();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveActivite();    
  }

  gotoList() {
    this.router.navigate(['/activites']);
  }
}
