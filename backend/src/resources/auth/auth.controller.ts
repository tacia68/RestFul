import { Request, Response } from "express";

import { checkCredntials } from "./auth.service";
import { stat } from "fs";

import { createUsuario , buscaUsuarioPorEmail } from "../usuario/usuario.service";



const signup = async (req: Request, res: Response) => {
    const {nome, email, senha} = req.body;
    try {
        const usuario = await buscaUsuarioPorEmail(email);
        if (usuario) 
            return res.status(400).json({ msg: "já existe esse usuario com email informado"});
        const newUsuario = await createUsuario ({ 
            nome, 
            email, 
            senha, 
            tipoUsuarioId: TiposUsuarios.CLIENTE,
        });
        res.status(200).json(newUsuario);
    }catch(e){
        res.status(500).json(e);
    }
};



const login = (req: Request, res: Response) => {
    const {email, senha} = req.body;

    try {
        const usuario = await checkCredentials({email, senha});
        if (!usuario) return res.status(401).json({msg: "A senha ou email está incorreto"});
        req.session.uid = usuario.id;
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;
        
        res.status(200).json({msg: "usuario logado"});
    } catch(e){
        res.status(500).json(e);
    }

};
const logout= (req: Request, res: Response) => {

    if (req.session.uid){
        req.session.destroy((err)=>{
            if (err) return res.status(500).json(err);
            res.status(200).json({msg: "O logout foi feito com sucesso"})
        })
    }else{
        res.status(400).json({msg: "O usuario n]ao está logado"});
    }
};


export default {signup, login, logout}