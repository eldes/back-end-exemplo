import express from "express"
import Categoria from "../models/categoria"
import repositoryCategorias from "../repositories/categorias"

const routerCategorias = express.Router()

// Endpoint para listar todas categorias
routerCategorias.get('/categorias', (req, res) => {
	const { idPai } = req.query

	const lerCategoriasCallback = (categorias: Categoria[]) => {
		res.json(categorias)
	}

	if (idPai === 'null') {
		repositoryCategorias.lerTodasPrincipais(lerCategoriasCallback)
	} else {
		repositoryCategorias.lerTodas(lerCategoriasCallback)
	}
})

// Endpoint para retornar os dados de uma categoria específica
routerCategorias.get('/categorias/:id', (req, res) => {
	const id: number = Number.parseInt(req.params.id)
	const lerCallback = (categoria: Categoria) => {
		res.json(categoria)
	}

	repositoryCategorias.ler(id, lerCallback)
})

export default routerCategorias