import { Types } from "mongoose";

export interface taskProps {
  _id: string;
  title: string;
  startDate?: number | undefined;
  endDate?: number | undefined;
  state: "pending" | "inProgress" | "done";
  comments?: string[],
  userId?: Types.ObjectId,
};