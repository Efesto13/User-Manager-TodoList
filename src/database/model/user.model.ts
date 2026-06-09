import { users } from "@/types/users";
import mongoose, { Schema, model } from "mongoose";

const UsersSchema = new Schema<users>({
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    }
});

const Users = mongoose.models.users || model<users>("users", UsersSchema);

export default Users;


