# Teste Younder

O projeto consiste em criar um CRUD para uma tabela simples de Clientes com integração com client-side


## Dependências

NodeJS - 10.19.0

Npm - 6.13.4

.Net Core SDK - 3.0.101

Angular CLI: 8.0.6

Angular: 8.2.9 

SQL Server 

## Restaurando Dependências

Após realizar as instalções anteriores, entre na pasta Raiz do projeto ./Younder e execute o comando para restaurar os pacotes do projeto em .Net Core 3.0.101 :



```bash
dotnet restore
```
##
Entre no diretório ./Younder/ClientApp e execute o seguinte comando para restaurar os pacotes do client:

```bash
npm install
```

Após a instalação, a pasta /node-modules deverá ter sido criada.


##

Instale o pacote de ferramentas para execução do Migrations:

```bash
dotnet tool install --global dotnet-ef --version 3.0.0
```


## Criando Banco de Dados (SQL Server)

Para criar o banco de dados local, entre no diretório raiz do projeto,  /Younder ,
execute o seguinte comando, utilizando o Migrations:

```bash
dotnet ef database update
```
Tenha certeza de que a ConnectionString localizada no arquivo appsettings.Development.json, está apontada para seu usuário local.

## Inicializando o Projeto

Para iniciar o projeto, basta ir ao terminal, no diretório raiz, e executar:

```bash
dotnet watch run
```
Ou:
```bash
dotnet run
```

Ou apenas clique na opção Run na IDE que estiver usando. Caso seja Visual Studio Code, aperte F5. Após a compilação, navegue pelo seu browser no endereço indicado no terminal.

