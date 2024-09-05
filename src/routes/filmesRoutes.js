import express from "express";
import filmeController from "../controllers/filmesController.js";

const router = express.Router();
const filme = new filmeController()

router.get('/' , (req , res) => {
    try{
        filme.BuscarTodosOsFilmes(req , res);
    }catch(err){
        res.status(500).json({erro: err.message});
    }
});

router.get("/:id" , (req ,res) => {
    try{
        filme.BuscarFilmePorId(req , res);
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }
});

router.post('/', (req , res) => {
    try{
        filme.CadastrarFilme(req,res);
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }

});

router.put('/:id', (req , res)=>{
    try {
        filme.AtualizarFilme(req,res);    
    }catch (err){
        res.status(500).json({erro: err.message});
    }
});
export default router;