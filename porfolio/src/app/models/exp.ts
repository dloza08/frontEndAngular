export class Exp {
    id: number; 
    exp_puesto: string;
    exp_descripcion: string;
    exp_sitio: string;
    exp_urllogo: string;
    //exp_comienzo: Date; //String;
    //exp_final: Date; //String;
   

    constructor(exp_puesto:string, exp_descripcion: string, exp_sitio: string,exp_urllogo: string) {
        this.exp_puesto = exp_puesto;
        this.exp_descripcion = exp_descripcion;
        this.exp_sitio = exp_sitio;
        this.exp_urllogo = exp_urllogo;
    }

}