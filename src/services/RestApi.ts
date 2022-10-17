import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LocalTokenStorage } from './LocalTokenStorage';


/**
 *
 * @description BaseClass for services that communicates with Larnu API
 */
export class RestAPI {
  private baseUrl = 'https://ms-discord-upy5mhs63a-rj.a.run.app';

  public saveLocalToken(newToken: string) {
    LocalTokenStorage.getInstance().setValue(newToken);
  }

  public deleteLocalToken() {
    LocalTokenStorage.getInstance().deleteValue();
  }

  public getLocalToken() {
    return LocalTokenStorage.getInstance().getValue();
  }

  private configHeaders(auth = true): AxiosRequestConfig {
    if (auth) {
      return {
        headers: {
          Authorization: `Bearer ${this.getLocalToken()}`,
        },
      };
    }
    return {};
  }

  protected get(url: string, auth = true): Promise<AxiosResponse> {
    return axios
      .get(this.baseUrl + url, this.configHeaders(auth));
  }

  protected post(url: string, data: object, auth = true): Promise<AxiosResponse> {
    return axios
      .post(this.baseUrl + url, data, this.configHeaders(auth));
  }

  protected put(url: string, data: object, auth = true): Promise<AxiosResponse> {
    return axios
      .put(this.baseUrl + url, data, this.configHeaders(auth));
  }

  protected delete(url: string, auth = true): Promise<AxiosResponse> {
    return axios
      .delete(this.baseUrl + url, this.configHeaders(auth));
  }
}
