import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  meses : any = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
  };
  apiGlobal : string = "http://localhost:3000/";
  empleado : Empleado = new Empleado();

  constructor(private http : HttpClient) { }

  getEmpleado (id : number) :Empleado {
    let empleadoObj = new Empleado();
    this.http.get<Empleado>(this.apiGlobal+"empleado/"+id).subscribe((val) => {
      if(val){
        this.empleado = val
        // console.log(val)
        empleadoObj = val
        return val
      }else{
        return null;
        alert("Credenciales incorrectos");
      }
    })
    console.log(empleadoObj)
    return empleadoObj;
  }

  fechaFormatoLegible(fecha : string){
    const fechaObj = new Date(fecha);
    return fechaObj.getDate() + " de " + this.meses[fechaObj.getMonth() + 1] + " del " + fechaObj.getFullYear();
  }

  diferenciaDias(fechaInicio : string,fechaFin : string){
    const fechaI = new Date(fechaInicio);
    const fechaF = new Date(fechaFin);
    return Math.ceil((fechaF.getTime() - fechaI.getTime())/(1000*3600*24));
  }
}
