import { Role } from "./role";

export interface User {
  name: string;
  email: string;
  password: string; // for demonstration purposes only
  roles: Role[];
}

export type Users = User[];
