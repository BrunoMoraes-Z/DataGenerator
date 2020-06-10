const axios = require('axios');
const qs = require('qs');

const card = require('../utils/card');

var data = '';
var types = ['master', 'visa16', 'amex', 'diners', 'discover', 'enroute', 'jcb', 'voyager', 'hiper', 'aura'];

async function run(card_flag = 'master') {
  await axios({
    method: 'post',
    url: 'https://www.4devs.com.br/ferramentas_online.php',
    data: qs.stringify({
      acao: 'gerar_cc',
      pontuacao: 'S',
      bandeira: card_flag
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then((res) => {
    data = String(res.data);
    data = data.split(' ').join('');
    data = data.split('\n').join('');
    data = data.split('<divclass="output-group"><divclass="output-subtitle">NúmerodoCartão</div>').join('');
    data = data.split('<divid="cartao_numero"onclick="fourdevs.selectText(this)"class="output-txtoutput-txt-active">').join('');
    data = data.split('<spanclass="clipboard-copy"></span></div></div>').join(',');
    data = data.split('<divclass="output-groupblock"><divclass="output-subtitle">DatadeValidade</div>').join('');
    data = data.split('<divid="data_validade"onclick="fourdevs.selectText(this)"class="output-txtoutput-txt-active">').join('');
    data = data.split('<divclass="output-group"><divclass="output-subtitle">CódigoSegurança(CVV)</div>').join('');
    data = data.split('<divid="codigo_seguranca"onclick="fourdevs.selectText(this)"class="output-txtoutput-txt-active">').join('');
    data = data.split(',<divclass="copy-info">Cliqueparacopiar</div>').join('');
    const d = data.split(',');
    data = {
      flag: card_flag,
      number: d[0],
      date: d[1],
      cvv: d[2]
    }
  })
}

module.exports = {

  async validate(request, response) {
    const vtypes = ['MasterCard', 'Visa', 'Visa Electron', 'American Express', 'Diners Club', 'Discover', 'Enroute', 'JCB', 'Maestro', 'Solo', 'Switch', 'LaserCard'];
    const { flag, card } = request.body;
    if (!card || !flag) {
      return response.status(400).json({
        status: 'error',
        message: 'nessesario informar CC e Bandeira.',
        example: {
          flag: 'master',
          card: '5363701553568208'
        }
      })
    } else {
      if (!vtypes.includes(flag)) {
        return response.status(400).json({
          status: 'error',
          message: 'deve informar uma flag!',
          flags: vtypes
        });
      } else {
        await axios({
          method: 'post',
          url: 'https://www.4devs.com.br/ferramentas_online.php',
          data: qs.stringify({
            acao: 'validar_cc',
            txt_cc: card,
            bandeira: flag
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((res) => {
          data = String(res.data);
          data = data.split(' - ')[1];
        })
        return response.json({
          valid: data !== 'Verdadeiro' ? false : true
        });
      }
    }
  },

  on_help(request, response) {
    return response.status(400).json({
      status: 'error',
      message: 'deve informar uma flag!',
      flags: types
    });
  },

  async on_new(request, response) {

    const { flag } = request.params;
    let type = types[Math.floor(Math.random() * types.length)];
    if (!types.includes(flag)) {
      return response.status(400).json({
        status: 'error',
        message: 'deve informar uma flag!',
        flags: types
      });
    } else {
      type = flag;
    }

    await run(type);

    return response.json(data);
  },

  off_new(request, response) {
    const cards = ['VISA', 'Amex', 'MasterCard'];
    type = cards[Math.floor(Math.random() * cards.length)];

    return response.json({
      flag: type,
      number: card.GenCC(type, 1)[0]
    });
  }

};