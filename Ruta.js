export default class Ruta{
    constructor(){
        this._primeraBase = null;
    }
    get primeraBase(){
        return this._primeraBase;
      }
  
      _encontrarBase(nombre){
          let result = -1;
          let index=1;
          let base = this._primeraBase;
          do{
            if(base.nombre === nombre){
              result=index;
            }
            index++;
            base=base.siguiente;
          }while(base.siguiente!==this._primeraBase)
          return result;
        }
        agregarBase(base, posicion) {
            console.log(this);
            
            if(this._primeraBase===null){
              this._primeraBase=base;
              this._primeraBase.siguiente = this._primeraBase;
            }else{
              if(this._encontrarBase(base.nombre) >= 0){
                console.log(this._encontrarBase(base.nombre));
                
                return false;
              }else{
                if(posicion>1){
                  let asignar = this._primeraBase;
                  for(let i =1; i<posicion-1;i++){
                    asignar=asignar.siguiente;
                  }
                  base.siguiente=asignar.siguiente;
                  asignar.siguiente=base;
                }else if(posicion==1){
                  base.siguiente=this._primeraBase;
                  this._primeraBase=base;
                  this._primeraBase.siguiente.siguiente=this._primeraBase;
                }else{
                  this._agregarnuevo(base, this._primeraBase);
                }
              }
            }
            return true;  
                  
        }
        _agregarnuevo(nuevo, ultimo){
            if(ultimo.siguiente===this._primeraBase){
              ultimo.siguiente=nuevo;
              nuevo.siguiente=this._primeraBase;
              nuevo.anterior = ultimo;
            }else{
              this._agregarnuevo(nuevo, ultimo.siguiente)
            }
          }
          _borrarArticulo(row, base){
            let buscador = this._primeraBase;
            if(base.nombre===buscador.nombre){
                if(this._primeraBase.siguiente === this._primeraBase){
                    this._primeraBase = null;
                }else{
                    this._primeraBase=this._primeraBase.siguiente;
                    this._primeraBase.siguiente=this._primeraBase;
                    this._primeraBase.anterior=null;
                }
            }else{
            do{
              if(buscador.siguiente.nombre===base.nombre){
                
                buscador.siguiente=buscador.siguiente.siguiente;
                if(buscador.siguiente !== this._primeraBase)
                  buscador.siguiente.anterior=buscador;
              }
              buscador = buscador.siguiente;
            }while(buscador !== this._primeraBase)
          }
            row.remove();
        }
        CrearRecorrido(baseInicial, Inicio, Finalizar, Recorrido){

            let base = this._primeraBase;
            while(base.nombre !== baseInicial){
                base = base.siguiente;
            }
            while(Inicio<=Finalizar){
                let s = Inicio;
                let ms = s % 1000;
                s = (s - ms) / 1000;
                let secs = s % 60;
                s = (s - secs) / 60;
                let mins = s % 60;
                let hrs = (s - mins) / 60;
                Recorrido.innerHTML += 'llegar a la base '+ base.nombre + hrs + ':' + mins + ':' + secs + '<br>';
                base = base.siguiente;
                Inicio += (base.minutos * 60000);
            }
        }

}