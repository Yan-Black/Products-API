import type { Role } from "../constants";

export interface User {
  id: string;
  email: string;
  password: string;
  role: Role;
}
