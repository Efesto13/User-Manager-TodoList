# User Manager

Una aplicación web moderna para gestionar usuarios, tareas y comentarios colaborativos. Construida con Next.js, MongoDB y Tailwind CSS.

**🌐 [Ver aplicación en vivo](https://user-manager-todo-list.vercel.app/)**

## 🚀 Características

- **Autenticación de Usuarios**: Sistema de registro e inicio de sesión seguro con contraseñas hasheadas
- **Gestión de Tareas**: Crear, leer, actualizar y eliminar tareas personalizadas
- **Sistema de Comentarios**: Agregar comentarios a las tareas para facilitar la colaboración
- **Interfaz Responsiva**: Diseño moderno con HeroUI y Tailwind CSS
- **Validación de Datos**: Validación robusta en el servidor y cliente
- **Notificaciones Email**: Sistema de envío de emails integrado con Nodemailer

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- MongoDB (local o en la nube)

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone: https://github.com/Efesto13/User-Manager-TodoList
   cd user-manager
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```
   MONGODB_URI=tu_conexion_mongodb
   SMTP_USER=tu_email@gmail.com
   SMTP_PASS=tu_contraseña_app
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor en modo producción
- `npm run lint` - Ejecuta ESLint para verificar la calidad del código

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/               # Rutas de API REST
│   │   ├── login/
│   │   ├── register/
│   │   └── todolist/      # Endpoints de tareas y comentarios
│   └── view/              # Páginas de interfaz de usuario
│       ├── register/
│       └── todolist/
├── components/            # Componentes React reutilizables
│   ├── Card.tsx
│   ├── LoginForm.tsx
│   └── RegisterForm.tsx
├── database/
│   └── model/             # Modelos de MongoDB
│       ├── user.model.ts
│       └── task.model.ts
├── hook/                  # Hooks personalizados de React
├── lib/
│   ├── db.ts             # Configuración de base de datos
│   ├── hash.ts           # Funciones de hashing
│   └── api/              # Clientes API
├── service/              # Lógica de negocio
│   ├── email/
│   ├── login&form/
│   ├── todolist/
│   └── comments/
├── types/                # Tipos TypeScript
├── utils/                # Funciones utilitarias
└── globals.css           # Estilos globales
```

## 🔧 Dependencias Principales

- **[Next.js](https://nextjs.org/)** 16.2.7 - Framework React con SSR
- **[React](https://react.dev/)** 19.2.4 - Librería de UI
- **[MongoDB/Mongoose](https://mongoosejs.com/)** 9.6.3 - Base de datos y ODM
- **[Tailwind CSS](https://tailwindcss.com/)** 4 - Framework de estilos CSS
- **[HeroUI](https://heroui.com/)** 3.2.0 - Componentes UI preconstruidos
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** 6.0.0 - Hashing seguro de contraseñas
- **[Nodemailer](https://nodemailer.com/)** 8.0.10 - Envío de emails
- **[SweetAlert2](https://sweetalert2.github.io/)** 11.26.25 - Alertas elegantes

## 🔐 Seguridad

- Las contraseñas se hashean usando bcrypt antes de almacenarse
- Validación de entrada en formularios
- Protección CSRF en rutas de API
- Variables sensibles almacenadas en `.env.local`

## 🗄️ Base de Datos

El proyecto utiliza MongoDB con Mongoose. Los modelos principales son:

- **User**: Almacena información de usuario (email, contraseña hasheada, etc.)
- **Task**: Almacena tareas con referencias al usuario propietario

## 📧 Configuración de Email

Para configurar el envío de emails:

1. Usa una cuenta Gmail con contraseña de aplicación
2. Configura las variables en `.env.local`:
   ```
   SMTP_USER=tu_email@gmail.com
   SMTP_PASS=tu_contraseña_app
   ```

## 🚀 Deploy

La aplicación puede desplegarse en [Vercel](https://vercel.com) con soporte integrado para Next.js:

1. Push tu código a GitHub
2. Conecta tu repositorio con Vercel
3. Configura las variables de entorno en el panel de Vercel
4. Vercel construirá y desplegará automáticamente
