import express from 'express'
import cors from 'cors'
import Categoria from './models/categoria'
import routerCategorias from './routers/categorias'
import path from 'path'

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

app.use(express.static(path.join(__dirname, 'public')))

// Cors
app.use(cors({
	origin: ['http://localhost:3000']
}))

// Endpoints para as rotas de categorias
app.use('/', routerCategorias)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
	res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})