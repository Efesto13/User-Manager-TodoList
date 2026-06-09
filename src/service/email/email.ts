import nodemailer from "nodemailer";
import { ConfirmAccount } from "@/utils/emailTemplates";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
});

export const sendConfirmEmail = async (email: string) => {
    await transporter.sendMail({
        from: `"Bienvenido" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Cuenta Creada",
        html: ConfirmAccount(email),
    });
};