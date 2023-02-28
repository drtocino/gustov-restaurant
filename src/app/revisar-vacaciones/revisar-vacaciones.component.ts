import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-revisar-vacaciones',
  templateUrl: './revisar-vacaciones.component.html',
  styleUrls: ['./revisar-vacaciones.component.css']
})
export class RevisarVacacionesComponent implements OnInit {

  empleadoID : number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.empleadoID = this.route.snapshot.params['empleadoId']
  }

}
