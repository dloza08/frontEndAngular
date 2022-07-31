export class Skill {
    id: number;
    sk_habilidad: string;    
    sk_urllogo: string;

    constructor(sk_habilidad:string, sk_urllogo: string) {
        this.sk_habilidad = sk_habilidad;
        this.sk_urllogo = sk_urllogo;
        
    }
    
}