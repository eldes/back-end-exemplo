import express from 'express'
import cors from 'cors'
import Categoria from './models/categoria'

// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// Endpoint raiz
app.get('/', (req, res) => {
	res.send('Bem-vindo!')
})

// Endpoint para listar todas categorias
app.get('/categorias', (req, res) => {
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

// Cors
app.use(cors({
	origin: ['http://localhost:3000']
}))

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
	res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})