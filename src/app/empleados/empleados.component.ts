import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  apiGlobal : string = "http://localhost:3000/empleados";
  listaEmpleados : Empleado[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getEmpleados();
    console.log(this.listaEmpleados);
  }

  printNames(){
    this.listaEmpleados.map((emp) => {
      // console.log(emp.nombres)
      // console.log(emp.apellidos)
      // console.log(emp.nombreCompleto)
    })
  }

  tiempoTrabajando(fecha : string){
    const fechaObj = new Date(fecha);
    const anios = new Date(Date.now() - fechaObj.getTime())
    return Math.abs(anios.getUTCFullYear() - 1970);
  }

  getEmpleados(){
    this.http.get<Empleado[]>(this.apiGlobal).subscribe((val) => {
      val ?
      this.listaEmpleados.push(...val)
      :
      alert("Credenciales incorrectos")
    })
  }

}
