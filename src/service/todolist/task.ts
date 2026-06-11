export const addTasks = async (title: string, userId: string) => {
    try {
        const state = "pending"

        const response = await fetch(`/api/todolist/${userId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, state })
        });
        const data = await response.json();

        if (!data) console.log("Errror al mandar los datos")

        return data
    } catch (error) {
        console.log("Error papi")
    }

};


export const getTasks = async (userId: string) => {
    try {
        const response = await fetch(`/api/todolist/${userId}`);

        const data = await response.json();

        return data
    } catch (error) {
        console.error("Error papi")
    }
};

export const updateTasks = async (_id: string, title: string, userId: string) => {
    try {
        const response = await fetch(`/api/todolist/${userId}/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title })
        });

        if (!response.ok) return console.log("Error al actualizar")

        const data = await response.json();

        return data
    } catch (error) {
        console.error("Error papi")
    };
};

export const updateState = async (_id: string, userId: string, newState: "pending" | "inProgress" | "done", date: { startDate?: number; endDate?: number }) => {
    try {
        const response = await fetch(`/api/todolist/${userId}/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state: newState, ...date })
        });

        if (!response.ok) return console.log("Error al actualizar el estado");

        const data = await response.json();

        console.log(data)

        return data
    } catch (error) {
        console.error("Error papi")
    }
};


export const deleteTasks = async (_id: string, userId: string) => {
    try {
        const response = await fetch(`/api/todolist/${userId}/${_id}`, {
            method: "DELETE"
        });

        if (!response.ok) return console.log("Error al eliminar");

        const data = await response.json();

        return data

    } catch (error) {
        console.error("Error papi")
    }
}