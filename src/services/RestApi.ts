/* eslint-disable class-methods-use-this */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LocalToken } from './LocalToken';


/**
 *
 * @description BaseClass for services that communicates with API endpoints.
 */
export class RestAPI {
  private baseUrl = import.meta.env.VITE_TODOS_API_URL;

  public saveLocalToken(newToken: string) {
    LocalToken.getInstance().setValue(newToken);
  }

  public deleteLocalToken() {
    LocalToken.getInstance().deleteValue();
  }

  public getLocalToken() {
    return LocalToken.getInstance().getValue();
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

  protected put(url: string, auth = true): Promise<AxiosResponse> {
    return axios
      .put(this.baseUrl + url, this.configHeaders(auth));
  }

  protected delete(url: string, auth = true): Promise<AxiosResponse> {
    return axios
      .delete(this.baseUrl + url, this.configHeaders(auth));
  }
}
