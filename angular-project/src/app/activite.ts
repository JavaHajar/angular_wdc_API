export class Activite {
    id! : number;
    titre! : string;
    descriptif! : string;
    datedebut !: string;
    datefin !: string;
    status !: boolean;
    responsables!:Responsable;
    
 
}
export class Responsable{
    id!:number;
    nom!:string;
    typeofres!:Typeresponsable
}

export class Typeresponsable{
    typeofres!:string
}