import Task from "@/database/model/task.model";
import { connectionDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

await connectionDB();

export async function POST(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    try {

        const body = await req.json();
        const { userId } = await params;

        const { title, state, endDate, startDate } = await body

        if (!title) return NextResponse.json({ error: "Titulo obligatorio" }, { status: 400 })

        const newTask = await Task.create({
            title,
            state,
            endDate,
            startDate,
            userId
        });

        return NextResponse.json(
            { mensagge: "Tarea Creada", data: newTask },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error interno del servidor", details: String(error) },
            { status: 500 })
    };
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    try {

        const { userId } = await params;

        const data = await Task.find({ userId: userId });

        if (!data) NextResponse.json({ error: "Falla la obtencion de datos", data: data }, { status: 400 })

        return NextResponse.json(
            { mensagge: "Obtencion Exitosa", data: data },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Error interno del servidor", details: String(error) },
            { status: 500 })
    };
};
