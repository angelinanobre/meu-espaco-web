
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Meu Espaço Web</title></head>
            <body>
                <h1>Bem-vindo ao Meu Espaço Web!</h1>
                <p>Minha primeira aplicação Node.js.</p>
                <a href="/sobre">Sobre</a> |
                <a href="/contato">Contato</a>
            </body>
        </html>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
        <html>
            <head><title>Sobre</title></head>
            <body>
                <h1>Sobre o projeto</h1>
                <p>Esta aplicação foi desenvolvida com Node.js e Express.</p>
                <a href="/">Voltar ao início</a>
            </body>
        </html>
    `);
});

app.get('/contato', (req, res) => {
    res.send(`
        <html>
            <head><title>Contato</title></head>
            <body>
                <h1>Contato</h1>
                <p>Entre em contato pelo exemplo@teste.com.</p>
                <a href="/">Voltar ao início</a>
            </body>
        </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
});
