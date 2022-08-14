import { AxiosError } from 'axios';
import {
  createContext, FC, ReactNode, useContext, useEffect, useMemo, useState,
} from 'react';
import { UserPayload } from '../interfaces';
import { AuthService } from '../services/AuthService';


interface AuthContext {
  isLoading: boolean,
  error: string,
  isLogged: boolean,
  signIn: (userInput: UserPayload) => Promise<void>,
  signOut: () => Promise<void>
}

const Context = createContext({} as AuthContext);
export const useAuthContext = () => {
  return useContext(Context);
};

const authService = AuthService.getInstance();

export const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [error, setError] = useState('');

  const signIn = async (userInput: UserPayload): Promise<void> => {
    setIsloading(true);

    return authService.fetchToken(userInput)
      .then(() => {
        setHasToken(true);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const fetchNewUserProfile = () => {
    setIsloading(true);

    authService.fetchUserProfile()
      .then((user) => {
        console.log(user);
        setIsLogged(true);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  useEffect(() => {
    console.log('is Logged:', isLogged);
    console.log('hasToken:', hasToken);
    if (hasToken) {
      fetchNewUserProfile();
    }
  }, [hasToken]);

  const signOut = async (): Promise<void> => {

  };

  const memoizedValues = useMemo(() => {
    return {
      isLogged, signIn, signOut, isLoading, error,
    };
  }, [isLogged, error, isLoading]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
