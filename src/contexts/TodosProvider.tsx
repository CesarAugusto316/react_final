import {
  createContext, FC, ReactNode, useContext, useEffect, useMemo, useState,
} from 'react';
import { TodosService } from '../services';
import { Todo } from '../interfaces';


interface TodosProviderProps {
  todos: Array<Todo>,
  isLoading: boolean,
}

const Context = createContext({} as TodosProviderProps);
export const useTodosContext = () => {
  return useContext(Context);
};

const todosService = TodosService.getInstance();

export const TodosProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);
  const [todos, setTodos] = useState([] as Array<Todo>);

  useEffect(() => {
    todosService.getAll('?email=riveramirandac@gmail.com')
      .then((todos) => {
        setTodos(todos);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  const memoizedValues = useMemo(() => {
    return { todos, isLoading };
  }, [todos]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
