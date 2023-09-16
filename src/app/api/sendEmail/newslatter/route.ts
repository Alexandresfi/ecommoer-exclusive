import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

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
      <h1>Nova inscrição na plataforma </h1>
      <p> 
        Email: ${email}
      </p>
      `
    };

    const responseSendEmail = await transporter.sendMail(mailOptions);

    if (responseSendEmail.response.includes('2.0.0 OK')) {
      const mailOptions = {
        from: 'alenascimento.teste@gmail.com',
        to: email,
        subject: `Contact E-commerce exclusive`,
        html: `
        <p>Parabéns! Agora você faz parte da família Exclusive, logo mais iremos enviar seu CUPOM de desconto.</p>
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
