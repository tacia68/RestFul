import {Request, Response} from "express"
import { Produto } from "../../models/Produto";

//import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';


import { getAllProdutos, createProduto, getProduto, updateProduto } from "./produto.services"





const index= async(req: Request, res: Response) =>{ 
    try{
        const produto = await getAllProdutos();
        res.status(200).json(produto);
    } catch(e){
        res.status(500).json(e);

    }
    
};
const create= async(req: Request, res: Response) =>{

    const produto = req.body;

    try{
        const newProduto = await createProduto(produto);
        res.status(200).json(newProduto);
    } catch(e){
        res.status(500).json(e);
    }

}
const read= async(req: Request, res: Response) =>{

    const { id} = req.params;

    try{
        const produto = await getProduto(id);
        if (produto === null) return res.status(400).json({msg: "Produto não existe"});
        else res.status(200).json(produto);
    }catch (e){
        res.status(500).json(e); 

    }

}
const update= async(req: Request, res: Response) =>{

    const {id } = req.params;
    const produto = req.body 

    try{
        const result = await updateProduto(id, produto);
        if (result === null) return res.status(400).json({msg: "Produto não existe"});
        else res.status(200).json( {msg: "Produto atualizado"});
    } catch (e){
        res.status(500).json(e);
    }




}
const remove= async(req: Request, res: Response) =>{

}



export default{index, create, read, update, remove}


