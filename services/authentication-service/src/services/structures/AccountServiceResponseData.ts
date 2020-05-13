export default interface ServerResponse {
  data: ServerData;
}

export interface ServerData {
  password: string;
  user_name: string;
  user_email: string;
  id: string;
}
