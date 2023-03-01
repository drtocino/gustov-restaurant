import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../models/Empleado';
import { VacacionesEmpleado } from '../models/VacacionesEmpleado';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-recibos-vacaciones',
  templateUrl: './recibos-vacaciones.component.html',
  styleUrls: ['./recibos-vacaciones.component.css']
})
export class RecibosVacacionesComponent implements OnInit {

  idEmpleado : number = 0;
  empleado : Empleado = new Empleado();
  vacacionesEmpleado : VacacionesEmpleado[] = [];
  apiGlobal : string = "http://localhost:3000/empleado/";
  apiVacaciones : string = "http://localhost:3000/vacaciones/";
  contenido : boolean = false;

  constructor(private http : HttpClient, private route: ActivatedRoute, private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.params['empleadoId']
    this.getEmpleado(this.route.snapshot.params['empleadoId']);
    this.getVacaciones()
  }

  
  fechaFormatoLegible(fecha : string){
    return this.usuarioService.fechaFormatoLegible(fecha);
  }

  diasDiferencia(fecha : string,fecha2: string){
    return this.usuarioService.diferenciaDias(fecha,fecha2);
  }
  
  getEmpleado(id : number){
    this.http.get<Empleado>(this.apiGlobal+id).subscribe((val) => {
      val ?
      this.empleado = val
      :
      alert("Credenciales incorrectos");
    })

  }

  getVacaciones(){
    this.http.get<VacacionesEmpleado[]>(this.apiVacaciones+this.idEmpleado).subscribe((val) => {
      if(val){
        this.contenido = true;
        this.vacacionesEmpleado.push(...val)
      }else{
        this.contenido = false
      }
    })
  }

}
