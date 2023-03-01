import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../models/Empleado';
import { RangoVacaciones } from '../models/RangoVacaciones';
import { VacacionesEmpleado } from '../models/VacacionesEmpleado';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})


export class VacacionesComponent implements OnInit {

  apiGlobal : string = "http://localhost:3000/empleado/";
  rangosApi : string = "http://localhost:3000/rangosVacaciones";
  vacacionApi : string = "http://localhost:3000/vacacion";
  empleado : Empleado = new Empleado();
  anios : number = 0;
  diasVacaciones : number = 0;
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
  rangosVacaciones : RangoVacaciones[] = [];
  hoy : string = new Date().toLocaleDateString();
  vacacionesEmpleado : VacacionesEmpleado = new VacacionesEmpleado();
  @Input() idEmpleado : number = 0;

  
  constructor(private http : HttpClient, private router: Router,private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.getEmpleado();
    this.getRangosVacaciones();
  }

  tiempoTrabajando(fecha : string){
    const fechaObj = new Date(fecha);
    const anios = new Date(Date.now() - fechaObj.getTime())
    return Math.abs(anios.getUTCFullYear() - 1970);
  }

  diasVacacion(anios : number, rangos : RangoVacaciones[]){
    if(anios == 0){
      Swal.fire({
        icon: 'error',
        title: 'Vacaciones',
        text: 'No se cumplió un año de trabajo aún, no se se pueden tomar vacaciones',
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
      return 0;
    }else{
      const rango = rangos.filter((x) => (x.cantidadMinima <= anios && x.cantidadMaxima >= anios))
      this.diasVacaciones = rango.length > 0 ? rango[0].diasVacacion : 0;
      return rango.length > 0 ? rango[0].diasVacacion : 0;
    }
  }
  
  fechaFormatoLegible(fecha : string){
    const fechaObj = new Date(fecha);
    return fechaObj.getDate() + " de " + this.meses[fechaObj.getMonth() + 1] + " del " + fechaObj.getFullYear();
  }

  fechaFormatoLocal(fecha : string){
    return new Date(fecha).toLocaleDateString();
  }

  getEmpleado(){
    this.http.get<Empleado>(this.apiGlobal+this.idEmpleado).subscribe((val) => {
      val ?
      this.empleado = val
      :
      alert("No se pudo consultar");
      this.anios = this.tiempoTrabajando(val.fechaInicio);
    })

  }
  
  getRangosVacaciones(){
    this.http.get<RangoVacaciones[]>(this.rangosApi).subscribe((val) => {
      val ?
      this.rangosVacaciones.push(...val)
      :
      alert("No se pudo consultar");
      this.diasVacacion(this.anios,val)

    })
  }

  registrarVacacion(){
    this.vacacionesEmpleado.idUsuario = this.idEmpleado;
    const diff = this.usuarioService.diferenciaDias(this.vacacionesEmpleado.fechaInicio,this.vacacionesEmpleado.fechaFin);
    console.log(diff)
    if(this.diasVacaciones < diff){
      Swal.fire({
        icon: 'error',
        title: 'Vacaciones',
        text: 'No se puede tomar mas dias de lo establecido intenta de nuevo',
        confirmButtonColor: 'rgb(220 38 38)',
        confirmButtonText: "Salir",
        allowOutsideClick: false,
        background: 'rgb(17 24 39)',
        color: 'white'
      })
    }else{
      this.http.post<VacacionesEmpleado>(this.vacacionApi, this.vacacionesEmpleado).subscribe((val) => {
        val ?
        this.router.navigate(['/recibos/',this.idEmpleado])
        :
        alert("No creado")
      })
    }
  }

}
