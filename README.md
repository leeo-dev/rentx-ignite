# Cadastro de Carro
**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro
Deve ser possível possível listar todas as categorias

**Requisitos e não Funcionais**
**Regra de Negócio**
Não deve possível cadastrar um carro com uma placa já existente.
Não dever possível alterar a placa de um carro cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O Usuário responsável pelo cadastro deve ser um administrador.

# Listagem de carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro
**Requisitos e não Funcionais**
**Regra de Negócio**
O Usuário não precisa está logado no sistema

# Cadastro de Especificação

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis
**Regra de Negócio**
O Usuário não precisa está logado no sistema

# Cadastro de Especificação no Carro
**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todas os carros
**Requisitos e não Funcionais**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
O Usuário responsável pelo cadastro deve ser um administrador.

# Cadastro de imagens do carro
**Requisitos Funcionais**
Dever ser possível cadastrar a imagem do carro
Dever ser possível listar todos os carros
**Requisitos e não Funcionais**
Utilizar o multer para upload dos arquivos
**Regra de Negócio**
O Usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O Usuário responsável pelo cadastro deve ser um administrador.

# Aluguel de Carro
**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel
**Requisitos e não Funcionais**
**Regra de Negócio**
O Aluguel deve ter duração mínima de 24h.
Não dever ser possível alugar cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não dever ser possível alugar cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

