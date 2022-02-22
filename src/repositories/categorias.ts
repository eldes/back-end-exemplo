import Categoria from "../models/categoria"
import database from "./database"

const repositoryCategorias = {
	lerTodas: (callback: (categorias: Categoria[]) => void) => {
		
		const sql = 'SELECT * FROM categorias'

		const allCallback = (err: Error | null, rows: Categoria[]) => {
			callback(rows)
		}

		database.all(sql, allCallback)
	},

	ler: (id: number) => {
		const categoria: Categoria = {
			id: 1,
			nome: 'Bares',
		}

		return categoria
	},
}

export default repositoryCategorias