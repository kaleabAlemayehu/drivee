interface GoogleAuthResponse {
  credential: string;
  clientId: string;
  select_by: string;
}

type GoogleAuth = {
  token: string;
};

export type { GoogleAuth, GoogleAuthResponse };
