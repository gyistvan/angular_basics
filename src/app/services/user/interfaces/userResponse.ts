export interface UserResponse {
  successful: boolean;
  result: User;
}

export interface User {
  email: string;
  id: string;
  name: string;
  password: string;
  role: string;
}
