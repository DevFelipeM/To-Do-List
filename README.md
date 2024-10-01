# To-Do-List
Projeto Full Stack com React e Laravel
Este é um projeto full stack utilizando React no frontend e Laravel no backend. O objetivo é criar um sistema de autenticação com funcionalidades de signup e login.

Requisitos
Node.js
Composer
PHP 8.2+
Laravel 11.x
Configuração do Backend (Laravel)
Clone o repositório: git clone https://github.com/seu-usuario/seu-repositorio.git cd seu-repositorio/backend

Instale as dependências do Laravel: composer install

Configure o arquivo .env: cp .env.example .env Edite o arquivo .env e configure as variáveis de ambiente, especialmente as informações do banco de dados.

Gere a chave da aplicação: php artisan key

Execute as migrações: php artisan migrate

Inicie o servidor Laravel: php artisan serve

Configuração do Frontend (React)
Navegue até o diretório do frontend: cd ../frontend

Instale as dependências do React: npm install

Inicie o servidor de desenvolvimento React: npm start

Uso do Axios
Axios é uma biblioteca de cliente HTTP baseada em Promises para o navegador e Node.js. Ele é utilizado para fazer requisições HTTP, como signup e login.

Instalação do Axios
No terminal, execute: npm install axios

Exemplo de uso do Axios
import axios from 'axios';

const axiosClient = axios.create({ baseURL: 'http://localhost:8000/api', });

export const signup = async (payload) => { try { const response = await axiosClient.post('/signup', payload); return response.data; } catch (error) { console.error('Error during signup:', error); throw error; } };

Uso do ReactDOM
ReactDOM é a entrada principal para renderizar o React no DOM.

Exemplo de uso do ReactDOM
import React from 'react'; import ReactDOM from 'react-dom'; import App from './App'; import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render( <React.StrictMode> <ContextProvider> <App /> </ContextProvider> </React.StrictMode> );

Estrutura do Projeto
A estrutura do projeto é a seguinte:

backend app bootstrap config database public resources routes api.php storage tests .env

frontend public src components contexts ContextProvider.jsx views Signup.jsx App.jsx index.jsx package.json

README.md

Contribuindo
Se você quiser contribuir com este projeto, sinta-se à vontade para fazer um fork e enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License.


