export default class Main{
    constructor(nombre, minutos){
        this._nombre = nombre;
        this._minutos = minutos;
        this._siguiente = null;
        this._anterior = null;
    }
    get nombre(){
        return this._nombre;
    }
    get minutos(){
        return this._minutos;
    }
    get siguiente(){
        return this._siguiente;
    }
    get anterior(){
        return this._anterior;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set minutos(minutos){
        this._minutos = minutos;
    }
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
    set anterior(anterior){
        this._anterior = anterior;
    }
    toString(){
        return 'La base ' + this._nombre + ' dura ' + this._minutos + ' minutos en llegar de su anterior base';
    }
}