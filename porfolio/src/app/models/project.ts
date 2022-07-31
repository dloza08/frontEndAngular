export class Project {
    id: number; 
    proy_nombre: string;
    proy_descripcion: string;
    proy_urlimg: string;
    

    constructor(proy_nombre:string, proy_descripcion: string, proy_urlimg: string) {
        this.proy_nombre = proy_nombre;
        this.proy_descripcion = proy_descripcion;
        this.proy_urlimg = proy_urlimg;
        
    }
    
}