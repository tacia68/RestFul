import { Router } from "express";
import {tipoUsuarioController} from "express";





const router = Router();


router.get("/", tipoUsuarioController.index);

export default router;



