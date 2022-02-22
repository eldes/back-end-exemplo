import express from "express"
import Categoria from "../models/categoria"
import repositoryCategorias from "../repositories/categorias"

const routerCategorias = express.Router()

// Endpoint para listar todas categorias
routerCategorias.get('/categorias', (req, res) => {
	const lerTodasCallback = (categorias: Categoria[]) => {
		res.json(categorias)
	}

	repositoryCategorias.lerTodas(lerTodasCallback)
})

// Endpoint para retornar os dados de uma categoria específica
routerCategorias.get('/categorias/:id', (req, res) => {
	const id: number = Number.parseInt(req.params.id)
	const categoria: Categoria = repositoryCategorias.ler(id)

	res.json(categoria)
})

export default routerCategorias