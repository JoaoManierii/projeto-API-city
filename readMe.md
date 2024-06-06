## API City 

A API city foi criada como recurso para por em prática meus conhecimentos aprendidos na trilha de JavaScript e Node.js. A API deve estar nos padrões REST nas requisições e respostas e deve funcionar sem erros e problemas.

As funcionalidades dessa API incluem cadastrar cidades e clientes, consultar cidade pelo nome, consultar cidade pelo estado, consultar cliente pelo nome, consultar cliente pelo ID, remover cliente e alterar o nome do cliente.

## Como Utilizar o Projeto

### Pré-requisitos

- Node.js instalado na sua máquina.
- NPM (Node Package Manager) instalado na sua máquina.
- MongoDB configurado e em execução.
- Instalar as seguintes bibliotecas:
 - npm install express 
 - npm install axios
 - npm install bodyparser  
 - npm install mongoose


### Instalação

1. Clone o repositório:

   ```sh
   https://github.com/JoaoManierii/projeto-API-city.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd projeto-API-city
   cd API
   ```

3. Instale as dependências do projeto:

   ```sh
   npm install
   ```

### Executando o Projeto

1. Certifique-se de que o MongoDB (ou outro banco de dados que você estiver usando) está em execução.        


2. Inicie o servidor:

   ```node
   node index.js
   ```

3. Acesse a API no navegador via URL:

   ```
   Para utilizar o CRUD da cidade utilize:
   http://localhost:3000/city 
   Para utilizar o CRUD do cliente utilize:
   http://localhost:3000/client 

   ```

OBS: pelo navegador tem uma interface sem estilizacao que te permite interagir com a API

4. Acesse a API via Postman:

   ```
   Para utilizar o CRUD da cidade utilize:
   http://localhost:3000/api/city
   Para utilizar o CRUD do cliente utilize:
   http://localhost:3000/api/client/

   ```

OBS: Coloquei chamadas de rotas diferentes para os 2 pois um renderiza o html e o outro "funciona" somente em ferramentas de teste como o postman

### Estrutura do Projeto

- `Consumo de API/`: Contém os arquivos estáticos (HTML, CSS, JavaScript) servidos pelo servidor.
- `models/`: Contém os modelos Mongoose para clientes e cidades.
- `routes/`: Contém os arquivos de rotas para clientes e cidades.
- `index.js`: Arquivo principal que inicializa o servidor e define as rotas básicas.
- `database.js`: Faz a conexao com o banco de dados.



## EndPoints - CLIENT

### GET /

Esse endpoint é responsável por listar todos os clientes.

#### Parâmetros

Nenhum

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "João",
    "sex": "M",
    "born": "2000-01-01",
    "age": 24,
    "city": "São Paulo"
  },
  {
    "id": 2,
    "name": "Maria",
    "sex": "F",
    "born": "1990-05-15",
    "age": 34,
    "city": "Rio de Janeiro"
  }
]
```

##### Erro interno ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno no servidor"
}
```

### GET /:id

Esse endpoint é responsável por listar um cliente específico com base no ID fornecido.

#### Parâmetros

- id: ID do cliente a ser listado (número)

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
{
  "id": 1,
  "name": "João",
  "sex": "M",
  "born": "2000-01-01",
  "age": 24,
  "city": "São Paulo"
}
```

##### Erro interno ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno no servidor"
}
```

### GET /name/:name

Esse endpoint é responsável por listar um cliente específico com base no nome fornecido.

#### Parâmetros

- name: Nome do cliente a ser listado (string)

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "João",
    "sex": "M",
    "born": "2000-01-01",
    "age": 24,
    "city": "São Paulo"
  }
]
```

##### Erro interno ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno no servidor"
}
```

### POST /

Esse endpoint é responsável por criar um novo cliente.

#### Corpo da requisição

```json
{
  "id": 3,
  "name": "Ana",
  "sex": "F",
  "born": "1985-03-10",
  "age": 39,
  "city": "Curitiba"
}
```

#### Respostas

##### Created - 201

- Exemplo de resposta:

```json
{
  "id": 3,
  "name": "Ana",
  "sex": "F",
  "born": "1985-03-10",
  "age": 39,
  "city": "Curitiba"
}
```

