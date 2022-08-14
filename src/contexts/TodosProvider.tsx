import {
  createContext, FC, ReactNode, useContext, useEffect, useMemo, useState,
} from 'react';
import { AxiosError } from 'axios';
import { TodosService } from '../services';
import { Todo } from '../interfaces';


interface TodosContext {
  useGetTodos: () => {
    isLoading: boolean,
    todos: Array<Todo>,
    error: string
  },
  useCreateTodo: () => {
    isLoading: boolean,
    todo: Todo,
    error: string,
    createTodo:(todoInput: Todo) => void
  }
}

const Context = createContext({} as TodosContext);

export const useTodosContext = () => {
  return useContext(Context);
};

const todosService = TodosService.getInstance();

const useGetTodos = () => {
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

  const memoizedValues = useMemo(() => {
    return { isLoading, todos, error };
  }, [todos, error]);

  return memoizedValues;
};

const useCreateTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [todo, setTodo] = useState({} as Todo);

  /**
   *
   * @description requires Auth
   */
  const createTodo = (todoInput: Todo) => {
    setIsLoading(true);

    todosService.create(todoInput)
      .then((todo) => {
        console.log('New Todo created!');
        setTodo(todo);
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const memoizedValues = useMemo(() => {
    return {
      isLoading, todo, error, createTodo,
    };
  }, [todo, error]);

  return memoizedValues;
};

export const TodosProvider: FC<{children: ReactNode}> = ({ children }) => {
  const memoizedValues = useMemo(() => {
    return { useGetTodos, useCreateTodo };
  }, [useGetTodos, useCreateTodo]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
