import { Request, Response } from "express";
import { deflate } from "zlib";
import { listTiposUsuarios } from "./tipoUsuario";


const index =  async (req: Request, res: Response) =>{
    try {
        const tipos = listTiposUsuarios();
        res.status(200).json(tipos);
    } catch (e){

        res.status(500).json(e);
    }
}

export default { index};