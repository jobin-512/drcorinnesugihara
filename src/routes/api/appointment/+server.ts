import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, phone, date, time }: AppointmentData = await request.json();

    if (!name || !email || !phone || !date || !time) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // 🔐 Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // ✉️ Email content
    const mailOptions = {
      from: `"Appointment Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVE_EMAIL || process.env.SMTP_USER,
      subject: `New Appointment from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    );
  }
};
