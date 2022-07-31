export class Education {
    id: number;
    ed_titulo: string;
    ed_descripcion: string;
    ed_institucion: string;
    ed_urllogo: string;
    ed_tipo: string;  


    constructor(ed_titulo:string, ed_descripcion: string, ed_institucion: string,ed_urllogo: string,ed_tipo: string) {
        this.ed_titulo = ed_titulo;
        this.ed_descripcion = ed_descripcion;
        this.ed_institucion = ed_institucion;
        this.ed_urllogo = ed_urllogo;
    }

}
