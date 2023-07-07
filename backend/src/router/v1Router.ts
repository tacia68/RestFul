import { Router } from 'express';
import { TipoUsuario } from '../models/TipoUsuario';

import authRouter from 

//import {tipoUsuario.router}
import pingRouter from '../resources/ping/ping.router';

import produtoRouter from '../resources/produto/produto.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoRouter);
router.use('/tipo-usuario', TipoUsuarioRouter);
router.use("/", authRouter);


export default router;
