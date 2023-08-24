export function getCodeName(code: string) {
  const codeList: { [key: string]: string } = {
    '04014': 'Envio via : SEDEX',
    '04510': 'Envio via : NORMAL',
    '40169': 'Envio via : SEDEX 12',
    '40215': 'Envio via : SEDEX 10'
  };

  return codeList[code];
}
