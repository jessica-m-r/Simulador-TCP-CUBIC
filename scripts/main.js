class Main {
    constructor(tamVentana) {
        this.paquetes = [];
        this.cubic = new Cubic(tamVentana);
        this.tamañoVentana = tamVentana;  
    }
    enviarPaquetes(cantidadGrupos) {
        console.log("Tamaño de la ventana actualmente:" + this.tamañoVentana);
        for(let i = 0; i < cantidadGrupos; i++){
            console.log("Numero de grupo:" + (i + 1));
            let perdida = Math.floor(Math.random()*10)+1;
            if(!this.cubic.recuperado()){
                if(perdida > 8){
                    console.log("Nueva perdida durante la recuperación");
                    this.verificar(this.perdidaPaquetes());
                }else{
                    this.verificar(this.generarPaquetes());
                    if(this.cubic.recuperado()){ 
                        console.log("Recuperación completa");
                    }else{
                        console.log("Recuperando tamaño");
                    }
                }
            }else{
                if(perdida > 5){
                    console.log("Generando perdida Paquetes");
                    this.verificar(this.perdidaPaquetes());
                }else{
                    this.verificar(this.generarPaquetes());
                }
                this.tamañoVentana = this.cubic.getVentana();
            }
        }
    }
    generarPaquetes(){
        let lista = [];
        for (let i = 0; i < this.tamañoVentana; i++) {
            let paquete = new Paquete(i, true);
            lista.push(paquete);
        }
        return lista;
    }
    perdidaPaquetes(){
        let lista = [];
        for(let i = 0; i < this.tamañoVentana; i++){
            let random = Math.floor(Math.random() * 10) + 1;
            if(random > 8){
                lista.push(new Paquete(i + 1, true));
            }else if(random > 5){
                lista.push(new Paquete(i, false));
            }else{
                lista.push(new Paquete(i, true));
            }
        }
        return lista;
    }
    verificar(lista){
        let enOrden = true;
        for(let i = 0; i < lista.length && enOrden; i++){
            let paquete = lista[i];
            let id = paquete.getId();
            if(id != i || !paquete.getEstado()){
                if(id != i){
                    console.log("id diferente");
                }
                if(!paquete.getEstado()){
                    console.log("Perdida de datos")
                }
                enOrden = false;
            }
        }
        if(enOrden){
            this.paquetes.push(lista);
            console.log("Paquetes enviados correctamente");
            this.tamañoVentana = this.cubic.retornarTamañoVentana();
        }else{
            this.algoritmoCubic();
        }
    }
    algoritmoCubic(){
        console.log("Paquetes perdidos - CUBIC actuando");
        this.cubic.reducirVentana();
        this.tamañoVentana = this.cubic.getVentana();
    }
}
