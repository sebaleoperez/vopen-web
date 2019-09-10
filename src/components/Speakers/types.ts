import { IUser } from "../../types/IUser";

export interface Props {
  className?: string;
  type?: "odd" | "even";
  speakers: IUser[];
}

export interface State {}
