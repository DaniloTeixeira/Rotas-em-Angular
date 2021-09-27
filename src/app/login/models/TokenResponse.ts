import { parseISO } from 'date-fns';

export interface ITokenResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: string;
}

export class TokenResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: Date;

  constructor(data: ITokenResponse) {
    this.accessToken = data.accessToken;
    this.tokenType = data.tokenType;
    this.expiresIn = parseISO(data.expiresIn);
  }
}
