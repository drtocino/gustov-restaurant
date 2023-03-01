import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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

    const alertConf = {
      confirmButtonColor: 'rgb(220 38 38)',
      confirmButtonText: "Salir",
      allowOutsideClick: false,
      background: 'rgb(17 24 39)',
      color: 'white'
    }
    if(this.empleado.nombres.length < 3){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Nombres inválido',
        ...alertConf
      })
      return 0
    }
    
    if(this.empleado.apellidos.length < 3){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Apellidos inválido',
        ...alertConf
      })
      return 0
    }

    if(this.empleado.cargo.length < 3){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Cargo inválido',
        ...alertConf
      })
      return 0
    }
    
    if(this.empleado.fechaInicio.length < 10){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Fecha inicio inválido',
        ...alertConf
      })
      return 0
    }
    
    if(this.empleado.usuario.length < 5){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Usuario inválido',
        ...alertConf
      })
      return 0
    }
    
    if(this.empleado.clave.length < 8){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Clave inválido',
        ...alertConf
      })
      return 0
    }
    this.http.post<Empleado>(this.apiGlobal, this.empleado).subscribe((val) => {
      if(val){
        this.router.navigate(['/empleados'])
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se logro crear el usuario',
          confirmButtonColor: 'rgb(220 38 38)',
          confirmButtonText: "Salir",
          allowOutsideClick: false,
          background: 'rgb(17 24 39)',
          color: 'white'
        }).then((res) => {
          if(res.isConfirmed){
            this.router.navigate(['/empleados'])
          }
        })
      }
    })
    return 0
  }
}
