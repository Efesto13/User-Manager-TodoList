import { CommentsDTO } from "@/types/task";

export const addComments = async (comment: CommentsDTO) => {
    try {
        const response = await fetch(`/api/todolist/${comment.userId}/${comment._id}/comments`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment: comment.comment })
        });

        if(!response.ok) throw new Error("No se pudo crear la tarea");

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error en add:", error);
        return null;
    }
};

export const getComments = async (comment :CommentsDTO)  => {
    try {
        const response = await fetch(`/api/todolist/${comment.userId}/${comment._id}/comments`);

        if(!response.ok) throw new Error("No se pudo traer la tarea");

        const data = await response.json();

        return data
    } catch (error) {
        console.error("Error en get:", error);
        return null;
    }
};

export const deleteComments = async (comment: CommentsDTO) => {
    try {
        const response = await fetch(`/api/todolist/${comment.userId}/${comment._id}/comments`,{
              method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment: comment.comment })
        });

        if(!response.ok) throw new Error("No se pudo eliminar la tarea");

        const data = await response.json();

        return data

    } catch (error) {
        console.error("Error en delete:", error);
        return null;
    };
};
