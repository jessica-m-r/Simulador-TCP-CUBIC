class Cubic {
    constructor(tamañoVentana){
        this.tamañoVentana = tamañoVentana;
        this.ventanaAnterior = 0;
        this.tiempo = 0;
        this.k = 0;
        this.c = 0.4;
    }
    reducirVentana(){
        this.ventanaAnterior = this.tamañoVentana;
        this.tamañoVentana = Math.floor(this.tamañoVentana * 0.7);
        this.tiempo = 0;
        this.k = Math.cbrt(this.ventanaAnterior * 0.3 / this.c);
        console.log("Tamaño reducido de la ventana:" + this.tamañoVentana);
    }
    getVentana(){
        return this.tamañoVentana;
    }
    retornarTamañoVentana(){
        this.tiempo++;
        let t = this.tiempo;
        let w = this.c * Math.pow(t - this.k, 3) + this.ventanaAnterior;
        this.tamañoVentana = Math.max(Math.floor(w), this.tamañoVentana);
        console.log("Tamaño actual: "+this.tamañoVentana);
        return this.tamañoVentana;
    }
    recuperado(){
        let res = false;
        if(this.tamañoVentana >= this.ventanaAnterior){
            res = true;
        }
        if(this.ventanaAnterior === 0){
            res = true;
        }
        return res;
    }
}