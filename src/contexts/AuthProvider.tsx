import {
  createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';


interface AuthProviderProps{
  isLogged: boolean,
  signIn: () => void,
  signOut: () => void
}

const Context = createContext({} as AuthProviderProps);
export const useAuthContext = () => {
  return useContext(Context);
};

export const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);


  const signIn = (): void => {

  };

  const signOut = (): void => {

  };

  const memoizedValues = useMemo(() => {
    return { isLogged, signIn, signOut };
  }, [isLogged]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
