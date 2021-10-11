export interface LoginResponse {
  result: string;
  successful: boolean;
  user: UserResponse;
}

export interface UserResponse {
  name: string;
  email: string;
}

export interface RegistratinResponse {
  result: string;
  successful: boolean;
}
