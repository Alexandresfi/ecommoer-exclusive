import { NextResponse } from 'next/server';
import { calcularPrecoPrazo } from 'correios-brasil';

export async function POST(request: Request) {
  try {
    const { cep } = await request.json();

    const dataInfoDelivery = {
      sCepOrigem: '01009903',
      sCepDestino: cep,
      nVlPeso: '4',
      nCdFormato: ' 1',
      nVlComprimento: '22',
      nVlAltura: '20',
      nVlLargura: '80',
      nVlDiametro: ' 0',
      nCdServico: ['04014', '04510', '40169', '40215']
    };

    const response = await calcularPrecoPrazo(dataInfoDelivery);

    return NextResponse.json({
      response
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Informe o CEP' });
  }
}
