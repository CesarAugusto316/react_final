import {
  createContext, FC, ReactNode, useContext, useEffect, useMemo, useState,
} from 'react';
import { AxiosError } from 'axios';
import { TodosService } from '../services';
import { Todo } from '../interfaces';


interface TodosContext {
  isLoading: boolean,
  todos: Array<Todo>,
  error: string,
  createTodo: (todoInput: Todo) => void,
  deleteTodo: (id: number) => void
}

const Context = createContext({} as TodosContext);

export const useTodosContext = () => {
  return useContext(Context);
};

const todosService = TodosService.getInstance();

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([] as Array<Todo>);
  const [error, setError] = useState('');

  useEffect(() => {
    todosService.getAll('?email=riveramirandac@gmail.com')
      .then((todos) => {
        setTodos(todos);
        console.log(todos);
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  /**
   *
   * @description requires Auth
   */
  const createTodo = (todoInput: Todo) => {
    setIsLoading(true);

    todosService.create(todoInput)
      .then((todo) => {
        console.log('New Todo created!', todo);
        setTodos((state) => {
          return [
            ...state, todo,
          ];
        });
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteTodo = (id: number) => {
    todosService.remove(id)
      .then(() => {
        setTodos((state) => {
          return state.filter((todo) => todo.id !== id);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const memoizedValues = useMemo(() => {
    return {
      isLoading, todos, error, createTodo, deleteTodo,
    };
  }, [todos, error]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
