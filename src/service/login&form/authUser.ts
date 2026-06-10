import { users, validationUser } from "@/types/users";
import Users from "@/database/model/user.model";
import { compareHash, hashPassword } from "@/lib/hash";
import { sendConfirmEmail } from "../email/email";


export const register = async (user: users): Promise<void> => {

    const validUser = await Users.findOne({ email: user.email });

    if (validUser) throw new Error("Usuario ya existente");

    if (!user.password || user.password.length < 6) throw new Error("Contraseña minimo de 6 caracteres");

    const hashedPassword = await hashPassword(user.password);

    await Users.create({
        email: user.email,
        password: hashedPassword,
        role: user.role ?? "User"
    });
    await sendConfirmEmail(user.email)
};

export const login = async (user: users): Promise<validationUser> => {
    const validUser = await Users.findOne({ email: user.email });

    if (!validUser) throw new Error("Email incorrecto");

    const validPassword = await compareHash(user.password, validUser.password)

    if (!validPassword) throw new Error("Contraseña incorrecta");

    return {
        email: validUser.email,
        role: validUser.role,
        _id: validUser._id
    };
};

