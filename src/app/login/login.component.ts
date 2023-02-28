import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiGlobal : string = "http://localhost:3000/login";
  data: any;
  usuario : Usuario = new Usuario();

  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.getEmpleados().subscribe((val) => {
    //   this.data = val;
    // });
  }

  sendCredenciales(){
    return this.http.post<Empleado>(this.apiGlobal, this.usuario).subscribe((val) => {
      val ?
      this.router.navigate(['/empleados'])
      :
      alert("Credenciales incorrectos")
    })
  }

}
