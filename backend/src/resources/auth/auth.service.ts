import { Usuario } from "../../models/Usuario";
import { LoginDto } from "./auth.types";

import bcrypt from "bcryptjs";



export const checkCredntials = async ({
    email,
    senha
}: LoginDto): Promise< Usuario | null>) =>{
    const Usuario = await Usuario.findOne({ where : {email}});
    if (!usuario) retun null;
    const ok =  await bcrypt.compare(senha, usuario.senha);
    return ok ? usuario: null;
};