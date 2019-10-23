import Base from './Base.js';
import Ruta from './Ruta.js';
import View from './View.js';

class Main{
    constructor(){
        let view = new View(document.querySelector('#body'),  new Ruta(), document.querySelector('#bases'));
        document.querySelector('#agregar').addEventListener('click', () => {

                let nombre = document.querySelector('#nombre').value;
                let minutos = Number(document.querySelector('#minutos').value);
                let posicion =document.querySelector('#posicion').value;
                let base = new Base(nombre, minutos);
                view.agregarBase(base, posicion);
            
        })
        document.querySelector('#Mostrar').addEventListener('click', () => {
            var reporte = document.querySelector('#Reporte');
            view._MostrarReporte(reporte);
            
        })
        document.querySelector('#buscar').addEventListener('click', () => {
            console.log("Si entra");
            
            var buscador = document.getElementById('buscador').value;
            view._buscar(buscador);
        })
        document.querySelector('#Crear').addEventListener('click', () => {
            let Recorrido = document.querySelector('#Recorrido')
            let baseInicial = document.querySelector('#bases').value
            let Inicio = document.querySelector('#HoraInicio').valueAsDate;
            let Finalizar = document.querySelector('#HoraTermino').valueAsDate;
            console.log(Inicio.getTime());
            console.log(baseInicial);
            
            
            view.CrearRecorrido(baseInicial, Inicio.getTime(), Finalizar.getTime(), Recorrido);
            console.log((Inicio.getTime() + Finalizar.getTime()) %1000);
            
            
            
            
        })
    }
    
}
let main = new Main();