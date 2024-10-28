import { Role } from "./role";

export interface User {
  name: string;
  email: string;
  password: string; // for demonstration purposes only
  roles: Role[];
  chorus_ownership?: string[];
}

export type Users = User[];
