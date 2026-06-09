'use client'

import { login } from "@/lib/api/auth.api";
import { useRouter } from "next/navigation";
import { useState } from "react"
import Swal from "sweetalert2";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      await login({ email, password, role: "User" })


      await Swal.fire({
        title: "Bienvenido",
        text: "Inicio de sesion exitoso",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
      


    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Error al registrar";
      await Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
    }
  };


  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      {/* Encabezado */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Iniciar Sesión
        </h1>
        <p className="text-sm text-gray-500">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Input de Email */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 block"
          >
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Input de Contraseña */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <a
              href="#"
              className="text-xs font-semibold text-blue-600 hover:text-blue-500 transition-colors"
            >
              ¿La olvidaste?
            </a>
          </div>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Recordarme Checkbox */}
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
            Recordarme en este dispositivo
          </label>
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="w-full py-3 px-4 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          Entrar a mi cuenta
        </button>
      </form>

      <Link href="/view/register"className="block text-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">¡No tinenes Cuneta?</Link>
    </div>
  );
}

export default LoginForm