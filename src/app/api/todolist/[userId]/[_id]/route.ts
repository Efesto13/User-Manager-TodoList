import Task from "@/database/model/task.model";
import { connectionDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

await connectionDB();

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ userId: string, _id: string }> }) {
    try {
        const { userId, _id } = await params;
        const body = await req.json();

        if (!userId || !_id) return NextResponse.json({ mensagge: "no se encontro el id" });

        const data = await Task.findOneAndUpdate(
            { _id: _id, userId: userId },
            { $set: body },
            { new: true }
        );

        return NextResponse.json(
            { mensagge: "Actualizado", data: data },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: "Error interno del servidor", details: String(error) },
            { status: 500 });
    };
};

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ _id: string, userId: string }> }) {
    try {
        const { _id, userId } = await params;

        if (!userId || !_id) return NextResponse.json({ mensagge: "no se encontro el id" });

        const data = await Task.findByIdAndDelete({ _id: _id, userId: userId });

        return NextResponse.json(
            { mensagge: "Actualizado", data: data },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error interno del servidor", details: String(error) },
            { status: 500 });
    }
}