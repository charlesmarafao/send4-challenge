declare namespace Express {
  export interface Request {
    user: {
      user_id: string;
      user_email: string;
    };
  }
}
