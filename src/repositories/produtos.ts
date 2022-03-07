import Produto from "../models/produto"
import database from "./database"

const repositoryProdutos = {
	lerTodos: (callback: (produtos: Produto[]) => void) => {
		
		const sql = 'SELECT * FROM produtos'

		const allCallback = (err: Error | null, rows: Produto[]) => {
			callback(rows)
		}

		database.all(sql, allCallback)
	},

	ler: (id: number, callback: (produto: Produto) => void) => {

		const sql = `SELECT * FROM produtos WHERE id = ${id}`

		const getCallback = (err: Error | null, categoria: Produto) => {
			callback(categoria)
		}

		database.get(sql, getCallback)
	},
}

export default repositoryProdutos