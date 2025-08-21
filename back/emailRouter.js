require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/enviar-email', async (req, res) => {
  const { subject, body } = req.body;
  const recipient = process.env.MAIL_SUPPORT_RECEIVER_EMAIL;

  if (!subject || !body || !recipient) {
    return res.status(400).json({ message: 'Dados incompletos para envio de e-mail.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      port: parseInt(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME, // SMTP login
        pass: process.env.MAIL_PASSWORD, // SMTP password / API Key
      },
    });

    await transporter.sendMail({
      from: `"${process.env.MAIL_DEFAULT_SENDER_NAME}" <${process.env.MAIL_DEFAULT_SENDER_EMAIL}>`,
      to: recipient,
      subject,
      text: body,
    });

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(`[${new Date().toLocaleString()}] Erro ao enviar e-mail: ${error.message}`);
    res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.message });
  }
});

module.exports = router;
