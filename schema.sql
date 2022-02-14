CREATE IF NOT EXISTS DATABASE imobiliaria

CREATE TABLE IF NOT EXISTS corretores (
  	id serial primary key,
  	nome varchar(255) NOT NULL,
  	senha varchar(8000) NOT NULL
)

CREATE TABLE IF NOT EXISTS clientes (
  	id serial primary key,
  	nome varchar(255) NOT NULL,
  	cpf varchar(11) NOT NULL UNIQUE,
  	email varchar NOT NULL UNIQUE,
  	telefone varchar(11) NOT NULL, 
  	dataDeCadastro date NOT NULL,
  	urlDaFoto varchar 
  
  
)

CREATE TABLE IF NOT EXISTS imoveis (
  id serial primary key,
  tipo varchar(11) NOT NULL,
  valorDeVenda money NOT NULL,
  endereco varchar(255) NOT NULL,
  ulrDaFoto varchar 
  )

   CREATE TABLE IF NOT EXISTS vendas (
    id serial primary key,
    imovel varchar(255) NOT NULL,
    valor money NOT NULL,
    idCorretor integer NOT NULL,
    idCliente integer NOT NULL,
    condicaoDePagamento varchar(255),
    foreign key (idCorretor) references corretores(id),
    foreign key (idCliente) references clientes(id)
    )
    