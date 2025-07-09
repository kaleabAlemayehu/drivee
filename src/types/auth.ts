type SignupInputs = {
  first_name: string;
  email: string;
  password: string;
  policy?: boolean;
};

type LoginInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type Token = {
  token: string;
  expires_at: number;
  user_id: string;
};

export type { SignupInputs, LoginInputs, Token };
