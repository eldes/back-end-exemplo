import express from "express"
import Produto from "../models/produto"
import repositoryProdutos from "../repositories/produtos"

const routerProdutos = express.Router()

// Endpoint para listar todas categorias
routerProdutos.get('/produtos', (req, res) => {
	const lerTodosCallback = (produtos: Produto[]) => {
		res.json(produtos)
	}

	repositoryProdutos.lerTodos(lerTodosCallback)
})

// Endpoint para retornar os dados de uma categoria específica
routerProdutos.get('/produtos/:id', (req, res) => {
	const id: number = Number.parseInt(req.params.id)
	const lerCallback = (categoria: Produto) => {
		res.json(categoria)
	}

	repositoryProdutos.ler(id, lerCallback)
})

export default routerProdutos