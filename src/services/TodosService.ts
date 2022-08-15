import { AxiosError } from 'axios';
import { RestAPI } from './RestApi';
import { Todo } from '../interfaces';


/**
 *
 * @description Singleton
 */
export class TodosService extends RestAPI {
  private static instance: TodosService;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!TodosService.instance) {
      TodosService.instance = new TodosService();
    }
    return TodosService.instance;
  }

  public getAll(queryParams: string): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      this.get(`/todos${queryParams}`, false)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  /**
   *
   * @description requires Auth
   */
  public create(payload: Todo): Promise<Todo> {
    return new Promise((resolve, reject) => {
      this.post('/todos/', payload, true)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  /**
   *
   * @description requires Auth
   */
  public remove(id: number): Promise<Todo> {
    return new Promise((resolve, reject) => {
      this.delete(`/todos/${id}`, true)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  /**
   *
   * @description requires Auth
   */
  public update(id: number, payload: Todo): Promise<Todo> {
    return new Promise((resolve, reject) => {
      this.put(`/todos/${id}`, payload, true)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }
}
