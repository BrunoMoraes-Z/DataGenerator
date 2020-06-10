const leite = require('leite');
const api = new leite();

module.exports = {

  new(request, response) {
    const body = request.body;
    return response.json({
      nome: api.pessoa.nome(),
      cpf: api.pessoa.cpf(),
      rg: api.pessoa.rg().replace('.', '').replace('.', '').replace('-', ''),
      sexo: api.pessoa.sexo(),
      mae: api.pessoa.nome({ sexo: 'Feminino' }),
      pai: api.pessoa.nome({ sexo: 'Masculino' }),
      nascimento: api.pessoa.nascimento({ string: true, idade: 25 }),
      logradouro: api.localizacao.logradouro(),
      complemento: api.localizacao.complemento(),
      bairro: api.localizacao.bairro(),
      cep: api.localizacao.cep(),
      cidade: api.localizacao.cidade(),
      estado: api.localizacao.estado()
    });
  }

};