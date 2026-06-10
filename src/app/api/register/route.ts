import { connectionDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { register } from "@/service/login&form/authUser";



export async function POST(req: NextRequest) {
    try {
        await connectionDB();

        const {email,password,role} = await req.json();

        if(!email || !password ) return NextResponse.json({error: "la contraseña y el email son obligatorios"});

        const newUser = await register({email,password,role});

        return NextResponse.json(
            {mensagge: "Cuenta creada", data: newUser},
            {status: 201}
        );

    } catch (error) {
        return NextResponse.json(
            { error: "Hubo un error al procesar el registro" },
            { status: 500 }
        );
    }
};



