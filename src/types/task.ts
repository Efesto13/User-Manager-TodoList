import { Types } from "mongoose";

export interface taskProps {
  id: string;
  title: string;
  startDate?: number | undefined;
  endDate?: number | undefined;
  state: "pending" | "inProgress" | "done";
  comments: string[],
  userId: Types.ObjectId,
};