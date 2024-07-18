export default class CL_Personal{
    constructor(nombre, tipo_P, monto_Pagado){
        this.nombre = nombre;
        this.tipo_P = tipo_P;
        this.monto_Pagado = monto_Pagado;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set tipo_P(tipo_P){
        this._tipo_P = tipo_P;
    }
    get tipo_P(){
        return this._tipo_P
    }
    set monto_Pagado(monto_Pagado){
        this._monto_Pagado = monto_Pagado;
    }
    get monto_Pagado(){
        return this._monto_Pagado
    }
}