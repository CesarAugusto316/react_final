import {
  createContext, FC, ReactNode, useContext, useEffect, useMemo, useState,
} from 'react';
import { AxiosError } from 'axios';
import { TodosService } from '../services';
import { Todo } from '../interfaces';


interface TodosProviderHooks {
  useGetTodos: (email: string) => {
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
  // todos: Array<Todo>,
  // isLoading: boolean,
}

const Context = createContext({} as TodosProviderHooks);

export const useTodosContext = () => {
  return useContext(Context);
};

const todosService = TodosService.getInstance();


const useGetTodos = (email: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([] as Array<Todo>);
  const [error, setError] = useState('');

  useEffect(() => {
    todosService.getAll(email)
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [todo, setTodo] = useState({} as Todo);

  const createTodo = (todoInput: Todo) => {
    todosService.create(todoInput)
      .then((todo) => {
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
  }, [todo]);

  return memoizedValues;
};

export const TodosProvider: FC<{children: ReactNode}> = ({ children }) => {
  // const [isLoading, setIsloading] = useState(true);

  // useEffect(() => {
  //   todosService.getAll('?email=riveramirandac@gmail.com')
  //     .then((todos) => {
  //       setTodos(todos);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     })
  //     .finally(() => {
  //       setIsloading(false);
  //     });
  // }, []);

  const memoizedValues = useMemo(() => {
    return { useGetTodos, useCreateTodo };
  }, [useGetTodos, useCreateTodo]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
