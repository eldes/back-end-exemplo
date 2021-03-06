import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_CATEGORIAS_CREATE = `
    CREATE TABLE categorias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        idPai INTEGER DEFAULT NULL,
        FOREIGN KEY(idPai) REFERENCES categorias(id)
    )`

const SQL_PRODUTOS_CREATE = `
    CREATE TABLE produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        preco REAL,
        categoriaId INTEGER NOT NULL,
        FOREIGN KEY(categoriaId) REFERENCES categoria(id)
    )`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_CATEGORIAS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela categorias criada com sucesso.')
            }
        })
        database.run(SQL_PRODUTOS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela produtos criada com sucesso.')
            }
        })

    }
})

export default database