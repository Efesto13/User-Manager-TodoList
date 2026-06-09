export function ConfirmAccount(email: string){
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cuenta Creada Exitosamente</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; padding: 40px 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; }
          .content { padding: 40px 30px; color: #334155; line-height: 1.6; }
          .greeting { font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 16px; }
          .text { font-size: 15px; color: #475569; margin-bottom: 24px; }
          .btn-container { text-align: center; margin: 30px 0; }
          .btn { background-color: #2563eb; color: #ffffff !important; text-decoration: none; padding: 12px 32px; font-size: 15px; font-weight: 600; border-radius: 8px; display: inline-block; transition: background-color 0.2s; box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2); }
          .info-note { background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 16px; border-radius: 4px; font-size: 14px; color: #166534; margin-top: 24px; }
          .footer { background-color: #f8fafc; padding: 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          .footer a { color: #2563eb; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>¡Bienvenido!</h1>
          </div>
          
          <div class="content">
            <div class="greeting">¡Hola, ${email}!</div>
            <p class="text">
              Tu cuenta ha sido creada exitosamente en nuestra plataforma.
            </p>
            
            <div class="info-note">
              <strong>Nota de seguridad:</strong> Si tú no solicitaste la creación de esta cuenta, por favor ignora este correo o ponte en contacto con nuestro equipo de soporte.
            </div>
          </div>
          
          <div class="footer">
            <p>Ecosistema de Talento Tech impulsado por <strong>Makrtalen & Riwi</strong></p>
            <p>&copy; 2026 <a href="https://www.dhb-tech.com/" target="_blank">DHB-TECH</a>. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}