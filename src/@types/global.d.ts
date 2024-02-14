import type { User } from "../modules/users/interfaces";

export declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
