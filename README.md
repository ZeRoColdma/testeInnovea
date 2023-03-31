# Instruçoes para Iniciar o projeto

## Instalação e Iniciando aplicação

* Fui utilizado o YARN para inicializaçao do projeto. Caso haja problemas de inicializaçao. Instalar o gerenciador de pacotes yarn

Utilize o gerenciacador de pacotes [npm](https://www.npmjs.com/) para instalar as dependencias. Ou o da sua preferencia, yarn ou pnpm.

A utilização do Banco de dados é local com o SQLite3, então não é necessario instalar nada ou iniciar as migrations.

iniciar o projeto com o comando:

* yarn

* docker-compose up -d --build

* yarn prisma migrate dev --name init

* yarn start:dev

### Opcional

* Use o comando:

* npm prisma studio

* Para Abrir um instacia do banco no navegador.
