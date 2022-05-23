export default function formatPhone(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1 $2-$3');
}

// \d = dígito 0-9.

// \D = nega dígito, tudo em maísculo é negação. = Pega tudo que não é dígito.

// /g = global = Vai verificar TODAS as ocorrências do padrão.

// ^ = Precisa fazer a validação no começo da string. Ex: /^(\d{2})\B/, '($1) - >
// Pega os primeiros dois dígitos de 0-9 dentro do conjunto e salva em $1

// ? = caracter antes desse símbolo é opcional