##### Campo vazio ! 400

- Exemplo de resposta:

```json
{
  "error": "Campo vazio"
}
```

##### Erro ao criar cliente ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro ao criar cliente"
}
```

### PUT /:id

Esse endpoint é responsável por atualizar o nome de um cliente com base no ID fornecido.

#### Parâmetros

- id: ID do cliente a ser atualizado (número)

#### Corpo da requisição

```json
{
  "name": "Ana Maria"
}
```

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
{
  "id": 3,
  "name": "Ana Maria",
  "sex": "F",
  "born": "2002-06-10",
  "age": 22,
  "city": "Curitiba"
}
```

##### Campo vazio ! 400

- Exemplo de resposta:

```json
{
  "error": "Campo vazio"
}
```

##### Cliente não encontrado ! 404

- Exemplo de resposta:

```json
{
  "error": "Cliente não encontrado"
}
```

##### Erro ao atualizar cliente ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro ao atualizar cliente"
}
```

### DELETE /:id

Esse endpoint é responsável por remover um cliente com base no ID fornecido.

#### Parâmetros

- id: ID do cliente a ser removido (número)

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
{
  "id": 5,
  "name": "Maria Clara",
  "sex": "F",
  "born": "2014-06-10",
  "age": 10,
  "city": "Curitiba"
}
```

##### Cliente não encontrado ! 404

- Exemplo de resposta:

```json
{
  "error": "Cliente não encontrado"
}
```

##### Erro ao remover cliente ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro ao remover cliente"
}
```

## EndPoints - CITY

### GET /

Esse endpoint é responsável por listar todas as cidades.

#### Parâmetros

Nenhum

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
[
  {
    "name": "São Paulo",
    "state": "SP"
  },
  {
    "name": "Rio de Janeiro",
    "state": "RJ"
  }
]
```

##### Erro interno do servidor ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno do servidor"
}
```

### GET /name/:name

Esse endpoint é responsável por listar cidades com base no nome fornecido.

#### Parâmetros

- name: Nome da cidade a ser listada (string)

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
[
  {
    "name": "São Paulo",
    "state": "SP"
  }
]
```

##### Erro interno do servidor ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno do servidor"
}
```

### GET /state/:state

Esse endpoint é responsável por listar cidades com base no estado fornecido.

#### Parâmetros

- state: Estado da cidade a ser listada (string)

#### Respostas

##### OK ! 200

- Exemplo de resposta:

```json
[
  {
    "name": "São Paulo",
    "state": "SP"
  },
  {
    "name": "Campinas",
    "state": "SP"
  }
]
```

##### Erro interno do servidor ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno do servidor"
}
```

### POST /

Esse endpoint é responsável por criar uma nova cidade.

#### Corpo da requisição

```json
{
  "name": "Curitiba",
  "state": "PR"
}
```

#### Respostas

##### Created - 201

- Exemplo de resposta:

```json
{
  "name": "Curitiba",
  "state": "PR"
}
```

##### Preencha todos os campos ! 400

- Exemplo de resposta:

```json
{
  "error": "Preencha todos os campos"
}
```

##### Erro interno do servidor ! 500

- Exemplo de resposta:

```json
{
  "error": "Erro interno do servidor"
}
```

## EndPoints - index.js

### GET /client

Esse endpoint é responsável por servir o arquivo HTML para clientes.

#### Parâmetros

Nenhum

#### Respostas

##### OK ! 200

- Exemplo de resposta:

Retorna o arquivo `client.html`.

### GET /city

Esse endpoint é responsável por servir o arquivo HTML para cidades.

#### Parâmetros

Nenhum

#### Respostas

##### OK ! 200

- Exemplo de resposta:

Retorna o arquivo `city.html`.

### API Prefixos

#### Prefixo /api/city

Esse prefixo é usado para todas as rotas relacionadas a cidades, definidas no `cityrouter`.

#### Prefixo /api/client

Esse prefixo é usado para todas as rotas relacionadas a clientes, definidas no `clientrouter`.

### Inicialização do Servidor

O servidor é inicializado na porta 3000.

#### Exemplo de Inicialização

```javascript
app.listen(3000, () => {
    console.log("API RODANDO!");
});
```