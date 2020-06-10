## Requisitos
  - [Node.js](https://nodejs.org/en/download/) - Preferencialmente a versão LTS.
  - [GIT](https://git-scm.com/downloads) - Opcional para poder facilitar na instalação.

## Como instalar
Caso queira utilizar o git, utilize `git clone https://github.com/BrunoMoraes-Z/DataGenerator`.

acesse a pasta do projeto e abra o CMD.

execute o comando `npm install` e aguarde o download de todas as dependências.

## Como Executar
para executar pode utilizar o arquivo `start.bat` ou executar o comando `npm start` no cmd.

## URL
`localhost:3000`

## Utilização
Para utilizar esta ferramenta a URL fica `localhost:3000/<endpoint>`

## Lista De Endpoints
`pessoa, email, cpf, rg, cep, on_creditcard/flag, off_creditcard, creditcardvalidate`

de todos os endpoins apenas 2 é necessária conexão com internet `on_creditcard e creditcardvalidate`

## Responses
- pessoa
```json
{
  "nome": "Duarte Parent",
  "cpf": "97377063408",
  "rg": "736727581",
  "sexo": "Masculino",
  "mae": "Marina D'Agostino",
  "pai": "Levi Forafo",
  "nascimento": "25/03/1995",
  "logradouro": "Rua Voluntários da Pátria",
  "complemento": "Conjunto 230",
  "bairro": "Cidade Ademar",
  "cep": "21991297",
  "cidade": "Arceburgo",
  "estado": "GO"
}
```
- email
```json
{
  "email": "13112373723@mailinator.com"
}
```
- cpf
```json
{
  "cpf": "32534520695"
}
```
- rg
```json
{
  "rg": "992953228"
}
```
- cep
```json
{
  "cep": "72130396"
}
```
- on_creditcard/(flag)
```json
{
  "flag": "master",
  "number": "5407620032527809",
  "date": "10/10/2021",
  "cvv": "284"
}
```
- off_creditcard
```json
{
  "flag": "MasterCard",
  "number": "5287125319475206"
}
```
- creditcardvalidate

request body:
```json
{
	"flag": "MasterCard",
	"card": "5363701553568208"
}
```
response body:
```json
{
  "valid": true
}
```
  
