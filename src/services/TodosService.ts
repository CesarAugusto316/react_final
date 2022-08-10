import { AxiosError, AxiosResponse } from 'axios';
import { RestAPI } from './RestApi';
import { Todo } from '../interfaces';


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
}
