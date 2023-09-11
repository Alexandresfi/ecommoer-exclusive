import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, mensage } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
      }
    });

    const mailOptions = {
      from: 'alenascimento.teste@gmail.com',
      to: 'alexandre.sfi@hotmail.com',
      subject: `Contact E-commerce exclusive`,
      html: `
      <h1>Novo contato de ${name} </h1>
      <ul> 
        <li> Email: ${email} </li> 
        <li> Celular: ${phone} </li> 
        <li> Conteudo: ${mensage} </li> 
      </ul>
      `
    };

    const responseSendEmail = await transporter.sendMail(mailOptions);

    if (responseSendEmail.response.includes('2.0.0 OK')) {
      const mailOptions = {
        from: 'alenascimento.teste@gmail.com',
        to: email,
        subject: `Contact E-commerce exclusive`,
        html: `
        <p>Nós da equipe Ecommerce Exclusive agradecemos seu contano ${name}</p>
        <p>Em breve entraremos contato com você, pelo número de celular ${phone}</p>
        `
      };
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ status: 200, data: responseSendEmail });
  } catch (error) {
    console.log('Erro:', error);
    return NextResponse.json(error);
  }
}
