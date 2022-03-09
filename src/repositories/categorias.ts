import Categoria from "../models/categoria"
import database from "./database"

type categoriasCallback = (categorias: Categoria[]) => void

const repositoryCategorias = {
	lerTodas: (callback: categoriasCallback) => {
		
		const sql = 'SELECT * FROM categorias'

		const allCallback = (err: Error | null, rows: Categoria[]) => {
			callback(rows)
		}

		database.all(sql, allCallback)
	},

	lerTodasPrincipais: (callback: categoriasCallback) => {
		
		const sql = 'SELECT * FROM categorias WHERE idPai IS NULL'

		const allCallback = (err: Error | null, rows: Categoria[]) => {
			callback(rows)
		}

		database.all(sql, allCallback)
	},

	ler: (id: number, callback: (categoria: Categoria) => void) => {

		const sql = `SELECT * FROM categorias WHERE id = ${id}`

		const getCallback = (err: Error | null, categoria: Categoria) => {
			callback(categoria)
		}

		database.get(sql, getCallback)
	},
}

export default repositoryCategorias