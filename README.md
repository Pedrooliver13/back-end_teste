
## Como Iniciar?

<p>Após baixar ou fazer um clone do repositório, escreva o seguinte comando</p>

### Baixar dependencias
<code>
  npm install
</code>
  
### Iniciar o aplicativo
<code>
  npm start
</code>

<br/>

<p>pronto agora ela está rodando na porta http://localhost:3333</p>

## banco de dados

* Tabelas

<br/>

![tables](https://user-images.githubusercontent.com/56042296/101669860-3d3abc00-3a31-11eb-947e-95c7425966a9.png)

#### Como usar o banco de dados ?


<p>para ativar use...</p>

<code>
  npm knex:migrate
</code>

<p>e para caso aconteça algum erro, pode recomeçar tudo usando o código abaixo, ou simplismente deletando o arquivo database.sqlite e rodando o código de cima novamente.</p>

<code>
  npm knex:migrate:rollback
</code>

## Rotas

<blockquote>baseUrl: http://localhost:3333</blockquote>

## Competidores

<p>
  Listar todos os competidores (GET)
  
   <code>
    baseUrl/users
  </code>
</p>

<p>
  Mostra único competidor (GET)
  
   <code>
    baseUrl/users/:id
  </code>

</p>

<p>
  Criar competidor (POST)
  
  <code>
    baseUrl/users
  </code>
</p>

<p>
  Atualizar competidor (PUT)
  
  <code>
    baseUrl/users/edit/:id
  </code>
</p>

<p>
  Deletar competidor (DELETE)
  
  <code>
    baseUrl/users/edit/:id
  </code>
</p>


## Pistas

<p>
  Listar todas as Pistas (GET)
  
   <code>
    baseUrl/pistas
  </code>
</p>

<p>
  Mostra uma única pista (GET)
  
   <code>
    baseUrl/pistas/:id
  </code>

</p>

<p>
  Criar Pista (POST)
  
  <code>
    baseUrl/pistas
  </code>
</p>

<p>
  Criar historico da pista (POST)
  
  <code>
    baseUrl/pistas/:id/historicos
  </code>
</p>

<p>
  Atualizar Pista (PUT)
  
  <code>
    baseUrl/pistas/edit/:id
  </code>
</p>

<p>
  Deletar Pista (DELETE)
  
  <code>
    baseUrl/pitas/edit/:id
  </code>
</p>

## Historicos

<p>
  Listar todos os historicos (GET)
  
   <code>
    baseUrl/historicos
  </code>
</p>

<p>
  Mostra único historico (GET)
  
   <code>
    baseUrl/historicos/:id
  </code>

</p>

<p>
  Criar historico da pista (POST)
  
  <code>
    baseUrl/pistas/:id/historicos
  </code>
</p>

<p>
  Atualizar Historico (PUT)
  
  <code>
    baseUrl/historicos/edit/:id
  </code>
</p>

<p>
  Deletar historico (DELETE)
  
  <code>
    baseUrl/historicos/edit/:id
  </code>
</p>
