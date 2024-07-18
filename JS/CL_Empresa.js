import CL_Personal from "./CL_Personal.js";
export default class CL_Empresa{
    constructor(){
        this.menor = 99999;
        this.auxNombre = "";
        this.acumMonto = 0;
        this.contMonto = 0;
    }

    procesarPersonal(personal){

        //CLASIFICACION

        if(personal.tipo_P == "administrativo"){
            this.acumMonto = this.acumMonto + personal.monto_Pagado;
            this.contMonto = this.contMonto + 1;
        }

        //NOMBRE DEL PERSONAL QUE GANAS MENOS

        if(personal.monto_Pagado < this.menor){
            this.menor = personal.monto_Pagado;
            this.auxNombre = personal.nombre;
        }
    }

    calcularMontoPA(){
        return this.acumMonto / this.contMonto;
    }
    mostrarNombreMP(){
        return this.auxNombre;
    }
}