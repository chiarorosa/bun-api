const server = Bun.serve({
	port: 3000,
	fetch(request) {
		return new Response("Bem-vindo ao Docker com Bun 😎")
	},
})

console.log(`Servidor rodando na porta: ${server.port}`)
