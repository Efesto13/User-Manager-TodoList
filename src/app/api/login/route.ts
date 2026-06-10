import { connectionDB } from "@/lib/db";
import { login } from "@/service/login&form/authUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectionDB();

        const { email, password} = await req.json();

        if (!email || !password) return NextResponse.json({ error: "Usuario no encontrado" });

        const user = await login({ email, password, role: "User" });

        const data = NextResponse.json({
            mensagge: "Cuenta creada",
            userId: user._id,
            data: user,
        });

        return data;

    } catch (error) {
        return NextResponse.json(
            { error: "Hubo un error al ingresar" },
            { status: 401 }
        );
    };
}