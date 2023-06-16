
// ========================================  Metodo poco practico pues genera un Insert por cada linea del fichero csv, muy tardado 
/* 
import readline from "readline"
import fs from "fs"
import {Sequelize} from "sequelize"

const sequelize = new Sequelize('app','root','root', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

const insertUser = async () => {
    await sequelize.authenticate()

    const file = readline.createInterface(fs.createReadStream('user.csv'))

    file.on("line", async (line) => {
        await sequelize.query({
            query: 'INSERT INTO users (name, email) VALUES (?,?)',
            values: line.split(',')
        })
    })
}
insertUser();
 */
// ======================================== Metodo practico  para generar un solo insert con muchos valores 
import readline from "readline"
import fs from "fs"
import {Sequelize} from "sequelize"

const sequelize = new Sequelize('app','root','root', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

const insertUser = async () => {
    await sequelize.authenticate()

    const file = readline.createInterface(fs.createReadStream('user.csv'))

    const users = []

    file.on("line", async (line) => {
        users.push(line.split(','))
        
    })
}
insertUser();