import express from "express"
import Categoria from "../models/categoria"

const routerCategorias = express.Router()

// Endpoint para listar todas categorias
routerCategorias.get('/categorias', (req, res) => {
	const categorias: Categoria[] = [
		{
			id: 1,
			nome: 'Bares',
		},
		{
			id: 2,
			nome: 'Restaurantes',
		},
	]

	res.json(categorias)
})

// Endpoint para retornar os dados de uma categoria específica
routerCategorias.get('/categorias/:id', (req, res) => {
	const categoria: Categoria = {
		id: 1,
		nome: 'Bares',
	}

	res.json(categoria)
})

export default routerCategorias