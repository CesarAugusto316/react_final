import { AxiosError } from 'axios';
import { RestAPI } from './RestApi';
import { UserPayload, UserProfile, Token } from '../interfaces';


/**
 *
 * @description Singleton
 */
export class AuthService extends RestAPI {
  private static instance: AuthService;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public fetchToken(payload: UserPayload): Promise<Token> {
    return new Promise((resolve, reject) => {
      this.post('/auth/login', payload, false)
        .then(({ data }) => {
          this.saveLocalToken(data.token);
          resolve(data);
        })
        .catch((error: AxiosError) => {
          this.deleteLocalToken();
          reject(error);
        });
    });
  }

  public fetchUserProfile(): Promise<UserProfile> {
    return new Promise((resolve, reject) => {
      this.get('/auth/check')
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          this.deleteLocalToken();
          reject(error);
        });
    });
  }
}
