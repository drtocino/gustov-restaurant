import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();

  apiGlobal : string = "http://localhost:3000/crearEmpleado";

  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  registrarEmpleado() {
    this.http.post<Empleado>(this.apiGlobal, this.empleado).subscribe((val) => {
      val ?
      this.router.navigate(['/empleados'])
      :
      alert("No creado")
    })
  }
}
