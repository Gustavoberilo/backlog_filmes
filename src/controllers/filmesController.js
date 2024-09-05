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

    async BuscarFilmePorId(req , res){
        try{
            const filmeEncontrado = await filmeModel.findByPk(req.params.id);
            if(!filmeEncontrado){
                //Sem o return corre o risco do servidor mandar as duas respostas e ele cair
                return res.status(404).json({erro: 'Filme não encontrado'});
            }
            return res.json(filmeEncontrado);
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }

    async CadastrarFilme(req , res){
        try {
            const filmeCadastrado = await filmeModel.create(req.body);
            res.json({message: 'Filme cadastrado com sucesso!!' ,filmeCadastrado });
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }
    async AtualizarFilme(req , res){
        try {
            const [atualizado] = await filmeModel.update(req.body,{
                where: {id: req.params.id}
            });
            if(!atualizado){
                return res.status(404).json({erro: 'Nenhum filme atualizado'});
            }
            const filmeAtualizado = await filmeModel.findByPk(req.params.id);
            return res.json({mensagem: "Filme atualizado com sucesso!" , filme: filmeAtualizado})
                
               
            
        } catch (err) {
            res.status(500).json({erro: err.message});
        }
    }
}