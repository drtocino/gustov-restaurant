import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LoginComponent } from './login/login.component';
import { RecibosVacacionesComponent } from './recibos-vacaciones/recibos-vacaciones.component';
import { RevisarVacacionesComponent } from './revisar-vacaciones/revisar-vacaciones.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';

const routes: Routes = [
  { path: '',component: EmpleadosComponent },
  { path: 'empleados',component: EmpleadosComponent },
  { path: 'empleados/crear',component: CrearEmpleadoComponent },
  { path: 'vacaciones/:empleadoId',component: RevisarVacacionesComponent },
  { path: 'recibos/:empleadoId',component: RecibosVacacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
