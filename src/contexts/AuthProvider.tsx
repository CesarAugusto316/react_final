import { AxiosError } from 'axios';
import {
  createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';
import { UserPayload } from '../interfaces';
import { AuthService } from '../services/AuthService';


interface AuthProviderProps {
  isLoading: boolean,
  error: string,
  isLogged: boolean,
  signIn: (userInput: UserPayload) => void,
  signOut: () => void
}

const Context = createContext({} as AuthProviderProps);
export const useAuthContext = () => {
  return useContext(Context);
};

const authService = AuthService.getInstance();

export const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState('');

  const signIn = (userInput: UserPayload): void => {
    // can i invoke setIsloading() here ?
    authService.fetchToken(userInput)
      .then(({ token }) => {
        console.log(token);
        setIsLogged(true);
        setIsloading(false);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        console.log(error);
      });
  };

  const fetchNewUserProfile = () => {
    authService.fetchUserProfile()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = (): void => {

  };

  const memoizedValues = useMemo(() => {
    return {
      isLogged, signIn, signOut, isLoading, error,
    };
  }, [isLogged, error]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
