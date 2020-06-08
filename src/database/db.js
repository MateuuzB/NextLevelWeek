//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()
//iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados para nossas aplicações
/*db.serialize(() => {

    //com comandos sql eu vou:

    //1-criar tabela

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //2-inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

    const values = [
        "https://imagehttps://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80s.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim américa",
        "Número 260",
        "Santa Catarina",
        "Rio do sul",
        "Resíduos eletrônicos, lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    //3-consultar dados da tabela

   db.all(`SELECT * FROM places`, function (err, rows) {
       if (err) {
          return console.log(err)
      }

       console.log("Aqui estão seus registros: ")
      console.log(rows)
   })

    //4-deletar um dado da tabela

    db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
       if (err) {
         return console.log(err)
      }

        console.log("Registro deletado com sucesso!")
    })
})
*/