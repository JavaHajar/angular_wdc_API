import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Activite } from "../activite";
import { Responsable } from "../activite";
import { Typeresponsable } from "../activite";
import { Observable } from "rxjs";
import { ActiviteService } from '../activite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activites!: Observable<Activite[]>;

  role:any= localStorage.getItem('userRole');
  constructor( private router: Router, private activiteService: ActiviteService,) { }

  ngOnInit(): void {
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
  Logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole')
    this.router.navigate(['/login']);
  }

}
