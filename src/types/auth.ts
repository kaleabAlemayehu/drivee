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

export type { SignupInputs, LoginInputs };
