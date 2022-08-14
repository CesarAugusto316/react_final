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

/**
 *
 * @TODO: hasToken should get its value from localStorage as well.
 */
export const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [hasToken, setHasToken] = useState(false); // localStorage as well
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  const signIn = async (userInput: UserPayload): Promise<void> => {
    setIsloading(true);

    return authService.fetchToken(userInput)
      .then((token) => {
        console.log('hasToken: 😀', true, token);
        setHasToken(true);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      });
  };

  const fetchNewUserProfile = () => {
    setIsloading(true);

    authService.fetchUserProfile()
      .then((user) => {
        console.log('is Logged 😀!', true, user);
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
