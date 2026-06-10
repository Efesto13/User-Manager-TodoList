import { usersDTO } from "@/types/users";

export const register = async (user: usersDTO) => {
    const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (!res.ok) throw new Error("Error al crear cuenta o cuenta existente");

    const data = await res.json();

    return data;
};

export const login = async (user: usersDTO) => {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email, password: user.password, userId: user._id })
        });

        if (!res.ok) throw new Error("No se encuentra la cuenta");

        const data = await res.json();

        return data;
};

// export const authApi = {
//     register: async (user: usersDTO) => {
//         const res = await fetch("/api/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(user)
//         });

//         if (!res.ok) throw new Error("Error al crear cuenta o cuenta existente");

//         const data = await res.json();

//         return data;
//     },
//     login: async (user: usersDTO) => {
//         const res = await fetch("/api/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email: user.email, password: user.password })
//         });

//         if (!res.ok) throw new Error("No se encuentra la cuenta");

//         const data = await res.json();

//         return data;
//     }
// }