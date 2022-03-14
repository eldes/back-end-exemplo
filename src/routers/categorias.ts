import express from "express"
import Categoria from "../models/categoria"
import Produto from "../models/produto"
import repositoryCategorias from "../repositories/categorias"
import repositoryProdutos from "../repositories/produtos"

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

// Endpoint para retornar um array com todos os produtos de uma categoria
routerCategorias.get('/categorias/:id/produtos', (req, res) => {
	const id: number = Number.parseInt(req.params.id)
	
	const lerCallback = (produtos: Produto[]) => {
		res.json(produtos.filter(produto => produto.categoriaId === id))
	}

	repositoryProdutos.lerTodos(lerCallback)
})

export default routerCategorias