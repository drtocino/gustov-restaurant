import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiGlobal : string = "http://localhost:3000/login";
  data: any;
  usuario : Usuario = new Usuario();
  @Input() logged : boolean = false;
  @Output() getLogged = new EventEmitter<boolean>();

  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  sendCredenciales(){
    return this.http.post<Empleado>(this.apiGlobal, this.usuario).subscribe((val) => {
      if(val){
        this.logged = true
        this.router.navigate(['/empleados'])
        console.log(true)
        this.getLogged.emit(true)
      }else{
        this.logged = false
        this.getLogged.emit(false)

        alert("Credenciales incorrectos")
      }
    })
  }

}
