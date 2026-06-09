'use client'

import { register } from "@/lib/api/auth.api";
import { useState } from "react"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";


export const RegisterForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const route = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ email, password });


            await Swal.fire({
                title: "Bienvenido",
                text: "Cuenta creada",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });

            route.replace("/");


        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Error al registrar";
            await Swal.fire({
                title: "Error",
                text: message,
                icon: "error",
            });
        };
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100">

            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Crear Cuenta
                </h1>
                <p className="text-sm text-gray-500">
                    Regístrate para empezar a gestionar tus usuarios
                </p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 block"
                    >
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>


                <div className="space-y-1">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700 block"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mínimo 6 caracteres"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>


                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-600">
                            Acepto los{" "}
                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                                Términos de servicio
                            </a>{""}
                            y la{" "}
                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                                Política de privacidad
                            </a>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                    Registrarme
                </button>
            </form>

            <Link href="/" className="block text-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">¿Ya tienes una cuenta?</Link>
        </div>
    );
};

export default RegisterForm;