export default class View{
    constructor(tabla, ruta, bases){
        this._tabla = tabla;
        this._ruta = ruta;
        this._bases = bases;

    }

    agregarBase(base, posicion){
        let r = this._ruta.agregarBase(base, posicion);
        console.log(r);
        
        if(r === true){
            
            this._show();
        }
    }

    _añadirBotonBorrar(row, base){
        let btnDelete = document.createElement('input');
        btnDelete.type= 'button';
        btnDelete.value='Borrar';
        btnDelete.className='btn btn-danger';
        btnDelete.addEventListener('click', () => {
            this._ruta._borrarArticulo(row, base);
        });
        row.cells[2].innerHTML="";
        row.cells[2].appendChild(btnDelete);
    }

    _show(){
        this._bases.options.length = 0;
        this._bases.options[this._bases.options.length] = new Option( '--Seleccione una base de inicio--', 'null');
        console.log(this._bases);
        
        this._tabla.innerHTML='';
        let base = this._ruta.primeraBase;
        do{
            let row = this._tabla.insertRow(-1);

            let cellNombre = row.insertCell(0);
            let cellMinutos = row.insertCell(1);
            row.insertCell(2);

            cellNombre.innerHTML = base.nombre;
            cellMinutos.innerHTML = base.minutos;
            this._añadirBotonBorrar(row, base);
            this._bases.options[this._bases.options.length] = new Option(base.nombre, base.nombre);
            base=base.siguiente;
        }while(base !== this._ruta.primeraBase)           
   }

   _MostrarReporte(reporte){
       reporte.innerHTML = "<h3>Reporte</h3>";
       let base = this._ruta.primeraBase;
        do{
            reporte.innerHTML += base.toString()+'<br>';
            base=base.siguiente;
        }while(base!==this._ruta.primeraBase)
   }

   _buscar(buscador) {
       console.log('entra por dos');
       
        this._tabla.innerHTML='';
        let row = this._tabla.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellMinutos = row.insertCell(1);
            row.insertCell(2);
        let base=this._ruta.primeraBase;
        console.log(base);
        
        while((base.siguiente!==this._ruta.primeraBase && base.nombre!==buscador)){
            base=base.siguiente;
        }
        if(base.nombre == buscador){
            cellNombre.innerHTML = base.nombre;
            cellMinutos.innerHTML = base.minutos;
            this._añadirBotonBorrar(row, base);
        }
        else{
            this._show();
        }
    }
    CrearRecorrido(baseInicial, Inicio, Finalizar, Recorrido){
        Recorrido.innerHTML = '<h3>Recorrido</h3>';
        console.log('Entro a view');
        
        this._ruta.CrearRecorrido(baseInicial, Inicio, Finalizar, Recorrido);

    }

}