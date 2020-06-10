module.exports = {

  new(request, response) {
    return response.status(400).json({
      error: 'Utilize algum endpoint.',
      endpoints: [
        'pessoa',
        'cpf',
        'email',
        'rg',
        'cep',
        'on_creditcard - OBRIGATÓRIO TER CONEXAO COM INTERNET',
        'off_creditcard',
        'creditcardvalidate - OBRIGATÓRIO TER CONEXAO COM INTERNET'
      ]
    });
  }

};