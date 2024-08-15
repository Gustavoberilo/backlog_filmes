import { Sequelize } from "sequelize";

const sequelize = new Sequelize('backlog' , 'root' , '',{
    host: 'localhost' ,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('conectado ao mysql com Sequilize!');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados: ' , err);
    });

export default sequelize;