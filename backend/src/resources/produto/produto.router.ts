import {Router} from "express"
import produtoController from "./produto.controller"
import checkAuth from "../../middlewares/checkAdmin";



const router = Router()

router.get("/", produtoController.index);

router.post("/", checkAuth, produtoController.create);

router.get("/:id", produtoController.read);

router.put("/:id",checkAuth, produtoController.update);

router.delete("/:id", checkAuth, produtoController.remove);


export default router;
