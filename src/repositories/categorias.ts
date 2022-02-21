import Categoria from "../models/categoria"

const repositoryCategorias = {
	lerTodas: () => {
		const categorias: Categoria[] = [
			{
				id: 1,
				nome: 'Bares',
			},
			{
				id: 2,
				nome: 'Restaurantes',
			},
			{
				id: 3,
				nome: 'Pizzarias',
			},
		]

		return categorias
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