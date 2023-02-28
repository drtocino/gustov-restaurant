import { inherits } from "util";
import { Usuario } from "./Usuario";

export class Empleado extends Usuario {
    public nombres : string = "";
    public apellidos : string = "";
    fechaInicio : string = "";
    createdAt : string = "";
    updatedAt : string = "";
    idRol : number = 2;
    cargo : string = "";

    public fechaInicioLocal(){
        console.log(new Date(this.fechaInicio).toLocaleDateString())
        return new Date(this.fechaInicio).toLocaleDateString()
    }

    get tiempoTrabajando(){
        return new Date(this.fechaInicio).toString();
    }
    
    public tiempoTrabajando2(fecha : string){
        const fechaObj = new Date(fecha);
        const anios = new Date(Date.now() - fechaObj.getTime())
        return Math.abs(anios.getUTCFullYear() - 1970);
    }

    public get nombreCompleto() : string{
        return `${this.nombres} ${this.apellidos}`.trim();
    }

}