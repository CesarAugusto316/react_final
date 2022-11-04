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

const hasLocalToken = (): boolean => {
  const token = authService.getLocalToken();
  if (token) {
    return true;
  }
  return false;
};

/**
 *
 * @TODO: hasToken should get its value from localStorage.
 */
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [hasToken, setHasToken] = useState<boolean>(hasLocalToken());
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  /**
   *
   * @description user loggs in for the first time & doesn't have
   * a localStored token.
   */
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

  /**
   *
   * @description runs only if the user has already a token,
   * if it's not valid, the token is removed from localStorage
   */
  const fetchNewUserProfile = () => {
    setIsloading(true);

    authService.fetchUserProfile()
      .then((user) => {
        console.log('is Logged 😀!', true, user);
        setIsLogged(true);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setIsLogged(false);
        setHasToken(false);
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  useEffect(() => {
    if (hasToken) {
      fetchNewUserProfile();
      // if token has expired, the promise will be rejected
      // and AuthService will delete any stored localToken
    }

    /**
     * TODO: if the token is not valid because has expired, we should invoke
     * fetchToken again, an call fectchNewUserProfile once again.
     */
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
