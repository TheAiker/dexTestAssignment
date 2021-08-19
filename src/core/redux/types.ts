export interface User {
  userName: string;
  login: String;
  id: string;
  createdAt: any;
}

export interface AuthState {
  user: User | null;
  authenticated: boolean;
  error: string | null;
  sessionToken: string | null;
}

export interface SignUpResponse {
  name: string;
  avatarUrl: string;
  token: string;
}

export interface SignInResponse {
  name: string;
  avatarUrl: string;
  token: string;
}

export interface SignUpData {
  userName: string;
  login: string;
  password: string;
}

export interface SignInData {
  login: string;
  password: string;
}
