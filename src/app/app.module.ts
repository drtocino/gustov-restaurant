import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { RevisarVacacionesComponent } from './revisar-vacaciones/revisar-vacaciones.component';
import { RecibosVacacionesComponent } from './recibos-vacaciones/recibos-vacaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpleadosComponent,
    CrearEmpleadoComponent,
    VacacionesComponent,
    RevisarVacacionesComponent,
    RecibosVacacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
