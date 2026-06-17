import Task from "@/database/model/task.model";
import { connectionDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req: NextRequest, { params }: { params: Promise<{ _id: string, userId: string }> }) {
    try {
        await connectionDB();
        const { userId, _id } = await params;
        const { comment } = await req.json();

        if (!comment || !comment.trim()) return NextResponse.json({ error: "El comentario no puede estar vacío" }, { status: 400 });

        const newComment = await Task.findOneAndUpdate(
            { _id, userId },
            { $push: { comments: comment } },
            { new: true }
        );

        if (!newComment) return NextResponse.json({ error: "Tarea no encontrada" }, { status: 404 });

        return NextResponse.json({ data: newComment.comments }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Error al crear comentarios" }, { status: 500 });
    }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ _id: string, userId: string }> }) {
    try {
        await connectionDB();
        const { userId, _id } = await params;


        const task = await Task.findOne({ _id, userId }).lean();

        if (!task) return NextResponse.json({ error: "Tarea no encontrada" }, { status: 404 });

        return NextResponse.json({ data: task.comments || [] }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Error al traer comentarios" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ _id: string, userId: string }> }) {
    try {
        await connectionDB();
        const { _id, userId } = await params;
        const { comment } = await req.json();

        const find = await Task.findOneAndUpdate(
            { _id: _id, userId: userId },
            { $pull: { comments: comment } },
            { new: true }
        );

        if (!find) return NextResponse.json({ message: "Commentario no encontrado" }, { status: 404 });

        return NextResponse.json({ data: find }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Error al eliminar comentarios" }, { status: 500 });
    }
}