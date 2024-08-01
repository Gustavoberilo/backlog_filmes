import filmeModel from "../models/filmesModel.js";

export default class Filmes {
    async BuscarTodosOsFilmes(req , res){
        try {
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }
}