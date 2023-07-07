import { Usuario } from "../../models/Usuario";





















expport const createUsuario = async (
    usuario: CreateUsuarioDto,
): Promise<UsuarioDto> => {

});




export const buscaUsuarioPorEmail = async(email: string, ): Promise<UsuarioDto | null> =>{
    return await Usuario.findOne({
        attributes: [
            "id", 
            "tipoUsuarioId",

        ],
    })
}
    
}