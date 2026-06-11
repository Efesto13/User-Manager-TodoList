import { taskProps } from "@/types/task";
import mongoose, { Schema, model } from "mongoose";

const TaskSchema = new Schema<taskProps>({
    title: {
        type: String,
        required: [true, "The tittle is required"]
    },
    state: {
        type: String,
        required: [true, "The state is required"]
    },
    startDate: {type: Number},
    endDate: { type: Number },
    comments: [{ type: String }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false
    }
});

const Task = mongoose.models.task || model<taskProps>("task", TaskSchema);

export default Task;