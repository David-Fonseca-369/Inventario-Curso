export interface usuarioDTO{
    idUsuario : number;
    idRol : number;
    nombreRol : string;
    correo : string;
    estado : boolean;
}
export interface usuarioEditarDTO{
    idUsuario : number;
    idRol : number;
    correo : string;
}


export interface usuarioCreacionDTO{
    idRol: number;
    correo  : string;    
}


