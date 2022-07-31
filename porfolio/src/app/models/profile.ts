export class Profile {
    id: number;
    hd_urlbanner: string;
    hd_urlperfil: string;
    hd_nombre: string;
    hd_apellido: string;
    hd_email: string;
    hd_ocupacion: string;
    hd_acerca: string; 
       

    constructor(hd_nombre:string, hd_apellido: string, hd_urlperfil: string, hd_urlbanner: string, hd_email: string, hd_ocupacion: string, hd_acerca: string) {
        this.hd_nombre = hd_nombre;
        this.hd_apellido = hd_apellido;
        this.hd_urlperfil = hd_urlperfil;
        this.hd_urlbanner = hd_urlbanner;
        this.hd_email = hd_email;
        this.hd_ocupacion = hd_ocupacion;
        this.hd_acerca = hd_acerca;
    }

}
