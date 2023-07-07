import { Request, Response, NextFunction } from 'express';
import { TiposUsuarios } from '../resources/tipoUsuario/tipoUsuario.constants';


const checkAuthAdmin = (req: Request, res: Response, next: NextFunction) => {
 // if (req.cookies['logado']) next();
  //else res.redirect('/login');

  if (req.session.tipoUsuarioId === TiposUsuarios.ADMIN) next();
  else res.status(400).json({msg: "Voce não tem permissão de fazer isso})
};

export default checkAuthAdmin;
